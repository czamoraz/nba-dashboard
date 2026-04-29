/* ================================================================
   OKC.js — Oklahoma City Thunder · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Oklahoma City Thunder",
  abbr:          "OKC",
  conference:    "West",
  primaryColor:  "#007AC1",
  secondaryColor:"#EF3B24",
  subtitleText:  "Performance Dashboard · 2020-21 → 2025-26",
};

/* ── Helper interno ──────────────────────────────────────────── */
function buildGames(resStr, opps, scores, margins) {
  const res = resStr.split("");
  let w = 0, l = 0;
  return res.map((r, i) => {
    if (r === "W") w++; else l++;
    const m  = margins[i % margins.length];
    const pf = scores[i % scores.length];
    const pa = pf - m;
    return { n: i + 1, r, pf, pa, opp: opps[i % opps.length] || "OPP", w, l, m };
  });
}

/* ── Datos por temporada ─────────────────────────────────────── */
window.SEASON_DATA = {

  "2020-21": {
    w: 22, l: 50,
    topW:   { pts: 104, opp: 87, against: "Houston Rockets" },
    worstL: { pts: 95, opp: 152, against: "Indiana Pacers" },
    conf_rank: 14,
    games: buildGames(
      "WLLLWLWWWLLWLLLWWLLWLWLLLWLLLWLWWLLWWLWLLWWLLLWLLLLLLLLLLLLLLWLLLLLLLLLW",
      ["Charlotte Hornets", "Utah Jazz", "Orlando Magic", "New Orleans Pelicans", "Orlando Magic", "Miami Heat", "New Orleans Pelicans", "New York Knicks", "Brooklyn Nets", "San Antonio Spurs", "Los Angeles Lakers", "Chicago Bulls", "Denver Nuggets", "Los Angeles Clippers", "Los Angeles Clippers", "Portland Trail Blazers", "Phoenix Suns", "Brooklyn Nets", "Houston Rockets", "Houston Rockets", "Minnesota Timberwolves", "Minnesota Timberwolves", "Los Angeles Lakers", "Los Angeles Lakers", "Denver Nuggets", "Milwaukee Bucks", "Portland Trail Blazers", "Memphis Grizzlies", "Milwaukee Bucks", "Cleveland Cavaliers", "Miami Heat", "San Antonio Spurs", "Atlanta Hawks", "Denver Nuggets", "Dallas Mavericks", "San Antonio Spurs", "Dallas Mavericks", "New York Knicks", "Memphis Grizzlies", "Chicago Bulls", "Atlanta Hawks", "Houston Rockets", "Minnesota Timberwolves", "Memphis Grizzlies", "Boston Celtics", "Dallas Mavericks", "Toronto Raptors", "Phoenix Suns", "Portland Trail Blazers", "Detroit Pistons", "Charlotte Hornets", "Cleveland Cavaliers", "Philadelphia 76ers", "Utah Jazz", "Golden State Warriors", "Detroit Pistons", "Toronto Raptors", "Washington Wizards", "Indiana Pacers", "Washington Wizards", "Philadelphia 76ers", "Boston Celtics", "New Orleans Pelicans", "Indiana Pacers", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Golden State Warriors", "Sacramento Kings", "Sacramento Kings", "Utah Jazz", "Los Angeles Clippers"],
      [109, 109, 107, 80, 108, 90, 111, 101, 129, 102, 99, 127, 101, 106, 100, 125, 102, 125, 106, 104, 103, 120, 112, 113, 95, 114, 104, 113, 85, 117, 94, 102, 118, 96, 78, 107, 116, 97, 128, 102, 93, 114, 112, 107, 94, 106, 113, 103, 85, 108, 102, 102, 93, 96, 109, 104, 106, 107, 116, 109, 90, 119, 95, 95, 120, 99, 97, 97, 98, 106, 93, 117],
      [2, -1, -11, -33, 9, -28, 1, 12, 13, -10, -29, 2, -18, -14, -8, 3, 5, -22, -30, 17, -3, 2, -7, -1, -2, 5, -11, -9, -13, 16, -14, 3, 9, -30, -9, 5, 8, -22, 6, -21, -23, 2, 9, -9, -17, -21, 10, -37, -48, -24, -11, -27, -24, -10, -38, -6, -6, -12, -6, -20, -31, 4, -14, -57, -3, -4, -21, -39, -28, -16, -16, 5]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 23.7, all: [{"name": "Shai Gilgeous-Alexander", "val": 23.7}, {"name": "Al Horford", "val": 14.2}, {"name": "Luguentz Dort", "val": 14.0}, {"name": "Darius Bazley", "val": 13.7}, {"name": "Hamidou Diallo", "val": 11.9}, {"name": "George Hill", "val": 11.8}, {"name": "Ty Jerome", "val": 10.7}, {"name": "Svi Mykhailiuk", "val": 10.3}, {"name": "Théo Maledon", "val": 10.1}, {"name": "Mike Muscala", "val": 9.7}, {"name": "Tony Bradley", "val": 8.7}, {"name": "Isaiah Roby", "val": 8.7}, {"name": "Moses Brown", "val": 8.6}, {"name": "Gabriel Deck", "val": 8.4}, {"name": "Aleksej Pokusevski", "val": 8.2}, {"name": "Kenrich Williams", "val": 8.0}, {"name": "Justin Jackson", "val": 7.2}, {"name": "Jaylen Hoard", "val": 6.1}, {"name": "Charlie Brown Jr.", "val": 4.4}, {"name": "Josh Hall", "val": 4.1}, {"name": "Darius Miller", "val": 4.1}, {"name": "Justin Robinson", "val": 2.3}] },
      reb: { name: "Moses Brown", val: 8.9, all: [{"name": "Moses Brown", "val": 8.9}, {"name": "Darius Bazley", "val": 7.2}, {"name": "Al Horford", "val": 6.7}, {"name": "Tony Bradley", "val": 6.1}, {"name": "Isaiah Roby", "val": 5.6}, {"name": "Hamidou Diallo", "val": 5.2}, {"name": "Shai Gilgeous-Alexander", "val": 4.7}, {"name": "Aleksej Pokusevski", "val": 4.7}, {"name": "Kenrich Williams", "val": 4.1}, {"name": "Gabriel Deck", "val": 4.0}, {"name": "Mike Muscala", "val": 3.8}, {"name": "Luguentz Dort", "val": 3.6}, {"name": "Jaylen Hoard", "val": 3.4}, {"name": "Théo Maledon", "val": 3.2}, {"name": "Svi Mykhailiuk", "val": 3.0}, {"name": "Ty Jerome", "val": 2.8}, {"name": "Josh Hall", "val": 2.8}, {"name": "Justin Jackson", "val": 2.2}, {"name": "George Hill", "val": 2.1}, {"name": "Charlie Brown Jr.", "val": 1.9}, {"name": "Darius Miller", "val": 1.3}, {"name": "Justin Robinson", "val": 0.8}] },
      ast: { name: "Shai Gilgeous-Alexander", val: 5.9, all: [{"name": "Shai Gilgeous-Alexander", "val": 5.9}, {"name": "Ty Jerome", "val": 3.6}, {"name": "Théo Maledon", "val": 3.5}, {"name": "Al Horford", "val": 3.4}, {"name": "George Hill", "val": 3.1}, {"name": "Gabriel Deck", "val": 2.4}, {"name": "Hamidou Diallo", "val": 2.4}, {"name": "Kenrich Williams", "val": 2.3}, {"name": "Aleksej Pokusevski", "val": 2.2}, {"name": "Isaiah Roby", "val": 1.8}, {"name": "Svi Mykhailiuk", "val": 1.8}, {"name": "Darius Bazley", "val": 1.8}, {"name": "Luguentz Dort", "val": 1.7}, {"name": "Justin Jackson", "val": 1.5}, {"name": "Jaylen Hoard", "val": 1.3}, {"name": "Josh Hall", "val": 1.3}, {"name": "Darius Miller", "val": 1.2}, {"name": "Charlie Brown Jr.", "val": 1.0}, {"name": "Justin Robinson", "val": 1.0}, {"name": "Tony Bradley", "val": 0.9}, {"name": "Mike Muscala", "val": 0.8}, {"name": "Moses Brown", "val": 0.2}] },
      stl: { name: "Hamidou Diallo", val: 1.0, all: [{"name": "Hamidou Diallo", "val": 1.0}, {"name": "Isaiah Roby", "val": 0.9}, {"name": "Luguentz Dort", "val": 0.9}, {"name": "Al Horford", "val": 0.9}, {"name": "Théo Maledon", "val": 0.9}, {"name": "George Hill", "val": 0.9}, {"name": "Shai Gilgeous-Alexander", "val": 0.8}, {"name": "Gabriel Deck", "val": 0.8}, {"name": "Svi Mykhailiuk", "val": 0.8}, {"name": "Kenrich Williams", "val": 0.8}, {"name": "Moses Brown", "val": 0.7}, {"name": "Jaylen Hoard", "val": 0.7}, {"name": "Darius Miller", "val": 0.7}, {"name": "Ty Jerome", "val": 0.6}, {"name": "Darius Bazley", "val": 0.5}, {"name": "Justin Jackson", "val": 0.5}, {"name": "Aleksej Pokusevski", "val": 0.4}, {"name": "Tony Bradley", "val": 0.4}, {"name": "Charlie Brown Jr.", "val": 0.4}, {"name": "Justin Robinson", "val": 0.3}, {"name": "Mike Muscala", "val": 0.2}, {"name": "Josh Hall", "val": 0.2}] },
      blk: { name: "Moses Brown", val: 1.1, all: [{"name": "Moses Brown", "val": 1.1}, {"name": "Al Horford", "val": 0.9}, {"name": "Aleksej Pokusevski", "val": 0.9}, {"name": "Tony Bradley", "val": 0.8}, {"name": "Shai Gilgeous-Alexander", "val": 0.7}, {"name": "Isaiah Roby", "val": 0.6}, {"name": "Darius Bazley", "val": 0.5}, {"name": "Luguentz Dort", "val": 0.4}, {"name": "Hamidou Diallo", "val": 0.4}, {"name": "Darius Miller", "val": 0.3}, {"name": "Jaylen Hoard", "val": 0.3}, {"name": "Mike Muscala", "val": 0.3}, {"name": "Kenrich Williams", "val": 0.3}, {"name": "Svi Mykhailiuk", "val": 0.2}, {"name": "Ty Jerome", "val": 0.2}, {"name": "Charlie Brown Jr.", "val": 0.2}, {"name": "Théo Maledon", "val": 0.2}, {"name": "George Hill", "val": 0.1}, {"name": "Justin Jackson", "val": 0.1}, {"name": "Gabriel Deck", "val": 0.0}, {"name": "Josh Hall", "val": 0.0}, {"name": "Justin Robinson", "val": 0.0}] },
    },
    avail: [
      { name: "Kenrich Williams", g: 66 },
      { name: "Théo Maledon", g: 65 },
      { name: "Isaiah Roby", g: 61 },
      { name: "Darius Bazley", g: 55 },
      { name: "Luguentz Dort", g: 52 },
      { name: "Aleksej Pokusevski", g: 45 },
      { name: "Moses Brown", g: 43 },
      { name: "Mike Muscala", g: 35 },
      { name: "Shai Gilgeous-Alexander", g: 35 },
      { name: "Ty Jerome", g: 33 },
      { name: "Justin Jackson", g: 33 },
      { name: "Hamidou Diallo", g: 32 },
      { name: "Svi Mykhailiuk", g: 30 },
      { name: "Al Horford", g: 28 },
      { name: "Tony Bradley", g: 22 },
      { name: "Josh Hall", g: 21 },
      { name: "Jaylen Hoard", g: 19 },
      { name: "Darius Miller", g: 18 },
      { name: "George Hill", g: 14 },
      { name: "Gabriel Deck", g: 10 },
      { name: "Charlie Brown Jr.", g: 9 },
      { name: "Justin Robinson", g: 9 },
    ]
  },

  "2021-22": {
    w: 24, l: 58,
    topW:   { pts: 130, opp: 109, against: "Brooklyn Nets" },
    worstL: { pts: 79, opp: 152, against: "Memphis Grizzlies" },
    conf_rank: 14,
    games: buildGames(
      "LLLLWLLWWWWLLWLLLLLLLLWWLLLWWWLWLLWLLLLLWLLLLLLLWWWLLLLLWLLWLWLLLLLLLLLLWLWLLWWLLL",
      ["Utah Jazz", "Houston Rockets", "Philadelphia 76ers", "Golden State Warriors", "Los Angeles Lakers", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "San Antonio Spurs", "New Orleans Pelicans", "Sacramento Kings", "Brooklyn Nets", "Miami Heat", "Houston Rockets", "Milwaukee Bucks", "Boston Celtics", "Atlanta Hawks", "Utah Jazz", "Washington Wizards", "Houston Rockets", "Houston Rockets", "Memphis Grizzlies", "Detroit Pistons", "Toronto Raptors", "Los Angeles Lakers", "Dallas Mavericks", "New Orleans Pelicans", "Los Angeles Clippers", "Memphis Grizzlies", "Denver Nuggets", "Phoenix Suns", "New Orleans Pelicans", "Sacramento Kings", "Phoenix Suns", "New York Knicks", "Dallas Mavericks", "Minnesota Timberwolves", "Minnesota Timberwolves", "Denver Nuggets", "Washington Wizards", "Brooklyn Nets", "Cleveland Cavaliers", "Dallas Mavericks", "San Antonio Spurs", "Charlotte Hornets", "Cleveland Cavaliers", "Chicago Bulls", "Indiana Pacers", "Portland Trail Blazers", "Dallas Mavericks", "Portland Trail Blazers", "Sacramento Kings", "Golden State Warriors", "Toronto Raptors", "Philadelphia 76ers", "Chicago Bulls", "New York Knicks", "San Antonio Spurs", "Phoenix Suns", "Indiana Pacers", "Sacramento Kings", "Denver Nuggets", "Minnesota Timberwolves", "Utah Jazz", "Milwaukee Bucks", "Minnesota Timberwolves", "Memphis Grizzlies", "Charlotte Hornets", "San Antonio Spurs", "Miami Heat", "Orlando Magic", "Boston Celtics", "Orlando Magic", "Denver Nuggets", "Portland Trail Blazers", "Atlanta Hawks", "Detroit Pistons", "Phoenix Suns", "Portland Trail Blazers", "Utah Jazz", "Los Angeles Lakers", "Los Angeles Clippers"],
      [86, 91, 103, 98, 123, 82, 94, 107, 99, 108, 105, 96, 90, 101, 89, 105, 101, 104, 99, 89, 110, 79, 114, 110, 95, 84, 110, 104, 102, 108, 101, 117, 111, 97, 95, 86, 90, 105, 95, 118, 130, 102, 102, 96, 98, 87, 110, 110, 98, 120, 96, 103, 98, 98, 87, 101, 127, 106, 104, 129, 110, 119, 101, 103, 115, 102, 118, 116, 120, 108, 85, 123, 118, 107, 134, 118, 101, 117, 98, 101, 101, 88],
      [-21, -33, -12, -8, 8, -21, -5, 3, 5, 8, 2, -24, -13, 12, -7, -6, -12, -6, -2, -13, -4, -73, 11, 1, -21, -19, -3, 1, 3, 14, -12, 5, -6, -18, 15, -9, -8, -30, -4, -4, 21, -5, -2, -22, -23, -7, -1, -3, 17, 6, 3, -10, -12, -19, -13, -5, 4, -8, -20, 4, -21, 12, -37, -13, -27, -30, -7, -18, -2, -12, -5, -9, 16, -6, 3, -18, -9, 21, 4, -36, -19, -50]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 24.5, all: [{"name": "Shai Gilgeous-Alexander", "val": 24.5}, {"name": "Georgios Kalaitzakis", "val": 17.5}, {"name": "Luguentz Dort", "val": 17.2}, {"name": "Jaylen Hoard", "val": 14.7}, {"name": "Josh Giddey", "val": 12.5}, {"name": "Zavier Simpson", "val": 11.0}, {"name": "Darius Bazley", "val": 10.8}, {"name": "Melvin Frazier", "val": 10.7}, {"name": "Tre Mann", "val": 10.4}, {"name": "Isaiah Roby", "val": 10.1}, {"name": "Aaron Wiggins", "val": 8.3}, {"name": "Lindy Waters III", "val": 8.0}, {"name": "Mike Muscala", "val": 8.0}, {"name": "Aleksej Pokusevski", "val": 7.6}, {"name": "Jeremiah Robinson-Earl", "val": 7.5}, {"name": "Kenrich Williams", "val": 7.4}, {"name": "Théo Maledon", "val": 7.1}, {"name": "Ty Jerome", "val": 7.1}, {"name": "Olivier Sarr", "val": 7.0}, {"name": "Vít Krejčí", "val": 6.2}, {"name": "Derrick Favors", "val": 5.3}, {"name": "Mamadi Diakite", "val": 4.3}, {"name": "Scotty Hopson", "val": 4.0}, {"name": "Paul Watson", "val": 3.4}, {"name": "Gabriel Deck", "val": 2.6}, {"name": "Rob Edwards", "val": 1.5}] },
      reb: { name: "Jaylen Hoard", val: 12.0, all: [{"name": "Jaylen Hoard", "val": 12.0}, {"name": "Josh Giddey", "val": 7.8}, {"name": "Darius Bazley", "val": 6.3}, {"name": "Jeremiah Robinson-Earl", "val": 5.6}, {"name": "Zavier Simpson", "val": 5.3}, {"name": "Aleksej Pokusevski", "val": 5.2}, {"name": "Shai Gilgeous-Alexander", "val": 5.0}, {"name": "Isaiah Roby", "val": 4.8}, {"name": "Derrick Favors", "val": 4.7}, {"name": "Kenrich Williams", "val": 4.5}, {"name": "Mamadi Diakite", "val": 4.5}, {"name": "Melvin Frazier", "val": 4.3}, {"name": "Luguentz Dort", "val": 4.2}, {"name": "Olivier Sarr", "val": 4.2}, {"name": "Aaron Wiggins", "val": 3.6}, {"name": "Vít Krejčí", "val": 3.4}, {"name": "Georgios Kalaitzakis", "val": 3.3}, {"name": "Mike Muscala", "val": 3.0}, {"name": "Paul Watson", "val": 3.0}, {"name": "Tre Mann", "val": 2.9}, {"name": "Lindy Waters III", "val": 2.9}, {"name": "Théo Maledon", "val": 2.6}, {"name": "Ty Jerome", "val": 1.6}, {"name": "Rob Edwards", "val": 1.5}, {"name": "Scotty Hopson", "val": 1.0}, {"name": "Gabriel Deck", "val": 0.9}] },
      ast: { name: "Zavier Simpson", val: 7.5, all: [{"name": "Zavier Simpson", "val": 7.5}, {"name": "Josh Giddey", "val": 6.4}, {"name": "Shai Gilgeous-Alexander", "val": 5.9}, {"name": "Georgios Kalaitzakis", "val": 3.0}, {"name": "Jaylen Hoard", "val": 2.4}, {"name": "Ty Jerome", "val": 2.3}, {"name": "Kenrich Williams", "val": 2.2}, {"name": "Théo Maledon", "val": 2.2}, {"name": "Aleksej Pokusevski", "val": 2.1}, {"name": "Vít Krejčí", "val": 1.9}, {"name": "Luguentz Dort", "val": 1.7}, {"name": "Isaiah Roby", "val": 1.6}, {"name": "Tre Mann", "val": 1.5}, {"name": "Aaron Wiggins", "val": 1.4}, {"name": "Darius Bazley", "val": 1.4}, {"name": "Jeremiah Robinson-Earl", "val": 1.0}, {"name": "Lindy Waters III", "val": 1.0}, {"name": "Scotty Hopson", "val": 1.0}, {"name": "Olivier Sarr", "val": 0.9}, {"name": "Paul Watson", "val": 0.9}, {"name": "Gabriel Deck", "val": 0.7}, {"name": "Derrick Favors", "val": 0.6}, {"name": "Mike Muscala", "val": 0.5}, {"name": "Melvin Frazier", "val": 0.3}, {"name": "Mamadi Diakite", "val": 0.2}, {"name": "Rob Edwards", "val": 0.0}] },
      stl: { name: "Georgios Kalaitzakis", val: 2.5, all: [{"name": "Georgios Kalaitzakis", "val": 2.5}, {"name": "Zavier Simpson", "val": 1.3}, {"name": "Shai Gilgeous-Alexander", "val": 1.3}, {"name": "Jaylen Hoard", "val": 0.9}, {"name": "Luguentz Dort", "val": 0.9}, {"name": "Josh Giddey", "val": 0.9}, {"name": "Kenrich Williams", "val": 0.9}, {"name": "Tre Mann", "val": 0.8}, {"name": "Lindy Waters III", "val": 0.8}, {"name": "Isaiah Roby", "val": 0.8}, {"name": "Darius Bazley", "val": 0.8}, {"name": "Vít Krejčí", "val": 0.6}, {"name": "Jeremiah Robinson-Earl", "val": 0.6}, {"name": "Aaron Wiggins", "val": 0.6}, {"name": "Aleksej Pokusevski", "val": 0.6}, {"name": "Théo Maledon", "val": 0.6}, {"name": "Ty Jerome", "val": 0.6}, {"name": "Derrick Favors", "val": 0.4}, {"name": "Mamadi Diakite", "val": 0.4}, {"name": "Mike Muscala", "val": 0.4}, {"name": "Olivier Sarr", "val": 0.3}, {"name": "Melvin Frazier", "val": 0.3}, {"name": "Paul Watson", "val": 0.3}, {"name": "Gabriel Deck", "val": 0.1}, {"name": "Scotty Hopson", "val": 0.0}, {"name": "Rob Edwards", "val": 0.0}] },
      blk: { name: "Zavier Simpson", val: 1.0, all: [{"name": "Zavier Simpson", "val": 1.0}, {"name": "Darius Bazley", "val": 1.0}, {"name": "Shai Gilgeous-Alexander", "val": 0.8}, {"name": "Isaiah Roby", "val": 0.8}, {"name": "Jaylen Hoard", "val": 0.7}, {"name": "Mamadi Diakite", "val": 0.7}, {"name": "Olivier Sarr", "val": 0.7}, {"name": "Mike Muscala", "val": 0.6}, {"name": "Aleksej Pokusevski", "val": 0.6}, {"name": "Luguentz Dort", "val": 0.4}, {"name": "Josh Giddey", "val": 0.4}, {"name": "Lindy Waters III", "val": 0.3}, {"name": "Vít Krejčí", "val": 0.3}, {"name": "Jeremiah Robinson-Earl", "val": 0.3}, {"name": "Georgios Kalaitzakis", "val": 0.3}, {"name": "Paul Watson", "val": 0.3}, {"name": "Derrick Favors", "val": 0.3}, {"name": "Tre Mann", "val": 0.2}, {"name": "Kenrich Williams", "val": 0.2}, {"name": "Aaron Wiggins", "val": 0.2}, {"name": "Théo Maledon", "val": 0.2}, {"name": "Ty Jerome", "val": 0.1}, {"name": "Gabriel Deck", "val": 0.0}, {"name": "Melvin Frazier", "val": 0.0}, {"name": "Scotty Hopson", "val": 0.0}, {"name": "Rob Edwards", "val": 0.0}] },
    },
    avail: [
      { name: "Darius Bazley", g: 69 },
      { name: "Aleksej Pokusevski", g: 61 },
      { name: "Tre Mann", g: 60 },
      { name: "Shai Gilgeous-Alexander", g: 56 },
      { name: "Josh Giddey", g: 54 },
      { name: "Théo Maledon", g: 51 },
      { name: "Luguentz Dort", g: 51 },
      { name: "Aaron Wiggins", g: 50 },
      { name: "Jeremiah Robinson-Earl", g: 49 },
      { name: "Kenrich Williams", g: 49 },
      { name: "Ty Jerome", g: 48 },
      { name: "Isaiah Roby", g: 45 },
      { name: "Mike Muscala", g: 43 },
      { name: "Derrick Favors", g: 39 },
      { name: "Vít Krejčí", g: 30 },
      { name: "Lindy Waters III", g: 25 },
      { name: "Olivier Sarr", g: 22 },
      { name: "Mamadi Diakite", g: 13 },
      { name: "Paul Watson", g: 9 },
      { name: "Jaylen Hoard", g: 7 },
      { name: "Gabriel Deck", g: 7 },
      { name: "Zavier Simpson", g: 4 },
      { name: "Georgios Kalaitzakis", g: 4 },
      { name: "Melvin Frazier", g: 3 },
      { name: "Rob Edwards", g: 2 },
      { name: "Scotty Hopson", g: 1 },
    ]
  },

  "2022-23": {
    w: 40, l: 42,
    topW:   { pts: 133, opp: 96, against: "Houston Rockets" },
    worstL: { pts: 101, opp: 132, against: "Phoenix Suns" },
    conf_rank: 10,
    games: buildGames(
      "LLLWWWWLLLLWWLWLLLWLLWWWLLLLLWWWLWLLWLWWLWWWWLWLWLLWLWWLWLLLLLWWWLWWWLWWLLWLWLLLWW",
      ["Minnesota Timberwolves", "Denver Nuggets", "Minnesota Timberwolves", "Los Angeles Clippers", "Los Angeles Clippers", "Dallas Mavericks", "Orlando Magic", "Denver Nuggets", "Milwaukee Bucks", "Detroit Pistons", "Milwaukee Bucks", "Toronto Raptors", "New York Knicks", "Boston Celtics", "Washington Wizards", "Memphis Grizzlies", "New York Knicks", "Denver Nuggets", "Chicago Bulls", "Houston Rockets", "New Orleans Pelicans", "San Antonio Spurs", "Minnesota Timberwolves", "Atlanta Hawks", "Memphis Grizzlies", "Cleveland Cavaliers", "Dallas Mavericks", "Miami Heat", "Minnesota Timberwolves", "Memphis Grizzlies", "Portland Trail Blazers", "Portland Trail Blazers", "New Orleans Pelicans", "San Antonio Spurs", "Charlotte Hornets", "Philadelphia 76ers", "Boston Celtics", "Orlando Magic", "Washington Wizards", "Dallas Mavericks", "Miami Heat", "Philadelphia 76ers", "Chicago Bulls", "Brooklyn Nets", "Indiana Pacers", "Sacramento Kings", "Denver Nuggets", "Atlanta Hawks", "Cleveland Cavaliers", "Golden State Warriors", "Houston Rockets", "Houston Rockets", "Golden State Warriors", "Los Angeles Lakers", "Portland Trail Blazers", "New Orleans Pelicans", "Houston Rockets", "Utah Jazz", "Phoenix Suns", "Sacramento Kings", "Sacramento Kings", "Los Angeles Lakers", "Utah Jazz", "Utah Jazz", "Golden State Warriors", "Phoenix Suns", "New Orleans Pelicans", "San Antonio Spurs", "Brooklyn Nets", "Toronto Raptors", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Charlotte Hornets", "Detroit Pistons", "Indiana Pacers", "Phoenix Suns", "Golden State Warriors", "Utah Jazz", "Memphis Grizzlies"],
      [108, 117, 106, 108, 118, 117, 116, 110, 94, 103, 132, 132, 145, 122, 121, 110, 119, 126, 123, 105, 101, 119, 135, 121, 102, 102, 114, 108, 110, 115, 123, 101, 125, 130, 113, 96, 150, 115, 127, 120, 111, 133, 124, 112, 126, 113, 101, 132, 112, 120, 106, 153, 114, 133, 138, 100, 133, 119, 115, 115, 117, 117, 130, 129, 137, 101, 110, 102, 121, 111, 124, 101, 105, 111, 118, 134, 107, 117, 118, 125, 114, 115],
      [-7, -5, -10, 14, 8, 6, 8, -12, -14, -9, -4, 19, 10, -4, 1, -11, -10, -5, 4, -13, -4, 8, 7, 7, -21, -8, -7, -2, -2, 6, 2, 3, -3, 16, -8, -19, 33, -11, 17, 11, -1, 19, 14, 10, 20, -5, 2, -5, 12, -8, -6, 32, -27, 3, 9, -3, 37, -1, -9, -9, -6, -6, 27, 10, 9, -31, 14, 12, 14, -17, 4, 1, -22, -5, 6, -3, 1, -4, -10, -11, 16, 15]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 31.4, all: [{"name": "Shai Gilgeous-Alexander", "val": 31.4}, {"name": "Josh Giddey", "val": 16.6}, {"name": "Jalen Williams", "val": 14.1}, {"name": "Luguentz Dort", "val": 13.7}, {"name": "Isaiah Joe", "val": 9.5}, {"name": "Aleksej Pokusevski", "val": 8.1}, {"name": "Kenrich Williams", "val": 8.0}, {"name": "Tre Mann", "val": 7.7}, {"name": "Dario Šarić", "val": 7.4}, {"name": "Aaron Wiggins", "val": 6.8}, {"name": "Jeremiah Robinson-Earl", "val": 6.8}, {"name": "Mike Muscala", "val": 6.2}, {"name": "Jared Butler", "val": 6.2}, {"name": "Jaylin Williams", "val": 5.9}, {"name": "Darius Bazley", "val": 5.4}, {"name": "Lindy Waters III", "val": 5.2}, {"name": "Ousmane Dieng", "val": 4.9}, {"name": "Eugene Omoruyi", "val": 4.9}, {"name": "Olivier Sarr", "val": 4.0}] },
      reb: { name: "Josh Giddey", val: 7.9, all: [{"name": "Josh Giddey", "val": 7.9}, {"name": "Kenrich Williams", "val": 4.9}, {"name": "Jaylin Williams", "val": 4.9}, {"name": "Shai Gilgeous-Alexander", "val": 4.8}, {"name": "Aleksej Pokusevski", "val": 4.7}, {"name": "Luguentz Dort", "val": 4.6}, {"name": "Jalen Williams", "val": 4.5}, {"name": "Jeremiah Robinson-Earl", "val": 4.2}, {"name": "Olivier Sarr", "val": 3.4}, {"name": "Darius Bazley", "val": 3.4}, {"name": "Dario Šarić", "val": 3.3}, {"name": "Mike Muscala", "val": 3.1}, {"name": "Aaron Wiggins", "val": 3.0}, {"name": "Ousmane Dieng", "val": 2.7}, {"name": "Isaiah Joe", "val": 2.4}, {"name": "Tre Mann", "val": 2.3}, {"name": "Eugene Omoruyi", "val": 2.3}, {"name": "Lindy Waters III", "val": 1.8}, {"name": "Jared Butler", "val": 0.7}] },
      ast: { name: "Josh Giddey", val: 6.2, all: [{"name": "Josh Giddey", "val": 6.2}, {"name": "Shai Gilgeous-Alexander", "val": 5.5}, {"name": "Jalen Williams", "val": 3.3}, {"name": "Luguentz Dort", "val": 2.1}, {"name": "Kenrich Williams", "val": 2.0}, {"name": "Aleksej Pokusevski", "val": 1.9}, {"name": "Tre Mann", "val": 1.8}, {"name": "Jaylin Williams", "val": 1.6}, {"name": "Jared Butler", "val": 1.3}, {"name": "Ousmane Dieng", "val": 1.2}, {"name": "Isaiah Joe", "val": 1.2}, {"name": "Aaron Wiggins", "val": 1.1}, {"name": "Jeremiah Robinson-Earl", "val": 1.0}, {"name": "Darius Bazley", "val": 0.9}, {"name": "Mike Muscala", "val": 0.9}, {"name": "Dario Šarić", "val": 0.9}, {"name": "Lindy Waters III", "val": 0.7}, {"name": "Eugene Omoruyi", "val": 0.5}, {"name": "Olivier Sarr", "val": 0.4}] },
      stl: { name: "Shai Gilgeous-Alexander", val: 1.6, all: [{"name": "Shai Gilgeous-Alexander", "val": 1.6}, {"name": "Jalen Williams", "val": 1.4}, {"name": "Luguentz Dort", "val": 1.0}, {"name": "Josh Giddey", "val": 0.8}, {"name": "Kenrich Williams", "val": 0.8}, {"name": "Jared Butler", "val": 0.8}, {"name": "Isaiah Joe", "val": 0.7}, {"name": "Tre Mann", "val": 0.6}, {"name": "Aaron Wiggins", "val": 0.6}, {"name": "Jaylin Williams", "val": 0.6}, {"name": "Jeremiah Robinson-Earl", "val": 0.6}, {"name": "Aleksej Pokusevski", "val": 0.6}, {"name": "Eugene Omoruyi", "val": 0.6}, {"name": "Darius Bazley", "val": 0.5}, {"name": "Ousmane Dieng", "val": 0.4}, {"name": "Dario Šarić", "val": 0.4}, {"name": "Mike Muscala", "val": 0.3}, {"name": "Lindy Waters III", "val": 0.3}, {"name": "Olivier Sarr", "val": 0.1}] },
      blk: { name: "Aleksej Pokusevski", val: 1.3, all: [{"name": "Aleksej Pokusevski", "val": 1.3}, {"name": "Shai Gilgeous-Alexander", "val": 1.0}, {"name": "Darius Bazley", "val": 0.8}, {"name": "Olivier Sarr", "val": 0.6}, {"name": "Jalen Williams", "val": 0.5}, {"name": "Josh Giddey", "val": 0.4}, {"name": "Mike Muscala", "val": 0.4}, {"name": "Luguentz Dort", "val": 0.3}, {"name": "Kenrich Williams", "val": 0.3}, {"name": "Jeremiah Robinson-Earl", "val": 0.3}, {"name": "Lindy Waters III", "val": 0.3}, {"name": "Ousmane Dieng", "val": 0.2}, {"name": "Aaron Wiggins", "val": 0.2}, {"name": "Tre Mann", "val": 0.2}, {"name": "Jaylin Williams", "val": 0.2}, {"name": "Dario Šarić", "val": 0.1}, {"name": "Isaiah Joe", "val": 0.1}, {"name": "Jared Butler", "val": 0.0}, {"name": "Eugene Omoruyi", "val": 0.0}] },
    },
    avail: [
      { name: "Josh Giddey", g: 76 },
      { name: "Jalen Williams", g: 75 },
      { name: "Luguentz Dort", g: 74 },
      { name: "Isaiah Joe", g: 73 },
      { name: "Aaron Wiggins", g: 70 },
      { name: "Shai Gilgeous-Alexander", g: 68 },
      { name: "Tre Mann", g: 67 },
      { name: "Kenrich Williams", g: 53 },
      { name: "Jaylin Williams", g: 49 },
      { name: "Jeremiah Robinson-Earl", g: 43 },
      { name: "Mike Muscala", g: 43 },
      { name: "Lindy Waters III", g: 41 },
      { name: "Ousmane Dieng", g: 39 },
      { name: "Darius Bazley", g: 36 },
      { name: "Aleksej Pokusevski", g: 34 },
      { name: "Eugene Omoruyi", g: 23 },
      { name: "Dario Šarić", g: 20 },
      { name: "Olivier Sarr", g: 9 },
      { name: "Jared Butler", g: 6 },
    ]
  },

  "2023-24": {
    w: 57, l: 25,
    topW:   { pts: 139, opp: 77, against: "Portland Trail Blazers" },
    worstL: { pts: 111, opp: 146, against: "Dallas Mavericks" },
    conf_rank: 1,
    games: buildGames(
      "WWLWLLWWLWWWWWWLLWWLWWLWWWLWWWWWLLWWWWLLWWWWWLLWWWLLWWWWWWLWLWWWLWWWWLWLWWLLLWWWWW",
      ["Chicago Bulls", "Cleveland Cavaliers", "Denver Nuggets", "Detroit Pistons", "New Orleans Pelicans", "Golden State Warriors", "Atlanta Hawks", "Cleveland Cavaliers", "Sacramento Kings", "Phoenix Suns", "San Antonio Spurs", "Golden State Warriors", "Golden State Warriors", "Portland Trail Blazers", "Chicago Bulls", "Philadelphia 76ers", "Minnesota Timberwolves", "Los Angeles Lakers", "Dallas Mavericks", "Houston Rockets", "Golden State Warriors", "Utah Jazz", "Sacramento Kings", "Denver Nuggets", "Memphis Grizzlies", "Los Angeles Clippers", "Los Angeles Lakers", "Minnesota Timberwolves", "New York Knicks", "Denver Nuggets", "Brooklyn Nets", "Boston Celtics", "Atlanta Hawks", "Brooklyn Nets", "Washington Wizards", "Miami Heat", "Portland Trail Blazers", "Orlando Magic", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Minnesota Timberwolves", "Portland Trail Blazers", "San Antonio Spurs", "New Orleans Pelicans", "Detroit Pistons", "Minnesota Timberwolves", "Denver Nuggets", "Charlotte Hornets", "Toronto Raptors", "Utah Jazz", "Dallas Mavericks", "Sacramento Kings", "Orlando Magic", "Los Angeles Clippers", "Washington Wizards", "Houston Rockets", "Houston Rockets", "San Antonio Spurs", "Phoenix Suns", "Los Angeles Lakers", "Portland Trail Blazers", "Miami Heat", "Memphis Grizzlies", "Indiana Pacers", "Dallas Mavericks", "Memphis Grizzlies", "Utah Jazz", "Toronto Raptors", "Milwaukee Bucks", "New Orleans Pelicans", "Houston Rockets", "Phoenix Suns", "New York Knicks", "Philadelphia 76ers", "Boston Celtics", "Indiana Pacers", "Charlotte Hornets", "Sacramento Kings", "San Antonio Spurs", "Milwaukee Bucks", "Dallas Mavericks"],
      [124, 108, 95, 124, 106, 139, 126, 128, 98, 111, 123, 128, 130, 134, 116, 123, 103, 133, 126, 101, 138, 134, 123, 118, 116, 134, 120, 129, 129, 119, 124, 127, 138, 115, 136, 128, 139, 112, 105, 117, 134, 102, 111, 140, 107, 104, 101, 105, 126, 135, 117, 111, 127, 127, 129, 147, 123, 112, 118, 118, 104, 128, 107, 124, 111, 126, 118, 119, 123, 93, 119, 126, 128, 113, 105, 100, 112, 121, 112, 127, 125, 135],
      [20, 3, -33, 12, -4, -2, 9, 8, -7, 12, 36, 19, 7, 43, 14, -4, -3, 23, 6, -9, 2, 14, -5, 1, 19, 19, -9, 23, 9, 26, 16, 4, -3, -9, 8, 8, 62, 12, -7, -11, 5, 5, 2, 26, 24, -16, -6, 5, 20, 8, -7, -35, 14, 14, 22, 41, 13, 17, -14, 8, -12, 8, 7, 31, -10, 7, 6, 12, 20, -25, 7, -6, 25, 1, -4, -35, -14, 3, 7, 38, 18, 49]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 30.1, all: [{"name": "Shai Gilgeous-Alexander", "val": 30.1}, {"name": "Jalen Williams", "val": 19.1}, {"name": "Chet Holmgren", "val": 16.5}, {"name": "Josh Giddey", "val": 12.3}, {"name": "Luguentz Dort", "val": 10.9}, {"name": "Isaiah Joe", "val": 8.2}, {"name": "Aaron Wiggins", "val": 6.9}, {"name": "Cason Wallace", "val": 6.8}, {"name": "Gordon Hayward", "val": 5.3}, {"name": "Kenrich Williams", "val": 4.7}, {"name": "Jaylin Williams", "val": 4.0}, {"name": "Ousmane Dieng", "val": 4.0}, {"name": "Tre Mann", "val": 3.8}, {"name": "Lindy Waters III", "val": 3.6}, {"name": "Vasilije Micić", "val": 3.3}, {"name": "Dāvis Bertāns", "val": 2.9}, {"name": "Olivier Sarr", "val": 2.3}, {"name": "Bismack Biyombo", "val": 1.8}, {"name": "Adam Flagler", "val": 1.5}, {"name": "Keyontae Johnson", "val": 1.2}, {"name": "Aleksej Pokusevski", "val": 1.2}, {"name": "Mike Muscala", "val": 1.1}] },
      reb: { name: "Chet Holmgren", val: 7.9, all: [{"name": "Chet Holmgren", "val": 7.9}, {"name": "Josh Giddey", "val": 6.4}, {"name": "Shai Gilgeous-Alexander", "val": 5.5}, {"name": "Jalen Williams", "val": 4.0}, {"name": "Luguentz Dort", "val": 3.6}, {"name": "Jaylin Williams", "val": 3.4}, {"name": "Kenrich Williams", "val": 3.0}, {"name": "Gordon Hayward", "val": 2.5}, {"name": "Aaron Wiggins", "val": 2.4}, {"name": "Olivier Sarr", "val": 2.4}, {"name": "Cason Wallace", "val": 2.3}, {"name": "Isaiah Joe", "val": 2.3}, {"name": "Bismack Biyombo", "val": 1.8}, {"name": "Tre Mann", "val": 1.8}, {"name": "Ousmane Dieng", "val": 1.5}, {"name": "Mike Muscala", "val": 1.3}, {"name": "Keyontae Johnson", "val": 1.1}, {"name": "Lindy Waters III", "val": 1.1}, {"name": "Aleksej Pokusevski", "val": 1.0}, {"name": "Vasilije Micić", "val": 0.8}, {"name": "Dāvis Bertāns", "val": 0.7}, {"name": "Adam Flagler", "val": 0.0}] },
      ast: { name: "Shai Gilgeous-Alexander", val: 6.2, all: [{"name": "Shai Gilgeous-Alexander", "val": 6.2}, {"name": "Josh Giddey", "val": 4.8}, {"name": "Jalen Williams", "val": 4.5}, {"name": "Vasilije Micić", "val": 2.5}, {"name": "Chet Holmgren", "val": 2.4}, {"name": "Adam Flagler", "val": 2.0}, {"name": "Jaylin Williams", "val": 1.6}, {"name": "Gordon Hayward", "val": 1.6}, {"name": "Tre Mann", "val": 1.5}, {"name": "Cason Wallace", "val": 1.5}, {"name": "Luguentz Dort", "val": 1.4}, {"name": "Kenrich Williams", "val": 1.3}, {"name": "Isaiah Joe", "val": 1.3}, {"name": "Ousmane Dieng", "val": 1.1}, {"name": "Aaron Wiggins", "val": 1.1}, {"name": "Lindy Waters III", "val": 0.6}, {"name": "Dāvis Bertāns", "val": 0.6}, {"name": "Aleksej Pokusevski", "val": 0.5}, {"name": "Keyontae Johnson", "val": 0.4}, {"name": "Mike Muscala", "val": 0.3}, {"name": "Bismack Biyombo", "val": 0.2}, {"name": "Olivier Sarr", "val": 0.1}] },
      stl: { name: "Shai Gilgeous-Alexander", val: 2.0, all: [{"name": "Shai Gilgeous-Alexander", "val": 2.0}, {"name": "Jalen Williams", "val": 1.1}, {"name": "Luguentz Dort", "val": 0.9}, {"name": "Cason Wallace", "val": 0.9}, {"name": "Aaron Wiggins", "val": 0.7}, {"name": "Chet Holmgren", "val": 0.6}, {"name": "Josh Giddey", "val": 0.6}, {"name": "Isaiah Joe", "val": 0.6}, {"name": "Kenrich Williams", "val": 0.6}, {"name": "Gordon Hayward", "val": 0.5}, {"name": "Jaylin Williams", "val": 0.4}, {"name": "Vasilije Micić", "val": 0.3}, {"name": "Ousmane Dieng", "val": 0.2}, {"name": "Tre Mann", "val": 0.2}, {"name": "Dāvis Bertāns", "val": 0.2}, {"name": "Lindy Waters III", "val": 0.1}, {"name": "Keyontae Johnson", "val": 0.1}, {"name": "Bismack Biyombo", "val": 0.1}, {"name": "Aleksej Pokusevski", "val": 0.1}, {"name": "Mike Muscala", "val": 0.1}, {"name": "Adam Flagler", "val": 0.0}, {"name": "Olivier Sarr", "val": 0.0}] },
      blk: { name: "Chet Holmgren", val: 2.3, all: [{"name": "Chet Holmgren", "val": 2.3}, {"name": "Shai Gilgeous-Alexander", "val": 0.9}, {"name": "Luguentz Dort", "val": 0.6}, {"name": "Josh Giddey", "val": 0.6}, {"name": "Jalen Williams", "val": 0.6}, {"name": "Cason Wallace", "val": 0.5}, {"name": "Olivier Sarr", "val": 0.5}, {"name": "Jaylin Williams", "val": 0.4}, {"name": "Bismack Biyombo", "val": 0.3}, {"name": "Isaiah Joe", "val": 0.3}, {"name": "Aaron Wiggins", "val": 0.2}, {"name": "Dāvis Bertāns", "val": 0.2}, {"name": "Ousmane Dieng", "val": 0.2}, {"name": "Lindy Waters III", "val": 0.2}, {"name": "Aleksej Pokusevski", "val": 0.1}, {"name": "Vasilije Micić", "val": 0.1}, {"name": "Kenrich Williams", "val": 0.1}, {"name": "Mike Muscala", "val": 0.1}, {"name": "Keyontae Johnson", "val": 0.0}, {"name": "Adam Flagler", "val": 0.0}, {"name": "Tre Mann", "val": 0.0}, {"name": "Gordon Hayward", "val": 0.0}] },
    },
    avail: [
      { name: "Chet Holmgren", g: 82 },
      { name: "Cason Wallace", g: 82 },
      { name: "Josh Giddey", g: 80 },
      { name: "Luguentz Dort", g: 79 },
      { name: "Isaiah Joe", g: 78 },
      { name: "Aaron Wiggins", g: 78 },
      { name: "Shai Gilgeous-Alexander", g: 75 },
      { name: "Jalen Williams", g: 71 },
      { name: "Kenrich Williams", g: 69 },
      { name: "Jaylin Williams", g: 69 },
      { name: "Lindy Waters III", g: 38 },
      { name: "Ousmane Dieng", g: 33 },
      { name: "Vasilije Micić", g: 30 },
      { name: "Gordon Hayward", g: 26 },
      { name: "Mike Muscala", g: 16 },
      { name: "Olivier Sarr", g: 15 },
      { name: "Dāvis Bertāns", g: 15 },
      { name: "Tre Mann", g: 13 },
      { name: "Bismack Biyombo", g: 10 },
      { name: "Aleksej Pokusevski", g: 10 },
      { name: "Keyontae Johnson", g: 9 },
      { name: "Adam Flagler", g: 2 },
    ]
  },

  "2024-25": {
    w: 68, l: 14,
    topW:   { pts: 136, opp: 95, against: "Washington Wizards" },
    worstL: { pts: 99, opp: 126, against: "Los Angeles Lakers" },
    conf_rank: 1,
    games: buildGames(
      "WWWWWWWLWLWWWLLWWWWLWWWWWWWWWWWWWWWLWWWWLWWLWLWWWWWWWLWWLWWWWWWWLWWWWWWWWWWWLLWWWW",
      ["Denver Nuggets", "Chicago Bulls", "Atlanta Hawks", "San Antonio Spurs", "Portland Trail Blazers", "Los Angeles Clippers", "Orlando Magic", "Denver Nuggets", "Houston Rockets", "Golden State Warriors", "Los Angeles Clippers", "New Orleans Pelicans", "Phoenix Suns", "Dallas Mavericks", "San Antonio Spurs", "Portland Trail Blazers", "Sacramento Kings", "Golden State Warriors", "Los Angeles Lakers", "Houston Rockets", "Utah Jazz", "Toronto Raptors", "New Orleans Pelicans", "Dallas Mavericks", "Houston Rockets", "Orlando Magic", "Miami Heat", "Washington Wizards", "Indiana Pacers", "Charlotte Hornets", "Memphis Grizzlies", "Minnesota Timberwolves", "Los Angeles Clippers", "New York Knicks", "Boston Celtics", "Cleveland Cavaliers", "New York Knicks", "Washington Wizards", "Philadelphia 76ers", "Cleveland Cavaliers", "Dallas Mavericks", "Brooklyn Nets", "Utah Jazz", "Dallas Mavericks", "Portland Trail Blazers", "Golden State Warriors", "Sacramento Kings", "Milwaukee Bucks", "Phoenix Suns", "Toronto Raptors", "Memphis Grizzlies", "New Orleans Pelicans", "Miami Heat", "Minnesota Timberwolves", "Utah Jazz", "Minnesota Timberwolves", "Minnesota Timberwolves", "Brooklyn Nets", "Atlanta Hawks", "San Antonio Spurs", "Houston Rockets", "Memphis Grizzlies", "Portland Trail Blazers", "Denver Nuggets", "Denver Nuggets", "Boston Celtics", "Detroit Pistons", "Milwaukee Bucks", "Philadelphia 76ers", "Charlotte Hornets", "Los Angeles Clippers", "Sacramento Kings", "Memphis Grizzlies", "Indiana Pacers", "Chicago Bulls", "Detroit Pistons", "Houston Rockets", "Los Angeles Lakers", "Los Angeles Lakers", "Phoenix Suns", "Utah Jazz", "New Orleans Pelicans"],
      [102, 114, 128, 105, 137, 105, 102, 122, 126, 116, 134, 106, 99, 119, 104, 109, 130, 105, 101, 116, 133, 129, 119, 118, 111, 105, 104, 123, 120, 106, 130, 113, 116, 117, 105, 122, 126, 136, 118, 134, 98, 127, 123, 115, 118, 109, 144, 125, 140, 121, 125, 137, 115, 101, 130, 130, 128, 129, 135, 146, 137, 120, 107, 127, 127, 118, 113, 121, 133, 141, 103, 121, 125, 132, 145, 119, 111, 99, 136, 125, 145, 115],
      [15, 19, 24, 12, 23, 13, 16, -2, 19, -11, 6, 18, 16, -2, -6, 10, 21, 4, 8, -3, 27, 37, 10, 14, 15, 6, 7, 18, 6, 12, 24, 8, 18, 10, 13, -7, 25, 41, 16, 20, -8, 26, 9, -6, 10, -7, 34, 29, 31, 12, 13, 36, 14, -15, 23, 7, -3, 8, 16, 14, 9, 17, 18, 24, -13, 6, 6, 16, 33, 35, 2, 16, 21, 21, 28, 16, -14, -27, 16, 13, 34, 15]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 32.7, all: [{"name": "Shai Gilgeous-Alexander", "val": 32.7}, {"name": "Jalen Williams", "val": 21.6}, {"name": "Chet Holmgren", "val": 15.0}, {"name": "Aaron Wiggins", "val": 12.0}, {"name": "Isaiah Hartenstein", "val": 11.2}, {"name": "Isaiah Joe", "val": 10.2}, {"name": "Luguentz Dort", "val": 10.1}, {"name": "Cason Wallace", "val": 8.4}, {"name": "Alex Caruso", "val": 7.1}, {"name": "Ajay Mitchell", "val": 6.5}, {"name": "Kenrich Williams", "val": 6.3}, {"name": "Jaylin Williams", "val": 5.9}, {"name": "Ousmane Dieng", "val": 3.8}, {"name": "Branden Carlson", "val": 3.8}, {"name": "Dillon Jones", "val": 2.5}, {"name": "Alex Reese", "val": 2.0}, {"name": "Adam Flagler", "val": 1.8}, {"name": "Alex Ducas", "val": 1.7}, {"name": "Malevy Leons", "val": 0.3}] },
      reb: { name: "Isaiah Hartenstein", val: 10.7, all: [{"name": "Isaiah Hartenstein", "val": 10.7}, {"name": "Chet Holmgren", "val": 8.0}, {"name": "Jaylin Williams", "val": 5.6}, {"name": "Jalen Williams", "val": 5.3}, {"name": "Shai Gilgeous-Alexander", "val": 5.0}, {"name": "Luguentz Dort", "val": 4.1}, {"name": "Aaron Wiggins", "val": 3.9}, {"name": "Kenrich Williams", "val": 3.5}, {"name": "Cason Wallace", "val": 3.4}, {"name": "Alex Caruso", "val": 2.9}, {"name": "Isaiah Joe", "val": 2.6}, {"name": "Ousmane Dieng", "val": 2.2}, {"name": "Dillon Jones", "val": 2.2}, {"name": "Ajay Mitchell", "val": 1.9}, {"name": "Branden Carlson", "val": 1.7}, {"name": "Alex Ducas", "val": 1.2}, {"name": "Alex Reese", "val": 1.0}, {"name": "Adam Flagler", "val": 0.7}, {"name": "Malevy Leons", "val": 0.5}] },
      ast: { name: "Shai Gilgeous-Alexander", val: 6.4, all: [{"name": "Shai Gilgeous-Alexander", "val": 6.4}, {"name": "Jalen Williams", "val": 5.1}, {"name": "Isaiah Hartenstein", "val": 3.8}, {"name": "Jaylin Williams", "val": 2.6}, {"name": "Cason Wallace", "val": 2.5}, {"name": "Alex Caruso", "val": 2.5}, {"name": "Chet Holmgren", "val": 2.0}, {"name": "Aaron Wiggins", "val": 1.8}, {"name": "Ajay Mitchell", "val": 1.8}, {"name": "Isaiah Joe", "val": 1.6}, {"name": "Luguentz Dort", "val": 1.6}, {"name": "Kenrich Williams", "val": 1.4}, {"name": "Dillon Jones", "val": 1.1}, {"name": "Ousmane Dieng", "val": 0.8}, {"name": "Branden Carlson", "val": 0.4}, {"name": "Adam Flagler", "val": 0.3}, {"name": "Alex Ducas", "val": 0.2}, {"name": "Malevy Leons", "val": 0.2}, {"name": "Alex Reese", "val": 0.0}] },
      stl: { name: "Cason Wallace", val: 1.8, all: [{"name": "Cason Wallace", "val": 1.8}, {"name": "Shai Gilgeous-Alexander", "val": 1.7}, {"name": "Alex Caruso", "val": 1.6}, {"name": "Jalen Williams", "val": 1.6}, {"name": "Luguentz Dort", "val": 1.1}, {"name": "Isaiah Hartenstein", "val": 0.8}, {"name": "Aaron Wiggins", "val": 0.8}, {"name": "Chet Holmgren", "val": 0.7}, {"name": "Ajay Mitchell", "val": 0.7}, {"name": "Isaiah Joe", "val": 0.6}, {"name": "Kenrich Williams", "val": 0.6}, {"name": "Ousmane Dieng", "val": 0.5}, {"name": "Jaylin Williams", "val": 0.5}, {"name": "Dillon Jones", "val": 0.3}, {"name": "Branden Carlson", "val": 0.2}, {"name": "Alex Ducas", "val": 0.2}, {"name": "Adam Flagler", "val": 0.2}, {"name": "Malevy Leons", "val": 0.0}, {"name": "Alex Reese", "val": 0.0}] },
      blk: { name: "Chet Holmgren", val: 2.2, all: [{"name": "Chet Holmgren", "val": 2.2}, {"name": "Isaiah Hartenstein", "val": 1.1}, {"name": "Shai Gilgeous-Alexander", "val": 1.0}, {"name": "Branden Carlson", "val": 0.7}, {"name": "Jalen Williams", "val": 0.7}, {"name": "Alex Caruso", "val": 0.6}, {"name": "Jaylin Williams", "val": 0.6}, {"name": "Cason Wallace", "val": 0.5}, {"name": "Luguentz Dort", "val": 0.5}, {"name": "Aaron Wiggins", "val": 0.2}, {"name": "Ousmane Dieng", "val": 0.2}, {"name": "Isaiah Joe", "val": 0.1}, {"name": "Ajay Mitchell", "val": 0.1}, {"name": "Kenrich Williams", "val": 0.1}, {"name": "Dillon Jones", "val": 0.1}, {"name": "Adam Flagler", "val": 0.1}, {"name": "Alex Ducas", "val": 0.0}, {"name": "Malevy Leons", "val": 0.0}, {"name": "Alex Reese", "val": 0.0}] },
    },
    avail: [
      { name: "Shai Gilgeous-Alexander", g: 76 },
      { name: "Aaron Wiggins", g: 76 },
      { name: "Isaiah Joe", g: 74 },
      { name: "Luguentz Dort", g: 71 },
      { name: "Kenrich Williams", g: 69 },
      { name: "Jalen Williams", g: 69 },
      { name: "Cason Wallace", g: 68 },
      { name: "Isaiah Hartenstein", g: 57 },
      { name: "Dillon Jones", g: 54 },
      { name: "Alex Caruso", g: 54 },
      { name: "Jaylin Williams", g: 47 },
      { name: "Ousmane Dieng", g: 37 },
      { name: "Adam Flagler", g: 37 },
      { name: "Ajay Mitchell", g: 36 },
      { name: "Chet Holmgren", g: 32 },
      { name: "Branden Carlson", g: 32 },
      { name: "Alex Ducas", g: 21 },
      { name: "Malevy Leons", g: 6 },
      { name: "Alex Reese", g: 1 },
    ]
  },

  "2025-26": {
    w: 64, l: 18,
    topW:   { pts: 138, opp: 89, against: "Phoenix Suns" },
    worstL: { pts: 103, opp: 135, against: "Phoenix Suns" },
    conf_rank: 1,
    games: buildGames(
      "WWWWWWWWLWWWWWWWWWWWWWWWWLWLWLLWWWWLLWWWWWLWWLLWLWWLLWWLWWWLWWWWWWWWWWWWLWWWWWWWLL",
      ["Houston Rockets", "Indiana Pacers", "Atlanta Hawks", "Dallas Mavericks", "Sacramento Kings", "Washington Wizards", "New Orleans Pelicans", "Los Angeles Clippers", "Portland Trail Blazers", "Sacramento Kings", "Memphis Grizzlies", "Golden State Warriors", "Los Angeles Lakers", "Charlotte Hornets", "New Orleans Pelicans", "Sacramento Kings", "Utah Jazz", "Portland Trail Blazers", "Minnesota Timberwolves", "Phoenix Suns", "Portland Trail Blazers", "Golden State Warriors", "Dallas Mavericks", "Utah Jazz", "Phoenix Suns", "San Antonio Spurs", "Los Angeles Clippers", "Minnesota Timberwolves", "Memphis Grizzlies", "San Antonio Spurs", "San Antonio Spurs", "Philadelphia 76ers", "Atlanta Hawks", "Portland Trail Blazers", "Golden State Warriors", "Phoenix Suns", "Charlotte Hornets", "Utah Jazz", "Memphis Grizzlies", "Miami Heat", "San Antonio Spurs", "Houston Rockets", "Miami Heat", "Cleveland Cavaliers", "Milwaukee Bucks", "Indiana Pacers", "Toronto Raptors", "New Orleans Pelicans", "Minnesota Timberwolves", "Denver Nuggets", "Orlando Magic", "San Antonio Spurs", "Houston Rockets", "Los Angeles Lakers", "Phoenix Suns", "Milwaukee Bucks", "Brooklyn Nets", "Cleveland Cavaliers", "Toronto Raptors", "Detroit Pistons", "Denver Nuggets", "Dallas Mavericks", "Chicago Bulls", "New York Knicks", "Golden State Warriors", "Denver Nuggets", "Boston Celtics", "Minnesota Timberwolves", "Orlando Magic", "Brooklyn Nets", "Washington Wizards", "Philadelphia 76ers", "Boston Celtics", "Chicago Bulls", "New York Knicks", "Detroit Pistons", "Los Angeles Lakers", "Utah Jazz", "Los Angeles Lakers", "Los Angeles Clippers", "Denver Nuggets", "Phoenix Suns"],
      [125, 141, 117, 101, 107, 127, 137, 126, 119, 132, 114, 126, 121, 109, 126, 113, 144, 122, 113, 123, 123, 124, 132, 131, 138, 109, 122, 107, 119, 110, 102, 129, 140, 124, 131, 105, 97, 129, 117, 124, 119, 111, 120, 136, 122, 114, 101, 104, 111, 121, 128, 106, 106, 119, 136, 93, 105, 121, 116, 116, 127, 100, 116, 103, 104, 129, 104, 116, 113, 121, 132, 123, 109, 131, 111, 114, 139, 146, 123, 128, 107, 103],
      [1, 6, 17, 7, 6, 19, 31, 19, -2, 31, 14, 24, 29, 13, 17, 14, 32, 27, 8, 4, 8, 12, 21, 30, 49, -2, 21, -5, 16, -20, -15, 25, 11, 29, 37, -3, -27, 4, 1, 12, 21, 20, -2, 32, 20, -3, -2, 9, -12, 10, 36, -10, -6, 9, 27, -17, 19, 8, 9, -8, 6, 13, 8, 3, 7, 3, 2, 13, 5, 29, 21, 20, -10, 18, 11, 4, 43, 35, 36, 18, -20, -32]
    ),
    leaders: {
      pts: { name: "Shai Gilgeous-Alexander", val: 31.1, all: [{"name": "Shai Gilgeous-Alexander", "val": 31.1}, {"name": "Chet Holmgren", "val": 17.1}, {"name": "Jalen Williams", "val": 17.1}, {"name": "Ajay Mitchell", "val": 13.6}, {"name": "Isaiah Joe", "val": 11.1}, {"name": "Jared McCain", "val": 10.4}, {"name": "Aaron Wiggins", "val": 9.4}, {"name": "Isaiah Hartenstein", "val": 9.2}, {"name": "Payton Sandfort", "val": 8.8}, {"name": "Cason Wallace", "val": 8.6}, {"name": "Luguentz Dort", "val": 8.3}, {"name": "Jaylin Williams", "val": 7.2}, {"name": "Kenrich Williams", "val": 6.5}, {"name": "Alex Caruso", "val": 6.2}, {"name": "Branden Carlson", "val": 5.8}, {"name": "Nikola Topić", "val": 5.2}, {"name": "Ousmane Dieng", "val": 3.7}, {"name": "Chris Youngblood", "val": 2.0}, {"name": "Brooks Barnhizer", "val": 1.7}, {"name": "Buddy Boeheim", "val": 1.5}] },
      reb: { name: "Isaiah Hartenstein", val: 9.4, all: [{"name": "Isaiah Hartenstein", "val": 9.4}, {"name": "Chet Holmgren", "val": 8.9}, {"name": "Jaylin Williams", "val": 5.5}, {"name": "Jalen Williams", "val": 4.6}, {"name": "Shai Gilgeous-Alexander", "val": 4.3}, {"name": "Luguentz Dort", "val": 3.6}, {"name": "Ajay Mitchell", "val": 3.3}, {"name": "Kenrich Williams", "val": 3.3}, {"name": "Aaron Wiggins", "val": 3.1}, {"name": "Cason Wallace", "val": 3.1}, {"name": "Branden Carlson", "val": 3.0}, {"name": "Alex Caruso", "val": 2.8}, {"name": "Payton Sandfort", "val": 2.5}, {"name": "Isaiah Joe", "val": 2.5}, {"name": "Jared McCain", "val": 2.1}, {"name": "Brooks Barnhizer", "val": 2.0}, {"name": "Nikola Topić", "val": 1.9}, {"name": "Ousmane Dieng", "val": 1.6}, {"name": "Chris Youngblood", "val": 0.9}, {"name": "Buddy Boeheim", "val": 0.0}] },
      ast: { name: "Shai Gilgeous-Alexander", val: 6.6, all: [{"name": "Shai Gilgeous-Alexander", "val": 6.6}, {"name": "Jalen Williams", "val": 5.5}, {"name": "Nikola Topić", "val": 4.4}, {"name": "Ajay Mitchell", "val": 3.6}, {"name": "Isaiah Hartenstein", "val": 3.5}, {"name": "Cason Wallace", "val": 2.6}, {"name": "Jaylin Williams", "val": 2.4}, {"name": "Alex Caruso", "val": 2.0}, {"name": "Aaron Wiggins", "val": 1.7}, {"name": "Chet Holmgren", "val": 1.7}, {"name": "Kenrich Williams", "val": 1.4}, {"name": "Isaiah Joe", "val": 1.3}, {"name": "Luguentz Dort", "val": 1.2}, {"name": "Ousmane Dieng", "val": 1.0}, {"name": "Jared McCain", "val": 0.9}, {"name": "Branden Carlson", "val": 0.7}, {"name": "Brooks Barnhizer", "val": 0.6}, {"name": "Chris Youngblood", "val": 0.3}, {"name": "Payton Sandfort", "val": 0.0}, {"name": "Buddy Boeheim", "val": 0.0}] },
      stl: { name: "Cason Wallace", val: 1.9, all: [{"name": "Cason Wallace", "val": 1.9}, {"name": "Shai Gilgeous-Alexander", "val": 1.4}, {"name": "Alex Caruso", "val": 1.3}, {"name": "Jalen Williams", "val": 1.2}, {"name": "Ajay Mitchell", "val": 1.2}, {"name": "Isaiah Hartenstein", "val": 1.0}, {"name": "Aaron Wiggins", "val": 0.9}, {"name": "Luguentz Dort", "val": 0.9}, {"name": "Isaiah Joe", "val": 0.7}, {"name": "Chet Holmgren", "val": 0.6}, {"name": "Kenrich Williams", "val": 0.6}, {"name": "Jaylin Williams", "val": 0.5}, {"name": "Nikola Topić", "val": 0.5}, {"name": "Jared McCain", "val": 0.4}, {"name": "Payton Sandfort", "val": 0.3}, {"name": "Brooks Barnhizer", "val": 0.3}, {"name": "Branden Carlson", "val": 0.2}, {"name": "Ousmane Dieng", "val": 0.1}, {"name": "Chris Youngblood", "val": 0.1}, {"name": "Buddy Boeheim", "val": 0.0}] },
      blk: { name: "Chet Holmgren", val: 1.9, all: [{"name": "Chet Holmgren", "val": 1.9}, {"name": "Shai Gilgeous-Alexander", "val": 0.8}, {"name": "Isaiah Hartenstein", "val": 0.8}, {"name": "Jaylin Williams", "val": 0.6}, {"name": "Branden Carlson", "val": 0.6}, {"name": "Luguentz Dort", "val": 0.4}, {"name": "Cason Wallace", "val": 0.4}, {"name": "Aaron Wiggins", "val": 0.4}, {"name": "Jalen Williams", "val": 0.3}, {"name": "Ajay Mitchell", "val": 0.3}, {"name": "Ousmane Dieng", "val": 0.3}, {"name": "Alex Caruso", "val": 0.3}, {"name": "Isaiah Joe", "val": 0.2}, {"name": "Jared McCain", "val": 0.1}, {"name": "Brooks Barnhizer", "val": 0.1}, {"name": "Kenrich Williams", "val": 0.1}, {"name": "Chris Youngblood", "val": 0.1}, {"name": "Payton Sandfort", "val": 0.0}, {"name": "Nikola Topić", "val": 0.0}, {"name": "Buddy Boeheim", "val": 0.0}] },
    },
    avail: [
      { name: "Cason Wallace", g: 77 },
      { name: "Isaiah Joe", g: 71 },
      { name: "Chet Holmgren", g: 69 },
      { name: "Luguentz Dort", g: 69 },
      { name: "Shai Gilgeous-Alexander", g: 68 },
      { name: "Jaylin Williams", g: 65 },
      { name: "Aaron Wiggins", g: 65 },
      { name: "Ajay Mitchell", g: 57 },
      { name: "Kenrich Williams", g: 56 },
      { name: "Alex Caruso", g: 56 },
      { name: "Isaiah Hartenstein", g: 47 },
      { name: "Branden Carlson", g: 42 },
      { name: "Brooks Barnhizer", g: 40 },
      { name: "Jalen Williams", g: 33 },
      { name: "Chris Youngblood", g: 32 },
      { name: "Jared McCain", g: 30 },
      { name: "Ousmane Dieng", g: 27 },
      { name: "Nikola Topić", g: 10 },
      { name: "Payton Sandfort", g: 4 },
      { name: "Buddy Boeheim", g: 4 },
    ]
  },

};
