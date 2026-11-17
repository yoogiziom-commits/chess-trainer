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
      } else {
        this.loadPuzzle(initialPuzzle.id);
      }
    }

    _getAllItems() {
      return [
        ...window.PUZZLES,
        ...(window.OPENING_TRAPS || []),
        ...(window.WIN_MATERIAL_PUZZLES || []),
        ...(window.DEFENSE_PUZZLES || [])
      ];
    }

    _getPool() {
      if (this.mode === 'openings') return window.OPENING_TRAPS || [];
      if (this.mode === 'material') return window.WIN_MATERIAL_PUZZLES || [];
      if (this.mode === 'defense') return window.DEFENSE_PUZZLES || [];
      return window.PUZZLES;
    }

    setMode(newMode, targetId = null) {
      if (!['puzzles', 'openings', 'material', 'defense'].includes(newMode)) return;
      this.mode = newMode;
      this.filterDifficulty = 'all';
      this.filterMoves = 'all';
      this.filterTheme = 'all';

      this.dom.modePuzzlesTab.classList.toggle('active', this.mode === 'puzzles');
      this.dom.modeOpeningsTab.classList.toggle('active', this.mode === 'openings');
      this.dom.modeMaterialTab.classList.toggle('active', this.mode === 'material');
      this.dom.modeDefenseTab.classList.toggle('active', this.mode === 'defense');
      this.dom.movesFilterWrap.classList.toggle('hidden', this.mode !== 'puzzles');

      this._applyThemeAndLang();
      this._populateThemeFilter();
      this._updateFilteredPuzzles(false);

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
        lastPuzzleId: 'm1-01',
        soundEnabled: true,
        boardTheme: 'emerald'
      };
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaults;
        return { ...defaults, ...JSON.parse(raw) };
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
        modePuzzlesText: document.getElementById('modePuzzlesText'),
        modeOpeningsText: document.getElementById('modeOpeningsText'),
        modeMaterialText: document.getElementById('modeMaterialText'),
        modeDefenseText: document.getElementById('modeDefenseText'),
        movesFilterWrap: document.getElementById('movesFilterWrap'),

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

      // Mode switcher tabs (4 Training Modes)
      this.dom.modePuzzlesTab.addEventListener('click', () => this.setMode('puzzles'));
      this.dom.modeOpeningsTab.addEventListener('click', () => this.setMode('openings'));
      this.dom.modeMaterialTab.addEventListener('click', () => this.setMode('material'));
      this.dom.modeDefenseTab.addEventListener('click', () => this.setMode('defense'));

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
          this._saveState();
          this._renderStats();
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

    loadPuzzle(puzzleId) {
      this._clearTimers();
      const pool = this._getPool();
      const allItems = this._getAllItems();
      const puzzle =
        pool.find((p) => p.id === puzzleId) ||
        allItems.find((p) => p.id === puzzleId) ||
        pool[0];
      this.currentPuzzle = puzzle;
      this.state.lastPuzzleId = puzzle.id;
      this._saveState();

      this.engine = new window.ChessEngine(puzzle.fen);
      this.playerColor = this.engine.turn;
      this.flipped = this.playerColor === 'b';

      this.solutionStep = 0;
      this.status = 'playing';
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

      this._renderAll();
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

      const isWhite = this.playerColor === 'w';
      const diffLabels = this.t('difficultyNames');
      this.dom.turnDot.className = `turn-dot ${isWhite ? 'white' : 'black'}`;
      this.dom.turnText.textContent = isWhite ? this.t('whiteToMove') : this.t('blackToMove');
      const goalLabel =
        p.isOpeningTrap || p.isWinMaterial || p.isDefensePuzzle
          ? this.t('stepsCount')(p.movesToMate)
          : this.t('mateInN')(p.movesToMate);
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

    _renderStatusAndCoach(customStatusType = null, customMessage = null) {
      const p = this.currentPuzzle;
      const lang = this.state.lang;
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
      this.dom.hintBtnText.textContent =
        this.hintLevel === 0 ? this.t('hintBtn1') : this.t('hintBtn2');
      this.dom.hintBtn.disabled = isSolved || this.status === 'animating' || this.hintLevel >= 2;
      this.dom.solutionBtn.disabled = isSolved || this.status === 'animating';
      this.dom.nextBtn.classList.toggle('pulse-highlight', isSolved);
    }

    _renderMoveHistory() {
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

    _renderBoard() {
      const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

      const expectedUci = this.currentPuzzle.solution[this.solutionStep] || '';
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

      let html = '';
      for (let vr = 0; vr < 8; vr++) {
        for (let vc = 0; vc < 8; vc++) {
          const r = this.flipped ? 7 - vr : vr;
          const c = this.flipped ? 7 - vc : vc;
          const sq = files[c] + ranks[r];
          const isLight = (r + c) % 2 === 0;
          const piece = this.engine.board[r][c];

          const classes = ['board-square', isLight ? 'light' : 'dark'];
          if (this.selectedSquare === sq) classes.push('selected');
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

          if (legalMove) {
            const isCapture = Boolean(piece) || Boolean(legalMove.isEnPassant);
            html += `<span class="${isCapture ? 'capture-ring' : 'move-dot'}"></span>`;
          }

          html += `</div>`;
        }
      }

      this.dom.boardGrid.innerHTML = html;
      this._renderHintArrow(hintFromSq, hintToSq);
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
      if (this.status !== 'playing' || this.engine.turn !== this.playerColor) return;
      if (e.button !== undefined && e.button !== 0) return;

      const sqEl = e.target.closest('.board-square');
      if (!sqEl) return;
      const sq = sqEl.dataset.square;

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
      const canCheckAltForcedMate =
        !this.currentPuzzle.isOpeningTrap &&
        !this.currentPuzzle.isWinMaterial &&
        !this.currentPuzzle.isDefensePuzzle;
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

      // If the player played an alternative forced-mate move, pick a legal defender reply
      if (usedAltLine || !replyUci) {
        const legal = this.engine.getLegalMoves();
        if (legal.length > 0) {
          replyUci = legal[0].uci;
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

          return `
            <button type="button" class="drawer-item ${isCurrent ? 'active' : ''}" data-puzzle-id="${p.id}">
              <div class="drawer-item-left">
                ${statusBadge}
                <div>
                  <div class="drawer-item-title">${p.title[lang] || p.title.en}</div>
                  <div class="drawer-item-meta">
                    <span class="drawer-diff ${p.difficulty}">${diffLabels[p.difficulty]} • M${p.movesToMate}</span>
                    <span>• #${p.id.toUpperCase()}</span>
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
