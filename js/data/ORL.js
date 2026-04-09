/* ================================================================
   ORL.js — Orlando Magic · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Orlando Magic",
  abbr:          "ORL",
  conference:    "East",
  primaryColor:  "#0077C0",
  secondaryColor:"#C4CED4",
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
    w: 21, l: 51,
    topW:   { pts: 103, opp: 83, against: "Cleveland Cavaliers" },
    worstL: { pts: 91, opp: 137, against: "Utah Jazz" },
    conf_rank: 14,
    games: buildGames(
      "WWWWLLWWLLLLLLWLLWLLLLWLLLWLWWWLLLLLLLLLWLLWLLWWLLLLLLWLLLLLLWLWWLLLLLLL",
      ["Miami Heat", "Washington Wizards", "Washington Wizards", "Oklahoma City Thunder", "Philadelphia 76ers", "Oklahoma City Thunder", "Cleveland Cavaliers", "Cleveland Cavaliers", "Houston Rockets", "Dallas Mavericks", "Milwaukee Bucks", "Boston Celtics", "Brooklyn Nets", "New York Knicks", "Minnesota Timberwolves", "Indiana Pacers", "Charlotte Hornets", "Charlotte Hornets", "Sacramento Kings", "Los Angeles Clippers", "Toronto Raptors", "Toronto Raptors", "Chicago Bulls", "Chicago Bulls", "Portland Trail Blazers", "Golden State Warriors", "Sacramento Kings", "Phoenix Suns", "New York Knicks", "Golden State Warriors", "Detroit Pistons", "Detroit Pistons", "Brooklyn Nets", "Utah Jazz", "Dallas Mavericks", "Atlanta Hawks", "Miami Heat", "San Antonio Spurs", "Miami Heat", "New York Knicks", "Brooklyn Nets", "Boston Celtics", "Denver Nuggets", "Phoenix Suns", "Portland Trail Blazers", "Los Angeles Lakers", "Los Angeles Clippers", "New Orleans Pelicans", "Utah Jazz", "Denver Nuggets", "Washington Wizards", "Indiana Pacers", "Milwaukee Bucks", "San Antonio Spurs", "Chicago Bulls", "Toronto Raptors", "Houston Rockets", "Atlanta Hawks", "New Orleans Pelicans", "Indiana Pacers", "Los Angeles Lakers", "Cleveland Cavaliers", "Memphis Grizzlies", "Memphis Grizzlies", "Detroit Pistons", "Boston Celtics", "Charlotte Hornets", "Minnesota Timberwolves", "Milwaukee Bucks", "Atlanta Hawks", "Philadelphia 76ers", "Philadelphia 76ers"],
      [113, 130, 120, 118, 92, 99, 103, 105, 90, 98, 99, 97, 115, 84, 97, 118, 104, 117, 107, 90, 102, 108, 123, 92, 97, 105, 123, 90, 107, 124, 105, 93, 92, 109, 124, 112, 103, 77, 97, 93, 121, 96, 99, 112, 105, 93, 103, 115, 91, 109, 116, 106, 87, 97, 115, 102, 110, 96, 100, 112, 103, 109, 75, 112, 119, 96, 112, 96, 102, 93, 97, 117],
      [6, 10, 7, 11, -24, -9, 20, 11, -42, -14, -22, -27, -7, -7, 1, -2, -3, 9, -14, -26, -13, -15, 4, -26, -9, -6, 11, -19, 18, 4, 9, -12, -37, -15, -6, -3, -8, -27, -5, -1, 8, -16, -11, 1, -7, -3, 7, 5, -46, -10, -15, -5, -37, -23, 9, -11, -4, -16, -35, -19, -11, 5, -17, 1, 7, -36, -10, -32, -12, -23, -25, -11]
    ),
    leaders: {
      pts: { name: "Nikola Vučević", val: 24.5, all: [{"name": "Nikola Vučević", "val": 24.5}, {"name": "Evan Fournier", "val": 19.7}, {"name": "Terrence Ross", "val": 15.6}, {"name": "Aaron Gordon", "val": 14.6}, {"name": "Cole Anthony", "val": 12.9}, {"name": "Markelle Fultz", "val": 12.9}, {"name": "Wendell Carter Jr.", "val": 11.7}, {"name": "R.J. Hampton", "val": 11.2}, {"name": "Ignas Brazdeikis", "val": 11.1}, {"name": "Moritz Wagner", "val": 11.0}, {"name": "Dwayne Bacon", "val": 10.9}, {"name": "Gary Harris", "val": 10.2}, {"name": "Michael Carter-Williams", "val": 8.8}, {"name": "James Ennis III", "val": 8.4}, {"name": "Otto Porter Jr.", "val": 8.0}, {"name": "Mo Bamba", "val": 8.0}, {"name": "Chuma Okeke", "val": 7.8}, {"name": "Chasson Randle", "val": 6.5}, {"name": "Frank Mason III", "val": 6.3}, {"name": "Robert Franks", "val": 6.1}, {"name": "Donta Hall", "val": 5.6}, {"name": "Al-Farouq Aminu", "val": 5.5}, {"name": "Khem Birch", "val": 5.3}, {"name": "Devin Cannady", "val": 4.3}, {"name": "Jordan Bone", "val": 4.0}, {"name": "Sindarius Thornwell", "val": 3.4}, {"name": "Gary Clark", "val": 3.4}, {"name": "Karim Mané", "val": 1.1}] },
      reb: { name: "Nikola Vučević", val: 11.8, all: [{"name": "Nikola Vučević", "val": 11.8}, {"name": "Wendell Carter Jr.", "val": 8.8}, {"name": "Aaron Gordon", "val": 6.6}, {"name": "Mo Bamba", "val": 5.8}, {"name": "Al-Farouq Aminu", "val": 5.4}, {"name": "Ignas Brazdeikis", "val": 5.1}, {"name": "Khem Birch", "val": 5.1}, {"name": "R.J. Hampton", "val": 5.0}, {"name": "Moritz Wagner", "val": 4.9}, {"name": "Donta Hall", "val": 4.8}, {"name": "Otto Porter Jr.", "val": 4.7}, {"name": "Cole Anthony", "val": 4.7}, {"name": "Michael Carter-Williams", "val": 4.5}, {"name": "James Ennis III", "val": 4.0}, {"name": "Chuma Okeke", "val": 4.0}, {"name": "Terrence Ross", "val": 3.4}, {"name": "Gary Clark", "val": 3.2}, {"name": "Dwayne Bacon", "val": 3.1}, {"name": "Markelle Fultz", "val": 3.1}, {"name": "Frank Mason III", "val": 3.0}, {"name": "Evan Fournier", "val": 2.9}, {"name": "Chasson Randle", "val": 2.0}, {"name": "Robert Franks", "val": 2.0}, {"name": "Sindarius Thornwell", "val": 1.9}, {"name": "Jordan Bone", "val": 1.7}, {"name": "Gary Harris", "val": 1.6}, {"name": "Karim Mané", "val": 1.4}, {"name": "Devin Cannady", "val": 0.6}] },
      ast: { name: "Markelle Fultz", val: 5.4, all: [{"name": "Markelle Fultz", "val": 5.4}, {"name": "Aaron Gordon", "val": 4.2}, {"name": "Michael Carter-Williams", "val": 4.2}, {"name": "Cole Anthony", "val": 4.1}, {"name": "Nikola Vučević", "val": 3.8}, {"name": "Evan Fournier", "val": 3.7}, {"name": "Frank Mason III", "val": 3.0}, {"name": "R.J. Hampton", "val": 2.8}, {"name": "Sindarius Thornwell", "val": 2.4}, {"name": "Gary Harris", "val": 2.3}, {"name": "Terrence Ross", "val": 2.3}, {"name": "Chuma Okeke", "val": 2.2}, {"name": "Ignas Brazdeikis", "val": 2.0}, {"name": "Chasson Randle", "val": 1.8}, {"name": "Otto Porter Jr.", "val": 1.7}, {"name": "Al-Farouq Aminu", "val": 1.7}, {"name": "Wendell Carter Jr.", "val": 1.6}, {"name": "James Ennis III", "val": 1.5}, {"name": "Dwayne Bacon", "val": 1.3}, {"name": "Jordan Bone", "val": 1.3}, {"name": "Khem Birch", "val": 1.1}, {"name": "Moritz Wagner", "val": 1.1}, {"name": "Gary Clark", "val": 0.9}, {"name": "Mo Bamba", "val": 0.8}, {"name": "Donta Hall", "val": 0.8}, {"name": "Robert Franks", "val": 0.7}, {"name": "Karim Mané", "val": 0.4}, {"name": "Devin Cannady", "val": 0.1}] },
      stl: { name: "Otto Porter Jr.", val: 1.3, all: [{"name": "Otto Porter Jr.", "val": 1.3}, {"name": "Sindarius Thornwell", "val": 1.1}, {"name": "Chuma Okeke", "val": 1.1}, {"name": "Nikola Vučević", "val": 1.0}, {"name": "Terrence Ross", "val": 1.0}, {"name": "Al-Farouq Aminu", "val": 1.0}, {"name": "Markelle Fultz", "val": 1.0}, {"name": "Evan Fournier", "val": 1.0}, {"name": "Michael Carter-Williams", "val": 0.8}, {"name": "James Ennis III", "val": 0.8}, {"name": "Wendell Carter Jr.", "val": 0.8}, {"name": "Khem Birch", "val": 0.7}, {"name": "Cole Anthony", "val": 0.6}, {"name": "Devin Cannady", "val": 0.6}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "Dwayne Bacon", "val": 0.6}, {"name": "Gary Harris", "val": 0.6}, {"name": "R.J. Hampton", "val": 0.6}, {"name": "Ignas Brazdeikis", "val": 0.5}, {"name": "Chasson Randle", "val": 0.5}, {"name": "Moritz Wagner", "val": 0.4}, {"name": "Robert Franks", "val": 0.4}, {"name": "Donta Hall", "val": 0.4}, {"name": "Gary Clark", "val": 0.3}, {"name": "Mo Bamba", "val": 0.3}, {"name": "Jordan Bone", "val": 0.1}, {"name": "Frank Mason III", "val": 0.0}, {"name": "Karim Mané", "val": 0.0}] },
      blk: { name: "Mo Bamba", val: 1.3, all: [{"name": "Mo Bamba", "val": 1.3}, {"name": "Aaron Gordon", "val": 0.8}, {"name": "Donta Hall", "val": 0.8}, {"name": "Wendell Carter Jr.", "val": 0.8}, {"name": "Moritz Wagner", "val": 0.8}, {"name": "Nikola Vučević", "val": 0.6}, {"name": "Khem Birch", "val": 0.6}, {"name": "Al-Farouq Aminu", "val": 0.5}, {"name": "Chuma Okeke", "val": 0.5}, {"name": "Michael Carter-Williams", "val": 0.5}, {"name": "Terrence Ross", "val": 0.5}, {"name": "Cole Anthony", "val": 0.4}, {"name": "Gary Harris", "val": 0.4}, {"name": "Robert Franks", "val": 0.4}, {"name": "Ignas Brazdeikis", "val": 0.4}, {"name": "Markelle Fultz", "val": 0.3}, {"name": "R.J. Hampton", "val": 0.3}, {"name": "Evan Fournier", "val": 0.3}, {"name": "Gary Clark", "val": 0.2}, {"name": "James Ennis III", "val": 0.2}, {"name": "Karim Mané", "val": 0.2}, {"name": "Chasson Randle", "val": 0.1}, {"name": "Sindarius Thornwell", "val": 0.1}, {"name": "Dwayne Bacon", "val": 0.1}, {"name": "Devin Cannady", "val": 0.1}, {"name": "Frank Mason III", "val": 0.0}, {"name": "Otto Porter Jr.", "val": 0.0}, {"name": "Jordan Bone", "val": 0.0}] },
    },
    avail: [
      { name: "Dwayne Bacon", g: 72 },
      { name: "Khem Birch", g: 48 },
      { name: "Cole Anthony", g: 47 },
      { name: "Mo Bamba", g: 46 },
      { name: "Terrence Ross", g: 46 },
      { name: "Chuma Okeke", g: 45 },
      { name: "Nikola Vučević", g: 44 },
      { name: "Chasson Randle", g: 41 },
      { name: "James Ennis III", g: 41 },
      { name: "Gary Clark", g: 35 },
      { name: "Michael Carter-Williams", g: 31 },
      { name: "R.J. Hampton", g: 26 },
      { name: "Evan Fournier", g: 26 },
      { name: "Aaron Gordon", g: 25 },
      { name: "Wendell Carter Jr.", g: 22 },
      { name: "Gary Harris", g: 20 },
      { name: "Al-Farouq Aminu", g: 17 },
      { name: "Jordan Bone", g: 14 },
      { name: "Donta Hall", g: 13 },
      { name: "Moritz Wagner", g: 11 },
      { name: "Karim Mané", g: 10 },
      { name: "Ignas Brazdeikis", g: 8 },
      { name: "Devin Cannady", g: 8 },
      { name: "Markelle Fultz", g: 8 },
      { name: "Robert Franks", g: 7 },
      { name: "Sindarius Thornwell", g: 7 },
      { name: "Frank Mason III", g: 4 },
      { name: "Otto Porter Jr.", g: 3 },
    ]
  },

  "2021-22": {
    w: 22, l: 60,
    topW:   { pts: 114, opp: 95, against: "Chicago Bulls" },
    worstL: { pts: 108, opp: 150, against: "Brooklyn Nets" },
    conf_rank: 15,
    games: buildGames(
      "LLWLLLLWLLWLLLWLLLLLLLWLLLLLLLWWLLLLLLLLLLWLLLLWLWWLWLLWLLLLWWLWLLWWLLLWWLLLLLLWLW",
      ["San Antonio Spurs", "New York Knicks", "New York Knicks", "Miami Heat", "Charlotte Hornets", "Toronto Raptors", "Detroit Pistons", "Minnesota Timberwolves", "Boston Celtics", "San Antonio Spurs", "Utah Jazz", "Brooklyn Nets", "Washington Wizards", "Atlanta Hawks", "New York Knicks", "Brooklyn Nets", "Milwaukee Bucks", "Milwaukee Bucks", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Philadelphia 76ers", "Denver Nuggets", "Houston Rockets", "Golden State Warriors", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Atlanta Hawks", "Miami Heat", "Brooklyn Nets", "Atlanta Hawks", "New Orleans Pelicans", "Miami Heat", "Milwaukee Bucks", "Milwaukee Bucks", "Boston Celtics", "Chicago Bulls", "Philadelphia 76ers", "Detroit Pistons", "Washington Wizards", "Washington Wizards", "Charlotte Hornets", "Dallas Mavericks", "Portland Trail Blazers", "Philadelphia 76ers", "Los Angeles Lakers", "Chicago Bulls", "Los Angeles Clippers", "Detroit Pistons", "Dallas Mavericks", "Chicago Bulls", "Indiana Pacers", "Memphis Grizzlies", "Boston Celtics", "Portland Trail Blazers", "Utah Jazz", "Phoenix Suns", "Denver Nuggets", "Atlanta Hawks", "Houston Rockets", "Indiana Pacers", "Indiana Pacers", "Toronto Raptors", "Memphis Grizzlies", "Phoenix Suns", "New Orleans Pelicans", "Minnesota Timberwolves", "Philadelphia 76ers", "Brooklyn Nets", "Detroit Pistons", "Oklahoma City Thunder", "Golden State Warriors", "Oklahoma City Thunder", "Sacramento Kings", "Cleveland Cavaliers", "Washington Wizards", "Toronto Raptors", "New York Knicks", "Cleveland Cavaliers", "Charlotte Hornets", "Miami Heat"],
      [97, 96, 110, 90, 111, 109, 103, 115, 79, 89, 107, 90, 92, 111, 104, 113, 108, 92, 99, 88, 92, 96, 108, 116, 95, 130, 104, 94, 99, 105, 100, 104, 104, 83, 110, 118, 111, 98, 106, 92, 100, 106, 116, 92, 88, 110, 105, 114, 102, 119, 110, 115, 119, 115, 83, 113, 99, 105, 111, 109, 119, 119, 114, 103, 96, 99, 108, 118, 114, 108, 120, 90, 94, 102, 110, 101, 110, 89, 88, 120, 101, 125],
      [-26, -25, 6, -17, -9, -1, -7, 18, -13, -13, 7, -33, -12, -18, 6, -2, -9, -31, -7, -35, -13, -5, 5, -2, -31, -12, -2, -12, -12, -10, 7, 6, -6, -10, -17, -18, -5, -4, -10, -5, -2, -6, 7, -16, -10, -13, -11, 19, -9, 16, 2, -11, 1, -20, -33, 18, -15, -27, -10, -21, 8, 16, -8, 6, -28, -3, 6, 8, -2, -42, -14, 5, 4, -16, -4, -6, -17, -13, -30, 5, -27, 14]
    ),
    leaders: {
      pts: { name: "Cole Anthony", val: 16.3, all: [{"name": "Cole Anthony", "val": 16.3}, {"name": "Franz Wagner", "val": 15.2}, {"name": "Wendell Carter Jr.", "val": 15.0}, {"name": "Jalen Suggs", "val": 11.8}, {"name": "Gary Harris", "val": 11.1}, {"name": "Markelle Fultz", "val": 10.8}, {"name": "Mo Bamba", "val": 10.6}, {"name": "Terrence Ross", "val": 10.0}, {"name": "Devin Cannady", "val": 10.0}, {"name": "Moritz Wagner", "val": 9.0}, {"name": "Chuma Okeke", "val": 8.6}, {"name": "R.J. Hampton", "val": 7.6}, {"name": "Robin Lopez", "val": 7.1}, {"name": "B.J. Johnson", "val": 6.5}, {"name": "Hassani Gravett", "val": 6.3}, {"name": "Ignas Brazdeikis", "val": 5.0}, {"name": "Admiral Schofield", "val": 3.8}, {"name": "Tim Frazier", "val": 3.7}, {"name": "Mychal Mulder", "val": 3.7}, {"name": "Jeff Dowtin Jr.", "val": 3.3}, {"name": "Aleem Ford", "val": 2.8}, {"name": "Freddie Gillespie", "val": 2.3}] },
      reb: { name: "Wendell Carter Jr.", val: 10.5, all: [{"name": "Wendell Carter Jr.", "val": 10.5}, {"name": "Mo Bamba", "val": 8.1}, {"name": "Cole Anthony", "val": 5.4}, {"name": "Chuma Okeke", "val": 5.0}, {"name": "Franz Wagner", "val": 4.5}, {"name": "Freddie Gillespie", "val": 4.0}, {"name": "B.J. Johnson", "val": 3.8}, {"name": "Moritz Wagner", "val": 3.7}, {"name": "Jalen Suggs", "val": 3.6}, {"name": "Robin Lopez", "val": 3.5}, {"name": "Aleem Ford", "val": 3.0}, {"name": "R.J. Hampton", "val": 3.0}, {"name": "Jeff Dowtin Jr.", "val": 2.8}, {"name": "Markelle Fultz", "val": 2.7}, {"name": "Hassani Gravett", "val": 2.6}, {"name": "Terrence Ross", "val": 2.6}, {"name": "Admiral Schofield", "val": 2.3}, {"name": "Gary Harris", "val": 2.0}, {"name": "Tim Frazier", "val": 1.9}, {"name": "Ignas Brazdeikis", "val": 1.7}, {"name": "Mychal Mulder", "val": 1.4}, {"name": "Devin Cannady", "val": 1.2}] },
      ast: { name: "Cole Anthony", val: 5.7, all: [{"name": "Cole Anthony", "val": 5.7}, {"name": "Markelle Fultz", "val": 5.5}, {"name": "Jalen Suggs", "val": 4.4}, {"name": "Tim Frazier", "val": 3.3}, {"name": "Franz Wagner", "val": 2.9}, {"name": "Wendell Carter Jr.", "val": 2.8}, {"name": "R.J. Hampton", "val": 2.5}, {"name": "Hassani Gravett", "val": 2.5}, {"name": "Devin Cannady", "val": 2.0}, {"name": "Terrence Ross", "val": 1.8}, {"name": "Gary Harris", "val": 1.8}, {"name": "Jeff Dowtin Jr.", "val": 1.8}, {"name": "Chuma Okeke", "val": 1.7}, {"name": "Robin Lopez", "val": 1.5}, {"name": "Moritz Wagner", "val": 1.4}, {"name": "Mo Bamba", "val": 1.2}, {"name": "Ignas Brazdeikis", "val": 0.9}, {"name": "Admiral Schofield", "val": 0.7}, {"name": "Freddie Gillespie", "val": 0.6}, {"name": "Aleem Ford", "val": 0.4}, {"name": "Mychal Mulder", "val": 0.2}, {"name": "B.J. Johnson", "val": 0.0}] },
      stl: { name: "Chuma Okeke", val: 1.4, all: [{"name": "Chuma Okeke", "val": 1.4}, {"name": "Jeff Dowtin Jr.", "val": 1.3}, {"name": "Jalen Suggs", "val": 1.2}, {"name": "Markelle Fultz", "val": 1.1}, {"name": "Devin Cannady", "val": 1.0}, {"name": "Gary Harris", "val": 1.0}, {"name": "Franz Wagner", "val": 0.9}, {"name": "R.J. Hampton", "val": 0.7}, {"name": "Cole Anthony", "val": 0.7}, {"name": "Hassani Gravett", "val": 0.6}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Mo Bamba", "val": 0.5}, {"name": "Terrence Ross", "val": 0.4}, {"name": "Tim Frazier", "val": 0.3}, {"name": "Moritz Wagner", "val": 0.3}, {"name": "Freddie Gillespie", "val": 0.3}, {"name": "Mychal Mulder", "val": 0.3}, {"name": "Aleem Ford", "val": 0.2}, {"name": "Ignas Brazdeikis", "val": 0.2}, {"name": "Robin Lopez", "val": 0.1}, {"name": "Admiral Schofield", "val": 0.1}, {"name": "B.J. Johnson", "val": 0.0}] },
      blk: { name: "Mo Bamba", val: 1.7, all: [{"name": "Mo Bamba", "val": 1.7}, {"name": "Freddie Gillespie", "val": 1.0}, {"name": "Wendell Carter Jr.", "val": 0.7}, {"name": "Devin Cannady", "val": 0.6}, {"name": "Chuma Okeke", "val": 0.6}, {"name": "Robin Lopez", "val": 0.5}, {"name": "Franz Wagner", "val": 0.4}, {"name": "Jalen Suggs", "val": 0.4}, {"name": "Cole Anthony", "val": 0.3}, {"name": "B.J. Johnson", "val": 0.3}, {"name": "Markelle Fultz", "val": 0.3}, {"name": "R.J. Hampton", "val": 0.2}, {"name": "Terrence Ross", "val": 0.2}, {"name": "Moritz Wagner", "val": 0.2}, {"name": "Hassani Gravett", "val": 0.1}, {"name": "Tim Frazier", "val": 0.1}, {"name": "Gary Harris", "val": 0.1}, {"name": "Mychal Mulder", "val": 0.1}, {"name": "Ignas Brazdeikis", "val": 0.1}, {"name": "Admiral Schofield", "val": 0.1}, {"name": "Jeff Dowtin Jr.", "val": 0.0}, {"name": "Aleem Ford", "val": 0.0}] },
    },
    avail: [
      { name: "Franz Wagner", g: 79 },
      { name: "Mo Bamba", g: 71 },
      { name: "Chuma Okeke", g: 70 },
      { name: "Cole Anthony", g: 65 },
      { name: "R.J. Hampton", g: 64 },
      { name: "Terrence Ross", g: 63 },
      { name: "Moritz Wagner", g: 63 },
      { name: "Wendell Carter Jr.", g: 62 },
      { name: "Gary Harris", g: 61 },
      { name: "Jalen Suggs", g: 48 },
      { name: "Ignas Brazdeikis", g: 42 },
      { name: "Admiral Schofield", g: 38 },
      { name: "Robin Lopez", g: 36 },
      { name: "Markelle Fultz", g: 18 },
      { name: "Mychal Mulder", g: 15 },
      { name: "Tim Frazier", g: 10 },
      { name: "Freddie Gillespie", g: 9 },
      { name: "Hassani Gravett", g: 8 },
      { name: "Aleem Ford", g: 5 },
      { name: "Devin Cannady", g: 5 },
      { name: "Jeff Dowtin Jr.", g: 4 },
      { name: "B.J. Johnson", g: 4 },
    ]
  },

  "2022-23": {
    w: 34, l: 48,
    topW:   { pts: 128, opp: 102, against: "Detroit Pistons" },
    worstL: { pts: 103, opp: 133, against: "Philadelphia 76ers" },
    conf_rank: 13,
    games: buildGames(
      "LLLLLWLLWLLWWLLWLLLLLLLLLWWWWWWLWWLLLWLWLWLLWLWWLLWLWWLWLWLWLWLWLLLWLLWLWWWLWWLLLL",
      ["Detroit Pistons", "Atlanta Hawks", "Boston Celtics", "New York Knicks", "Cleveland Cavaliers", "Charlotte Hornets", "Dallas Mavericks", "Oklahoma City Thunder", "Golden State Warriors", "Sacramento Kings", "Houston Rockets", "Dallas Mavericks", "Phoenix Suns", "Charlotte Hornets", "Minnesota Timberwolves", "Chicago Bulls", "Indiana Pacers", "Indiana Pacers", "Philadelphia 76ers", "Philadelphia 76ers", "Brooklyn Nets", "Atlanta Hawks", "Cleveland Cavaliers", "Toronto Raptors", "Milwaukee Bucks", "Los Angeles Clippers", "Toronto Raptors", "Toronto Raptors", "Atlanta Hawks", "Boston Celtics", "Boston Celtics", "Atlanta Hawks", "Houston Rockets", "San Antonio Spurs", "Los Angeles Lakers", "Detroit Pistons", "Washington Wizards", "Oklahoma City Thunder", "Memphis Grizzlies", "Golden State Warriors", "Sacramento Kings", "Portland Trail Blazers", "Utah Jazz", "Denver Nuggets", "New Orleans Pelicans", "Washington Wizards", "Boston Celtics", "Indiana Pacers", "Miami Heat", "Chicago Bulls", "Philadelphia 76ers", "Philadelphia 76ers", "Minnesota Timberwolves", "Charlotte Hornets", "New York Knicks", "Denver Nuggets", "Miami Heat", "Chicago Bulls", "Toronto Raptors", "Detroit Pistons", "Indiana Pacers", "New Orleans Pelicans", "Milwaukee Bucks", "Charlotte Hornets", "Portland Trail Blazers", "Milwaukee Bucks", "Utah Jazz", "Miami Heat", "San Antonio Spurs", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Lakers", "Washington Wizards", "New York Knicks", "Brooklyn Nets", "Memphis Grizzlies", "Washington Wizards", "Detroit Pistons", "Cleveland Cavaliers", "Cleveland Cavaliers", "Brooklyn Nets", "Miami Heat"],
      [109, 98, 120, 102, 92, 113, 105, 108, 130, 123, 127, 94, 114, 105, 108, 108, 113, 102, 99, 103, 102, 108, 96, 108, 102, 116, 113, 111, 135, 117, 95, 125, 116, 133, 110, 101, 100, 126, 115, 115, 111, 109, 108, 116, 123, 118, 113, 126, 105, 109, 119, 94, 127, 119, 98, 115, 103, 100, 113, 108, 108, 101, 117, 117, 119, 123, 124, 126, 114, 113, 113, 105, 122, 111, 119, 108, 116, 128, 113, 94, 84, 110],
      [-4, -10, -6, -13, -11, 20, -9, -8, 1, -3, -7, 7, 17, -7, -18, 1, -1, -21, -8, -30, -7, -17, -11, -13, -7, 5, 4, 12, 11, 8, 3, -1, 6, 20, -19, -20, -19, 11, -8, 14, -25, 3, -4, -3, 13, -20, 15, 6, -5, -19, 10, -11, 7, 6, -4, 11, -4, 9, -10, 2, -13, 8, -22, 11, -3, -11, -7, 12, -18, -3, 5, -6, 10, 5, 13, -5, 7, 26, -4, -24, -17, -13]
    ),
    leaders: {
      pts: { name: "Paolo Banchero", val: 20.0, all: [{"name": "Paolo Banchero", "val": 20.0}, {"name": "Franz Wagner", "val": 18.6}, {"name": "Wendell Carter Jr.", "val": 15.2}, {"name": "Markelle Fultz", "val": 14.0}, {"name": "Cole Anthony", "val": 13.0}, {"name": "Moritz Wagner", "val": 10.5}, {"name": "Jalen Suggs", "val": 9.9}, {"name": "Bol Bol", "val": 9.1}, {"name": "Gary Harris", "val": 8.3}, {"name": "Terrence Ross", "val": 8.0}, {"name": "Mo Bamba", "val": 7.3}, {"name": "Jay Scrubb", "val": 6.5}, {"name": "Goga Bitadze", "val": 5.8}, {"name": "R.J. Hampton", "val": 5.7}, {"name": "Jonathan Isaac", "val": 5.0}, {"name": "Chuma Okeke", "val": 4.7}, {"name": "Michael Carter-Williams", "val": 4.3}, {"name": "Admiral Schofield", "val": 4.2}, {"name": "Kevon Harris", "val": 4.1}, {"name": "Caleb Houstan", "val": 3.8}] },
      reb: { name: "Wendell Carter Jr.", val: 8.7, all: [{"name": "Wendell Carter Jr.", "val": 8.7}, {"name": "Paolo Banchero", "val": 6.9}, {"name": "Bol Bol", "val": 5.8}, {"name": "Goga Bitadze", "val": 5.2}, {"name": "Cole Anthony", "val": 4.8}, {"name": "Mo Bamba", "val": 4.6}, {"name": "Moritz Wagner", "val": 4.5}, {"name": "Franz Wagner", "val": 4.1}, {"name": "Jonathan Isaac", "val": 4.0}, {"name": "Markelle Fultz", "val": 3.9}, {"name": "Chuma Okeke", "val": 3.6}, {"name": "Jay Scrubb", "val": 3.0}, {"name": "Jalen Suggs", "val": 3.0}, {"name": "Kevon Harris", "val": 2.1}, {"name": "Terrence Ross", "val": 2.0}, {"name": "Gary Harris", "val": 2.0}, {"name": "Caleb Houstan", "val": 1.9}, {"name": "Admiral Schofield", "val": 1.7}, {"name": "R.J. Hampton", "val": 1.5}, {"name": "Michael Carter-Williams", "val": 1.3}] },
      ast: { name: "Markelle Fultz", val: 5.7, all: [{"name": "Markelle Fultz", "val": 5.7}, {"name": "Cole Anthony", "val": 3.9}, {"name": "Paolo Banchero", "val": 3.7}, {"name": "Franz Wagner", "val": 3.5}, {"name": "Jalen Suggs", "val": 2.9}, {"name": "Wendell Carter Jr.", "val": 2.3}, {"name": "Michael Carter-Williams", "val": 1.8}, {"name": "Moritz Wagner", "val": 1.5}, {"name": "Chuma Okeke", "val": 1.4}, {"name": "Terrence Ross", "val": 1.3}, {"name": "R.J. Hampton", "val": 1.3}, {"name": "Gary Harris", "val": 1.2}, {"name": "Goga Bitadze", "val": 1.2}, {"name": "Mo Bamba", "val": 1.1}, {"name": "Bol Bol", "val": 1.0}, {"name": "Admiral Schofield", "val": 0.8}, {"name": "Caleb Houstan", "val": 0.6}, {"name": "Jay Scrubb", "val": 0.5}, {"name": "Kevon Harris", "val": 0.5}, {"name": "Jonathan Isaac", "val": 0.5}] },
      stl: { name: "Markelle Fultz", val: 1.5, all: [{"name": "Markelle Fultz", "val": 1.5}, {"name": "Jonathan Isaac", "val": 1.3}, {"name": "Jalen Suggs", "val": 1.3}, {"name": "Franz Wagner", "val": 1.0}, {"name": "Jay Scrubb", "val": 1.0}, {"name": "Gary Harris", "val": 0.9}, {"name": "Paolo Banchero", "val": 0.8}, {"name": "Chuma Okeke", "val": 0.7}, {"name": "Moritz Wagner", "val": 0.6}, {"name": "Terrence Ross", "val": 0.6}, {"name": "Cole Anthony", "val": 0.6}, {"name": "R.J. Hampton", "val": 0.6}, {"name": "Kevon Harris", "val": 0.5}, {"name": "Wendell Carter Jr.", "val": 0.5}, {"name": "Bol Bol", "val": 0.4}, {"name": "Goga Bitadze", "val": 0.4}, {"name": "Mo Bamba", "val": 0.3}, {"name": "Michael Carter-Williams", "val": 0.3}, {"name": "Caleb Houstan", "val": 0.2}, {"name": "Admiral Schofield", "val": 0.2}] },
      blk: { name: "Bol Bol", val: 1.2, all: [{"name": "Bol Bol", "val": 1.2}, {"name": "Mo Bamba", "val": 1.0}, {"name": "Goga Bitadze", "val": 0.9}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Paolo Banchero", "val": 0.5}, {"name": "Cole Anthony", "val": 0.5}, {"name": "Jalen Suggs", "val": 0.5}, {"name": "Jonathan Isaac", "val": 0.4}, {"name": "Chuma Okeke", "val": 0.4}, {"name": "Markelle Fultz", "val": 0.4}, {"name": "Gary Harris", "val": 0.3}, {"name": "Michael Carter-Williams", "val": 0.3}, {"name": "Moritz Wagner", "val": 0.2}, {"name": "Franz Wagner", "val": 0.2}, {"name": "Terrence Ross", "val": 0.2}, {"name": "R.J. Hampton", "val": 0.2}, {"name": "Caleb Houstan", "val": 0.1}, {"name": "Kevon Harris", "val": 0.1}, {"name": "Admiral Schofield", "val": 0.1}, {"name": "Jay Scrubb", "val": 0.0}] },
    },
    avail: [
      { name: "Franz Wagner", g: 80 },
      { name: "Paolo Banchero", g: 72 },
      { name: "Bol Bol", g: 70 },
      { name: "Markelle Fultz", g: 60 },
      { name: "Cole Anthony", g: 60 },
      { name: "Wendell Carter Jr.", g: 57 },
      { name: "Moritz Wagner", g: 57 },
      { name: "Jalen Suggs", g: 53 },
      { name: "Caleb Houstan", g: 51 },
      { name: "Gary Harris", g: 48 },
      { name: "Terrence Ross", g: 42 },
      { name: "Mo Bamba", g: 40 },
      { name: "Admiral Schofield", g: 37 },
      { name: "Kevon Harris", g: 34 },
      { name: "Chuma Okeke", g: 27 },
      { name: "R.J. Hampton", g: 26 },
      { name: "Goga Bitadze", g: 17 },
      { name: "Jonathan Isaac", g: 11 },
      { name: "Michael Carter-Williams", g: 4 },
      { name: "Jay Scrubb", g: 2 },
    ]
  },

  "2023-24": {
    w: 47, l: 35,
    topW:   { pts: 123, opp: 91, against: "Detroit Pistons" },
    worstL: { pts: 101, opp: 129, against: "Brooklyn Nets" },
    conf_rank: 5,
    games: buildGames(
      "WWLLWWLLWLWWWWWWWWWLLWWLLLLWWLWLLLWWLLLWLLWLLWLWWWLWWLWWWLWWWWWLLWWWWWLLLWWWLWLLLW",
      ["Houston Rockets", "Portland Trail Blazers", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Los Angeles Lakers", "Dallas Mavericks", "Atlanta Hawks", "Milwaukee Bucks", "Brooklyn Nets", "Chicago Bulls", "Chicago Bulls", "Indiana Pacers", "Toronto Raptors", "Denver Nuggets", "Boston Celtics", "Charlotte Hornets", "Washington Wizards", "Washington Wizards", "Brooklyn Nets", "Cleveland Cavaliers", "Detroit Pistons", "Cleveland Cavaliers", "Boston Celtics", "Boston Celtics", "Miami Heat", "Milwaukee Bucks", "Indiana Pacers", "Washington Wizards", "Philadelphia 76ers", "New York Knicks", "Phoenix Suns", "Golden State Warriors", "Sacramento Kings", "Denver Nuggets", "Atlanta Hawks", "Minnesota Timberwolves", "Miami Heat", "Oklahoma City Thunder", "New York Knicks", "Atlanta Hawks", "Philadelphia 76ers", "Miami Heat", "Cleveland Cavaliers", "Memphis Grizzlies", "Phoenix Suns", "Dallas Mavericks", "San Antonio Spurs", "Minnesota Timberwolves", "Detroit Pistons", "Miami Heat", "San Antonio Spurs", "Chicago Bulls", "Oklahoma City Thunder", "New York Knicks", "Cleveland Cavaliers", "Detroit Pistons", "Atlanta Hawks", "Brooklyn Nets", "Utah Jazz", "Detroit Pistons", "Charlotte Hornets", "Washington Wizards", "New York Knicks", "Indiana Pacers", "Brooklyn Nets", "Toronto Raptors", "Toronto Raptors", "Charlotte Hornets", "New Orleans Pelicans", "Sacramento Kings", "Golden State Warriors", "Los Angeles Clippers", "Memphis Grizzlies", "Portland Trail Blazers", "New Orleans Pelicans", "Charlotte Hornets", "Chicago Bulls", "Houston Rockets", "Milwaukee Bucks", "Philadelphia 76ers", "Milwaukee Bucks"],
      [116, 102, 103, 102, 115, 120, 102, 119, 112, 104, 96, 103, 128, 126, 124, 113, 130, 139, 130, 101, 111, 123, 104, 111, 97, 106, 114, 117, 127, 92, 117, 107, 115, 135, 122, 117, 92, 96, 100, 98, 104, 109, 105, 99, 106, 113, 129, 108, 108, 111, 95, 127, 114, 113, 118, 116, 112, 92, 108, 115, 113, 101, 119, 74, 97, 114, 113, 111, 112, 121, 107, 93, 97, 118, 104, 117, 115, 113, 106, 99, 113, 113],
      [30, 5, -3, -16, 2, 19, -15, -1, 15, -20, 2, 6, 12, 19, 5, 17, 13, 19, 5, -28, -10, 32, 10, -17, -17, -9, -4, 7, 8, -20, 9, -5, -6, -3, 2, 7, -21, -3, -12, 4, -2, -15, 18, -27, -1, 15, -2, 10, 2, 12, -26, 16, 6, -14, 18, 7, 3, -17, 27, 8, 22, 12, 10, -24, -14, 8, 10, 15, 20, 15, -2, -8, -3, 30, 1, 9, -9, 15, -12, -18, -12, 25]
    ),
    leaders: {
      pts: { name: "Paolo Banchero", val: 22.6, all: [{"name": "Paolo Banchero", "val": 22.6}, {"name": "Franz Wagner", "val": 19.7}, {"name": "Jalen Suggs", "val": 12.6}, {"name": "Cole Anthony", "val": 11.6}, {"name": "Wendell Carter Jr.", "val": 11.0}, {"name": "Moritz Wagner", "val": 10.9}, {"name": "Markelle Fultz", "val": 7.8}, {"name": "Gary Harris", "val": 6.9}, {"name": "Jonathan Isaac", "val": 6.8}, {"name": "Goga Bitadze", "val": 5.0}, {"name": "Anthony Black", "val": 4.6}, {"name": "Joe Ingles", "val": 4.4}, {"name": "Caleb Houstan", "val": 4.3}, {"name": "Trevelin Queen", "val": 2.9}, {"name": "Chuma Okeke", "val": 2.3}, {"name": "Kevon Harris", "val": 2.0}, {"name": "Jett Howard", "val": 1.6}, {"name": "Admiral Schofield", "val": 1.1}] },
      reb: { name: "Paolo Banchero", val: 6.9, all: [{"name": "Paolo Banchero", "val": 6.9}, {"name": "Wendell Carter Jr.", "val": 6.9}, {"name": "Franz Wagner", "val": 5.3}, {"name": "Goga Bitadze", "val": 4.6}, {"name": "Jonathan Isaac", "val": 4.5}, {"name": "Moritz Wagner", "val": 4.3}, {"name": "Cole Anthony", "val": 3.8}, {"name": "Markelle Fultz", "val": 3.2}, {"name": "Jalen Suggs", "val": 3.1}, {"name": "Joe Ingles", "val": 2.1}, {"name": "Anthony Black", "val": 2.0}, {"name": "Gary Harris", "val": 1.7}, {"name": "Chuma Okeke", "val": 1.7}, {"name": "Caleb Houstan", "val": 1.4}, {"name": "Trevelin Queen", "val": 1.4}, {"name": "Kevon Harris", "val": 1.0}, {"name": "Admiral Schofield", "val": 0.7}, {"name": "Jett Howard", "val": 0.4}] },
      ast: { name: "Paolo Banchero", val: 5.4, all: [{"name": "Paolo Banchero", "val": 5.4}, {"name": "Franz Wagner", "val": 3.7}, {"name": "Joe Ingles", "val": 3.0}, {"name": "Cole Anthony", "val": 2.9}, {"name": "Markelle Fultz", "val": 2.8}, {"name": "Jalen Suggs", "val": 2.7}, {"name": "Wendell Carter Jr.", "val": 1.7}, {"name": "Gary Harris", "val": 1.6}, {"name": "Goga Bitadze", "val": 1.3}, {"name": "Trevelin Queen", "val": 1.3}, {"name": "Anthony Black", "val": 1.3}, {"name": "Moritz Wagner", "val": 1.2}, {"name": "Jonathan Isaac", "val": 0.5}, {"name": "Caleb Houstan", "val": 0.5}, {"name": "Kevon Harris", "val": 0.5}, {"name": "Chuma Okeke", "val": 0.4}, {"name": "Jett Howard", "val": 0.3}, {"name": "Admiral Schofield", "val": 0.3}] },
      stl: { name: "Jalen Suggs", val: 1.4, all: [{"name": "Jalen Suggs", "val": 1.4}, {"name": "Franz Wagner", "val": 1.1}, {"name": "Markelle Fultz", "val": 1.0}, {"name": "Paolo Banchero", "val": 0.9}, {"name": "Gary Harris", "val": 0.9}, {"name": "Cole Anthony", "val": 0.8}, {"name": "Jonathan Isaac", "val": 0.7}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Joe Ingles", "val": 0.6}, {"name": "Goga Bitadze", "val": 0.5}, {"name": "Trevelin Queen", "val": 0.5}, {"name": "Anthony Black", "val": 0.5}, {"name": "Moritz Wagner", "val": 0.5}, {"name": "Caleb Houstan", "val": 0.3}, {"name": "Chuma Okeke", "val": 0.2}, {"name": "Jett Howard", "val": 0.1}, {"name": "Admiral Schofield", "val": 0.0}, {"name": "Kevon Harris", "val": 0.0}] },
      blk: { name: "Goga Bitadze", val: 1.2, all: [{"name": "Goga Bitadze", "val": 1.2}, {"name": "Jonathan Isaac", "val": 1.2}, {"name": "Paolo Banchero", "val": 0.6}, {"name": "Jalen Suggs", "val": 0.6}, {"name": "Wendell Carter Jr.", "val": 0.5}, {"name": "Cole Anthony", "val": 0.5}, {"name": "Franz Wagner", "val": 0.4}, {"name": "Trevelin Queen", "val": 0.4}, {"name": "Anthony Black", "val": 0.3}, {"name": "Moritz Wagner", "val": 0.3}, {"name": "Markelle Fultz", "val": 0.3}, {"name": "Gary Harris", "val": 0.3}, {"name": "Joe Ingles", "val": 0.1}, {"name": "Caleb Houstan", "val": 0.1}, {"name": "Chuma Okeke", "val": 0.1}, {"name": "Jett Howard", "val": 0.1}, {"name": "Admiral Schofield", "val": 0.0}, {"name": "Kevon Harris", "val": 0.0}] },
    },
    avail: [
      { name: "Cole Anthony", g: 81 },
      { name: "Paolo Banchero", g: 80 },
      { name: "Moritz Wagner", g: 80 },
      { name: "Jalen Suggs", g: 75 },
      { name: "Franz Wagner", g: 72 },
      { name: "Anthony Black", g: 69 },
      { name: "Joe Ingles", g: 68 },
      { name: "Goga Bitadze", g: 62 },
      { name: "Caleb Houstan", g: 59 },
      { name: "Jonathan Isaac", g: 58 },
      { name: "Wendell Carter Jr.", g: 55 },
      { name: "Gary Harris", g: 54 },
      { name: "Chuma Okeke", g: 47 },
      { name: "Markelle Fultz", g: 43 },
      { name: "Admiral Schofield", g: 23 },
      { name: "Jett Howard", g: 18 },
      { name: "Trevelin Queen", g: 14 },
      { name: "Kevon Harris", g: 2 },
    ]
  },

  "2024-25": {
    w: 41, l: 41,
    topW:   { pts: 121, opp: 91, against: "Sacramento Kings" },
    worstL: { pts: 82, opp: 122, against: "Cleveland Cavaliers" },
    conf_rank: 7,
    games: buildGames(
      "WWLWLLLLLWWWWWWLWWWWWWLWLWLLLWWLLWLWLWLLWLLLLLWLLLLWLWLWWLWLLLLLWLWLWLWWWLWLWWWWWL",
      ["Miami Heat", "Brooklyn Nets", "Memphis Grizzlies", "Indiana Pacers", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Oklahoma City Thunder", "Indiana Pacers", "New Orleans Pelicans", "Washington Wizards", "Charlotte Hornets", "Indiana Pacers", "Philadelphia 76ers", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Lakers", "Detroit Pistons", "Charlotte Hornets", "Chicago Bulls", "Brooklyn Nets", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Philadelphia 76ers", "Phoenix Suns", "Milwaukee Bucks", "New York Knicks", "Oklahoma City Thunder", "Miami Heat", "Boston Celtics", "Miami Heat", "New York Knicks", "Brooklyn Nets", "Detroit Pistons", "Toronto Raptors", "Utah Jazz", "New York Knicks", "Minnesota Timberwolves", "Milwaukee Bucks", "Philadelphia 76ers", "Milwaukee Bucks", "Boston Celtics", "Denver Nuggets", "Toronto Raptors", "Portland Trail Blazers", "Detroit Pistons", "Miami Heat", "Portland Trail Blazers", "Utah Jazz", "Golden State Warriors", "Sacramento Kings", "Denver Nuggets", "San Antonio Spurs", "Atlanta Hawks", "Charlotte Hornets", "Atlanta Hawks", "Memphis Grizzlies", "Washington Wizards", "Cleveland Cavaliers", "Golden State Warriors", "Toronto Raptors", "Toronto Raptors", "Chicago Bulls", "Milwaukee Bucks", "Houston Rockets", "New Orleans Pelicans", "Minnesota Timberwolves", "Cleveland Cavaliers", "Houston Rockets", "Washington Wizards", "Los Angeles Lakers", "Charlotte Hornets", "Dallas Mavericks", "Sacramento Kings", "Los Angeles Clippers", "San Antonio Spurs", "Washington Wizards", "Atlanta Hawks", "Boston Celtics", "Indiana Pacers", "Atlanta Hawks"],
      [116, 116, 111, 119, 99, 109, 85, 86, 111, 115, 121, 114, 94, 98, 109, 93, 119, 111, 95, 133, 123, 100, 106, 106, 94, 115, 109, 91, 99, 121, 108, 88, 85, 102, 96, 106, 92, 103, 89, 106, 104, 93, 94, 100, 93, 79, 121, 119, 90, 99, 99, 130, 90, 112, 106, 102, 114, 104, 110, 82, 115, 102, 113, 123, 111, 84, 113, 111, 108, 108, 120, 118, 111, 92, 121, 87, 116, 109, 119, 96, 129, 105],
      [19, 15, -13, 4, -3, -11, -23, -16, -7, 27, 27, 25, 4, 12, 10, -11, 1, 11, 11, 14, 23, 8, -15, 4, -8, 5, -5, -9, -6, 7, 4, -1, -23, 1, -9, 9, -13, 9, -15, -3, 5, -29, -27, -13, -16, -22, 8, -6, -29, -14, -5, 19, -22, 1, -6, 16, 6, -1, 20, -40, -6, -2, -1, -2, 2, -13, 20, -7, 5, -8, 15, 12, 7, -9, 30, -9, 11, 12, 7, 20, 14, -12]
    ),
    leaders: {
      pts: { name: "Paolo Banchero", val: 25.9, all: [{"name": "Paolo Banchero", "val": 25.9}, {"name": "Franz Wagner", "val": 24.2}, {"name": "Jalen Suggs", "val": 16.2}, {"name": "Moritz Wagner", "val": 12.9}, {"name": "Anthony Black", "val": 9.4}, {"name": "Cole Anthony", "val": 9.4}, {"name": "Wendell Carter Jr.", "val": 9.1}, {"name": "Kentavious Caldwell-Pope", "val": 8.7}, {"name": "Tristan Da Silva", "val": 7.2}, {"name": "Goga Bitadze", "val": 7.2}, {"name": "Jonathan Isaac", "val": 5.4}, {"name": "Trevelin Queen", "val": 4.9}, {"name": "Jett Howard", "val": 4.5}, {"name": "Caleb Houstan", "val": 4.1}, {"name": "Cory Joseph", "val": 3.5}, {"name": "Gary Harris", "val": 3.0}, {"name": "Mac McClung", "val": 0.0}] },
      reb: { name: "Paolo Banchero", val: 7.5, all: [{"name": "Paolo Banchero", "val": 7.5}, {"name": "Wendell Carter Jr.", "val": 7.2}, {"name": "Goga Bitadze", "val": 6.6}, {"name": "Franz Wagner", "val": 5.7}, {"name": "Moritz Wagner", "val": 4.9}, {"name": "Jonathan Isaac", "val": 4.4}, {"name": "Jalen Suggs", "val": 4.0}, {"name": "Tristan Da Silva", "val": 3.3}, {"name": "Cole Anthony", "val": 3.0}, {"name": "Anthony Black", "val": 2.9}, {"name": "Kentavious Caldwell-Pope", "val": 2.2}, {"name": "Trevelin Queen", "val": 1.7}, {"name": "Cory Joseph", "val": 1.5}, {"name": "Gary Harris", "val": 1.3}, {"name": "Caleb Houstan", "val": 1.3}, {"name": "Jett Howard", "val": 1.2}, {"name": "Mac McClung", "val": 0.5}] },
      ast: { name: "Paolo Banchero", val: 4.8, all: [{"name": "Paolo Banchero", "val": 4.8}, {"name": "Franz Wagner", "val": 4.7}, {"name": "Jalen Suggs", "val": 3.7}, {"name": "Anthony Black", "val": 3.1}, {"name": "Cole Anthony", "val": 2.9}, {"name": "Wendell Carter Jr.", "val": 2.0}, {"name": "Goga Bitadze", "val": 2.0}, {"name": "Kentavious Caldwell-Pope", "val": 1.8}, {"name": "Mac McClung", "val": 1.5}, {"name": "Tristan Da Silva", "val": 1.5}, {"name": "Cory Joseph", "val": 1.4}, {"name": "Moritz Wagner", "val": 1.4}, {"name": "Trevelin Queen", "val": 1.2}, {"name": "Jett Howard", "val": 0.7}, {"name": "Jonathan Isaac", "val": 0.6}, {"name": "Gary Harris", "val": 0.6}, {"name": "Caleb Houstan", "val": 0.6}] },
      stl: { name: "Jalen Suggs", val: 1.5, all: [{"name": "Jalen Suggs", "val": 1.5}, {"name": "Franz Wagner", "val": 1.3}, {"name": "Kentavious Caldwell-Pope", "val": 1.3}, {"name": "Anthony Black", "val": 1.1}, {"name": "Trevelin Queen", "val": 1.0}, {"name": "Jonathan Isaac", "val": 0.9}, {"name": "Paolo Banchero", "val": 0.8}, {"name": "Moritz Wagner", "val": 0.8}, {"name": "Wendell Carter Jr.", "val": 0.8}, {"name": "Goga Bitadze", "val": 0.7}, {"name": "Cole Anthony", "val": 0.7}, {"name": "Gary Harris", "val": 0.5}, {"name": "Cory Joseph", "val": 0.5}, {"name": "Tristan Da Silva", "val": 0.4}, {"name": "Caleb Houstan", "val": 0.4}, {"name": "Jett Howard", "val": 0.2}, {"name": "Mac McClung", "val": 0.0}] },
      blk: { name: "Goga Bitadze", val: 1.4, all: [{"name": "Goga Bitadze", "val": 1.4}, {"name": "Jonathan Isaac", "val": 1.1}, {"name": "Jalen Suggs", "val": 0.9}, {"name": "Paolo Banchero", "val": 0.6}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Anthony Black", "val": 0.6}, {"name": "Cole Anthony", "val": 0.5}, {"name": "Franz Wagner", "val": 0.4}, {"name": "Moritz Wagner", "val": 0.4}, {"name": "Kentavious Caldwell-Pope", "val": 0.4}, {"name": "Gary Harris", "val": 0.3}, {"name": "Trevelin Queen", "val": 0.3}, {"name": "Tristan Da Silva", "val": 0.2}, {"name": "Jett Howard", "val": 0.2}, {"name": "Caleb Houstan", "val": 0.1}, {"name": "Cory Joseph", "val": 0.1}, {"name": "Mac McClung", "val": 0.0}] },
    },
    avail: [
      { name: "Anthony Black", g: 78 },
      { name: "Kentavious Caldwell-Pope", g: 77 },
      { name: "Tristan Da Silva", g: 74 },
      { name: "Jonathan Isaac", g: 71 },
      { name: "Goga Bitadze", g: 70 },
      { name: "Wendell Carter Jr.", g: 68 },
      { name: "Cole Anthony", g: 67 },
      { name: "Jett Howard", g: 60 },
      { name: "Franz Wagner", g: 60 },
      { name: "Caleb Houstan", g: 58 },
      { name: "Cory Joseph", g: 50 },
      { name: "Gary Harris", g: 48 },
      { name: "Paolo Banchero", g: 46 },
      { name: "Jalen Suggs", g: 35 },
      { name: "Trevelin Queen", g: 31 },
      { name: "Moritz Wagner", g: 30 },
      { name: "Mac McClung", g: 2 },
    ]
  },

  "2025-26": {
    w: 43, l: 36,
    topW:   { pts: 144, opp: 103, against: "Philadelphia 76ers" },
    worstL: { pts: 87, opp: 139, against: "Toronto Raptors" },
    conf_rank: 8,
    games: buildGames(
      "WLLLLWWLWLWWWLWWWLWWWLWLWLLWLWLWLWLWLWLWWLLLLWWLLWWWLWLWWLLWWWWWWWLLLLLLWLWLWWW",
      ["Miami Heat", "Atlanta Hawks", "Chicago Bulls", "Philadelphia 76ers", "Detroit Pistons", "Charlotte Hornets", "Washington Wizards", "Atlanta Hawks", "Boston Celtics", "Boston Celtics", "Portland Trail Blazers", "New York Knicks", "Brooklyn Nets", "Houston Rockets", "Golden State Warriors", "Los Angeles Clippers", "New York Knicks", "Boston Celtics", "Philadelphia 76ers", "Detroit Pistons", "Chicago Bulls", "San Antonio Spurs", "Miami Heat", "New York Knicks", "Miami Heat", "New York Knicks", "Denver Nuggets", "Utah Jazz", "Golden State Warriors", "Portland Trail Blazers", "Charlotte Hornets", "Denver Nuggets", "Toronto Raptors", "Indiana Pacers", "Chicago Bulls", "Indiana Pacers", "Washington Wizards", "Brooklyn Nets", "Philadelphia 76ers", "New Orleans Pelicans", "Memphis Grizzlies", "Memphis Grizzlies", "Charlotte Hornets", "Cleveland Cavaliers", "Cleveland Cavaliers", "Miami Heat", "Toronto Raptors", "San Antonio Spurs", "Oklahoma City Thunder", "Brooklyn Nets", "Utah Jazz", "Milwaukee Bucks", "Milwaukee Bucks", "Sacramento Kings", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Lakers", "Houston Rockets", "Detroit Pistons", "Washington Wizards", "Dallas Mavericks", "Minnesota Timberwolves", "Milwaukee Bucks", "Cleveland Cavaliers", "Washington Wizards", "Miami Heat", "Atlanta Hawks", "Oklahoma City Thunder", "Charlotte Hornets", "Los Angeles Lakers", "Indiana Pacers", "Cleveland Cavaliers", "Sacramento Kings", "Toronto Raptors", "Phoenix Suns", "Atlanta Hawks", "Dallas Mavericks", "New Orleans Pelicans", "Detroit Pistons"],
      [125, 107, 98, 124, 116, 123, 125, 112, 123, 107, 115, 124, 105, 113, 121, 129, 133, 129, 144, 112, 125, 112, 106, 100, 117, 120, 115, 128, 97, 110, 105, 127, 106, 112, 114, 135, 112, 104, 91, 128, 118, 109, 97, 105, 98, 133, 130, 103, 92, 118, 120, 118, 108, 131, 110, 111, 110, 108, 92, 126, 115, 119, 130, 128, 136, 121, 112, 108, 111, 104, 126, 131, 121, 87, 115, 101, 138, 112, 123],
      [4, -4, -12, -12, -19, 16, 31, -15, 13, -4, 3, 17, 7, -4, 8, 28, 12, -9, 41, 3, 5, -2, 1, -6, 9, -12, -11, 1, -23, 4, -15, 1, -1, 2, -7, 8, -8, 1, -12, 10, 7, -17, -27, -14, -16, 9, 10, -9, -36, 20, 3, 19, -8, 37, -3, 2, 1, -5, -14, 17, 1, 27, 39, 6, 5, 4, -12, -5, -19, -1, -2, -5, 4, -52, 4, -29, 11, 4, 16]
    ),
    leaders: {
      pts: { name: "Paolo Banchero", val: 22.3, all: [{"name": "Paolo Banchero", "val": 22.3}, {"name": "Desmond Bane", "val": 20.5}, {"name": "Franz Wagner", "val": 20.5}, {"name": "Anthony Black", "val": 15.3}, {"name": "Jalen Suggs", "val": 13.7}, {"name": "Wendell Carter Jr.", "val": 12.1}, {"name": "Tristan Da Silva", "val": 10.0}, {"name": "Jevon Carter", "val": 7.2}, {"name": "Moritz Wagner", "val": 6.9}, {"name": "Goga Bitadze", "val": 5.6}, {"name": "Jett Howard", "val": 5.5}, {"name": "Jamal Cain", "val": 5.0}, {"name": "Jase Richardson", "val": 4.4}, {"name": "Noah Penda", "val": 4.0}, {"name": "Tyus Jones", "val": 3.0}, {"name": "Jonathan Isaac", "val": 2.6}, {"name": "Orlando Robinson", "val": 1.8}, {"name": "Alex Morales", "val": 1.0}, {"name": "Colin Castleton", "val": 1.0}] },
      reb: { name: "Paolo Banchero", val: 8.4, all: [{"name": "Paolo Banchero", "val": 8.4}, {"name": "Wendell Carter Jr.", "val": 7.4}, {"name": "Franz Wagner", "val": 5.5}, {"name": "Goga Bitadze", "val": 4.7}, {"name": "Desmond Bane", "val": 4.2}, {"name": "Jalen Suggs", "val": 3.9}, {"name": "Anthony Black", "val": 3.8}, {"name": "Tristan Da Silva", "val": 3.7}, {"name": "Noah Penda", "val": 3.3}, {"name": "Moritz Wagner", "val": 3.2}, {"name": "Jonathan Isaac", "val": 2.5}, {"name": "Colin Castleton", "val": 2.5}, {"name": "Jevon Carter", "val": 2.2}, {"name": "Jamal Cain", "val": 1.8}, {"name": "Jett Howard", "val": 1.6}, {"name": "Alex Morales", "val": 1.5}, {"name": "Jase Richardson", "val": 1.2}, {"name": "Tyus Jones", "val": 1.1}, {"name": "Orlando Robinson", "val": 1.0}] },
      ast: { name: "Jalen Suggs", val: 5.6, all: [{"name": "Jalen Suggs", "val": 5.6}, {"name": "Paolo Banchero", "val": 5.1}, {"name": "Desmond Bane", "val": 4.1}, {"name": "Anthony Black", "val": 3.8}, {"name": "Franz Wagner", "val": 3.4}, {"name": "Jevon Carter", "val": 2.4}, {"name": "Tyus Jones", "val": 2.4}, {"name": "Alex Morales", "val": 2.0}, {"name": "Wendell Carter Jr.", "val": 2.0}, {"name": "Tristan Da Silva", "val": 1.5}, {"name": "Goga Bitadze", "val": 1.3}, {"name": "Noah Penda", "val": 1.2}, {"name": "Jase Richardson", "val": 1.1}, {"name": "Jett Howard", "val": 0.8}, {"name": "Orlando Robinson", "val": 0.8}, {"name": "Moritz Wagner", "val": 0.7}, {"name": "Jamal Cain", "val": 0.7}, {"name": "Colin Castleton", "val": 0.5}, {"name": "Jonathan Isaac", "val": 0.4}] },
      stl: { name: "Jalen Suggs", val: 1.9, all: [{"name": "Jalen Suggs", "val": 1.9}, {"name": "Anthony Black", "val": 1.4}, {"name": "Desmond Bane", "val": 1.0}, {"name": "Franz Wagner", "val": 1.0}, {"name": "Tristan Da Silva", "val": 0.9}, {"name": "Jevon Carter", "val": 0.9}, {"name": "Wendell Carter Jr.", "val": 0.8}, {"name": "Paolo Banchero", "val": 0.7}, {"name": "Tyus Jones", "val": 0.7}, {"name": "Goga Bitadze", "val": 0.6}, {"name": "Noah Penda", "val": 0.5}, {"name": "Moritz Wagner", "val": 0.4}, {"name": "Jonathan Isaac", "val": 0.4}, {"name": "Jamal Cain", "val": 0.3}, {"name": "Jase Richardson", "val": 0.3}, {"name": "Orlando Robinson", "val": 0.3}, {"name": "Jett Howard", "val": 0.2}, {"name": "Alex Morales", "val": 0.0}, {"name": "Colin Castleton", "val": 0.0}] },
      blk: { name: "Goga Bitadze", val: 1.0, all: [{"name": "Goga Bitadze", "val": 1.0}, {"name": "Jalen Suggs", "val": 0.7}, {"name": "Anthony Black", "val": 0.7}, {"name": "Jonathan Isaac", "val": 0.6}, {"name": "Paolo Banchero", "val": 0.6}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Desmond Bane", "val": 0.5}, {"name": "Tristan Da Silva", "val": 0.3}, {"name": "Jevon Carter", "val": 0.3}, {"name": "Noah Penda", "val": 0.3}, {"name": "Franz Wagner", "val": 0.3}, {"name": "Jett Howard", "val": 0.2}, {"name": "Tyus Jones", "val": 0.1}, {"name": "Moritz Wagner", "val": 0.1}, {"name": "Jamal Cain", "val": 0.1}, {"name": "Jase Richardson", "val": 0.0}, {"name": "Alex Morales", "val": 0.0}, {"name": "Orlando Robinson", "val": 0.0}, {"name": "Colin Castleton", "val": 0.0}] },
    },
    avail: [
      { name: "Desmond Bane", g: 79 },
      { name: "Wendell Carter Jr.", g: 75 },
      { name: "Tristan Da Silva", g: 74 },
      { name: "Paolo Banchero", g: 69 },
      { name: "Goga Bitadze", g: 61 },
      { name: "Anthony Black", g: 61 },
      { name: "Noah Penda", g: 57 },
      { name: "Jett Howard", g: 55 },
      { name: "Jalen Suggs", g: 54 },
      { name: "Jase Richardson", g: 52 },
      { name: "Jonathan Isaac", g: 52 },
      { name: "Tyus Jones", g: 48 },
      { name: "Jamal Cain", g: 37 },
      { name: "Moritz Wagner", g: 35 },
      { name: "Franz Wagner", g: 31 },
      { name: "Jevon Carter", g: 27 },
      { name: "Orlando Robinson", g: 4 },
      { name: "Alex Morales", g: 2 },
      { name: "Colin Castleton", g: 2 },
    ]
  },

};
