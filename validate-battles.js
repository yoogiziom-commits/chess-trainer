#!/usr/bin/env node
/**
 * validate-battles.js — CLI Validator & PGN Tactical Inspector for Battle Analysis
 *
 * Usage:
 *   1. Audit all battles in puzzles.js:
 *      node validate-battles.js
 *
 *   2. Inspect a raw PGN string (outputs clean `moves` array + exact move keys + arrow coords):
 *      node validate-battles.js --pgn "1. e4 e5 2. Nf3 d6 3. d4 Bg4 ..."
 *
 *   3. Validate an isolated batch file (JS or JSON array of battle objects) before merging:
 *      node validate-battles.js --file ./scratch-batch.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { ChessEngine, squareToCoords } = require('./chess-engine.js');
const { BATTLE_ANALYSES, PUZZLE_THEMES } = require('./puzzles.js');

const VALID_DIFFICULTIES = new Set(['easy', 'medium', 'hard']);
const VALID_ARROW_COLORS = new Set(['red', 'amber', 'green', 'blue']);

function parseMoveTokens(movesInput) {
  if (Array.isArray(movesInput)) return movesInput;
  if (typeof movesInput === 'string') {
    return movesInput
      .replace(/\{[^}]*\}/g, ' ')
      .replace(/\([^)]*\)/g, ' ')
      .split(/\s+/)
      .map((tok) => tok.replace(/^\d+\.+/, '').trim())
      .filter((tok) => tok && !['1-0', '0-1', '1/2-1/2', '*'].includes(tok));
  }
  return [];
}

/**
 * Mode 2: Inspect a PGN move string and print ready-to-paste `moves` + tactical coordinate cheat-sheet
 */
function inspectPgn(pgnString, startFen) {
  const tokens = parseMoveTokens(pgnString);
  const eng = new ChessEngine(startFen);
  const cleanSanList = [];
  const timeline = [];

  for (let i = 0; i < tokens.length; i++) {
    const raw = tokens[i];
    const moveObj = eng.makeMove(raw);
    if (!moveObj) {
      const legalSans = eng.getLegalMoves().map((m) => eng.moveToSan(m));
      console.error(`\n❌ ILLEGAL MOVE at token #${i + 1} ("${raw}")`);
      console.error(`   Position FEN: ${eng.toFen()}`);
      console.error(`   Previous moves: ${cleanSanList.slice(-6).join(' ')}`);
      console.error(`   Legal moves here: ${legalSans.join(', ')}`);
      process.exit(1);
    }

    cleanSanList.push(moveObj.san);
    const ply = i + 1;
    const moveNum = Math.ceil(ply / 2);
    const isWhite = moveObj.color === 'w';
    const label = isWhite ? `${moveNum}. ${moveObj.san}` : `${moveNum}... ${moveObj.san}`;
    const tInfo = eng.analyzePieceTargets(moveObj.to);

    const flags = [];
    if (moveObj.captured) flags.push(`x${moveObj.captured.toUpperCase()}`);
    if (moveObj.isCheckmateAfter) flags.push('CHECKMATE');
    else if (moveObj.inCheckAfter) flags.push('CHECK');

    const enemyTargets = tInfo.attackedEnemies.map(
      (a) => `${a.from}->${a.to}:red (${a.piece.toUpperCase()})`
    );
    const pins = tInfo.pinsOrXrays.map(
      (p) => `${p.from}->${p.behind}:amber (pins ${p.pinned})`
    );

    timeline.push({
      ply,
      label,
      coords: `${moveObj.from}->${moveObj.to}`,
      flags,
      enemyTargets,
      pins
    });
  }

  console.log('=== 1. VERIFIED MOVES ARRAY (Copy-Paste into `moves`) ===');
  const rows = [];
  for (let i = 0; i < cleanSanList.length; i += 10) {
    const chunk = cleanSanList
      .slice(i, i + 10)
      .map((s) => `'${s}'`)
      .join(', ');
    rows.push(`  ${chunk}`);
  }
  console.log(`moves: [\n${rows.join(',\n')}\n],\n`);

  console.log(
    `=== 2. TACTICAL TIMELINE (${cleanSanList.length} plies • Ends in Checkmate: ${eng.isCheckmate()}) ===`
  );
  for (const step of timeline) {
    const flagStr = step.flags.length ? ` [${step.flags.join(', ')}]` : '';
    const targetStr = step.enemyTargets.length
      ? ` | targets: ${step.enemyTargets.join(', ')}`
      : '';
    const pinStr = step.pins.length ? ` | pins: ${step.pins.join(', ')}` : '';
    console.log(
      `  ply ${String(step.ply).padStart(2, ' ')} | '${step.label}' (${step.coords})${flagStr}${targetStr}${pinStr}`
    );
  }
}

/**
 * Validates an array of battle objects
 */
function validateBattlesList(battles, labelSource = 'puzzles.js') {
  if (!Array.isArray(battles) || battles.length === 0) {
    throw new Error(`No battles found in ${labelSource}`);
  }

  const seenIds = new Set();
  const counts = { easy: 0, medium: 0, hard: 0 };
  let totalErrors = 0;

  const reportError = (battleId, msg) => {
    console.error(`❌ [${battleId}] ${msg}`);
    totalErrors++;
  };

  for (const b of battles) {
    const id = b && b.id ? b.id : 'UNKNOWN_ID';
    if (seenIds.has(id)) {
      reportError(id, `Duplicate battle id "${id}"`);
    }
    seenIds.add(id);

    if (!b.isBattleAnalysis) {
      reportError(id, `Missing "isBattleAnalysis: true"`);
    }
    if (!VALID_DIFFICULTIES.has(b.difficulty)) {
      reportError(id, `Invalid difficulty "${b.difficulty}" (must be easy, medium, or hard)`);
    } else {
      counts[b.difficulty]++;
    }

    if (!Array.isArray(b.themes) || b.themes.length === 0) {
      reportError(id, `Missing or empty "themes" array`);
    } else {
      for (const th of b.themes) {
        if (PUZZLE_THEMES && !PUZZLE_THEMES[th]) {
          reportError(id, `Unknown theme "${th}" (not in PUZZLE_THEMES)`);
        }
      }
    }

    for (const field of ['players', 'title', 'overview']) {
      if (!b[field] || typeof b[field].en !== 'string' || typeof b[field].pl !== 'string') {
        reportError(id, `Missing bilingual "${field}.en" or "${field}.pl"`);
      }
    }

    const tokens = parseMoveTokens(b.moves);
    if (tokens.length === 0) {
      reportError(id, `Empty "moves" list`);
      continue;
    }

    const sim = new ChessEngine(b.fen);
    const validLabelsByPly = [];
    const matchedAnnKeys = new Set();
    const anns = b.annotations || {};

    for (let i = 0; i < tokens.length; i++) {
      const moveObj = sim.makeMove(tokens[i]);
      if (!moveObj) {
        const legalSans = sim.getLegalMoves().map((m) => sim.moveToSan(m));
        reportError(
          id,
          `Illegal move at ply ${i + 1} (token "${tokens[i]}"). Legal moves: ${legalSans.join(', ')}`
        );
        break;
      }
      const ply = i + 1;
      const moveNum = Math.ceil(ply / 2);
      const isWhite = moveObj.color === 'w';
      const label = isWhite ? `${moveNum}. ${moveObj.san}` : `${moveNum}... ${moveObj.san}`;
      const labelNoCheck = label.replace(/[+#]+$/g, '');
      validLabelsByPly.push({ ply, label, labelNoCheck });

      for (const candidateKey of [label, labelNoCheck, String(ply)]) {
        if (anns[candidateKey]) {
          matchedAnnKeys.add(candidateKey);
        }
      }
    }

    // Validate all annotations
    const annKeys = Object.keys(anns);
    if (annKeys.length === 0) {
      reportError(id, `No annotations provided in "annotations"`);
    }

    for (const [k, ann] of Object.entries(anns)) {
      if (!matchedAnnKeys.has(k)) {
        // Suggest nearby move labels to make fixing move-number typos instant
        const numMatch = k.match(/^(\d+)/);
        let hint = '';
        if (numMatch) {
          const targetNum = parseInt(numMatch[1], 10);
          const nearby = validLabelsByPly
            .filter((item) => Math.abs(Math.ceil(item.ply / 2) - targetNum) <= 2)
            .map((item) => `'${item.label}'`)
            .join(', ');
          if (nearby) hint = ` (Nearby valid keys: ${nearby})`;
        }
        reportError(id, `Unmatched annotation key "${k}"${hint}`);
      }

      if (!ann.text || typeof ann.text.en !== 'string' || typeof ann.text.pl !== 'string') {
        reportError(id, `Annotation "${k}" is missing bilingual text.en or text.pl`);
      }

      for (const rawArr of ann.arrows || []) {
        if (typeof rawArr === 'string') {
          const [pair, colorPart] = rawArr.split(':');
          const [from, to] = (pair || '').split('->').map((s) => s.trim());
          const color = (colorPart || 'red').trim();
          if (!squareToCoords(from) || !squareToCoords(to)) {
            reportError(id, `Invalid arrow coordinates "${rawArr}" in annotation "${k}"`);
          }
          if (!VALID_ARROW_COLORS.has(color)) {
            reportError(
              id,
              `Invalid arrow color "${color}" in "${rawArr}" (allowed: red, amber, green, blue)`
            );
          }
        }
      }

      for (const tSq of ann.targets || []) {
        if (!squareToCoords(tSq)) {
          reportError(id, `Invalid target square "${tSq}" in annotation "${k}"`);
        }
      }
    }
  }

  if (totalErrors > 0) {
    console.error(`\n✖ Validation FAILED with ${totalErrors} error(s) in ${labelSource}.`);
    process.exit(1);
  }

  console.log(
    `✓ Verified ${battles.length} battles in ${labelSource} (Easy: ${counts.easy}, Medium: ${counts.medium}, Hard: ${counts.hard}) — 0 errors!`
  );
}

// CLI Entrypoint
const args = process.argv.slice(2);
const pgnIdx = args.indexOf('--pgn');
const fileIdx = args.indexOf('--file');

if (pgnIdx !== -1 && args[pgnIdx + 1]) {
  const fenIdx = args.indexOf('--fen');
  const customFen = fenIdx !== -1 ? args[fenIdx + 1] : undefined;
  inspectPgn(args[pgnIdx + 1], customFen);
} else if (fileIdx !== -1 && args[fileIdx + 1]) {
  const targetPath = path.resolve(process.cwd(), args[fileIdx + 1]);
  const loaded = require(targetPath);
  const list = Array.isArray(loaded) ? loaded : loaded.BATTLE_ANALYSES || loaded.battles;
  validateBattlesList(list, path.basename(targetPath));
} else {
  validateBattlesList(BATTLE_ANALYSES, 'puzzles.js');
}
