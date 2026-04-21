/* ================================================================
   PHO.js — Phoenix Suns · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Phoenix Suns",
  abbr:          "PHO",
  conference:    "West",
  primaryColor:  "#1D1160",
  secondaryColor:"#E56020",
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
    w: 51, l: 21,
    topW:   { pts: 140, opp: 103, against: "Oklahoma City Thunder" },
    worstL: { pts: 103, opp: 135, against: "Atlanta Hawks" },
    conf_rank: 2,
    games: buildGames(
      "WLWWWWLWLWLLWLLLWWWLWWWWWWLWWWLWWWWWLWLWWWLWWWWWWWLWWWWLWWLLWWWWWLWLLWWW",
      ["Dallas Mavericks", "Sacramento Kings", "Sacramento Kings", "New Orleans Pelicans", "Utah Jazz", "Denver Nuggets", "Los Angeles Clippers", "Toronto Raptors", "Detroit Pistons", "Indiana Pacers", "Washington Wizards", "Memphis Grizzlies", "Houston Rockets", "Denver Nuggets", "Denver Nuggets", "Oklahoma City Thunder", "Golden State Warriors", "Dallas Mavericks", "Dallas Mavericks", "New Orleans Pelicans", "Detroit Pistons", "Boston Celtics", "Cleveland Cavaliers", "Milwaukee Bucks", "Philadelphia 76ers", "Orlando Magic", "Brooklyn Nets", "New Orleans Pelicans", "Memphis Grizzlies", "Portland Trail Blazers", "Charlotte Hornets", "Chicago Bulls", "Minnesota Timberwolves", "Los Angeles Lakers", "Golden State Warriors", "Portland Trail Blazers", "Indiana Pacers", "Memphis Grizzlies", "Minnesota Timberwolves", "Minnesota Timberwolves", "Los Angeles Lakers", "Miami Heat", "Orlando Magic", "Toronto Raptors", "Charlotte Hornets", "Atlanta Hawks", "Chicago Bulls", "Oklahoma City Thunder", "Houston Rockets", "Utah Jazz", "Los Angeles Clippers", "Washington Wizards", "Houston Rockets", "Miami Heat", "Sacramento Kings", "San Antonio Spurs", "Milwaukee Bucks", "Philadelphia 76ers", "Boston Celtics", "Brooklyn Nets", "New York Knicks", "Los Angeles Clippers", "Utah Jazz", "Oklahoma City Thunder", "Cleveland Cavaliers", "Atlanta Hawks", "New York Knicks", "Los Angeles Lakers", "Golden State Warriors", "Portland Trail Blazers", "San Antonio Spurs", "San Antonio Spurs"],
      [106, 103, 116, 111, 106, 106, 107, 123, 105, 125, 107, 104, 109, 126, 112, 97, 114, 111, 109, 101, 109, 100, 119, 125, 120, 109, 124, 132, 128, 132, 121, 106, 118, 114, 120, 127, 111, 122, 119, 113, 111, 110, 111, 104, 101, 117, 121, 140, 133, 117, 103, 134, 126, 106, 122, 85, 128, 116, 86, 119, 118, 109, 121, 123, 134, 103, 128, 110, 116, 118, 140, 123],
      [4, -3, 16, 25, 11, 3, -5, 8, -5, 8, -21, -4, 6, -4, -8, -5, 21, 6, 1, -22, 17, 9, 6, 1, 9, 19, -4, 18, 31, 32, -3, 9, 19, 10, 22, 6, -11, 23, -4, 12, 17, 10, -1, 4, 4, 7, 5, 37, 3, 4, -10, 28, 6, 20, 8, -26, 1, 3, -13, -9, 8, 8, 21, 3, 16, -32, 23, -13, -6, 1, 37, 2]
    ),
    leaders: {
      pts: { name: "Devin Booker", val: 25.6, all: [{"name": "Devin Booker", "val": 25.6}, {"name": "Chris Paul", "val": 16.4}, {"name": "Deandre Ayton", "val": 14.4}, {"name": "Mikal Bridges", "val": 13.5}, {"name": "Jae Crowder", "val": 10.1}, {"name": "Cameron Johnson", "val": 9.6}, {"name": "Dario Šarić", "val": 8.7}, {"name": "Cameron Payne", "val": 8.4}, {"name": "Torrey Craig", "val": 7.2}, {"name": "Abdel Nader", "val": 6.7}, {"name": "Frank Kaminsky", "val": 6.6}, {"name": "E'Twaun Moore", "val": 4.9}, {"name": "Langston Galloway", "val": 4.8}, {"name": "Jevon Carter", "val": 4.1}, {"name": "Jalen Smith", "val": 2.0}, {"name": "Damian Jones", "val": 1.6}, {"name": "Ty-Shon Alexander", "val": 0.6}] },
      reb: { name: "Deandre Ayton", val: 10.5, all: [{"name": "Deandre Ayton", "val": 10.5}, {"name": "Torrey Craig", "val": 4.8}, {"name": "Jae Crowder", "val": 4.7}, {"name": "Chris Paul", "val": 4.5}, {"name": "Mikal Bridges", "val": 4.3}, {"name": "Devin Booker", "val": 4.2}, {"name": "Frank Kaminsky", "val": 4.0}, {"name": "Dario Šarić", "val": 3.8}, {"name": "Cameron Johnson", "val": 3.3}, {"name": "Abdel Nader", "val": 2.6}, {"name": "Cameron Payne", "val": 2.4}, {"name": "E'Twaun Moore", "val": 1.7}, {"name": "Jevon Carter", "val": 1.5}, {"name": "Jalen Smith", "val": 1.4}, {"name": "Damian Jones", "val": 1.3}, {"name": "Langston Galloway", "val": 1.1}, {"name": "Ty-Shon Alexander", "val": 0.7}] },
      ast: { name: "Chris Paul", val: 8.9, all: [{"name": "Chris Paul", "val": 8.9}, {"name": "Devin Booker", "val": 4.3}, {"name": "Cameron Payne", "val": 3.6}, {"name": "Jae Crowder", "val": 2.1}, {"name": "Mikal Bridges", "val": 2.1}, {"name": "Frank Kaminsky", "val": 1.7}, {"name": "E'Twaun Moore", "val": 1.5}, {"name": "Deandre Ayton", "val": 1.4}, {"name": "Cameron Johnson", "val": 1.4}, {"name": "Dario Šarić", "val": 1.3}, {"name": "Jevon Carter", "val": 1.2}, {"name": "Torrey Craig", "val": 1.0}, {"name": "Abdel Nader", "val": 0.8}, {"name": "Langston Galloway", "val": 0.7}, {"name": "Ty-Shon Alexander", "val": 0.4}, {"name": "Damian Jones", "val": 0.3}, {"name": "Jalen Smith", "val": 0.1}] },
      stl: { name: "Chris Paul", val: 1.4, all: [{"name": "Chris Paul", "val": 1.4}, {"name": "Mikal Bridges", "val": 1.1}, {"name": "Devin Booker", "val": 0.8}, {"name": "Jae Crowder", "val": 0.8}, {"name": "Cameron Payne", "val": 0.6}, {"name": "E'Twaun Moore", "val": 0.6}, {"name": "Dario Šarić", "val": 0.6}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Cameron Johnson", "val": 0.6}, {"name": "Deandre Ayton", "val": 0.6}, {"name": "Jevon Carter", "val": 0.5}, {"name": "Abdel Nader", "val": 0.4}, {"name": "Frank Kaminsky", "val": 0.3}, {"name": "Langston Galloway", "val": 0.2}, {"name": "Damian Jones", "val": 0.1}, {"name": "Jalen Smith", "val": 0.0}, {"name": "Ty-Shon Alexander", "val": 0.0}] },
      blk: { name: "Deandre Ayton", val: 1.2, all: [{"name": "Deandre Ayton", "val": 1.2}, {"name": "Mikal Bridges", "val": 0.9}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Jae Crowder", "val": 0.5}, {"name": "Damian Jones", "val": 0.4}, {"name": "Frank Kaminsky", "val": 0.4}, {"name": "Abdel Nader", "val": 0.4}, {"name": "Chris Paul", "val": 0.3}, {"name": "Cameron Johnson", "val": 0.3}, {"name": "Cameron Payne", "val": 0.3}, {"name": "Devin Booker", "val": 0.2}, {"name": "E'Twaun Moore", "val": 0.2}, {"name": "Jevon Carter", "val": 0.2}, {"name": "Jalen Smith", "val": 0.2}, {"name": "Dario Šarić", "val": 0.1}, {"name": "Ty-Shon Alexander", "val": 0.1}, {"name": "Langston Galloway", "val": 0.0}] },
    },
    avail: [
      { name: "Mikal Bridges", g: 72 },
      { name: "Chris Paul", g: 70 },
      { name: "Deandre Ayton", g: 69 },
      { name: "Devin Booker", g: 67 },
      { name: "Jae Crowder", g: 60 },
      { name: "Cameron Johnson", g: 60 },
      { name: "Jevon Carter", g: 60 },
      { name: "Cameron Payne", g: 60 },
      { name: "Dario Šarić", g: 50 },
      { name: "Frank Kaminsky", g: 47 },
      { name: "Langston Galloway", g: 40 },
      { name: "Torrey Craig", g: 32 },
      { name: "E'Twaun Moore", g: 27 },
      { name: "Jalen Smith", g: 27 },
      { name: "Abdel Nader", g: 24 },
      { name: "Ty-Shon Alexander", g: 15 },
      { name: "Damian Jones", g: 14 },
    ]
  },

  "2021-22": {
    w: 64, l: 18,
    topW:   { pts: 133, opp: 99, against: "Charlotte Hornets" },
    worstL: { pts: 105, opp: 134, against: "Portland Trail Blazers" },
    conf_rank: 1,
    games: buildGames(
      "LWLLWWWWWWWWWWWWWWWWWWLWWLWWWWWLLWLWWWLWWWWWWWWWWWLWWWWWWWWLLWWLWWLWWWWWWWWWLLWLWL",
      ["Denver Nuggets", "Los Angeles Lakers", "Portland Trail Blazers", "Sacramento Kings", "Cleveland Cavaliers", "New Orleans Pelicans", "Houston Rockets", "Atlanta Hawks", "Sacramento Kings", "Portland Trail Blazers", "Memphis Grizzlies", "Houston Rockets", "Minnesota Timberwolves", "Dallas Mavericks", "Dallas Mavericks", "Denver Nuggets", "San Antonio Spurs", "Cleveland Cavaliers", "New York Knicks", "Brooklyn Nets", "Golden State Warriors", "Detroit Pistons", "Golden State Warriors", "San Antonio Spurs", "Boston Celtics", "Los Angeles Clippers", "Portland Trail Blazers", "Washington Wizards", "Charlotte Hornets", "Los Angeles Lakers", "Oklahoma City Thunder", "Golden State Warriors", "Memphis Grizzlies", "Oklahoma City Thunder", "Boston Celtics", "Charlotte Hornets", "New Orleans Pelicans", "Los Angeles Clippers", "Miami Heat", "Toronto Raptors", "Indiana Pacers", "Detroit Pistons", "San Antonio Spurs", "Dallas Mavericks", "Indiana Pacers", "Utah Jazz", "Utah Jazz", "Minnesota Timberwolves", "San Antonio Spurs", "Brooklyn Nets", "Atlanta Hawks", "Washington Wizards", "Chicago Bulls", "Philadelphia 76ers", "Milwaukee Bucks", "Orlando Magic", "Los Angeles Clippers", "Houston Rockets", "Oklahoma City Thunder", "New Orleans Pelicans", "Utah Jazz", "Portland Trail Blazers", "New York Knicks", "Milwaukee Bucks", "Orlando Magic", "Miami Heat", "Toronto Raptors", "Los Angeles Lakers", "New Orleans Pelicans", "Houston Rockets", "Chicago Bulls", "Sacramento Kings", "Minnesota Timberwolves", "Denver Nuggets", "Philadelphia 76ers", "Golden State Warriors", "Memphis Grizzlies", "Oklahoma City Thunder", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Sacramento Kings"],
      [98, 115, 105, 107, 101, 112, 123, 121, 109, 119, 119, 115, 99, 105, 112, 126, 115, 120, 118, 113, 104, 114, 96, 108, 111, 95, 111, 118, 137, 108, 113, 107, 113, 115, 108, 133, 123, 106, 100, 99, 112, 135, 121, 109, 113, 115, 105, 134, 115, 121, 115, 95, 127, 114, 131, 132, 103, 124, 124, 102, 114, 120, 115, 122, 102, 111, 112, 140, 131, 129, 129, 127, 125, 140, 114, 107, 114, 96, 121, 109, 111, 109],
      [-12, 10, -29, -3, 9, 12, 12, 4, 5, 10, 25, 26, 3, 7, 8, 29, 4, 5, 21, 6, 8, 11, -22, 4, 21, -16, 4, 20, 31, 18, 12, -9, -1, 18, -15, 34, 13, 17, -23, 4, 18, 27, 14, 8, 10, 6, 8, 10, 5, 10, -9, 15, 3, 5, 24, 27, 7, 3, 20, -15, -4, 30, 1, -10, 3, 21, -5, 29, 16, 17, 27, 3, 9, 10, 10, 4, -8, -21, 11, -4, 6, -7]
    ),
    leaders: {
      pts: { name: "Devin Booker", val: 26.8, all: [{"name": "Devin Booker", "val": 26.8}, {"name": "Deandre Ayton", "val": 17.2}, {"name": "Chris Paul", "val": 14.7}, {"name": "Mikal Bridges", "val": 14.2}, {"name": "Cameron Johnson", "val": 12.5}, {"name": "Cameron Payne", "val": 10.8}, {"name": "Frank Kaminsky", "val": 10.6}, {"name": "Jae Crowder", "val": 9.4}, {"name": "JaVale McGee", "val": 9.2}, {"name": "Landry Shamet", "val": 8.3}, {"name": "Torrey Craig", "val": 6.9}, {"name": "Aaron Holiday", "val": 6.8}, {"name": "Jalen Smith", "val": 6.0}, {"name": "Bismack Biyombo", "val": 5.8}, {"name": "Gabriel Lundberg", "val": 3.3}, {"name": "Elfrid Payton", "val": 3.0}, {"name": "Paris Bass", "val": 3.0}, {"name": "Abdel Nader", "val": 2.4}, {"name": "Ish Wainright", "val": 2.4}, {"name": "Justin Jackson", "val": 2.2}, {"name": "Chandler Hutchison", "val": 0.7}, {"name": "Emanuel Terry", "val": 0.0}, {"name": "M.J. Walker", "val": 0.0}] },
      reb: { name: "Deandre Ayton", val: 10.2, all: [{"name": "Deandre Ayton", "val": 10.2}, {"name": "JaVale McGee", "val": 6.7}, {"name": "Jae Crowder", "val": 5.3}, {"name": "Devin Booker", "val": 5.0}, {"name": "Emanuel Terry", "val": 5.0}, {"name": "Jalen Smith", "val": 4.8}, {"name": "Bismack Biyombo", "val": 4.6}, {"name": "Frank Kaminsky", "val": 4.6}, {"name": "Chris Paul", "val": 4.4}, {"name": "Torrey Craig", "val": 4.3}, {"name": "Mikal Bridges", "val": 4.2}, {"name": "Cameron Johnson", "val": 4.1}, {"name": "Cameron Payne", "val": 3.0}, {"name": "Aaron Holiday", "val": 2.5}, {"name": "Paris Bass", "val": 2.0}, {"name": "Abdel Nader", "val": 1.9}, {"name": "Landry Shamet", "val": 1.8}, {"name": "Gabriel Lundberg", "val": 1.8}, {"name": "Elfrid Payton", "val": 1.8}, {"name": "Ish Wainright", "val": 1.2}, {"name": "Justin Jackson", "val": 1.2}, {"name": "Chandler Hutchison", "val": 0.8}, {"name": "M.J. Walker", "val": 0.5}] },
      ast: { name: "Chris Paul", val: 10.8, all: [{"name": "Chris Paul", "val": 10.8}, {"name": "Cameron Payne", "val": 4.9}, {"name": "Devin Booker", "val": 4.8}, {"name": "Aaron Holiday", "val": 3.4}, {"name": "Gabriel Lundberg", "val": 2.8}, {"name": "Mikal Bridges", "val": 2.3}, {"name": "Elfrid Payton", "val": 2.0}, {"name": "Jae Crowder", "val": 1.9}, {"name": "Landry Shamet", "val": 1.6}, {"name": "Cameron Johnson", "val": 1.5}, {"name": "Deandre Ayton", "val": 1.4}, {"name": "Frank Kaminsky", "val": 1.4}, {"name": "Torrey Craig", "val": 1.2}, {"name": "Emanuel Terry", "val": 0.7}, {"name": "JaVale McGee", "val": 0.6}, {"name": "Bismack Biyombo", "val": 0.6}, {"name": "Abdel Nader", "val": 0.5}, {"name": "M.J. Walker", "val": 0.5}, {"name": "Ish Wainright", "val": 0.3}, {"name": "Justin Jackson", "val": 0.3}, {"name": "Chandler Hutchison", "val": 0.3}, {"name": "Jalen Smith", "val": 0.2}, {"name": "Paris Bass", "val": 0.0}] },
      stl: { name: "Chris Paul", val: 1.9, all: [{"name": "Chris Paul", "val": 1.9}, {"name": "Jae Crowder", "val": 1.4}, {"name": "Mikal Bridges", "val": 1.2}, {"name": "Devin Booker", "val": 1.1}, {"name": "M.J. Walker", "val": 1.0}, {"name": "Cameron Johnson", "val": 0.9}, {"name": "Frank Kaminsky", "val": 0.9}, {"name": "Gabriel Lundberg", "val": 0.8}, {"name": "Torrey Craig", "val": 0.8}, {"name": "Aaron Holiday", "val": 0.8}, {"name": "Deandre Ayton", "val": 0.7}, {"name": "Cameron Payne", "val": 0.7}, {"name": "Abdel Nader", "val": 0.6}, {"name": "Elfrid Payton", "val": 0.5}, {"name": "Paris Bass", "val": 0.5}, {"name": "Ish Wainright", "val": 0.4}, {"name": "Landry Shamet", "val": 0.4}, {"name": "Bismack Biyombo", "val": 0.3}, {"name": "Emanuel Terry", "val": 0.3}, {"name": "JaVale McGee", "val": 0.3}, {"name": "Jalen Smith", "val": 0.2}, {"name": "Justin Jackson", "val": 0.0}, {"name": "Chandler Hutchison", "val": 0.0}] },
      blk: { name: "JaVale McGee", val: 1.1, all: [{"name": "JaVale McGee", "val": 1.1}, {"name": "Frank Kaminsky", "val": 0.8}, {"name": "Deandre Ayton", "val": 0.7}, {"name": "Bismack Biyombo", "val": 0.7}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Jalen Smith", "val": 0.6}, {"name": "Devin Booker", "val": 0.4}, {"name": "Mikal Bridges", "val": 0.4}, {"name": "Jae Crowder", "val": 0.4}, {"name": "Cameron Payne", "val": 0.3}, {"name": "Chris Paul", "val": 0.3}, {"name": "Abdel Nader", "val": 0.3}, {"name": "Cameron Johnson", "val": 0.2}, {"name": "Landry Shamet", "val": 0.1}, {"name": "Elfrid Payton", "val": 0.1}, {"name": "Ish Wainright", "val": 0.1}, {"name": "Aaron Holiday", "val": 0.0}, {"name": "Gabriel Lundberg", "val": 0.0}, {"name": "Emanuel Terry", "val": 0.0}, {"name": "Justin Jackson", "val": 0.0}, {"name": "M.J. Walker", "val": 0.0}, {"name": "Chandler Hutchison", "val": 0.0}, {"name": "Paris Bass", "val": 0.0}] },
    },
    avail: [
      { name: "Mikal Bridges", g: 82 },
      { name: "JaVale McGee", g: 74 },
      { name: "Landry Shamet", g: 69 },
      { name: "Devin Booker", g: 68 },
      { name: "Jae Crowder", g: 67 },
      { name: "Cameron Johnson", g: 66 },
      { name: "Chris Paul", g: 65 },
      { name: "Cameron Payne", g: 58 },
      { name: "Deandre Ayton", g: 58 },
      { name: "Elfrid Payton", g: 50 },
      { name: "Ish Wainright", g: 45 },
      { name: "Bismack Biyombo", g: 36 },
      { name: "Jalen Smith", g: 29 },
      { name: "Torrey Craig", g: 27 },
      { name: "Aaron Holiday", g: 22 },
      { name: "Abdel Nader", g: 14 },
      { name: "Frank Kaminsky", g: 9 },
      { name: "Justin Jackson", g: 6 },
      { name: "Chandler Hutchison", g: 6 },
      { name: "Gabriel Lundberg", g: 4 },
      { name: "Emanuel Terry", g: 3 },
      { name: "M.J. Walker", g: 2 },
      { name: "Paris Bass", g: 2 },
    ]
  },

  "2022-23": {
    w: 45, l: 37,
    topW:   { pts: 133, opp: 95, against: "San Antonio Spurs" },
    worstL: { pts: 100, opp: 132, against: "Atlanta Hawks" },
    conf_rank: 4,
    games: buildGames(
      "WLWWWWWLWLWLLWLWWWWWWLWLLLLLWWWLLLWLLLLLLWLLLWWWWLWWLWWWLWWLWLWWWWLLLWLLLWWWWWWWLL",
      ["Dallas Mavericks", "Portland Trail Blazers", "Los Angeles Clippers", "Golden State Warriors", "New Orleans Pelicans", "Houston Rockets", "Minnesota Timberwolves", "Portland Trail Blazers", "Portland Trail Blazers", "Philadelphia 76ers", "Minnesota Timberwolves", "Orlando Magic", "Miami Heat", "Golden State Warriors", "Utah Jazz", "New York Knicks", "Los Angeles Lakers", "Detroit Pistons", "Utah Jazz", "Sacramento Kings", "Chicago Bulls", "Houston Rockets", "San Antonio Spurs", "Dallas Mavericks", "Boston Celtics", "New Orleans Pelicans", "New Orleans Pelicans", "Houston Rockets", "Los Angeles Clippers", "New Orleans Pelicans", "Los Angeles Lakers", "Washington Wizards", "Memphis Grizzlies", "Denver Nuggets", "Memphis Grizzlies", "Washington Wizards", "Toronto Raptors", "New York Knicks", "Cleveland Cavaliers", "Miami Heat", "Cleveland Cavaliers", "Golden State Warriors", "Denver Nuggets", "Minnesota Timberwolves", "Memphis Grizzlies", "Brooklyn Nets", "Indiana Pacers", "Memphis Grizzlies", "Charlotte Hornets", "Dallas Mavericks", "San Antonio Spurs", "Toronto Raptors", "Atlanta Hawks", "Boston Celtics", "Detroit Pistons", "Brooklyn Nets", "Atlanta Hawks", "Indiana Pacers", "Sacramento Kings", "Los Angeles Clippers", "Oklahoma City Thunder", "Milwaukee Bucks", "Charlotte Hornets", "Chicago Bulls", "Dallas Mavericks", "Oklahoma City Thunder", "Sacramento Kings", "Golden State Warriors", "Milwaukee Bucks", "Orlando Magic", "Oklahoma City Thunder", "Los Angeles Lakers", "Sacramento Kings", "Philadelphia 76ers", "Utah Jazz", "Minnesota Timberwolves", "Denver Nuggets", "Oklahoma City Thunder", "San Antonio Spurs", "Denver Nuggets", "Los Angeles Lakers", "Los Angeles Clippers"],
      [107, 111, 112, 134, 124, 124, 116, 106, 102, 88, 129, 97, 112, 130, 133, 116, 115, 108, 113, 122, 132, 121, 133, 111, 98, 117, 124, 97, 111, 118, 130, 110, 100, 125, 125, 102, 104, 83, 88, 96, 98, 125, 97, 116, 106, 117, 112, 112, 128, 95, 128, 114, 100, 106, 116, 116, 107, 117, 120, 107, 124, 101, 105, 125, 130, 132, 119, 112, 104, 116, 120, 111, 127, 125, 117, 107, 100, 128, 115, 119, 107, 114],
      [2, -2, 17, 29, 13, 15, 9, -2, 20, -12, 12, -17, -1, 11, -1, 21, 10, 6, 1, 5, 19, -1, 38, -19, -27, -11, -5, -14, 16, 4, 26, -3, -25, -3, 17, -25, -9, -19, -2, -8, -14, 12, -29, -5, -30, 5, 5, 2, 31, -4, 10, 8, -32, 12, 16, 4, -9, 13, 11, -9, 9, -3, 14, 21, 4, 31, -9, -11, -12, 3, -4, -11, -8, 20, 14, 7, 7, 10, 21, 4, -14, -5]
    ),
    leaders: {
      pts: { name: "Devin Booker", val: 27.8, all: [{"name": "Devin Booker", "val": 27.8}, {"name": "Kevin Durant", "val": 26.0}, {"name": "Deandre Ayton", "val": 18.0}, {"name": "Mikal Bridges", "val": 17.2}, {"name": "Chris Paul", "val": 13.9}, {"name": "Cameron Johnson", "val": 13.9}, {"name": "Cameron Payne", "val": 10.3}, {"name": "Terrence Ross", "val": 9.0}, {"name": "Landry Shamet", "val": 8.7}, {"name": "Damion Lee", "val": 8.2}, {"name": "Duane Washington Jr.", "val": 7.9}, {"name": "Torrey Craig", "val": 7.4}, {"name": "Josh Okogie", "val": 7.3}, {"name": "Jock Landale", "val": 6.6}, {"name": "Saben Lee", "val": 6.3}, {"name": "Dario Šarić", "val": 5.8}, {"name": "Bismack Biyombo", "val": 4.3}, {"name": "Ish Wainright", "val": 4.2}, {"name": "T.J. Warren", "val": 4.2}, {"name": "Darius Bazley", "val": 4.0}] },
      reb: { name: "Deandre Ayton", val: 10.0, all: [{"name": "Deandre Ayton", "val": 10.0}, {"name": "Kevin Durant", "val": 6.4}, {"name": "Torrey Craig", "val": 5.4}, {"name": "Devin Booker", "val": 4.5}, {"name": "Mikal Bridges", "val": 4.3}, {"name": "Chris Paul", "val": 4.3}, {"name": "Bismack Biyombo", "val": 4.3}, {"name": "Jock Landale", "val": 4.1}, {"name": "Cameron Johnson", "val": 3.8}, {"name": "Dario Šarić", "val": 3.8}, {"name": "Josh Okogie", "val": 3.5}, {"name": "Terrence Ross", "val": 3.3}, {"name": "T.J. Warren", "val": 3.1}, {"name": "Damion Lee", "val": 3.0}, {"name": "Ish Wainright", "val": 2.3}, {"name": "Darius Bazley", "val": 2.3}, {"name": "Cameron Payne", "val": 2.2}, {"name": "Saben Lee", "val": 2.0}, {"name": "Landry Shamet", "val": 1.7}, {"name": "Duane Washington Jr.", "val": 1.2}] },
      ast: { name: "Chris Paul", val: 8.9, all: [{"name": "Chris Paul", "val": 8.9}, {"name": "Devin Booker", "val": 5.5}, {"name": "Cameron Payne", "val": 4.5}, {"name": "Mikal Bridges", "val": 3.6}, {"name": "Kevin Durant", "val": 3.5}, {"name": "Saben Lee", "val": 2.8}, {"name": "Landry Shamet", "val": 2.3}, {"name": "Terrence Ross", "val": 2.0}, {"name": "Duane Washington Jr.", "val": 2.0}, {"name": "Deandre Ayton", "val": 1.7}, {"name": "Dario Šarić", "val": 1.5}, {"name": "Josh Okogie", "val": 1.5}, {"name": "Torrey Craig", "val": 1.5}, {"name": "Cameron Johnson", "val": 1.5}, {"name": "Damion Lee", "val": 1.3}, {"name": "Jock Landale", "val": 1.0}, {"name": "Ish Wainright", "val": 0.9}, {"name": "Bismack Biyombo", "val": 0.9}, {"name": "Darius Bazley", "val": 0.9}, {"name": "T.J. Warren", "val": 0.7}] },
      stl: { name: "Chris Paul", val: 1.5, all: [{"name": "Chris Paul", "val": 1.5}, {"name": "Mikal Bridges", "val": 1.2}, {"name": "Devin Booker", "val": 1.0}, {"name": "Cameron Johnson", "val": 0.9}, {"name": "Saben Lee", "val": 0.8}, {"name": "Josh Okogie", "val": 0.8}, {"name": "Cameron Payne", "val": 0.7}, {"name": "Landry Shamet", "val": 0.7}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Deandre Ayton", "val": 0.6}, {"name": "Ish Wainright", "val": 0.6}, {"name": "Terrence Ross", "val": 0.5}, {"name": "Damion Lee", "val": 0.4}, {"name": "Dario Šarić", "val": 0.4}, {"name": "T.J. Warren", "val": 0.4}, {"name": "Darius Bazley", "val": 0.4}, {"name": "Kevin Durant", "val": 0.3}, {"name": "Bismack Biyombo", "val": 0.3}, {"name": "Jock Landale", "val": 0.2}, {"name": "Duane Washington Jr.", "val": 0.2}] },
      blk: { name: "Bismack Biyombo", val: 1.4, all: [{"name": "Bismack Biyombo", "val": 1.4}, {"name": "Kevin Durant", "val": 1.3}, {"name": "Mikal Bridges", "val": 0.8}, {"name": "Torrey Craig", "val": 0.8}, {"name": "Deandre Ayton", "val": 0.8}, {"name": "Darius Bazley", "val": 0.7}, {"name": "Josh Okogie", "val": 0.5}, {"name": "Cameron Johnson", "val": 0.4}, {"name": "Ish Wainright", "val": 0.4}, {"name": "Chris Paul", "val": 0.4}, {"name": "Jock Landale", "val": 0.4}, {"name": "Devin Booker", "val": 0.3}, {"name": "T.J. Warren", "val": 0.3}, {"name": "Cameron Payne", "val": 0.2}, {"name": "Damion Lee", "val": 0.1}, {"name": "Landry Shamet", "val": 0.1}, {"name": "Terrence Ross", "val": 0.1}, {"name": "Dario Šarić", "val": 0.1}, {"name": "Duane Washington Jr.", "val": 0.1}, {"name": "Saben Lee", "val": 0.0}] },
    },
    avail: [
      { name: "Torrey Craig", g: 79 },
      { name: "Damion Lee", g: 74 },
      { name: "Josh Okogie", g: 72 },
      { name: "Jock Landale", g: 69 },
      { name: "Deandre Ayton", g: 67 },
      { name: "Bismack Biyombo", g: 61 },
      { name: "Ish Wainright", g: 60 },
      { name: "Chris Paul", g: 59 },
      { name: "Mikal Bridges", g: 56 },
      { name: "Devin Booker", g: 53 },
      { name: "Cameron Payne", g: 48 },
      { name: "Landry Shamet", g: 40 },
      { name: "Dario Šarić", g: 37 },
      { name: "Duane Washington Jr.", g: 31 },
      { name: "Saben Lee", g: 23 },
      { name: "Terrence Ross", g: 21 },
      { name: "Cameron Johnson", g: 17 },
      { name: "T.J. Warren", g: 16 },
      { name: "Kevin Durant", g: 8 },
      { name: "Darius Bazley", g: 7 },
    ]
  },

  "2023-24": {
    w: 49, l: 33,
    topW:   { pts: 140, opp: 112, against: "Washington Wizards" },
    worstL: { pts: 111, opp: 138, against: "Los Angeles Clippers" },
    conf_rank: 6,
    games: buildGames(
      "WLWLLLWWLLWWWWWWWLLWLLWLLWLLLWWWWLWLLWWWWWWWLLWWLWWWLWWLLWWLLWWLWLWLWWWLWLWWWLLWWW",
      ["Golden State Warriors", "Los Angeles Lakers", "Utah Jazz", "San Antonio Spurs", "San Antonio Spurs", "Philadelphia 76ers", "Detroit Pistons", "Chicago Bulls", "Los Angeles Lakers", "Oklahoma City Thunder", "Minnesota Timberwolves", "Utah Jazz", "Utah Jazz", "Portland Trail Blazers", "Golden State Warriors", "Memphis Grizzlies", "New York Knicks", "Toronto Raptors", "Denver Nuggets", "Memphis Grizzlies", "Los Angeles Lakers", "Sacramento Kings", "Golden State Warriors", "Brooklyn Nets", "New York Knicks", "Washington Wizards", "Portland Trail Blazers", "Sacramento Kings", "Dallas Mavericks", "Houston Rockets", "Charlotte Hornets", "Orlando Magic", "Portland Trail Blazers", "Los Angeles Clippers", "Miami Heat", "Memphis Grizzlies", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Sacramento Kings", "New Orleans Pelicans", "Indiana Pacers", "Chicago Bulls", "Dallas Mavericks", "Indiana Pacers", "Orlando Magic", "Miami Heat", "Brooklyn Nets", "Atlanta Hawks", "Washington Wizards", "Milwaukee Bucks", "Utah Jazz", "Golden State Warriors", "Sacramento Kings", "Detroit Pistons", "Dallas Mavericks", "Houston Rockets", "Los Angeles Lakers", "Houston Rockets", "Houston Rockets", "Oklahoma City Thunder", "Denver Nuggets", "Toronto Raptors", "Boston Celtics", "Cleveland Cavaliers", "Boston Celtics", "Charlotte Hornets", "Milwaukee Bucks", "Philadelphia 76ers", "Atlanta Hawks", "San Antonio Spurs", "San Antonio Spurs", "Denver Nuggets", "Oklahoma City Thunder", "New Orleans Pelicans", "Cleveland Cavaliers", "Minnesota Timberwolves", "New Orleans Pelicans", "Los Angeles Clippers", "Los Angeles Clippers", "Sacramento Kings", "Minnesota Timberwolves"],
      [108, 95, 126, 114, 121, 100, 120, 116, 119, 99, 133, 131, 140, 120, 123, 110, 116, 105, 111, 116, 103, 106, 119, 112, 122, 112, 104, 105, 114, 129, 133, 112, 109, 122, 113, 115, 111, 127, 127, 119, 123, 117, 115, 132, 131, 98, 118, 136, 120, 140, 114, 129, 112, 130, 116, 113, 110, 123, 110, 109, 110, 117, 120, 107, 117, 112, 107, 129, 115, 128, 131, 102, 104, 103, 124, 122, 97, 105, 92, 124, 108, 125],
      [4, -5, 22, -1, -11, -12, 14, 1, -3, -12, 18, 3, 3, 13, 8, 21, 3, -7, -8, 7, -3, -8, 3, -4, -17, 4, -5, -15, -14, 16, 14, 5, 21, -9, 16, -6, -27, 18, 11, 2, 14, 7, 2, 23, -2, -15, 13, 16, -9, 28, 8, 14, -1, 5, 16, -10, -4, 10, 5, -9, -8, 10, 7, -10, 6, -15, 11, -11, 13, 13, 25, -2, 7, -25, 13, 21, 10, -8, -13, 16, 1, 19]
    ),
    leaders: {
      pts: { name: "Kevin Durant", val: 27.1, all: [{"name": "Kevin Durant", "val": 27.1}, {"name": "Devin Booker", "val": 27.1}, {"name": "Bradley Beal", "val": 18.2}, {"name": "Grayson Allen", "val": 13.5}, {"name": "Eric Gordon", "val": 11.0}, {"name": "Jusuf Nurkić", "val": 10.9}, {"name": "Royce O'Neale", "val": 8.1}, {"name": "Bol Bol", "val": 5.2}, {"name": "Drew Eubanks", "val": 5.1}, {"name": "Jordan Goodwin", "val": 5.0}, {"name": "Chimezie Metu", "val": 5.0}, {"name": "Josh Okogie", "val": 4.6}, {"name": "Keita Bates-Diop", "val": 4.5}, {"name": "Yuta Watanabe", "val": 3.6}, {"name": "Nassir Little", "val": 3.4}, {"name": "Saben Lee", "val": 3.0}, {"name": "Thaddeus Young", "val": 2.3}, {"name": "Udoka Azubuike", "val": 2.2}, {"name": "David Roddy", "val": 1.3}, {"name": "Théo Maledon", "val": 1.3}, {"name": "Isaiah Thomas", "val": 1.3}, {"name": "Ish Wainright", "val": 0.8}] },
      reb: { name: "Jusuf Nurkić", val: 11.0, all: [{"name": "Jusuf Nurkić", "val": 11.0}, {"name": "Kevin Durant", "val": 6.6}, {"name": "Royce O'Neale", "val": 5.2}, {"name": "Devin Booker", "val": 4.5}, {"name": "Bradley Beal", "val": 4.4}, {"name": "Drew Eubanks", "val": 4.3}, {"name": "Grayson Allen", "val": 3.9}, {"name": "Bol Bol", "val": 3.2}, {"name": "Chimezie Metu", "val": 3.0}, {"name": "Jordan Goodwin", "val": 2.9}, {"name": "Thaddeus Young", "val": 2.8}, {"name": "Josh Okogie", "val": 2.6}, {"name": "Keita Bates-Diop", "val": 2.6}, {"name": "Udoka Azubuike", "val": 2.0}, {"name": "Eric Gordon", "val": 1.8}, {"name": "Nassir Little", "val": 1.7}, {"name": "Yuta Watanabe", "val": 1.6}, {"name": "Saben Lee", "val": 1.3}, {"name": "Ish Wainright", "val": 1.3}, {"name": "David Roddy", "val": 0.6}, {"name": "Théo Maledon", "val": 0.3}, {"name": "Isaiah Thomas", "val": 0.0}] },
      ast: { name: "Devin Booker", val: 6.9, all: [{"name": "Devin Booker", "val": 6.9}, {"name": "Kevin Durant", "val": 5.0}, {"name": "Bradley Beal", "val": 5.0}, {"name": "Jusuf Nurkić", "val": 4.0}, {"name": "Grayson Allen", "val": 3.0}, {"name": "Royce O'Neale", "val": 2.7}, {"name": "Eric Gordon", "val": 2.0}, {"name": "Jordan Goodwin", "val": 2.0}, {"name": "Saben Lee", "val": 1.3}, {"name": "Josh Okogie", "val": 1.1}, {"name": "Keita Bates-Diop", "val": 0.9}, {"name": "Drew Eubanks", "val": 0.8}, {"name": "Thaddeus Young", "val": 0.7}, {"name": "Nassir Little", "val": 0.5}, {"name": "Isaiah Thomas", "val": 0.5}, {"name": "Chimezie Metu", "val": 0.5}, {"name": "Bol Bol", "val": 0.4}, {"name": "Ish Wainright", "val": 0.3}, {"name": "Yuta Watanabe", "val": 0.3}, {"name": "Udoka Azubuike", "val": 0.2}, {"name": "David Roddy", "val": 0.2}, {"name": "Théo Maledon", "val": 0.0}] },
      stl: { name: "Jusuf Nurkić", val: 1.1, all: [{"name": "Jusuf Nurkić", "val": 1.1}, {"name": "Bradley Beal", "val": 1.0}, {"name": "Eric Gordon", "val": 1.0}, {"name": "Kevin Durant", "val": 0.9}, {"name": "Grayson Allen", "val": 0.9}, {"name": "Royce O'Neale", "val": 0.9}, {"name": "Devin Booker", "val": 0.9}, {"name": "Josh Okogie", "val": 0.8}, {"name": "Keita Bates-Diop", "val": 0.6}, {"name": "Jordan Goodwin", "val": 0.6}, {"name": "Thaddeus Young", "val": 0.5}, {"name": "Chimezie Metu", "val": 0.5}, {"name": "Ish Wainright", "val": 0.5}, {"name": "Drew Eubanks", "val": 0.4}, {"name": "Saben Lee", "val": 0.3}, {"name": "Yuta Watanabe", "val": 0.3}, {"name": "Nassir Little", "val": 0.2}, {"name": "Bol Bol", "val": 0.2}, {"name": "Udoka Azubuike", "val": 0.1}, {"name": "David Roddy", "val": 0.1}, {"name": "Théo Maledon", "val": 0.0}, {"name": "Isaiah Thomas", "val": 0.0}] },
      blk: { name: "Kevin Durant", val: 1.2, all: [{"name": "Kevin Durant", "val": 1.2}, {"name": "Jusuf Nurkić", "val": 1.1}, {"name": "Drew Eubanks", "val": 0.8}, {"name": "Grayson Allen", "val": 0.6}, {"name": "Bol Bol", "val": 0.6}, {"name": "Bradley Beal", "val": 0.5}, {"name": "Royce O'Neale", "val": 0.5}, {"name": "Keita Bates-Diop", "val": 0.5}, {"name": "Eric Gordon", "val": 0.4}, {"name": "Josh Okogie", "val": 0.4}, {"name": "Udoka Azubuike", "val": 0.4}, {"name": "Devin Booker", "val": 0.4}, {"name": "Nassir Little", "val": 0.2}, {"name": "Thaddeus Young", "val": 0.2}, {"name": "Yuta Watanabe", "val": 0.2}, {"name": "Chimezie Metu", "val": 0.2}, {"name": "Jordan Goodwin", "val": 0.2}, {"name": "Saben Lee", "val": 0.1}, {"name": "Ish Wainright", "val": 0.0}, {"name": "David Roddy", "val": 0.0}, {"name": "Théo Maledon", "val": 0.0}, {"name": "Isaiah Thomas", "val": 0.0}] },
    },
    avail: [
      { name: "Jusuf Nurkić", g: 76 },
      { name: "Kevin Durant", g: 75 },
      { name: "Grayson Allen", g: 75 },
      { name: "Drew Eubanks", g: 75 },
      { name: "Eric Gordon", g: 68 },
      { name: "Devin Booker", g: 68 },
      { name: "Josh Okogie", g: 60 },
      { name: "Bradley Beal", g: 53 },
      { name: "Nassir Little", g: 45 },
      { name: "Bol Bol", g: 43 },
      { name: "Jordan Goodwin", g: 40 },
      { name: "Keita Bates-Diop", g: 39 },
      { name: "Chimezie Metu", g: 37 },
      { name: "Royce O'Neale", g: 30 },
      { name: "Yuta Watanabe", g: 29 },
      { name: "Saben Lee", g: 24 },
      { name: "David Roddy", g: 17 },
      { name: "Udoka Azubuike", g: 16 },
      { name: "Thaddeus Young", g: 10 },
      { name: "Isaiah Thomas", g: 6 },
      { name: "Ish Wainright", g: 4 },
      { name: "Théo Maledon", g: 4 },
    ]
  },

  "2024-25": {
    w: 36, l: 46,
    topW:   { pts: 129, opp: 89, against: "Toronto Raptors" },
    worstL: { pts: 109, opp: 148, against: "Houston Rockets" },
    conf_rank: 11,
    games: buildGames(
      "WLWWWWWWWLWLLLLLWLWWLLLWWLLLWLLLLWLWWWLWWLWWWLWLLLWLLLLWLLLWLWLWLLWLWWWWLLLLLLLLWL",
      ["Los Angeles Clippers", "Los Angeles Lakers", "Dallas Mavericks", "Los Angeles Lakers", "Los Angeles Clippers", "Portland Trail Blazers", "Philadelphia 76ers", "Miami Heat", "Dallas Mavericks", "Sacramento Kings", "Utah Jazz", "Sacramento Kings", "Oklahoma City Thunder", "Minnesota Timberwolves", "Orlando Magic", "New York Knicks", "Los Angeles Lakers", "Brooklyn Nets", "Golden State Warriors", "San Antonio Spurs", "New Orleans Pelicans", "Miami Heat", "Orlando Magic", "Utah Jazz", "Portland Trail Blazers", "Indiana Pacers", "Detroit Pistons", "Denver Nuggets", "Denver Nuggets", "Dallas Mavericks", "Golden State Warriors", "Memphis Grizzlies", "Indiana Pacers", "Philadelphia 76ers", "Charlotte Hornets", "Atlanta Hawks", "Utah Jazz", "Charlotte Hornets", "Atlanta Hawks", "Washington Wizards", "Detroit Pistons", "Cleveland Cavaliers", "Brooklyn Nets", "Washington Wizards", "Los Angeles Clippers", "Minnesota Timberwolves", "Golden State Warriors", "Portland Trail Blazers", "Portland Trail Blazers", "Oklahoma City Thunder", "Utah Jazz", "Denver Nuggets", "Memphis Grizzlies", "Houston Rockets", "San Antonio Spurs", "Chicago Bulls", "Toronto Raptors", "Memphis Grizzlies", "New Orleans Pelicans", "New Orleans Pelicans", "Minnesota Timberwolves", "Los Angeles Clippers", "Denver Nuggets", "Dallas Mavericks", "Memphis Grizzlies", "Houston Rockets", "Sacramento Kings", "Los Angeles Lakers", "Toronto Raptors", "Chicago Bulls", "Cleveland Cavaliers", "Milwaukee Bucks", "Boston Celtics", "Minnesota Timberwolves", "Houston Rockets", "Milwaukee Bucks", "Boston Celtics", "New York Knicks", "Golden State Warriors", "Oklahoma City Thunder", "San Antonio Spurs", "Sacramento Kings"],
      [116, 116, 114, 109, 125, 103, 118, 115, 114, 118, 120, 104, 83, 117, 99, 122, 127, 117, 113, 104, 124, 111, 110, 134, 116, 111, 125, 90, 110, 89, 105, 112, 108, 109, 104, 123, 114, 120, 117, 130, 125, 92, 108, 119, 111, 113, 130, 108, 119, 109, 135, 105, 112, 111, 109, 121, 109, 148, 116, 125, 98, 119, 141, 125, 118, 104, 122, 96, 129, 127, 123, 108, 102, 109, 109, 123, 103, 98, 95, 112, 117, 98],
      [3, -7, 12, 4, 6, 6, 2, 3, 1, -9, 8, -23, -16, -3, -10, -16, 27, -10, 8, 11, -2, -10, -5, 8, 7, -9, -8, -27, 10, -9, -4, -5, -18, 10, -11, 8, 8, 7, -5, 7, 4, -26, 24, 10, 2, -8, 25, -19, -2, -31, 8, -17, -7, -8, -11, 4, -18, -3, -8, 17, -18, 2, -8, 9, -2, -7, 16, -11, 40, 6, 11, 2, -30, -15, -39, -10, -20, -14, -38, -13, 19, -11]
    ),
    leaders: {
      pts: { name: "Kevin Durant", val: 26.6, all: [{"name": "Kevin Durant", "val": 26.6}, {"name": "Devin Booker", "val": 25.6}, {"name": "Bradley Beal", "val": 17.0}, {"name": "Grayson Allen", "val": 10.6}, {"name": "Tyus Jones", "val": 10.2}, {"name": "Nick Richards", "val": 9.5}, {"name": "Royce O'Neale", "val": 9.1}, {"name": "Jusuf Nurkić", "val": 8.6}, {"name": "Ryan Dunn", "val": 6.9}, {"name": "Bol Bol", "val": 6.8}, {"name": "Josh Okogie", "val": 6.0}, {"name": "Collin Gillespie", "val": 5.9}, {"name": "Monte Morris", "val": 5.2}, {"name": "Mason Plumlee", "val": 4.5}, {"name": "Oso Ighodaro", "val": 4.2}, {"name": "Cody Martin", "val": 3.7}, {"name": "Damion Lee", "val": 3.3}, {"name": "TyTy Washington Jr.", "val": 2.2}, {"name": "Jalen Bridges", "val": 1.1}, {"name": "Vasilije Micić", "val": 0.0}] },
      reb: { name: "Jusuf Nurkić", val: 9.2, all: [{"name": "Jusuf Nurkić", "val": 9.2}, {"name": "Nick Richards", "val": 8.6}, {"name": "Mason Plumlee", "val": 6.1}, {"name": "Kevin Durant", "val": 6.0}, {"name": "Royce O'Neale", "val": 4.7}, {"name": "Devin Booker", "val": 4.1}, {"name": "Ryan Dunn", "val": 3.6}, {"name": "Oso Ighodaro", "val": 3.6}, {"name": "Cody Martin", "val": 3.4}, {"name": "Bradley Beal", "val": 3.3}, {"name": "Grayson Allen", "val": 3.0}, {"name": "Josh Okogie", "val": 2.9}, {"name": "Bol Bol", "val": 2.9}, {"name": "Tyus Jones", "val": 2.4}, {"name": "Collin Gillespie", "val": 2.4}, {"name": "Monte Morris", "val": 1.5}, {"name": "TyTy Washington Jr.", "val": 0.8}, {"name": "Damion Lee", "val": 0.8}, {"name": "Jalen Bridges", "val": 0.5}, {"name": "Vasilije Micić", "val": 0.4}] },
      ast: { name: "Devin Booker", val: 7.1, all: [{"name": "Devin Booker", "val": 7.1}, {"name": "Tyus Jones", "val": 5.3}, {"name": "Kevin Durant", "val": 4.2}, {"name": "Bradley Beal", "val": 3.7}, {"name": "Collin Gillespie", "val": 2.4}, {"name": "Royce O'Neale", "val": 2.2}, {"name": "Grayson Allen", "val": 2.1}, {"name": "Jusuf Nurkić", "val": 1.9}, {"name": "Mason Plumlee", "val": 1.8}, {"name": "Monte Morris", "val": 1.6}, {"name": "Oso Ighodaro", "val": 1.2}, {"name": "Cody Martin", "val": 1.1}, {"name": "TyTy Washington Jr.", "val": 1.0}, {"name": "Ryan Dunn", "val": 0.8}, {"name": "Josh Okogie", "val": 0.6}, {"name": "Nick Richards", "val": 0.6}, {"name": "Bol Bol", "val": 0.6}, {"name": "Damion Lee", "val": 0.4}, {"name": "Vasilije Micić", "val": 0.2}, {"name": "Jalen Bridges", "val": 0.0}] },
      stl: { name: "Bradley Beal", val: 1.1, all: [{"name": "Bradley Beal", "val": 1.1}, {"name": "Devin Booker", "val": 0.9}, {"name": "Cody Martin", "val": 0.9}, {"name": "Tyus Jones", "val": 0.9}, {"name": "Royce O'Neale", "val": 0.9}, {"name": "Jusuf Nurkić", "val": 0.9}, {"name": "Grayson Allen", "val": 0.8}, {"name": "Josh Okogie", "val": 0.8}, {"name": "Kevin Durant", "val": 0.8}, {"name": "Ryan Dunn", "val": 0.6}, {"name": "Collin Gillespie", "val": 0.6}, {"name": "Oso Ighodaro", "val": 0.5}, {"name": "Mason Plumlee", "val": 0.4}, {"name": "Monte Morris", "val": 0.4}, {"name": "Bol Bol", "val": 0.3}, {"name": "Nick Richards", "val": 0.2}, {"name": "TyTy Washington Jr.", "val": 0.2}, {"name": "Damion Lee", "val": 0.2}, {"name": "Vasilije Micić", "val": 0.0}, {"name": "Jalen Bridges", "val": 0.0}] },
      blk: { name: "Kevin Durant", val: 1.2, all: [{"name": "Kevin Durant", "val": 1.2}, {"name": "Nick Richards", "val": 0.8}, {"name": "Bol Bol", "val": 0.7}, {"name": "Jusuf Nurkić", "val": 0.6}, {"name": "Mason Plumlee", "val": 0.6}, {"name": "Oso Ighodaro", "val": 0.5}, {"name": "Bradley Beal", "val": 0.5}, {"name": "Royce O'Neale", "val": 0.5}, {"name": "Ryan Dunn", "val": 0.5}, {"name": "Josh Okogie", "val": 0.4}, {"name": "Cody Martin", "val": 0.4}, {"name": "Grayson Allen", "val": 0.3}, {"name": "Devin Booker", "val": 0.2}, {"name": "Collin Gillespie", "val": 0.2}, {"name": "Monte Morris", "val": 0.1}, {"name": "Tyus Jones", "val": 0.1}, {"name": "TyTy Washington Jr.", "val": 0.0}, {"name": "Damion Lee", "val": 0.0}, {"name": "Vasilije Micić", "val": 0.0}, {"name": "Jalen Bridges", "val": 0.0}] },
    },
    avail: [
      { name: "Tyus Jones", g: 81 },
      { name: "Devin Booker", g: 75 },
      { name: "Royce O'Neale", g: 75 },
      { name: "Ryan Dunn", g: 74 },
      { name: "Mason Plumlee", g: 74 },
      { name: "Grayson Allen", g: 64 },
      { name: "Kevin Durant", g: 62 },
      { name: "Oso Ighodaro", g: 61 },
      { name: "Bradley Beal", g: 53 },
      { name: "Monte Morris", g: 45 },
      { name: "Nick Richards", g: 36 },
      { name: "Bol Bol", g: 36 },
      { name: "Collin Gillespie", g: 33 },
      { name: "Jusuf Nurkić", g: 25 },
      { name: "Josh Okogie", g: 25 },
      { name: "Damion Lee", g: 25 },
      { name: "TyTy Washington Jr.", g: 16 },
      { name: "Cody Martin", g: 14 },
      { name: "Jalen Bridges", g: 8 },
      { name: "Vasilije Micić", g: 5 },
    ]
  },

  "2025-26": {
    w: 45, l: 37,
    topW:   { pts: 133, opp: 98, against: "Indiana Pacers" },
    worstL: { pts: 89, opp: 138, against: "Oklahoma City Thunder" },
    conf_rank: 7,
    games: buildGames(
      "WLLLLWWLWWWWWLWWWLWLLWLWLLWLWWWWLWWLWWWLLWWWLLWWWLWLLWLLWLLWWLWWWWLLLLLWLWWLLWLWLW",
      ["Sacramento Kings", "Los Angeles Clippers", "Denver Nuggets", "Utah Jazz", "Memphis Grizzlies", "Utah Jazz", "San Antonio Spurs", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Clippers", "New Orleans Pelicans", "Dallas Mavericks", "Indiana Pacers", "Atlanta Hawks", "Portland Trail Blazers", "Minnesota Timberwolves", "San Antonio Spurs", "Houston Rockets", "Sacramento Kings", "Oklahoma City Thunder", "Denver Nuggets", "Los Angeles Lakers", "Houston Rockets", "Minnesota Timberwolves", "Oklahoma City Thunder", "Los Angeles Lakers", "Golden State Warriors", "Golden State Warriors", "Los Angeles Lakers", "New Orleans Pelicans", "New Orleans Pelicans", "Washington Wizards", "Cleveland Cavaliers", "Sacramento Kings", "Oklahoma City Thunder", "Houston Rockets", "Memphis Grizzlies", "New York Knicks", "Washington Wizards", "Miami Heat", "Detroit Pistons", "New York Knicks", "Brooklyn Nets", "Philadelphia 76ers", "Atlanta Hawks", "Miami Heat", "Brooklyn Nets", "Detroit Pistons", "Cleveland Cavaliers", "Los Angeles Clippers", "Portland Trail Blazers", "Golden State Warriors", "Philadelphia 76ers", "Dallas Mavericks", "Oklahoma City Thunder", "San Antonio Spurs", "Orlando Magic", "Portland Trail Blazers", "Boston Celtics", "Los Angeles Lakers", "Sacramento Kings", "Chicago Bulls", "New Orleans Pelicans", "Charlotte Hornets", "Milwaukee Bucks", "Indiana Pacers", "Toronto Raptors", "Boston Celtics", "Minnesota Timberwolves", "San Antonio Spurs", "Milwaukee Bucks", "Toronto Raptors", "Denver Nuggets", "Utah Jazz", "Memphis Grizzlies", "Orlando Magic", "Charlotte Hornets", "Chicago Bulls", "Houston Rockets", "Dallas Mavericks", "Los Angeles Lakers", "Oklahoma City Thunder"],
      [120, 102, 111, 134, 113, 118, 130, 107, 115, 114, 121, 123, 133, 122, 127, 114, 111, 92, 112, 119, 112, 125, 98, 108, 89, 114, 99, 116, 132, 115, 123, 115, 113, 129, 108, 97, 117, 112, 112, 121, 105, 106, 126, 116, 103, 102, 106, 114, 126, 93, 130, 97, 103, 120, 109, 94, 113, 77, 81, 113, 114, 103, 118, 111, 129, 123, 115, 112, 104, 100, 105, 120, 123, 134, 131, 111, 107, 120, 105, 112, 73, 135],
      [4, -27, -22, -4, -1, 22, 12, -11, 13, 11, 23, 9, 35, -2, 17, 1, 9, -22, 12, -4, -18, 17, -19, 3, -49, -2, 1, -3, 24, 7, 9, 14, -16, 27, 3, -3, 19, 5, 19, -6, -3, 7, 9, 6, -7, -9, 4, 18, 13, -24, 5, -4, -6, 9, -27, -27, 3, -15, -16, 3, 11, -2, 2, 12, 15, 15, -7, -8, -12, -1, -3, 22, -2, 25, 26, -4, -20, 10, -14, 5, -28, 32]
    ),
    leaders: {
      pts: { name: "Devin Booker", val: 26.1, all: [{"name": "Devin Booker", "val": 26.1}, {"name": "Dillon Brooks", "val": 20.2}, {"name": "Jalen Green", "val": 17.8}, {"name": "Grayson Allen", "val": 16.5}, {"name": "Collin Gillespie", "val": 12.7}, {"name": "Mark Williams", "val": 11.7}, {"name": "Royce O'Neale", "val": 9.8}, {"name": "Jordan Goodwin", "val": 8.7}, {"name": "Oso Ighodaro", "val": 6.5}, {"name": "Ryan Dunn", "val": 5.8}, {"name": "Jamaree Bouyea", "val": 5.7}, {"name": "Haywood Highsmith", "val": 5.4}, {"name": "Amir Coffey", "val": 4.8}, {"name": "Rasheer Fleming", "val": 4.3}, {"name": "Koby Brea", "val": 3.8}, {"name": "Nick Richards", "val": 3.2}, {"name": "CJ Huntley", "val": 3.0}, {"name": "Khaman Maluach", "val": 3.0}, {"name": "Isaiah Livers", "val": 1.8}, {"name": "Nigel Hayes-Davis", "val": 1.3}] },
      reb: { name: "Mark Williams", val: 8.0, all: [{"name": "Mark Williams", "val": 8.0}, {"name": "Oso Ighodaro", "val": 5.1}, {"name": "Jordan Goodwin", "val": 4.9}, {"name": "Royce O'Neale", "val": 4.8}, {"name": "Ryan Dunn", "val": 4.2}, {"name": "Collin Gillespie", "val": 4.1}, {"name": "Devin Booker", "val": 3.9}, {"name": "Jalen Green", "val": 3.6}, {"name": "Dillon Brooks", "val": 3.6}, {"name": "Nick Richards", "val": 3.3}, {"name": "Grayson Allen", "val": 3.0}, {"name": "Khaman Maluach", "val": 2.9}, {"name": "Rasheer Fleming", "val": 2.3}, {"name": "Amir Coffey", "val": 1.9}, {"name": "Haywood Highsmith", "val": 1.9}, {"name": "Jamaree Bouyea", "val": 1.8}, {"name": "Isaiah Livers", "val": 1.7}, {"name": "CJ Huntley", "val": 1.3}, {"name": "Nigel Hayes-Davis", "val": 1.2}, {"name": "Koby Brea", "val": 0.7}] },
      ast: { name: "Devin Booker", val: 6.0, all: [{"name": "Devin Booker", "val": 6.0}, {"name": "Collin Gillespie", "val": 4.6}, {"name": "Grayson Allen", "val": 3.8}, {"name": "Jalen Green", "val": 2.8}, {"name": "Royce O'Neale", "val": 2.7}, {"name": "Oso Ighodaro", "val": 2.3}, {"name": "Jordan Goodwin", "val": 2.2}, {"name": "Jamaree Bouyea", "val": 1.8}, {"name": "Dillon Brooks", "val": 1.8}, {"name": "Ryan Dunn", "val": 1.5}, {"name": "Haywood Highsmith", "val": 1.0}, {"name": "Amir Coffey", "val": 1.0}, {"name": "Mark Williams", "val": 1.0}, {"name": "Koby Brea", "val": 0.8}, {"name": "Isaiah Livers", "val": 0.6}, {"name": "CJ Huntley", "val": 0.5}, {"name": "Rasheer Fleming", "val": 0.3}, {"name": "Nick Richards", "val": 0.3}, {"name": "Nigel Hayes-Davis", "val": 0.3}, {"name": "Khaman Maluach", "val": 0.1}] },
      stl: { name: "Jordan Goodwin", val: 1.5, all: [{"name": "Jordan Goodwin", "val": 1.5}, {"name": "Grayson Allen", "val": 1.4}, {"name": "Collin Gillespie", "val": 1.2}, {"name": "Royce O'Neale", "val": 1.1}, {"name": "Jalen Green", "val": 1.1}, {"name": "Dillon Brooks", "val": 1.0}, {"name": "Mark Williams", "val": 0.9}, {"name": "Oso Ighodaro", "val": 0.9}, {"name": "Ryan Dunn", "val": 0.9}, {"name": "Devin Booker", "val": 0.8}, {"name": "Jamaree Bouyea", "val": 0.6}, {"name": "Haywood Highsmith", "val": 0.6}, {"name": "Isaiah Livers", "val": 0.4}, {"name": "Amir Coffey", "val": 0.4}, {"name": "Rasheer Fleming", "val": 0.4}, {"name": "CJ Huntley", "val": 0.3}, {"name": "Nigel Hayes-Davis", "val": 0.3}, {"name": "Nick Richards", "val": 0.1}, {"name": "Khaman Maluach", "val": 0.1}, {"name": "Koby Brea", "val": 0.1}] },
      blk: { name: "Mark Williams", val: 0.9, all: [{"name": "Mark Williams", "val": 0.9}, {"name": "Oso Ighodaro", "val": 0.7}, {"name": "Khaman Maluach", "val": 0.7}, {"name": "Nick Richards", "val": 0.5}, {"name": "Royce O'Neale", "val": 0.4}, {"name": "Ryan Dunn", "val": 0.4}, {"name": "Rasheer Fleming", "val": 0.4}, {"name": "Devin Booker", "val": 0.3}, {"name": "Grayson Allen", "val": 0.3}, {"name": "Jalen Green", "val": 0.3}, {"name": "Jamaree Bouyea", "val": 0.3}, {"name": "Collin Gillespie", "val": 0.2}, {"name": "Jordan Goodwin", "val": 0.2}, {"name": "Dillon Brooks", "val": 0.2}, {"name": "Isaiah Livers", "val": 0.2}, {"name": "Nigel Hayes-Davis", "val": 0.1}, {"name": "Amir Coffey", "val": 0.1}, {"name": "CJ Huntley", "val": 0.0}, {"name": "Haywood Highsmith", "val": 0.0}, {"name": "Koby Brea", "val": 0.0}] },
    },
    avail: [
      { name: "Oso Ighodaro", g: 82 },
      { name: "Collin Gillespie", g: 80 },
      { name: "Royce O'Neale", g: 78 },
      { name: "Jordan Goodwin", g: 70 },
      { name: "Ryan Dunn", g: 70 },
      { name: "Devin Booker", g: 64 },
      { name: "Mark Williams", g: 60 },
      { name: "Dillon Brooks", g: 56 },
      { name: "Rasheer Fleming", g: 55 },
      { name: "Grayson Allen", g: 51 },
      { name: "Jamaree Bouyea", g: 46 },
      { name: "Khaman Maluach", g: 46 },
      { name: "Isaiah Livers", g: 36 },
      { name: "Jalen Green", g: 32 },
      { name: "Nick Richards", g: 28 },
      { name: "Nigel Hayes-Davis", g: 27 },
      { name: "Amir Coffey", g: 16 },
      { name: "Koby Brea", g: 12 },
      { name: "Haywood Highsmith", g: 7 },
      { name: "CJ Huntley", g: 4 },
    ]
  },

};
