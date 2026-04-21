/* ================================================================
   BOS.js — Boston Celtics · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Boston Celtics",
  abbr:          "BOS",
  conference:    "East",
  primaryColor:  "#007A33",
  secondaryColor:"#BA9653",
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
    w: 36, l: 36,
    topW:   { pts: 141, opp: 103, against: "Cleveland Cavaliers" },
    worstL: { pts: 75, opp: 105, against: "New York Knicks" },
    conf_rank: 7,
    games: buildGames(
      "WLLWWLWWWWWLLLWWLLWLWLLWLLWLWLLLWWWWLWLLLWLLWWLLWWLWWWWWWLWLLLWWLWLLLLWL",
      ["Milwaukee Bucks", "Brooklyn Nets", "Indiana Pacers", "Indiana Pacers", "Memphis Grizzlies", "Detroit Pistons", "Detroit Pistons", "Toronto Raptors", "Miami Heat", "Washington Wizards", "Orlando Magic", "New York Knicks", "Philadelphia 76ers", "Philadelphia 76ers", "Cleveland Cavaliers", "Chicago Bulls", "San Antonio Spurs", "Los Angeles Lakers", "Golden State Warriors", "Sacramento Kings", "Los Angeles Clippers", "Phoenix Suns", "Utah Jazz", "Toronto Raptors", "Detroit Pistons", "Washington Wizards", "Denver Nuggets", "Atlanta Hawks", "Atlanta Hawks", "New Orleans Pelicans", "Dallas Mavericks", "Atlanta Hawks", "Indiana Pacers", "Washington Wizards", "Los Angeles Clippers", "Toronto Raptors", "Brooklyn Nets", "Houston Rockets", "Utah Jazz", "Cleveland Cavaliers", "Sacramento Kings", "Orlando Magic", "Memphis Grizzlies", "Milwaukee Bucks", "Milwaukee Bucks", "Oklahoma City Thunder", "New Orleans Pelicans", "Dallas Mavericks", "Houston Rockets", "Charlotte Hornets", "Philadelphia 76ers", "New York Knicks", "Minnesota Timberwolves", "Denver Nuggets", "Portland Trail Blazers", "Los Angeles Lakers", "Golden State Warriors", "Chicago Bulls", "Phoenix Suns", "Brooklyn Nets", "Charlotte Hornets", "Oklahoma City Thunder", "Charlotte Hornets", "San Antonio Spurs", "Portland Trail Blazers", "Orlando Magic", "Chicago Bulls", "Miami Heat", "Miami Heat", "Cleveland Cavaliers", "Minnesota Timberwolves", "New York Knicks"],
      [122, 95, 107, 116, 126, 93, 122, 126, 107, 116, 124, 75, 109, 110, 141, 119, 106, 95, 111, 111, 119, 91, 108, 120, 102, 91, 112, 114, 121, 115, 107, 112, 118, 111, 117, 132, 109, 134, 109, 110, 96, 112, 126, 119, 122, 111, 109, 108, 118, 116, 96, 101, 145, 105, 116, 121, 119, 96, 99, 104, 104, 115, 120, 143, 119, 132, 99, 124, 121, 94, 124, 92],
      [1, -28, -1, 5, 19, -3, 2, 12, 2, 9, 27, -30, -8, -12, 38, 16, -4, -1, 4, -5, 4, -9, -14, 14, -6, -13, 13, -8, 12, -5, -3, -15, 6, 1, 5, 7, -12, 27, -8, -7, -11, 16, -6, -2, 8, 17, -6, -5, 16, 30, -10, 2, 9, 18, 1, 8, 5, -6, 13, -5, -21, -4, 9, 3, -10, 36, -22, -6, -8, -8, 16, -4]
    ),
    leaders: {
      pts: { name: "Jayson Tatum", val: 26.4, all: [{"name": "Jayson Tatum", "val": 26.4}, {"name": "Jaylen Brown", "val": 24.7}, {"name": "Kemba Walker", "val": 19.3}, {"name": "Marcus Smart", "val": 13.1}, {"name": "Evan Fournier", "val": 13.0}, {"name": "Daniel Theis", "val": 9.5}, {"name": "Robert Williams", "val": 8.0}, {"name": "Payton Pritchard", "val": 7.7}, {"name": "Tristan Thompson", "val": 7.6}, {"name": "Jeff Teague", "val": 6.9}, {"name": "Jabari Parker", "val": 6.4}, {"name": "Aaron Nesmith", "val": 4.7}, {"name": "Grant Williams", "val": 4.7}, {"name": "Semi Ojeleye", "val": 4.6}, {"name": "Luke Kornet", "val": 4.4}, {"name": "Javonte Green", "val": 4.2}, {"name": "Carsen Edwards", "val": 4.0}, {"name": "Tremont Waters", "val": 3.8}, {"name": "Romeo Langford", "val": 3.1}, {"name": "Tacko Fall", "val": 2.5}, {"name": "Moritz Wagner", "val": 1.2}] },
      reb: { name: "Tristan Thompson", val: 8.1, all: [{"name": "Tristan Thompson", "val": 8.1}, {"name": "Jayson Tatum", "val": 7.4}, {"name": "Robert Williams", "val": 6.9}, {"name": "Jaylen Brown", "val": 6.0}, {"name": "Daniel Theis", "val": 5.2}, {"name": "Kemba Walker", "val": 4.0}, {"name": "Jabari Parker", "val": 3.6}, {"name": "Marcus Smart", "val": 3.5}, {"name": "Evan Fournier", "val": 3.3}, {"name": "Luke Kornet", "val": 2.9}, {"name": "Aaron Nesmith", "val": 2.8}, {"name": "Grant Williams", "val": 2.8}, {"name": "Tacko Fall", "val": 2.7}, {"name": "Semi Ojeleye", "val": 2.6}, {"name": "Payton Pritchard", "val": 2.4}, {"name": "Javonte Green", "val": 2.1}, {"name": "Moritz Wagner", "val": 2.1}, {"name": "Romeo Langford", "val": 1.9}, {"name": "Jeff Teague", "val": 1.7}, {"name": "Tremont Waters", "val": 0.8}, {"name": "Carsen Edwards", "val": 0.8}] },
      ast: { name: "Marcus Smart", val: 5.7, all: [{"name": "Marcus Smart", "val": 5.7}, {"name": "Kemba Walker", "val": 4.9}, {"name": "Jayson Tatum", "val": 4.3}, {"name": "Jaylen Brown", "val": 3.4}, {"name": "Evan Fournier", "val": 3.1}, {"name": "Tremont Waters", "val": 2.4}, {"name": "Jeff Teague", "val": 2.1}, {"name": "Payton Pritchard", "val": 1.8}, {"name": "Robert Williams", "val": 1.8}, {"name": "Daniel Theis", "val": 1.6}, {"name": "Tristan Thompson", "val": 1.2}, {"name": "Luke Kornet", "val": 1.1}, {"name": "Jabari Parker", "val": 1.0}, {"name": "Grant Williams", "val": 1.0}, {"name": "Romeo Langford", "val": 0.7}, {"name": "Semi Ojeleye", "val": 0.7}, {"name": "Moritz Wagner", "val": 0.7}, {"name": "Aaron Nesmith", "val": 0.5}, {"name": "Carsen Edwards", "val": 0.5}, {"name": "Javonte Green", "val": 0.4}, {"name": "Tacko Fall", "val": 0.2}] },
      stl: { name: "Marcus Smart", val: 1.5, all: [{"name": "Marcus Smart", "val": 1.5}, {"name": "Evan Fournier", "val": 1.3}, {"name": "Jayson Tatum", "val": 1.2}, {"name": "Jaylen Brown", "val": 1.2}, {"name": "Kemba Walker", "val": 1.1}, {"name": "Robert Williams", "val": 0.8}, {"name": "Jeff Teague", "val": 0.8}, {"name": "Javonte Green", "val": 0.7}, {"name": "Daniel Theis", "val": 0.6}, {"name": "Tremont Waters", "val": 0.6}, {"name": "Payton Pritchard", "val": 0.6}, {"name": "Grant Williams", "val": 0.5}, {"name": "Tristan Thompson", "val": 0.4}, {"name": "Romeo Langford", "val": 0.3}, {"name": "Aaron Nesmith", "val": 0.3}, {"name": "Semi Ojeleye", "val": 0.3}, {"name": "Carsen Edwards", "val": 0.2}, {"name": "Luke Kornet", "val": 0.1}, {"name": "Jabari Parker", "val": 0.1}, {"name": "Tacko Fall", "val": 0.1}, {"name": "Moritz Wagner", "val": 0.0}] },
      blk: { name: "Robert Williams", val: 1.8, all: [{"name": "Robert Williams", "val": 1.8}, {"name": "Luke Kornet", "val": 1.4}, {"name": "Tacko Fall", "val": 1.1}, {"name": "Daniel Theis", "val": 1.0}, {"name": "Jaylen Brown", "val": 0.6}, {"name": "Evan Fournier", "val": 0.6}, {"name": "Tristan Thompson", "val": 0.6}, {"name": "Jayson Tatum", "val": 0.5}, {"name": "Marcus Smart", "val": 0.5}, {"name": "Jabari Parker", "val": 0.4}, {"name": "Grant Williams", "val": 0.4}, {"name": "Romeo Langford", "val": 0.3}, {"name": "Kemba Walker", "val": 0.3}, {"name": "Aaron Nesmith", "val": 0.2}, {"name": "Jeff Teague", "val": 0.2}, {"name": "Payton Pritchard", "val": 0.1}, {"name": "Javonte Green", "val": 0.1}, {"name": "Moritz Wagner", "val": 0.1}, {"name": "Semi Ojeleye", "val": 0.0}, {"name": "Tremont Waters", "val": 0.0}, {"name": "Carsen Edwards", "val": 0.0}] },
    },
    avail: [
      { name: "Payton Pritchard", g: 66 },
      { name: "Jayson Tatum", g: 64 },
      { name: "Grant Williams", g: 63 },
      { name: "Jaylen Brown", g: 58 },
      { name: "Semi Ojeleye", g: 56 },
      { name: "Tristan Thompson", g: 54 },
      { name: "Robert Williams", g: 52 },
      { name: "Marcus Smart", g: 48 },
      { name: "Aaron Nesmith", g: 46 },
      { name: "Kemba Walker", g: 43 },
      { name: "Daniel Theis", g: 42 },
      { name: "Jeff Teague", g: 34 },
      { name: "Carsen Edwards", g: 31 },
      { name: "Tremont Waters", g: 26 },
      { name: "Javonte Green", g: 25 },
      { name: "Tacko Fall", g: 19 },
      { name: "Romeo Langford", g: 18 },
      { name: "Luke Kornet", g: 18 },
      { name: "Evan Fournier", g: 16 },
      { name: "Jabari Parker", g: 10 },
      { name: "Moritz Wagner", g: 9 },
    ]
  },

  "2021-22": {
    w: 51, l: 31,
    topW:   { pts: 128, opp: 75, against: "Sacramento Kings" },
    worstL: { pts: 83, opp: 115, against: "Toronto Raptors" },
    conf_rank: 2,
    games: buildGames(
      "LLWWLLLWWLWWLWLWWWLLWWLWLLLWLWLWLLLWWLLWWWLWWLLWWLWWWWWWWWWLWWLWWWWWLWWWWWWLLWWWLW",
      ["New York Knicks", "Toronto Raptors", "Houston Rockets", "Charlotte Hornets", "Washington Wizards", "Washington Wizards", "Chicago Bulls", "Orlando Magic", "Miami Heat", "Dallas Mavericks", "Toronto Raptors", "Milwaukee Bucks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Atlanta Hawks", "Los Angeles Lakers", "Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets", "San Antonio Spurs", "Toronto Raptors", "Philadelphia 76ers", "Utah Jazz", "Portland Trail Blazers", "Los Angeles Lakers", "Los Angeles Clippers", "Phoenix Suns", "Milwaukee Bucks", "Golden State Warriors", "New York Knicks", "Philadelphia 76ers", "Cleveland Cavaliers", "Milwaukee Bucks", "Minnesota Timberwolves", "Los Angeles Clippers", "Phoenix Suns", "Orlando Magic", "San Antonio Spurs", "New York Knicks", "New York Knicks", "Indiana Pacers", "Indiana Pacers", "Philadelphia 76ers", "Chicago Bulls", "New Orleans Pelicans", "Charlotte Hornets", "Portland Trail Blazers", "Washington Wizards", "Sacramento Kings", "Atlanta Hawks", "New Orleans Pelicans", "Miami Heat", "Charlotte Hornets", "Detroit Pistons", "Orlando Magic", "Brooklyn Nets", "Denver Nuggets", "Atlanta Hawks", "Philadelphia 76ers", "Detroit Pistons", "Brooklyn Nets", "Detroit Pistons", "Indiana Pacers", "Atlanta Hawks", "Memphis Grizzlies", "Brooklyn Nets", "Charlotte Hornets", "Detroit Pistons", "Dallas Mavericks", "Golden State Warriors", "Sacramento Kings", "Denver Nuggets", "Oklahoma City Thunder", "Utah Jazz", "Minnesota Timberwolves", "Toronto Raptors", "Miami Heat", "Indiana Pacers", "Washington Wizards", "Chicago Bulls", "Milwaukee Bucks", "Memphis Grizzlies"],
      [134, 83, 107, 140, 107, 112, 114, 92, 95, 104, 104, 122, 89, 98, 99, 130, 111, 108, 104, 88, 109, 88, 130, 145, 102, 111, 90, 117, 107, 114, 103, 111, 113, 103, 82, 123, 116, 97, 105, 99, 101, 119, 99, 114, 104, 102, 105, 116, 128, 92, 107, 122, 113, 102, 116, 126, 108, 105, 135, 111, 129, 113, 107, 107, 120, 126, 115, 114, 92, 110, 126, 124, 132, 125, 134, 112, 98, 128, 144, 117, 121, 139],
      [-4, -32, 10, 11, -9, -3, -14, 13, 17, -3, 16, 9, -2, 6, -11, 22, 6, 18, -19, -8, 12, 1, -7, 28, -15, -3, -21, 14, -4, 7, -5, 10, -4, -5, -9, 15, 5, -2, -3, 24, 3, 19, -12, 2, 12, -9, -4, 29, 53, -16, 10, 30, 6, 9, 33, 35, 6, 10, 48, -1, 23, 9, -21, 9, 13, 6, 14, 11, -3, 22, 29, 20, 9, 28, 22, -3, -8, 5, 42, 23, -6, 29]
    ),
    leaders: {
      pts: { name: "Jayson Tatum", val: 26.9, all: [{"name": "Jayson Tatum", "val": 26.9}, {"name": "Jaylen Brown", "val": 23.6}, {"name": "Dennis Schröder", "val": 14.4}, {"name": "Marcus Smart", "val": 12.1}, {"name": "Derrick White", "val": 11.0}, {"name": "Al Horford", "val": 10.2}, {"name": "Robert Williams", "val": 10.0}, {"name": "Josh Richardson", "val": 9.7}, {"name": "Daniel Theis", "val": 7.9}, {"name": "Grant Williams", "val": 7.8}, {"name": "Payton Pritchard", "val": 6.2}, {"name": "Romeo Langford", "val": 4.7}, {"name": "Jabari Parker", "val": 4.4}, {"name": "Aaron Nesmith", "val": 3.8}, {"name": "Enes Freedom", "val": 3.7}, {"name": "Matt Ryan", "val": 3.0}, {"name": "Sam Hauser", "val": 2.5}, {"name": "Luke Kornet", "val": 2.2}, {"name": "Joe Johnson", "val": 2.0}, {"name": "Justin Jackson", "val": 2.0}, {"name": "Malik Fitts", "val": 1.9}, {"name": "Brodric Thomas", "val": 1.8}, {"name": "Nik Stauskas", "val": 1.2}, {"name": "Juancho Hernangómez", "val": 1.1}, {"name": "Bruno Fernando", "val": 1.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "C.J. Miles", "val": 0.0}, {"name": "Kelan Martin", "val": 0.0}] },
      reb: { name: "Robert Williams", val: 9.6, all: [{"name": "Robert Williams", "val": 9.6}, {"name": "Jayson Tatum", "val": 8.0}, {"name": "Al Horford", "val": 7.7}, {"name": "Jaylen Brown", "val": 6.1}, {"name": "Daniel Theis", "val": 4.7}, {"name": "Enes Freedom", "val": 4.6}, {"name": "Marcus Smart", "val": 3.8}, {"name": "Grant Williams", "val": 3.6}, {"name": "Derrick White", "val": 3.4}, {"name": "Dennis Schröder", "val": 3.3}, {"name": "Josh Richardson", "val": 2.8}, {"name": "Romeo Langford", "val": 2.4}, {"name": "Jabari Parker", "val": 2.3}, {"name": "Luke Kornet", "val": 2.1}, {"name": "Payton Pritchard", "val": 1.9}, {"name": "Aaron Nesmith", "val": 1.7}, {"name": "Juancho Hernangómez", "val": 1.4}, {"name": "Sam Hauser", "val": 1.1}, {"name": "Malik Fitts", "val": 0.9}, {"name": "Brodric Thomas", "val": 0.8}, {"name": "Bruno Fernando", "val": 0.8}, {"name": "Kelan Martin", "val": 0.7}, {"name": "Matt Ryan", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "Nik Stauskas", "val": 0.0}, {"name": "C.J. Miles", "val": 0.0}, {"name": "Joe Johnson", "val": 0.0}, {"name": "Justin Jackson", "val": 0.0}] },
      ast: { name: "Marcus Smart", val: 5.9, all: [{"name": "Marcus Smart", "val": 5.9}, {"name": "Jayson Tatum", "val": 4.4}, {"name": "Dennis Schröder", "val": 4.2}, {"name": "Jaylen Brown", "val": 3.5}, {"name": "Derrick White", "val": 3.5}, {"name": "Al Horford", "val": 3.4}, {"name": "Robert Williams", "val": 2.0}, {"name": "Payton Pritchard", "val": 2.0}, {"name": "Josh Richardson", "val": 1.5}, {"name": "Grant Williams", "val": 1.0}, {"name": "Daniel Theis", "val": 1.0}, {"name": "Brodric Thomas", "val": 0.9}, {"name": "Luke Kornet", "val": 0.7}, {"name": "Malik Fitts", "val": 0.6}, {"name": "Jabari Parker", "val": 0.5}, {"name": "Aaron Nesmith", "val": 0.4}, {"name": "Sam Hauser", "val": 0.4}, {"name": "Romeo Langford", "val": 0.4}, {"name": "Juancho Hernangómez", "val": 0.2}, {"name": "Enes Freedom", "val": 0.2}, {"name": "Bruno Fernando", "val": 0.2}, {"name": "Nik Stauskas", "val": 0.2}, {"name": "Matt Ryan", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "C.J. Miles", "val": 0.0}, {"name": "Kelan Martin", "val": 0.0}, {"name": "Joe Johnson", "val": 0.0}, {"name": "Justin Jackson", "val": 0.0}] },
      stl: { name: "Marcus Smart", val: 1.7, all: [{"name": "Marcus Smart", "val": 1.7}, {"name": "Jaylen Brown", "val": 1.1}, {"name": "Jayson Tatum", "val": 1.0}, {"name": "Matt Ryan", "val": 1.0}, {"name": "Robert Williams", "val": 0.9}, {"name": "Dennis Schröder", "val": 0.8}, {"name": "Josh Richardson", "val": 0.8}, {"name": "Al Horford", "val": 0.7}, {"name": "Derrick White", "val": 0.6}, {"name": "Grant Williams", "val": 0.5}, {"name": "Romeo Langford", "val": 0.5}, {"name": "Daniel Theis", "val": 0.4}, {"name": "Payton Pritchard", "val": 0.4}, {"name": "Aaron Nesmith", "val": 0.4}, {"name": "Luke Kornet", "val": 0.3}, {"name": "Jabari Parker", "val": 0.3}, {"name": "Juancho Hernangómez", "val": 0.2}, {"name": "Enes Freedom", "val": 0.1}, {"name": "Brodric Thomas", "val": 0.1}, {"name": "Sam Hauser", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}, {"name": "Bruno Fernando", "val": 0.0}, {"name": "Nik Stauskas", "val": 0.0}, {"name": "C.J. Miles", "val": 0.0}, {"name": "Kelan Martin", "val": 0.0}, {"name": "Joe Johnson", "val": 0.0}, {"name": "Justin Jackson", "val": 0.0}] },
      blk: { name: "Robert Williams", val: 2.2, all: [{"name": "Robert Williams", "val": 2.2}, {"name": "Al Horford", "val": 1.3}, {"name": "Grant Williams", "val": 0.7}, {"name": "Daniel Theis", "val": 0.7}, {"name": "Jayson Tatum", "val": 0.6}, {"name": "Derrick White", "val": 0.6}, {"name": "Josh Richardson", "val": 0.5}, {"name": "Romeo Langford", "val": 0.4}, {"name": "Enes Freedom", "val": 0.4}, {"name": "Marcus Smart", "val": 0.3}, {"name": "Jaylen Brown", "val": 0.3}, {"name": "Bruno Fernando", "val": 0.2}, {"name": "Luke Kornet", "val": 0.2}, {"name": "Sam Hauser", "val": 0.1}, {"name": "Brodric Thomas", "val": 0.1}, {"name": "Juancho Hernangómez", "val": 0.1}, {"name": "Jabari Parker", "val": 0.1}, {"name": "Aaron Nesmith", "val": 0.1}, {"name": "Payton Pritchard", "val": 0.1}, {"name": "Dennis Schröder", "val": 0.1}, {"name": "Matt Ryan", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}, {"name": "Nik Stauskas", "val": 0.0}, {"name": "C.J. Miles", "val": 0.0}, {"name": "Kelan Martin", "val": 0.0}, {"name": "Joe Johnson", "val": 0.0}, {"name": "Justin Jackson", "val": 0.0}] },
    },
    avail: [
      { name: "Grant Williams", g: 77 },
      { name: "Jayson Tatum", g: 76 },
      { name: "Marcus Smart", g: 71 },
      { name: "Payton Pritchard", g: 71 },
      { name: "Al Horford", g: 69 },
      { name: "Jaylen Brown", g: 66 },
      { name: "Robert Williams", g: 61 },
      { name: "Aaron Nesmith", g: 52 },
      { name: "Dennis Schröder", g: 49 },
      { name: "Josh Richardson", g: 44 },
      { name: "Romeo Langford", g: 44 },
      { name: "Enes Freedom", g: 35 },
      { name: "Derrick White", g: 26 },
      { name: "Sam Hauser", g: 26 },
      { name: "Daniel Theis", g: 21 },
      { name: "Bruno Fernando", g: 20 },
      { name: "Juancho Hernangómez", g: 18 },
      { name: "Brodric Thomas", g: 12 },
      { name: "Jabari Parker", g: 12 },
      { name: "Luke Kornet", g: 12 },
      { name: "Malik Fitts", g: 8 },
      { name: "Nik Stauskas", g: 6 },
      { name: "Kelan Martin", g: 3 },
      { name: "Matt Ryan", g: 1 },
      { name: "Juwan Morgan", g: 1 },
      { name: "C.J. Miles", g: 1 },
      { name: "Joe Johnson", g: 1 },
      { name: "Justin Jackson", g: 1 },
    ]
  },

  "2022-23": {
    w: 57, l: 25,
    topW:   { pts: 137, opp: 93, against: "San Antonio Spurs" },
    worstL: { pts: 117, opp: 150, against: "Oklahoma City Thunder" },
    conf_rank: 2,
    games: buildGames(
      "WWWLLWLWWWWWWWWWLWWWWWLWWWLLWLLLWWWWLLWWWWWWWWWLLLWWLWWWWLWWWLWLLLWWLWWLWWWLWWLWWW",
      ["Philadelphia 76ers", "Miami Heat", "Orlando Magic", "Chicago Bulls", "Cleveland Cavaliers", "Washington Wizards", "Cleveland Cavaliers", "Chicago Bulls", "New York Knicks", "Memphis Grizzlies", "Detroit Pistons", "Denver Nuggets", "Detroit Pistons", "Oklahoma City Thunder", "Atlanta Hawks", "New Orleans Pelicans", "Chicago Bulls", "Dallas Mavericks", "Sacramento Kings", "Washington Wizards", "Charlotte Hornets", "Miami Heat", "Miami Heat", "Brooklyn Nets", "Toronto Raptors", "Phoenix Suns", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Orlando Magic", "Orlando Magic", "Indiana Pacers", "Minnesota Timberwolves", "Milwaukee Bucks", "Houston Rockets", "Los Angeles Clippers", "Denver Nuggets", "Oklahoma City Thunder", "Dallas Mavericks", "San Antonio Spurs", "Chicago Bulls", "New Orleans Pelicans", "Brooklyn Nets", "Charlotte Hornets", "Charlotte Hornets", "Golden State Warriors", "Toronto Raptors", "Orlando Magic", "Miami Heat", "New York Knicks", "Los Angeles Lakers", "Brooklyn Nets", "Phoenix Suns", "Detroit Pistons", "Philadelphia 76ers", "Charlotte Hornets", "Memphis Grizzlies", "Milwaukee Bucks", "Detroit Pistons", "Indiana Pacers", "Philadelphia 76ers", "New York Knicks", "Cleveland Cavaliers", "Brooklyn Nets", "New York Knicks", "Cleveland Cavaliers", "Portland Trail Blazers", "Atlanta Hawks", "Houston Rockets", "Minnesota Timberwolves", "Portland Trail Blazers", "Utah Jazz", "Sacramento Kings", "Indiana Pacers", "San Antonio Spurs", "Washington Wizards", "Milwaukee Bucks", "Utah Jazz", "Philadelphia 76ers", "Toronto Raptors", "Toronto Raptors", "Atlanta Hawks"],
      [126, 111, 126, 102, 123, 112, 113, 123, 133, 109, 128, 131, 117, 126, 126, 117, 107, 125, 122, 130, 140, 134, 116, 103, 116, 125, 107, 93, 122, 109, 92, 112, 121, 139, 126, 116, 111, 117, 124, 121, 107, 125, 109, 122, 130, 121, 106, 98, 95, 117, 125, 139, 94, 111, 106, 127, 119, 125, 127, 142, 110, 94, 117, 105, 129, 114, 115, 134, 109, 104, 126, 117, 132, 120, 137, 111, 140, 122, 101, 97, 121, 120],
      [9, 7, 6, -18, -9, 18, -1, 4, 15, 3, 16, 19, 9, 4, 25, 8, -14, 13, 18, 9, 35, 13, -4, 11, 6, 27, -16, -20, 4, -8, -3, -5, 12, 21, 24, 6, -12, -33, 29, 5, 8, 11, 11, 16, 12, 3, 2, -15, -3, -3, 4, 43, -12, 12, 7, 11, 10, -6, 18, 4, 3, -15, 4, -10, -2, -4, 22, 9, -2, 2, 14, -1, 23, 25, 44, -19, 41, 8, -2, 4, 19, 6]
    ),
    leaders: {
      pts: { name: "Jayson Tatum", val: 30.1, all: [{"name": "Jayson Tatum", "val": 30.1}, {"name": "Jaylen Brown", "val": 26.6}, {"name": "Malcolm Brogdon", "val": 14.9}, {"name": "Derrick White", "val": 12.4}, {"name": "Marcus Smart", "val": 11.5}, {"name": "Al Horford", "val": 9.8}, {"name": "Grant Williams", "val": 8.1}, {"name": "Robert Williams", "val": 8.0}, {"name": "Sam Hauser", "val": 6.4}, {"name": "Mike Muscala", "val": 5.9}, {"name": "Payton Pritchard", "val": 5.6}, {"name": "Blake Griffin", "val": 4.1}, {"name": "Luke Kornet", "val": 3.8}, {"name": "Justin Champagnie", "val": 2.5}, {"name": "JD Davison", "val": 1.6}, {"name": "Mfiondu Kabengele", "val": 1.5}, {"name": "Noah Vonleh", "val": 1.1}, {"name": "Justin Jackson", "val": 0.9}] },
      reb: { name: "Jayson Tatum", val: 8.8, all: [{"name": "Jayson Tatum", "val": 8.8}, {"name": "Robert Williams", "val": 8.3}, {"name": "Jaylen Brown", "val": 6.9}, {"name": "Al Horford", "val": 6.2}, {"name": "Grant Williams", "val": 4.6}, {"name": "Malcolm Brogdon", "val": 4.2}, {"name": "Blake Griffin", "val": 3.8}, {"name": "Derrick White", "val": 3.6}, {"name": "Mike Muscala", "val": 3.4}, {"name": "Marcus Smart", "val": 3.1}, {"name": "Luke Kornet", "val": 2.9}, {"name": "Sam Hauser", "val": 2.6}, {"name": "Mfiondu Kabengele", "val": 2.5}, {"name": "Noah Vonleh", "val": 2.1}, {"name": "Justin Champagnie", "val": 2.0}, {"name": "Payton Pritchard", "val": 1.8}, {"name": "JD Davison", "val": 0.8}, {"name": "Justin Jackson", "val": 0.7}] },
      ast: { name: "Marcus Smart", val: 6.3, all: [{"name": "Marcus Smart", "val": 6.3}, {"name": "Jayson Tatum", "val": 4.6}, {"name": "Derrick White", "val": 3.9}, {"name": "Malcolm Brogdon", "val": 3.7}, {"name": "Jaylen Brown", "val": 3.5}, {"name": "Al Horford", "val": 3.0}, {"name": "Grant Williams", "val": 1.7}, {"name": "Justin Champagnie", "val": 1.5}, {"name": "Blake Griffin", "val": 1.5}, {"name": "Robert Williams", "val": 1.4}, {"name": "Payton Pritchard", "val": 1.3}, {"name": "JD Davison", "val": 0.9}, {"name": "Sam Hauser", "val": 0.9}, {"name": "Luke Kornet", "val": 0.8}, {"name": "Mike Muscala", "val": 0.6}, {"name": "Justin Jackson", "val": 0.4}, {"name": "Noah Vonleh", "val": 0.3}, {"name": "Mfiondu Kabengele", "val": 0.0}] },
      stl: { name: "Marcus Smart", val: 1.5, all: [{"name": "Marcus Smart", "val": 1.5}, {"name": "Jayson Tatum", "val": 1.1}, {"name": "Jaylen Brown", "val": 1.1}, {"name": "Derrick White", "val": 0.7}, {"name": "Malcolm Brogdon", "val": 0.7}, {"name": "Robert Williams", "val": 0.6}, {"name": "Justin Champagnie", "val": 0.5}, {"name": "Al Horford", "val": 0.5}, {"name": "Grant Williams", "val": 0.5}, {"name": "Mfiondu Kabengele", "val": 0.5}, {"name": "Sam Hauser", "val": 0.4}, {"name": "Payton Pritchard", "val": 0.3}, {"name": "Blake Griffin", "val": 0.3}, {"name": "Luke Kornet", "val": 0.2}, {"name": "Mike Muscala", "val": 0.2}, {"name": "JD Davison", "val": 0.2}, {"name": "Justin Jackson", "val": 0.2}, {"name": "Noah Vonleh", "val": 0.1}] },
      blk: { name: "Robert Williams", val: 1.4, all: [{"name": "Robert Williams", "val": 1.4}, {"name": "Al Horford", "val": 1.0}, {"name": "Derrick White", "val": 0.9}, {"name": "Jayson Tatum", "val": 0.7}, {"name": "Luke Kornet", "val": 0.7}, {"name": "Jaylen Brown", "val": 0.4}, {"name": "Marcus Smart", "val": 0.4}, {"name": "Grant Williams", "val": 0.4}, {"name": "Noah Vonleh", "val": 0.3}, {"name": "Sam Hauser", "val": 0.3}, {"name": "Mike Muscala", "val": 0.3}, {"name": "Malcolm Brogdon", "val": 0.3}, {"name": "Blake Griffin", "val": 0.2}, {"name": "JD Davison", "val": 0.2}, {"name": "Justin Jackson", "val": 0.2}, {"name": "Payton Pritchard", "val": 0.0}, {"name": "Justin Champagnie", "val": 0.0}, {"name": "Mfiondu Kabengele", "val": 0.0}] },
    },
    avail: [
      { name: "Derrick White", g: 82 },
      { name: "Sam Hauser", g: 80 },
      { name: "Grant Williams", g: 79 },
      { name: "Jayson Tatum", g: 74 },
      { name: "Luke Kornet", g: 69 },
      { name: "Malcolm Brogdon", g: 67 },
      { name: "Jaylen Brown", g: 67 },
      { name: "Al Horford", g: 63 },
      { name: "Marcus Smart", g: 61 },
      { name: "Payton Pritchard", g: 48 },
      { name: "Blake Griffin", g: 41 },
      { name: "Robert Williams", g: 35 },
      { name: "Noah Vonleh", g: 23 },
      { name: "Justin Jackson", g: 23 },
      { name: "Mike Muscala", g: 20 },
      { name: "JD Davison", g: 12 },
      { name: "Mfiondu Kabengele", g: 4 },
      { name: "Justin Champagnie", g: 2 },
    ]
  },

  "2023-24": {
    w: 64, l: 18,
    topW:   { pts: 140, opp: 88, against: "Golden State Warriors" },
    worstL: { pts: 102, opp: 135, against: "Milwaukee Bucks" },
    conf_rank: 1,
    games: buildGames(
      "WWWWWLLWWWWWWLWLWWWLWWWWWLWWWWWWLWWLWLWWWLWWWLWWLWWWWWWWWWWWLLWWWWWWWWWLLWWWWWLLWW",
      ["New York Knicks", "Miami Heat", "Washington Wizards", "Indiana Pacers", "Brooklyn Nets", "Minnesota Timberwolves", "Philadelphia 76ers", "Brooklyn Nets", "Toronto Raptors", "New York Knicks", "Philadelphia 76ers", "Toronto Raptors", "Memphis Grizzlies", "Charlotte Hornets", "Milwaukee Bucks", "Orlando Magic", "Atlanta Hawks", "Chicago Bulls", "Philadelphia 76ers", "Indiana Pacers", "New York Knicks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Orlando Magic", "Orlando Magic", "Golden State Warriors", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Detroit Pistons", "Toronto Raptors", "San Antonio Spurs", "Oklahoma City Thunder", "Utah Jazz", "Indiana Pacers", "Indiana Pacers", "Minnesota Timberwolves", "Milwaukee Bucks", "Houston Rockets", "Toronto Raptors", "San Antonio Spurs", "Denver Nuggets", "Houston Rockets", "Dallas Mavericks", "Miami Heat", "Los Angeles Clippers", "New Orleans Pelicans", "Indiana Pacers", "Los Angeles Lakers", "Memphis Grizzlies", "Atlanta Hawks", "Washington Wizards", "Miami Heat", "Brooklyn Nets", "Brooklyn Nets", "Chicago Bulls", "New York Knicks", "Philadelphia 76ers", "Dallas Mavericks", "Golden State Warriors", "Cleveland Cavaliers", "Denver Nuggets", "Phoenix Suns", "Portland Trail Blazers", "Utah Jazz", "Phoenix Suns", "Washington Wizards", "Detroit Pistons", "Milwaukee Bucks", "Detroit Pistons", "Chicago Bulls", "Atlanta Hawks", "Atlanta Hawks", "New Orleans Pelicans", "Charlotte Hornets", "Oklahoma City Thunder", "Sacramento Kings", "Portland Trail Blazers", "Milwaukee Bucks", "New York Knicks", "Charlotte Hornets", "Washington Wizards"],
      [108, 119, 126, 155, 124, 109, 103, 121, 117, 114, 117, 108, 102, 118, 119, 96, 113, 124, 125, 112, 133, 120, 116, 128, 114, 126, 144, 145, 126, 128, 120, 134, 123, 126, 118, 131, 127, 102, 145, 105, 117, 100, 116, 119, 143, 96, 118, 129, 105, 131, 125, 133, 110, 118, 136, 129, 116, 117, 138, 140, 104, 109, 117, 121, 123, 127, 130, 119, 122, 129, 124, 118, 122, 104, 118, 135, 101, 124, 91, 109, 131, 132],
      [4, 8, 19, 51, 10, -5, -3, 14, 23, 16, 10, 3, 2, -3, 3, -17, 10, 27, 6, -10, 10, 7, 9, 17, 17, -6, 25, 37, 11, 6, 2, 33, -4, 29, 17, -2, 7, -33, 32, 9, 19, -2, 9, 9, 33, -19, 6, 5, -9, 40, 8, 4, 4, 8, 50, 17, 14, 18, 28, 52, -1, -6, 10, 22, 16, 15, 26, 25, 3, 27, 11, -2, -1, 12, 14, 35, 1, 17, -13, -9, 33, 10]
    ),
    leaders: {
      pts: { name: "Jayson Tatum", val: 26.9, all: [{"name": "Jayson Tatum", "val": 26.9}, {"name": "Jaylen Brown", "val": 23.0}, {"name": "Kristaps Porziņģis", "val": 20.1}, {"name": "Derrick White", "val": 15.2}, {"name": "Jrue Holiday", "val": 12.5}, {"name": "Payton Pritchard", "val": 9.6}, {"name": "Sam Hauser", "val": 9.0}, {"name": "Al Horford", "val": 8.6}, {"name": "Neemias Queta", "val": 5.5}, {"name": "Luke Kornet", "val": 5.3}, {"name": "Svi Mykhailiuk", "val": 4.0}, {"name": "Xavier Tillman Sr.", "val": 4.0}, {"name": "Oshae Brissett", "val": 3.7}, {"name": "Drew Peterson", "val": 3.7}, {"name": "Lamar Stevens", "val": 2.8}, {"name": "Dalano Banton", "val": 2.3}, {"name": "Jaden Springer", "val": 2.1}, {"name": "JD Davison", "val": 2.0}, {"name": "Jordan Walsh", "val": 1.7}] },
      reb: { name: "Jayson Tatum", val: 8.1, all: [{"name": "Jayson Tatum", "val": 8.1}, {"name": "Kristaps Porziņģis", "val": 7.2}, {"name": "Al Horford", "val": 6.4}, {"name": "Jaylen Brown", "val": 5.5}, {"name": "Jrue Holiday", "val": 5.4}, {"name": "Neemias Queta", "val": 4.4}, {"name": "Derrick White", "val": 4.2}, {"name": "Luke Kornet", "val": 4.1}, {"name": "Sam Hauser", "val": 3.5}, {"name": "Payton Pritchard", "val": 3.2}, {"name": "Oshae Brissett", "val": 2.9}, {"name": "Xavier Tillman Sr.", "val": 2.7}, {"name": "Jordan Walsh", "val": 2.2}, {"name": "Lamar Stevens", "val": 1.6}, {"name": "Dalano Banton", "val": 1.5}, {"name": "JD Davison", "val": 1.3}, {"name": "Svi Mykhailiuk", "val": 1.2}, {"name": "Jaden Springer", "val": 1.2}, {"name": "Drew Peterson", "val": 0.3}] },
      ast: { name: "Derrick White", val: 5.2, all: [{"name": "Derrick White", "val": 5.2}, {"name": "Jayson Tatum", "val": 4.9}, {"name": "Jrue Holiday", "val": 4.8}, {"name": "Jaylen Brown", "val": 3.6}, {"name": "Payton Pritchard", "val": 3.4}, {"name": "Al Horford", "val": 2.6}, {"name": "Kristaps Porziņģis", "val": 2.0}, {"name": "JD Davison", "val": 1.3}, {"name": "Luke Kornet", "val": 1.1}, {"name": "Sam Hauser", "val": 1.0}, {"name": "Xavier Tillman Sr.", "val": 1.0}, {"name": "Svi Mykhailiuk", "val": 0.9}, {"name": "Oshae Brissett", "val": 0.8}, {"name": "Dalano Banton", "val": 0.8}, {"name": "Neemias Queta", "val": 0.7}, {"name": "Jordan Walsh", "val": 0.6}, {"name": "Jaden Springer", "val": 0.5}, {"name": "Lamar Stevens", "val": 0.4}, {"name": "Drew Peterson", "val": 0.3}] },
      stl: { name: "Jaylen Brown", val: 1.2, all: [{"name": "Jaylen Brown", "val": 1.2}, {"name": "Jayson Tatum", "val": 1.0}, {"name": "Derrick White", "val": 1.0}, {"name": "Jrue Holiday", "val": 0.9}, {"name": "Kristaps Porziņģis", "val": 0.7}, {"name": "Drew Peterson", "val": 0.7}, {"name": "Al Horford", "val": 0.6}, {"name": "Jaden Springer", "val": 0.6}, {"name": "Jordan Walsh", "val": 0.6}, {"name": "Neemias Queta", "val": 0.5}, {"name": "Xavier Tillman Sr.", "val": 0.5}, {"name": "Sam Hauser", "val": 0.5}, {"name": "Payton Pritchard", "val": 0.5}, {"name": "Luke Kornet", "val": 0.4}, {"name": "Oshae Brissett", "val": 0.3}, {"name": "Svi Mykhailiuk", "val": 0.3}, {"name": "Lamar Stevens", "val": 0.3}, {"name": "Dalano Banton", "val": 0.2}, {"name": "JD Davison", "val": 0.1}] },
      blk: { name: "Kristaps Porziņģis", val: 1.9, all: [{"name": "Kristaps Porziņģis", "val": 1.9}, {"name": "Derrick White", "val": 1.2}, {"name": "Luke Kornet", "val": 1.0}, {"name": "Al Horford", "val": 1.0}, {"name": "Jrue Holiday", "val": 0.8}, {"name": "Neemias Queta", "val": 0.8}, {"name": "Jayson Tatum", "val": 0.6}, {"name": "Jaylen Brown", "val": 0.5}, {"name": "Xavier Tillman Sr.", "val": 0.5}, {"name": "Sam Hauser", "val": 0.3}, {"name": "Lamar Stevens", "val": 0.3}, {"name": "Jaden Springer", "val": 0.2}, {"name": "Payton Pritchard", "val": 0.1}, {"name": "Oshae Brissett", "val": 0.1}, {"name": "Jordan Walsh", "val": 0.1}, {"name": "Dalano Banton", "val": 0.1}, {"name": "JD Davison", "val": 0.1}, {"name": "Svi Mykhailiuk", "val": 0.0}, {"name": "Drew Peterson", "val": 0.0}] },
    },
    avail: [
      { name: "Payton Pritchard", g: 82 },
      { name: "Sam Hauser", g: 79 },
      { name: "Jayson Tatum", g: 74 },
      { name: "Derrick White", g: 73 },
      { name: "Jaylen Brown", g: 70 },
      { name: "Jrue Holiday", g: 69 },
      { name: "Al Horford", g: 65 },
      { name: "Luke Kornet", g: 63 },
      { name: "Kristaps Porziņģis", g: 57 },
      { name: "Oshae Brissett", g: 55 },
      { name: "Svi Mykhailiuk", g: 41 },
      { name: "Neemias Queta", g: 28 },
      { name: "Dalano Banton", g: 24 },
      { name: "Xavier Tillman Sr.", g: 20 },
      { name: "Lamar Stevens", g: 19 },
      { name: "Jaden Springer", g: 17 },
      { name: "Jordan Walsh", g: 9 },
      { name: "JD Davison", g: 8 },
      { name: "Drew Peterson", g: 3 },
    ]
  },

  "2024-25": {
    w: 61, l: 21,
    topW:   { pts: 125, opp: 71, against: "Toronto Raptors" },
    worstL: { pts: 96, opp: 117, against: "Los Angeles Lakers" },
    conf_rank: 2,
    games: buildGames(
      "WWWWLWWWLWWLWWWWWWWLWWWLWWLWLLWLWWWLWLWLWLWWLWLWWWWLWWWWWWLLWWWWWLWWWWWWWWWLWWWLWW",
      ["New York Knicks", "Washington Wizards", "Detroit Pistons", "Milwaukee Bucks", "Indiana Pacers", "Charlotte Hornets", "Charlotte Hornets", "Atlanta Hawks", "Golden State Warriors", "Brooklyn Nets", "Milwaukee Bucks", "Atlanta Hawks", "Brooklyn Nets", "Toronto Raptors", "Cleveland Cavaliers", "Washington Wizards", "Minnesota Timberwolves", "Los Angeles Clippers", "Chicago Bulls", "Cleveland Cavaliers", "Miami Heat", "Detroit Pistons", "Milwaukee Bucks", "Memphis Grizzlies", "Detroit Pistons", "Washington Wizards", "Chicago Bulls", "Chicago Bulls", "Orlando Magic", "Philadelphia 76ers", "Indiana Pacers", "Indiana Pacers", "Toronto Raptors", "Minnesota Timberwolves", "Houston Rockets", "Oklahoma City Thunder", "Denver Nuggets", "Sacramento Kings", "New Orleans Pelicans", "Toronto Raptors", "Orlando Magic", "Atlanta Hawks", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Dallas Mavericks", "Houston Rockets", "Chicago Bulls", "New Orleans Pelicans", "Philadelphia 76ers", "Cleveland Cavaliers", "Dallas Mavericks", "New York Knicks", "Miami Heat", "San Antonio Spurs", "Philadelphia 76ers", "New York Knicks", "Toronto Raptors", "Detroit Pistons", "Cleveland Cavaliers", "Denver Nuggets", "Portland Trail Blazers", "Philadelphia 76ers", "Los Angeles Lakers", "Utah Jazz", "Oklahoma City Thunder", "Miami Heat", "Brooklyn Nets", "Brooklyn Nets", "Utah Jazz", "Portland Trail Blazers", "Sacramento Kings", "Phoenix Suns", "San Antonio Spurs", "Memphis Grizzlies", "Miami Heat", "Phoenix Suns", "Washington Wizards", "New York Knicks", "Orlando Magic", "Charlotte Hornets", "Charlotte Hornets"],
      [132, 122, 124, 119, 132, 124, 113, 123, 112, 108, 113, 116, 139, 126, 120, 108, 107, 126, 138, 111, 108, 130, 111, 121, 123, 112, 108, 123, 104, 114, 142, 114, 125, 118, 109, 92, 118, 97, 120, 97, 121, 115, 125, 117, 96, 122, 112, 122, 118, 118, 112, 120, 131, 103, 116, 124, 118, 111, 97, 116, 110, 128, 123, 111, 114, 112, 103, 115, 104, 121, 129, 113, 132, 121, 117, 103, 123, 124, 119, 76, 130, 93],
      [23, 20, 6, 11, -3, 15, 10, 30, -6, 4, 6, -1, 25, 3, 3, 12, 2, 32, 9, -4, 19, 10, 6, -6, 24, 14, -9, 25, -4, -4, 37, -9, 54, 3, 23, -13, 12, -17, 1, -13, 27, -4, 40, 4, -21, 15, -2, 22, 2, 8, 7, -7, 27, 18, 13, 20, 13, 10, -20, -7, 7, 10, 18, 10, 6, -6, 12, 2, 8, 22, 13, 18, 30, 10, 14, -21, 20, 34, 2, -20, 36, 7]
    ),
    leaders: {
      pts: { name: "Jayson Tatum", val: 26.8, all: [{"name": "Jayson Tatum", "val": 26.8}, {"name": "Jaylen Brown", "val": 22.2}, {"name": "Kristaps Porziņģis", "val": 19.5}, {"name": "Derrick White", "val": 16.4}, {"name": "Payton Pritchard", "val": 14.3}, {"name": "Jrue Holiday", "val": 11.1}, {"name": "Al Horford", "val": 9.0}, {"name": "Sam Hauser", "val": 8.5}, {"name": "Luke Kornet", "val": 6.0}, {"name": "Neemias Queta", "val": 5.0}, {"name": "Baylor Scheierman", "val": 3.6}, {"name": "Torrey Craig", "val": 2.7}, {"name": "Miles Norris", "val": 2.3}, {"name": "Drew Peterson", "val": 2.2}, {"name": "JD Davison", "val": 2.1}, {"name": "Jaden Springer", "val": 1.7}, {"name": "Jordan Walsh", "val": 1.6}, {"name": "Xavier Tillman Sr.", "val": 1.0}] },
      reb: { name: "Jayson Tatum", val: 8.7, all: [{"name": "Jayson Tatum", "val": 8.7}, {"name": "Kristaps Porziņģis", "val": 6.8}, {"name": "Al Horford", "val": 6.2}, {"name": "Jaylen Brown", "val": 5.8}, {"name": "Luke Kornet", "val": 5.3}, {"name": "Derrick White", "val": 4.5}, {"name": "Jrue Holiday", "val": 4.3}, {"name": "Neemias Queta", "val": 3.8}, {"name": "Payton Pritchard", "val": 3.8}, {"name": "Sam Hauser", "val": 3.2}, {"name": "Miles Norris", "val": 3.0}, {"name": "Torrey Craig", "val": 2.8}, {"name": "Baylor Scheierman", "val": 2.1}, {"name": "Drew Peterson", "val": 1.6}, {"name": "Jordan Walsh", "val": 1.3}, {"name": "Xavier Tillman Sr.", "val": 1.3}, {"name": "Jaden Springer", "val": 0.9}, {"name": "JD Davison", "val": 0.8}] },
      ast: { name: "Jayson Tatum", val: 6.0, all: [{"name": "Jayson Tatum", "val": 6.0}, {"name": "Derrick White", "val": 4.8}, {"name": "Jaylen Brown", "val": 4.5}, {"name": "Jrue Holiday", "val": 3.9}, {"name": "Payton Pritchard", "val": 3.5}, {"name": "Kristaps Porziņģis", "val": 2.1}, {"name": "Al Horford", "val": 2.1}, {"name": "Luke Kornet", "val": 1.6}, {"name": "Baylor Scheierman", "val": 1.1}, {"name": "Sam Hauser", "val": 0.9}, {"name": "JD Davison", "val": 0.8}, {"name": "Neemias Queta", "val": 0.7}, {"name": "Torrey Craig", "val": 0.7}, {"name": "Drew Peterson", "val": 0.5}, {"name": "Jordan Walsh", "val": 0.4}, {"name": "Jaden Springer", "val": 0.4}, {"name": "Xavier Tillman Sr.", "val": 0.2}, {"name": "Miles Norris", "val": 0.0}] },
      stl: { name: "Jaylen Brown", val: 1.2, all: [{"name": "Jaylen Brown", "val": 1.2}, {"name": "Jayson Tatum", "val": 1.1}, {"name": "Jrue Holiday", "val": 1.1}, {"name": "Derrick White", "val": 0.9}, {"name": "Payton Pritchard", "val": 0.9}, {"name": "Kristaps Porziņģis", "val": 0.7}, {"name": "Miles Norris", "val": 0.7}, {"name": "Al Horford", "val": 0.6}, {"name": "Sam Hauser", "val": 0.6}, {"name": "Baylor Scheierman", "val": 0.5}, {"name": "Jaden Springer", "val": 0.5}, {"name": "Luke Kornet", "val": 0.5}, {"name": "Torrey Craig", "val": 0.4}, {"name": "Xavier Tillman Sr.", "val": 0.3}, {"name": "JD Davison", "val": 0.3}, {"name": "Neemias Queta", "val": 0.3}, {"name": "Jordan Walsh", "val": 0.2}, {"name": "Drew Peterson", "val": 0.2}] },
      blk: { name: "Kristaps Porziņģis", val: 1.5, all: [{"name": "Kristaps Porziņģis", "val": 1.5}, {"name": "Derrick White", "val": 1.1}, {"name": "Luke Kornet", "val": 1.0}, {"name": "Al Horford", "val": 0.9}, {"name": "Neemias Queta", "val": 0.7}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Jayson Tatum", "val": 0.5}, {"name": "Jrue Holiday", "val": 0.4}, {"name": "Jaylen Brown", "val": 0.3}, {"name": "Miles Norris", "val": 0.3}, {"name": "Sam Hauser", "val": 0.2}, {"name": "Payton Pritchard", "val": 0.2}, {"name": "Jordan Walsh", "val": 0.2}, {"name": "Xavier Tillman Sr.", "val": 0.2}, {"name": "Baylor Scheierman", "val": 0.1}, {"name": "Drew Peterson", "val": 0.1}, {"name": "JD Davison", "val": 0.1}, {"name": "Jaden Springer", "val": 0.0}] },
    },
    avail: [
      { name: "Payton Pritchard", g: 80 },
      { name: "Derrick White", g: 76 },
      { name: "Luke Kornet", g: 73 },
      { name: "Jayson Tatum", g: 72 },
      { name: "Sam Hauser", g: 71 },
      { name: "Jaylen Brown", g: 63 },
      { name: "Neemias Queta", g: 62 },
      { name: "Jrue Holiday", g: 62 },
      { name: "Al Horford", g: 60 },
      { name: "Jordan Walsh", g: 52 },
      { name: "Kristaps Porziņģis", g: 42 },
      { name: "Xavier Tillman Sr.", g: 33 },
      { name: "Baylor Scheierman", g: 31 },
      { name: "Jaden Springer", g: 26 },
      { name: "Drew Peterson", g: 25 },
      { name: "Torrey Craig", g: 17 },
      { name: "JD Davison", g: 16 },
      { name: "Miles Norris", g: 3 },
    ]
  },

  "2025-26": {
    w: 54, l: 25,
    topW:   { pts: 146, opp: 101, against: "WAS" },
    worstL: { pts: 89, opp: 118, against: "CHA" },
    conf_rank: 2,
    games: buildGames(
      "LLLWWWLLWLWLWWWLWWLWWWWWLLWWWWLWWWWLWLLWWLWWLWLWWWWWLWWWWLWWWLWWLLWWWWLWWWLWWWW",
      ["PHI", "NYK", "DET", "NOP", "CLE", "PHI", "HOU", "UTA", "WAS", "ORL", "ORL", "PHI", "MEM", "LAC", "BKN", "BKN", "ORL", "DET", "MIN", "CLE", "NYK", "WAS", "LAL", "TOR", "MIL", "DET", "MIA", "TOR", "IND", "IND", "POR", "UTA", "SAC", "LAC", "CHI", "DEN", "TOR", "SAS", "IND", "MIA", "ATL", "DET", "IND", "BKN", "CHI", "POR", "ATL", "SAC", "MIL", "DAL", "HOU", "MIA", "NYK", "CHI", "GSW", "LAL", "PHX", "DEN", "BKN", "PHI", "MIL", "CHA", "DAL", "CLE", "SAS", "OKC", "WAS", "PHX", "GSW", "MEM", "MIN", "OKC", "ATL", "CHA", "ATL", "MIA", "MIL", "TOR", "CHA"],
      [116, 95, 113, 122, 125, 109, 101, 103, 136, 110, 111, 100, 131, 121, 113, 105, 138, 117, 115, 117, 123, 146, 126, 121, 101, 105, 129, 112, 103, 140, 108, 129, 120, 146, 115, 110, 125, 95, 96, 119, 132, 103, 119, 130, 111, 102, 106, 112, 107, 110, 114, 98, 89, 124, 121, 111, 97, 84, 148, 114, 108, 89, 120, 109, 116, 102, 111, 120, 120, 117, 92, 119, 109, 114, 102, 147, 133, 115, 113],
      [-1, -10, -6, 32, 20, 1, -27, -2, 29, -13, 4, -2, 36, 3, 14, -8, 9, 3, -4, 2, 6, 45, 21, 8, -15, -7, 13, 16, 8, 18, -6, 10, 14, 31, 14, -4, 8, -5, -2, 5, 26, -1, 15, 4, -3, 8, -11, 19, 28, 10, 21, 2, -22, 19, 11, 22, 16, -19, 37, 16, 27, -29, 20, 11, -9, -2, 11, 8, 21, 5, -10, 10, 7, 15, -10, 18, 32, 14, 11]
    ),
    leaders: {
      pts: { name: "Jaylen Brown", val: 28.8, all: [{"name": "Jaylen Brown", "val": 28.8}, {"name": "Jayson Tatum", "val": 21.6}, {"name": "Payton Pritchard", "val": 16.9}, {"name": "Derrick White", "val": 16.7}, {"name": "Anfernee Simons", "val": 14.2}, {"name": "Neemias Queta", "val": 10.3}, {"name": "Nikola Vučević", "val": 9.4}, {"name": "Sam Hauser", "val": 9.1}, {"name": "Luka Garza", "val": 7.7}, {"name": "Josh Minott", "val": 5.8}, {"name": "Jordan Walsh", "val": 5.3}, {"name": "Baylor Scheierman", "val": 5.0}, {"name": "Hugo González", "val": 3.8}, {"name": "Ron Harper Jr.", "val": 3.3}, {"name": "Charles Bassey", "val": 2.8}, {"name": "Chris Boucher", "val": 2.3}, {"name": "Xavier Tillman", "val": 2.2}, {"name": "Amari Williams", "val": 1.3}, {"name": "Dalano Banton", "val": 1.3}, {"name": "Max Shulga", "val": 0.4}, {"name": "John Tonje", "val": 0.4}] },
      reb: { name: "Jayson Tatum", val: 9.8, all: [{"name": "Jayson Tatum", "val": 9.8}, {"name": "Neemias Queta", "val": 8.3}, {"name": "Jaylen Brown", "val": 7.0}, {"name": "Nikola Vučević", "val": 6.9}, {"name": "Derrick White", "val": 4.5}, {"name": "Payton Pritchard", "val": 4.0}, {"name": "Jordan Walsh", "val": 4.0}, {"name": "Luka Garza", "val": 3.9}, {"name": "Sam Hauser", "val": 3.8}, {"name": "Josh Minott", "val": 3.6}, {"name": "Baylor Scheierman", "val": 3.5}, {"name": "Hugo González", "val": 3.3}, {"name": "Anfernee Simons", "val": 2.4}, {"name": "Chris Boucher", "val": 2.0}, {"name": "Amari Williams", "val": 1.9}, {"name": "Xavier Tillman", "val": 1.8}, {"name": "Ron Harper Jr.", "val": 1.5}, {"name": "Charles Bassey", "val": 1.2}, {"name": "John Tonje", "val": 0.4}, {"name": "Max Shulga", "val": 0.1}, {"name": "Dalano Banton", "val": 0.0}] },
      ast: { name: "Derrick White", val: 5.4, all: [{"name": "Derrick White", "val": 5.4}, {"name": "Jaylen Brown", "val": 5.2}, {"name": "Jayson Tatum", "val": 5.1}, {"name": "Payton Pritchard", "val": 5.1}, {"name": "Anfernee Simons", "val": 2.4}, {"name": "Nikola Vučević", "val": 1.8}, {"name": "Neemias Queta", "val": 1.6}, {"name": "Baylor Scheierman", "val": 1.4}, {"name": "Sam Hauser", "val": 1.4}, {"name": "Josh Minott", "val": 1.0}, {"name": "Luka Garza", "val": 0.9}, {"name": "Dalano Banton", "val": 0.7}, {"name": "Jordan Walsh", "val": 0.7}, {"name": "Ron Harper Jr.", "val": 0.6}, {"name": "Hugo González", "val": 0.5}, {"name": "Amari Williams", "val": 0.4}, {"name": "Xavier Tillman", "val": 0.4}, {"name": "Chris Boucher", "val": 0.3}, {"name": "Max Shulga", "val": 0.2}, {"name": "John Tonje", "val": 0.2}, {"name": "Charles Bassey", "val": 0.0}] },
      stl: { name: "Jayson Tatum", val: 1.4, all: [{"name": "Jayson Tatum", "val": 1.4}, {"name": "Derrick White", "val": 1.1}, {"name": "Jaylen Brown", "val": 1.0}, {"name": "Neemias Queta", "val": 0.8}, {"name": "Jordan Walsh", "val": 0.7}, {"name": "Josh Minott", "val": 0.7}, {"name": "Payton Pritchard", "val": 0.7}, {"name": "Chris Boucher", "val": 0.6}, {"name": "Anfernee Simons", "val": 0.6}, {"name": "Nikola Vučević", "val": 0.5}, {"name": "Baylor Scheierman", "val": 0.5}, {"name": "Sam Hauser", "val": 0.5}, {"name": "Hugo González", "val": 0.5}, {"name": "Xavier Tillman", "val": 0.4}, {"name": "Luka Garza", "val": 0.4}, {"name": "Ron Harper Jr.", "val": 0.2}, {"name": "John Tonje", "val": 0.2}, {"name": "Charles Bassey", "val": 0.2}, {"name": "Amari Williams", "val": 0.1}, {"name": "Max Shulga", "val": 0.0}, {"name": "Dalano Banton", "val": 0.0}] },
      blk: { name: "Neemias Queta", val: 1.3, all: [{"name": "Neemias Queta", "val": 1.3}, {"name": "Derrick White", "val": 1.3}, {"name": "Chris Boucher", "val": 0.8}, {"name": "Nikola Vučević", "val": 0.6}, {"name": "Amari Williams", "val": 0.5}, {"name": "Charles Bassey", "val": 0.4}, {"name": "Jaylen Brown", "val": 0.4}, {"name": "Jordan Walsh", "val": 0.4}, {"name": "Josh Minott", "val": 0.4}, {"name": "Luka Garza", "val": 0.4}, {"name": "Sam Hauser", "val": 0.3}, {"name": "Dalano Banton", "val": 0.3}, {"name": "Hugo González", "val": 0.3}, {"name": "Ron Harper Jr.", "val": 0.3}, {"name": "Payton Pritchard", "val": 0.1}, {"name": "Xavier Tillman", "val": 0.1}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Jayson Tatum", "val": 0.1}, {"name": "Baylor Scheierman", "val": 0.1}, {"name": "Max Shulga", "val": 0.0}, {"name": "John Tonje", "val": 0.0}] },
    },
    avail: [
      { name: "Payton Pritchard", g: 77 },
      { name: "Sam Hauser", g: 76 },
      { name: "Derrick White", g: 75 },
      { name: "Neemias Queta", g: 74 },
      { name: "Baylor Scheierman", g: 74 },
      { name: "Hugo González", g: 73 },
      { name: "Jaylen Brown", g: 70 },
      { name: "Luka Garza", g: 67 },
      { name: "Jordan Walsh", g: 65 },
      { name: "Anfernee Simons", g: 49 },
      { name: "Josh Minott", g: 33 },
      { name: "Ron Harper Jr.", g: 27 },
      { name: "Amari Williams", g: 21 },
      { name: "Jayson Tatum", g: 15 },
      { name: "Nikola Vučević", g: 14 },
      { name: "Xavier Tillman", g: 14 },
      { name: "Max Shulga", g: 9 },
      { name: "Chris Boucher", g: 9 },
      { name: "Charles Bassey", g: 5 },
      { name: "John Tonje", g: 5 },
      { name: "Dalano Banton", g: 3 },
    ]
  },

};
