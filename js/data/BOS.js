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
      pts: { name: "Jayson Tatum", val: 26.4 },
      reb: { name: "Tristan Thompson", val: 8.1 },
      ast: { name: "Marcus Smart", val: 5.7 },
      stl: { name: "Marcus Smart", val: 1.5 },
      blk: { name: "Robert Williams", val: 1.8 },
    },
    avail: [
      { name: "Payton Pritchard", g: 66 },
      { name: "Jayson Tatum", g: 64 },
      { name: "Grant Williams", g: 63 },
      { name: "Jaylen Brown", g: 58 },
      { name: "Semi Ojeleye", g: 56 },
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
      pts: { name: "Jayson Tatum", val: 26.9 },
      reb: { name: "Robert Williams", val: 9.6 },
      ast: { name: "Marcus Smart", val: 5.9 },
      stl: { name: "Marcus Smart", val: 1.7 },
      blk: { name: "Robert Williams", val: 2.2 },
    },
    avail: [
      { name: "Grant Williams", g: 77 },
      { name: "Jayson Tatum", g: 76 },
      { name: "Marcus Smart", g: 71 },
      { name: "Payton Pritchard", g: 71 },
      { name: "Al Horford", g: 69 },
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
      pts: { name: "Jayson Tatum", val: 30.1 },
      reb: { name: "Jayson Tatum", val: 8.8 },
      ast: { name: "Marcus Smart", val: 6.3 },
      stl: { name: "Marcus Smart", val: 1.5 },
      blk: { name: "Robert Williams", val: 1.4 },
    },
    avail: [
      { name: "Derrick White", g: 82 },
      { name: "Sam Hauser", g: 80 },
      { name: "Grant Williams", g: 79 },
      { name: "Jayson Tatum", g: 74 },
      { name: "Luke Kornet", g: 69 },
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
      pts: { name: "Jayson Tatum", val: 26.9 },
      reb: { name: "Jayson Tatum", val: 8.1 },
      ast: { name: "Derrick White", val: 5.2 },
      stl: { name: "Jaylen Brown", val: 1.2 },
      blk: { name: "Kristaps Porziņģis", val: 1.9 },
    },
    avail: [
      { name: "Payton Pritchard", g: 82 },
      { name: "Sam Hauser", g: 79 },
      { name: "Jayson Tatum", g: 74 },
      { name: "Derrick White", g: 73 },
      { name: "Jaylen Brown", g: 70 },
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
      pts: { name: "Jayson Tatum", val: 26.8 },
      reb: { name: "Jayson Tatum", val: 8.7 },
      ast: { name: "Jayson Tatum", val: 6.0 },
      stl: { name: "Jaylen Brown", val: 1.2 },
      blk: { name: "Kristaps Porziņģis", val: 1.5 },
    },
    avail: [
      { name: "Payton Pritchard", g: 80 },
      { name: "Derrick White", g: 76 },
      { name: "Luke Kornet", g: 73 },
      { name: "Jayson Tatum", g: 72 },
      { name: "Sam Hauser", g: 71 },
    ]
  },

  "2025-26": {
    w: 53, l: 25,
    topW:   { pts: 146, opp: 101, against: "Washington Wizards" },
    worstL: { pts: 89, opp: 118, against: "Charlotte Hornets" },
    conf_rank: 2,
    games: buildGames(
      "LLLWWWLLWLWLWWWLWWLWWWWWLLWWWWLWWWWLWLLWWLWWLWLWWWWWLWWWWLWWWLWWLLWWWWLWWWLWWW",
      ["Philadelphia 76ers", "New York Knicks", "Detroit Pistons", "New Orleans Pelicans", "Cleveland Cavaliers", "Philadelphia 76ers", "Houston Rockets", "Utah Jazz", "Washington Wizards", "Orlando Magic", "Orlando Magic", "Philadelphia 76ers", "Memphis Grizzlies", "Los Angeles Clippers", "Brooklyn Nets", "Brooklyn Nets", "Orlando Magic", "Detroit Pistons", "Minnesota Timberwolves", "Cleveland Cavaliers", "New York Knicks", "Washington Wizards", "Los Angeles Lakers", "Toronto Raptors", "Milwaukee Bucks", "Detroit Pistons", "Miami Heat", "Toronto Raptors", "Indiana Pacers", "Indiana Pacers", "Portland Trail Blazers", "Utah Jazz", "Sacramento Kings", "Los Angeles Clippers", "Chicago Bulls", "Denver Nuggets", "Toronto Raptors", "San Antonio Spurs", "Indiana Pacers", "Miami Heat", "Atlanta Hawks", "Detroit Pistons", "Indiana Pacers", "Brooklyn Nets", "Chicago Bulls", "Portland Trail Blazers", "Atlanta Hawks", "Sacramento Kings", "Milwaukee Bucks", "Dallas Mavericks", "Houston Rockets", "Miami Heat", "New York Knicks", "Chicago Bulls", "Golden State Warriors", "Los Angeles Lakers", "Phoenix Suns", "Denver Nuggets", "Brooklyn Nets", "Philadelphia 76ers", "Milwaukee Bucks", "Charlotte Hornets", "Dallas Mavericks", "Cleveland Cavaliers", "San Antonio Spurs", "Oklahoma City Thunder", "Washington Wizards", "Phoenix Suns", "Golden State Warriors", "Memphis Grizzlies", "Minnesota Timberwolves", "Oklahoma City Thunder", "Atlanta Hawks", "Charlotte Hornets", "Atlanta Hawks", "Miami Heat", "Milwaukee Bucks", "Toronto Raptors"],
      [116, 95, 113, 122, 125, 109, 101, 103, 136, 110, 111, 100, 131, 121, 113, 105, 138, 117, 115, 117, 123, 146, 126, 121, 101, 105, 129, 112, 103, 140, 108, 129, 120, 146, 115, 110, 125, 95, 96, 119, 132, 103, 119, 130, 111, 102, 106, 112, 107, 110, 114, 98, 89, 124, 121, 111, 97, 84, 148, 114, 108, 89, 120, 109, 116, 102, 111, 120, 120, 117, 92, 119, 109, 114, 102, 147, 133, 115],
      [-1, -10, -6, 32, 20, 1, -27, -2, 29, -13, 4, -2, 36, 3, 14, -8, 9, 3, -4, 2, 6, 45, 21, 8, -15, -7, 13, 16, 8, 18, -6, 10, 14, 31, 14, -4, 8, -5, -2, 5, 26, -1, 15, 4, -3, 8, -11, 19, 28, 10, 21, 2, -22, 19, 11, 22, 16, -19, 37, 16, 27, -29, 20, 11, -9, -2, 11, 8, 21, 5, -10, 10, 7, 15, -10, 18, 32, 14]
    ),
    leaders: {
      pts: { name: "Jaylen Brown", val: 28.7 },
      reb: { name: "Jayson Tatum", val: 10.1 },
      ast: { name: "Derrick White", val: 5.5 },
      stl: { name: "Jayson Tatum", val: 1.4 },
      blk: { name: "Derrick White", val: 1.3 },
    },
    avail: [
      { name: "Payton Pritchard", g: 76 },
      { name: "Sam Hauser", g: 75 },
      { name: "Derrick White", g: 74 },
      { name: "Hugo González", g: 73 },
      { name: "Neemias Queta", g: 73 },
    ]
  },

};
