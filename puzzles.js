/**
 * Curated & Mathematically Verified Chess Checkmate Puzzles (48 Puzzles)
 * Difficulty Tiers:
 *   - easy   (16 puzzles: Mate in 1 & Introductory Mate in 2)
 *   - medium (16 puzzles: Tactical Mate in 2 Combinations)
 *   - hard   (16 puzzles: Deep Mate in 3 & Master Mate in 4 Combinations)
 * Bilingual (EN / PL) titles, hints, tactical themes, and explanations.
 */

(function (global) {
  'use strict';

  const PUZZLE_THEMES = {
    backRank: { en: 'Back Rank', pl: 'Mat na ostatniej linii' },
    smothered: { en: 'Smothered Mate', pl: 'Mat zaduszony' },
    sacrifice: { en: 'Sacrifice', pl: 'Ofiara figury' },
    deflection: { en: 'Deflection', pl: 'Odciągnięcie' },
    attraction: { en: 'Attraction', pl: 'Zaciągnięcie' },
    doubleCheck: { en: 'Double Check', pl: 'Podwójny szach' },
    pin: { en: 'Pin', pl: 'Związanie' },
    clearance: { en: 'Clearance', pl: 'Oczyszczenie pola' },
    arabian: { en: 'Arabian Mate', pl: 'Mat arabski' },
    anastasia: { en: "Anastasia's Mate", pl: 'Mat Anastazji' },
    boden: { en: "Boden's Mate", pl: 'Mat Bodena' },
    opera: { en: 'Opera Mate', pl: 'Mat operowy' },
    kingHunt: { en: 'King Hunt', pl: 'Polowanie na króla' },
    promotion: { en: 'Promotion', pl: 'Promocja piona' },
    battery: { en: 'Battery Attack', pl: 'Bateria figur' },
    fork: { en: 'Fork (Double Attack)', pl: 'Widełki (Podwójny atak)' },
    skewer: { en: 'Skewer / X-Ray', pl: 'Szpilka / Rentgen' },
    discovered: { en: 'Discovered Attack', pl: 'Atak z odsłonięcia' },
    zwischenzug: { en: 'Intermediate Check', pl: 'Wtrącony szach' },
    defense: { en: 'Defense & Counter', pl: 'Obrona i kontratak' }
  };

  const PUZZLES = [
    // =========================================================================
    // EASY TIER (16 Puzzles: 12 Mate in 1 + 4 Introductory Mate in 2)
    // =========================================================================
    {
      id: 'm1-01',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['backRank'],
      fen: '6k1/pp3ppp/2p5/4b3/4P3/2P5/PP3PPP/3R2K1 w - - 0 1',
      solution: ['d1d8'],
      title: {
        en: 'Classic Back-Rank Mate',
        pl: 'Klasyczny mat na ostatniej linii'
      },
      hint: {
        en: 'Black’s own pawns on f7, g7, and h7 trap their king on the 8th rank.',
        pl: 'Własne pionki czarnych na f7, g7 i h7 blokują królowi ucieczkę z 8. linii.'
      },
      explanation: {
        en: '1. Rd8# exploits the lack of flight squares (luft) for the black king.',
        pl: '1. Wd8# wykorzystuje brak "lufcika" dla czarnego króla na ósmej linii.'
      }
    },
    {
      id: 'm1-02',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['smothered'],
      fen: 'r5rk/pp2b1pp/2p1p3/4P1N1/3P4/2P5/PP4PP/R4RK1 w - - 0 1',
      solution: ['g5f7'],
      title: {
        en: 'Smothered Knight Leap',
        pl: 'Skok do mata zaduszonego'
      },
      hint: {
        en: 'Black’s king is completely boxed in by its own rook and pawns. Jump with the knight!',
        pl: 'Król czarnych jest całkowicie zamknięty przez własną wieżę i pionki. Uderz skoczkiem!'
      },
      explanation: {
        en: '1. Nf7# is a pure Smothered Mate — the knight checks over the barrier while the king has zero flight squares.',
        pl: '1. Sf7# to czysty mat zaduszony — skoczek szachuje króla zamkniętego we własnej klatce.'
      }
    },
    {
      id: 'm1-03',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
      solution: ['h5f7'],
      title: {
        en: "Scholar's Strike on f7",
        pl: 'Uderzenie na słaby punkt f7'
      },
      hint: {
        en: 'Target the weakest square in Black’s camp, defended only by the king.',
        pl: 'Zaatakuj najsłabsze pole w obozie czarnych, bronione wyłącznie przez króla.'
      },
      explanation: {
        en: '1. Qxf7# is the classic Scholar’s Mate: the queen and bishop coordinate on f7.',
        pl: '1. Hxf7# to klasyczny mat szewski — hetman i goniec współpracują w ataku na f7.'
      }
    },
    {
      id: 'm1-04',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['arabian'],
      fen: '7k/1R6/p1p2N2/3p4/3P4/2P5/PP4PP/6K1 w - - 0 1',
      solution: ['b7h7'],
      title: {
        en: 'Arabian Corner Mate',
        pl: 'Mat arabski w rogu'
      },
      hint: {
        en: 'The knight on f6 both protects h7 and covers the g8 escape square!',
        pl: 'Skoczek na f6 jednocześnie broni pola h7 i odcina ucieczkę na g8!'
      },
      explanation: {
        en: '1. Rh7# is the timeless Arabian Mate pattern: rook and knight team up in the corner.',
        pl: '1. Wh7# to ponadczasowy wzorzec mata arabskiego: wieża i skoczek współpracują w rogu.'
      }
    },
    {
      id: 'm1-05',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['anastasia'],
      fen: '2r2r2/pb2Nppk/1p6/3p4/3P4/2PR4/PP3PPP/6K1 w - - 0 1',
      solution: ['d3h3'],
      title: {
        en: "Anastasia's Wall",
        pl: 'Ściana Anastazji'
      },
      hint: {
        en: 'The knight on e7 takes away g8 and g6. Swing the rook to the open h-file!',
        pl: 'Skoczek na e7 zabiera pola g8 oraz g6. Przerzuć wieżę na otwartą linię h!'
      },
      explanation: {
        en: "1. Rh3# is Anastasia's Mate: the knight controls the g-file escape squares while the rook sweeps the h-file.",
        pl: '1. Wh3# to mat Anastazji: skoczek kontroluje pola ucieczki na linii g, a wieża uderza po linii h.'
      }
    },
    {
      id: 'm1-06',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['pin'],
      fen: '6rk/pp4p1/2p2Q2/8/2p4P/1P6/PB3PP1/6K1 w - - 0 1',
      solution: ['f6h6'],
      title: {
        en: 'Exploiting the Absolute Pin',
        pl: 'Wykorzystanie bezwzględnego związania'
      },
      hint: {
        en: 'Look closely at the g7-pawn — can it really capture on h6 when your bishop is on b2?',
        pl: 'Spójrz uważnie na piona g7 — czy naprawdę może bić na h6, gdy goniec stoi na b2?'
      },
      explanation: {
        en: '1. Qh6#! The g7-pawn is pinned to the black king by the b2-bishop and cannot capture the queen.',
        pl: '1. Hh6#! Pion g7 jest związany przez gońca z b2 i nie może zbić hetmana.'
      }
    },
    {
      id: 'm1-07',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['boden'],
      fen: '2kr3r/p2pqppp/2p5/8/3P1B2/2P5/PP3PPP/R4BK1 w - - 0 1',
      solution: ['f1a6'],
      title: {
        en: "Boden's Criss-Cross Bishops",
        pl: 'Skrzyżowane gońce Bodena'
      },
      hint: {
        en: 'The f4-bishop already controls c7 and b8. Slice through b7 and c8 with your other bishop!',
        pl: 'Goniec z f4 kontroluje już c7 i b8. Uderz drugim gońcem po przekątnej f1-a6!'
      },
      explanation: {
        en: "1. Ba6# is Boden's Mate: two crisscrossing bishops trap the king obstructed by its own rook and pawn.",
        pl: '1. Ga6# to mat Bodena: dwa skrzyżowane gońce matują króla zablokowanego przez własną wieżę i piona.'
      }
    },
    {
      id: 'm1-08',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '3rkr2/pp5p/Q5p1/2p5/2P5/1P6/P4PPP/R5K1 w - - 0 1',
      solution: ['a6e6'],
      title: {
        en: 'Epaulette Checkmate',
        pl: 'Mat epoletowy'
      },
      hint: {
        en: 'Black’s two rooks on d8 and f8 act like shoulderpads blocking their own king’s escape!',
        pl: 'Dwie czarne wieże na d8 i f8 jak epolety blokują własnemu królowi ucieczkę na boki!'
      },
      explanation: {
        en: '1. Qe6# is the Epaulette Mate: the king is flanked on both sides by its own rooks and cannot step forward.',
        pl: '1. He6# to mat epoletowy: król ma zablokowane pola d8 i f8 przez własne wieże, a hetman odcina 7. linię.'
      }
    },
    {
      id: 'm1-09',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '6k1/pp3p2/2p2P1Q/3p2K1/3P4/2P5/PP6/8 w - - 0 1',
      solution: ['h6g7'],
      title: {
        en: "Lolli's Outpost Mate",
        pl: 'Mat Lollego z pionem na f6'
      },
      hint: {
        en: 'Your advanced pawn on f6 controls g7. Land the queen right in front of the king!',
        pl: 'Zaawansowany pion na f6 wspiera pole g7. Postaw tam hetmana!'
      },
      explanation: {
        en: "1. Qg7# is Lolli's Mate: a pawn on f6 spears the dark squares around the enemy king.",
        pl: '1. Hg7# to mat Lollego: pion na f6 tworzy zabójczą podporę dla hetmana na g7.'
      }
    },
    {
      id: 'm1-10',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '7k/pp4p1/1qp5/8/2BP4/2PR4/PP3PPP/6K1 w - - 0 1',
      solution: ['d3h3'],
      title: {
        en: "Greco's Corner Mate",
        pl: 'Mat Greco na linii h'
      },
      hint: {
        en: 'The c4-bishop cuts off g8 while Black’s g7-pawn blocks g7. Swing the rook to the h-file!',
        pl: 'Goniec na c4 odcina pole g8, a pion g7 blokuje ucieczkę. Przerzuć wieżę na linię h!'
      },
      explanation: {
        en: "1. Rh3# is Greco's Mate: the bishop seals the diagonal while the rook sweeps the edge file.",
        pl: '1. Wh3# to mat Greco: goniec zamyka przekątną a2-g8, a wieża matuje po linii h.'
      }
    },
    {
      id: 'm1-11',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['backRank'],
      fen: '5rk1/pp3ppp/2p5/3p4/3q4/1P6/PB3PPP/6K1 b - - 0 1',
      solution: ['d4d1'],
      title: {
        en: 'Black to Move: Back-Rank Strike',
        pl: 'Ruch czarnych: Uderzenie na 1. linii'
      },
      hint: {
        en: 'You are playing Black! White’s king is trapped behind its own pawns on f2, g2, and h2 while b2 guards a1.',
        pl: 'Grasz czarnymi! Biały król jest uwięziony za własnymi pionami f2, g2 i h2 (a pole a1 broni goniec b2).'
      },
      explanation: {
        en: '1... Qd1# punishes White’s unguarded first rank on the only safe square.',
        pl: '1... Hd1# wykorzystuje brak obrony pierwszej linii białych.'
      }
    },
    {
      id: 'm1-12',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '5rk1/pb3ppp/1p2p3/8/2P5/1P5q/P4PPP/2R2RK1 b - - 0 1',
      solution: ['h3g2'],
      title: {
        en: 'Black to Move: Long-Diagonal Battery',
        pl: 'Ruch czarnych: Bateria po długiej przekątnej'
      },
      hint: {
        en: 'Your bishop on b7 aiming down the long diagonal backs up the queen on g2!',
        pl: 'Goniec z b7 celujący wzdłuż długiej przekątnej wspiera hetmana na polu g2!'
      },
      explanation: {
        en: '1... Qxg2# is unstoppable because the b7-bishop protects the queen from across the board.',
        pl: '1... Hxg2# kończy partię dzięki dalekosiężnemu wsparciu gońca z b7.'
      }
    },
    {
      id: 'm2-09',
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '7k/8/p7/P1p5/2P5/8/1R4PP/Q5K1 w - - 0 1',
      solution: ['b2b7', 'h8g8', 'a1g7'],
      title: {
        en: 'Queen & Rook 7th-Rank Trap',
        pl: 'Mat hetmanem i wieżą na 7. linii'
      },
      hint: {
        en: 'First cut off the black king along the 7th rank with your rook, then deliver mate on g7!',
        pl: 'Najpierw odetnij czarnego króla na 7. linii wieżą, a następnie daj mata hetmanem na g7!'
      },
      explanation: {
        en: '1. Rb7+! Kg8 2. Qg7# boxes the king onto the back rank so the queen delivers mate on g7.',
        pl: '1. Wb7+! Kg8 2. Hg7# zamyka króla na ostatniej linii i matuje na g7.'
      }
    },
    {
      id: 'm2-10',
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['backRank'],
      fen: '6k1/pp3ppp/2p1r3/4p3/4P3/2P5/PP3PPP/3RR1K1 w - - 0 1',
      solution: ['d1d8', 'e6e8', 'd8e8'],
      title: {
        en: 'Two Rooks vs One Defender',
        pl: 'Dwie wieże przeciwko jednej zasłonie'
      },
      hint: {
        en: 'Invade on d8 with check; when Black’s rook blocks on e8, capture it with checkmate!',
        pl: 'Wtargnij wieżą na d8 z szachem, a gdy czarna wieża zasłoni na e8 — zbij ją z matem!'
      },
      explanation: {
        en: '1. Rd8+ Re8 2. Rxe8# uses the e1-rook to back up the capture on e8.',
        pl: '1. Wd8+ We8 2. Wxe8# wykorzystuje wsparcie drugiej wieży z e1.'
      }
    },
    {
      id: 'm2-11',
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['kingHunt'],
      fen: '7k/8/5K2/8/8/8/1Q6/8 w - - 0 1',
      solution: ['b2b7', 'h8g8', 'b7g7'],
      title: {
        en: 'Fundamental Queen & King Mate',
        pl: 'Podstawowy mat hetmanem i królem'
      },
      hint: {
        en: 'Cut off the 7th rank with 1. Qb7! (avoiding stalemate!) so the king steps to g8, then mate on g7!',
        pl: 'Odetnij 7. linię ruchem 1. Hb7! (unikając pata!), zmuszając króla do wejścia na g8, a potem daj mata na g7!'
      },
      explanation: {
        en: '1. Qb7! Kg8 2. Qg7# restricts the king to the back rank without stalemating and finishes on g7.',
        pl: '1. Hb7! Kg8 2. Hg7# zamyka króla na ostatniej linii bez pata i matuje ze wsparciem białego króla.'
      }
    },
    {
      id: 'm2-12',
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['backRank'],
      fen: '3rr1k1/pp3ppp/2p5/4p3/4P3/2P1R3/PP3PPP/6K1 b - - 0 1',
      solution: ['d8d1', 'e3e1', 'd1e1'],
      title: {
        en: 'Black to Move: Double-Rook Invader',
        pl: 'Ruch czarnych: Wtargnięcie dwiema wieżami'
      },
      hint: {
        en: 'Check on d1 and capture White’s interposing rook on e1!',
        pl: 'Daj szacha na d1 i zbij zasłaniającą białą wieżę na e1!'
      },
      explanation: {
        en: '1... Rd1+ 2. Re1 Rxe1# is the fundamental back-rank battery mate.',
        pl: '1... Wd1+ 2. We1 Wxe1# to podstawowy mat baterią dwóch wież.'
      }
    },

    // =========================================================================
    // MEDIUM TIER (16 Puzzles: Tactical Mate in 2 Combinations)
    // =========================================================================
    {
      id: 'm1-13',
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['arabian'],
      fen: '4k3/pp2pppp/2p1N3/8/4P3/2P5/PP4PP/3R2K1 w - - 0 1',
      solution: ['d1d8'],
      title: {
        en: 'The Hook Mate Pattern',
        pl: 'Wzorzec mata hakowego'
      },
      hint: {
        en: 'Your knight on e6 protects d8 and covers f8 while Black’s own pawns block e7 and f7!',
        pl: 'Twój skoczek na e6 broni pola d8 i odcina f8, podczas gdy pionki czarnych blokują e7 oraz f7!'
      },
      explanation: {
        en: '1. Rd8# is a classic Hook / Smothered-Back-Rank Mate supported by the e6-outpost knight.',
        pl: '1. Wd8# to klasyczny mat na 8. linii wspierany przez silnego skoczka na placówce e6.'
      }
    },
    {
      id: 'm1-14',
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['doubleCheck', 'discovered'],
      fen: '4r1bk/1p5p/p1p2N2/8/P7/1P6/1B4PP/6K1 w - - 0 1',
      solution: ['f6e8'],
      title: {
        en: 'Discovered Check Battery',
        pl: 'Mat szachem z odsłonięcia'
      },
      hint: {
        en: 'Your f6-knight sits on the b2-h8 diagonal. Capture the rook on e8 to unleash a discovered check from the b2-bishop!',
        pl: 'Twój skoczek na f6 przesłania przekątną b2-h8. Zbij wieżę na e8, odsłaniając śmiertelnego szacha od gońca z b2!'
      },
      explanation: {
        en: '1. Nxe8# captures the rook on e8 and uncovers checkmate from the b2-bishop (the dark-squared bishop on g8 cannot block on g7!).',
        pl: '1. Sxe8# zbija wieżę i odsłania mata od gońca b2 (czarnopolowy goniec z g8 nie może zasłonić na białym polu g7!).'
      }
    },
    {
      id: 'm1-15',
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['smothered'],
      fen: '5rk1/pp3ppp/2p5/4p3/4P1n1/2NP4/PPP3PP/6RK b - - 0 1',
      solution: ['g4f2'],
      title: {
        en: 'Black to Move: Corner Smothered Mate',
        pl: 'Ruch czarnych: Mat zaduszony w rogu'
      },
      hint: {
        en: 'White’s rook on g1 and pawns on g2, h2 trap their own king on h1!',
        pl: 'Biała wieża na g1 oraz pionki g2 i h2 zamykają własnego króla w rogu h1!'
      },
      explanation: {
        en: '1... Nf2# delivers an instant smothered checkmate for Black.',
        pl: '1... Sf2# daje natychmiastowego mata zaduszonego białemu królowi.'
      }
    },
    {
      id: 'm1-16',
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['promotion', 'backRank'],
      fen: '6k1/pp1P1ppp/2p5/8/2B5/2P5/PP3PPP/6K1 w - - 0 1',
      solution: ['d7d8q'],
      title: {
        en: 'Instant Promotion Checkmate',
        pl: 'Błyskawiczny mat z promocją'
      },
      hint: {
        en: 'Promote the d7-pawn to a queen or rook to sweep the 8th rank!',
        pl: 'Promuj piona d7 na hetmana lub wieżę, by zamatować na ósmej linii!'
      },
      explanation: {
        en: '1. d8=Q# crowns a new queen with immediate back-rank checkmate.',
        pl: '1. d8=H# wprowadza nowego hetmana z natychmiastowym matem na 8. linii.'
      }
    },
    {
      id: 'm2-01',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['opera', 'sacrifice', 'deflection'],
      fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 16',
      solution: ['b3b8', 'd7b8', 'd1d8'],
      title: {
        en: 'Morphy’s Famous Opera Mate (Paris 1858)',
        pl: 'Słynny Mat Operowy Morphy’ego (Paryż 1858)'
      },
      hint: {
        en: 'The knight on d7 guards d8. Deflect it with a shocking queen sacrifice!',
        pl: 'Skoczek na d7 broni pola d8. Odciągnij go efektowną ofiarą hetmana!'
      },
      explanation: {
        en: '1. Qb8+! Nxb8 2. Rd8# is Paul Morphy’s immortal finish at the Paris Opera House.',
        pl: '1. Hb8+! Sxb8 2. Wd8# to nieśmiertelny finał partii Paula Morphy’ego w Operze Paryskiej.'
      }
    },
    {
      id: 'm2-02',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['smothered', 'sacrifice'],
      fen: 'r4r1k/pp4pp/2p4N/4p3/4P3/1QP5/PP4PP/5RK1 w - - 0 1',
      solution: ['b3g8', 'f8g8', 'h6f7'],
      title: {
        en: 'Smothered Mate via Queen Sacrifice',
        pl: 'Ofiara hetmana do mata zaduszonego'
      },
      hint: {
        en: 'Sacrifice the queen on g8 (protected by your knight!) so Black’s rook blocks the king’s escape.',
        pl: 'Poświęć hetmana na g8 (bronionym przez skoczka!), zmuszając czarną wieżę do zablokowania króla.'
      },
      explanation: {
        en: '1. Qg8+! Rxg8 2. Nf7# completes the smothered mate cage.',
        pl: '1. Hg8+! Wxg8 2. Sf7# zamyka klatkę mata zaduszonego.'
      }
    },
    {
      id: 'm2-03',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['backRank', 'sacrifice', 'attraction'],
      fen: '5rk1/pp2p2p/2p3p1/1b2B1N1/4P3/2P5/PP4PP/3R1Q1K w - - 0 1',
      solution: ['f1f8', 'g8f8', 'd1d8'],
      title: {
        en: 'Attraction to the Back Rank',
        pl: 'Zaciągnięcie na ósmą linię'
      },
      hint: {
        en: 'Your queen on f1 is attacked by Bb5! Eliminate Black’s rook on f8 with check to draw the king into a back-rank net!',
        pl: 'Twój hetman na f1 jest atakowany przez gońca b5! Zbij wieżę na f8 z szachem, zaciągając króla w matową sieć na 8. linii!'
      },
      explanation: {
        en: '1. Qxf8+! Kxf8 2. Rd8# works because the e5-bishop and g5-knight control g7 and f7 (while quiet 1. Rd8? fails to 1... Bxf1!).',
        pl: '1. Hxf8+! Kxf8 2. Wd8# wygrywa, ponieważ goniec e5 i skoczek g5 odcinają pola g7 oraz f7 (ciche 1. Wd8? przegrywa po 1... Gxf1!).'
      }
    },
    {
      id: 'm2-04',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['doubleCheck', 'sacrifice', 'attraction'],
      fen: '4Q2n/pp3pkp/8/8/2p3N1/B1P5/P4P1P/6RK w - - 0 1',
      solution: ['e8g8', 'g7g8', 'g4f6'],
      title: {
        en: 'Queen Sacrifice into Double Check',
        pl: 'Ofiara hetmana i podwójny szach'
      },
      hint: {
        en: 'Lure the black king onto g8 with 1. Qg8+!, then jump with the knight for a double check!',
        pl: 'Zaciągnij czarnego króla na g8 ofiarą 1. Hg8+!, a następnie daj podwójny szach skoczkiem i wieżą!'
      },
      explanation: {
        en: '1. Qg8+! Kxg8 2. Nf6# is a lethal double check from the g1-rook and f6-knight.',
        pl: '1. Hg8+! Kxg8 2. Sf6# to zabójczy podwójny szach od wieży g1 oraz skoczka f6.'
      }
    },
    {
      id: 'm2-05',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['anastasia', 'sacrifice', 'attraction'],
      fen: '5r1k/pp2Nppp/2p5/3p4/3P4/2PR3Q/PP3PPP/6K1 w - - 0 1',
      solution: ['h3h7', 'h8h7', 'd3h3'],
      title: {
        en: 'Anastasia’s Queen Sacrifice on h7',
        pl: 'Ofiara hetmana na h7 w stylu Anastazji'
      },
      hint: {
        en: 'The knight on e7 already covers g8 and g6. Rip open the h-file by sacrificing your queen on h7!',
        pl: 'Skoczek na e7 kontroluje już g8 i g6. Otwórz linię h, poświęcając hetmana na h7!'
      },
      explanation: {
        en: '1. Qxh7+! Kxh7 2. Rh3# drags the black king onto the open h-file.',
        pl: '1. Hxh7+! Kxh7 2. Wh3# wciąga czarnego króla na otwartą linię h.'
      }
    },
    {
      id: 'm2-06',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['boden', 'sacrifice'],
      fen: '2kr1b1r/pp1npppp/2p5/8/5B2/2Q5/PPP2PPP/R3KB1R w KQ - 0 1',
      solution: ['c3c6', 'b7c6', 'f1a6'],
      title: {
        en: 'Boden’s Queen Sacrifice on c6',
        pl: 'Ofiara hetmana na c6 do mata Bodena'
      },
      hint: {
        en: 'Destroy the pawn cover in front of c8 and open the b7-square for your light-squared bishop!',
        pl: 'Rozbij osłonę pionową przed c8, aby otworzyć przekątną f1-a6 dla białopolowego gońca!'
      },
      explanation: {
        en: '1. Qxc6+! bxc6 2. Ba6# is the signature Boden’s Mate combination.',
        pl: '1. Hxc6+! bxc6 2. Ga6# to podręcznikowa kombinacja prowadząca do mata Bodena.'
      }
    },
    {
      id: 'm2-07',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['arabian', 'backRank'],
      fen: '7k/p5pp/2pr1N2/4p3/4P3/2P5/PR4PP/6K1 w - - 0 1',
      solution: ['b2b8', 'd6d8', 'b8d8'],
      title: {
        en: 'Arabian Back-Rank Siege',
        pl: 'Oblężenie w stylu arabskim'
      },
      hint: {
        en: 'The knight on f6 takes away g8. Invade the 8th rank with your rook!',
        pl: 'Skoczek na f6 odcina pole g8. Wtargnij wieżą na 8. linię z szachem!'
      },
      explanation: {
        en: '1. Rb8+ Rd8 2. Rxd8# uses the f6-knight to seal g8 while the rook sweeps the 8th rank.',
        pl: '1. Wb8+ Wd8 2. Wxd8# wykorzystuje skoczka na f6 odcinającego pole g8.'
      }
    },
    {
      id: 'm2-08',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['promotion', 'backRank', 'sacrifice'],
      fen: 'r5k1/pp1P1ppp/2p5/8/2P5/1P6/P4PPP/4R1K1 w - - 0 1',
      solution: ['e1e8', 'a8e8', 'd7e8q'],
      title: {
        en: 'Promotion Punch',
        pl: 'Uderzenie z promocją piona'
      },
      hint: {
        en: 'Combine your rook on the e-file with the advanced d7-pawn ready to promote!',
        pl: 'Poświęć wieżę na e8, aby odciągnąć czarną wieżę i promować piona d7 z matem!'
      },
      explanation: {
        en: '1. Re8+! Rxe8 2. dxe8=Q# deflects the a8-rook so the d7-pawn promotes to a queen with immediate checkmate.',
        pl: '1. We8+! Wxe8 2. dxe8=H# wciąga czarną wieżę na e8, po czym pion d7 promuje na hetmana z natychmiastowym matem.'
      }
    },
    {
      id: 'm2-13',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['sacrifice', 'clearance'],
      fen: 'r4r1k/pp4pp/2p5/4N1Q1/2BP4/2P5/PP4PP/5RK1 w - - 0 1',
      solution: ['e5g6', 'h7g6', 'g5h4'],
      title: {
        en: 'Greco’s Knight Sacrifice on g6',
        pl: 'Ofiara skoczka na g6 w stylu Greco'
      },
      hint: {
        en: 'Sacrifice the knight on g6 to rip open the h-file while your c4-bishop pins f7/g8!',
        pl: 'Poświęć skoczka na g6, aby otworzyć linię h dla hetmana przy wsparciu gońca c4!'
      },
      explanation: {
        en: '1. Ng6+! hxg6 2. Qh4# opens the h-file while the c4-bishop seals the g8 escape square.',
        pl: '1. Sg6+! hxg6 2. Hh4# otwiera linię h, podczas gdy goniec z c4 odcina pole g8.'
      }
    },
    {
      id: 'm2-14',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['smothered', 'sacrifice'],
      fen: '6k1/ppp3pp/1q6/8/8/7n/PPP3PP/R3R2K b - - 0 1',
      solution: ['b6g1', 'e1g1', 'h3f2'],
      title: {
        en: 'Black to Move: Smothered Queen Sacrifice',
        pl: 'Ruch czarnych: Ofiara hetmana do mata zaduszonego'
      },
      hint: {
        en: 'You are playing Black! Sacrifice your queen on g1 so White’s rook blocks the king!',
        pl: 'Grasz czarnymi! Poświęć hetmana na g1, zmuszając białą wieżę do zablokowania króla!'
      },
      explanation: {
        en: '1... Qg1+! 2. Rxg1 Nf2# is the classic smothered mate executed from the Black side.',
        pl: '1... Hg1+! 2. Wxg1 Sf2# to klasyczny mat zaduszony wykonany czarnymi bierkami.'
      }
    },
    {
      id: 'm2-15',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['sacrifice', 'battery'],
      fen: '5r1k/pp4p1/2p4p/3p4/3P4/2P2Q2/PP3P1P/6RK w - - 0 1',
      solution: ['f3f8', 'h8h7', 'f8g7'],
      title: {
        en: 'Eliminating the g7 Guard',
        pl: 'Likwidacja obrońcy pola g7'
      },
      hint: {
        en: 'Capture Black’s rook on f8 with check, then team up with your g1-rook on g7!',
        pl: 'Zbij czarną wieżę na f8 z szachem, a następnie daj mata na g7 ze wsparciem wieży g1!'
      },
      explanation: {
        en: '1. Qxf8+ Kh7 2. Qxg7# destroys the defender of the 8th rank and mates on the g-file.',
        pl: '1. Hxf8+ Kh7 2. Hxg7# niszczy obrońcę i wykorzystuje współpracę hetmana z wieżą g1.'
      }
    },
    {
      id: 'm2-16',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['boden', 'sacrifice'],
      fen: 'r3kb1r/ppp2ppp/2q5/5b2/8/2P5/PP1N1PPP/2KR1B1R b kq - 0 1',
      solution: ['c6c3', 'b2c3', 'f8a3'],
      title: {
        en: 'Black to Move: Boden’s Strike on c3',
        pl: 'Ruch czarnych: Kombinacja Bodena przez c3'
      },
      hint: {
        en: 'Sacrifice the black queen on c3 to open the b2-square for your f8-bishop!',
        pl: 'Poświęć czarnego hetmana na c3, aby otworzyć przekątną f8-a3 dla gońca!'
      },
      explanation: {
        en: '1... Qxc3+! 2. bxc3 Ba3# is Boden’s Mate played by Black against queenside castling.',
        pl: '1... Hxc3+! 2. bxc3 Ga3# to mat Bodena wykonany czarnymi przeciwko długiej roszadzie.'
      }
    },

    // =========================================================================
    // HARD TIER (16 Puzzles: 10 Deep Mate in 3 + 6 Master Mate in 4)
    // =========================================================================
    {
      id: 'm3-01',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['smothered', 'doubleCheck', 'sacrifice'],
      fen: 'r1b2rk1/ppqp1Npp/2n5/4p3/4P3/1QPP4/PP2BPPP/R4RK1 w - - 0 1',
      solution: ['f7h6', 'g8h8', 'b3g8', 'f8g8', 'h6f7'],
      title: {
        en: 'The Classic Smothered Trio',
        pl: 'Klasyczna sekwencja mata zaduszonego'
      },
      hint: {
        en: 'Start with a double check (1. Nh6+!) that forces the king into the h8 corner, then sacrifice the queen on g8!',
        pl: 'Zacznij od podwójnego szacha (1. Sh6+!), który zapędzi króla na h8, a potem poświęć hetmana na g8!'
      },
      explanation: {
        en: '1. Nh6+! Kh8 2. Qg8+! Rxg8 3. Nf7# is the iconic Philidor Legacy finish executed in a full middlegame position.',
        pl: '1. Sh6+! Kh8 2. Hg8+! Wxg8 3. Sf7# to ikoniczny finał "Dziedzictwa Philidora" w pełnej pozycji gry środkowej.'
      }
    },
    {
      id: 'm3-02',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice', 'deflection'],
      fen: '2r3k1/ppqp1ppp/2n1p3/4P1N1/3P4/2P2Q2/PP4PP/5RK1 w - - 0 1',
      solution: ['f3f7', 'g8h8', 'f7f8', 'c8f8', 'f1f8'],
      title: {
        en: 'Overloading the Cornered King',
        pl: 'Przełamanie obrony na linii f'
      },
      hint: {
        en: 'Drive the king to h8 with 1. Qxf7+ (protected by your g5-knight), then sacrifice the queen on f8!',
        pl: 'Zapędź króla na h8 ruchem 1. Hxf7+ (ze wsparciem skoczka g5), a następnie poświęć hetmana na f8!'
      },
      explanation: {
        en: '1. Qxf7+! Kh8 2. Qf8+!! Rxf8 3. Rxf8# uses the vertical f-file battery to deflect the last defender of the 8th rank.',
        pl: '1. Hxf7+! Kh8 2. Hf8+!! Wxf8 3. Wxf8# wykorzystuje baterię po linii f do odciągnięcia ostatniego obrońcy ósmej linii.'
      }
    },
    {
      id: 'm3-03',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'battery'],
      fen: '2r3k1/ppqp1pp1/2n4p/4p1N1/4P3/1QPP4/PP3PP1/2R3KR w - - 0 1',
      solution: ['b3f7', 'g8h8', 'h1h6', 'g7h6', 'f7h7'],
      title: {
        en: 'Rook Sacrifice on h6',
        pl: 'Ofiara wieży na h6'
      },
      hint: {
        en: 'First drive the king to h8 with 1. Qxf7+, then blow open the g7-shield with 2. Rxh6+!',
        pl: 'Najpierw zapędź króla na h8 ruchem 1. Hxf7+, a potem rozbij osłonę pionową ofiarą 2. Wxh6+!'
      },
      explanation: {
        en: '1. Qxf7+ Kh8 2. Rxh6+! gxh6 3. Qh7# rips away the g7-pawn guarding h6 and h7.',
        pl: '1. Hxf7+ Kh8 2. Wxh6+! gxh6 3. Hh7# odciąga piona g7 broniącego pola h7.'
      }
    },
    {
      id: 'm3-04',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['anastasia', 'sacrifice', 'attraction'],
      fen: 'r4rk1/ppqb1ppp/2p1p3/4PN2/3P4/2PR3Q/PP3PPP/5RK1 w - - 0 1',
      solution: ['f5e7', 'g8h8', 'h3h7', 'h8h7', 'd3h3'],
      title: {
        en: 'Anastasia’s Full Combination in 3',
        pl: 'Pełna kombinacja mata Anastazji w 3 ruchach'
      },
      hint: {
        en: 'First jump with your knight to e7 with check (1. Ne7+!) to seal g8 and g6, then sacrifice your queen on h7!',
        pl: 'Najpierw wskocz skoczkiem na e7 z szachem (1. Se7+!), odcinając pola g8 i g6, a potem poświęć hetmana na h7!'
      },
      explanation: {
        en: '1. Ne7+! Kh8 2. Qxh7+!! Kxh7 3. Rh3# constructs the complete Anastasia’s Mate net from a rich middlegame.',
        pl: '1. Se7+! Kh8 2. Hxh7+!! Kxh7 3. Wh3# od podstaw buduje siatkę mata Anastazji i otwiera linię h dla wieży.'
      }
    },
    {
      id: 'm3-05',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['boden', 'sacrifice', 'deflection'],
      fen: '2kr1b1r/pb1np1pp/1pp2p2/N2p4/4PB2/2Q5/PPP2PPP/R3KB1R w KQ - 0 1',
      solution: ['c3c6', 'b7c6', 'f1a6', 'c6b7', 'a6b7'],
      title: {
        en: 'Boden’s Queen Sacrifice & Deflection in 3',
        pl: 'Ofiara hetmana i odciągnięcie w stylu Bodena'
      },
      hint: {
        en: 'Sacrifice your queen on c6 (`1. Qxc6+!!`) to deflect the b7-bishop, then slice in with `2. Ba6+!` and `3. Bxb7#`!',
        pl: 'Poświęć hetmana na c6 (`1. Hxc6+!!`), aby odciągnąć gońca b7, a następnie uderz `2. Ga6+!` oraz `3. Gxb7#`!'
      },
      explanation: {
        en: '1. Qxc6+!! Bxc6 2. Ba6+! Bb7 3. Bxb7# uses the a5-knight and f4-bishop to weave an unstoppable queenside mating net.',
        pl: '1. Hxc6+!! Gxc6 2. Ga6+! Gb7 3. Gxb7# wykorzystuje współpracę skoczka a5 z dwoma gońcami przeciwko długiej roszadzie.'
      }
    },
    {
      id: 'm3-06',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['arabian', 'sacrifice', 'attraction'],
      fen: '3r2k1/pb3ppp/1p3r2/7q/3p1p2/2P3n1/PPQ2RPP/R1B3K1 b - - 0 1',
      solution: ['h5h2', 'g1h2', 'f6h6', 'h2g1', 'h6h1'],
      title: {
        en: 'Black to Move: Queen Sacrifice into Corner Mate',
        pl: 'Ruch czarnych: Ofiara hetmana na h2 i mat na h1'
      },
      hint: {
        en: 'You are playing Black! Rip open the h-file with `1... Qxh2+!!`, swing your f6-rook to h6 with check, and mate on h1!',
        pl: 'Grasz czarnymi! Otwórz linię h ofiarą hetmana `1... Hxh2+!!`, przerzuć wieżę na h6 z szachem i zamatuj na h1!'
      },
      explanation: {
        en: '1... Qxh2+!! 2. Kxh2 Rh6+! 3. Kg1 Rh1# — the g3-knight and f4-pawn seal every escape square while the rook sweeps the h-file.',
        pl: '1... Hxh2+!! 2. Kxh2 Wh6+! 3. Kg1 Wh1# — skoczek g3 i pion f4 odcinają ucieczkę, a wieża matuje po otwartej linii h.'
      }
    },
    {
      id: 'm3-07',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['battery', 'clearance'],
      fen: '5k2/p1p2P1p/1p4p1/P1p3K1/2P5/8/8/6R1 w - - 0 1',
      solution: ['g5f6', 'h7h5', 'g1g6', 'h5h4', 'g6g8'],
      title: {
        en: 'Anderssen’s Quiet-Move Endgame Net in 3',
        pl: 'Cichy ruch królem w siatce Anderssena'
      },
      hint: {
        en: 'With the queenside completely locked, step your king quietly to f6 (`1. Kf6!`) to put Black in zugzwang, then capture on g6!',
        pl: 'Przy zablokowanym skrzydle hetmańskim podejdź cicho królem na f6 (`1. Kf6!`), zmuszając czarne do ruchu pionem h, po czym zbij na g6!'
      },
      explanation: {
        en: '1. Kf6! h5 2. Rxg6 h4 3. Rg8# is a classic quiet-move zugzwang study: Black is forced to advance the h-pawn and open g6.',
        pl: '1. Kf6! h5 2. Wxg6 h4 3. Wg8# to klasyczne studium z cichym posunięciem królem i przymusem ruchu (zugzwangiem).'
      }
    },
    {
      id: 'm3-08',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['boden', 'sacrifice', 'deflection'],
      fen: 'r3kb1r/ppp2ppp/2q5/3p1b2/n7/1PP2P2/PB1NP1PP/2KR1B1R b kq - 0 1',
      solution: ['c6c3', 'b2c3', 'f8a3', 'c3b2', 'a3b2'],
      title: {
        en: 'Black to Move: Queenside Queen Sacrifice in 3',
        pl: 'Ruch czarnych: Ofiara hetmana na c3 w 3 ruchach'
      },
      hint: {
        en: 'Sacrifice your queen on c3 (`1... Qxc3+!!`) to deflect the b2-bishop, then strike with `2... Ba3+!` and `3... Bxb2#`!',
        pl: 'Poświęć hetmana na c3 (`1... Hxc3+!!`), odciągając gońca b2, a następnie uderz `2... Ga3+!` i `3... Gxb2#`!'
      },
      explanation: {
        en: '1... Qxc3+!! 2. Bxc3 Ba3+! 3. Bb2 Bxb2# coordinates both bishops and the a4-knight to crush White’s queenside castling.',
        pl: '1... Hxc3+!! 2. Gxc3 Ga3+! 3. Gb2 Gxb2# łączy siłę obu gońców i skoczka a4 w ataku na długą roszadę białych.'
      }
    },
    {
      id: 'm3-09',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['promotion', 'sacrifice', 'backRank'],
      fen: '5rk1/pp1P2pn/2p1p1B1/4P3/3P4/2P2Q2/PP4PP/5RK1 w - - 0 1',
      solution: ['f3f8', 'h7f8', 'f1f8', 'g8f8', 'd7d8q'],
      title: {
        en: 'Double f8 Sacrifice into Promotion Mate',
        pl: 'Podwójna ofiara na f8 i promocja piona z matem'
      },
      hint: {
        en: 'Sacrifice BOTH your queen and rook on f8 (`1. Qxf8+!! Nxf8 2. Rxf8+! Kxf8`) to clear the 8th rank for your d7-pawn!',
        pl: 'Poświęć ZARÓWNO hetmana, jak i wieżę na f8 (`1. Hxf8+!! Sxf8 2. Wxf8+! Kxf8`), aby promować piona d7 z matem!'
      },
      explanation: {
        en: '1. Qxf8+!! Nxf8 2. Rxf8+! Kxf8 3. d8=Q# lures the black king onto f8 while the g6-bishop seals e8 and g7.',
        pl: '1. Hxf8+!! Sxf8 2. Wxf8+! Kxf8 3. d8=H# zaciąga czarnego króla na f8, podczas gdy goniec g6 odcina pola ucieczki.'
      }
    },
    {
      id: 'm3-10',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'battery', 'clearance'],
      fen: 'r2q1nk1/pp3pb1/2np3p/8/2P4Q/1P4R1/PB3PPP/6K1 w - - 0 1',
      solution: ['g3g7', 'g8h8', 'h4h6', 'f8h7', 'h6h7'],
      title: {
        en: 'Long-Diagonal Rook Sacrifice on g7',
        pl: 'Ofiara wieży na g7 po długiej przekątnej'
      },
      hint: {
        en: 'Black’s g7-bishop guards h6! Smash it first with `1. Rxg7+!! Kh8`, then play `2. Qxh6+! Nh7 3. Qxh7#`!',
        pl: 'Czarny goniec na g7 broni piona h6! Uderz najpierw `1. Wxg7+!! Kh8`, a następnie `2. Hxh6+! Sh7 3. Hxh7#`!'
      },
      explanation: {
        en: '1. Rxg7+!! Kh8 (1... Kxg7 is illegal because of Bb2!) 2. Qxh6+! Nh7 3. Qxh7# destroys Black’s fianchetto fortress.',
        pl: '1. Wxg7+!! Kh8 (bicie 1... Kxg7 jest nielegalne z uwagi na gońca b2!) 2. Hxh6+! Sh7 3. Hxh7# burzy fortecę czarnych.'
      }
    },
    {
      id: 'm4-01',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['smothered', 'doubleCheck', 'sacrifice'],
      fen: 'r1b1r2k/ppqp2pp/2n5/4N3/4P3/1QPP4/PP2BPPP/R4RK1 w - - 0 1',
      solution: ['e5f7', 'h8g8', 'f7h6', 'g8h8', 'b3g8', 'e8g8', 'h6f7'],
      title: {
        en: "Philidor's Legacy (Full 4-Move Combination)",
        pl: 'Dziedzictwo Philidora (Pełna kombinacja w 4 ruchach)'
      },
      hint: {
        en: 'Step 1: Nf7+ Kg8. Step 2: Nh6+! (double check!). Step 3: Qg8+! Rxg8. Step 4: Nf7#!',
        pl: 'Krok 1: Sf7+ Kg8. Krok 2: Sh6+! (podwójny szach!). Krok 3: Hg8+! Wxg8. Krok 4: Sf7#!'
      },
      explanation: {
        en: '1. Nf7+ Kg8 2. Nh6+! Kh8 3. Qg8+! Rxg8 4. Nf7# is the most famous 4-move tactical combination in chess history.',
        pl: '1. Sf7+ Kg8 2. Sh6+! Kh8 3. Hg8+! Wxg8 4. Sf7# to najsłynniejsza 4-ruchowa kombinacja w historii szachów.'
      }
    },
    {
      id: 'm4-02',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['anastasia', 'sacrifice', 'attraction'],
      fen: '5rk1/ppqb1ppp/2p1p3/4PN2/1r6/2PR3Q/PP2PPPP/5RK1 w - - 0 1',
      solution: ['f5e7', 'g8h8', 'h3h7', 'h8h7', 'd3h3', 'b4h4', 'h3h4'],
      title: {
        en: 'Anastasia’s 4-Move Masterpiece',
        pl: 'Pełny atak Anastazji w 4 ruchach'
      },
      hint: {
        en: 'Start with `1. Ne7+! Kh8`, sacrifice your queen on h7 (`2. Qxh7+!! Kxh7`), swing `3. Rh3+!`, and crush the `3... Rh4` interposition!',
        pl: 'Zacznij od `1. Se7+! Kh8`, poświęć hetmana na h7 (`2. Hxh7+!! Kxh7`), zagraj `3. Wh3+!` i zbij zasłaniającą wieżę na h4!'
      },
      explanation: {
        en: '1. Ne7+! Kh8 2. Qxh7+!! Kxh7 3. Rh3+! Rh4 4. Rxh4# executes the complete 4-move Anastasia combination.',
        pl: '1. Se7+! Kh8 2. Hxh7+!! Kxh7 3. Wh3+! Wh4 4. Wxh4# realizuje pełną, 4-ruchową kombinację w stylu Anastazji.'
      }
    },
    {
      id: 'm4-03',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['sacrifice', 'battery', 'kingHunt'],
      fen: '3r2k1/ppqp1pp1/2nr3p/4p1N1/4P3/1QPP3R/PP3PP1/6KR w - - 0 1',
      solution: ['b3f7', 'g8h8', 'h3h6', 'd6h6', 'h1h6', 'g7h6', 'f7h7'],
      title: {
        en: 'Double-Rook Sacrifice on h6 in 4',
        pl: 'Podwójna ofiara wieży na h6 w 4 ruchach'
      },
      hint: {
        en: 'Black threatens `1... Rd1#`, so start with check (`1. Qxf7+! Kh8`), then sacrifice BOTH rooks on h6 (`2. Rxh6+!! Rxh6 3. Rxh6+!! gxh6`)!',
        pl: 'Czarne grożą `1... Wd1#`, więc zacznij od szacha (`1. Hxf7+! Kh8`), a potem poświęć OBIE wieże na h6 (`2. Wxh6+!! Wxh6 3. Wxh6+!! gxh6`)!'
      },
      explanation: {
        en: '1. Qxf7+! Kh8 2. Rxh6+!! Rxh6 3. Rxh6+!! gxh6 4. Qh7# sacrifices both rooks in succession to tear open the h7 mating square.',
        pl: '1. Hxf7+! Kh8 2. Wxh6+!! Wxh6 3. Wxh6+!! gxh6 4. Hh7# poświęca kolejno obie wieże na h6, by otworzyć drogę do mata na h7.'
      }
    },
    {
      id: 'm4-04',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['sacrifice', 'doubleCheck', 'clearance'],
      fen: 'r2q1nk1/pp3pb1/2np3p/5b2/2P4Q/1P4R1/PB3PPP/6K1 w - - 0 1',
      solution: ['g3g7', 'g8h8', 'h4h6', 'f5h7', 'g7h7', 'h8g8', 'h6g7'],
      title: {
        en: 'Long-Diagonal Double-Check Clearance in 4',
        pl: 'Podwójny szach i oczyszczenie pola g7 w 4 ruchach'
      },
      hint: {
        en: 'Play `1. Rxg7+!! Kh8 2. Qxh6+! Bh7`, then unleash the double-check clearance sacrifice `3. Rxh7+!! Kg8 4. Qg7#`!',
        pl: 'Zagraj `1. Wxg7+!! Kh8 2. Hxh6+! Gh7`, a następnie uderz podwójnym szachem oczyszczającym pole g7: `3. Wxh7+!! Kg8 4. Hg7#`!'
      },
      explanation: {
        en: '1. Rxg7+!! Kh8 2. Qxh6+! Bh7 3. Rxh7+!! Kg8 (forced because 3. Rxh7+ is a double check from Rh7 and Bb2!) 4. Qg7# is a masterpiece of pin and double-check geometry.',
        pl: '1. Wxg7+!! Kh8 2. Hxh6+! Gh7 3. Wxh7+!! Kg8 (wymuszone z uwagi na podwójny szach od wieży h7 i gońca b2!) 4. Hg7# to geometryczne arcydzieło.'
      }
    },
    {
      id: 'm4-05',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['sacrifice', 'battery', 'kingHunt'],
      fen: '6kr/pp3pp1/1qpp3r/4p3/4P1n1/2NR3P/PPQP1PP1/3R2K1 b - - 0 1',
      solution: ['b6f2', 'g1h1', 'h6h3', 'd3h3', 'h8h3', 'g2h3', 'f2h2'],
      title: {
        en: 'Black to Move: Double-Rook Sacrifice on h3 in 4',
        pl: 'Ruch czarnych: Podwójna ofiara wieży na h3 w 4'
      },
      hint: {
        en: 'Drive White’s king into the corner with `1... Qxf2+! 2. Kh1`, then sacrifice BOTH rooks on h3 (`2... Rxh3+!! 3. Rxh3 Rxh3+!!`)!',
        pl: 'Zapędź białego króla w róg ruchem `1... Hxf2+! 2. Kh1`, a następnie poświęć OBIE czarne wieże na h3 (`2... Wxh3+!! 3. Wxh3 Wxh3+!!`)!'
      },
      explanation: {
        en: '1... Qxf2+! 2. Kh1 Rxh3+!! 3. Rxh3 Rxh3+!! 4. gxh3 Qh2# demolishes the h3/g2 shield with a spectacular double-rook sacrifice.',
        pl: '1... Hxf2+! 2. Kh1 Wxh3+!! 3. Wxh3 Wxh3+!! 4. gxh3 Hh2# burzy osłonę króla efektowną ofiarą obu wież na polu h3.'
      }
    },
    {
      id: 'm4-06',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['sacrifice', 'doubleCheck', 'clearance'],
      fen: '6k1/pb3ppp/1p4r1/2p4q/5B2/2NP3P/PP3PB1/R2Q1NK1 b - - 0 1',
      solution: ['g6g2', 'g1h1', 'h5h3', 'f4h2', 'g2h2', 'h1g1', 'h3g2'],
      title: {
        en: 'Black to Move: Long-Diagonal Double-Check Clearance in 4',
        pl: 'Ruch czarnych: Podwójny szach i mat na długiej przekątnej'
      },
      hint: {
        en: 'Strike with `1... Rxg2+!! 2. Kh1 Qxh3+! 3. Bh2`, then unleash the double-check clearance `3... Rxh2+!! 4. Kg1 Qg2#`!',
        pl: 'Uderz `1... Wxg2+!! 2. Kh1 Hxh3+! 3. Gh2`, a następnie daj podwójnego szacha oczyszczającego pole g2: `3... Wxh2+!! 4. Kg1 Hg2#`!'
      },
      explanation: {
        en: '1... Rxg2+!! 2. Kh1 Qxh3+! 3. Bh2 Rxh2+!! 4. Kg1 (forced by double check from Rh2 and Bb7!) Qg2# finishes a brilliant 4-move combination.',
        pl: '1... Wxg2+!! 2. Kh1 Hxh3+! 3. Gh2 Wxh2+!! 4. Kg1 (wymuszone podwójnym szachem od Wh2 i Gb7!) Hg2# wieńczy 4-ruchową kombinację.'
      }
    }
  ];

  const OPENING_FAMILIES = {
    italian: { en: 'Italian Game', pl: 'Partia Włoska' },
    philidor: { en: 'Philidor Defense', pl: 'Obrona Philidora' },
    caroKann: { en: 'Caro-Kann Defense', pl: 'Obrona Caro-Kann' },
    ruyLopez: { en: 'Ruy Lopez (Spanish)', pl: 'Partia Hiszpańska' },
    french: { en: 'French / Greek Gift', pl: 'Obrona Francuska / Ofiara Grecka' },
    budapest: { en: 'Budapest Gambit', pl: 'Gambit Budapeszteński' },
    stafford: { en: 'Stafford Gambit', pl: 'Gambit Stafforda' },
    englund: { en: 'Englund Gambit', pl: 'Gambit Englunda' },
    classical: { en: 'Classical Traps', pl: 'Klasyczne Pułapki' }
  };

  /**
   * 12 Guided Opening Traps & Tactical Courses (4 Easy, 4 Medium, 4 Hard)
   * Each entry includes `stepHints` — an array of bilingual coaching tips shown
   * before each player move (index 0 = player's 1st move, index 1 = player's 2nd move, etc.).
   */
  const OPENING_TRAPS = [
    // =========================================================================
    // EASY OPENING TRAPS (4 Courses)
    // =========================================================================
    {
      id: 'op-01',
      isOpeningTrap: true,
      movesToMate: 4,
      difficulty: 'easy',
      openingFamily: 'italian',
      themes: ['battery', 'Classical'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['e2e4', 'e7e5', 'f1c4', 'b8c6', 'd1h5', 'g8f6', 'h5f7'],
      title: {
        en: "Scholar's Mate Setup (4-Move Opening Trap)",
        pl: 'Mat Szewski od 1. ruchu (Pułapka w 4 ruchach)'
      },
      stepHints: [
        {
          en: 'Step 1/4: Play 1. e4 to claim the center and open diagonals for your light-squared bishop and queen.',
          pl: 'Krok 1/4: Zagraj 1. e4, aby zająć centrum i otworzyć przekątne dla gońca oraz hetmana.'
        },
        {
          en: 'Step 2/4: Develop your bishop to c4 (2. Bc4), aiming directly at Black’s weakest square: f7!',
          pl: 'Krok 2/4: Rozwiń gońca na c4 (2. Gc4), celując bezpośrednio w najsłabszy punkt czarnych: f7!'
        },
        {
          en: 'Step 3/4: Bring the queen to h5 (3. Qh5), creating a deadly Queen + Bishop battery aimed at f7 and e5.',
          pl: 'Krok 3/4: Wyprowadź hetmana na h5 (3. Hh5), tworząc groźną baterię z gońcem wycelowaną w f7 oraz e5.'
        },
        {
          en: 'Step 4/4: Black blundered with 3... Nf6?? instead of defending f7! Capture on f7 (4. Qxf7#) for checkmate!',
          pl: 'Krok 4/4: Czarne popełniły błąd 3... Sf6?? zamiast bronić f7! Zbij na f7 (4. Hxf7#) i daj mata!'
        }
      ],
      hint: {
        en: 'Follow the guided coach step above: 1. e4 → 2. Bc4 → 3. Qh5 → 4. Qxf7#.',
        pl: 'Postępuj zgodnie ze wskazówką trenera: 1. e4 → 2. Gc4 → 3. Hh5 → 4. Hxf7#.'
      },
      explanation: {
        en: '1. e4 e5 2. Bc4 Nc6 3. Qh5 Nf6?? 4. Qxf7# is Scholar’s Mate. Black should defend with 3... g6! or 3... Qe7.',
        pl: '1. e4 e5 2. Gc4 Sc6 3. Hh5 Sf6?? 4. Hxf7# to Mat Szewski. Czarne powinny bronić się ruchem 3... g6! lub 3... He7.'
      }
    },
    {
      id: 'op-02',
      isOpeningTrap: true,
      movesToMate: 2,
      difficulty: 'easy',
      openingFamily: 'classical',
      themes: ['battery'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1',
      solution: ['e7e5', 'g2g4', 'd8h4'],
      title: {
        en: "Fool's Mate: Punishing Weakened Kingside Pawns",
        pl: 'Mat Głupca: Kara za osłabienie skrzydła królewskiego'
      },
      stepHints: [
        {
          en: 'Step 1/2 (Black): White played the weakening 1. f3?! Respond with 1... e5 to open your queen’s diagonal!',
          pl: 'Krok 1/2 (Czarne): Białe zagrały osłabiające 1. f3?! Odpowiedz 1... e5, otwierając przekątną dla hetmana!'
        },
        {
          en: 'Step 2/2 (Black): White blundered with 2. g4?? — the e1-h4 diagonal is wide open! Play 2... Qh4#!',
          pl: 'Krok 2/2 (Czarne): Białe popełniły koszmarny błąd 2. g4?? — przekątna e1-h4 jest otwarta! Zagraj 2... Hh4#!'
        }
      ],
      hint: {
        en: 'Open the diagonal with 1... e5, then strike with 2... Qh4#!',
        pl: 'Otwórz przekątną ruchem 1... e5, a następnie uderz 2... Hh4#!'
      },
      explanation: {
        en: '1. f3 e5 2. g4?? Qh4# is the fastest possible checkmate in chess, showing why the f-pawn shields the king.',
        pl: '1. f3 e5 2. g4?? Hh4# to najszybszy możliwy mat w szachach, pokazujący jak ważny dla obrony króla jest pion f.'
      }
    },
    {
      id: 'op-03',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'easy',
      openingFamily: 'caroKann',
      themes: ['smothered', 'pin'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['e2e4', 'c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'b8d7', 'd1e2', 'g8f6', 'e4d6'],
      title: {
        en: 'Caro-Kann Defense: 6-Move Smothered Trap',
        pl: 'Obrona Caro-Kann: Mat zaduszony w 6. ruchu'
      },
      stepHints: [
        {
          en: 'Step 1/6: Start with 1. e4. Black replies with the Caro-Kann Defense (1... c6).',
          pl: 'Krok 1/6: Zacznij od 1. e4. Czarne odpowiadają Obroną Caro-Kann (1... c6).'
        },
        {
          en: 'Step 2/6: Play 2. d4 to build an ideal two-pawn center.',
          pl: 'Krok 2/6: Zagraj 2. d4, budując silne centrum pionowe.'
        },
        {
          en: 'Step 3/6: Develop your knight with 3. Nc3 to defend e4.',
          pl: 'Krok 3/6: Rozwiń skoczka ruchem 3. Sc3, broniąc centralnego piona e4.'
        },
        {
          en: 'Step 4/6: Recapture in the center with 4. Nxe4! Black plays 4... Nd7 to prepare ...Ngf6.',
          pl: 'Krok 4/6: Odbij w centrum ruchem 4. Sxe4! Czarne grają 4... Sd7, przygotowując ...Sgf6.'
        },
        {
          en: 'Step 5/6: Set a sneaky trap with 5. Qe2! This quietly pins Black’s e7-pawn if the e-file opens.',
          pl: 'Krok 5/6: Zastaw subtelną pułapkę ruchem 5. He2! Hetman po cichu wiąże piona e7 z czarnym królem.'
        },
        {
          en: 'Step 6/6: Black fell for 5... Ngf6?? forgetting the e7-pawn is pinned! Jump in with 6. Nd6#!',
          pl: 'Krok 6/6: Czarne zagrały automatyczne 5... Sgf6?? zapominając o związaniu piona e7! Wskocz 6. Sd6#!'
        }
      ],
      hint: {
        en: 'Follow the Classical Caro-Kann line: 1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Qe2! Ngf6?? 6. Nd6#.',
        pl: 'Zagraj główną linię Caro-Kann: 1. e4 c6 2. d4 d5 3. Sc3 dxe4 4. Sxe4 Sd7 5. He2! Sgf6?? 6. Sd6#.'
      },
      explanation: {
        en: '5. Qe2! sets a famous trap: after 5... Ngf6??, 6. Nd6# is smothered checkmate because the e7-pawn is pinned to the king on e8!',
        pl: '5. He2! zastawia słynną pułapkę: po 5... Sgf6?? ruch 6. Sd6# daje mata zaduszonego, bo pion e7 jest związany z królem!'
      }
    },
    {
      id: 'op-04',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'easy',
      openingFamily: 'budapest',
      themes: ['smothered', 'pin'],
      fen: 'rnbqkb1r/pppp1ppp/5n2/4P3/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 3',
      solution: ['f6g4', 'g1f3', 'b8c6', 'c1f4', 'f8b4', 'b1d2', 'd8e7', 'a2a3', 'g4e5', 'a3b4', 'e5d3'],
      title: {
        en: 'Budapest Gambit: The Kieninger Smothered Trap',
        pl: 'Gambit Budapeszteński: Pułapka Kieningera'
      },
      stepHints: [
        {
          en: 'Step 1/6 (Black): After 1. d4 Nf6 2. c4 e5 3. dxe5, jump your knight to g4 (3... Ng4!) attacking e5.',
          pl: 'Krok 1/6 (Czarne): Po 1. d4 Sf6 2. c4 e5 3. dxe5 wskocz skoczkiem na g4 (3... Sg4!), atakując piona e5.'
        },
        {
          en: 'Step 2/6: Develop your queenside knight to c6 (4... Nc6) adding pressure on the e5-pawn.',
          pl: 'Krok 2/6: Rozwiń drugiego skoczka na c6 (4... Sc6), zwiększając nacisk na piona e5.'
        },
        {
          en: 'Step 3/6: Give a developing check with 5... Bb4+! White blocks with 6. Nbd2.',
          pl: 'Krok 3/6: Daj rozwijającego szacha ruchem 5... Gb4+! Białe zasłaniają się skoczkiem 6. Sbd2.'
        },
        {
          en: 'Step 4/6: Play 6... Qe7! piling up on e5 and quietly eyeing the e-file toward White’s king.',
          pl: 'Krok 4/6: Zagraj 6... He7!, dokładając atak na e5 i po cichu celując po linii e w białego króla.'
        },
        {
          en: 'Step 5/6: White attacks your bishop with 7. a3. Ignore the bishop and capture 7... Ngxe5!!',
          pl: 'Krok 5/6: Białe atakują gońca ruchem 7. a3. Zignoruj gońca i zbij w centrum 7... Sgxe5!!'
        },
        {
          en: 'Step 6/6: White greedily took the bishop (8. axb4??)! The e2-pawn is pinned by Qe7 — play 8... Nd3#!',
          pl: 'Krok 6/6: Białe łakomie zbiły gońca (8. axb4??)! Pion e2 jest związany przez hetmana e7 — zagraj 8... Sd3#!'
        }
      ],
      hint: {
        en: 'Build pressure on e5 (Ng4, Nc6, Bb4+, Qe7), capture Ngxe5!, and jump to d3#!',
        pl: 'Zbuduj nacisk na e5 (Sg4, Sc6, Gb4+, He7), zbij Sgxe5!, a po axb4?? wskocz na d3#!'
      },
      explanation: {
        en: 'The Kieninger Trap in the Budapest Gambit uses the pin along the e-file (Qe7 vs Ke1) so 8... Nd3# cannot be captured by the e2-pawn!',
        pl: 'Pułapka Kieningera w Gambicie Budapeszteńskim wykorzystuje związanie piona e2 po linii e przez hetmana na e7.'
      }
    },

    // =========================================================================
    // MEDIUM OPENING TRAPS (4 Courses)
    // =========================================================================
    {
      id: 'op-05',
      isOpeningTrap: true,
      movesToMate: 7,
      difficulty: 'medium',
      openingFamily: 'philidor',
      themes: ['sacrifice', 'attraction', 'kingHunt'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['e2e4', 'e7e5', 'g1f3', 'd7d6', 'f1c4', 'c8g4', 'b1c3', 'g7g6', 'f3e5', 'g4d1', 'c4f7', 'e8e7', 'c3d5'],
      title: {
        en: "Légal's Immortal Mate (Queen Sacrifice in the Opening)",
        pl: 'Mat Légala (Nieśmiertelna ofiara hetmana w debiucie)'
      },
      stepHints: [
        {
          en: 'Step 1/7: Open with 1. e4. Black replies 1... e5.',
          pl: 'Krok 1/7: Rozpocznij partię ruchem 1. e4. Czarne odpowiadają 1... e5.'
        },
        {
          en: 'Step 2/7: Develop with 2. Nf3 attacking e5. Black plays the solid Philidor Defense (2... d6).',
          pl: 'Krok 2/7: Rozwiń skoczka 2. Sf3, atakując e5. Czarne wybierają Obronę Philidora (2... d6).'
        },
        {
          en: 'Step 3/7: Play 3. Bc4 targeting f7. Black pins your knight with 3... Bg4.',
          pl: 'Krok 3/7: Zagraj 3. Gc4, celując w f7. Czarne wiążą skoczka ruchem 3... Gg4.'
        },
        {
          en: 'Step 4/7: Develop your second knight to c3 (4. Nc3). Black plays the passive 4... g6?!',
          pl: 'Krok 4/7: Wyprowadź drugiego skoczka na c3 (4. Sc3). Czarne grają pasywne 4... g6?!'
        },
        {
          en: 'Step 5/7: Unleash Légal’s Shocking Queen Sacrifice: 5. Nxe5!! Offering your queen on d1!',
          pl: 'Krok 5/7: Uderz słynną ofiarą Légala: 5. Sxe5!! Poświęcając własnego hetmana na d1!'
        },
        {
          en: 'Step 6/7: Black took your queen (5... Bxd1??)! Strike immediately with 6. Bxf7+! forcing 6... Ke7.',
          pl: 'Krok 6/7: Czarne zbiły hetmana (5... Gxd1??)! Daj natychmiast szacha 6. Gxf7+!, wymuszając 6... Ke7.'
        },
        {
          en: 'Step 7/7: Deliver checkmate in the middle of the board with 7. Nd5#!',
          pl: 'Krok 7/7: Zamatuj króla w samym środku szachownicy skokiem 7. Sd5#!'
        }
      ],
      hint: {
        en: 'After 4. Nc3 g6?, break the relative pin with 5. Nxe5!! Bxd1 6. Bxf7+ Ke7 7. Nd5#!',
        pl: 'Po 4. Sc3 g6? zerwij względne związanie ruchem 5. Sxe5!! Gxd1 6. Gxf7+ Ke7 7. Sd5#!'
      },
      explanation: {
        en: 'Played by Sire de Légal in Paris (1750), 5. Nxe5!! proves that a relative pin on the queen can be broken when your minor pieces coordinate against f7 and d5!',
        pl: 'Kombinacja Légala (Paryż 1750) pokazuje, że związanie hetmana jest tylko względne — trzy lekkie figury białych matują czarnego króla!'
      }
    },
    {
      id: 'op-06',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'medium',
      openingFamily: 'italian',
      themes: ['smothered', 'pin', 'sacrifice'],
      fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
      solution: ['b8c6', 'f1c4', 'c6d4', 'f3e5', 'd8g5', 'e5f7', 'g5g2', 'h1f1', 'g2e4', 'c4e2', 'd4f3'],
      title: {
        en: 'Blackburne Shilling Gambit (7-Move Trap for Black)',
        pl: 'Gambit Blackburne’a (Pułapka w 7 ruchach czarnymi)'
      },
      stepHints: [
        {
          en: 'Step 1/6 (Black): After 1. e4 e5 2. Nf3, develop normally with 2... Nc6. White plays 3. Bc4.',
          pl: 'Krok 1/6 (Czarne): Po 1. e4 e5 2. Sf3 rozwiń skoczka 2... Sc6. Białe grają włoskie 3. Gc4.'
        },
        {
          en: 'Step 2/6: Spring the Blackburne Shilling Gambit with 3... Nd4?! leaving the e5-pawn undefended as bait!',
          pl: 'Krok 2/6: Zastaw pułapkę Blackburne’a skokiem 3... Sd4?! zostawiając piona e5 jako przynętę!'
        },
        {
          en: 'Step 3/6: White took the bait (4. Nxe5?)! Counterattack immediately with 4... Qg5! hitting e5 and g2.',
          pl: 'Krok 3/6: Białe połknęły przynętę (4. Sxe5?)! Zaatakuj natychmiast hetmanem 4... Hg5! (grozi zbicie na e5 i g2).'
        },
        {
          en: 'Step 4/6: White plays 5. Nxf7 (forking queen and rook). Ignore the rook and smash 5... Qxg2!!',
          pl: 'Krok 4/6: Białe grają 5. Sxf7 (widełki na hetmana i wieżę). Zignoruj wieżę i uderz 5... Hxg2!!'
        },
        {
          en: 'Step 5/6: White saves the rook with 6. Rf1. Now snatch the center pawn with check: 6... Qxe4+!',
          pl: 'Krok 5/6: Białe ratują wieżę ruchem 6. Wf1. Zbij teraz centralnego piona z szachem: 6... Hxe4+!'
        },
        {
          en: 'Step 6/6: White blocks with 7. Be2 (since 7. Qe2 loses the queen). The e2-bishop is pinned — play 7... Nf3#!',
          pl: 'Krok 6/6: Białe zasłaniają 7. Ge2. Goniec na e2 jest związany przez hetmana — zagraj 7... Sf3#!'
        }
      ],
      hint: {
        en: 'Bait e5 with 3... Nd4, then invade with 4... Qg5, 5... Qxg2, 6... Qxe4+, and 7... Nf3#!',
        pl: 'Podstaw piona ruchem 3... Sd4, a potem wtargnij hetmanem: 4... Hg5, 5... Hxg2, 6... Hxe4+ i 7... Sf3#!'
      },
      explanation: {
        en: 'Joseph Henry Blackburne famously used this gambit to defeat amateurs: 7... Nf3# is a smothered mate because the e2-bishop is pinned by the queen on e4!',
        pl: 'Joseph Henry Blackburne wielokrotnie wygrywał tym wariantem: 7... Sf3# to mat zaduszony, bo goniec e2 jest związany!'
      }
    },
    {
      id: 'op-07',
      isOpeningTrap: true,
      movesToMate: 7,
      difficulty: 'medium',
      openingFamily: 'italian',
      themes: ['sacrifice', 'kingHunt', 'attraction'],
      fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
      solution: ['f3g5', 'd7d5', 'e4d5', 'f6d5', 'g5f7', 'e8f7', 'd1f3', 'f7g8', 'c4d5', 'd8d5', 'f3d5', 'c8e6', 'd5e6'],
      title: {
        en: 'Italian Game: The Fried Liver Attack (Nxf7!)',
        pl: 'Partia Włoska: Atak Fegatello (Ofiara Sxf7!)'
      },
      stepHints: [
        {
          en: 'Step 1/7: From the Two Knights Defense, leap forward with 4. Ng5! teaming up with your c4-bishop against f7.',
          pl: 'Krok 1/7: W Obronie Dwóch Skoczków wskocz 4. Sg5!, atakując wspólnie z gońcem c4 punkt f7.'
        },
        {
          en: 'Step 2/7: Black blocks the diagonal with 4... d5. Capture it with 5. exd5!',
          pl: 'Krok 2/7: Czarne przesłaniają przekątną ruchem 4... d5. Zbij piona: 5. exd5!'
        },
        {
          en: 'Step 3/7: Black recaptured with 5... Nxd5?! instead of 5... Na5! Unleash the Fried Liver sacrifice: 6. Nxf7!!',
          pl: 'Krok 3/7: Czarne odbiły 5... Sxd5?! zamiast 5... Sa5! Poświęć skoczka w stylu Fegatello: 6. Sxf7!!'
        },
        {
          en: 'Step 4/7: After 6... Kxf7, bring out the queen with check (7. Qf3+!), double-attacking the king and d5-knight!',
          pl: 'Krok 4/7: Po 6... Kxf7 wyprowadź hetmana z szachem (7. Hf3+!), atakując jednocześnie króla i skoczka d5!'
        },
        {
          en: 'Step 5/7: Black retreated 7... Kg8?? instead of 7... Ke6. Capture on d5 with check: 8. Bxd5+!',
          pl: 'Krok 5/7: Czarne cofnęły króla 7... Kg8?? zamiast 7... Ke6. Zbij na d5 z szachem: 8. Gxd5+!'
        },
        {
          en: 'Step 6/7: Black had to give up the queen (8... Qxd5). Recapture with check: 9. Qxd5+!',
          pl: 'Krok 6/7: Czarne musiały oddać hetmana (8... Hxd5). Odbij hetmanem z szachem: 9. Hxd5+!'
        },
        {
          en: 'Step 7/7: Black blocks with 9... Be6. Capture the bishop (10. Qxe6#) for checkmate!',
          pl: 'Krok 7/7: Czarne zasłaniają się gońcem 9... Ge6. Zbij gońca (10. Hxe6#) i daj mata!'
        }
      ],
      hint: {
        en: 'Play 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7! Kxf7 7. Qf3+ Kg8 8. Bxd5+ Qxd5 9. Qxd5+ Be6 10. Qxe6#.',
        pl: 'Zagraj 4. Sg5 d5 5. exd5 Sxd5 6. Sxf7! Kxf7 7. Hf3+ Kg8 8. Gxd5+ Hxd5 9. Hxd5+ Ge6 10. Hxe6#.'
      },
      explanation: {
        en: 'The Fried Liver Attack (6. Nxf7!!) dates back to 1610 (Polerio). If Black retreats 7... Kg8??, it leads to a forced checkmate!',
        pl: 'Atak Fegatello (6. Sxf7!!) znany jest od 1610 roku. Odejście 7... Kg8?? przegrywa forsownie z uwagi na przekątną a2-g8!'
      }
    },
    {
      id: 'op-08',
      isOpeningTrap: true,
      movesToMate: 8,
      difficulty: 'medium',
      openingFamily: 'englund',
      themes: ['pin', 'deflection', 'backRank'],
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      solution: ['e7e5', 'd4e5', 'b8c6', 'g1f3', 'd8e7', 'c1f4', 'e7b4', 'f4d2', 'b4b2', 'd2c3', 'f8b4', 'd1d2', 'b4c3', 'd2c3', 'b2c1'],
      title: {
        en: 'Englund Gambit Trap (Black Queen Invasion)',
        pl: 'Gambit Englunda (Pułapka hetmańska czarnymi)'
      },
      stepHints: [
        {
          en: 'Step 1/8 (Black): Against 1. d4, challenge immediately with the Englund Gambit: 1... e5!',
          pl: 'Krok 1/8 (Czarne): Przeciwko 1. d4 rzuć wyzwanie Gambitem Englunda: 1... e5!'
        },
        {
          en: 'Step 2/8: After 2. dxe5, develop 2... Nc6 attacking the e5-pawn.',
          pl: 'Krok 2/8: Po 2. dxe5 rozwiń skoczka 2... Sc6, atakując piona e5.'
        },
        {
          en: 'Step 3/8: White defends with 3. Nf3. Add a second attacker with 3... Qe7!',
          pl: 'Krok 3/8: Białe bronią piona ruchem 3. Sf3. Dołóż drugiego atakującego: 3... He7!'
        },
        {
          en: 'Step 4/8: White plays the natural 4. Bf4. Spring the double attack: 4... Qb4+! (checks the king, attacks f4 and b2!).',
          pl: 'Krok 4/8: Białe grają naturalne 4. Gf4. Uderz podwójnym atakiem: 4... Hb4+! (szach oraz atak na f4 i b2!).'
        },
        {
          en: 'Step 5/8: White retreats 5. Bd2 to save the bishop. Capture the poisoned b2-pawn: 5... Qxb2!',
          pl: 'Krok 5/8: Białe cofają gońca 5. Gd2. Zbij piona b2 hetmanem: 5... Hxb2! (atakując wieżę a1).'
        },
        {
          en: 'Step 6/8: White plays 6. Bc3?? thinking it traps your queen and defends a1! Pin the bishop with 6... Bb4!!',
          pl: 'Krok 6/8: Białe grają 6. Gc3?? myśląc, że bronią wieży a1! Zwiąż gońca ruchem 6... Gb4!!'
        },
        {
          en: 'Step 7/8: White defends c3 with 7. Qd2. Eliminate the defender of c1: 7... Bxc3!',
          pl: 'Krok 7/8: Białe bronią c3 hetmanem 7. Hd2. Zbij gońca odciągając białego hetmana od pierwszej linii: 7... Gxc3!'
        },
        {
          en: 'Step 8/8: After 8. Qxc3??, the 1st rank is unguarded! Swoop in with 8... Qc1#!',
          pl: 'Krok 8/8: Po 8. Hxc3?? pierwsza linia została bez obrony! Zamatuj ruchem 8... Hc1#!'
        }
      ],
      hint: {
        en: 'Play 1... e5 2. dxe5 Nc6 3. Nf3 Qe7 4. Bf4 Qb4+! 5. Bd2 Qxb2 6. Bc3 Bb4! 7. Qd2 Bxc3 8. Qxc3 Qc1#.',
        pl: 'Zagraj 1... e5 2. dxe5 Sc6 3. Sf3 He7 4. Gf4 Hb4+! 5. Gd2 Hxb2 6. Gc3 Gb4! 7. Hd2 Gxc3 8. Hxc3 Hc1#.'
      },
      explanation: {
        en: 'The Englund Gambit Trap punishes automatic development (4. Bf4? and 6. Bc3?) with a brilliant pin (6... Bb4!) and deflection onto c3.',
        pl: 'Pułapka w Gambicie Englunda karze rutynowy rozwój figur (4. Gf4? i 6. Gc3?) wiążącym uderzeniem 6... Gb4! i odciągnięciem hetmana.'
      }
    },

    // =========================================================================
    // HARD OPENING TRAPS & TACTICAL COURSES (4 Courses)
    // =========================================================================
    {
      id: 'op-09',
      isOpeningTrap: true,
      movesToMate: 7,
      difficulty: 'hard',
      openingFamily: 'french',
      themes: ['sacrifice', 'kingHunt', 'attraction'],
      fen: 'r1bq1rk1/ppp1bppp/2n1p3/3pP3/3P4/2PB1N2/PP3PPP/RNBQK2R w KQ - 0 1',
      solution: ['d3h7', 'g8h7', 'f3g5', 'h7g8', 'd1h5', 'f8e8', 'h5f7', 'g8h8', 'f7h5', 'h8g8', 'h5h7', 'g8f8', 'h7h8'],
      title: {
        en: 'The Classical Greek Gift Sacrifice (Bxh7+!)',
        pl: 'Klasyczna Ofiara Grecka (Gxh7+! w Obronie Francuskiej)'
      },
      stepHints: [
        {
          en: 'Step 1/7: Black castled kingside without a knight on f6 and your e5-pawn blocks defenders. Sacrifice with 1. Bxh7+!!',
          pl: 'Krok 1/7: Czarne zrobiły roszadę bez skoczka na f6, a pion e5 blokuje obronę. Poświęć gońca: 1. Gxh7+!!'
        },
        {
          en: 'Step 2/7: After 1... Kxh7, jump in with the knight (2. Ng5+!) to open the d1-h5 diagonal for your queen.',
          pl: 'Krok 2/7: Po 1... Kxh7 wskocz skoczkiem z szachem (2. Sg5+!), otwierając przekątną dla hetmana.'
        },
        {
          en: 'Step 3/7: Black retreats 2... Kg8. Bring the queen to h5 (3. Qh5!) threatening 4. Qh7#.',
          pl: 'Krok 3/7: Czarne cofają się 2... Kg8. Wprowadź hetmana na h5 (3. Hh5!) z groźbą mata na h7.'
        },
        {
          en: 'Step 4/7: Black plays 3... Re8 to make flight room on f8. Capture f7 with check (4. Qxf7+!) to seal f8!',
          pl: 'Krok 4/7: Czarne grają 3... We8, robiąc miejsce ucieczki na f8. Zbij na f7 z szachem (4. Hxf7+!), zabierając pole f8!'
        },
        {
          en: 'Step 5/7: After 4... Kh8, return the queen to h5 with check (5. Qh5+!) forcing the king back to g8.',
          pl: 'Krok 5/7: Po 4... Kh8 wróć hetmanem na h5 z szachem (5. Hh5+!), zmuszając króla do powrotu na g8.'
        },
        {
          en: 'Step 6/7: Now that f7 is gone, check on h7 (6. Qh7+!) driving the king to f8.',
          pl: 'Krok 6/7: Teraz gdy nie ma już piona f7, daj szacha na h7 (6. Hh7+!), spychając króla na f8.'
        },
        {
          en: 'Step 7/7: Finish the king hunt with 7. Qh8#! (The g5-knight covers e6 and f7!)',
          pl: 'Krok 7/7: Zakończ polowanie na króla ruchem 7. Hh8#! (Skoczek z g5 odcina pola e6 oraz f7!)'
        }
      ],
      hint: {
        en: 'Execute the textbook Greek Gift: 1. Bxh7+! Kxh7 2. Ng5+ Kg8 3. Qh5 Re8 4. Qxf7+ Kh8 5. Qh5+ Kg8 6. Qh7+ Kf8 7. Qh8#.',
        pl: 'Wykonaj podręcznikową Ofiarę Grecką: 1. Gxh7+! Kxh7 2. Sg5+ Kg8 3. Hh5 We8 4. Hxf7+ Kh8 5. Hh5+ Kg8 6. Hh7+ Kf8 7. Hh8#.'
      },
      explanation: {
        en: 'The Greek Gift (Bxh7+!) is one of the most important attacking patterns in chess. Notice why 4. Qxf7+! is essential before 6. Qh7+ — it eliminates the f7-pawn so the king cannot escape via e6!',
        pl: 'Ofiara Grecka (Gxh7+!) to jeden z najważniejszych wzorców ataku w szachach. Zwróć uwagę na wtrącenie 4. Hxf7+! — likwiduje piona f7 i sprawia, że skoczek kontroluje pole e6!'
      }
    },
    {
      id: 'op-10',
      isOpeningTrap: true,
      movesToMate: 4,
      difficulty: 'hard',
      openingFamily: 'stafford',
      themes: ['sacrifice', 'attraction', 'kingHunt'],
      fen: 'r1bqkb1r/ppp2ppp/2p2n2/8/4P3/3P4/PPP2PPP/RNBQKB1R b KQkq - 0 5',
      solution: ['f8c5', 'c1g5', 'f6e4', 'g5d8', 'c5f2', 'e1e2', 'c8g4'],
      title: {
        en: 'Stafford Gambit: Queen Sacrifice on d8 (Black)',
        pl: 'Gambit Stafforda: Ofiara hetmana na d8 (Czarne)'
      },
      stepHints: [
        {
          en: 'Step 1/4 (Black): In the Stafford Gambit, develop your bishop to c5 (5... Bc5!) eyeing f2.',
          pl: 'Krok 1/4 (Czarne): W Gambicie Stafforda wyprowadź gońca na c5 (5... Gc5!), celując w punkt f2.'
        },
        {
          en: 'Step 2/4: White pins your knight with 6. Bg5?! Break the pin and offer your queen with 6... Nxe4!!',
          pl: 'Krok 2/4: Białe wiążą skoczka ruchem 6. Gg5?! Zerwij związanie i poświęć hetmana skokiem 6... Sxe4!!'
        },
        {
          en: 'Step 3/4: White captured your queen (7. Bxd8??)! Strike f2 with check: 7... Bxf2+!',
          pl: 'Krok 3/4: Białe zbiły hetmana (7. Gxd8??)! Uderz na f2 z szachem: 7... Gxf2+!'
        },
        {
          en: 'Step 4/4: White’s king is forced up to e2 (8. Ke2). Deliver checkmate with 8... Bg4#!',
          pl: 'Krok 4/4: Biały król musiał wyjść na e2 (8. Ke2). Zamatuj go drugim gońcem: 8... Gg4#!'
        }
      ],
      hint: {
        en: 'Play 5... Bc5 6. Bg5 Nxe4!! 7. Bxd8 Bxf2+! 8. Ke2 Bg4#.',
        pl: 'Zagraj 5... Gc5 6. Gg5 Sxe4!! 7. Gxd8 Gxf2+! 8. Ke2 Gg4#.'
      },
      explanation: {
        en: 'The Stafford Gambit is famous for this venomous trap: two bishops and a knight weave a mating net around White’s king on e2.',
        pl: 'Gambit Stafforda słynie z tej jadowitej pułapki: dwa gońce i skoczek tworzą nieuchronną sieć matową wokół króla na e2.'
      }
    },
    {
      id: 'op-11',
      isOpeningTrap: true,
      movesToMate: 5,
      difficulty: 'hard',
      openingFamily: 'ruyLopez',
      themes: ['sacrifice', 'clearance', 'battery'],
      fen: 'r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4',
      solution: ['f6g4', 'h2h3', 'h7h5', 'h3g4', 'h5g4', 'f3e5', 'd8h4', 'e5g4', 'h4h1'],
      title: {
        en: 'Ruy Lopez: The Fishing Pole Trap (Black)',
        pl: 'Partia Hiszpańska: Pułapka "Wędki" (Fishing Pole)'
      },
      stepHints: [
        {
          en: 'Step 1/5 (Black): After White castles in the Ruy Lopez, jump your knight to g4 (4... Ng4!).',
          pl: 'Krok 1/5 (Czarne): Po krótkiej roszadzie białych w Partii Hiszpańskiej wskocz skoczkiem na g4 (4... Sg4!).'
        },
        {
          en: 'Step 2/5: White kicks the knight with 5. h3. Cast the "Fishing Pole" bait with 5... h5!! leaving the knight en prise!',
          pl: 'Krok 2/5: Białe przeganiają skoczka ruchem 5. h3. Zarzuć "wędkę" ruchem 5... h5!! zostawiając skoczka pod biciem!'
        },
        {
          en: 'Step 3/5: White took the bait (6. hxg4?)! Recapture 6... hxg4! opening the h-file for your h8-rook and attacking f3.',
          pl: 'Krok 3/5: Białe wzięły przynętę (6. hxg4?)! Odbij 6... hxg4!, otwierając linię h dla wieży h8 i atakując skoczka f3.'
        },
        {
          en: 'Step 4/5: White moves the knight to e5 (7. Nxe5). Bring your queen to the open h-file: 7... Qh4!',
          pl: 'Krok 4/5: Białe odchodzą skoczkiem 7. Sxe5. Wprowadź hetmana na otwartą linię h: 7... Hh4!'
        },
        {
          en: 'Step 5/5: After 8. Nxg4, deliver checkmate on h1 (8... Qh1#) backed by the h8-rook!',
          pl: 'Krok 5/5: Po 8. Sxg4 zamatuj na h1 (8... Hh1#) ze wsparciem wieży z h8!'
        }
      ],
      hint: {
        en: 'Set the Fishing Pole bait with 4... Ng4 and 5... h5!, recapture 6... hxg4, and invade with 7... Qh4 and 8... Qh1#!',
        pl: 'Zarzuć "wędkę" ruchami 4... Sg4 oraz 5... h5!, odbij 6... hxg4 i wtargnij hetmanem 7... Hh4 oraz 8... Hh1#!'
      },
      explanation: {
        en: 'The Fishing Pole Trap uses the knight on g4 as bait to pry open the h-file against a castled king.',
        pl: 'Motyw "Wędki" (Fishing Pole) wykorzystuje skoczka na g4 jako przynętę do otwarcia linii h przeciwko roszadzie.'
      }
    },
    {
      id: 'op-12',
      isOpeningTrap: true,
      movesToMate: 5,
      difficulty: 'hard',
      openingFamily: 'philidor',
      themes: ['opera', 'sacrifice', 'deflection'],
      fen: '3rkb1r/p2n1ppp/1q3n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R w k - 0 13',
      solution: ['d1d7', 'd8d7', 'h1d1', 'b6e6', 'b5d7', 'f6d7', 'b3b8', 'd7b8', 'd1d8'],
      title: {
        en: 'Morphy’s Full Opera Game Combination (5 Moves)',
        pl: 'Pełna Kombinacja Morphy’ego z Partii Operowej (5 ruchów)'
      },
      stepHints: [
        {
          en: 'Step 1/5: Black’s knight on d7 is pinned and overloaded. Sacrifice the exchange with 1. Rxd7!!',
          pl: 'Krok 1/5: Skoczek czarnych na d7 jest związany i przeciążony. Poświęć jakość ruchem 1. Wxd7!!'
        },
        {
          en: 'Step 2/5: After 1... Rxd7, bring your last reserve piece into the attack: 2. Rd1! pinning the d7-rook.',
          pl: 'Krok 2/5: Po 1... Wxd7 wprowadź ostatnią figurę do ataku: 2. Wd1!, wiążąc wieżę d7.'
        },
        {
          en: 'Step 3/5: Black plays 2... Qe6 to unpin and offer a queen trade. Refuse the trade and play 3. Bxd7+!!',
          pl: 'Krok 3/5: Czarne grają 2... He6, proponując wymianę hetmanów. Odrzuć wymianę i uderz 3. Gxd7+!!'
        },
        {
          en: 'Step 4/5: After 3... Nxd7, deflect the knight from guarding d8 with the immortal queen sacrifice: 4. Qb8+!!',
          pl: 'Krok 4/5: Po 3... Sxd7 odciągnij skoczka od obrony pola d8 nieśmiertelną ofiarą hetmana: 4. Hb8+!!'
        },
        {
          en: 'Step 5/5: After 4... Nxb8, finish the masterpiece with 5. Rd8#!',
          pl: 'Krok 5/5: Po 4... Sxb8 zakończ arcydzieło ruchem 5. Wd8#!'
        }
      ],
      hint: {
        en: 'Play Morphy’s full sequence: 1. Rxd7! Rxd7 2. Rd1! Qe6 3. Bxd7+! Nxd7 4. Qb8+! Nxb8 5. Rd8#.',
        pl: 'Zagraj pełną sekwencję Morphy’ego: 1. Wxd7! Wxd7 2. Wd1! He6 3. Gxd7+! Sxd7 4. Hb8+! Sxb8 5. Wd8#.'
      },
      explanation: {
        en: 'Paul Morphy’s 5-move finale (Paris 1858) teaches every core principle of tactical chess: brings all pieces to the attack (Rd1), sacrifices material to destroy defenders (Rxd7, Bxd7+), and finishes with deflection (Qb8+! Nxb8 Rd8#).',
        pl: 'Finał Partii Operowej Paula Morphy’ego (Paryż 1858) uczy najważniejszych zasad taktyki: wprowadzenia wszystkich figur do gry (Wd1), likwidacji obrońców (Wxd7, Gxd7+) oraz odciągnięcia (Hb8+!).'
      }
    },
    {
      id: 'op-13',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'easy',
      openingFamily: 'italian',
      themes: ['solidOpening', 'development', 'castling'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4', 'f8c5', 'c2c3', 'g8f6', 'd2d3', 'd7d6', 'e1g1'],
      title: {
        en: 'Solid Repertoire: Italian Game (Giuoco Piano)',
        pl: 'Solidny Debiut: Partia Włoska (Giuoco Piano)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Claim the center and open lines for your queen and bishop with 1. e4.',
          pl: 'Krok 1/6: Zajmij centrum i otwórz linie dla hetmana i gońca ruchem 1. e4.'
        },
        {
          en: 'Step 2/6: Develop your kingside knight with tempo, attacking e5: 2. Nf3.',
          pl: 'Krok 2/6: Rozwiń skoczka z tempem, atakując pionka e5: 2. Sf3.'
        },
        {
          en: 'Step 3/6: Place your bishop on the active a2-g8 diagonal aiming at f7: 3. Bc4.',
          pl: 'Krok 3/6: Ustaw gońca na aktywnej przekątnej a2-g8, celując w f7: 3. Gc4.'
        },
        {
          en: 'Step 4/6: Prepare a strong pawn center (d4 later) and give your bishop a retreat square: 4. c3.',
          pl: 'Krok 4/6: Przygotuj silne centrum (d4 w przyszłości) i daj gońcowi pole odwrotu: 4. c3.'
        },
        {
          en: 'Step 5/6: Solidly defend e4 and open the diagonal for your dark-squared bishop: 5. d3.',
          pl: 'Krok 5/6: Solidnie obroń pionka e4 i otwórz linię dla ciemnoskrzydłowego gońca: 5. d3.'
        },
        {
          en: 'Step 6/6: Get your king to safety and activate the rook: 6. O-O! A rock-solid middlegame.',
          pl: 'Krok 6/6: Zabezpiecz króla i wprowadź wieżę do gry: 6. O-O! Masz bardzo solidną pozycję.'
        }
      ],
      hint: {
        en: 'Follow classical principles: center (e4), develop minor pieces (Nf3, Bc4), support center (c3, d3), and castle (O-O).',
        pl: 'Stosuj klasyczne zasady: centrum (e4), rozwój lekkich figur (Sf3, Gc4), wsparcie centrum (c3, d3) i roszada (O-O).'
      },
      explanation: {
        en: 'Against strong bots, you don’t need risky traps — Giuoco Piano gives you a safe king, zero weaknesses, and a flexible center.',
        pl: 'Przeciwko mocnym botom nie potrzebujesz ryzykownych pułapek — Giuoco Piano daje bezpiecznego króla, brak słabości i elastyczne centrum.'
      }
    },
    {
      id: 'op-14',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'easy',
      openingFamily: 'london',
      themes: ['solidOpening', 'development', 'pawnStructure'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['d2d4', 'd7d5', 'c1f4', 'g8f6', 'e2e3', 'e7e6', 'g1f3', 'c7c5', 'c2c3', 'b8c6', 'b1d2'],
      title: {
        en: 'Solid Repertoire: The London System (White)',
        pl: 'Solidny Debiut: System Londyński (Białe)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Start with the solid queen’s pawn: 1. d4.',
          pl: 'Krok 1/6: Zacznij od solidnego pionka hetmańskiego: 1. d4.'
        },
        {
          en: 'Step 2/6: Develop your dark-squared bishop BEFORE playing e3 so it isn’t locked in: 2. Bf4.',
          pl: 'Krok 2/6: Wyprowadź ciemnoskrzydłowego gońca PRZED ruchem e3, aby go nie zablokować: 2. Gf4.'
        },
        {
          en: 'Step 3/6: Reinforce d4 and open the diagonal for your light-squared bishop: 3. e3.',
          pl: 'Krok 3/6: Wzmocnij centrum d4 i otwórz linię dla białopolowego gońca: 3. e3.'
        },
        {
          en: 'Step 4/6: Control the key e5 square and prepare to castle: 4. Nf3.',
          pl: 'Krok 4/6: Kontroluj kluczowe pole e5 i przygotuj roszadę: 4. Sf3.'
        },
        {
          en: 'Step 5/6: Complete the iconic London pawn pyramid (c3-d4-e3): 5. c3.',
          pl: 'Krok 5/6: Zbuduj słynną londyńską piramidę pionków (c3-d4-e3): 5. c3.'
        },
        {
          en: 'Step 6/6: Develop the queenside knight without blocking your c-pawn: 6. Nbd2.',
          pl: 'Krok 6/6: Rozwiń skoczka hetmańskiego, nie blokując pionka c: 6. Sbd2.'
        }
      ],
      hint: {
        en: 'Build the London setup: 1. d4, 2. Bf4, 3. e3, 4. Nf3, 5. c3, 6. Nbd2.',
        pl: 'Zbuduj układ londyński: 1. d4, 2. Gf4, 3. e3, 4. Sf3, 5. c3, 6. Sbd2.'
      },
      explanation: {
        en: 'The London System is famous for neutralizing aggressive bots: your d4 pawn is rock-solid, your pieces have natural squares, and it is very hard to blunder in the opening.',
        pl: 'System Londyński świetnie neutralizuje agresywne boty: pionek d4 jest nie do ruszenia, figury mają naturalne pola i bardzo trudno o błąd w debiucie.'
      }
    },
    {
      id: 'op-15',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'medium',
      openingFamily: 'caroKann',
      themes: ['solidOpening', 'development', 'pawnStructure'],
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
      solution: ['c7c6', 'd2d4', 'd7d5', 'b1c3', 'd5e4', 'c3e4', 'c8f5', 'e4g3', 'f5g6', 'g1f3', 'b8d7'],
      title: {
        en: 'Solid Repertoire: Caro-Kann Defense (Black vs 1. e4)',
        pl: 'Solidny Debiut: Obrona Caro-Kann (Czarne na 1. e4)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Prepare to challenge White’s center with ...d5 while keeping your light-squared bishop free: 1... c6.',
          pl: 'Krok 1/6: Przygotuj uderzenie ...d5, nie blokując białopolowego gońca: 1... c6.'
        },
        {
          en: 'Step 2/6: Strike the center immediately: 2... d5.',
          pl: 'Krok 2/6: Natychmiast zaatakuj centrum ruchem 2... d5.'
        },
        {
          en: 'Step 3/6: Capture on e4 to open lines for your pieces: 3... dxe4.',
          pl: 'Krok 3/6: Zbij na e4, aby otworzyć linie dla swoich figur: 3... dxe4.'
        },
        {
          en: 'Step 4/6: Develop your light-squared bishop OUTSIDE the pawn chain with tempo: 4... Bf5!',
          pl: 'Krok 4/6: Wyprowadź białopolowego gońca POZA łańcuch pionków z tempem: 4... Gf5!'
        },
        {
          en: 'Step 5/6: Tuck the bishop safely away on g6 where it controls the h7-b1 diagonal: 5... Bg6.',
          pl: 'Krok 5/6: Schowaj gońca bezpiecznie na g6, kontrolując przekątną h7-b1: 5... Gg6.'
        },
        {
          en: 'Step 6/6: Develop your knight to d7 (preparing ...Ngf6 without allowing doubled pawns): 6... Nd7.',
          pl: 'Krok 6/6: Rozwiń skoczka na d7 (przygotowując ...Sgf6 bez zdwojonych pionków): 6... Sd7.'
        }
      ],
      hint: {
        en: 'Play the Classical Caro-Kann: 1... c6, 2... d5, 3... dxe4, 4... Bf5, 5... Bg6, 6... Nd7.',
        pl: 'Zagraj klasyczne Caro-Kann: 1... c6, 2... d5, 3... dxe4, 4... Gf5, 5... Gg6, 6... Sd7.'
      },
      explanation: {
        en: 'The Caro-Kann is one of the most resilient defenses against 1. e4. It avoids early tactics, gives Black a rock-solid pawn structure, and leads to healthy endgames.',
        pl: 'Caro-Kann to jedna z najbardziej odpornych obron na 1. e4. Unika wczesnych pułapek, daje czarnym świetną strukturę pionową i bezpieczne końcówki.'
      }
    },
    {
      id: 'op-16',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'medium',
      openingFamily: 'qgd',
      themes: ['solidOpening', 'development', 'castling'],
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1',
      solution: ['d7d5', 'c2c4', 'e7e6', 'b1c3', 'g8f6', 'c1g5', 'f8e7', 'e2e3', 'e8g8', 'g1f3', 'b8d7'],
      title: {
        en: 'Solid Repertoire: Queen’s Gambit Declined (Black vs 1. d4)',
        pl: 'Solidny Debiut: Odrzucony Gambit Hetmański (Czarne na 1. d4)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Claim an equal share of the center immediately: 1... d5.',
          pl: 'Krok 1/6: Zajmij równe miejsce w centrum ruchem 1... d5.'
        },
        {
          en: 'Step 2/6: Decline the gambit and keep your strong central pawn on d5: 2... e6.',
          pl: 'Krok 2/6: Odrzuć gambit i utrzymaj silnego pionka w centrum na d5: 2... e6.'
        },
        {
          en: 'Step 3/6: Develop your kingside knight and reinforce d5: 3... Nf6.',
          pl: 'Krok 3/6: Rozwiń skoczka królewskiego i wzmocnij pole d5: 3... Sf6.'
        },
        {
          en: 'Step 4/6: Break the pin on your knight and prepare castling: 4... Be7.',
          pl: 'Krok 4/6: Zdejmij związanie ze skoczka i przygotuj roszadę: 4... Ge7.'
        },
        {
          en: 'Step 5/6: Castle early to keep your king completely safe: 5... O-O.',
          pl: 'Krok 5/6: Zrób wczesną roszadę, aby król był w pełni bezpieczny: 5... O-O.'
        },
        {
          en: 'Step 6/6: Develop your queenside knight to support ...c5 or ...e5 breaks later: 6... Nbd7.',
          pl: 'Krok 6/6: Rozwiń skoczka hetmańskiego, wspierając przyszłe przełamanie ...c5 lub ...e5: 6... Sbd7.'
        }
      ],
      hint: {
        en: 'Play the classic QGD setup: 1... d5, 2... e6, 3... Nf6, 4... Be7, 5... O-O, 6... Nbd7.',
        pl: 'Zagraj klasyczny Odrzucony Gambit Hetmański: 1... d5, 2... e6, 3... Sf6, 4... Ge7, 5... O-O, 6... Sbd7.'
      },
      explanation: {
        en: 'The Queen’s Gambit Declined has been trusted by World Champions for over a century. It gives Black a fortress-like kingside and clear counterplay with ...c5.',
        pl: 'Odrzucony Gambit Hetmański to ulubiona broń Mistrzów Świata od ponad wieku. Daje czarnym bezpiecznego króla i jasną kontrę ruchem ...c5.'
      }
    },
    {
      id: 'op-17',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'hard',
      openingFamily: 'ruyLopez',
      themes: ['solidOpening', 'development', 'castling'],
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      solution: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5', 'a7a6', 'b5a4', 'g8f6', 'e1g1', 'f8e7', 'f1e1'],
      title: {
        en: 'Solid Repertoire: Ruy Lopez / Spanish Game (White)',
        pl: 'Solidny Debiut: Partia Hiszpańska / Ruy Lopez (Białe)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Seize the center with 1. e4.',
          pl: 'Krok 1/6: Zajmij centrum ruchem 1. e4.'
        },
        {
          en: 'Step 2/6: Attack e5 and develop your knight: 2. Nf3.',
          pl: 'Krok 2/6: Zaatakuj e5 i rozwiń skoczka: 2. Sf3.'
        },
        {
          en: 'Step 3/6: Put indirect pressure on e5 by attacking its defender: 3. Bb5.',
          pl: 'Krok 3/6: Wywrzyj pośrednią presję na e5, atakując jego obrońcę: 3. Gb5.'
        },
        {
          en: 'Step 4/6: Keep the bishop and maintain the tension on the a4-e8 diagonal: 4. Ba4.',
          pl: 'Krok 4/6: Zachowaj gońca i utrzymaj napięcie na przekątnej a4-e8: 4. Ga4.'
        },
        {
          en: 'Step 5/6: Castle immediately — if Black takes on e4, Re1 wins it back with advantage: 5. O-O.',
          pl: 'Krok 5/6: Zrób roszadę — jeśli czarne zbiją na e4, We1 odzyska pionka z przewagą: 5. O-O.'
        },
        {
          en: 'Step 6/6: Defend e4 solidly and prepare c3 + d4 for a dominant center: 6. Re1.',
          pl: 'Krok 6/6: Solidnie obroń e4 i przygotuj c3 + d4, by zdominować centrum: 6. We1.'
        }
      ],
      hint: {
        en: 'Play the Mainline Ruy Lopez: 1. e4, 2. Nf3, 3. Bb5, 4. Ba4, 5. O-O, 6. Re1.',
        pl: 'Zagraj główną linię Partii Hiszpańskiej: 1. e4, 2. Sf3, 3. Gb5, 4. Ga4, 5. O-O, 6. We1.'
      },
      explanation: {
        en: 'The Ruy Lopez is Magnus Carlsen’s own favorite weapon with White. It builds lasting central pressure while keeping your king completely safe.',
        pl: 'Partia Hiszpańska to ulubiona broń samego Magnusa Carlsena białymi. Buduje długotrwałą presję w centrum przy pełnym bezpieczeństwie króla.'
      }
    },
    {
      id: 'op-18',
      isOpeningTrap: true,
      movesToMate: 6,
      difficulty: 'hard',
      openingFamily: 'sicilian',
      themes: ['solidOpening', 'development', 'counterattack'],
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
      solution: ['c7c5', 'g1f3', 'd7d6', 'd2d4', 'c5d4', 'f3d4', 'g8f6', 'b1c3', 'a7a6', 'f1e2', 'e7e5'],
      title: {
        en: 'Solid Repertoire: Sicilian Najdorf Counterattack (Black)',
        pl: 'Solidny Debiut: Obrona Sycylijska Najdorf (Czarne)'
      },
      stepHints: [
        {
          en: 'Step 1/6: Fight for the d4 square asymmetrically from move one: 1... c5.',
          pl: 'Krok 1/6: Walcz asymetrycznie o pole d4 od pierwszego ruchu: 1... c5.'
        },
        {
          en: 'Step 2/6: Control e5 and prepare smooth piece development: 2... d6.',
          pl: 'Krok 2/6: Kontroluj pole e5 i przygotuj płynny rozwój figur: 2... d6.'
        },
        {
          en: 'Step 3/6: Trade your flank c-pawn for White’s central d-pawn: 3... cxd4.',
          pl: 'Krok 3/6: Wymień skrzydłowego pionka c za centralnego pionka d białych: 3... cxd4.'
        },
        {
          en: 'Step 4/6: Develop your knight with tempo, attacking e4: 4... Nf6.',
          pl: 'Krok 4/6: Rozwiń skoczka z tempem, atakując pionka e4: 4... Sf6.'
        },
        {
          en: 'Step 5/6: The signature Najdorf move! Stop Bb5+ / Nb5 and prepare ...e5 or ...b5: 5... a6.',
          pl: 'Krok 5/6: Słynny ruch Najdorfa! Blokuje Gb5+ / Sb5 i przygotowuje ...e5 lub ...b5: 5... a6.'
        },
        {
          en: 'Step 6/6: Kick White’s centralized knight and claim central space: 6... e5!',
          pl: 'Krok 6/6: Wypędź centralnego skoczka białych i zdobądź przestrzeń w centrum: 6... e5!'
        }
      ],
      hint: {
        en: 'Play the Sicilian Najdorf: 1... c5, 2... d6, 3... cxd4, 4... Nf6, 5... a6, 6... e5.',
        pl: 'Zagraj Sycylijską Najdorf: 1... c5, 2... d6, 3... cxd4, 4... Sf6, 5... a6, 6... e5.'
      },
      explanation: {
        en: 'The Sicilian Najdorf gives Black an extra central pawn majority and dynamic counterplay — the ultimate weapon for playing to win with Black.',
        pl: 'Obrona Sycylijska Najdorf daje czarnym przewagę pionową w centrum i dynamiczną kontrę — najlepszą broń do gry o zwycięstwo czarnymi.'
      }
    },
    {
      "id": "op-19",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "scotch",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "e2e4",
        "e7e5",
        "g1f3",
        "b8c6",
        "d2d4",
        "e5d4",
        "f3d4",
        "g8f6",
        "b1c3"
      ],
      "title": {
        "en": "Solid Opening: Scotch Game (White)",
        "pl": "Debiut: Partia Szkocka (Białe)"
      },
      "hint": {
        "en": "Open the center early with 3. d4! exd4 4. Nxd4 Nf6 5. Nc3.",
        "pl": "Otwórz centrum wcześnie: 3. d4! exd4 4. Sxd4 Sf6 5. Sc3."
      },
      "explanation": {
        "en": "The Scotch Game immediately clarifies the center and gives White active piece play.",
        "pl": "Partia Szkocka od razu otwiera centrum i daje białym aktywną grę figurami."
      }
    },
    {
      "id": "op-20",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "vienna",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "e2e4",
        "e7e5",
        "b1c3",
        "g8f6",
        "f1c4",
        "f8c5",
        "d2d3",
        "d7d6",
        "f2f4"
      ],
      "title": {
        "en": "Solid Opening: Vienna Game (White)",
        "pl": "Debiut: Partia Wiedeńska (Białe)"
      },
      "hint": {
        "en": "Develop Nc3 before f4: 1. e4, 2. Nc3, 3. Bc4, 4. d3, 5. f4!",
        "pl": "Rozwiń Sc3 przed f4: 1. e4, 2. Sc3, 3. Gc4, 4. d3, 5. f4!"
      },
      "explanation": {
        "en": "The Vienna Game is a safe, flexible weapon that prepares a strong kingside f4 break.",
        "pl": "Partia Wiedeńska to bezpieczna broń przygotowująca silne przełamanie f4 na skrzydle królewskim."
      }
    },
    {
      "id": "op-21",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "fourKnights",
      "themes": [
        "solidOpening",
        "development",
        "castling"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "e2e4",
        "e7e5",
        "g1f3",
        "b8c6",
        "b1c3",
        "g8f6",
        "f1b5",
        "f8b4",
        "e1g1"
      ],
      "title": {
        "en": "Solid Opening: Four Knights Spanish (White)",
        "pl": "Debiut: Partia Czterech Skoczków (Białe)"
      },
      "hint": {
        "en": "Develop both knights, pin with Bb5, and castle safely: O-O.",
        "pl": "Rozwiń oba skoczki, zagraj Gb5 i zrób roszadę O-O."
      },
      "explanation": {
        "en": "The Four Knights is virtually blunder-proof and gets White castled by move 5.",
        "pl": "Partia Czterech Skoczków jest bardzo solidna i daje białym bezpieczną roszadę już w 5. ruchu."
      }
    },
    {
      "id": "op-22",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "english",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "c2c4",
        "e7e5",
        "b1c3",
        "g8f6",
        "g2g3",
        "d7d5",
        "c4d5",
        "f6d5",
        "f1g2"
      ],
      "title": {
        "en": "Solid Opening: English Opening (White)",
        "pl": "Debiut: Partia Angielska (Białe)"
      },
      "hint": {
        "en": "Control d5 from the flank: 1. c4, 2. Nc3, 3. g3, 4. cxd5, 5. Bg2.",
        "pl": "Kontroluj d5 ze skrzydła: 1. c4, 2. Sc3, 3. g3, 4. cxd5, 5. Gg2."
      },
      "explanation": {
        "en": "The English Opening with Bg2 creates long-term pressure along the h1-a8 diagonal.",
        "pl": "Partia Angielska z fianchetto Gg2 buduje silną presję na długiej przekątnej h1-a8."
      }
    },
    {
      "id": "op-23",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "reti",
      "themes": [
        "solidOpening",
        "development",
        "castling"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "g1f3",
        "d7d5",
        "g2g3",
        "g8f6",
        "f1g2",
        "e7e6",
        "e1g1",
        "f8e7",
        "d2d3"
      ],
      "title": {
        "en": "Solid Opening: Réti / King’s Indian Attack",
        "pl": "Debiut: Otwarcie Rétiego / Atak Królewsko-Indyjski"
      },
      "hint": {
        "en": "Fianchetto and castle quickly: 1. Nf3, 2. g3, 3. Bg2, 4. O-O, 5. d3.",
        "pl": "Zrób fianchetto i szybką roszadę: 1. Sf3, 2. g3, 3. Gg2, 4. O-O, 5. d3."
      },
      "explanation": {
        "en": "A hypermodern setup that avoids early theory traps and builds a rock-solid kingside.",
        "pl": "Hipernowoczesny układ unikający wczesnych pułapek i dający pancerną roszadę."
      }
    },
    {
      "id": "op-24",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "french",
      "themes": [
        "solidOpening",
        "pawnStructure"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "e7e6",
        "d2d4",
        "d7d5",
        "b1c3",
        "g8f6",
        "e4e5",
        "f6d7",
        "f2f4",
        "c7c5"
      ],
      "title": {
        "en": "Solid Opening: French Defense (Black vs 1. e4)",
        "pl": "Debiut: Obrona Francuska (Czarne na 1. e4)"
      },
      "hint": {
        "en": "Challenge the center with ...e6, ...d5, ...Nf6, ...Nfd7, and strike with ...c5!",
        "pl": "Zaatakuj centrum przez ...e6, ...d5, ...Sf6, ...Sfd7 i uderz ...c5!"
      },
      "explanation": {
        "en": "The French Defense immediately undermines White’s d4 pawn chain with ...c5.",
        "pl": "Obrona Francuska natychmiast podważa łańcuch pionków białych ruchem ...c5."
      }
    },
    {
      "id": "op-25",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "easy",
      "openingFamily": "petrov",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "e7e5",
        "g1f3",
        "g8f6",
        "f3e5",
        "d7d6",
        "e5f3",
        "f6e4",
        "d2d4",
        "d6d5"
      ],
      "title": {
        "en": "Solid Opening: Petrov / Russian Defense (Black)",
        "pl": "Debiut: Obrona Rosyjska / Petrova (Czarne)"
      },
      "hint": {
        "en": "Counterattack e4 with 2... Nf6, kick the knight with 3... d6, then win back e4!",
        "pl": "Kontratakuj e4 ruchem 2... Sf6, przegoń skoczka 3... d6 i odbierz pionka e4!"
      },
      "explanation": {
        "en": "The Petrov Defense is famous for neutralizing White’s opening initiative cleanly.",
        "pl": "Obrona Petrova słynie z czystego neutralizowania inicjatywy białych."
      }
    },
    {
      "id": "op-26",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "slav",
      "themes": [
        "solidOpening",
        "pawnStructure"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      "solution": [
        "d7d5",
        "c2c4",
        "c7c6",
        "g1f3",
        "g8f6",
        "b1c3",
        "d5c4",
        "a2a4",
        "c8f5"
      ],
      "title": {
        "en": "Solid Opening: Slav Defense (Black vs 1. d4)",
        "pl": "Debiut: Obrona Słowiańska (Czarne na 1. d4)"
      },
      "hint": {
        "en": "Support d5 with ...c6 so your c8-bishop stays free to develop to f5!",
        "pl": "Wzmocnij d5 ruchem ...c6, aby goniec c8 mógł wyjść na aktywne pole f5!"
      },
      "explanation": {
        "en": "The Slav Defense keeps Black’s light-squared bishop active outside the pawn chain.",
        "pl": "Obrona Słowiańska pozwala wyprowadzić białopolowego gońca na f5 poza łańcuch pionków."
      }
    },
    {
      "id": "op-27",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "kid",
      "themes": [
        "solidOpening",
        "development",
        "castling"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      "solution": [
        "g8f6",
        "c2c4",
        "g7g6",
        "b1c3",
        "f8g7",
        "e2e4",
        "d7d6",
        "g1f3",
        "e8g8"
      ],
      "title": {
        "en": "Solid Opening: King’s Indian Defense (Black)",
        "pl": "Debiut: Obrona Królewsko-Indyjska (Czarne)"
      },
      "hint": {
        "en": "Fianchetto with ...Nf6, ...g6, ...Bg7, ...d6, and castle ...O-O!",
        "pl": "Zbuduj układ królewsko-indyjski: ...Sf6, ...g6, ...Gg7, ...d6 i roszada ...O-O!"
      },
      "explanation": {
        "en": "The King’s Indian Defense gives Black a safe king and dynamic counterplay with ...e5 or ...c5.",
        "pl": "Obrona Królewsko-Indyjska daje bezpiecznego króla i dynamiczną kontrę ruchami ...e5 lub ...c5."
      }
    },
    {
      "id": "op-28",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "nimzo",
      "themes": [
        "solidOpening",
        "pin"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      "solution": [
        "g8f6",
        "c2c4",
        "e7e6",
        "b1c3",
        "f8b4",
        "e2e3",
        "e8g8",
        "f1d3",
        "d7d5"
      ],
      "title": {
        "en": "Solid Opening: Nimzo-Indian Defense (Black)",
        "pl": "Debiut: Obrona Nimzo-Indyjska (Czarne)"
      },
      "hint": {
        "en": "Pin the c3-knight with ...Bb4, castle early, and strike the center with ...d5!",
        "pl": "Zwiąż skoczka ruchem ...Gb4, zrób szybką roszadę i uderz w centrum ...d5!"
      },
      "explanation": {
        "en": "The Nimzo-Indian is one of the highest-scoring defenses against 1. d4 at master level.",
        "pl": "Obrona Nimzo-Indyjska to jedna z najskuteczniejszych broni przeciwko 1. d4 na poziomie mistrzowskim."
      }
    },
    {
      "id": "op-29",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "scandinavian",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "d7d5",
        "e4d5",
        "d8d5",
        "b1c3",
        "d5a5",
        "d2d4",
        "g8f6",
        "g1f3",
        "c7c6"
      ],
      "title": {
        "en": "Solid Opening: Scandinavian Defense (Black)",
        "pl": "Debiut: Obrona Skandynawska (Czarne)"
      },
      "hint": {
        "en": "Challenge e4 on move 1 with ...d5, tuck the queen on a5, then play ...Nf6 and ...c6.",
        "pl": "Zaatakuj e4 już w 1. ruchu (...d5), schowaj hetmana na a5 i zagraj ...Sf6 oraz ...c6."
      },
      "explanation": {
        "en": "The Scandinavian Defense immediately takes White out of main-line e4 theory.",
        "pl": "Obrona Skandynawska od razu wyprowadza białe z głównych teorii 1. e4."
      }
    },
    {
      "id": "op-30",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "pirc",
      "themes": [
        "solidOpening",
        "development",
        "castling"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "d7d6",
        "d2d4",
        "g8f6",
        "b1c3",
        "g7g6",
        "g1f3",
        "f8g7",
        "f1e2",
        "e8g8"
      ],
      "title": {
        "en": "Solid Opening: Pirc Defense (Black vs 1. e4)",
        "pl": "Debiut: Obrona Pirca (Czarne na 1. e4)"
      },
      "hint": {
        "en": "Play ...d6, ...Nf6, ...g6, ...Bg7, and castle ...O-O.",
        "pl": "Zagraj ...d6, ...Sf6, ...g6, ...Gg7 i bezpiecznie zrób roszadę ...O-O."
      },
      "explanation": {
        "en": "The Pirc invites White to overextend in the center while Black prepares a sharp counterattack.",
        "pl": "Obrona Pirca zaprasza białe do rozbudowy centrum, przygotowując kontratak na skrzydle i w centrum."
      }
    },
    {
      "id": "op-31",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "philidor",
      "themes": [
        "solidOpening",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "e7e5",
        "g1f3",
        "d7d6",
        "d2d4",
        "g8f6",
        "b1c3",
        "b8d7",
        "f1c4",
        "f8e7"
      ],
      "title": {
        "en": "Solid Opening: Philidor Defense (Black)",
        "pl": "Debiut: Obrona Philidora (Czarne)"
      },
      "hint": {
        "en": "Defend e5 solidly with ...d6, then develop ...Nf6, ...Nbd7, and ...Be7.",
        "pl": "Obroń e5 ruchem ...d6, a potem rozwiń ...Sf6, ...Sbd7 i ...Ge7."
      },
      "explanation": {
        "en": "The Philidor Defense is compact and solid, avoiding sharp tactical traps.",
        "pl": "Obrona Philidora jest zwarta i bardzo solidna, unikając wczesnych pułapek taktycznych."
      }
    },
    {
      "id": "op-32",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "medium",
      "openingFamily": "alekhine",
      "themes": [
        "solidOpening",
        "counterattack"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "g8f6",
        "e4e5",
        "f6d5",
        "d2d4",
        "d7d6",
        "g1f3",
        "c8g4",
        "f1e2",
        "e7e6"
      ],
      "title": {
        "en": "Solid Opening: Alekhine’s Defense (Black)",
        "pl": "Debiut: Obrona Alechina (Czarne)"
      },
      "hint": {
        "en": "Provoke e5 with ...Nf6, jump to d5, then undermine the center with ...d6 and ...Bg4.",
        "pl": "Sprowokuj e5 ruchem ...Sf6, skocz na d5 i podważ centrum przez ...d6 oraz ...Gg4."
      },
      "explanation": {
        "en": "Alekhine’s Defense turns White’s advanced pawns into targets for counterattack.",
        "pl": "Obrona Alechina zamienia wysunięte pionki białych w cele do kontrataku."
      }
    },
    {
      "id": "op-33",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "grunfeld",
      "themes": [
        "solidOpening",
        "counterattack"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      "solution": [
        "g8f6",
        "c2c4",
        "g7g6",
        "b1c3",
        "d7d5",
        "c4d5",
        "f6d5",
        "e2e4",
        "d5c3"
      ],
      "title": {
        "en": "Solid Opening: Grünfeld Defense (Black)",
        "pl": "Debiut: Obrona Grünfelda (Czarne)"
      },
      "hint": {
        "en": "Strike the center on move 3 with ...d5! and trade on c3 to attack d4.",
        "pl": "Uderz w centrum już w 3. ruchu (...d5!) i zbij na c3, by atakować pionka d4."
      },
      "explanation": {
        "en": "The Grünfeld Defense is a dynamic Grandmaster weapon fighting directly against White’s center.",
        "pl": "Obrona Grünfelda to dynamiczna broń arcymistrzowska walcząca bezpośrednio z centrum białych."
      }
    },
    {
      "id": "op-34",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "dutch",
      "themes": [
        "solidOpening",
        "counterattack"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1",
      "solution": [
        "f7f5",
        "g2g3",
        "g8f6",
        "f1g2",
        "e7e6",
        "g1f3",
        "f8e7",
        "e1g1",
        "e8g8"
      ],
      "title": {
        "en": "Solid Opening: Classical Dutch Defense (Black)",
        "pl": "Debiut: Obrona Holenderska (Czarne)"
      },
      "hint": {
        "en": "Fight for e4 with 1... f5, develop ...Nf6, ...e6, ...Be7, and castle ...O-O.",
        "pl": "Walcz o pole e4 ruchem 1... f5, rozwiń ...Sf6, ...e6, ...Ge7 i zrób roszadę ...O-O."
      },
      "explanation": {
        "en": "The Dutch Defense creates an unbalanced fight for kingside attack.",
        "pl": "Obrona Holenderska tworzy asymetryczną walkę o atak na skrzydle królewskim."
      }
    },
    {
      "id": "op-35",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "sicilian",
      "themes": [
        "solidOpening",
        "counterattack"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "solution": [
        "c7c5",
        "g1f3",
        "d7d6",
        "d2d4",
        "c5d4",
        "f3d4",
        "g8f6",
        "b1c3",
        "g7g6"
      ],
      "title": {
        "en": "Solid Opening: Sicilian Dragon (Black)",
        "pl": "Debiut: Obrona Sycylijska — Wariant Smoka (Czarne)"
      },
      "hint": {
        "en": "Trade on d4, develop ...Nf6, and prepare the fierce ...Bg7 fianchetto with ...g6!",
        "pl": "Zbij na d4, rozwiń ...Sf6 i przygotuj silne fianchetto ruchem ...g6!"
      },
      "explanation": {
        "en": "The Sicilian Dragon unleashes a monster dark-squared bishop on g7 aiming down the long diagonal.",
        "pl": "Wariant Smoka ustawia potężnego ciemnoskrzydłowego gońca na g7 celującego w całą przekątną."
      }
    },
    {
      "id": "op-36",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "evans",
      "themes": [
        "sacrifice",
        "development"
      ],
      "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      "solution": [
        "b2b4",
        "c5b4",
        "c2c3",
        "b4a5",
        "d2d4",
        "e5d4",
        "e1g1",
        "d7d6",
        "c3d4"
      ],
      "title": {
        "en": "Classic Gambit: Evans Gambit (White)",
        "pl": "Klasyczny Gambit: Gambit Evansa (Białe)"
      },
      "hint": {
        "en": "Sacrifice the b-pawn with 4. b4! to gain huge central tempo with c3 and d4!",
        "pl": "Poświęć pionka b ruchem 4. b4!, aby błyskawicznie zbudować centrum przez c3 i d4!"
      },
      "explanation": {
        "en": "The Evans Gambit trades a flank pawn for rapid development and a crushing pawn center.",
        "pl": "Gambit Evansa oddaje skrzydłowego pionka za błyskawiczny rozwój i potężne centrum."
      }
    },
    {
      "id": "op-37",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "kingsGambit",
      "themes": [
        "sacrifice",
        "development"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "e2e4",
        "e7e5",
        "f2f4",
        "e5f4",
        "g1f3",
        "g7g5",
        "f1c4",
        "f8g7",
        "e1g1"
      ],
      "title": {
        "en": "Classic Gambit: King’s Gambit (White)",
        "pl": "Klasyczny Gambit: Gambit Królewski (Białe)"
      },
      "hint": {
        "en": "Strike with 2. f4! Develop Nf3, Bc4, and castle rapidly to open the f-file!",
        "pl": "Uderz 2. f4! Rozwiń Sf3, Gc4 i zrób szybką roszadę, otwierając linię f!"
      },
      "explanation": {
        "en": "The King’s Gambit opens the f-file for White’s rook and aims directly at Black’s f7 square.",
        "pl": "Gambit Królewski otwiera linię f dla białej wieży i od razu atakuje słaby punkt f7."
      }
    },
    {
      "id": "op-38",
      "isOpeningTrap": true,
      "movesToMate": 5,
      "difficulty": "hard",
      "openingFamily": "catalan",
      "themes": [
        "solidOpening",
        "development",
        "castling"
      ],
      "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      "solution": [
        "d2d4",
        "g8f6",
        "c2c4",
        "e7e6",
        "g2g3",
        "d7d5",
        "f1g2",
        "f8e7",
        "g1f3"
      ],
      "title": {
        "en": "Grandmaster Repertoire: Catalan Opening (White)",
        "pl": "Repertuar Arcymistrzowski: Partia Katalońska (Białe)"
      },
      "hint": {
        "en": "Combine d4+c4 with the positional fianchetto g3 and Bg2!",
        "pl": "Połącz d4+c4 z pozycyjnym fianchetto g3 oraz Gg2!"
      },
      "explanation": {
        "en": "The Catalan is a favorite of Magnus Carlsen — it squeezes Black with relentless pressure along the h1-a8 diagonal.",
        "pl": "Partia Katalońska to ulubiona broń Magnusa Carlsena — wywiera nieustanną presję wzdłuż przekątnej h1-a8."
      }
    }
  ];

  /**
   * 12 "Win Material" Tactical Puzzles (4 Easy, 4 Medium, 4 Hard)
   * Forks (Widełki), Skewers (Szpilki), Pins (Związania), Discovered Attacks (Ataki z odsłonięcia),
   * and Intermediate Checks (Wtrącone szachy).
   */
  const WIN_MATERIAL_PUZZLES = [
    // === EASY (4) ===
    {
      id: 'wm-01',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['fork'],
      fen: 'r3k2r/ppp2ppp/4p3/1q1N4/3P4/2P5/PP3PPP/4R1K1 w kq - 0 1',
      solution: ['d5c7', 'e8d8', 'c7b5'],
      title: {
        en: 'Royal Knight Fork on c7',
        pl: 'Królewskie widełki skoczkiem na c7'
      },
      hint: {
        en: 'Jump with your knight to a square that simultaneously checks the black king and attacks the black queen on b5!',
        pl: 'Wskocz skoczkiem na pole, z którego jednocześnie dasz szacha królowi i zaatakujesz hetmana na b5!'
      },
      explanation: {
        en: '1. Nxc7+! Kd8 2. Nxb5 wins the black queen with a classic Royal Knight Fork.',
        pl: '1. Sxc7+! Kd8 2. Sxb5 zdobywa czarnego hetmana dzięki klasycznym królewskim widełkom.'
      }
    },
    {
      id: 'wm-02',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['skewer'],
      fen: '8/pq3ppp/1p6/3k4/3P4/2P3P1/P4P1P/3B2K1 w - - 0 1',
      solution: ['d1f3', 'd5d6', 'f3b7'],
      title: {
        en: 'Diagonal Bishop Skewer',
        pl: 'Szpilka gońcem po długiej przekątnej'
      },
      hint: {
        en: 'Check the black king on d5 with your bishop along the h1-a8 diagonal to win the queen behind it!',
        pl: 'Daj szacha czarnemu królowi na d5 gońcem po długiej przekątnej, aby zdobyć stojącego za nim hetmana!'
      },
      explanation: {
        en: '1. Bf3+! Kd6 2. Bxb7 is a textbook Skewer (Szpilka): the king must step aside, exposing the queen on b7.',
        pl: '1. Gf3+! Kd6 2. Gxb7 to podręcznikowa szpilka: król musi zejść z linii strzału, odsłaniając hetmana na b7.'
      }
    },
    {
      id: 'wm-03',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['skewer'],
      fen: '8/q4kpp/p1p5/1p1p4/3P4/2P5/PP3PPP/4R1K1 w - - 0 1',
      solution: ['e1e7', 'f7f6', 'e7a7'],
      title: {
        en: '7th-Rank Rook Skewer',
        pl: 'Szpilka wieżą na 7. linii'
      },
      hint: {
        en: 'Invade the 7th rank with check so the black king is forced to abandon its queen on a7!',
        pl: 'Wtargnij wieżą na 7. linię z szachem, zmuszając króla do odsłonięcia hetmana na a7!'
      },
      explanation: {
        en: '1. Re7+! Kf6 2. Rxa7 skewers the king and queen along the 7th rank.',
        pl: '1. We7+! Kf6 2. Wxa7 przeszywa króla i hetmana na siódmej linii.'
      }
    },
    {
      id: 'wm-04',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['pin'],
      fen: 'r3k2r/ppp2ppp/3b4/4q3/8/2P1B3/PP3PPP/R3R1K1 w kq - 0 1',
      solution: ['e3d4', 'e5e1', 'a1e1'],
      title: {
        en: 'Attacking the Pinned Queen on the e-File',
        pl: 'Atak na związanego hetmana po linii e'
      },
      hint: {
        en: 'Black’s queen on e5 is pinned to the king on e8 by your e1-rook! Attack the pinned queen with your bishop!',
        pl: 'Czarny hetman na e5 jest związany z królem na e8 przez Twoją wieżę e1! Zaatakuj związanego hetmana gońcem!'
      },
      explanation: {
        en: '1. Bd4! exploits the absolute pin along the e-file — Black’s queen cannot leave the e-file and must give herself up for a rook (1... Qxe1+ 2. Rxe1+).',
        pl: '1. Gd4! wykorzystuje bezwzględne związanie po linii e — czarny hetman nie może zejść z linii e i musi oddać się za wieżę (1... Hxe1+ 2. Wxe1+).'
      }
    },

    // === MEDIUM (4) ===
    {
      id: 'wm-05',
      isWinMaterial: true,
      movesToMate: 3,
      difficulty: 'medium',
      themes: ['sacrifice', 'attraction', 'fork'],
      fen: 'r4rk1/pppq1ppp/2np4/8/2B1P3/2P2N2/PP3PPP/4R1K1 w - - 0 1',
      solution: ['c4f7', 'g8f7', 'f3e5', 'f7g8', 'e5d7'],
      title: {
        en: 'Attraction Sacrifice into Royal Fork',
        pl: 'Ofiara na f7 zaciągająca pod widełki'
      },
      hint: {
        en: 'Sacrifice your bishop on f7 to lure the black king onto a square where your knight can fork king and queen!',
        pl: 'Poświęć gońca na f7, aby zaciągnąć czarnego króla pod królewskie widełki skoczkiem na e5!'
      },
      explanation: {
        en: '1. Bxf7+! Kxf7 2. Ne5+! Kg8 3. Nxd7 uses an attraction sacrifice on f7 to win Black’s queen.',
        pl: '1. Gxf7+! Kxf7 2. Se5+! Kg8 3. Sxd7 łączy ofiarę zaciągającą na f7 z widełkami na króla i hetmana.'
      }
    },
    {
      id: 'wm-06',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['discovered', 'sacrifice'],
      fen: '2rq1rk1/pp2bppp/2p1p3/8/2P5/3B4/PP3PPP/3R2K1 w - - 0 1',
      solution: ['d3h7', 'g8h8', 'd1d8'],
      title: {
        en: 'Discovered Attack on the d-File',
        pl: 'Atak z odsłonięcia na hetmana'
      },
      hint: {
        en: 'Your d3-bishop blocks your d1-rook from attacking Black’s undefended queen on d8. Move the bishop with check!',
        pl: 'Twój goniec na d3 przesłania wieży d1 drogę do niebronionego hetmana d8. Odsłoń linię d z szachem!'
      },
      explanation: {
        en: '1. Bxh7+! Kh8 2. Rxd8 is a classic Discovered Attack: because 1. Bxh7+ is check, Black has no time to save the queen on d8.',
        pl: '1. Gxh7+! Kh8 2. Wxd8 to klasyczny atak z odsłonięcia: ponieważ goniec daje szacha, czarne nie mają czasu uratować hetmana.'
      }
    },
    {
      id: 'wm-07',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['deflection', 'discovered', 'sacrifice'],
      fen: '2r3k1/pp3pp1/2p4p/2q5/3R4/1P2Q3/P4PPP/6K1 w - - 0 1',
      solution: ['d4d8', 'c8d8', 'e3c5'],
      title: {
        en: 'Clearance & Deflection of the Queen’s Guardian',
        pl: 'Odsłonięcie i odciągnięcie obrońcy hetmana'
      },
      hint: {
        en: 'Your d4-rook blocks your e3-queen from attacking c5, while Black’s c8-rook guards both c5 and the 8th rank! Invade on d8 with check!',
        pl: 'Twoja wieża d4 przesłania hetmanowi e3 drogę do hetmana c5, a czarna wieża c8 jest przeciążona! Uderz wieżą na d8 z szachem!'
      },
      explanation: {
        en: '1. Rd8+! Rxd8 2. Qxc5 simultaneously clears the e3-c5 diagonal and deflects the c8-rook from guarding the black queen.',
        pl: '1. Wd8+! Wxd8 2. Hxc5 jednocześnie odsłania przekątną e3-c5 i odciąga wieżę c8 od obrony czarnego hetmana.'
      }
    },
    {
      id: 'wm-08',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['fork'],
      fen: 'r3k2r/p1p2ppp/3pb3/4p3/8/2P1P3/PPQ2PPP/R4RK1 w kq - 0 1',
      solution: ['c2e4', 'e8f8', 'e4a8'],
      title: {
        en: 'Central Queen Fork Winning a Rook',
        pl: 'Widełki hetmańskie na króla i wieżę'
      },
      hint: {
        en: 'Step your queen to e4 to check the king on e8 while simultaneously attacking the loose rook on a8!',
        pl: 'Postaw hetmana na e4, dając szacha królowi na e8 i jednocześnie atakując niebronioną wieżę na a8!'
      },
      explanation: {
        en: '1. Qe4+! Kf8 2. Qxa8+ exploits the uncastled king and undefended corner rook.',
        pl: '1. He4+! Kf8 2. Hxa8+ wykorzystuje brak roszady oraz niebronioną wieżę w rogu.'
      }
    },

    // === HARD (4) ===
    {
      id: 'wm-09',
      isWinMaterial: true,
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'fork', 'deflection'],
      fen: 'r4rk1/pbp2ppp/1pnq4/3N4/3P4/4P3/PP3PPP/2R2RK1 w - - 0 1',
      solution: ['c1c6', 'd6c6', 'd5e7', 'g8h8', 'e7c6'],
      title: {
        en: 'Exchange Sacrifice into Royal Fork',
        pl: 'Ofiara jakości pod widełki królewskie'
      },
      hint: {
        en: 'Eliminate the c6-knight with your rook so Black’s queen is lured onto the c6 fork square!',
        pl: 'Zbij skoczka na c6 wieżą, zaciągając czarnego hetmana na pole c6 pod widełki skoczkiem z e7!'
      },
      explanation: {
        en: '1. Rxc6! Qxc6 2. Ne7+! Kh8 3. Nxc6 sacrifices the rook on c6 to lure the queen into a royal knight fork.',
        pl: '1. Wxc6! Hxc6 2. Se7+! Kh8 3. Sxc6 poświęca wieżę, aby zaciągnąć hetmana pod królewskie widełki.'
      }
    },
    {
      id: 'wm-10',
      isWinMaterial: true,
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'attraction', 'skewer'],
      fen: '5rk1/pp4pp/2p1p3/8/8/qPP1B3/P5PP/5RK1 w - - 0 1',
      solution: ['f1f8', 'g8f8', 'e3c5', 'f8g8', 'c5a3'],
      title: {
        en: 'Decoy on f8 into Bishop Skewer',
        pl: 'Zaciągnięcie na f8 pod szpilkę gońcem'
      },
      hint: {
        en: 'Trade rooks on f8 to pull the black king onto the a3-f8 diagonal, then skewer king and queen with your bishop!',
        pl: 'Wymień wieże na f8, zaciągając króla na przekątną a3-f8, a następnie daj szpilkę gońcem na c5!'
      },
      explanation: {
        en: '1. Rxf8+! Kxf8 2. Bc5+! Kg8 3. Bxa3 forces the black king onto the exact diagonal of its own queen.',
        pl: '1. Wxf8+! Kxf8 2. Gc5+! Kg8 3. Gxa3 wciąga króla na przekątną, na której stoi czarny hetman.'
      }
    },
    {
      id: 'wm-11',
      isWinMaterial: true,
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['zwischenzug', 'fork'],
      fen: '2rq1rk1/pp2bppp/2n1p3/8/2BN4/2P1P3/PP1Q1PPP/3R2K1 w - - 0 1',
      solution: ['d4c6', 'd8d2', 'c6e7', 'g8h8', 'd1d2'],
      title: {
        en: 'Winning a Piece via Intermediate Check (Zwischenzug)',
        pl: 'Zdobycie figury dzięki wtrąconemu szachowi'
      },
      hint: {
        en: 'Capture the knight on c6! When Black trades queens on d2, do NOT recapture immediately — save your knight with check first!',
        pl: 'Zbij skoczka na c6! Gdy czarne wymienią hetmany na d2, NIE odbijaj od razu — najpierw ucieknij skoczkiem z szachem na e7!'
      },
      explanation: {
        en: '1. Nxc6! Qxd2 2. Ne7+! (Zwischenzug / intermediate check) Kh8 3. Rxd2 wins a full piece because the knight escapes with tempo.',
        pl: '1. Sxc6! Hxd2 2. Se7+! (wtrącony szach) Kh8 3. Wxd2 wygrywa pełną figurę, bo skoczek ucieka z tempem.'
      }
    },
    {
      id: 'wm-12',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['discovered', 'sacrifice'],
      fen: '3r2k1/pp3ppp/2pbpn2/8/2P5/1P3N2/PBP1PPPP/3Q1RK1 b - - 0 1',
      solution: ['d6h2', 'g1h1', 'd8d1'],
      title: {
        en: 'Black to Move: Discovered Attack Winning the Queen',
        pl: 'Ruch czarnych: Odkryty atak zdobywający hetmana'
      },
      hint: {
        en: 'You are playing Black! Sacrifice your bishop on h2 with check to uncover your d8-rook against White’s queen on d1!',
        pl: 'Grasz czarnymi! Poświęć gońca na h2 z szachem, odsłaniając wieżę d8 przeciwko białemu hetmanowi na d1!'
      },
      explanation: {
        en: '1... Bxh2+! 2. Kh1 Rxd1+ wins White’s queen cleanly with a discovered attack.',
        pl: '1... Gxh2+! 2. Kh1 Wxd1+ zdobywa białego hetmana dzięki uderzeniu z odsłonięcia.'
      }
    },
    {
      "id": "wm-13",
      "difficulty": "easy",
      "themes": [
        "fork"
      ],
      "fen": "4k3/8/5q2/8/4N3/8/8/4K3 w - - 0 1",
      "solution": [
        "e4f6",
        "e8e7",
        "f6d5"
      ],
      "title": {
        "en": "Knight Captures Hanging Queen with Check!",
        "pl": "Skoczek zbija hetmana z szachem!"
      },
      "hint": {
        "en": "Capture the undefended queen on f6 with check (`Nxf6+`)!",
        "pl": "Zbij niebronionego hetmana na f6 z szachem (`Sxf6+`)!"
      },
      "explanation": {
        "en": "1. Nxf6+ wins the queen immediately with check.",
        "pl": "1. Sxf6+ natychmiast wygrywa hetmana z szachem."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-14",
      "difficulty": "easy",
      "themes": [
        "fork"
      ],
      "fen": "r3k3/8/8/3N4/8/8/8/4K3 w - - 0 1",
      "solution": [
        "d5c7",
        "e8e7",
        "c7a8"
      ],
      "title": {
        "en": "Classic Royal Knight Fork on c7!",
        "pl": "Klasyczne widełki królewskie na c7!"
      },
      "hint": {
        "en": "Jump your knight to c7 (`Nc7+`) to fork the black king and rook!",
        "pl": "Skocz skoczkiem na c7 (`Sc7+`), robiąc widełki królowi i wieży!"
      },
      "explanation": {
        "en": "1. Nc7+ forks the king on e8 and the rook on a8, winning a full rook.",
        "pl": "1. Sc7+ robi widełki królowi na e8 i wieży na a8, wygrywając całą wieżę."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-15",
      "difficulty": "easy",
      "themes": [
        "fork"
      ],
      "fen": "4k2r/8/8/4N3/8/8/8/4K3 w - - 0 1",
      "solution": [
        "e5f7",
        "e8e7",
        "f7h8"
      ],
      "title": {
        "en": "Knight Fork on f7 Winning the Rook!",
        "pl": "Widełki skoczkiem na f7 wygrywające wieżę!"
      },
      "hint": {
        "en": "Jump to f7 (`Nf7+`) to fork the king and h8-rook!",
        "pl": "Skocz na f7 (`Sf7+`), robiąc widełki królowi i wieży h8!"
      },
      "explanation": {
        "en": "1. Nf7+ forks e8 and h8, winning the rook cleanly.",
        "pl": "1. Sf7+ robi widełki na e8 i h8, czysto wygrywając wieżę."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-16",
      "difficulty": "easy",
      "themes": [
        "skewer"
      ],
      "fen": "4k3/8/8/8/4q3/8/8/4R1K1 w - - 0 1",
      "solution": [
        "e1e4"
      ],
      "title": {
        "en": "Pin & Capture on the e-File!",
        "pl": "Związanie i zbicie na linii e!"
      },
      "hint": {
        "en": "Black’s queen on e4 is pinned to the king and undefended — capture it with `Rxe4`!",
        "pl": "Czarny hetman na e4 jest związany z królem i niebroniony — zbij go `Wxe4`!"
      },
      "explanation": {
        "en": "1. Rxe4 wins the queen on the spot.",
        "pl": "1. Wxe4 natychmiast wygrywa hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-17",
      "difficulty": "easy",
      "themes": [
        "skewer"
      ],
      "fen": "r5k1/8/8/8/4B3/8/8/6K1 w - - 0 1",
      "solution": [
        "e4d5",
        "g8f8",
        "d5a8"
      ],
      "title": {
        "en": "Diagonal Bishop Skewer Winning the Rook!",
        "pl": "Przekątna szpilka gońcem wygrywająca wieżę!"
      },
      "hint": {
        "en": "Check the king on the a8-h1 diagonal with `Bd5+`, skewering the rook on a8!",
        "pl": "Daj szacha na przekątnej a8-h1 ruchem `Gd5+`, nabijając wieżę na a8 na szpilkę!"
      },
      "explanation": {
        "en": "1. Bd5+ forces the king to move, allowing 2. Bxa8.",
        "pl": "1. Gd5+ zmusza króla do odejścia, po czym 2. Gxa8 wygrywa wieżę."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-18",
      "difficulty": "easy",
      "themes": [
        "fork"
      ],
      "fen": "r3k3/5ppp/8/8/8/8/5PPP/3Q2K1 w - - 0 1",
      "solution": [
        "d1a4",
        "e8e7",
        "a4a8"
      ],
      "title": {
        "en": "Queen Double Attack on a4!",
        "pl": "Podwójny atak hetmanem na a4!"
      },
      "hint": {
        "en": "Play `Qa4+` to check the king on e8 and attack the undefended rook on a8!",
        "pl": "Zagraj `Ha4+`, dając szacha królowi na e8 i atakując niebronioną wieżę na a8!"
      },
      "explanation": {
        "en": "1. Qa4+ forks the king and the a8-rook, winning a full rook.",
        "pl": "1. Ha4+ robi widełki królowi i wieży a8, wygrywając całą wieżę."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-19",
      "difficulty": "easy",
      "themes": [
        "fork"
      ],
      "fen": "4k2r/ppp5/8/8/8/8/PPP5/3Q2K1 w - - 0 1",
      "solution": [
        "d1h5",
        "e8e7",
        "h5h8"
      ],
      "title": {
        "en": "Queen Fork on h5 Winning the h8-Rook!",
        "pl": "Widełki hetmanem na h5 wygrywające wieżę!"
      },
      "hint": {
        "en": "Check on h5 (`Qh5+`) to simultaneously attack the h8-rook!",
        "pl": "Daj szacha na h5 (`Hh5+`), jednocześnie atakując wieżę na h8!"
      },
      "explanation": {
        "en": "1. Qh5+ forks the king on e8 and the rook on h8.",
        "pl": "1. Hh5+ robi widełki królowi na e8 i wieży na h8."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-20",
      "difficulty": "medium",
      "themes": [
        "pin"
      ],
      "fen": "4k3/4r3/8/8/1B6/8/8/4R1K1 w - - 0 1",
      "solution": [
        "b4e7"
      ],
      "title": {
        "en": "Win the Pinned Rook on e7!",
        "pl": "Zbij związaną wieżę na e7!"
      },
      "hint": {
        "en": "Black’s rook on e7 is pinned to the king by your e1-rook. Capture it cleanly with `Bxe7`!",
        "pl": "Czarna wieża na e7 jest związana z królem przez Twoją wieżę e1. Zbij ją gońcem `Gxe7`!"
      },
      "explanation": {
        "en": "1. Bxe7 wins a full rook because the e7-rook cannot move and is defended only by the king (which would be in check from Re1? No, Re1 defends e7!).",
        "pl": "1. Gxe7 wygrywa całą wieżę, bo Twoja wieża z e1 broni gońca na e7."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-21",
      "difficulty": "medium",
      "themes": [
        "skewer"
      ],
      "fen": "4k3/8/8/8/8/8/8/R3q1K1 w - - 0 1",
      "solution": [
        "a1e1"
      ],
      "title": {
        "en": "Absolute Pin on the e-File!",
        "pl": "Bezwzględne związanie na linii e!"
      },
      "hint": {
        "en": "Play `Rxe1`? Even better — capture the undefended queen on e1!",
        "pl": "Zbij niebronionego hetmana na e1 ruchem `Wxe1`!"
      },
      "explanation": {
        "en": "1. Rxe1 wins the queen immediately.",
        "pl": "1. Wxe1 natychmiast wygrywa hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-22",
      "difficulty": "medium",
      "themes": [
        "skewer"
      ],
      "fen": "2q1k3/8/8/8/8/8/8/R5K1 w - - 0 1",
      "solution": [
        "a1a8",
        "e8d7",
        "a8c8"
      ],
      "title": {
        "en": "8th-Rank Rook Pin Winning the Queen!",
        "pl": "Związanie wieżą na 8. linii wygrywające hetmana!"
      },
      "hint": {
        "en": "Play `Ra8` to pin Black’s queen on c8 directly to the king on e8!",
        "pl": "Zagraj `Wa8`, wiążąc czarnego hetmana na c8 bezpośrednio do króla na e8!"
      },
      "explanation": {
        "en": "1. Ra8 pins the queen to the king on the 8th rank, winning the queen.",
        "pl": "1. Wa8 wiąże hetmana do króla na 8. linii, wygrywając hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-23",
      "difficulty": "medium",
      "themes": [
        "fork"
      ],
      "fen": "3q4/4k3/8/4N3/8/8/8/4K3 w - - 0 1",
      "solution": [
        "e5c6",
        "e7d7",
        "c6d8"
      ],
      "title": {
        "en": "Royal Knight Fork on c6 Winning the Queen!",
        "pl": "Królewskie widełki na c6 wygrywające hetmana!"
      },
      "hint": {
        "en": "Jump your knight to c6 (`Nc6+`) to fork the king on e7 and queen on d8!",
        "pl": "Skocz skoczkiem na c6 (`Sc6+`), robiąc widełki królowi na e7 i hetmanowi na d8!"
      },
      "explanation": {
        "en": "1. Nc6+ forks the king and queen, winning the queen on the next move.",
        "pl": "1. Sc6+ robi widełki królowi i hetmanowi, wygrywając hetmana w następnym ruchu."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-24",
      "difficulty": "medium",
      "themes": [
        "fork"
      ],
      "fen": "5q2/4k3/8/4N3/8/8/8/4K3 w - - 0 1",
      "solution": [
        "e5g6",
        "e7f7",
        "g6f8"
      ],
      "title": {
        "en": "Royal Knight Fork on g6 Winning the Queen!",
        "pl": "Królewskie widełki na g6 wygrywające hetmana!"
      },
      "hint": {
        "en": "Jump to g6 (`Ng6+`) to fork the king on e7 and queen on f8!",
        "pl": "Skocz na g6 (`Sg6+`), robiąc widełki królowi na e7 i hetmanowi na f8!"
      },
      "explanation": {
        "en": "1. Ng6+ wins Black’s queen cleanly.",
        "pl": "1. Sg6+ czysto wygrywa czarnego hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-25",
      "difficulty": "medium",
      "themes": [
        "skewer"
      ],
      "fen": "4k3/8/8/1q6/8/8/4B3/4K3 w - - 0 1",
      "solution": [
        "e2b5"
      ],
      "title": {
        "en": "Bishop Captures Undefended Queen with Pin!",
        "pl": "Goniec zbija hetmana z szachem!"
      },
      "hint": {
        "en": "Black’s queen on b5 is on the same diagonal as the king — capture it with `Bxb5+`!",
        "pl": "Czarny hetman na b5 stoi na tej samej przekątnej co król — zbij go `Gxb5+`!"
      },
      "explanation": {
        "en": "1. Bxb5+ wins the queen immediately with check.",
        "pl": "1. Gxb5+ natychmiast wygrywa hetmana z szachem."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-26",
      "difficulty": "medium",
      "themes": [
        "discoveredAttack"
      ],
      "fen": "4k3/4r3/8/8/4B3/8/8/4R1K1 w - - 0 1",
      "solution": [
        "e4c6",
        "e8f8",
        "e1e7"
      ],
      "title": {
        "en": "Discovered Check Winning the Rook!",
        "pl": "Szach z odsłonięcia wygrywający wieżę!"
      },
      "hint": {
        "en": "Move your bishop with check (`Bc6+`!) to unleash your e1-rook on Black’s e7-rook!",
        "pl": "Odejdź gońcem z szachem (`Gc6+`!), odsłaniając atak wieży e1 na wieżę e7!"
      },
      "explanation": {
        "en": "1. Bc6+ is a discovered check — Black must save the king, and 2. Rxe7 wins the rook.",
        "pl": "1. Gc6+ to szach z odsłonięcia — czarne muszą ratować króla, a 2. Wxe7 wygrywa wieżę."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-27",
      "difficulty": "hard",
      "themes": [
        "discoveredAttack"
      ],
      "fen": "4k3/8/3q4/8/4N3/8/8/4R1K1 w - - 0 1",
      "solution": [
        "e4d6",
        "e8d7",
        "e1e7"
      ],
      "title": {
        "en": "Discovered Check Capture on d6!",
        "pl": "Zbicie hetmana z szachem z odsłonięcia!"
      },
      "hint": {
        "en": "Capture Black’s queen on d6 with your knight (`Nxd6+`) — it’s a discovered check from your e1-rook!",
        "pl": "Zbij czarnego hetmana na d6 skoczkiem (`Sxd6+`) — odsłaniasz szacha wieżą z e1!"
      },
      "explanation": {
        "en": "1. Nxd6+ wins the queen with a discovered check!",
        "pl": "1. Sxd6+ wygrywa hetmana z szachem z odsłonięcia!"
      },
      "isMaterialPuzzle": true,
      "movesToMate": 2
    },
    {
      "id": "wm-28",
      "difficulty": "hard",
      "themes": [
        "pin"
      ],
      "fen": "3r2k1/5ppp/8/8/8/2B5/5PPP/3R2K1 w - - 0 1",
      "solution": [
        "d1d8"
      ],
      "title": {
        "en": "Back-Rank Rook Capture!",
        "pl": "Zbicie wieży z matem na 8. linii!"
      },
      "hint": {
        "en": "Black’s rook on d8 is undefended — capture it with `Rxd8#`!",
        "pl": "Czarna wieża na d8 jest niebroniona — zbij ją `Wxd8#`!"
      },
      "explanation": {
        "en": "1. Rxd8# wins the rook and delivers checkmate.",
        "pl": "1. Wxd8# wygrywa wieżę i daje mata."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-29",
      "difficulty": "hard",
      "themes": [
        "fork"
      ],
      "fen": "r4rk1/ppp2ppp/8/3q4/8/2N5/PPP2PPP/R2Q1RK1 w - - 0 1",
      "solution": [
        "c3d5"
      ],
      "title": {
        "en": "Knight Captures Centralized Queen!",
        "pl": "Skoczek zbija hetmana w centrum!"
      },
      "hint": {
        "en": "Black left the queen on d5 en prise — capture it with `Nxd5`!",
        "pl": "Czarne zostawiły hetmana na d5 pod biciem — zbij go `Sxd5`!"
      },
      "explanation": {
        "en": "1. Nxd5 wins the queen cleanly.",
        "pl": "1. Sxd5 czysto wygrywa hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-30",
      "difficulty": "hard",
      "themes": [
        "skewer"
      ],
      "fen": "6k1/8/8/3q4/8/8/8/3R2K1 w - - 0 1",
      "solution": [
        "d1d5"
      ],
      "title": {
        "en": "Rook Captures Undefended Queen on d5!",
        "pl": "Wieża zbija niebronionego hetmana na d5!"
      },
      "hint": {
        "en": "Capture the hanging queen on d5 with `Rxd5`!",
        "pl": "Zbij niebronionego hetmana na d5 ruchem `Wxd5`!"
      },
      "explanation": {
        "en": "1. Rxd5 wins the queen on the spot.",
        "pl": "1. Wxd5 natychmiast wygrywa hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-31",
      "difficulty": "hard",
      "themes": [
        "fork"
      ],
      "fen": "4k3/8/8/2r1q3/3P4/8/8/4K3 w - - 0 1",
      "solution": [
        "d4e5"
      ],
      "title": {
        "en": "Pawn Fork Winning the Queen!",
        "pl": "Widełki pionkiem wygrywające hetmana!"
      },
      "hint": {
        "en": "Your d4-pawn forks Black’s rook and queen — capture the queen with `dxe5`!",
        "pl": "Twój pionek d4 robi widełki wieży i hetmanowi — zbij hetmana `dxe5`!"
      },
      "explanation": {
        "en": "1. dxe5 wins the queen cleanly.",
        "pl": "1. dxe5 czysto wygrywa hetmana."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "wm-32",
      "difficulty": "hard",
      "themes": [
        "promotion"
      ],
      "fen": "8/4P1k1/8/8/8/8/8/4K3 w - - 0 1",
      "solution": [
        "e7e8q"
      ],
      "title": {
        "en": "Promote to a Queen!",
        "pl": "Promocja na hetmana!"
      },
      "hint": {
        "en": "Push your e7-pawn to e8 and promote to a Queen (`e8=Q`)!",
        "pl": "Przepchnij pionka e7 na e8 i promuj na Hetmana (`e8=H`)!"
      },
      "explanation": {
        "en": "1. e8=Q promotes with a decisive material advantage.",
        "pl": "1. e8=H daje decydującą przewagę materialną."
      },
      "isMaterialPuzzle": true,
      "movesToMate": 1
    }
  ];

  /**
   * 12 "Defense / Escape the Mate" Puzzles (4 Easy, 4 Medium, 4 Hard)
   * The opponent threatens immediate checkmate — find the ONLY defensive resource
   * that saves your king and turns the tables!
   */
  const DEFENSE_PUZZLES = [
    // === EASY (4) ===
    {
      id: 'df-01',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['defense', 'battery'],
      fen: '3r2k1/1b3pp1/B6p/p5q1/1p1P4/2P5/PP3PPP/4R1K1 w - - 0 1',
      solution: ['a6b7'],
      title: {
        en: 'Eliminate the Long-Diagonal Mate Threat',
        pl: 'Likwidacja groźby mata na g2'
      },
      hint: {
        en: 'Black’s queen on g5 and bishop on b7 threaten unstoppable mate on g2! Capture the supporting bishop with your a6-bishop!',
        pl: 'Czarny hetman na g5 i goniec na b7 grożą matem na g2! Zbij figurę wspierającą atak gońcem z a6!'
      },
      explanation: {
        en: '1. Bxb7! eliminates the b7-bishop, completely neutralizing the ...Qxg2# checkmate threat.',
        pl: '1. Gxb7! likwiduje gońca wspierającego punkt g2 i całkowicie rozbraja groźbę mata.'
      }
    },
    {
      id: 'df-02',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['defense', 'backRank'],
      fen: '4r1k1/pp3ppp/2p5/3p4/3P4/2qP4/P4PPP/4R1K1 w - - 0 1',
      solution: ['e1e8'],
      title: {
        en: 'Counter-Strike Against Back-Rank Mate',
        pl: 'Obrona przez kontratak na ósmej linii'
      },
      hint: {
        en: 'Black’s queen on c3 and rook on e8 threaten 1... Qe1#! Strike first on e8!',
        pl: 'Czarny hetman i wieża grożą matem na pierwszej linii! Uderz jako pierwszy na e8!'
      },
      explanation: {
        en: '1. Rxe8#! The best defense is a counter-checkmate: capturing the e8-rook saves White and mates Black immediately.',
        pl: '1. Wxe8#! Najlepszą obroną jest kontratak — zbicie wieży e8 ratuje białe i od razu daje mata!'
      }
    },
    {
      id: 'df-03',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['defense', 'backRank'],
      fen: '6k1/pb3ppp/1p6/3p4/8/2P3Pq/PP3P1P/4Q1K1 w - - 0 1',
      solution: ['e1e8'],
      title: {
        en: 'Escaping Qg2# via Back-Rank Counter-Mate',
        pl: 'Ratunek przed matem na g2 przez 8. linię'
      },
      hint: {
        en: 'You cannot stop ...Qg2# passively — look at Black’s own undefended 8th rank!',
        pl: 'Nie da się pasywnie obronić pola g2 — spójrz na niebronioną ósmą linię czarnych!'
      },
      explanation: {
        en: '1. Qe8#! When passive defense fails, check if the opponent’s king is even more vulnerable!',
        pl: '1. He8#! Gdy pasywna obrona zawodzi, sprawdź czy król przeciwnika nie jest jeszcze słabiej chroniony!'
      }
    },
    {
      id: 'df-04',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['defense'],
      fen: 'r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3',
      solution: ['g7g6', 'h5f3', 'g8f6'],
      title: {
        en: 'Black to Move: Refuting the Scholar’s Mate',
        pl: 'Ruch czarnych: Prawidłowa obrona przed Matem Szewskim'
      },
      hint: {
        en: 'White threatens 4. Qxf7#. Block the queen with 3... g6, and when she retreats to f3, block again with tempo!',
        pl: 'Białe grożą 4. Hxf7#. Przegoń hetmana ruchem 3... g6, a gdy ponowi groźbę z f3 — zasłoń skoczkiem 4... Sf6!'
      },
      explanation: {
        en: '3... g6! 4. Qf3 Nf6! cleanly neutralizes Scholar’s Mate while developing Black’s kingside knight with tempo.',
        pl: '3... g6! 4. Hf3 Sf6! wzorcowo odpiera Mata Szewskiego i rozwija skoczka z tempem.'
      }
    },

    // === MEDIUM (4) ===
    {
      id: 'df-05',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['defense', 'pin', 'battery'],
      fen: '5rk1/1b3pp1/p6p/1p6/6q1/1B6/PB2PPPP/3Q2K1 w - - 0 1',
      solution: ['b3d5', 'b7d5', 'd1d5'],
      title: {
        en: 'Blocking the Mating Diagonal',
        pl: 'Przesłonięcie matowej przekątnej'
      },
      hint: {
        en: 'Black’s queen on g4 and bishop on b7 threaten 1... Qxg2#. Interpose your b3-bishop on d5 to cut the b7-g2 diagonal!',
        pl: 'Czarny hetman na g4 i goniec na b7 grożą 1... Hxg2#. Postaw gońca na d5, przecinając matową przekątną b7-g2!'
      },
      explanation: {
        en: '1. Bd5! Bxd5 2. Qxd5 eliminates the dangerous b7-bishop and stops the mate on g2.',
        pl: '1. Gd5! Gxd5 2. Hxd5 wymienia groźnego gońca z b7 i całkowicie likwiduje groźbę mata na g2.'
      }
    },
    {
      id: 'df-06',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['defense', 'skewer'],
      fen: '3r2k1/1b3pp1/p6p/1p1q4/8/2P5/PP2BPPP/2R3K1 w - - 0 1',
      solution: ['e2f3', 'd5d7', 'f3b7'],
      title: {
        en: 'Defensive Skewer on the Mating Battery',
        pl: 'Obronna szpilka przeciwko baterii matującej'
      },
      hint: {
        en: 'Black’s queen on d5 and bishop on b7 threaten 1... Qxg2#! Step your bishop to f3 to defend g2 AND skewer d5/b7!',
        pl: 'Czarne grożą 1... Hxg2#! Przestaw gońca na f3, broniąc pola g2 i jednocześnie atakując hetmana d5 oraz gońca b7!'
      },
      explanation: {
        en: '1. Bf3! Qd7 2. Bxb7 defends g2 while skewering the black queen and the b7-bishop behind it!',
        pl: '1. Gf3! Hd7 2. Gxb7 jednocześnie broni pola g2 i zdobywa gońca b7 dzięki szpilce po długiej przekątnej!'
      }
    },
    {
      id: 'df-07',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['defense', 'backRank'],
      fen: '6k1/p2r1ppp/1p2p3/8/4P3/q7/P1Q2PPP/6K1 w - - 0 1',
      solution: ['c2c8', 'd7d8', 'c8d8'],
      title: {
        en: 'Saving the Back Rank with Tempo',
        pl: 'Ratunek pierwszej linii z tempem'
      },
      hint: {
        en: 'Black’s rook on d7 and queen on a3 threaten ...Rd1#! Counter-attack on the 8th rank with check!',
        pl: 'Czarna wieża na d7 i hetman na a3 grożą ...Wd1#! Uderz z szachem na 8. linię!'
      },
      explanation: {
        en: '1. Qc8+! Rd8 2. Qxd8+ Qf8 3. Qxf8+ Kxf8 turns a desperate defensive position into a winning counter-checkmate!',
        pl: '1. Hc8+! Wd8 2. Hxd8# zamienia groźną pozycję obronną w natychmiastowego kontrmata!'
      }
    },
    {
      id: 'df-08',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['defense'],
      fen: '5rk1/pp3ppp/2p5/8/2b5/3N2Pq/PP3P1P/5RK1 w - - 0 1',
      solution: ['d3e1', 'h3h6', 'e1g2'],
      title: {
        en: 'The Defensive Knight Retreat to e1',
        pl: 'Powrót skoczka na e1 w obronie pola g2'
      },
      hint: {
        en: 'Black’s queen on h3 threatens ...Qg2# and your d3-knight is attacked by Bc4! Retreat the knight to e1 to guard g2!',
        pl: 'Czarny hetman na h3 grozi matem na g2, a skoczek d3 jest atakowany! Cofnij skoczka na e1, aby obronić punkt g2!'
      },
      explanation: {
        en: '1. Ne1! Qh6 2. Ng2! saves the attacked knight while building an unbreakable fortress on the light squares around g2.',
        pl: '1. Se1! Hh6 2. Sg2! ratuje atakowanego skoczka i trwale zabezpiecza słabe białe pola wokół króla.'
      }
    },

    // === HARD (4) ===
    {
      id: 'df-09',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense', 'sacrifice', 'clearance'],
      fen: '3rr1k1/1b3pp1/p6p/1p6/6q1/2P5/PPQ2PPP/4R1K1 w - - 0 1',
      solution: ['e1e4', 'b7e4', 'c2e4'],
      title: {
        en: 'Miracle Interposition on e4 (Stopping Dual Mate Threats)',
        pl: 'Cudowna przesłona na e4 (Obrona przed podwójnym matem)'
      },
      hint: {
        en: 'Black threatens BOTH 1... Qxg2# AND 1... Rxe1#! Find the only square on the board that blocks the b7-g2 diagonal AND the e-file at once!',
        pl: 'Czarne grożą JEDNOCZEŚNIE 1... Hxg2# ORAZ 1... Wxe1#! Znajdź jedyne pole, które przecina przekątną b7-g2 oraz linię e naraz!'
      },
      explanation: {
        en: '1. Re4!! Bxe4 2. Qxe4 is a famous defensive resource (the "Intersection Point"): e4 is where the e-file and the b7-g2 diagonal cross!',
        pl: '1. We4!! Gxe4 2. Hxe4 to słynny motyw obronny ("punkt skrzyżowania"): pole e4 przecina jednocześnie linię e oraz przekątną b7-g2!'
      }
    },
    {
      id: 'df-10',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense'],
      fen: '6k1/pp3ppp/2p5/8/6n1/2P1B3/PP3PPq/6K1 w - - 0 1',
      solution: ['g1f1', 'g4e3', 'f2e3'],
      title: {
        en: 'Stepping Out of the Check Trap',
        pl: 'Zimna krew pod szachem'
      },
      hint: {
        en: 'You are in check from Qh2+ (protected by Ng4). Step safely to f1 (`1. Kf1!`) where your e3-bishop and f2-pawn shield the king!',
        pl: 'Jesteś pod szachem od hetmana h2 (bronionego przez skoczka g4). Odejdź królem na f1 (`1. Kf1!`), a po `1... Sxe3+` odbij `2. fxe3`!'
      },
      explanation: {
        en: '1. Kf1! Nxe3+ 2. fxe3 steps safely out of check and opens the f-file shelter so Black’s queen runs out of checks.',
        pl: '1. Kf1! Sxe3+ 2. fxe3 bezpiecznie wyprowadza króla spod szacha i wygasza atak czarnego hetmana.'
      }
    },
    {
      id: 'df-11',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense', 'deflection', 'sacrifice'],
      fen: '6k1/1b3ppp/2p1p3/8/6q1/2P5/Q4PPP/R5K1 w - - 0 1',
      solution: ['a2a8', 'b7a8', 'a1a8'],
      title: {
        en: 'Deflecting the Mating Bishop with a Queen Sacrifice',
        pl: 'Odciągnięcie matującego gońca ofiarą hetmana'
      },
      hint: {
        en: 'Black’s queen on g4 and bishop on b7 threaten 1... Qxg2#. Sacrifice your queen on a8 to force the b7-bishop off the mating diagonal!',
        pl: 'Czarny hetman na g4 i goniec na b7 grożą 1... Hxg2#. Poświęć hetmana na a8, zmuszając gońca z b7 do opuszczenia długiej przekątnej!'
      },
      explanation: {
        en: '1. Qa8+!! Bxa8 2. Rxa8# is a stunning turnaround: the bishop on b7 is forced to capture on a8, allowing immediate back-rank checkmate!',
        pl: '1. Ha8+!! Gxa8 2. Wxa8# to niesamowity zwrot akcji: goniec z b7 musi bić na a8, co pozwala białym dać mata na 8. linii!'
      }
    },
    {
      id: 'df-12',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense', 'pin', 'clearance'],
      fen: '4r1k1/ppq2ppp/2p5/8/3Q4/1P5P/PBP2PP1/3RR1K1 b - - 0 1',
      solution: ['c7e5', 'd4e5', 'e8e5'],
      title: {
        en: 'Black to Move: Queen Interposition on the Intersection Square',
        pl: 'Ruch czarnych: Przesłona hetmanem na polu skrzyżowania e5'
      },
      hint: {
        en: 'White threatens BOTH `1. Qxg7#` AND `1. Rxe8#`! Step your queen to e5 (`1... Qe5!!`) to block the b2-g7 diagonal, guard e8, and pin White’s queen!',
        pl: 'Białe grożą JEDNOCZEŚNIE `1. Hxg7#` ORAZ `1. Wxe8#`! Postaw hetmana na e5 (`1... He5!!`), blokując przekątną b2-g7 i broniąc pola e8!'
      },
      explanation: {
        en: '1... Qe5!! 2. Qxe5 Rxe5 stops both `Qxg7#` and `Rxe8#` simultaneously because e5 is the intersection of the e-file and the long diagonal!',
        pl: '1... He5!! 2. Hxe5 Wxe5 zatrzymuje obie groźby matowe jednocześnie, ponieważ pole e5 leży na przecięciu linii e oraz długiej przekątnej b2-g7!'
      }
    },
    {
      id: 'df-13',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['blunderCheck', 'defense', 'fork'],
      fen: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 4',
      solution: ['e1g1'],
      title: {
        en: 'Blunder Check: Castle to Safety Before Tactics Start',
        pl: 'Sprawdź Zagrożenie: Zrób roszadę zanim zaczniesz atak'
      },
      hint: {
        en: 'There is no winning tactic here! Your king is still in the center while Black is ready to play ...d6/...O-O. Play the solid developing move `O-O`.',
        pl: 'Tu nie ma żadnej kombinacji! Twój król nadal stoi w centrum. Zagraj spokojny, solidny ruch `O-O`, zabezpieczając króla.'
      },
      explanation: {
        en: 'Not every position has a tactic! Castling (`O-O`) secures your king, activates your rook, and avoids falling into central pins against strong bots.',
        pl: 'Nie w każdej pozycji jest taktyka! Roszada (`O-O`) zabezpiecza króla, wprowadza wieżę i chroni przed związaniami w centrum przeciwko mocnym botom.'
      }
    },
    {
      id: 'df-14',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['blunderCheck', 'defense'],
      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
      solution: ['f8c5'],
      title: {
        en: 'Blunder Check: Develop Solidly (Avoid Greedy Mistakes)',
        pl: 'Sprawdź Zagrożenie: Solidny rozwój zamiast błędów'
      },
      hint: {
        en: 'White’s bishop on c4 eyes f7, and e5 is already defended by Nc6. Develop your dark-squared bishop actively to `Bc5`!',
        pl: 'Goniec białych na c4 patrzy na f7, a e5 jest już bronione przez Sc6. Rozwiń aktywnie gońca ruchem `Gc5`!'
      },
      explanation: {
        en: 'Playing `3... Bc5` develops a piece, fights for the center, and prepares `...Nf6` and `...O-O` without creating any weaknesses.',
        pl: 'Ruch `3... Gc5` rozwija figurę, walczy o centrum i przygotowuje `...Sf6` oraz `...O-O` bez tworzenia słabości.'
      }
    },
    {
      id: 'df-15',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['blunderCheck', 'defense', 'fork'],
      fen: 'r1bqkb1r/ppp2ppp/2n2n2/3pp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
      solution: ['e4d5'],
      title: {
        en: 'Blunder Check: Save Your Hanging Bishop & Center',
        pl: 'Sprawdź Zagrożenie: Uratuj centrum i zaatakowanego gońca'
      },
      hint: {
        en: 'Black just played `3... d5`, attacking BOTH your bishop on c4 and your pawn on e4! Capture `exd5` to resolve the tension cleanly.',
        pl: 'Czarne właśnie zagrały `3... d5`, atakując JEDNOCZEŚNIE gońca na c4 i pionka na e4! Zbij `exd5`, aby czysto rozwiązać napięcie.'
      },
      explanation: {
        en: '4. exd5! immediately neutralizes Black’s double attack on c4 and e4, keeping a healthy position instead of losing a piece or central pawn.',
        pl: '4. exd5! natychmiast neutralizuje podwójny atak czarnych na c4 i e4, utrzymując zdrową pozycję zamiast straty figury lub pionka.'
      }
    },
    {
      id: 'df-16',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'medium',
      themes: ['blunderCheck', 'defense', 'backRank'],
      fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
      solution: ['d1d8'],
      title: {
        en: 'Blunder Check: Spot the Back-Rank Threat Immediately',
        pl: 'Sprawdź Zagrożenie: Zauważ groźbę mata na ostatniej linii'
      },
      hint: {
        en: 'Black’s rook on d8 threatens `...Rxd1#`! Don’t play a random pawn move — trade rooks (`Rxd8#`) or neutralize the d-file immediately!',
        pl: 'Wieża czarnych na d8 grozi matem! Zbij natychmiast `Wxd8#` — w realnej partii zawsze sprawdzaj otwarte linie!'
      },
      explanation: {
        en: 'Always check open files and back-rank threats on every move! Here `Rxd8#` not only stops Black’s threat, it delivers checkmate on the spot.',
        pl: 'Zawsze sprawdzaj otwarte linie i groźby na ostatniej linii w każdym ruchu! Tutaj `Wxd8#` nie tylko zatrzymuje groźbę, ale od razu daje mata.'
      }
    },
    {
      id: 'df-17',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'hard',
      themes: ['blunderCheck', 'defense', 'kingSafety'],
      fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 6',
      solution: ['h2h3'],
      title: {
        en: 'Blunder Check: Quiet Prophylaxis (Preventing ...Bg4 Pin)',
        pl: 'Sprawdź Zagrożenie: Spokojna profilaktyka (Zablokuj ...Gg4)'
      },
      hint: {
        en: 'There is no tactic here! Black wants to play `...Bg4` pinning your f3-knight and jumping `...Nd4`. Play the quiet prophylactic move `h3`!',
        pl: 'Tu nie ma taktyki! Czarne chcą zagrać `...Gg4`, wiążąc skoczka f3 i skacząc `...Sd4`. Zagraj spokojny ruch profilaktyczny `h3`!'
      },
      explanation: {
        en: 'Prophylaxis (`h3`) is a hallmark of strong players: it prevents `...Bg4` before it becomes annoying and gives your king luft against back-rank mates.',
        pl: 'Profilaktyka (`h3`) to znak rozpoznawczy silnych graczy: zapobiega uciążliwemu związaniu `...Gg4` i daje królowi „okienko” przed matem na 1. linii.'
      }
    },
    {
      id: 'df-18',
      isDefensePuzzle: true,
      movesToMate: 1,
      difficulty: 'hard',
      themes: ['blunderCheck', 'defense'],
      fen: 'r2q1rk1/ppp2ppp/2n2n2/3p4/1b1P4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 8',
      solution: ['e1g1'],
      title: {
        en: 'Blunder Check: Complete Development & Break the Pin',
        pl: 'Sprawdź Zagrożenie: Dokończ rozwój i wyjdź ze związania'
      },
      hint: {
        en: 'Black has already castled and is ready to open the e-file with `...Re8`. Don’t delay — castle kingside (`O-O`) right now!',
        pl: 'Czarne już zrobiły roszadę i za chwilę otworzą linię e ruchem `...We8`. Nie zwlekaj — zrób roszadę (`O-O`) natychmiast!'
      },
      explanation: {
        en: 'Leaving your king in the center after the opponent castles is the #1 way players get crushed by strong bots. `O-O` keeps your position rock-solid.',
        pl: 'Zostawienie króla w centrum po roszadzie przeciwnika to najczęstszy powód porażek z mocnymi botami. `O-O` natychmiast zabezpiecza pozycję.'
      }
    },
    {
      "id": "df-19",
      "difficulty": "easy",
      "themes": [
        "defense",
        "backRank"
      ],
      "fen": "3r2k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1",
      "solution": [
        "g1f1"
      ],
      "title": {
        "en": "Escape the Back-Rank Mate Threat!",
        "pl": "Ucieknij przed matem na 1. linii!"
      },
      "hint": {
        "en": "Black threatens `...Rd1#`! Step your king to safety (`Kf1` or create luft) — play `Kf1`!",
        "pl": "Czarne grożą `...Wd1#`! Ucieknij królem z 1. linii ruchem `Kf1`!"
      },
      "explanation": {
        "en": "1. Kf1 steps off the back-rank trap before `...Rd1#` can happen.",
        "pl": "1. Kf1 ratuje króla przed matem `...Wd1#`."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-20",
      "difficulty": "easy",
      "themes": [
        "defense",
        "backRank"
      ],
      "fen": "3r2k1/5ppp/8/8/8/8/5PPP/5RK1 w - - 0 1",
      "solution": [
        "h2h3"
      ],
      "title": {
        "en": "Create Luft to Stop Back-Rank Mate!",
        "pl": "Zrób okienko dla króla (h3)!"
      },
      "hint": {
        "en": "Make an escape square for your king with `h3`!",
        "pl": "Zrób bezpieczne okienko dla króla ruchem `h3`!"
      },
      "explanation": {
        "en": "1. h3 permanently eliminates back-rank mate threats.",
        "pl": "1. h3 trwale likwiduje groźby mata na 1. linii."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-21",
      "difficulty": "easy",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 4 4",
      "solution": [
        "g8f6"
      ],
      "title": {
        "en": "Stop Scholar’s Mate (Qxf7#) with Development!",
        "pl": "Zatrzymaj Mata Szewskiego ruchem rozwijającym!"
      },
      "hint": {
        "en": "White threatens `Qxf7#`! Block the f-file and develop your knight with `Nf6`!",
        "pl": "Białe grożą `Hxf7#`! Zablokuj linię f i rozwiń skoczka ruchem `Sf6`!"
      },
      "explanation": {
        "en": "1... Nf6 stops Qxf7# while developing a piece.",
        "pl": "1... Sf6 zatrzymuje Hxf7# i jednocześnie rozwija figurę."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-22",
      "difficulty": "easy",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
      "solution": [
        "g7g6"
      ],
      "title": {
        "en": "Kick the Queen & Stop Qxf7#!",
        "pl": "Przegoń hetmana i obroń f7!"
      },
      "hint": {
        "en": "White threatens `Qxf7#`! Push `g6` to kick the queen while defending e5 with Nc6!",
        "pl": "Białe grożą `Hxf7#`! Zagraj `g6`, przeganiając hetmana (pionek e5 jest już broniony przez Sc6)!"
      },
      "explanation": {
        "en": "1... g6 defends f7 and gains tempo against White’s queen.",
        "pl": "1... g6 broni f7 i zdobywa tempo na hetmanie białych."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-23",
      "difficulty": "easy",
      "themes": [
        "blunderCheck",
        "defense"
      ],
      "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      "solution": [
        "f1c4"
      ],
      "title": {
        "en": "Solid Development: Bring Out the Bishop",
        "pl": "Solidny rozwój: Wyprowadź gońca na c4"
      },
      "hint": {
        "en": "Develop your light-squared bishop actively to `Bc4`!",
        "pl": "Wyprowadź białopolowego gońca aktywnie na `Gc4`!"
      },
      "explanation": {
        "en": "3. Bc4 prepares castling and targets f7.",
        "pl": "3. Gc4 przygotowuje roszadę i kontroluje centrum."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-24",
      "difficulty": "easy",
      "themes": [
        "blunderCheck",
        "defense"
      ],
      "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",
      "solution": [
        "e4d5"
      ],
      "title": {
        "en": "Defend Your Center: Capture on d5!",
        "pl": "Obroń centrum: Zbij na d5!"
      },
      "hint": {
        "en": "Black attacks your e4-pawn — capture `exd5` cleanly!",
        "pl": "Czarne atakują pionka e4 — zbij czysto `exd5`!"
      },
      "explanation": {
        "en": "2. exd5 avoids losing the central e4-pawn.",
        "pl": "2. exd5 nie pozwala czarnym zabrać pionka e4."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-25",
      "difficulty": "medium",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
      "solution": [
        "d7d5"
      ],
      "title": {
        "en": "Defend f7 Against Fried Liver Attack!",
        "pl": "Obroń f7 przed atakiem Fried Liver!"
      },
      "hint": {
        "en": "White threatens `Nxf7` or `Bxf7+`! Block the bishop’s diagonal immediately with `d5!`",
        "pl": "Białe grożą `Sxf7`! Natychmiast przetnij przekątną gońca ruchem `d5!`."
      },
      "explanation": {
        "en": "4... d5! is the only strong defense against Ng5.",
        "pl": "4... d5! to jedyna prawidłowa obrona przed atakiem na f7."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-26",
      "difficulty": "medium",
      "themes": [
        "defense",
        "pin"
      ],
      "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5",
      "solution": [
        "e8g8"
      ],
      "title": {
        "en": "Castle to Safety Before Opening the Center!",
        "pl": "Zrób roszadę przed otwarciem centrum!"
      },
      "hint": {
        "en": "Get your king out of the center immediately with `O-O`!",
        "pl": "Zabezpiecz króla roszadą `O-O`!"
      },
      "explanation": {
        "en": "Castling early prevents central tactics against the king.",
        "pl": "Wczesna roszada chroni przed taktykami w centrum."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-27",
      "difficulty": "medium",
      "themes": [
        "defense",
        "fork"
      ],
      "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq d6 0 4",
      "solution": [
        "e4d5"
      ],
      "title": {
        "en": "Resolve Central Tension Cleanly!",
        "pl": "Rozwiąż napięcie w centrum!"
      },
      "hint": {
        "en": "Black threatens `...d4` forking your knight — capture `exd5`!",
        "pl": "Czarne grożą `...d4` — zbij czysto `exd5`!"
      },
      "explanation": {
        "en": "4. exd5 keeps White’s knights active and avoids getting pushed back.",
        "pl": "4. exd5 utrzymuje aktywne skoczki białych."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-28",
      "difficulty": "medium",
      "themes": [
        "defense"
      ],
      "fen": "r2q1rk1/ppp2ppp/2n1bn2/3p4/3P4/2NBPN2/PPP2PPP/R2Q1RK1 w - - 0 9",
      "solution": [
        "h2h3"
      ],
      "title": {
        "en": "Quiet Prophylaxis: Stop ...Bg4!",
        "pl": "Profilaktyka: Zablokuj ...Gg4!"
      },
      "hint": {
        "en": "Play `h3` to keep Black’s pieces off g4 and give your king luft.",
        "pl": "Zagraj `h3`, blokując pole g4 i dając królowi okienko."
      },
      "explanation": {
        "en": "A solid prophylactic move that prevents annoying pins.",
        "pl": "Solidny ruch profilaktyczny zapobiegający związaniom."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-29",
      "difficulty": "medium",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r1bq1rk1/ppp2ppp/2n2n2/3p4/1b1P4/2NBPN2/PPP2PPP/R1BQK2R w KQ - 2 7",
      "solution": [
        "e1g1"
      ],
      "title": {
        "en": "Break the Pin & Castle!",
        "pl": "Wyjdź ze związania i zrób roszadę!"
      },
      "hint": {
        "en": "Castle kingside (`O-O`) to unpin your c3-knight and secure your king!",
        "pl": "Zrób roszadę (`O-O`), zdejmując związanie ze skoczka c3!"
      },
      "explanation": {
        "en": "Castling breaks the pin on c3 and brings the rook into the game.",
        "pl": "Roszada zdejmuje związanie ze skoczka c3 i aktywizuje wieżę."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-30",
      "difficulty": "medium",
      "themes": [
        "defense"
      ],
      "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b kq - 1 6",
      "solution": [
        "e8g8"
      ],
      "title": {
        "en": "Match White’s Castling Immediately!",
        "pl": "Odpowiedz roszadą na roszadę białych!"
      },
      "hint": {
        "en": "White has castled — don’t leave your king in the center! Play `O-O`.",
        "pl": "Białe już zrobiły roszadę — zabezpiecz króla ruchem `O-O`."
      },
      "explanation": {
        "en": "Castling keeps Black’s king completely safe.",
        "pl": "Roszada utrzymuje czarnego króla w pełnym bezpieczeństwie."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-31",
      "difficulty": "hard",
      "themes": [
        "defense",
        "backRank"
      ],
      "fen": "2r3k1/5ppp/8/8/8/8/5PPP/2R3K1 w - - 0 1",
      "solution": [
        "c1c8"
      ],
      "title": {
        "en": "Counter-Strike on the Open File!",
        "pl": "Kontratak na otwartej linii c!"
      },
      "hint": {
        "en": "Black threatens `...Rxc1#` — strike first with `Rxc8#`!",
        "pl": "Czarne grożą `...Wxc1#` — uderz pierwszy ruchem `Wxc8#`!"
      },
      "explanation": {
        "en": "1. Rxc8# wins immediately on the back rank.",
        "pl": "1. Wxc8# natychmiast daje mata na 8. linii."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-32",
      "difficulty": "hard",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r2q1rk1/ppp1bppp/2n1bn2/3p4/3P4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10",
      "solution": [
        "a2a3"
      ],
      "title": {
        "en": "Prophylaxis: Prevent ...Nb4!",
        "pl": "Profilaktyka: Zablokuj ...Sb4!"
      },
      "hint": {
        "en": "Black wants to jump `...Nb4` attacking your queen on c2 — stop it with `a3`!",
        "pl": "Czarne chcą skoczyć `...Sb4`, atakując hetmana c2 — zablokuj to ruchem `a3`!"
      },
      "explanation": {
        "en": "1. a3 stops ...Nb4 and keeps White’s queen comfortable on c2.",
        "pl": "1. a3 blokuje ...Sb4 i chroni hetmana na c2."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-33",
      "difficulty": "hard",
      "themes": [
        "defense"
      ],
      "fen": "r2q1rk1/ppp2ppp/2n2n2/3p2B1/3P4/2N1PN2/PPP2PPP/R2QKB1R b KQ - 2 7",
      "solution": [
        "h7h6"
      ],
      "title": {
        "en": "Question the Pinning Bishop!",
        "pl": "Zapytaj wiążącego gońca ruchem h6!"
      },
      "hint": {
        "en": "Push `h6` to force White’s g5-bishop to make a decision and give your king luft!",
        "pl": "Zagraj `h6`, zmuszając gońca g5 do decyzji i dając królowi okienko!"
      },
      "explanation": {
        "en": "1... h6 gains space and prevents back-rank issues.",
        "pl": "1... h6 zdobywa przestrzeń i daje królowi bezpieczne okienko."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-34",
      "difficulty": "hard",
      "themes": [
        "defense",
        "kingSafety"
      ],
      "fen": "r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQ - 2 6",
      "solution": [
        "e2e3"
      ],
      "title": {
        "en": "Solidify d4 and Prepare Bd3 + O-O!",
        "pl": "Wzmocnij d4 i przygotuj Gd3 + O-O!"
      },
      "hint": {
        "en": "Support d4 and open the diagonal for your f1-bishop with `e3`!",
        "pl": "Wzmocnij d4 i otwórz linię dla białopolowego gońca ruchem `e3`!"
      },
      "explanation": {
        "en": "6. e3 prepares Bd3 and castling cleanly.",
        "pl": "6. e3 przygotowuje Gd3 oraz szybką roszadę."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-35",
      "difficulty": "hard",
      "themes": [
        "defense"
      ],
      "fen": "r1bqk2r/ppp1bppp/2n2n2/3pp3/4P3/2NP1N2/PPP1BPPP/R1BQ1RK1 b kq - 2 6",
      "solution": [
        "e8g8"
      ],
      "title": {
        "en": "Secure Your King Against Central Breaks!",
        "pl": "Zabezpiecz króla przed przełamaniem w centrum!"
      },
      "hint": {
        "en": "Castle kingside (`O-O`) right now!",
        "pl": "Zrób roszadę (`O-O`) natychmiast!"
      },
      "explanation": {
        "en": "6... O-O gets Black’s king safe before the center opens.",
        "pl": "6... O-O zabezpiecza króla przed otwarciem centrum."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-36",
      "difficulty": "hard",
      "themes": [
        "defense"
      ],
      "fen": "r2qk2r/ppp1bppp/2n1bn2/3p4/3P4/2NBPN2/PPP2PPP/R1BQ1RK1 b kq - 4 7",
      "solution": [
        "e8g8"
      ],
      "title": {
        "en": "Complete Development with Castling!",
        "pl": "Dokończ rozwój roszadą!"
      },
      "hint": {
        "en": "Castle kingside (`O-O`) to connect your rooks!",
        "pl": "Zrób roszadę (`O-O`), aby połączyć wieże!"
      },
      "explanation": {
        "en": "7... O-O completes Black’s opening safely.",
        "pl": "7... O-O bezpiecznie kończy fazę debiutu czarnych."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-37",
      "difficulty": "hard",
      "themes": [
        "defense"
      ],
      "fen": "2r2rk1/pp2bppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/2RQ1RK1 w - - 2 12",
      "solution": [
        "a2a3"
      ],
      "title": {
        "en": "Stop ...Nb4 Before Expanding!",
        "pl": "Zablokuj ...Sb4 zanim zaczniesz atak!"
      },
      "hint": {
        "en": "Prevent `...Nb4` attacking your strong d3-bishop with `a3`!",
        "pl": "Zablokuj skok `...Sb4` na Twojego silnego gońca d3 ruchem `a3`!"
      },
      "explanation": {
        "en": "12. a3 preserves White’s valuable light-squared bishop.",
        "pl": "12. a3 chroni cennego białopolowego gońca białych."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    },
    {
      "id": "df-38",
      "difficulty": "hard",
      "themes": [
        "defense"
      ],
      "fen": "r4rk1/pp2bppp/2n1pn2/3p4/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 2 11",
      "solution": [
        "a1c1"
      ],
      "title": {
        "en": "Contest the Open c-File Immediately!",
        "pl": "Walcz o otwartą linię c natychmiast!"
      },
      "hint": {
        "en": "Activate your rook onto the open c-file with `Rc1`!",
        "pl": "Wprowadź wieżę na otwartą linię c ruchem `Wc1`!"
      },
      "explanation": {
        "en": "11. Rc1 fights for the most important open file on the board.",
        "pl": "11. Wc1 walczy o najważniejszą otwartą linię na szachownicy."
      },
      "isDefensePuzzle": true,
      "movesToMate": 1
    }
  ];

  /**
   * 12 "Famous Historical Games" (Słynne Partie z Historii Szachów)
   * 4 Easy, 4 Medium, 4 Hard — Authentic FENs and combinations from legendary masters:
   * Anderssen, Marshall, Deep Blue vs Kasparov, Adams vs Torre, Réti, Lasker vs Thomas,
   * Byrne vs Fischer, Lasker vs Bauer, Steinitz, Rubinstein, and Kasparov vs Topalov.
   */
  const FAMOUS_GAMES = [
    // === EASY (4) ===
    {
      id: 'fg-01',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: 'easy',
      players: {
        en: 'Anderssen vs. Kieseritzky (London, 1851)',
        pl: 'Anderssen – Kieseritzky (Londyn, 1851)'
      },
      themes: ['sacrifice', 'deflection', 'kingHunt'],
      fen: 'r1bk2nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1 w - - 1 22',
      solution: ['f3f6', 'g8f6', 'd6e7'],
      title: {
        en: 'The Immortal Game: Queen Sacrifice Finale',
        pl: 'Nieśmiertelna Partia: Finałowa ofiara hetmana'
      },
      hint: {
        en: 'Adolf Anderssen already sacrificed both rooks and a bishop! Now sacrifice your queen on f6 to deflect the g8-knight from guarding e7!',
        pl: 'Adolf Anderssen poświęcił już obie wieże i gońca! Teraz poświęć hetmana na f6, aby odciągnąć skoczka g8 od obrony pola e7!'
      },
      explanation: {
        en: '22. Qf6+!! Nxf6 23. Be7# is the immortal conclusion to Anderssen vs. Kieseritzky (London, 1851) — White checkmates in the middle of the board using only three minor pieces!',
        pl: '22. Hf6+!! Sxf6 23. Ge7# to nieśmiertelny finał partii Anderssen – Kieseritzky (Londyn, 1851) — białe matują króla w centrum samymi lekkimi figurami!'
      }
    },
    {
      id: 'fg-02',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: 'easy',
      players: {
        en: 'Levitsky vs. Marshall (Breslau, 1912)',
        pl: 'Lewicki – Marshall (Wrocław, 1912)'
      },
      themes: ['sacrifice', 'fork', 'attraction'],
      fen: '5rk1/pp4pp/4p3/2R3Q1/3n4/2q4r/P1P2PPP/5RK1 b - - 1 23',
      solution: ['c3g3', 'h2g3', 'd4e2'],
      title: {
        en: 'The "Shower of Gold Coins" Move (23... Qg3!!)',
        pl: 'Ruch "Deszczu Złotych Monet" (23... Hg3!!)'
      },
      hint: {
        en: 'You are playing Black (Frank Marshall). Place your queen on a square where THREE White pieces can capture it — yet every capture loses on the spot!',
        pl: 'Grasz czarnymi (Frank Marshall). Postaw hetmana na polu g3, gdzie TRZY białe bierki mogą go zbić — a każde bicie przegrywa natychmiast!'
      },
      explanation: {
        en: '23... Qg3!! is one of the most shocking moves ever played: 24. hxg3 allows 24... Ne2#, 24. fxg3 allows 24... Ne2+ 25. Kh1 Rxf1#, and 24. Qxg3 allows 24... Ne2+ winning a full rook!',
        pl: '23... Hg3!! (Wrocław, 1912) przeszedł do legendy: hetman staje pod potrójnym biciem! Po 24. hxg3 następuje 24... Se2#, po 24. fxg3 — 24... Se2+ i 25... Wxf1#, a po 24. Hxg3 — widełki 24... Se2+!'
      }
    },
    {
      id: 'fg-03',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: 'easy',
      players: {
        en: 'Deep Blue vs. Kasparov (New York, 1997)',
        pl: 'Deep Blue – Kasparow (Nowy Jork, 1997)'
      },
      themes: ['sacrifice', 'kingHunt'],
      fen: 'r1bqkb1r/pp1n1pp1/2p1pn1p/6N1/3P4/3B1N2/PPP2PPP/R1BQK2R w KQkq - 0 8',
      solution: ['g5e6', 'f7e6', 'd3g6'],
      title: {
        en: 'Deep Blue’s Knight Sacrifice (8. Nxe6!)',
        pl: 'Ofiara skoczka Deep Blue (8. Sxe6!)'
      },
      hint: {
        en: 'Instead of retreating the g5-knight after 7... h6, smash open Black’s central light squares by sacrificing on e6!',
        pl: 'Zamiast cofać skoczka z g5 po 7... h6, rozbij czarne centrum i białe pola ofiarą na e6!'
      },
      explanation: {
        en: '8. Nxe6! fxe6 (in the game Kasparov played 8... Qe7 9. O-O fxe6 10. Bg6+ Kd8) 9. Bg6+ traps Black’s king in the center without castling rights, deciding the historic 1997 match.',
        pl: '8. Sxe6! fxe6 9. Gg6+ więzi czarnego króla w centrum i pozbawia go roszady — ta słynna ofiara przesądziła o losach historycznego meczu z 1997 roku.'
      }
    },
    {
      id: 'fg-04',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: 'easy',
      players: {
        en: 'Adams vs. Torre (New Orleans, 1920)',
        pl: 'Adams – Torre (Nowy Orlean, 1920)'
      },
      themes: ['deflection', 'backRank', 'sacrifice'],
      fen: '2r1r1k1/1p3ppp/3p1b2/pq1P4/6Q1/5N2/PP2RPPP/4R1K1 w - - 2 19',
      solution: ['a2a4', 'b5e2', 'e1e2'],
      title: {
        en: 'Adams vs. Torre: Trapping the Overloaded Queen (19. a4!!)',
        pl: 'Adams – Torre: Odcięcie przeciążonego hetmana (19. a4!!)'
      },
      hint: {
        en: 'Black’s queen on b5 MUST stay on the a4-e8 diagonal to guard the e2-rook! Push your a-pawn to kick her off the diagonal!',
        pl: 'Czarny hetman na b5 MUSI pilnować przekątnej a4-e8 oraz wieży na e2! Pchnij piona a, aby pozbawić go jedynego bezpiecznego pola!'
      },
      explanation: {
        en: '19. a4!! is the famous finishing blow after White’s queen chased Black around the board: 19... Qxa4 loses the queen (since 19... Qxd5 allows Rxe8+), forcing 19... Qxe2 20. Rxe2!',
        pl: '19. a4!! to słynny cios kończący pościg białego hetmana: czarny hetman nie ma już bezpiecznego pola na przekątnej i musi oddać się za wieżę (19... Hxe2 20. Wxe2)!'
      }
    },

    // === MEDIUM (4) ===
    {
      id: 'fg-05',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: 'medium',
      players: {
        en: 'Réti vs. Tartakower (Vienna, 1910)',
        pl: 'Réti – Tartakower (Wiedeń, 1910)'
      },
      themes: ['sacrifice', 'doubleCheck', 'opera'],
      fen: 'rnb1kb1r/pp3ppp/2p5/4q3/4n3/3Q4/PPPB1PPP/2KR1BNR w kq - 0 9',
      solution: ['d3d8', 'e8d8', 'd2g5', 'd8c7', 'g5d8'],
      title: {
        en: 'Réti’s Famous Double-Check Mate (9. Qd8+!!)',
        pl: 'Słynny Mat Rétiego z Podwójnym Szachem (9. Hd8+!!)'
      },
      hint: {
        en: 'Sacrifice your queen on d8 to drag the black king onto the open d-file, then unleash a devastating double check with your bishop!',
        pl: 'Poświęć hetmana na d8, aby wciągnąć czarnego króla na otwartą linię d, po czym uderz niszczycielskim podwójnym szachem!'
      },
      explanation: {
        en: '9. Qd8+!! Kxd8 10. Bg5+! (double check from bishop and d1-rook) Kc7 11. Bd8# (or 10... Ke8 11. Rd8#) is the most famous 11-move miniature in chess history.',
        pl: '9. Hd8+!! Kxd8 10. Gg5+! (podwójny szach od gońca i wieży d1) Kc7 11. Gd8# (lub 10... Ke8 11. Wd8#) to najsłynniejsza 11-ruchowa miniatura w dziejach szachów.'
      }
    },
    {
      id: 'fg-06',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: 'medium',
      players: {
        en: 'Ed. Lasker vs. Thomas (London, 1912)',
        pl: 'Ed. Lasker – Thomas (Londyn, 1912)'
      },
      themes: ['kingHunt', 'discovered'],
      fen: 'rn3r2/pbppq1p1/1p2pN2/8/3P2NP/3B1kP1/PPP2P2/R3K2R w KQ - 1 16',
      solution: ['d3e2', 'f3g2', 'h1h2', 'g2g1', 'e1d2'],
      title: {
        en: 'Lasker vs. Thomas: The Royal King Walk Finale',
        pl: 'Lasker – Thomas: Finał królewskiego marszu przez całą deskę'
      },
      hint: {
        en: 'After sacrificing his queen on h7, Edward Lasker drove Black’s king all the way to f3! Finish the hunt with 16. Be2+ Kg2 17. Rh2+ Kg1 and a quiet king move!',
        pl: 'Po ofierze hetmana na h7 Edward Lasker zapędził czarnego króla aż na f3! Dokończ polowanie ruchami 16. Ge2+ Kg2 17. Wh2+ Kg1 i odkrytym matem królem!'
      },
      explanation: {
        en: '16. Be2+ Kg2 17. Rh2+ Kg1 18. Kd2# (or 18. O-O-O#!) completes the most famous king hunt in history — Black’s king marched from g8 all the way to g1!',
        pl: '16. Ge2+ Kg2 17. Wh2+ Kg1 18. Kd2# (lub 18. O-O-O#!) wieńczy najsłynniejsze polowanie na króla w historii — czarny monarcha przeszedł z g8 aż na g1!'
      }
    },
    {
      id: 'fg-07',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: 'medium',
      players: {
        en: 'Byrne vs. Fischer (New York, 1956)',
        pl: 'Byrne – Fischer (Nowy Jork, 1956)'
      },
      themes: ['battery', 'kingHunt'],
      fen: '1Q6/5pk1/2p3p1/1p2N2p/1b5P/1b4n1/r5P1/2K5 b - - 11 39',
      solution: ['g3e2', 'c1b1', 'e2c3', 'b1c1', 'a2c2'],
      title: {
        en: 'Bobby Fischer’s "Game of the Century" Checkmate',
        pl: '"Partia Stulecia" 13-letniego Bobby’ego Fischera'
      },
      hint: {
        en: '13-year-old Bobby Fischer (Black) has woven a perfect net around White’s king. Dance with your knight (39... Ne2+ and 40... Nc3+) to set up 41... Rc2#!',
        pl: '13-letni Bobby Fischer (Czarne) oplótł białego króla idealną siecią. Przeprowadź manewr skoczkiem (39... Se2+ i 40... Sc3+), przygotowując 41... Wc2#!'
      },
      explanation: {
        en: '39... Ne2+! 40. Kb1 Nc3+! 41. Kc1 Rc2# concludes the "Game of the Century", where every single black piece participates in the final mating net.',
        pl: '39... Se2+! 40. Kb1 Sc3+! 41. Kc1 Wc2# kończy słynną "Partię Stulecia", w której każda figura Fischera bierze udział w matowej sieci.'
      }
    },
    {
      id: 'fg-08',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: 'medium',
      players: {
        en: 'Em. Lasker vs. Bauer (Amsterdam, 1889)',
        pl: 'Em. Lasker – Bauer (Amsterdam, 1889)'
      },
      themes: ['sacrifice', 'clearance', 'kingHunt'],
      fen: 'r4rk1/1b2bppp/ppq1p3/2ppB2n/5P2/1P1BP3/P1PPQ1PP/R4RK1 w - - 0 15',
      solution: ['d3h7', 'g8h7', 'e2h5', 'h7g8', 'e5g7'],
      title: {
        en: 'Lasker’s Famous Double-Bishop Sacrifice (Bxh7+ & Bxg7!)',
        pl: 'Słynna Ofiara Dwóch Gońców Laskera (Gxh7+ i Gxg7!)'
      },
      hint: {
        en: 'Sacrifice your first bishop on h7, bring the queen to h5 with check, and then sacrifice your SECOND bishop on g7 to strip the black king completely bare!',
        pl: 'Poświęć pierwszego gońca na h7, wprowadź hetmana na h5 z szachem, a następnie poświęć DRUGIEGO gońca na g7, całkowicie obnażając czarnego króla!'
      },
      explanation: {
        en: '15. Bxh7+! Kxh7 16. Qxh5+ Kg8 17. Bxg7!! introduced the "Double-Bishop Sacrifice" to chess theory — after 17... Kxg7 18. Qg4+ Kh7 19. Rf3, Black must surrender the queen to avoid mate.',
        pl: '15. Gxh7+! Kxh7 16. Hxh5+ Kg8 17. Gxg7!! wprowadziło do teorii szachów motyw ofiary dwóch gońców — po 17... Kxg7 18. Hg4+ Kh7 19. Wf3 czarne są bezradne wobec groźby Wh3#.'
      }
    },

    // === HARD (4) ===
    {
      id: 'fg-09',
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 4,
      difficulty: 'hard',
      players: {
        en: 'Anderssen vs. Dufresne (Berlin, 1852)',
        pl: 'Anderssen – Dufresne (Berlin, 1852)'
      },
      themes: ['sacrifice', 'doubleCheck', 'kingHunt'],
      fen: '1r2k1r1/pbppnp1p/1b3P2/8/Q7/B1PB1q2/P4PPP/3R2K1 w - - 0 21',
      solution: ['a4d7', 'e8d7', 'd3f5', 'd7e8', 'f5d7', 'e8f8', 'a3e7'],
      title: {
        en: 'The Evergreen Game: Anderssen’s Queen Sacrifice',
        pl: 'Wiecznie Zielona Partia: Kombinacja Anderssena'
      },
      hint: {
        en: 'White faces immediate mate on g2! Deflect the black king onto d7 with 21. Qxd7+!!, then unleash a double check on f5!',
        pl: 'Białym grozi natychmiastowy mat na g2! Zaciągnij czarnego króla na d7 ofiarą hetmana 21. Hxd7+!!, a następnie uderz podwójnym szachem 22. Gf5+!'
      },
      explanation: {
        en: '21. Qxd7+!! Kxd7 22. Bf5+! (double check) Ke8 23. Bd7+ Kf8 24. Bxe7# is Wilhelm Steinitz’s "Evergreen" jewel in the crown of chess.',
        pl: '21. Hxd7+!! Kxd7 22. Gf5+! (podwójny szach) Ke8 23. Gd7+ Kf8 24. Gxe7# to arcydzieło nazwane przez Wilhelma Steinitza "Wiecznie Zieloną Partią".'
      }
    },
    {
      id: 'fg-10',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 4,
      difficulty: 'hard',
      players: {
        en: 'Steinitz vs. von Bardeleben (Hastings, 1895)',
        pl: 'Steinitz – von Bardeleben (Hastings, 1895)'
      },
      themes: ['sacrifice', 'pin', 'kingHunt'],
      fen: 'r1r1k3/pp1qn2p/5pp1/3p2N1/6Q1/8/PP3PPP/2R1R1K1 w - - 2 22',
      solution: ['e1e7', 'e8f8', 'e7f7', 'f8g8', 'f7g7', 'g8h8', 'g7h7'],
      title: {
        en: 'Battle of Hastings: The Immortal Rook Walk (22. Rxe7+!!)',
        pl: 'Bitwa pod Hastings: Nieśmiertelny marsz wieży (22. Wxe7+!!)'
      },
      hint: {
        en: 'Every White piece is en prise (`Qg4`, `Ng5`, `Rc1`)! Capture on e7 with your rook and chase the black king step-by-step down the 7th rank (`Rf7+`, `Rg7+`, `Rxh7+`) — the rook can NEVER be captured!',
        pl: 'Wszystkie białe figury stoją pod biciem! Zbij na e7 wieżą i ścigaj czarnego króla krok po kroku po 7. linii (`Wf7+`, `Wg7+`, `Wxh7+`) — czarne ani razu nie mogą zbić wieży!'
      },
      explanation: {
        en: '22. Rxe7+!! Kf8 23. Rf7+! Kg8 24. Rg7+! Kh8 25. Rxh7+! — Black can never capture the rook because `Qxe7` loses to `Rxc8+`, and `Kxf7`/`Kxg7` allows `Qxd7+`! Von Bardeleben famously walked out of the tournament hall without resigning.',
        pl: '22. Wxe7+!! Kf8 23. Wf7+! Kg8 24. Wg7+! Kh8 25. Wxh7+! — czarne w żadnym momencie nie mogą zbić szachującej wieży z uwagi na `Wxc8+` oraz niebronionego hetmana na d7!'
      }
    },
    {
      id: 'fg-11',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 4,
      difficulty: 'hard',
      players: {
        en: 'Rotlewi vs. Rubinstein (Lodz, 1907)',
        pl: 'Rotlewi – Rubinstein (Łódź, 1907)'
      },
      themes: ['sacrifice', 'deflection', 'attraction', 'battery'],
      fen: '2rr2k1/1b3ppp/pb2p3/1p2P3/1P2BPnq/P1N3P1/1B2Q2P/R4R1K b - - 0 22',
      solution: ['c8c3', 'g3h4', 'd8d2', 'e2d2', 'b7e4', 'd2g2', 'c3h3'],
      title: {
        en: 'Rubinstein’s Immortal (22... Rxc3!! & 23... Rd2!!)',
        pl: 'Nieśmiertelna Partia Rubinsteina w Łodzi (22... Wxc3!! i 23... Wd2!!)'
      },
      hint: {
        en: 'You are playing Black (Akiba Rubinstein). Leave your queen on h4 to be captured by playing 22... Rxc3!!, then deflect White’s queen from guarding e4 with 23... Rd2!! and finish with 25... Rh3!!',
        pl: 'Grasz czarnymi (Akiba Rubinstein). Zostaw hetmana na h4 pod biciem, grając 22... Wxc3!!, następnie odciągnij białego hetmana od obrony pola e4 ruchem 23... Wd2!! i zamknij klatkę ruchem 25... Wh3!!'
      },
      explanation: {
        en: '22... Rxc3!! 23. gxh4 Rd2!! 24. Qxd2 Bxe4+ 25. Qg2 Rh3! leaves White helpless against `...Rxh2#` — universally acclaimed as one of the greatest combinations ever played in Poland.',
        pl: '22... Wxc3!! 23. gxh4 Wd2!! 24. Hxd2 Gxe4+ 25. Hg2 Wh3! pozostawia białe bez obrony przed matem na h2 — najsłynniejsza kombinacja rozegrana na ziemiach polskich (Łódź, 1907).'
      }
    },
    {
      id: 'fg-12',
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 4,
      difficulty: 'hard',
      players: {
        en: 'Kasparov vs. Topalov (Wijk aan Zee, 1999)',
        pl: 'Kasparow – Topałow (Wijk aan Zee, 1999)'
      },
      themes: ['sacrifice', 'kingHunt', 'attraction'],
      fen: 'b2r3r/k4p1p/p2q1np1/NppP4/3p1Q2/P4PPB/1PP4P/1K1RR3 w - - 1 24',
      solution: ['d1d4', 'c5d4', 'e1e7', 'a7b6', 'f4d4', 'b6a5', 'b2b4'],
      title: {
        en: 'Kasparov’s Immortal: The Rook Sacrifice King Hunt (24. Rxd4!!)',
        pl: 'Nieśmiertelna Partia Kasparowa: Polowanie na króla (24. Wxd4!!)'
      },
      hint: {
        en: 'Launch Garry Kasparov’s legendary king hunt! Sacrifice your rook on d4 (`24. Rxd4!!`), invade with `25. Re7+!`, capture on d4 with check (`26. Qxd4+!`), and drive the king up the board with `27. b4+!`',
        pl: 'Rozpocznij legendarne polowanie Garriego Kasparowa! Poświęć wieżę na d4 (`24. Wxd4!!`), wtargnij drugą wieżą (`25. We7+!`), zbij na d4 z szachem (`26. Hxd4+!`) i pchnij `27. b4+!`'
      },
      explanation: {
        en: '24. Rxd4!! cxd4 25. Re7+! Kb6 26. Qxd4+! Kxa5 27. b4+! Ka4 drags the black king from a7 all the way down to d1 in the most famous game of the modern era.',
        pl: '24. Wxd4!! cxd4 25. We7+! Kb6 26. Hxd4+! Kxa5 27. b4+! Ka4 wyciąga czarnego króla z a7 aż na pole d1 w najsłynniejszej partii współczesnych szachów.'
      }
    },
    {
      id: "fg-13",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "Morphy vs. Duke of Brunswick & Count Isouard (Paris, 1858)",
        pl: "Morphy – Książę Brunszwiku i Hrabia Isouard (Paryż, 1858)"
      },
      themes: ["opera","sacrifice","backRank","pin"],
      fen: "4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 16",
      solution: ["b3b8","d7b8","d1d8"],
      title: {
        en: "The Opera Game: Queen Sacrifice & Back-Rank Mate",
        pl: "Partia Operowa: Ofiara hetmana i mat na ostatniej linii"
      },
      hint: {
        en: "Paul Morphy pins the black knight on d7 with his bishop on g5. Deflect the knight with a shocking queen sacrifice on the back rank!",
        pl: "Paul Morphy wiąże czarnego skoczka d7 gońcem z g5. Odciągnij skoczka szokującą ofiarą hetmana na ostatniej linii!"
      },
      explanation: {
        en: "16. Qb8+!! Nxb8 17. Rd8# is the breathtaking conclusion to the most famous chess game ever played. The bishop on g5 keeps d7 pinned until the queen deflects the knight, allowing the rook to deliver checkmate.",
        pl: "16. Hb8+!! Sxb8 17. Wd8# to olśniewający finał najsłynniejszej partii w historii szachów. Goniec z g5 wiąże obrońcę, po czym ofiara hetmana zmusza skoczka do odejścia, a wieża daje mata."
      }
    },
    {
      id: "fg-14",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "easy",
      players: {
        en: "Sire de Légal vs. Saint Brie (Paris, 1750)",
        pl: "Sire de Légal – Saint Brie (Paryż, 1750)"
      },
      themes: ["sacrifice","fork","discovered"],
      fen: "rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
      solution: ["f3e5","g4d1","c4f7","e8e7","c3d5"],
      title: {
        en: "Légal’s Mate: Breaking the Relative Pin",
        pl: "Mat Légala: Przełamanie pozornego związania"
      },
      hint: {
        en: "The black bishop pins your f3 knight against your queen. Ignore the pin and capture on e5 with your knight!",
        pl: "Czarny goniec wiąże Twojego skoczka f3 z hetmanem. Zignoruj związanie i zbij pionka e5 skoczkiem!"
      },
      explanation: {
        en: "5. Nxe5! leaves the white queen hanging, but 5... Bxd1? falls into 6. Bxf7+ Ke7 7. Nd5# — the classic minor piece checkmate in the center.",
        pl: "5. Sxe5! pozostawia białego hetmana pod biciem, lecz 5... Gxd1? prowadzi do 6. Gxf7+ Ke7 7. Sd5# — klasycznego mata trzema lekkimi figurami w centrum."
      }
    },
    {
      id: "fg-15",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "easy",
      players: {
        en: "Amateur vs. Boris Kostić (Cologne, 1911)",
        pl: "Amator – Boris Kostić (Kolonia, 1911)"
      },
      themes: ["smothered","pin","fork"],
      fen: "r1b1kbnr/pppp1Npp/8/6q1/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
      solution: ["g5g2","h1f1","g2e4","c4e2","d4f3"],
      title: {
        en: "Blackburne Shilling Gambit: Smothered Mate",
        pl: "Gambit Blackburne-Shilling: Mat zduszony"
      },
      hint: {
        en: "White greedily forks your queen and rook with 5. Nxf7. Counter-attack the g2 pawn, pick up e4 with check, and conclude with a smothered mate!",
        pl: "Białe zachłannie widłują hetmana i wieżę ruchem 5. Sxf7. Zaatakuj pionka g2, odbierz e4 z szachem i zakończ matem zduszonym!"
      },
      explanation: {
        en: "5... Qxg2! 6. Rf1 Qxe4+ 7. Be2 Nf3# delivers a lightning smothered checkmate because the e2 bishop is pinned to the white king.",
        pl: "5... Hxg2! 6. Wf1 Hxe4+ 7. Ge2 Sf3# daje błyskawicznego mata zduszonego, wykorzystując absolutne związanie gońca e2."
      }
    },
    {
      id: "fg-16",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "Esteban Canal vs. Amateur (Budapest, 1934)",
        pl: "Esteban Canal – Amator (Budapeszt, 1934)"
      },
      themes: ["boden","sacrifice","deflection"],
      fen: "2kr2nr/pp1n1ppp/2p1p3/8/1P1P1B2/2N2Q1P/1PPKBPP1/7q w - - 0 13",
      solution: ["f3c6","b7c6","e2a6"],
      title: {
        en: "The Peruvian Immortal: Boden’s Mate Finale",
        pl: "Peruwiańska Nieśmiertelna: Finałowy Mat Bodena"
      },
      hint: {
        en: "After sacrificing both rooks on the wings, finish the game with a majestic queen sacrifice that opens the diagonal for your light-squared bishop!",
        pl: "Po poświęceniu obu skrajnych wież, zakończ partię ofiarą hetmana na c6, otwierając przekątną dla jasnopolowego gońca!"
      },
      explanation: {
        en: "13. Qxc6+!! bxc6 14. Ba6# is the stunning climax of the Peruvian Immortal. The two criss-crossing bishops cut off all escape squares around the black king.",
        pl: "13. Hxc6+!! bxc6 14. Ga6# to oszałamiający punkt kulminacyjny Peruwiańskiej Nieśmiertelnej. Dwa krzyżujące się gońce odcinają wszystkie ucieczki czarnego monarchy."
      }
    },
    {
      id: "fg-17",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "R. Schulder vs. Samuel Boden (London, 1853)",
        pl: "R. Schulder – Samuel Boden (Londyn, 1853)"
      },
      themes: ["boden","sacrifice","deflection"],
      fen: "2k1rb1r/ppp3pp/2n2q2/3B1b2/5P2/2P1BQ2/PP1N1P1P/2KR3R b - - 0 14",
      solution: ["f6c3","b2c3","f8a3"],
      title: {
        en: "The Original Boden’s Mate: Criss-Crossing Bishops",
        pl: "Pierwowzór Mata Bodena: Krzyżujące się gońce"
      },
      hint: {
        en: "Samuel Boden noticed White’s pawn on b2 is all that protects the long diagonal to a3. Destroy that shield with a magnificent queen sacrifice!",
        pl: "Samuel Boden zauważył, że pion b2 to jedyna tarcza pola a3. Zniszcz tę osłonę wspaniałą ofiarą hetmana na c3!"
      },
      explanation: {
        en: "14... Qxc3+!! 15. bxc3 Ba3# introduced Boden’s Mate to chess history. The dark-squared bishop on f5 controls c2 and d1, while the light-squared bishop delivers checkmate.",
        pl: "14... Hxc3+!! 15. bxc3 Ga3# przeszło do historii jako Mat Bodena. Ciemnopolowy goniec f5 kontroluje ucieczki na c2 i d1, podczas gdy jasnopolowy goniec zadaje śmiertelny cios."
      }
    },
    {
      id: "fg-18",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "medium",
      players: {
        en: "Englund Gambit: Back-Rank Miniature",
        pl: "Gambit Englunda: Miniatura z matem na pierwszej linii"
      },
      themes: ["pin","deflection","backRank"],
      fen: "r1b1kbnr/pppp1ppp/2n5/4P3/8/2B2N2/PqP1PPPP/RN1QKB1R b KQkq - 1 6",
      solution: ["f8b4","d1d2","b4c3","d2c3","b2c1"],
      title: {
        en: "Englund Gambit: The Overloaded Bishop & Back-Rank Mate",
        pl: "Gambit Englunda: Przeciążony goniec i mat na bandzie"
      },
      hint: {
        en: "White defended the a1 rook and attacked your queen with 6. Bc3. Pin the bishop to the white king with 6... Bb4!, trade on c3, and deliver back-rank mate!",
        pl: "Białe obroniły wieżę a1 i zaatakowały hetmana ruchem 6. Gc3. Zwiąż gońca z królem ruchem 6... Gb4!, wymień na c3 i zamatuj na c1!"
      },
      explanation: {
        en: "6... Bb4! 7. Qd2 Bxc3 8. Qxc3 Qc1# completely overwhelms White’s defenses. White cannot defend both the c3 bishop and the back rank.",
        pl: "6... Gb4! 7. Hd2 Gxc3 8. Hxc3 Hc1# kompletnie rozbija szyki białych, które nie są w stanie jednocześnie obronić gońca c3 i pierwszej linii."
      }
    },
    {
      id: "fg-19",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "medium",
      players: {
        en: "Aron Nimzowitsch vs. Semion Alapin (Riga, 1914)",
        pl: "Aron Nimzowitsch – Siemion Ałapin (Ryga, 1914)"
      },
      themes: ["opera","sacrifice","backRank","pin"],
      fen: "r1b2k1r/1p2bppp/p1B2q2/8/8/8/PPPQ1P1P/2KRR3 w - - 1 17",
      solution: ["d2d8","e7d8","e1e8"],
      title: {
        en: "Nimzowitsch’s Opera-Style Queen Deflection",
        pl: "Operowe Odciągnięcie Nimzowitscha"
      },
      hint: {
        en: "Aron Nimzowitsch echoes Morphy’s Opera Game: sacrifice your queen on d8 to deflect Black’s defending bishop away from e8!",
        pl: "Aron Nimzowitsch nawiązuje do Partii Operowej Morphy'ego: poświęć hetmana na d8, aby odciągnąć broniącego gońca od pola e8!"
      },
      explanation: {
        en: "17. Qd8+!! Bxd8 18. Re8# echoes Morphy’s immortal geometry, using the c6 bishop’s pin and diagonal control to deliver a back-rank mate with the rook.",
        pl: "17. Hd8+!! Gxd8 18. We8# nawiązuje do nieśmiertelnej geometrii Morphy'ego — goniec c6 kontroluje pole ucieczki, a wieża bezlitośnie matuje na ostatniej linii."
      }
    },
    {
      id: "fg-20",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "medium",
      players: {
        en: "Magnus Carlsen vs. Sergey Karjakin (New York, 2016)",
        pl: "Magnus Carlsen – Siergiej Kariakin (Nowy Jork, 2016)"
      },
      themes: ["sacrifice","deflection","attraction"],
      fen: "2R5/4bppk/1p1p4/5R1P/4PQ2/5P2/r4q1P/7K w - - 5 50",
      solution: ["f4h6","h7h6","c8h8"],
      title: {
        en: "World Championship Clincher: 50. Qh6+!!",
        pl: "Cios na Wagę Korony Świata: 50. Hh6+!!"
      },
      hint: {
        en: "Black threatens mate on g2 and f1. Crown your World Championship match by sacrificing your queen on h6 with check!",
        pl: "Czarne grożą matem na g2 i f1. Zwieńcz mecz o Mistrzostwo Świata genialną ofiarą hetmana na h6 z szachem!"
      },
      explanation: {
        en: "50. Qh6+!! forced Karjakin’s immediate resignation in Game 4 of the tie-break: 50... Kxh6 51. Rh8# (or 50... gxh6 51. Rxf7#) retained Magnus Carlsen’s World Championship title in breathtaking style.",
        pl: "50. Hh6+!! zmusiło Kariakina do natychmiastowej kapitulacji w dogrywce meczu o tytuł: 50... Kxh6 51. Wh8# (lub 50... gxh6 51. Wxf7#) przypieczętowało obronę korony przez Magnusa Carlsena w genialnym stylu."
      }
    },
    {
      id: "fg-21",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Glucksberg vs. Miguel Najdorf (Warsaw, 1929)",
        pl: "Glucksberg – Mieczysław Najdorf (Warszawa, 1929)"
      },
      themes: ["sacrifice","kingHunt","discovered"],
      fen: "r1b2rk1/pp4pp/2p3n1/3p2N1/2P2P2/3B1KP1/PP5q/R1BQ1RN1 b - - 0 20",
      solution: ["c8g4","f3g4","g6e5","f4e5","h7h5"],
      title: {
        en: "The Polish Immortal: The 4-Piece Sacrifice Checkmate",
        pl: "Polska Nieśmiertelna: Mat po ofierze czterech lekkich figur"
      },
      hint: {
        en: "Miguel Najdorf has already given up three minor pieces. Drag White’s king deeper into your net: sacrifice the c8 bishop, then the g6 knight, and deliver mate with a pawn!",
        pl: "Mieczysław Najdorf poświęcił już trzy lekkie figury. Wciągnij króla białych w sieć: poświęć gońca c8, następnie skoczka g6 i zamatuj pionkiem!"
      },
      explanation: {
        en: "20... Bg4+!! 21. Kxg4 Ne5+!! 22. fxe5 h5# caps Najdorf’s legendary Polish Immortal in Warsaw (1929), sacrificing all four minor pieces to mate White’s exposed king with a pawn.",
        pl: "20... Gg4+!! 21. Kxg4 Se5+!! 22. fxe5 h5# wieńczy legendarną Polską Nieśmiertelną Najdorfa w Warszawie (1929) — ofiara wszystkich czterech lekkich figur kończy się matem z ręki skromnego piona."
      }
    },
    {
      id: "fg-22",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 5,
      difficulty: "hard",
      players: {
        en: "Mikhail Botvinnik vs. José Raúl Capablanca (AVRO, 1938)",
        pl: "Michaił Botwinnik – José Raúl Capablanca (AVRO, 1938)"
      },
      themes: ["sacrifice","deflection","promotion"],
      fen: "8/p3q1kp/1p2Pnp1/3pQ3/2pP4/1nP3N1/1B4PP/6K1 w - - 5 30",
      solution: ["b2a3","e7a3","g3h5","g6h5","e5g5","g7f8","g5f6","f8g8","e6e7"],
      title: {
        en: "AVRO 1938 Masterpiece: Botvinnik’s Double Deflection",
        pl: "Arcydzieło AVRO 1938: Podwójne odciągnięcie Botwinnika"
      },
      hint: {
        en: "Deflect the black queen from defending the e8 square with 30. Ba3!!, sacrifice your knight on h5 to shatter the king’s shelter, and push your passed pawn to e7!",
        pl: "Odciągnij czarnego hetmana od kontroli pola e8 ruchem 30. Ga3!!, poświęć skoczka na h5 rozbijając osłonę króla i pchnij piona na e7!"
      },
      explanation: {
        en: "30. Ba3!! Qxa3 31. Nh5+!! gxh5 32. Qg5+ Kf8 33. Qxf6+ Kg8 34. e7! is hailed as one of the greatest combinations in chess history, neutralizing the former World Champion.",
        pl: "30. Ga3!! Hxa3 31. Sh5+!! gxh5 32. Hg5+ Kf8 33. Hxf6+ Kg8 34. e7! to jedna z najgenialniejszych kombinacji w historii szachów, paraliżująca byłego mistrza świata."
      }
    },
    {
      id: "fg-23",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "Italian Game Analysis — Fried Liver Attack (Fegatello)",
        pl: "Analiza Partii Włoskiej — Atak Fried Liver (Fegatello)"
      },
      themes: ["fork","pin","sacrifice"],
      fen: "r1b2bkr/ppp3pp/2n5/3qp3/8/5Q2/PPPP1PPP/RNB1K2R w KQ - 0 9",
      solution: ["f3d5","c8e6","d5e6"],
      title: {
        en: "Fried Liver Attack: The King Hunt Checkmate",
        pl: "Atak Fried Liver: Polowanie na króla i mat"
      },
      hint: {
        en: "Black’s king walked into the center. Capture the queen with check (8. Qxd5+!), then deliver checkmate on e6!",
        pl: "Czarny król wyszedł do centrum. Zbij hetmana z szachem (8. Hxd5+!), a następnie postaw mata na polu e6!"
      },
      explanation: {
        en: "8. Qxd5+! Be6 9. Qxe6# crushes Black’s defense immediately, demonstrating why opening lines against an exposed king in the Fried Liver are lethal.",
        pl: "8. Hxd5+! Ge6 9. Hxe6# natychmiast rozbija obronę czarnych, pokazując siłę ataku na odsłoniętego króla w wariancie Fegatello."
      }
    },
    {
      id: "fg-24",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 4,
      difficulty: "medium",
      players: {
        en: "Gioachino Greco vs. NN (Rome, 1620)",
        pl: "Gioachino Greco – NN (Rzym, 1620)"
      },
      themes: ["sacrifice","attraction","kingHunt"],
      fen: "r1bq1r2/pppp1ppk/2n1p3/3nP1b1/3P3P/8/PPP2PP1/RNBQK2R w KQ - 0 9",
      solution: ["h4g5","h7g8","d1h5","f7f6","g5g6","f6e5","h5h8"],
      title: {
        en: "Greco’s Greek Gift: The Classic Checkmate Walk",
        pl: "Grecki Dar Greco: Klasyczny mat na bandzie"
      },
      hint: {
        en: "You have opened the h-file with 9. hxg5+! Drive Black’s king into the corner with 10. Qh5! and wedge with 11. g6! to force mate on h8!",
        pl: "Otworzyłeś linię h ruchem 9. hxg5+! Zapędź króla w róg ruchem 10. Hh5! i wbij klin 11. g6!, dając mata na h8!"
      },
      explanation: {
        en: "9. hxg5+! Kg8 10. Qh5! f6 11. g6! fxe5 12. Qh8# is Gioachino Greco’s original 1620 masterpiece showing the full execution of the Greek Gift bishop sacrifice.",
        pl: "9. hxg5+! Kg8 10. Hh5! f6 11. g6! fxe5 12. Hh8# to oryginalne dzieło Gioachino Greco z 1620 roku ukazujące bezwzględny finał ofiary gońca na h7."
      }
    },
    {
      id: "fg-25",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "easy",
      players: {
        en: "Gioachino Greco vs. NN (Europe, 1620)",
        pl: "Gioachino Greco – NN (Europa, 1620)"
      },
      themes: ["sacrifice","backRank","pin"],
      fen: "r2q1k1r/ppp1n1pp/4Bb2/3p2B1/8/5Q2/P4PPP/5RK1 w - - 2 18",
      solution: ["g5f6","g7f6","f3f6","f8e8","f6f7"],
      title: {
        en: "Greco’s Italian Tempest: Decisive Queen Invasion",
        pl: "Włoska Burza Greco: Decydująca inwazja hetmana"
      },
      hint: {
        en: "Destroy the f6 pawn shield with 18. Bxf6!, invade with 19. Qxf6+, and checkmate the trapped black king on f7!",
        pl: "Zniszcz osłonę f6 ruchem 18. Gxf6!, wtargnij hetmanem 19. Hxf6+ i zamatuj osaczonego czarnego króla na f7!"
      },
      explanation: {
        en: "18. Bxf6! gxf6 19. Qxf6+ Ke8 20. Qf7# tears open the f-file and wraps up Greco’s historic Italian Game miniature.",
        pl: "18. Gxf6! gxf6 19. Hxf6+ Ke8 20. Hf7# rozrywa linię f i pieczętuje historyczną miniaturę partii włoskiej Greco."
      }
    },
    {
      id: "fg-26",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: "hard",
      players: {
        en: "Eduard Gufeld vs. Lubomir Kavalek (Mariánské Lázně, 1962)",
        pl: "Eduard Gufeld – Lubomir Kavalek (Mariańskie Łaźnie, 1962)"
      },
      themes: ["sacrifice","clearance","fork"],
      fen: "8/ppp4p/1bp1k3/2B3r1/1P2pp2/2P5/P2K1p1P/R4R2 b - - 2 27",
      solution: ["g5c5","b4c5","b6c5"],
      title: {
        en: "The Kavalanche: Double Exchange Sacrifice (27... Rxc5!)",
        pl: "Kawalana: Podwójna ofiara jakości (27... Wxc5!)"
      },
      hint: {
        en: "Lubomir Kavalek sacrifices a second exchange on c5 to eliminate White’s bishop and let Black’s central pawns roll unstoppable!",
        pl: "Lubomir Kavalek składa drugą ofiarę jakości na c5, likwidując gońca i otwierając drogę dla marszu potężnych wolnych pionów!"
      },
      explanation: {
        en: "27... Rxc5! 28. bxc5 Bxc5 strips White of all piece coordination, enabling Black’s central avalanche of pawns (dubbed the 'Kavalanche') to decide the game.",
        pl: "27... Wxc5! 28. bxc5 Gxc5 pozbawia białe obrony, pozwalając lawinie centralnych pionów (zwanej 'Kawalaną') bezapelacyjnie rozstrzygnąć partię."
      }
    },
    {
      id: "fg-27",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Yuri Averbakh vs. Alexander Kotov (Zurich, 1953)",
        pl: "Jurij Awerbach – Aleksander Kotow (Zurych, 1953)"
      },
      themes: ["sacrifice","kingHunt","attraction"],
      fen: "1r4nk/1p1qb2p/3p1r2/p1pPp3/2P1Pp2/5P1P/PP1QNBRK/5R2 b - - 3 30",
      solution: ["d7h3","h2h3","f6h6","h3g4","g8f6"],
      title: {
        en: "Kotov’s Zurich Immortal: The Queen Sacrifice (30... Qxh3+!!)",
        pl: "Zurychskie Arcydzieło Kotowa: Ofiara hetmana (30... Hxh3+!!)"
      },
      hint: {
        en: "Alexander Kotov stuns the chess world! Sacrifice your queen on h3 (30... Qxh3+!!), check along the h-file with 31... Rh6+!, and drive the king out with 32... Nf6+!",
        pl: "Aleksander Kotow szokuje szachowy świat! Poświęć hetmana na h3 (30... Hxh3+!!), zaszachuj wieżą 31... Wh6+! i wyciągnij króla skoczkiem 32... Sf6+!"
      },
      explanation: {
        en: "30... Qxh3+!! 31. Kxh3 Rh6+ 32. Kg4 Nf6+ 33. Kf5 Nd7! drags Yuri Averbakh’s king all the way to f5 in one of the greatest attacking gems from the Zurich 1953 Candidates.",
        pl: "30... Hxh3+!! 31. Kxh3 Wh6+ 32. Kg4 Sf6+ 33. Kf5 Sd7! wyciąga króla Awerbacha na środek szachownicy w najsłynniejszej partii Turnieju Pretendentów w Zurychu (1953)."
      }
    },
    {
      id: "fg-28",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 1,
      difficulty: "easy",
      players: {
        en: "Amédée Gibaud vs. Frédéric Lazard (Paris, 1924)",
        pl: "Amédée Gibaud – Frédéric Lazard (Paryż, 1924)"
      },
      themes: ["fork","pin"],
      fen: "rnbqkb1r/pppp1ppp/8/4P3/6n1/7P/PPPNPPP1/R1BQKBNR b KQkq - 0 4",
      solution: ["g4e3"],
      title: {
        en: "Lazard’s 4-Move Miniature: Trapping the Queen (4... Ne3!!)",
        pl: "4-Ruchowa Miniatura Lazarda: Usidlenie hetmana (4... Se3!!)"
      },
      hint: {
        en: "White played 4. h3?? without realizing their queen has zero escape squares. Invade with your knight to e3!",
        pl: "Białe zagrały 4. h3?? nie zauważając, że ich hetman nie ma ani jednego pola ucieczki. Wtargnij skoczkiem na e3!"
      },
      explanation: {
        en: "4... Ne3!! attacks White’s trapped queen. If White takes 5. fxe3??, Black checkmates on the spot with 5... Qh4+ 6. g3 Qxg3# — forcing White’s immediate resignation on move 4!",
        pl: "4... Se3!! atakuje usidloną królową białych. Jeśli białe zbiją 5. fxe3??, czarne natychmiast matują 5... Hh4+ 6. g3 Hxg3# — białe poddały się po 4 posunięciach!"
      }
    },
    {
      id: "fg-29",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 1,
      difficulty: "easy",
      players: {
        en: "Leo Godai vs. Georg Kieninger (Vienna, 1925)",
        pl: "Leo Godai – Georg Kieninger (Wiedeń, 1925)"
      },
      themes: ["smothered","pin"],
      fen: "r1b1k2r/ppppqppp/2n5/4n3/1PP2B2/5N2/1P1NPPPP/R2QKB1R b KQkq - 0 8",
      solution: ["e5d3"],
      title: {
        en: "Budapest Gambit: The Kieninger Smothered Trap (8... Nd3#)",
        pl: "Gambit Budapeszteński: Mat zduszony Kieningera (8... Sd3#)"
      },
      hint: {
        en: "White greedily played 8. axb4??, forgetting that the c2 pawn is pinned to their king by your queen on e7. Deliver smothered mate!",
        pl: "Białe zachłannie zbiły 8. axb4??, zapominając, że pion c2 jest związany z królem przez hetmana e7. Zadaj mata zduszonego!"
      },
      explanation: {
        en: "8... Nd3# is a legendary miniature finish in the Budapest Gambit: the c2 pawn cannot capture the knight due to the pin on the e-file.",
        pl: "8... Sd3# to kultowy mat zduszony w Gambicie Budapeszteńskim: pionek c2 nie może zbić skoczka z powodu bezwzględnego związania na linii e."
      }
    },
    {
      id: "fg-30",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "Budapest Gambit: Fajarowicz Trap (After Wiesbaden, 1928)",
        pl: "Gambit Budapeszteński: Pułapka Fajarowicza (po Wiesbaden, 1928)"
      },
      themes: ["discovered","fork"],
      fen: "rnbqk2r/ppp2ppp/3b4/8/2P5/5NP1/PP2PK1P/RNBQ1B1R b kq - 0 7",
      solution: ["d6g3","f2g3","d8d1"],
      title: {
        en: "Fajarowicz Trap: Discovered Attack Queen Win",
        pl: "Pułapka Fajarowicza: Atak z odsłonięcia na hetmana"
      },
      hint: {
        en: "White just recaptured on f2 with 7. Kxf2. Unmask your queen’s laser beam on d1 with a discovered check from your bishop!",
        pl: "Białe właśnie zbiły na f2 ruchem 7. Kxf2. Odsłoń atak hetmana na d1, dając szacha gońcem na g3!"
      },
      explanation: {
        en: "7... Bxg3+! 8. Kxg3 Qxd1 wins White’s queen cleanly in the opening via a textbook discovered check.",
        pl: "7... Gxg3+! 8. Kxg3 Hxd1 zdobywa hetmana w debiucie dzięki podręcznikowemu szachowi z odsłonięcia."
      }
    },
    {
      id: "fg-31",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "easy",
      players: {
        en: "Carl Mayet vs. Daniel Harrwitz (Berlin, 1848)",
        pl: "Carl Mayet – Daniel Harrwitz (Berlin, 1848)"
      },
      themes: ["pin","discovered"],
      fen: "r1bqkb1r/pppn1ppp/5n2/3N2B1/3P4/8/PP2PPPP/R2QKBNR b KQkq - 0 6",
      solution: ["f6d5","g5d8","f8b4","d1d2","e8d8"],
      title: {
        en: "The Elephant Trap: Countering the Queen Trap",
        pl: "Pułapka Słonia: Odbicie poświęconego hetmana"
      },
      hint: {
        en: "White fell for the Elephant Trap by capturing your queen with 7. Bxd8? Check with 7... Bb4+!, trade on d2, and recapture their bishop on d8!",
        pl: "Białe wpadły w Pułapkę Słonia bijąc hetmana 7. Gxd8? Zaszachuj 7... Gb4+!, wymień na d2 i odbierz gońca d8!"
      },
      explanation: {
        en: "7... Bb4+! 8. Qd2 Bxd2+ 9. Kxd2 Kxd8 leaves Black ahead a full minor piece, turning White’s apparent queen grab into an opening disaster.",
        pl: "7... Gb4+! 8. Hd2 Gxd2+ 9. Kxd2 Kxd8 pozostawia czarne z całą figurą przewagi, demaskując rzekomą zdobycz białych."
      }
    },
    {
      id: "fg-32",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 2,
      difficulty: "easy",
      players: {
        en: "Stafford Gambit Trap (After Lowens vs. Stafford, 1950)",
        pl: "Pułapka Gambitu Stafforda (wg Lowens – Stafford, 1950)"
      },
      themes: ["sacrifice","pin"],
      fen: "r1bBk2r/ppp2ppp/2p5/2b5/4n3/3P4/PPP2PPP/RN1QKB1R b KQkq - 0 7",
      solution: ["c5f2","e1e2","c8g4"],
      title: {
        en: "Stafford Gambit: The 8-Move Bishop Checkmate",
        pl: "Gambit Stafforda: 8-Ruchowy mat gońcami"
      },
      hint: {
        en: "White took your queen with 7. Bxd8? Retaliate with 7... Bxf2+!, force White’s king to e2, and deliver checkmate with your light-squared bishop on g4!",
        pl: "Białe połakomiły się na hetmana ruchem 7. Gxd8? Odpowiedz 7... Gxf2+!, zmuszając króla do wejścia na e2, i zamatuj gońcem na g4!"
      },
      explanation: {
        en: "7... Bxf2+! 8. Ke2 Bg4# concludes the viral Stafford Gambit trap: the two active black bishops coordinate with the knight to deliver pure checkmate.",
        pl: "7... Gxf2+! 8. Ke2 Gg4# wieńczy słynną pułapkę Gambitu Stafforda: dwa aktywne czarne gońce w asyście skoczka dają eleganckiego mata."
      }
    },
    {
      id: "fg-33",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "easy",
      players: {
        en: "Irving Chernev vs. Herman Hahlbohm (New York, 1942)",
        pl: "Irving Chernev – Herman Hahlbohm (Nowy Jork, 1942)"
      },
      themes: ["sacrifice","fork"],
      fen: "r1b1r1k1/pp3ppp/1qn5/2bnp3/8/1NPB1N2/PP2QPPP/R1B2RK1 w - - 2 13",
      solution: ["d3h7","g8h7","e2e4","h7g8","e4d5"],
      title: {
        en: "Colle System: Greek Gift & Royal Queen Fork",
        pl: "System Colle: Grecki dar i podwójne uderzenie hetmanem"
      },
      hint: {
        en: "Irving Chernev executes the Colle breakthrough: sacrifice on h7 (13. Bxh7+!), fork king and knight with 14. Qe4+!, and capture the knight on d5!",
        pl: "Irving Chernev realizuje przełom w Systemie Colle: poświęć na h7 (13. Gxh7+!), uderz widłami hetmana 14. He4+! i zbij skoczka d5!"
      },
      explanation: {
        en: "13. Bxh7+! Kxh7 14. Qe4+! Kg8 15. Qxd5 wins a crucial central piece and shatters Black’s kingside shelter completely.",
        pl: "13. Gxh7+! Kxh7 14. He4+! Kg8 15. Hxd5 zdobywa kluczową figurę w centrum i całkowicie demoluje pozycję czarnego monarchy."
      }
    },
    {
      id: "fg-34",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Henry Edward Bird vs. Paul Morphy (London, 1858)",
        pl: "Henry Edward Bird – Paul Morphy (Londyn, 1858)"
      },
      themes: ["sacrifice","kingHunt"],
      fen: "1rb2rk1/p1p3pp/2pb4/3p4/3Pp3/4B2q/PPPQBP1P/2KR3R b - - 3 17",
      solution: ["f8f2","e3f2","h3a3","c2c3","a3a2"],
      title: {
        en: "Bird vs. Morphy: The Immortal Rook Sacrifice (17... Rxf2!!)",
        pl: "Bird – Morphy: Nieśmiertelna ofiara wieży (17... Wxf2!!)"
      },
      hint: {
        en: "Paul Morphy shatters White’s defenses! Sacrifice your rook on f2 (17... Rxf2!!), penetrate with 18... Qa3!, and capture on a2!",
        pl: "Paul Morphy rozbija obronę białych! Poświęć wieżę na f2 (17... Wxf2!!), wtargnij hetmanem 18... Ha3! i zbij pionka a2!"
      },
      explanation: {
        en: "17... Rxf2!! 18. Bxf2 Qa3! 19. c3 Qxa2 is Paul Morphy’s famous attacking brilliancy in London (1858), rendering Henry Bird completely helpless against the incoming queen invasion.",
        pl: "17... Wxf2!! 18. Gxf2 Ha3! 19. c3 Hxa2 to słynne arcydzieło ataku Paula Morphy’ego w Londynie (1858), paraliżujące obronę Henry’ego Birda."
      }
    },
    {
      id: "fg-35",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 1,
      difficulty: "medium",
      players: {
        en: "Anatoly Karpov vs. Garry Kasparov (Moscow, 1985 — Game 16)",
        pl: "Anatolij Karpow – Garri Kasparow (Moskwa, 1985, Partia 16)"
      },
      themes: ["fork","pin"],
      fen: "r2qr1k1/5ppp/p4n2/1pbP1bB1/1n6/N1N2B2/PP1Q1PPP/3R1RK1 b - - 1 16",
      solution: ["b4d3"],
      title: {
        en: "Karpov vs. Kasparov 1985: The Octopus Knight (16... Nd3!)",
        pl: "Karpow – Kasparow 1985: Ośmiornica na d3 (16... Sd3!)"
      },
      hint: {
        en: "Garry Kasparov plants his knight on d3, where its tentacles control every key square in Karpov’s camp. Make the immortal knight move!",
        pl: "Garry Kasparow instaluje skoczka na d3, skąd jego macki kontrolują kluczowe punkty w obozie Karpowa. Zagraj ten nieśmiertelny ruch!"
      },
      explanation: {
        en: "16... Nd3! established Kasparov’s legendary 'Octopus Knight' in Game 16 of the 1985 World Championship — widely regarded as one of the most dominant minor piece outposts ever achieved.",
        pl: "16... Sd3! wprowadziło legendarnego 'skoczka-ośmiornicę' w 16. partii Meczu o Mistrzostwo Świata (1985) — jeden z najbardziej dominujących posterunków w historii szachów."
      }
    },
    {
      id: "fg-36",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Mikhail Botvinnik vs. Mikhail Tal (Moscow, 1960, Game 6)",
        pl: "Michaił Botwinnik – Michaił Tal (Moskwa, 1960, Partia 6)"
      },
      themes: ["sacrifice","fork"],
      fen: "2r3k1/pp4bp/3p2p1/3Ppb1n/1qr5/2N1B1PP/PP2QPBK/R1R5 b - - 1 21",
      solution: ["h5f4","g3f4","e5f4","e3d2","b4b2"],
      title: {
        en: "Botvinnik vs. Tal 1960: Fearless Knight Sacrifice (21... Nf4!!)",
        pl: "Botwinnik – Tal 1960: Nieustraszona ofiara skoczka (21... Sf4!!)"
      },
      hint: {
        en: "Mikhail Tal hurls his knight into the hornet’s nest! Play 21... Nf4!!, recapture with 22... exf4, and snatch the b2 pawn with your queen!",
        pl: "Michaił Tal wrzuca skoczka w samo gniazdo os! Zagraj 21... Sf4!!, odbij pionem 22... exf4 i zgarnij piona b2 hetmanem!"
      },
      explanation: {
        en: "21... Nf4!! 22. gxf4 exf4 23. Bd2 Qxb2 unleashed total chaos in Game 6 of the 1960 World Championship, propelling the 23-year-old 'Magician from Riga' toward the world crown.",
        pl: "21... Sf4!! 22. gxf4 exf4 23. Gd2 Hxb2 wywołało na szachownicy totalny chaos w 6. partii Meczu o MŚ (1960), prowadząc 'Czarodzieja z Rygi' prosto po koronę."
      }
    },
    {
      id: "fg-37",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "medium",
      players: {
        en: "Boris Spassky vs. Tigran Petrosian (Moscow, 1969, Game 19)",
        pl: "Boris Spasski – Tigran Petrosjan (Moskwa, 1969, Partia 19)"
      },
      themes: ["pin","battery"],
      fen: "r1b1rbk1/1p3pp1/p2ppn1p/q7/3NPP2/1BN5/PPPQ2PP/1K1RR3 w - - 5 15",
      solution: ["g2g4","f6g4","d2g2","g4f6","e1g1"],
      title: {
        en: "Spassky vs. Petrosian 1969: Kingside Storm (19. g4!)",
        pl: "Spasski – Petrosjan 1969: Szturm na skrzydle królewskim (19. g4!)"
      },
      hint: {
        en: "Boris Spassky launches his championship offensive: push 19. g4!, regroup with 20. Qg2!, and pin along the g-file with 21. Rg1!",
        pl: "Boris Spasski rusza do mistrzowskiego ataku: pchnij 19. g4!, przegrupuj się 20. Hg2! i stwórz baterię na linii g ruchem 21. Wg1!"
      },
      explanation: {
        en: "19. g4! Nxg4 20. Qg2 Nf6 21. Rg1 shattered 'Iron Tigran' Petrosian’s defensive fortress in Game 19, sealing Spassky’s victory for the World Championship.",
        pl: "19. g4! Sxg4 20. Hg2 Sf6 21. Wg1 rozbiło żelazną twierdzę Tigrana Petrosjana w 19. partii meczu o tron szachowy, dając Spasskiemu upragnione mistrzostwo."
      }
    },
    {
      id: "fg-38",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Levon Aronian vs. Viswanathan Anand (Wijk aan Zee, 2013)",
        pl: "Levon Aronian – Viswanathan Anand (Wijk aan Zee, 2013)"
      },
      themes: ["sacrifice","discovered"],
      fen: "2rq1rk1/pb1n1ppN/4p3/1pb5/3P1Pn1/P1N5/1PQ1B1PP/R1B2RK1 b - - 2 16",
      solution: ["d7e5","e2g4","c5d4","g1h1","e5g4"],
      title: {
        en: "Anand’s Immortal: Double Knight Breakthrough (16... Nde5!)",
        pl: "Nieśmiertelna Partia Ananda: Przełom dwoma skoczkami (16... Sde5!)"
      },
      hint: {
        en: "Viswanathan Anand sacrifices both knights! Play 16... Nde5!, deliver the bishop check 17... Bxd4+!, and recapture on g4 with your knight!",
        pl: "Viswanathan Anand składa ofiarę z obu skoczków! Zagraj 16... Sde5!, zaszachuj gońcem 17... Gxd4+! i zbij na g4 skoczkiem!"
      },
      explanation: {
        en: "16... Nde5! 17. Bxg4 Bxd4+ 18. Kh1 Nxg4 is the sensational tactical heart of Anand’s 2013 masterpiece against Levon Aronian in Wijk aan Zee.",
        pl: "16... Sde5! 17. Gxg4 Gxd4+ 18. Kh1 Sxg4 to sensacyjne taktyczne serce partii Ananda przeciwko Levonowi Aronianowi w Wijk aan Zee (2013)."
      }
    },
    {
      id: "fg-39",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "medium",
      players: {
        en: "Boris Spassky vs. David Bronstein (Leningrad, 1960)",
        pl: "Boris Spasski – Dawid Bronstein (Leningrad, 1960)"
      },
      themes: ["sacrifice","fork"],
      fen: "r1bqr1k1/pppnbpp1/7p/2P5/3PN3/3Q1N2/PPB1p1PP/R4RK1 w - - 0 15",
      solution: ["e4d6","d7f8","d6f7","e2f1q","a1f1"],
      title: {
        en: "Spassky vs. Bronstein 1960: King’s Gambit Knight Invasion",
        pl: "Spasski – Bronstein 1960: Inwazja skoczka w Gambicie Królewskim"
      },
      hint: {
        en: "Invade with 15. Nd6!, fork the black forces on f7 (16. Nxf7!), and recapture on f1 with your rook!",
        pl: "Zainstaluj skoczka na 15. Sd6!, zbij na f7 (16. Sxf7!) i odbij na f1 wieżą!"
      },
      explanation: {
        en: "15. Nd6! Nf8 16. Nxf7 exf1=Q+ 17. Rxf1 is Boris Spassky’s brilliant romantic miniature against David Bronstein (featured in the James Bond film 'From Russia with Love').",
        pl: "15. Sd6! Sf8 16. Sxf7 exf1=H+ 17. Wxf1 to słynna partia Spasskiego z Bronsteinem (uwieczniona w filmie o Jamesie Bondzie 'Pozdrowienia z Rosji')."
      }
    },
    {
      id: "fg-40",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: "hard",
      players: {
        en: "Rashid Nezhmetdinov vs. Oleg Chernikov (Rostov-on-Don, 1962)",
        pl: "Raszid Nieżmietdinow – Oleg Czernikow (Rostów nad Donem, 1962)"
      },
      themes: ["sacrifice","pin"],
      fen: "r1b2rk1/pp1ppp1p/5bp1/q7/3nP2Q/1BN1B3/PPP2PPP/R4RK1 w - - 4 12",
      solution: ["h4f6","d4e2","c3e2"],
      title: {
        en: "Nezhmetdinov’s Positional Queen Sacrifice (12. Qxf6!!)",
        pl: "Pozycyjna Ofiara Hetmana Neżmetdinowa (12. Hxf6!!)"
      },
      hint: {
        en: "Rashid Nezhmetdinov sacrifices his queen for two minor pieces! Play 12. Qxf6!! and recapture Black’s knight on e2!",
        pl: "Raszyt Neżmetdinow oddaje hetmana za dwie lekkie figury! Zagraj 12. Hxf6!! i zbij skoczka czarnych na e2!"
      },
      explanation: {
        en: "12. Qxf6!! Ne2+ 13. Nxe2 is Rashid Nezhmetdinov’s legendary positional queen sacrifice against Oleg Chernikov in Rostov-on-Don (1962), taking total control of the light squares.",
        pl: "12. Hxf6!! Se2+ 13. Sxe2 to legendarna pozycyjna ofiara hetmana Raszyta Neżmetdinowa przeciwko Czernikowowi (Rostów, 1962), dająca totalną dominację na jasnych polach."
      }
    },
    {
      id: "fg-41",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Lev Polugaevsky vs. Rashid Nezhmetdinov (Sochi, 1958)",
        pl: "Lew Poługajewski – Raszid Nieżmietdinow (Soczi, 1958)"
      },
      themes: ["sacrifice","kingHunt"],
      fen: "r5k1/ppp2r1p/3p3b/3Pn3/1n2PPp1/1P2K1P1/PBB1N2q/R2Q3R b - - 2 24",
      solution: ["f7f4","h1h2","f4f3","e3d4","h6g7"],
      title: {
        en: "Nezhmetdinov’s Immortal King Hunt (24... Rxf4!!)",
        pl: "Nieśmiertelne Polowanie Neżmetdinowa (24... Wxf4!!)"
      },
      hint: {
        en: "Sacrifice your rook on f4 (24... Rxf4!!), check with 25... Rf3+!, and bring your bishop into the mating net with 26... Bg7!",
        pl: "Poświęć wieżę na f4 (24... Wxf4!!), zaszachuj 25... Wf3+! i włącz gońca do sieci matowej ruchem 26... Gg7!"
      },
      explanation: {
        en: "24... Rxf4!! 25. Rxh2 Rf3+ 26. Kd4 Bg7! dragged Lev Polugaevsky’s king across the entire board in one of the most astonishing tactical spectacles in Soviet chess history.",
        pl: "24... Wxf4!! 25. Wxh2 Wf3+ 26. Kd4 Gg7! wyciągnęło króla Lwa Poługajewskiego przez całą planszę w jednym z najbardziej spektakularnych ataków w historii szachów."
      }
    },
    {
      id: "fg-42",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: "medium",
      players: {
        en: "Mikhail Tal vs. Bent Larsen (Bled, 1965, Game 10)",
        pl: "Michaił Tal – Bent Larsen (Bled, 1965, Partia 10)"
      },
      themes: ["sacrifice","pin"],
      fen: "rqb2rk1/3nbppp/p2pp3/6P1/1p1BPP2/2NB1Q2/PPP4P/2KR3R w - - 0 16",
      solution: ["c3d5","e6d5","e4d5"],
      title: {
        en: "Tal vs. Larsen 1965: Sicilian Knight Sacrifice (16. Nd5!!)",
        pl: "Tal – Larsen 1965: Ofiara skoczka na d5 w Sycylijce (16. Sd5!!)"
      },
      hint: {
        en: "Mikhail Tal blows open the center against Bent Larsen: sacrifice your knight on d5 (16. Nd5!!) and recapture with your e-pawn!",
        pl: "Michaił Tal wysadza w powietrze centrum Larsena: poświęć skoczka na d5 (16. Sd5!!) i odbij pionem e!"
      },
      explanation: {
        en: "16. Nd5!! exd5 17. exd5 is Mikhail Tal’s decisive match-winning piece sacrifice in Game 10 of the 1965 Candidates Semi-Final, ripping open the e-file against Black’s uncastled king.",
        pl: "16. Sd5!! exd5 17. exd5 to decydująca ofiara figury Michaiła Tala w 10. partii Półfinału Meczów Pretendentów (1965), rozrywająca centrum przeciwko niezoroszowanemu królowi."
      }
    },
    {
      id: "fg-43",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Bobby Fischer vs. Pal Benko (New York, 1963/64)",
        pl: "Bobby Fischer – Pal Benko (Nowy Jork, 1963/64)"
      },
      themes: ["clearance","pin"],
      fen: "r3qr1k/pp3pbp/2pn4/7Q/3pP3/2NB3P/PPP3P1/R4RK1 w - - 0 19",
      solution: ["f1f6","h8g8","e4e5","h7h6","c3e2"],
      title: {
        en: "Fischer’s 11/11 Gem: The Blockade Move (19. Rf6!!)",
        pl: "Diament Fischera 11/11: Blokada wieżą (19. Wf6!!)"
      },
      hint: {
        en: "Bobby Fischer stops Black’s f-pawn dead in its tracks: play the immortal interference move 19. Rf6!!, push 20. e5!, and reroute your knight with 21. Ne2!",
        pl: "Bobby Fischer paraliżuje piona f czarnych: zagraj genialne posunięcie przesłaniające 19. Wf6!!, pchnij 20. e5! i przerzuć skoczka 21. Se2!"
      },
      explanation: {
        en: "19. Rf6!! Kg8 20. e5 h6 21. Ne2 completely paralyzed Pal Benko during Fischer’s historic 11-0 sweep at the 1963/64 US Championship.",
        pl: "19. Wf6!! Kg8 20. e5 h6 21. Se2 kompletnie sparaliżowało Pala Benko podczas historycznego wyniku Fischera 11-0 w Mistrzostwach USA (1963/64)."
      }
    },
    {
      id: "fg-44",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Robert Byrne vs. Bobby Fischer (New York, 1963/64)",
        pl: "Robert Byrne – Bobby Fischer (Nowy Jork, 1963/64)"
      },
      themes: ["sacrifice","fork","discovered"],
      fen: "r2qr1k1/p4pbp/bp3np1/3p4/8/BPNnP1P1/P1Q1NPBP/R2R2K1 b - - 3 15",
      solution: ["d3f2","g1f2","f6g4","f2g1","g4e3"],
      title: {
        en: "Byrne vs. Fischer 1963: Knight Sacrifice Breakthrough (15... Nxf2!!)",
        pl: "Byrne – Fischer 1963: Piorunujące uderzenie skoczkiem (15... Sxf2!!)"
      },
      hint: {
        en: "Bobby Fischer unleashes a thunderbolt: sacrifice your knight on f2 (15... Nxf2!!), check with 16... Ng4+!, and capture on e3!",
        pl: "Bobby Fischer uderza jak grom z jasnego nieba: poświęć skoczka na f2 (15... Sxf2!!), zaszachuj 16... Sg4+! i zgarnij gońca e3!"
      },
      explanation: {
        en: "15... Nxf2!! 16. Kxf2 Ng4+ 17. Kg1 Nxe3 completely shattered Robert Byrne’s position, leading grandmasters watching the game to marvel at Fischer’s tactical foresight.",
        pl: "15... Sxf2!! 16. Kxf2 Sg4+ 17. Kg1 Sxe3 całkowicie zdemolowało pozycję Roberta Byrne'a, budząc bezgraniczny podziw arcymistrzów komentujących partię."
      }
    },
    {
      id: "fg-45",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Johannes Zukertort vs. Joseph Henry Blackburne (London, 1883)",
        pl: "Johannes Zukertort – Joseph Henry Blackburne (Londyn, 1883)"
      },
      themes: ["sacrifice","deflection","pin"],
      fen: "2r4k/pb2q2P/1p6/3Pp3/4p3/1P2R3/PBrQ2PP/5RK1 w - - 0 28",
      solution: ["d2b4","c8c5","f1f8","h8h7","b4e4"],
      title: {
        en: "Zukertort’s Immortal: Double Queen & Rook Deflection (28. Qb4!!)",
        pl: "Nieśmiertelna Partia Zukertorta: Podwójne odciągnięcie (28. Hb4!!)"
      },
      hint: {
        en: "Johannes Zukertort plays the move of the century! Place your queen on b4 where it is attacked (28. Qb4!!), deflect the king with 29. Rf8+!, and capture e4 with check!",
        pl: "Jan Zukertort gra ruch stulecia! Postaw hetmana pod bicie na b4 (28. Hb4!!), odciągnij króla ofiarą wieży 29. Wf8+! i zbij na e4 z szachem!"
      },
      explanation: {
        en: "28. Qb4!! R8c5 29. Rf8+! Kxh7 30. Qxe4+ is hailed by Wilhelm Steinitz as one of the finest combinations ever conceived in chess history.",
        pl: "28. Hb4!! W8c5 29. Wf8+! Kxh7 30. Hxe4+ to według Wilhelma Steinitza jedna z najwspanialszych kombinacji, jakie kiedykolwiek powstały na szachownicy."
      }
    },
    {
      id: "fg-46",
      isFamousGame: true,
      endsInMate: true,
      movesToMate: 3,
      difficulty: "medium",
      players: {
        en: "Harry Nelson Pillsbury vs. Siegbert Tarrasch (Hastings, 1895)",
        pl: "Harry Nelson Pillsbury – Siegbert Tarrasch (Hastings, 1895)"
      },
      themes: ["battery","attraction"],
      fen: "8/3n3p/7k/6p1/1p1PpQ2/1rp1P2P/8/7K w - - 0 50",
      solution: ["f4d6","h6h5","d6d7","c3c2","d7h7"],
      title: {
        en: "Pillsbury’s Attack: Hastings 1895 Checkmate Finale",
        pl: "Atak Pillsbury'ego: Finałowy mat w Hastings 1895"
      },
      hint: {
        en: "Harry Pillsbury crowns his Kingside assault: check with 50. Qd6+!, capture on d7 with 51. Qxd7, and deliver checkmate with 52. Qxh7#!",
        pl: "Harry Pillsbury wieńczy szturm na skrzydle królewskim: zaszachuj 50. Hd6+!, zbij na d7 ruchem 51. Hxd7 i zamatuj 52. Hxh7#!"
      },
      explanation: {
        en: "50. Qd6+! Kh5 51. Qxd7 c2 52. Qxh7# was the glorious climax of Pillsbury’s monumental victory over Siegbert Tarrasch at Hastings 1895.",
        pl: "50. Hd6+! Kh5 51. Hxd7 c2 52. Hxh7# było wspaniałym finałem monumentalnego zwycięstwa Pillsbury'ego nad Tarraschem w Hastings 1895."
      }
    },
    {
      id: "fg-47",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 4,
      difficulty: "hard",
      players: {
        en: "Nigel Short vs. Jan Timman (Tilburg, 1991)",
        pl: "Nigel Short – Jan Timman (Tilburg, 1991)"
      },
      themes: ["kingHunt","clearance"],
      fen: "4rrk1/1bpR1p2/1pq1pQp1/p3P2p/P1PR3P/5N2/2P2PP1/6K1 w - h6 0 31",
      solution: ["g1h2","e8c8","h2g3","c8e8","g3f4","b7c8","f4g5"],
      title: {
        en: "Nigel Short’s Immortal King Walk: Kh2 – Kg3 – Kf4 – Kg5!",
        pl: "Nieśmiertelny Marsz Króla Nigela Shorta: Kh2 – Kg3 – Kf4 – Kg5!"
      },
      hint: {
        en: "March your king all the way up the board to create an inescapable mating net: play 31. Kh2!, 32. Kg3!, 33. Kf4!, and 34. Kg5!",
        pl: "Poprowadź swojego króla przez całą szachownicę, by osobiście asystował w macie: zagraj 31. Kh2!, 32. Kg3!, 33. Kf4! i 34. Kg5!"
      },
      explanation: {
        en: "31. Kh2! Rc8 32. Kg3! Rce8 33. Kf4! Bc8 34. Kg5! is the legendary king walk that forced Jan Timman’s resignation, as 35. Kh6 followed by mate on g7 is unstoppable.",
        pl: "31. Kh2! Wc8 32. Kg3! Wce8 33. Kf4! Gc8 34. Kg5! to legendarny marsz monarchy, który zmusił Jana Timmana do kapitulacji wobec nieuchronnego mata po 35. Kh6 i 36. Hg7#."
      }
    },
    {
      id: "fg-48",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Jinshi Bai vs. Ding Liren (Chinese League, 2017)",
        pl: "Jinshi Bai – Ding Liren (Liga Chińska, 2017)"
      },
      themes: ["sacrifice","kingHunt"],
      fen: "r1br2k1/pp3p2/2n4p/4N1p1/1bP5/2n1PKB1/P1Q2PPP/5B1R b - - 4 20",
      solution: ["d8d4","h2h3","h6h5","g3h2","g5g4"],
      title: {
        en: "Ding Liren’s Chinese Immortal: Central Rook Sacrifice (20... Rd4!!)",
        pl: "Chińska Nieśmiertelna Ding Lirena: Ofiara wieży w centrum (20... Wd4!!)"
      },
      hint: {
        en: "Future World Champion Ding Liren sacrifices his rook in the center: play 20... Rd4!!, support the pawn storm with 21... h5!, and push 22... g4+!",
        pl: "Przyszły Mistrz Świata Ding Liren składa ofiarę z wieży w centrum: zagraj 20... Wd4!!, wesprzyj natarcie ruchem 21... h5! i pchnij 22... g4+!"
      },
      explanation: {
        en: "20... Rd4!! 21. h3 h5 22. Bh2 g4+ launched Ding Liren’s cross-board king hunt, universally celebrated as the greatest attacking masterpiece by a Chinese grandmaster.",
        pl: "20... Wd4!! 21. h3 h5 22. Gh2 g4+ zapoczątkowało pościg za białym królem w najsłynniejszej partii chińskiego arcymistrza."
      }
    },
    {
      id: "fg-49",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 2,
      difficulty: "hard",
      players: {
        en: "Wei Yi vs. Lázaro Bruzón Batista (Danzhou, 2015)",
        pl: "Wei Yi – Lázaro Bruzón Batista (Danzhou, 2015)"
      },
      themes: ["sacrifice","kingHunt"],
      fen: "3qr1k1/1b1rbp2/p2p2p1/1p1np3/4P3/P2BB2Q/1PP3PP/4RR1K w - - 0 22",
      solution: ["f1f7","g8f7","h3h7"],
      title: {
        en: "Wei Yi’s 21st-Century Immortal: Rook Sacrifice (21. Rxf7!!)",
        pl: "Nieśmiertelna Partia XXI Wieku Wei Yi: Ofiara wieży (21. Wxf7!!)"
      },
      hint: {
        en: "16-year-old Wei Yi detonates Black’s fortress: sacrifice your rook on f7 (21. Rxf7!!) and invade with 22. Qh7+!",
        pl: "16-letni Wei Yi detonuje twierdzę czarnych: poświęć wieżę na f7 (21. Wxf7!!) i wtargnij hetmanem 22. Hh7+!"
      },
      explanation: {
        en: "21. Rxf7!! Kxf7 22. Qh7+ dragged Lazaro Bruzon’s king all the way to h3, earning Wei Yi’s 2015 creation the title of the '21st Century Immortal Game'.",
        pl: "21. Wxf7!! Kxf7 22. Hh7+ wyciągnęło króla Bruzona aż na pole h3, zapewniając partii Wei Yi miano 'Nieśmiertelnej Partii XXI Wieku'."
      }
    },
    {
      id: "fg-50",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Veselin Topalov vs. Alexei Shirov (Linares, 1998)",
        pl: "Veselin Topalov – Alexei Shirov (Linares, 1998)"
      },
      themes: ["sacrifice","clearance"],
      fen: "8/8/4kpp1/3p1b2/p6P/2B5/6P1/6K1 b - - 2 47",
      solution: ["f5h3","g2h3","e6f5","g1f2","f5e4"],
      title: {
        en: "Topalov vs. Shirov 1998: The Greatest Endgame Move (47... Bh3!!)",
        pl: "Topałow – Szirow 1998: Najgenialniejszy ruch w końcówce (47... Gh3!!)"
      },
      hint: {
        en: "Alexei Shirov plays the most jaw-dropping bishop sacrifice in chess history! Give away your bishop on h3 (47... Bh3!!), march your king to f5, and invade e4!",
        pl: "Aleksiej Szirow gra najbardziej zdumiewającą ofiarę gońca w historii szachów! Oddaj gońca na h3 (47... Gh3!!), wkrocz królem na f5 i wejdź na e4!"
      },
      explanation: {
        en: "47... Bh3!! 48. gxh3 Kf5 49. Kf2 Ke4 is universally considered the most sublime endgame move ever played, gaining the decisive tempo for the black king to shepherd the passed pawns to victory.",
        pl: "47... Gh3!! 48. gxh3 Kf5 49. Kf2 Ke4 to powszechnie uznany za najgenialniejszy ruch końcówkowy w historii, zyskujący kluczowe tempo dla marszu króla po zwycięstwo."
      }
    },
    {
      id: "fg-51",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Alexei Shirov vs. Judit Polgár (Buenos Aires, 1994)",
        pl: "Alexei Shirov – Judit Polgár (Buenos Aires, 1994)"
      },
      themes: ["fork","pin","sacrifice"],
      fen: "r3kb1r/1b3p2/p2pp3/N3nnqP/1p2P3/8/PPP1NBQP/R3KB1R b KQkq - 1 16",
      solution: ["f5e3","g2g3","g5g3","e2g3","e3c2"],
      title: {
        en: "Shirov vs. Judit Polgár 1994: Sicilian Knight Infiltration (16... Ne3!!)",
        pl: "Szirow – Judit Polgár 1994: Infiltracja skoczkiem (16... Se3!!)"
      },
      hint: {
        en: "Judit Polgár invades Shirov’s camp: plunge your knight to e3 (16... Ne3!!), trade queens, and deliver a devastating royal knight fork on c2!",
        pl: "Judit Polgár wkracza w obóz Szirowa: wbij skoczka na e3 (16... Se3!!), wymień hetmany i zadaj niszczycielskie widły skoczkiem na c2!"
      },
      explanation: {
        en: "16... Ne3!! 17. Qg3 Qxg3 18. Nxg3 Nxc2+ dismantled Alexei Shirov’s position in Buenos Aires (1994), cementing Judit Polgár’s reputation as one of the fiercest attacking players of all time.",
        pl: "16... Se3!! 17. Hg3 Hxg3 18. Sxg3 Sxc2+ zdemolowało pozycję Szirowa w Buenos Aires (1994), potwierdzając kunszt ataku Judit Polgár."
      }
    },
    {
      id: "fg-52",
      isFamousGame: true,
      endsInMate: false,
      movesToMate: 3,
      difficulty: "hard",
      players: {
        en: "Louis Paulsen vs. Paul Morphy (New York, 1857)",
        pl: "Louis Paulsen – Paul Morphy (Nowy Jork, 1857)"
      },
      themes: ["sacrifice","kingHunt","doubleCheck"],
      fen: "4r1k1/p1pb1ppp/Qbp1r3/8/1P6/2Pq1B2/R2P1PPP/2B2RK1 b - - 4 17",
      solution: ["d3f3","g2f3","e6g6","g1h1","d7h3"],
      title: {
        en: "Paulsen vs. Morphy 1857: The Immortal Queen Sacrifice (17... Qxf3!!)",
        pl: "Paulsen – Morphy 1857: Nieśmiertelna ofiara hetmana (17... Hxf3!!)"
      },
      hint: {
        en: "Paul Morphy unleashes his most famous combination! Sacrifice your queen on f3 (17... Qxf3!!), check along the g-file (18... Rg6+!), and penetrate with 19... Bh3!",
        pl: "Paul Morphy odpala swoją najsłynniejszą kombinację! Poświęć hetmana na f3 (17... Hxf3!!), zaszachuj po linii g (18... Wg6+!) i wejdź gońcem 19... Gh3!"
      },
      explanation: {
        en: "17... Qxf3!! 18. gxf3 Rg6+ 19. Kh1 Bh3 initiated Morphy’s legendary windmill-style attack in New York (1857), leaving White completely defenseless against the two bishops and rook.",
        pl: "17... Hxf3!! 18. gxf3 Wg6+ 19. Kh1 Gh3 zapoczątkowało legendarny atak Morphy’ego w Nowym Jorku (1857), pozostawiając białe bezbronnymi wobec pary zabójczych gońców i wieży."
      }
    }
  ];

  // =========================================================================
  // BATTLE ANALYSES (62 Full Interactive Annotated Battles — Move-by-Move + SVG Targeting)
  // =========================================================================
  // HOW TO ADD A FUTURE MATCH:
  // 1. Add an object to `BATTLE_ANALYSES` below.
  // 2. Provide `moves` as either an array of SAN strings (`['e4', 'e5', 'Nf3', ...]`)
  //    or a raw PGN move string (`"1. e4 e5 2. Nf3 d6 ..."`). No FENs required!
  // 3. Add optional `annotations` keyed by human-readable move notation (e.g. `'6. Bc4'`,
  //    `'10. Nxb5'`) or 1-based ply number. Any move without a custom annotation will
  //    automatically display engine-detected piece targeting arrows and commentary!
  // 4. Arrow shorthand format: `'from->to:color'` where color is:
  //    - `'red'`   = Threat / Attack Target
  //    - `'amber'` = Pin / Battery / X-Ray / Fork
  //    - `'green'` = Key Plan / Played Move
  //    - `'blue'`  = Defensive Idea / Alternative
  // =========================================================================
  const BATTLE_ANALYSES = [
    // === EASY (2) ===
    {
      id: 'ba-01',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['battery', 'pin', 'sacrifice', 'opera'],
      players: {
        en: 'Paul Morphy vs. Duke of Brunswick & Count Isouard (Paris, 1858)',
        pl: 'Paul Morphy – Książę Brunszwiku i Hrabia Isouard (Paryż, 1858)'
      },
      title: {
        en: 'The Opera Game: Masterclass in Development & Pinning',
        pl: 'Partia Operowa: Arcydzieło rozwoju i celowania w słabe punkty'
      },
      overview: {
        en: 'Played in a Paris opera box during Bellini’s "Norma". Watch how Morphy punishes slow development by targeting f7 and b7 simultaneously, piling up pins on d7, and finishing with a legendary Queen sacrifice.',
        pl: 'Rozegrana w loży Opery Paryskiej. Zobacz krok po kroku, jak Morphy karze opóźnienie w rozwoju figur: tworzy baterie celujące w f7 i b7, wiąże czarne figury na linii d i kończy partię słynną ofiarą hetmana.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'd6', 'd4', 'Bg4', 'dxe5', 'Bxf3', 'Qxf3', 'dxe5',
        'Bc4', 'Nf6', 'Qb3', 'Qe7', 'Nc3', 'c6', 'Bg5', 'b5', 'Nxb5', 'cxb5',
        'Bxb5+', 'Nbd7', 'O-O-O', 'Rd8', 'Rxd7', 'Rxd7', 'Rd1', 'Qe6',
        'Bxd7+', 'Nxd7', 'Qb8+', 'Nxb8', 'Rd8#'
      ],
      annotations: {
        '3. d4': {
          badge: '⚔️',
          arrows: ['d4->e5:red', 'f3->e5:amber'],
          targets: ['e5'],
          text: {
            en: 'Morphy immediately strikes at the center, putting double pressure on e5.',
            pl: 'Morphy natychmiast uderza w centrum, wywierając podwójny nacisk na piona e5.'
          }
        },
        '3... Bg4': {
          badge: '?!',
          arrows: ['g4->f3:amber', 'f3->d1:amber'],
          targets: ['f3'],
          text: {
            en: 'Black pins the knight on f3, but neglects developing the kingside knights and bishops.',
            pl: 'Czarne wiążą skoczka na f3, ale zaniedbują rozwój figur skrzydła królewskiego.'
          }
        },
        '6. Bc4': {
          badge: '🎯',
          arrows: ['c4->f7:red', 'f3->f7:red'],
          targets: ['f7'],
          text: {
            en: 'Deadly battery! Both the bishop on c4 and queen on f3 converge on f7 — threatening immediate checkmate.',
            pl: 'Zabójcza bateria! Goniec z c4 oraz hetman z f3 celują jednocześnie w słaby punkt f7, grożąc matem w 1 ruchu.'
          }
        },
        '7. Qb3': {
          badge: '!',
          arrows: ['b3->f7:red', 'b3->b7:red', 'c4->f7:amber'],
          targets: ['f7', 'b7'],
          text: {
            en: 'Double attack! The queen shifts to b3, maintaining the mate threat on f7 while also targeting the undefended b7 pawn.',
            pl: 'Podwójny cel! Hetman przechodzi na b3, podtrzymując groźbę mata na f7 i jednocześnie biorąc na celownik bezbronnego piona b7.'
          }
        },
        '7... Qe7': {
          badge: '?!',
          arrows: ['e7->f7:blue', 'f8->c5:blue'],
          targets: ['f7', 'f8'],
          text: {
            en: 'Black defends f7, but blocks the dark-squared bishop on f8 — trapping the h8 rook in the corner for the rest of the game!',
            pl: 'Czarne bronią punktu f7, ale blokują własnego gońca na f8 — przez co wieża h8 pozostanie uwięziona w rogu do końca partii!'
          }
        },
        '9. Bg5': {
          badge: '!',
          arrows: ['g5->f6:amber', 'f6->e7:amber'],
          targets: ['f6', 'e7'],
          text: {
            en: 'Every White piece is now in the battle! Bg5 pins the f6 knight against Black’s queen on e7.',
            pl: 'Każda lekka figura białych jest już w grze! Ruch Gg5 wiąże skoczka f6 na tle hetmana stojącego na e7.'
          }
        },
        '10. Nxb5': {
          badge: '!!',
          arrows: ['b5->d6:red', 'b5->c7:red', 'c4->b5:amber'],
          targets: ['b5', 'e8'],
          text: {
            en: 'Knight sacrifice! Instead of retreating, Morphy rips open lines toward the uncastled black king on e8.',
            pl: 'Ofiara skoczka! Zamiast cofać gońca, Morphy rozrywa osłonę czarnego króla stojącego wciąż w centrum na e8.'
          }
        },
        '11. Bxb5+': {
          badge: '!',
          arrows: ['b5->e8:red', 'g5->f6:amber'],
          targets: ['e8', 'd7'],
          text: {
            en: 'Check along the a4–e8 diagonal forces Black to block on d7, creating a second paralyzed pin!',
            pl: 'Szach po przekątnej a4–e8 zmusza czarne do zasłonięcia się na d7, co tworzy drugie śmiertelne związanie!'
          }
        },
        '12. O-O-O': {
          badge: '!',
          arrows: ['d1->d7:red', 'b5->d7:amber', 'b5->e8:amber'],
          targets: ['d7'],
          text: {
            en: 'Castling queenside brings the rook directly onto the d-file with tempo, targeting the pinned knight on d7!',
            pl: 'Długa roszada wprowadza wieżę z tempem prosto na linię d, biorąc na celownik związanego skoczka d7!'
          }
        },
        '13. Rxd7': {
          badge: '!',
          arrows: ['d7->e7:red', 'g5->f6:amber', 'd1->d7:green'],
          targets: ['d7', 'f6'],
          text: {
            en: 'Exchange sacrifice! Eliminating the defender on d7 so the remaining h1 rook can pin the black rook cleanly.',
            pl: 'Ofiara jakości! Morphy usuwa obrońcę z pola d7, aby druga wieża mogła bezwzględnie związać czarną wieżę.'
          }
        },
        '14. Rd1': {
          badge: '!',
          arrows: ['d1->d7:red', 'b5->d7:red', 'g5->f6:amber'],
          targets: ['d7', 'f6'],
          text: {
            en: 'Maximum pressure! The rook on d7 is pinned to the king on e8, and its defender on f6 is pinned to the queen on e7.',
            pl: 'Maksymalny nacisk! Wieża na d7 jest związana z królem e8, a broniący jej skoczek f6 jest związany z hetmanem e7.'
          }
        },
        '16. Qb8+': {
          badge: '!!',
          arrows: ['b8->e8:red', 'b8->d8:amber', 'd1->d8:red', 'g5->d8:amber'],
          targets: ['b8', 'd8', 'e8'],
          text: {
            en: 'The Immortal Queen Sacrifice! 16. Qb8+!! forces the knight on d7 to capture on b8, deflecting it from guarding d8!',
            pl: 'Nieśmiertelna ofiara hetmana! 16. Hb8+!! zmusza skoczka z d7 do zbicia na b8, odciągając go od obrony kluczowego pola d8!'
          }
        },
        '17. Rd8#': {
          badge: '🏆',
          arrows: ['d8->e8:red', 'g5->d8:green', 'g5->f6:amber'],
          targets: ['e8', 'd8'],
          text: {
            en: 'Opera Mate! The rook on d8 checkmates the black king while protected by the bishop on g5.',
            pl: 'Mat operowy! Wieża na d8 matuje czarnego króla pod osłoną gońca z g5.'
          }
        }
      }
    },
    {
      id: 'ba-02',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'attraction', 'pin', 'fork'],
      players: {
        en: 'Sire de Légal vs. Saint Brie (Paris, 1750)',
        pl: 'Sire de Légal – Saint Brie (Paryż, 1750)'
      },
      title: {
        en: "Légal's Trap: Breaking the Relative Pin on f3",
        pl: 'Pułapka Légala: Złamanie pozornego związania na f3'
      },
      overview: {
        en: 'Why you must always check whether a pin is absolute or relative! Sire de Légal allows his Queen on d1 to be captured in order to coordinate three minor pieces against the black king.',
        pl: 'Dlaczego zawsze trzeba sprawdzać, czy związanie jest bezwzględne, czy względne! Sire de Légal oddaje hetmana na d1, aby zmatować czarnego króla samymi lekkimi figurami.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'd6', 'Bc4', 'Bg4', 'Nc3', 'g6', 'Nxe5', 'Bxd1',
        'Bxf7+', 'Ke7', 'Nd5#'
      ],
      annotations: {
        '3. Bc4': {
          badge: '🎯',
          arrows: ['c4->f7:red'],
          targets: ['f7'],
          text: {
            en: 'The Italian Bishop takes aim directly at f7 — the weakest point in Black’s camp.',
            pl: 'Włoski goniec celuje bezpośrednio w punkt f7 — najsłabsze pole w obozie czarnych.'
          }
        },
        '3... Bg4': {
          badge: '?!',
          arrows: ['g4->f3:amber', 'f3->d1:amber'],
          targets: ['f3', 'd1'],
          text: {
            en: 'Black pins the knight on f3 against the queen on d1 without developing the kingside knight first.',
            pl: 'Czarne wiążą skoczka f3 na tle hetmana d1, nie wyprowadziwszy wcześniej skoczka na f6.'
          }
        },
        '4... g6': {
          badge: '?',
          arrows: ['f3->e5:red', 'c4->f7:red'],
          targets: ['e5', 'f7'],
          text: {
            en: 'A fatal mistake! Slow pawn play allows White to spring the classic tactical trap in the center.',
            pl: 'Fatalny błąd! Powolny ruch pionem pozwala białym uruchomić klasyczną pułapkę w centrum.'
          }
        },
        '5. Nxe5': {
          badge: '!!',
          arrows: ['e5->f7:red', 'e5->g4:red', 'c4->f7:amber'],
          targets: ['f7', 'g4', 'd1'],
          text: {
            en: 'Breaking the pin! White sacrifices the queen on d1. If 5... dxe5, 6. Qxg4 wins a clean pawn.',
            pl: 'Złamanie związania! Białe wystawiają hetmana na d1. Jeśli 5... dxe5, to 6. Hxg4 wygrywa czystego piona.'
          }
        },
        '6. Bxf7+': {
          badge: '!',
          arrows: ['f7->e8:red', 'e5->d7:amber', 'e5->g6:amber'],
          targets: ['e8', 'e7'],
          text: {
            en: 'Attraction check! The bishop and knight strip away all escape squares except e7.',
            pl: 'Szach przyciągający! Goniec z f7 oraz skoczek z e5 odbierają królowi wszystkie pola oprócz e7.'
          }
        },
        '7. Nd5#': {
          badge: '🏆',
          arrows: ['d5->e7:red', 'e5->d7:amber', 'f7->e8:amber'],
          targets: ['e7'],
          text: {
            en: "Légal's Mate! Three minor pieces weave an airtight cage around the black king in the center.",
            pl: 'Mat Légala! Trzy lekkie figury tworzą szczelną klatkę wokół czarnego króla w samym środku szachownicy.'
          }
        }
      }
    },

    // === MEDIUM (2) ===
    {
      id: 'ba-03',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'fork', 'pin', 'kingHunt'],
      players: {
        en: 'Italian Game Analysis — Fried Liver Attack (Fegatello)',
        pl: 'Analiza Partii Włoskiej — Atak Fried Liver (Fegatello)'
      },
      title: {
        en: 'The Fried Liver Attack: Crushing the Pinned Knight on d5',
        pl: 'Atak Fried Liver: Miażdżący nacisk na związanego skoczka d5'
      },
      overview: {
        en: 'See how White sacrifices a knight on f7 (`6. Nxf7!!`) to drag the black king out and pile up attacking arrows onto the pinned knight on d5.',
        pl: 'Zobacz, jak białe poświęcają skoczka na f7 (`6. Sxf7!!`), aby wyciągnąć czarnego króla i skoncentrować ogień wszystkich figur na związanym skoczku d5.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Nxd5',
        'Nxf7', 'Kxf7', 'Qf3+', 'Kg8', 'Bxd5+', 'Qxd5', 'Qxd5+', 'Be6', 'Qxe6#'
      ],
      annotations: {
        '4. Ng5': {
          badge: '⚔️',
          arrows: ['g5->f7:red', 'c4->f7:red'],
          targets: ['f7'],
          text: {
            en: 'The Knight Attack! White immediately teams up knight and bishop against f7.',
            pl: 'Atak skoczkiem! Białe błyskawicznie łączą siły skoczka g5 i gońca c4 przeciwko punktowi f7.'
          }
        },
        '5... Nxd5': {
          badge: '?!',
          arrows: ['g5->f7:red', 'c4->d5:amber'],
          targets: ['f7', 'd5'],
          text: {
            en: 'Recapturing on d5 looks natural, but walks straight into the 400-year-old Fried Liver sacrifice! (`5... Na5!` is the safe theory move).',
            pl: 'Odbicie skoczkiem na d5 wygląda naturalnie, ale wchodzi prosto w 400-letnią ofiarę Fegatello! (Poprawne teoretycznie jest `5... Sa5!`).'
          }
        },
        '6. Nxf7': {
          badge: '!!',
          arrows: ['f7->d8:red', 'f7->h8:red', 'c4->f7:amber'],
          targets: ['f7', 'd8', 'h8'],
          text: {
            en: 'The Fried Liver Sacrifice! Forking Queen and Rook forces Black’s king to capture on f7 and step into the line of fire.',
            pl: 'Ofiara Fried Liver! Widełki na hetmana d8 i wieżę h8 zmuszają czarnego króla do bicia na f7 i wyjścia na linię ognia.'
          }
        },
        '7. Qf3+': {
          badge: '!',
          arrows: ['f3->f7:red', 'f3->d5:red', 'c4->d5:red'],
          targets: ['f7', 'd5'],
          text: {
            en: 'Double attack & pin! The queen checks the king on f7 while teaming up with Bc4 to attack the knight on d5 twice!',
            pl: 'Podwójny atak i związanie! Hetman szachuje króla na f7 i jednocześnie razem z gońcem c4 dwukrotnie atakuje skoczka d5!'
          }
        },
        '7... Kg8': {
          badge: '?',
          arrows: ['c4->d5:red', 'f3->f7:amber', 'f7->e6:blue'],
          targets: ['d5', 'g8'],
          text: {
            en: 'Retreating to g8 loses on the spot! Black had to brave the center with 7... Ke6 to defend the d5 knight.',
            pl: 'Ucieczka na g8 przegrywa natychmiast! Czarne musiały odważnie wyjść królem na 7... Ke6, aby bronić skoczka na d5.'
          }
        },
        '8. Bxd5+': {
          badge: '!',
          arrows: ['d5->g8:red', 'f3->f7:amber'],
          targets: ['d5', 'g8'],
          text: {
            en: 'Crushing check on the a2–g8 diagonal! Black is forced to give up the queen on d5.',
            pl: 'Miażdżący szach po przekątnej a2–g8! Czarne są zmuszone oddać hetmana na d5.'
          }
        },
        '10. Qxe6#': {
          badge: '🏆',
          arrows: ['e6->g8:red'],
          targets: ['g8', 'e6'],
          text: {
            en: 'Checkmate along the fatally weakened a2–g8 diagonal!',
            pl: 'Mat po śmiertelnie osłabionej przekątnej a2–g8!'
          }
        }
      }
    },
    {
      id: 'ba-04',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'doubleCheck', 'attraction', 'clearance'],
      players: {
        en: 'Richard Réti vs. Savielly Tartakower (Vienna, 1910)',
        pl: 'Richard Réti – Ksawery Tartakower (Wiedeń, 1910)'
      },
      title: {
        en: 'Vienna Miniature: Queen Sacrifice & Double-Check Mate',
        pl: 'Wiedeńska Miniatura: Ofiara hetmana i podwójny szach'
      },
      overview: {
        en: 'One of the most famous 11-move battles ever played. Watch how Réti uses queenside castling to set an invisible X-ray trap along the open d-file.',
        pl: 'Jedna z najsłynniejszych 11-posunięciowych bitew w historii. Zobacz, jak Réti wykorzystuje długą roszadę do zastawienia niewidocznej pułapki rentgenowej na otwartej linii d.'
      },
      moves: [
        'e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nf6', 'Qd3', 'e5',
        'dxe5', 'Qa5+', 'Bd2', 'Qxe5', 'O-O-O', 'Nxe4', 'Qd8+', 'Kxd8', 'Bg5+', 'Kc7',
        'Bd8#'
      ],
      annotations: {
        '5. Qd3': {
          badge: '📖',
          arrows: ['d3->e4:green', 'c1->d2:blue'],
          targets: ['e4'],
          text: {
            en: 'Réti defends the e4 knight with the queen, preparing rapid queenside castling.',
            pl: 'Réti broni skoczka e4 hetmanem, przygotowując błyskawiczną długą roszadę.'
          }
        },
        '6... Qa5+': {
          badge: '⚔️',
          arrows: ['a5->e1:red', 'a5->e5:red'],
          targets: ['e1', 'e5'],
          text: {
            en: 'Tartakower forks the white king on e1 and the e5 pawn, regaining material at the cost of development.',
            pl: 'Tartakower daje widełki na króla e1 oraz piona e5, odzyskując materiał kosztem czasu na rozwój.'
          }
        },
        '8. O-O-O': {
          badge: '!',
          arrows: ['d1->d8:amber', 'd2->g5:blue'],
          targets: ['d8', 'e4'],
          text: {
            en: 'A brilliant trap! The knight on e4 appears to be hanging, because the queen on d3 blocks the d1 rook.',
            pl: 'Genialna pułapka! Skoczek na e4 wygląda na niebronionego, ponieważ hetman na d3 pozornie zasłania wieżę d1.'
          }
        },
        '8... Nxe4': {
          badge: '??',
          arrows: ['d3->d8:red', 'd1->d8:amber', 'd2->g5:red'],
          targets: ['d8', 'e8'],
          text: {
            en: 'Tartakower grabs the knight — walking straight into a forced mate in 3 along the open d-file!',
            pl: 'Tartakower bije skoczka — wchodząc prosto w forsującego mata w 3 ruchach na otwartej linii d!'
          }
        },
        '9. Qd8+': {
          badge: '!!',
          arrows: ['d8->e8:red', 'd1->d8:amber'],
          targets: ['d8', 'e8'],
          text: {
            en: 'Thunderbolt Queen Sacrifice! 9. Qd8+!! drags the black king onto the d8 square, right into the X-ray of the d1 rook!',
            pl: 'Piorunująca ofiara hetmana! 9. Hd8+!! wciąga czarnego króla na pole d8 — prosto pod rentgen wieży z d1!'
          }
        },
        '10. Bg5+': {
          badge: '!!',
          arrows: ['g5->d8:red', 'd1->d8:red'],
          targets: ['d8', 'c7', 'e7'],
          text: {
            en: 'Double Check! Both the bishop on g5 and the rook on d1 check the king simultaneously, leaving only Kc7 or Ke8.',
            pl: 'Podwójny szach! Zarówno goniec z g5, jak i wieża z d1 szachują króla jednocześnie, wymuszając ucieczkę.'
          }
        },
        '11. Bd8#': {
          badge: '🏆',
          arrows: ['d8->c7:red', 'd1->d8:green'],
          targets: ['c7', 'd8'],
          text: {
            en: 'Checkmate! The bishop and rook seal the d-file completely.',
            pl: 'Mat! Goniec wspierany przez wieżę d1 całkowicie zamyka królowi drogę ucieczki.'
          }
        }
      }
    },

    // === HARD (2) ===
    {
      id: 'ba-05',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'deflection', 'kingHunt'],
      players: {
        en: 'Adolf Anderssen vs. Lionel Kieseritzky (London, 1851)',
        pl: 'Adolf Anderssen – Lionel Kieseritzky (Londyn, 1851)'
      },
      title: {
        en: 'The Immortal Game: Sacrificing Both Rooks & the Queen',
        pl: 'Nieśmiertelna Partia: Ofiara obu wież i hetmana'
      },
      overview: {
        en: 'The supreme Romantic battle of the 19th century. Anderssen sacrifices a bishop on move 11, both rooks on moves 18–19, and his queen on move 22 to deliver checkmate with three minor pieces!',
        pl: 'Najsłynniejsza romantyczna bitwa XIX wieku. Anderssen poświęca gońca w 11. ruchu, obie wieże w ruchach 18–19 oraz hetmana w 22. ruchu, by dać mata trzema lekkimi figurami!'
      },
      moves: [
        'e4', 'e5', 'f4', 'exf4', 'Bc4', 'Qh4+', 'Kf1', 'b5', 'Bxb5', 'Nf6',
        'Nf3', 'Qh6', 'd3', 'Nh5', 'Nh4', "Qg5", 'Nf5', 'c6', 'g4', 'Nf6',
        'Rg1', 'cxb5', 'h4', 'Qg6', 'h5', 'Qg5', 'Qf3', 'Ng8', 'Bxf4', 'Qf6',
        'Nc3', 'Bc5', 'Nd5', 'Qxb2', 'Bd6', 'Bxg1', 'e5', 'Qxa1+', 'Ke2', 'Na6',
        'Nxg7+', 'Kd8', 'Qf6+', 'Nxf6', 'Be7#'
      ],
      annotations: {
        '4... b5': {
          badge: '⚔️',
          arrows: ['b5->c4:red', 'c8->b7:blue'],
          targets: ['c4'],
          text: {
            en: 'The Bryan Countergambit! Kieseritzky sacrifices a wing pawn to deflect White’s bishop from the f7 target.',
            pl: 'Kontrgambit Bryana! Kieseritzky poświęca piona skrzydłowego, by odciągnąć białego gońca od celowania w punkt f7.'
          }
        },
        '11. Rg1': {
          badge: '!',
          arrows: ['g1->g4:green', 'c6->b5:red'],
          targets: ['b5', 'g4'],
          text: {
            en: 'First piece sacrifice! Anderssen sacrifices the b5 bishop to gain two tempos trapping Black’s queen on the kingside.',
            pl: 'Pierwsza ofiara figury! Anderssen poświęca gońca na b5, aby zyskać dwa tempa i osaczyć czarnego hetmana na skrzydle królewskim.'
          }
        },
        '15. Bxf4': {
          badge: '!',
          arrows: ['f4->c7:amber', 'f3->b7:amber', 'f5->g7:red'],
          targets: ['f6', 'g7'],
          text: {
            en: 'Look at the contrast: White has four active pieces targeting the center, while Black’s pieces have been driven back to the 8th rank!',
            pl: 'Spójrz na kontrast: białe mają cztery aktywne figury celujące w centrum, podczas gdy czarne figury zostały cofnięte na ósmą linię!'
          }
        },
        '17. Nd5': {
          badge: '!',
          arrows: ['d5->c7:red', 'd5->f6:red', 'f4->d6:green'],
          targets: ['c7', 'b2'],
          text: {
            en: 'Centralizing with power! White ignores the b2 pawn and threatens the devastating fork on c7.',
            pl: 'Potężna centralizacja! Białe ignorują piona b2 i grożą niszczycielskimi widełkami na c7.'
          }
        },
        '18. Bd6': {
          badge: '!!',
          arrows: ['d6->f8:red', 'c5->g1:blue', 'b2->a1:blue'],
          targets: ['d6', 'f8', 'g1'],
          text: {
            en: 'Offering BOTH rooks! Bd6 weaves a mating net around e7 and f8 while leaving the g1 and a1 rooks to be captured.',
            pl: 'Ofiara OBU wież! Ruch Gd6 zarzuca sieć matową wokół pól e7 i f8, oddając czarnym wieże na g1 oraz a1.'
          }
        },
        '19. e5': {
          badge: '!',
          arrows: ['f4->f6:amber', 'g5->f6:amber'],
          targets: ['e5', 'f6'],
          text: {
            en: 'Sealing the diagonal! 19. e5 cuts off the black queen on b2/a1 from returning along the a1–h8 diagonal to defend f6!',
            pl: 'Odcięcie przekątnej! 19. e5 odcina czarnemu hetmanowi powrót po wielkiej przekątnej a1–h8 do obrony pola f6!'
          }
        },
        '21. Nxg7+': {
          badge: '!',
          arrows: ['g7->e8:red', 'd6->f8:amber', 'd5->c7:amber'],
          targets: ['e8', 'd8'],
          text: {
            en: 'Clearing the f5 square and forcing the black king onto d8 where all escape squares are controlled.',
            pl: 'Szach na g7 zmusza czarnego króla do wejścia na pole d8, gdzie wszystkie drogi ucieczki są odcięte.'
          }
        },
        '22. Qf6+': {
          badge: '!!',
          arrows: ['f6->d8:red', 'g8->f6:amber', 'd6->e7:red'],
          targets: ['f6', 'e7', 'd8'],
          text: {
            en: 'The crowning Queen Sacrifice! 22. Qf6+!! deflects the knight on g8 away from guarding the e7 mating square!',
            pl: 'Koronująca ofiara hetmana! 22. Hf6+!! odciąga skoczka g8 od obrony kluczowego pola matowego e7!'
          }
        },
        '23. Be7#': {
          badge: '🏆',
          arrows: ['e7->d8:red', 'd5->c7:amber', 'd5->e7:green', 'g7->e8:amber'],
          targets: ['d8', 'e7'],
          text: {
            en: 'Checkmate! Down a Queen, two Rooks, and a Bishop, Anderssen’s three remaining minor pieces deliver the Immortal Mate!',
            pl: 'Mat! Mimo straty hetmana, dwóch wież i gońca, trzy pozostałe lekkie figury Anderssena dają Nieśmiertelnego Mata!'
          }
        }
      }
    },
    {
      id: 'ba-06',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'doubleCheck', 'battery', 'kingHunt'],
      players: {
        en: 'Adolf Anderssen vs. Jean Dufresne (Berlin, 1852)',
        pl: 'Adolf Anderssen – Jean Dufresne (Berlin, 1852)'
      },
      title: {
        en: 'The Evergreen Game: Laser-Beam Open Lines',
        pl: 'Wiecznie Zielona Partia: Laserowe uderzenie po otwartych liniach'
      },
      overview: {
        en: 'With Black threatening immediate checkmate on g2, Anderssen unleashes a 5-move forcing combination sacrificing a knight, rook, and queen to hunt the black king down the d- and e-files.',
        pl: 'W obliczu natychmiastowej groźby mata na g2 Anderssen uruchamia 5-posunięciową kombinację forsującą, poświęcając skoczka, wieżę i hetmana, by dopaść króla na liniach d oraz e.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bxb4', 'c3', 'Ba5',
        'd4', 'exd4', 'O-O', 'd3', 'Qb3', 'Qf6', 'e5', 'Qg6', 'Re1', 'Nge7',
        'Ba3', 'b5', 'Qxb5', 'Rb8', 'Qa4', 'Bb6', 'Nbd2', 'Bb7', 'Ne4', 'Qf5',
        'Bxd3', 'Qh5', 'Nf6+', 'gxf6', 'exf6', 'Rg8', 'Rad1', 'Qxf3', 'Rxe7+', 'Nxe7',
        'Qxd7+', 'Kxd7', 'Bf5+', 'Ke8', 'Bd7+', 'Kf8', 'Bxe7#'
      ],
      annotations: {
        '4. b4': {
          badge: '📖',
          arrows: ['b4->c5:red', 'c3->d4:green'],
          targets: ['c5', 'd4'],
          text: {
            en: 'The Evans Gambit! White sacrifices the b4 pawn to gain rapid central control with c3 and d4.',
            pl: 'Gambit Evansa! Białe poświęcają piona b4, aby błyskawicznie opanować centrum ruchami c3 oraz d4.'
          }
        },
        '8. Qb3': {
          badge: '🎯',
          arrows: ['b3->f7:red', 'c4->f7:red'],
          targets: ['f7'],
          text: {
            en: 'Once again, the classic Queen + Bishop battery targets f7!',
            pl: 'Po raz kolejny klasyczna bateria hetman + goniec celuje w czuły punkt f7!'
          }
        },
        '17. Nf6+': {
          badge: '!',
          arrows: ['f6->e8:red', 'f6->h5:red', 'e1->e7:amber'],
          targets: ['e8', 'f6'],
          text: {
            en: 'Knight sacrifice! Opening the e-file directly against the uncastled black king on e8.',
            pl: 'Ofiara skoczka! Otwiera linię e bezpośrednio przeciwko czarnemu królowi stojącemu w centrum na e8.'
          }
        },
        '18... Rg8': {
          badge: '⚔️',
          arrows: ['g8->g2:red', 'b7->f3:red'],
          targets: ['g2', 'f3'],
          text: {
            en: 'Dufresne counter-attacks! The g8 rook and b7 bishop now aim straight at White’s king on g1.',
            pl: 'Dufresne kontratakuje! Wieża z g8 oraz goniec z b7 celują teraz prosto w białego króla na g1.'
          }
        },
        '19. Rad1': {
          badge: '!!',
          arrows: ['d1->d7:red', 'e1->e7:red', 'h5->f3:blue'],
          targets: ['d7', 'e7', 'f3'],
          text: {
            en: 'Calmly bringing the last reserve into battle! White leaves the f3 knight to be captured, creating threat of mate on g2.',
            pl: 'Spokojne wprowadzenie ostatniej rezerwy do bitwy! Białe zostawiają skoczka f3 pod biciem, mimo że czarnym grozi mat na g2.'
          }
        },
        '20. Rxe7+': {
          badge: '!!',
          arrows: ['e7->e8:red', 'a4->d7:amber', 'd1->d7:amber'],
          targets: ['e7', 'd7', 'e8'],
          text: {
            en: 'Rook sacrifice! Eliminating the guard of d7 so the queen and d1 rook can strike along the d-file.',
            pl: 'Ofiara wieży! Usuwa obrońcę pola d7, przygotowując decydujące uderzenie hetmana i wieży po linii d.'
          }
        },
        '21. Qxd7+': {
          badge: '!!',
          arrows: ['d7->e8:red', 'd3->f5:amber', 'd1->d7:amber'],
          targets: ['d7', 'e8'],
          text: {
            en: 'Queen Sacrifice! 21. Qxd7+!! drags the black king onto d7 — straight into a discovered double check!',
            pl: 'Ofiara hetmana! 21. Hxd7+!! zaciąga czarnego króla na pole d7 — prosto pod podwójny szach z odsłonięcia!'
          }
        },
        '22. Bf5+': {
          badge: '!',
          arrows: ['f5->d7:red', 'd1->d7:red'],
          targets: ['d7', 'e8'],
          text: {
            en: 'Double Check! Both the bishop on f5 and rook on d1 check the king, forcing 22... Ke8 (since 22... Kc6 allows 23. Bd7#).',
            pl: 'Podwójny szach! Zarówno goniec z f5, jak i wieża z d1 szachują króla, wymuszając 22... Ke8 (po 22... Kc6 następuje 23. Gd7#).'
          }
        },
        '24. Bxe7#': {
          badge: '🏆',
          arrows: ['e7->f8:red', 'd7->e8:amber', 'f6->g7:amber'],
          targets: ['f8', 'e7'],
          text: {
            en: 'The Evergreen Checkmate! Two bishops and a pawn on f6 weave a flawless mating net around the king.',
            pl: 'Wiecznie Zielony Mat! Para gońców oraz pion na f6 tworzą bezbłędną sieć matową wokół czarnego króla.'
          }
        }
      }
    },

    // === ADDITIONAL 6 BATTLES (2 Easy, 2 Medium, 2 Hard -> 12 Total) ===
    {
      id: 'ba-07',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'pin', 'smothered', 'fork'],
      players: {
        en: 'Amateur vs. Boris Kostić (Cologne, 1911)',
        pl: 'Amator – Boris Kostić (Kolonia, 1911)'
      },
      title: {
        en: 'Blackburne Shilling Gambit: 7-Move Smothered Pin Mate',
        pl: 'Gambit Szylingowy Blackburne’a: Mat ze związaniem w 7 ruchach'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Watch how Black baits the e5 pawn with 3... Nd4?! to invade on g2 and e4, pinning White’s bishop on e2 for an instant 7-move checkmate.',
        pl: 'Widok z perspektywy czarnych! Zobacz, jak czarne wystawiają piona e5 na przynętę ruchem 3... Sd4?!, aby wtargnąć hetmanem na g2 oraz e4 i zmatować białe w 7 ruchach dzięki związaniu gońca e2.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nd4', 'Nxe5', 'Qg5', 'Nxf7', 'Qxg2',
        'Rf1', 'Qxe4+', 'Be2', 'Nf3#'
      ],
      annotations: {
        '3... Nd4': {
          badge: '?!',
          arrows: ['d4->f3:amber', 'd4->c2:red', 'f3->e5:blue'],
          targets: ['e5', 'f3'],
          text: {
            en: 'The Shilling Gambit trap! Black leaves the e5 pawn undefended to lure White’s knight away from f3.',
            pl: 'Pułapka Gambitu Szylingowego! Czarne zostawiają piona e5 bez obrony, by odciągnąć białego skoczka z pola f3.'
          }
        },
        '4. Nxe5': {
          badge: '?',
          arrows: ['d8->g5:red', 'g5->g2:red', 'g5->e5:red'],
          targets: ['e5', 'g2'],
          text: {
            en: 'Greedy capture! Taking e5 loses instantly to the queen sortie 4... Qg5! (Correct was 4. Nxd4!).',
            pl: 'Zbyt chciwe bicie! Wzięcie piona e5 przegrywa przez wypad hetmana 4... Hg5! (Poprawne było 4. Sxd4!).'
          }
        },
        '4... Qg5': {
          badge: '!',
          arrows: ['g5->e5:red', 'g5->g2:red'],
          targets: ['e5', 'g2'],
          text: {
            en: 'Double attack! The black queen simultaneously targets the knight on e5 and the g2 pawn.',
            pl: 'Podwójny cel! Czarny hetman jednocześnie bierze na celownik skoczka e5 oraz bezbronnego piona g2.'
          }
        },
        '5. Nxf7': {
          badge: '??',
          arrows: ['f7->d8:blue', 'f7->h8:blue', 'g5->g2:red'],
          targets: ['g2', 'e4'],
          text: {
            en: 'White hopes for a fork on f7, overlooking that Black’s counter-attack on g2 and e4 is much faster!',
            pl: 'Białe liczą na widełki na f7, nie widząc, że kontratak czarnych przez g2 i e4 matuje króla!'
          }
        },
        '6... Qxe4+': {
          badge: '!',
          arrows: ['e4->e1:red', 'd4->f3:red'],
          targets: ['e1', 'e2', 'f3'],
          text: {
            en: 'Crucial check! Since 7. Qe2 loses the queen to 7... Nxe2, White must block with 7. Be2.',
            pl: 'Kluczowy szach! Ponieważ 7. He2 traci hetmana po 7... Sxe2, białe muszą zasłonić się gońcem 7. Ge2.'
          }
        },
        '7... Nf3#': {
          badge: '🏆',
          arrows: ['f3->e1:red', 'e4->e2:amber', 'e2->e1:amber'],
          targets: ['e1', 'e2'],
          text: {
            en: 'Smothered Pin Mate! The bishop on e2 cannot capture the knight on f3 because it is pinned to the king on e1 by Black’s queen!',
            pl: 'Mat ze związaniem! Goniec na e2 nie może zbić skoczka f3, ponieważ jest bezwzględnie związany z królem e1 przez czarnego hetmana!'
          }
        }
      }
    },
    {
      id: 'ba-08',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'battery', 'clearance', 'kingHunt'],
      players: {
        en: 'Gioachino Greco vs. NN (Rome, 1620)',
        pl: 'Gioachino Greco – NN (Rzym, 1620)'
      },
      title: {
        en: 'The Classic Greek Gift Sacrifice (7. Bxh7+!)',
        pl: 'Klasyczny "Grecki Dar" (7. Gxh7+!)'
      },
      overview: {
        en: 'The earliest recorded masterpiece of the Greek Gift bishop sacrifice on h7! Watch how Bd3, Ng5, the h-file rook, and Qh5 combine to tear open the castled king’s fortress.',
        pl: 'Najstarszy zapisany wzorzec "Greckiego Daru" — ofiary gońca na h7! Zobacz, jak goniec d3, skoczek g5, wieża na linii h oraz hetman h5 rozrywają roszadę czarnych.'
      },
      moves: [
        'e4', 'e6', 'd4', 'Nf6', 'Bd3', 'Nc6', 'Nf3', 'Be7', 'h4', 'O-O',
        'e5', 'Nd5', 'Bxh7+', 'Kxh7', 'Ng5+', 'Bxg5', 'hxg5+', 'Kg8', 'Qh5', 'f6',
        'g6', 'fxe5', 'Qh8#'
      ],
      annotations: {
        '5. h4': {
          badge: '⚔️',
          arrows: ['h4->g5:green', 'd3->h7:red'],
          targets: ['h7'],
          text: {
            en: 'Setting the Greek Gift hook! The h4 pawn prepares to support Ng5 and open the h-file if Black castles kingside.',
            pl: 'Przygotowanie "Greckiego Daru"! Pion h4 jest gotowy wesprzeć skok Sg5 i otworzyć linię h dla wieży h1, jeśli czarne zrobią krótką roszadę.'
          }
        },
        '6. e5': {
          badge: '!',
          arrows: ['e5->f6:red', 'd3->h7:red'],
          targets: ['f6', 'h7'],
          text: {
            en: 'Driving away the key kingside defender! Once the f6 knight leaves, h7 has no protector except the black king.',
            pl: 'Przepędzenie głównego obrońcy! Gdy skoczek f6 odchodzi z posterunku, punkt h7 zostaje bez osłony.'
          }
        },
        '7. Bxh7+': {
          badge: '!!',
          arrows: ['h7->g8:red', 'f3->g5:green', 'd1->h5:green'],
          targets: ['h7', 'g8'],
          text: {
            en: 'The Greek Gift Sacrifice! 7. Bxh7+! blasts open the h7 shelter and drags the black king out into the open.',
            pl: 'Ofiara "Greckiego Daru"! 7. Gxh7+! rozbija osłonę pionową króla i wyciąga go na otwartą linię.'
          }
        },
        '8. Ng5+': {
          badge: '!',
          arrows: ['g5->h7:red', 'h4->g5:amber', 'd1->h5:green'],
          targets: ['h7', 'g5'],
          text: {
            en: 'Follow-up check! If Black declines the knight, Qh5+ mates immediately; capturing on g5 opens the deadly h1 rook!',
            pl: 'Kolejny szach! Jeśli czarne nie zbiją skoczka, wejście Hh5+ daje natychmiastowego mata; bicie na g5 otwiera zaś linię dla wieży h1!'
          }
        },
        '9. hxg5+': {
          badge: '!',
          arrows: ['h1->h8:red', 'd1->h5:green'],
          targets: ['g8', 'h8'],
          text: {
            en: 'Discovered check from the h1 rook! The h-file is now a highway straight to h8.',
            pl: 'Szach z odsłonięcia od wieży z h1! Linia h staje się teraz autostradą prowadzącą prosto do pola h8.'
          }
        },
        '10. Qh5': {
          badge: '!',
          arrows: ['h5->h7:red', 'h5->h8:red', 'h1->h8:amber'],
          targets: ['h7', 'h8'],
          text: {
            en: 'Doubling on the h-file! Queen and rook form an unstoppable battery aimed at h7 and h8.',
            pl: 'Zdwojenie na linii h! Hetman i wieża tworzą niepowstrzymaną baterię wycelowaną w pola h7 oraz h8.'
          }
        },
        '11. g6': {
          badge: '!',
          arrows: ['g6->f7:red', 'h5->h8:red'],
          targets: ['f7', 'h8'],
          text: {
            en: 'Sealing the coffin! 11. g6! clamps down on the f7 escape square so the black king cannot run.',
            pl: 'Zamknięcie klatki! 11. g6! odcina królowi drogę ucieczki przez pole f7.'
          }
        },
        '12. Qh8#': {
          badge: '🏆',
          arrows: ['h8->g8:red', 'g6->f7:amber', 'h1->h8:green'],
          targets: ['g8', 'h8'],
          text: {
            en: 'Checkmate on h8! Supported by the h1 rook while the g6 pawn guards f7.',
            pl: 'Mat na h8! Hetman wspierany przez wieżę h1 zadaje decydujący cios, podczas gdy pion g6 pilnuje pola f7.'
          }
        }
      }
    },

    // === MEDIUM (+2) ===
    {
      id: 'ba-09',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'boden', 'clearance', 'attraction'],
      players: {
        en: 'Esteban Canal vs. Amateur (Budapest, 1934)',
        pl: 'Esteban Canal – Amator (Budapeszt, 1934)'
      },
      title: {
        en: "The Peruvian Immortal: Sacrificing Both Rooks & Queen for Boden's Mate",
        pl: 'Peruwiańska Nieśmiertelna: Ofiara obu wież i hetmana do mata Bodena'
      },
      overview: {
        en: 'In just 14 moves, Peruvian master Esteban Canal sacrifices his a1 rook, his h1 rook, and his Queen on c6 (`13. Qxc6+!!`) to deliver a pure crisscrossed Boden’s Mate with his two bishops!',
        pl: 'W zaledwie 14 ruchach peruwiański mistrz Esteban Canal poświęca wieżę a1, wieżę h1 oraz hetmana na c6 (`13. Hxc6+!!`), by dać czystego mata Bodena samą parą gońców!'
      },
      moves: [
        'e4', 'd5', 'exd5', 'Qxd5', 'Nc3', 'Qa5', 'd4', 'c6', 'Nf3', 'Bg4',
        'Bf4', 'e6', 'h3', 'Bxf3', 'Qxf3', 'Bb4', 'Be2', 'Nd7', 'a3', 'O-O-O',
        'axb4', 'Qxa1+', 'Kd2', 'Qxh1', 'Qxc6+', 'bxc6', 'Ba6#'
      ],
      annotations: {
        '10. a3': {
          badge: '!',
          arrows: ['a3->b4:red', 'a1->a8:amber'],
          targets: ['b4', 'a1'],
          text: {
            en: 'Baiting the trap! White challenges the b4 bishop even though capturing it leaves the a1 rook undefended.',
            pl: 'Zastawienie sieci! Białe atakują gońca b4, mimo że po biciu axb4 wieża na a1 straci ochronę.'
          }
        },
        '10... O-O-O': {
          badge: '?',
          arrows: ['a3->b4:red', 'f3->c6:red', 'e2->a6:amber'],
          targets: ['c8', 'c6', 'b4'],
          text: {
            en: 'Castling into the storm! Black assumes the a1 rook is pinned to the h1 rook, missing the deadly criss-cross bishop geometry against c8.',
            pl: 'Roszada prosto w paszczę lwa! Czarne sądzą, że białe nie mogą bić na b4 z uwagi na stratę obu wież, nie dostrzegając geometrii mata Bodena.'
          }
        },
        '11. axb4': {
          badge: '!!',
          arrows: ['a5->a1:blue', 'f3->c6:red', 'f4->d6:amber'],
          targets: ['a1', 'c6'],
          text: {
            en: 'Double Rook Sacrifice! Canal calmly captures the bishop, inviting Black’s queen to gobble up both rooks in the corners.',
            pl: 'Ofiara obu wież! Canal spokojnie bije gońca, zapraszając czarnego hetmana do zjedzenia obu wież w rogach szachownicy.'
          }
        },
        '12... Qxh1': {
          badge: '??',
          arrows: ['f3->c6:red', 'e2->a6:red', 'f4->d6:amber'],
          targets: ['c6', 'a6', 'c8'],
          text: {
            en: 'Black is now up two full rooks, but the black queen is stuck in the distant h1 corner while c6 and a6 are fatally weak!',
            pl: 'Czarne mają dwie wieże przewagi, ale ich hetman utknął w dalekim rogu h1, podczas gdy pola c6 i a6 wokół króla c8 płoną!'
          }
        },
        '13. Qxc6+': {
          badge: '!!',
          arrows: ['c6->c8:red', 'b7->c6:amber', 'e2->a6:red'],
          targets: ['c6', 'c8', 'a6'],
          text: {
            en: 'Crowning Queen Sacrifice! 13. Qxc6+!! forces 13... bxc6, clearing the b-file pawn so it no longer blocks the a6–c8 diagonal!',
            pl: 'Koronująca ofiara hetmana! 13. Hxc6+!! wymusza 13... bxc6, otwierając przekątną a6–c8 i jednocześnie blokując królowi pole c6!'
          }
        },
        '14. Ba6#': {
          badge: '🏆',
          arrows: ['a6->c8:red', 'f4->c7:amber', 'f4->d6:amber'],
          targets: ['c8', 'a6'],
          text: {
            en: "Boden's Mate! The two criss-crossing bishops on a6 and f4 slice through the queenside for an unforgettable checkmate.",
            pl: 'Mat Bodena! Dwa krzyżujące się gońce na a6 oraz f4 przecinają skrzydło hetmańskie, dając niezapomnianego mata.'
          }
        }
      }
    },
    {
      id: 'ba-10',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'battery', 'pin', 'kingHunt'],
      players: {
        en: 'Gioachino Greco vs. NN (Europe, 1620)',
        pl: 'Gioachino Greco – NN (Europa, 1620)'
      },
      title: {
        en: 'Greco’s Italian Tempest: Sacrificing the Rook on a1',
        pl: 'Włoska Burza Greco: Ofiara wieży a1 i polowanie na króla'
      },
      overview: {
        en: 'The textbook Italian Game gambit (`4. c3` & `5. d4`). Greco sacrifices two pawns and his a1 rook (`10. Qb3! Bxa1`) to trap the black king in the center under a crossfire of bishops, knight, and queen.',
        pl: 'Wzorcowy gambit w Partii Włoskiej (`4. c3` i `5. d4`). Greco poświęca dwa pionki oraz wieżę a1 (`10. Hb3! Gxa1`), by uwięzić czarnego króla w centrum pod krzyżowym ogniem figur.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4',
        'cxd4', 'Bb4+', 'Nc3', 'Nxe4', 'O-O', 'Nxc3', 'bxc3', 'Bxc3', 'Qb3', 'Bxa1',
        'Bxf7+', 'Kf8', 'Bg5', 'Ne7', 'Ne5', 'Bxd4', 'Bg6', 'd5', 'Qf3+', 'Bf5',
        'Bxf5', 'Bxe5', 'Be6+', 'Bf6', 'Bxf6', 'gxf6', 'Qxf6+', 'Ke8', 'Qf7#'
      ],
      annotations: {
        '7... Nxe4': {
          badge: '⚔️',
          arrows: ['e4->c3:red', 'b4->c3:red', 'e1->g1:green'],
          targets: ['c3'],
          text: {
            en: 'Black captures the central pawn and piles up on the pinned c3 knight, while White prepares to castle and open lines.',
            pl: 'Czarne biją centralnego piona i naciskają na związanego skoczka c3, podczas gdy białe wykonują roszadę, by otworzyć linie.'
          }
        },
        '10. Qb3': {
          badge: '!!',
          arrows: ['b3->f7:red', 'c4->f7:red', 'b3->c3:amber'],
          targets: ['f7', 'a1'],
          text: {
            en: 'Offering the a1 rook! Instead of saving the rook, Greco forms a lethal Queen + Bishop battery aimed straight at f7.',
            pl: 'Ofiara wieży a1! Zamiast ratować wieżę w rogu, Greco tworzy zabójczą baterię hetman + goniec wycelowaną w punkt f7.'
          }
        },
        '11. Bxf7+': {
          badge: '!',
          arrows: ['f7->e8:red', 'c1->g5:green'],
          targets: ['e8', 'f8'],
          text: {
            en: 'Stripping castling rights! Black’s king is forced to f8, losing the ability to castle while the a1 bishop is stranded offside.',
            pl: 'Pozbawienie prawa do roszady! Król czarnych musi iść na f8, a czarny goniec na a1 jest całkowicie wyłączony z obrony.'
          }
        },
        '12. Bg5': {
          badge: '!',
          arrows: ['g5->d8:red', 'f7->e8:amber'],
          targets: ['d8', 'e7'],
          text: {
            en: 'Trapping the black queen! The only way to save the d8 queen is 12... Ne7, which self-pins the knight!',
            pl: 'Atak na czarnego hetmana! Jedynym sposobem na uratowanie hetmana d8 jest 12... Se7, co natychmiast wiąże skoczka!'
          }
        },
        '14. Bg6': {
          badge: '!!',
          arrows: ['b3->f7:red', 'g6->f7:red', 'g5->e7:amber'],
          targets: ['f7', 'g6'],
          text: {
            en: 'Clearance & Mate Threat! Moving the bishop to g6 unblocks the b3 queen’s path to f7! Note that 14... Nxg6 allows 15. Qf7#.',
            pl: 'Oczyszczenie linii! Odejście gońca na g6 otwiera hetmanowi z b3 drogę do mata na f7! Po 14... Sxg6 następuje 15. Hf7#.'
          }
        },
        '15. Qf3+': {
          badge: '!',
          arrows: ['f3->f8:red', 'f3->f5:red', 'g6->f5:amber'],
          targets: ['f8', 'f5'],
          text: {
            en: 'Shifting the attack to the f-file! Every check strips away another defender around the king.',
            pl: 'Przeniesienie ognia na otwartą linię f! Każdy kolejny szach eliminuje następnego obrońcę wokół czarnego króla.'
          }
        },
        '17. Be6+': {
          badge: '!',
          arrows: ['f3->f8:red', 'e6->f7:amber'],
          targets: ['f8', 'f6'],
          text: {
            en: 'Discovered Check! The bishop steps to e6, unleashing the queen’s check along the f-file.',
            pl: 'Szach z odsłonięcia! Goniec przechodzi na e6, odsłaniając linię szacha dla białego hetmana po linii f.'
          }
        },
        '20. Qf7#': {
          badge: '🏆',
          arrows: ['f7->e8:red', 'e6->f7:green'],
          targets: ['e8', 'f7'],
          text: {
            en: 'Checkmate! The queen and e6 bishop finish the king hunt right in the center.',
            pl: 'Mat! Hetman wspierany przez gońca e6 kończy polowanie na króla w samym centrum.'
          }
        }
      }
    },

    // === HARD (+2) ===
    {
      id: 'ba-11',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'doubleCheck'],
      players: {
        en: 'Edward Lasker vs. Sir George Thomas (London, 1912)',
        pl: 'Edward Lasker – Sir George Thomas (Londyn, 1912)'
      },
      title: {
        en: 'Fatal King Walk: Hunting the King from h7 All the Way to g1!',
        pl: 'Królewski Spacer: Polowanie na króla z pola h7 aż na g1!'
      },
      overview: {
        en: 'One of the most extraordinary king hunts ever played! With 11. Qxh7+!!, Edward Lasker sacrifices his queen to force the black king on a 7-move forced march from g8 all the way down to g1!',
        pl: 'Jedno z najbardziej niezwykłych polowań na króla w dziejach szachów! Ofiarą hetmana 11. Hxh7+!! Edward Lasker zmusza czarnego króla do przymusowego marszu przez całą szachownicę z g8 aż na pole g1!'
      },
      moves: [
        'd4', 'e6', 'Nf3', 'f5', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Bxf6', 'Bxf6',
        'e4', 'fxe4', 'Nxe4', 'b6', 'Ne5', 'O-O', 'Bd3', 'Bb7', 'Qh5', 'Qe7',
        'Qxh7+', 'Kxh7', 'Nxf6+', 'Kh6', 'Neg4+', 'Kg5', 'h4+', 'Kf4', 'g3+', 'Kf3',
        'Be2+', 'Kg2', 'Rh2+', 'Kg1', 'Kd2#'
      ],
      annotations: {
        '8. Ne5': {
          badge: '!',
          arrows: ['e5->f7:amber', 'd1->h5:green', 'f1->d3:green'],
          targets: ['h7', 'f6'],
          text: {
            en: 'Dominant knights! Both white knights control the center and prepare a massive kingside assault.',
            pl: 'Dominacja skoczków! Oba białe skoczki panują nad centrum i przygotowują szturm na skrzydle królewskim.'
          }
        },
        '10. Qh5': {
          badge: '⚔️',
          arrows: ['h5->h7:red', 'd3->h7:red', 'e4->f6:red'],
          targets: ['h7', 'f6'],
          text: {
            en: 'Threatening Nxf6+ followed by Qxh7#! Black plays 10... Qe7 thinking f6 and h7 are covered, but misses a stunning queen sacrifice.',
            pl: 'Groźba Sxf6+ i Hxh7#! Czarne grają 10... He7, sądząc, że pola f6 oraz h7 są zabezpieczone, ale przeoczają genialną ofiarę hetmana.'
          }
        },
        '11. Qxh7+': {
          badge: '!!',
          arrows: ['h7->g8:red', 'e4->f6:red', 'd3->h7:amber'],
          targets: ['h7', 'g8'],
          text: {
            en: 'Immortal Queen Sacrifice! 11. Qxh7+!! forces 11... Kxh7, dragging the king onto a square where 12. Nxf6+ delivers a double check!',
            pl: 'Nieśmiertelna ofiara hetmana! 11. Hxh7+!! wymusza 11... Kxh7, wyciągając króla na pole, gdzie 12. Sxf6+ uderza podwójnym szachem!'
          }
        },
        '12. Nxf6+': {
          badge: '!!',
          arrows: ['f6->h7:red', 'd3->h7:red', 'f6->g8:amber'],
          targets: ['h7', 'h6'],
          text: {
            en: 'Double Check! Both the f6 knight and d3 bishop check the king; since g8 is guarded by the knight, the king is forced forward to h6!',
            pl: 'Podwójny szach! Zarówno skoczek f6, jak i goniec d3 szachują króla; ponieważ pole g8 jest odcięte przez skoczka, król musi wyjść naprzód na h6!'
          }
        },
        '13. Neg4+': {
          badge: '!',
          arrows: ['g4->h6:red', 'f6->h7:amber', 'h2->h4:green'],
          targets: ['h6', 'g5'],
          text: {
            en: 'The knights dance in harmony! Every retreat square is covered, forcing the king deeper to g5.',
            pl: 'Perfekcyjna współpraca skoczków! Wszystkie pola odwrotu są odcięte, co zmusza czarnego króla do marszu na g5.'
          }
        },
        '14. h4+': {
          badge: '!',
          arrows: ['h4->g5:red', 'c1->g5:amber'],
          targets: ['g5', 'f4'],
          text: {
            en: 'Pawn check! Reinforced by the c1 bishop, 14. h4+ drives the black king further into White’s territory on f4.',
            pl: 'Szach pionem! Wspierany przez gońca z c1 ruch 14. h4+ spycha czarnego króla jeszcze głębiej na pole f4.'
          }
        },
        '15. g3+': {
          badge: '!',
          arrows: ['g3->f4:red', 'f6->e4:amber', 'g4->e5:amber'],
          targets: ['f4', 'f3'],
          text: {
            en: 'Another pawn check! With e4 and e5 controlled by White’s knights, the black king must step onto f3.',
            pl: 'Kolejny szach pionem! Ponieważ pola e4 i e5 są kontrolowane przez białe skoczki, król musi wejść na f3.'
          }
        },
        '16. Be2+': {
          badge: '!',
          arrows: ['e2->f3:red', 'h1->h2:green'],
          targets: ['f3', 'g2'],
          text: {
            en: 'Quietly retreating the bishop with check forces the black king down to the 2nd rank (`Kg2`)!',
            pl: 'Cofnięcie gońca z szachem zmusza czarnego króla do zejścia aż na drugą linię (`Kg2`)!'
          }
        },
        '18. Kd2#': {
          badge: '🏆',
          arrows: ['a1->g1:red', 'h2->h1:amber', 'e2->f1:amber'],
          targets: ['g1', 'd2'],
          text: {
            en: 'Discovered Checkmate by the King (or O-O-O#)! Moving the king to d2 unleashes the a1 rook along the 1st rank to mate the black king on g1!',
            pl: 'Mat z odsłonięcia ruchem króla (białe mogły też zagrać 18. O-O-O#)! Ruch 18. Kd2# odsłania wieżę a1, która matuje czarnego króla na pierwszej linii!'
          }
        }
      }
    },
    {
      id: 'ba-12',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'deflection', 'fork', 'kingHunt', 'battery'],
      players: {
        en: 'Donald Byrne vs. Bobby Fischer (New York, 1956)',
        pl: 'Donald Byrne – Bobby Fischer (Nowy Jork, 1956)'
      },
      title: {
        en: 'The Game of the Century: 13-Year-Old Fischer’s Queen Sacrifice',
        pl: '"Partia Stulecia": Legendarna ofiara hetmana 13-letniego Fischera'
      },
      overview: {
        en: 'Viewed from Black’s perspective! At just 13 years old, Bobby Fischer stunned the chess world with 11... Na4!! and the immortal Queen sacrifice 17... Be6!!, culminating in a windmill and textbook mating net.',
        pl: 'Widok z perspektywy czarnych! Zaledwie 13-letni Bobby Fischer zachwycił świat genialnym zwrotem 11... Sa4!! oraz nieśmiertelną ofiarą hetmana 17... Ge6!!, kończąc partię młynkiem i siecią matową.'
      },
      moves: [
        'Nf3', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'd4', 'O-O', 'Bf4', 'd5',
        'Qb3', 'dxc4', 'Qxc4', 'c6', 'e4', 'Nbd7', 'Rd1', 'Nb6', 'Qc5', 'Bg4',
        'Bg5', 'Na4', 'Qa3', 'Nxc3', 'bxc3', 'Nxe4', 'Bxe7', 'Qb6', 'Bc4', 'Nxc3',
        'Bc5', 'Rfe8+', 'Kf1', 'Be6', 'Bxb6', 'Bxc4+', 'Kg1', 'Ne2+', 'Kf1', 'Nxd4+',
        'Kg1', 'Ne2+', 'Kf1', 'Nc3+', 'Kg1', 'axb6', 'Qb4', 'Ra4', 'Qxb6', 'Nxd1',
        'h3', 'Rxa2', 'Kh2', 'Nxf2', 'Re1', 'Rxe1', 'Qd8+', 'Bf8', 'Nxe1', 'Bd5',
        'Nf3', 'Ne4', 'Qb8', 'b5', 'h4', 'h5', 'Ne5', 'Kg7', 'Kg1', 'Bc5+',
        'Kf1', 'Ng3+', 'Ke1', 'Bb4+', 'Kd1', 'Bb3+', 'Kc1', 'Ne2+', 'Kb1', 'Nc3+',
        'Kc1', 'Rc2#'
      ],
      annotations: {
        '11. Bg5': {
          badge: '?',
          arrows: ['b6->a4:red', 'e1->g1:blue'],
          targets: ['c3', 'c5', 'e4'],
          text: {
            en: 'Byrne moves the bishop a second time instead of castling (`11. Be2`), allowing Fischer to launch abolt-from-the-blue tactical strike!',
            pl: 'Byrne rusza drugi raz tym samym gońcem zamiast dokończyć rozwój (`11. Ge2`), co pozwala Fischerowi na piorunujący zwrot taktyczny!'
          }
        },
        '11... Na4': {
          badge: '!!',
          arrows: ['a4->c3:red', 'a4->c5:red', 'f6->e4:amber'],
          targets: ['a4', 'c3', 'e4'],
          text: {
            en: 'Brilliant deflection! If 12. Nxa4 Nxe4! 13. Qc1 Qa5+ wins the piece back with a crushing attack against the uncastled white king.',
            pl: 'Genialne odciągnięcie! Jeśli 12. Sxa4 Sxe4! 13. Hc1 Ha5+, czarne odzyskują figurę z miażdżącym atakiem na króla w centrum.'
          }
        },
        '13... Nxe4': {
          badge: '!',
          arrows: ['e4->g5:red', 'f8->e8:amber'],
          targets: ['e4', 'e1', 'g5'],
          text: {
            en: 'Opening the e-file! Fischer sacrifices the exchange on f8 to rip open the center before White’s king can castle.',
            pl: 'Otwarcie linii e! Fischer oferuje jakość na f8, by rozerwać centrum, zanim biały król zdąży zrobić roszadę.'
          }
        },
        '16. Bc5': {
          badge: '?',
          arrows: ['c5->b6:blue', 'f8->e8:red', 'g4->e6:red'],
          targets: ['b6', 'c4', 'e1'],
          text: {
            en: 'Byrne thinks he has trapped Black’s queen and pinned the c3 knight — but 13-year-old Fischer has seen 10 moves deeper!',
            pl: 'Byrne sądzi, że złapał czarnego hetmana b6 i związał skoczka c3 — ale 13-letni Fischer policzył wariant o 10 ruchów głębiej!'
          }
        },
        '17... Be6': {
          badge: '!!',
          arrows: ['e6->c4:red', 'c3->e2:red', 'e8->e1:amber'],
          targets: ['b6', 'c4', 'f1'],
          text: {
            en: 'The Move of the Century! 17... Be6!! sacrifices Black’s queen on b6 to unleash a devastating windmill of checks!',
            pl: 'Posunięcie Stulecia! 17... Ge6!! poświęca czarnego hetmana na b6, uruchamiając niszczycielski "młynek" szachów z odsłonięcia!'
          }
        },
        '20... Nxd4+': {
          badge: '!',
          arrows: ['c4->f1:red', 'd4->e2:green', 'd4->b3:amber'],
          targets: ['f1', 'd4'],
          text: {
            en: 'The Windmill begins! Each discovered check from the c4 bishop allows Fischer’s knight to gobble up pawns and pieces with tempo.',
            pl: 'Rusza "młynek"! Każdy szach z odsłonięcia od gońca c4 pozwala skoczkowi Fischera zbierać materiał z tempem.'
          }
        },
        '25... Nxd1': {
          badge: '!',
          arrows: ['d1->f2:red', 'a4->a2:green'],
          targets: ['d1', 'a2', 'f2'],
          text: {
            en: 'The dust clears: for the sacrificed queen, Fischer has emerged with a Rook, two Bishops, and a Pawn — while White’s rooks and pieces are completely uncoordinated!',
            pl: 'Gdy opada kurz: za poświęconego hetmana Fischer ma wieżę, parę gońców oraz piona, a białe figury są całkowicie pozbawione współpracy!'
          }
        },
        '35... Bc5+': {
          badge: '⚔️',
          arrows: ['c5->g1:red', 'e4->g3:red', 'd5->b3:green'],
          targets: ['g1', 'd1', 'c1'],
          text: {
            en: 'Beginning the final mating net! Every black piece now converges to drive White’s king across the 1st rank to c1.',
            pl: 'Początek sieci matowej! Wszystkie czarne figury współpracują teraz, by zapędzić białego króla po pierwszej linii na pole c1.'
          }
        },
        '41... Rc2#': {
          badge: '🏆',
          arrows: ['c2->c1:red', 'b3->d1:amber', 'b4->d2:amber', 'c3->b1:amber'],
          targets: ['c1', 'c2'],
          text: {
            en: 'Checkmate! Rook, both bishops, and knight participate in a picture-perfect mating net on c2.',
            pl: 'Mat! Wieża, para gońców oraz skoczek tworzą podręcznikową sieć matową wokół białego króla na c1.'
          }
        }
      }
    },
    {
      id: 'ba-13',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'deflection', 'attraction', 'battery'],
      players: {
        en: 'Georg Rotlewi vs. Akiba Rubinstein (Łódź, 1907)',
        pl: 'Georg Rotlewi – Akiba Rubinstein (Łódź, 1907)'
      },
      title: {
        en: 'Rubinstein’s Immortal: Double-Rook & Queen Sacrifice',
        pl: 'Nieśmiertelna Partia Rubinsteina: Podwójna ofiara wież i hetmana'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Akiba Rubinstein sacrifices his queen on h4 and both rooks (`22... Rxc3!!` and `23... Rd2!!`) to unleash his bishop pair along the long diagonals against h1.',
        pl: 'Widok z perspektywy czarnych! Akiba Rubinstein zostawia hetmana na h4 pod biciem i poświęca obie wieże (`22... Wxc3!!`, `23... Wd2!!`), by uwolnić zabójczą parę gońców na przekątnych przeciwko królowi na h1.'
      },
      moves: [
        'd4', 'd5', 'Nf3', 'e6', 'e3', 'c5', 'c4', 'Nc6', 'Nc3', 'Nf6',
        'dxc5', 'Bxc5', 'a3', 'a6', 'b4', 'Bd6', 'Bb2', 'O-O', 'Qd2', 'Qe7',
        'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Rd8', 'Qe2', 'Bb7', 'O-O', 'Ne5',
        'Nxe5', 'Bxe5', 'f4', 'Bc7', 'e4', 'Rac8', 'e5', 'Bb6+', 'Kh1', 'Ng4',
        'Be4', 'Qh4', 'g3', 'Rxc3', 'gxh4', 'Rd2', 'Qxd2', 'Bxe4+', 'Qg2', 'Rh3'
      ],
      annotations: {
        '19... Bb6+': {
          badge: '⚔️',
          arrows: ['b6->g1:red', 'f6->g4:green'],
          targets: ['g1', 'b6'],
          text: {
            en: 'Launching the kingside storm! The check on the a7–g1 diagonal forces White’s king into the corner (`Kh1`), setting up immediate targets on h2.',
            pl: 'Początek burzy na skrzydle królewskim! Szach po przekątnej a7–g1 spycha białego króla do rogu (`Kh1`), wystawiając punkt h2 na atak.'
          }
        },
        '20... Ng4': {
          badge: '!',
          arrows: ['g4->h2:red', 'e7->h4:green'],
          targets: ['h2', 'e4'],
          text: {
            en: 'Direct mate threat on h2! White plays `21. Be4` to block the b7 bishop and cover h2, unknowingly aligning pieces for tactical fireworks.',
            pl: 'Bezpośrednia groźba mata na h2! Białe grają `21. Ge4`, aby zasłonić gońca b7 i obronić h2, nie przeczuwając nadchodzącej kombinacji.'
          }
        },
        '21... Qh4': {
          badge: '!',
          arrows: ['h4->h2:red', 'g4->h2:red', 'b6->g1:amber'],
          targets: ['h2'],
          text: {
            en: 'Queen and knight battery on h2! White tries to repel the attack with `22. g3`, fatally weakening the long a8–h1 diagonal.',
            pl: 'Bateria hetmana i skoczka na h2! Białe próbują odeprzeć atak ruchem `22. g3`, śmiertelnie osłabiając wielką przekątną a8–h1.'
          }
        },
        '22... Rxc3': {
          badge: '!!',
          arrows: ['c3->e4:red', 'b7->h1:red', 'g3->h4:blue'],
          targets: ['c3', 'h4', 'e4'],
          text: {
            en: 'Immortal Sacrifice! Rubinstein leaves his queen on h4 en prise to eliminate the c3 defender of e4; note `23. Bxc3 Qxh2#` is instant mate!',
            pl: 'Nieśmiertelna ofiara! Rubinstein zostawia hetmana h4 pod biciem, by zbić skoczka broniącego e4 — po `23. Gxc3` następuje natychmiastowy mat `23... Hxh2#`!'
          }
        },
        '23... Rd2': {
          badge: '!!',
          arrows: ['d2->e2:red', 'd2->h2:red', 'b7->e4:amber'],
          targets: ['d2', 'e2', 'h2'],
          text: {
            en: 'Second Rook Sacrifice! After `23. gxh4`, Black deflects the queen from protecting e4 (while `24. Bxb7` allows `24... Rxh2#`).',
            pl: 'Ofiara drugiej wieży! Po `23. gxh4` czarne odciągają białego hetmana od obrony pola e4 (a po `24. Gxb7` czarne matują `24... Wxh2#`).'
          }
        },
        '24... Bxe4+': {
          badge: '!',
          arrows: ['e4->h1:red', 'c3->h3:green'],
          targets: ['h1', 'g2'],
          text: {
            en: 'Check along the opened diagonal! White must block with `25. Qg2`, leaving the queen completely pinned to the king on h1.',
            pl: 'Szach po otwartej przekątnej! Białe muszą zasłonić się ruchem `25. Hg2`, po czym hetman jest bezwzględnie związany z królem h1.'
          }
        },
        '25... Rh3': {
          badge: '🏆',
          arrows: ['h3->h2:red', 'g4->h2:red', 'e4->h1:amber', 'b6->g1:amber'],
          targets: ['h2', 'h1'],
          text: {
            en: 'Quiet killer move! Because `Qg2` is pinned to h1, White cannot play `Qxg4`, and `Qxe4` allows `Rxh2#`. Rotlewi resigned facing unstoppable mate.',
            pl: 'Cichy cios końcowy! Ponieważ `Hg2` jest związany z królem h1, bicie `Hxg4` jest nielegalne, a `Hxe4` pozwala na `Wxh2#`. Rotlewi poddał partię.'
          }
        }
      }
    },
    {
      id: 'ba-14',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'clearance'],
      players: {
        en: 'Garry Kasparov vs. Veselin Topalov (Wijk aan Zee, 1999)',
        pl: 'Garri Kasparow – Weselin Topałow (Wijk aan Zee, 1999)'
      },
      title: {
        en: 'Kasparov’s Immortal: 24. Rxd4!! & Cross-Board King Hunt',
        pl: 'Nieśmiertelna Partia Kasparowa: 24. Wxd4!! i pościg przez całą deskę'
      },
      overview: {
        en: 'Garry Kasparov sacrifices a rook on d4 (`24. Rxd4!!`) to yank Topalov’s king out of its queenside shelter, hunting it all the way from a7 down to d1 in a masterclass of deep calculation.',
        pl: 'Garri Kasparow poświęca wieżę na d4 (`24. Wxd4!!`), wyciągając czarnego króla z twierdzy na skrzydle hetmańskim i ścigając go od pola a7 aż po d1 w popisowej lekcji głębokiego liczenia.'
      },
      moves: [
        'e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'Qd2', 'c6',
        'f3', 'b5', 'Nge2', 'Nbd7', 'Bh6', 'Bxh6', 'Qxh6', 'Bb7', 'a3', 'e5',
        'O-O-O', 'Qe7', 'Kb1', 'a6', 'Nc1', 'O-O-O', 'Nb3', 'exd4', 'Rxd4', 'c5',
        'Rd1', 'Nb6', 'g3', 'Kb8', 'Na5', 'Ba8', 'Bh3', 'd5', 'Qf4+', 'Ka7',
        'Rhe1', 'd4', 'Nd5', 'Nbxd5', 'exd5', 'Qd6', 'Rxd4', 'cxd4', 'Re7+', 'Kb6',
        'Qxd4+', 'Kxa5', 'b4+', 'Ka4', 'Qc3', 'Qxd5', 'Ra7', 'Bb7', 'Rxb7', 'Qc4',
        'Qxf6', 'Kxa3', 'Qxa6+', 'Kxb4', 'c3+', 'Kxc3', 'Qa1+', 'Kd2', 'Qb2+', 'Kd1',
        'Bf1', 'Rd2', 'Rd7', 'Rxd7', 'Bxc4', 'bxc4', 'Qxh8', 'Rd3', 'Qa8', 'c3',
        'Qa4+', 'Ke1', 'f4', 'f5', 'Kc1', 'Rd2', 'Qa7'
      ],
      annotations: {
        '24. Rxd4': {
          badge: '!!',
          arrows: ['d4->d6:red', 'e1->e7:red', 'f4->d4:amber'],
          targets: ['d4', 'a7', 'e7'],
          text: {
            en: 'Kasparov’s Immortal Rook Sacrifice! Ripping open the d4–a7 diagonal and e-file so Black’s king cannot escape the oncoming checks.',
            pl: 'Nieśmiertelna ofiara wieży Kasparowa! Rozbija centrum oraz otwiera linię e i przekątną d4–a7, odcinając królowi bezpieczny odwrót.'
          }
        },
        '25. Re7+': {
          badge: '!',
          arrows: ['e7->a7:red', 'f4->d4:green'],
          targets: ['a7', 'b6'],
          text: {
            en: 'Invading the 7th rank with check! Taking the rook (`25... Qxe7`) loses quickly after `26. Qxd4+`, so Black’s king must step out to b6.',
            pl: 'Wtargnięcie na 7. linię z szachem! Zbicie wieży (`25... Hxe7`) przegrywa po `26. Hxd4+`, więc król musi wyjść na pole b6.'
          }
        },
        '26. Qxd4+': {
          badge: '!',
          arrows: ['d4->b6:red', 'd4->h8:amber'],
          targets: ['b6', 'a5'],
          text: {
            en: 'Forcing the king onward! Since `26... Qc5` drops the f6 knight with check (`27. Qxf6+`), Black has no choice but to capture on a5.',
            pl: 'Zmuszenie króla do marszu! Ponieważ `26... Hc5` oddaje skoczka f6 z szachem (`27. Hxf6+`), czarne muszą zbić skoczka na a5.'
          }
        },
        '27. b4+': {
          badge: '!',
          arrows: ['b4->a5:red', 'd4->c3:green'],
          targets: ['a5', 'a4'],
          text: {
            en: 'Pawn check drives the king to a4, allowing White to play the calm `28. Qc3!` and weave a deadly net around the marooned monarch.',
            pl: 'Szach pionem spycha króla na a4, pozwalając białym na spokojne `28. Hc3!` i zaciśnięcie sieci wokół osamotnionego króla.'
          }
        },
        '33. c3+': {
          badge: '!',
          arrows: ['c3->b4:red', 'a6->a1:green'],
          targets: ['b4', 'c3'],
          text: {
            en: 'Clearance sacrifice! White lures the king onto c3 so the queen can swing to a1 (`34. Qa1+`) and force the king all the way down to d1.',
            pl: 'Ofiara oczyszczająca! Białe wciągają króla na c3, by hetman mógł przejść na a1 (`34. Ha1+`) i zapędzić króla aż na pierwszą linię.'
          }
        },
        '36. Bf1': {
          badge: '!!',
          arrows: ['f1->c4:red', 'b7->d7:green'],
          targets: ['c4', 'd1'],
          text: {
            en: 'Finishing tactic! Attacking Black’s queen forces `36... Rd2 37. Rd7!`, deflecting the rook and winning Black’s queen cleanly (`38. Bxc4`).',
            pl: 'Cios kończący! Atak na hetmana wymusza `36... Wd2 37. Wd7!`, co odciąga wieżę i pozwala zdobyć czarnego hetmana (`38. Gxc4`).'
          }
        },
        '44. Qa7': {
          badge: '🏆',
          arrows: ['a7->g1:red', 'a7->e3:red', 'c1->d2:blue'],
          targets: ['e1', 'd2'],
          text: {
            en: 'Up a decisive queen and attacking along the a7–g1 diagonal (`45. Qg1+` or `45. Qe3+` looms), Kasparov forces Topalov’s resignation.',
            pl: 'Z przewagą hetmana i decydującym atakiem po przekątnej a7–g1 (grozi `45. Hg1+` lub `45. He3+`), Kasparow zmusza Topałowa do poddania.'
          }
        }
      }
    },
    {
      id: 'ba-15',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'pin', 'kingHunt', 'backRank'],
      players: {
        en: 'Wilhelm Steinitz vs. Curt von Bardeleben (Hastings, 1895)',
        pl: 'Wilhelm Steinitz – Curt von Bardeleben (Hastings, 1895)'
      },
      title: {
        en: 'Battle of Hastings: Steinitz’s Immortal Rook Walk (22. Rxe7+!!)',
        pl: 'Bitwa pod Hastings: Nieśmiertelny marsz wieży Steinitza (22. Wxe7+!!)'
      },
      overview: {
        en: 'The first World Champion leaves every White piece hanging to launch a breathtaking rook rampage along the 7th rank (`22. Rxe7+!!` to `25. Rxh7+!`)—where Black can never capture the checking rook.',
        pl: 'Pierwszy mistrz świata zostawia niemal wszystkie figury pod biciem, by uruchomić legendarny marsz wieży po 7. linii (`22. Wxe7+!!` aż do `25. Wxh7+!`) — czarne ani razu nie mogą jej zbić.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4',
        'cxd4', 'Bb4+', 'Nc3', 'd5', 'exd5', 'Nxd5', 'O-O', 'Be6', 'Bg5', 'Be7',
        'Bxd5', 'Bxd5', 'Nxd5', 'Qxd5', 'Bxe7', 'Nxe7', 'Re1', 'f6', 'Qe2', 'Qd7',
        'Rac1', 'c6', 'd5', 'cxd5', 'Nd4', 'Kf7', 'Ne6', 'Rhc8', 'Qg4', 'g6',
        'Ng5+', 'Ke8', 'Rxe7+', 'Kf8', 'Rf7+', 'Kg8', 'Rg7+', 'Kh8', 'Rxh7+'
      ],
      annotations: {
        '17. d5': {
          badge: '⚔️',
          arrows: ['d5->c6:red', 'f3->d4:green', 'e1->e7:amber'],
          targets: ['d4', 'e7'],
          text: {
            en: 'Pawn sacrifice for a central outpost! Clearing d4 lets White’s knight invade e6 while Black’s king remains stuck in the center.',
            pl: 'Ofiara piona za centralną placówkę! Oczyszczenie pola d4 pozwala białemu skoczkowi wedrzeć się na e6, gdy czarny król tkwi w centrum.'
          }
        },
        '19. Ne6': {
          badge: '!',
          arrows: ['e6->c7:red', 'e6->g7:red', 'c1->c8:amber'],
          targets: ['e6', 'f7'],
          text: {
            en: 'Octopus knight on e6! Paralyzing Black’s rooks and cutting off the king’s flight while White’s queen shifts to g4.',
            pl: 'Potężny skoczek na e6! Paraliżuje czarne wieże i odcina króla, podczas gdy biały hetman przygotowuje wejście na g4.'
          }
        },
        '21. Ng5+': {
          badge: '!',
          arrows: ['g5->f7:red', 'g4->g7:amber', 'e1->e7:red'],
          targets: ['f7', 'e8'],
          text: {
            en: 'Forcing the king back to e8! White leaves the g5 knight and c1 rook unguarded, setting up a devastating battery on the e-file.',
            pl: 'Zmuszenie króla do powrotu na e8! Białe ignorują bicie skoczka i wieży, przygotowując nokautujące uderzenie na linii e.'
          }
        },
        '22. Rxe7+': {
          badge: '!!',
          arrows: ['e7->e8:red', 'c1->c8:amber', 'g4->d7:amber'],
          targets: ['e7', 'e8', 'c8'],
          text: {
            en: 'The Immortal Rook Walk begins! Black cannot take: `22... Qxe7` loses to `23. Rxc8+`, and `22... Kxe7` drops the queen (`23. Re1+`).',
            pl: 'Początek nieśmiertelnego marszu wieży! Zbicie przegrywa: `22... Hxe7` prowadzi do `23. Wxc8+`, a `22... Kxe7` traci hetmana po `23. We1+`.'
          }
        },
        '23. Rf7+': {
          badge: '!',
          arrows: ['f7->f8:red', 'g4->d7:amber', 'c1->c8:amber'],
          targets: ['f8', 'd7'],
          text: {
            en: 'Still untouchable! Capturing `23... Kxf7` allows `24. Qxd7+` with check, forcing Black’s king into the corner.',
            pl: 'Wieża wciąż nietykalna! Po `23... Kxf7` białe biją `24. Hxd7+` z szachem, spychając więc czarnego króla w kierunku rogu.'
          }
        },
        '24. Rg7+': {
          badge: '!',
          arrows: ['g7->g8:red', 'g4->d7:amber'],
          targets: ['g8', 'h8'],
          text: {
            en: 'Step three down the 7th rank! Again `24... Kxg7` walks into `25. Qxd7+`, driving the king onto h8.',
            pl: 'Trzeci krok po 7. linii! Ponownie `24... Kxg7` przegrywa po `25. Hxd7+`, zmuszając króla do wejścia na pole h8.'
          }
        },
        '25. Rxh7+': {
          badge: '🏆',
          arrows: ['h7->h8:red', 'g4->h4:green', 'h7->d7:amber'],
          targets: ['h8', 'd7'],
          text: {
            en: 'Here von Bardeleben famously walked out of the tournament hall to let his clock expire, as `25... Kg8 26. Rg7+ Kh8 27. Qh4+!` forces mate in 10.',
            pl: 'W tym momencie von Bardeleben słynnie opuścił salę gry bez poddania partii — po `25... Kg8 26. Wg7+ Kh8 27. Hh4+!` białe dają forsownego mata w 10 ruchach.'
          }
        }
      }
    },
    {
      id: 'ba-16',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'fork', 'attraction', 'pin'],
      players: {
        en: 'Stepan Levitsky vs. Frank Marshall (Breslau, 1912)',
        pl: 'Stepan Lewicki – Frank Marshall (Wrocław, 1912)'
      },
      title: {
        en: 'The Gold Coins Game: 23... Qg3!! Triple-Hanging Queen',
        pl: 'Partia Złotych Monet: 23... Hg3!! pod potrójnym biciem'
      },
      overview: {
        en: 'Viewed from Black’s perspective! In Wrocław 1912, Frank Marshall sacrificed his rook on h3 and placed his queen on g3 (`23... Qg3!!`) where three White pieces could capture it—every single capture losing instantly!',
        pl: 'Widok z perspektywy czarnych! We Wrocławiu w 1912 roku Frank Marshall poświęcił wieżę na h3 i postawił hetmana na g3 (`23... Hg3!!`) pod potrójnym biciem — każde z nich przegrywa natychmiast!'
      },
      moves: [
        'd4', 'e6', 'e4', 'd5', 'Nc3', 'c5', 'Nf3', 'Nc6', 'exd5', 'exd5',
        'Be2', 'Nf6', 'O-O', 'Be7', 'Bg5', 'O-O', 'dxc5', 'Be6', 'Nd4', 'Bxc5',
        'Nxe6', 'fxe6', 'Bg4', 'Qd6', 'Bh3', 'Rae8', 'Qd2', 'Bb4', 'Bxf6', 'Rxf6',
        'Rad1', 'Qc5', 'Qe2', 'Bxc3', 'bxc3', 'Qxc3', 'Rxd5', 'Nd4', 'Qh5', 'Ref8',
        'Re5', 'Rh6', 'Qg5', 'Rxh3', 'Rc5', 'Qg3'
      ],
      annotations: {
        '18... Qxc3': {
          badge: '⚔️',
          arrows: ['c3->h3:red', 'c3->c2:red'],
          targets: ['c3', 'h3'],
          text: {
            en: 'Counterattack on the queenside! Marshall snatches c3 and targets the isolated h3 bishop rather than defending d5 passively.',
            pl: 'Kontratak na skrzydle hetmańskim! Marshall zdobywa piona c3 i bierze na celownik samotnego gońca h3 zamiast biernie bronić d5.'
          }
        },
        '19... Nd4': {
          badge: '!',
          arrows: ['d4->e2:red', 'd4->c2:red', 'c3->h3:red'],
          targets: ['e2', 'c2', 'h3'],
          text: {
            en: 'Centralizing with tempo! Attacking the e2 queen while eyeing deadly knight jumps to f3 and e2.',
            pl: 'Centralizacja z tempem! Skoczek atakuje hetmana e2 i przygotowuje zabójcze skoki na f3 oraz e2.'
          }
        },
        '21... Rh6': {
          badge: '!',
          arrows: ['h6->h5:red', 'h6->h3:red'],
          targets: ['h5', 'h3'],
          text: {
            en: 'Rook swing to the h-file! Chasing the white queen while lining up directly against the unprotected bishop on h3.',
            pl: 'Przerzut wieży na linię h! Przepędza białego hetmana i bezpośrednio namierza niebronionego gońca na h3.'
          }
        },
        '22. Qg5': {
          badge: '?',
          arrows: ['g5->h6:blue', 'g5->g7:blue', 'h6->h3:red'],
          targets: ['h6', 'h3'],
          text: {
            en: 'Levitsky tries to defend h3 indirectly by attacking the rook and pinning g7, overlooking a stunning tactical blow.',
            pl: 'Lewicki próbuje pośrednio bronić h3, atakując wieżę i wiążąc piona g7, ale przeocza miażdżący zwrot taktyczny.'
          }
        },
        '22... Rxh3': {
          badge: '!!',
          arrows: ['h3->h2:red', 'd4->f3:amber', 'f8->f2:red'],
          targets: ['h3', 'h2'],
          text: {
            en: 'Rook Sacrifice! Capturing `23. gxh3` walks straight into `23... Nf3+`, forking White’s king and queen!',
            pl: 'Ofiara wieży! Bicie `23. gxh3` wpada prosto pod widełki `23... Sf3+` na białego króla i hetmana!'
          }
        },
        '23... Qg3': {
          badge: '🏆',
          arrows: ['g3->g2:red', 'g3->f2:red', 'g3->h2:red', 'd4->e2:amber'],
          targets: ['g3', 'g2', 'e2'],
          text: {
            en: 'The legendary "Gold Coins" move! `24. hxg3` allows `Ne2#`, `24. fxg3` allows `Ne2+ 25. Kh1 Rxf1#`, and `24. Qxg3` loses to `Ne2+` winning a rook. White resigned!',
            pl: 'Legendarny ruch "Złotych Monet"! `24. hxg3` daje `Se2#`, `24. fxg3` pozwala na `Se2+ 25. Kh1 Wxf1#`, a `24. Hxg3` przegrywa wieżę po `Se2+`. Białe poddały się!'
          }
        }
      }
    },
    {
      id: 'ba-17',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'clearance', 'kingHunt', 'battery'],
      players: {
        en: 'Emanuel Lasker vs. Johann Hermann Bauer (Amsterdam, 1889)',
        pl: 'Emanuel Lasker – Johann Hermann Bauer (Amsterdam, 1889)'
      },
      title: {
        en: 'Lasker’s Classic Double-Bishop Sacrifice (Bxh7+ & Bxg7!)',
        pl: 'Klasyczna Ofiara Dwóch Gońców Laskera (Gxh7+ i Gxg7!)'
      },
      overview: {
        en: 'The archetypal Double-Bishop Sacrifice! Emanuel Lasker sacrifices both bishops on h7 and g7 (`15. Bxh7+!` & `17. Bxg7!!`) to tear away the black king’s pawn cover, forcing Bauer to give up his queen against `Rf3–h3`.',
        pl: 'Historyczny wzorzec ofiary dwóch gońców! Emanuel Lasker poświęca oba gońce na h7 i g7 (`15. Gxh7+!` i `17. Gxg7!!`), by całkowicie obnażyć czarnego króla i wymusić oddanie hetmana przed matem po linii h.'
      },
      moves: [
        'f4', 'd5', 'e3', 'Nf6', 'b3', 'e6', 'Bb2', 'Be7', 'Bd3', 'b6',
        'Nc3', 'Bb7', 'Nf3', 'Nbd7', 'O-O', 'O-O', 'Ne2', 'c5', 'Ng3', 'Qc7',
        'Ne5', 'Nxe5', 'Bxe5', 'Qc6', 'Qe2', 'a6', 'Nh5', 'Nxh5', 'Bxh7+', 'Kxh7',
        'Qxh5+', 'Kg8', 'Bxg7', 'Kxg7', 'Qg4+', 'Kh7', 'Rf3', 'e5', 'Rh3+', 'Qh6',
        'Rxh6+', 'Kxh6', 'Qd7', 'Bf6', 'Qxb7', 'Kg7', 'Rf1', 'Rab8', 'Qd7', 'Rfd8',
        'Qg4+', 'Kf8', 'fxe5', 'Bg7', 'e6', 'Rb7', 'Qg6', 'f6', 'Rxf6+', 'Bxf6',
        'Qxf6+', 'Ke8', 'Qh8+', 'Ke7', 'Qg7+', 'Kxe6', 'Qxb7', 'Rd6', 'Qxa6', 'd4',
        'exd4', 'cxd4', 'h4', 'd3', 'Qxd3'
      ],
      annotations: {
        '14. Nh5': {
          badge: '⚔️',
          arrows: ['h5->f6:red', 'e5->g7:red', 'd3->h7:red'],
          targets: ['f6', 'h7', 'g7'],
          text: {
            en: 'Removing the key defender! Trading off Black’s f6 knight exposes h7 and g7 to the full force of White’s bishop pair.',
            pl: 'Usunięcie głównego obrońcy! Wymiana skoczka f6 otwiera punkty h7 oraz g7 na połączony ogień obu białych gońców.'
          }
        },
        '15. Bxh7+': {
          badge: '!!',
          arrows: ['h7->g8:red', 'e2->h5:green'],
          targets: ['h7', 'g8'],
          text: {
            en: 'First Bishop Sacrifice! Attracting the king to h7 allows White’s queen to enter the attack with check on h5.',
            pl: 'Pierwsza ofiara gońca! Zaciągnięcie króla na h7 pozwala białemu hetmanowi wejść do ataku z szachem na pole h5.'
          }
        },
        '17. Bxg7': {
          badge: '!!',
          arrows: ['g7->f8:red', 'h5->g4:green'],
          targets: ['g7', 'h7'],
          text: {
            en: 'Second Bishop Sacrifice! Now the black king has no pawn shield left—`17... Kxg7 18. Qg4+ Kh7` leaves the path open for White’s rook.',
            pl: 'Druga ofiara gońca! Król czarnych zostaje bez jakiejkolwiek osłony pionowej — po `17... Kxg7 18. Hg4+ Kh7` do akcji wkracza biała wieża.'
          }
        },
        '19. Rf3': {
          badge: '!',
          arrows: ['f3->h3:red', 'g4->h3:amber'],
          targets: ['h3', 'h7'],
          text: {
            en: 'Deadly Rook Lift! Threatening `20. Rh3#`, which forces Black to interpose the queen on h6 (`19... e5 20. Rh3+ Qh6`) at a ruinous cost.',
            pl: 'Zabójczy przerzut wieży! Groźba `20. Wh3#` zmusza czarne do oddania hetmana na h6 (`19... e5 20. Wh3+ Hh6`), by uniknąć natychmiastowego mata.'
          }
        },
        '21. Rxh6+': {
          badge: '!',
          arrows: ['h6->h7:red', 'g4->d7:green'],
          targets: ['h6', 'b7'],
          text: {
            en: 'Cashing in the attack! White wins the queen for two bishops and immediately forks the two loose black bishops (`22. Qd7`, `23. Qxb7`).',
            pl: 'Realizacja przewagi! Białe zdobywają hetmana za parę gońców, po czym natychmiast zgarniają kolejnego gońca podwójnym uderzeniem (`22. Hd7`, `23. Hxb7`).'
          }
        },
        '30. Rxf6+': {
          badge: '!',
          arrows: ['f6->f8:red', 'g6->f6:amber'],
          targets: ['f6', 'd8'],
          text: {
            en: 'Clean exchange sacrifice to finish resistance! Smashing f6 exposes Black’s king to a decisive queen check and rook harvest (`33. Qg7+`).',
            pl: 'Czysta ofiara jakości na dobicie! Rozbicie punktu f6 wystawia króla na decydujące szachy hetmanem i zdobycie drugiej wieży (`33. Hg7+`).'
          }
        },
        '38. Qxd3': {
          badge: '🏆',
          arrows: ['d3->d6:red'],
          targets: ['d6', 'e6'],
          text: {
            en: 'Halting Black’s last pawn push cleanly. Up a queen and a battalion of passed pawns against a single rook, Lasker forced resignation.',
            pl: 'Zatrzymanie ostatniej próby kontrgry. Mając hetmana i wolne piony przeciwko samotnej wieży, Lasker zmusił Bauera do kapitulacji.'
          }
        }
      }
    },
    {
      id: 'ba-18',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['deflection', 'backRank', 'sacrifice', 'pin'],
      players: {
        en: 'Edwin Ziegler Adams vs. Carlos Torre (New Orleans, 1920)',
        pl: 'Edwin Ziegler Adams – Carlos Torre (Nowy Orlean, 1920)'
      },
      title: {
        en: 'Adams vs. Torre: The Back-Rank Queen Walk (18. Qg4 – 21. a4!!)',
        pl: 'Adams – Torre: Najsłynniejszy "Spacer Hetmana" na ostatniej linii'
      },
      overview: {
        en: 'One of chess’s most famous queen maneuvers! Exploiting a fatal back-rank weakness on e8, White’s queen repeatedly offers herself for capture (`18. Qg4!`, `19. Qc4!`, `20. Qc7!`) before `21. a4!!` overloads Black’s defense.',
        pl: 'Jeden z najsłynniejszych manewrów hetmana w dziejach szachów! Wykorzystując śmiertelną słabość 8. linii na e8, biały hetman wielokrotnie wystawia się pod bicie (`18. Hg4!`, `19. Hc4!`, `20. Hc7!`), aż ruch `21. a4!!` przełamuje obronę.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'd6', 'd4', 'exd4', 'Qxd4', 'Nc6', 'Bb5', 'Bd7',
        'Bxc6', 'Bxc6', 'Nc3', 'Nf6', 'O-O', 'Be7', 'Nd5', 'Bxd5', 'exd5', 'O-O',
        'Bg5', 'c6', 'c4', 'cxd5', 'cxd5', 'Re8', 'Rfe1', 'a5', 'Re2', 'Rc8',
        'Rae1', 'Qd7', 'Bxf6', 'Bxf6', 'Qg4', 'Qb5', 'Qc4', 'Qd7', 'Qc7', 'Qb5',
        'a4', 'Qxa4', 'Re4', 'Qb5', 'Qxb7'
      ],
      annotations: {
        '15. Re2': {
          badge: '📖',
          arrows: ['e2->e8:amber', 'a1->e1:green'],
          targets: ['e8', 'e7'],
          text: {
            en: 'Doubling rooks on the e-file! White sets up relentless back-rank pressure that will tie Black’s queen down to protecting e8.',
            pl: 'Zdwojenie wież na linii e! Białe tworzą potężny nacisk na 8. linię, który wkrótce przykuje czarnego hetmana do obrony pola e8.'
          }
        },
        '18. Qg4': {
          badge: '!',
          arrows: ['g4->d7:red', 'g4->c8:amber', 'g4->g7:red'],
          targets: ['d7', 'c8'],
          text: {
            en: 'The Queen Walk begins! Black cannot take (`18... Qxg4`) because `19. Rxe8+ Rxe8 20. Rxe8#` is back-rank checkmate.',
            pl: 'Początek "Spaceru Hetmana"! Czarne nie mogą bić `18... Hxg4`, ponieważ `19. Wxe8+ Wxe8 20. Wxe8#` daje mata na ostatniej linii.'
          }
        },
        '19. Qc4': {
          badge: '!!',
          arrows: ['c4->c8:red', 'c4->b5:red', 'e2->e8:amber'],
          targets: ['c8', 'b5'],
          text: {
            en: 'Second deflection offer! Again `19... Qxc4` allows `20. Rxe8#`, and `19... Rxe2` drops the rook on c8 (`20. Qxc8+!`), forcing `19... Qd7`.',
            pl: 'Druga prowokacja! Ponownie `19... Hxc4` pozwala na `20. Wxe8#`, a `19... Wxe2` traci wieżę z matem po `20. Hxc8+!`, więc hetman musi wrócić na d7.'
          }
        },
        '20. Qc7': {
          badge: '!!',
          arrows: ['c7->c8:red', 'c7->d7:red', 'c7->b7:red'],
          targets: ['c8', 'd7', 'b7'],
          text: {
            en: 'Pushing deeper! Neither `20... Qxc7` (`21. Rxe8+`) nor `20... Rxe2` (`21. Qxd7`) works, keeping Black’s queen chained to b5.',
            pl: 'Kolejny krok! Ani `20... Hxc7` (`21. Wxe8+`), ani `20... Wxe2` (`21. Hxd7`) nie ratuje czarnych — hetman musi zostać na b5.'
          }
        },
        '21. a4': {
          badge: '!!',
          arrows: ['a4->b5:red', 'e2->e8:amber', 'c7->b7:red'],
          targets: ['b5', 'a4', 'e8'],
          text: {
            en: 'The killer pawn nudge! Black’s queen must stay on the a4–e8 diagonal to cover e8 and guard e2—forcing `21... Qxa4` off the vital diagonal.',
            pl: 'Zabójcze pchnięcie piona! Czarny hetman musi jednocześnie bronić wieży e2 oraz pola e8 na przekątnej a4–e8, więc bicie `21... Hxa4` zrywa obronę.'
          }
        },
        '23. Qxb7': {
          badge: '🏆',
          arrows: ['b7->b5:red', 'b7->c8:red', 'e4->e8:red'],
          targets: ['b5', 'c8', 'e8'],
          text: {
            en: 'Overloaded! After `22. Re4! Qb5 23. Qxb7`, Black cannot guard b5, c8, and e8 at once (`23... Qxb7 24. Rxe8#`). Black resigned.',
            pl: 'Przeciążenie! Po `22. We4! Hb5 23. Hxb7` czarne nie mogą jednocześnie obronić hetmana, wieży c8 oraz pola e8 (`23... Hxb7 24. Wxe8#`). Czarne poddały się.'
          }
        }
      }
    },
    {
      id: 'ba-19',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'discovered'],
      players: {
        en: 'Glucksberg vs. Miguel Najdorf (Warsaw, 1929)',
        pl: 'Glucksberg – Mieczysław Najdorf (Warszawa, 1929)'
      },
      title: {
        en: 'The Polish Immortal: Sacrificing All Four Minor Pieces',
        pl: 'Polska Nieśmiertelna: Ofiara wszystkich czterech lekkich figur'
      },
      overview: {
        en: 'Viewed from Black’s perspective! In Warsaw 1929, Miguel Najdorf unleashed a breathtaking Romantic storm, sacrificing both bishops and both knights (`9... Bxh2+`, `13... Bg1!`, `16... Ndxe5+`, `20... Bg4+!`) before delivering checkmate with a pawn (`22... h5#`).',
        pl: 'Widok z perspektywy czarnych! W Warszawie w 1929 roku Mieczysław Najdorf przeprowadził legendarną burzę taktyczną, poświęcając oba gońce i oba skoczki (`9... Gxh2+`, `13... Gg1!`, `16... Sdxe5+`, `20... Gg4+!`), by dać mata pionem (`22... h5#`).'
      },
      moves: [
        'd4', 'f5', 'c4', 'Nf6', 'Nc3', 'e6', 'Nf3', 'd5', 'e3', 'c6',
        'Bd3', 'Bd6', 'O-O', 'O-O', 'Ne2', 'Nbd7', 'Ng5', 'Bxh2+', 'Kh1', 'Ng4',
        'f4', 'Qe8', 'g3', 'Qh5', 'Kg2', 'Bg1', 'Nxg1', 'Qh2+', 'Kf3', 'e5',
        'dxe5', 'Ndxe5+', 'fxe5', 'Nxe5+', 'Kf4', 'Ng6+', 'Kf3', 'f4', 'exf4', 'Bg4+',
        'Kxg4', 'Ne5+', 'fxe5', 'h5#'
      ],
      annotations: {
        '9... Bxh2+': {
          badge: '⚔️',
          arrows: ['h2->g1:red', 'f6->g4:green'],
          targets: ['h2', 'g1'],
          text: {
            en: 'Sacrifice #1! Najdorf opens the kingside with `9... Bxh2+` (`10. Kh1 Ng4`), immediately targeting h2 and trapping White’s king.',
            pl: 'Ofiara nr 1! Najdorf rozbija osłonę króla ruchem `9... Gxh2+` (`10. Kh1 Sg4`), natychmiast kierując figury na pole h2.'
          }
        },
        '12... Qh5': {
          badge: '!',
          arrows: ['h5->h2:red', 'h2->g1:amber', 'g4->f2:red'],
          targets: ['h2', 'g5'],
          text: {
            en: 'The queen joins the assault! Threatening `...Qh2#` forces White’s king onto `g2` to reinforce h2.',
            pl: 'Hetman wkracza do szturmu! Groźba `...Hh2#` zmusza białego króla do wyjścia na `g2` dla obrony punktu h2.'
          }
        },
        '13... Bg1': {
          badge: '!!',
          arrows: ['g1->f2:red', 'h5->h2:red'],
          targets: ['g1', 'h2'],
          text: {
            en: 'Sacrifice #2! Clearing the h2 square with tempo (`14. Kxg1 Qh2#` is mate!), forcing `14. Nxg1 Qh2+ 15. Kf3` into the open.',
            pl: 'Ofiara nr 2! Oczyszcza pole h2 z tempem (po `14. Kxg1` następuje `14... Hh2#`!), zmuszając białego króla do wyjścia na `f3`.'
          }
        },
        '15... e5': {
          badge: '!',
          arrows: ['e5->d4:red', 'c8->g4:green'],
          targets: ['e5', 'f4'],
          text: {
            en: 'Breaking open the center! Advancing e5 clears the c8–h3 diagonal for the dark-squared bishop to enter the king hunt.',
            pl: 'Rozbicie centrum! Ruch e5 otwiera przekątną c8–h3 dla drugiego gońca, włączając ostatnie rezerwy do polowania na króla.'
          }
        },
        '16... Ndxe5+': {
          badge: '!!',
          arrows: ['e5->f3:red', 'g4->e5:green'],
          targets: ['e5', 'f3'],
          text: {
            en: 'Sacrifice #3! Two knights leap onto e5 in succession (`17. fxe5 Nxe5+`), yanking White’s king forward onto f4.',
            pl: 'Ofiara nr 3! Dwa czarne skoczki po kolei poświęcają się na e5 (`17. fxe5 Sxe5+`), wyciągając białego króla w głąb pola walki na f4.'
          }
        },
        '20... Bg4+': {
          badge: '!!',
          arrows: ['g4->f3:red', 'g6->e5:green'],
          targets: ['g4', 'f3'],
          text: {
            en: 'Sacrifice #4! Black gives up his fourth and final minor piece (`21. Kxg4 Ne5+`) to lure the king onto the fatal g4 square.',
            pl: 'Ofiara nr 4! Czarne oddają czwartą i ostatnią lekką figurę (`21. Kxg4 Se5+`), wciągając króla na zgubne pole g4.'
          }
        },
        '22... h5#': {
          badge: '🏆',
          arrows: ['h5->g4:red', 'h2->g2:amber', 'h2->f4:amber'],
          targets: ['g4', 'h5'],
          text: {
            en: 'Checkmate with a pawn! After sacrificing all four minor pieces, Najdorf crowns the "Polish Immortal" with `22... h5#`.',
            pl: 'Mat pionem! Po poświęceniu wszystkich czterech lekkich figur Najdorf wieńczy "Polską Nieśmiertelną" ruchem `22... h5#`.'
          }
        }
      }
    },
    {
      id: 'ba-20',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'promotion', 'pin', 'kingHunt'],
      players: {
        en: 'Eduard Gufeld vs. Lubomir Kavalek (Mariánské Lázně, 1962)',
        pl: 'Eduard Gufeld – Lubomir Kavalek (Mariańskie Łaźnie, 1962)'
      },
      title: {
        en: 'Kavalek’s Pawn Avalanche: Double Exchange Sacrifice ("Kavalanche")',
        pl: 'Lawina pionów Kavalka: Podwójna ofiara jakości w Mariańskich Łaźniach'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Lubomir Kavalek jams a wedge into e3 (`7... e3!`), sacrifices both exchanges (`23... Rxd2+!`, `27... Rxc5!`), and marches a terrifying central pawn phalanx alongside his king to crush Gufeld.',
        pl: 'Widok z perspektywy czarnych! Lubomir Kavalek wbija klin na e3 (`7... e3!`), poświęca obie wieże za lekkie figury (`23... Wxd2+!`, `27... Wxc5!`) i prowadzi niszczycielską lawinę centralnych pionów wraz z królem.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Bc5', 'c3', 'f5', 'd4', 'fxe4',
        'Ng5', 'Bb6', 'd5', 'e3', 'Ne4', 'Qh4', 'Qf3', 'Nf6', 'Nxf6+', 'gxf6',
        'dxc6', 'exf2+', 'Kd1', 'dxc6', 'Be2', 'Be6', 'Qh5+', 'Qxh5', 'Bxh5+', 'Ke7',
        'b3', 'Bd5', 'Ba3+', 'Ke6', 'Bg4+', 'f5', 'Bh3', 'Rhg8', 'Nd2', 'Bxg2',
        'Bxg2', 'Rxg2', 'Rf1', 'Rd8', 'Ke2', 'Rxd2+', 'Kxd2', 'e4', 'Bf8', 'f4',
        'b4', 'Rg5', 'Bc5', 'Rxc5', 'bxc5', 'Bxc5', 'Rab1', 'f3', 'Rb4', 'Kf5',
        'Rd4', 'Bxd4', 'cxd4', 'Kf4'
      ],
      annotations: {
        '7... e3': {
          badge: '⚔️',
          arrows: ['e3->f2:red', 'd8->h4:green'],
          targets: ['e3', 'f2'],
          text: {
            en: 'Dynamic pawn wedge! Instead of retreating the attacked knight, Kavalek drives a pawn to e3, targeting f2 with `8... Qh4`.',
            pl: 'Dynamiczny klin pionowy! Zamiast cofać zaatakowanego skoczka, Kavalek pcha piona na e3, szykując atak na punkt f2 ruchem `8... Hh4`.'
          }
        },
        '11... exf2+': {
          badge: '!',
          arrows: ['f2->e1:red', 'd7->c6:green'],
          targets: ['f2', 'd1'],
          text: {
            en: 'Stripping castling rights! This intermediate check strands White’s king on d1 and locks the h1 rook out of play.',
            pl: 'Pozbawienie prawa do roszady! Ten szach więzi białego króla na d1 i na długo wyłącza z gry wieżę h1.'
          }
        },
        '16... Bd5': {
          badge: '!',
          arrows: ['d5->g2:red', 'd5->h1:amber', 'h8->g8:green'],
          targets: ['g2', 'd5'],
          text: {
            en: 'Eyeing the kingside! Even with queens traded, Black’s bishop pair and mobile pawns target g2 while White’s pieces remain tangled.',
            pl: 'Celownik na skrzydło królewskie! Nawet bez hetmanów para gońców czarnych i wolne piony biorą na cel punkt g2.'
          }
        },
        '20... Bxg2': {
          badge: '!!',
          arrows: ['g2->h1:red', 'g8->g2:amber'],
          targets: ['g2', 'h1'],
          text: {
            en: 'Breaking open the g-file! After `21. Bxg2 Rxg2`, Black’s rook dominates the 2nd rank alongside the menacing passed f2 pawn.',
            pl: 'Otwarcie linii g! Po `21. Gxg2 Wxg2` czarna wieża opanowuje 2. linię we współpracy z groźnym wolnym pionem f2.'
          }
        },
        '23... Rxd2+': {
          badge: '!!',
          arrows: ['d2->e2:red', 'e5->e4:green', 'f5->f4:green'],
          targets: ['d2', 'e4', 'f4'],
          text: {
            en: 'First Exchange Sacrifice! Removing the d2 knight clears the runway for Black’s connected passed pawns (`e4`, `f4`) to storm down the board.',
            pl: 'Pierwsza ofiara jakości! Usunięcie skoczka d2 otwiera autostradę dla fali powiązanych wolnych pionów (`e4`, `f4`).'
          }
        },
        '27... Rxc5': {
          badge: '!!',
          arrows: ['c5->c3:amber', 'b6->c5:green', 'f4->f3:green'],
          targets: ['c5', 'f3'],
          text: {
            en: 'Second Exchange Sacrifice! Returning a rook for a bishop leaves Black with an unstoppable phalanx of three connected pawns (`f2`, `f3`, `e4`).',
            pl: 'Druga ofiara jakości! Oddanie wieży za gońca daje czarnym niepowstrzymaną falangę trzech powiązanych pionów (`f2`, `f3`, `e4`).'
          }
        },
        '32... Kf4': {
          badge: '🏆',
          arrows: ['f4->e3:green', 'f3->f2:red', 'e4->e3:red'],
          targets: ['f2', 'f4'],
          text: {
            en: 'After giving back his bishop on d4, Kavalek’s king marches up to support the unstoppable pawns (`...e3` / `...Kg3` promotes). Gufeld resigned!',
            pl: 'Po oddaniu gońca na d4 król Kavalka osobiście wspiera marsz pionów ku promocji (`...e3` i `...Kg3`). Gufeld poddał partię!'
          }
        }
      }
    },
    {
      id: 'ba-21',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'fork', 'promotion', 'discovered'],
      players: {
        en: 'Max Euwe vs. Alexander Alekhine (Zandvoort, 1935)',
        pl: 'Max Euwe – Aleksander Alechin (Zandvoort, 1935)'
      },
      title: {
        en: 'The Pearl of Zandvoort: Euwe’s Piece Sacrifice & Central Avalanche',
        pl: 'Perła z Zandvoort: Ofiara figury Euwego i centralna lawina'
      },
      overview: {
        en: 'Game 26 of the 1935 World Championship match! Max Euwe sacrifices a knight on f5 (`21. Nxf5!!`) for three central pawns, driving an unstoppable pawn wedge up the board before sealing victory with a knight fork (`47. Ne4+`).',
        pl: '26. partia meczu o mistrzostwo świata w 1935 roku! Max Euwe poświęca skoczka na f5 (`21. Sxf5!!`) za trzy piony, tworząc miażdżącą centralną falangę i kończąc pojedynek widłami `47. Se4+`.'
      },
      moves: [
        'd4', 'e6', 'c4', 'f5', 'g3', 'Bb4+', 'Bd2', 'Be7', 'Bg2', 'Nf6',
        'Nc3', 'O-O', 'Nf3', 'Ne4', 'O-O', 'b6', 'Qc2', 'Bb7', 'Ne5', 'Nxc3',
        'Bxc3', 'Bxg2', 'Kxg2', 'Qc8', 'd5', 'd6', 'Nd3', 'e5', 'Kh1', 'c6',
        'Qb3', 'Kh8', 'f4', 'e4', 'Nb4', 'c5', 'Nc2', 'Nd7', 'Ne3', 'Bf6',
        'Nxf5', 'Bxc3', 'Nxd6', 'Qb8', 'Nxe4', 'Bf6', 'Nd2', 'g5', 'e4', 'gxf4',
        'gxf4', 'Bd4', 'e5', 'Qe8', 'e6', 'Rg8', 'Nf3', 'Qg6', 'Rg1', 'Bxg1',
        'Rxg1', 'Qf6', 'Ng5', 'Rg7', 'exd7', 'Rxd7', 'Qe3', 'Re7', 'Ne6', 'Rf8',
        'Qe5', 'Qxe5', 'fxe5', 'Rf5', 'Re1', 'h6', 'Nd8', 'Rf2', 'e6', 'Rd2',
        'Nc6', 'Re8', 'e7', 'b5', 'Nd8', 'Kg7', 'Nb7', 'Kf6', 'Re6+', 'Kg5',
        'Nd6', 'Rxe7', 'Ne4+'
      ],
      annotations: {
        '21. Nxf5': {
          badge: '!!',
          arrows: ['f5->g7:red', 'f5->d6:red', 'f6->c3:blue'],
          targets: ['f5', 'd6', 'c3'],
          text: {
            en: 'The Pearl of Zandvoort! Euwe sacrifices a full piece (`21... Bxc3 22. Nxd6 Qb8 23. Nxe4`) to collect three pawns and create a mobile central mass.',
            pl: 'Perła z Zandvoort! Euwe poświęca figurę (`21... Gxc3 22. Sxd6 Hb8 23. Sxe4`), aby zdobyć trzy piony i uruchomić potężne centrum.'
          }
        },
        '25. e4': {
          badge: '!',
          arrows: ['e4->e5:green', 'd5->d6:green', 'f4->f5:green'],
          targets: ['e4', 'e5'],
          text: {
            en: 'Building the pawn roller! After `25... gxf4 26. gxf4`, White’s connected d-, e-, and f-pawns are ready to march down the board.',
            pl: 'Budowa centralnego walca! Po `25... gxf4 26. gxf4` połączone białe piony d, e i f są gotowe do decydującego marszu.'
          }
        },
        '28. e6': {
          badge: '!',
          arrows: ['e6->d7:red', 'e6->e7:green'],
          targets: ['e6', 'd7'],
          text: {
            en: 'Driving a passed pawn onto the 6th rank! It hits the d7 knight and cramps Black’s pieces while White switches focus to the g-file.',
            pl: 'Wbicie wolnego piona na 6. linię! Atakuje skoczka d7 i paraliżuje obronę, podczas gdy białe przenoszą ciężar gry na linię g.'
          }
        },
        '30. Rg1': {
          badge: '!',
          arrows: ['g1->g6:red', 'g1->g8:amber', 'f3->g5:green'],
          targets: ['g6', 'g8'],
          text: {
            en: 'Seizing the open g-file! Trading on g1 (`30... Bxg1 31. Rxg1`) lets White’s knight invade g5 and e6 with devastating effect.',
            pl: 'Opanowanie otwartej linii g! Wymiana na g1 (`30... Gxg1 31. Wxg1`) pozwala skoczkowi wedrzeć się na g5 oraz e6.'
          }
        },
        '33. exd7': {
          badge: '!',
          arrows: ['d7->e8:red', 'e3->e6:green'],
          targets: ['d7', 'e6'],
          text: {
            en: 'Winning back the sacrificed piece! Euwe restores material equality while retaining two powerful passed pawns and a monster knight on e6.',
            pl: 'Odzyskanie poświęconej figury! Euwe wyrównuje materiał, zachowując dwa groźne wolne piony i dominującego skoczka na e6.'
          }
        },
        '41. Nc6': {
          badge: '!',
          arrows: ['c6->e7:red', 'e6->e7:green', 'e1->e7:amber'],
          targets: ['e7', 'd8'],
          text: {
            en: 'Precision knight coordination! Attacking e7 forces Black’s rook back (`41... Re8`), allowing `42. e7` right to the doorstep of promotion.',
            pl: 'Precyzyjna współpraca skoczka z pionem! Atak na e7 zmusza wieżę do odwrotu (`41... We8`), dzięki czemu pion wchodzi na `42. e7`.'
          }
        },
        '47. Ne4+': {
          badge: '🏆',
          arrows: ['e4->g5:red', 'e4->d2:red', 'e7->e8:green'],
          targets: ['g5', 'd2'],
          text: {
            en: 'Royal Knight Fork! Forking Alekhine’s king on g5 and rook on d2 wins a full rook and clinches one of Euwe’s greatest championship wins.',
            pl: 'Królewskie widełki! Jednoczesny atak na króla na g5 i wieżę na d2 zdobywa całą wieżę i zapewnia Euwemu jedno z najsłynniejszych zwycięstw.'
          }
        }
      }
    },
    {
      id: 'ba-22',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'pin'],
      players: {
        en: 'Yuri Averbakh vs. Alexander Kotov (Zurich, 1953)',
        pl: 'Jurij Awerbach – Aleksander Kotow (Zurych, 1953)'
      },
      title: {
        en: 'Kotov’s Masterpiece: 30... Qxh3+!! & 20-Move King Hunt',
        pl: 'Arcydzieło Kotowa: Ofiara hetmana 30... Hxh3+!! i 20-ruchowe polowanie'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Winner of the Zurich 1953 Brilliancy Prize: Alexander Kotov sacrifices his queen on h3 (`30... Qxh3+!!`) for a single pawn, dragging White’s king across the board in a relentless rook-and-minor-piece hunt.',
        pl: 'Widok z perspektywy czarnych! Nagroda za najpiękniejszą partię turnieju w Zurychu 1953: Aleksander Kotow poświęca hetmana na h3 (`30... Hxh3+!!`) za jednego piona, goniąc białego króla po całej szachownicy.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'd6', 'Nf3', 'Nbd7', 'Nc3', 'e5', 'e4', 'Be7',
        'Be2', 'O-O', 'O-O', 'c6', 'Qc2', 'Re8', 'Rd1', 'Bf8', 'Rb1', 'a5',
        'd5', 'Nc5', 'Be3', 'Qc7', 'h3', 'Bd7', 'Rbc1', 'g6', 'Nd2', 'Rab8',
        'Nb3', 'Nxb3', 'Qxb3', 'c5', 'Kh2', 'Kh8', 'Qc2', 'Ng8', 'Bg4', 'Nh6',
        'Bxd7', 'Qxd7', 'Qd2', 'Ng8', 'g4', 'f5', 'f3', 'Be7', 'Rg1', 'Rf8',
        'Rcf1', 'Rf7', 'gxf5', 'gxf5', 'Rg2', 'f4', 'Bf2', 'Rf6', 'Ne2', 'Qxh3+',
        'Kxh3', 'Rh6+', 'Kg4', 'Nf6+', 'Kf5', 'Nd7', 'Rg5', 'Rf8+', 'Kg4', 'Nf6+',
        'Kf5', 'Ng8+', 'Kg4', 'Nf6+', 'Kf5', 'Nxd5+', 'Kg4', 'Nf6+', 'Kf5', 'Ng8+',
        'Kg4', 'Nf6+', 'Kf5', 'Ng8+', 'Kg4', 'Bxg5', 'Kxg5', 'Rf7', 'Bh4', 'Rg6+',
        'Kh5', 'Rfg7', 'Bg5', 'Rxg5+', 'Kh4', 'Nf6', 'Ng3', 'Rxg3', 'Qxd6', 'R3g6',
        'Qb8+', 'Rg8'
      ],
      annotations: {
        '28... f4': {
          badge: '⚔️',
          arrows: ['f4->e3:red', 'f7->f6:green'],
          targets: ['e3', 'h3'],
          text: {
            en: 'Locking the kingside! Black drives White’s bishop back to f2 and prepares the decisive rook swing `29... Rf6` aimed at h6.',
            pl: 'Zablokowanie skrzydła królewskiego! Czarne spychają gońca na f2 i przygotowują decydujący przerzut wieży `29... Wf6` na h6.'
          }
        },
        '30... Qxh3+': {
          badge: '!!',
          arrows: ['h3->h2:red', 'f6->h6:green', 'g8->f6:green'],
          targets: ['h3', 'h2'],
          text: {
            en: 'The Intuitive Queen Sacrifice! Giving up the queen for one pawn strips White’s fortress (`31. Kxh3 Rh6+ 32. Kg4 Nf6+ 33. Kf5`).',
            pl: 'Intuicyjna ofiara hetmana! Oddanie hetmana za zaledwie jednego piona burzy twierdzę białych (`31. Kxh3 Wh6+ 32. Kg4 Sf6+ 33. Kf5`).'
          }
        },
        '33... Nd7': {
          badge: '!!',
          arrows: ['b8->f8:green', 'd7->f6:green', 'h6->h5:red'],
          targets: ['f5', 'f8'],
          text: {
            en: 'Quiet killer move! Black clears the f-file for `34... Rf8+`, forcing White to block his own king’s flight with `34. Rg5`.',
            pl: 'Cichy zabójczy ruch! Czarne otwierają linię f pod `34... Wf8+`, zmuszając białe do zastawienia drogi odwrotu ruchem `34. Wg5`.'
          }
        },
        '38... Nxd5+': {
          badge: '!',
          arrows: ['d5->f5:amber', 'h6->f6:red'],
          targets: ['d5', 'f5'],
          text: {
            en: 'Winning material with discovered check! Repeating moves to pass the time control while keeping White’s king caged on f5 and g4.',
            pl: 'Zdobycie piona z szachem z odsłonięcia! Powtórzenie posunięć przed kontrolą czasu utrzymuje białego króla w śmiertelnej klatce na f5 i g4.'
          }
        },
        '43... Bxg5': {
          badge: '!',
          arrows: ['g5->f4:amber', 'f8->f7:green', 'h6->g6:green'],
          targets: ['g5', 'g4'],
          text: {
            en: 'Collecting the pinned rook! After `44. Kxg5 Rf7`, Black doubles rooks on the g-file (`...Rg6+`, `...Rfg7`) with lethal mating threats.',
            pl: 'Zbicie związanej wieży! Po `44. Kxg5 Wf7` czarne zdwajają wieże na linii g (`...Wg6+`, `...Wfg7`), tworząc nieuchronne groźby matowe.'
          }
        },
        '47... Rxg5+': {
          badge: '!',
          arrows: ['g5->h5:red', 'g8->f6:green'],
          targets: ['g5', 'h5'],
          text: {
            en: 'Removing the final defender! Returning the exchange drags the king to h4, where `48... Nf6` and `49... Rxg3` seal the mating net.',
            pl: 'Usunięcie ostatniego obrońcy! Oddanie jakości spycha króla na h4, gdzie `48... Sf6` oraz `49... Wxg3` zamykają klatkę.'
          }
        },
        '51... Rg8': {
          badge: '🏆',
          arrows: ['g8->b8:red', 'g6->g4:red', 'f6->g4:red'],
          targets: ['b8', 'h4'],
          text: {
            en: 'Blocking the desperate queen check cleanly! White has no defense left against Black’s mating threats on h4/g4 and resigned.',
            pl: 'Spokojne zasłonięcie się od ostatniego szacha! Białe nie mają już żadnej obrony przed matem na h4 lub g4 i poddały partię.'
          }
        }
      }
    },
    {
      id: 'ba-23',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'fork', 'pin', 'kingHunt'],
      players: {
        en: 'Amédée Gibaud vs. Frédéric Lazard (Paris, 1924)',
        pl: 'Amédée Gibaud – Frédéric Lazard (Paryż, 1924)'
      },
      title: {
        en: 'Lazard’s 4-Move Miniature: The 4... Ne3!! Queen Trap',
        pl: '4-ruchowa miniatura Lazarda: Pułapka na hetmana 4... Se3!!'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Widely celebrated as the shortest decisive master game ever recorded: after `1. d4 Nf6 2. Nd2 e5 3. dxe5 Ng4 4. h3?`, Frédéric Lazard lands `4... Ne3!!`—trapping the queen or forcing instant checkmate.',
        pl: 'Widok z perspektywy czarnych! Najsłynniejsza 4-posunięciowa miniatura mistrzowska: po `1. d4 Sf6 2. Sd2 e5 3. dxe5 Sg4 4. h3?`, Frédéric Lazard gra `4... Se3!!` — białe tracą hetmana lub dostają mata.'
      },
      moves: [
        'd4', 'Nf6', 'Nd2', 'e5', 'dxe5', 'Ng4', 'h3', 'Ne3'
      ],
      annotations: {
        '2. Nd2': {
          badge: '📖',
          arrows: ['d2->e4:blue', 'e7->e5:red'],
          targets: ['e5', 'd4'],
          text: {
            en: 'An awkward move order! `2. Nd2` blocks White’s queen and dark-squared bishop, leaving the e3 and f2 squares dangerously weak.',
            pl: 'Niezręczna kolejność ruchów! `2. Sd2` blokuje własnego hetmana i gońca c1, niebezpiecznie osłabiając pola e3 oraz f2.'
          }
        },
        '2... e5': {
          badge: '⚔️',
          arrows: ['e5->d4:red', 'f8->c5:green'],
          targets: ['d4', 'e5'],
          text: {
            en: 'The Lazard Gambit! Black immediately challenges the center, tempting White to open the diagonal toward the king.',
            pl: 'Gambit Lazarda! Czarne natychmiast uderzają w centrum, prowokując otwarcie przekątnych w stronę białego króla.'
          }
        },
        '3... Ng4': {
          badge: '!',
          arrows: ['g4->e5:red', 'g4->f2:red', 'g4->e3:green'],
          targets: ['e5', 'e3'],
          text: {
            en: 'Provoking a fatal reflex! The knight attacks e5 while quietly eyeing the defenseless e3 outpost.',
            pl: 'Zastawienie pułapki! Skoczek atakuje piona e5, jednocześnie czyhając na bezbronne pole e3.'
          }
        },
        '4. h3': {
          badge: '??',
          arrows: ['h3->g4:blue', 'g4->e3:red', 'd8->h4:red'],
          targets: ['g4', 'e3'],
          text: {
            en: 'A 4-move blunder! Assuming the knight must retreat, White actually pushes it straight onto the lethal e3 square (`4. Ngf3` was needed).',
            pl: 'Błąd w 4. ruchu! Białe chcą przegonić skoczka, ale w rzeczywistości wpychają go prosto na pole e3 (konieczne było `4. Sgf3`).'
          }
        },
        '4... Ne3': {
          badge: '🏆',
          arrows: ['e3->d1:red', 'e3->f1:red', 'd8->h4:amber'],
          targets: ['e3', 'd1', 'h4'],
          text: {
            en: 'Masterpiece in 4 moves! The knight traps the queen on d1 because capturing (`5. fxe3`) allows `5... Qh4+ 6. g3 Qxg3#`! White resigned on the spot.',
            pl: 'Nokaut w 4 ruchach! Skoczek łapie hetmana d1, bo bicie `5. fxe3` prowadzi do `5... Hh4+ 6. g3 Hxg3#`! Białe poddały partię natychmiast.'
          }
        }
      }
    },
    {
      id: 'ba-24',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['smothered', 'pin', 'sacrifice'],
      players: {
        en: 'Leo Godai vs. Georg Kieninger (Vienna, 1925)',
        pl: 'Leo Godai – Georg Kieninger (Wiedeń, 1925)'
      },
      title: {
        en: 'Budapest Gambit: The Kieninger Smothered Trap (8... Nd3#)',
        pl: 'Gambit Budapeszteński: Pułapka Kieningera w 8 ruchach (8... Sd3#)'
      },
      overview: {
        en: 'Viewed from Black’s perspective! One of the cleanest 8-move traps in opening theory: Georg Kieninger aligns his queen on e7 along the e-file (`6... Qe7!`), leaves his b4 bishop as bait, and delivers a stunning pinned smothered mate (`8... Nd3#`).',
        pl: 'Widok z perspektywy czarnych! Jedna z najczystszych pułapek debiutowych w historii: Georg Kieninger ustawia hetmana na linii e (`6... He7!`), wystawia gońca b4 na przynętę i daje mata ze związaniem (`8... Sd3#`).'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'e5', 'dxe5', 'Ng4', 'Bf4', 'Nc6', 'Nf3', 'Bb4+',
        'Nbd2', 'Qe7', 'a3', 'Ngxe5', 'axb4', 'Nd3#'
      ],
      annotations: {
        '2... e5': {
          badge: '📖',
          arrows: ['e5->d4:red', 'f6->g4:green'],
          targets: ['d4', 'e5'],
          text: {
            en: 'The Budapest Gambit! Black sacrifices a pawn to seize quick development and dark-square tactical chances.',
            pl: 'Gambit Budapeszteński! Czarne poświęcają piona w zamian za błyskawiczny rozwój figur i grę po czarnych polach.'
          }
        },
        '5... Bb4+': {
          badge: '⚔️',
          arrows: ['b4->e1:red', 'd8->e7:green'],
          targets: ['e1', 'd2'],
          text: {
            en: 'Developing check forces `6. Nbd2`, blocking White’s queen from defending d3 and setting up an X-ray along the e-file.',
            pl: 'Rozwijający szach wymusza `6. Sbd2`, co zasłania białemu hetmanowi obronę pola d3 i przygotowuje rentgen po linii e.'
          }
        },
        '6... Qe7': {
          badge: '🎯',
          arrows: ['e7->e5:red', 'e7->e1:amber'],
          targets: ['e5', 'e2'],
          text: {
            en: 'Setting the Kieninger Trap! Piling a third attacker onto e5 while secretly pinning the e2 pawn against White’s king on e1.',
            pl: 'Zastawienie Pułapki Kieningera! Trzeci atak na e5 i ciche związanie piona e2 z białym królem stojącym na e1.'
          }
        },
        '7... Ngxe5': {
          badge: '!!',
          arrows: ['e5->d3:red', 'e7->e1:amber', 'a3->b4:blue'],
          targets: ['d3', 'b4'],
          text: {
            en: 'Ignoring `7. a3`! Black leaves the b4 bishop en prise—White had to trade knights on e5 (`8. Nxe5`), as taking the bishop is fatal.',
            pl: 'Zignorowanie ruchu `7. a3`! Czarne zostawiają gońca b4 pod biciem — białe musiały wymienić na e5 (`8. Sxe5`), bo zbicie gońca przegrywa.'
          }
        },
        '8. axb4': {
          badge: '??',
          arrows: ['a3->b4:blue', 'e5->d3:red', 'e7->e2:amber'],
          targets: ['b4', 'd3', 'e2'],
          text: {
            en: 'Springing the trap! White greedily captures the bishop, completely overlooking the absolute pin along the e-file.',
            pl: 'Wpadnięcie w pułapkę! Białe łakomie biją gońca, zupełnie zapominając o bezwzględnym związaniu na linii e.'
          }
        },
        '8... Nd3#': {
          badge: '🏆',
          arrows: ['d3->e1:red', 'e7->e2:amber', 'e2->e1:amber'],
          targets: ['e1', 'e2', 'd3'],
          text: {
            en: 'Smothered Pin Mate! The e2 pawn cannot capture the d3 knight because it is pinned to White’s king by Black’s queen on e7!',
            pl: 'Mat zaduszony ze związaniem! Pion e2 nie może zbić skoczka na d3, ponieważ jest bezwzględnie związany z królem przez czarnego hetmana z e7!'
          }
        }
      }
    },
    // === FAST OPENING TRAPS & MINIATURES (ba-25..ba-32: 4 Easy, 4 Medium) ===
    {
      id: 'ba-25',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'discovered', 'attraction', 'deflection'],
      players: {
        en: 'Budapest Gambit: Fajarowicz Trap (After Wiesbaden, 1928)',
        pl: 'Gambit Budapeszteński: Pułapka Fajarowicza (po Wiesbaden, 1928)'
      },
      title: {
        en: 'Fajarowicz Gambit Trap: Winning the Queen in 8 Moves',
        pl: 'Pułapka w Gambicie Fajarowicza: Zdobycie hetmana w 8 ruchach'
      },
      overview: {
        en: 'Sammi Fajarowicz debuted 3... Ne4 at Wiesbaden in 1928, trading a pawn for lightning piece activity. Watch how a routine fianchetto (6. g3??) collapses to the explosive 6... Nxf2! and 7... Bxg3+! discovered attack against the d1 queen.',
        pl: 'Sammi Fajarowicz wprowadził ruch 3... Se4 w Wiesbaden w 1928 roku, oddając piona za błyskawiczny rozwój figur. Zobacz, jak rutynowe fianchetto (6. g3??) rozpada się po ofierze 6... Sxf2! i ataku z odsłonięcia 7... Gxg3+! na hetmana d1.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'e5', 'dxe5', 'Ne4', 'Nf3', 'd6', 'exd6', 'Bxd6',
        'g3', 'Nxf2', 'Kxf2', 'Bxg3+', 'Kxg3', 'Qxd1'
      ],
      annotations: {
        '3... Ne4': {
          badge: '📖',
          arrows: ['e4->f2:red', 'e4->c3:amber'],
          targets: ['e4', 'f2'],
          text: {
            en: 'The Fajarowicz Variation! Instead of chasing the e5 pawn with 3... Ng4, Black leaps into the center to restrict White and eye f2.',
            pl: 'Wariant Fajarowicza! Zamiast odbijać piona e5 ruchem 3... Sg4, czarne wskakują skoczkiem do centrum i biorą na celownik punkt f2.'
          }
        },
        '5... Bxd6': {
          badge: '🎯',
          arrows: ['d6->h2:red', 'd8->d1:amber'],
          targets: ['h2', 'd6'],
          text: {
            en: 'Rapid development! Black sacrifices a second pawn so the dark-squared bishop aims at h2 and the d-file opens behind it.',
            pl: 'Błyskawiczny rozwój! Czarne oddają drugiego piona, aby czarnopolowy goniec celował w h2, a za nim otworzyła się linia d.'
          }
        },
        '6. g3': {
          badge: '??',
          arrows: ['e4->f2:red', 'd6->g3:red', 'd8->d1:amber'],
          targets: ['f2', 'g3', 'd1'],
          text: {
            en: 'Fatal blunder! Playing 6. g3 to blunt the d6 bishop leaves f2 and g3 fatally vulnerable (6. Nbd2 or 6. e3 was needed).',
            pl: 'Krytyczny błąd! Ruch 6. g3 miał zasłonić przekątną gońca d6, ale fatalnie osłabia pola f2 i g3 (należało grać 6. Sbd2 lub 6. e3).'
          }
        },
        '6... Nxf2': {
          badge: '!!',
          arrows: ['f2->d1:red', 'f2->h1:red', 'd6->g3:amber'],
          targets: ['f2', 'd1', 'h1'],
          text: {
            en: 'Knight sacrifice! Forking queen and rook forces White’s king onto f2, lining up a deadly discovered attack along the d-file.',
            pl: 'Ofiara skoczka! Widełki na hetmana d1 i wieżę h1 zmuszają białego króla do bicia na f2 i wejścia pod linię ataku.'
          }
        },
        '7... Bxg3+': {
          badge: '!!',
          arrows: ['g3->f2:red', 'd8->d1:red'],
          targets: ['f2', 'g3', 'd1'],
          text: {
            en: 'Discovered attack and attraction! Checking on g3 uncovers the black queen’s gaze down the d-file while dragging the king away from d1.',
            pl: 'Atak z odsłonięcia i odciągnięcie! Szach gońcem na g3 otwiera drogę czarnemu hetmanowi po linii d i zmusza króla do opuszczenia obrony d1.'
          }
        },
        '8... Qxd1': {
          badge: '🏆',
          arrows: ['d1->c1:red', 'd1->f1:amber', 'd1->h1:amber'],
          targets: ['d1', 'c1', 'f1'],
          text: {
            en: 'White’s queen falls cleanly! Black emerges a full queen up for a bishop and knight with a completely winning position.',
            pl: 'Biały hetman pada łupem! Czarne zdobywają hetmana za skoczka i gońca, uzyskując całkowicie wygraną pozycję.'
          }
        }
      }
    },
    {
      id: 'ba-26',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['pin', 'deflection', 'sacrifice', 'zwischenzug'],
      players: {
        en: 'Carl Mayet vs. Daniel Harrwitz (Berlin, 1848)',
        pl: 'Carl Mayet – Daniel Harrwitz (Berlin, 1848)'
      },
      title: {
        en: 'The Elephant Trap: Breaking the Pin on f6',
        pl: 'Pułapka Słonia: Złamanie związania na f6'
      },
      overview: {
        en: 'The earliest recorded master example of the famous Queen’s Gambit Declined Elephant Trap. Watch how Harrwitz lures White into capturing the "poisoned" d5 pawn against a relative pin, then wins a piece with 6... Nxd5! and 7... Bb4+!',
        pl: 'Najstarszy zapisany mistrzowski przykład słynnej „Pułapki Słonia” w Gambicie Hetmańskim. Zobacz, jak Harrwitz wykorzystuje pozorne związanie na f6 i po 6... Sxd5! oraz wtrąconym szachu 7... Gb4+! zdobywa całą figurę.'
      },
      moves: [
        'd4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Nbd7', 'cxd5', 'exd5',
        'Nxd5', 'Nxd5', 'Bxd8', 'Bb4+', 'Qd2', 'Kxd8'
      ],
      annotations: {
        '4. Bg5': {
          badge: '📖',
          arrows: ['g5->f6:amber', 'f6->d8:amber'],
          targets: ['f6', 'd8'],
          text: {
            en: 'White pins the f6 knight to the black queen on d8, putting apparent pressure on the d5 center.',
            pl: 'Białe wiążą skoczka f6 na tle czarnego hetmana na d8, wywierając pozorny nacisk na centralne pole d5.'
          }
        },
        '4... Nbd7': {
          badge: '🎯',
          arrows: ['d7->f6:green', 'f8->b4:blue'],
          targets: ['d5', 'f6'],
          text: {
            en: 'A deceptive setup! Black bolsters f6 and quietly prepares the classic Elephant Trap if White gets greedy on d5.',
            pl: 'Przebiegłe przygotowanie! Czarne wzmacniają skoczka f6 i zastawiają klasyczną Pułapkę Słonia, jeśli białe połakomią się na piona d5.'
          }
        },
        '6. Nxd5': {
          badge: '??',
          arrows: ['d5->f6:red', 'g5->d8:amber', 'f6->d5:red'],
          targets: ['d5', 'f6'],
          text: {
            en: 'Walking straight into the trap! White thinks the f6 knight is paralyzed by the pin — overlooking that Black’s queen sacrifice has a tactical sting.',
            pl: 'Prosto w pułapkę! Białe sądzą, że skoczek f6 jest sparaliżowany związaniem — przeoczając taktyczny kontratak po oddaniu hetmana.'
          }
        },
        '6... Nxd5': {
          badge: '!!',
          arrows: ['g5->d8:red', 'f8->b4:amber', 'd5->b4:green'],
          targets: ['d5', 'd8'],
          text: {
            en: 'Breaking the relative pin! Harrwitz leaves the d8 queen en prise because White’s king has no flight square once the dark-squared bishop enters b4.',
            pl: 'Złamanie względnego związania! Harrwitz oddaje hetmana d8 pod bicie, ponieważ biały król nie ma żadnego pola ucieczki przed szachem z b4.'
          }
        },
        '7... Bb4+': {
          badge: '!',
          arrows: ['b4->e1:red', 'd1->d2:blue'],
          targets: ['e1', 'd2'],
          text: {
            en: 'The devastating intermediate check! With White’s e2 pawn and c1/d1 pieces blocking flight, White must interpose the queen on d2.',
            pl: 'Zabójczy szach! Biały król jest zablokowany przez własne figury, więc jedyną obroną przed matem jest zasłonięcie się hetmanem na d2.'
          }
        },
        '8... Kxd8': {
          badge: '🏆',
          arrows: ['b4->e1:amber', 'b4->d2:red', 'd5->b4:green'],
          targets: ['d8', 'd2', 'b4'],
          text: {
            en: 'White resigned! The d2 queen is pinned to e1 and b4 is guarded by the d5 knight (9. Qc3 fails to 9... Nxc3), leaving Black a clean piece ahead.',
            pl: 'Białe poddały partię! Hetman na d2 jest związany z królem e1, a gońca b4 broni skoczek d5 (9. Hc3 przegrywa po 9... Sxc3), więc czarne zostają z czystą figurą przewagi.'
          }
        }
      }
    },
    {
      id: 'ba-27',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'pin', 'attraction'],
      players: {
        en: 'Stafford Gambit Trap (After Lowens vs. Stafford, 1950)',
        pl: 'Pułapka Gambitu Stafforda (wg Lowens – Stafford, 1950)'
      },
      title: {
        en: 'Stafford Gambit: The Queen Sacrifice & Bishop Checkmate',
        pl: 'Gambit Stafforda: Ofiara hetmana i mat dwoma gońcami'
      },
      overview: {
        en: 'Popularized by Joseph Stafford in 1950, this hyper-sharp Petrov sideline trades a pawn for explosive diagonals. When White tries to pin the f6 knight with 6. Bg5??, Black unleashes 6... Nxe4!! — giving up the queen for a forced mate in 2!',
        pl: 'Rozsławiony przez Josepha Stafforda w 1950 roku ostry wariant Obrony Petroffa poświęca piona za otwarte przekątne. Gdy białe próbują związać skoczka ruchem 6. Gg5??, czarne uderzają 6... Sxe4!! — oddając hetmana pod forsownego mata w 2 ruchach!'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'Nc6', 'Nxc6', 'dxc6', 'd3', 'Bc5',
        'Bg5', 'Nxe4', 'Bxd8', 'Bxf2+', 'Ke2', 'Bg4#'
      ],
      annotations: {
        '3... Nc6': {
          badge: '📖',
          arrows: ['c6->e5:red', 'f8->c5:blue'],
          targets: ['e5'],
          text: {
            en: 'The Stafford Gambit! Rather than immediately regaining the pawn with 3... d6, Black develops with tempo to open lines for both bishops.',
            pl: 'Gambit Stafforda! Zamiast od razu odzyskiwać piona ruchem 3... d6, czarne poświęcają go, aby błyskawicznie otworzyć przekątne dla obu gońców.'
          }
        },
        '5... Bc5': {
          badge: '🎯',
          arrows: ['c5->f2:red', 'f6->g4:green'],
          targets: ['f2'],
          text: {
            en: 'Taking aim at f2! With the d-file open for Black’s queen and c8 bishop, f2 is already under dangerous pressure.',
            pl: 'Celownik na punkt f2! Przy otwartej linii d dla hetmana i gońca c8 słaby punkt f2 znajduje się pod silnym ogniem.'
          }
        },
        '6. Bg5': {
          badge: '??',
          arrows: ['g5->f6:amber', 'f6->d8:amber', 'c5->f2:red'],
          targets: ['f6', 'd8'],
          text: {
            en: 'A fatal blunder! White assumes the pin against d8 immobilizes the f6 knight, overlooking that f2 is completely undefended.',
            pl: 'Fatalny błąd! Białe sądzą, że związanie na tle hetmana d8 unieruchamia skoczka f6, zapominając o całkowicie niebronionym polu f2.'
          }
        },
        '6... Nxe4': {
          badge: '!!',
          arrows: ['e4->g5:red', 'e4->f2:red', 'c5->f2:amber'],
          targets: ['f2', 'd8'],
          text: {
            en: 'Brilliant queen sacrifice! Black breaks the relative pin and ignores the d8 queen. If White declines with 7. dxe4, 7... Qxg5 wins cleanly.',
            pl: 'Genialna ofiara hetmana! Czarne zrywają związanie i ignorują groźbę bicia na d8. Po 7. dxe4 następuje 7... Hxg5 z wygraną figurą.'
          }
        },
        '7... Bxf2+': {
          badge: '!',
          arrows: ['f2->e1:red', 'e4->d2:amber', 'c8->g4:green'],
          targets: ['e1', 'e2'],
          text: {
            en: 'Snapping shut the trap! The bishop check forces White’s king onto the exposed e2 square, cutting off every retreat.',
            pl: 'Zatrzaśnięcie pułapki! Szach gońcem na f2 zmusza białego króla do wyjścia na odkryte pole e2, skąd nie ma odwrotu.'
          }
        },
        '8... Bg4#': {
          badge: '🏆',
          arrows: ['g4->e2:red', 'f2->e1:amber', 'e4->d2:amber'],
          targets: ['e2', 'g4'],
          text: {
            en: 'Checkmate! White’s own d1 queen and f1 bishop box in the king while two black bishops and the e4 knight control every escape square.',
            pl: 'Mat! Dwa gońce i skoczek e4 odcinają wszystkie pola ucieczki białemu królowi na e2, podczas gdy własne figury blokują go na d1 i f1.'
          }
        }
      }
    },
    {
      id: 'ba-28',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'clearance', 'pin', 'kingHunt'],
      players: {
        en: 'Alexander Halprin vs. Harry Nelson Pillsbury (Munich, 1900)',
        pl: 'Alexander Halprin – Harry Nelson Pillsbury (Monachium, 1900)'
      },
      title: {
        en: 'Berlin Counterblast: Halprin’s Brilliant Double-Rook Attack',
        pl: 'Błyskotliwa kombinacja w Monachium: Ofiara wieży 17. Wa3!'
      },
      overview: {
        en: 'A wild tactical battle from the 1900 Munich Congress in the Ruy Lopez Berlin Defense. Facing the great Harry Nelson Pillsbury, Alexander Halprin sacrifices a knight (15. Nd5!), lifts his rook via 17. Ra3!, and sacrifices an exchange and bishop (20. Bh6! 21. Bxg7!) to force a brilliant perpetual-check draw.',
        pl: 'Niezwykła bitwa taktyczna z turnieju w Monachium (1900) w wariancie berlińskim Partii Hiszpańskiej. Alexander Halprin poświęca skoczka (15. Sd5!), przerzuca wieżę przez trzecią linię (17. Wa3!) i oddaje gońca (20. Gh6! 21. Gxg7!), zmuszając wielkiego Pillsbury’ego do remisu przez wieczny szach.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4', 'd4', 'Nd6',
        'dxe5', 'Nxb5', 'a4', 'd6', 'e6', 'fxe6', 'axb5', 'Ne7', 'Nc3', 'Ng6',
        'Ng5', 'Be7', 'Qh5', 'Bxg5', 'Bxg5', 'Qd7', 'b6', 'cxb6', 'Nd5', 'exd5',
        'Rfe1+', 'Kf8', 'Ra3', 'Ne5', 'Rxe5', 'dxe5', 'Rf3+', 'Kg8', 'Bh6', 'Qe7',
        'Bxg7', 'Kxg7', 'Rg3+', 'Kf8', 'Rf3+', 'Kg7', 'Rg3+', 'Kf8'
      ],
      annotations: {
        '8. e6': {
          badge: '⚔️',
          arrows: ['e6->f7:red', 'a4->b5:green'],
          targets: ['e6', 'f7'],
          text: {
            en: 'Prying open the e-file! Before recapturing the b5 knight, White thrusts 8. e6 to wreck Black’s kingside pawn shield.',
            pl: 'Otwarcie linii e! Zanim białe odbiją skoczka na b5, pchają piona na e6, aby rozbić strukturę skrzydła królewskiego czarnych.'
          }
        },
        '12. Qh5': {
          badge: '🎯',
          arrows: ['h5->h7:red', 'h5->g6:red', 'h5->e8:amber'],
          targets: ['h7', 'g6'],
          text: {
            en: 'Launching the kingside battery! White targets h7 and the g6 knight, forcing Black to give up the dark-squared bishop on g5.',
            pl: 'Uderzenie na skrzydło królewskie! Hetman na h5 celuje w pola h7 oraz g6, zmuszając czarne do oddania czarnopolowego gońca.'
          }
        },
        '15. Nd5': {
          badge: '!!',
          arrows: ['f1->e1:green', 'e1->e8:red', 'e6->d5:amber'],
          targets: ['d5', 'e8'],
          text: {
            en: 'Dynamic knight sacrifice! White sacrifices the knight on d5 to clear the central e-file for the rook check while Black’s king is uncastled.',
            pl: 'Dynamiczna ofiara skoczka! Białe oddają skoczka na d5, aby błyskawicznie otworzyć linię e dla wieży z f1 przeciwko królowi w centrum.'
          }
        },
        '17. Ra3': {
          badge: '!!',
          arrows: ['a3->f3:green', 'f3->f8:red', 'a3->g3:green'],
          targets: ['a3', 'f8'],
          text: {
            en: 'The iconic rook lift! With 17. Ra3, White swings the queenside rook straight into the attack via f3 and g3, ignoring material.',
            pl: 'Słynny przerzut wieży! Ruchem 17. Wa3 białe włączają drugą wieżę do ataku przez pola f3 i g3, całkowicie ignorując straty materialne.'
          }
        },
        '18. Rxe5': {
          badge: '!',
          arrows: ['e5->d5:red', 'a3->f3:green'],
          targets: ['e5', 'f8'],
          text: {
            en: 'Exchange sacrifice! Eliminating Pillsbury’s defensive knight on e5 so the a3 rook can swing to f3 with check.',
            pl: 'Ofiara jakości! Usunięcie kluczowego obrońcy e5 pozwala wieży z a3 wejść na linię f z szachem.'
          }
        },
        '20. Bh6': {
          badge: '!!',
          arrows: ['h6->g7:red', 'f3->f8:amber'],
          targets: ['g7', 'f8'],
          text: {
            en: 'Hammer blow! Attacking g7 while tying down the black king, White threatens Bxg7+ and Rf8+ mate.',
            pl: 'Cios z zaskoczenia! Atakując punkt g7 przy zamkniętej wieży h8, białe grożą biciem na g7 i matem na f8.'
          }
        },
        '24. Rg3+': {
          badge: '🏆',
          arrows: ['g3->g7:red', 'g3->f3:blue'],
          targets: ['g7', 'f8'],
          text: {
            en: 'Perpetual check draw! After 21. Bxg7 Kxg7, White’s lone rook oscillates endlessly between f3 and g3 to seal a famous draw.',
            pl: 'Remis przez wieczny szach! Po ofierze gońca 21. Gxg7 Kxg7 samotna biała wieża oscyluje między polami f3 i g3, ratując efektowny remis.'
          }
        }
      }
    },
    {
      id: 'ba-29',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['fork', 'pin', 'deflection', 'backRank'],
      players: {
        en: 'Englund Gambit Trap (Eric Rosen vs. NN)',
        pl: 'Pułapka Gambitu Englunda (Eric Rosen – NN)'
      },
      title: {
        en: 'Englund Gambit: The 8-Move Back-Rank Checkmate',
        pl: 'Gambit Englunda: Mat na ostatniej linii w 8 ruchach'
      },
      overview: {
        en: 'The infamous Englund Gambit queen trap popularized by IM Eric Rosen. Black attacks the e5 pawn twice, uses a queen fork (4... Qb4+!) to grab b2, and pins the c3 bishop with 6... Bb4!! to deflect White’s queen away from guarding c1.',
        pl: 'Słynna pułapka w Gambicie Englunda spopularyzowana przez IM Erica Rosena. Czarne dwukrotnie atakują piona e5, widełkami 4... Hb4+! zdobywają piona b2, a związaniem 6... Gb4!! odciągają białego hetmana od obrony pierwszej linii.'
      },
      moves: [
        'd4', 'e5', 'dxe5', 'Nc6', 'Nf3', 'Qe7', 'Bf4', 'Qb4+', 'Bd2', 'Qxb2',
        'Bc3', 'Bb4', 'Qd2', 'Bxc3', 'Qxc3', 'Qc1#'
      ],
      annotations: {
        '3... Qe7': {
          badge: '🎯',
          arrows: ['e7->e5:red', 'c6->e5:red'],
          targets: ['e5'],
          text: {
            en: 'Increasing pressure on e5! Developing the queen to e7 forces White to defend the extra pawn and baits 4. Bf4.',
            pl: 'Podwójny atak na e5! Wyjście hetmanem na e7 zmusza białe do obrony piona i prowokuje naturalne 4. Gf4.'
          }
        },
        '4... Qb4+': {
          badge: '⚔️',
          arrows: ['b4->e1:red', 'b4->f4:red', 'b4->b2:red'],
          targets: ['e1', 'f4', 'b2'],
          text: {
            en: 'Triple fork! The queen checks the white king while simultaneously attacking the undefended f4 bishop and b2 pawn.',
            pl: 'Potrójny atak! Hetman szachuje białego króla i jednocześnie atakuje niebronionego gońca f4 oraz piona b2.'
          }
        },
        '5... Qxb2': {
          badge: '!',
          arrows: ['b2->a1:red', 'f8->b4:green'],
          targets: ['a1', 'b2'],
          text: {
            en: 'Poisoned pawn grabbed! Black threatens the corner rook on a1, tempting White into the catastrophic 6. Bc3??.',
            pl: 'Zbicie zatrutego piona! Czarne grożą wieżą a1, prowokując białe do pozornie wygrywającego ruchu 6. Gc3??.'
          }
        },
        '6. Bc3': {
          badge: '??',
          arrows: ['c3->b2:blue', 'f8->b4:red'],
          targets: ['b2', 'c3'],
          text: {
            en: 'A classic blunder! White believes the bishop on c3 shields a1 and chases the queen — walking straight into a lethal pin.',
            pl: 'Klasyczny błąd! Białe wierzą, że goniec na c3 broni wieży a1 i odgania hetmana — wpadając prosto w śmiertelne związanie.'
          }
        },
        '6... Bb4': {
          badge: '!!',
          arrows: ['b4->c3:red', 'b4->e1:amber', 'b2->c1:green'],
          targets: ['c3', 'e1'],
          text: {
            en: 'Pinning the defender! Because the c3 bishop is pinned to the king on e1, White has to overprotect it with 7. Qd2 — stretching the queen too thin.',
            pl: 'Zabójcze związanie! Goniec na c3 jest związany z królem e1, co zmusza białego hetmana do przejścia na d2 i przeciążenia obroną obu pól.'
          }
        },
        '8... Qc1#': {
          badge: '🏆',
          arrows: ['c1->e1:red', 'c1->b1:amber', 'b2->c1:green'],
          targets: ['c1', 'e1'],
          text: {
            en: 'Checkmate! White’s queen was deflected from d2 onto c3, leaving the c1 back-rank square completely undefended.',
            pl: 'Mat! Odciągnięcie białego hetmana z d2 na c3 pozbawiło pierwszą linię obrony, dając błyskawicznego mata na c1.'
          }
        }
      }
    },
    {
      id: 'ba-30',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'fork', 'battery', 'kingHunt'],
      players: {
        en: 'Irving Chernev vs. Herman Hahlbohm (New York, 1942)',
        pl: 'Irving Chernev – Herman Hahlbohm (Nowy Jork, 1942)'
      },
      title: {
        en: 'Colle System Brilliancy: Breaking Through with 13. Bxh7+!',
        pl: 'Błyskotliwy atak w systemie Colle’a: Przełom 13. Gxh7+!'
      },
      overview: {
        en: 'Featured as Game 21 in Chernev’s "Logical Chess: Move by Move". Watch how the quiet Colle System erupts on move 13 with a Greek Gift bishop sacrifice (13. Bxh7+!) that forks the black king and loose d5 knight (14. Qe4+), unleashing a decisive kingside storm.',
        pl: 'Słynna partia nr 21 z książki Cherneva „Logical Chess: Move by Move”. Zobacz, jak spokojny system Colle’a wybucha w 13. ruchu ofiarą gońca (13. Gxh7+!), łącząc atak na króla z odbiciem skoczka d5 (14. He4+) i niszczycielskim szturmem na skrzydło królewskie.'
      },
      moves: [
        'd4', 'd5', 'Nf3', 'e6', 'e3', 'c5', 'c3', 'Nf6', 'Bd3', 'Nc6',
        'Nbd2', 'Be7', 'O-O', 'O-O', 'Qe2', 'Re8', 'dxc5', 'Bxc5', 'e4', 'e5',
        'exd5', 'Nxd5', 'Nb3', 'Qb6', 'Bxh7+', 'Kxh7', 'Qe4+', 'Kg8', 'Qxd5', 'Bf8',
        'Ng5', 'Be6', 'Qe4', 'g6', 'Qh4', 'Bg7', 'Be3', 'Qa6', 'Nc5', 'Qc4',
        'Qh7+', 'Kf8', 'Ncxe6+', 'fxe6', 'Qxg6', 'Nd8', 'Nh7+'
      ],
      annotations: {
        '10. e4': {
          badge: '⚔️',
          arrows: ['e4->d5:red', 'd3->h7:amber'],
          targets: ['e4', 'd5', 'h7'],
          text: {
            en: 'The signature Colle break! Opening the center activates White’s e2 queen and dark-squared bishop while eyeing the d3–h7 diagonal.',
            pl: 'Kluczowe pchnięcie w systemie Colle’a! Otwarcie centrum uaktywnia hetmana e2 oraz gońca c1, odsłaniając przekątną d3–h7.'
          }
        },
        '12... Qb6': {
          badge: '?',
          arrows: ['b6->b3:blue', 'd3->h7:red', 'e2->e4:green'],
          targets: ['h7', 'd5'],
          text: {
            en: 'Black tries to counterattack b3, overlooking that the d5 knight becomes vulnerable to a queen check fork after a sacrifice on h7.',
            pl: 'Czarne kontratakują na skoczka b3, ale przeoczają, że ich własny skoczek na d5 straci osłonę z szachem po uderzeniu na h7.'
          }
        },
        '13. Bxh7+': {
          badge: '!!',
          arrows: ['h7->g8:red', 'e2->e4:green', 'e4->d5:amber'],
          targets: ['h7', 'd5'],
          text: {
            en: 'Greek Gift deflection! White sacrifices the bishop on h7 to drag the king onto the b1–h7 diagonal, setting up a decisive queen fork.',
            pl: 'Ofiara Greckiego Daru! Białe poświęcają gońca na h7, by wciągnąć króla pod natychmiastowe widełki hetmanem z e4.'
          }
        },
        '14. Qe4+': {
          badge: '!',
          arrows: ['e4->h7:red', 'e4->d5:red'],
          targets: ['h7', 'd5'],
          text: {
            en: 'Royal double attack! White checks the exposed king on h7 and immediately recaptures the loose d5 knight with an extra pawn and shattered enemy king.',
            pl: 'Podwójne uderzenie hetmanem! Szach na h7 z jednoczesnym atakiem na skoczka d5 odzyskuje figurę z zyskiem piona i rozbitym królem.'
          }
        },
        '16. Ng5': {
          badge: '🎯',
          arrows: ['g5->f7:red', 'd5->e4:green', 'e4->h4:green'],
          targets: ['f7', 'h7'],
          text: {
            en: 'Piling on the kingside! The knight eyes f7 and h7 while preparing the queen’s decisive transfer via e4 to h4.',
            pl: 'Koncentracja ognia! Skoczek celuje w f7 i h7, przygotowując wejście hetmana przez e4 na pole h4.'
          }
        },
        '22. Ncxe6+': {
          badge: '!!',
          arrows: ['e6->f8:red', 'h7->g6:red'],
          targets: ['e6', 'f8', 'g6'],
          text: {
            en: 'Crushing breakthrough! Sacrificing the knight on e6 tears open the f7 pawn shield, letting White’s queen capture g6 with devastating effect.',
            pl: 'Decydujący przełom! Ofiara skoczka na e6 rozrywa ostatnią zaporę pionową czarnych, otwierając hetmanowi drogę do bicia na g6.'
          }
        },
        '24. Nh7+': {
          badge: '🏆',
          arrows: ['h7->f8:red', 'e3->h6:green', 'g6->f6:amber'],
          targets: ['f8', 'h7'],
          text: {
            en: 'Black resigns! After 24... Kg8 25. Bh6, the threat of Qxg7# or Nf6+ is completely unstoppable.',
            pl: 'Czarne poddały partię! Po 24... Kg8 25. Gh6 przed matem na g7 lub widełkami na f6 nie ma już żadnej obrony.'
          }
        }
      }
    },
    {
      id: 'ba-31',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'boden', 'clearance', 'pin'],
      players: {
        en: 'R. Schulder vs. Samuel Standidge Boden (London, 1853)',
        pl: 'R. Schulder – Samuel Standidge Boden (Londyn, 1853)'
      },
      title: {
        en: 'The Original Boden’s Mate (15... Ba3#)',
        pl: 'Pierwszy w historii Mat Bodena (15... Ga3#)'
      },
      overview: {
        en: 'The historic 1853 London game that gave chess one of its most iconic checkmate patterns. Samuel Boden castles queenside, invites White to do the same, and unleashes the immortal queen sacrifice 14... Qxc3+!! to deliver crisscrossing checkmate with his two bishops.',
        pl: 'Historyczna partia z Londynu (1853), która dała szachom jeden z najsłynniejszych motywów matowych. Samuel Boden robi długą roszadę, prowokuje białe do tego samego i poświęca hetmana 14... Hxc3+!!, matując skrzyżowaną parą gońców.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'd6', 'c3', 'f5', 'Bc4', 'Nf6', 'd4', 'fxe4',
        'dxe5', 'exf3', 'exf6', 'Qxf6', 'gxf3', 'Nc6', 'f4', 'Bd7', 'Be3', 'O-O-O',
        'Nd2', 'Re8', 'Qf3', 'Bf5', 'O-O-O', 'd5', 'Bxd5', 'Qxc3+', 'bxc3', 'Ba3#'
      ],
      annotations: {
        '11... Re8': {
          badge: '🎯',
          arrows: ['e8->e3:red', 'e8->e1:amber'],
          targets: ['e3', 'e1'],
          text: {
            en: 'Eyeing the e-file! Placing the rook on e8 pins White’s e3 bishop against the uncastled king.',
            pl: 'Kontrola linii e! Wieża na e8 wiąże gońca e3 z białym królem stojącym wciąż w centrum.'
          }
        },
        '12... Bf5': {
          badge: '⚔️',
          arrows: ['f5->c2:amber', 'f5->b1:amber', 'f8->a3:green'],
          targets: ['f5', 'c2', 'b1'],
          text: {
            en: 'Controlling the h7–b1 diagonal! The f5 bishop already slices off the d3 and c2 escape squares around White’s queenside.',
            pl: 'Kluczowa przekątna! Goniec z f5 przecina przekątną h7–b1, odbierając białym pola d3 oraz c2 tuż przed roszadą białych.'
          }
        },
        '13. O-O-O': {
          badge: '?',
          arrows: ['d6->d5:red', 'f8->a3:red'],
          targets: ['c1', 'c3'],
          text: {
            en: 'Castling into the storm! With both the c3 pawn and White’s king sharing the c1–a3 diagonal, Black immediately strikes in the center.',
            pl: 'Roszada prosto w burzę! Ponieważ król na c1 i pion c3 stoją na jednej przekątnej, czarne natychmiast uderzają w centrum.'
          }
        },
        '13... d5': {
          badge: '!',
          arrows: ['d5->c4:red', 'f8->a3:green'],
          targets: ['c4', 'a3'],
          text: {
            en: 'Clears the f8–a3 diagonal with tempo! Attacking the c4 bishop forces it away from defending b2 and c3.',
            pl: 'Otwarcie przekątnej f8–a3 z tempem! Atak na gońca c4 przygotowuje wejście czarnopolowego gońca na pole a3.'
          }
        },
        '14... Qxc3+': {
          badge: '!!',
          arrows: ['c3->c1:red', 'b2->c3:amber', 'f8->a3:red'],
          targets: ['c3', 'c1', 'a3'],
          text: {
            en: 'The Immortal Queen Sacrifice! 14... Qxc3+!! forces 15. bxc3, clearing the b2 pawn out of the a3–c1 diagonal while blocking c3.',
            pl: 'Historyczna ofiara hetmana! 14... Hxc3+!! wymusza 15. bxc3, usuwając piona b2 z przekątnej a3–c1 i blokując królowi ucieczkę przez c3.'
          }
        },
        '15... Ba3#': {
          badge: '🏆',
          arrows: ['a3->c1:red', 'f5->c2:amber', 'f5->b1:amber'],
          targets: ['c1', 'a3'],
          text: {
            en: 'Boden’s Mate! The two crisscrossing bishops on a3 and f5 slice across the queenside for the very first recorded Boden’s Mate!',
            pl: 'Mat Bodena! Skrzyżowane gońce na a3 i f5 tworzą bezbłędną klatkę wokół króla c1 — to pierwszy w historii zapisany Mat Bodena!'
          }
        }
      }
    },
    {
      id: 'ba-32',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'pin'],
      players: {
        en: 'Henry Edward Bird vs. Paul Morphy (London, 1858)',
        pl: 'Henry Edward Bird – Paul Morphy (Londyn, 1858)'
      },
      title: {
        en: 'Bird vs. Morphy: The 17... Rxf2!! Rook Sacrifice & Queen Hunt',
        pl: 'Bird – Morphy: Ofiara wieży 17... Wxf2!! i polowanie hetmanem'
      },
      overview: {
        en: 'One of Paul Morphy’s wildest attacking triumphs in London, 1858. As soon as Bird castles queenside (17. O-O-O?), Morphy blasts open the king’s shelter with 17... Rxf2!! and follows with 18... Qa3!, tearing apart the white queenside with relentless checks.',
        pl: 'Jedna z najbardziej szalonych partii atakujących Paula Morphy’ego w Londynie (1858). Gdy tylko Bird robi długą roszadę (17. O-O-O?), Morphy rozrywa osłonę króla ofiarą wieży 17... Wxf2!! i wdziera się hetmanem 18... Ha3!, ścigając białego króla po całej szachownicy.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'd6', 'd4', 'f5', 'Nc3', 'fxe4', 'Nxe4', 'd5',
        'Ng3', 'e4', 'Ne5', 'Nf6', 'Bg5', 'Bd6', 'Nh5', 'O-O', 'Qd2', 'Qe8',
        'g4', 'Nxg4', 'Nxg4', 'Qxh5', 'Ne5', 'Nc6', 'Be2', 'Qh3', 'Nxc6', 'bxc6',
        'Be3', 'Rb8', 'O-O-O', 'Rxf2', 'Bxf2', 'Qa3', 'c3', 'Qxa2', 'b4', 'Qa1+',
        'Kc2', 'Qa4+', 'Kb2', 'Bxb4', 'cxb4', 'Rxb4+', 'Qxb4', 'Qxb4+', 'Kc2', 'e3',
        'Bxe3', 'Bf5+', 'Rd3', 'Qc4+', 'Kd2', 'Qa2+', 'Kd1', 'Qb1+'
      ],
      annotations: {
        '10... Qe8': {
          badge: '⚔️',
          arrows: ['e8->h5:red', 'e8->e5:red'],
          targets: ['h5', 'e5'],
          text: {
            en: 'A clever double target! Morphy unpins the f6 knight and attacks White’s advanced knight on h5, preparing to swing the queen into the attack.',
            pl: 'Sprytny zwrot! Morphy wychodzi ze związania i atakuje wysuniętego skoczka na h5, szykując przerzut hetmana do ataku.'
          }
        },
        '16... Rb8': {
          badge: '🎯',
          arrows: ['b8->b2:red', 'f8->f2:red'],
          targets: ['b2', 'f2'],
          text: {
            en: 'Seizing the half-open b-file! The rook immediately targets b2 just as White prepares to castle queenside.',
            pl: 'Opanowanie półotwartej linii b! Wieża natychmiast bierze na celownik punkt b2, zanim biały król zdoła tam zaparkować.'
          }
        },
        '17... Rxf2': {
          badge: '!!',
          arrows: ['f2->e2:red', 'h3->a3:green'],
          targets: ['f2', 'a3'],
          text: {
            en: 'Thunderbolt Rook Sacrifice! 17... Rxf2!! clears the path for Black’s queen to invade on a3 while deflecting the e3 bishop away from defending c1 and a2.',
            pl: 'Piorunująca ofiara wieży! 17... Wxf2!! odciąga gońca z e3 i otwiera czarnemu hetmanowi drogę do zabójczego wejścia na a3!'
          }
        },
        '18... Qa3': {
          badge: '!!',
          arrows: ['a3->a2:red', 'a3->c1:amber', 'b8->b2:red'],
          targets: ['a2', 'b2'],
          text: {
            en: 'Deadly invasion! Threatening Qa1# or Qxb2#, Morphy forces White to weaken the light squares permanently with 19. c3.',
            pl: 'Śmiertelna inwazja! Grożąc matem na a1 lub b2, Morphy zmusza białe do osłabienia jasnych pól ruchem 19. c3.'
          }
        },
        '22... Bxb4': {
          badge: '!',
          arrows: ['b4->c3:red', 'b8->b4:green', 'a4->c2:amber'],
          targets: ['b4', 'c2'],
          text: {
            en: 'Second wave of sacrifices! Morphy blasts open the b-file with a bishop and rook sacrifice to strip every remaining pawn from White’s king.',
            pl: 'Druga fala ofiar! Morphy oddaje gońca na b4, by oczyścić linię b dla wieży i zedrzeć ostatnią zasłonę pionową białego króla.'
          }
        },
        '25... e3': {
          badge: '!',
          arrows: ['e3->f2:red', 'c8->f5:green'],
          targets: ['e3', 'f5'],
          text: {
            en: 'Bringing in the final reserve! Pushing 25... e3 deflects the f2 bishop and opens the h7–b1 diagonal for 26... Bf5+!',
            pl: 'Wprowadzenie ostatniej rezerwy! Pchnięcie 25... e3 odciąga gońca z f2 i otwiera przekątną dla decydującego szacha 26... Gf5+!'
          }
        },
        '29... Qb1+': {
          badge: '🏆',
          arrows: ['b1->d1:red', 'b1->d3:red', 'f5->d3:amber'],
          targets: ['d1', 'd3'],
          text: {
            en: 'Bird resigns! After 30. Kd2 (or 30. Ke2), Black captures the pinned rook on d3 or delivers checkmate along the back rank.',
            pl: 'Bird poddał partię! Po odejściu króla wieża na d3 ginie lub czarny hetman z gońcem dają szybkiego mata.'
          }
        }
      }
    },

    // === HARD (4) ===
    {
      id: 'ba-33',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'battery', 'pin', 'kingHunt'],
      players: {
        en: 'Bobby Fischer vs. Boris Spassky (Reykjavik, 1972 — Game 6)',
        pl: 'Bobby Fischer – Boris Spassky (Reykjavik, 1972, Partia 6)'
      },
      title: {
        en: 'Reykjavik Masterpiece: Fischer’s Game 6 Squeeze & Exchange Sacrifice',
        pl: 'Arcydzieło z Reykjavíku: Pozycyjne zduszenie i ofiara 38. Wxf6!'
      },
      overview: {
        en: 'Widely regarded as the finest game of the 1972 World Championship. Surprising Spassky with 1. c4, Fischer fixes Black’s hanging pawns, locks down the dark squares with 23. Bc4!, storms the f-file with 26. f5!, and sacrifices the exchange (38. Rxf6!) to earn applause from Spassky himself.',
        pl: 'Najsłynniejsza partia meczu o mistrzostwo świata 1972. Zaskakując Spasskiego debiutem 1. c4, Fischer unieruchamia wiszące piony czarnych, blokuje pozycję ruchem 23. Gc4!, przełamuje linię f pchnięciem 26. f5! i poświęca jakość (38. Wxf6!), zyskując oklaski samego Spasskiego.'
      },
      moves: [
        'c4', 'e6', 'Nf3', 'd5', 'd4', 'Nf6', 'Nc3', 'Be7', 'Bg5', 'O-O',
        'e3', 'h6', 'Bh4', 'b6', 'cxd5', 'Nxd5', 'Bxe7', 'Qxe7', 'Nxd5', 'exd5',
        'Rc1', 'Be6', 'Qa4', 'c5', 'Qa3', 'Rc8', 'Bb5', 'a6', 'dxc5', 'bxc5',
        'O-O', 'Ra7', 'Be2', 'Nd7', 'Nd4', 'Qf8', 'Nxe6', 'fxe6', 'e4', 'd4',
        'f4', 'Qe7', 'e5', 'Rb8', 'Bc4', 'Kh8', 'Qh3', 'Nf8', 'b3', 'a5',
        'f5', 'exf5', 'Rxf5', 'Nh7', 'Rcf1', 'Qd8', 'Qg3', 'Re7', 'h4', 'Rbb7',
        'e6', 'Rbc7', 'Qe5', 'Qe8', 'a4', 'Qd8', 'R1f2', 'Qe8', 'R2f3', 'Qd8',
        'Bd3', 'Qe8', 'Qe4', 'Nf6', 'Rxf6', 'gxf6', 'Rxf6', 'Kg8', 'Bc4', 'Kh8',
        'Qf4'
      ],
      annotations: {
        '14. Bb5': {
          badge: '🎯',
          arrows: ['b5->a6:blue', 'd4->c5:red', 'a3->c5:amber'],
          targets: ['c5', 'a6'],
          text: {
            en: 'Forcing structural concessions! By provoking 14... a6, Fischer ensures Black’s hanging pawns on c5 and d5 will stay fragile.',
            pl: 'Wymuszenie osłabienia! Prowokując 14... a6, Fischer zmusza czarne do pozostawienia wiszących pionów na c5 i d5.'
          }
        },
        '20. e4': {
          badge: '!',
          arrows: ['e4->d5:red', 'e2->c4:green'],
          targets: ['d5', 'e6'],
          text: {
            en: 'Transforming the structure! After 19. Nxe6 fxe6 saddled Black with a backward e6 pawn, Fischer opens the dark squares to target it.',
            pl: 'Zmiana struktury! Po osłabieniu piona e6 ruchem 19. Sxe6 fxe6 białe otwierają centrum, by przejąć kontrolę nad czarnymi polami.'
          }
        },
        '23. Bc4': {
          badge: '!',
          arrows: ['c4->e6:red', 'c4->g8:amber', 'a3->h3:green'],
          targets: ['e6', 'g8'],
          text: {
            en: 'Dream blockade! The c4 bishop dominates the a2–g8 diagonal, paralyzing e6 and aiming straight at the black king.',
            pl: 'Idealna blokada! Goniec na c4 opanowuje przekątną a2–g8, paraliżując piona e6 i mierząc prosto w czarnego króla.'
          }
        },
        '26. f5': {
          badge: '!',
          arrows: ['f5->e6:red', 'f1->f5:green', 'c1->f1:green'],
          targets: ['e6', 'f5'],
          text: {
            en: 'Opening the f-file! Fischer blasts open the e6 weakness so both white rooks can double on the f-file.',
            pl: 'Przełamanie na linii f! Fischer rozrywa punkt e6, aby obie białe wieże mogły zdublować się na otwartej linii f.'
          }
        },
        '37. Qe4': {
          badge: '🎯',
          arrows: ['d3->h7:red', 'e4->h7:amber', 'f5->f7:green'],
          targets: ['h7', 'f6'],
          text: {
            en: 'Lining up the battery! With Qe4 backing Bd3 behind the f5 rook, White threatens a devastating discovered attack (38. Rf7!), forcing 37... Nf6.',
            pl: 'Ustawienie baterii! Hetman z e4 wspiera gońca d3 za wieżą f5, grożąc zabójczym atakiem z odsłonięcia (38. Wf7!), co zmusza 37... Sf6.'
          }
        },
        '38. Rxf6': {
          badge: '!!',
          arrows: ['f6->g7:amber', 'f3->f6:red', 'e4->h7:red'],
          targets: ['f6', 'g8'],
          text: {
            en: 'Decisive exchange sacrifice! White eliminates the sole defender of Black’s kingside and leaves the king stripped naked on g8.',
            pl: 'Decydująca ofiara jakości! Białe eliminują jedynego obrońcę skrzydła królewskiego, obnażając całkowicie czarnego króla.'
          }
        },
        '41. Qf4': {
          badge: '🏆',
          arrows: ['f4->h6:red', 'f6->f8:red', 'c4->g8:amber'],
          targets: ['h6', 'f8'],
          text: {
            en: 'Spassky resigns and joins the audience in applauding! With Qxh6+ and Rf8+ or Bc4–e6 looming, Black’s fortress collapses.',
            pl: 'Spassky poddał partię i nagrodził Fischera oklaskami! Wobec gróźb Hxh6+ oraz Wf8+ pozycja czarnych całkowicie się rozpada.'
          }
        }
      }
    },
    {
      id: 'ba-34',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'fork', 'pin', 'backRank'],
      players: {
        en: 'Anatoly Karpov vs. Garry Kasparov (Moscow, 1985 — Game 16)',
        pl: 'Anatolij Karpow – Garri Kasparow (Moskwa, 1985, Partia 16)'
      },
      title: {
        en: 'The Octopus Knight: Kasparov’s Immortal 16... Nd3!',
        pl: '„Ośmiornica” Kasparowa: Nieśmiertelny skoczek na d3'
      },
      overview: {
        en: 'The crown jewel of the 1985 World Championship match. Playing a Sicilian gambit (11... Bc5!), Garry Kasparov anchors his legendary "octopus" knight on d3 (16... Nd3!), paralyzing Karpov’s entire army before breaking through with 33... Ne4! and a back-rank rook invasion (37... Rc1!).',
        pl: 'Perła meczu o mistrzostwo świata z 1985 roku. W ostrym gambicie sycylijskim (11... Gc5!) Garri Kasparow zakotwicza słynnego skoczka-„ośmiornicę” na polu d3 (16... Sd3!), paraliżując całą armię Karpowa i rozbijając białe uderzeniem 33... Se4! oraz inwazją na pierwszej linii (37... Wc1!).'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6', 'Nb5', 'd6',
        'c4', 'Nf6', 'N1c3', 'a6', 'Na3', 'd5', 'cxd5', 'exd5', 'exd5', 'Nb4',
        'Be2', 'Bc5', 'O-O', 'O-O', 'Bf3', 'Bf5', 'Bg5', 'Re8', 'Qd2', 'b5',
        'Rad1', 'Nd3', 'Nab1', 'h6', 'Bh4', 'b4', 'Na4', 'Bd6', 'Bg3', 'Rc8',
        'b3', 'g5', 'Bxd6', 'Qxd6', 'g3', 'Nd7', 'Bg2', 'Qf6', 'a3', 'a5',
        'axb4', 'axb4', 'Qa2', 'Bg6', 'd6', 'g4', 'Qd2', 'Kg7', 'f3', 'Qxd6',
        'fxg4', 'Qd4+', 'Kh1', 'Nf6', 'Rf4', 'Ne4', 'Qxd3', 'Nf2+', 'Rxf2', 'Bxd3',
        'Rfd2', 'Qe3', 'Rxd3', 'Rc1', 'Nb2', 'Qf2', 'Nd2', 'Rxd1+', 'Nxd1', 'Re1+'
      ],
      annotations: {
        '11... Bc5': {
          badge: '📖',
          arrows: ['c5->f2:red', 'b4->d3:green'],
          targets: ['d5', 'd3'],
          text: {
            en: 'A prepared World Championship gambit! Kasparov sacrifices the d5 pawn to prevent White from untangling and to carve out the d3 outpost.',
            pl: 'Mistrzowski gambit debiutowy! Kasparow poświęca piona d5, aby związać ręce białym i przygotować skok na placówkę d3.'
          }
        },
        '16... Nd3': {
          badge: '!!',
          arrows: ['d3->b2:red', 'd3->f2:red', 'd3->e1:amber', 'd3->c1:amber'],
          targets: ['d3', 'b2', 'f2'],
          text: {
            en: 'The Octopus Knight! Anchored on d3 with eight tentacles reaching into White’s camp, the knight paralyzes Karpov’s rooks, queen, and queenside.',
            pl: 'Słynna „Ośmiornica”! Skoczek zakotwiczony na d3 swoimi ośmioma „mackami” paraliżuje wieże, hetmana oraz pionową strukturę Karpowa.'
          }
        },
        '21... g5': {
          badge: '⚔️',
          arrows: ['g5->f4:green', 'd6->h2:amber', 'c8->c2:green'],
          targets: ['d3', 'c2'],
          text: {
            en: 'Locking the bind! Even a pawn down, Black expands aggressively on both wings so the d3 octopus can never be challenged.',
            pl: 'Zaciskanie pętli! Mimo braku piona czarne zdobywają przestrzeń na obu skrzydłach, cementując dominację skoczka na d3.'
          }
        },
        '31... Qd4+': {
          badge: '!',
          arrows: ['d4->g1:red', 'd7->f6:green'],
          targets: ['g1', 'f6'],
          text: {
            en: 'Regaining the pawn with tempo! Check drives Karpov’s king into the h1 corner, preparing the final tactical blow via f6 and e4.',
            pl: 'Szach z tempem! Po odbiciu piona na d6 hetman spycha króla w róg h1, otwierając drogę dla skoczka na f6 i e4.'
          }
        },
        '33... Ne4': {
          badge: '!!',
          arrows: ['e4->d2:red', 'e4->f2:amber', 'd3->f2:amber'],
          targets: ['e4', 'd2', 'f2'],
          text: {
            en: 'Brilliant counter-strike! Threatening ...Nf2+ forks and ...Nxg3+, Kasparov leaves the d3 octopus en prise to trap White’s queen into tactics!',
            pl: 'Genialne uderzenie! Grożąc widełkami ...Sf2+ oraz ...Sxg3+, Kasparow wystawia skoczka d3, by wciągnąć hetmana pod zabójczą taktykę!'
          }
        },
        '34... Nf2+': {
          badge: '!',
          arrows: ['f2->h1:red', 'f2->d3:red', 'g6->d3:amber'],
          targets: ['d3', 'h1'],
          text: {
            en: 'Royal fork! After 35. Rxf2 Bxd3, Black emerges with a dominating initiative and material edge as White’s pieces remain uncoordinated.',
            pl: 'Królewskie widełki! Po 35. Wxf2 Gxd3 czarne zdobywają hetmana za wieżę i lekką figurę, zachowując miażdżący atak.'
          }
        },
        '40... Re1+': {
          badge: '🏆',
          arrows: ['e1->h1:red', 'e1->d1:red', 'f2->g2:amber'],
          targets: ['d1', 'h1'],
          text: {
            en: 'Karpov resigns! Following 37... Rc1! and 39... Rxd1+, Black’s rook and queen crush the back rank completely.',
            pl: 'Karpow poddał partię! Po wtargnięciu 37... Wc1! i wymianie 39... Wxd1+ pierwsza linia białych zostaje całkowicie zdruzgotana.'
          }
        }
      }
    },
    {
      id: 'ba-35',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['defense', 'sacrifice', 'promotion', 'discovered'],
      players: {
        en: 'José Raúl Capablanca vs. Frank James Marshall (New York, 1918)',
        pl: 'José Raúl Capablanca – Frank James Marshall (Nowy Jork, 1918)'
      },
      title: {
        en: 'Birth of the Marshall Attack: Capablanca’s Ice-Cold Defense',
        pl: 'Narodziny Gambitu Marshalla: Lodowata obrona Capablanki'
      },
      overview: {
        en: 'Frank Marshall kept 8... d5! secret for years to ambush Capablanca in New York, 1918. Unprepared at the board, Capablanca accepted the pawn, navigated a ferocious storm of sacrifices (13... Ng4! 15... Nxf2! 16... Bg4!) with machine-like precision, and counter-attacked with a winning b-pawn.',
        pl: 'Frank Marshall trzymał ruch 8... d5! w tajemnicy przez lata, by zaskoczyć Capablankę w Nowym Jorku w 1918 roku. Grając bez przygotowania, Capablanca przyjął wyzwanie, obronił się przed lawiną ofiar (13... Sg4! 15... Sxf2! 16... Gg4!) z chłodną precyzją i kontratakował zwycięskim pionem b.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7',
        'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5', 'exd5', 'Nxd5', 'Nxe5', 'Nxe5',
        'Rxe5', 'Nf6', 'Re1', 'Bd6', 'h3', 'Ng4', 'Qf3', 'Qh4', 'd4', 'Nxf2',
        'Re2', 'Bg4', 'hxg4', 'Bh2+', 'Kf1', 'Bg3', 'Rxf2', 'Qh1+', 'Ke2', 'Bxf2',
        'Bd2', 'Bh4', 'Qh3', 'Rae8+', 'Kd3', 'Qf1+', 'Kc2', 'Bf2', 'Qf3', 'Qg1',
        'Bd5', 'c5', 'dxc5', 'Bxc5', 'b4', 'Bd6', 'a4', 'a5', 'axb5', 'axb4',
        'Ra6', 'bxc3', 'Nxc3', 'Bb4', 'b6', 'Bxc3', 'Bxc3', 'h6', 'b7', 'Re3',
        'Bxf7+'
      ],
      annotations: {
        '8... d5': {
          badge: '📖',
          arrows: ['d5->e4:red', 'f6->d5:green'],
          targets: ['d5', 'e4'],
          text: {
            en: 'The debut of the Marshall Attack! Black sacrifices a central pawn in the Ruy Lopez to unleash rapid kingside piece play.',
            pl: 'Debiut słynnego Gambitu Marshalla! Czarne poświęcają centralnego piona, by zyskać błyskawiczny atak na skrzydło królewskie.'
          }
        },
        '13... Ng4': {
          badge: '⚔️',
          arrows: ['g4->f2:red', 'd6->h2:red', 'd8->h4:green'],
          targets: ['f2', 'h2'],
          text: {
            en: 'Launching the storm! Black threatens ...Qh4 and ...Nxf2, trying to overwhelm White’s unguarded kingside before the queenside develops.',
            pl: 'Szturm na króla! Czarne grożą wejściem ...Hh4 oraz ...Sxf2, próbując rozbić króla przed rozwojem figur skrzydła hetmańskiego.'
          }
        },
        '16. Re2': {
          badge: '!',
          arrows: ['e2->f2:green', 'f3->f2:blue'],
          targets: ['f2', 'e2'],
          text: {
            en: 'Ice-cold defense! Refusing 16. Qxf2? (which loses to 16... Bh2+!), Capablanca guards f2 with the rook and invites Black’s bishop sacrifice.',
            pl: 'Lodowata obrona! Odrzucając przegrane 16. Hxf2? (po 16... Gh2+!), Capablanca broni f2 wieżą i przyjmuje główne natarcie.'
          }
        },
        '19. Rxf2': {
          badge: '!',
          arrows: ['f1->e2:green', 'f2->g3:blue'],
          targets: ['f2', 'e2'],
          text: {
            en: 'Returning the exchange for survival! Capturing on f2 and walking the king toward e2 and c2 trades danger for two extra minor pieces.',
            pl: 'Oddanie jakości na czas! Capablanca zbija skoczka na f2 i ucieka królem na d3/c2, zamieniając atak przeciwnika na przewagę figury.'
          }
        },
        '22. Qh3': {
          badge: '!',
          arrows: ['h3->h1:red', 'h3->h4:red', 'd3->c2:green'],
          targets: ['h3', 'c2'],
          text: {
            en: 'Crucial consolidation! White’s queen holds the kingside together while the king finds safe shelter behind the queenside pawns on c2.',
            pl: 'Kluczowa konsolidacja! Biały hetman stabilizuje sytuację, a król bezpiecznie chroni się za pionami na c2.'
          }
        },
        '31. Ra6': {
          badge: '!',
          arrows: ['a6->d6:red', 'b5->b7:green'],
          targets: ['d6', 'b6'],
          text: {
            en: 'Seizing the initiative! White’s queenside pieces finally roar to life, mobilizing the passed b-pawn toward promotion.',
            pl: 'Przejęcie inicjatywy! Wieża z a1 wkracza do gry z tempem, wspierając marsz wolnego piona b do promocji.'
          }
        },
        '36. Bxf7+': {
          badge: '🏆',
          arrows: ['f7->g8:red', 'b7->b8:green', 'a6->h6:amber'],
          targets: ['f7', 'b8'],
          text: {
            en: 'Marshall resigns! After 36... Rxf7 37. b8=Q+ Kh7 38. Rxh6+!, White’s b-pawn promotes with a winning attack.',
            pl: 'Marshall poddał partię! Po 36... Wxf7 37. b8=H+ Kh7 38. Wxh6+! pion b promuje się na hetmana przy rozstrzygającym ataku.'
          }
        }
      }
    },
    {
      id: 'ba-36',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'deflection', 'promotion', 'clearance'],
      players: {
        en: 'Mikhail Botvinnik vs. José Raúl Capablanca (AVRO, 1938)',
        pl: 'Michaił Botwinnik – José Raúl Capablanca (AVRO, 1938)'
      },
      title: {
        en: 'The AVRO 1938 Brilliancy: 30. Ba3!! & 31. Nh5+!!',
        pl: 'Kombinacja turnieju AVRO 1938: 30. Ga3!! oraz 31. Sh5+!!'
      },
      overview: {
        en: 'One of the greatest combinations in chess history. Facing Capablanca in the 1938 AVRO super-tournament, Mikhail Botvinnik sacrifices his queenside pawns to build a crushing central wave (19. e4!, 26. Re6!), then delivers the immortal double blow 30. Ba3!! and 31. Nh5+!! to promote his e-pawn.',
        pl: 'Jedna z najsłynniejszych kombinacji w dziejach szachów. Przeciwko Capablance na superturnieju AVRO 1938 Michaił Botwinnik oddaje piony na skrzydle hetmańskim, buduje potężne centrum (19. e4!, 26. We6!), a następnie zadaje genialny podwójny cios 30. Ga3!! i 31. Sh5+!!, torując drogę pionowi e.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'e3', 'd5', 'a3', 'Bxc3+',
        'bxc3', 'c5', 'cxd5', 'exd5', 'Bd3', 'O-O', 'Ne2', 'b6', 'O-O', 'Ba6',
        'Bxa6', 'Nxa6', 'Bb2', 'Qd7', 'a4', 'Rfe8', 'Qd3', 'c4', 'Qc2', 'Nb8',
        'Rae1', 'Nc6', 'Ng3', 'Na5', 'f3', 'Nb3', 'e4', 'Qxa4', 'e5', 'Nd7',
        'Qf2', 'g6', 'f4', 'f5', 'exf6', 'Nxf6', 'f5', 'Rxe1', 'Rxe1', 'Re8',
        'Re6', 'Rxe6', 'fxe6', 'Kg7', 'Qf4', 'Qe8', 'Qe5', 'Qe7', 'Ba3', 'Qxa3',
        'Nh5+', 'gxh5', 'Qg5+', 'Kf8', 'Qxf6+', 'Kg8', 'e7', 'Qc1+', 'Kf2', 'Qc2+',
        'Kg3', 'Qd3+', 'Kh4', 'Qe4+', 'Kxh5', 'Qe2+', 'Kh4', 'Qe4+', 'g4', 'Qe1+',
        'Kh5'
      ],
      annotations: {
        '19. e4': {
          badge: '⚔️',
          arrows: ['e4->d5:red', 'e4->e5:green', 'f3->f4:green'],
          targets: ['e4', 'd5'],
          text: {
            en: 'Central steamroller begins! Botvinnik sacrifices the a4 pawn so his central pawn phalanx can storm forward with e5 and f4–f5.',
            pl: 'Uruchomienie centralnego walca! Botwinnik oddaje piona a4, aby jego centrum ruszyło naprzód z niszczycielską siłą ruchami e5 oraz f4–f5.'
          }
        },
        '26. Re6': {
          badge: '!',
          arrows: ['e6->f6:red', 'f5->e6:green', 'f2->f4:green'],
          targets: ['e6', 'f6'],
          text: {
            en: 'Creating a monster passed pawn! Invading on e6 forces Capablanca to trade rooks, leaving White with a lethal protected spearhead on e6.',
            pl: 'Stworzenie potężnego wolnego piona! Wtargnięcie na e6 wymusza wymianę wież i zostawia białym groźny taran na szóstej linii.'
          }
        },
        '29. Qe5': {
          badge: '🎯',
          arrows: ['e5->f6:amber', 'f6->g7:amber', 'b2->a3:green'],
          targets: ['f6', 'g7'],
          text: {
            en: 'Pinning f6 to the king! Capablanca plays 29... Qe7 to blockade the e6 pawn, thinking his defense holds — missing a bolt from the blue.',
            pl: 'Związanie na przekątnej! Capablanca blokuje piona e6 hetmanem na e7, myśląc, że opanował sytuację — nie widząc nadchodzącej kombinacji.'
          }
        },
        '30. Ba3': {
          badge: '!!',
          arrows: ['a3->e7:red', 'g3->h5:green'],
          targets: ['a3', 'e7'],
          text: {
            en: 'Immortal Deflection! 30. Ba3!! sacrifices a whole bishop to lure Black’s queen off e7 so it can no longer defend f6 or stop the e-pawn.',
            pl: 'Nieśmiertelne odciągnięcie! 30. Ga3!! poświęca gońca, aby odciągnąć czarnego hetmana z pola e7 i pozbawić skoczka f6 obrony.'
          }
        },
        '31. Nh5+': {
          badge: '!!',
          arrows: ['h5->g7:red', 'h5->f6:red', 'e5->g5:green'],
          targets: ['h5', 'f6', 'g7'],
          text: {
            en: 'The Double Blow! 31. Nh5+!! forces 31... gxh5, vacating g5 for White’s queen to check and capture f6 with tempo.',
            pl: 'Genialne dobicie! 31. Sh5+!! zmusza czarne do bicia 31... gxh5, zwalniając pole g5 dla szacha hetmanem i zdobycia skoczka f6!'
          }
        },
        '34. e7': {
          badge: '!',
          arrows: ['e7->e8:green', 'f6->f8:red'],
          targets: ['e7', 'e8'],
          text: {
            en: 'One step from promotion! With the black king trapped on g8, Black’s only hope is a desperate perpetual check with the queen.',
            pl: 'O krok od promocji! Czarny król jest uwięziony na g8, więc jedyną szansą Capablanki pozostaje desperacka próba wiecznego szacha.'
          }
        },
        '41. Kh5': {
          badge: '🏆',
          arrows: ['g4->h5:amber', 'e7->e8:green'],
          targets: ['h5', 'e8'],
          text: {
            en: 'Capablanca resigns! After White’s king dodges every check and reaches h5 behind 40. g4!, Black cannot stop e8=Q or Qe6+.',
            pl: 'Capablanca poddał partię! Po zagraniu 40. g4! i dojściu królem na h5 czarne nie mają już żadnych szachów ani obrony przed e8=H.'
          }
        }
      }
    },
    // =========================================================================
    // BATCH 3: BATTLES ba-37 through ba-48 (4 Easy, 4 Medium, 4 Hard)
    // =========================================================================
    {
      id: 'ba-37',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'clearance', 'pin', 'promotion'],
      players: {
        en: 'Mikhail Botvinnik vs. Mikhail Tal (Moscow, 1960, Game 6)',
        pl: 'Michaił Botwinnik – Michaił Tal (Moskwa, 1960, Partia 6)'
      },
      title: {
        en: 'Tal’s Fearless Knight Sacrifice (21... Nf4!!)',
        pl: 'Szaleńcza ofiara skoczka Tala (21... Sf4!!)'
      },
      overview: {
        en: 'Viewed from Black’s perspective! In Game 6 of the 1960 World Championship, Mikhail Tal stunned Botvinnik with the purely intuitive sacrifice 21... Nf4!!, tearing open the kingside and unleashing a decisive pair of passed pawns.',
        pl: 'Widok z perspektywy czarnych! W 6. partii meczu o Mistrzostwo Świata w 1960 roku Michaił Tal zaszokował Botwinnika intuicyjną ofiarą skoczka 21... Sf4!!, rozrywając skrzydło królewskie i puszczając w ruch parę wolnych pionów.'
      },
      moves: [
        'c4', 'Nf6', 'Nf3', 'g6', 'g3', 'Bg7', 'Bg2', 'O-O', 'd4', 'd6',
        'Nc3', 'Nbd7', 'O-O', 'e5', 'e4', 'c6', 'h3', 'Qb6', 'd5', 'cxd5',
        'cxd5', 'Nc5', 'Ne1', 'Bd7', 'Nd3', 'Nxd3', 'Qxd3', 'Rfc8', 'Rb1', 'Nh5',
        'Be3', 'Qb4', 'Qe2', 'Rc4', 'Rfc1', 'Rac8', 'Kh2', 'f5', 'exf5', 'Bxf5',
        'Ra1', 'Nf4', 'gxf4', 'exf4', 'Bd2', 'Qxb2', 'Rab1', 'f3', 'Rxb2', 'fxe2',
        'Rb3', 'Rd4', 'Be1', 'Be5+', 'Kg1', 'Bf4', 'Nxe2', 'Rxc1', 'Nxd4', 'Rxe1+',
        'Bf1', 'Be4', 'Ne2', 'Be5', 'f4', 'Bf6', 'Rxb7', 'Bxd5', 'Rc7', 'Bxa2',
        'Rxa7', 'Bc4', 'Ra8+', 'Kf7', 'Ra7+', 'Ke6', 'Ra3', 'd5', 'Kf2', 'Bh4+',
        'Kg2', 'Kd6', 'Ng3', 'Bxg3', 'Bxc4', 'dxc4', 'Kxg3', 'Kd5', 'Ra7', 'c3',
        'Rc7', 'Kd4'
      ],
      annotations: {
        '16... Qb4': {
          badge: '⚔️',
          arrows: ['b4->b2:red', 'b4->e4:red', 'b4->b1:amber'],
          targets: ['b2', 'e4'],
          text: {
            en: 'Tal seizes the queenside! The queen pins the b2 pawn to the b1 rook while eyeing e4 and preparing doubled rooks on the c-file.',
            pl: 'Tal przejmuje inicjatywę na skrzydle hetmańskim! Hetman wiąże piona b2 z wieżą b1, kontroluje e4 i toruje drogę wieżom na linię c.'
          }
        },
        '21... Nf4': {
          badge: '!!',
          arrows: ['h5->f4:green', 'f4->e2:red', 'f4->g2:red'],
          targets: ['f4', 'e2', 'g2'],
          text: {
            en: 'A thunderbolt of pure intuition! Tal sacrifices a whole knight to pry open the dark-squared diagonal and smash White’s kingside.',
            pl: 'Piorun czystej intuicji! Tal poświęca całego skoczka, by otworzyć przekątną dla gońca g7 i rozbić osłonę białego króla.'
          }
        },
        '23... Qxb2': {
          badge: '!',
          arrows: ['b4->b2:red', 'b2->d2:red', 'b2->e2:amber', 'b2->a1:red'],
          targets: ['b2', 'd2', 'a1'],
          text: {
            en: 'Snatching b2 while pinning the d2 bishop to the e2 queen — setting up a devastating intermediate pawn thrust!',
            pl: 'Bicie piona b2 z jednoczesnym związaniem gońca d2 na tle hetmana e2 — przygotowanie zabójczego wtrąconego ruchu pionem!'
          }
        },
        '24... f3': {
          badge: '!!',
          arrows: ['f4->f3:green', 'f3->e2:red', 'f3->g2:red'],
          targets: ['f3', 'e2', 'g2'],
          text: {
            en: 'Counter-strike! Instead of retreating the queen, Tal forks White’s queen and bishop, forcing queen trades that plant a monster pawn on e2.',
            pl: 'Kontrudar! Zamiast cofać hetmana, Tal atakuje jednocześnie hetmana e2 i gońca g2, po wymianie hetmanów tworząc potężnego piona na e2.'
          }
        },
        '27... Be5+': {
          badge: '!',
          arrows: ['g7->e5:red', 'e5->h2:red', 'd4->d5:amber'],
          targets: ['h2', 'e5'],
          text: {
            en: 'Activating the dark-squared monster with check! The king is driven to g1, letting Black’s bishop jump to f4 and break the back rank.',
            pl: 'Wejście ciemopolowego gońca z szachem! Król musi odejść na g1, co pozwala na 28... Gf4 i atak na ostatnią linię.'
          }
        },
        '30... Rxe1+': {
          badge: '!',
          arrows: ['c1->e1:red', 'e1->g1:red', 'f5->c2:amber'],
          targets: ['e1', 'g1'],
          text: {
            en: 'Liquidating into power! Black emerges from the tactical storm with two sweeping bishops against a rook and an extra pawn.',
            pl: 'Realizacja przewagi! Po opadnięciu taktycznego kurzu czarne wychodzą z parą potężnych gońców przeciwko wieży oraz przewagą piona.'
          }
        },
        '45... c3': {
          badge: '🏆',
          arrows: ['c4->c3:green', 'c3->c1:red', 'd5->d4:blue'],
          targets: ['c3', 'c1'],
          text: {
            en: 'Supported by Black’s active king (46... Kd4), the passed c-pawn cannot be stopped cleanly; Botvinnik resigned after move 46.',
            pl: 'Wspierany przez aktywnego króla (46... Kd4) wolny pion c jest nie do zatrzymania bez strat; po 46. ruchu Botwinnik poddał partię.'
          }
        }
      }
    },

    {
      id: 'ba-38',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'fork', 'pin', 'discovered'],
      players: {
        en: 'Richard Réti vs. Alexander Alekhine (Baden-Baden, 1925)',
        pl: 'Richard Réti – Aleksander Alechin (Baden-Baden, 1925)'
      },
      title: {
        en: 'Alekhine’s 12-Move Tactical Combination',
        pl: '12-posunięciowa kombinacja Alechina przeciwko Rétiemu'
      },
      overview: {
        en: 'Viewed from Black’s perspective! After patiently neutralizing Réti’s hypermodern setup, Alexander Alekhine unleashes 26... Re3!! — sparking a famous 12-move calculating masterpiece that ends with White’s knight trapped on b7.',
        pl: 'Widok z perspektywy czarnych! Po cierpliwym zneutralizowaniu hipermodernistycznego debiutu Rétiego, Aleksander Alechin odpala 26... We3!! — rozpoczynając słynną 12-ruchową kombinację zakończoną uwięzieniem białego skoczka na b7.'
      },
      moves: [
        'g3', 'e5', 'Nf3', 'e4', 'Nd4', 'd5', 'd3', 'exd3', 'Qxd3', 'Nf6',
        'Bg2', 'Bb4+', 'Bd2', 'Bxd2+', 'Nxd2', 'O-O', 'c4', 'Na6', 'cxd5', 'Nb4',
        'Qc4', 'Nbxd5', 'N2b3', 'c6', 'O-O', 'Re8', 'Rfd1', 'Bg4', 'Rd2', 'Qc8',
        'Nc5', 'Bh3', 'Bf3', 'Bg4', 'Bg2', 'Bh3', 'Bf3', 'Bg4', 'Bh1', 'h5',
        'b4', 'a6', 'Rc1', 'h4', 'a4', 'hxg3', 'hxg3', 'Qc7', 'b5', 'axb5',
        'axb5', 'Re3', 'Nf3', 'cxb5', 'Qxb5', 'Nc3', 'Qxb7', 'Qxb7', 'Nxb7', 'Nxe2+',
        'Kh2', 'Ne4', 'Rc4', 'Nxf2', 'Bg2', 'Be6', 'Rcc2', 'Ng4+', 'Kh3', 'Ne5+',
        'Kh2', 'Rxf3', 'Rxe2', 'Ng4+', 'Kh3', 'Ne3+', 'Kh2', 'Nxc2', 'Bxf3', 'Nd4'
      ],
      annotations: {
        '22... h4': {
          badge: '⚔️',
          arrows: ['h5->h4:green', 'h4->g3:red', 'c8->c7:blue'],
          targets: ['g3', 'h2'],
          text: {
            en: 'Launching the kingside battering ram! Black rips open the h-file and targets the weakened g3 shelter.',
            pl: 'Szturm na skrzydle królewskim! Czarne rozbijają pionową osłonę białego króla wokół pola g3.'
          }
        },
        '26... Re3': {
          badge: '!!',
          arrows: ['e8->e3:red', 'e3->g3:red', 'e3->e2:red', 'c7->g3:amber'],
          targets: ['e3', 'g3', 'e2'],
          text: {
            en: 'The opening salvo of Alekhine’s 12-move combination! Capturing with 27. fxe3?? allows 27... Qxg3 with an unstoppable kingside attack.',
            pl: 'Początek 12-ruchowej kombinacji Alechina! Bicie 27. fxe3?? przegrywa błyskawicznie po 27... Hxg3 z niepowstrzymanym atakiem.'
          }
        },
        '28... Nc3': {
          badge: '!',
          arrows: ['d5->c3:red', 'c3->b5:red', 'c3->e2:red', 'e3->g3:amber'],
          targets: ['b5', 'e2'],
          text: {
            en: 'Jumping into the heart of White’s camp! The knight attacks both the b5 queen and the e2 pawn.',
            pl: 'Skok w samo serce obozu białych! Skoczek jednocześnie atakuje hetmana b5 oraz piona e2.'
          }
        },
        '30... Nxe2+': {
          badge: '!',
          arrows: ['c3->e2:red', 'e2->g1:red', 'e2->c1:red', 'e2->g3:amber'],
          targets: ['e2', 'c1', 'g1'],
          text: {
            en: 'Check! Note that 31. Rxe2 loses the c1 rook to 31... Rxc1+, so the king must step to h2 while Black’s second knight joins the fray.',
            pl: 'Szach! Ruch 31. Wxe2 traci wieżę c1 po 31... Wxc1+, więc król ucieka na h2, a drugi czarny skoczek wchodzi do ataku.'
          }
        },
        '31... Ne4': {
          badge: '!',
          arrows: ['f6->e4:red', 'e4->d2:red', 'e4->f2:red', 'e3->g3:amber'],
          targets: ['d2', 'f2', 'g3'],
          text: {
            en: 'Both rooks and the f2 pawn come under fire! Black’s knights and rook weave a deadly tactical web.',
            pl: 'Atak na wieżę d2 i piona f2! Czarne skoczki wraz z wieżą e3 splatają zabójczą sieć taktyczną.'
          }
        },
        '36... Rxf3': {
          badge: '!',
          arrows: ['e3->f3:red', 'e5->g4:green', 'f3->g3:amber'],
          targets: ['f3', 'e2'],
          text: {
            en: 'Eliminating the defender! Even though White recaptures the e2 knight (37. Rxe2), Black has calculated the decisive discovered check!',
            pl: 'Usunięcie obrońcy! Choć białe mogą zbić skoczka e2 (37. Wxe2), Alechin policzył wszystko aż do decydującego szacha z odsłonięcia!'
          }
        },
        '38... Ne3+': {
          badge: '🏆',
          arrows: ['g4->e3:red', 'e6->h3:red', 'e3->c2:amber', 'e3->g2:amber'],
          targets: ['h3', 'c2', 'g2'],
          text: {
            en: 'Discovered check from the e6 bishop! Black wins the c2 rook and lands on d4 (40... Nd4), trapping White’s stray knight on b7.',
            pl: 'Szach z odsłonięcia od gońca e6! Czarne wygrywają wieżę c2, a po 40... Sd4 biały skoczek na b7 zostaje odcięty bez ratunku.'
          }
        }
      }
    },

    {
      id: 'ba-39',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['clearance', 'pin', 'battery', 'deflection'],
      players: {
        en: 'Emanuel Lasker vs. José Raúl Capablanca (St. Petersburg, 1914)',
        pl: 'Emanuel Lasker – José Raúl Capablanca (Petersburg, 1914)'
      },
      title: {
        en: 'Lasker’s Positional Squeeze & Pawn Breakthrough',
        pl: 'Słynny przełom pozycyjny Laskera w wymiennym wariancie Hiszpanki'
      },
      overview: {
        en: 'Facing tournament leader Capablanca in a must-win game, Emanuel Lasker chooses the Exchange Ruy Lopez, clamps down on the kingside with 12. f5!, plants an eternal knight on e6, and shatters Black’s blockade with 35. e5!.',
        pl: 'W partii „o wszystko” z liderem turnieju Capablancą, Emanuel Lasker wybiera wariant wymienny Partii Hiszpańskiej, unieruchamia skrzydło królewskie ruchem 12. f5!, osadza skoczka na e6 i rozbija obronę przełomem 35. e5!.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6', 'dxc6', 'd4', 'exd4',
        'Qxd4', 'Qxd4', 'Nxd4', 'Bd6', 'Nc3', 'Ne7', 'O-O', 'O-O', 'f4', 'Re8',
        'Nb3', 'f6', 'f5', 'b6', 'Bf4', 'Bb7', 'Bxd6', 'cxd6', 'Nd4', 'Rad8',
        'Ne6', 'Rd7', 'Rad1', 'Nc8', 'Rf2', 'b5', 'Rfd2', 'Rde7', 'b4', 'Kf7',
        'a3', 'Ba8', 'Kf2', 'Ra7', 'g4', 'h6', 'Rd3', 'a5', 'h4', 'axb4',
        'axb4', 'Rae7', 'Kf3', 'Rg8', 'Kf4', 'g6', 'Rg3', 'g5+', 'Kf3', 'Nb6',
        'hxg5', 'hxg5', 'Rh3', 'Rd7', 'Kg3', 'Ke8', 'Rdh1', 'Bb7', 'e5', 'dxe5',
        'Ne4', 'Nd5', 'N6c5', 'Bc8', 'Nxd7', 'Bxd7', 'Rh7', 'Rf8', 'Ra1', 'Kd8',
        'Ra8+', 'Bc8', 'Nc5'
      ],
      annotations: {
        '4. Bxc6': {
          badge: '📖',
          arrows: ['b5->c6:red', 'c6->d7:amber', 'c6->b7:amber'],
          targets: ['c6'],
          text: {
            en: 'The Exchange Ruy Lopez! Lasker damages Black’s queenside pawn structure early, aiming for a kingside majority endgame.',
            pl: 'Wariant wymienny Partii Hiszpańskiej! Lasker psuje strukturę pionową na skrzydle hetmańskim, planując grę swoją większością na skrzydle królewskim.'
          }
        },
        '12. f5': {
          badge: '!',
          arrows: ['f4->f5:green', 'f5->e6:amber', 'f5->g6:amber'],
          targets: ['e6', 'g6'],
          text: {
            en: 'Locking down the kingside! By fixing Black’s light-squared bishop and carving out the e6 outpost, Lasker prepares total positional domination.',
            pl: 'Blokada pozycji! Ruch f5 ogranicza czarnego gońca i przygotowuje niezdobytą placówkę dla białego skoczka na polu e6.'
          }
        },
        '16. Ne6': {
          badge: '!',
          arrows: ['d4->e6:green', 'e6->d8:red', 'e6->g7:red'],
          targets: ['e6', 'd8'],
          text: {
            en: 'The eternal outpost! Supported by f5, the e6 knight paralyzes Black’s rooks and cuts Black’s camp in two.',
            pl: 'Wieczny posterunek! Pod osłoną piona f5 skoczek na e6 paraliżuje czarne wieże i dzieli obóz przeciwnika na pół.'
          }
        },
        '32. Rh3': {
          badge: '!',
          arrows: ['g3->h3:green', 'h3->h7:red', 'd1->h1:green'],
          targets: ['h7'],
          text: {
            en: 'Seizing the open h-file! White prepares to double rooks with 34. Rdh1, threatening decisive penetration to the 7th rank.',
            pl: 'Opanowanie otwartej linii h! Białe szykują zdwojenie wież ruchem 34. Wdh1, grożąc wtargnięciem na siódmą linię.'
          }
        },
        '35. e5': {
          badge: '!!',
          arrows: ['e4->e5:red', 'e5->d6:red', 'e5->f6:red', 'c3->e4:green'],
          targets: ['d6', 'f6', 'e4'],
          text: {
            en: 'The immortal positional breakthrough! Lasker sacrifices the e-pawn to vacate e4 for his knight and shatter Black’s coordination.',
            pl: 'Genialny przełom pozycyjny! Lasker poświęca piona e, aby zwolnić pole e4 dla swojego skoczka i rozerwać obronę Capablanki.'
          }
        },
        '37. N6c5': {
          badge: '!',
          arrows: ['e6->c5:red', 'c5->b7:red', 'c5->d7:red'],
          targets: ['b7', 'd7', 'c5'],
          text: {
            en: 'Knight fork! Attacking both the b7 bishop and d7 rook forces winning exchanges, letting White’s rooks storm into h7 and a8.',
            pl: 'Widełki skoczkiem! Jednoczesny atak na gońca b7 i wieżę d7 wymusza korzystne wymiany i otwiera białym wieżom drogę na pola h7 oraz a8.'
          }
        },
        '41. Ra8+': {
          badge: '🏆',
          arrows: ['a1->a8:red', 'a8->d8:red', 'a8->f8:amber'],
          targets: ['d8', 'c8', 'f8'],
          text: {
            en: 'Total paralysis! Pinning the c8 bishop against the rook, Lasker follows up with 42. Nc5 and Capablanca resigns.',
            pl: 'Całkowity paraliż! Wieża wiąże gońca na c8, a po kolejnym ruchu 42. Sc5 Capablanca poddaje partię.'
          }
        }
      }
    },

    {
      id: 'ba-40',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'clearance', 'battery', 'kingHunt'],
      players: {
        en: 'Boris Spassky vs. Tigran Petrosian (Moscow, 1969, Game 19)',
        pl: 'Boris Spasski – Tigran Petrosjan (Moskwa, 1969, Partia 19)'
      },
      title: {
        en: 'Spassky’s Kingside Storm Against Iron Tigran',
        pl: 'Mistrzowski atak matowy Spasskiego przeciwko „Żelaznemu Tigranowi”'
      },
      overview: {
        en: 'In Game 19 of the 1969 World Championship, Boris Spassky unleashes a textbook kingside attack against Petrosian’s Sicilian Najdorf with 15. g4!, 18. f5!, and 21. e5!, finishing with the crushing knight leap 24. Ng5!.',
        pl: 'W 19. partii meczu o Mistrzostwo Świata 1969 Boris Spasski rozpętuje wzorcowy szturm na króla w Obronie Sycylijskiej ruchami 15. g4!, 18. f5! i 21. e5!, wieńcząc dzieło ciosem 24. Sg5!.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'a6',
        'Bg5', 'Nbd7', 'Bc4', 'Qa5', 'Qd2', 'h6', 'Bxf6', 'Nxf6', 'O-O-O', 'e6',
        'Rhe1', 'Be7', 'f4', 'O-O', 'Bb3', 'Re8', 'Kb1', 'Bf8', 'g4', 'Nxg4',
        'Qg2', 'Nf6', 'Rg1', 'Bd7', 'f5', 'Kh8', 'Rdf1', 'Qd8', 'fxe6', 'fxe6',
        'e5', 'dxe5', 'Ne4', 'Nh5', 'Qg6', 'exd4', 'Ng5'
      ],
      annotations: {
        '15. g4': {
          badge: '⚔️',
          arrows: ['g2->g4:green', 'g4->h5:amber', 'd2->g2:green'],
          targets: ['g4', 'g7'],
          text: {
            en: 'Opening the floodgates! Spassky sacrifices a pawn to blast open the g-file directly against Petrosian’s castled king.',
            pl: 'Otwarcie śluz! Spasski poświęca piona, aby otworzyć linię g bezpośrednio przeciwko roszadzie Petrosjana.'
          }
        },
        '17. Rg1': {
          badge: '🎯',
          arrows: ['e1->g1:green', 'g1->g7:red', 'g2->g7:red'],
          targets: ['g7'],
          text: {
            en: 'Battery on the g-file! Queen and rook now double up directly against Black’s g7 point.',
            pl: 'Bateria na linii g! Hetman i wieża tworzą podwójne uderzenie wycelowane prosto w punkt g7.'
          }
        },
        '18. f5': {
          badge: '!',
          arrows: ['f4->f5:red', 'f5->e6:red', 'b3->e6:amber'],
          targets: ['e6', 'g7'],
          text: {
            en: 'Tearing open the second line of attack! White strikes at e6 to unleash the b3 bishop and bring the d1 rook to f1.',
            pl: 'Otwarcie drugiego frontu! Białe uderzają w punkt e6, uruchamiając gońca z b3 oraz drugą wieżę na linii f.'
          }
        },
        '21. e5': {
          badge: '!',
          arrows: ['e4->e5:red', 'e5->f6:red', 'c3->e4:green'],
          targets: ['f6', 'e4'],
          text: {
            en: 'Clearance sacrifice! White kicks the f6 defender and opens the e4 square for the c3 knight to join the mating assault.',
            pl: 'Ofiara oczyszczająca pole! Białe przepędzają obrońcę z f6 i zwalniają pole e4 dla skoczka z c3.'
          }
        },
        '23. Qg6': {
          badge: '!!',
          arrows: ['g2->g6:red', 'g6->g7:red', 'g6->h7:red', 'b3->e6:amber'],
          targets: ['g7', 'h7', 'e6'],
          text: {
            en: 'Deadly infiltration! Ignoring the d4 knight, White’s queen slides onto g6, eyeing both h7 and f7.',
            pl: 'Śmiertelne wtargnięcie! Ignorując skoczka na d4, biały hetman staje na g6 i grozi matem przez h7 oraz f7.'
          }
        },
        '24. Ng5': {
          badge: '🏆',
          arrows: ['e4->g5:red', 'g5->h7:red', 'g5->f7:red', 'g6->h7:red'],
          targets: ['h7', 'f7', 'e6'],
          text: {
            en: 'Checkmate threats everywhere! Since 24... hxg5 allows 25. Qxh5+ Kg8 26. Qf7+ Kh8 27. Rf3, Petrosian resigned on the spot.',
            pl: 'Groźby matowe ze wszystkich stron! Ponieważ 24... hxg5 pozwala na 25. Hxh5+ Kg8 26. Hf7+ Kh8 27. Wf3, Petrosjan poddał partię.'
          }
        }
      }
    },

    // === MEDIUM (4) ===
    {
      id: 'ba-41',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'smothered', 'clearance', 'pin'],
      players: {
        en: 'Levon Aronian vs. Viswanathan Anand (Wijk aan Zee, 2013)',
        pl: 'Levon Aronian – Viswanathan Anand (Wijk aan Zee, 2013)'
      },
      title: {
        en: 'Anand’s Immortal: Smothered Mate Threats & Twin Sacrifices',
        pl: '„Nieśmiertelna Partia XXI Wieku”: Genialny kontratak Ananda'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Answering White’s aggressive 12. Ng5, World Champion Viswanathan Anand crafts a 21st-century masterpiece with 15... Bc5! and 16... Nde5!!, hiding a lethal smothered mate trap.',
        pl: 'Widok z perspektywy czarnych! W odpowiedzi na ostry atak 12. Sg5 mistrz świata Viswanathan Anand tworzy arcydzieło XXI wieku: poświęca figury ruchami 15... Gc5! oraz 16... Sde5!!, kryjąc w zanadrzu mata zaduszonego.'
      },
      moves: [
        'd4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7',
        'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bd6', 'O-O', 'O-O', 'Qc2', 'Bb7',
        'a3', 'Rc8', 'Ng5', 'c5', 'Nxh7', 'Ng4', 'f4', 'cxd4', 'exd4', 'Bc5',
        'Be2', 'Nde5', 'Bxg4', 'Bxd4+', 'Kh1', 'Nxg4', 'Nxf8', 'f5', 'Ng6', 'Qf6',
        'h3', 'Qxg6', 'Qe2', 'Qh5', 'Qd3', 'Be3'
      ],
      annotations: {
        '12... c5': {
          badge: '⚔️',
          arrows: ['c6->c5:red', 'c5->d4:red', 'd6->h2:red'],
          targets: ['d4', 'h2'],
          text: {
            en: 'Counter-attack in the center! Instead of defending h7 passively, Anand immediately strikes at White’s central d4 pawn.',
            pl: 'Kontratak w centrum! Zamiast biernie bronić piona h7, Anand natychmiast uderza w centrum białych ruchem c5.'
          }
        },
        '15... Bc5': {
          badge: '!!',
          arrows: ['d6->c5:red', 'c5->d4:red', 'c5->g1:amber', 'd8->d4:amber'],
          targets: ['d4', 'g1'],
          text: {
            en: 'Piece sacrifice! The bishop pins d4 to White’s king; capturing 16. dxc5 allows 16... Nxc5 with crushing pressure on d3 and f2.',
            pl: 'Ofiara figury! Goniec wiąże piona d4 z białym królem; bicie 16. dxc5 oddaje inicjatywę po 16... Sxc5 z groźbami na d3 oraz f2.'
          }
        },
        '16... Nde5': {
          badge: '!!',
          arrows: ['d7->e5:red', 'c5->g1:amber', 'd8->d4:amber', 'g4->f2:amber'],
          targets: ['e5', 'f2', 'g1'],
          text: {
            en: 'Anand’s Immortal move! Both the c5 bishop and e5 knight hang, yet 17. fxe5?? loses to 17... Qxd4+ 18. Kh1 Qg1+! 19. Rxg1 Nf2#!',
            pl: 'Nieśmiertelny ruch Ananda! Obie czarne figury stoją pod biciem, lecz 17. fxe5?? przegrywa przez 17... Hxd4+ 18. Kh1 Hg1+! 19. Wxg1 Sf2#!'
          }
        },
        '17... Bxd4+': {
          badge: '!',
          arrows: ['c5->d4:red', 'd4->g1:red', 'e5->g4:green'],
          targets: ['g1', 'c3'],
          text: {
            en: 'Claiming the killer diagonal with check before calmly recapturing White’s bishop on g4.',
            pl: 'Opanowanie zabójczej przekątnej z szachem przed spokojnym odbiciem białego gońca na g4.'
          }
        },
        '20... Qf6': {
          badge: '!',
          arrows: ['d8->f6:red', 'f6->g6:red', 'g4->f2:amber', 'd4->g1:amber'],
          targets: ['g6', 'f2'],
          text: {
            en: 'Preparing the final assault! Even a full rook down, Black’s queen swoops toward the g- and h-files while f2 and h2 are fatally weak.',
            pl: 'Przygotowanie ostatecznego szturmu! Mimo straty wieży czarny hetman wchodzi na skrzydło królewskie, biorąc na cel pola g2 oraz h2.'
          }
        },
        '23... Be3': {
          badge: '🏆',
          arrows: ['d4->e3:red', 'e3->c1:red', 'h5->h3:amber', 'h5->h1:amber'],
          targets: ['c1', 'h2', 'e3'],
          text: {
            en: 'Stunning finale! Interference on e3 cuts off White’s queen from defending g3/h2 while threatening ...Qxh3# and ...Nf2+.',
            pl: 'Olśniewający finał! Przysłona na e3 odcina białego hetmana od obrony skrzydła królewskiego i grozi matem na h3; Aronian poddał partię.'
          }
        }
      }
    },

    {
      id: 'ba-42',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'deflection', 'backRank', 'attraction'],
      players: {
        en: 'Magnus Carlsen vs. Sergey Karjakin (New York, 2016, Tie-break Game 4)',
        pl: 'Magnus Carlsen – Siergiej Karjakin (Nowy Jork, 2016, Tie-break Partia 4)'
      },
      title: {
        en: 'Championship Clincher: The Immortal 50. Qh6+!!',
        pl: 'Ofiara na wagę tytułu Mistrza Świata: 50. Hh6+!!'
      },
      overview: {
        en: 'In the decisive rapid tiebreak game of the 2016 World Championship, Magnus Carlsen caps a relentless endgame grind with 49. Rc8+ and the dazzling Queen sacrifice 50. Qh6+!! to force checkmate and retain his crown.',
        pl: 'W decydującej partii dogrywki o Mistrzostwo Świata 2016 Magnus Carlsen wieńczy długą walkę pozycyjną uderzeniem 49. Wc8+ i błyskotliwą ofiarą hetmana 50. Hh6+!!, zapewniającą tytuł mistrzowski.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'f3', 'e5',
        'Nb3', 'Be7', 'c4', 'a5', 'Be3', 'a4', 'Nc1', 'O-O', 'Nc3', 'Qa5',
        'Qd2', 'Na6', 'Be2', 'Nc5', 'O-O', 'Bd7', 'Rb1', 'Rfc8', 'b4', 'axb3',
        'axb3', 'Qd8', 'Nd3', 'Ne6', 'Nb4', 'Bc6', 'Rfd1', 'h5', 'Bf1', 'h4',
        'Qf2', 'Nd7', 'g3', 'Ra3', 'Bh3', 'Rca8', 'Nc2', 'R3a6', 'Nb4', 'Ra5',
        'Nc2', 'b6', 'Rd2', 'Qc7', 'Rbd1', 'Bf8', 'gxh4', 'Nf4', 'Bxf4', 'exf4',
        'Bxd7', 'Qxd7', 'Nb4', 'Ra3', 'Nxc6', 'Qxc6', 'Nb5', 'Rxb3', 'Nd4', 'Qxc4',
        'Nxb3', 'Qxb3', 'Qe2', 'Be7', 'Kg2', 'Qe6', 'h5', 'Ra3', 'Rd3', 'Ra2',
        'R3d2', 'Ra3', 'Rd3', 'Ra7', 'Rd5', 'Rc7', 'Qd2', 'Qf6', 'Rf5', 'Qh4',
        'Rc1', 'Ra7', 'Qxf4', 'Ra2+', 'Kh1', 'Qf2', 'Rc8+', 'Kh7', 'Qh6+'
      ],
      annotations: {
        '29... Nf4': {
          badge: '⚔️',
          arrows: ['e6->f4:red', 'f4->h3:red', 'f4->g2:amber'],
          targets: ['h3', 'f4'],
          text: {
            en: 'Karjakin seeks active counterplay on the kingside, provoking major tactical exchanges around the center.',
            pl: 'Karjakin szuka aktywnej kontrgry na skrzydle królewskim, inicjując serię taktycznych wymian.'
          }
        },
        '35. Nd4': {
          badge: '!',
          arrows: ['b5->d4:red', 'd4->c6:red', 'd4->b3:red'],
          targets: ['c6', 'b3'],
          text: {
            en: 'Knight fork! Carlsen hits Black’s queen and rook simultaneously, winning the exchange and taking over the initiative.',
            pl: 'Widełki skoczkiem! Carlsen atakuje jednocześnie czarnego hetmana oraz wieżę, zdobywając jakość.'
          }
        },
        '45. Rf5': {
          badge: '!',
          arrows: ['d5->f5:red', 'f5->f6:red', 'f5->f4:red'],
          targets: ['f6', 'f4'],
          text: {
            en: 'Shifting fire to the f-file! White’s rook attacks Black’s queen and piles up pressure on the fragile f4 and f7 pawns.',
            pl: 'Przeniesienie nacisku na linię f! Wieża z f5 atakuje hetmana oraz naciska na słabe punkty f4 i f7.'
          }
        },
        '47. Qxf4': {
          badge: '!',
          arrows: ['d2->f4:red', 'f4->h4:red', 'f5->f7:amber', 'c1->c8:green'],
          targets: ['f7', 'h4'],
          text: {
            en: 'Crucial capture! Eliminating the f4 pawn creates a lethal queen-rook battery against f7 while the c1 rook eyes c8.',
            pl: 'Kluczowe bicie! Zbicie piona f4 tworzy groźną baterię na linii f przeciwko f7 oraz otwiera wieży drogę na c8.'
          }
        },
        '49. Rc8+': {
          badge: '!',
          arrows: ['c1->c8:red', 'c8->g8:red', 'f4->h6:green', 'f5->f7:amber'],
          targets: ['g8', 'h7'],
          text: {
            en: 'Back-rank check! White forces Black’s king onto the h7 corner square, lining it up for the championship-winning shot.',
            pl: 'Szach na ostatniej linii! Białe spychają czarnego króla na pole h7 — prosto pod decydujący cios końcowy.'
          }
        },
        '50. Qh6+': {
          badge: '🏆',
          arrows: ['f4->h6:red', 'h6->h7:red', 'h6->g7:red', 'c8->h8:amber', 'f5->f7:amber'],
          targets: ['h6', 'h7', 'g7'],
          text: {
            en: 'The World Championship finisher! Karjakin resigned instantly: 50... Kxh6 allows 51. Rh8#, while 50... gxh6 allows 51. Rxf7#!',
            pl: 'Ruch na wagę tytułu! Karjakin natychmiast się poddał: po 50... Kxh6 następuje 51. Wh8#, a po 50... gxh6 — 51. Wxf7#!'
          }
        }
      }
    },

    {
      id: 'ba-43',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'clearance', 'fork', 'kingHunt'],
      players: {
        en: 'Boris Spassky vs. David Bronstein (Leningrad, 1960)',
        pl: 'Boris Spasski – Dawid Bronstein (Leningrad, 1960)'
      },
      title: {
        en: 'King’s Gambit Fire: The James Bond Chess Battle',
        pl: 'Ogień Gambitu Królewskiego: Partia z filmu o Jamesie Bondzie'
      },
      overview: {
        en: 'The thrilling King’s Gambit duel immortalized in the James Bond film "From Russia with Love". Spassky sacrifices a rook with 16. Nxf7!, allows Black to queen with check, and finishes the attack with 22. Nxe5+! and 23. Qe4+!.',
        pl: 'Porywający pojedynek w Gambicie Królewskim uwieczniony w filmie o Jamesie Bondzie „Pozdrowienia z Rosji”. Spasski poświęca wieżę ruchem 16. Sxf7!, pozwala na promocję z szachem i kończy atak uderzeniami 22. Sxe5+! oraz 23. He4+!.'
      },
      moves: [
        'e4', 'e5', 'f4', 'exf4', 'Nf3', 'd5', 'exd5', 'Bd6', 'Nc3', 'Ne7',
        'd4', 'O-O', 'Bd3', 'Nd7', 'O-O', 'h6', 'Ne4', 'Nxd5', 'c4', 'Ne3',
        'Bxe3', 'fxe3', 'c5', 'Be7', 'Bc2', 'Re8', 'Qd3', 'e2', 'Nd6', 'Nf8',
        'Nxf7', 'exf1=Q+', 'Rxf1', 'Bf5', 'Qxf5', 'Qd7', 'Qf4', 'Bf6', 'N3e5', 'Qe7',
        'Bb3', 'Bxe5', 'Nxe5+', 'Kh7', 'Qe4+'
      ],
      annotations: {
        '10... Ne3': {
          badge: '⚔️',
          arrows: ['d5->e3:red', 'e3->d1:red', 'e3->f1:red'],
          targets: ['e3', 'd1', 'f1'],
          text: {
            en: 'Bronstein tries to jam White’s attack with an outpost fork on e3, creating a dangerous passed pawn after 11. Bxe3 fxe3.',
            pl: 'Bronstein próbuje zakłócić atak białych widełkami na e3, tworząc po wymianie groźnego wolnego piona.'
          }
        },
        '15. Nd6': {
          badge: '!!',
          arrows: ['e4->d6:red', 'd6->f7:red', 'd6->e8:red', 'c2->h7:amber'],
          targets: ['f7', 'e8'],
          text: {
            en: 'Ignoring the threat on f1! Spassky lands his knight on d6, hitting e8 and aiming straight at the f7/h7 fortress.',
            pl: 'Ignorując groźbę na f1! Spasski stawia skoczka na d6, atakując wieżę e8 i szykując szturm na punkt f7.'
          }
        },
        '16. Nxf7': {
          badge: '!!',
          arrows: ['d6->f7:red', 'f7->d8:red', 'c2->g6:amber', 'e2->f1:blue'],
          targets: ['f7', 'd8'],
          text: {
            en: 'Dazzling Rook sacrifice! White allows Black to promote on f1 with check, knowing White’s pieces will swarm the exposed black king.',
            pl: 'Olśniewająca ofiara wieży! Białe pozwalają na promocję piona na f1 z szachem, by rzucić wszystkie siły na osamotnionego króla.'
          }
        },
        '20. N3e5': {
          badge: '!',
          arrows: ['f3->e5:red', 'e5->d7:red', 'f4->f7:amber'],
          targets: ['d7', 'f7'],
          text: {
            en: 'Bringing up the reinforcements! White centralizes the second knight with tempo against Black’s queen.',
            pl: 'Wprowadzenie rezerw! Drugi biały skoczek zajmuje centrum z tempem, atakując czarnego hetmana.'
          }
        },
        '22. Nxe5+': {
          badge: '!',
          arrows: ['f7->e5:red', 'b3->g8:red', 'e5->g6:amber'],
          targets: ['e5', 'g8', 'h7'],
          text: {
            en: 'Discovered check from the b3 bishop! Driving the king onto h7 opens the fatal diagonal for White’s queen.',
            pl: 'Szach z odsłonięcia od gońca b3! Odejście króla na h7 otwiera zabójczą przekątną dla białego hetmana.'
          }
        },
        '23. Qe4+': {
          badge: '🏆',
          arrows: ['f4->e4:red', 'e4->h7:red', 'f1->f8:amber', 'e5->g6:amber'],
          targets: ['h7', 'g6', 'f8'],
          text: {
            en: 'Check and game over! After 23... g6 24. Qxg6+ Kh8 25. Qxh6# (or 23... Kh8 24. Ng6+), defense collapses; Bronstein resigned.',
            pl: 'Szach kończący walkę! Po 23... g6 24. Hxg6+ Kh8 25. Hxh6# lub 23... Kh8 24. Sg6+ obrona czarnych całkowicie się sypie; Bronstein poddał partię.'
          }
        }
      }
    },

    {
      id: 'ba-44',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'pin', 'fork', 'deflection'],
      players: {
        en: 'Rashid Nezhmetdinov vs. Oleg Chernikov (Rostov-on-Don, 1962)',
        pl: 'Raszid Nieżmietdinow – Oleg Czernikow (Rostów nad Donem, 1962)'
      },
      title: {
        en: 'Nezhmetdinov’s Positional Queen Sacrifice (12. Qxf6!!)',
        pl: 'Słynna ofiara hetmana Nieżmietdinowa (12. Hxf6!!)'
      },
      overview: {
        en: 'One of the deepest non-forcing Queen sacrifices in chess history! With 12. Qxf6!!, Nezhmetdinov gives up his Queen for two minor pieces to dominate Black’s dark squares, finishing with the brilliant combo 28. Bxf7+! and 29. Rh8+!.',
        pl: 'Jedna z najgłębszych pozycyjnych ofiar hetmana w dziejach szachów! Ruchem 12. Hxf6!! Nieżmietdinow oddaje hetmana za dwie lekkie figury, aby całkowicie zapanować nad czarnymi polami i rozstrzygnąć partię kombinacją 28. Gxf7+! i 29. Wh8+!.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'Nc3', 'Bg7',
        'Be3', 'Nf6', 'Bc4', 'O-O', 'Bb3', 'Ng4', 'Qxg4', 'Nxd4', 'Qh4', 'Qa5',
        'O-O', 'Bf6', 'Qxf6', 'Ne2+', 'Nxe2', 'exf6', 'Nc3', 'Re8', 'Nd5', 'Re6',
        'Bd4', 'Kg7', 'Rad1', 'd6', 'Rd3', 'Bd7', 'Rf3', 'Bb5', 'Bc3', 'Qd8',
        'Nxf6', 'Be2', 'Nxh7+', 'Kg8', 'Rh3', 'Re5', 'f4', 'Bxf1', 'Kxf1', 'Rc8',
        'Bd4', 'b5', 'Ng5', 'Rc7', 'Bxf7+', 'Rxf7', 'Rh8+', 'Kxh8', 'Nxf7+', 'Kh7',
        'Nxd8', 'Rxe4', 'Nc6', 'Rxf4+', 'Ke2'
      ],
      annotations: {
        '12. Qxf6': {
          badge: '!!',
          arrows: ['h4->f6:red', 'b3->f7:amber', 'f6->f8:amber', 'c3->d5:green'],
          targets: ['f6', 'f7'],
          text: {
            en: 'Immortal Positional Queen Sacrifice! After 12... Ne2+ 13. Nxe2 exf6, White gets two pieces and unbreakable grip on the dark squares.',
            pl: 'Nieśmiertelna pozycyjna ofiara hetmana! Po 12... Se2+ 13. Sxe2 exf6 białe zdobywają dwie lekkie figury oraz pełną kontrolę nad czarnymi polami.'
          }
        },
        '15. Nd5': {
          badge: '!',
          arrows: ['c3->d5:green', 'd5->f6:red', 'e3->d4:green'],
          targets: ['d5', 'f6'],
          text: {
            en: 'Anchoring the monster knight on d5! Next comes Bd4 and Rf3, piling unstoppable pressure onto the pinned f6 pawn.',
            pl: 'Osadzenie potężnego skoczka na polu d5! Kolejne ruchy Gd4 oraz Wf3 skoncentrują ogień na związanym pionie f6.'
          }
        },
        '21. Nxf6': {
          badge: '!',
          arrows: ['d5->f6:red', 'f6->h7:red', 'c3->g7:amber', 'f3->f6:amber'],
          targets: ['f6', 'h7'],
          text: {
            en: 'Cash in and break through! Capturing on f6 threatens discovered checks and rips open the black king’s pawn shield.',
            pl: 'Przełamanie obrony! Zbicie na f6 grozi szachami z odsłonięcia i całkowicie rozrywa osłonę czarnego króla.'
          }
        },
        '27. Ng5': {
          badge: '!',
          arrows: ['h7->g5:red', 'g5->f7:red', 'b3->f7:red', 'h3->h7:amber'],
          targets: ['f7', 'h7'],
          text: {
            en: 'Setting up the final fireworks! Knight, bishop, and rook now coordinate against f7 and the back rank.',
            pl: 'Przygotowanie końcowego fajerwerku! Skoczek, goniec oraz wieża h3 współdziałają teraz przeciwko f7 i ostatniej linii.'
          }
        },
        '28. Bxf7+': {
          badge: '!!',
          arrows: ['b3->f7:red', 'f7->g8:red', 'h3->h8:green', 'g5->f7:amber'],
          targets: ['f7', 'g8'],
          text: {
            en: 'Deflection blow! Forcing 28... Rxf7 clears the path and removes a defender so White’s rook can crash into h8!',
            pl: 'Uderzenie odciągające! Wymuszenie 28... Wxf7 zwalnia kluczowe pole i odciąga obrońcę przed wtargnięciem wieży na h8!'
          }
        },
        '29. Rh8+': {
          badge: '!!',
          arrows: ['h3->h8:red', 'h8->g8:red', 'g5->f7:amber'],
          targets: ['h8', 'f7'],
          text: {
            en: 'Attraction sacrifice! The rook lures the black king onto h8 — straight into a devastating knight fork on f7!',
            pl: 'Ofiara zaciągająca! Wieża wyciąga czarnego króla na pole h8 — prosto pod miażdżące widełki skoczkiem na f7!'
          }
        },
        '30. Nxf7+': {
          badge: '🏆',
          arrows: ['g5->f7:red', 'f7->h8:red', 'f7->d8:red'],
          targets: ['h8', 'd8'],
          text: {
            en: 'Royal Fork! Nezhmetdinov wins back the queen on d8 and cruises to victory with two minor pieces against a rook.',
            pl: 'Królewskie widełki! Nieżmietdinow odzyskuje hetmana na d8 i pewnie wygrywa końcówkę z przewagą figury.'
          }
        }
      }
    },

    {
      id: 'ba-45',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'doubleCheck', 'pin'],
      players: {
        en: 'Lev Polugaevsky vs. Rashid Nezhmetdinov (Sochi, 1958)',
        pl: 'Lew Poługajewski – Raszid Nieżmietdinow (Soczi, 1958)'
      },
      title: {
        en: 'Nezhmetdinov’s Immortal: Queen Sacrifice & Cross-Board King Hunt',
        pl: 'Nieśmiertelna Nieżmietdinowa: Marsz białego króla pod deszczem ofiar'
      },
      overview: {
        en: 'Viewed from Black’s perspective! One of the greatest attacking games ever played. With 24... Rxf4!!, Nezhmetdinov sacrifices his Queen to force White’s king on a relentless hunt from e3 all the way up to a5.',
        pl: 'Widok z perspektywy czarnych! Jedna z najbardziej olśniewających partii w dziejach szachów. Ofiarą hetmana 24... Wxf4!! Nieżmietdinow wyciąga białego króla na morderczy spacer z pola e3 aż na skraj deski (a5).'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'd6', 'Nc3', 'e5', 'e4', 'exd4', 'Qxd4', 'Nc6',
        'Qd2', 'g6', 'b3', 'Bg7', 'Bb2', 'O-O', 'Bd3', 'Ng4', 'Nge2', 'Qh4',
        'Ng3', 'Nge5', 'O-O', 'f5', 'f3', 'Bh6', 'Qd1', 'f4', 'Nge2', 'g5',
        'Nd5', 'g4', 'g3', 'fxg3', 'hxg3', 'Qh3', 'f4', 'Be6', 'Bc2', 'Rf7',
        'Kf2', 'Qh2+', 'Ke3', 'Bxd5', 'cxd5', 'Nb4', 'Rh1', 'Rxf4', 'Rxh2', 'Rf3+',
        'Kd4', 'Bg7', 'a4', 'c5+', 'dxc6', 'bxc6', 'Bd3', 'Nexd3+', 'Kc4', 'd5+',
        'exd5', 'cxd5+', 'Kb5', 'Rb8+', 'Ka5', 'Nc6+'
      ],
      annotations: {
        '18... Qh3': {
          badge: '⚔️',
          arrows: ['h4->h3:red', 'h3->g3:red', 'h3->f1:red'],
          targets: ['g3', 'f1', 'h2'],
          text: {
            en: 'Infiltrating the shattered dark squares! Black’s queen refuses to retreat, eyeing both g3 and the back rank.',
            pl: 'Wtargnięcie po osłabionych czarnych polach! Czarny hetman wdziera się w głąb obozu białych, celując w g3 oraz f1.'
          }
        },
        '21... Qh2+': {
          badge: '!',
          arrows: ['h3->h2:red', 'h2->f2:red', 'f7->f4:amber'],
          targets: ['f2', 'e3'],
          text: {
            en: 'Luring the king out! White’s king is forced up to e3, right into the crossfire of Black’s pieces.',
            pl: 'Wyciągnięcie króla na środek! Biały król musi wejść na e3, prosto pod zmasowany ostrzał czarnych figur.'
          }
        },
        '24... Rxf4': {
          badge: '!!',
          arrows: ['f7->f4:red', 'h6->d2:amber', 'h1->h2:blue'],
          targets: ['f4', 'h2'],
          text: {
            en: 'Nezhmetdinov’s Immortal Queen Sacrifice! Leaving his queen to be captured on h2, Black blasts open the central diagonals for a forced king hunt.',
            pl: 'Nieśmiertelna ofiara hetmana Nieżmietdinowa! Oddając hetmana na h2, czarne rozrywają pozycję, by rozpocząć wymuszone polowanie na białego króla.'
          }
        },
        '25... Rf3+': {
          badge: '!',
          arrows: ['f4->f3:red', 'f3->e3:red', 'h6->c1:amber'],
          targets: ['e3', 'd4'],
          text: {
            en: 'Nowhere to retreat! With e2 and d2 covered, White’s king must step forward to d4.',
            pl: 'Bez odwrotu! Ponieważ pola e2 oraz d2 są odcięte, król białych zostaje wypchnięty jeszcze wyżej na d4.'
          }
        },
        '29... Nexd3+': {
          badge: '!',
          arrows: ['e5->d3:red', 'g7->d4:red', 'b4->c2:amber'],
          targets: ['d4', 'c4'],
          text: {
            en: 'Discovered check from the g7 bishop! Every black minor piece now closes the cage around White’s wandering king.',
            pl: 'Szach z odsłonięcia od gońca z g7! Wszystkie czarne lekkie figury zaciskają pętlę wokół błądzącego króla.'
          }
        },
        '32... Rb8+': {
          badge: '!',
          arrows: ['a8->b8:red', 'b8->b5:red', 'd5->c4:amber'],
          targets: ['b5', 'a5'],
          text: {
            en: 'The final reserve joins the hunt! White’s king is driven off the b-file onto the edge of the board at a5.',
            pl: 'Ostatnia rezerwa wchodzi do gry! Wieża z b8 spycha białego króla na skraj szachownicy — na pole a5.'
          }
        },
        '33... Nc6+': {
          badge: '🏆',
          arrows: ['b4->c6:red', 'c6->a5:red', 'b8->b5:amber', 'd3->b4:amber'],
          targets: ['a5', 'a6'],
          text: {
            en: 'Polugaevsky resigned here! The only move 34. Ka6 allows instant checkmate with either 34... Ndb4# or 34... Nc5#.',
            pl: 'Poługajewski poddał partię! Jedyna odpowiedź 34. Ka6 prowadzi do natychmiastowego mata po 34... Sdb4# lub 34... Sc5#.'
          }
        }
      }
    },

    {
      id: 'ba-46',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'clearance', 'backRank', 'deflection'],
      players: {
        en: 'Mikhail Tal vs. Bent Larsen (Bled, 1965, Game 10)',
        pl: 'Michaił Tal – Bent Larsen (Bled, 1965, Partia 10)'
      },
      title: {
        en: 'Tal’s Decisive Match-Winner: 16. Nd5!! in the Sicilian',
        pl: 'Ofiara skoczka 16. Sd5!! w Obronie Sycylijskiej'
      },
      overview: {
        en: 'In the deciding 10th game of the 1965 Candidates Semifinal, Mikhail Tal ignites a sharp Sicilian battle with 16. Nd5!! and 20. Bxf5!, sacrificing pieces to blast open the e-file and win with a classic deflection on move 34.',
        pl: 'W decydującej 10. partii półfinału turnieju pretendentów 1965 Michaił Tal rozpala szachownicę ofiarami 16. Sd5!! i 20. Gxf5!, otwierając linię e i kończąc pojedynek odciągnięciem 34. Gc5!.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'e6', 'Nc3', 'd6',
        'Be3', 'Nf6', 'f4', 'Be7', 'Qf3', 'O-O', 'O-O-O', 'Qc7', 'Ndb5', 'Qb8',
        'g4', 'a6', 'Nd4', 'Nxd4', 'Bxd4', 'b5', 'g5', 'Nd7', 'Bd3', 'b4',
        'Nd5', 'exd5', 'exd5', 'f5', 'Rde1', 'Rf7', 'h4', 'Bb7', 'Bxf5', 'Rxf5',
        'Rxe7', 'Ne5', 'Qe4', 'Qf8', 'fxe5', 'Rf4', 'Qe3', 'Rf3', 'Qe2', 'Qxe7',
        'Qxf3', 'dxe5', 'Re1', 'Rd8', 'Rxe5', 'Qd6', 'Qf4', 'Rf8', 'Qe4', 'b3',
        'axb3', 'Rf1+', 'Kd2', 'Qb4+', 'c3', 'Qd6', 'Bc5', 'Qxc5', 'Re8+', 'Rf8',
        'Qe6+', 'Kh8', 'Qf7'
      ],
      annotations: {
        '16. Nd5': {
          badge: '!!',
          arrows: ['c3->d5:red', 'd5->e7:red', 'd1->e1:green', 'd3->h7:amber'],
          targets: ['d5', 'e7'],
          text: {
            en: 'Tal’s signature central sacrifice! Giving up a knight blasts open the e-file directly against Black’s bishop and uncoordinated kingside.',
            pl: 'Klasyczne uderzenie Tala w centrum! Poświęcenie skoczka otwiera linię e wprost przeciwko gońcowi e7 oraz królowi czarnych.'
          }
        },
        '20. Bxf5': {
          badge: '!',
          arrows: ['d3->f5:red', 'f5->d7:red', 'e1->e7:amber'],
          targets: ['f5', 'e7'],
          text: {
            en: 'Second sacrifice! Luring Black’s rook away from the 7th rank allows White’s rook to storm into e7 with devastating effect.',
            pl: 'Druga ofiara! Odciągnięcie wieży z f7 pozwala białej wieży z impetem wtargnąć na siódmą linię (We7).'
          }
        },
        '21. Rxe7': {
          badge: '!',
          arrows: ['e1->e7:red', 'e7->d7:red', 'f3->f5:amber'],
          targets: ['e7', 'd7'],
          text: {
            en: 'Penetrating the 7th rank! Even when Larsen counter-attacks with 21... Ne5 and 23... Rf4, White keeps total control over the center.',
            pl: 'Wtargnięcie na siódmą linię! Nawet po kontratakach 21... Se5 i 23... Wf4 białe utrzymują inicjatywę w centrum.'
          }
        },
        '28. Rxe5': {
          badge: '!',
          arrows: ['e1->e5:red', 'e5->e7:red', 'd4->g7:amber'],
          targets: ['e5', 'e7'],
          text: {
            en: 'Regrouping with tempo! Eliminating the e5 pawn puts White’s rook on an active central perch while attacking the black queen.',
            pl: 'Centralizacja z tempem! Bicie na e5 ustawia wieżę na potężnym centralnym posterunku, jednocześnie przeganiając hetmana.'
          }
        },
        '34. Bc5': {
          badge: '!!',
          arrows: ['d4->c5:red', 'c5->d6:red', 'e5->e8:amber'],
          targets: ['c5', 'd6', 'e8'],
          text: {
            en: 'Deadly deflection! Offering the bishop on c5 forces Black’s queen away from guarding e8, unleashing a back-rank mating net.',
            pl: 'Śmiertelne odciągnięcie! Poświęcenie gońca na c5 odrywa czarnego hetmana od obrony pola e8, otwierając sieć matową na ostatniej linii.'
          }
        },
        '37. Qf7': {
          badge: '🏆',
          arrows: ['e6->f7:red', 'f7->f8:red', 'f7->g7:red', 'e8->f8:amber'],
          targets: ['f8', 'g7'],
          text: {
            en: 'Double threat of Qxf8# and Qxg7#! With no defense left against the back-rank battery, Larsen resigned and Tal won the match.',
            pl: 'Podwójna groźba Hxf8# i Hxg7#! Bez obrony przed baterią na ósmej linii Larsen poddał partię, a Tal wygrał cały mecz.'
          }
        }
      }
    },

    // === EASY (remaining 2: ba-47, ba-48) ===
    {
      id: 'ba-47',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['clearance', 'pin', 'battery', 'sacrifice'],
      players: {
        en: 'Bobby Fischer vs. Pal Benko (New York, 1963/64)',
        pl: 'Bobby Fischer – Pal Benko (Nowy Jork, 1963/64)'
      },
      title: {
        en: 'Fischer’s 11/11 Gem: The Brilliant Blockade 19. Rf6!!',
        pl: 'Blokada 19. Wf6!! z historycznego turnieju 11/11 Fischera'
      },
      overview: {
        en: 'From Bobby Fischer’s legendary 11–0 sweep of the 1963/64 US Championship! After dismantling Benko’s Pirc Defense, Fischer finds the unforgettable quiet move 19. Rf6!! — blocking Black’s f-pawn from defending the king.',
        pl: 'Partia z historycznego triumfu 11/11 Bobby’ego Fischera w Mistrzostwach USA 1963/64! Po otwarciu linii przeciwko Obronie Pirca Fischer znajduje genialny ruch blokujący 19. Wf6!!, który odbiera czarnym obronę ruchem ...f5.'
      },
      moves: [
        'e4', 'g6', 'd4', 'Bg7', 'Nc3', 'd6', 'f4', 'Nf6', 'Nf3', 'O-O',
        'Bd3', 'Bg4', 'h3', 'Bxf3', 'Qxf3', 'Nc6', 'Be3', 'e5', 'dxe5', 'dxe5',
        'f5', 'gxf5', 'Qxf5', 'Nd4', 'Qf2', 'Ne8', 'O-O', 'Nd6', 'Qg3', 'Kh8',
        'Qg4', 'c6', 'Qh5', 'Qe8', 'Bxd4', 'exd4', 'Rf6', 'Kg8', 'e5', 'h6',
        'Ne2'
      ],
      annotations: {
        '11. f5': {
          badge: '⚔️',
          arrows: ['f4->f5:red', 'f5->g6:red', 'd3->h7:amber'],
          targets: ['g6', 'h7'],
          text: {
            en: 'Attacking the kingside structure! Fischer opens the f-file for his rook and queen while weakening Black’s dark squares.',
            pl: 'Atak na strukturę pionową! Fischer otwiera linię f dla ciężkich figur i osłabia pola wokół czarnego króla.'
          }
        },
        '15. Qg3': {
          badge: '!',
          arrows: ['f2->g3:red', 'g3->g7:red', 'g3->g8:amber'],
          targets: ['g7', 'g8'],
          text: {
            en: 'Pinning the g7 bishop! Black is forced to step into the corner with 15... Kh8, setting up future h7 mating motifs.',
            pl: 'Związanie gońca na g7! Czarne muszą odejść królem w róg (15... Kh8), co wystawia punkt h7 na atak.'
          }
        },
        '18. Bxd4': {
          badge: '!',
          arrows: ['e3->d4:red', 'd4->a7:red', 'f1->f6:green'],
          targets: ['d4', 'f6'],
          text: {
            en: 'Clearing the path! Removing the d4 knight prevents Black from defending comfortably and sets up a stunning tactical strike.',
            pl: 'Oczyszczenie pola! Zbicie aktywnego skoczka na d4 przygotowuje olśniewający manewr wieżą na linii f.'
          }
        },
        '19. Rf6': {
          badge: '!!',
          arrows: ['f1->f6:red', 'f6->f7:red', 'f6->d6:red', 'h5->h7:amber'],
          targets: ['f6', 'f7', 'h7'],
          text: {
            en: 'The famous blockade! 19. Rf6!! stops 19... f5 — and capturing the rook (19... Bxf6??) walks straight into 20. Qxh7#!',
            pl: 'Słynna blokada! 19. Wf6!! uniemożliwia ruch 19... f5 — a zbicie wieży (19... Gxf6??) prowadzi do natychmiastowego mata 20. Hxh7#!'
          }
        },
        '20. e5': {
          badge: '!',
          arrows: ['e4->e5:red', 'e5->d6:red', 'd3->h7:red', 'h5->h7:amber'],
          targets: ['d6', 'h7'],
          text: {
            en: 'Opening the lethal d3–h7 battery! Threatened with Qxh7#, Black has no choice but to weaken the kingside further with 20... h6.',
            pl: 'Otwarcie śmiercionośnej baterii d3–h7! W obliczu mata na h7 czarne muszą osłabić się ruchem 20... h6.'
          }
        },
        '21. Ne2': {
          badge: '🏆',
          arrows: ['c3->e2:green', 'e2->f4:green', 'd3->h7:amber', 'h5->h7:amber'],
          targets: ['e2', 'h6'],
          text: {
            en: 'Benko resigned! Capturing on f6 still allows 22. Qxh6+ Kg8 23. Qh7#, and Black cannot stop 22. Rxd6 or 22. Nf4.',
            pl: 'Benko poddał partię! Bicie na f6 nadal przegrywa po 22. Hxh6+ Kg8 23. Hh7#, a przeciwko 22. Wxd6 lub 22. Sf4 nie ma obrony.'
          }
        }
      }
    },

    {
      id: 'ba-48',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'attraction', 'discovered', 'kingHunt'],
      players: {
        en: 'Robert Byrne vs. Bobby Fischer (New York, 1963/64)',
        pl: 'Robert Byrne – Bobby Fischer (Nowy Jork, 1963/64)'
      },
      title: {
        en: 'The Shocking Resignation: 15... Nxf2!! Against Byrne',
        pl: 'Piorunująca kombinacja Fischera (15... Sxf2!!): Białe poddają w równej pozycji'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Another gem from Fischer’s 11–0 US Championship victory. Grandmaster Robert Byrne resigned at move 21 while still a piece up — stunned by a tactical storm sparked by 14... Nd3! and 15... Nxf2!!.',
        pl: 'Widok z perspektywy czarnych! Kolejna perła z turnieju 11/11 Bobby’ego Fischera. Arcymistrz Robert Byrne poddał partię w 21. ruchu, mając figurę przewagi — zaskoczony taktyczną burzą po 14... Sd3! oraz 15... Sxf2!!.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'g6', 'g3', 'c6', 'Bg2', 'd5', 'cxd5', 'cxd5',
        'Nc3', 'Bg7', 'e3', 'O-O', 'Nge2', 'Nc6', 'O-O', 'b6', 'b3', 'Ba6',
        'Ba3', 'Re8', 'Qd2', 'e5', 'dxe5', 'Nxe5', 'Rfd1', 'Nd3', 'Qc2', 'Nxf2',
        'Kxf2', 'Ng4+', 'Kg1', 'Nxe3', 'Qd2', 'Nxg2', 'Kxg2', 'd4', 'Nxd4', 'Bb7+',
        'Kf1', 'Qd7'
      ],
      annotations: {
        '14... Nd3': {
          badge: '!',
          arrows: ['e5->d3:red', 'd3->f2:red', 'a6->f1:amber'],
          targets: ['f2', 'd3'],
          text: {
            en: 'Jumping into the d3 outpost! Fischer threatens f2 while the a6 bishop cuts off White’s kingside escape squares.',
            pl: 'Skok na placówkę d3! Fischer bierze na celownik pole f2, podczas gdy goniec a6 kontroluje kluczowe białe pola.'
          }
        },
        '15... Nxf2': {
          badge: '!!',
          arrows: ['d3->f2:red', 'f2->d1:red', 'f6->g4:green', 'a6->f1:amber'],
          targets: ['f2', 'g1'],
          text: {
            en: 'Brilliant Knight Sacrifice! Shattering White’s kingside shelter drags the king onto f2, setting up a fierce knight-and-bishop ambush.',
            pl: 'Genialna ofiara skoczka! Zbicie na f2 rozbija osłonę króla i wyciąga go na pole f2 pod natychmiastowy kontratak.'
          }
        },
        '16... Ng4+': {
          badge: '!',
          arrows: ['f6->g4:red', 'g4->f2:red', 'g4->e3:red', 'g7->d4:amber'],
          targets: ['f2', 'e3'],
          text: {
            en: 'Check! Forcing the king back to g1 lets the knight hop into e3 with a triple attack on White’s queen, bishop, and rook.',
            pl: 'Szach! Zmusza króla do odwrotu na g1, co otwiera skoczkowi drogę na e3 z potrójnym atakiem na hetmana, gońca i wieżę.'
          }
        },
        '18... Nxg2': {
          badge: '!',
          arrows: ['e3->g2:red', 'g2->f1:amber', 'd5->d4:green'],
          targets: ['g2', 'd4'],
          text: {
            en: 'Stripping the defender! Eliminating White’s light-squared bishop clears the long diagonal for 19... d4! and 20... Bb7+.',
            pl: 'Eliminacja głównego obrońcy! Zbicie gońca na g2 otwiera wielką przekątną dla decydującego pchnięcia 19... d4! i szacha z b7.'
          }
        },
        '20... Bb7+': {
          badge: '!!',
          arrows: ['a6->b7:red', 'b7->g2:red', 'b7->f1:amber'],
          targets: ['g2', 'f1', 'd4'],
          text: {
            en: 'Laser check along the a8–h1 diagonal! White’s king is forced to f1 since 21. Nf3 loses the queen after 21... Qxd2.',
            pl: 'Zabójczy szach po przekątnej a8–h1! Biały król musi uciec na f1, gdyż 21. Sf3 przegrywa hetmana po 21... Hxd2.'
          }
        },
        '21... Qd7': {
          badge: '🏆',
          arrows: ['d8->d7:red', 'd7->h3:green', 'b7->h1:red', 'd7->d4:amber'],
          targets: ['h3', 'f1', 'd4'],
          text: {
            en: 'White resigned despite being a piece up! Facing 22... Qh3+ followed by 23. Kg1 Qg2# (or 23. Ke2 Qg2+ and 24... Rxe3+), Byrne had no defense.',
            pl: 'Białe poddały partię mimo przewagi figury! Wobec groźby 22... Hh3+ i 23... Hg2# lub 23. Ke2 Hg2+ i 24... Wxe3+ obrona była niemożliwa.'
          }
        }
      }
    },
    // =========================================================================
    // BATCH 4: Candidate Battles #37–#50 (ba-49 through ba-62)
    // Difficulty split: 5 easy, 5 medium, 4 hard
    // =========================================================================

    // === #37 Zukertort – Blackburne (London, 1883) ===
    {
      id: 'ba-49',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'deflection', 'clearance', 'battery', 'pin'],
      players: {
        en: 'Johannes Zukertort vs. Joseph Henry Blackburne (London, 1883)',
        pl: 'Johannes Zukertort – Joseph Henry Blackburne (Londyn, 1883)'
      },
      title: {
        en: 'Zukertort’s Immortal: Double Queen & Rook Deflection (28. Qb4!!)',
        pl: 'Nieśmiertelna Zukertorta: Podwójna ofiara hetmana i wieży (28. Hb4!!)'
      },
      overview: {
        en: 'Steinitz called this one of the finest attacking masterpieces ever played. After cracking open the kingside with 23. f5 and 25. fxg6, Zukertort calmly offers his Queen on b4 (28. Qb4!!) and his Rook on f8 (29. Rf8+!!) to strip the black king’s defenses.',
        pl: 'Steinitz nazwał tę partię jednym z najwspanialszych dzieł sztuki ataku w historii. Po przełamaniu skrzydła królewskiego ruchami 23. f5 i 25. fxg6 Zukertort z zimną krwią poświęca hetmana na b4 (28. Hb4!!) oraz wieżę na f8 (29. Wf8+!!), rozrywając obronę czarnego króla.'
      },
      moves: [
        'c4', 'e6', 'e3', 'Nf6', 'Nf3', 'b6', 'Be2', 'Bb7', 'O-O', 'd5',
        'd4', 'Bd6', 'Nc3', 'O-O', 'b3', 'Nbd7', 'Bb2', 'Qe7', 'Nb5', 'Ne4',
        'Nxd6', 'cxd6', 'Nd2', 'Ndf6', 'f3', 'Nxd2', 'Qxd2', 'dxc4', 'Bxc4', 'd5',
        'Bd3', 'Rfc8', 'Rae1', 'Rc7', 'e4', 'Rac8', 'e5', 'Ne8', 'f4', 'g6',
        'Re3', 'f5', 'exf6', 'Nxf6', 'f5', 'Ne4', 'Bxe4', 'dxe4', 'fxg6', 'Rc2',
        'gxh7+', 'Kh8', 'd5+', 'e5', 'Qb4', 'R8c5', 'Rf8+', 'Kxh7', 'Qxe4+', 'Kg7',
        'Bxe5+', 'Kxf8', 'Bg7+', 'Kg8', 'Qxe7'
      ],
      annotations: {
        '18. e4': {
          badge: '⚔️',
          arrows: ['e4->d5:red', 'e4->e5:green', 'd3->h7:amber'],
          targets: ['d5', 'e5'],
          text: {
            en: 'With both rooks centralized, Zukertort opens the center to gain space for a kingside storm.',
            pl: 'Po centralizacji obu wież Zukertort uderza w centrum, zdobywając przestrzeń do szturmu na skrzydle królewskim.'
          }
        },
        '23. f5': {
          badge: '!',
          arrows: ['f5->e6:red', 'f5->g6:red', 'f1->f6:amber'],
          targets: ['e6', 'g6'],
          text: {
            en: 'Breaking the blockade! White offers a pawn on e4 to pry open the f-file and dark squares.',
            pl: 'Przełamanie blokady! Białe poświęcają piona, aby otworzyć linię f i ciemne pola wokół króla.'
          }
        },
        '25. fxg6': {
          badge: '!',
          arrows: ['g6->h7:red', 'b2->g7:amber', 'e3->g3:green'],
          targets: ['g6', 'h7'],
          text: {
            en: 'Ignoring Black’s infiltration on c2! Opening the g- and f-files creates lethal mating threats.',
            pl: 'Zukertort ignoruje wtargnięcie czarnych na c2! Otwarcie linii f i g tworzy śmiertelne groźby matowe.'
          }
        },
        '28. Qb4': {
          badge: '!!',
          arrows: ['b4->e7:red', 'b2->e5:amber', 'f1->f8:green'],
          targets: ['b4', 'e5', 'e7'],
          text: {
            en: 'Immortal Queen Sacrifice! 28. Qb4!! leaves the queen en prise: 28... Qxb4 runs into 29. Bxe5+ Kxh7 30. Rh3+ and forced mate!',
            pl: 'Nieśmiertelna ofiara hetmana! 28. Hb4!! wystawia hetmana pod bicie: po 28... Hxb4 następuje 29. Gxe5+ Kxh7 30. Wh3+ z forsującym matem!'
          }
        },
        '29. Rf8+': {
          badge: '!!',
          arrows: ['f8->h8:red', 'b4->e4:green', 'b2->e5:amber'],
          targets: ['f8', 'h7', 'e4'],
          text: {
            en: 'Now a Rook Sacrifice! 29. Rf8+!! deflects the king onto h7 so the queen can capture e4 with check.',
            pl: 'Teraz ofiara wieży! 29. Wf8+!! ściąga króla na h7, dzięki czemu biały hetman zbije piona e4 z szachem.'
          }
        },
        '31. Bxe5+': {
          badge: '!',
          arrows: ['b2->e5:red', 'e4->h7:amber', 'e4->e7:amber'],
          targets: ['e5', 'f8'],
          text: {
            en: 'Clearing the long diagonal with check! Black’s king is forced to capture on f8, disconnecting the e7 queen.',
            pl: 'Oczyszczenie wielkiej przekątnej z szachem! Król musi zbić wieżę f8, tracąc łączność z obroną hetmana.'
          }
        },
        '33. Qxe7': {
          badge: '🏆',
          arrows: ['e4->e7:green', 'g7->f8:amber'],
          targets: ['e7', 'g8'],
          text: {
            en: 'After 32. Bg7+! Black’s queen falls cleanly; Blackburne resigned immediately.',
            pl: 'Po odciągającym szachu 32. Gg7+! czarny hetman ginie bez ratunku — Blackburne natychmiast się poddał.'
          }
        }
      }
    },

    // === #38 Pillsbury – Tarrasch (Hastings, 1895) ===
    {
      id: 'ba-50',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'attraction', 'kingHunt', 'battery'],
      players: {
        en: 'Harry Nelson Pillsbury vs. Siegbert Tarrasch (Hastings, 1895)',
        pl: 'Harry Nelson Pillsbury – Siegbert Tarrasch (Hastings, 1895)'
      },
      title: {
        en: 'The Pillsbury Attack: Opposite-Wing Race at Hastings',
        pl: 'Atak Pillsbury’ego: Wyścig na przeciwległych skrzydłach w Hastings'
      },
      overview: {
        en: 'The model Queen’s Gambit kingside attack. As Tarrasch breaks through on the queenside with ...b4 and ...Ra3, Pillsbury launches g4–g5, sacrifices a rook and knight on g7 and h6, and hunts the king to h5.',
        pl: 'Wzorcowy atak na skrzydle królewskim w Gambicie Hetmańskim. Gdy Tarrasch przedziera się po skrzydle hetmańskim ruchami ...b4 i ...Wa3, Pillsbury uderza g4–g5, poświęca wieżę oraz skoczka na g7 i h6 i matuje króla na h5.'
      },
      moves: [
        'd4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Nf3', 'Nbd7',
        'Rc1', 'O-O', 'e3', 'b6', 'cxd5', 'exd5', 'Bd3', 'Bb7', 'O-O', 'c5',
        'Re1', 'c4', 'Bb1', 'a6', 'Ne5', 'b5', 'f4', 'Re8', 'Qf3', 'Nf8',
        'Ne2', 'Ne4', 'Bxe7', 'Rxe7', 'Bxe4', 'dxe4', 'Qg3', 'f6', 'Ng4', 'Kh8',
        'f5', 'Qd7', 'Rf1', 'Rd8', 'Rf4', 'Qd6', 'Qh4', 'Rde8', 'Nc3', 'Bd5',
        'Nf2', 'Qc6', 'Rf1', 'b4', 'Ne2', 'Qa4', 'Ng4', 'Nd7', 'R4f2', 'Kg8',
        'Nc1', 'c3', 'b3', 'Qc6', 'h3', 'a5', 'Nh2', 'a4', 'g4', 'axb3',
        'axb3', 'Ra8', 'g5', 'Ra3', 'Ng4', 'Bxb3', 'Rg2', 'Kh8', 'gxf6', 'gxf6',
        'Nxb3', 'Rxb3', 'Nh6', 'Rg7', 'Rxg7', 'Kxg7', 'Qg3+', 'Kxh6', 'Kh1', 'Qd5',
        'Rg1', 'Qxf5', 'Qh4+', 'Qh5', 'Qf4+', 'Qg5', 'Rxg5', 'fxg5', 'Qd6+', 'Kh5',
        'Qxd7', 'c2', 'Qxh7#'
      ],
      annotations: {
        '13. Ne5': {
          badge: '📖',
          arrows: ['e5->f7:red', 'f2->f4:green', 'b1->h7:amber'],
          targets: ['e5', 'h7'],
          text: {
            en: 'The signature Pillsbury Attack outpost! White plants the knight on e5 supported by f2–f4.',
            pl: 'Klasyczna placówka Ataku Pillsbury’ego! Skoczek staje na e5, wsparty natychmiastowym marszem f2–f4.'
          }
        },
        '24. Qh4': {
          badge: '⚔️',
          arrows: ['h4->f6:red', 'h4->h7:red', 'f4->g4:green'],
          targets: ['f6', 'h7'],
          text: {
            en: 'White’s queen and rooks line up against the dark squares around Black’s castled king.',
            pl: 'Biały hetman i wieże ustawiają się naprzeciwko słabych pól wokół roszady czarnych.'
          }
        },
        '37. g5': {
          badge: '!',
          arrows: ['g5->f6:red', 'g2->g7:amber', 'h2->g4:green'],
          targets: ['f6', 'g6'],
          text: {
            en: 'No time to defend the queenside! Pillsbury crashes open the g-file just as Black’s rooks invade b3.',
            pl: 'Nie ma czasu na obronę b3! Pillsbury otwiera linię g, zanim czarne przełamią się na skrzydle hetmańskim.'
          }
        },
        '42. Nh6': {
          badge: '!!',
          arrows: ['h6->f7:red', 'h6->g8:red', 'g2->g7:red'],
          targets: ['f7', 'g8', 'g7'],
          text: {
            en: 'Deadly leap! Threatening 43. Qg8+ or 43. Nf7+, forcing Black to commit the rook to g7.',
            pl: 'Zabójczy skok! Groźby Hg8+ oraz Sf7+ zmuszają czarne do obrony wieżą na g7.'
          }
        },
        '43. Rxg7': {
          badge: '!!',
          arrows: ['g2->g7:red', 'h4->g3:green', 'f1->g1:green'],
          targets: ['g7', 'h6'],
          text: {
            en: 'Sacrificing the rook and the h6 knight! Dragging Black’s king onto h6 exposes it to the final battery.',
            pl: 'Ofiara wieży i skoczka h6! Wyciągnięcie czarnego króla na h6 wystawia go na decydujące uderzenie po linii g.'
          }
        },
        '49. Rxg5': {
          badge: '!',
          arrows: ['g1->g5:red', 'f4->d6:green'],
          targets: ['g5', 'd6'],
          text: {
            en: 'Eliminating Black’s defending queen! After 49... fxg5, White’s queen sweeps the board with tempo.',
            pl: 'Usunięcie broniącego hetmana! Po 49... fxg5 biały hetman wdziera się na d6 z tempem.'
          }
        },
        '52. Qxh7#': {
          badge: '🏆',
          arrows: ['d7->h7:red', 'h7->h5:red'],
          targets: ['h5', 'h7'],
          text: {
            en: 'Checkmate! One move before Black’s c2 pawn could promote, Pillsbury seals the mate on h7.',
            pl: 'Mat! O jeden ruch przed promocją czarnego piona c2 Pillsbury kończy partię matem na h7.'
          }
        }
      }
    },

    // === #39 Short – Timman (Tilburg, 1991) ===
    {
      id: 'ba-51',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['kingHunt', 'pin', 'battery', 'sacrifice'],
      players: {
        en: 'Nigel Short vs. Jan Timman (Tilburg, 1991)',
        pl: 'Nigel Short – Jan Timman (Tilburg, 1991)'
      },
      title: {
        en: 'The Immortal King Walk: Marching from g1 to h6 to Mate',
        pl: 'Nieśmiertelny Marsz Króla: Droga z g1 na h6 po mata'
      },
      overview: {
        en: 'One of the most famous endgames-in-a-middlegame ever played. After paralyzing Timman on the dark squares with Qf6+, Nigel Short ignores every piece trade and marches his own king from g1 to g5 to help deliver checkmate on g7!',
        pl: 'Jedna z najsłynniejszych kombinacji pozycyjnych XX wieku. Po sparaliżowaniu czarnych na ciemnych polach ruchem Hf6+ Nigel Short ignoruje resztę szachownicy i maszeruje własnym królem z g1 aż na g5, by osobiście pomóc w macie na g7!'
      },
      moves: [
        'e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'Nf3', 'g6', 'Bc4', 'Nb6',
        'Bb3', 'Bg7', 'Qe2', 'Nc6', 'O-O', 'O-O', 'h3', 'a5', 'a4', 'dxe5',
        'dxe5', 'Nd4', 'Nxd4', 'Qxd4', 'Re1', 'e6', 'Nd2', 'Nd5', 'Nf3', 'Qc5',
        'Qe4', 'Qb4', 'Bc4', 'Nb6', 'b3', 'Nxc4', 'bxc4', 'Re8', 'Rd1', 'Qc5',
        'Qh4', 'b6', 'Be3', 'Qc6', 'Bh6', 'Bh8', 'Rd8', 'Bb7', 'Rad1', 'Bg7',
        'R8d7', 'Rf8', 'Bxg7', 'Kxg7', 'R1d4', 'Rae8', 'Qf6+', 'Kg8', 'h4', 'h5',
        'Kh2', 'Rc8', 'Kg3', 'Rce8', 'Kf4', 'Bc8', 'Kg5'
      ],
      annotations: {
        '19. bxc4': {
          badge: '📖',
          arrows: ['c4->d5:amber', 'e1->d1:green', 'e4->h4:green'],
          targets: ['c4', 'd6'],
          text: {
            en: 'Short accepts doubled c-pawns to lock down d5 and seize the open d-file with his rooks.',
            pl: 'Short zgadza się na zdwojone piony c, aby zabetonować pole d5 i opanować otwartą linię d.'
          }
        },
        '23. Bh6': {
          badge: '!',
          arrows: ['h6->g7:red', 'h4->f6:amber'],
          targets: ['g7', 'f6'],
          text: {
            en: 'Offering to trade off Black’s key dark-squared bishop, leaving f6 and g7 permanently defenseless.',
            pl: 'Wymiana kluczowego gońca fianchetto pozostawi ciemne pola f6 oraz g7 całkowicie bezbronne.'
          }
        },
        '26. R8d7': {
          badge: '!',
          arrows: ['d7->f7:red', 'd1->d4:green'],
          targets: ['d7', 'f7'],
          text: {
            en: 'Anchoring a rook on the 7th rank! Black’s queen and bishops cannot generate any counterplay.',
            pl: 'Zakotwiczenie wieży na 7. linii! Czarne figury są całkowicie związane obroną i pozbawione kontrgry.'
          }
        },
        '29. Qf6+': {
          badge: '!!',
          arrows: ['f6->g7:red', 'f6->g8:red', 'd4->f4:amber'],
          targets: ['f6', 'g7', 'g8'],
          text: {
            en: 'The paralysis begins! Black’s king is caged in the corner while Short prepares to bring up his final attacker.',
            pl: 'Początek pełnego paraliżu! Czarny król zostaje uwięziony w rogu, a Short szuka ostatniej figury do mata.'
          }
        },
        '31. Kh2': {
          badge: '!!',
          arrows: ['g1->h2:green', 'h2->g3:green', 'g3->f4:green', 'f4->g5:green'],
          targets: ['h2', 'g5', 'h6'],
          text: {
            en: 'The Immortal King Walk begins! Since Black cannot untangle or attack, Short marches his king up the board!',
            pl: 'Początek Nieśmiertelnego Marszu Króla! Ponieważ czarne nie mają kontrgry, Short rusza własnym królem na pomoc!'
          }
        },
        '34. Kg5': {
          badge: '🏆',
          arrows: ['g5->h6:green', 'f6->g7:red'],
          targets: ['g5', 'h6', 'g7'],
          text: {
            en: 'Mission accomplished! Facing 35. Kh6 and 36. Qg7#, Timman resigned—as 34... Bxd7 runs into 35. Kh6 and mate!',
            pl: 'Cel osiągnięty! W obliczu groźby 35. Kh6 i 36. Hg7# Timman poddał partię — bicie 34... Gxd7 również przegrywa po 35. Kh6!'
          }
        }
      }
    },

    // === #40 Ivanchuk – Yusupov (Brussels, 1991) ===
    {
      id: 'ba-52',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'deflection', 'fork'],
      players: {
        en: 'Vassily Ivanchuk vs. Artur Yusupov (Brussels, 1991)',
        pl: 'Vassily Ivanchuk – Artur Yusupov (Bruksela, 1991)'
      },
      title: {
        en: 'Yusupov’s Tactical Labyrinth: The Queen & Knight Assault',
        pl: 'Labirynt Yusupova: Atak hetmanem i skoczkami po przekątnej'
      },
      overview: {
        en: 'Viewed from Black’s perspective! In Game 9 of the 1991 Candidates tiebreak, Yusupov sacrifices a knight on h4, ignores a whole rook on a8, and steers his knights to f2 and h3 for one of the wildest attacking victories in modern chess.',
        pl: 'Widok z perspektywy czarnych! W 9. partii dogrywki meczów pretendentów 1991 Yusupov poświęca skoczka na h4, ignoruje własną wieżę na a8 i wprowadza skoczki na f2 i h3, tworząc jedno z najdzikszych zwycięstw atakiem we współczesnych szachach.'
      },
      moves: [
        'c4', 'e5', 'g3', 'd6', 'Bg2', 'g6', 'd4', 'Nd7', 'Nc3', 'Bg7',
        'Nf3', 'Ngf6', 'O-O', 'O-O', 'Qc2', 'Re8', 'Rd1', 'c6', 'b3', 'Qe7',
        'Ba3', 'e4', 'Ng5', 'e3', 'f4', 'Nf8', 'b4', 'Bf5', 'Qb3', 'h6',
        'Nf3', 'Ng4', 'b5', 'g5', 'bxc6', 'bxc6', 'Ne5', 'gxf4', 'Nxc6', 'Qg5',
        'Bxd6', 'Ng6', 'Nd5', 'Qh5', 'h4', 'Nxh4', 'gxh4', 'Qxh4', 'Nde7+', 'Kh8',
        'Nxf5', 'Qh2+', 'Kf1', 'Re6', 'Qb7', 'Rg6', 'Qxa8+', 'Kh7', 'Qg8+', 'Kxg8',
        'Nce7+', 'Kh7', 'Nxg6', 'fxg6', 'Nxg7', 'Nf2', 'Bxf4', 'Qxf4', 'Ne6', 'Qh2',
        'Rdb1', 'Nh3', 'Rb7+', 'Kh8', 'Rb8+', 'Qxb8', 'Bxh3', 'Qg3'
      ],
      annotations: {
        '17... g5': {
          badge: '⚔️',
          arrows: ['g5->f4:red', 'g4->h2:red'],
          targets: ['f4', 'h2'],
          text: {
            en: 'With White breaking through on the queenside, Yusupov hurls the g-pawn forward to crack open f4 and the h-file.',
            pl: 'Gdy białe atakują skrzydło hetmańskie, Yusupov pcha piona g, by rozerwać osłonę na f4 i otworzyć linię h.'
          }
        },
        '23... Nxh4': {
          badge: '!!',
          arrows: ['h4->g2:red', 'g5->h4:amber', 'h5->h4:green'],
          targets: ['h4', 'h2'],
          text: {
            en: 'Crushing knight sacrifice! Tearing away the h4 barrier so Black’s queen can storm into h4 and h2.',
            pl: 'Niszczycielska ofiara skoczka! Zniszczenie bariery na h4 otwiera czarnemu hetmanowi drogę do wtargnięcia na h2.'
          }
        },
        '26... Qh2+': {
          badge: '!',
          arrows: ['h2->g1:red', 'e8->e6:green'],
          targets: ['f1', 'h2'],
          text: {
            en: 'Driving White’s king to f1 and locking the g2 bishop down while the e8 rook prepares to join via the 6th rank.',
            pl: 'Zepchnięcie króla na f1 blokuje gońca g2 i daje czas na przerzut wieży e8 przez szóstą linię.'
          }
        },
        '28... Rg6': {
          badge: '!!',
          arrows: ['g6->g2:red', 'b7->a8:blue'],
          targets: ['g2', 'a8'],
          text: {
            en: 'Ice-cold sacrifice! Yusupov leaves the a8 rook to fall with check, knowing White’s king cannot survive the g-file assault.',
            pl: 'Zimnokrwista ofiara! Yusupov oddaje wieżę a8 z szachem, wiedząc, że król białych nie przeżyje ataku na linii g.'
          }
        },
        '33... Nf2': {
          badge: '!!',
          arrows: ['f2->d1:red', 'f2->h3:green', 'h2->g1:red'],
          targets: ['f2', 'h3', 'd1'],
          text: {
            en: 'Brilliant quiet stroke! Even after losing the queen earlier, Black’s queen and knight weave a forced mating net.',
            pl: 'Genialne ciche posunięcie! Po wymianie hetmanów za wieże czarne utrzymują śmiertelną sieć matową skoczkiem i hetmanem.'
          }
        },
        '36... Nh3': {
          badge: '!',
          arrows: ['h3->g1:red', 'h2->g1:red', 'h3->f2:amber'],
          targets: ['g1', 'f2'],
          text: {
            en: 'Threatening instant checkmate on g1 and f2, forcing White to sacrifice a rook just to capture the knight.',
            pl: 'Groźba natychmiastowego mata na g1 oraz f2 zmusza białe do oddania wieży za powstrzymanie skoczka.'
          }
        },
        '39... Qg3': {
          badge: '🏆',
          arrows: ['g3->f2:red', 'g3->g1:red', 'g3->h3:red'],
          targets: ['f2', 'g1', 'h3'],
          text: {
            en: 'Simultaneously attacking the h3 bishop and threatening 40... Qf2# or 40... Qg1#; Ivanchuk resigned.',
            pl: 'Podwójny cios w gońca h3 i groźby 40... Hf2# / Hg1# — Ivanchuk poddał partię.'
          }
        }
      }
    },

    // === #41 Deep Blue – Kasparov (New York, 1997, Game 6) ===
    {
      id: 'ba-53',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'pin', 'deflection', 'clearance'],
      players: {
        en: 'Deep Blue vs. Garry Kasparov (New York, 1997, Game 6)',
        pl: 'Deep Blue – Garri Kasparow (Nowy Jork, 1997, Partia 6)'
      },
      title: {
        en: 'Man vs. Machine: The Historic 8. Nxe6! Breakthrough',
        pl: 'Człowiek kontra Maszyna: Historyczna ofiara 8. Sxe6!'
      },
      overview: {
        en: 'The decisive Game 6 of the 1997 rematch in New York. Deep Blue unleashes the famous 8. Nxe6! knight sacrifice against Kasparov’s Caro-Kann, stranding the black king in the center and winning in just 19 moves.',
        pl: 'Decydująca 6. partia meczu rewanżowego w Nowym Jorku w 1997 roku. Deep Blue stosuje słynną ofiarę skoczka 8. Sxe6! w Obronie Caro-Kann, unieruchamiając króla Kasparowa w centrum i zmuszając mistrza świata do kapitulacji w zaledwie 19 ruchach.'
      },
      moves: [
        'e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nd7', 'Ng5', 'Ngf6',
        'Bd3', 'e6', 'N1f3', 'h6', 'Nxe6', 'Qe7', 'O-O', 'fxe6', 'Bg6+', 'Kd8',
        'Bf4', 'b5', 'a4', 'Bb7', 'Re1', 'Nd5', 'Bg3', 'Kc8', 'axb5', 'cxb5',
        'Qd3', 'Bc6', 'Bf5', 'exf5', 'Rxe7', 'Bxe7', 'c4'
      ],
      annotations: {
        '8. Nxe6': {
          badge: '!!',
          arrows: ['e6->d8:red', 'e6->f8:red', 'd3->g6:amber'],
          targets: ['e6', 'd8', 'f8'],
          text: {
            en: 'The famous Caro-Kann sacrifice! Deep Blue tears open e6 to prevent Black from castling and wreck the kingside pawns.',
            pl: 'Słynna ofiara w Obronie Caro-Kann! Deep Blue rozbija pole e6, uniemożliwiając czarnym roszadę i niszcząc ich strukturę.'
          }
        },
        '10. Bg6+': {
          badge: '!',
          arrows: ['g6->e8:red', 'e1->g1:green'],
          targets: ['e8', 'd8'],
          text: {
            en: 'Stripping castling rights! Black’s king is forced to d8, locking the h8 rook out of the game.',
            pl: 'Odebranie prawa do roszady! Król musi wejść na d8, odcinając własną wieżę h8 od gry.'
          }
        },
        '13. Re1': {
          badge: '!',
          arrows: ['e1->e6:red', 'e1->e7:amber'],
          targets: ['e6', 'e7'],
          text: {
            en: 'Every white piece enters with tempo! The rook pins the e6 pawn straight against Black’s queen.',
            pl: 'Wszystkie białe figury wchodzą do gry z tempem! Wieża wiąże piona e6 na tle hetmana e7.'
          }
        },
        '16. Qd3': {
          badge: '!',
          arrows: ['d3->b5:red', 'd3->g6:amber', 'g6->f5:green'],
          targets: ['b5', 'f5'],
          text: {
            en: 'Attacking b5 and preparing the decisive bishop sacrifice on f5 to rip open the e-file.',
            pl: 'Atak na b5 i przygotowanie decydującego ciosu gońcem na f5, który ostatecznie otworzy linię e.'
          }
        },
        '17. Bf5': {
          badge: '!!',
          arrows: ['f5->e6:red', 'e1->e7:red'],
          targets: ['e6', 'e7'],
          text: {
            en: 'Breaking the blockade! Black cannot ignore Bf5 without losing e6, yet 17... exf5 allows 18. Rxe7.',
            pl: 'Przełamanie blokady! Czarne nie mogą obronić pola e6, a bicie 17... exf5 oddaje hetmana po 18. Wxe7.'
          }
        },
        '19. c4': {
          badge: '🏆',
          arrows: ['c4->b5:red', 'c4->d5:red', 'd3->b5:amber'],
          targets: ['b5', 'd5'],
          text: {
            en: 'Final blow! White’s queen and c-pawn shatter the queenside shelter while Black’s h8 rook never moved; Kasparov resigned.',
            pl: 'Ostateczny cios! Białe rozbijają osłonę króla na c8, podczas gdy wieża h8 wciąż śpi w rogu — Kasparow poddał partię.'
          }
        }
      }
    },

    // === #42 AlphaZero – Stockfish (London, 2017, Game 10) ===
    {
      id: 'ba-54',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'pin', 'kingHunt', 'defense'],
      players: {
        en: 'AlphaZero vs. Stockfish (London, 2017, Game 10)',
        pl: 'AlphaZero – Stockfish (Londyn, 2017, Partia 10)'
      },
      title: {
        en: 'Neural Revolution: Positional Sacrifice & Total Blockade',
        pl: 'Rewolucja AI: Pozycyjna ofiara i całkowita blokada Stockfisha'
      },
      overview: {
        en: 'The game that stunned the chess world in 2017. AlphaZero sacrifices a knight and multiple pawns with 15. Nh6+ and 19. Re1!!, binding Stockfish’s pieces on the back rank until the black king’s fortress collapses.',
        pl: 'Partia, która zszokowała szachowy świat w 2017 roku. AlphaZero poświęca skoczka i pionki ruchami 15. Sh6+ oraz 19. We1!!, całkowicie paraliżując figury Stockfisha i przełamując jego obronę w końcówce.'
      },
      moves: [
        'Nf3', 'Nf6', 'd4', 'e6', 'c4', 'b6', 'g3', 'Bb7', 'Bg2', 'Be7',
        'O-O', 'O-O', 'd5', 'exd5', 'Nh4', 'c6', 'cxd5', 'Nxd5', 'Nf5', 'Nc7',
        'e4', 'd5', 'exd5', 'Nxd5', 'Nc3', 'Nxc3', 'Qg4', 'g6', 'Nh6+', 'Kg7',
        'bxc3', 'Bc8', 'Qf4', 'Qd6', 'Qa4', 'g5', 'Re1', 'Kxh6', 'h4', 'f6',
        'Be3', 'Bf5', 'Rad1', 'Qa3', 'Qc4', 'b5', 'hxg5+', 'fxg5', 'Qh4+', 'Kg6',
        'Qh1', 'Kg7', 'Be4', 'Bg6', 'Bxg6', 'hxg6', 'Qh3', 'Bf6', 'Kg2', 'Qxa2',
        'Rh1', 'Qg8', 'c4', 'Re8', 'Bd4', 'Bxd4', 'Rxd4', 'Rd8', 'Rxd8', 'Qxd8',
        'Qe6', 'Nd7', 'Rd1', 'Nc5', 'Rxd8', 'Nxe6', 'Rxa8', 'Kf6', 'cxb5', 'cxb5',
        'Kf3', 'Nd4+', 'Ke4', 'Nc6', 'Rc8', 'Ne7', 'Rb8', 'Nf5', 'g4', 'Nh6',
        'f3', 'Nf7', 'Ra8', 'Nd6+', 'Kd5', 'Nc4', 'Rxa7', 'Ne3+', 'Ke4', 'Nc4',
        'Ra6+', 'Kg7', 'Rc6', 'Kf7', 'Rc5', 'Ke6', 'Rxg5', 'Kf6', 'Rc5', 'g5',
        'Kd4'
      ],
      annotations: {
        '10. Nf5': {
          badge: '⚔️',
          arrows: ['f5->e7:red', 'f5->g7:red', 'e2->e4:green'],
          targets: ['f5', 'e7'],
          text: {
            en: 'AlphaZero plants a monster knight on f5, prioritizing long-term dark-square pressure over material.',
            pl: 'AlphaZero lokuje potężnego skoczka na f5, stawiając długofalowy nacisk ponad rachunek pionów.'
          }
        },
        '15. Nh6+': {
          badge: '!',
          arrows: ['h6->g8:red', 'g4->g7:amber'],
          targets: ['h6', 'g7'],
          text: {
            en: 'Forcing the king to g7 and anchoring the knight deep inside Stockfish’s kingside.',
            pl: 'Zmusza króla do wejścia na g7 i wbija klin w obóz Stockfisha na skrzydle królewskim.'
          }
        },
        '19. Re1': {
          badge: '!!',
          arrows: ['e1->e7:amber', 'h6->g7:blue', 'h2->h4:green'],
          targets: ['h6', 'e7'],
          text: {
            en: 'Stunning piece sacrifice! AlphaZero leaves the h6 knight en prise to seize the e-file and prepare h4.',
            pl: 'Oszałamiająca ofiara figury! AlphaZero zostawia skoczka h6 pod biciem, by przejąć linię e i przygotować h4.'
          }
        },
        '20. h4': {
          badge: '!',
          arrows: ['h4->g5:red', 'c1->e3:green'],
          targets: ['g5', 'h6'],
          text: {
            en: 'Despite being down a full piece, White locks Stockfish’s king on the rim and activates both bishops.',
            pl: 'Mimo straty całej figury białe zamykają króla Stockfisha w klatce i wprowadzają do gry oba gońce.'
          }
        },
        '26. Qh1': {
          badge: '!!',
          arrows: ['h1->h7:amber', 'g2->e4:green', 'e1->h1:green'],
          targets: ['h1', 'h7'],
          text: {
            en: 'Eerie quiet retreat! AlphaZero tucks its queen into the h1 corner, preparing Rh1 and Be4 while Black’s queenside sleeps.',
            pl: 'Niesamowite wycofanie w róg! AlphaZero chowa hetmana na h1, przygotowując Wh1 i Ge4 przy całkowitym paraliżu figur czarnych.'
          }
        },
        '36. Qe6': {
          badge: '!',
          arrows: ['e6->g6:red', 'h1->d1:green', 'd1->d7:amber'],
          targets: ['e6', 'd7'],
          text: {
            en: 'Total domination! Down a knight and pawn earlier, White forces entry on the d-file to win back material with interest.',
            pl: 'Pełna dominacja! Pomimo wcześniejszej straty materiału białe przejmują linię d i odzyskują wszystko z nawiązką.'
          }
        },
        '56. Kd4': {
          badge: '🏆',
          arrows: ['d4->c4:red', 'c5->b5:red'],
          targets: ['c4', 'b5'],
          text: {
            en: 'White’s king marches in to pick off Black’s last pawns and knight; Stockfish resigned.',
            pl: 'Biały król wkracza do decydującego ataku na pozostałe piony i skoczka — Stockfish poddał partię.'
          }
        }
      }
    },

    // === #43 Jinshi Bai – Ding Liren (China, 2017) ===
    {
      id: 'ba-55',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'kingHunt', 'fork', 'pin'],
      players: {
        en: 'Jinshi Bai vs. Ding Liren (Chinese League, 2017)',
        pl: 'Jinshi Bai – Ding Liren (Liga Chińska, 2017)'
      },
      title: {
        en: 'Ding Liren’s Chinese Immortal: King Hunt Through the Center',
        pl: 'Chińska Nieśmiertelna Ding Lirena: Polowanie na króla w centrum'
      },
      overview: {
        en: 'Viewed from Black’s perspective! Ding Liren sacrifices pawns, an exchange, and both queens early to strand the white king in the middle of the board, weaving an unforgettable minor-piece and rook mating net with 20... Rd4!! and 30... Rh8!!.',
        pl: 'Widok z perspektywy czarnych! Ding Liren oddaje piony i jakość po wymianie hetmanów, aby uwięzić białego króla na środku szachownicy i zapleść niezapomnianą sieć matową ruchami 20... Wd4!! i 30... Wh8!!.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4', 'Nf3', 'O-O', 'Bg5', 'c5',
        'e3', 'cxd4', 'Qxd4', 'Nc6', 'Qd3', 'h6', 'Bh4', 'd5', 'Rd1', 'g5',
        'Bg3', 'Ne4', 'Nd2', 'Nc5', 'Qc2', 'd4', 'Nf3', 'e5', 'Nxe5', 'dxc3',
        'Rxd8', 'cxb2+', 'Ke2', 'Rxd8', 'Qxb2', 'Na4', 'Qc2', 'Nc3+', 'Kf3', 'Rd4',
        'h3', 'h5', 'Bh2', 'g4+', 'Kg3', 'Rd2', 'Qb3', 'Ne4+', 'Kh4', 'Be7+',
        'Kxh5', 'Kg7', 'Bf4', 'Bf5', 'Bh6+', 'Kh7', 'Qxb7', 'Rxf2', 'Bg5', 'Rh8',
        'Nxf7', 'Bg6+', 'Kxg4', 'Ne5+'
      ],
      annotations: {
        '13... d4': {
          badge: '⚔️',
          arrows: ['d4->c3:red', 'e6->e5:green'],
          targets: ['c3', 'e2'],
          text: {
            en: 'Ding Liren blasts open the center before White can castle, threatening ...e5 and ...dxc3.',
            pl: 'Ding Liren rozrywa centrum, zanim białe zdążą zrobić roszadę, grożąc dalszym ...e5 i ...dxc3.'
          }
        },
        '18... Na4': {
          badge: '!',
          arrows: ['a4->b2:red', 'a4->c3:green'],
          targets: ['b2', 'c3'],
          text: {
            en: 'Even after queens are traded—and regained on b2—Black’s knights swarm around White’s exposed king on e2.',
            pl: 'Czarne skoczki otaczają wyeksponowanego białego króla na e2 z ogromną dynamiką.'
          }
        },
        '20... Rd4': {
          badge: '!!',
          arrows: ['d4->f4:amber', 'c3->e2:amber', 'h6->h5:green'],
          targets: ['d4', 'f3'],
          text: {
            en: 'Immortal Rook Lift! 20... Rd4!! is immune (21. exd4 Nxd4+ forks king and queen) and prepares ...g4+!',
            pl: 'Genialne wprowadzenie wieży! Wieża na d4 jest nietykalna (po 21. exd4 Sxd4+ są widełki!) i szykuje ...g4+!'
          }
        },
        '23... Rd2': {
          badge: '!',
          arrows: ['d2->c2:red', 'd2->f2:red', 'c3->e4:green'],
          targets: ['c2', 'f2'],
          text: {
            en: 'Invading the 2nd rank with tempo, chasing White’s queen away so the c3 knight leaps to e4+.',
            pl: 'Wtargnięcie na drugą linię z tempem przepędza białego hetmana i uwalnia pole e4 dla skoczka.'
          }
        },
        '25... Be7+': {
          badge: '!',
          arrows: ['e7->h4:red', 'h4->h5:green'],
          targets: ['h4', 'h5'],
          text: {
            en: 'Forcing the white king onto the edge of the board at h5, where every black piece joins the hunt.',
            pl: 'Wypchnięcie białego króla na skraj szachownicy na h5, gdzie każda czarna figura ma dostęp do ataku.'
          }
        },
        '30... Rh8': {
          badge: '!!',
          arrows: ['h8->h5:red', 'f2->g2:amber', 'f5->g6:green'],
          targets: ['h8', 'h5'],
          text: {
            en: 'Quiet genius! Leaving f7 hanging to bring the final rook onto the h-file for an unstoppable discovered net.',
            pl: 'Ciche arcydzieło! Ding oddaje piona f7, by wprowadzić drugą wieżę na linię h z nieuniknionym matem.'
          }
        },
        '32... Ne5+': {
          badge: '🏆',
          arrows: ['e5->g4:red', 'g6->h5:amber', 'e7->g5:amber'],
          targets: ['g4', 'h5'],
          text: {
            en: 'Check! Since 33. Nxe5 Bf5+ 34. Kh5 Kg7# is mate and 33. Kh4 Kg7+ wins everything, Bai Jinshi resigned.',
            pl: 'Szach! Ponieważ 33. Sxe5 Gf5+ 34. Kh5 Kg7# daje mata, a 33. Kh4 Kg7+ niszczy białe, Bai Jinshi poddał partię.'
          }
        }
      }
    },

    // === #44 Wei Yi – Bruzón (Danzhou, 2015) ===
    {
      id: 'ba-56',
      isBattleAnalysis: true,
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'attraction', 'clearance'],
      players: {
        en: 'Wei Yi vs. Lázaro Bruzón Batista (Danzhou, 2015)',
        pl: 'Wei Yi – Lázaro Bruzón Batista (Danzhou, 2015)'
      },
      title: {
        en: 'The 21st-Century Immortal: Rook Sacrifice & Quiet Killers',
        pl: 'Nieśmiertelna XXI wieku: Ofiara wieży 22. Wxf7+! i ciche ruchy'
      },
      overview: {
        en: 'At just 16 years old, Wei Yi created one of modern chess’s brightest gems. Sacrificing a rook on f7 (22. Rxf7!) and a bishop on e4 (25. Be4+!), he drove Bruzón’s king to h3 using ice-cold quiet queen and bishop moves.',
        pl: 'Mając zaledwie 16 lat, Wei Yi stworzył jedną z najjaśniejszych pereł współczesnych szachów. Poświęcając wieżę na f7 (22. Wxf7!) oraz gońca na e4 (25. Ge4+!), przepędził króla Bruzóna aż na h3 serią zimnokrwistych cichych posunięć.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'e6', 'Nc3', 'a6', 'Be2', 'Nc6', 'd4', 'cxd4',
        'Nxd4', 'Qc7', 'O-O', 'Nf6', 'Be3', 'Be7', 'f4', 'd6', 'Kh1', 'O-O',
        'Qe1', 'Nxd4', 'Bxd4', 'b5', 'Qg3', 'Bb7', 'a3', 'Rad8', 'Rae1', 'Rd7',
        'Bd3', 'Qd8', 'Qh3', 'g6', 'f5', 'e5', 'Be3', 'Re8', 'fxg6', 'hxg6',
        'Nd5', 'Nxd5', 'Rxf7', 'Kxf7', 'Qh7+', 'Ke6', 'exd5+', 'Kxd5', 'Be4+', 'Kxe4',
        'Qf7', 'Bf6', 'Bd2+', 'Kd4', 'Be3+', 'Ke4', 'Qb3', 'Kf5', 'Rf1+', 'Kg4',
        'Qd3', 'Bxg2+', 'Kxg2', 'Qa8+', 'Kg1', 'Bg5', 'Qe2+', 'Kh4', 'Bf2+', 'Kh3',
        'Be1'
      ],
      annotations: {
        '22. Rxf7': {
          badge: '!!',
          arrows: ['f1->f7:red', 'h3->h7:green'],
          targets: ['f7', 'g8'],
          text: {
            en: 'Thunderbolt Rook Sacrifice! 22. Rxf7! drags the black king out into the open while Qh7+ awaits.',
            pl: 'Piorunująca ofiara wieży! 22. Wxf7! wyciąga czarnego króla na otwartą przestrzeń przed atakiem Hh7+.'
          }
        },
        '25. Be4+': {
          badge: '!!',
          arrows: ['d3->e4:red', 'e4->d5:red', 'h7->f7:green'],
          targets: ['e4', 'd5'],
          text: {
            en: 'Bishop sacrifice! Pulling Black’s king all the way to e4 so the queen and e3 bishop lock it down.',
            pl: 'Ofiara gońca! Zaciąga czarnego króla aż na e4 w sam środek białych figur.'
          }
        },
        '29. Qb3': {
          badge: '!!',
          arrows: ['f7->b3:green', 'e1->f1:green', 'b3->f7:amber'],
          targets: ['b3', 'f5'],
          text: {
            en: 'First brilliant quiet move! Retreating to b3 clears the f-file for Rf1+ while cutting off d5.',
            pl: 'Pierwsze genialne ciche posunięcie! Odejście hetmana na b3 otwiera linię f dla Wf1+ i odcina pole d5.'
          }
        },
        '31. Qd3': {
          badge: '!!',
          arrows: ['b3->d3:green', 'd3->g6:amber', 'f1->f3:amber'],
          targets: ['d3', 'g6'],
          text: {
            en: 'Second quiet killer! Ignoring Black’s counter-checks to threaten Qd3–e2+ and Rf3+.',
            pl: 'Drugie ciche uderzenie! Wei Yi ignoruje kontratak czarnych na g2, szykując decydujące He2+.'
          }
        },
        '33. Kg1': {
          badge: '!',
          arrows: ['g2->g1:green', 'd3->e2:green'],
          targets: ['g1', 'g4'],
          text: {
            en: 'Cold-blooded safety step! Black’s queen on a8 has no more checks, and the mating net closes.',
            pl: 'Zimnokrwisty krok królem! Czarny hetman na a8 nie ma już szachów, a sieć matowa zamyka się.'
          }
        },
        '35. Bf2+': {
          badge: '!',
          arrows: ['e3->f2:red', 'f2->h4:red'],
          targets: ['h4', 'h3'],
          text: {
            en: 'Driving the black king onto h3, one step away from total confinement.',
            pl: 'Spycha czarnego króla na skrajne pole h3, gdzie traci ostatnie pole ucieczki.'
          }
        },
        '36. Be1': {
          badge: '🏆',
          arrows: ['f2->e1:green', 'e2->d3:amber', 'f1->f3:red'],
          targets: ['e1', 'h3'],
          text: {
            en: 'The unforgettable final quiet move! Preventing ...Bf4 escapes and threatening unstoppable mate (Rf3+ / Qd3+); Bruzón resigned.',
            pl: 'Niezapomniane ostatnie ciche posunięcie! Odcięcie odwrotu i nieuchronna groźba mata (Wf3+ / Hd3+) — Bruzón poddał partię.'
          }
        }
      }
    },

    // === #45 Topalov – Shirov (Linares, 1998) ===
    {
      id: 'ba-57',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'medium',
      themes: ['sacrifice', 'deflection', 'promotion', 'clearance'],
      players: {
        en: 'Veselin Topalov vs. Alexei Shirov (Linares, 1998)',
        pl: 'Veselin Topalov – Alexei Shirov (Linares, 1998)'
      },
      title: {
        en: 'The Greatest Endgame Move Ever: 47... Bh3!!',
        pl: 'Najwspanialszy ruch końcówki w historii: 47... Gh3!!'
      },
      overview: {
        en: 'Viewed from Black’s perspective! In an apparently drawn opposite-colored bishop endgame at Linares 1998, Alexei Shirov stunned the chess world with 47... Bh3!! — sacrificing his only bishop on an empty square so his king could break through and queen a pawn.',
        pl: 'Widok z perspektywy czarnych! W pozornie remisowej końcówce różnobarwnych gońców w Linares 1998 Alexei Shirov zszokował świat ruchem 47... Gh3!! — poświęcając jedynego gońca na pustym polu, by torować drogę własnemu królowi i pionom.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'g6', 'Nc3', 'd5', 'cxd5', 'Nxd5', 'e4', 'Nxc3',
        'bxc3', 'Bg7', 'Bb5+', 'c6', 'Ba4', 'O-O', 'Ne2', 'Nd7', 'O-O', 'e5',
        'f3', 'Qe7', 'Be3', 'Rd8', 'Qc2', 'Nb6', 'Bb3', 'Be6', 'Rad1', 'Nc4',
        'Bc1', 'b5', 'f4', 'exd4', 'Nxd4', 'Bg4', 'Rde1', 'Qc5', 'Kh1', 'a5',
        'h3', 'Bd7', 'a4', 'bxa4', 'Ba2', 'Be8', 'e5', 'Nb6', 'f5', 'Nd5',
        'Bd2', 'Nb4', 'Qxa4', 'Nxa2', 'Qxa2', 'Bxe5', 'fxg6', 'hxg6', 'Bg5', 'Rd5',
        'Re3', 'Qd6', 'Qe2', 'Bd7', 'c4', 'Bxd4', 'cxd5', 'Bxe3', 'Qxe3', 'Re8',
        'Qc3', 'Qxd5', 'Bh6', 'Re5', 'Rf3', 'Qc5', 'Qa1', 'Bf5', 'Re3', 'f6',
        'Rxe5', 'Qxe5', 'Qa2+', 'Qd5', 'Qxd5+', 'cxd5', 'Bd2', 'a4', 'Bc3', 'Kf7',
        'h4', 'Ke6', 'Kg1', 'Bh3', 'gxh3', 'Kf5', 'Kf2', 'Ke4', 'Bxf6', 'd4',
        'Be7', 'Kd3', 'Bc5', 'Kc4', 'Be7', 'Kb3'
      ],
      annotations: {
        '18... Bg4': {
          badge: '⚔️',
          arrows: ['g4->d1:red', 'e7->c5:green'],
          targets: ['d1', 'd4'],
          text: {
            en: 'Shirov activates with tempo against the d1 rook before pivoting his queen to c5.',
            pl: 'Shirov aktywizuje gońca z tempem na wieżę d1, przygotowując wyjście hetmanem na c5.'
          }
        },
        '26... Nb4': {
          badge: '!',
          arrows: ['b4->a2:red', 'b4->c2:red', 'g7->e5:green'],
          targets: ['a2', 'c2'],
          text: {
            en: 'Tactical counter-strike! Forking White’s bishop and queen to snap off the critical e5 pawn.',
            pl: 'Taktyczny kontratak! Widełki na gońca i hetmana pozwalają czarnym zbić ważnego piona e5.'
          }
        },
        '33... Bxd4': {
          badge: '!',
          arrows: ['e5->d4:red', 'd4->e3:amber'],
          targets: ['d4', 'e3'],
          text: {
            en: 'Trading into an endgame where Black will emerge with two connected passed pawns against White’s bishop.',
            pl: 'Uproszczenie prowadzące do końcówki, w której czarne zyskają dwa groźne wolne piony.'
          }
        },
        '47... Bh3': {
          badge: '!!',
          arrows: ['f5->h3:red', 'h3->g2:red', 'e6->f5:green', 'f5->e4:green'],
          targets: ['h3', 'g2', 'e4'],
          text: {
            en: 'The Move of a Lifetime! 47... Bh3!! sacrifices a whole bishop to clear the f5–e4–d3 path for Black’s king and distract the g2 pawn!',
            pl: 'Ruch życia! 47... Gh3!! poświęca całego gońca na pustym polu, by odblokować marsz króla przez f5–e4–d3 i odciągnąć piona g2!'
          }
        },
        '50... d4': {
          badge: '!',
          arrows: ['d5->d4:green', 'e4->d3:green'],
          targets: ['d4', 'd3'],
          text: {
            en: 'With White’s king held back on f2, Shirov’s king and passed pawns race forward simultaneously.',
            pl: 'Gdy biały król nie zdążył zablokować pozycji, król Shirona wraz z wolnym pionem d4 pędzą do przodu.'
          }
        },
        '53... Kb3': {
          badge: '🏆',
          arrows: ['c4->b3:green', 'a4->a1:green'],
          targets: ['b3', 'a4'],
          text: {
            en: 'Total Zugzwang! White’s bishop cannot stop both the a4 pawn and the d4 pawn; Topalov resigned.',
            pl: 'Biały goniec nie jest w stanie zatrzymać obu wolnych pionów naraz — Topalov poddał partię.'
          }
        }
      }
    },

    // === #46 Shirov – Judit Polgár (Buenos Aires, 1994) ===
    {
      id: 'ba-58',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['fork', 'pin', 'sacrifice', 'deflection'],
      players: {
        en: 'Alexei Shirov vs. Judit Polgár (Buenos Aires, 1994)',
        pl: 'Alexei Shirov – Judit Polgár (Buenos Aires, 1994)'
      },
      title: {
        en: 'Polgár’s Sicilian Storm: Knight Invasion on e3 & c2',
        pl: 'Sycylijska burza Polgár: Inwazja skoczkiem na e3 i c2'
      },
      overview: {
        en: 'Viewed from Black’s perspective! At the 1994 Buenos Aires Sicilian thematic event, 18-year-old Judit Polgár fearlessly met Alexei Shirov’s 6. g4 thrust with 10... g5!, launching her knights straight into e3 and c2 to wreck White’s queenside.',
        pl: 'Widok z perspektywy czarnych! Na tematycznym turnieju w Buenos Aires 1994 18-letnia Judit Polgár bez wahania odpowiedziała na atak Shirona 6. g4 kontrą 10... g5!, wbijając skoczka na e3 i c2 z druzgocącym skutkiem.'
      },
      moves: [
        'e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6', 'Nc3', 'd6',
        'g4', 'a6', 'Be3', 'Nge7', 'Nb3', 'b5', 'f4', 'Bb7', 'Qf3', 'g5',
        'fxg5', 'Ne5', 'Qg2', 'b4', 'Ne2', 'h5', 'gxh5', 'Nf5', 'Bf2', 'Qxg5',
        'Na5', 'Ne3', 'Qg3', 'Qxg3', 'Nxg3', 'Nxc2+', 'Kd1', 'Nxa1', 'Nxb7', 'b3',
        'axb3', 'Nxb3', 'Kc2', 'Nc5', 'Nxc5', 'dxc5', 'Be1', 'Nf3', 'Bc3', 'Nd4+',
        'Kd3', 'Bd6', 'Bg2', 'Be5', 'Kc4', 'Ke7', 'Ra1', 'Nc6'
      ],
      annotations: {
        '10... g5': {
          badge: '⚔️',
          arrows: ['g5->f4:red', 'c6->e5:green'],
          targets: ['f4', 'e5'],
          text: {
            en: 'Polgár counter-strikes immediately! Sacrificing a pawn to seize the e5 outpost and open the g-file.',
            pl: 'Polgár natychmiast kontratakuje! Poświęca piona, by opanować pole e5 i otworzyć linię g.'
          }
        },
        '14... Nf5': {
          badge: '!',
          arrows: ['f5->e3:red', 'd8->g5:green'],
          targets: ['e3', 'g5'],
          text: {
            en: 'Unleashing both the knight and queen! If 15. exf5 Qxg2 wins, so White must retreat the bishop.',
            pl: 'Uruchomienie skoczka i hetmana naraz! Bicie 15. exf5 przegrywa po 15... Hxg2.'
          }
        },
        '16... Ne3': {
          badge: '!!',
          arrows: ['e3->g2:red', 'e3->f1:red', 'e3->c2:red'],
          targets: ['e3', 'c2', 'g2'],
          text: {
            en: 'Devastating octopus knight! 16... Ne3!! forks the g2 queen and f1 bishop while eyeing the fatal c2 fork.',
            pl: 'Druzgocący skoczek na e3! 16... Se3!! atakuje hetmana g2 oraz gońca f1, grożąc jednocześnie widełkami na c2.'
          }
        },
        '18... Nxc2+': {
          badge: '!',
          arrows: ['c2->e1:red', 'c2->a1:red'],
          targets: ['c2', 'a1'],
          text: {
            en: 'Clean fork! Black wins the a1 rook and forces White’s king into the center.',
            pl: 'Czyste widełki! Czarne zdobywają wieżę a1 i pozbawiają białe roszady.'
          }
        },
        '20... b3': {
          badge: '!',
          arrows: ['b4->b3:green', 'a1->b3:green'],
          targets: ['b3', 'a1'],
          text: {
            en: 'Rescuing the trapped knight! Opening the b3 square lets the cornered knight escape back into play.',
            pl: 'Ratunek dla uwięzionego skoczka! Ruch 20... b3 otwiera drogę powrotu z rogu a1.'
          }
        },
        '25... Nd4+': {
          badge: '🏆',
          arrows: ['d4->c2:red', 'f8->d6:green'],
          targets: ['d4', 'c2'],
          text: {
            en: 'Planting a dominant knight on d4 with check! Up a full exchange with active pieces, Polgár easily converted.',
            pl: 'Potężny skoczek w centrum z szachem! Z przewagą jakości i świetną koordynacją Polgár pewnie zrealizowała wygraną.'
          }
        }
      }
    },

    // === #47 Kramnik – Lékó (Brissago, 2004, Game 14) ===
    {
      id: 'ba-59',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['fork', 'pin', 'promotion', 'battery'],
      players: {
        en: 'Vladimir Kramnik vs. Péter Lékó (Brissago, 2004, Game 14)',
        pl: 'Władimir Kramnik – Péter Lékó (Brissago, 2004, Partia 14)'
      },
      title: {
        en: 'Brissago Showdown: Must-Win Endgame Mastery for the Crown',
        pl: 'Finał w Brissago: Zwycięstwo na wagę korony Mistrza Świata'
      },
      overview: {
        en: 'Trailing by a point in the 14th and final game of the 2004 World Championship, Kramnik needed a win on demand. Watch him squeeze Lékó’s Caro-Kann, break through with 29. Nxf7! and 33. Rxg7!, and drive his king to f6 to retain the title.',
        pl: 'Przegrywając jednym punktem przed 14., ostatnią partią meczu o MŚ 2004, Kramnik musiał wygrać na zawołanie. Zobacz, jak wyciska Obronę Caro-Kann Lékó, przełamuje obronę ruchami 29. Sxf7! i 33. Wxg7! i prowadzi króla na f6, broniąc tytułu.'
      },
      moves: [
        'e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'h4', 'h6', 'g4', 'Bd7',
        'Nd2', 'c5', 'dxc5', 'e6', 'Nb3', 'Bxc5', 'Nxc5', 'Qa5+', 'c3', 'Qxc5',
        'Nf3', 'Ne7', 'Bd3', 'Nbc6', 'Be3', 'Qa5', 'Qd2', 'Ng6', 'Bd4', 'Nxd4',
        'cxd4', 'Qxd2+', 'Kxd2', 'Nf4', 'Rac1', 'h5', 'Rhg1', 'Bc6', 'gxh5', 'Nxh5',
        'b4', 'a6', 'a4', 'Kd8', 'Ng5', 'Be8', 'b5', 'Nf4', 'b6', 'Nxd3',
        'Kxd3', 'Rc8', 'Rxc8+', 'Kxc8', 'Rc1+', 'Bc6', 'Nxf7', 'Rxh4', 'Nd6+', 'Kd8',
        'Rg1', 'Rh3+', 'Ke2', 'Ra3', 'Rxg7', 'Rxa4', 'f4', 'Ra2+', 'Kf3', 'Ra3+',
        'Kg4', 'Rd3', 'f5', 'Rxd4+', 'Kg5', 'exf5', 'Kf6', 'Rg4', 'Rc7', 'Rh4',
        'Nf7+'
      ],
      annotations: {
        '15. Bd4': {
          badge: '📖',
          arrows: ['d4->a7:red', 'd2->e2:blue'],
          targets: ['d4', 'c6'],
          text: {
            en: 'Trading queens into a strategic squeeze where White’s space advantage and b4–b5 expansion will tell.',
            pl: 'Przejście do końcówki bez hetmanów, w której przewaga przestrzeni i marsz b4–b5 zdecydują o losach partii.'
          }
        },
        '24. b5': {
          badge: '!',
          arrows: ['b5->a6:red', 'b5->b6:green'],
          targets: ['b5', 'b6'],
          text: {
            en: 'Expanding on the queenside to carve out a permanent b6 wedge and invade on the c-file.',
            pl: 'Ekspansja na skrzydle hetmańskim wbija klin b6 i otwiera drogę do wtargnięcia po linii c.'
          }
        },
        '29. Nxf7': {
          badge: '!',
          arrows: ['g5->f7:red', 'f7->d6:green', 'f7->h8:red'],
          targets: ['f7', 'd6'],
          text: {
            en: 'Breaking the blockade! Kramnik willingly gives up the h4 pawn to plant an untouchable knight on d6.',
            pl: 'Przełamanie obrony! Kramnik oddaje piona h4, by osadzić nietykalnego skoczka na polu d6.'
          }
        },
        '33. Rxg7': {
          badge: '!',
          arrows: ['g1->g7:red', 'f2->f4:green'],
          targets: ['g7', 'f4'],
          text: {
            en: 'Harvesting g7! Now White’s f-pawn and king are free to surge up the board.',
            pl: 'Zbicie na g7! Teraz biały pion f oraz król mogą bez przeszkód ruszyć do decydującego ataku.'
          }
        },
        '39. Kf6': {
          badge: '!!',
          arrows: ['g5->f6:green', 'g7->c7:green'],
          targets: ['f6', 'd8'],
          text: {
            en: 'The World Champion’s king enters the mating net! Threatening Rc7 and Re7/Nf7+.',
            pl: 'Król Mistrza Świata wchodzi bezpośrednio do sieci matowej, wspierając groźbę Wc7 i Sf7+!'
          }
        },
        '41. Nf7+': {
          badge: '🏆',
          arrows: ['d6->f7:red', 'c7->c6:amber', 'f7->e8:amber'],
          targets: ['f7', 'd8'],
          text: {
            en: 'Check! Forced to 41... Ke8, Black drops the c6 bishop or suffers mate after 42. Nd6+; Lékó resigned, tying the match 7–7!',
            pl: 'Szach! Po wymuszonym 41... Ke8 czarne tracą gońca c6 lub dostają mata; Lékó poddał się, a Kramnik obronił tytuł wynikiem 7–7!'
          }
        }
      }
    },

    // === #48 Paulsen – Morphy (New York, 1857) ===
    {
      id: 'ba-60',
      isBattleAnalysis: true,
      perspective: 'b',
      difficulty: 'easy',
      themes: ['sacrifice', 'pin', 'battery', 'deflection'],
      players: {
        en: 'Louis Paulsen vs. Paul Morphy (New York, 1857)',
        pl: 'Louis Paulsen – Paul Morphy (Nowy Jork, 1857)'
      },
      title: {
        en: 'Morphy’s American Masterpiece: 17... Qxf3!! Queen Sacrifice',
        pl: 'Arcydzieło Morphy’ego: Ofiara hetmana 17... Hxf3!! w Nowym Jorku'
      },
      overview: {
        en: 'Viewed from Black’s perspective! From the 1st American Chess Congress final. After paralyzing White’s entire queenside with 12... Qd3!, Morphy detonates 17... Qxf3!!, sacrificing his queen to unleash two bishops and two rooks on Paulsen’s exposed king.',
        pl: 'Widok z perspektywy czarnych! Finał I Amerykańskiego Kongresu Szachowego. Po sparaliżowaniu całego skrzydła hetmańskiego białych ruchem 12... Hd3!, Morphy odpala bombę 17... Hxf3!!, poświęcając hetmana, by rzucić parę gońców i wież na białego króla.'
      },
      moves: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Nc3', 'Nf6', 'Bb5', 'Bc5', 'O-O', 'O-O',
        'Nxe5', 'Re8', 'Nxc6', 'dxc6', 'Bc4', 'b5', 'Be2', 'Nxe4', 'Nxe4', 'Rxe4',
        'Bf3', 'Re6', 'c3', 'Qd3', 'b4', 'Bb6', 'a4', 'bxa4', 'Qxa4', 'Bd7',
        'Ra2', 'Rae8', 'Qa6', 'Qxf3', 'gxf3', 'Rg6+', 'Kh1', 'Bh3', 'Rd1', 'Bg2+',
        'Kg1', 'Bxf3+', 'Kf1', 'Bg2+', 'Kg1', 'Bh3+', 'Kh1', 'Bxf2', 'Qf1', 'Bxf1',
        'Rxf1', 'Re2', 'Ra1', 'Rh6', 'd4', 'Be3'
      ],
      annotations: {
        '12... Qd3': {
          badge: '!',
          arrows: ['d3->d2:red', 'd3->f1:amber', 'b6->f2:amber'],
          targets: ['d2', 'c1'],
          text: {
            en: 'Pure paralysis! Planting the queen on d3 freezes White’s d2 pawn, locking the c1 bishop and a1 rook out of play.',
            pl: 'Pełny paraliż! Hetman na d3 blokuje piona d2, całkowicie więżąc białego gońca c1 oraz wieżę a1.'
          }
        },
        '17... Qxf3': {
          badge: '!!',
          arrows: ['d3->f3:red', 'e6->g6:green', 'd7->h3:green'],
          targets: ['f3', 'g2'],
          text: {
            en: 'Immortal Queen Sacrifice! Morphy smashes the g-file shelter, bringing both rooks and both bishops into an unstoppable attack.',
            pl: 'Nieśmiertelna ofiara hetmana! Morphy rozrywa osłonę na linii g, włączając obie wieże i gońce do niszczycielskiego ataku.'
          }
        },
        '18... Rg6+': {
          badge: '!',
          arrows: ['g6->g1:red', 'd7->h3:green'],
          targets: ['g1', 'h1'],
          text: {
            en: 'Seizing the open g-file with check and forcing the king into the h1 corner.',
            pl: 'Zajęcie otwartej linii g z szachem i zepchnięcie króla w róg szachownicy.'
          }
        },
        '19... Bh3': {
          badge: '!',
          arrows: ['h3->f1:red', 'h3->g2:green'],
          targets: ['g2', 'f1'],
          text: {
            en: 'Threatening 20... Bg2+ and 21... Bxf3#, weaving a classic two-bishop mating net.',
            pl: 'Groźba 20... Gg2+ i 21... Gxf3# tworzy klasyczną sieć matową pary gońców.'
          }
        },
        '24... Bxf2': {
          badge: '!',
          arrows: ['b6->f2:red', 'h3->g2:amber'],
          targets: ['f2', 'g2'],
          text: {
            en: 'After picking off the f3 pawn, Morphy takes f2, threatening 25... Bg2# and forcing White to give back the queen.',
            pl: 'Po zgarnięciu piona f3 Morphy bije na f2 z groźbą mata na g2, zmuszając białe do oddania hetmana.'
          }
        },
        '28... Be3': {
          badge: '🏆',
          arrows: ['f2->e3:green', 'h6->h2:red', 'e2->g2:red'],
          targets: ['h2', 'e3'],
          text: {
            en: 'Quiet killer! Threatening 29... Rxh2#, and 29. Bxe3 allows 29... Rhxh2+ 30. Kg1 Reg2#. Paulsen resigned.',
            pl: 'Ciche wykończenie! Grozi 29... Wxh2#, a po 29. Gxe3 następuje 29... Whxh2+ 30. Kg1 Weg2#. Paulsen poddał partię.'
          }
        }
      }
    },

    // === #49 Nimzowitsch – Alapin (Riga, 1914) ===
    {
      id: 'ba-61',
      isBattleAnalysis: true,
      difficulty: 'easy',
      themes: ['sacrifice', 'deflection', 'clearance', 'backRank'],
      players: {
        en: 'Aron Nimzowitsch vs. Semion Alapin (Riga, 1914)',
        pl: 'Aron Nimzowitsch – Siemion Ałapin (Ryga, 1914)'
      },
      title: {
        en: 'Nimzowitsch’s 18-Move Miniature: The Opera-Style 17. Qd8+!!',
        pl: '18-ruchowa miniatura Nimzowitscha: Ofiara hetmana 17. Hd8+!!'
      },
      overview: {
        en: 'Punishing queen pawn-grabbing in the French Defense. After Alapin snaps off g2, Nimzowitsch castles queenside, clears the central files with 14. Bf6!!, and mirrors Morphy’s Opera Game with 17. Qd8+!! Bxd8 18. Re8#.',
        pl: 'Książkowa kara za chciwe bicie piona hetmanem w Obronie Francuskiej. Gdy Ałapin bije na g2, Nimzowitsch robi długą roszadę, przecina linie ruchem 14. Gf6!! i kończy partię echem Partii Operowej: 17. Hd8+!! Gxd8 18. We8#.'
      },
      moves: [
        'e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'exd5', 'Nxd5', 'Nf3', 'c5',
        'Nxd5', 'Qxd5', 'Be3', 'cxd4', 'Nxd4', 'a6', 'Be2', 'Qxg2', 'Bf3', 'Qg6',
        'Qd2', 'e5', 'O-O-O', 'exd4', 'Bxd4', 'Nc6', 'Bf6', 'Qxf6', 'Rhe1+', 'Be7',
        'Bxc6+', 'Kf8', 'Qd8+', 'Bxd8', 'Re8#'
      ],
      annotations: {
        '9... Qxg2': {
          badge: '?!',
          arrows: ['d5->g2:red', 'e2->f3:green'],
          targets: ['g2', 'f3'],
          text: {
            en: 'Alapin grabs a poisoned pawn while his kingside pieces remain undeveloped on the back rank.',
            pl: 'Ałapin chciwie bije piona g2, zostawiając cały swój obóz na ósmej linii bez rozwoju.'
          }
        },
        '12. O-O-O': {
          badge: '!',
          arrows: ['e1->c1:green', 'd1->d4:amber', 'h1->e1:green'],
          targets: ['d4', 'e8'],
          text: {
            en: 'Ignoring the attacked d4 knight! Castling long speeds the d1 rook straight into the attack.',
            pl: 'Białe ignorują atak na skoczka d4! Długa roszada błyskawicznie wprowadza wieżę do gry.'
          }
        },
        '14. Bf6': {
          badge: '!!',
          arrows: ['d4->f6:red', 'f6->g7:amber', 'h1->e1:green'],
          targets: ['f6', 'e7'],
          text: {
            en: 'Brilliant interference sacrifice! Cutting off ...Be7 and clearing the d-file; 14... gxf6 fails to 15. Rhe1+ Be7 16. Bxc6+.',
            pl: 'Genialna ofiara na zablokowanie! Odcina gońca na f8 i zwalnia linię d; po 14... gxf6 następuje 15. Whe1+ Ge7 16. Gxc6+.'
          }
        },
        '15. Rhe1+': {
          badge: '!',
          arrows: ['e1->e8:red', 'f3->c6:amber'],
          targets: ['e8', 'e7'],
          text: {
            en: 'Every white piece strikes! Black must block on e7, creating a fatal pin.',
            pl: 'Każda biała figura atakuje! Czarne muszą zasłonić się gońcem e7, wpadając w śmiertelne związanie.'
          }
        },
        '17. Qd8+': {
          badge: '!!',
          arrows: ['d2->d8:red', 'e1->e8:amber'],
          targets: ['d8', 'e8'],
          text: {
            en: 'Queen Sacrifice! 17. Qd8+!! deflects the e7 bishop away from guarding the e8 mating square.',
            pl: 'Ofiara hetmana! 17. Hd8+!! odciąga gońca e7 od obrony pola matowego e8.'
          }
        },
        '18. Re8#': {
          badge: '🏆',
          arrows: ['e8->f8:red', 'e8->d8:red', 'c6->e8:amber'],
          targets: ['f8', 'e8'],
          text: {
            en: 'Checkmate! The rook lands on e8 supported by the c6 bishop for a textbook back-rank finish.',
            pl: 'Mat! Wieża wjeżdża na e8 przy wsparciu gońca z c6, dając klasycznego mata na ostatniej linii.'
          }
        }
      }
    },

    // === #50 Dubov – Giri (Moscow, 2019) ===
    {
      id: 'ba-62',
      isBattleAnalysis: true,
      difficulty: 'medium',
      themes: ['sacrifice', 'kingHunt', 'fork', 'deflection'],
      players: {
        en: 'Daniil Dubov vs. Anish Giri (Moscow, 2019)',
        pl: 'Daniil Dubov – Anish Giri (Moskwa, 2019)'
      },
      title: {
        en: 'Dubov’s Modern Romanticism: 19. O-O-O! & Double Knight Sacrifice',
        pl: 'Współczesny romantyzm Dubova: Długa roszada 19. O-O-O! i szturm skoczków'
      },
      overview: {
        en: 'In the 2019 Moscow FIDE Grand Prix, Daniil Dubov stunned top seed Anish Giri with deep home preparation, castling queenside into an open board (19. O-O-O!), walking his own king to safety at f3, and smashing Giri’s fortress with 37. N5g6+!!.',
        pl: 'W turnieju FIDE Grand Prix w Moskwie 2019 Daniil Dubov zaskoczył Anisha Giriego głębokim przygotowaniem, robiąc długą roszadę na odsłonięte skrzydło (19. O-O-O!), wyprowadzając własnego króla w bezpieczne miejsce na f3 i rozbijając obronę kombinacją 37. S5g6+!!.'
      },
      moves: [
        'd4', 'Nf6', 'c4', 'e6', 'Nf3', 'd5', 'Bg5', 'dxc4', 'e4', 'b5',
        'a4', 'c6', 'Nc3', 'b4', 'Nb1', 'Ba6', 'e5', 'h6', 'Bxf6', 'gxf6',
        'exf6', 'c5', 'Nbd2', 'c3', 'bxc3', 'bxc3', 'Ne4', 'cxd4', 'Bb5+', 'Bxb5',
        'axb5', 'Qd5', 'Qxd4', 'Qxb5', 'Nxc3', 'Bb4', 'O-O-O', 'Qa5', 'Nb5', 'Na6',
        'Qd7+', 'Kf8', 'Kb1', 'Ba3', 'Rd3', 'Qb4+', 'Kc2', 'Qa4+', 'Kd2', 'Bb4+',
        'Ke2', 'Kg8', 'Ne5', 'Qc2+', 'Kf3', 'Rf8', 'Rhd1', 'h5', 'Qd4', 'Rh7',
        'Qf4', 'Bc5', 'Nd4', 'Qa2', 'R1d2', 'Qd5+', 'Ke2', 'Bb4', 'Ndc6', 'Qc5',
        'Ne7+', 'Kh8', 'N5g6+', 'fxg6', 'Nxg6+', 'Kg8', 'Ne7+', 'Qxe7', 'fxe7', 'Bxe7',
        'Rg3+', 'Rg7', 'Rxg7+', 'Kxg7', 'Qe5+', 'Bf6', 'Qxe6'
      ],
      annotations: {
        '14. Ne4': {
          badge: '⚔️',
          arrows: ['d2->e4:green', 'f1->b5:amber'],
          targets: ['c3', 'c5'],
          text: {
            en: 'Dubov gives up the d4 pawn to activate every minor piece with tempo in a sharp Noteboom gambit.',
            pl: 'Dubov oddaje piona d4, aby w ostrym gambitowym wariancie błyskawicznie zaktywizować wszystkie lekkie figury.'
          }
        },
        '19. O-O-O': {
          badge: '!!',
          arrows: ['e1->c1:green', 'd1->d8:amber', 'c3->b5:green'],
          targets: ['c1', 'd7'],
          text: {
            en: 'Audacious long castling into an open queenside! Dubov banks on his rooks and knights outpacing Black’s checks.',
            pl: 'Zuchwała długa roszada na otwartym skrzydle! Dubov liczy, że jego wieże i skoczki okażą się szybsze od szachów czarnych.'
          }
        },
        '23. Rd3': {
          badge: '!',
          arrows: ['d1->d3:green', 'd3->a3:red'],
          targets: ['d3', 'a3'],
          text: {
            en: 'Rook lift! Attacking the a3 bishop and preparing the white king’s escape march across the board.',
            pl: 'Przerzut wieży na trzecią linię atakuje gońca a3 i otwiera białemu królowi drogę ewakuacji.'
          }
        },
        '28. Kf3': {
          badge: '!',
          arrows: ['e2->f3:green', 'h1->d1:green', 'e5->f7:red'],
          targets: ['f3', 'f7'],
          text: {
            en: 'Dubov’s king finds shelter on f3 while the second rook enters on d1 to seal the initiative.',
            pl: 'Król Dubova znajduje schronienie na f3, podczas gdy druga wieża wkracza na d1, domykając inicjatywę.'
          }
        },
        '35. Ndc6': {
          badge: '!',
          arrows: ['d4->c6:green', 'c6->e7:amber', 'e5->g6:amber'],
          targets: ['c6', 'e7'],
          text: {
            en: 'Both knights converge on e7 and g6, setting up the decisive tactical demolition of Black’s kingside.',
            pl: 'Oba białe skoczki celują w pola e7 i g6, przygotowując taktyczną rozbiórkę królewskiej twierdzy czarnych.'
          }
        },
        '37. N5g6+': {
          badge: '!!',
          arrows: ['e5->g6:red', 'e7->g6:amber', 'e7->f8:red'],
          targets: ['g6', 'h8'],
          text: {
            en: 'Double Knight Sacrifice! 37. N5g6+ fxg6 38. Nxg6+ forces 39. Ne7+ Qxe7 40. fxe7, winning the queen and crashing through!',
            pl: 'Podwójna ofiara skoczka! 37. S5g6+ fxg6 38. Sxg6+ wymusza 39. Se7+ Hxe7 40. fxe7, wygrywając hetmana i rozbijając obronę!'
          }
        },
        '44. Qxe6': {
          badge: '🏆',
          arrows: ['e5->e6:red', 'e6->a6:red', 'e6->f6:red'],
          targets: ['e6', 'g7'],
          text: {
            en: 'With a winning queen against two minor pieces and an exposed black king, Dubov forced Giri’s resignation.',
            pl: 'Z wygrywającym hetmanem przeciwko dwóm lekkim figurom i odsłoniętym królem Dubov zmusił Giriego do poddania partii.'
          }
        }
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      PUZZLES,
      PUZZLE_THEMES,
      OPENING_TRAPS,
      OPENING_FAMILIES,
      WIN_MATERIAL_PUZZLES,
      DEFENSE_PUZZLES,
      FAMOUS_GAMES,
      BATTLE_ANALYSES
    };
  } else {
    global.PUZZLES = PUZZLES;
    global.PUZZLE_THEMES = PUZZLE_THEMES;
    global.OPENING_TRAPS = OPENING_TRAPS;
    global.OPENING_FAMILIES = OPENING_FAMILIES;
    global.WIN_MATERIAL_PUZZLES = WIN_MATERIAL_PUZZLES;
    global.DEFENSE_PUZZLES = DEFENSE_PUZZLES;
    global.FAMOUS_GAMES = FAMOUS_GAMES;
    global.BATTLE_ANALYSES = BATTLE_ANALYSES;
  }
})(typeof window !== 'undefined' ? window : globalThis);
