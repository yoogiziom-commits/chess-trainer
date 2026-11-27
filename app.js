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
      modeSparringTab: 'Coach Sparring',
      modeEndgamesTab: 'Endgames (40)',
      endgamesPanelTitle: '♟️ Pick an Endgame Drill vs Bot (40):',
      sparringLevelLabel: 'Bot strength:',
      sparringColorLabel: 'Play as:',
      sparringColorW: '♔ White',
      sparringColorB: '♚ Black',
      sparringGuardOn: 'Blunder Guard: ON',
      sparringGuardOff: 'Blunder Guard: OFF',
      sparringRadarOn: 'Threat Radar: ON',
      sparringRadarOff: 'Threat Radar: OFF',
      sparringEvalLabel: 'Position Eval',
      sparringBlunderTitle: 'Blunder Guard!',
      sparringBlunderUndo: 'Undo & Retry',
      sparringBlunderKeep: 'Play Anyway',
      sparringNewGame: 'New Game',
      sparringUndo: 'Undo',
      sparringHint: 'Coach Hint',
      sparringResign: 'Resign',
      sparringTitle: (lvl) => `Coach Sparring (${lvl})`,
      sparringYourTurn: 'Your turn — play a solid move and watch for threats!',
      sparringBotThinking: 'Bot is thinking...',
      sparringBlunderMsg: (pawns, refSan) =>
        `Watch out! That move loses ~${pawns} pawns (opponent can play ${refSan}). Red arrow = threat, blue = safer move.`,
      sparringBlunderMateMsg: (refSan) =>
        `Danger! That move walks into checkmate (opponent plays ${refSan}). Undo and protect your king!`,
      sparringHintMsg: (san) => `Coach suggests: ${san} (green arrow).`,
      sparringWinMate: 'Checkmate! You beat the bot!',
      sparringLossMate: 'Checkmate — the bot won this round. Try again!',
      sparringDraw: (reason) => `Draw (${reason}). Good fight!`,
      sparringResigned: 'You resigned. Click "New Game" to play again!',
      sparringEndgamesLabel: '♟️ Endgame Drills (vs Bot):',
      sparringMaterialLabel: '⚔️ Win Material (Middlegame Scenarios vs Bot):',
      playPuzzleVsBot: 'Play This Position vs Bot',
      analysisImportBtn: 'Paste PGN (My Game)',
      analysisRetryBotBtn: 'Retry from Here vs Bot',
      pgnImportLabel: 'Paste PGN or move list (e.g. from Coddy / Lichess / Chess.com):',
      pgnLoadBtn: 'Analyze Game',
      pgnCancelBtn: 'Cancel',
      pgnErrorEmpty: 'Please paste a PGN or list of moves first.',
      pgnErrorNoMoves: 'Could not parse any valid chess moves from that text.',
      analysisBlundersLabel: 'Detected blunders (click to jump):',
      analysisNoBlunders: 'No major blunders detected!',
      customGameTitle: (w, b) => (w && b ? `${w} vs ${b}` : 'My Imported Game'),
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
      modeSparringTab: 'Sparing z Trenerem',
      modeEndgamesTab: 'Końcówki (40)',
      endgamesPanelTitle: '♟️ Wybierz końcówkę do treningu z botem (40):',
      sparringLevelLabel: 'Poziom bota:',
      sparringColorLabel: 'Graj jako:',
      sparringColorW: '♔ Białe',
      sparringColorB: '♚ Czarne',
      sparringGuardOn: 'Strażnik Błędów: WŁ.',
      sparringGuardOff: 'Strażnik Błędów: WYŁ.',
      sparringRadarOn: 'Radar Zagrożeń: WŁ.',
      sparringRadarOff: 'Radar Zagrożeń: WYŁ.',
      sparringEvalLabel: 'Ocena pozycji',
      sparringBlunderTitle: 'Strażnik Błędów!',
      sparringBlunderUndo: 'Cofnij i popraw',
      sparringBlunderKeep: 'Zagraj mimo to',
      sparringNewGame: 'Nowa partia',
      sparringUndo: 'Cofnij',
      sparringHint: 'Podpowiedź',
      sparringResign: 'Poddaj się',
      sparringTitle: (lvl) => `Sparing z Trenerem (${lvl})`,
      sparringYourTurn: 'Twój ruch — graj solidnie i pilnuj niebronionych figur!',
      sparringBotThinking: 'Bot myśli...',
      sparringBlunderMsg: (pawns, refSan) =>
        `Uwaga! Ten ruch traci ok. ${pawns} piona (grozi ${refSan}). Czerwona strzałka = groźba, niebieska = lepszy ruch.`,
      sparringBlunderMateMsg: (refSan) =>
        `Niebezpieczeństwo! Ten ruch pozwala na mata (grozi ${refSan}). Cofnij i zabezpiecz króla!`,
      sparringHintMsg: (san) => `Trener poleca: ${san} (zielona strzałka).`,
      sparringWinMate: 'Szach-mat! Pokonałeś bota!',
      sparringLossMate: 'Szach-mat — tym razem wygrał bot. Spróbuj ponownie!',
      sparringDraw: (reason) => `Remis (${reason}). Dobra walka!`,
      sparringResigned: 'Poddałeś partię. Kliknij „Nowa partia”, aby zagrać jeszcze raz!',
      sparringEndgamesLabel: '♟️ Ćwiczenia końcówek (vs Bot):',
      sparringMaterialLabel: '⚔️ Zdobądź Przewagę (Scenariusze vs Bot):',
      playPuzzleVsBot: 'Rozegraj tę pozycję z botem',
      analysisImportBtn: 'Wklej PGN (Moja partia)',
      analysisRetryBotBtn: 'Zagraj stąd z botem',
      pgnImportLabel: 'Wklej PGN lub zapis ruchów (np. z Coddy / Lichess / Chess.com):',
      pgnLoadBtn: 'Analizuj partię',
      pgnCancelBtn: 'Anuluj',
      pgnErrorEmpty: 'Wklej najpierw PGN lub listę ruchów.',
      pgnErrorNoMoves: 'Nie udało się odczytać żadnych poprawnych ruchów szachowych.',
      analysisBlundersLabel: 'Wykryte błędy (kliknij, aby przejść):',
      analysisNoBlunders: 'Nie wykryto dużych błędów!',
      customGameTitle: (w, b) => (w && b ? `${w} – ${b}` : 'Moja zaimportowana partia'),
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
        vsBot: true, // true = Blitz vs Bot, false = Puzzle Rush
        botLevel: 'club', // 'beginner' | 'club' | 'tactical' | 'strong'
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

      // Coach Sparring state
      this.sparring = {
        level: 'club', // 'beginner' | 'club' | 'tactical' | 'strong'
        playerColor: 'w', // 'w' | 'b'
        blunderGuard: true,
        threatRadar: true,
        evalWhite: 0,
        pendingBlunder: null, // { moveObj, from, to, promotion, coachInfo }
        hintMove: null, // { from, to }
        hintCandidates: [],
        selectedHintIdx: 0,
        gameOver: false,
        resultMsg: null
      };

      // GM Training Tabs state (Woodpecker, Vision, Eval Quiz, Kotov)
      if (!Array.isArray(this.state.mistakes)) this.state.mistakes = [];
      if (typeof this.state.visionBest !== 'number') this.state.visionBest = 0;
      this.gm = {
        vision: { active: false, kind: 'click', targetSq: 'e4', score: 0, secondsLeft: 30, intervalId: null },
        evalQuiz: { streak: 0, answered: false, evalWhite: 0, bestMove: null },
        kotov: { candidates: [], evaluated: false, bestMove: null }
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

    _isSparringLikeMode() {
      return this.mode === 'sparring' || this.mode === 'endgames';
    }

    setMode(newMode, targetId = null) {
      if (
        ![
          'puzzles',
          'openings',
          'material',
          'defense',
          'famous',
          'analysis',
          'rush',
          'sparring',
          'endgames',
          'woodpecker',
          'vision',
          'evalquiz',
          'kotov'
        ].includes(newMode)
      )
        return;
      if (this.rush.active && newMode !== 'rush') {
        this._stopRushInterval();
        this.rush.active = false;
      }
      if (newMode !== 'analysis') {
        this._stopAnalysisAutoPlay();
      }
      if (newMode !== 'vision') {
        this._stopVisionTimer();
      }
      this._clearTimers();
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
      if (this.dom.modeSparringTab) {
        this.dom.modeSparringTab.classList.toggle('active', this.mode === 'sparring');
      }
      if (this.dom.modeEndgamesTab) {
        this.dom.modeEndgamesTab.classList.toggle('active', this.mode === 'endgames');
      }
      if (this.dom.modeWoodpeckerTab) {
        this.dom.modeWoodpeckerTab.classList.toggle('active', this.mode === 'woodpecker');
      }
      if (this.dom.modeVisionTab) {
        this.dom.modeVisionTab.classList.toggle('active', this.mode === 'vision');
      }
      if (this.dom.modeEvalQuizTab) {
        this.dom.modeEvalQuizTab.classList.toggle('active', this.mode === 'evalquiz');
      }
      if (this.dom.modeKotovTab) {
        this.dom.modeKotovTab.classList.toggle('active', this.mode === 'kotov');
      }

      const isSparringLike = this._isSparringLikeMode();
      const isGmSpecial = ['woodpecker', 'vision', 'evalquiz', 'kotov'].includes(this.mode);
      this.dom.filterBar.classList.toggle(
        'hidden',
        this.mode === 'rush' || isSparringLike || isGmSpecial
      );
      this.dom.rushPanel.classList.toggle('hidden', this.mode !== 'rush');
      if (this.dom.endgamesPanel) {
        this.dom.endgamesPanel.classList.toggle('hidden', this.mode !== 'endgames');
      }
      if (this.dom.sparringPanel) {
        this.dom.sparringPanel.classList.toggle('hidden', !isSparringLike);
      }
      if (this.dom.sparringMaterialWrap) {
        this.dom.sparringMaterialWrap.classList.toggle('hidden', this.mode !== 'sparring');
      }
      if (this.dom.woodpeckerPanel) {
        this.dom.woodpeckerPanel.classList.toggle('hidden', this.mode !== 'woodpecker');
      }
      if (this.dom.visionPanel) {
        this.dom.visionPanel.classList.toggle('hidden', this.mode !== 'vision');
      }
      if (this.dom.evalQuizPanel) {
        this.dom.evalQuizPanel.classList.toggle('hidden', this.mode !== 'evalquiz');
      }
      if (this.dom.kotovPanel) {
        this.dom.kotovPanel.classList.toggle('hidden', this.mode !== 'kotov');
      }
      if (this.dom.analysisPanel) {
        this.dom.analysisPanel.classList.toggle('hidden', this.mode !== 'analysis');
      }
      if (this.dom.trainingControlsGrid) {
        this.dom.trainingControlsGrid.classList.toggle(
          'hidden',
          this.mode === 'analysis' || isSparringLike || ['vision', 'evalquiz', 'kotov'].includes(this.mode)
        );
      }
      if (this.dom.navControlsRow) {
        this.dom.navControlsRow.classList.toggle('hidden', isSparringLike || isGmSpecial);
      }
      if (this.dom.boardGrid) {
        this.dom.boardGrid.classList.toggle('board-hide-coords', this.mode === 'vision');
      }
      this.dom.movesFilterWrap.classList.toggle('hidden', this.mode !== 'puzzles');

      this._applyThemeAndLang();
      this._populateThemeFilter();
      this._updateFilteredPuzzles(false);

      if (this.mode === 'sparring') {
        this._startSparringGame();
        return;
      }
      if (this.mode === 'endgames') {
        this._startEndgameDrill(this.activeEndgameKey || 'kq');
        return;
      }
      if (this.mode === 'woodpecker') {
        this._loadWoodpeckerNext();
        return;
      }
      if (this.mode === 'vision') {
        this._initVisionBoard();
        return;
      }
      if (this.mode === 'evalquiz') {
        this._loadNextEvalQuiz();
        return;
      }
      if (this.mode === 'kotov') {
        this._loadNextKotovPosition();
        return;
      }

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
        modeSparringTab: document.getElementById('modeSparringTab'),
        modeEndgamesTab: document.getElementById('modeEndgamesTab'),
        modeWoodpeckerTab: document.getElementById('modeWoodpeckerTab'),
        modeVisionTab: document.getElementById('modeVisionTab'),
        modeEvalQuizTab: document.getElementById('modeEvalQuizTab'),
        modeKotovTab: document.getElementById('modeKotovTab'),
        woodpeckerPanel: document.getElementById('woodpeckerPanel'),
        woodpeckerCountVal: document.getElementById('woodpeckerCountVal'),
        woodpeckerNextBtn: document.getElementById('woodpeckerNextBtn'),
        woodpeckerSeedBtn: document.getElementById('woodpeckerSeedBtn'),
        visionPanel: document.getElementById('visionPanel'),
        visionKindGroup: document.getElementById('visionKindGroup'),
        visionTargetSq: document.getElementById('visionTargetSq'),
        visionTimerVal: document.getElementById('visionTimerVal'),
        visionScoreVal: document.getElementById('visionScoreVal'),
        visionBestVal: document.getElementById('visionBestVal'),
        visionColorBtns: document.getElementById('visionColorBtns'),
        visionLightBtn: document.getElementById('visionLightBtn'),
        visionDarkBtn: document.getElementById('visionDarkBtn'),
        visionStartBtn: document.getElementById('visionStartBtn'),
        evalQuizPanel: document.getElementById('evalQuizPanel'),
        evalQuizStreak: document.getElementById('evalQuizStreak'),
        evalQuizResult: document.getElementById('evalQuizResult'),
        evalQuizNextBtn: document.getElementById('evalQuizNextBtn'),
        kotovPanel: document.getElementById('kotovPanel'),
        kotovCandidatesList: document.getElementById('kotovCandidatesList'),
        kotovResult: document.getElementById('kotovResult'),
        kotovNextBtn: document.getElementById('kotovNextBtn'),
        modePuzzlesText: document.getElementById('modePuzzlesText'),
        modeOpeningsText: document.getElementById('modeOpeningsText'),
        modeMaterialText: document.getElementById('modeMaterialText'),
        modeDefenseText: document.getElementById('modeDefenseText'),
        modeFamousText: document.getElementById('modeFamousText'),
        modeAnalysisText: document.getElementById('modeAnalysisText'),
        modeRushText: document.getElementById('modeRushText'),
        modeSparringText: document.getElementById('modeSparringText'),
        modeEndgamesText: document.getElementById('modeEndgamesText'),
        endgamesPanel: document.getElementById('endgamesPanel'),
        endgamesPanelTitle: document.getElementById('endgamesPanelTitle'),
        boardHintFab: document.getElementById('boardHintFab'),
        boardBlunderOverlay: document.getElementById('boardBlunderOverlay'),
        boardBlunderMsg: document.getElementById('boardBlunderMsg'),
        boardBlunderUndoBtn: document.getElementById('boardBlunderUndoBtn'),
        boardBlunderKeepBtn: document.getElementById('boardBlunderKeepBtn'),
        filterBar: document.getElementById('filterBar'),
        movesFilterWrap: document.getElementById('movesFilterWrap'),
        navControlsRow: document.getElementById('navControlsRow'),

        sparringPanel: document.getElementById('sparringPanel'),
        sparringLevelLabel: document.getElementById('sparringLevelLabel'),
        sparringLevelGroup: document.getElementById('sparringLevelGroup'),
        sparringColorLabel: document.getElementById('sparringColorLabel'),
        sparringColorGroup: document.getElementById('sparringColorGroup'),
        sparringColorW: document.getElementById('sparringColorW'),
        sparringColorB: document.getElementById('sparringColorB'),
        sparringGuardBtn: document.getElementById('sparringGuardBtn'),
        sparringGuardText: document.getElementById('sparringGuardText'),
        sparringRadarBtn: document.getElementById('sparringRadarBtn'),
        sparringRadarText: document.getElementById('sparringRadarText'),
        sparringEvalLabel: document.getElementById('sparringEvalLabel'),
        sparringEvalVal: document.getElementById('sparringEvalVal'),
        sparringEvalFill: document.getElementById('sparringEvalFill'),
        sparringBlunderBox: document.getElementById('sparringBlunderBox'),
        sparringHintBox: document.getElementById('sparringHintBox'),
        sparringHintPills: document.getElementById('sparringHintPills'),
        sparringHintPvLine: document.getElementById('sparringHintPvLine'),
        sparringBlunderTitle: document.getElementById('sparringBlunderTitle'),
        sparringBlunderText: document.getElementById('sparringBlunderText'),
        sparringBlunderUndoBtn: document.getElementById('sparringBlunderUndoBtn'),
        sparringBlunderUndoText: document.getElementById('sparringBlunderUndoText'),
        sparringBlunderKeepBtn: document.getElementById('sparringBlunderKeepBtn'),
        sparringBlunderKeepText: document.getElementById('sparringBlunderKeepText'),
        sparringNewGameBtn: document.getElementById('sparringNewGameBtn'),
        sparringNewGameText: document.getElementById('sparringNewGameText'),
        sparringUndoBtn: document.getElementById('sparringUndoBtn'),
        sparringUndoText: document.getElementById('sparringUndoText'),
        sparringHintBtn: document.getElementById('sparringHintBtn'),
        sparringHintText: document.getElementById('sparringHintText'),
        sparringResignBtn: document.getElementById('sparringResignBtn'),
        sparringResignText: document.getElementById('sparringResignText'),
        sparringEndgamesLabel: document.getElementById('sparringEndgamesLabel'),
        sparringEndgamesGroup: document.getElementById('sparringEndgamesGroup'),
        sparringMaterialWrap: document.getElementById('sparringMaterialWrap'),
        sparringMaterialLabel: document.getElementById('sparringMaterialLabel'),
        sparringMaterialGroup: document.getElementById('sparringMaterialGroup'),
        playPuzzleVsBotBtn: document.getElementById('playPuzzleVsBotBtn'),
        playPuzzleVsBotText: document.getElementById('playPuzzleVsBotText'),
        rushKindGroup: document.getElementById('rushKindGroup'),
        rushBotLevelRow: document.getElementById('rushBotLevelRow'),
        rushBotLevelGroup: document.getElementById('rushBotLevelGroup'),

        analysisPanel: document.getElementById('analysisPanel'),
        analysisStepLabel: document.getElementById('analysisStepLabel'),
        analysisStepVal: document.getElementById('analysisStepVal'),
        analysisMoveBadge: document.getElementById('analysisMoveBadge'),
        analysisAutoTargetBtn: document.getElementById('analysisAutoTargetBtn'),
        analysisAutoTargetText: document.getElementById('analysisAutoTargetText'),
        analysisFlipBtn: document.getElementById('analysisFlipBtn'),
        analysisImportBtn: document.getElementById('analysisImportBtn'),
        analysisImportText: document.getElementById('analysisImportText'),
        analysisRetryBotBtn: document.getElementById('analysisRetryBotBtn'),
        analysisRetryBotText: document.getElementById('analysisRetryBotText'),
        pgnImportBox: document.getElementById('pgnImportBox'),
        pgnImportLabel: document.getElementById('pgnImportLabel'),
        pgnInput: document.getElementById('pgnInput'),
        pgnLoadBtn: document.getElementById('pgnLoadBtn'),
        pgnLoadText: document.getElementById('pgnLoadText'),
        pgnCancelBtn: document.getElementById('pgnCancelBtn'),
        pgnCancelText: document.getElementById('pgnCancelText'),
        pgnErrorMsg: document.getElementById('pgnErrorMsg'),
        analysisBlundersWrap: document.getElementById('analysisBlundersWrap'),
        analysisBlundersLabel: document.getElementById('analysisBlundersLabel'),
        analysisBlundersList: document.getElementById('analysisBlundersList'),
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
      if (this.dom.modeSparringTab) {
        this.dom.modeSparringTab.addEventListener('click', () => this.setMode('sparring'));
      }
      if (this.dom.modeEndgamesTab) {
        this.dom.modeEndgamesTab.addEventListener('click', () => this.setMode('endgames'));
      }
      if (this.dom.modeWoodpeckerTab) {
        this.dom.modeWoodpeckerTab.addEventListener('click', () => this.setMode('woodpecker'));
      }
      if (this.dom.modeVisionTab) {
        this.dom.modeVisionTab.addEventListener('click', () => this.setMode('vision'));
      }
      if (this.dom.modeEvalQuizTab) {
        this.dom.modeEvalQuizTab.addEventListener('click', () => this.setMode('evalquiz'));
      }
      if (this.dom.modeKotovTab) {
        this.dom.modeKotovTab.addEventListener('click', () => this.setMode('kotov'));
      }
      if (this.dom.woodpeckerNextBtn) {
        this.dom.woodpeckerNextBtn.addEventListener('click', () => this._loadWoodpeckerNext());
      }
      if (this.dom.woodpeckerSeedBtn) {
        this.dom.woodpeckerSeedBtn.addEventListener('click', () => this._seedWoodpeckerSet());
      }
      if (this.dom.visionKindGroup) {
        this.dom.visionKindGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.vision-kind-btn');
          if (!btn) return;
          this.gm.vision.kind = btn.dataset.kind;
          this.dom.visionKindGroup.querySelectorAll('.vision-kind-btn').forEach((b) => {
            b.classList.toggle('active', b === btn);
          });
          this.dom.visionColorBtns.classList.toggle('hidden', this.gm.vision.kind !== 'color');
          this._stopVisionTimer();
          this._initVisionBoard();
        });
      }
      if (this.dom.visionStartBtn) {
        this.dom.visionStartBtn.addEventListener('click', () => this._startVisionSession());
      }
      if (this.dom.visionLightBtn) {
        this.dom.visionLightBtn.addEventListener('click', () => this._answerVisionColor('light'));
      }
      if (this.dom.visionDarkBtn) {
        this.dom.visionDarkBtn.addEventListener('click', () => this._answerVisionColor('dark'));
      }
      if (this.dom.evalQuizPanel) {
        this.dom.evalQuizPanel.querySelectorAll('.eval-choice-btn').forEach((btn) => {
          btn.addEventListener('click', () => this._answerEvalQuiz(btn.dataset.choice));
        });
      }
      if (this.dom.evalQuizNextBtn) {
        this.dom.evalQuizNextBtn.addEventListener('click', () => this._loadNextEvalQuiz());
      }
      if (this.dom.kotovNextBtn) {
        this.dom.kotovNextBtn.addEventListener('click', () => this._loadNextKotovPosition());
      }

      // Coach Sparring controls
      if (this.dom.sparringLevelGroup) {
        this.dom.sparringLevelGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.sparring-level-btn');
          if (!btn) return;
          this.sparring.level = btn.dataset.level;
          this._renderSparringPanel();
        });
      }
      if (this.dom.sparringColorGroup) {
        this.dom.sparringColorGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.sparring-color-btn');
          if (!btn) return;
          const nextColor = btn.dataset.color;
          if (nextColor !== this.sparring.playerColor) {
            this.sparring.playerColor = nextColor;
            this._startSparringGame();
          }
        });
      }
      if (this.dom.sparringGuardBtn) {
        this.dom.sparringGuardBtn.addEventListener('click', () => {
          this.sparring.blunderGuard = !this.sparring.blunderGuard;
          this._renderSparringPanel();
        });
      }
      if (this.dom.sparringRadarBtn) {
        this.dom.sparringRadarBtn.addEventListener('click', () => {
          this.sparring.threatRadar = !this.sparring.threatRadar;
          this._renderSparringPanel();
          this._renderBoard();
        });
      }
      if (this.dom.sparringBlunderUndoBtn) {
        this.dom.sparringBlunderUndoBtn.addEventListener('click', () => this._undoSparringBlunder());
      }
      if (this.dom.sparringBlunderKeepBtn) {
        this.dom.sparringBlunderKeepBtn.addEventListener('click', () => this._keepSparringBlunder());
      }
      if (this.dom.boardBlunderUndoBtn) {
        this.dom.boardBlunderUndoBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this._undoSparringBlunder();
        });
      }
      if (this.dom.boardBlunderKeepBtn) {
        this.dom.boardBlunderKeepBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this._keepSparringBlunder();
        });
      }
      if (this.dom.sparringNewGameBtn) {
        this.dom.sparringNewGameBtn.addEventListener('click', () => this._startSparringGame());
      }
      if (this.dom.sparringUndoBtn) {
        this.dom.sparringUndoBtn.addEventListener('click', () => this._undoSparringPair());
      }
      if (this.dom.sparringHintBtn) {
        this.dom.sparringHintBtn.addEventListener('click', () => this._showSparringHint());
      }
      if (this.dom.sparringResignBtn) {
        this.dom.sparringResignBtn.addEventListener('click', () => this._resignSparring());
      }
      if (this.dom.sparringEndgamesGroup) {
        this.dom.sparringEndgamesGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.endgame-drill-btn');
          if (!btn) return;
          this._startEndgameDrill(btn.dataset.endgame);
        });
      }
      if (this.dom.sparringMaterialGroup) {
        this.dom.sparringMaterialGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.endgame-drill-btn');
          if (!btn) return;
          this._startMaterialScenario(btn.dataset.scenario);
        });
      }
      if (this.dom.playPuzzleVsBotBtn) {
        this.dom.playPuzzleVsBotBtn.addEventListener('click', () => {
          if (!this.engine) return;
          const fen = this.engine.toFen();
          this.sparring.playerColor = this.engine.turn;
          this.setMode('sparring');
          this._startSparringGame(fen);
        });
      }
      if (this.dom.rushKindGroup) {
        this.dom.rushKindGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.rush-kind-btn');
          if (!btn || this.rush.active) return;
          this.rush.vsBot = btn.dataset.kind === 'bot';
          this.dom.rushKindGroup.querySelectorAll('.rush-kind-btn').forEach((b) => {
            b.classList.toggle('active', b === btn);
          });
          if (this.dom.rushBotLevelRow) {
            this.dom.rushBotLevelRow.classList.toggle('hidden', !this.rush.vsBot);
          }
        });
      }
      if (this.dom.rushBotLevelGroup) {
        this.dom.rushBotLevelGroup.addEventListener('click', (e) => {
          const btn = e.target.closest('.rush-bot-lvl-btn');
          if (!btn) return;
          this.rush.botLevel = btn.dataset.level;
          this.dom.rushBotLevelGroup.querySelectorAll('.rush-bot-lvl-btn').forEach((b) => {
            b.classList.toggle('active', b === btn);
          });
        });
      }

      // Floating Board Hint Icon + Keyboard Shortcut 'H'
      const triggerQuickHint = () => {
        if (this.mode === 'analysis') return;
        if (this._isSparringLikeMode()) {
          this._showSparringHint();
        } else {
          this.showHint();
        }
      };
      if (this.dom.boardHintFab) {
        this.dom.boardHintFab.addEventListener('click', (e) => {
          e.stopPropagation();
          triggerQuickHint();
        });
      }
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        const tag = e.target && e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        if (e.key === 'h' || e.key === 'H') {
          e.preventDefault();
          triggerQuickHint();
        }
      });

      // PGN Import & Retry from Blunder (Battle Analysis)
      if (this.dom.analysisImportBtn) {
        this.dom.analysisImportBtn.addEventListener('click', () => {
          this.dom.pgnImportBox.classList.toggle('hidden');
          this.dom.pgnErrorMsg.classList.add('hidden');
          if (!this.dom.pgnImportBox.classList.contains('hidden')) {
            this.dom.pgnInput.focus();
          }
        });
      }
      if (this.dom.pgnCancelBtn) {
        this.dom.pgnCancelBtn.addEventListener('click', () => {
          this.dom.pgnImportBox.classList.add('hidden');
          this.dom.pgnErrorMsg.classList.add('hidden');
        });
      }
      if (this.dom.pgnLoadBtn) {
        this.dom.pgnLoadBtn.addEventListener('click', () => this._importCustomPgn());
      }
      if (this.dom.analysisRetryBotBtn) {
        this.dom.analysisRetryBotBtn.addEventListener('click', () =>
          this._retryAnalysisPositionInSparring()
        );
      }

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
      if (this.dom.modeSparringText) {
        this.dom.modeSparringText.textContent = this.t('modeSparringTab');
        this.dom.sparringLevelLabel.textContent = this.t('sparringLevelLabel');
        this.dom.sparringColorLabel.textContent = this.t('sparringColorLabel');
        this.dom.sparringColorW.textContent = this.t('sparringColorW');
        this.dom.sparringColorB.textContent = this.t('sparringColorB');
        this.dom.sparringEvalLabel.textContent = this.t('sparringEvalLabel');
        this.dom.sparringBlunderTitle.textContent = this.t('sparringBlunderTitle');
        this.dom.sparringBlunderUndoText.textContent = this.t('sparringBlunderUndo');
        this.dom.sparringBlunderKeepText.textContent = this.t('sparringBlunderKeep');
        this.dom.sparringNewGameText.textContent = this.t('sparringNewGame');
        this.dom.sparringUndoText.textContent = this.t('sparringUndo');
        this.dom.sparringHintText.textContent = this.t('sparringHint');
        this.dom.sparringResignText.textContent = this.t('sparringResign');
        if (this.dom.modeEndgamesText) {
          this.dom.modeEndgamesText.textContent = this.t('modeEndgamesTab');
        }
        if (this.dom.endgamesPanelTitle) {
          this.dom.endgamesPanelTitle.textContent = this.t('endgamesPanelTitle');
        }
        if (this.dom.sparringMaterialLabel) {
          this.dom.sparringMaterialLabel.textContent = this.t('sparringMaterialLabel');
        }
        if (this.dom.playPuzzleVsBotText) {
          this.dom.playPuzzleVsBotText.textContent = this.t('playPuzzleVsBot');
        }
        this._renderSparringPanel();
      }

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
        if (this.dom.analysisImportText) {
          this.dom.analysisImportText.textContent = this.t('analysisImportBtn');
          this.dom.analysisRetryBotText.textContent = this.t('analysisRetryBotBtn');
          this.dom.pgnImportLabel.textContent = this.t('pgnImportLabel');
          this.dom.pgnLoadText.textContent = this.t('pgnLoadBtn');
          this.dom.pgnCancelText.textContent = this.t('pgnCancelBtn');
          this.dom.analysisBlundersLabel.textContent = this.t('analysisBlundersLabel');
        }
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
      if (this.rush.vsBot) {
        this.engine = new window.ChessEngine();
        this.playerColor = 'w';
        this.flipped = false;
        this.selectedSquare = null;
        this.legalTargetsForSelected = [];
        this.lastMoveSquares = null;
        this.wrongMoveSquare = null;
        this.playedMoves = [];
        this.hintLevel = 0;
        this.status = 'playing';
        this.currentPuzzle = {
          id: 'rush-bot',
          difficulty: 'medium',
          movesToMate: 0,
          themes: [],
          solution: [],
          title: { en: `Blitz vs Bot (${this.rush.botLevel})`, pl: `Blitz z Botem (${this.rush.botLevel})` }
        };
        this._renderBoard();
        this._renderMoveHistory();
        this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
        return;
      }
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

    _retryAnalysisPositionInSparring() {
      if (this.mode !== 'analysis' || !this.engine) return;
      this._stopAnalysisAutoPlay();
      const fen = this.engine.toFen();
      this.sparring.playerColor = this.engine.turn;
      this.setMode('sparring');
      this._startSparringGame(fen);
    }

    _importCustomPgn() {
      const raw = (this.dom.pgnInput ? this.dom.pgnInput.value : '').trim();
      if (!raw) {
        this.dom.pgnErrorMsg.textContent = this.t('pgnErrorEmpty');
        this.dom.pgnErrorMsg.classList.remove('hidden');
        return;
      }

      // Parse optional PGN headers
      const getHeader = (name) => {
        const m = raw.match(new RegExp(`\\[${name}\\s+"([^"]+)"\\]`, 'i'));
        return m ? m[1].trim() : '';
      };
      const whiteName = getHeader('White');
      const blackName = getHeader('Black');
      const startFen =
        getHeader('FEN') || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

      // Strip headers, comments {..}, variations (..), NAGs ($1), and results
      let moveText = raw
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\{[^}]*\}/g, ' ')
        .replace(/\([^)]*\)/g, ' ')
        .replace(/\$\d+/g, ' ')
        .replace(/\b(1-0|0-1|1\/2-1\/2|\*)\b/g, ' ')
        .trim();

      const tokens = this._parseMoveTokens(moveText);
      if (tokens.length === 0) {
        this.dom.pgnErrorMsg.textContent = this.t('pgnErrorNoMoves');
        this.dom.pgnErrorMsg.classList.remove('hidden');
        return;
      }

      const customId = 'custom-' + Date.now();
      const titleEn = this.t('customGameTitle')(whiteName, blackName);
      const customBattle = {
        id: customId,
        difficulty: 'medium',
        isBattleAnalysis: true,
        isCustomImport: true,
        fen: startFen,
        moves: tokens,
        themes: ['custom'],
        title: { en: titleEn, pl: titleEn },
        overview: {
          en: `Imported game (${tokens.length} half-moves). Blunders are highlighted below — click any blunder chip and press "Retry from Here vs Bot" to practice!`,
          pl: `Zaimportowana partia (${tokens.length} półruchów). Poniżej zaznaczono wykryte błędy — kliknij dowolny błąd i wybierz „Zagraj stąd z botem”, aby go przećwiczyć!`
        },
        annotations: {}
      };

      // Validate by building snapshots
      const snapshots = this._buildBattleSnapshots(customBattle);
      if (snapshots.length <= 1) {
        this.dom.pgnErrorMsg.textContent = this.t('pgnErrorNoMoves');
        this.dom.pgnErrorMsg.classList.remove('hidden');
        return;
      }

      // Run fast blunder detection across all plies
      this._analyzeSnapshotsForBlunders(snapshots);
      customBattle._precomputedBlunders = snapshots
        .filter((s) => s.isBlunder)
        .map((s) => ({ ply: s.ply, key: s.moveKey, cpLoss: s.cpLoss }));

      if (Array.isArray(window.BATTLE_ANALYSES)) {
        window.BATTLE_ANALYSES.unshift(customBattle);
      }
      this.dom.pgnImportBox.classList.add('hidden');
      this.dom.pgnErrorMsg.classList.add('hidden');
      this.dom.pgnInput.value = '';

      this._updateFilteredPuzzles(false);
      this.loadPuzzle(customId);
      // Attach precomputed blunder metadata to active analysis snapshots
      for (const b of customBattle._precomputedBlunders) {
        if (this.analysis.snapshots[b.ply]) {
          this.analysis.snapshots[b.ply].isBlunder = true;
          this.analysis.snapshots[b.ply].cpLoss = b.cpLoss;
        }
      }
      this._renderBlunderChips();
    }

    _analyzeSnapshotsForBlunders(snapshots) {
      const evalEng = new window.ChessEngine();
      let prevEvalWhite = 0;
      for (let i = 0; i < snapshots.length; i++) {
        const snap = snapshots[i];
        evalEng.loadFen(snap.fen);
        // Fast 1-ply + quiescence eval for snappy full-game scanning
        const res = evalEng.getBestMove({ depth: 1, noise: 0, quiesce: true, timeMs: 60 });
        const curEvalWhite = res ? res.evalWhite : evalEng.evaluatePosition();
        snap.evalWhite = curEvalWhite;

        if (i > 0 && snap.moveObj) {
          const moverSign = snap.moveObj.color === 'w' ? 1 : -1;
          const cpLoss = moverSign * (prevEvalWhite - curEvalWhite);
          if (cpLoss >= 180) {
            snap.isBlunder = true;
            snap.cpLoss = Math.round(cpLoss);
          }
        }
        prevEvalWhite = curEvalWhite;
      }
    }

    _renderBlunderChips() {
      if (!this.dom.analysisBlundersWrap || !this.dom.analysisBlundersList) return;
      const snaps = this.analysis.snapshots || [];
      const blunders = snaps.filter((s) => s.isBlunder);
      if (blunders.length === 0) {
        this.dom.analysisBlundersWrap.classList.add('hidden');
        this.dom.analysisBlundersList.innerHTML = '';
        return;
      }
      this.dom.analysisBlundersWrap.classList.remove('hidden');
      this.dom.analysisBlundersList.innerHTML = blunders
        .map((b) => {
          const pawns = (b.cpLoss / 100).toFixed(1);
          return `<button type="button" class="blunder-chip" data-ply="${b.ply}">🔴 ${b.moveKey}? (-${pawns})</button>`;
        })
        .join('');
      this.dom.analysisBlundersList.querySelectorAll('.blunder-chip').forEach((btn) => {
        btn.addEventListener('click', () => {
          const ply = parseInt(btn.dataset.ply, 10);
          // Jump to the position RIGHT BEFORE the blunder so user can see what they should have played
          this._stopAnalysisAutoPlay();
          this._stepAnalysisTo(Math.max(0, ply - 1), false);
        });
      });
    }

    // =========================================================================
    // COACH SPARRING MODE (Play vs. Built-in Bot + Blunder Guard + Threat Radar)
    // =========================================================================
    // =========================================================================
    // GM TRAINING TABS (WOODPECKER, VISION, EVAL QUIZ, KOTOV)
    // =========================================================================
    _renderWoodpeckerPanel() {
      if (this.dom.woodpeckerCountVal) {
        this.dom.woodpeckerCountVal.textContent = String((this.state.mistakes || []).length);
      }
    }

    _seedWoodpeckerSet() {
      const pool = [...(window.PUZZLES || []), ...(window.WIN_MATERIAL_PUZZLES || []), ...(window.DEFENSE_PUZZLES || [])];
      const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 10);
      const set = new Set(this.state.mistakes || []);
      for (const p of shuffled) set.add(p.id);
      this.state.mistakes = Array.from(set);
      this._saveState();
      this._loadWoodpeckerNext();
    }

    _loadWoodpeckerNext() {
      this._renderWoodpeckerPanel();
      const all = this._getAllItems();
      const validIds = (this.state.mistakes || []).filter((id) => all.some((x) => x.id === id));
      this.state.mistakes = validIds;
      this._saveState();
      this._renderWoodpeckerPanel();
      if (validIds.length === 0) {
        this._seedWoodpeckerSet();
        return;
      }
      const nextId = validIds[Math.floor(Math.random() * validIds.length)];
      this.loadPuzzle(nextId);
    }

    _stopVisionTimer() {
      if (this.gm.vision.intervalId) {
        clearInterval(this.gm.vision.intervalId);
        this.gm.vision.intervalId = null;
      }
      this.gm.vision.active = false;
    }

    _initVisionBoard() {
      this._stopVisionTimer();
      this.engine = new window.ChessEngine('8/8/8/8/8/8/8/8 w - - 0 1');
      this.playerColor = 'w';
      this.flipped = false;
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.lastMoveSquares = null;
      this.currentPuzzle = { id: 'vision', solution: [], title: { en: 'Board Vision', pl: 'Wizualizacja' } };
      this.status = 'playing';
      this.gm.vision.score = 0;
      this.gm.vision.secondsLeft = 30;
      this._nextVisionTarget();
      this._renderVisionHud();
      this._renderBoard();
      this._renderStatusAndCoach('progress', 'Kliknij „Rozpocznij trening (30s)” i wskazuj szukane pola bez współrzędnych!');
    }

    _nextVisionTarget() {
      const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
      const sq = files[Math.floor(Math.random() * 8)] + ranks[Math.floor(Math.random() * 8)];
      this.gm.vision.targetSq = sq;
      if (this.dom.visionTargetSq) this.dom.visionTargetSq.textContent = sq;
    }

    _renderVisionHud() {
      if (this.dom.visionTimerVal) this.dom.visionTimerVal.textContent = `${this.gm.vision.secondsLeft}s`;
      if (this.dom.visionScoreVal) this.dom.visionScoreVal.textContent = String(this.gm.vision.score);
      if (this.dom.visionBestVal) this.dom.visionBestVal.textContent = String(this.state.visionBest || 0);
    }

    _startVisionSession() {
      this._stopVisionTimer();
      this.gm.vision.active = true;
      this.gm.vision.score = 0;
      this.gm.vision.secondsLeft = 30;
      this._nextVisionTarget();
      this._renderVisionHud();
      this.gm.vision.intervalId = setInterval(() => {
        if (!this.gm.vision.active) return;
        this.gm.vision.secondsLeft--;
        this._renderVisionHud();
        if (this.gm.vision.secondsLeft <= 0) {
          this._stopVisionTimer();
          if (this.gm.vision.score > (this.state.visionBest || 0)) {
            this.state.visionBest = this.gm.vision.score;
            this._saveState();
          }
          this._renderVisionHud();
          this.sound.solved();
          this._renderStatusAndCoach('solved', `Koniec czasu! Twój wynik: ${this.gm.vision.score} pól w 30s!`);
        }
      }, 1000);
    }

    _handleVisionSquareClick(sq) {
      if (this.gm.vision.kind !== 'click') return;
      if (!this.gm.vision.active) this._startVisionSession();
      if (sq === this.gm.vision.targetSq) {
        this.gm.vision.score++;
        this.sound.move();
        this.lastMoveSquares = { from: sq, to: sq };
        this._nextVisionTarget();
      } else {
        this.sound.wrong();
        this.wrongMoveSquare = sq;
        this._schedule(() => { this.wrongMoveSquare = null; this._renderBoard(); }, 300);
      }
      this._renderVisionHud();
      this._renderBoard();
    }

    _answerVisionColor(choice) {
      if (this.gm.vision.kind !== 'color') return;
      if (!this.gm.vision.active) this._startVisionSession();
      const sq = this.gm.vision.targetSq;
      const c = 'abcdefgh'.indexOf(sq[0]);
      const r = parseInt(sq[1], 10) - 1;
      const actual = (r + c) % 2 === 1 ? 'light' : 'dark';
      if (choice === actual) {
        this.gm.vision.score++;
        this.sound.move();
        this._nextVisionTarget();
      } else {
        this.sound.wrong();
      }
      this._renderVisionHud();
    }

    _loadNextEvalQuiz() {
      const pool = [
        ...(window.WIN_MATERIAL_PUZZLES || []),
        ...(window.DEFENSE_PUZZLES || []),
        ...(window.FAMOUS_GAMES || [])
      ];
      const item = pool[Math.floor(Math.random() * pool.length)];
      this.engine = new window.ChessEngine(item.fen);
      this.playerColor = this.engine.turn;
      this.flipped = this.playerColor === 'b';
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.lastMoveSquares = null;
      this.currentPuzzle = { id: 'evalquiz', solution: [], title: item.title };
      this.status = 'playing';

      const res = this.engine.getBestMove({ depth: 2, noise: 0, quiesce: true, timeMs: 250 });
      this.gm.evalQuiz.evalWhite = res ? res.evalWhite : this.engine.evaluatePosition();
      this.gm.evalQuiz.bestMove = res ? res.move : null;
      this.gm.evalQuiz.answered = false;

      if (this.dom.evalQuizResult) this.dom.evalQuizResult.classList.add('hidden');
      if (this.dom.evalQuizStreak) this.dom.evalQuizStreak.textContent = `Seria: ${this.gm.evalQuiz.streak}`;
      this._renderBoard();
      this._renderStatusAndCoach('progress', `Ruch: ${this.engine.turn === 'w' ? 'Białe' : 'Czarne'} — kto stoi lepiej?`);
    }

    _answerEvalQuiz(choice) {
      if (this.gm.evalQuiz.answered) return;
      this.gm.evalQuiz.answered = true;
      const cp = this.gm.evalQuiz.evalWhite;
      const actual = cp >= 120 ? 'white' : cp <= -120 ? 'black' : 'equal';
      const ok = choice === actual;
      if (ok) {
        this.gm.evalQuiz.streak++;
        this.sound.solved();
      } else {
        this.gm.evalQuiz.streak = 0;
        this.sound.wrong();
      }
      const pawns = Math.abs(cp) >= 25000 ? (cp > 0 ? '+M' : '-M') : (cp > 0 ? `+${(cp / 100).toFixed(1)}` : (cp / 100).toFixed(1));
      const bm = this.gm.evalQuiz.bestMove;
      const bmStr = bm ? `${bm.from}→${bm.to}` : '—';
      if (this.dom.evalQuizResult) {
        this.dom.evalQuizResult.classList.remove('hidden');
        this.dom.evalQuizResult.innerHTML = `${ok ? '✅ Świetna intuicja!' : '❌ Inaczej ocenia silnik.'} Ocena: <strong>${pawns}</strong>. Najlepszy ruch: <strong>${bmStr}</strong> (zielona strzałka).`;
      }
      if (this.dom.evalQuizStreak) this.dom.evalQuizStreak.textContent = `Seria: ${this.gm.evalQuiz.streak}`;
      if (bm) {
        this._renderAnalysisArrows([{ from: bm.from, to: bm.to, color: 'green' }]);
      }
    }

    _loadNextKotovPosition() {
      const pool = [
        ...(window.DEFENSE_PUZZLES || []),
        ...(window.WIN_MATERIAL_PUZZLES || []),
        ...(window.FAMOUS_GAMES || [])
      ];
      const item = pool[Math.floor(Math.random() * pool.length)];
      this.engine = new window.ChessEngine(item.fen);
      this.playerColor = this.engine.turn;
      this.flipped = this.playerColor === 'b';
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.lastMoveSquares = null;
      this.currentPuzzle = { id: 'kotov', solution: [], title: item.title };
      this.status = 'playing';
      this.gm.kotov = { candidates: [], evaluated: false, bestMove: null };

      ['kotovChkChecks', 'kotovChkCaptures', 'kotovChkThreats'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.checked = false;
      });
      if (this.dom.kotovCandidatesList) this.dom.kotovCandidatesList.innerHTML = '';
      if (this.dom.kotovResult) this.dom.kotovResult.classList.add('hidden');
      this._renderBoard();
      this._renderStatusAndCoach('progress', 'Odhacz checklistę S-B-G i wskaż na planszy 2 ruchy kandydujące!');
    }

    _addKotovCandidate(from, to, promotion) {
      if (this.gm.kotov.evaluated) return;
      const legal = this.engine.getLegalMoves();
      const chosen = legal.find((m) => m.from === from && m.to === to && (!m.promotion || m.promotion === (promotion || 'q')));
      if (!chosen) return;
      const san = this.engine.moveToSan(chosen);
      if (this.gm.kotov.candidates.some((c) => c.from === from && c.to === to)) return;

      // Evaluate this candidate move
      const snap = this.engine._applyRawMove(chosen);
      const reply = this.engine.getBestMove({ depth: 2, noise: 0, quiesce: true, timeMs: 200 });
      const evalWhite = reply ? reply.evalWhite : this.engine.evaluatePosition();
      this.engine._undoRawMove(snap);

      this.gm.kotov.candidates.push({ from, to, san, evalWhite });
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.sound.move();

      if (this.dom.kotovCandidatesList) {
        this.dom.kotovCandidatesList.innerHTML = this.gm.kotov.candidates
          .map((c, idx) => `<span class="kotov-chip">#${idx + 1}: ${c.san}</span>`)
          .join('');
      }

      if (this.gm.kotov.candidates.length >= 2) {
        this.gm.kotov.evaluated = true;
        const best = this.engine.getBestMove({ depth: 2, noise: 0, quiesce: true, timeMs: 250 });
        const bestSan = best && best.move ? this.engine.moveToSan(best.move) : '—';
        const fmt = (cp) => (Math.abs(cp) >= 25000 ? (cp > 0 ? '+M' : '-M') : (cp > 0 ? `+${(cp / 100).toFixed(1)}` : (cp / 100).toFixed(1)));
        const [c1, c2] = this.gm.kotov.candidates;
        if (this.dom.kotovResult) {
          this.dom.kotovResult.classList.remove('hidden');
          this.dom.kotovResult.innerHTML =
            `<strong>Porównanie kandydatów:</strong><br/>` +
            `1. <strong>${c1.san}</strong> → ocena <strong>${fmt(c1.evalWhite)}</strong><br/>` +
            `2. <strong>${c2.san}</strong> → ocena <strong>${fmt(c2.evalWhite)}</strong><br/>` +
            `🏆 Najlepszy ruch silnika: <strong>${bestSan}</strong> (zielona strzałka).`;
        }
        const arrows = [
          { from: c1.from, to: c1.to, color: 'blue' },
          { from: c2.from, to: c2.to, color: 'amber' }
        ];
        if (best && best.move) arrows.push({ from: best.move.from, to: best.move.to, color: 'green' });
        this._renderAnalysisArrows(arrows);
        this.sound.solved();
      } else {
        this._renderAnalysisArrows([{ from, to, color: 'blue' }]);
      }
    }

    _startMaterialScenario(key) {
      const scenarios = {
        punish_center: {
          fen: 'r1bqk2r/ppp2ppp/2n2n2/3p4/1b1P4/2N2N2/PPP2PPP/R1BQR1K1 w kq - 0 8',
          en: 'Win Material vs Bot: Punish the Uncastled King — Open the e-file, pin pieces, and win material!',
          pl: 'Zdobądź Przewagę (vs Bot): Ukarz króla w centrum — Wykorzystaj wieżę na e1 i atakuj króla na e8!'
        },
        kingside_storm: {
          fen: 'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 0 9',
          en: 'Win Material vs Bot: Opposite-Side Castling Storm — Push g4-h4, trade off the g7-bishop, and attack!',
          pl: 'Zdobądź Przewagę (vs Bot): Szturm na króla — Pchaj pionki g4-h4, wymień gońca g7 i otwórz linię h!'
        },
        pin_pressure: {
          fen: 'r2q1rk1/ppp1bppp/2n2n2/3p2B1/3P4/2N1PN2/PPP2PPP/R2Q1RK1 w - - 0 8',
          en: 'Win Material vs Bot: Pin Pressure — Pile up on the pinned pieces and dominate the center!',
          pl: 'Zdobądź Przewagę (vs Bot): Presja na związaniu — Wykorzystaj aktywność figur i szukaj taktyk w centrum!'
        },
        fork_hunt: {
          fen: 'r1bq1rk1/ppp2ppp/2n2n2/3pp3/1bB1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 6',
          en: 'Win Material vs Bot: Central Tension — Resolve the center accurately and look for knight forks and pins!',
          pl: 'Zdobądź Przewagę (vs Bot): Walka o centrum — Pilnuj figur i wykorzystuj napięcie w centrum do zdobycia przewagi!'
        },
        win_exchange: {
          fen: '2rq1rk1/pp2bppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/2RQ1RK1 w - - 0 11',
          en: 'Win Material vs Bot: Open c-File Battle — Fight for control of the c-file and outpost squares!',
          pl: 'Zdobądź Przewagę (vs Bot): Otwarta linia c — Walcz o kontrolę linii c i aktywne pola dla skoczków!'
        },
        convert_piece: {
          fen: 'r2q1rk1/ppp2ppp/5n2/3p4/3P4/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 0 9',
          color: 'w',
          en: 'Win Material vs Bot: Convert +1 Piece — Trade pieces cleanly, avoid counterplay, and convert your extra bishop!',
          pl: 'Zdobądź Przewagę (vs Bot): Realizuj +1 figurę — Wymieniaj figury, nie dawaj kontry i wygraj czysto!'
        },
        mate_backrank: {
          fen: '5rk1/5ppp/8/8/8/8/5PPP/3QR1K1 w - - 0 1',
          color: 'w',
          en: 'Mate Attack vs Bot: Weak Back Rank — Use your Queen + Rook coordination to break through on the 8th rank!',
          pl: 'Atak Matowy (vs Bot): Słaba 8. linia — Wykorzystaj współpracę Hetmana i Wieży przeciwko 8. linii!'
        },
        mate_kingside: {
          fen: 'r4rk1/ppp2ppp/2n5/3q4/3P4/3B4/PPP2PPP/R2Q1RK1 w - - 0 12',
          color: 'w',
          en: 'Mate Attack vs Bot: Q+B Kingside Attack — Aim at h7, activate your rooks, and build a mating net!',
          pl: 'Atak Matowy (vs Bot): Atak H+G na roszadę — Celuj w punkt h7, aktywizuj wieże i buduj sieć matową!'
        },
        mate_battery: {
          fen: 'r4rk1/ppp2pp1/2n2n1p/3p4/3P4/2PB1N2/PP3PPP/R2QR1K1 w - - 0 13',
          color: 'w',
          en: 'Mate Attack vs Bot: Target the Weakened h6 Hook — Build an attack against Black’s castled king!',
          pl: 'Atak Matowy (vs Bot): Wykorzystaj osłabienie h6 — Zbuduj atak na roszowanego króla czarnych!'
        },
        open_italian: {
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          color: 'w',
          en: 'Opening vs Bot: Italian Game — Play a solid middlegame from move 4 (c3, d3, O-O) against the bot!',
          pl: 'Debiut (vs Bot): Partia Włoska — Rozegraj solidnie od 4. ruchu (c3, d3, O-O) przeciwko botowi!'
        },
        open_london: {
          fen: 'rnbqkb1r/ppp2ppp/4pn2/3p4/3P1B2/4P3/PPP2PPP/RN1QKBNR w KQkq - 0 4',
          color: 'w',
          en: 'Opening vs Bot: London System — Complete your pyramid (Nf3, c3, Nbd2, Bd3) and outplay the bot!',
          pl: 'Debiut (vs Bot): System Londyński — Dokończ piramidę (Sf3, c3, Sbd2, Gd3) i ograj bota!'
        },
        open_carokann: {
          fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3',
          color: 'b',
          en: 'Opening vs Bot: Caro-Kann (Black) — Capture dxe4, bring out Bf5, and play a rock-solid game as Black!',
          pl: 'Debiut (vs Bot): Obrona Caro-Kann (Czarne) — Zbij dxe4, wyprowadź Gf5 i zagraj solidną partię czarnymi!'
        },
        def_castled: {
          fen: 'r2q1rk1/ppp2ppp/2n1bn2/3p4/3P2b1/2NB1N2/PPP1QPPP/R4RK1 b - - 0 10',
          color: 'b',
          en: 'Defense vs Bot: Defend Your Castled King — Neutralize White’s pieces and fight back as Black!',
          pl: 'Obrona (vs Bot): Obrona roszady — Zneutralizuj figury białych i przejmij inicjatywę czarnymi!'
        },
        def_pin: {
          fen: 'r1bq1rk1/ppp2ppp/2n2n2/3pp1B1/1bB1P3/2NP1N2/PPP2PPP/R2QK2R b KQ - 0 7',
          color: 'b',
          en: 'Defense vs Bot: Break the Pin & Counterattack — Unpin safely and punish White’s uncastled king!',
          pl: 'Obrona (vs Bot): Wyjście ze związania — Bezpiecznie wyjdź ze związania i ukarz króla białych w centrum!'
        },
        def_down_pawn: {
          fen: '2r2rk1/pp3ppp/2n1pn2/8/3P4/2NBPN2/PP3PPP/2R2RK1 b - - 0 14',
          color: 'b',
          en: 'Defense vs Bot: Active Defense Down a Pawn — Activate your rooks on the c-file and hold or turn the tables!',
          pl: 'Obrona (vs Bot): Obrona z pionkiem mniej — Aktywizuj wieże na linii c i odwróć losy partii!'
        }
      };
      const sc = scenarios[key];
      if (!sc) return;
      this.sparring.playerColor = sc.color || 'w';
      this._startSparringGame(sc.fen);
      const msg = this.state.lang === 'en' ? sc.en : sc.pl;
      this._renderStatusAndCoach('progress', msg);
    }

    _startEndgameDrill(key) {
      const drills = {
        kq: {
          fen: '8/8/8/4k3/8/8/3Q4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: K+Q vs K — Push the king to the edge and checkmate without stalemating!',
          pl: 'Końcówka: K+H vs K — Zepchnij króla na bandę i daj mata, uważając na pata!'
        },
        kr: {
          fen: '8/8/8/4k3/8/8/3R4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: K+R vs K — Cut off the king with your rook and walk your king up to mate!',
          pl: 'Końcówka: K+W vs K — Odetnij króla wieżą i podejdź własnym królem, aby dać mata!'
        },
        krr: {
          fen: '8/8/8/4k3/8/8/R6R/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: 2 Rooks Ladder Mate — Alternate rook checks to push the king to the 8th rank!',
          pl: 'Końcówka: Mat schodkowy (2 Wieże) — Naprzemiennie odcinaj linie i zepchnij króla na 8. linię!'
        },
        kbb: {
          fen: '8/8/8/4k3/8/8/2B1B3/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: 2 Bishops vs K — Use both bishops side-by-side to herd the king into a corner!',
          pl: 'Końcówka: 2 Gońce vs K — Ustaw gońce obok siebie, aby zagnać króla do narożnika!'
        },
        kp: {
          fen: '4k3/8/8/4P3/4K3/8/8/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: King + Pawn Opposition — Keep your king in front of the pawn and promote!',
          pl: 'Końcówka: Opozycja (K+P vs K) — Prowadź króla przed pionkiem i dorób hetmana!'
        },
        kp_edge: {
          fen: '7k/8/5K2/7P/8/8/8/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Rook-Pawn Edge Case — Notice how Black tries to trap your king or force stalemate!',
          pl: 'Końcówka: Pionek na bandzie — Zobacz jak ważne jest pole przed pionkiem i unikanie pata!'
        },
        race: {
          fen: '8/8/8/1p6/8/7P/6K1/2k5 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Pawn Race — Push your h-pawn and win the promotion race!',
          pl: 'Końcówka: Wyścig pionków — Pchaj pionka h i wygraj wyścig o promocję!'
        },
        breakthrough: {
          fen: '8/5ppp/8/5PPP/8/8/6K1/6k1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: 3 vs 3 Pawn Breakthrough — Sacrifice a pawn (g6! or f6!) to create an unstoppable passed pawn!',
          pl: 'Końcówka: Przełom pionowy 3 vs 3 — Poświęć pionka (g6!), aby stworzyć niepowstrzymanego wolnego pionka!'
        },
        lucena: {
          fen: '1K1k4/1P6/8/8/8/8/r7/3R4 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Lucena Bridge — Cut off the black king, push your rook to the 4th rank, and promote!',
          pl: 'Końcówka: Most Luceny — Odetnij czarnego króla, zbuduj most wieżą na 4. linii i dorób hetmana!'
        },
        philidor: {
          fen: '4k3/8/4K3/4P3/8/8/r7/5R2 b - - 0 1',
          color: 'b',
          en: 'Endgame Drill: Philidor Defense (Black) — Keep your rook on the 6th rank (Ra6!), then check from behind once e6 is played!',
          pl: 'Końcówka: Obrona Philidora (Czarne) — Ustaw wieżę na 6. linii (Wa6!), a po e6 szachuj od tyłu, aby utrzymać remis!'
        },
        convert: {
          fen: '6k1/5ppp/8/8/8/5N2/5PPP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Convert Extra Knight — Activate your king and knight to win cleanly!',
          pl: 'Końcówka: Realizacja przewagi skoczka — Aktywizuj króla i skoczka, aby czysto wygrać!'
        },
        opp_bishops: {
          fen: '6k1/5ppp/8/4b3/3PP3/4B3/6PP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Opposite-Colored Bishops (+2 Pawns) — Create two passed pawns far apart to break the blockade!',
          pl: 'Końcówka: Różnopolowe gońce (+2 pionki) — Stwórz dwa oddalone wolne pionki, aby przełamać blokadę!'
        },
        outside_passer: {
          fen: '6k1/5ppp/8/1P6/8/5PPP/6K1/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Outside Passed Pawn — Lure Black’s king to the b-pawn, then invade the kingside!',
          pl: 'Końcówka: Oddalony wolny pionek — Odciągnij czarnego króla pionkiem b5, a potem wejdź królem po pionki na skrzydle królewskim!'
        },
        protected_passer: {
          fen: '8/6k1/5p2/4pP2/4P1K1/8/8/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Protected Passed Pawn — Use your protected f5-pawn to dominate the black king and win!',
          pl: 'Końcówka: Broniony wolny pionek — Wykorzystaj bronionego pionka f5, aby zdominować czarnego króla!'
        },
        q_vs_p7: {
          fen: '8/8/8/8/4K3/8/2p5/1k3Q2 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs Pawn on 7th — Give checks to force the black king in front of the pawn, then bring your king closer!',
          pl: 'Końcówka: Hetman vs Pionek na 7. linii — Szachuj, aby zmusić czarnego króla do stanięcia przed pionkiem, i podchodź swoim królem!'
        },
        rook_7th: {
          fen: 'r5k1/1R3ppp/8/8/4P3/5P1P/5PP1/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Active Rook on 7th Rank — Activate your king and push your extra central pawn!',
          pl: 'Końcówka: Aktywna wieża na 7. linii — Aktywizuj króla i wykorzystaj przewagę pionka e4!'
        },
        vancura: {
          fen: 'R7/P4k2/8/8/8/8/1r6/6K1 b - - 0 1',
          color: 'b',
          en: 'Endgame Drill: Vancura Defense (Black) — Attack the a7-pawn from the side (Rb6-a6!) to hold the draw!',
          pl: 'Końcówka: Obrona Vancury (Czarne) — Atakuj pionka a7 z boku (Wb6-a6!), aby utrzymać remis!'
        },
        good_knight_bad_bishop: {
          fen: '6k1/5p2/4p1p1/3pP1P1/3P1N2/6K1/8/6b1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Good Knight vs Bad Bishop — Classic Magnus-style squeeze! Attack Black’s fixed pawns on light squares!',
          pl: 'Końcówka: Dobry skoczek vs Zły goniec — Klasyczna technika Magnusa! Atakuj zablokowane pionki czarnych!'
        },
        q_endgame: {
          fen: '6k1/5ppp/8/3q4/3P4/4Q3/5PPP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen Endgame (+1 Pawn) — Centralize your queen, create luft for your king, and advance the d-pawn!',
          pl: 'Końcówka hetmańska (+1 pionek) — Centralizuj hetmana, zabezpiecz króla przed wiecznym szachem i pchaj pionka d4!'
        },
        kbn: {
          fen: '8/8/8/4k3/8/8/2B2N2/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Bishop + Knight vs K (Master Mate!) — Drive the enemy king into a corner of your bishop’s color (a1 or h8)!',
          pl: 'Końcówka: Goniec + Skoczek vs K (Mistrzowski mat!) — Zagoń króla do narożnika w kolorze Twojego gońca (a1 lub h8)!'
        },
        kp_double: {
          fen: '4k3/8/8/4P3/4P3/4K3/8/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Doubled Pawns (K+2P vs K) — Use the rear pawn as a spare tempo to win opposition!',
          pl: 'Końcówka: Zdublowane pionki (K+2P vs K) — Wykorzystaj tylnego pionka jako zapasowe tempo, aby wygrać opozycję!'
        },
        rook_behind: {
          fen: 'r7/P7/1K6/8/8/8/8/3k1R2 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Rook Behind Passed Pawn — Tarrasch’s Rule! Activate your rook and king to escort the a7-pawn!',
          pl: 'Końcówka: Wieża za wolnym pionkiem — Zasada Tarrascha! Wykorzystaj aktywność króla i wieży, by przepchnąć pionka!'
        },
        two_connected: {
          fen: '8/8/4k3/2PP4/8/8/4K3/r7 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Two Connected Passed Pawns vs Rook — Advance your pawns together to the 6th rank to overpower the rook!',
          pl: 'Końcówka: 2 połączone wolne pionki vs Wieża — Prowadź pionki razem na 6. linię, aby pokonać wieżę!'
        },
        same_bishops: {
          fen: '6k1/5ppp/8/4b3/4P3/4B3/5PPP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Same-Colored Bishops (+1 Pawn) — Activate your king and advance your extra central pawn!',
          pl: 'Końcówka: Jednopolowe gońce (+1 pionek) — Aktywizuj króla i wykorzystaj przewagę centralnego pionka!'
        },
        knight_endgame: {
          fen: '6k1/5ppp/8/4n3/3P4/4N3/5PPP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Knight Endgame (+1 Pawn) — Knight endgames play like pawn endgames: centralize your king and create a passer!',
          pl: 'Końcówka skoczkowa (+1 pionek) — Końcówki skoczkowe przypominają pionowe: centralizuj króla i twórz wolnego pionka!'
        },
        triangulation: {
          fen: '8/2k5/1p6/pP6/P1K5/8/8/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Triangulation (Zugzwang) — Lose a tempo with your king (Kd4-d3-c4!) to put Black in zugzwang!',
          pl: 'Końcówka: Triangulacja (Zugzwang) — Zrób trójkąt królem, aby oddać ruch czarnym i wejść na ich pionki!'
        },
        exchange_up: {
          fen: '6k1/5ppp/4n3/8/4P3/8/5PPP/3R2K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Exchange Up (R vs N) — Open files for your rook, invade the 7th rank, and trade pawns!',
          pl: 'Końcówka: Przewaga jakości (W vs S) — Otwieraj linie dla wieży, wejdź na 7. linię i realizuj przewagę!'
        },
        kq_vs_kr: {
          fen: '8/8/8/4k3/3r4/8/3Q4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs Rook — Push the black king to the edge and separate the rook from the king with forks!',
          pl: 'Końcówka: Hetman vs Wieża — Zepchnij czarnego króla na bandę i wygraj wieżę widełkami!'
        },
        kr_vs_kb: {
          fen: '4k3/4b3/8/8/8/8/3R4/4K3 b - - 0 1',
          color: 'b',
          en: 'Endgame Drill: Rook vs Bishop (Black Defense) — Head for the "safe corner" (opposite color of your bishop) to hold the draw!',
          pl: 'Końcówka: Wieża vs Goniec (Obrona Czarnymi) — Uciekaj królem do „bezpiecznego narożnika” przeciwnego koloru niż Twój goniec!'
        },
        kr_vs_kn: {
          fen: '4k3/4n3/8/8/8/8/3R4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Rook vs Knight — Keep the knight away from its king and trap it on the edge!',
          pl: 'Końcówka: Wieża vs Skoczek — Oddziel skoczka od jego króla i złap go na bandzie!'
        },
        distant_opp: {
          fen: '4k3/8/8/8/8/4P3/8/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Distant Opposition — Advance your king in front of the pawn and seize opposition!',
          pl: 'Końcówka: Daleka opozycja — Prowadź króla przed pionkiem i utrzymuj nieparzystą liczbę pól między królami!'
        },
        wrong_bishop: {
          fen: '7k/8/5K2/7P/6B1/8/8/8 b - - 0 1',
          color: 'b',
          en: 'Endgame Drill: Wrong-Colored Bishop (Black Defense) — Stay in the h8 corner; White cannot force you out!',
          pl: 'Końcówka: Zły goniec (Obrona Czarnymi) — Zostań w narożniku h8; biały goniec nie kontroluje pola promocji!'
        },
        minority_attack: {
          fen: '6k1/pp3ppp/8/8/PPP5/8/5PPP/6K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: 3 vs 2 Queenside Majority — Push your queenside pawns cleanly to create a winning passed pawn!',
          pl: 'Końcówka: Większość 3 vs 2 na skrzydle hetmańskim — Zrealizuj przewagę pionową, tworząc wolnego pionka!'
        },
        fortress_b_p: {
          fen: '8/8/6k1/5p2/5b2/6K1/8/3Q4 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs Bishop + Pawn — Break the blockade with checks and win the f5-pawn!',
          pl: 'Końcówka: Hetman vs Goniec + Pionek — Rozbij blokadę szachami i zdobądź pionka f5!'
        },
        two_rooks_endgame: {
          fen: '3r1rk1/5ppp/8/8/3P4/8/5PPP/2RR2K1 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Double-Rook Endgame (+1 Pawn) — Activate both rooks, trade one pair if favorable, and push the d-pawn!',
          pl: 'Końcówka czterowieżowa (+1 pionek) — Aktywizuj obie wieże i wykorzystaj przewagę wolnego pionka d4!'
        },
        rb_vs_r: {
          fen: '4k3/8/4K3/4B3/8/8/3R4/4r3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Rook + Bishop vs Rook — Coordinate your king, rook, and bishop to create mating threats on the 8th rank!',
          pl: 'Końcówka: Wieża + Goniec vs Wieża — Współpracuj królem, wieżą i gońcem, tworząc groźby matowe na 8. linii!'
        },
        rn_vs_r: {
          fen: '4k3/8/4K3/4N3/8/8/3R4/4r3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Rook + Knight vs Rook — Create mating nets and knight forks against the defending rook!',
          pl: 'Końcówka: Wieża + Skoczek vs Wieża — Twórz sieci matowe i widełki skoczkiem przeciwko broniącej wieży!'
        },
        q_vs_bb: {
          fen: '8/8/4k3/3bb3/8/8/3Q4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs 2 Bishops — Break the bishop fortress with king advance and double attacks!',
          pl: 'Końcówka: Hetman vs 2 Gońce — Przełam barierę dwóch gońców marszem króla i podwójnymi atakami!'
        },
        q_vs_nn: {
          fen: '8/8/4k3/3nn3/8/8/3Q4/4K3 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs 2 Knights — Avoid knight forks and split the two knights apart!',
          pl: 'Końcówka: Hetman vs 2 Skoczki — Uważaj na widełki i rozdziel współpracę dwóch skoczków!'
        },
        queen_vs_r_p: {
          fen: '6k1/5p2/5r2/8/8/4Q3/6K1/8 w - - 0 1',
          color: 'w',
          en: 'Endgame Drill: Queen vs Rook + Pawn — Use zugzwang and checks to separate the rook from the f7-pawn!',
          pl: 'Końcówka: Hetman vs Wieża + Pionek — Szachuj i użyj zugzwangu, aby oddzielić wieżę od pionka f7!'
        }
      };
      const drill = drills[key];
      if (!drill) return;
      this.activeEndgameKey = key;
      if (this.dom.sparringEndgamesGroup) {
        this.dom.sparringEndgamesGroup.querySelectorAll('.endgame-drill-btn').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.endgame === key);
        });
      }
      this.sparring.playerColor = drill.color || 'w';
      this._startSparringGame(drill.fen);
      const msg = this.state.lang === 'en' ? drill.en : drill.pl;
      this._renderStatusAndCoach('progress', msg);
    }

    _startSparringGame(customFen = null) {
      this._clearTimers();
      this.engine = new window.ChessEngine(
        customFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
      );
      this.playerColor = this.sparring.playerColor;
      this.flipped = this.playerColor === 'b';
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];
      this.lastMoveSquares = null;
      this.wrongMoveSquare = null;
      this.playedMoves = [];
      this.hintLevel = 0;
      this.sparring.pendingBlunder = null;
      this.sparring.hintMove = null;
      this.sparring.hintCandidates = [];
      this.sparring.selectedHintIdx = 0;
      if (this.dom.sparringHintBox) this.dom.sparringHintBox.classList.add('hidden');
      this.sparring.gameOver = false;
      this.sparring.resultMsg = null;
      this.sparring.evalWhite = this.engine.evaluatePosition();
      this.status = 'playing';

      this.currentPuzzle = {
        id: 'sparring',
        difficulty: 'medium',
        movesToMate: 0,
        themes: [],
        solution: [],
        isSparring: true,
        title: {
          en: this.t('sparringTitle')(this._getSparringLevelLabel()),
          pl: this.t('sparringTitle')(this._getSparringLevelLabel())
        }
      };

      this._renderSparringPanel();
      this._renderBoard();
      this._renderMoveHistory();
      this._renderSparringHeader();

      if (this.engine.turn !== this.playerColor) {
        this.status = 'animating';
        this._renderStatusAndCoach('thinking', this.t('sparringBotThinking'));
        this._schedule(() => this._playSparringBotTurn(), 350);
      } else {
        this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
      }
    }

    _getSparringLevelLabel() {
      const map = { beginner: '~800', club: '~1200', tactical: '~1500', strong: '~1800+' };
      return map[this.sparring.level] || '~1200';
    }

    _renderSparringHeader() {
      if (this.dom.puzzleTitle) {
        this.dom.puzzleTitle.textContent = this.t('sparringTitle')(this._getSparringLevelLabel());
      }
      if (this.dom.puzzleIdBadge) this.dom.puzzleIdBadge.textContent = '🤖 BOT';
      if (this.dom.mateBadge) {
        this.dom.mateBadge.textContent = this._getSparringLevelLabel();
        this.dom.mateBadge.dataset.difficulty =
          this.sparring.level === 'beginner'
            ? 'easy'
            : this.sparring.level === 'strong'
            ? 'hard'
            : 'medium';
      }
      if (this.dom.puzzleSolvedBadge) this.dom.puzzleSolvedBadge.classList.add('hidden');
      if (this.dom.puzzleThemes) this.dom.puzzleThemes.innerHTML = '';
      if (this.dom.turnDot && this.dom.turnText) {
        const isWhiteTurn = this.engine.turn === 'w';
        this.dom.turnDot.className = `turn-dot ${isWhiteTurn ? 'white' : 'black'}`;
        this.dom.turnText.textContent = isWhiteTurn ? this.t('whiteToMove') : this.t('blackToMove');
      }
    }

    _renderSparringPanel() {
      if (!this.dom.sparringPanel) return;
      if (this.dom.sparringLevelGroup) {
        this.dom.sparringLevelGroup.querySelectorAll('.sparring-level-btn').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.level === this.sparring.level);
        });
      }
      if (this.dom.sparringColorGroup) {
        this.dom.sparringColorGroup.querySelectorAll('.sparring-color-btn').forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.color === this.sparring.playerColor);
        });
      }
      if (this.dom.sparringGuardBtn) {
        this.dom.sparringGuardBtn.classList.toggle('active', this.sparring.blunderGuard);
        this.dom.sparringGuardText.textContent = this.sparring.blunderGuard
          ? this.t('sparringGuardOn')
          : this.t('sparringGuardOff');
      }
      if (this.dom.sparringRadarBtn) {
        this.dom.sparringRadarBtn.classList.toggle('active', this.sparring.threatRadar);
        this.dom.sparringRadarText.textContent = this.sparring.threatRadar
          ? this.t('sparringRadarOn')
          : this.t('sparringRadarOff');
      }
      this._updateSparringEvalUI();

      if (this.dom.sparringBlunderBox) {
        const pb = this.sparring.pendingBlunder;
        this.dom.sparringBlunderBox.classList.toggle('hidden', !pb);
        if (this.dom.boardBlunderOverlay) {
          this.dom.boardBlunderOverlay.classList.toggle('hidden', !pb);
        }
        if (pb) {
          const refSan = pb.refutationSan || (pb.coachInfo.refutationMove ? pb.coachInfo.refutationMove.from + pb.coachInfo.refutationMove.to : '?');
          const msg = pb.coachInfo.walkedIntoMate
            ? this.t('sparringBlunderMateMsg')(refSan)
            : this.t('sparringBlunderMsg')((pb.coachInfo.cpLoss / 100).toFixed(1), refSan);
          this.dom.sparringBlunderText.textContent = msg;
          if (this.dom.boardBlunderMsg) {
            this.dom.boardBlunderMsg.textContent = `⚠️ ${msg}`;
          }
        }
      }
    }

    _updateSparringEvalUI() {
      if (!this.dom.sparringEvalVal || !this.dom.sparringEvalFill) return;
      const cp = this.sparring.evalWhite || 0;
      if (Math.abs(cp) >= 25000) {
        this.dom.sparringEvalVal.textContent = cp > 0 ? '+M' : '-M';
        this.dom.sparringEvalFill.style.width = cp > 0 ? '98%' : '2%';
        return;
      }
      const pawns = (cp / 100).toFixed(1);
      this.dom.sparringEvalVal.textContent = cp > 0 ? `+${pawns}` : `${pawns}`;
      // Map [-600..+600] cp to [8%..92%]
      const clamped = Math.max(-600, Math.min(600, cp));
      const pct = Math.round(50 + (clamped / 600) * 42);
      this.dom.sparringEvalFill.style.width = `${pct}%`;
    }

    _handleSparringPlayerMove(from, to, promotion) {
      if (this.sparring.gameOver || this.sparring.pendingBlunder) return;
      if (this.engine.turn !== this.playerColor) return;

      const legal = this.engine.getLegalMoves();
      const chosen = legal.find(
        (m) => m.from === from && m.to === to && (!m.promotion || m.promotion === (promotion || 'q'))
      );
      if (!chosen) return;

      // Check if player chose one of Coach's already-verified Top-3 suggestions (prevents false Blunder Guard alarms!)
      const topBestScore =
        this.sparring.hintCandidates.length > 0 ? this.sparring.hintCandidates[0].scoreSide : null;
      const matchedHint = this.sparring.hintCandidates.find(
        (c) =>
          c.move.from === from &&
          c.move.to === to &&
          (!c.move.promotion || c.move.promotion === (promotion || 'q'))
      );
      const isCoachApproved =
        Boolean(matchedHint) &&
        (topBestScore === null || topBestScore - matchedHint.scoreSide < 120);

      this.sparring.hintMove = null;
      this.sparring.hintCandidates = [];
      this.sparring.selectedHintIdx = 0;
      if (this.dom.sparringHintBox) this.dom.sparringHintBox.classList.add('hidden');
      this.selectedSquare = null;
      this.legalTargetsForSelected = [];

      // Blunder Guard check BEFORE committing
      if (this.sparring.blunderGuard && !isCoachApproved) {
        const coachInfo = this.engine.evaluateMoveForCoach(chosen);
        if (coachInfo && coachInfo.isBlunder) {
          const moveObj = this.engine.makeMove({ from, to, promotion });
          if (!moveObj) return;
          let refutationSan = null;
          if (coachInfo.refutationMove) {
            try {
              refutationSan = this.engine.moveToSan(coachInfo.refutationMove);
            } catch (e) {
              refutationSan = coachInfo.refutationMove.from + coachInfo.refutationMove.to;
            }
          }
          this.lastMoveSquares = { from, to };
          this.sparring.pendingBlunder = { moveObj, from, to, promotion, coachInfo, refutationSan };
          this.sparring.evalWhite = coachInfo.evalAfterWhite;
          this.status = 'animating';
          this.sound.wrong();
          this._renderSparringPanel();
          this._renderSparringHeader();
          this._renderBoard();
          return;
        }
      }

      const moveObj = this.engine.makeMove({ from, to, promotion });
      if (!moveObj) return;
      this._commitSparringPlayerMove(moveObj);
    }

    _undoSparringBlunder() {
      const pb = this.sparring.pendingBlunder;
      if (!pb) return;
      this.engine.undo();
      this.sparring.pendingBlunder = null;
      this.sparring.evalWhite = pb.coachInfo.evalBeforeWhite;
      this.lastMoveSquares = null;
      this.status = 'playing';
      this._renderSparringPanel();
      this._renderSparringHeader();
      this._renderBoard();
      this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
    }

    _keepSparringBlunder() {
      const pb = this.sparring.pendingBlunder;
      if (!pb) return;
      this.sparring.pendingBlunder = null;
      this._renderSparringPanel();
      this._commitSparringPlayerMove(pb.moveObj);
    }

    _commitSparringPlayerMove(moveObj) {
      this.lastMoveSquares = { from: moveObj.from, to: moveObj.to };
      this._recordMoveInNotation(moveObj);
      this._playMoveSound(moveObj);
      this.sparring.evalWhite = this.engine.evaluatePosition();
      this._renderSparringPanel();
      this._renderSparringHeader();
      this._renderMoveHistory();
      this._renderBoard();

      if (this._checkSparringGameOver()) return;

      this.status = 'animating';
      this._renderStatusAndCoach('thinking', this.t('sparringBotThinking'));
      this._schedule(() => this._playSparringBotTurn(), 320);
    }

    _playSparringBotTurn() {
      if (!this._isSparringLikeMode() || this.sparring.gameOver) return;
      const best = this.engine.getBestMove({ level: this.sparring.level });
      if (!best || !best.move) {
        this._checkSparringGameOver();
        return;
      }
      const moveObj = this.engine.makeMove({
        from: best.move.from,
        to: best.move.to,
        promotion: best.move.promotion
      });
      if (!moveObj) return;

      this.lastMoveSquares = { from: moveObj.from, to: moveObj.to };
      this._recordMoveInNotation(moveObj);
      this._playMoveSound(moveObj);
      this.sparring.evalWhite = best.evalWhite;
      this.status = 'playing';

      this._renderSparringPanel();
      this._renderSparringHeader();
      this._renderMoveHistory();
      this._renderBoard();

      if (!this._checkSparringGameOver()) {
        this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
      }
    }

    _checkSparringGameOver() {
      const legal = this.engine.getLegalMoves();
      if (legal.length === 0) {
        this.sparring.gameOver = true;
        if (this.mode === 'woodpecker' && !this.hadMistakeThisAttempt && !this.usedAssistance && this.currentPuzzle) {
        this.state.mistakes = (this.state.mistakes || []).filter((id) => id !== this.currentPuzzle.id);
        this._saveState();
        this._renderWoodpeckerPanel();
      }
      this.status = 'solved';
        if (this.engine.inCheck(this.engine.turn)) {
          const playerWon = this.engine.turn !== this.playerColor;
          if (playerWon) {
            this.sound.solved();
            this._renderStatusAndCoach('solved', this.t('sparringWinMate'));
          } else {
            this.sound.wrong();
            this._renderStatusAndCoach('error', this.t('sparringLossMate'));
          }
        } else {
          this._renderStatusAndCoach('progress', this.t('sparringDraw')('Stalemate / Pat'));
        }
        return true;
      }
      if (this.engine.isInsufficientMaterial()) {
        this.sparring.gameOver = true;
        if (this.mode === 'woodpecker' && !this.hadMistakeThisAttempt && !this.usedAssistance && this.currentPuzzle) {
        this.state.mistakes = (this.state.mistakes || []).filter((id) => id !== this.currentPuzzle.id);
        this._saveState();
        this._renderWoodpeckerPanel();
      }
      this.status = 'solved';
        this._renderStatusAndCoach('progress', this.t('sparringDraw')('Insufficient material'));
        return true;
      }
      if (this.engine.halfMoves >= 100) {
        this.sparring.gameOver = true;
        if (this.mode === 'woodpecker' && !this.hadMistakeThisAttempt && !this.usedAssistance && this.currentPuzzle) {
        this.state.mistakes = (this.state.mistakes || []).filter((id) => id !== this.currentPuzzle.id);
        this._saveState();
        this._renderWoodpeckerPanel();
      }
      this.status = 'solved';
        this._renderStatusAndCoach('progress', this.t('sparringDraw')('50-move rule'));
        return true;
      }
      return false;
    }

    _undoSparringPair() {
      if (!this._isSparringLikeMode()) return;
      if (this.sparring.pendingBlunder) {
        this._undoSparringBlunder();
        return;
      }
      this._clearTimers();
      // Undo bot reply + player move (2 plies if it's player's turn, 1 ply if bot's turn)
      let pliesToUndo = this.engine.turn === this.playerColor ? 2 : 1;
      while (pliesToUndo > 0 && this.engine.history.length > 0) {
        this.engine.undo();
        if (this.playedMoves.length > 0) {
          const lastRow = this.playedMoves[this.playedMoves.length - 1];
          if (lastRow.blackSan) {
            lastRow.blackSan = '';
          } else {
            this.playedMoves.pop();
          }
        }
        pliesToUndo--;
      }
      this.sparring.gameOver = false;
      this.sparring.hintMove = null;
      this.lastMoveSquares = null;
      this.sparring.evalWhite = this.engine.evaluatePosition();
      this.status = 'playing';
      this._renderSparringPanel();
      this._renderSparringHeader();
      this._renderMoveHistory();
      this._renderBoard();
      this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
    }

    _showSparringHint() {
      if (!this._isSparringLikeMode() || this.sparring.gameOver || this.engine.turn !== this.playerColor) return;
      const top = this.engine.getTopMovesWithPV(3, 3, 450);
      if (!top || top.length === 0) return;
      this.sparring.hintCandidates = top;
      this.sparring.selectedHintIdx = 0;
      this.sparring.hintMove = { from: top[0].move.from, to: top[0].move.to };
      this._renderSparringHintBox();
      this._renderBoard();
      this._renderStatusAndCoach('progress', this.t('sparringHintMsg')(top[0].san));
    }

    _renderSparringHintBox() {
      if (!this.dom.sparringHintBox || !this.dom.sparringHintPills || !this.dom.sparringHintPvLine) return;
      const list = this.sparring.hintCandidates || [];
      if (list.length === 0) {
        this.dom.sparringHintBox.classList.add('hidden');
        return;
      }
      this.dom.sparringHintBox.classList.remove('hidden');
      const medals = ['🥇', '🥈', '🥉'];
      const fmtEval = (cp) =>
        Math.abs(cp) >= 25000 ? (cp > 0 ? '+M' : '-M') : cp > 0 ? `+${(cp / 100).toFixed(1)}` : (cp / 100).toFixed(1);

      this.dom.sparringHintPills.innerHTML = list
        .map(
          (c, idx) =>
            `<button type="button" class="sparring-hint-pill ${idx === this.sparring.selectedHintIdx ? 'active' : ''}" data-idx="${idx}">${medals[idx] || ''} ${c.san} (${fmtEval(c.evalWhite)})</button>`
        )
        .join('');

      this.dom.sparringHintPills.querySelectorAll('.sparring-hint-pill').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.sparring.selectedHintIdx = parseInt(btn.dataset.idx, 10) || 0;
          this._renderSparringHintBox();
          this._renderBoard();
        });
      });

      const active = list[this.sparring.selectedHintIdx] || list[0];
      const parts = [];
      if (active.pvSan[0]) parts.push(`🟢 <strong>${active.pvSan[0]}</strong>`);
      if (active.pvSan[1]) parts.push(`🔴 ${active.pvSan[1]}`);
      if (active.pvSan[2]) parts.push(`🔵 ${active.pvSan[2]}`);
      this.dom.sparringHintPvLine.innerHTML = `Plan (3 półruchy): ${parts.join(' → ')}`;
    }

    _resignSparring() {
      if (!this._isSparringLikeMode() || this.sparring.gameOver) return;
      this._clearTimers();
      this.sparring.pendingBlunder = null;
      this.sparring.gameOver = true;
      if (this.mode === 'woodpecker' && !this.hadMistakeThisAttempt && !this.usedAssistance && this.currentPuzzle) {
        this.state.mistakes = (this.state.mistakes || []).filter((id) => id !== this.currentPuzzle.id);
        this._saveState();
        this._renderWoodpeckerPanel();
      }
      this.status = 'solved';
      this._renderSparringPanel();
      this._renderStatusAndCoach('error', this.t('sparringResigned'));
    }

    _getSparringOverlay() {
      const arrows = [];
      const hangingSquares = new Set();

      if (this.sparring.pendingBlunder) {
        const { coachInfo } = this.sparring.pendingBlunder;
        if (coachInfo.refutationMove) {
          arrows.push({
            from: coachInfo.refutationMove.from,
            to: coachInfo.refutationMove.to,
            color: 'red'
          });
        }
        if (coachInfo.bestMove) {
          arrows.push({
            from: coachInfo.bestMove.from,
            to: coachInfo.bestMove.to,
            color: 'blue'
          });
        }
        return { arrows, hangingSquares };
      }

      if (this.sparring.hintCandidates && this.sparring.hintCandidates.length > 0) {
        const active = this.sparring.hintCandidates[this.sparring.selectedHintIdx] || this.sparring.hintCandidates[0];
        const colors = ['green', 'red', 'blue'];
        if (active && active.pv) {
          active.pv.slice(0, 3).forEach((m, idx) => {
            arrows.push({ from: m.from, to: m.to, color: colors[idx] });
          });
        }
      } else if (this.sparring.hintMove) {
        arrows.push({
          from: this.sparring.hintMove.from,
          to: this.sparring.hintMove.to,
          color: 'green'
        });
      }

      if (this.sparring.threatRadar && !this.sparring.gameOver) {
        const hanging = this.engine.getHangingPieces(this.playerColor);
        for (const h of hanging) {
          hangingSquares.add(h.square);
        }
      }

      return { arrows, hangingSquares };
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
      const isSparring = this._isSparringLikeMode();
      const sparringOverlay = isSparring
        ? this._getSparringOverlay()
        : { arrows: [], hangingSquares: new Set() };

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
          if (isSparring && sparringOverlay.hangingSquares.has(sq)) {
            classes.push('hanging-alert');
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
      this._updateBoardHintFabDelay();
      if (isAnalysis) {
        this._renderAnalysisArrows(analysisOverlay.arrows);
      } else if (isSparring) {
        this._renderAnalysisArrows(sparringOverlay.arrows);
      } else {
        this._renderHintArrow(hintFromSq, hintToSq);
      }
    }

    _updateBoardHintFabDelay() {
      if (!this.dom.boardHintFab) return;
      if (this._hintFabTimer) {
        clearTimeout(this._hintFabTimer);
        this._hintFabTimer = null;
      }
      this.dom.boardHintFab.classList.add('hidden');
      const allowed = !['analysis', 'vision', 'evalquiz'].includes(this.mode);
      if (allowed && this.selectedSquare && this.status === 'playing') {
        const targetSq = this.selectedSquare;
        this._hintFabTimer = setTimeout(() => {
          if (this.selectedSquare === targetSq && this.status === 'playing') {
            this.dom.boardHintFab.classList.remove('hidden');
          }
        }, 3000);
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
      if (this.mode === 'vision') {
        const sq = this._getSquareFromPoint(e.clientX, e.clientY);
        if (sq) this._handleVisionSquareClick(sq);
        return;
      }
      if (this.mode === 'evalquiz') return;
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
      if (this.mode === 'kotov') {
        this._addKotovCandidate(from, to, promotion);
        return;
      }
      if (this._isSparringLikeMode()) {
        this._handleSparringPlayerMove(from, to, promotion);
        return;
      }
      if (this.mode === 'rush' && this.rush.vsBot && this.rush.active) {
        const moveObj = this.engine.makeMove({ from, to, promotion });
        if (!moveObj) return;
        this.selectedSquare = null;
        this.legalTargetsForSelected = [];
        this.lastMoveSquares = { from, to };
        this._recordMoveInNotation(moveObj);
        this._playMoveSound(moveObj);
        this.rush.score++;
        this._renderRushHud();
        this._renderMoveHistory();
        this._renderBoard();

        if (this.engine.getLegalMoves().length === 0) {
          if (this.engine.inCheck(this.engine.turn)) {
            this.sound.solved();
            this._endRush('stopped');
            this._renderStatusAndCoach('solved', this.t('sparringWinMate'));
          } else {
            this._endRush('stopped');
            this._renderStatusAndCoach('progress', this.t('sparringDraw')('Pat'));
          }
          return;
        }

        this.status = 'animating';
        this._renderStatusAndCoach('thinking', this.t('sparringBotThinking'));
        this._schedule(() => {
          if (!this.rush.active || this.mode !== 'rush') return;
          const best = this.engine.getBestMove({ level: this.rush.botLevel });
          if (!best || !best.move) {
            this._endRush('stopped');
            return;
          }
          const botMove = this.engine.makeMove({
            from: best.move.from,
            to: best.move.to,
            promotion: best.move.promotion
          });
          if (!botMove) return;
          this.lastMoveSquares = { from: botMove.from, to: botMove.to };
          this._recordMoveInNotation(botMove);
          this._playMoveSound(botMove);
          this.status = 'playing';
          this._renderMoveHistory();
          this._renderBoard();
          if (this.engine.getLegalMoves().length === 0) {
            this._endRush('stopped');
            if (this.engine.inCheck(this.engine.turn)) {
              this.sound.wrong();
              this._renderStatusAndCoach('error', this.t('sparringLossMate'));
            } else {
              this._renderStatusAndCoach('progress', this.t('sparringDraw')('Pat'));
            }
          } else {
            this._renderStatusAndCoach('progress', this.t('sparringYourTurn'));
          }
        }, 280);
        return;
      }
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
        if (this.currentPuzzle && this.currentPuzzle.id && !this.state.mistakes.includes(this.currentPuzzle.id)) {
          this.state.mistakes.push(this.currentPuzzle.id);
        }
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
      if (this.mode === 'woodpecker' && !this.hadMistakeThisAttempt && !this.usedAssistance && this.currentPuzzle) {
        this.state.mistakes = (this.state.mistakes || []).filter((id) => id !== this.currentPuzzle.id);
        this._saveState();
        this._renderWoodpeckerPanel();
      }
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
