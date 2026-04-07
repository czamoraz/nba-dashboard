/* ================================================================
   ATL.js — Atlanta Hawks · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Atlanta Hawks",
  abbr:          "ATL",
  conference:    "East",
  primaryColor:  "#C8102E",
  secondaryColor:"#FDB927",
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
    w: 41, l: 31,
    topW:   { pts: 135, opp: 103, against: "Phoenix Suns" },
    worstL: { pts: 83, opp: 127, against: "Philadelphia 76ers" },
    conf_rank: 5,
    games: buildGames(
      "WWWLWLLLLWLLWWWLWLWLLLWLLLLWLWLWLLWWWWWWWWLLWLLWWWWLWWWLWWLWWLLLWWWLWWWW",
      ["Chicago Bulls", "Memphis Grizzlies", "Detroit Pistons", "Brooklyn Nets", "Brooklyn Nets", "Cleveland Cavaliers", "New York Knicks", "Charlotte Hornets", "Charlotte Hornets", "Philadelphia 76ers", "Utah Jazz", "Portland Trail Blazers", "Minnesota Timberwolves", "Detroit Pistons", "Minnesota Timberwolves", "Milwaukee Bucks", "Los Angeles Clippers", "Brooklyn Nets", "Washington Wizards", "Los Angeles Lakers", "Dallas Mavericks", "Utah Jazz", "Toronto Raptors", "Dallas Mavericks", "San Antonio Spurs", "Indiana Pacers", "New York Knicks", "Boston Celtics", "Boston Celtics", "Denver Nuggets", "Cleveland Cavaliers", "Boston Celtics", "Oklahoma City Thunder", "Miami Heat", "Miami Heat", "Orlando Magic", "Toronto Raptors", "Sacramento Kings", "Cleveland Cavaliers", "Houston Rockets", "Oklahoma City Thunder", "Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Golden State Warriors", "Denver Nuggets", "Phoenix Suns", "San Antonio Spurs", "New Orleans Pelicans", "Golden State Warriors", "New Orleans Pelicans", "Memphis Grizzlies", "Chicago Bulls", "Charlotte Hornets", "Toronto Raptors", "Milwaukee Bucks", "Indiana Pacers", "Orlando Magic", "New York Knicks", "Miami Heat", "Milwaukee Bucks", "Detroit Pistons", "Philadelphia 76ers", "Philadelphia 76ers", "Chicago Bulls", "Portland Trail Blazers", "Phoenix Suns", "Indiana Pacers", "Washington Wizards", "Washington Wizards", "Orlando Magic", "Houston Rockets"],
      [124, 122, 128, 141, 114, 91, 108, 94, 105, 112, 92, 106, 108, 123, 116, 115, 108, 128, 116, 99, 116, 91, 132, 117, 114, 113, 112, 122, 109, 123, 111, 127, 109, 99, 94, 115, 121, 121, 100, 119, 116, 99, 110, 108, 124, 102, 110, 134, 126, 117, 123, 113, 120, 105, 108, 109, 129, 112, 127, 118, 111, 86, 83, 104, 108, 123, 135, 126, 125, 120, 116, 124],
      [20, 10, 8, -4, 18, -5, -5, -8, -8, 18, -24, -6, 11, 8, 18, -14, 9, -4, 16, -8, -6, -21, 11, -1, -11, -12, -11, 8, -12, 8, -1, 15, -9, -10, 14, 3, 1, 15, 18, 12, 23, 5, -9, -2, 16, -24, -7, 5, 23, 6, 16, -18, 12, 4, 5, -11, 12, 16, -10, 15, 7, -14, -44, -22, 11, 9, 32, -7, 1, 4, 23, 29]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 25.3 },
      reb: { name: "Clint Capela", val: 14.3 },
      ast: { name: "Trae Young", val: 9.4 },
      stl: { name: "Cam Reddish", val: 1.3 },
      blk: { name: "Clint Capela", val: 2.0 },
    },
    avail: [
      { name: "Solomon Hill", g: 71 },
      { name: "Kevin Huerter", g: 69 },
      { name: "Trae Young", g: 63 },
      { name: "Clint Capela", g: 63 },
      { name: "John Collins", g: 63 },
    ]
  },

  "2021-22": {
    w: 43, l: 39,
    topW:   { pts: 132, opp: 100, against: "Memphis Grizzlies" },
    worstL: { pts: 94, opp: 122, against: "Philadelphia 76ers" },
    conf_rank: 9,
    games: buildGames(
      "WLWWLLWLLLLLLWWWWWWWLWLLWLLWLLWLLLWLWLLLLLWWWWWWWLWLLWLLWWLWLWWLLWWWLWLWLWWWWWLWLW",
      ["Dallas Mavericks", "Cleveland Cavaliers", "Detroit Pistons", "New Orleans Pelicans", "Washington Wizards", "Philadelphia 76ers", "Washington Wizards", "Brooklyn Nets", "Utah Jazz", "Phoenix Suns", "Golden State Warriors", "Utah Jazz", "Denver Nuggets", "Milwaukee Bucks", "Orlando Magic", "Boston Celtics", "Charlotte Hornets", "Oklahoma City Thunder", "San Antonio Spurs", "Memphis Grizzlies", "New York Knicks", "Indiana Pacers", "Philadelphia 76ers", "Charlotte Hornets", "Minnesota Timberwolves", "Brooklyn Nets", "Houston Rockets", "Orlando Magic", "Denver Nuggets", "Orlando Magic", "Philadelphia 76ers", "New York Knicks", "Chicago Bulls", "Chicago Bulls", "Cleveland Cavaliers", "Portland Trail Blazers", "Sacramento Kings", "Los Angeles Lakers", "Los Angeles Clippers", "Miami Heat", "Miami Heat", "New York Knicks", "Milwaukee Bucks", "Minnesota Timberwolves", "Miami Heat", "Charlotte Hornets", "Sacramento Kings", "Boston Celtics", "Los Angeles Lakers", "Toronto Raptors", "Phoenix Suns", "Toronto Raptors", "Dallas Mavericks", "Indiana Pacers", "San Antonio Spurs", "Boston Celtics", "Cleveland Cavaliers", "Orlando Magic", "Chicago Bulls", "Toronto Raptors", "Boston Celtics", "Chicago Bulls", "Washington Wizards", "Detroit Pistons", "Milwaukee Bucks", "Los Angeles Clippers", "Indiana Pacers", "Portland Trail Blazers", "Charlotte Hornets", "Memphis Grizzlies", "New Orleans Pelicans", "New York Knicks", "Detroit Pistons", "Golden State Warriors", "Indiana Pacers", "Oklahoma City Thunder", "Cleveland Cavaliers", "Brooklyn Nets", "Toronto Raptors", "Washington Wizards", "Miami Heat", "Houston Rockets"],
      [113, 95, 122, 102, 111, 94, 118, 108, 98, 117, 113, 98, 96, 120, 129, 110, 115, 113, 124, 132, 90, 114, 96, 127, 121, 105, 126, 111, 115, 98, 98, 87, 118, 117, 121, 131, 108, 118, 93, 91, 118, 108, 121, 134, 110, 113, 121, 108, 129, 100, 124, 114, 94, 133, 121, 95, 124, 130, 108, 127, 98, 130, 117, 110, 115, 112, 131, 122, 106, 120, 112, 117, 101, 121, 132, 136, 131, 122, 108, 118, 109, 130],
      [26, -6, 18, 3, -11, -28, 7, -9, -18, -4, -14, -12, -9, 20, 18, 11, 10, 12, 18, 32, -9, 3, -2, -3, 11, -8, -6, 12, -18, -6, 2, -14, -12, -14, 3, -5, 6, -16, -13, -24, -6, -9, 7, 12, 2, 22, 17, 16, 8, -6, 9, -11, -9, 21, -15, -10, 8, 21, -4, 27, -9, 6, 3, -3, -9, 6, 3, 9, -10, 15, -5, 6, -21, 11, 9, 18, 24, 7, -10, 15, -4, 16]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 28.4 },
      reb: { name: "Clint Capela", val: 11.9 },
      ast: { name: "Trae Young", val: 9.7 },
      stl: { name: "Malcolm Hill", val: 1.3 },
      blk: { name: "Clint Capela", val: 1.3 },
    },
    avail: [
      { name: "Delon Wright", g: 77 },
      { name: "Trae Young", g: 76 },
      { name: "Clint Capela", g: 74 },
      { name: "Kevin Huerter", g: 74 },
      { name: "Danilo Gallinari", g: 66 },
    ]
  },

  "2022-23": {
    w: 41, l: 41,
    topW:   { pts: 132, opp: 100, against: "Phoenix Suns" },
    worstL: { pts: 109, opp: 139, against: "Toronto Raptors" },
    conf_rank: 8,
    games: buildGames(
      "WWLWWLLWWWLWLWLWLWLLLWWLLLWLLWWLWLLLLWLWLWWWWWLLWLLWWLLWWLLWWLWLLWWLLWLWLWLWLWWWLL",
      ["Houston Rockets", "Orlando Magic", "Charlotte Hornets", "Detroit Pistons", "Detroit Pistons", "Milwaukee Bucks", "Toronto Raptors", "New York Knicks", "New Orleans Pelicans", "Milwaukee Bucks", "Utah Jazz", "Philadelphia 76ers", "Philadelphia 76ers", "Milwaukee Bucks", "Boston Celtics", "Toronto Raptors", "Cleveland Cavaliers", "Sacramento Kings", "Houston Rockets", "Miami Heat", "Philadelphia 76ers", "Orlando Magic", "Denver Nuggets", "Oklahoma City Thunder", "New York Knicks", "Brooklyn Nets", "Chicago Bulls", "Memphis Grizzlies", "Orlando Magic", "Charlotte Hornets", "Orlando Magic", "Chicago Bulls", "Detroit Pistons", "Indiana Pacers", "Brooklyn Nets", "Los Angeles Lakers", "Golden State Warriors", "Sacramento Kings", "Los Angeles Lakers", "Los Angeles Clippers", "Milwaukee Bucks", "Indiana Pacers", "Toronto Raptors", "Miami Heat", "Dallas Mavericks", "New York Knicks", "Charlotte Hornets", "Chicago Bulls", "Oklahoma City Thunder", "Los Angeles Clippers", "Portland Trail Blazers", "Phoenix Suns", "Utah Jazz", "Denver Nuggets", "New Orleans Pelicans", "Phoenix Suns", "San Antonio Spurs", "Charlotte Hornets", "New York Knicks", "Cleveland Cavaliers", "Brooklyn Nets", "Washington Wizards", "Portland Trail Blazers", "Miami Heat", "Miami Heat", "Washington Wizards", "Washington Wizards", "Boston Celtics", "Minnesota Timberwolves", "Golden State Warriors", "San Antonio Spurs", "Detroit Pistons", "Minnesota Timberwolves", "Indiana Pacers", "Memphis Grizzlies", "Cleveland Cavaliers", "Brooklyn Nets", "Dallas Mavericks", "Chicago Bulls", "Washington Wizards", "Philadelphia 76ers", "Boston Celtics"],
      [117, 108, 109, 118, 136, 115, 109, 112, 124, 117, 119, 104, 109, 121, 101, 124, 102, 115, 122, 98, 101, 125, 117, 114, 89, 116, 123, 103, 124, 125, 126, 108, 130, 114, 107, 121, 141, 120, 114, 112, 105, 113, 114, 121, 130, 139, 118, 100, 137, 113, 125, 132, 115, 108, 107, 116, 125, 138, 101, 136, 129, 116, 129, 109, 128, 122, 114, 125, 115, 127, 118, 129, 124, 143, 119, 120, 107, 132, 123, 134, 131, 114],
      [10, 10, -17, 5, 24, -8, -30, 13, 3, 19, -6, 9, -12, 15, -25, 2, -12, 9, -6, -8, -3, 17, 8, -7, -24, -4, 1, -25, -11, 19, 1, -2, 25, -15, -1, -9, -2, 3, -16, 4, -9, 2, 11, 8, 8, 15, -4, -11, 5, -7, -4, 32, 7, -20, -9, 9, 19, -6, -21, 17, 2, -3, 18, -8, -2, 2, 7, -9, -21, 8, -8, 22, -1, 13, -4, 2, -17, 2, 18, 18, -5, -6]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 26.2 },
      reb: { name: "Clint Capela", val: 11.0 },
      ast: { name: "Trae Young", val: 10.2 },
      stl: { name: "Dejounte Murray", val: 1.5 },
      blk: { name: "Onyeka Okongwu", val: 1.3 },
    },
    avail: [
      { name: "Onyeka Okongwu", g: 80 },
      { name: "Dejounte Murray", g: 74 },
      { name: "Trae Young", g: 73 },
      { name: "AJ Griffin", g: 72 },
      { name: "John Collins", g: 71 },
    ]
  },

  "2023-24": {
    w: 36, l: 46,
    topW:   { pts: 132, opp: 91, against: "Charlotte Hornets" },
    worstL: { pts: 115, opp: 157, against: "Indiana Pacers" },
    conf_rank: 10,
    games: buildGames(
      "LLWWWWLWLWLLLWWLLWLLLLLWLWWLLLLWWLLWLLWWWLLLLWWWWLLWWLLLWWLLWWWLLLWLLWWWWLWWLLLLLL",
      ["Charlotte Hornets", "New York Knicks", "Milwaukee Bucks", "Minnesota Timberwolves", "Washington Wizards", "New Orleans Pelicans", "Oklahoma City Thunder", "Orlando Magic", "Miami Heat", "Detroit Pistons", "New York Knicks", "Philadelphia 76ers", "Indiana Pacers", "Brooklyn Nets", "Washington Wizards", "Boston Celtics", "Cleveland Cavaliers", "San Antonio Spurs", "Milwaukee Bucks", "Brooklyn Nets", "Philadelphia 76ers", "Denver Nuggets", "Toronto Raptors", "Toronto Raptors", "Cleveland Cavaliers", "Detroit Pistons", "Houston Rockets", "Miami Heat", "Memphis Grizzlies", "Chicago Bulls", "Sacramento Kings", "Washington Wizards", "Oklahoma City Thunder", "Indiana Pacers", "Orlando Magic", "Philadelphia 76ers", "Indiana Pacers", "Washington Wizards", "San Antonio Spurs", "Orlando Magic", "Miami Heat", "Cleveland Cavaliers", "Sacramento Kings", "Golden State Warriors", "Dallas Mavericks", "Toronto Raptors", "Los Angeles Lakers", "Phoenix Suns", "Golden State Warriors", "Los Angeles Clippers", "Boston Celtics", "Philadelphia 76ers", "Houston Rockets", "Chicago Bulls", "Charlotte Hornets", "Toronto Raptors", "Orlando Magic", "Utah Jazz", "Brooklyn Nets", "Brooklyn Nets", "New York Knicks", "Cleveland Cavaliers", "Memphis Grizzlies", "New Orleans Pelicans", "Portland Trail Blazers", "Utah Jazz", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Charlotte Hornets", "Boston Celtics", "Portland Trail Blazers", "Boston Celtics", "Milwaukee Bucks", "Chicago Bulls", "Detroit Pistons", "Dallas Mavericks", "Denver Nuggets", "Miami Heat", "Charlotte Hornets", "Minnesota Timberwolves", "Indiana Pacers"],
      [110, 120, 127, 127, 130, 123, 117, 120, 109, 126, 114, 116, 152, 147, 136, 103, 105, 137, 121, 113, 114, 122, 128, 125, 119, 130, 134, 113, 119, 113, 110, 130, 141, 116, 110, 139, 108, 99, 109, 106, 109, 95, 107, 112, 143, 126, 138, 129, 141, 144, 117, 127, 122, 126, 99, 121, 109, 124, 97, 102, 116, 112, 99, 103, 102, 122, 110, 105, 115, 132, 120, 120, 123, 113, 113, 121, 95, 110, 111, 114, 106, 115],
      [-6, -6, 17, 14, 9, 18, -9, 1, -8, 6, -2, -10, -5, 2, 28, -10, -23, 2, -11, -1, -11, -7, -7, 21, -8, 6, 7, -9, -6, -5, -7, 4, 3, -34, -7, 7, -18, -28, 10, 2, 1, -21, -15, -22, -5, 1, 16, 9, 7, -5, -8, 6, 9, -10, -23, -2, 17, 27, -27, -12, 16, 11, 7, -13, -4, -2, 17, -31, -13, 41, 2, 14, 1, -9, 12, 8, -14, -32, -6, -1, -3, -42]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 25.7 },
      reb: { name: "Clint Capela", val: 10.6 },
      ast: { name: "Trae Young", val: 10.8 },
      stl: { name: "Dejounte Murray", val: 1.4 },
      blk: { name: "Clint Capela", val: 1.5 },
    },
    avail: [
      { name: "Bogdan Bogdanović", g: 79 },
      { name: "Dejounte Murray", g: 78 },
      { name: "Clint Capela", g: 73 },
      { name: "Garrison Mathews", g: 66 },
      { name: "Saddiq Bey", g: 63 },
    ]
  },

  "2024-25": {
    w: 40, l: 42,
    topW:   { pts: 134, opp: 102, against: "Charlotte Hornets" },
    worstL: { pts: 93, opp: 123, against: "Boston Celtics" },
    conf_rank: 8,
    games: buildGames(
      "WWLLLLWLWLLWWLWLLLWWWWWWLWLLLWWWWLLLWLWWWLLLLLLLLWLWWWLLLWLLWLWWWWLLWWWLLWLLLWLWWW",
      ["Brooklyn Nets", "Charlotte Hornets", "Oklahoma City Thunder", "Washington Wizards", "Washington Wizards", "Sacramento Kings", "New Orleans Pelicans", "Boston Celtics", "New York Knicks", "Detroit Pistons", "Chicago Bulls", "Boston Celtics", "Washington Wizards", "Portland Trail Blazers", "Sacramento Kings", "Golden State Warriors", "Chicago Bulls", "Dallas Mavericks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Charlotte Hornets", "New Orleans Pelicans", "Milwaukee Bucks", "Los Angeles Lakers", "Denver Nuggets", "New York Knicks", "Milwaukee Bucks", "San Antonio Spurs", "Memphis Grizzlies", "Minnesota Timberwolves", "Chicago Bulls", "Miami Heat", "Toronto Raptors", "Denver Nuggets", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Phoenix Suns", "Phoenix Suns", "Chicago Bulls", "Boston Celtics", "New York Knicks", "Detroit Pistons", "Toronto Raptors", "Toronto Raptors", "Minnesota Timberwolves", "Houston Rockets", "Cleveland Cavaliers", "Indiana Pacers", "Detroit Pistons", "San Antonio Spurs", "Milwaukee Bucks", "Washington Wizards", "Orlando Magic", "New York Knicks", "Orlando Magic", "Detroit Pistons", "Miami Heat", "Miami Heat", "Oklahoma City Thunder", "Memphis Grizzlies", "Milwaukee Bucks", "Indiana Pacers", "Indiana Pacers", "Philadelphia 76ers", "Charlotte Hornets", "Los Angeles Clippers", "Brooklyn Nets", "Charlotte Hornets", "Golden State Warriors", "Philadelphia 76ers", "Houston Rockets", "Miami Heat", "Milwaukee Bucks", "Portland Trail Blazers", "Dallas Mavericks", "New York Knicks", "Utah Jazz", "Orlando Magic", "Brooklyn Nets", "Philadelphia 76ers", "Orlando Magic"],
      [120, 125, 104, 119, 120, 115, 126, 93, 121, 121, 113, 117, 129, 110, 109, 97, 122, 119, 135, 117, 107, 124, 119, 134, 111, 108, 102, 126, 112, 117, 141, 120, 136, 120, 102, 105, 124, 115, 122, 110, 119, 110, 104, 119, 94, 92, 96, 115, 127, 132, 125, 115, 125, 112, 148, 108, 143, 98, 109, 119, 132, 121, 124, 120, 132, 123, 98, 114, 134, 124, 132, 114, 112, 145, 113, 118, 105, 147, 112, 133, 124, 117],
      [4, 5, -24, -2, -13, -8, 15, -30, 5, -1, -12, 1, 12, -4, 1, -23, -14, -10, 11, 16, 3, 12, 15, 2, -30, 8, -8, -7, -16, 13, 8, 10, 29, -19, -17, -26, 3, -8, 5, 16, 4, -9, -10, -3, -23, -8, -4, -22, -5, 2, -1, 5, 14, 6, -1, -6, -5, 12, -22, -16, 2, -6, 6, 2, 9, 13, -23, -8, 32, 9, 13, -7, -10, 21, -14, -2, -16, 13, -7, 24, 14, 12]
    ),
    leaders: {
      pts: { name: "Trae Young", val: 24.2 },
      reb: { name: "Jalen Johnson", val: 10.0 },
      ast: { name: "Trae Young", val: 11.6 },
      stl: { name: "Dyson Daniels", val: 3.0 },
      blk: { name: "Jalen Johnson", val: 1.0 },
    },
    avail: [
      { name: "Trae Young", g: 76 },
      { name: "Dyson Daniels", g: 76 },
      { name: "Zaccharie Risacher", g: 75 },
      { name: "Onyeka Okongwu", g: 74 },
      { name: "Vít Krejčí", g: 57 },
    ]
  },

  "2025-26": {
    w: 45, l: 34,
    topW:   { pts: 146, opp: 107, against: "MEM" },
    worstL: { pts: 97, opp: 128, against: "MIA" },
    conf_rank: 5,
    games: buildGames(
      "LWLLWWLWLWWWWWLLWWLWWLLLWLWLLLLLLLWWLLWWWLLLLWWWWLLWWLLLWLWWWWWWWWWWWLWWWLWWWWL",
      ["TOR", "ORL", "OKC", "CHI", "BKN", "IND", "CLE", "ORL", "TOR", "LAL", "LAC", "SAC", "UTA", "PHX", "DET", "SAS", "NOP", "CHA", "WAS", "CLE", "PHI", "DET", "LAC", "DEN", "WAS", "DET", "PHI", "CHA", "SAS", "CHI", "CHI", "MIA", "NYK", "OKC", "MIN", "NYK", "TOR", "TOR", "NOP", "DEN", "GSW", "LAL", "POR", "BOS", "MIL", "MEM", "PHX", "IND", "BOS", "HOU", "IND", "MIA", "UTA", "CHA", "MIN", "CHA", "PHI", "MIA", "BKN", "WAS", "WAS", "POR", "MIL", "PHI", "DAL", "BKN", "MIL", "ORL", "DAL", "HOU", "GSW", "MEM", "DET", "BOS", "SAC", "BOS", "ORL", "BKN", "NYK"],
      [118, 111, 100, 123, 117, 128, 109, 127, 97, 122, 105, 133, 132, 124, 112, 126, 115, 113, 113, 130, 142, 98, 92, 133, 131, 115, 120, 126, 98, 150, 123, 111, 125, 129, 126, 111, 117, 100, 117, 110, 124, 116, 101, 106, 110, 124, 110, 132, 117, 86, 124, 127, 121, 119, 116, 107, 117, 97, 115, 119, 126, 135, 131, 125, 124, 108, 122, 124, 135, 95, 126, 146, 130, 102, 123, 112, 130, 141, 105],
      [-20, 4, -17, -5, 5, 20, -8, 15, -12, 20, 3, 33, 10, 2, -8, -9, 17, 3, -19, 7, 8, -1, -23, -1, 15, -27, 3, -7, -28, -2, -3, -15, -3, -11, 24, 12, -17, -18, 17, 23, 13, -25, -16, -26, -2, 2, 7, 16, 11, -18, -5, 12, 2, -7, -22, -3, 10, -31, 11, 21, 30, 34, 18, 9, 12, 11, 23, 12, 15, -22, 16, 39, 1, -7, 10, 10, 29, 34, -3]
    ),
    leaders: {
      pts: { name: "Jalen Johnson", val: 22.8 },
      reb: { name: "Jalen Johnson", val: 10.3 },
      ast: { name: "Trae Young", val: 8.9 },
      stl: { name: "Dyson Daniels", val: 2.0 },
      blk: { name: "Kristaps Porziņģis", val: 1.3 },
    },
    avail: [
      { name: "Nickeil Alexander-Walker", g: 75 },
      { name: "Mouhamed Gueye", g: 74 },
      { name: "Dyson Daniels", g: 73 },
      { name: "Onyeka Okongwu", g: 71 },
      { name: "Jalen Johnson", g: 69 },
    ]
  },

};
