/**
 * Chess Tactics & Mate Trainer — Main Application Controller
 * Supports Desktop mouse & Mobile touch (Drag-and-Drop + Tap-to-Move),
 * 2-stage hints with SVG arrow overlay, EN/PL translations, and localStorage progress.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'szachy_mate_trainer_v2';

  const I18N = {
    en: {
      appTitle: 'MateTrainer',
      appSubtitle: 'Chess Calculation & Checkmate Puzzles',
      solvedLabel: 'Solved',
      streakLabel: 'Streak',
      bestLabel: 'Best',
      allPuzzlesBtn: 'Catalog',
      modePuzzlesTab: (n) => `Checkmate Puzzles (${n})`,
      modeOpeningsTab: (n) => `Openings & Traps (${n})`,
      modeMaterialTab: (n) => `Win Material (${n})`,
      modeDefenseTab: (n) => `Defense Mode (${n})`,
      modeFamousTab: (n) => `Famous Games (${n})`,
      modeAnalysisTab: (n) => `Battle Analysis (${n})`,
      modeRushTab: 'Speed Rush',
      analysisStepLabel: 'Move:',
      analysisAutoTargetOn: 'Auto-Targets: ON',
      analysisAutoTargetOff: 'Auto-Targets: OFF',
      analysisPrev: 'Prev',
      analysisNext: 'Next',
      analysisPlay: 'Auto',
      analysisPause: 'Pause',
      analysisDelayLabel: 'Speed (Auto):',
      legendMove: 'Move / Plan',
      legendThreat: 'Threat / Target',
      legendPin: 'Battery / Pin',
      legendAlt: 'Alternative',
      analysisOverviewPrefix: 'Battle Plan & Overview:',
      analysisCommentaryPrefix: 'Move & Target Analysis:',
      analysisStartPrompt:
        'Press Next (▶), Auto, or click any move below to step through the battle! (Click any piece on the board to inspect its targets)',
      analysisFinishedBanner: '🏁 Battle Complete! Click any move in the notation list to re-examine key moments.',
      analysisPliesCount: (n) => `${n} Plies`,
      pieceNames: {
        p: 'Pawn',
        n: 'Knight',
        b: 'Bishop',
        r: 'Rook',
        q: 'Queen',
        k: 'King'
      },
      autoInspectMsg: (colorName, pieceName, sq, enemyTargets, pinCount, kingZoneCount) => {
        const parts = [];
        if (enemyTargets.length) parts.push(`targets enemy pieces on ${enemyTargets.join(', ')}`);
        if (pinCount > 0) parts.push(`creates ${pinCount} X-ray/pin line(s)`);
        if (kingZoneCount > 0) parts.push(`controls ${kingZoneCount} square(s) near enemy King`);
        if (!parts.length) return `Inspecting ${colorName} ${pieceName} on ${sq} — no direct enemy piece targets right now (click square again to exit).`;
        return `Inspecting ${colorName} ${pieceName} on ${sq}: ${parts.join(' • ')}!`;
      },
      autoMoveAnalysis: (label, pieceName, from, to, isCapture, inCheck, isMate, enemyTargets, pins) => {
        if (isMate) return `${label} — Checkmate! The ${pieceName.toLowerCase()} on ${to} ends the battle.`;
        const actions = [];
        if (isCapture) actions.push(`captures on ${to}`);
        else actions.push(`moves ${from} → ${to}`);
        if (inCheck) actions.push(`delivers check`);
        if (enemyTargets.length) actions.push(`now targets enemy pieces on ${enemyTargets.join(', ')}`);
        if (pins.length) actions.push(`establishes an X-ray/pin along ${pins.join(', ')}`);
        return `${label} — ${pieceName} ${actions.join(', ')}.`;
      },
      rush3m: '⚡ 3 Min',
      rush5m: '⏱️ 5 Min',
      rushSurvival: '🛡️ Survival',
      rushBestLabel: 'Best:',
      rushTimerLabel: 'Time',
      rushScoreLabel: 'Score',
      rushLivesLabel: 'Lives',
      rushStartBtn: '▶ Start Speed Rush',
      rushStopBtn: '⏹ End Run',
      rushPlayAgainBtn: '↻ Play Rush Again',
      rushHistoryTitle: 'Run History (click any puzzle to review):',
      rushPromptIdle: 'Choose 3 Min, 5 Min, or Survival and press Start!',
      rushStatusMistake: (lives) =>
        `Mistake! -1 life (${lives} left). Loading next puzzle...`,
      rushStatusFinished: (score, isNewBest) =>
        `Rush Over! Final Score: ${score}${isNewBest ? ' 🏆 NEW RECORD!' : ''}`,
      filterDiffLabel: 'Difficulty:',
      filterDiffAll: 'All',
      filterDiffEasy: 'Easy',
      filterDiffMedium: 'Medium',
      filterDiffHard: 'Hard',
      filterMovesLabel: 'Goal:',
      filterAllMoves: 'All (M1–M4)',
      filterM1: 'Mate in 1',
      filterM2: 'Mate in 2',
      filterM3: 'Mate in 3',
      filterM4: 'Mate in 4',
      filterThemeLabel: 'Theme:',
      filterOpeningLabel: 'Opening:',
      filterAllThemes: 'All tactical themes',
      filterAllOpenings: 'All opening families',
      whiteToMove: 'White to move',
      blackToMove: 'Black to move',
      mateInN: (n) => `Mate in ${n}`,
      stepsCount: (n) => `${n} ${n === 1 ? 'Move' : 'Moves'}`,
      remainingMoves: (n) => (n === 1 ? '1 move to mate' : `${n} moves to mate`),
      promptStart: (colorStr, n) =>
        `${colorStr} — Find forced checkmate in ${n} ${n === 1 ? 'move' : 'moves'}!`,
      promptOpeningStart: (colorStr, n) =>
        `${colorStr} — Follow the guided opening trap (${n} steps to mate)!`,
      promptMaterialStart: (colorStr, n) =>
        `${colorStr} — Find the tactical combination that wins material (${n} ${n === 1 ? 'move' : 'moves'})!`,
      promptDefenseStart: (colorStr, n) =>
        `${colorStr} — Danger! Find the ONLY move that saves your king (${n} ${n === 1 ? 'move' : 'moves'})!`,
      promptFamousStart: (colorStr, n, isMate) =>
        isMate
          ? `${colorStr} — Play the legendary historical checkmate (${n} ${n === 1 ? 'move' : 'moves'})!`
          : `${colorStr} — Play the legendary historical combination (${n} ${n === 1 ? 'move' : 'moves'})!`,
      statusCorrectKeepGoing: (rem) =>
        `Great move! Keep calculating (${rem} ${rem === 1 ? 'move' : 'moves'} left)...`,
      statusOpponentThinking: 'Opponent is responding...',
      statusWrongMove: 'Not quite! That move does not work here. Try again!',
      statusWrongOpeningMove: 'Follow the opening trap line! Check the coach box below for guidance.',
      statusSolvedClean: 'Brilliant! Challenge solved flawlessly!',
      statusSolvedAssisted: 'Challenge completed.',
      hintBtn1: 'Hint (Piece)',
      hintBtn2: 'Hint (Move Arrow)',
      solutionBtn: 'Solution',
      retryBtn: 'Reset',
      flipBtn: 'Flip',
      prevBtn: 'Prev',
      nextBtn: 'Next',
      movesHeader: 'Move Notation',
      noMovesYet: 'Make a move on the board to begin...',
      guidedCoachPrefix: 'Guided Opening Coach:',
      hintPrefix: 'Tactical Hint:',
      explanationPrefix: 'Analysis:',
      promoTitle: 'Choose Promotion Piece',
      drawerTitle: 'Select a Challenge',
      resetStatsBtn: 'Reset Progress',
      resetStatsConfirm: 'Reset all solved puzzles and streaks?',
      difficultyNames: {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
      },
      boardThemeTitle: 'Switch board theme',
      soundTitle: 'Toggle sound effects'
    },
    pl: {
      appTitle: 'TrenerMata',
      appSubtitle: 'Trening Myślenia, Debiutów i Kombinacji Matowych',
      solvedLabel: 'Rozwiązane',
      streakLabel: 'Seria',
      bestLabel: 'Rekord',
      allPuzzlesBtn: 'Katalog',
      modePuzzlesTab: (n) => `Zadania Matowe (${n})`,
      modeOpeningsTab: (n) => `Debiuty i Pułapki (${n})`,
      modeMaterialTab: (n) => `Zdobądź Przewagę (${n})`,
      modeDefenseTab: (n) => `Obrona przed Matem (${n})`,
      modeFamousTab: (n) => `Słynne Partie (${n})`,
      modeAnalysisTab: (n) => `Analiza Partii (${n})`,
      modeRushTab: 'Tryb Błyskawiczny',
      analysisStepLabel: 'Posunięcie:',
      analysisAutoTargetOn: 'Auto-Cele: WŁ.',
      analysisAutoTargetOff: 'Auto-Cele: WYŁ.',
      analysisPrev: 'Cofnij',
      analysisNext: 'Dalej',
      analysisPlay: 'Auto',
      analysisPause: 'Pauza',
      analysisDelayLabel: 'Tempo (Auto):',
      legendMove: 'Ruch / Plan',
      legendThreat: 'Groźba / Cel',
      legendPin: 'Bateria / Związanie',
      legendAlt: 'Alternatywa',
      analysisOverviewPrefix: 'Plan bitwy i wprowadzenie:',
      analysisCommentaryPrefix: 'Analiza ruchu i celowania:',
      analysisStartPrompt:
        'Kliknij Dalej (▶), Auto lub dowolny ruch na liście, aby analizować bitwę krok po kroku! (Kliknij dowolną figurę na szachownicy, by zbadać jej cele)',
      analysisFinishedBanner: '🏁 Koniec bitwy! Możesz kliknąć dowolny ruch na liście poniżej, aby przeanalizować kluczowe momenty.',
      analysisPliesCount: (n) => `${n} półruchów`,
      pieceNames: {
        p: 'Pion',
        n: 'Skoczek',
        b: 'Goniec',
        r: 'Wieża',
        q: 'Hetman',
        k: 'Król'
      },
      autoInspectMsg: (colorName, pieceName, sq, enemyTargets, pinCount, kingZoneCount) => {
        const parts = [];
        if (enemyTargets.length) parts.push(`bierze na celownik wrogie figury: ${enemyTargets.join(', ')}`);
        if (pinCount > 0) parts.push(`tworzy wiązanie / rentgen (${pinCount})`);
        if (kingZoneCount > 0) parts.push(`kontroluje ${kingZoneCount} pól wokół króla przeciwnika`);
        if (!parts.length) return `Inspekcja: ${colorName} ${pieceName} na ${sq} — brak bezpośrednich celów ataku (kliknij ponownie, aby zamknąć).`;
        return `Inspekcja: ${colorName} ${pieceName} na ${sq} — ${parts.join(' • ')}!`;
      },
      autoMoveAnalysis: (label, pieceName, from, to, isCapture, inCheck, isMate, enemyTargets, pins) => {
        if (isMate) return `${label} — Szach-mat! ${pieceName} na ${to} kończy bitwę.`;
        const actions = [];
        if (isCapture) actions.push(`bije na polu ${to}`);
        else actions.push(`przechodzi ${from} → ${to}`);
        if (inCheck) actions.push(`daje szacha`);
        if (enemyTargets.length) actions.push(`bierze na celownik: ${enemyTargets.join(', ')}`);
        if (pins.length) actions.push(`tworzy rentgen/związanie na ${pins.join(', ')}`);
        return `${label} — ${pieceName} ${actions.join(', ')}.`;
      },
      rush3m: '⚡ 3 Min',
      rush5m: '⏱️ 5 Min',
      rushSurvival: '🛡️ Przetrwanie',
      rushBestLabel: 'Rekord:',
      rushTimerLabel: 'Czas',
      rushScoreLabel: 'Wynik',
      rushLivesLabel: 'Życia',
      rushStartBtn: '▶ Rozpocznij Rush',
      rushStopBtn: '⏹ Zakończ rundę',
      rushPlayAgainBtn: '↻ Zagraj ponownie w Rush',
      rushHistoryTitle: 'Historia rundy (kliknij zadanie, aby przeanalizować):',
      rushPromptIdle: 'Wybierz wariant (3 Min, 5 Min lub Przetrwanie) i kliknij Rozpocznij Rush!',
      rushStatusMistake: (lives) =>
        `Błąd! Tracisz życie (pozostało: ${lives}). Kolejne zadanie...`,
      rushStatusFinished: (score, isNewBest) =>
        `Koniec rundy! Twój wynik: ${score}${isNewBest ? ' 🏆 NOWY REKORD!' : ''}`,
      filterDiffLabel: 'Poziom:',
      filterDiffAll: 'Wszystkie',
      filterDiffEasy: 'Łatwy',
      filterDiffMedium: 'Średni',
      filterDiffHard: 'Trudny',
      filterMovesLabel: 'Cel:',
      filterAllMoves: 'Wszystkie (M1–M4)',
      filterM1: 'Mat w 1',
      filterM2: 'Mat w 2',
      filterM3: 'Mat w 3',
      filterM4: 'Mat w 4',
      filterThemeLabel: 'Motyw:',
      filterOpeningLabel: 'Debiut:',
      filterAllThemes: 'Wszystkie motywy taktyczne',
      filterAllOpenings: 'Wszystkie debiuty',
      whiteToMove: 'Ruch białych',
      blackToMove: 'Ruch czarnych',
      mateInN: (n) => `Mat w ${n}`,
      stepsCount: (n) => `${n} ${n === 1 ? 'ruch' : 'ruchy'}`,
      remainingMoves: (n) =>
        n === 1 ? 'Pozostał 1 ruch do mata' : `Pozostały ${n} ruchy do mata`,
      promptStart: (colorStr, n) =>
        `${colorStr} — Znajdź forsującego mata w ${n} ${n === 1 ? 'ruchu' : 'ruchach'}!`,
      promptOpeningStart: (colorStr, n) =>
        `${colorStr} — Rozegraj pułapkę debiutową (${n} kroków do mata)!`,
      promptMaterialStart: (colorStr, n) =>
        `${colorStr} — Znajdź kombinację zdobywającą przewagę materiałową (${n} ${n === 1 ? 'ruch' : 'ruchy'})!`,
      promptDefenseStart: (colorStr, n) =>
        `${colorStr} — Zagrożenie matem! Znajdź jedyną obronę lub kontratak (${n} ${n === 1 ? 'ruch' : 'ruchy'})!`,
      promptFamousStart: (colorStr, n, isMate) =>
        isMate
          ? `${colorStr} — Odtwórz słynny mat z historii szachów (${n} ${n === 1 ? 'ruch' : 'ruchy'})!`
          : `${colorStr} — Odtwórz słynną kombinację z historii szachów (${n} ${n === 1 ? 'ruch' : 'ruchy'})!`,
      statusCorrectKeepGoing: (rem) =>
        `Świetny ruch! Kontynuuj (${rem} do końca)...`,
      statusOpponentThinking: 'Przeciwnik odpowiada...',
      statusWrongMove: 'Niedokładny ruch! To nie wygrywa w tej pozycji. Spróbuj ponownie!',
      statusWrongOpeningMove: 'To nie jest ruch z tego wariantu! Sprawdź wskazówkę trenera poniżej.',
      statusSolvedClean: 'Brawo! Zadanie rozwiązane bezbłędnie!',
      statusSolvedAssisted: 'Zadanie ukończone.',
      hintBtn1: 'Podpowiedź (Figura)',
      hintBtn2: 'Podpowiedź (Ruch)',
      solutionBtn: 'Rozwiązanie',
      retryBtn: 'Od nowa',
      flipBtn: 'Obróć',
      prevBtn: 'Poprzednie',
      nextBtn: 'Następne',
      movesHeader: 'Zapis ruchów',
      noMovesYet: 'Wykonaj ruch na szachownicy, aby rozpocząć...',
      guidedCoachPrefix: 'Przewodnik Debiutowy:',
      hintPrefix: 'Wskazówka taktyczna:',
      explanationPrefix: 'Wyjaśnienie kombinacji:',
      promoTitle: 'Wybierz figurę do promocji',
      drawerTitle: 'Wybierz zadanie lub debiut',
      resetStatsBtn: 'Wyzeruj postępy',
      resetStatsConfirm: 'Czy na pewno chcesz wyzerować rozwiązane zadania i serię?',
      difficultyNames: {
        easy: 'Łatwy',
        medium: 'Średni',
        hard: 'Trudny'
      },
      boardThemeTitle: 'Zmień kolorystykę szachownicy',
      soundTitle: 'Włącz / wyłącz dźwięki'
    }
  };

  const BOARD_THEMES = ['emerald', 'classic', 'slate'];

  class MateTrainerApp {
    constructor() {
      this.sound = new window.SoundFX();
      this.state = this._loadState();
      this.sound.enabled = this.state.soundEnabled;

      this.mode = 'puzzles'; // 'puzzles' | 'openings'
      this.filterDifficulty = 'all';
      this.filterMoves = 'all';
      this.filterTheme = 'all';
      this.filteredPuzzles = [...window.PUZZLES];

      this.currentPuzzle = null;
      this.engine = null;
      this.playerColor = 'w';
      this.flipped = false;

      // Puzzle progress state
      this.solutionStep = 0; // index into currentPuzzle.solution
      this.status = 'playing'; // 'playing' | 'animating' | 'solved'
      this.hintLevel = 0; // 0 = none, 1 = piece + text, 2 = move arrow
      this.usedAssistance = false;
      this.hadMistakeThisAttempt = false;
      this.playedMoves = []; // [{ moveNumber, whiteSan, blackSan }]
      this.lastMoveSquares = null; // { from, to }
      this.wrongMoveSquare = null;

      // Interaction state (tap + drag)
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.pendingPromotion = null; // { from, to }
      this.dragState = null;
      this.timers = [];

      // Speed Rush state
      this.rush = {
        active: false,
        finished: false,
        variant: '3m', // '3m' | '5m' | 'survival'
        score: 0,
        lives: 3,
        secondsLeft: 180,
        intervalId: null,
        usedIds: new Set(),
        history: [] // [{ id, solved }]
      };

      // Battle Analysis state
      this.analysis = {
        ply: 0,
        snapshots: [],
        autoPlayId: null,
        delaySec: 5,
        countdownSec: 5,
        autoTargets: true,
        inspectSquare: null
      };

      this._cacheDom();
      this._bindEvents();
      this._applyThemeAndLang();
      this._populateThemeFilter();

      // Load initial puzzle (last active or first unsolved)
      const allItems = this._getAllItems();
      const initialPuzzle =
        allItems.find((p) => p.id === this.state.lastPuzzleId) ||
        window.PUZZLES.find((p) => !this.state.solved[p.id]) ||
        window.PUZZLES[0];
      if (initialPuzzle.isOpeningTrap) {
        this.setMode('openings', initialPuzzle.id);
      } else if (initialPuzzle.isWinMaterial) {
        this.setMode('material', initialPuzzle.id);
      } else if (initialPuzzle.isDefensePuzzle) {
        this.setMode('defense', initialPuzzle.id);
      } else if (initialPuzzle.isFamousGame) {
        this.setMode('famous', initialPuzzle.id);
      } else if (initialPuzzle.isBattleAnalysis) {
        this.setMode('analysis', initialPuzzle.id);
      } else {
        this.loadPuzzle(initialPuzzle.id);
      }
    }

    _getAllItems() {
      return [
        ...window.PUZZLES,
        ...(window.OPENING_TRAPS || []),
        ...(window.WIN_MATERIAL_PUZZLES || []),
        ...(window.DEFENSE_PUZZLES || []),
        ...(window.FAMOUS_GAMES || []),
        ...(window.BATTLE_ANALYSES || [])
      ];
    }

    _getRushPool() {
      return [
        ...window.PUZZLES,
        ...(window.WIN_MATERIAL_PUZZLES || []),
        ...(window.DEFENSE_PUZZLES || []),
        ...(window.FAMOUS_GAMES || [])
      ];
    }

    _getPool() {
      if (this.mode === 'openings') return window.OPENING_TRAPS || [];
      if (this.mode === 'material') return window.WIN_MATERIAL_PUZZLES || [];
      if (this.mode === 'defense') return window.DEFENSE_PUZZLES || [];
      if (this.mode === 'famous') return window.FAMOUS_GAMES || [];
      if (this.mode === 'analysis') return window.BATTLE_ANALYSES || [];
      if (this.mode === 'rush') return this._getRushPool();
      return window.PUZZLES;
    }

    setMode(newMode, targetId = null) {
      if (
        !['puzzles', 'openings', 'material', 'defense', 'famous', 'analysis', 'rush'].includes(
          newMode
        )
      )
        return;
      if (this.rush.active && newMode !== 'rush') {
        this._stopRushInterval();
        this.rush.active = false;
      }
      if (newMode !== 'analysis') {
        this._stopAnalysisAutoPlay();
      }
      this.mode = newMode;
      this.filterDifficulty = 'all';
      this.filterMoves = 'all';
      this.filterTheme = 'all';

      this.dom.modePuzzlesTab.classList.toggle('active', this.mode === 'puzzles');
      this.dom.modeOpeningsTab.classList.toggle('active', this.mode === 'openings');
      this.dom.modeMaterialTab.classList.toggle('active', this.mode === 'material');
      this.dom.modeDefenseTab.classList.toggle('active', this.mode === 'defense');
      this.dom.modeFamousTab.classList.toggle('active', this.mode === 'famous');
      if (this.dom.modeAnalysisTab) {
        this.dom.modeAnalysisTab.classList.toggle('active', this.mode === 'analysis');
      }
      this.dom.modeRushTab.classList.toggle('active', this.mode === 'rush');

      this.dom.filterBar.classList.toggle('hidden', this.mode === 'rush');
      this.dom.rushPanel.classList.toggle('hidden', this.mode !== 'rush');
      if (this.dom.analysisPanel) {
        this.dom.analysisPanel.classList.toggle('hidden', this.mode !== 'analysis');
      }
      if (this.dom.trainingControlsGrid) {
        this.dom.trainingControlsGrid.classList.toggle('hidden', this.mode === 'analysis');
      }
      this.dom.movesFilterWrap.classList.toggle('hidden', this.mode !== 'puzzles');

      this._applyThemeAndLang();
      this._populateThemeFilter();
      this._updateFilteredPuzzles(false);

      if (this.mode === 'rush') {
        this._renderRushHud();
        this._renderRushHistory();
        if (!this.rush.active) {
          this.status = 'idle_rush';
          const firstEasy =
            window.PUZZLES.find((p) => p.difficulty === 'easy') || window.PUZZLES[0];
          this.loadPuzzle(firstEasy.id, true);
        }
        return;
      }

      const pool = this._getPool();
      const chosen =
        (targetId && pool.find((p) => p.id === targetId)) ||
        pool.find((p) => !this.state.solved[p.id]) ||
        pool[0];
      if (chosen) {
        this.loadPuzzle(chosen.id);
      }
    }

    _loadState() {
      const defaults = {
        lang: 'pl',
        solved: {}, // id -> 'clean' | 'assisted'
        streak: 0,
        bestStreak: 0,
        rushBest: { '3m': 0, '5m': 0, survival: 0 },
        lastPuzzleId: 'm1-01',
        soundEnabled: true,
        boardTheme: 'emerald'
      };
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaults;
        const parsed = JSON.parse(raw);
        return {
          ...defaults,
          ...parsed,
          rushBest: { ...defaults.rushBest, ...(parsed.rushBest || {}) }
        };
      } catch (_) {
        return defaults;
      }
    }

    _saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (_) {}
    }

    _clearTimers() {
      while (this.timers.length) {
        clearTimeout(this.timers.pop());
      }
    }

    _schedule(fn, ms) {
      const id = setTimeout(fn, ms);
      this.timers.push(id);
      return id;
    }

    t(key) {
      const dict = I18N[this.state.lang] || I18N.pl;
      return dict[key] !== undefined ? dict[key] : I18N.pl[key];
    }

    _cacheDom() {
      this.dom = {
        appTitle: document.getElementById('appTitle'),
        appSubtitle: document.getElementById('appSubtitle'),
        solvedCount: document.getElementById('solvedCount'),
        solvedLabel: document.getElementById('solvedLabel'),
        streakCount: document.getElementById('streakCount'),
        streakLabel: document.getElementById('streakLabel'),
        bestCount: document.getElementById('bestCount'),
        bestLabel: document.getElementById('bestLabel'),
        themeBtn: document.getElementById('themeBtn'),
        soundBtn: document.getElementById('soundBtn'),
        langBtn: document.getElementById('langBtn'),
        openDrawerBtn: document.getElementById('openDrawerBtn'),
        allPuzzlesBtnText: document.getElementById('allPuzzlesBtnText'),

        modePuzzlesTab: document.getElementById('modePuzzlesTab'),
        modeOpeningsTab: document.getElementById('modeOpeningsTab'),
        modeMaterialTab: document.getElementById('modeMaterialTab'),
        modeDefenseTab: document.getElementById('modeDefenseTab'),
        modeFamousTab: document.getElementById('modeFamousTab'),
        modeAnalysisTab: document.getElementById('modeAnalysisTab'),
        modeRushTab: document.getElementById('modeRushTab'),
        modePuzzlesText: document.getElementById('modePuzzlesText'),
        modeOpeningsText: document.getElementById('modeOpeningsText'),
        modeMaterialText: document.getElementById('modeMaterialText'),
        modeDefenseText: document.getElementById('modeDefenseText'),
        modeFamousText: document.getElementById('modeFamousText'),
        modeAnalysisText: document.getElementById('modeAnalysisText'),
        modeRushText: document.getElementById('modeRushText'),
        filterBar: document.getElementById('filterBar'),
        movesFilterWrap: document.getElementById('movesFilterWrap'),

        analysisPanel: document.getElementById('analysisPanel'),
        analysisStepLabel: document.getElementById('analysisStepLabel'),
        analysisStepVal: document.getElementById('analysisStepVal'),
        analysisMoveBadge: document.getElementById('analysisMoveBadge'),
        analysisAutoTargetBtn: document.getElementById('analysisAutoTargetBtn'),
        analysisAutoTargetText: document.getElementById('analysisAutoTargetText'),
        analysisFlipBtn: document.getElementById('analysisFlipBtn'),
        analysisProgressFill: document.getElementById('analysisProgressFill'),
        analysisFirstBtn: document.getElementById('analysisFirstBtn'),
        analysisPrevBtn: document.getElementById('analysisPrevBtn'),
        analysisPrevText: document.getElementById('analysisPrevText'),
        analysisPlayBtn: document.getElementById('analysisPlayBtn'),
        analysisPlayIcon: document.getElementById('analysisPlayIcon'),
        analysisPlayText: document.getElementById('analysisPlayText'),
        analysisNextBtn: document.getElementById('analysisNextBtn'),
        analysisNextText: document.getElementById('analysisNextText'),
        analysisLastBtn: document.getElementById('analysisLastBtn'),
        analysisDelayLabel: document.getElementById('analysisDelayLabel'),
        analysisDelayGroup: document.getElementById('analysisDelayGroup'),
        legendMoveText: document.getElementById('legendMoveText'),
        legendThreatText: document.getElementById('legendThreatText'),
        legendPinText: document.getElementById('legendPinText'),
        legendAltText: document.getElementById('legendAltText'),
        trainingControlsGrid: document.getElementById('trainingControlsGrid'),

        rushPanel: document.getElementById('rushPanel'),
        rushVariantGroup: document.getElementById('rushVariantGroup'),
        rushBtn3m: document.getElementById('rushBtn3m'),
        rushBtn5m: document.getElementById('rushBtn5m'),
        rushBtnSurvival: document.getElementById('rushBtnSurvival'),
        rushBestLabel: document.getElementById('rushBestLabel'),
        rushBestVal: document.getElementById('rushBestVal'),
        rushTimerLabel: document.getElementById('rushTimerLabel'),
        rushTimerVal: document.getElementById('rushTimerVal'),
        rushScoreLabel: document.getElementById('rushScoreLabel'),
        rushScoreVal: document.getElementById('rushScoreVal'),
        rushLivesLabel: document.getElementById('rushLivesLabel'),
        rushLivesVal: document.getElementById('rushLivesVal'),
        rushStartStopBtn: document.getElementById('rushStartStopBtn'),
        rushHistoryWrap: document.getElementById('rushHistoryWrap'),
        rushHistoryTitle: document.getElementById('rushHistoryTitle'),
        rushHistoryList: document.getElementById('rushHistoryList'),
        navControlsRow: document.getElementById('navControlsRow'),

        filterDiffLabel: document.getElementById('filterDiffLabel'),
        filterDiffGroup: document.getElementById('filterDiffGroup'),
        filterMovesGroup: document.getElementById('filterMovesGroup'),
        filterThemeSelect: document.getElementById('filterThemeSelect'),
        filterMovesLabel: document.getElementById('filterMovesLabel'),
        filterThemeLabel: document.getElementById('filterThemeLabel'),

        boardContainer: document.getElementById('boardContainer'),
        boardGrid: document.getElementById('boardGrid'),
        arrowSvg: document.getElementById('arrowSvg'),
        dragGhost: document.getElementById('dragGhost'),

        turnBadge: document.getElementById('turnBadge'),
        turnDot: document.getElementById('turnDot'),
        turnText: document.getElementById('turnText'),
        mateBadge: document.getElementById('mateBadge'),
        puzzleIdBadge: document.getElementById('puzzleIdBadge'),
        puzzleSolvedBadge: document.getElementById('puzzleSolvedBadge'),
        puzzleTitle: document.getElementById('puzzleTitle'),
        puzzleThemes: document.getElementById('puzzleThemes'),

        statusBanner: document.getElementById('statusBanner'),
        statusIcon: document.getElementById('statusIcon'),
        statusText: document.getElementById('statusText'),

        coachBox: document.getElementById('coachBox'),
        coachLabel: document.getElementById('coachLabel'),
        coachText: document.getElementById('coachText'),

        movesHeader: document.getElementById('movesHeader'),
        movesList: document.getElementById('movesList'),

        hintBtn: document.getElementById('hintBtn'),
        hintBtnText: document.getElementById('hintBtnText'),
        solutionBtn: document.getElementById('solutionBtn'),
        solutionBtnText: document.getElementById('solutionBtnText'),
        retryBtn: document.getElementById('retryBtn'),
        retryBtnText: document.getElementById('retryBtnText'),
        flipBtn: document.getElementById('flipBtn'),
        flipBtnText: document.getElementById('flipBtnText'),
        prevBtn: document.getElementById('prevBtn'),
        prevBtnText: document.getElementById('prevBtnText'),
        nextBtn: document.getElementById('nextBtn'),
        nextBtnText: document.getElementById('nextBtnText'),

        promoModal: document.getElementById('promoModal'),
        promoTitle: document.getElementById('promoTitle'),
        promoChoices: document.getElementById('promoChoices'),

        puzzleDrawer: document.getElementById('puzzleDrawer'),
        drawerBackdrop: document.getElementById('drawerBackdrop'),
        drawerTitle: document.getElementById('drawerTitle'),
        closeDrawerBtn: document.getElementById('closeDrawerBtn'),
        drawerList: document.getElementById('drawerList'),
        resetStatsBtn: document.getElementById('resetStatsBtn')
      };
    }

    _bindEvents() {
      // Language toggle
      this.dom.langBtn.addEventListener('click', () => {
        this.state.lang = this.state.lang === 'en' ? 'pl' : 'en';
        this._saveState();
        this._applyThemeAndLang();
        this._populateThemeFilter();
        this._renderAll();
      });

      // Sound toggle
      this.dom.soundBtn.addEventListener('click', () => {
        this.state.soundEnabled = !this.state.soundEnabled;
        this.sound.enabled = this.state.soundEnabled;
        this._saveState();
        this._updateSoundButton();
        if (this.sound.enabled) this.sound.move();
      });

      // Board color theme toggle
      this.dom.themeBtn.addEventListener('click', () => {
        const idx = BOARD_THEMES.indexOf(this.state.boardTheme);
        this.state.boardTheme = BOARD_THEMES[(idx + 1) % BOARD_THEMES.length];
        this._saveState();
        this._applyThemeAndLang();
      });

      // Mode switcher tabs (7 Training & Analysis Modes)
      this.dom.modePuzzlesTab.addEventListener('click', () => this.setMode('puzzles'));
      this.dom.modeOpeningsTab.addEventListener('click', () => this.setMode('openings'));
      this.dom.modeMaterialTab.addEventListener('click', () => this.setMode('material'));
      this.dom.modeDefenseTab.addEventListener('click', () => this.setMode('defense'));
      this.dom.modeFamousTab.addEventListener('click', () => this.setMode('famous'));
      if (this.dom.modeAnalysisTab) {
        this.dom.modeAnalysisTab.addEventListener('click', () => this.setMode('analysis'));
      }
      this.dom.modeRushTab.addEventListener('click', () => this.setMode('rush'));

      // Battle Analysis VCR controls
      if (this.dom.analysisFirstBtn) {
        this.dom.analysisFirstBtn.addEventListener('click', () => {
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(0, false);
        });
        this.dom.analysisPrevBtn.addEventListener('click', () => {
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(this.analysis.ply - 1, false);
        });
        this.dom.analysisPlayBtn.addEventListener('click', () => {
          this._toggleAnalysisAutoPlay();
        });
        this.dom.analysisNextBtn.addEventListener('click', () => {
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(this.analysis.ply + 1, true);
        });
        this.dom.analysisLastBtn.addEventListener('click', () => {
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(this.analysis.snapshots.length - 1, true);
        });
        this.dom.analysisAutoTargetBtn.addEventListener('click', () => {
          this.analysis.autoTargets = !this.analysis.autoTargets;
          this._renderAnalysisPanel();
          this._renderBoard();
        });
        this.dom.analysisFlipBtn.addEventListener('click', () => {
          this.flipped = !this.flipped;
          this._renderBoard();
        });
        if (this.dom.analysisDelayGroup) {
          this.dom.analysisDelayGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-delay]');
            if (!btn) return;
            const sec = parseInt(btn.dataset.delay, 10);
            if (![5, 10, 15, 30, 45, 60].includes(sec)) return;
            this.analysis.delaySec = sec;
            this.analysis.countdownSec = sec;
            this._renderAnalysisPanel();
          });
        }
      }

      // Keyboard Left / Right arrow support in Battle Analysis mode
      window.addEventListener('keydown', (e) => {
        if (this.mode !== 'analysis' || !this.analysis.snapshots.length) return;
        if (e.target && ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(this.analysis.ply + 1, true);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(this.analysis.ply - 1, false);
        }
      });

      // Speed Rush variant switcher & Start/Stop button
      this.dom.rushVariantGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-variant]');
        if (!btn || this.rush.active) return;
        this._setRushVariant(btn.dataset.variant);
      });

      this.dom.rushStartStopBtn.addEventListener('click', () => {
        if (this.rush.active) {
          this._endRush('stopped');
        } else {
          this._startRush();
        }
      });

      // Difficulty tier switcher (All / Easy / Medium / Hard)
      this.dom.filterDiffGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-diff]');
        if (!btn) return;
        this.filterDifficulty = btn.dataset.diff;
        // Reset move filter to 'all' so user sees all puzzles of the chosen difficulty
        this.filterMoves = 'all';
        this._updateFilteredPuzzles(true);
      });

      // Moves-to-mate filter buttons
      this.dom.filterMovesGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-moves]');
        if (!btn) return;
        this.filterMoves = btn.dataset.moves;
        this._updateFilteredPuzzles(true);
      });

      // Theme filter dropdown
      this.dom.filterThemeSelect.addEventListener('change', (e) => {
        this.filterTheme = e.target.value;
        this._updateFilteredPuzzles(true);
      });

      // Action buttons
      this.dom.hintBtn.addEventListener('click', () => this.showHint());
      this.dom.solutionBtn.addEventListener('click', () => this.playSolution());
      this.dom.retryBtn.addEventListener('click', () => this.loadPuzzle(this.currentPuzzle.id));
      this.dom.flipBtn.addEventListener('click', () => {
        this.flipped = !this.flipped;
        this._renderBoard();
      });
      this.dom.prevBtn.addEventListener('click', () => this.navigatePuzzle(-1));
      this.dom.nextBtn.addEventListener('click', () => this.navigatePuzzle(1));

      // Drawer open/close
      this.dom.openDrawerBtn.addEventListener('click', () => this.toggleDrawer(true));
      this.dom.closeDrawerBtn.addEventListener('click', () => this.toggleDrawer(false));
      this.dom.drawerBackdrop.addEventListener('click', () => this.toggleDrawer(false));

      this.dom.resetStatsBtn.addEventListener('click', () => {
        if (window.confirm(this.t('resetStatsConfirm'))) {
          this.state.solved = {};
          this.state.streak = 0;
          this.state.bestStreak = 0;
          this.state.rushBest = { '3m': 0, '5m': 0, survival: 0 };
          this._saveState();
          this._renderStats();
          this._renderRushHud();
          this._renderDrawerList();
          this._renderPuzzleHeader();
        }
      });

      // Pointer events on the board for unified PC mouse + Mobile touch drag & tap
      this.dom.boardGrid.addEventListener('pointerdown', (e) => this._onBoardPointerDown(e));
      window.addEventListener('pointermove', (e) => this._onWindowPointerMove(e));
      window.addEventListener('pointerup', (e) => this._onWindowPointerUp(e));
      window.addEventListener('pointercancel', () => this._cancelDrag());
    }

    _applyThemeAndLang() {
      document.documentElement.lang = this.state.lang;
      document.body.dataset.boardTheme = this.state.boardTheme;

      this.dom.appTitle.textContent = this.t('appTitle');
      this.dom.appSubtitle.textContent = this.t('appSubtitle');
      this.dom.solvedLabel.textContent = this.t('solvedLabel');
      this.dom.streakLabel.textContent = this.t('streakLabel');
      this.dom.bestLabel.textContent = this.t('bestLabel');
      this.dom.allPuzzlesBtnText.textContent = this.t('allPuzzlesBtn');
      this.dom.langBtn.textContent = this.state.lang.toUpperCase();
      this.dom.themeBtn.title = this.t('boardThemeTitle');
      this.dom.soundBtn.title = this.t('soundTitle');
      this._updateSoundButton();

      this.dom.modePuzzlesText.textContent = this.t('modePuzzlesTab')(window.PUZZLES.length);
      this.dom.modeOpeningsText.textContent = this.t('modeOpeningsTab')(
        (window.OPENING_TRAPS || []).length
      );
      this.dom.modeMaterialText.textContent = this.t('modeMaterialTab')(
        (window.WIN_MATERIAL_PUZZLES || []).length
      );
      this.dom.modeDefenseText.textContent = this.t('modeDefenseTab')(
        (window.DEFENSE_PUZZLES || []).length
      );
      this.dom.modeFamousText.textContent = this.t('modeFamousTab')(
        (window.FAMOUS_GAMES || []).length
      );
      if (this.dom.modeAnalysisText) {
        this.dom.modeAnalysisText.textContent = this.t('modeAnalysisTab')(
          (window.BATTLE_ANALYSES || []).length
        );
      }
      this.dom.modeRushText.textContent = this.t('modeRushTab');

      if (this.dom.analysisStepLabel) {
        this.dom.analysisStepLabel.textContent = this.t('analysisStepLabel');
        this.dom.analysisPrevText.textContent = this.t('analysisPrev');
        this.dom.analysisNextText.textContent = this.t('analysisNext');
        if (this.dom.analysisDelayLabel) {
          this.dom.analysisDelayLabel.textContent = this.t('analysisDelayLabel');
        }
        this.dom.legendMoveText.textContent = this.t('legendMove');
        this.dom.legendThreatText.textContent = this.t('legendThreat');
        this.dom.legendPinText.textContent = this.t('legendPin');
        this.dom.legendAltText.textContent = this.t('legendAlt');
        this._renderAnalysisPanel();
      }

      this.dom.rushBtn3m.textContent = this.t('rush3m');
      this.dom.rushBtn5m.textContent = this.t('rush5m');
      this.dom.rushBtnSurvival.textContent = this.t('rushSurvival');
      this.dom.rushBestLabel.textContent = this.t('rushBestLabel');
      this.dom.rushTimerLabel.textContent = this.t('rushTimerLabel');
      this.dom.rushScoreLabel.textContent = this.t('rushScoreLabel');
      this.dom.rushLivesLabel.textContent = this.t('rushLivesLabel');
      this.dom.rushHistoryTitle.textContent = this.t('rushHistoryTitle');
      this._renderRushHud();

      this.dom.filterDiffLabel.textContent = this.t('filterDiffLabel');
      this.dom.filterMovesLabel.textContent = this.t('filterMovesLabel');
      this.dom.filterThemeLabel.textContent =
        this.mode === 'openings' ? this.t('filterOpeningLabel') : this.t('filterThemeLabel');

      const pool = this._getPool();
      const diffCounts = {
        all: pool.length,
        easy: pool.filter((p) => p.difficulty === 'easy').length,
        medium: pool.filter((p) => p.difficulty === 'medium').length,
        hard: pool.filter((p) => p.difficulty === 'hard').length
      };
      const diffFilterLabels = {
        all: `${this.t('filterDiffAll')} (${diffCounts.all})`,
        easy: `${this.t('filterDiffEasy')} (${diffCounts.easy})`,
        medium: `${this.t('filterDiffMedium')} (${diffCounts.medium})`,
        hard: `${this.t('filterDiffHard')} (${diffCounts.hard})`
      };
      this.dom.filterDiffGroup.querySelectorAll('[data-diff]').forEach((btn) => {
        const key = btn.dataset.diff;
        if (diffFilterLabels[key]) btn.textContent = diffFilterLabels[key];
        btn.classList.toggle('active', key === this.filterDifficulty);
      });

      const moveFilterLabels = {
        all: this.t('filterAllMoves'),
        '1': this.t('filterM1'),
        '2': this.t('filterM2'),
        '3': this.t('filterM3'),
        '4': this.t('filterM4')
      };
      this.dom.filterMovesGroup.querySelectorAll('[data-moves]').forEach((btn) => {
        const key = btn.dataset.moves;
        if (moveFilterLabels[key]) btn.textContent = moveFilterLabels[key];
        btn.classList.toggle('active', key === this.filterMoves);
      });

      this.dom.solutionBtnText.textContent = this.t('solutionBtn');
      this.dom.retryBtnText.textContent = this.t('retryBtn');
      this.dom.flipBtnText.textContent = this.t('flipBtn');
      this.dom.prevBtnText.textContent = this.t('prevBtn');
      this.dom.nextBtnText.textContent = this.t('nextBtn');
      this.dom.movesHeader.textContent = this.t('movesHeader');
      this.dom.promoTitle.textContent = this.t('promoTitle');
      this.dom.drawerTitle.textContent = this.t('drawerTitle');
      this.dom.resetStatsBtn.textContent = this.t('resetStatsBtn');
    }

    _updateSoundButton() {
      this.dom.soundBtn.innerHTML = this.state.soundEnabled
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
      this.dom.soundBtn.classList.toggle('muted', !this.state.soundEnabled);
    }

    _populateThemeFilter() {
      const currentVal = this.filterTheme;
      const lang = this.state.lang;
      const pool = this._getPool();

      if (this.mode === 'openings') {
        const families = window.OPENING_FAMILIES || {};
        let html = `<option value="all">${this.t('filterAllOpenings')}</option>`;
        for (const [key, labels] of Object.entries(families)) {
          const count = pool.filter((p) => p.openingFamily === key).length;
          if (count > 0) {
            html += `<option value="${key}">${labels[lang] || labels.en} (${count})</option>`;
          }
        }
        this.dom.filterThemeSelect.innerHTML = html;
      } else {
        const themes = window.PUZZLE_THEMES;
        let html = `<option value="all">${this.t('filterAllThemes')}</option>`;
        for (const [key, labels] of Object.entries(themes)) {
          const count = pool.filter((p) => p.themes.includes(key)).length;
          if (count > 0) {
            html += `<option value="${key}">${labels[lang] || labels.en} (${count})</option>`;
          }
        }
        this.dom.filterThemeSelect.innerHTML = html;
      }
      this.dom.filterThemeSelect.value = currentVal;
    }

    _updateFilteredPuzzles(jumpIfCurrentExcluded = false) {
      this.dom.filterDiffGroup.querySelectorAll('[data-diff]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.diff === this.filterDifficulty);
      });
      this.dom.filterMovesGroup.querySelectorAll('[data-moves]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.moves === this.filterMoves);
      });

      const pool = this._getPool();
      this.filteredPuzzles = pool.filter((p) => {
        const matchDiff =
          this.filterDifficulty === 'all' || p.difficulty === this.filterDifficulty;
        const matchMoves =
          this.mode !== 'puzzles' ||
          this.filterMoves === 'all' ||
          String(p.movesToMate) === String(this.filterMoves);
        const matchTheme =
          this.filterTheme === 'all' ||
          (this.mode === 'openings'
            ? p.openingFamily === this.filterTheme
            : p.themes.includes(this.filterTheme));
        return matchDiff && matchMoves && matchTheme;
      });

      if (this.filteredPuzzles.length === 0) {
        // Fallback if intersection is empty: reset theme and move filter while keeping difficulty
        this.filterTheme = 'all';
        this.filterMoves = 'all';
        this.dom.filterThemeSelect.value = 'all';
        this.dom.filterMovesGroup.querySelectorAll('[data-moves]').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.moves === 'all');
        });
        this.filteredPuzzles = pool.filter(
          (p) => this.filterDifficulty === 'all' || p.difficulty === this.filterDifficulty
        );
      }

      if (
        jumpIfCurrentExcluded &&
        this.currentPuzzle &&
        !this.filteredPuzzles.some((p) => p.id === this.currentPuzzle.id)
      ) {
        const nextUnsolved =
          this.filteredPuzzles.find((p) => !this.state.solved[p.id]) || this.filteredPuzzles[0];
        this.loadPuzzle(nextUnsolved.id);
      } else {
        this._renderDrawerList();
      }
    }

    loadPuzzle(puzzleId, keepIdleRush = false) {
      this._clearTimers();
      this._stopAnalysisAutoPlay();
      const pool = this._getPool();
      const allItems = this._getAllItems();
      const puzzle =
        pool.find((p) => p.id === puzzleId) ||
        allItems.find((p) => p.id === puzzleId) ||
        pool[0];
      this.currentPuzzle = puzzle;
      this.state.lastPuzzleId = puzzle.id;
      this._saveState();

      this.solutionStep = 0;
      this.hintLevel = 0;
      this.usedAssistance = false;
      this.hadMistakeThisAttempt = false;
      this.playedMoves = [];
      this.lastMoveSquares = null;
      this.wrongMoveSquare = null;
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.pendingPromotion = null;
      this.dom.promoModal.classList.add('hidden');

      if (puzzle.isBattleAnalysis) {
        this.analysis.snapshots = this._buildBattleSnapshots(puzzle);
        this.analysis.ply = 0;
        this.analysis.inspectSquare = null;
        this.engine = new window.ChessEngine(this.analysis.snapshots[0].fen);
        this.playerColor = puzzle.perspective === 'b' ? 'b' : 'w';
        this.flipped = puzzle.perspective === 'b';
        this.status = 'viewing';
        this._renderAll();
        return;
      }

      this.engine = new window.ChessEngine(puzzle.fen);
      this.playerColor = this.engine.turn;
      this.flipped = this.playerColor === 'b';
      this.status = keepIdleRush ? 'idle_rush' : 'playing';

      this._renderAll();
    }

    // ========================================================
    // BATTLE ANALYSIS (ANALIZA PARTII) ENGINE & TARGETING
    // ========================================================
    _parseMoveTokens(movesInput) {
      if (Array.isArray(movesInput)) return movesInput;
      if (typeof movesInput === 'string') {
        return movesInput
          .replace(/\{[^}]*\}/g, ' ')
          .split(/\s+/)
          .map((tok) => tok.replace(/^\d+\.+/, '').trim())
          .filter((tok) => tok && !['1-0', '0-1', '1/2-1/2', '*'].includes(tok));
      }
      return [];
    }

    _parseArrowShorthand(item) {
      if (!item) return null;
      if (typeof item === 'object' && item.from && item.to) {
        return {
          from: item.from,
          to: item.to,
          color: item.color || 'red',
          dashed: Boolean(item.dashed)
        };
      }
      if (typeof item === 'string') {
        // Format: 'c4->f7:red' or 'c4->f7'
        const [pair, colorPart] = item.split(':');
        const [from, to] = pair.split('->').map((s) => s.trim());
        if (from && to && from.length === 2 && to.length === 2) {
          const color = (colorPart || 'red').trim();
          return {
            from,
            to,
            color,
            dashed: color === 'blue'
          };
        }
      }
      return null;
    }

    _buildBattleSnapshots(battle) {
      const startFen =
        battle.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      const sim = new window.ChessEngine(startFen);
      const tokens = this._parseMoveTokens(battle.moves);
      const anns = battle.annotations || {};

      const snapshots = [
        {
          ply: 0,
          fen: sim.toFen(),
          moveObj: null,
          moveNum: 0,
          isWhite: true,
          label: 'Start',
          annotation: null,
          autoArrows: [],
          autoTargets: [],
          targetInfo: { attackedEnemies: [], pinsOrXrays: [], kingZoneSquares: [] }
        }
      ];

      for (let i = 0; i < tokens.length; i++) {
        const moveObj = sim.makeMove(tokens[i]);
        if (!moveObj) break;
        const ply = snapshots.length;
        const moveNum = Math.ceil(ply / 2);
        const isWhite = moveObj.color === 'w';
        const label = isWhite ? `${moveNum}. ${moveObj.san}` : `${moveNum}... ${moveObj.san}`;
        const labelNoCheck = label.replace(/[+#]+$/g, '');

        const annotation =
          anns[label] ||
          anns[labelNoCheck] ||
          anns[ply] ||
          anns[String(ply)] ||
          null;

        const targetInfo = sim.analyzePieceTargets(moveObj.to);
        const autoArrows = [];
        const autoTargetsSet = new Set();

        for (const att of targetInfo.attackedEnemies) {
          autoArrows.push({ from: att.from, to: att.to, color: 'red', dashed: true });
          autoTargetsSet.add(att.to);
        }
        for (const pin of targetInfo.pinsOrXrays) {
          autoArrows.push({ from: pin.from, to: pin.behind, color: 'amber', dashed: true });
          autoTargetsSet.add(pin.pinned);
          autoTargetsSet.add(pin.behind);
        }
        if (targetInfo.attackedEnemies.length === 0 && targetInfo.kingZoneSquares.length > 0) {
          for (const kz of targetInfo.kingZoneSquares.slice(0, 2)) {
            autoArrows.push({ from: kz.from, to: kz.to, color: 'amber', dashed: true });
          }
        }

        snapshots.push({
          ply,
          fen: sim.toFen(),
          moveObj,
          moveNum,
          isWhite,
          label,
          annotation,
          autoArrows,
          autoTargets: Array.from(autoTargetsSet),
          targetInfo
        });
      }

      return snapshots;
    }

    _stepAnalysisTo(targetPly, playAudio = true) {
      if (!this.analysis.snapshots.length) return;
      const maxPly = this.analysis.snapshots.length - 1;
      const clamped = Math.max(0, Math.min(maxPly, targetPly));
      this.analysis.ply = clamped;
      this.analysis.inspectSquare = null;

      const snap = this.analysis.snapshots[clamped];
      this.engine = new window.ChessEngine(snap.fen);
      this.lastMoveSquares = snap.moveObj
        ? { from: snap.moveObj.from, to: snap.moveObj.to }
        : null;

      if (playAudio && snap.moveObj) {
        this._playMoveSound(snap.moveObj);
      }

      if (clamped === maxPly && maxPly > 0 && this.currentPuzzle) {
        if (!this.state.solved[this.currentPuzzle.id]) {
          this.state.solved[this.currentPuzzle.id] = 'clean';
          this._saveState();
        }
      }

      this._renderAll();
    }

    _stopAnalysisAutoPlay() {
      if (this.analysis && this.analysis.autoPlayId) {
        clearInterval(this.analysis.autoPlayId);
        this.analysis.autoPlayId = null;
      }
      this._renderAnalysisPanel();
    }

    _toggleAnalysisAutoPlay() {
      if (this.analysis.autoPlayId) {
        this._stopAnalysisAutoPlay();
        return;
      }
      const maxPly = this.analysis.snapshots.length - 1;
      if (maxPly <= 0) return;
      if (this.analysis.ply >= maxPly) {
        this._stepAnalysisTo(0, false);
      }
      // If starting at ply 0, immediately show move 1 so user doesn't wait up to 60s for the opening move
      if (this.analysis.ply === 0 && maxPly > 0) {
        this._stepAnalysisTo(1, true);
      }
      this.analysis.countdownSec = this.analysis.delaySec;
      this.analysis.autoPlayId = setInterval(() => {
        if (this.mode !== 'analysis') {
          this._stopAnalysisAutoPlay();
          return;
        }
        if (this.analysis.ply >= this.analysis.snapshots.length - 1) {
          this._stopAnalysisAutoPlay();
          return;
        }
        this.analysis.countdownSec -= 1;
        if (this.analysis.countdownSec <= 0) {
          this.analysis.countdownSec = this.analysis.delaySec;
          this._stepAnalysisTo(this.analysis.ply + 1, true);
          if (this.analysis.ply >= this.analysis.snapshots.length - 1) {
            this._stopAnalysisAutoPlay();
          }
        } else {
          this._renderAnalysisPanel();
        }
      }, 1000);
      this._renderAnalysisPanel();
    }

    _renderAnalysisPanel() {
      if (!this.dom.analysisPanel) return;
      const total = Math.max(0, this.analysis.snapshots.length - 1);
      const cur = this.analysis.ply;
      this.dom.analysisStepVal.textContent = `${cur} / ${total}`;

      const pct = total > 0 ? Math.round((cur / total) * 100) : 0;
      this.dom.analysisProgressFill.style.width = `${pct}%`;

      const snap = this.analysis.snapshots[cur];
      const badge = snap && snap.annotation && snap.annotation.badge;
      if (badge) {
        this.dom.analysisMoveBadge.textContent = `${snap.label} ${badge}`;
        let cls = 'analysis-move-badge';
        if (badge === '!!' || badge === '🏆') cls += ' brilliant';
        else if (badge === '?' || badge === '??' || badge === '?!') cls += ' mistake';
        this.dom.analysisMoveBadge.className = cls;
      } else if (snap && snap.moveObj) {
        this.dom.analysisMoveBadge.textContent = snap.label;
        this.dom.analysisMoveBadge.className = 'analysis-move-badge';
      } else {
        this.dom.analysisMoveBadge.textContent = '';
        this.dom.analysisMoveBadge.className = 'analysis-move-badge hidden';
      }

      this.dom.analysisAutoTargetBtn.classList.toggle('active', this.analysis.autoTargets);
      this.dom.analysisAutoTargetText.textContent = this.analysis.autoTargets
        ? this.t('analysisAutoTargetOn')
        : this.t('analysisAutoTargetOff');

      if (this.dom.analysisDelayGroup) {
        this.dom.analysisDelayGroup.querySelectorAll('[data-delay]').forEach((btn) => {
          btn.classList.toggle(
            'active',
            parseInt(btn.dataset.delay, 10) === this.analysis.delaySec
          );
        });
      }

      const isPlaying = Boolean(this.analysis.autoPlayId);
      this.dom.analysisPlayBtn.classList.toggle('playing', isPlaying);
      this.dom.analysisPlayIcon.textContent = isPlaying ? '⏸' : '▶';
      this.dom.analysisPlayText.textContent = isPlaying
        ? `${this.t('analysisPause')} (${this.analysis.countdownSec}s)`
        : `${this.t('analysisPlay')} (${this.analysis.delaySec}s)`;

      this.dom.analysisFirstBtn.disabled = cur <= 0;
      this.dom.analysisPrevBtn.disabled = cur <= 0;
      this.dom.analysisNextBtn.disabled = cur >= total;
      this.dom.analysisLastBtn.disabled = cur >= total;
    }

    // ========================================================
    // SPEED RUSH (TRYB BŁYSKAWICZNY) LOGIC
    // ========================================================
    _setRushVariant(variant) {
      if (!['3m', '5m', 'survival'].includes(variant)) return;
      this.rush.variant = variant;
      this.rush.secondsLeft = variant === '3m' ? 180 : variant === '5m' ? 300 : 0;
      this._renderRushHud();
    }

    _stopRushInterval() {
      if (this.rush.intervalId) {
        clearInterval(this.rush.intervalId);
        this.rush.intervalId = null;
      }
    }

    _startRush() {
      this._stopRushInterval();
      this._clearTimers();
      this.rush.active = true;
      this.rush.finished = false;
      this.rush.score = 0;
      this.rush.lives = 3;
      this.rush.usedIds = new Set();
      this.rush.history = [];
      this.rush.secondsLeft =
        this.rush.variant === '3m' ? 180 : this.rush.variant === '5m' ? 300 : 0;

      if (this.rush.variant !== 'survival') {
        this.rush.intervalId = setInterval(() => {
          if (!this.rush.active) return;
          this.rush.secondsLeft = Math.max(0, this.rush.secondsLeft - 1);
          this._renderRushHud();
          if (this.rush.secondsLeft <= 0) {
            this._endRush('time');
          }
        }, 1000);
      }

      this._renderRushHud();
      this._renderRushHistory();
      this._loadNextRushPuzzle();
    }

    _endRush(reason = 'stopped') {
      this._stopRushInterval();
      this._clearTimers();
      this.rush.active = false;
      this.rush.finished = true;
      this.status = 'playing'; // allow user to inspect/play the current or clicked puzzle

      const v = this.rush.variant;
      const prevBest = (this.state.rushBest && this.state.rushBest[v]) || 0;
      const isNewBest = this.rush.score > prevBest;
      if (isNewBest) {
        if (!this.state.rushBest) this.state.rushBest = { '3m': 0, '5m': 0, survival: 0 };
        this.state.rushBest[v] = this.rush.score;
        this._saveState();
      }

      if (reason === 'time' || reason === 'lives') {
        this.sound.wrong();
      }

      this._renderRushHud();
      this._renderRushHistory();
      this._renderButtons();
      this._renderStatusAndCoach(
        isNewBest ? 'progress' : 'thinking',
        this.t('rushStatusFinished')(this.rush.score, isNewBest)
      );
    }

    _pickNextRushPuzzle() {
      const pool = this._getRushPool();
      // Progressive difficulty curve:
      // 0..4 -> easy, 5..11 -> medium, 12+ -> hard
      const targetDiff =
        this.rush.score < 5 ? 'easy' : this.rush.score < 12 ? 'medium' : 'hard';

      let candidates = pool.filter(
        (p) => p.difficulty === targetDiff && !this.rush.usedIds.has(p.id)
      );
      if (candidates.length === 0) {
        candidates = pool.filter((p) => !this.rush.usedIds.has(p.id));
      }
      if (candidates.length === 0) {
        this.rush.usedIds.clear();
        candidates = pool;
      }

      const chosen = candidates[Math.floor(Math.random() * candidates.length)];
      this.rush.usedIds.add(chosen.id);
      return chosen;
    }

    _loadNextRushPuzzle() {
      const nextP = this._pickNextRushPuzzle();
      if (nextP) {
        this.loadPuzzle(nextP.id, false);
      }
    }

    _formatSeconds(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    _renderRushHud() {
      if (!this.dom.rushPanel) return;
      const v = this.rush.variant;

      this.dom.rushVariantGroup.querySelectorAll('[data-variant]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.variant === v);
        btn.disabled = this.rush.active;
      });

      const bestVal = (this.state.rushBest && this.state.rushBest[v]) || 0;
      this.dom.rushBestVal.textContent = String(bestVal);

      if (v === 'survival') {
        this.dom.rushTimerVal.textContent = '∞';
        this.dom.rushTimerVal.classList.remove('low-time');
      } else {
        const secs = this.rush.active
          ? this.rush.secondsLeft
          : v === '3m'
          ? 180
          : 300;
        this.dom.rushTimerVal.textContent = this._formatSeconds(secs);
        this.dom.rushTimerVal.classList.toggle(
          'low-time',
          this.rush.active && secs <= 20
        );
      }

      this.dom.rushScoreVal.textContent = String(this.rush.score);

      const hearts =
        '❤️'.repeat(Math.max(0, this.rush.lives)) +
        '🖤'.repeat(Math.max(0, 3 - this.rush.lives));
      this.dom.rushLivesVal.textContent = hearts;

      if (this.rush.active) {
        this.dom.rushStartStopBtn.textContent = this.t('rushStopBtn');
        this.dom.rushStartStopBtn.className = 'rush-action-btn stop';
      } else {
        this.dom.rushStartStopBtn.textContent = this.rush.finished
          ? this.t('rushPlayAgainBtn')
          : this.t('rushStartBtn');
        this.dom.rushStartStopBtn.className = 'rush-action-btn start';
      }
    }

    _renderRushHistory() {
      if (!this.dom.rushHistoryWrap) return;
      if (this.rush.history.length === 0) {
        this.dom.rushHistoryWrap.classList.add('hidden');
        this.dom.rushHistoryList.innerHTML = '';
        return;
      }

      this.dom.rushHistoryWrap.classList.remove('hidden');
      this.dom.rushHistoryList.innerHTML = this.rush.history
        .map(
          (item) => `
          <button type="button" class="rush-history-chip ${item.solved ? 'solved' : 'failed'}" data-rush-pid="${item.id}">
            ${item.solved ? '✓' : '✖'} #${item.id.toUpperCase()}
          </button>`
        )
        .join('');

      this.dom.rushHistoryList.querySelectorAll('[data-rush-pid]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (this.rush.active) return; // only allow reviewing after run finishes
          this.loadPuzzle(btn.dataset.rushPid, false);
        });
      });
    }

    navigatePuzzle(delta) {
      const pool = this._getPool();
      const list = this.filteredPuzzles.length ? this.filteredPuzzles : pool;
      const idx = list.findIndex((p) => p.id === this.currentPuzzle.id);
      const nextIdx = (idx + delta + list.length) % list.length;
      this.loadPuzzle(list[nextIdx].id);
    }

    toggleDrawer(open) {
      this.dom.puzzleDrawer.classList.toggle('open', open);
      this.dom.drawerBackdrop.classList.toggle('open', open);
      if (open) {
        this._renderDrawerList();
      }
    }

    _remainingAttackerMoves() {
      const playedAttackerMoves = Math.floor(this.solutionStep / 2);
      return Math.max(1, this.currentPuzzle.movesToMate - playedAttackerMoves);
    }

    _renderAll() {
      this._renderStats();
      this._renderPuzzleHeader();
      this._renderStatusAndCoach();
      if (this.mode === 'analysis') {
        this._renderAnalysisPanel();
      }
      this._renderBoard();
      this._renderMoveHistory();
      this._renderButtons();
      this._renderDrawerList();
    }

    _renderStats() {
      const total = this._getAllItems().length;
      const solvedCount = Object.keys(this.state.solved).length;
      this.dom.solvedCount.textContent = `${solvedCount}/${total}`;
      this.dom.streakCount.textContent = String(this.state.streak);
      this.dom.bestCount.textContent = String(this.state.bestStreak);
    }

    _renderPuzzleHeader() {
      const p = this.currentPuzzle;
      const lang = this.state.lang;

      const isWhite = p.isBattleAnalysis ? this.engine.turn === 'w' : this.playerColor === 'w';
      const diffLabels = this.t('difficultyNames');
      this.dom.turnDot.className = `turn-dot ${isWhite ? 'white' : 'black'}`;
      this.dom.turnText.textContent = isWhite ? this.t('whiteToMove') : this.t('blackToMove');
      let goalLabel;
      if (p.isBattleAnalysis) {
        const pliesCount = Math.max(0, (this.analysis.snapshots.length || 1) - 1);
        goalLabel = this.t('analysisPliesCount')(pliesCount);
      } else if (
        p.isOpeningTrap ||
        p.isWinMaterial ||
        p.isDefensePuzzle ||
        (p.isFamousGame && !p.endsInMate)
      ) {
        goalLabel = this.t('stepsCount')(p.movesToMate);
      } else {
        goalLabel = this.t('mateInN')(p.movesToMate);
      }
      this.dom.mateBadge.textContent = `${diffLabels[p.difficulty]} • ${goalLabel}`;
      this.dom.mateBadge.dataset.difficulty = p.difficulty;
      this.dom.puzzleIdBadge.textContent = `#${p.id.toUpperCase()}`;

      const solvedState = this.state.solved[p.id];
      if (solvedState === 'clean') {
        this.dom.puzzleSolvedBadge.textContent = '★';
        this.dom.puzzleSolvedBadge.className = 'solved-badge clean';
        this.dom.puzzleSolvedBadge.title = 'Solved cleanly';
      } else if (solvedState === 'assisted') {
        this.dom.puzzleSolvedBadge.textContent = '✓';
        this.dom.puzzleSolvedBadge.className = 'solved-badge assisted';
        this.dom.puzzleSolvedBadge.title = 'Solved with hint';
      } else {
        this.dom.puzzleSolvedBadge.textContent = '';
        this.dom.puzzleSolvedBadge.className = 'solved-badge hidden';
      }

      this.dom.puzzleTitle.textContent = p.title[lang] || p.title.en;

      const chips = [];
      if (p.players) {
        chips.push(
          `<span class="theme-chip famous-chip">🏛️ ${p.players[lang] || p.players.en}</span>`
        );
      }
      if (p.openingFamily && window.OPENING_FAMILIES && window.OPENING_FAMILIES[p.openingFamily]) {
        const fam = window.OPENING_FAMILIES[p.openingFamily];
        chips.push(`<span class="theme-chip">📖 ${fam[lang] || fam.en}</span>`);
      }
      for (const thKey of p.themes || []) {
        const th = window.PUZZLE_THEMES[thKey];
        const label = th ? th[lang] || th.en : thKey;
        chips.push(`<span class="theme-chip">${label}</span>`);
      }
      this.dom.puzzleThemes.innerHTML = chips.join('');
    }

    _formatAutoMoveCommentary(snap) {
      if (!snap || !snap.moveObj) return '';
      const pieceNames = this.t('pieceNames') || {};
      const pieceName = pieceNames[snap.moveObj.piece] || snap.moveObj.piece.toUpperCase();
      const enemyTargets = (snap.targetInfo.attackedEnemies || []).map(
        (att) => `${att.to} (${pieceNames[att.piece] || att.piece})`
      );
      const pins = (snap.targetInfo.pinsOrXrays || []).map(
        (pin) => `${pin.pinned} → ${pin.behind}`
      );
      return this.t('autoMoveAnalysis')(
        snap.label,
        pieceName,
        snap.moveObj.from,
        snap.moveObj.to,
        Boolean(snap.moveObj.captured),
        Boolean(snap.moveObj.inCheckAfter),
        Boolean(snap.moveObj.isCheckmateAfter),
        enemyTargets,
        pins
      );
    }

    _renderStatusAndCoach(customStatusType = null, customMessage = null) {
      const p = this.currentPuzzle;
      const lang = this.state.lang;

      if (p.isBattleAnalysis) {
        const cur = this.analysis.ply;
        const maxPly = Math.max(0, this.analysis.snapshots.length - 1);
        const snap = this.analysis.snapshots[cur];

        let bannerClass = 'status-banner';
        let icon = '🔍';
        let msg = '';

        if (this.analysis.inspectSquare) {
          const sq = this.analysis.inspectSquare;
          const piece = this.engine.getPiece(sq);
          if (piece) {
            const pNames = this.t('pieceNames') || {};
            const pName = pNames[piece.type] || piece.type;
            const cName =
              piece.color === 'w'
                ? lang === 'pl'
                  ? 'Biały'
                  : 'White'
                : lang === 'pl'
                ? 'Czarny'
                : 'Black';
            const info = this.engine.analyzePieceTargets(sq);
            const enemyTargets = info.attackedEnemies.map(
              (a) => `${a.to} (${pNames[a.piece] || a.piece})`
            );
            bannerClass += ' progress';
            icon = '🎯';
            msg = this.t('autoInspectMsg')(
              cName,
              pName,
              sq,
              enemyTargets,
              info.pinsOrXrays.length,
              info.kingZoneSquares.length
            );
          }
        } else if (cur === 0) {
          bannerClass += ' thinking';
          icon = '🔍';
          msg = this.t('analysisStartPrompt');
        } else if (cur >= maxPly && maxPly > 0) {
          bannerClass += ' solved';
          icon = '🏆';
          msg = this.t('analysisFinishedBanner');
        } else if (snap && snap.moveObj) {
          bannerClass += ' progress';
          icon = snap.annotation && snap.annotation.badge ? snap.annotation.badge : '♟️';
          msg = this._formatAutoMoveCommentary(snap);
        }

        this.dom.statusBanner.className = bannerClass;
        this.dom.statusIcon.textContent = icon;
        this.dom.statusText.textContent = msg;

        // Coach box shows battle overview at ply 0, or curated / automatic move commentary
        if (cur === 0 && p.overview) {
          this.dom.coachBox.className = 'coach-box guided';
          this.dom.coachLabel.textContent = this.t('analysisOverviewPrefix');
          this.dom.coachText.textContent = p.overview[lang] || p.overview.en;
        } else if (snap && snap.annotation && snap.annotation.text) {
          const isBrilliant =
            snap.annotation.badge === '!!' || snap.annotation.badge === '🏆';
          this.dom.coachBox.className = isBrilliant
            ? 'coach-box explanation'
            : 'coach-box hint';
          this.dom.coachLabel.textContent = `${this.t('analysisCommentaryPrefix')} (${snap.label}${
            snap.annotation.badge ? ' ' + snap.annotation.badge : ''
          })`;
          this.dom.coachText.textContent =
            snap.annotation.text[lang] || snap.annotation.text.en;
        } else if (snap && snap.moveObj) {
          this.dom.coachBox.className = 'coach-box guided';
          this.dom.coachLabel.textContent = `${this.t('analysisCommentaryPrefix')} (${snap.label})`;
          this.dom.coachText.textContent = this._formatAutoMoveCommentary(snap);
        } else {
          this.dom.coachBox.className = 'coach-box hidden';
        }
        return;
      }

      const colorStr = this.playerColor === 'w' ? this.t('whiteToMove') : this.t('blackToMove');
      const rem = this._remainingAttackerMoves();

      let bannerClass = 'status-banner';
      let icon = '⚡';
      let msg = '';

      if (customMessage) {
        msg = customMessage;
        if (customStatusType === 'error') {
          bannerClass += ' error';
          icon = '✖';
        } else if (customStatusType === 'thinking') {
          bannerClass += ' thinking';
          icon = '⏳';
        } else if (customStatusType === 'progress') {
          bannerClass += ' progress';
          icon = '✓';
        }
      } else if (this.status === 'idle_rush') {
        bannerClass += ' thinking';
        icon = '⏱️';
        msg = this.t('rushPromptIdle');
      } else if (this.status === 'solved') {
        bannerClass += ' solved';
        icon = '🏆';
        msg =
          !this.usedAssistance && !this.hadMistakeThisAttempt
            ? this.t('statusSolvedClean')
            : this.t('statusSolvedAssisted');
      } else if (this.solutionStep > 0) {
        bannerClass += ' progress';
        icon = '✓';
        msg = this.t('statusCorrectKeepGoing')(rem);
      } else if (p.isOpeningTrap) {
        icon = '📖';
        msg = this.t('promptOpeningStart')(colorStr, p.movesToMate);
      } else if (p.isWinMaterial) {
        icon = '⚔️';
        msg = this.t('promptMaterialStart')(colorStr, p.movesToMate);
      } else if (p.isDefensePuzzle) {
        icon = '🛡️';
        msg = this.t('promptDefenseStart')(colorStr, p.movesToMate);
      } else if (p.isFamousGame) {
        icon = '🏛️';
        msg = this.t('promptFamousStart')(colorStr, p.movesToMate, Boolean(p.endsInMate));
      } else {
        msg = this.t('promptStart')(colorStr, p.movesToMate);
      }

      this.dom.statusBanner.className = bannerClass;
      this.dom.statusIcon.textContent = icon;
      this.dom.statusText.textContent = msg;

      // Coach box:
      // 1. When solved -> show full explanation
      // 2. When in Guided Openings mode -> always show current step's coaching commentary!
      // 3. When in Puzzles mode & hintLevel >= 1 -> show puzzle hint
      const playerStepIdx = Math.floor(this.solutionStep / 2);
      if (this.status === 'solved') {
        this.dom.coachBox.className = 'coach-box explanation';
        this.dom.coachLabel.textContent = this.t('explanationPrefix');
        this.dom.coachText.textContent = p.explanation[lang] || p.explanation.en;
      } else if (p.isOpeningTrap && p.stepHints && p.stepHints[playerStepIdx]) {
        this.dom.coachBox.className = this.hintLevel >= 1 ? 'coach-box hint' : 'coach-box guided';
        this.dom.coachLabel.textContent = this.t('guidedCoachPrefix');
        const stepObj = p.stepHints[playerStepIdx];
        this.dom.coachText.textContent = stepObj[lang] || stepObj.en;
      } else if (this.hintLevel >= 1) {
        this.dom.coachBox.className = 'coach-box hint';
        this.dom.coachLabel.textContent = this.t('hintPrefix');
        this.dom.coachText.textContent = p.hint[lang] || p.hint.en;
      } else {
        this.dom.coachBox.className = 'coach-box hidden';
      }
    }

    _renderButtons() {
      const isSolved = this.status === 'solved';
      const inActiveRush = this.mode === 'rush' && (this.rush.active || this.status === 'idle_rush');
      this.dom.hintBtnText.textContent =
        this.hintLevel === 0 ? this.t('hintBtn1') : this.t('hintBtn2');
      this.dom.hintBtn.disabled =
        inActiveRush || isSolved || this.status === 'animating' || this.hintLevel >= 2;
      this.dom.solutionBtn.disabled =
        inActiveRush || isSolved || this.status === 'animating';
      this.dom.retryBtn.disabled = inActiveRush;
      if (this.dom.navControlsRow) {
        this.dom.navControlsRow.classList.toggle('hidden', this.mode === 'rush');
      }
      const isAnalysisDone =
        this.mode === 'analysis' &&
        this.analysis.snapshots.length > 1 &&
        this.analysis.ply === this.analysis.snapshots.length - 1;
      this.dom.nextBtn.classList.toggle(
        'pulse-highlight',
        (isSolved || isAnalysisDone) && this.mode !== 'rush'
      );
    }

    _renderMoveHistory() {
      if (this.mode === 'analysis' && this.currentPuzzle && this.currentPuzzle.isBattleAnalysis) {
        const snaps = this.analysis.snapshots;
        if (snaps.length <= 1) {
          this.dom.movesList.innerHTML = `<div class="moves-empty">${this.t('noMovesYet')}</div>`;
          return;
        }
        const rows = [];
        for (let ply = 1; ply < snaps.length; ply += 2) {
          const wSnap = snaps[ply];
          const bSnap = snaps[ply + 1] || null;
          const moveNum = Math.ceil(ply / 2);
          const wBadge =
            wSnap && wSnap.annotation && wSnap.annotation.badge
              ? `<span class="move-badge-inline">${wSnap.annotation.badge}</span>`
              : '';
          const bBadge =
            bSnap && bSnap.annotation && bSnap.annotation.badge
              ? `<span class="move-badge-inline">${bSnap.annotation.badge}</span>`
              : '';
          rows.push(`
            <div class="move-row">
              <span class="move-num">${moveNum}.</span>
              <span class="move-san clickable ${this.analysis.ply === ply ? 'active-ply' : ''}" data-analysis-ply="${ply}">
                ${wSnap.moveObj.san}${wBadge}
              </span>
              ${
                bSnap
                  ? `<span class="move-san clickable ${
                      this.analysis.ply === ply + 1 ? 'active-ply' : ''
                    }" data-analysis-ply="${ply + 1}">${bSnap.moveObj.san}${bBadge}</span>`
                  : `<span></span>`
              }
            </div>
          `);
        }
        this.dom.movesList.innerHTML = rows.join('');
        this.dom.movesList.querySelectorAll('[data-analysis-ply]').forEach((el) => {
          el.addEventListener('click', () => {
            const targetPly = parseInt(el.dataset.analysisPly, 10);
            this._stopAnalysisAutoPlay();
            this._stepAnalysisTo(targetPly, true);
          });
        });
        const activeEl = this.dom.movesList.querySelector('.active-ply');
        if (activeEl) {
          // Scroll only inside #movesList container so mobile viewport never jumps away from the board!
          const listEl = this.dom.movesList;
          const rowTop = activeEl.offsetTop - listEl.offsetTop;
          const targetScroll = rowTop - listEl.clientHeight / 2 + activeEl.clientHeight / 2;
          listEl.scrollTop = Math.max(0, targetScroll);
        }
        return;
      }

      if (this.playedMoves.length === 0) {
        this.dom.movesList.innerHTML = `<div class="moves-empty">${this.t('noMovesYet')}</div>`;
        return;
      }

      this.dom.movesList.innerHTML = this.playedMoves
        .map(
          (row) => `
          <div class="move-row">
            <span class="move-num">${row.num}.</span>
            <span class="move-san ${row.wActive ? 'latest' : ''}">${row.w || '...'}</span>
            <span class="move-san ${row.bActive ? 'latest' : ''}">${row.b || ''}</span>
          </div>`
        )
        .join('');
      this.dom.movesList.scrollTop = this.dom.movesList.scrollHeight;
    }

    _recordMoveInNotation(moveObj) {
      // Clear previous 'latest' flags
      this.playedMoves.forEach((r) => {
        r.wActive = false;
        r.bActive = false;
      });

      if (moveObj.color === 'w') {
        this.playedMoves.push({
          num: this.playedMoves.length + 1,
          w: moveObj.san,
          b: '',
          wActive: true,
          bActive: false
        });
      } else {
        if (this.playedMoves.length === 0 || this.playedMoves[this.playedMoves.length - 1].b) {
          this.playedMoves.push({
            num: this.playedMoves.length + 1,
            w: '...',
            b: moveObj.san,
            wActive: false,
            bActive: true
          });
        } else {
          const last = this.playedMoves[this.playedMoves.length - 1];
          last.b = moveObj.san;
          last.bActive = true;
        }
      }
      this._renderMoveHistory();
    }

    _getActiveAnalysisOverlay() {
      const arrows = [];
      const targetSquares = new Set();

      if (!this.currentPuzzle || !this.currentPuzzle.isBattleAnalysis) {
        return { arrows, targetSquares };
      }

      // Case 1: User clicked a piece on the board to inspect its targets
      if (this.analysis.inspectSquare) {
        const sq = this.analysis.inspectSquare;
        const info = this.engine.analyzePieceTargets(sq);
        for (const att of info.attackedEnemies) {
          arrows.push({ from: sq, to: att.to, color: 'red', dashed: false });
          targetSquares.add(att.to);
        }
        for (const pin of info.pinsOrXrays) {
          arrows.push({ from: sq, to: pin.behind, color: 'amber', dashed: true });
          targetSquares.add(pin.pinned);
          targetSquares.add(pin.behind);
        }
        for (const kz of info.kingZoneSquares) {
          arrows.push({ from: sq, to: kz.to, color: 'amber', dashed: true });
        }
        return { arrows, targetSquares };
      }

      // Case 2: Current move snapshot in the battle timeline
      const snap = this.analysis.snapshots[this.analysis.ply];
      if (!snap) return { arrows, targetSquares };

      const seenPairs = new Set();
      const addArrow = (arrObj) => {
        if (!arrObj || !arrObj.from || !arrObj.to) return;
        const key = `${arrObj.from}->${arrObj.to}`;
        if (seenPairs.has(key)) return;
        seenPairs.add(key);
        arrows.push(arrObj);
      };

      // Played move arrow (green)
      if (snap.moveObj) {
        addArrow({
          from: snap.moveObj.from,
          to: snap.moveObj.to,
          color: 'green',
          dashed: false
        });
      }

      // Curated tactical arrows & targets
      if (snap.annotation) {
        for (const rawArr of snap.annotation.arrows || []) {
          addArrow(this._parseArrowShorthand(rawArr));
        }
        for (const tSq of snap.annotation.targets || []) {
          targetSquares.add(tSq);
        }
      }

      // Automatic engine piece-targeting arrows & targets
      if (this.analysis.autoTargets) {
        for (const autoArr of snap.autoArrows || []) {
          addArrow(autoArr);
        }
        for (const tSq of snap.autoTargets || []) {
          targetSquares.add(tSq);
        }
      }

      return { arrows, targetSquares };
    }

    _renderBoard() {
      const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

      const isAnalysis = Boolean(this.currentPuzzle && this.currentPuzzle.isBattleAnalysis);
      const expectedUci =
        !isAnalysis && this.currentPuzzle.solution
          ? this.currentPuzzle.solution[this.solutionStep] || ''
          : '';
      const hintFromSq =
        this.status === 'playing' && this.hintLevel >= 1 ? expectedUci.slice(0, 2) : null;
      const hintToSq =
        this.status === 'playing' && this.hintLevel >= 2 ? expectedUci.slice(2, 4) : null;

      let checkedKingSq = null;
      if (this.engine.inCheck(this.engine.turn)) {
        const k = this.engine.findKing(this.engine.turn);
        if (k) checkedKingSq = k.square;
      }

      const targetMap = new Map();
      for (const m of this.legalTargetsForSelected) {
        targetMap.set(m.to, m);
      }

      const analysisOverlay = isAnalysis
        ? this._getActiveAnalysisOverlay()
        : { arrows: [], targetSquares: new Set() };

      let html = '';
      for (let vr = 0; vr < 8; vr++) {
        for (let vc = 0; vc < 8; vc++) {
          const r = this.flipped ? 7 - vr : vr;
          const c = this.flipped ? 7 - vc : vc;
          const sq = files[c] + ranks[r];
          const isLight = (r + c) % 2 === 0;
          const piece = this.engine.board[r][c];

          const classes = ['board-square', isLight ? 'light' : 'dark'];
          if (this.selectedSquare === sq || (isAnalysis && this.analysis.inspectSquare === sq)) {
            classes.push('selected');
          }
          if (
            this.lastMoveSquares &&
            (this.lastMoveSquares.from === sq || this.lastMoveSquares.to === sq)
          ) {
            classes.push('last-move');
          }
          if (hintFromSq === sq) classes.push('hint-from');
          if (hintToSq === sq) classes.push('hint-to');
          if (checkedKingSq === sq) classes.push('in-check');
          if (this.wrongMoveSquare === sq) classes.push('wrong-flash');
          if (isAnalysis && analysisOverlay.targetSquares.has(sq)) {
            classes.push('analysis-target');
          }

          const showRankCoord = vc === 0;
          const showFileCoord = vr === 7;
          const legalMove = targetMap.get(sq);

          html += `<div class="${classes.join(' ')}" data-square="${sq}">`;

          if (showRankCoord) {
            html += `<span class="coord-rank">${ranks[r]}</span>`;
          }
          if (showFileCoord) {
            html += `<span class="coord-file">${files[c]}</span>`;
          }

          if (piece) {
            html += `<div class="piece-wrap" data-piece="${piece.color}${piece.type}">${window.getPieceSvg(
              piece.color,
              piece.type
            )}</div>`;
          }

          if (isAnalysis && analysisOverlay.targetSquares.has(sq)) {
            html += `<span class="target-crosshair"></span>`;
          }

          if (legalMove) {
            const isCapture = Boolean(piece) || Boolean(legalMove.isEnPassant);
            html += `<span class="${isCapture ? 'capture-ring' : 'move-dot'}"></span>`;
          }

          html += `</div>`;
        }
      }

      this.dom.boardGrid.innerHTML = html;
      if (isAnalysis) {
        this._renderAnalysisArrows(analysisOverlay.arrows);
      } else {
        this._renderHintArrow(hintFromSq, hintToSq);
      }
    }

    _squareToSvgCenter(sq) {
      const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
      const c = files.indexOf(sq[0]);
      const r = ranks.indexOf(sq[1]);
      if (c === -1 || r === -1) return null;
      const vc = this.flipped ? 7 - c : c;
      const vr = this.flipped ? 7 - r : r;
      return {
        x: vc * 12.5 + 6.25,
        y: vr * 12.5 + 6.25
      };
    }

    _renderAnalysisArrows(arrows) {
      if (!arrows || arrows.length === 0) {
        this.dom.arrowSvg.innerHTML = '';
        return;
      }

      const palette = {
        green: '#10b981',
        red: '#ef4444',
        amber: '#f59e0b',
        blue: '#38bdf8'
      };

      const defs = `
        <defs>
          <marker id="arrHead-green" markerWidth="4.2" markerHeight="4.2" refX="2.7" refY="2.1" orient="auto">
            <polygon points="0 0, 4.2 2.1, 0 4.2" fill="${palette.green}" />
          </marker>
          <marker id="arrHead-red" markerWidth="4.2" markerHeight="4.2" refX="2.7" refY="2.1" orient="auto">
            <polygon points="0 0, 4.2 2.1, 0 4.2" fill="${palette.red}" />
          </marker>
          <marker id="arrHead-amber" markerWidth="4.2" markerHeight="4.2" refX="2.7" refY="2.1" orient="auto">
            <polygon points="0 0, 4.2 2.1, 0 4.2" fill="${palette.amber}" />
          </marker>
          <marker id="arrHead-blue" markerWidth="4.2" markerHeight="4.2" refX="2.7" refY="2.1" orient="auto">
            <polygon points="0 0, 4.2 2.1, 0 4.2" fill="${palette.blue}" />
          </marker>
        </defs>
      `;

      const lines = [];
      for (const arr of arrows) {
        const p1 = this._squareToSvgCenter(arr.from);
        const p2 = this._squareToSvgCenter(arr.to);
        if (!p1 || !p2) continue;

        const colorKey = palette[arr.color] ? arr.color : 'red';
        const stroke = palette[colorKey];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;

        const startX = p1.x + ux * 2.4;
        const startY = p1.y + uy * 2.4;
        const endX = p2.x - ux * 3.1;
        const endY = p2.y - uy * 3.1;
        const dashAttr = arr.dashed ? 'stroke-dasharray="2.4 1.6"' : '';
        const width = colorKey === 'green' ? '2.1' : '1.85';

        lines.push(
          `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}"
            stroke="${stroke}" stroke-width="${width}" stroke-linecap="round"
            ${dashAttr} marker-end="url(#arrHead-${colorKey})" opacity="0.9" />`
        );
      }

      this.dom.arrowSvg.innerHTML = defs + lines.join('');
    }

    _renderHintArrow(fromSq, toSq) {
      if (!fromSq || !toSq) {
        this.dom.arrowSvg.innerHTML = '';
        return;
      }
      const p1 = this._squareToSvgCenter(fromSq);
      const p2 = this._squareToSvgCenter(toSq);
      if (!p1 || !p2) return;

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len;
      const uy = dy / len;

      // Shorten start and end slightly so arrow looks clean
      const startX = p1.x + ux * 2.5;
      const startY = p1.y + uy * 2.5;
      const endX = p2.x - ux * 3.2;
      const endY = p2.y - uy * 3.2;

      this.dom.arrowSvg.innerHTML = `
        <defs>
          <marker id="hintArrowHead" markerWidth="4.5" markerHeight="4.5" refX="2.8" refY="2.25" orient="auto">
            <polygon points="0 0, 4.5 2.25, 0 4.5" fill="#f59e0b" />
          </marker>
        </defs>
        <line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}"
          stroke="#f59e0b" stroke-width="2.1" stroke-linecap="round"
          marker-end="url(#hintArrowHead)" opacity="0.92" />
      `;
    }

    // ========================================================
    // BOARD POINTER INTERACTION (TAP-TO-MOVE + DRAG-AND-DROP)
    // ========================================================
    _getSquareFromPoint(clientX, clientY) {
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return null;
      const sqEl = el.closest('.board-square');
      return sqEl ? sqEl.dataset.square : null;
    }

    _onBoardPointerDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      const sqEl = e.target.closest('.board-square');
      if (!sqEl) return;
      const sq = sqEl.dataset.square;

      // In Battle Analysis mode, clicking any piece inspects its targets on the board!
      if (this.mode === 'analysis' && this.currentPuzzle && this.currentPuzzle.isBattleAnalysis) {
        const piece = this.engine.getPiece(sq);
        if (piece && this.analysis.inspectSquare !== sq) {
          this.analysis.inspectSquare = sq;
        } else {
          this.analysis.inspectSquare = null;
        }
        this._renderStatusAndCoach();
        this._renderBoard();
        return;
      }

      if (this.status !== 'playing' || this.engine.turn !== this.playerColor) return;

      // Case 1: User already selected a piece and tapped a legal destination square
      if (
        this.selectedSquare &&
        this.legalTargetsForSelected.some((m) => m.to === sq)
      ) {
        e.preventDefault();
        this._initiatePlayerMove(this.selectedSquare, sq);
        return;
      }

      // Case 2: User clicked/touched one of their own pieces -> select & start potential drag
      const piece = this.engine.getPiece(sq);
      if (piece && piece.color === this.playerColor) {
        e.preventDefault();
        const togglingSame = this.selectedSquare === sq;
        this.selectedSquare = sq;
        this.legalTargetsForSelected = this.engine.getLegalMoves(sq);
        this._renderBoard();

        // Prepare drag state
        const newSqEl = this.dom.boardGrid.querySelector(`[data-square="${sq}"]`);
        const pieceWrap = newSqEl ? newSqEl.querySelector('.piece-wrap') : null;
        const rect = this.dom.boardGrid.getBoundingClientRect();
        const sqSize = rect.width / 8;

        this.dragState = {
          pointerId: e.pointerId,
          fromSquare: sq,
          startX: e.clientX,
          startY: e.clientY,
          isDragging: false,
          togglingSame,
          sqSize,
          pieceHtml: window.getPieceSvg(piece.color, piece.type),
          sourcePieceEl: pieceWrap
        };
      } else {
        // Clicked empty or opponent non-target square -> deselect
        if (this.selectedSquare) {
          this.selectedSquare = null;
          this.legalTargetsForSelected = [];
          this._renderBoard();
        }
      }
    }

    _onWindowPointerMove(e) {
      if (!this.dragState || e.pointerId !== this.dragState.pointerId) return;

      const dist = Math.hypot(e.clientX - this.dragState.startX, e.clientY - this.dragState.startY);
      if (!this.dragState.isDragging && dist > 6) {
        this.dragState.isDragging = true;
        this.dom.dragGhost.innerHTML = this.dragState.pieceHtml;
        this.dom.dragGhost.style.width = `${this.dragState.sqSize * 1.12}px`;
        this.dom.dragGhost.style.height = `${this.dragState.sqSize * 1.12}px`;
        this.dom.dragGhost.classList.remove('hidden');
        if (this.dragState.sourcePieceEl) {
          this.dragState.sourcePieceEl.classList.add('dragging-source');
        }
      }

      if (this.dragState.isDragging) {
        this.dom.dragGhost.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }

    _onWindowPointerUp(e) {
      if (!this.dragState || e.pointerId !== this.dragState.pointerId) return;
      const drag = this.dragState;
      this.dragState = null;

      this.dom.dragGhost.classList.add('hidden');
      this.dom.dragGhost.innerHTML = '';
      if (drag.sourcePieceEl) {
        drag.sourcePieceEl.classList.remove('dragging-source');
      }

      if (drag.isDragging) {
        const targetSq = this._getSquareFromPoint(e.clientX, e.clientY);
        if (
          targetSq &&
          targetSq !== drag.fromSquare &&
          this.legalTargetsForSelected.some((m) => m.to === targetSq)
        ) {
          this._initiatePlayerMove(drag.fromSquare, targetSq);
        } else {
          this._renderBoard();
        }
      } else if (drag.togglingSame) {
        // Tapped already-selected piece without dragging: keep selected for easy mobile play
      }
    }

    _cancelDrag() {
      if (!this.dragState) return;
      if (this.dragState.sourcePieceEl) {
        this.dragState.sourcePieceEl.classList.remove('dragging-source');
      }
      this.dragState = null;
      this.dom.dragGhost.classList.add('hidden');
      this.dom.dragGhost.innerHTML = '';
    }

    // ========================================================
    // MOVE EXECUTION & PUZZLE VALIDATION
    // ========================================================
    _initiatePlayerMove(from, to) {
      if (this.engine.isPromotionMove(from, to)) {
        this._openPromotionModal(from, to);
      } else {
        this._executeValidatedPlayerMove(from, to, null);
      }
    }

    _openPromotionModal(from, to) {
      this.pendingPromotion = { from, to };
      const color = this.playerColor;
      const pieces = ['q', 'r', 'b', 'n'];
      this.dom.promoChoices.innerHTML = pieces
        .map(
          (type) => `
          <button type="button" class="promo-piece-btn" data-promo="${type}">
            ${window.getPieceSvg(color, type)}
          </button>`
        )
        .join('');

      this.dom.promoChoices.querySelectorAll('.promo-piece-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const promo = btn.dataset.promo;
          this.dom.promoModal.classList.add('hidden');
          if (this.pendingPromotion) {
            const { from: f, to: t } = this.pendingPromotion;
            this.pendingPromotion = null;
            this._executeValidatedPlayerMove(f, t, promo);
          }
        });
      });

      this.dom.promoModal.classList.remove('hidden');
    }

    _executeValidatedPlayerMove(from, to, promotion) {
      const candidateUci = from + to + (promotion || '');
      const expectedUci = this.currentPuzzle.solution[this.solutionStep];
      const remMoves = this._remainingAttackerMoves();

      // Check if candidate matches canonical solution OR forces mate in the remaining moves
      const isCanonical = candidateUci === expectedUci;
      const canCheckAltForcedMate = !this.currentPuzzle.isOpeningTrap;
      const isAltForcedMate =
        !isCanonical &&
        canCheckAltForcedMate &&
        this.engine.doesMoveForceMateInN({ from, to, promotion }, remMoves);

      const moveObj = this.engine.makeMove({ from, to, promotion });
      if (!moveObj) return;

      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.lastMoveSquares = { from, to };

      if (isCanonical || isAltForcedMate) {
        // Correct move!
        this.hintLevel = 0;
        this._recordMoveInNotation(moveObj);
        const reachedEndOfLine =
          this.engine.isCheckmate() ||
          this.solutionStep + 1 >= this.currentPuzzle.solution.length;

        if (reachedEndOfLine) {
          this.sound.solved();
          this._onPuzzleSolved();
          return;
        }

        this._playMoveSound(moveObj);

        // Advance solution step and play opponent reply
        this.solutionStep++;
        this.status = 'animating';
        this._renderAll();
        this._renderStatusAndCoach('thinking', this.t('statusOpponentThinking'));

        this._schedule(() => {
          this._playOpponentReply(isAltForcedMate);
        }, 420);
      } else {
        // Wrong move!
        this.hadMistakeThisAttempt = true;
        this.state.streak = 0;
        this._saveState();

        this.wrongMoveSquare = to;
        this.status = 'animating';
        this.sound.wrong();
        this._renderBoard();
        this._renderStats();

        if (this.mode === 'rush' && this.rush.active) {
          this.rush.lives = Math.max(0, this.rush.lives - 1);
          this.rush.history.push({ id: this.currentPuzzle.id, solved: false });
          this._renderRushHud();
          this._renderRushHistory();

          if (this.rush.lives <= 0) {
            this._schedule(() => {
              this.wrongMoveSquare = null;
              this._endRush('lives');
            }, 600);
          } else {
            this._renderStatusAndCoach(
              'error',
              this.t('rushStatusMistake')(this.rush.lives)
            );
            this._schedule(() => {
              this.wrongMoveSquare = null;
              if (this.rush.active) {
                this._loadNextRushPuzzle();
              }
            }, 650);
          }
          return;
        }

        const errMsg = this.currentPuzzle.isOpeningTrap
          ? this.t('statusWrongOpeningMove')
          : this.t('statusWrongMove');
        this._renderStatusAndCoach('error', errMsg);

        this._schedule(() => {
          this.engine.undo();
          this.wrongMoveSquare = null;
          this.lastMoveSquares = null;
          this.status = 'playing';
          this._renderBoard();
          this._renderButtons();
        }, 650);
      }
    }

    _playOpponentReply(usedAltLine = false) {
      let replyUci = this.currentPuzzle.solution[this.solutionStep];
      const legal = this.engine.getLegalMoves();

      // If the player played an alternative forced-mate move, pick the most resilient defender reply
      if (usedAltLine || !replyUci || !legal.some((m) => m.uci === replyUci)) {
        if (legal.length > 0) {
          const attackerColor = this.playerColor;
          let bestReply = legal[0].uci;
          for (const candidate of legal) {
            const snap = this.engine._applyRawMove(candidate);
            const allowsM1 = this.engine._canForceMate(attackerColor, 1);
            this.engine._undoRawMove(snap);
            if (!allowsM1) {
              bestReply = candidate.uci;
              break;
            }
          }
          replyUci = bestReply;
        }
      }

      const replyObj = this.engine.makeMove(replyUci);
      if (replyObj) {
        this.lastMoveSquares = { from: replyObj.from, to: replyObj.to };
        this._recordMoveInNotation(replyObj);
        this._playMoveSound(replyObj);
        this.solutionStep++;
      }

      this.status = 'playing';
      this._renderAll();
    }

    _playMoveSound(moveObj) {
      if (moveObj.isCheckmateAfter) {
        this.sound.solved();
      } else if (moveObj.inCheckAfter) {
        this.sound.check();
      } else if (moveObj.captured) {
        this.sound.capture();
      } else {
        this.sound.move();
      }
    }

    _onPuzzleSolved() {
      this.status = 'solved';
      const pid = this.currentPuzzle.id;
      const isClean = !this.usedAssistance && !this.hadMistakeThisAttempt;

      if (isClean) {
        this.state.solved[pid] = 'clean';
        this.state.streak += 1;
        if (this.state.streak > this.state.bestStreak) {
          this.state.bestStreak = this.state.streak;
        }
      } else {
        if (this.state.solved[pid] !== 'clean') {
          this.state.solved[pid] = 'assisted';
        }
      }

      if (this.mode === 'rush' && this.rush.active) {
        this.rush.score += 1;
        this.rush.history.push({ id: pid, solved: true });
        const v = this.rush.variant;
        if (!this.state.rushBest) this.state.rushBest = { '3m': 0, '5m': 0, survival: 0 };
        if (this.rush.score > (this.state.rushBest[v] || 0)) {
          this.state.rushBest[v] = this.rush.score;
        }
        this._saveState();
        this._renderRushHud();
        this._renderRushHistory();
        this._renderAll();

        this._schedule(() => {
          if (this.rush.active) {
            this._loadNextRushPuzzle();
          }
        }, 420);
        return;
      }

      this._saveState();
      this._renderAll();
    }

    // ========================================================
    // HINTS & AUTO-SOLUTION PLAYBACK
    // ========================================================
    showHint() {
      if (this.status !== 'playing') return;
      this.usedAssistance = true;
      this.hintLevel = Math.min(2, this.hintLevel + 1);
      this._renderStatusAndCoach();
      this._renderBoard();
      this._renderButtons();
    }

    playSolution() {
      if (this.status === 'solved' || this.status === 'animating') return;
      this.usedAssistance = true;
      this.state.streak = 0;
      this._saveState();

      // If user is mid-attempt on a non-canonical branch, reset to start of puzzle first
      this.status = 'animating';
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.hintLevel = 0;
      this._renderButtons();

      const stepNext = () => {
        if (this.solutionStep >= this.currentPuzzle.solution.length) {
          this._onPuzzleSolved();
          return;
        }
        const uci = this.currentPuzzle.solution[this.solutionStep];
        const moveObj = this.engine.makeMove(uci);
        if (!moveObj) {
          this._onPuzzleSolved();
          return;
        }
        this.lastMoveSquares = { from: moveObj.from, to: moveObj.to };
        this._recordMoveInNotation(moveObj);
        this._playMoveSound(moveObj);
        this.solutionStep++;
        this._renderBoard();

        if (this.engine.isCheckmate()) {
          this._onPuzzleSolved();
        } else {
          this._schedule(stepNext, 580);
        }
      };

      stepNext();
    }

    _renderDrawerList() {
      const lang = this.state.lang;
      const diffLabels = this.t('difficultyNames');

      this.dom.drawerList.innerHTML = this.filteredPuzzles
        .map((p) => {
          const isCurrent = this.currentPuzzle && p.id === this.currentPuzzle.id;
          const solved = this.state.solved[p.id];
          const statusBadge =
            solved === 'clean'
              ? '<span class="drawer-badge clean">★</span>'
              : solved === 'assisted'
              ? '<span class="drawer-badge assisted">✓</span>'
              : '<span class="drawer-badge unsolved">○</span>';

          const metaGoal = p.isBattleAnalysis
            ? `${(p.moves || []).length} ${lang === 'pl' ? 'ruchów' : 'plies'}`
            : `M${p.movesToMate}`;

          return `
            <button type="button" class="drawer-item ${isCurrent ? 'active' : ''}" data-puzzle-id="${p.id}">
              <div class="drawer-item-left">
                ${statusBadge}
                <div>
                  <div class="drawer-item-title">${p.title[lang] || p.title.en}</div>
                  <div class="drawer-item-meta">
                    <span class="drawer-diff ${p.difficulty}">${diffLabels[p.difficulty]} • ${metaGoal}</span>
                    <span>• #${p.id.toUpperCase()}</span>
                    ${p.players ? `<span>• 🏛️ ${p.players[lang] || p.players.en}</span>` : ''}
                  </div>
                </div>
              </div>
              <span class="drawer-arrow">→</span>
            </button>
          `;
        })
        .join('');

      this.dom.drawerList.querySelectorAll('.drawer-item').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.loadPuzzle(btn.dataset.puzzleId);
          this.toggleDrawer(false);
        });
      });
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.app = new MateTrainerApp();
  });
})();
