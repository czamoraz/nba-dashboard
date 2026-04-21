/* ================================================================
   MEM.js — Memphis Grizzlies · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Memphis Grizzlies",
  abbr:          "MEM",
  conference:    "West",
  primaryColor:  "#5D76A9",
  secondaryColor:"#12173F",
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
    w: 38, l: 34,
    topW:   { pts: 133, opp: 84, against: "Houston Rockets" },
    worstL: { pts: 113, opp: 144, against: "New Orleans Pelicans" },
    conf_rank: 9,
    games: buildGames(
      "LLWLWLLLWWWWWWWLLLLWLWLWWLLWLWWLWLLLWLWWWLLWLWWWWLLWLWWLLWWLLWLLWLWWWWWL",
      ["San Antonio Spurs", "Atlanta Hawks", "Brooklyn Nets", "Boston Celtics", "Charlotte Hornets", "Los Angeles Lakers", "Los Angeles Lakers", "Cleveland Cavaliers", "Brooklyn Nets", "Cleveland Cavaliers", "Minnesota Timberwolves", "Philadelphia 76ers", "Phoenix Suns", "San Antonio Spurs", "San Antonio Spurs", "Indiana Pacers", "Houston Rockets", "New Orleans Pelicans", "Toronto Raptors", "Charlotte Hornets", "Los Angeles Lakers", "Sacramento Kings", "New Orleans Pelicans", "Oklahoma City Thunder", "Detroit Pistons", "Phoenix Suns", "Dallas Mavericks", "Los Angeles Clippers", "Los Angeles Clippers", "Houston Rockets", "Washington Wizards", "Milwaukee Bucks", "Washington Wizards", "Denver Nuggets", "Oklahoma City Thunder", "Phoenix Suns", "Miami Heat", "Golden State Warriors", "Golden State Warriors", "Boston Celtics", "Oklahoma City Thunder", "Utah Jazz", "Utah Jazz", "Houston Rockets", "Utah Jazz", "Minnesota Timberwolves", "Philadelphia 76ers", "Miami Heat", "Atlanta Hawks", "New York Knicks", "Indiana Pacers", "Chicago Bulls", "Dallas Mavericks", "Chicago Bulls", "Milwaukee Bucks", "Denver Nuggets", "Los Angeles Clippers", "Portland Trail Blazers", "Portland Trail Blazers", "Denver Nuggets", "Portland Trail Blazers", "Orlando Magic", "Orlando Magic", "New York Knicks", "Minnesota Timberwolves", "Detroit Pistons", "Toronto Raptors", "New Orleans Pelicans", "Dallas Mavericks", "Sacramento Kings", "Sacramento Kings", "Golden State Warriors"],
      [119, 112, 116, 107, 108, 94, 92, 90, 115, 101, 118, 106, 108, 129, 133, 116, 103, 109, 113, 130, 105, 124, 113, 122, 109, 97, 92, 122, 99, 133, 125, 111, 127, 102, 122, 99, 89, 103, 111, 132, 116, 114, 110, 120, 107, 120, 116, 124, 131, 129, 125, 101, 113, 126, 128, 137, 105, 130, 120, 96, 109, 92, 111, 104, 139, 97, 109, 115, 133, 116, 107, 101],
      [-12, -10, 5, -19, 15, -14, -2, -4, 5, 10, 11, 2, 4, 17, 31, -18, -12, -9, -15, 16, -10, 14, -31, 9, 14, -31, -10, 28, -20, 49, 14, -1, 15, -1, -6, -23, 4, -13, 8, 6, 9, -3, -16, 10, -4, 12, 16, 12, 18, -4, -7, 11, -1, 11, 13, -2, -12, 2, 7, -24, -21, 17, -1, -14, 4, -14, 10, 5, 29, 6, 1, -12]
    ),
    leaders: {
      pts: { name: "Ja Morant", val: 19.1, all: [{"name": "Ja Morant", "val": 19.1}, {"name": "Dillon Brooks", "val": 17.2}, {"name": "Jonas Valančiūnas", "val": 17.1}, {"name": "Jaren Jackson Jr.", "val": 14.4}, {"name": "Kyle Anderson", "val": 12.4}, {"name": "Grayson Allen", "val": 10.6}, {"name": "Brandon Clarke", "val": 10.3}, {"name": "Desmond Bane", "val": 9.2}, {"name": "De'Anthony Melton", "val": 9.1}, {"name": "Gorgui Dieng", "val": 7.9}, {"name": "Justise Winslow", "val": 6.8}, {"name": "Xavier Tillman Sr.", "val": 6.6}, {"name": "Tyus Jones", "val": 6.3}, {"name": "John Konchar", "val": 4.3}, {"name": "Killian Tillie", "val": 3.2}, {"name": "Sean McDermott", "val": 2.2}, {"name": "Jontay Porter", "val": 2.0}, {"name": "Tim Frazier", "val": 1.6}] },
      reb: { name: "Jonas Valančiūnas", val: 12.5, all: [{"name": "Jonas Valančiūnas", "val": 12.5}, {"name": "Kyle Anderson", "val": 5.7}, {"name": "Brandon Clarke", "val": 5.6}, {"name": "Jaren Jackson Jr.", "val": 5.6}, {"name": "Justise Winslow", "val": 4.5}, {"name": "Gorgui Dieng", "val": 4.5}, {"name": "Xavier Tillman Sr.", "val": 4.3}, {"name": "Ja Morant", "val": 4.0}, {"name": "Grayson Allen", "val": 3.2}, {"name": "De'Anthony Melton", "val": 3.1}, {"name": "Desmond Bane", "val": 3.1}, {"name": "John Konchar", "val": 3.0}, {"name": "Dillon Brooks", "val": 2.9}, {"name": "Tyus Jones", "val": 2.0}, {"name": "Tim Frazier", "val": 1.6}, {"name": "Killian Tillie", "val": 1.3}, {"name": "Jontay Porter", "val": 1.3}, {"name": "Sean McDermott", "val": 1.1}] },
      ast: { name: "Ja Morant", val: 7.4, all: [{"name": "Ja Morant", "val": 7.4}, {"name": "Tyus Jones", "val": 3.7}, {"name": "Kyle Anderson", "val": 3.6}, {"name": "Tim Frazier", "val": 3.2}, {"name": "De'Anthony Melton", "val": 2.5}, {"name": "Dillon Brooks", "val": 2.3}, {"name": "Grayson Allen", "val": 2.2}, {"name": "Justise Winslow", "val": 1.9}, {"name": "Jonas Valančiūnas", "val": 1.8}, {"name": "Desmond Bane", "val": 1.7}, {"name": "Brandon Clarke", "val": 1.6}, {"name": "Xavier Tillman Sr.", "val": 1.3}, {"name": "Gorgui Dieng", "val": 1.3}, {"name": "Jaren Jackson Jr.", "val": 1.1}, {"name": "John Konchar", "val": 1.1}, {"name": "Killian Tillie", "val": 0.4}, {"name": "Sean McDermott", "val": 0.2}, {"name": "Jontay Porter", "val": 0.1}] },
      stl: { name: "Kyle Anderson", val: 1.2, all: [{"name": "Kyle Anderson", "val": 1.2}, {"name": "De'Anthony Melton", "val": 1.2}, {"name": "Dillon Brooks", "val": 1.2}, {"name": "Jaren Jackson Jr.", "val": 1.1}, {"name": "Brandon Clarke", "val": 1.0}, {"name": "Ja Morant", "val": 0.9}, {"name": "Tyus Jones", "val": 0.9}, {"name": "Grayson Allen", "val": 0.9}, {"name": "Gorgui Dieng", "val": 0.8}, {"name": "John Konchar", "val": 0.7}, {"name": "Xavier Tillman Sr.", "val": 0.7}, {"name": "Justise Winslow", "val": 0.6}, {"name": "Desmond Bane", "val": 0.6}, {"name": "Jonas Valančiūnas", "val": 0.6}, {"name": "Tim Frazier", "val": 0.4}, {"name": "Killian Tillie", "val": 0.3}, {"name": "Jontay Porter", "val": 0.3}, {"name": "Sean McDermott", "val": 0.1}] },
      blk: { name: "Jaren Jackson Jr.", val: 1.6, all: [{"name": "Jaren Jackson Jr.", "val": 1.6}, {"name": "Jonas Valančiūnas", "val": 0.9}, {"name": "Brandon Clarke", "val": 0.9}, {"name": "Kyle Anderson", "val": 0.8}, {"name": "De'Anthony Melton", "val": 0.6}, {"name": "Xavier Tillman Sr.", "val": 0.6}, {"name": "Gorgui Dieng", "val": 0.6}, {"name": "Justise Winslow", "val": 0.5}, {"name": "Killian Tillie", "val": 0.4}, {"name": "Dillon Brooks", "val": 0.4}, {"name": "John Konchar", "val": 0.2}, {"name": "Sean McDermott", "val": 0.2}, {"name": "Tim Frazier", "val": 0.2}, {"name": "Ja Morant", "val": 0.2}, {"name": "Desmond Bane", "val": 0.2}, {"name": "Grayson Allen", "val": 0.2}, {"name": "Tyus Jones", "val": 0.1}, {"name": "Jontay Porter", "val": 0.1}] },
    },
    avail: [
      { name: "Tyus Jones", g: 70 },
      { name: "Kyle Anderson", g: 69 },
      { name: "Desmond Bane", g: 68 },
      { name: "Dillon Brooks", g: 67 },
      { name: "Ja Morant", g: 63 },
      { name: "Jonas Valančiūnas", g: 62 },
      { name: "Brandon Clarke", g: 59 },
      { name: "Xavier Tillman Sr.", g: 59 },
      { name: "De'Anthony Melton", g: 52 },
      { name: "Grayson Allen", g: 50 },
      { name: "John Konchar", g: 43 },
      { name: "Justise Winslow", g: 26 },
      { name: "Gorgui Dieng", g: 22 },
      { name: "Killian Tillie", g: 18 },
      { name: "Sean McDermott", g: 18 },
      { name: "Jaren Jackson Jr.", g: 11 },
      { name: "Jontay Porter", g: 11 },
      { name: "Tim Frazier", g: 5 },
    ]
  },

  "2021-22": {
    w: 56, l: 26,
    topW:   { pts: 152, opp: 79, against: "Oklahoma City Thunder" },
    worstL: { pts: 95, opp: 138, against: "Minnesota Timberwolves" },
    conf_rank: 2,
    games: buildGames(
      "WWLLWLWWLWLLLWWLWLLWWWWWLWWWWWLLLWWWWWWWWWWWLWLWLWWWLWWWWWWLLWWLWLWWWWLWWWWWWWLLWL",
      ["Cleveland Cavaliers", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Golden State Warriors", "Miami Heat", "Denver Nuggets", "Denver Nuggets", "Washington Wizards", "Minnesota Timberwolves", "Charlotte Hornets", "Phoenix Suns", "New Orleans Pelicans", "Houston Rockets", "Los Angeles Clippers", "Minnesota Timberwolves", "Utah Jazz", "Toronto Raptors", "Atlanta Hawks", "Sacramento Kings", "Toronto Raptors", "Oklahoma City Thunder", "Dallas Mavericks", "Miami Heat", "Dallas Mavericks", "Los Angeles Lakers", "Houston Rockets", "Philadelphia 76ers", "Portland Trail Blazers", "Sacramento Kings", "Portland Trail Blazers", "Oklahoma City Thunder", "Golden State Warriors", "Sacramento Kings", "Phoenix Suns", "Los Angeles Lakers", "San Antonio Spurs", "Brooklyn Nets", "Cleveland Cavaliers", "Detroit Pistons", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Minnesota Timberwolves", "Dallas Mavericks", "Chicago Bulls", "Milwaukee Bucks", "Denver Nuggets", "Dallas Mavericks", "San Antonio Spurs", "Utah Jazz", "Washington Wizards", "Philadelphia 76ers", "New York Knicks", "Orlando Magic", "Los Angeles Clippers", "Detroit Pistons", "Charlotte Hornets", "New Orleans Pelicans", "Portland Trail Blazers", "Minnesota Timberwolves", "Chicago Bulls", "San Antonio Spurs", "Boston Celtics", "Orlando Magic", "Houston Rockets", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Indiana Pacers", "Atlanta Hawks", "Houston Rockets", "Brooklyn Nets", "Indiana Pacers", "Milwaukee Bucks", "Golden State Warriors", "San Antonio Spurs", "Phoenix Suns", "Utah Jazz", "Denver Nuggets", "New Orleans Pelicans", "Boston Celtics"],
      [132, 120, 118, 96, 104, 103, 106, 108, 87, 125, 108, 94, 101, 136, 120, 95, 119, 113, 100, 128, 98, 152, 97, 105, 96, 108, 113, 126, 113, 124, 100, 99, 104, 127, 114, 104, 118, 118, 110, 118, 123, 127, 116, 116, 85, 119, 114, 122, 91, 118, 119, 115, 119, 120, 135, 135, 132, 125, 121, 119, 114, 116, 118, 107, 124, 112, 132, 118, 125, 135, 105, 122, 132, 133, 127, 123, 112, 122, 115, 109, 141, 110],
      [11, 6, -3, -20, 3, -26, 9, 2, -28, 7, -10, -25, -11, 34, 12, -43, 1, -13, -32, 27, 7, 73, 7, 15, -8, 13, 7, 35, 10, 19, -5, -3, -9, 25, 1, 5, 13, 14, 4, 30, 15, 8, 8, 8, -27, 13, -12, 4, -13, 8, 10, 20, -3, 12, 20, 26, 25, 7, 12, -4, -5, 6, 13, -13, 28, -11, 21, 4, 7, 33, -15, 24, 12, 30, 25, 28, 1, 8, -6, -13, 27, -29]
    ),
    leaders: {
      pts: { name: "Ja Morant", val: 27.4, all: [{"name": "Ja Morant", "val": 27.4}, {"name": "Dillon Brooks", "val": 18.4}, {"name": "Desmond Bane", "val": 18.2}, {"name": "Jaren Jackson Jr.", "val": 16.3}, {"name": "De'Anthony Melton", "val": 10.8}, {"name": "Brandon Clarke", "val": 10.4}, {"name": "Tyus Jones", "val": 8.7}, {"name": "Ziaire Williams", "val": 8.1}, {"name": "Kyle Anderson", "val": 7.6}, {"name": "Steven Adams", "val": 6.9}, {"name": "Xavier Tillman Sr.", "val": 4.8}, {"name": "John Konchar", "val": 4.8}, {"name": "Sam Merrill", "val": 4.2}, {"name": "Santi Aldama", "val": 4.1}, {"name": "Jarrett Culver", "val": 3.5}, {"name": "Killian Tillie", "val": 3.3}, {"name": "Yves Pons", "val": 1.1}, {"name": "Shaq Buchanan", "val": 1.0}, {"name": "Dakota Mathias", "val": 1.0}, {"name": "Tyrell Terry", "val": 1.0}, {"name": "DaQuan Jeffries", "val": 0.7}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "Jon Teske", "val": 0.0}] },
      reb: { name: "Steven Adams", val: 10.0, all: [{"name": "Steven Adams", "val": 10.0}, {"name": "Jaren Jackson Jr.", "val": 5.8}, {"name": "Ja Morant", "val": 5.7}, {"name": "Brandon Clarke", "val": 5.3}, {"name": "Kyle Anderson", "val": 5.3}, {"name": "John Konchar", "val": 4.6}, {"name": "De'Anthony Melton", "val": 4.5}, {"name": "Desmond Bane", "val": 4.4}, {"name": "Dillon Brooks", "val": 3.2}, {"name": "Xavier Tillman Sr.", "val": 3.0}, {"name": "Santi Aldama", "val": 2.7}, {"name": "Tyus Jones", "val": 2.4}, {"name": "Ziaire Williams", "val": 2.1}, {"name": "Killian Tillie", "val": 1.7}, {"name": "Jarrett Culver", "val": 1.3}, {"name": "Sam Merrill", "val": 1.2}, {"name": "Yves Pons", "val": 1.0}, {"name": "Shaq Buchanan", "val": 1.0}, {"name": "Xavier Sneed", "val": 1.0}, {"name": "DaQuan Jeffries", "val": 0.7}, {"name": "Jon Teske", "val": 0.7}, {"name": "Dakota Mathias", "val": 0.3}, {"name": "Tyrell Terry", "val": 0.0}] },
      ast: { name: "Ja Morant", val: 6.7, all: [{"name": "Ja Morant", "val": 6.7}, {"name": "Tyus Jones", "val": 4.4}, {"name": "Steven Adams", "val": 3.4}, {"name": "Dillon Brooks", "val": 2.8}, {"name": "Desmond Bane", "val": 2.7}, {"name": "De'Anthony Melton", "val": 2.7}, {"name": "Kyle Anderson", "val": 2.7}, {"name": "John Konchar", "val": 1.5}, {"name": "Brandon Clarke", "val": 1.3}, {"name": "Xavier Tillman Sr.", "val": 1.2}, {"name": "Jaren Jackson Jr.", "val": 1.1}, {"name": "Ziaire Williams", "val": 1.0}, {"name": "Shaq Buchanan", "val": 1.0}, {"name": "Jarrett Culver", "val": 0.9}, {"name": "Santi Aldama", "val": 0.7}, {"name": "Sam Merrill", "val": 0.7}, {"name": "Killian Tillie", "val": 0.6}, {"name": "DaQuan Jeffries", "val": 0.3}, {"name": "Jon Teske", "val": 0.3}, {"name": "Dakota Mathias", "val": 0.2}, {"name": "Yves Pons", "val": 0.1}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "Tyrell Terry", "val": 0.0}] },
      stl: { name: "De'Anthony Melton", val: 1.4, all: [{"name": "De'Anthony Melton", "val": 1.4}, {"name": "Ja Morant", "val": 1.2}, {"name": "Desmond Bane", "val": 1.2}, {"name": "Kyle Anderson", "val": 1.1}, {"name": "Dillon Brooks", "val": 1.1}, {"name": "Tyus Jones", "val": 0.9}, {"name": "Xavier Tillman Sr.", "val": 0.9}, {"name": "Steven Adams", "val": 0.9}, {"name": "Jaren Jackson Jr.", "val": 0.9}, {"name": "Ziaire Williams", "val": 0.6}, {"name": "Brandon Clarke", "val": 0.6}, {"name": "John Konchar", "val": 0.6}, {"name": "Killian Tillie", "val": 0.6}, {"name": "Jarrett Culver", "val": 0.5}, {"name": "Shaq Buchanan", "val": 0.5}, {"name": "Jon Teske", "val": 0.3}, {"name": "Santi Aldama", "val": 0.2}, {"name": "Dakota Mathias", "val": 0.2}, {"name": "Yves Pons", "val": 0.1}, {"name": "Sam Merrill", "val": 0.0}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "DaQuan Jeffries", "val": 0.0}, {"name": "Tyrell Terry", "val": 0.0}] },
      blk: { name: "Jaren Jackson Jr.", val: 2.3, all: [{"name": "Jaren Jackson Jr.", "val": 2.3}, {"name": "Brandon Clarke", "val": 1.1}, {"name": "Steven Adams", "val": 0.8}, {"name": "Kyle Anderson", "val": 0.7}, {"name": "De'Anthony Melton", "val": 0.5}, {"name": "Ja Morant", "val": 0.4}, {"name": "Desmond Bane", "val": 0.4}, {"name": "Killian Tillie", "val": 0.4}, {"name": "Yves Pons", "val": 0.3}, {"name": "Santi Aldama", "val": 0.3}, {"name": "Xavier Tillman Sr.", "val": 0.3}, {"name": "John Konchar", "val": 0.3}, {"name": "Dillon Brooks", "val": 0.3}, {"name": "Ziaire Williams", "val": 0.2}, {"name": "Jarrett Culver", "val": 0.1}, {"name": "Tyus Jones", "val": 0.0}, {"name": "Sam Merrill", "val": 0.0}, {"name": "Shaq Buchanan", "val": 0.0}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "DaQuan Jeffries", "val": 0.0}, {"name": "Dakota Mathias", "val": 0.0}, {"name": "Jon Teske", "val": 0.0}, {"name": "Tyrell Terry", "val": 0.0}] },
    },
    avail: [
      { name: "Jaren Jackson Jr.", g: 78 },
      { name: "Desmond Bane", g: 76 },
      { name: "Steven Adams", g: 76 },
      { name: "De'Anthony Melton", g: 73 },
      { name: "Tyus Jones", g: 73 },
      { name: "John Konchar", g: 72 },
      { name: "Kyle Anderson", g: 69 },
      { name: "Brandon Clarke", g: 64 },
      { name: "Ziaire Williams", g: 62 },
      { name: "Ja Morant", g: 57 },
      { name: "Xavier Tillman Sr.", g: 53 },
      { name: "Jarrett Culver", g: 37 },
      { name: "Killian Tillie", g: 36 },
      { name: "Dillon Brooks", g: 32 },
      { name: "Santi Aldama", g: 32 },
      { name: "Yves Pons", g: 12 },
      { name: "Sam Merrill", g: 6 },
      { name: "Dakota Mathias", g: 6 },
      { name: "DaQuan Jeffries", g: 3 },
      { name: "Jon Teske", g: 3 },
      { name: "Shaq Buchanan", g: 2 },
      { name: "Xavier Sneed", g: 2 },
      { name: "Tyrell Terry", g: 2 },
    ]
  },

  "2022-23": {
    w: 51, l: 31,
    topW:   { pts: 142, opp: 101, against: "Milwaukee Bucks" },
    worstL: { pts: 96, opp: 137, against: "Dallas Mavericks" },
    conf_rank: 2,
    games: buildGames(
      "WWLWWLLWWWLWWLLWLLWWLWWWWWWWLLWLLWWWWWWWWWWWLLLLLWLLLWWLWLWWWLLLWWWLWWWWWWWLWLWLWL",
      ["New York Knicks", "Houston Rockets", "Dallas Mavericks", "Brooklyn Nets", "Sacramento Kings", "Utah Jazz", "Utah Jazz", "Portland Trail Blazers", "Charlotte Hornets", "Washington Wizards", "Boston Celtics", "San Antonio Spurs", "Minnesota Timberwolves", "Washington Wizards", "New Orleans Pelicans", "Oklahoma City Thunder", "Brooklyn Nets", "Sacramento Kings", "New Orleans Pelicans", "New York Knicks", "Minnesota Timberwolves", "Philadelphia 76ers", "Detroit Pistons", "Miami Heat", "Oklahoma City Thunder", "Detroit Pistons", "Atlanta Hawks", "Milwaukee Bucks", "Oklahoma City Thunder", "Denver Nuggets", "Phoenix Suns", "Golden State Warriors", "Phoenix Suns", "Toronto Raptors", "New Orleans Pelicans", "Sacramento Kings", "Charlotte Hornets", "Orlando Magic", "Utah Jazz", "San Antonio Spurs", "San Antonio Spurs", "Indiana Pacers", "Phoenix Suns", "Cleveland Cavaliers", "Los Angeles Lakers", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Minnesota Timberwolves", "Indiana Pacers", "Portland Trail Blazers", "Cleveland Cavaliers", "Toronto Raptors", "Chicago Bulls", "Minnesota Timberwolves", "Boston Celtics", "Utah Jazz", "Philadelphia 76ers", "Denver Nuggets", "Los Angeles Lakers", "Houston Rockets", "Denver Nuggets", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Dallas Mavericks", "Dallas Mavericks", "Miami Heat", "San Antonio Spurs", "Golden State Warriors", "Dallas Mavericks", "Houston Rockets", "Houston Rockets", "Atlanta Hawks", "Orlando Magic", "Los Angeles Clippers", "Los Angeles Clippers", "Chicago Bulls", "Portland Trail Blazers", "New Orleans Pelicans", "Milwaukee Bucks", "Oklahoma City Thunder"],
      [115, 129, 96, 134, 125, 123, 105, 111, 130, 103, 106, 124, 114, 92, 102, 121, 115, 109, 132, 127, 101, 117, 122, 101, 123, 114, 128, 142, 109, 91, 125, 109, 108, 119, 116, 118, 131, 123, 123, 121, 135, 130, 136, 115, 121, 110, 100, 120, 100, 112, 112, 113, 103, 104, 128, 109, 117, 105, 112, 121, 113, 97, 129, 103, 131, 112, 104, 119, 126, 133, 112, 130, 151, 123, 113, 132, 108, 107, 119, 131, 137, 100],
      [3, 7, -41, 10, 15, -1, -16, 5, 31, 6, -3, 2, 11, -10, -11, 11, -12, -4, 21, 4, -8, 8, 10, 8, 21, 11, 25, 41, -6, -14, 25, -14, -17, 13, 15, 10, 24, 8, 5, 8, 6, 18, 30, 1, -1, -2, -33, -2, -11, 12, -10, -15, -3, 15, 21, -10, 6, -5, 18, 12, 14, -16, -6, -9, 21, 4, 16, -19, 6, 14, 4, 5, 37, 4, 5, -9, 14, -21, 10, -7, 23, -15]
    ),
    leaders: {
      pts: { name: "Ja Morant", val: 26.2, all: [{"name": "Ja Morant", "val": 26.2}, {"name": "Desmond Bane", "val": 21.5}, {"name": "Jaren Jackson Jr.", "val": 18.6}, {"name": "Dillon Brooks", "val": 14.3}, {"name": "Luke Kennard", "val": 11.3}, {"name": "Tyus Jones", "val": 10.3}, {"name": "Brandon Clarke", "val": 10.0}, {"name": "Santi Aldama", "val": 9.0}, {"name": "Steven Adams", "val": 8.6}, {"name": "Xavier Tillman Sr.", "val": 7.0}, {"name": "David Roddy", "val": 6.7}, {"name": "Ziaire Williams", "val": 5.7}, {"name": "John Konchar", "val": 5.1}, {"name": "Kenneth Lofton Jr.", "val": 5.0}, {"name": "Jake LaRavia", "val": 3.0}, {"name": "Jacob Gilyard", "val": 3.0}, {"name": "Danny Green", "val": 3.0}, {"name": "Kennedy Chandler", "val": 2.2}, {"name": "Vince Williams Jr.", "val": 2.0}] },
      reb: { name: "Steven Adams", val: 11.5, all: [{"name": "Steven Adams", "val": 11.5}, {"name": "Jaren Jackson Jr.", "val": 6.8}, {"name": "Ja Morant", "val": 5.9}, {"name": "Brandon Clarke", "val": 5.5}, {"name": "Desmond Bane", "val": 5.0}, {"name": "Xavier Tillman Sr.", "val": 5.0}, {"name": "Santi Aldama", "val": 4.8}, {"name": "John Konchar", "val": 4.3}, {"name": "Jacob Gilyard", "val": 4.0}, {"name": "Dillon Brooks", "val": 3.3}, {"name": "Luke Kennard", "val": 3.1}, {"name": "David Roddy", "val": 2.8}, {"name": "Tyus Jones", "val": 2.5}, {"name": "Ziaire Williams", "val": 2.1}, {"name": "Kenneth Lofton Jr.", "val": 2.1}, {"name": "Jake LaRavia", "val": 1.8}, {"name": "Danny Green", "val": 1.3}, {"name": "Kennedy Chandler", "val": 1.1}, {"name": "Vince Williams Jr.", "val": 1.0}] },
      ast: { name: "Ja Morant", val: 8.1, all: [{"name": "Ja Morant", "val": 8.1}, {"name": "Jacob Gilyard", "val": 7.0}, {"name": "Tyus Jones", "val": 5.2}, {"name": "Desmond Bane", "val": 4.4}, {"name": "Dillon Brooks", "val": 2.6}, {"name": "Steven Adams", "val": 2.3}, {"name": "Luke Kennard", "val": 2.3}, {"name": "Kennedy Chandler", "val": 1.6}, {"name": "Xavier Tillman Sr.", "val": 1.6}, {"name": "John Konchar", "val": 1.4}, {"name": "Brandon Clarke", "val": 1.3}, {"name": "Santi Aldama", "val": 1.3}, {"name": "Jaren Jackson Jr.", "val": 1.0}, {"name": "Ziaire Williams", "val": 0.9}, {"name": "David Roddy", "val": 0.8}, {"name": "Kenneth Lofton Jr.", "val": 0.8}, {"name": "Danny Green", "val": 0.7}, {"name": "Jake LaRavia", "val": 0.6}, {"name": "Vince Williams Jr.", "val": 0.3}] },
      stl: { name: "Jacob Gilyard", val: 3.0, all: [{"name": "Jacob Gilyard", "val": 3.0}, {"name": "Ja Morant", "val": 1.1}, {"name": "John Konchar", "val": 1.1}, {"name": "Jaren Jackson Jr.", "val": 1.0}, {"name": "Tyus Jones", "val": 1.0}, {"name": "Desmond Bane", "val": 1.0}, {"name": "Xavier Tillman Sr.", "val": 1.0}, {"name": "Dillon Brooks", "val": 0.9}, {"name": "Steven Adams", "val": 0.9}, {"name": "Santi Aldama", "val": 0.6}, {"name": "Brandon Clarke", "val": 0.6}, {"name": "Luke Kennard", "val": 0.5}, {"name": "David Roddy", "val": 0.4}, {"name": "Ziaire Williams", "val": 0.4}, {"name": "Vince Williams Jr.", "val": 0.4}, {"name": "Danny Green", "val": 0.3}, {"name": "Jake LaRavia", "val": 0.3}, {"name": "Kennedy Chandler", "val": 0.3}, {"name": "Kenneth Lofton Jr.", "val": 0.2}] },
      blk: { name: "Jaren Jackson Jr.", val: 3.0, all: [{"name": "Jaren Jackson Jr.", "val": 3.0}, {"name": "Steven Adams", "val": 1.1}, {"name": "Brandon Clarke", "val": 0.7}, {"name": "Santi Aldama", "val": 0.6}, {"name": "Xavier Tillman Sr.", "val": 0.5}, {"name": "Desmond Bane", "val": 0.4}, {"name": "John Konchar", "val": 0.3}, {"name": "Ja Morant", "val": 0.3}, {"name": "David Roddy", "val": 0.3}, {"name": "Dillon Brooks", "val": 0.2}, {"name": "Ziaire Williams", "val": 0.2}, {"name": "Jake LaRavia", "val": 0.1}, {"name": "Kenneth Lofton Jr.", "val": 0.1}, {"name": "Kennedy Chandler", "val": 0.1}, {"name": "Vince Williams Jr.", "val": 0.1}, {"name": "Tyus Jones", "val": 0.1}, {"name": "Danny Green", "val": 0.0}, {"name": "Luke Kennard", "val": 0.0}, {"name": "Jacob Gilyard", "val": 0.0}] },
    },
    avail: [
      { name: "Tyus Jones", g: 80 },
      { name: "Santi Aldama", g: 77 },
      { name: "Dillon Brooks", g: 73 },
      { name: "John Konchar", g: 72 },
      { name: "David Roddy", g: 70 },
      { name: "Jaren Jackson Jr.", g: 63 },
      { name: "Ja Morant", g: 61 },
      { name: "Xavier Tillman Sr.", g: 61 },
      { name: "Desmond Bane", g: 58 },
      { name: "Brandon Clarke", g: 56 },
      { name: "Steven Adams", g: 42 },
      { name: "Ziaire Williams", g: 37 },
      { name: "Kennedy Chandler", g: 36 },
      { name: "Jake LaRavia", g: 35 },
      { name: "Luke Kennard", g: 24 },
      { name: "Kenneth Lofton Jr.", g: 24 },
      { name: "Vince Williams Jr.", g: 15 },
      { name: "Danny Green", g: 3 },
      { name: "Jacob Gilyard", g: 1 },
    ]
  },

  "2023-24": {
    w: 27, l: 55,
    topW:   { pts: 108, opp: 90, against: "Detroit Pistons" },
    worstL: { pts: 91, opp: 131, against: "Boston Celtics" },
    conf_rank: 13,
    games: buildGames(
      "LLLLLLWLLWLWLLLLWWLWLLLLLWWWWLLLWLWWWLLWLLWWWLLLLLLLLLWWLLLLLWWLLWLLLLWLLLWWWLLLLL",
      ["New Orleans Pelicans", "Denver Nuggets", "Washington Wizards", "Dallas Mavericks", "Utah Jazz", "Portland Trail Blazers", "Portland Trail Blazers", "Miami Heat", "Utah Jazz", "Los Angeles Clippers", "Los Angeles Lakers", "San Antonio Spurs", "Boston Celtics", "Houston Rockets", "Phoenix Suns", "Minnesota Timberwolves", "Utah Jazz", "Dallas Mavericks", "Phoenix Suns", "Detroit Pistons", "Minnesota Timberwolves", "Dallas Mavericks", "Houston Rockets", "Houston Rockets", "Oklahoma City Thunder", "New Orleans Pelicans", "Indiana Pacers", "Atlanta Hawks", "New Orleans Pelicans", "Denver Nuggets", "Los Angeles Clippers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Los Angeles Lakers", "Phoenix Suns", "Dallas Mavericks", "Los Angeles Clippers", "New York Knicks", "Golden State Warriors", "Minnesota Timberwolves", "Chicago Bulls", "Toronto Raptors", "Miami Heat", "Orlando Magic", "Indiana Pacers", "Sacramento Kings", "Cleveland Cavaliers", "Golden State Warriors", "Boston Celtics", "New York Knicks", "Chicago Bulls", "Charlotte Hornets", "New Orleans Pelicans", "Houston Rockets", "Milwaukee Bucks", "Los Angeles Clippers", "Brooklyn Nets", "Minnesota Timberwolves", "Portland Trail Blazers", "Portland Trail Blazers", "Brooklyn Nets", "Philadelphia 76ers", "Atlanta Hawks", "Oklahoma City Thunder", "Washington Wizards", "Charlotte Hornets", "Oklahoma City Thunder", "Sacramento Kings", "Golden State Warriors", "San Antonio Spurs", "Denver Nuggets", "Los Angeles Lakers", "Orlando Magic", "Detroit Pistons", "Milwaukee Bucks", "Detroit Pistons", "Philadelphia 76ers", "San Antonio Spurs", "Cleveland Cavaliers", "Los Angeles Lakers", "Denver Nuggets"],
      [104, 104, 106, 110, 109, 113, 112, 102, 121, 105, 107, 120, 100, 91, 89, 97, 105, 108, 109, 116, 103, 113, 104, 96, 97, 115, 116, 125, 116, 105, 106, 92, 106, 111, 127, 121, 120, 119, 94, 116, 103, 96, 108, 105, 107, 110, 94, 101, 101, 91, 113, 110, 106, 87, 121, 113, 95, 86, 101, 92, 100, 106, 115, 92, 93, 109, 98, 112, 111, 116, 99, 103, 124, 88, 110, 111, 108, 96, 87, 98, 120, 111],
      [-7, -4, -7, -15, -24, -2, 12, -6, -6, 4, -27, 12, -2, -20, -21, -22, 14, 14, -7, 14, -24, -7, -13, -7, -19, 2, 13, 6, 1, -37, -11, -31, 8, -5, 14, 6, 17, -9, -12, 9, -15, -29, 8, 9, 1, -6, -9, -7, -20, -40, -10, -8, -9, -9, 8, 3, -6, -25, -9, -30, -7, 4, 6, -7, -31, 12, -12, -6, -10, -21, 2, -25, -12, -30, 2, 10, 18, -20, -15, -12, -3, -15]
    ),
    leaders: {
      pts: { name: "Ja Morant", val: 25.1, all: [{"name": "Ja Morant", "val": 25.1}, {"name": "Desmond Bane", "val": 23.7}, {"name": "Jaren Jackson Jr.", "val": 22.5}, {"name": "GG Jackson II", "val": 14.6}, {"name": "Marcus Smart", "val": 14.5}, {"name": "Scotty Pippen Jr.", "val": 12.9}, {"name": "Lamar Stevens", "val": 11.5}, {"name": "Brandon Clarke", "val": 11.3}, {"name": "Luke Kennard", "val": 11.0}, {"name": "Jake LaRavia", "val": 10.8}, {"name": "Santi Aldama", "val": 10.7}, {"name": "Jordan Goodwin", "val": 10.0}, {"name": "Vince Williams Jr.", "val": 10.0}, {"name": "David Roddy", "val": 8.4}, {"name": "Ziaire Williams", "val": 8.2}, {"name": "Derrick Rose", "val": 8.0}, {"name": "Trey Jemison", "val": 7.4}, {"name": "Mãozinha Pereira", "val": 6.9}, {"name": "Zavier Simpson", "val": 6.0}, {"name": "Xavier Tillman Sr.", "val": 6.0}, {"name": "Jaylen Nowell", "val": 5.7}, {"name": "Bismack Biyombo", "val": 5.2}, {"name": "DeJon Jarreau", "val": 4.8}, {"name": "Jacob Gilyard", "val": 4.7}, {"name": "John Konchar", "val": 4.3}, {"name": "Matthew Hurt", "val": 4.0}, {"name": "Wenyen Gabriel", "val": 3.4}, {"name": "Timmy Allen", "val": 2.6}, {"name": "Yuta Watanabe", "val": 2.6}, {"name": "Kenneth Lofton Jr.", "val": 2.6}, {"name": "Tosan Evbuomwan", "val": 2.5}, {"name": "Jack White", "val": 1.5}, {"name": "Shaquille Harrison", "val": 0.7}] },
      reb: { name: "Jordan Goodwin", val: 8.0, all: [{"name": "Jordan Goodwin", "val": 8.0}, {"name": "Bismack Biyombo", "val": 6.4}, {"name": "Trey Jemison", "val": 5.8}, {"name": "Santi Aldama", "val": 5.8}, {"name": "Ja Morant", "val": 5.6}, {"name": "Vince Williams Jr.", "val": 5.6}, {"name": "Jaren Jackson Jr.", "val": 5.5}, {"name": "Brandon Clarke", "val": 5.3}, {"name": "Mãozinha Pereira", "val": 5.3}, {"name": "Lamar Stevens", "val": 5.1}, {"name": "Wenyen Gabriel", "val": 5.0}, {"name": "DeJon Jarreau", "val": 4.9}, {"name": "John Konchar", "val": 4.7}, {"name": "Xavier Tillman Sr.", "val": 4.6}, {"name": "Desmond Bane", "val": 4.4}, {"name": "David Roddy", "val": 4.2}, {"name": "GG Jackson II", "val": 4.1}, {"name": "Jake LaRavia", "val": 3.7}, {"name": "Ziaire Williams", "val": 3.5}, {"name": "Tosan Evbuomwan", "val": 3.5}, {"name": "Timmy Allen", "val": 3.4}, {"name": "Scotty Pippen Jr.", "val": 3.2}, {"name": "Jack White", "val": 3.0}, {"name": "Zavier Simpson", "val": 2.9}, {"name": "Luke Kennard", "val": 2.9}, {"name": "Marcus Smart", "val": 2.7}, {"name": "Matthew Hurt", "val": 2.0}, {"name": "Derrick Rose", "val": 1.9}, {"name": "Yuta Watanabe", "val": 1.8}, {"name": "Jaylen Nowell", "val": 1.6}, {"name": "Jacob Gilyard", "val": 1.2}, {"name": "Kenneth Lofton Jr.", "val": 1.0}, {"name": "Shaquille Harrison", "val": 0.7}] },
      ast: { name: "Ja Morant", val: 8.1, all: [{"name": "Ja Morant", "val": 8.1}, {"name": "Desmond Bane", "val": 5.5}, {"name": "Scotty Pippen Jr.", "val": 4.7}, {"name": "Jordan Goodwin", "val": 4.5}, {"name": "Marcus Smart", "val": 4.3}, {"name": "Zavier Simpson", "val": 3.6}, {"name": "Luke Kennard", "val": 3.5}, {"name": "Jacob Gilyard", "val": 3.5}, {"name": "Vince Williams Jr.", "val": 3.4}, {"name": "Derrick Rose", "val": 3.3}, {"name": "DeJon Jarreau", "val": 2.9}, {"name": "Jaren Jackson Jr.", "val": 2.3}, {"name": "Santi Aldama", "val": 2.3}, {"name": "John Konchar", "val": 2.0}, {"name": "Jaylen Nowell", "val": 1.8}, {"name": "Xavier Tillman Sr.", "val": 1.7}, {"name": "Jake LaRavia", "val": 1.7}, {"name": "Bismack Biyombo", "val": 1.7}, {"name": "David Roddy", "val": 1.6}, {"name": "Brandon Clarke", "val": 1.5}, {"name": "Ziaire Williams", "val": 1.5}, {"name": "Tosan Evbuomwan", "val": 1.5}, {"name": "Trey Jemison", "val": 1.2}, {"name": "GG Jackson II", "val": 1.2}, {"name": "Lamar Stevens", "val": 1.1}, {"name": "Timmy Allen", "val": 1.0}, {"name": "Yuta Watanabe", "val": 1.0}, {"name": "Kenneth Lofton Jr.", "val": 0.9}, {"name": "Wenyen Gabriel", "val": 0.6}, {"name": "Matthew Hurt", "val": 0.5}, {"name": "Mãozinha Pereira", "val": 0.3}, {"name": "Jack White", "val": 0.3}, {"name": "Shaquille Harrison", "val": 0.0}] },
      stl: { name: "Marcus Smart", val: 2.1, all: [{"name": "Marcus Smart", "val": 2.1}, {"name": "Scotty Pippen Jr.", "val": 1.7}, {"name": "Jordan Goodwin", "val": 1.5}, {"name": "Jaren Jackson Jr.", "val": 1.2}, {"name": "Xavier Tillman Sr.", "val": 1.2}, {"name": "Zavier Simpson", "val": 1.0}, {"name": "Jack White", "val": 1.0}, {"name": "Desmond Bane", "val": 1.0}, {"name": "Vince Williams Jr.", "val": 0.9}, {"name": "Mãozinha Pereira", "val": 0.9}, {"name": "John Konchar", "val": 0.9}, {"name": "Lamar Stevens", "val": 0.9}, {"name": "Ja Morant", "val": 0.8}, {"name": "Brandon Clarke", "val": 0.8}, {"name": "Jake LaRavia", "val": 0.8}, {"name": "Timmy Allen", "val": 0.8}, {"name": "Ziaire Williams", "val": 0.7}, {"name": "Jacob Gilyard", "val": 0.7}, {"name": "Santi Aldama", "val": 0.7}, {"name": "DeJon Jarreau", "val": 0.7}, {"name": "Yuta Watanabe", "val": 0.6}, {"name": "GG Jackson II", "val": 0.6}, {"name": "David Roddy", "val": 0.5}, {"name": "Trey Jemison", "val": 0.5}, {"name": "Luke Kennard", "val": 0.5}, {"name": "Matthew Hurt", "val": 0.4}, {"name": "Wenyen Gabriel", "val": 0.4}, {"name": "Jaylen Nowell", "val": 0.3}, {"name": "Derrick Rose", "val": 0.3}, {"name": "Bismack Biyombo", "val": 0.3}, {"name": "Kenneth Lofton Jr.", "val": 0.2}, {"name": "Tosan Evbuomwan", "val": 0.0}, {"name": "Shaquille Harrison", "val": 0.0}] },
      blk: { name: "Jaren Jackson Jr.", val: 1.6, all: [{"name": "Jaren Jackson Jr.", "val": 1.6}, {"name": "Trey Jemison", "val": 1.2}, {"name": "Bismack Biyombo", "val": 1.1}, {"name": "Xavier Tillman Sr.", "val": 1.0}, {"name": "Brandon Clarke", "val": 1.0}, {"name": "John Konchar", "val": 0.9}, {"name": "Santi Aldama", "val": 0.9}, {"name": "Lamar Stevens", "val": 0.9}, {"name": "Vince Williams Jr.", "val": 0.7}, {"name": "Mãozinha Pereira", "val": 0.6}, {"name": "Ja Morant", "val": 0.6}, {"name": "Scotty Pippen Jr.", "val": 0.5}, {"name": "GG Jackson II", "val": 0.5}, {"name": "Desmond Bane", "val": 0.5}, {"name": "Jordan Goodwin", "val": 0.5}, {"name": "Zavier Simpson", "val": 0.4}, {"name": "Matthew Hurt", "val": 0.4}, {"name": "Wenyen Gabriel", "val": 0.4}, {"name": "Tosan Evbuomwan", "val": 0.3}, {"name": "Jack White", "val": 0.3}, {"name": "Jake LaRavia", "val": 0.3}, {"name": "Marcus Smart", "val": 0.3}, {"name": "Shaquille Harrison", "val": 0.3}, {"name": "Ziaire Williams", "val": 0.2}, {"name": "David Roddy", "val": 0.2}, {"name": "DeJon Jarreau", "val": 0.2}, {"name": "Kenneth Lofton Jr.", "val": 0.2}, {"name": "Jacob Gilyard", "val": 0.1}, {"name": "Derrick Rose", "val": 0.1}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Jaylen Nowell", "val": 0.0}, {"name": "Yuta Watanabe", "val": 0.0}, {"name": "Timmy Allen", "val": 0.0}] },
    },
    avail: [
      { name: "Jaren Jackson Jr.", g: 66 },
      { name: "Santi Aldama", g: 61 },
      { name: "John Konchar", g: 55 },
      { name: "Vince Williams Jr.", g: 52 },
      { name: "Ziaire Williams", g: 51 },
      { name: "GG Jackson II", g: 48 },
      { name: "David Roddy", g: 48 },
      { name: "Desmond Bane", g: 42 },
      { name: "Luke Kennard", g: 39 },
      { name: "Jacob Gilyard", g: 37 },
      { name: "Jake LaRavia", g: 35 },
      { name: "Xavier Tillman Sr.", g: 34 },
      { name: "Bismack Biyombo", g: 30 },
      { name: "Derrick Rose", g: 24 },
      { name: "Trey Jemison", g: 23 },
      { name: "Scotty Pippen Jr.", g: 21 },
      { name: "Marcus Smart", g: 20 },
      { name: "Lamar Stevens", g: 19 },
      { name: "Jordan Goodwin", g: 17 },
      { name: "Kenneth Lofton Jr.", g: 15 },
      { name: "DeJon Jarreau", g: 9 },
      { name: "Jaylen Nowell", g: 9 },
      { name: "Ja Morant", g: 9 },
      { name: "Matthew Hurt", g: 8 },
      { name: "Mãozinha Pereira", g: 7 },
      { name: "Zavier Simpson", g: 7 },
      { name: "Brandon Clarke", g: 6 },
      { name: "Yuta Watanabe", g: 5 },
      { name: "Wenyen Gabriel", g: 5 },
      { name: "Timmy Allen", g: 5 },
      { name: "Tosan Evbuomwan", g: 4 },
      { name: "Jack White", g: 4 },
      { name: "Shaquille Harrison", g: 3 },
    ]
  },

  "2024-25": {
    w: 48, l: 34,
    topW:   { pts: 144, opp: 93, against: "Golden State Warriors" },
    worstL: { pts: 106, opp: 143, against: "New York Knicks" },
    conf_rank: 8,
    games: buildGames(
      "WLWLLWWLWWWLLWLWWWWWWLWWWWLWWLWWLWLLWLWLWWWWWWLWWWWLWLLWLWLLLLWWWWLWLLLWLLLLWWWLLW",
      ["Utah Jazz", "Houston Rockets", "Orlando Magic", "Chicago Bulls", "Brooklyn Nets", "Milwaukee Bucks", "Philadelphia 76ers", "Brooklyn Nets", "Los Angeles Lakers", "Washington Wizards", "Portland Trail Blazers", "Los Angeles Lakers", "Golden State Warriors", "Denver Nuggets", "Denver Nuggets", "Philadelphia 76ers", "Chicago Bulls", "Portland Trail Blazers", "Detroit Pistons", "New Orleans Pelicans", "Indiana Pacers", "Dallas Mavericks", "Sacramento Kings", "Boston Celtics", "Washington Wizards", "Brooklyn Nets", "Los Angeles Lakers", "Golden State Warriors", "Atlanta Hawks", "Los Angeles Clippers", "Toronto Raptors", "New Orleans Pelicans", "Oklahoma City Thunder", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Dallas Mavericks", "Houston Rockets", "Minnesota Timberwolves", "Houston Rockets", "San Antonio Spurs", "San Antonio Spurs", "Minnesota Timberwolves", "Charlotte Hornets", "New Orleans Pelicans", "Utah Jazz", "New York Knicks", "Houston Rockets", "Milwaukee Bucks", "San Antonio Spurs", "Toronto Raptors", "Oklahoma City Thunder", "Phoenix Suns", "Los Angeles Clippers", "Indiana Pacers", "Orlando Magic", "Cleveland Cavaliers", "Phoenix Suns", "New York Knicks", "San Antonio Spurs", "Atlanta Hawks", "Oklahoma City Thunder", "Dallas Mavericks", "New Orleans Pelicans", "Phoenix Suns", "Utah Jazz", "Cleveland Cavaliers", "Miami Heat", "Sacramento Kings", "Portland Trail Blazers", "Los Angeles Clippers", "Utah Jazz", "Oklahoma City Thunder", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Miami Heat", "Detroit Pistons", "Charlotte Hornets", "Minnesota Timberwolves", "Denver Nuggets", "Dallas Mavericks"],
      [126, 108, 124, 123, 106, 122, 124, 104, 131, 128, 134, 123, 118, 105, 110, 117, 142, 123, 131, 120, 136, 116, 115, 127, 140, 135, 110, 144, 128, 110, 155, 132, 106, 117, 133, 113, 119, 115, 127, 118, 129, 140, 108, 132, 139, 125, 106, 120, 132, 128, 138, 112, 119, 114, 113, 105, 123, 151, 113, 128, 130, 103, 122, 107, 120, 122, 124, 125, 122, 99, 108, 140, 104, 127, 103, 125, 110, 109, 124, 125, 109, 132],
      [2, -20, 13, -3, -13, 23, 17, -2, 17, 24, 45, -5, -5, 15, -12, 6, 11, 25, 20, 11, 15, -5, 5, 6, 28, 16, -6, 51, 16, -4, 29, 8, -24, 5, -5, -8, 15, -4, 2, -2, 14, 28, 2, 12, 13, 22, -37, 1, 13, 19, 31, -13, 7, -14, -14, 1, -6, 3, -1, -2, -2, -17, 11, 3, 2, 7, -9, 34, -10, -16, -20, 37, -21, -7, -14, -9, 2, 6, 24, -16, -8, 35]
    ),
    leaders: {
      pts: { name: "Ja Morant", val: 23.2, all: [{"name": "Ja Morant", "val": 23.2}, {"name": "Jaren Jackson Jr.", "val": 22.2}, {"name": "Desmond Bane", "val": 19.2}, {"name": "Santi Aldama", "val": 12.5}, {"name": "Jaylen Wells", "val": 10.4}, {"name": "Scotty Pippen Jr.", "val": 9.9}, {"name": "Zach Edey", "val": 9.2}, {"name": "Luke Kennard", "val": 8.9}, {"name": "Marcus Smart", "val": 8.7}, {"name": "Brandon Clarke", "val": 8.3}, {"name": "Jake LaRavia", "val": 7.3}, {"name": "GG Jackson II", "val": 7.2}, {"name": "Jay Huff", "val": 6.9}, {"name": "Vince Williams Jr.", "val": 6.6}, {"name": "Lamar Stevens", "val": 4.4}, {"name": "Cam Spencer", "val": 4.2}, {"name": "Marvin Bagley III", "val": 3.6}, {"name": "John Konchar", "val": 2.4}, {"name": "Yuki Kawamura", "val": 1.6}, {"name": "Colin Castleton", "val": 1.4}, {"name": "Zyon Pullin", "val": 0.0}] },
      reb: { name: "Zach Edey", val: 8.3, all: [{"name": "Zach Edey", "val": 8.3}, {"name": "Santi Aldama", "val": 6.4}, {"name": "Desmond Bane", "val": 6.1}, {"name": "Jaren Jackson Jr.", "val": 5.6}, {"name": "Brandon Clarke", "val": 5.1}, {"name": "Jake LaRavia", "val": 4.4}, {"name": "Ja Morant", "val": 4.1}, {"name": "Vince Williams Jr.", "val": 3.6}, {"name": "Jaylen Wells", "val": 3.4}, {"name": "Scotty Pippen Jr.", "val": 3.3}, {"name": "John Konchar", "val": 3.3}, {"name": "GG Jackson II", "val": 3.2}, {"name": "Luke Kennard", "val": 2.8}, {"name": "Marcus Smart", "val": 2.3}, {"name": "Marvin Bagley III", "val": 2.3}, {"name": "Lamar Stevens", "val": 2.2}, {"name": "Jay Huff", "val": 2.0}, {"name": "Cam Spencer", "val": 1.2}, {"name": "Colin Castleton", "val": 0.9}, {"name": "Yuki Kawamura", "val": 0.5}, {"name": "Zyon Pullin", "val": 0.0}] },
      ast: { name: "Ja Morant", val: 7.3, all: [{"name": "Ja Morant", "val": 7.3}, {"name": "Desmond Bane", "val": 5.3}, {"name": "Scotty Pippen Jr.", "val": 4.4}, {"name": "Marcus Smart", "val": 3.7}, {"name": "Luke Kennard", "val": 3.3}, {"name": "Santi Aldama", "val": 2.9}, {"name": "Jake LaRavia", "val": 2.8}, {"name": "Jaren Jackson Jr.", "val": 2.0}, {"name": "Vince Williams Jr.", "val": 2.0}, {"name": "Jaylen Wells", "val": 1.7}, {"name": "Cam Spencer", "val": 1.4}, {"name": "GG Jackson II", "val": 1.0}, {"name": "Brandon Clarke", "val": 1.0}, {"name": "Zach Edey", "val": 1.0}, {"name": "John Konchar", "val": 0.9}, {"name": "Yuki Kawamura", "val": 0.9}, {"name": "Jay Huff", "val": 0.6}, {"name": "Lamar Stevens", "val": 0.5}, {"name": "Marvin Bagley III", "val": 0.3}, {"name": "Colin Castleton", "val": 0.0}, {"name": "Zyon Pullin", "val": 0.0}] },
      stl: { name: "Scotty Pippen Jr.", val: 1.3, all: [{"name": "Scotty Pippen Jr.", "val": 1.3}, {"name": "Desmond Bane", "val": 1.2}, {"name": "Jaren Jackson Jr.", "val": 1.2}, {"name": "Ja Morant", "val": 1.2}, {"name": "Marcus Smart", "val": 1.2}, {"name": "Jake LaRavia", "val": 0.9}, {"name": "Brandon Clarke", "val": 0.8}, {"name": "Luke Kennard", "val": 0.8}, {"name": "Santi Aldama", "val": 0.8}, {"name": "John Konchar", "val": 0.7}, {"name": "Jaylen Wells", "val": 0.6}, {"name": "Zach Edey", "val": 0.5}, {"name": "Vince Williams Jr.", "val": 0.4}, {"name": "GG Jackson II", "val": 0.4}, {"name": "Cam Spencer", "val": 0.4}, {"name": "Jay Huff", "val": 0.3}, {"name": "Lamar Stevens", "val": 0.3}, {"name": "Marvin Bagley III", "val": 0.2}, {"name": "Colin Castleton", "val": 0.1}, {"name": "Yuki Kawamura", "val": 0.1}, {"name": "Zyon Pullin", "val": 0.0}] },
      blk: { name: "Jaren Jackson Jr.", val: 1.5, all: [{"name": "Jaren Jackson Jr.", "val": 1.5}, {"name": "Zach Edey", "val": 1.3}, {"name": "Jay Huff", "val": 0.9}, {"name": "Brandon Clarke", "val": 0.6}, {"name": "Jake LaRavia", "val": 0.4}, {"name": "Scotty Pippen Jr.", "val": 0.4}, {"name": "Desmond Bane", "val": 0.4}, {"name": "Santi Aldama", "val": 0.4}, {"name": "Marcus Smart", "val": 0.3}, {"name": "Vince Williams Jr.", "val": 0.3}, {"name": "John Konchar", "val": 0.3}, {"name": "Marvin Bagley III", "val": 0.3}, {"name": "Ja Morant", "val": 0.2}, {"name": "GG Jackson II", "val": 0.2}, {"name": "Lamar Stevens", "val": 0.2}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Jaylen Wells", "val": 0.1}, {"name": "Colin Castleton", "val": 0.1}, {"name": "Cam Spencer", "val": 0.0}, {"name": "Yuki Kawamura", "val": 0.0}, {"name": "Zyon Pullin", "val": 0.0}] },
    },
    avail: [
      { name: "Jaylen Wells", g: 79 },
      { name: "Scotty Pippen Jr.", g: 79 },
      { name: "Jaren Jackson Jr.", g: 74 },
      { name: "Desmond Bane", g: 69 },
      { name: "Zach Edey", g: 66 },
      { name: "Santi Aldama", g: 65 },
      { name: "Luke Kennard", g: 65 },
      { name: "Jay Huff", g: 64 },
      { name: "Brandon Clarke", g: 64 },
      { name: "Ja Morant", g: 50 },
      { name: "Jake LaRavia", g: 47 },
      { name: "John Konchar", g: 46 },
      { name: "GG Jackson II", g: 29 },
      { name: "Vince Williams Jr.", g: 27 },
      { name: "Cam Spencer", g: 25 },
      { name: "Yuki Kawamura", g: 22 },
      { name: "Marcus Smart", g: 19 },
      { name: "Lamar Stevens", g: 17 },
      { name: "Marvin Bagley III", g: 12 },
      { name: "Colin Castleton", g: 10 },
      { name: "Zyon Pullin", g: 3 },
    ]
  },

  "2025-26": {
    w: 25, l: 57,
    topW:   { pts: 137, opp: 96, against: "Sacramento Kings" },
    worstL: { pts: 101, opp: 147, against: "Utah Jazz" },
    conf_rank: 13,
    games: buildGames(
      "WLWLWLLLLWLLLLLWWLWWWLWWLWWLLWWLLLLWLLWLWLLLLLLWWLLLLWLLLWWLLLLLLLLWLLLLLWLLLLLLLL",
      ["New Orleans Pelicans", "Miami Heat", "Indiana Pacers", "Golden State Warriors", "Phoenix Suns", "Los Angeles Lakers", "Toronto Raptors", "Detroit Pistons", "Houston Rockets", "Dallas Mavericks", "Oklahoma City Thunder", "New York Knicks", "Boston Celtics", "Cleveland Cavaliers", "San Antonio Spurs", "Sacramento Kings", "Dallas Mavericks", "Denver Nuggets", "New Orleans Pelicans", "Los Angeles Clippers", "Sacramento Kings", "San Antonio Spurs", "Los Angeles Clippers", "Portland Trail Blazers", "Utah Jazz", "Los Angeles Clippers", "Minnesota Timberwolves", "Washington Wizards", "Oklahoma City Thunder", "Utah Jazz", "Milwaukee Bucks", "Washington Wizards", "Philadelphia 76ers", "Los Angeles Lakers", "Los Angeles Lakers", "San Antonio Spurs", "Phoenix Suns", "Oklahoma City Thunder", "Brooklyn Nets", "Orlando Magic", "Orlando Magic", "Atlanta Hawks", "New Orleans Pelicans", "Houston Rockets", "Charlotte Hornets", "New Orleans Pelicans", "Minnesota Timberwolves", "Minnesota Timberwolves", "Sacramento Kings", "Portland Trail Blazers", "Portland Trail Blazers", "Golden State Warriors", "Denver Nuggets", "Utah Jazz", "Miami Heat", "Sacramento Kings", "Golden State Warriors", "Dallas Mavericks", "Indiana Pacers", "Minnesota Timberwolves", "Portland Trail Blazers", "Los Angeles Clippers", "Brooklyn Nets", "Philadelphia 76ers", "Dallas Mavericks", "Detroit Pistons", "Chicago Bulls", "Denver Nuggets", "Boston Celtics", "Charlotte Hornets", "Atlanta Hawks", "San Antonio Spurs", "Houston Rockets", "Chicago Bulls", "Phoenix Suns", "New York Knicks", "Toronto Raptors", "Milwaukee Bucks", "Cleveland Cavaliers", "Denver Nuggets", "Utah Jazz", "Houston Rockets"],
      [128, 114, 128, 118, 114, 112, 104, 106, 109, 118, 100, 120, 95, 100, 101, 137, 102, 115, 133, 112, 115, 119, 107, 119, 126, 121, 116, 122, 103, 137, 125, 112, 136, 121, 114, 106, 98, 116, 103, 111, 126, 122, 127, 99, 97, 106, 114, 137, 129, 115, 115, 113, 116, 123, 120, 114, 112, 124, 125, 110, 114, 120, 115, 129, 112, 110, 107, 125, 112, 101, 107, 98, 109, 125, 105, 119, 96, 115, 126, 119, 101, 101],
      [6, -32, 25, -13, 1, -5, -13, -8, -15, 14, -14, -13, -36, -8, -10, 41, 6, -10, 5, 5, 8, -7, 9, 23, -4, 18, 6, -8, -16, 9, 21, -4, -3, -7, -6, 1, -19, -1, 5, -7, 17, -2, -6, -9, -15, -8, -17, 9, 4, -20, -7, -1, -6, 9, -16, -9, -21, 19, 19, -7, -8, -3, -11, -10, -8, -16, -25, 7, -5, -23, -39, -25, -10, 1, -26, -11, -32, -16, -16, -17, -46, -31]
    ),
    leaders: {
      pts: { name: "Ty Jerome", val: 19.7, all: [{"name": "Ty Jerome", "val": 19.7}, {"name": "Ja Morant", "val": 19.5}, {"name": "Jaren Jackson Jr.", "val": 19.2}, {"name": "Dariq Whitehead", "val": 16.3}, {"name": "Santi Aldama", "val": 14.0}, {"name": "Cedric Coward", "val": 13.6}, {"name": "Zach Edey", "val": 13.6}, {"name": "Jaylen Wells", "val": 12.5}, {"name": "GG Jackson II", "val": 12.5}, {"name": "Rayan Rupert", "val": 12.2}, {"name": "Scotty Pippen Jr.", "val": 11.4}, {"name": "Jock Landale", "val": 11.3}, {"name": "Cam Spencer", "val": 11.1}, {"name": "Tyler Burton", "val": 10.8}, {"name": "Taylor Hendricks", "val": 10.6}, {"name": "Adama-Alpha Bal", "val": 10.4}, {"name": "Lucas Williamson", "val": 10.4}, {"name": "Olivier-Maxence Prosper", "val": 10.0}, {"name": "Toby Okani", "val": 10.0}, {"name": "Javon Small", "val": 9.7}, {"name": "Walter Clayton", "val": 9.7}, {"name": "Kyle Anderson", "val": 9.3}, {"name": "Kentavious Caldwell-Pope", "val": 8.4}, {"name": "Vince Williams Jr.", "val": 8.0}, {"name": "DeJon Jarreau", "val": 8.0}, {"name": "Lawson Lovering", "val": 7.0}, {"name": "Jahmai Mashack", "val": 6.2}, {"name": "Brandon Clarke", "val": 4.0}, {"name": "Charles Bassey", "val": 3.5}, {"name": "Taj Gibson", "val": 3.4}, {"name": "John Konchar", "val": 3.2}, {"name": "Christian Koloko", "val": 2.6}, {"name": "PJ Hall", "val": 1.9}] },
      reb: { name: "Zach Edey", val: 11.1, all: [{"name": "Zach Edey", "val": 11.1}, {"name": "Charles Bassey", "val": 7.5}, {"name": "Lawson Lovering", "val": 7.5}, {"name": "Santi Aldama", "val": 6.7}, {"name": "Jock Landale", "val": 6.5}, {"name": "Rayan Rupert", "val": 6.4}, {"name": "Cedric Coward", "val": 5.9}, {"name": "Jaren Jackson Jr.", "val": 5.8}, {"name": "Lucas Williamson", "val": 5.4}, {"name": "Taylor Hendricks", "val": 4.7}, {"name": "DeJon Jarreau", "val": 4.6}, {"name": "GG Jackson II", "val": 4.3}, {"name": "Tyler Burton", "val": 4.2}, {"name": "Dariq Whitehead", "val": 4.0}, {"name": "Christian Koloko", "val": 4.0}, {"name": "Vince Williams Jr.", "val": 4.0}, {"name": "Olivier-Maxence Prosper", "val": 3.5}, {"name": "Kyle Anderson", "val": 3.5}, {"name": "Toby Okani", "val": 3.5}, {"name": "Ja Morant", "val": 3.3}, {"name": "Jaylen Wells", "val": 3.2}, {"name": "Javon Small", "val": 3.1}, {"name": "Adama-Alpha Bal", "val": 3.1}, {"name": "John Konchar", "val": 3.1}, {"name": "Brandon Clarke", "val": 3.0}, {"name": "Ty Jerome", "val": 2.8}, {"name": "Taj Gibson", "val": 2.7}, {"name": "Jahmai Mashack", "val": 2.6}, {"name": "Cam Spencer", "val": 2.5}, {"name": "Kentavious Caldwell-Pope", "val": 2.5}, {"name": "Scotty Pippen Jr.", "val": 2.2}, {"name": "Walter Clayton", "val": 2.1}, {"name": "PJ Hall", "val": 1.3}] },
      ast: { name: "Ja Morant", val: 8.1, all: [{"name": "Ja Morant", "val": 8.1}, {"name": "Walter Clayton", "val": 5.7}, {"name": "Ty Jerome", "val": 5.7}, {"name": "Cam Spencer", "val": 5.6}, {"name": "Scotty Pippen Jr.", "val": 4.7}, {"name": "Vince Williams Jr.", "val": 4.4}, {"name": "Javon Small", "val": 3.7}, {"name": "DeJon Jarreau", "val": 3.3}, {"name": "Santi Aldama", "val": 2.9}, {"name": "Cedric Coward", "val": 2.8}, {"name": "Kentavious Caldwell-Pope", "val": 2.7}, {"name": "Lucas Williamson", "val": 2.6}, {"name": "Adama-Alpha Bal", "val": 2.4}, {"name": "Jahmai Mashack", "val": 2.2}, {"name": "Rayan Rupert", "val": 2.1}, {"name": "Jaren Jackson Jr.", "val": 1.9}, {"name": "Jock Landale", "val": 1.7}, {"name": "Jaylen Wells", "val": 1.6}, {"name": "GG Jackson II", "val": 1.5}, {"name": "Dariq Whitehead", "val": 1.5}, {"name": "Lawson Lovering", "val": 1.5}, {"name": "John Konchar", "val": 1.3}, {"name": "Taylor Hendricks", "val": 1.2}, {"name": "Zach Edey", "val": 1.1}, {"name": "Charles Bassey", "val": 1.0}, {"name": "Olivier-Maxence Prosper", "val": 1.0}, {"name": "Toby Okani", "val": 1.0}, {"name": "Tyler Burton", "val": 1.0}, {"name": "Christian Koloko", "val": 0.9}, {"name": "Kyle Anderson", "val": 0.8}, {"name": "Taj Gibson", "val": 0.6}, {"name": "Brandon Clarke", "val": 0.5}, {"name": "PJ Hall", "val": 0.3}] },
      stl: { name: "Scotty Pippen Jr.", val: 1.9, all: [{"name": "Scotty Pippen Jr.", "val": 1.9}, {"name": "Rayan Rupert", "val": 1.6}, {"name": "Lucas Williamson", "val": 1.6}, {"name": "Lawson Lovering", "val": 1.5}, {"name": "Kyle Anderson", "val": 1.5}, {"name": "Taylor Hendricks", "val": 1.4}, {"name": "Jahmai Mashack", "val": 1.2}, {"name": "Adama-Alpha Bal", "val": 1.1}, {"name": "Ty Jerome", "val": 1.1}, {"name": "Brandon Clarke", "val": 1.0}, {"name": "Ja Morant", "val": 1.0}, {"name": "Jaren Jackson Jr.", "val": 1.0}, {"name": "John Konchar", "val": 1.0}, {"name": "Santi Aldama", "val": 0.9}, {"name": "Jaylen Wells", "val": 0.9}, {"name": "Tyler Burton", "val": 0.9}, {"name": "Christian Koloko", "val": 0.9}, {"name": "DeJon Jarreau", "val": 0.9}, {"name": "Vince Williams Jr.", "val": 0.8}, {"name": "Kentavious Caldwell-Pope", "val": 0.8}, {"name": "Javon Small", "val": 0.8}, {"name": "Olivier-Maxence Prosper", "val": 0.8}, {"name": "Walter Clayton", "val": 0.8}, {"name": "Cam Spencer", "val": 0.7}, {"name": "Dariq Whitehead", "val": 0.7}, {"name": "Toby Okani", "val": 0.7}, {"name": "Jock Landale", "val": 0.6}, {"name": "GG Jackson II", "val": 0.6}, {"name": "Cedric Coward", "val": 0.6}, {"name": "Zach Edey", "val": 0.6}, {"name": "Charles Bassey", "val": 0.5}, {"name": "Taj Gibson", "val": 0.2}, {"name": "PJ Hall", "val": 0.0}] },
      blk: { name: "Zach Edey", val: 1.9, all: [{"name": "Zach Edey", "val": 1.9}, {"name": "Jaren Jackson Jr.", "val": 1.5}, {"name": "Christian Koloko", "val": 1.2}, {"name": "Kyle Anderson", "val": 1.0}, {"name": "GG Jackson II", "val": 0.8}, {"name": "Taylor Hendricks", "val": 0.8}, {"name": "DeJon Jarreau", "val": 0.7}, {"name": "Santi Aldama", "val": 0.7}, {"name": "Toby Okani", "val": 0.5}, {"name": "Lawson Lovering", "val": 0.5}, {"name": "Charles Bassey", "val": 0.5}, {"name": "Jahmai Mashack", "val": 0.5}, {"name": "Jock Landale", "val": 0.5}, {"name": "Scotty Pippen Jr.", "val": 0.4}, {"name": "Vince Williams Jr.", "val": 0.4}, {"name": "John Konchar", "val": 0.4}, {"name": "Rayan Rupert", "val": 0.4}, {"name": "Cedric Coward", "val": 0.4}, {"name": "Tyler Burton", "val": 0.3}, {"name": "Ja Morant", "val": 0.3}, {"name": "Walter Clayton", "val": 0.3}, {"name": "Ty Jerome", "val": 0.3}, {"name": "PJ Hall", "val": 0.3}, {"name": "Kentavious Caldwell-Pope", "val": 0.2}, {"name": "Javon Small", "val": 0.2}, {"name": "Olivier-Maxence Prosper", "val": 0.2}, {"name": "Cam Spencer", "val": 0.2}, {"name": "Jaylen Wells", "val": 0.1}, {"name": "Adama-Alpha Bal", "val": 0.1}, {"name": "Lucas Williamson", "val": 0.1}, {"name": "Taj Gibson", "val": 0.1}, {"name": "Dariq Whitehead", "val": 0.0}, {"name": "Brandon Clarke", "val": 0.0}] },
    },
    avail: [
      { name: "Cam Spencer", g: 72 },
      { name: "Jaylen Wells", g: 69 },
      { name: "Cedric Coward", g: 62 },
      { name: "GG Jackson II", g: 55 },
      { name: "Olivier-Maxence Prosper", g: 53 },
      { name: "Kentavious Caldwell-Pope", g: 51 },
      { name: "Jock Landale", g: 45 },
      { name: "Jaren Jackson Jr.", g: 45 },
      { name: "Santi Aldama", g: 43 },
      { name: "Javon Small", g: 41 },
      { name: "Vince Williams Jr.", g: 34 },
      { name: "Jahmai Mashack", g: 31 },
      { name: "John Konchar", g: 30 },
      { name: "Taylor Hendricks", g: 26 },
      { name: "Walter Clayton", g: 24 },
      { name: "Ja Morant", g: 20 },
      { name: "Rayan Rupert", g: 16 },
      { name: "Ty Jerome", g: 15 },
      { name: "Tyler Burton", g: 12 },
      { name: "Christian Koloko", g: 11 },
      { name: "Zach Edey", g: 11 },
      { name: "DeJon Jarreau", g: 11 },
      { name: "Taj Gibson", g: 10 },
      { name: "Scotty Pippen Jr.", g: 10 },
      { name: "Adama-Alpha Bal", g: 8 },
      { name: "PJ Hall", g: 7 },
      { name: "Lucas Williamson", g: 7 },
      { name: "Dariq Whitehead", g: 6 },
      { name: "Toby Okani", g: 6 },
      { name: "Kyle Anderson", g: 4 },
      { name: "Charles Bassey", g: 2 },
      { name: "Lawson Lovering", g: 2 },
      { name: "Brandon Clarke", g: 2 },
    ]
  },

};
