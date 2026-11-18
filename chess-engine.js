/**
 * Complete FIDE Chess Rules Engine for Chess Tactics Trainer
 * Supports FEN parsing/serialization, legal move generation, pins, checks,
 * castling, en passant, promotion, SAN notation, checkmate/stalemate detection,
 * and forced mate verification.
 */

(function (global) {
  'use strict';

  const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

  function coordsToSquare(r, c) {
    if (r < 0 || r > 7 || c < 0 || c > 7) return null;
    return FILES[c] + RANKS[r];
  }

  function squareToCoords(sq) {
    if (!sq || sq.length !== 2) return null;
    const c = FILES.indexOf(sq[0]);
    const r = RANKS.indexOf(sq[1]);
    if (c === -1 || r === -1) return null;
    return { r, c };
  }

  function oppositeColor(color) {
    return color === 'w' ? 'b' : 'w';
  }

  class ChessEngine {
    constructor(fen) {
      this.reset(fen);
    }

    reset(fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
      this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
      this.turn = 'w';
      this.castling = { K: false, Q: false, k: false, q: false };
      this.epSquare = null;
      this.halfMoves = 0;
      this.fullMoves = 1;
      this.history = [];
      this.loadFen(fen);
    }

    loadFen(fen) {
      const parts = fen.trim().split(/\s+/);
      if (parts.length < 2) {
        throw new Error('Invalid FEN string: ' + fen);
      }

      const rows = parts[0].split('/');
      if (rows.length !== 8) {
        throw new Error('Invalid FEN board rows: ' + fen);
      }

      this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
      for (let r = 0; r < 8; r++) {
        let c = 0;
        for (const ch of rows[r]) {
          if (ch >= '1' && ch <= '8') {
            c += parseInt(ch, 10);
          } else {
            const color = ch === ch.toUpperCase() ? 'w' : 'b';
            const type = ch.toLowerCase();
            if (c < 8) {
              this.board[r][c] = { type, color };
            }
            c++;
          }
        }
      }

      this.turn = parts[1] === 'b' ? 'b' : 'w';

      const castlingStr = parts[2] || '-';
      this.castling = {
        K: castlingStr.includes('K'),
        Q: castlingStr.includes('Q'),
        k: castlingStr.includes('k'),
        q: castlingStr.includes('q'),
      };

      this.epSquare = parts[3] && parts[3] !== '-' ? parts[3] : null;
      this.halfMoves = parseInt(parts[4] || '0', 10) || 0;
      this.fullMoves = parseInt(parts[5] || '1', 10) || 1;
      this.history = [];
    }

    toFen() {
      const rows = [];
      for (let r = 0; r < 8; r++) {
        let rowStr = '';
        let empty = 0;
        for (let c = 0; c < 8; c++) {
          const p = this.board[r][c];
          if (!p) {
            empty++;
          } else {
            if (empty > 0) {
              rowStr += empty;
              empty = 0;
            }
            rowStr += p.color === 'w' ? p.type.toUpperCase() : p.type;
          }
        }
        if (empty > 0) rowStr += empty;
        rows.push(rowStr);
      }

      let castlingStr = '';
      if (this.castling.K) castlingStr += 'K';
      if (this.castling.Q) castlingStr += 'Q';
      if (this.castling.k) castlingStr += 'k';
      if (this.castling.q) castlingStr += 'q';
      if (!castlingStr) castlingStr = '-';

      const ep = this.epSquare || '-';
      return `${rows.join('/')} ${this.turn} ${castlingStr} ${ep} ${this.halfMoves} ${this.fullMoves}`;
    }

    getPiece(square) {
      const coords = squareToCoords(square);
      if (!coords) return null;
      return this.board[coords.r][coords.c];
    }

    findKing(color) {
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const p = this.board[r][c];
          if (p && p.type === 'k' && p.color === color) {
            return { r, c, square: coordsToSquare(r, c) };
          }
        }
      }
      return null;
    }

    /**
     * Checks if square (r, c) is attacked by any piece of `attackerColor`
     */
    isSquareAttacked(r, c, attackerColor) {
      // Pawn attacks
      const pawnDir = attackerColor === 'w' ? 1 : -1; // row where attacking pawn sits relative to target
      const pr = r + pawnDir;
      if (pr >= 0 && pr < 8) {
        for (const dc of [-1, 1]) {
          const pc = c + dc;
          if (pc >= 0 && pc < 8) {
            const p = this.board[pr][pc];
            if (p && p.color === attackerColor && p.type === 'p') return true;
          }
        }
      }

      // Knight attacks
      const knightJumps = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      for (const [dr, dc] of knightJumps) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const p = this.board[nr][nc];
          if (p && p.color === attackerColor && p.type === 'n') return true;
        }
      }

      // King attacks
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const kr = r + dr;
          const kc = c + dc;
          if (kr >= 0 && kr < 8 && kc >= 0 && kc < 8) {
            const p = this.board[kr][kc];
            if (p && p.color === attackerColor && p.type === 'k') return true;
          }
        }
      }

      // Orthogonal rays (Rook / Queen)
      const orthoDirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of orthoDirs) {
        let nr = r + dr;
        let nc = c + dc;
        while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const p = this.board[nr][nc];
          if (p) {
            if (p.color === attackerColor && (p.type === 'r' || p.type === 'q')) {
              return true;
            }
            break;
          }
          nr += dr;
          nc += dc;
        }
      }

      // Diagonal rays (Bishop / Queen)
      const diagDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      for (const [dr, dc] of diagDirs) {
        let nr = r + dr;
        let nc = c + dc;
        while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          const p = this.board[nr][nc];
          if (p) {
            if (p.color === attackerColor && (p.type === 'b' || p.type === 'q')) {
              return true;
            }
            break;
          }
          nr += dr;
          nc += dc;
        }
      }

      return false;
    }

    inCheck(color = this.turn) {
      const king = this.findKing(color);
      if (!king) return false;
      return this.isSquareAttacked(king.r, king.c, oppositeColor(color));
    }

    generatePseudoMoves(color = this.turn) {
      const moves = [];
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const p = this.board[r][c];
          if (!p || p.color !== color) continue;
          const from = coordsToSquare(r, c);

          if (p.type === 'p') {
            const dir = color === 'w' ? -1 : 1;
            const startRank = color === 'w' ? 6 : 1;
            const promoRank = color === 'w' ? 0 : 7;

            // 1 step forward
            const r1 = r + dir;
            if (r1 >= 0 && r1 < 8 && !this.board[r1][c]) {
              const to1 = coordsToSquare(r1, c);
              if (r1 === promoRank) {
                for (const promo of ['q', 'r', 'b', 'n']) {
                  moves.push({ from, to: to1, piece: 'p', color, promotion: promo });
                }
              } else {
                moves.push({ from, to: to1, piece: 'p', color });
                // 2 steps forward
                const r2 = r + dir * 2;
                if (r === startRank && !this.board[r2][c]) {
                  moves.push({
                    from,
                    to: coordsToSquare(r2, c),
                    piece: 'p',
                    color,
                    isDoublePawn: true
                  });
                }
              }
            }

            // Captures
            for (const dc of [-1, 1]) {
              const nc = c + dc;
              if (r1 >= 0 && r1 < 8 && nc >= 0 && nc < 8) {
                const toCap = coordsToSquare(r1, nc);
                const target = this.board[r1][nc];
                if (target && target.color !== color) {
                  if (r1 === promoRank) {
                    for (const promo of ['q', 'r', 'b', 'n']) {
                      moves.push({
                        from,
                        to: toCap,
                        piece: 'p',
                        color,
                        captured: target.type,
                        promotion: promo
                      });
                    }
                  } else {
                    moves.push({
                      from,
                      to: toCap,
                      piece: 'p',
                      color,
                      captured: target.type
                    });
                  }
                } else if (this.epSquare && toCap === this.epSquare) {
                  moves.push({
                    from,
                    to: toCap,
                    piece: 'p',
                    color,
                    captured: 'p',
                    isEnPassant: true
                  });
                }
              }
            }
          } else if (p.type === 'n') {
            const jumps = [
              [-2, -1], [-2, 1], [-1, -2], [-1, 2],
              [1, -2], [1, 2], [2, -1], [2, 1]
            ];
            for (const [dr, dc] of jumps) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                const target = this.board[nr][nc];
                if (!target || target.color !== color) {
                  moves.push({
                    from,
                    to: coordsToSquare(nr, nc),
                    piece: 'n',
                    color,
                    captured: target ? target.type : undefined
                  });
                }
              }
            }
          } else if (p.type === 'k') {
            for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                  const target = this.board[nr][nc];
                  if (!target || target.color !== color) {
                    moves.push({
                      from,
                      to: coordsToSquare(nr, nc),
                      piece: 'k',
                      color,
                      captured: target ? target.type : undefined
                    });
                  }
                }
              }
            }

            // Castling
            const opp = oppositeColor(color);
            if (color === 'w' && r === 7 && c === 4) {
              if (
                this.castling.K &&
                !this.board[7][5] &&
                !this.board[7][6] &&
                this.board[7][7] &&
                this.board[7][7].type === 'r' &&
                this.board[7][7].color === 'w' &&
                !this.isSquareAttacked(7, 4, opp) &&
                !this.isSquareAttacked(7, 5, opp) &&
                !this.isSquareAttacked(7, 6, opp)
              ) {
                moves.push({ from: 'e1', to: 'g1', piece: 'k', color: 'w', isCastling: 'K' });
              }
              if (
                this.castling.Q &&
                !this.board[7][3] &&
                !this.board[7][2] &&
                !this.board[7][1] &&
                this.board[7][0] &&
                this.board[7][0].type === 'r' &&
                this.board[7][0].color === 'w' &&
                !this.isSquareAttacked(7, 4, opp) &&
                !this.isSquareAttacked(7, 3, opp) &&
                !this.isSquareAttacked(7, 2, opp)
              ) {
                moves.push({ from: 'e1', to: 'c1', piece: 'k', color: 'w', isCastling: 'Q' });
              }
            } else if (color === 'b' && r === 0 && c === 4) {
              if (
                this.castling.k &&
                !this.board[0][5] &&
                !this.board[0][6] &&
                this.board[0][7] &&
                this.board[0][7].type === 'r' &&
                this.board[0][7].color === 'b' &&
                !this.isSquareAttacked(0, 4, opp) &&
                !this.isSquareAttacked(0, 5, opp) &&
                !this.isSquareAttacked(0, 6, opp)
              ) {
                moves.push({ from: 'e8', to: 'g8', piece: 'k', color: 'b', isCastling: 'k' });
              }
              if (
                this.castling.q &&
                !this.board[0][3] &&
                !this.board[0][2] &&
                !this.board[0][1] &&
                this.board[0][0] &&
                this.board[0][0].type === 'r' &&
                this.board[0][0].color === 'b' &&
                !this.isSquareAttacked(0, 4, opp) &&
                !this.isSquareAttacked(0, 3, opp) &&
                !this.isSquareAttacked(0, 2, opp)
              ) {
                moves.push({ from: 'e8', to: 'c8', piece: 'k', color: 'b', isCastling: 'q' });
              }
            }
          } else {
            // Sliding pieces: b, r, q
            const dirs = [];
            if (p.type === 'r' || p.type === 'q') {
              dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
            }
            if (p.type === 'b' || p.type === 'q') {
              dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
            }
            for (const [dr, dc] of dirs) {
              let nr = r + dr;
              let nc = c + dc;
              while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
                const target = this.board[nr][nc];
                if (!target) {
                  moves.push({
                    from,
                    to: coordsToSquare(nr, nc),
                    piece: p.type,
                    color
                  });
                } else {
                  if (target.color !== color) {
                    moves.push({
                      from,
                      to: coordsToSquare(nr, nc),
                      piece: p.type,
                      color,
                      captured: target.type
                    });
                  }
                  break;
                }
                nr += dr;
                nc += dc;
              }
            }
          }
        }
      }
      return moves;
    }

    _applyRawMove(move) {
      const fromCoords = squareToCoords(move.from);
      const toCoords = squareToCoords(move.to);
      const snapshot = {
        fromCoords,
        toCoords,
        movingPiece: this.board[fromCoords.r][fromCoords.c],
        targetPiece: this.board[toCoords.r][toCoords.c],
        epCapturedPiece: null,
        epCoords: null,
        castling: { ...this.castling },
        epSquare: this.epSquare,
        halfMoves: this.halfMoves,
        fullMoves: this.fullMoves,
        turn: this.turn,
        move
      };

      // Move piece
      this.board[fromCoords.r][fromCoords.c] = null;
      if (move.promotion) {
        this.board[toCoords.r][toCoords.c] = { type: move.promotion, color: move.color };
      } else {
        this.board[toCoords.r][toCoords.c] = snapshot.movingPiece;
      }

      // En passant capture removal
      if (move.isEnPassant) {
        const capR = fromCoords.r;
        const capC = toCoords.c;
        snapshot.epCoords = { r: capR, c: capC };
        snapshot.epCapturedPiece = this.board[capR][capC];
        this.board[capR][capC] = null;
      }

      // Castling rook movement
      if (move.isCastling) {
        if (move.isCastling === 'K') {
          this.board[7][5] = this.board[7][7];
          this.board[7][7] = null;
        } else if (move.isCastling === 'Q') {
          this.board[7][3] = this.board[7][0];
          this.board[7][0] = null;
        } else if (move.isCastling === 'k') {
          this.board[0][5] = this.board[0][7];
          this.board[0][7] = null;
        } else if (move.isCastling === 'q') {
          this.board[0][3] = this.board[0][0];
          this.board[0][0] = null;
        }
      }

      // Update castling rights
      if (move.piece === 'k') {
        if (move.color === 'w') {
          this.castling.K = false;
          this.castling.Q = false;
        } else {
          this.castling.k = false;
          this.castling.q = false;
        }
      }
      if (move.from === 'h1' || move.to === 'h1') this.castling.K = false;
      if (move.from === 'a1' || move.to === 'a1') this.castling.Q = false;
      if (move.from === 'h8' || move.to === 'h8') this.castling.k = false;
      if (move.from === 'a8' || move.to === 'a8') this.castling.q = false;

      // Update epSquare
      if (move.isDoublePawn) {
        const epR = (fromCoords.r + toCoords.r) / 2;
        this.epSquare = coordsToSquare(epR, fromCoords.c);
      } else {
        this.epSquare = null;
      }

      // Update counters and turn
      if (move.piece === 'p' || move.captured) {
        this.halfMoves = 0;
      } else {
        this.halfMoves++;
      }
      if (this.turn === 'b') {
        this.fullMoves++;
      }
      this.turn = oppositeColor(this.turn);

      return snapshot;
    }

    _undoRawMove(snapshot) {
      const { fromCoords, toCoords, movingPiece, targetPiece, move } = snapshot;
      this.board[fromCoords.r][fromCoords.c] = movingPiece;
      this.board[toCoords.r][toCoords.c] = targetPiece;

      if (snapshot.epCoords) {
        this.board[snapshot.epCoords.r][snapshot.epCoords.c] = snapshot.epCapturedPiece;
      }

      if (move.isCastling) {
        if (move.isCastling === 'K') {
          this.board[7][7] = this.board[7][5];
          this.board[7][5] = null;
        } else if (move.isCastling === 'Q') {
          this.board[7][0] = this.board[7][3];
          this.board[7][3] = null;
        } else if (move.isCastling === 'k') {
          this.board[0][7] = this.board[0][5];
          this.board[0][5] = null;
        } else if (move.isCastling === 'q') {
          this.board[0][0] = this.board[0][3];
          this.board[0][3] = null;
        }
      }

      this.castling = snapshot.castling;
      this.epSquare = snapshot.epSquare;
      this.halfMoves = snapshot.halfMoves;
      this.fullMoves = snapshot.fullMoves;
      this.turn = snapshot.turn;
    }

    getLegalMoves(squareFilter = null) {
      const color = this.turn;
      const pseudo = this.generatePseudoMoves(color);
      const legal = [];

      for (const m of pseudo) {
        if (squareFilter && m.from !== squareFilter) continue;
        const snap = this._applyRawMove(m);
        const kingInDanger = this.inCheck(color);
        this._undoRawMove(snap);
        if (!kingInDanger) {
          m.uci = m.from + m.to + (m.promotion || '');
          legal.push(m);
        }
      }

      // Compute SAN for all legal moves if no filter, or compute using full legal moves list
      return legal;
    }

    moveToSan(move, allLegalMoves = null) {
      if (move.isCastling === 'K' || move.isCastling === 'k') return 'O-O';
      if (move.isCastling === 'Q' || move.isCastling === 'q') return 'O-O-O';

      const legal = allLegalMoves || this.getLegalMoves();
      let san = '';

      if (move.piece !== 'p') {
        san += move.piece.toUpperCase();
        // Disambiguation
        const ambiguous = legal.filter(
          (m) =>
            m.piece === move.piece &&
            m.to === move.to &&
            m.from !== move.from &&
            (!m.promotion || m.promotion === move.promotion)
        );
        if (ambiguous.length > 0) {
          const sameFile = ambiguous.some((m) => m.from[0] === move.from[0]);
          const sameRank = ambiguous.some((m) => m.from[1] === move.from[1]);
          if (!sameFile) {
            san += move.from[0];
          } else if (!sameRank) {
            san += move.from[1];
          } else {
            san += move.from;
          }
        }
      } else if (move.captured) {
        san += move.from[0];
      }

      if (move.captured) {
        san += 'x';
      }

      san += move.to;

      if (move.promotion) {
        san += '=' + move.promotion.toUpperCase();
      }

      // Check or Checkmate suffix
      const snap = this._applyRawMove(move);
      if (this.inCheck(this.turn)) {
        const oppReplies = this.getLegalMoves();
        san += oppReplies.length === 0 ? '#' : '+';
      }
      this._undoRawMove(snap);

      return san;
    }

    /**
     * Make a move by UCI string ('e2e4', 'e7e8q') or object { from, to, promotion }
     */
    makeMove(moveInput) {
      const allLegal = this.getLegalMoves();
      let chosen = null;

      if (typeof moveInput === 'string') {
        const clean = moveInput.trim();
        const from = clean.slice(0, 2);
        const to = clean.slice(2, 4);
        const promo = clean.length > 4 ? clean[4].toLowerCase() : undefined;
        chosen = allLegal.find(
          (m) => m.from === from && m.to === to && (m.promotion || undefined) === (promo || (m.promotion ? 'q' : undefined))
        );
        if (!chosen) {
          // Try SAN match (exact or normalized without check/annotation symbols)
          const stripped = clean.replace(/[+#!?]+$/g, '');
          chosen =
            allLegal.find((m) => this.moveToSan(m, allLegal) === clean) ||
            allLegal.find((m) => this.moveToSan(m, allLegal).replace(/[+#]+$/g, '') === stripped);
        }
      } else if (moveInput && typeof moveInput === 'object') {
        const promo = moveInput.promotion ? moveInput.promotion.toLowerCase() : undefined;
        chosen = allLegal.find(
          (m) =>
            m.from === moveInput.from &&
            m.to === moveInput.to &&
            (!m.promotion || m.promotion === (promo || 'q'))
        );
      }

      if (!chosen) return null;

      chosen.san = this.moveToSan(chosen, allLegal);
      const snap = this._applyRawMove(chosen);
      chosen.inCheckAfter = this.inCheck(this.turn);
      chosen.isCheckmateAfter = chosen.inCheckAfter && this.getLegalMoves().length === 0;
      this.history.push(snap);
      return chosen;
    }

    undo() {
      if (this.history.length === 0) return null;
      const snap = this.history.pop();
      this._undoRawMove(snap);
      return snap.move;
    }

    isCheckmate() {
      return this.inCheck(this.turn) && this.getLegalMoves().length === 0;
    }

    isStalemate() {
      return !this.inCheck(this.turn) && this.getLegalMoves().length === 0;
    }

    isPromotionMove(from, to) {
      const legal = this.getLegalMoves(from);
      return legal.some((m) => m.to === to && Boolean(m.promotion));
    }

    /**
     * Analyzes what a piece on `square` is currently targeting/attacking on the board:
     * - Direct attacks on enemy pieces (captures/checks)
     * - Pins or X-ray lines through an enemy piece toward the enemy King or Queen
     * - Control over squares immediately adjacent to the enemy King
     */
    analyzePieceTargets(square) {
      const coords = squareToCoords(square);
      if (!coords) return { attackedEnemies: [], pinsOrXrays: [], kingZoneSquares: [] };
      const piece = this.board[coords.r][coords.c];
      if (!piece) return { attackedEnemies: [], pinsOrXrays: [], kingZoneSquares: [] };

      const color = piece.color;
      const opp = oppositeColor(color);
      const oppKing = this.findKing(opp);
      const attackedEnemies = [];
      const pinsOrXrays = [];
      const kingZoneSquares = [];

      const isNearOppKing = (r, c) =>
        oppKing && Math.abs(r - oppKing.r) <= 1 && Math.abs(c - oppKing.c) <= 1 && !(r === oppKing.r && c === oppKing.c);

      const checkTargetSquare = (nr, nc) => {
        const sq = coordsToSquare(nr, nc);
        const target = this.board[nr][nc];
        if (target && target.color === opp) {
          attackedEnemies.push({ from: square, to: sq, piece: target.type });
        } else if (!target && isNearOppKing(nr, nc)) {
          kingZoneSquares.push({ from: square, to: sq });
        }
      };

      const { r, c } = coords;
      if (piece.type === 'p') {
        const dir = color === 'w' ? -1 : 1;
        const nr = r + dir;
        if (nr >= 0 && nr < 8) {
          for (const dc of [-1, 1]) {
            const nc = c + dc;
            if (nc >= 0 && nc < 8) checkTargetSquare(nr, nc);
          }
        }
      } else if (piece.type === 'n') {
        const jumps = [
          [-2, -1], [-2, 1], [-1, -2], [-1, 2],
          [1, -2], [1, 2], [2, -1], [2, 1]
        ];
        for (const [dr, dc] of jumps) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) checkTargetSquare(nr, nc);
        }
      } else if (piece.type === 'k') {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) checkTargetSquare(nr, nc);
          }
        }
      } else {
        // Sliding pieces: b, r, q
        const dirs = [];
        if (piece.type === 'r' || piece.type === 'q') {
          dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
        }
        if (piece.type === 'b' || piece.type === 'q') {
          dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
        }
        for (const [dr, dc] of dirs) {
          let nr = r + dr;
          let nc = c + dc;
          let firstEnemy = null;
          while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
            const target = this.board[nr][nc];
            const sq = coordsToSquare(nr, nc);
            if (!firstEnemy) {
              if (!target) {
                if (isNearOppKing(nr, nc)) {
                  kingZoneSquares.push({ from: square, to: sq });
                }
              } else if (target.color === color) {
                break; // blocked by own piece
              } else {
                firstEnemy = { sq, type: target.type };
                attackedEnemies.push({ from: square, to: sq, piece: target.type });
              }
            } else {
              // Looking behind firstEnemy for a pin / X-ray against enemy King or Queen
              if (target) {
                if (target.color === opp && (target.type === 'k' || target.type === 'q' || target.type === 'r')) {
                  pinsOrXrays.push({
                    from: square,
                    pinned: firstEnemy.sq,
                    behind: sq,
                    behindPiece: target.type
                  });
                }
                break;
              }
            }
            nr += dr;
            nc += dc;
          }
        }
      }

      return { attackedEnemies, pinsOrXrays, kingZoneSquares };
    }

    /**
     * Checks if a candidate move forces mate in at most `maxFullMoves` for the side to move.
     * Used so alternative valid mate-in-1 / mate-in-2 moves are also respected!
     */
    doesMoveForceMateInN(moveInput, maxFullMoves) {
      const allLegal = this.getLegalMoves();
      let chosen = null;
      if (typeof moveInput === 'string') {
        const from = moveInput.slice(0, 2);
        const to = moveInput.slice(2, 4);
        const promo = moveInput.length > 4 ? moveInput[4].toLowerCase() : undefined;
        chosen = allLegal.find(
          (m) => m.from === from && m.to === to && (m.promotion || undefined) === (promo || (m.promotion ? 'q' : undefined))
        );
      } else {
        const promo = moveInput.promotion ? moveInput.promotion.toLowerCase() : undefined;
        chosen = allLegal.find(
          (m) => m.from === moveInput.from && m.to === moveInput.to && (!m.promotion || m.promotion === (promo || 'q'))
        );
      }
      if (!chosen) return false;

      const attackerColor = this.turn;
      const snap = this._applyRawMove(chosen);
      const forces = this._canForceMate(attackerColor, maxFullMoves - 1);
      this._undoRawMove(snap);
      return forces;
    }

    _canForceMate(attackerColor, remainingAttackerMoves) {
      const legal = this.getLegalMoves();
      if (legal.length === 0) {
        if (this.inCheck(this.turn)) {
          return this.turn !== attackerColor;
        }
        return false; // stalemate
      }

      if (this.turn !== attackerColor) {
        // Defender's turn: if remainingAttackerMoves <= 0, attacker failed to mate in time
        if (remainingAttackerMoves <= 0) return false;
        for (const reply of legal) {
          const snap = this._applyRawMove(reply);
          const stillMates = this._canForceMate(attackerColor, remainingAttackerMoves);
          this._undoRawMove(snap);
          if (!stillMates) return false;
        }
        return true;
      } else {
        // Attacker's turn: needs at least ONE move that forces mate
        if (remainingAttackerMoves <= 0) return false;
        for (const m of legal) {
          const snap = this._applyRawMove(m);
          let ok = false;
          if (remainingAttackerMoves === 1) {
            // Final move MUST immediately checkmate
            ok = this.inCheck(this.turn) && this.getLegalMoves().length === 0;
          } else {
            ok = this._canForceMate(attackerColor, remainingAttackerMoves - 1);
          }
          this._undoRawMove(snap);
          if (ok) return true;
        }
        return false;
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ChessEngine, coordsToSquare, squareToCoords };
  } else {
    global.ChessEngine = ChessEngine;
  }
})(typeof window !== 'undefined' ? window : globalThis);
