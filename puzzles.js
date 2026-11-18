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
    }
  ];

  // =========================================================================
  // BATTLE ANALYSES (6 Full Interactive Annotated Battles — Move-by-Move + SVG Targeting)
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
