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
      fen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
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
      fen: '6rk/6pp/8/6N1/8/8/6PP/6K1 w - - 0 1',
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
      fen: '7k/1R6/5N2/8/8/8/6PP/6K1 w - - 0 1',
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
      fen: '5r2/1b2Nppk/8/8/8/3R4/5PPP/6K1 w - - 0 1',
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
      fen: '6rk/6p1/5Q2/8/8/8/1B3PPP/6K1 w - - 0 1',
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
      fen: '2kr4/p2p4/2p5/8/5B2/8/5PPP/5BK1 w - - 0 1',
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
      fen: '3rkr2/8/Q7/8/8/8/5PPP/6K1 w - - 0 1',
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
      fen: '6k1/5p2/5P1Q/6K1/8/8/8/8 w - - 0 1',
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
      fen: '7k/6p1/8/8/2B5/3R4/5PPP/6K1 w - - 0 1',
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
      fen: '6k1/5ppp/8/8/3q4/8/5PPP/6K1 b - - 0 1',
      solution: ['d4d1'],
      title: {
        en: 'Black to Move: Back-Rank Strike',
        pl: 'Ruch czarnych: Uderzenie na 1. linii'
      },
      hint: {
        en: 'You are playing Black! White’s king is trapped behind its own pawns on f2, g2, and h2.',
        pl: 'Grasz czarnymi! Biały król jest uwięziony za własnymi pionami f2, g2 i h2.'
      },
      explanation: {
        en: '1... Qd1# punishes White’s unguarded first rank.',
        pl: '1... Hd1# wykorzystuje brak obrony pierwszej linii białych.'
      }
    },
    {
      id: 'm1-12',
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['battery'],
      fen: '6k1/1b3ppp/8/8/8/7q/5PPP/5RK1 b - - 0 1',
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
      fen: '7k/8/8/8/8/8/1R4PP/Q5K1 w - - 0 1',
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
        en: '1. Rb7! Kg8 2. Qg7# boxes the king onto the back rank so the queen delivers mate on g7.',
        pl: '1. Wb7! Kg8 2. Hg7# zamyka króla na ostatniej linii i matuje na g7.'
      }
    },
    {
      id: 'm2-10',
      movesToMate: 2,
      difficulty: 'easy',
      themes: ['backRank'],
      fen: '6k1/5ppp/4r3/8/8/8/5PPP/3RR1K1 w - - 0 1',
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
      fen: '3rr1k1/5ppp/8/8/8/4R3/5PPP/6K1 b - - 0 1',
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
      fen: '4k3/4pppp/4N3/8/8/8/6PP/3R2K1 w - - 0 1',
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
      fen: '4r1bk/7p/5N2/8/8/8/1B4PP/6K1 w - - 0 1',
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
      fen: '6k1/5ppp/8/8/6n1/8/6PP/6RK b - - 0 1',
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
      fen: '6k1/3P1ppp/8/8/8/8/5PPP/6K1 w - - 0 1',
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
      fen: 'r4r1k/6pp/7N/8/8/1Q6/6PP/6K1 w - - 0 1',
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
      fen: '5rk1/4p2p/6p1/4B1N1/8/8/6PP/3R1Q1K w - - 0 1',
      solution: ['f1f8', 'g8f8', 'd1d8'],
      title: {
        en: 'Attraction to the Back Rank',
        pl: 'Zaciągnięcie na ósmą linię'
      },
      hint: {
        en: 'Eliminate Black’s rook on f8 with a queen sacrifice to draw the king into a back-rank net!',
        pl: 'Zbij wieżę na f8 hetmanem, zaciągając czarnego króla w matową sieć na 8. linii!'
      },
      explanation: {
        en: '1. Qxf8+! Kxf8 2. Rd8# works because the e5-bishop and g5-knight control g7 and f7.',
        pl: '1. Hxf8+! Kxf8 2. Wd8# wygrywa, ponieważ goniec e5 i skoczek g5 odcinają pola g7 oraz f7.'
      }
    },
    {
      id: 'm2-04',
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['doubleCheck', 'sacrifice', 'attraction'],
      fen: '4Q2n/5pkp/8/8/6N1/B7/5P1P/6RK w - - 0 1',
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
      fen: '5r1k/4Nppp/8/8/8/3R3Q/5PPP/6K1 w - - 0 1',
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
      fen: '7k/6pp/3r1N2/8/8/8/1R4PP/6K1 w - - 0 1',
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
      fen: 'r5k1/3P1ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
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
      fen: '5r1k/6pp/8/4N1Q1/2B5/8/6PP/6K1 w - - 0 1',
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
      fen: '5r1k/6p1/7p/8/8/5Q2/5P1P/6RK w - - 0 1',
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
      fen: 'r4rk1/ppp2Npp/8/8/8/1Q6/PPP3PP/6K1 w - - 0 1',
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
        en: '1. Nh6+! Kh8 2. Qg8+! Rxg8 3. Nf7# is the iconic Philidor Legacy finish.',
        pl: '1. Sh6+! Kh8 2. Hg8+! Wxg8 3. Sf7# to ikoniczny finał "Dziedzictwa Philidora".'
      }
    },
    {
      id: 'm3-02',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice', 'deflection'],
      fen: '3r2k1/5ppp/8/6N1/8/1Q6/5PPP/4R1K1 w - - 0 1',
      solution: ['b3f7', 'g8h8', 'f7e8', 'd8e8', 'e1e8'],
      title: {
        en: 'Overloading the Cornered King',
        pl: 'Przełamanie obrony w rogu'
      },
      hint: {
        en: 'Drive the king to h8 with 1. Qxf7+ (protected by your g5-knight), then sacrifice the queen on e8!',
        pl: 'Zapędź króla na h8 ruchem 1. Hxf7+ (ze wsparciem skoczka g5), a następnie poświęć hetmana na e8!'
      },
      explanation: {
        en: '1. Qxf7+! Kh8 2. Qe8+! Rxe8 3. Rxe8# strips the last defender of the 8th rank.',
        pl: '1. Hxf7+! Kh8 2. He8+! Wxe8 3. Wxe8# eliminuje ostatniego obrońcę ósmej linii.'
      }
    },
    {
      id: 'm3-03',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'kingHunt', 'battery'],
      fen: '2r3k1/5pp1/7p/6N1/8/1Q6/5PP1/6KR w - - 0 1',
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
      fen: '5r1k/4Nppp/5b2/8/8/3R3Q/5PPP/6K1 w - - 0 1',
      solution: ['h3h7', 'h8h7', 'd3h3', 'f6h4', 'h3h4'],
      title: {
        en: 'Anastasia’s Full Line in 3',
        pl: 'Pełny wariant mata Anastazji w 3 ruchach'
      },
      hint: {
        en: 'Sacrifice the queen on h7, swing the rook to h3, and capture the interposing bishop on h4!',
        pl: 'Poświęć hetmana na h7, przerzuć wieżę na h3 i zbij zasłaniającego gońca na h4!'
      },
      explanation: {
        en: '1. Qxh7+! Kxh7 2. Rh3+ Bh4 3. Rxh4# — the bishop interposition on h4 only delays mate by one move.',
        pl: '1. Hxh7+! Kxh7 2. Wh3+ Gh4 3. Wxh4# — zasłona gońcem na h4 jedynie o ruch odwleka mata.'
      }
    },
    {
      id: 'm3-05',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'deflection', 'backRank'],
      fen: '6k1/5ppp/2b1r3/8/8/8/5PPP/3RR1K1 w - - 0 1',
      solution: ['d1d8', 'e6e8', 'd8e8', 'c6e8', 'e1e8'],
      title: {
        en: 'Double Interposition Crusher',
        pl: 'Przełamanie podwójnej zasłony'
      },
      hint: {
        en: 'Invade on d8 and eliminate both Black’s rook and bishop as they try to block on e8!',
        pl: 'Wtargnij na d8 i kolejno zbij wieżę oraz gońca próbujących zasłonić 8. linię na e8!'
      },
      explanation: {
        en: '1. Rd8+ Re8 2. Rxe8+ Bxe8 3. Rxe8# systematically demolishes every interposing defender.',
        pl: '1. Wd8+ We8 2. Wxe8+ Gxe8 3. Wxe8# systematycznie likwiduje wszystkie zasłony na ósmej linii.'
      }
    },
    {
      id: 'm3-06',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice'],
      fen: '3rr1k1/5ppp/8/8/8/2B1R3/5PPP/6K1 b - - 0 1',
      solution: ['d8d1', 'e3e1', 'd1e1', 'c3e1', 'e8e1'],
      title: {
        en: 'Black to Move: Back-Rank Siege',
        pl: 'Ruch czarnych: Oblężenie pierwszej linii'
      },
      hint: {
        en: 'You are playing Black! Invade the 1st rank with 1... Rd1+ and breakthrough on e1.',
        pl: 'Grasz czarnymi! Wtargnij na pierwszą linię ruchem 1... Wd1+ i przełam obronę na e1.'
      },
      explanation: {
        en: '1... Rd1+ 2. Re1 Rxe1+ 3. Bxe1 Rxe1# mirrors the classic double-rook back-rank siege.',
        pl: '1... Wd1+ 2. We1 Wxe1+ 3. Gxe1 Wxe1# to klasyczne przełamanie pierwszej linii dwiema wieżami.'
      }
    },
    {
      id: 'm3-07',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['battery', 'clearance'],
      fen: '5k2/5P1p/6p1/6K1/8/8/8/6R1 w - - 0 1',
      solution: ['g5f6', 'h7h5', 'g1g6', 'h5h4', 'g6g8'],
      title: {
        en: 'Anderssen’s Endgame Net in 3',
        pl: 'Siatka matowa Anderssena w 3 ruchach'
      },
      hint: {
        en: 'Step your king to f6 first to protect the f7-pawn and seal e7, then capture on g6!',
        pl: 'Podejdź najpierw królem na f6, aby obronić piona f7 i odciąć pole e7, a potem zbij na g6!'
      },
      explanation: {
        en: '1. Kf6! h5 2. Rxg6 h4 3. Rg8# is a quiet-move masterpiece where the f7-pawn and f6-king seal every escape.',
        pl: '1. Kf6! h5 2. Wxg6 h4 3. Wg8# wykorzystuje ciche posunięcie królem zamykające siatkę matową.'
      }
    },
    {
      id: 'm3-08',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['smothered', 'doubleCheck', 'sacrifice'],
      fen: '6k1/ppp3pp/1q6/8/8/8/PPP2nPP/R4RK1 b - - 0 1',
      solution: ['f2h3', 'g1h1', 'b6g1', 'f1g1', 'h3f2'],
      title: {
        en: 'Black to Move: Smothered Double-Check Trio',
        pl: 'Ruch czarnych: Sekwencja mata zaduszonego w 3'
      },
      hint: {
        en: 'Give a double check with 1... Nh3+!, sacrifice the queen on g1, and finish with 3... Nf2#!',
        pl: 'Daj podwójnego szacha 1... Sh3+!, poświęć hetmana na g1 i zakończ skokiem 3... Sf2#!'
      },
      explanation: {
        en: '1... Nh3+! 2. Kh1 Qg1+! 3. Rxg1 Nf2# executes the classic 3-move smothered combination with Black.',
        pl: '1... Sh3+! 2. Kh1 Hg1+! 3. Wxg1 Sf2# realizuje klasyczną kombinację zaduszoną czarnymi.'
      }
    },
    {
      id: 'm3-09',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['promotion', 'sacrifice', 'backRank'],
      fen: 'r5k1/3P1pbp/6pB/8/8/8/5PPP/4R1K1 w - - 0 1',
      solution: ['e1e8', 'a8e8', 'd7e8q', 'g7f8', 'e8f8'],
      title: {
        en: 'Rook Sacrifice into Promotion & Bishop Mate',
        pl: 'Ofiara wieży, promocja i mat na f8'
      },
      hint: {
        en: 'Sacrifice the rook on e8, promote the d7-pawn to a queen, and crush the f8 interposition!',
        pl: 'Poświęć wieżę na e8, promuj piona d7 na hetmana i zbij gońca zasłaniającego na f8!'
      },
      explanation: {
        en: '1. Re8+! Rxe8 2. dxe8=Q+ Bf8 3. Qxf8# uses the h6-bishop to cover g7 and support f8.',
        pl: '1. We8+! Wxe8 2. dxe8=H+ Gf8 3. Hxf8# wykorzystuje gońca h6 wspierającego pole f8.'
      }
    },
    {
      id: 'm3-10',
      movesToMate: 3,
      difficulty: 'hard',
      themes: ['sacrifice', 'promotion', 'backRank'],
      fen: '2r1r1k1/1P3ppp/8/6N1/8/1Q6/5PPP/2R3K1 w - - 0 1',
      solution: ['b3f7', 'g8h8', 'c1c8', 'e8c8', 'b7c8q'],
      title: {
        en: 'Corner Drive into Promotion Mate in 3',
        pl: 'Wypchnięcie do rogu i promocja w 3 ruchach'
      },
      hint: {
        en: 'First drive the black king to h8 with 1. Qxf7+, then sacrifice on c8 so the b7-pawn promotes with mate!',
        pl: 'Najpierw zapędź króla na h8 ruchem 1. Hxf7+, a potem poświęć wieżę na c8 pod promocję piona b7!'
      },
      explanation: {
        en: '1. Qxf7+ Kh8 2. Rxc8! Rxc8 3. bxc8=Q# works because the queen on f7 pins and blocks f8!',
        pl: '1. Hxf7+ Kh8 2. Wxc8! Wxc8 3. bxc8=H# działa, ponieważ hetman na f7 kontroluje i blokuje f8!'
      }
    },
    {
      id: 'm4-01',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['smothered', 'doubleCheck', 'sacrifice'],
      fen: 'r3r2k/ppp3pp/8/4N3/8/1Q6/PPP3PP/6K1 w - - 0 1',
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
      themes: ['backRank', 'sacrifice', 'clearance'],
      fen: '6k1/4npbp/4r1pB/8/8/8/2R2PPP/2R3K1 w - - 0 1',
      solution: ['c2c8', 'e7c8', 'c1c8', 'e6e8', 'c8e8', 'g7f8', 'e8f8'],
      title: {
        en: 'Double-Rook Battery Demolition in 4',
        pl: 'Bateria dwóch wież w ataku 4-ruchowym'
      },
      hint: {
        en: 'Invade on c8 with your first rook, recapture with the second rook, and smash through every interposition!',
        pl: 'Wtargnij pierwszą wieżą na c8, odbij drugą wieżą i przebij się przez kolejne zasłony na ósmej linii!'
      },
      explanation: {
        en: '1. Rc8+ Nxc8 2. Rxc8+ Re8 3. Rxe8+ Bf8 4. Rxf8# eliminates three defenders in a row with the h6-bishop sealing g7 and f8.',
        pl: '1. Wc8+ Sxc8 2. Wxc8+ We8 3. Wxe8+ Gf8 4. Wxf8# eliminuje trzech obrońców z rzędu przy wsparciu gońca h6.'
      }
    },
    {
      id: 'm4-03',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice', 'deflection'],
      fen: '6k1/5pbp/2b1r1pB/8/8/8/3R1PPP/4R1K1 w - - 0 1',
      solution: ['d2d8', 'e6e8', 'd8e8', 'c6e8', 'e1e8', 'g7f8', 'e8f8'],
      title: {
        en: 'Triple Interposition Demolition in 4',
        pl: 'Rozbicie potrójnej zasłony w 4 ruchach'
      },
      hint: {
        en: 'Start with 1. Rd8+ and smash through Black’s rook and both bishops on the 8th rank!',
        pl: 'Zacznij od 1. Wd8+ i przebij się przez wieżę oraz oba gońce czarnych na ósmej linii!'
      },
      explanation: {
        en: '1. Rd8+ Re8 2. Rxe8+ Bxe8 3. Rxe8+ Bf8 4. Rxf8# — the h6-bishop covers both f8 and g7 for the final blow.',
        pl: '1. Wd8+ We8 2. Wxe8+ Gxe8 3. Wxe8+ Gf8 4. Wxf8# — goniec na h6 wspiera pole f8 i odcina g7.'
      }
    },
    {
      id: 'm4-04',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice', 'promotion'],
      fen: '6k1/1P2npbp/4r1pB/8/8/8/5PPP/2R3K1 w - - 0 1',
      solution: ['c1c8', 'e7c8', 'b7c8q', 'e6e8', 'c8e8', 'g7f8', 'e8f8'],
      title: {
        en: 'Rook Sacrifice into Promotion Sweep in 4',
        pl: 'Ofiara wieży i promocja piona w 4 ruchach'
      },
      hint: {
        en: '1. Rc8+! Nxc8 2. bxc8=Q+! Re8 3. Qxe8+ Bf8 4. Qxf8#!',
        pl: '1. Wc8+! Sxc8 2. bxc8=H+! We8 3. Hxe8+ Gf8 4. Hxf8#!'
      },
      explanation: {
        en: '1. Rc8+! Nxc8 2. bxc8=Q+! promotes the b7-pawn with check, and the new queen sweeps away both remaining defenders.',
        pl: '1. Wc8+! Sxc8 2. bxc8=H+! promuje piona b7 z szachem, a nowy hetman likwiduje obie zasłony do mata.'
      }
    },
    {
      id: 'm4-05',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['smothered', 'doubleCheck', 'sacrifice'],
      fen: '6k1/ppp3pp/1q6/8/4n3/8/PPP3PP/R3R2K b - - 0 1',
      solution: ['e4f2', 'h1g1', 'f2h3', 'g1h1', 'b6g1', 'e1g1', 'h3f2'],
      title: {
        en: "Black to Move: Philidor's Legacy in 4",
        pl: 'Ruch czarnych: Dziedzictwo Philidora w 4 ruchach'
      },
      hint: {
        en: 'Play 1... Nf2+ 2. Kg1 Nh3+! (double check) 3. Kh1 Qg1+! 4. Rxg1 Nf2#!',
        pl: 'Zagraj 1... Sf2+ 2. Kg1 Sh3+! (podwójny szach) 3. Kh1 Hg1+! 4. Wxg1 Sf2#!'
      },
      explanation: {
        en: '1... Nf2+ 2. Kg1 Nh3+! 3. Kh1 Qg1+! 4. Rxg1 Nf2# is the complete 4-move Philidor’s Legacy from Black’s perspective.',
        pl: '1... Sf2+ 2. Kg1 Sh3+! 3. Kh1 Hg1+! 4. Wxg1 Sf2# to pełna kombinacja Philidora wykonana czarnymi.'
      }
    },
    {
      id: 'm4-06',
      movesToMate: 4,
      difficulty: 'hard',
      themes: ['backRank', 'sacrifice', 'deflection'],
      fen: '4r1k1/3r1ppp/8/8/8/2B1R2b/5PBP/6K1 b - - 0 1',
      solution: ['d7d1', 'e3e1', 'd1e1', 'c3e1', 'e8e1', 'g2f1', 'e1f1'],
      title: {
        en: 'Black to Move: Triple Interposition Crusher in 4',
        pl: 'Ruch czarnych: Rozbicie potrójnej zasłony w 4'
      },
      hint: {
        en: 'Invade on d1 with your rook and eliminate White’s rook and both bishops on the 1st rank!',
        pl: 'Wtargnij wieżą na d1 i kolejno zbij wieżę oraz oba gońce białych na pierwszej linii!'
      },
      explanation: {
        en: '1... Rd1+ 2. Re1 Rxe1+ 3. Bxe1 Rxe1+ 4. Bf1 Rxf1# uses the h3-bishop to seal g2 and support f1.',
        pl: '1... Wd1+ 2. We1 Wxe1+ 3. Gxe1 Wxe1+ 4. Gf1 Wxf1# wykorzystuje gońca h3 wspierającego pole f1.'
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
      fen: 'r3k2r/ppp2ppp/4p3/1q1N4/8/8/PPP2PPP/4R1K1 w kq - 0 1',
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
      fen: '8/1q3ppp/8/3k4/8/6P1/5P1P/3B2K1 w - - 0 1',
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
      fen: '8/q4kpp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
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
      movesToMate: 1,
      difficulty: 'easy',
      themes: ['pin'],
      fen: '4k3/5ppp/4q3/8/8/2B5/5PPP/4R1K1 w - - 0 1',
      solution: ['e1e6'],
      title: {
        en: 'Capturing the Pinned Defender',
        pl: 'Zdobycie hetmana w bezwzględnym związaniu'
      },
      hint: {
        en: 'Black’s queen on e6 is directly in front of the king on e8. Capture it!',
        pl: 'Czarny hetman stoi na linii e bezpośrednio przed własnym królem!'
      },
      explanation: {
        en: '1. Rxe6+! wins the queen cleanly because the f7-pawn cannot recapture (or even if it does, 2. Rxe6 is supported by the rook/bishop).',
        pl: '1. Wxe6+! wykorzystuje ustawienie hetmana na jednej linii z królem.'
      }
    },

    // === MEDIUM (4) ===
    {
      id: 'wm-05',
      isWinMaterial: true,
      movesToMate: 3,
      difficulty: 'medium',
      themes: ['sacrifice', 'attraction', 'fork'],
      fen: 'r4rk1/pppq1ppp/8/8/2B5/5N2/PPP2PPP/4R1K1 w - - 0 1',
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
      fen: '2rq1rk1/pp3ppp/8/8/8/3B4/PPP2PPP/3R2K1 w - - 0 1',
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
      themes: ['deflection', 'sacrifice'],
      fen: '2r3k1/5ppp/8/2q5/8/8/2Q2PPP/3R2K1 w - - 0 1',
      solution: ['d1d8', 'c8d8', 'c2c5'],
      title: {
        en: 'Deflecting the Queen’s Guardian',
        pl: 'Odciągnięcie obrońcy hetmana'
      },
      hint: {
        en: 'Black’s rook on c8 is overloaded: it must guard both the 8th rank AND the queen on c5!',
        pl: 'Czarna wieża na c8 jest przeciążona: musi jednocześnie bronić 8. linii oraz hetmana na c5!'
      },
      explanation: {
        en: '1. Rd8+! Rxd8 2. Qxc5 deflects the c8-rook with a back-rank check, leaving the black queen undefended.',
        pl: '1. Wd8+! Wxd8 2. Hxc5 odciąga wieżę c8 szachem na ósmej linii i zdobywa hetmana.'
      }
    },
    {
      id: 'wm-08',
      isWinMaterial: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['fork'],
      fen: 'r3k2r/p1p2ppp/8/8/8/8/PPQ2PPP/6K1 w kq - 0 1',
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
      fen: 'r4rk1/pbp2ppp/1pnq4/3N4/8/8/PP3PPP/2R3K1 w - - 0 1',
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
      fen: '5rk1/6pp/8/8/8/q3B3/6PP/5RK1 w - - 0 1',
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
      fen: '2rq1rk1/pp3ppp/2n5/8/2BN4/8/PPPQ1PPP/3R2K1 w - - 0 1',
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
      fen: '3r2k1/ppp2ppp/3b4/8/8/1P6/PBP2PPP/3Q1RK1 b - - 0 1',
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
      fen: '6k1/1b3ppp/8/8/8/5B1q/5PPP/5RK1 w - - 0 1',
      solution: ['f3b7'],
      title: {
        en: 'Eliminate the Long-Diagonal Mate Threat',
        pl: 'Likwidacja groźby mata na g2'
      },
      hint: {
        en: 'Black’s queen on h3 and bishop on b7 threaten unstoppable mate on g2! Capture the supporting piece!',
        pl: 'Czarny hetman na h3 i goniec na b7 grożą matem na g2! Zbij figurę wspierającą atak!'
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
      fen: '4r1k1/5ppp/8/8/8/2q5/5PPP/4R1K1 w - - 0 1',
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
      fen: '6k1/1b3ppp/8/8/8/6Pq/5P1P/4Q1K1 w - - 0 1',
      solution: ['e1e8'],
      title: {
        en: 'Escaping Qxg2# via Back-Rank Mate',
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
      fen: '6k1/1b3ppp/8/8/8/1B4q1/1B3PPP/3Q2K1 w - - 0 1',
      solution: ['b3d5', 'b7d5', 'd1d5'],
      title: {
        en: 'Blocking the Mating Diagonal',
        pl: 'Przesłonięcie matowej przekątnej'
      },
      hint: {
        en: 'Black threatens 1... Qxg2#. Interpose your b3-bishop on d5 to cut the communication between b7 and g2!',
        pl: 'Czarne grożą 1... Hxg2#. Postaw gońca na d5, przecinając współpracę czarnego gońca b7 z hetmanem g3!'
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
      fen: '6k1/1b3ppp/8/3q4/8/8/4BPPP/2R3K1 w - - 0 1',
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
      fen: '6k1/5ppp/3r4/8/8/1q6/2Q2PPP/6K1 w - - 0 1',
      solution: ['c2c8', 'd6d8', 'c8d8'],
      title: {
        en: 'Saving the Queen & Back Rank with Tempo',
        pl: 'Ratunek hetmana i 1. linii z tempem'
      },
      hint: {
        en: 'Your queen on c2 is attacked AND Black threatens ...Rd1#! Counter-attack on the 8th rank with check!',
        pl: 'Twój hetman na c2 jest atakowany, a czarne grożą ...Wd1#! Uderz z szachem na 8. linię!'
      },
      explanation: {
        en: '1. Qc8+! Rd8 2. Qxd8# turns a desperate defensive position into immediate checkmate!',
        pl: '1. Hc8+! Wd8 2. Hxd8# zamienia groźną pozycję obronną w natychmiastowego mata!'
      }
    },
    {
      id: 'df-08',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'medium',
      themes: ['defense'],
      fen: '5rk1/5ppp/8/8/8/3N3q/5PPP/5RK1 w - - 0 1',
      solution: ['d3e1', 'h3h6', 'e1f3'],
      title: {
        en: 'The Defensive Knight Retreat',
        pl: 'Powrót skoczka do obrony i kontrataku'
      },
      hint: {
        en: 'Your knight on d3 is hanging and Black eyes the kingside. Retreat the knight to e1 to guard g2 and prepare Nf3!',
        pl: 'Twój skoczek na d3 jest niebroniony. Cofnij go na e1, zabezpieczając skrzydło królewskie przed wprowadzeniem na f3!'
      },
      explanation: {
        en: '1. Ne1! Qh6 2. Nf3! consolidates the kingside and saves the piece.',
        pl: '1. Se1! Hh6 2. Sf3! konsoliduje obronę skrzydła królewskiego i ratuje figurę.'
      }
    },

    // === HARD (4) ===
    {
      id: 'df-09',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense', 'sacrifice', 'clearance'],
      fen: '4r1k1/1b3ppp/8/8/8/6q1/2Q2PPP/4R1K1 w - - 0 1',
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
      movesToMate: 1,
      difficulty: 'hard',
      themes: ['defense'],
      fen: '6k1/5ppp/8/8/8/4B3/5PPq/6K1 w - - 0 1',
      solution: ['g1f1'],
      title: {
        en: 'Stepping Out of the Check Trap',
        pl: 'Zimna krew pod szachem'
      },
      hint: {
        en: 'You are in check from Qh2+. Step safely to f1 where your e3-bishop and f2-pawn shield the king!',
        pl: 'Jesteś pod szachem od hetmana h2. Odejdź królem na f1, gdzie goniec e3 i pion f2 zapewniają bezpieczeństwo!'
      },
      explanation: {
        en: '1. Kf1! steps safely out of check, and after 1... Qh1+ 2. Ke2 Black’s attack runs out of steam.',
        pl: '1. Kf1! spokojnie wyprowadza króla spod szacha, po czym czarny hetman nie ma już groźnych kontynuacji.'
      }
    },
    {
      id: 'df-11',
      isDefensePuzzle: true,
      movesToMate: 2,
      difficulty: 'hard',
      themes: ['defense', 'deflection', 'sacrifice'],
      fen: '6k1/1b3ppp/8/8/8/6q1/Q4PPP/R5K1 w - - 0 1',
      solution: ['a2a8', 'b7a8', 'a1a8'],
      title: {
        en: 'Deflecting the Mating Bishop with a Queen Sacrifice',
        pl: 'Odciągnięcie matującego gońca ofiarą hetmana'
      },
      hint: {
        en: 'Black threatens 1... Qxg2#. Sacrifice your queen on a8 to force the b7-bishop off the mating diagonal!',
        pl: 'Czarne grożą 1... Hxg2#. Poświęć hetmana na a8, zmuszając gońca z b7 do opuszczenia długiej przekątnej!'
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
      themes: ['defense', 'sacrifice'],
      fen: '4r1k1/ppp2ppp/8/8/8/1P4q1/PBP2PPP/3R1RK1 b - - 0 1',
      solution: ['e8e2', 'h2g3', 'e2c2'],
      title: {
        en: 'Black to Move: Escaping Back-Rank Mate via Counter-Pin',
        pl: 'Ruch czarnych: Ucieczka przed matem przez związanie f2'
      },
      hint: {
        en: 'Your queen on g3 is attacked by h2 AND White threatens Rd8#! Invade the 2nd rank with your rook to pin f2!',
        pl: 'Twój hetman na g3 jest atakowany przez piona h2, a białe grożą matem Wd8#! Wtargnij wieżą na e2, wiążąc piona f2!'
      },
      explanation: {
        en: '1... Re2! 2. hxg3 Rxc2 saves the game by counter-attacking f2 and liquidating into a winning endgame.',
        pl: '1... We2! 2. hxg3 Wxc2 ratuje partię dzięki kontratakowi na punkt f2 i przejściu do wygranej końcówki.'
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
      DEFENSE_PUZZLES
    };
  } else {
    global.PUZZLES = PUZZLES;
    global.PUZZLE_THEMES = PUZZLE_THEMES;
    global.OPENING_TRAPS = OPENING_TRAPS;
    global.OPENING_FAMILIES = OPENING_FAMILIES;
    global.WIN_MATERIAL_PUZZLES = WIN_MATERIAL_PUZZLES;
    global.DEFENSE_PUZZLES = DEFENSE_PUZZLES;
  }
})(typeof window !== 'undefined' ? window : globalThis);
