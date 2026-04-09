/* ================================================================
   POR.js — Portland Trail Blazers · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Portland Trail Blazers",
  abbr:          "POR",
  conference:    "West",
  primaryColor:  "#E03A3E",
  secondaryColor:"#000000",
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
    w: 42, l: 30,
    topW:   { pts: 133, opp: 85, against: "Oklahoma City Thunder" },
    worstL: { pts: 92, opp: 132, against: "Dallas Mavericks" },
    conf_rank: 6,
    games: buildGames(
      "LWWLWLLWWWWLWLWLLWLWWLWWWWWWLLLLWWWLWLWWWLLWWWWLWLLWLLWLLLLLWWWWLWWWWWLW",
      ["Utah Jazz", "Houston Rockets", "Los Angeles Lakers", "Los Angeles Clippers", "Golden State Warriors", "Golden State Warriors", "Chicago Bulls", "Minnesota Timberwolves", "Sacramento Kings", "Toronto Raptors", "Sacramento Kings", "Indiana Pacers", "Atlanta Hawks", "San Antonio Spurs", "New York Knicks", "Oklahoma City Thunder", "Houston Rockets", "Chicago Bulls", "Milwaukee Bucks", "Washington Wizards", "Philadelphia 76ers", "New York Knicks", "Orlando Magic", "Philadelphia 76ers", "Cleveland Cavaliers", "Dallas Mavericks", "Oklahoma City Thunder", "New Orleans Pelicans", "Washington Wizards", "Phoenix Suns", "Denver Nuggets", "Los Angeles Lakers", "Charlotte Hornets", "Golden State Warriors", "Sacramento Kings", "Phoenix Suns", "Minnesota Timberwolves", "Minnesota Timberwolves", "New Orleans Pelicans", "New Orleans Pelicans", "Dallas Mavericks", "Dallas Mavericks", "Brooklyn Nets", "Miami Heat", "Orlando Magic", "Toronto Raptors", "Detroit Pistons", "Milwaukee Bucks", "Oklahoma City Thunder", "Los Angeles Clippers", "Utah Jazz", "Detroit Pistons", "Miami Heat", "Boston Celtics", "San Antonio Spurs", "Charlotte Hornets", "Los Angeles Clippers", "Denver Nuggets", "Memphis Grizzlies", "Memphis Grizzlies", "Indiana Pacers", "Memphis Grizzlies", "Brooklyn Nets", "Boston Celtics", "Atlanta Hawks", "Cleveland Cavaliers", "Los Angeles Lakers", "San Antonio Spurs", "Houston Rockets", "Utah Jazz", "Phoenix Suns", "Denver Nuggets"],
      [100, 128, 115, 105, 123, 122, 108, 135, 125, 112, 132, 87, 112, 104, 116, 122, 101, 123, 106, 132, 121, 99, 106, 118, 129, 121, 115, 126, 111, 100, 106, 93, 123, 108, 123, 121, 125, 112, 125, 101, 125, 92, 112, 125, 112, 122, 124, 109, 133, 116, 103, 118, 98, 115, 107, 101, 112, 105, 128, 113, 133, 130, 128, 129, 114, 141, 106, 124, 140, 105, 117, 132],
      [-20, 2, 8, -23, 25, -15, -3, 18, 26, 1, 6, -24, 6, -21, 3, -3, -3, 1, -28, 11, 16, -11, 9, 4, 19, 3, 11, 2, -7, -32, -5, -9, 12, 2, 4, -6, 4, -2, 1, 8, 6, -40, -4, 3, 7, 5, 23, -18, 48, -17, -19, 15, -9, -1, 1, -8, -1, -1, -2, -7, 21, 21, 19, 10, -9, 36, 5, 22, 11, 7, -1, 16]
    ),
    leaders: {
      pts: { name: "Damian Lillard", val: 28.8, all: [{"name": "Damian Lillard", "val": 28.8}, {"name": "CJ McCollum", "val": 23.1}, {"name": "Norman Powell", "val": 17.0}, {"name": "Gary Trent Jr.", "val": 15.0}, {"name": "Carmelo Anthony", "val": 13.4}, {"name": "Jusuf Nurkić", "val": 11.5}, {"name": "Enes Freedom", "val": 11.2}, {"name": "Robert Covington", "val": 8.5}, {"name": "Anfernee Simons", "val": 7.8}, {"name": "Derrick Jones Jr.", "val": 6.8}, {"name": "Rodney Hood", "val": 4.7}, {"name": "Nassir Little", "val": 4.6}, {"name": "Harry Giles", "val": 2.8}, {"name": "Rondae Hollis-Jefferson", "val": 2.5}, {"name": "CJ Elleby", "val": 2.3}, {"name": "T.J. Leaf", "val": 1.7}, {"name": "Keljin Blevins", "val": 0.7}] },
      reb: { name: "Enes Freedom", val: 11.0, all: [{"name": "Enes Freedom", "val": 11.0}, {"name": "Jusuf Nurkić", "val": 9.0}, {"name": "Robert Covington", "val": 6.7}, {"name": "Damian Lillard", "val": 4.2}, {"name": "CJ McCollum", "val": 3.9}, {"name": "Harry Giles", "val": 3.5}, {"name": "Derrick Jones Jr.", "val": 3.5}, {"name": "Norman Powell", "val": 3.3}, {"name": "Carmelo Anthony", "val": 3.1}, {"name": "Nassir Little", "val": 2.7}, {"name": "Rondae Hollis-Jefferson", "val": 2.4}, {"name": "Anfernee Simons", "val": 2.2}, {"name": "Gary Trent Jr.", "val": 2.2}, {"name": "Rodney Hood", "val": 1.9}, {"name": "CJ Elleby", "val": 1.1}, {"name": "T.J. Leaf", "val": 0.7}, {"name": "Keljin Blevins", "val": 0.6}] },
      ast: { name: "Damian Lillard", val: 7.5, all: [{"name": "Damian Lillard", "val": 7.5}, {"name": "CJ McCollum", "val": 4.7}, {"name": "Jusuf Nurkić", "val": 3.4}, {"name": "Norman Powell", "val": 1.9}, {"name": "Robert Covington", "val": 1.7}, {"name": "Carmelo Anthony", "val": 1.5}, {"name": "Gary Trent Jr.", "val": 1.4}, {"name": "Anfernee Simons", "val": 1.4}, {"name": "Rondae Hollis-Jefferson", "val": 1.2}, {"name": "Enes Freedom", "val": 1.2}, {"name": "Rodney Hood", "val": 1.2}, {"name": "Harry Giles", "val": 0.8}, {"name": "Derrick Jones Jr.", "val": 0.8}, {"name": "Nassir Little", "val": 0.5}, {"name": "CJ Elleby", "val": 0.3}, {"name": "Keljin Blevins", "val": 0.2}, {"name": "T.J. Leaf", "val": 0.1}] },
      stl: { name: "Robert Covington", val: 1.4, all: [{"name": "Robert Covington", "val": 1.4}, {"name": "Norman Powell", "val": 1.3}, {"name": "Jusuf Nurkić", "val": 1.0}, {"name": "Damian Lillard", "val": 0.9}, {"name": "CJ McCollum", "val": 0.9}, {"name": "Gary Trent Jr.", "val": 0.9}, {"name": "Carmelo Anthony", "val": 0.7}, {"name": "Derrick Jones Jr.", "val": 0.6}, {"name": "Enes Freedom", "val": 0.5}, {"name": "Rodney Hood", "val": 0.5}, {"name": "Anfernee Simons", "val": 0.3}, {"name": "T.J. Leaf", "val": 0.3}, {"name": "Rondae Hollis-Jefferson", "val": 0.2}, {"name": "Harry Giles", "val": 0.2}, {"name": "CJ Elleby", "val": 0.2}, {"name": "Nassir Little", "val": 0.1}, {"name": "Keljin Blevins", "val": 0.1}] },
      blk: { name: "Robert Covington", val: 1.2, all: [{"name": "Robert Covington", "val": 1.2}, {"name": "Jusuf Nurkić", "val": 1.1}, {"name": "Derrick Jones Jr.", "val": 0.9}, {"name": "Enes Freedom", "val": 0.7}, {"name": "Carmelo Anthony", "val": 0.6}, {"name": "CJ McCollum", "val": 0.4}, {"name": "Norman Powell", "val": 0.4}, {"name": "Rondae Hollis-Jefferson", "val": 0.4}, {"name": "Nassir Little", "val": 0.3}, {"name": "Harry Giles", "val": 0.3}, {"name": "Damian Lillard", "val": 0.3}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Rodney Hood", "val": 0.1}, {"name": "Gary Trent Jr.", "val": 0.1}, {"name": "CJ Elleby", "val": 0.1}, {"name": "T.J. Leaf", "val": 0.1}, {"name": "Keljin Blevins", "val": 0.0}] },
    },
    avail: [
      { name: "Enes Freedom", g: 72 },
      { name: "Robert Covington", g: 70 },
      { name: "Carmelo Anthony", g: 69 },
      { name: "Damian Lillard", g: 67 },
      { name: "Anfernee Simons", g: 64 },
      { name: "Derrick Jones Jr.", g: 58 },
      { name: "Nassir Little", g: 48 },
      { name: "CJ McCollum", g: 47 },
      { name: "Gary Trent Jr.", g: 41 },
      { name: "Rodney Hood", g: 38 },
      { name: "Harry Giles", g: 38 },
      { name: "Jusuf Nurkić", g: 37 },
      { name: "CJ Elleby", g: 30 },
      { name: "Norman Powell", g: 27 },
      { name: "Keljin Blevins", g: 17 },
      { name: "Rondae Hollis-Jefferson", g: 11 },
      { name: "T.J. Leaf", g: 7 },
    ]
  },

  "2021-22": {
    w: 27, l: 55,
    topW:   { pts: 134, opp: 105, against: "Phoenix Suns" },
    worstL: { pts: 78, opp: 128, against: "Dallas Mavericks" },
    conf_rank: 13,
    games: buildGames(
      "LWLWWLLLWWLLWLWWWWLLLWLLLLLLLWWLLLLWLLWWLWWLWWLLWLLLLLLWWWWLLLLLLWLLLLWLLLLLLLLLLL",
      ["Sacramento Kings", "Phoenix Suns", "Los Angeles Clippers", "Memphis Grizzlies", "Los Angeles Clippers", "Charlotte Hornets", "Philadelphia 76ers", "Cleveland Cavaliers", "Indiana Pacers", "Los Angeles Lakers", "Los Angeles Clippers", "Phoenix Suns", "Houston Rockets", "Denver Nuggets", "Toronto Raptors", "Chicago Bulls", "Philadelphia 76ers", "Denver Nuggets", "Sacramento Kings", "Golden State Warriors", "Utah Jazz", "Detroit Pistons", "San Antonio Spurs", "Boston Celtics", "Los Angeles Clippers", "Golden State Warriors", "Minnesota Timberwolves", "Phoenix Suns", "Memphis Grizzlies", "Charlotte Hornets", "Memphis Grizzlies", "New Orleans Pelicans", "Dallas Mavericks", "Utah Jazz", "Los Angeles Lakers", "Atlanta Hawks", "Miami Heat", "Cleveland Cavaliers", "Sacramento Kings", "Brooklyn Nets", "Denver Nuggets", "Washington Wizards", "Orlando Magic", "Miami Heat", "Boston Celtics", "Toronto Raptors", "Minnesota Timberwolves", "Dallas Mavericks", "Houston Rockets", "Chicago Bulls", "Oklahoma City Thunder", "Los Angeles Lakers", "Oklahoma City Thunder", "Milwaukee Bucks", "Orlando Magic", "Los Angeles Lakers", "New York Knicks", "Milwaukee Bucks", "Memphis Grizzlies", "Golden State Warriors", "Denver Nuggets", "Phoenix Suns", "Minnesota Timberwolves", "Minnesota Timberwolves", "Utah Jazz", "Washington Wizards", "Atlanta Hawks", "New York Knicks", "Brooklyn Nets", "Indiana Pacers", "Detroit Pistons", "San Antonio Spurs", "Houston Rockets", "Houston Rockets", "Oklahoma City Thunder", "New Orleans Pelicans", "San Antonio Spurs", "San Antonio Spurs", "Oklahoma City Thunder", "New Orleans Pelicans", "Dallas Mavericks", "Utah Jazz"],
      [121, 134, 86, 116, 111, 113, 103, 104, 110, 105, 109, 109, 104, 95, 118, 112, 118, 119, 121, 103, 107, 110, 83, 117, 90, 94, 111, 107, 103, 125, 105, 97, 117, 105, 106, 136, 109, 101, 103, 114, 108, 115, 98, 92, 109, 114, 107, 112, 125, 116, 81, 94, 93, 108, 95, 107, 112, 122, 123, 95, 92, 90, 121, 81, 85, 127, 113, 98, 123, 98, 119, 96, 106, 98, 131, 107, 111, 92, 94, 94, 78, 80],
      [-3, 29, -30, 20, 19, -12, -10, -3, 4, 15, -8, -10, 12, -29, 5, 5, 7, 19, -4, -15, -22, 18, -31, -28, -12, -10, -5, -4, -10, 9, 5, -14, -15, -15, -33, 5, -6, -13, 15, 6, -32, 5, 10, -12, 4, 9, -2, -20, 15, -14, -17, -5, -3, -29, -18, 2, 9, 15, 4, -37, -32, -30, -14, -43, -38, 9, -9, -30, -5, -31, 4, -37, -19, -17, -3, -10, -19, -21, -4, -33, -50, -31]
    ),
    leaders: {
      pts: { name: "Damian Lillard", val: 24.0, all: [{"name": "Damian Lillard", "val": 24.0}, {"name": "CJ McCollum", "val": 20.5}, {"name": "Josh Hart", "val": 19.9}, {"name": "Norman Powell", "val": 18.7}, {"name": "Anfernee Simons", "val": 17.3}, {"name": "Jusuf Nurkić", "val": 15.0}, {"name": "Drew Eubanks", "val": 14.5}, {"name": "Brandon Williams", "val": 12.9}, {"name": "Justise Winslow", "val": 10.7}, {"name": "Ben McLemore", "val": 10.2}, {"name": "Reggie Perry", "val": 10.0}, {"name": "Nassir Little", "val": 9.8}, {"name": "Keon Johnson", "val": 9.7}, {"name": "Robert Covington", "val": 7.6}, {"name": "Kris Dunn", "val": 7.6}, {"name": "Trendon Watford", "val": 7.6}, {"name": "Larry Nance Jr.", "val": 6.9}, {"name": "CJ Elleby", "val": 5.8}, {"name": "Dennis Smith Jr.", "val": 5.6}, {"name": "Cody Zeller", "val": 5.2}, {"name": "Didi Louzada", "val": 5.0}, {"name": "Cameron McGriff", "val": 4.7}, {"name": "Greg Brown III", "val": 4.7}, {"name": "Elijah Hughes", "val": 3.8}, {"name": "Keljin Blevins", "val": 3.1}, {"name": "Tony Snell", "val": 2.6}, {"name": "Jarron Cumberland", "val": 0.7}] },
      reb: { name: "Jusuf Nurkić", val: 11.1, all: [{"name": "Jusuf Nurkić", "val": 11.1}, {"name": "Drew Eubanks", "val": 8.5}, {"name": "Justise Winslow", "val": 6.3}, {"name": "Robert Covington", "val": 5.7}, {"name": "Larry Nance Jr.", "val": 5.6}, {"name": "Nassir Little", "val": 5.6}, {"name": "Josh Hart", "val": 5.4}, {"name": "Reggie Perry", "val": 5.1}, {"name": "Cameron McGriff", "val": 5.0}, {"name": "Cody Zeller", "val": 4.6}, {"name": "CJ McCollum", "val": 4.3}, {"name": "Trendon Watford", "val": 4.1}, {"name": "Damian Lillard", "val": 4.1}, {"name": "CJ Elleby", "val": 3.9}, {"name": "Kris Dunn", "val": 3.5}, {"name": "Norman Powell", "val": 3.3}, {"name": "Brandon Williams", "val": 3.1}, {"name": "Greg Brown III", "val": 2.8}, {"name": "Keon Johnson", "val": 2.7}, {"name": "Anfernee Simons", "val": 2.6}, {"name": "Dennis Smith Jr.", "val": 2.4}, {"name": "Didi Louzada", "val": 2.1}, {"name": "Elijah Hughes", "val": 1.9}, {"name": "Tony Snell", "val": 1.9}, {"name": "Ben McLemore", "val": 1.6}, {"name": "Keljin Blevins", "val": 1.5}, {"name": "Jarron Cumberland", "val": 1.0}] },
      ast: { name: "Damian Lillard", val: 7.3, all: [{"name": "Damian Lillard", "val": 7.3}, {"name": "Kris Dunn", "val": 5.6}, {"name": "CJ McCollum", "val": 4.5}, {"name": "Josh Hart", "val": 4.3}, {"name": "Anfernee Simons", "val": 3.9}, {"name": "Brandon Williams", "val": 3.9}, {"name": "Dennis Smith Jr.", "val": 3.6}, {"name": "Keon Johnson", "val": 2.9}, {"name": "Justise Winslow", "val": 2.9}, {"name": "Jusuf Nurkić", "val": 2.8}, {"name": "Norman Powell", "val": 2.1}, {"name": "Larry Nance Jr.", "val": 2.0}, {"name": "Trendon Watford", "val": 1.7}, {"name": "Drew Eubanks", "val": 1.6}, {"name": "CJ Elleby", "val": 1.5}, {"name": "Robert Covington", "val": 1.4}, {"name": "Nassir Little", "val": 1.3}, {"name": "Reggie Perry", "val": 1.3}, {"name": "Cameron McGriff", "val": 1.0}, {"name": "Ben McLemore", "val": 0.9}, {"name": "Cody Zeller", "val": 0.8}, {"name": "Elijah Hughes", "val": 0.7}, {"name": "Greg Brown III", "val": 0.7}, {"name": "Didi Louzada", "val": 0.6}, {"name": "Keljin Blevins", "val": 0.6}, {"name": "Tony Snell", "val": 0.5}, {"name": "Jarron Cumberland", "val": 0.3}] },
      stl: { name: "Kris Dunn", val: 1.6, all: [{"name": "Kris Dunn", "val": 1.6}, {"name": "Robert Covington", "val": 1.5}, {"name": "Justise Winslow", "val": 1.3}, {"name": "Josh Hart", "val": 1.2}, {"name": "Dennis Smith Jr.", "val": 1.2}, {"name": "Jusuf Nurkić", "val": 1.1}, {"name": "Larry Nance Jr.", "val": 1.0}, {"name": "Norman Powell", "val": 1.0}, {"name": "Brandon Williams", "val": 1.0}, {"name": "Reggie Perry", "val": 1.0}, {"name": "Keon Johnson", "val": 1.0}, {"name": "CJ McCollum", "val": 1.0}, {"name": "Drew Eubanks", "val": 0.8}, {"name": "Ben McLemore", "val": 0.6}, {"name": "Damian Lillard", "val": 0.6}, {"name": "CJ Elleby", "val": 0.6}, {"name": "Nassir Little", "val": 0.6}, {"name": "Trendon Watford", "val": 0.5}, {"name": "Anfernee Simons", "val": 0.5}, {"name": "Elijah Hughes", "val": 0.5}, {"name": "Greg Brown III", "val": 0.5}, {"name": "Keljin Blevins", "val": 0.4}, {"name": "Didi Louzada", "val": 0.3}, {"name": "Cody Zeller", "val": 0.3}, {"name": "Tony Snell", "val": 0.2}, {"name": "Cameron McGriff", "val": 0.0}, {"name": "Jarron Cumberland", "val": 0.0}] },
      blk: { name: "Robert Covington", val: 1.3, all: [{"name": "Robert Covington", "val": 1.3}, {"name": "Nassir Little", "val": 0.9}, {"name": "Reggie Perry", "val": 0.7}, {"name": "Trendon Watford", "val": 0.6}, {"name": "Jusuf Nurkić", "val": 0.6}, {"name": "Justise Winslow", "val": 0.6}, {"name": "CJ McCollum", "val": 0.6}, {"name": "Keon Johnson", "val": 0.5}, {"name": "Greg Brown III", "val": 0.5}, {"name": "Drew Eubanks", "val": 0.5}, {"name": "Damian Lillard", "val": 0.4}, {"name": "Larry Nance Jr.", "val": 0.4}, {"name": "Brandon Williams", "val": 0.4}, {"name": "Norman Powell", "val": 0.4}, {"name": "CJ Elleby", "val": 0.3}, {"name": "Didi Louzada", "val": 0.3}, {"name": "Dennis Smith Jr.", "val": 0.3}, {"name": "Cameron McGriff", "val": 0.3}, {"name": "Elijah Hughes", "val": 0.3}, {"name": "Kris Dunn", "val": 0.2}, {"name": "Ben McLemore", "val": 0.2}, {"name": "Josh Hart", "val": 0.2}, {"name": "Tony Snell", "val": 0.2}, {"name": "Cody Zeller", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Keljin Blevins", "val": 0.0}, {"name": "Jarron Cumberland", "val": 0.0}] },
    },
    avail: [
      { name: "Ben McLemore", g: 64 },
      { name: "CJ Elleby", g: 58 },
      { name: "Anfernee Simons", g: 57 },
      { name: "Jusuf Nurkić", g: 56 },
      { name: "Robert Covington", g: 48 },
      { name: "Greg Brown III", g: 48 },
      { name: "Trendon Watford", g: 48 },
      { name: "Nassir Little", g: 42 },
      { name: "Norman Powell", g: 40 },
      { name: "Tony Snell", g: 38 },
      { name: "Larry Nance Jr.", g: 37 },
      { name: "Dennis Smith Jr.", g: 37 },
      { name: "CJ McCollum", g: 36 },
      { name: "Keljin Blevins", g: 31 },
      { name: "Damian Lillard", g: 29 },
      { name: "Cody Zeller", g: 27 },
      { name: "Brandon Williams", g: 24 },
      { name: "Keon Johnson", g: 22 },
      { name: "Elijah Hughes", g: 22 },
      { name: "Drew Eubanks", g: 22 },
      { name: "Kris Dunn", g: 14 },
      { name: "Josh Hart", g: 13 },
      { name: "Justise Winslow", g: 11 },
      { name: "Reggie Perry", g: 9 },
      { name: "Didi Louzada", g: 7 },
      { name: "Cameron McGriff", g: 3 },
      { name: "Jarron Cumberland", g: 3 },
    ]
  },

  "2022-23": {
    w: 33, l: 49,
    topW:   { pts: 135, opp: 106, against: "Detroit Pistons" },
    worstL: { pts: 101, opp: 157, against: "Golden State Warriors" },
    conf_rank: 13,
    games: buildGames(
      "WWWWLWLWLWWWLWLLLLWLLLWWLWWWLWLLLWLWLLLLLWWLLLWWLWWWLLWLWLLWLLLWWLLLLLLWLLLLLWLLLL",
      ["Sacramento Kings", "Phoenix Suns", "Los Angeles Lakers", "Denver Nuggets", "Miami Heat", "Houston Rockets", "Memphis Grizzlies", "Phoenix Suns", "Phoenix Suns", "Miami Heat", "Charlotte Hornets", "New Orleans Pelicans", "Dallas Mavericks", "San Antonio Spurs", "Brooklyn Nets", "Utah Jazz", "Milwaukee Bucks", "Cleveland Cavaliers", "New York Knicks", "Brooklyn Nets", "Los Angeles Clippers", "Los Angeles Lakers", "Utah Jazz", "Indiana Pacers", "Denver Nuggets", "Minnesota Timberwolves", "Minnesota Timberwolves", "San Antonio Spurs", "Dallas Mavericks", "Houston Rockets", "Oklahoma City Thunder", "Oklahoma City Thunder", "Denver Nuggets", "Charlotte Hornets", "Golden State Warriors", "Detroit Pistons", "Minnesota Timberwolves", "Indiana Pacers", "Toronto Raptors", "Orlando Magic", "Cleveland Cavaliers", "Dallas Mavericks", "Dallas Mavericks", "Denver Nuggets", "Philadelphia 76ers", "Los Angeles Lakers", "San Antonio Spurs", "Utah Jazz", "Toronto Raptors", "Atlanta Hawks", "Memphis Grizzlies", "Washington Wizards", "Chicago Bulls", "Milwaukee Bucks", "Golden State Warriors", "Oklahoma City Thunder", "Los Angeles Lakers", "Washington Wizards", "Sacramento Kings", "Houston Rockets", "Golden State Warriors", "New Orleans Pelicans", "Atlanta Hawks", "Orlando Magic", "Detroit Pistons", "Boston Celtics", "Philadelphia 76ers", "New Orleans Pelicans", "New York Knicks", "Boston Celtics", "Los Angeles Clippers", "Utah Jazz", "Chicago Bulls", "Oklahoma City Thunder", "New Orleans Pelicans", "Sacramento Kings", "Sacramento Kings", "Minnesota Timberwolves", "Memphis Grizzlies", "San Antonio Spurs", "Los Angeles Clippers", "Golden State Warriors"],
      [115, 113, 106, 135, 98, 125, 106, 108, 82, 110, 105, 106, 112, 117, 107, 113, 111, 96, 132, 97, 112, 109, 116, 116, 120, 124, 133, 128, 110, 107, 121, 98, 107, 124, 112, 135, 106, 99, 105, 106, 113, 136, 140, 113, 95, 112, 147, 134, 105, 129, 122, 124, 121, 108, 125, 129, 127, 101, 116, 131, 105, 110, 111, 122, 110, 93, 119, 110, 107, 112, 102, 127, 96, 112, 90, 80, 114, 107, 109, 127, 125, 101],
      [7, 2, 2, 25, -21, 14, -5, 2, -20, 3, 10, 11, -5, 7, -2, -5, -8, -18, 3, -14, -6, -19, 5, 16, -1, 6, 21, 16, -20, 12, -2, -3, -13, 11, -6, 29, -7, -9, -12, -3, -6, 17, 17, -9, -10, -9, 20, 10, -18, 4, 10, 8, -8, -19, 3, -9, 12, -25, -17, 17, -18, -11, -18, 3, 6, -22, -1, -17, -16, -14, -15, 12, -28, -6, -34, -40, -24, 2, -10, -2, -11, -56]
    ),
    leaders: {
      pts: { name: "Damian Lillard", val: 32.2, all: [{"name": "Damian Lillard", "val": 32.2}, {"name": "Anfernee Simons", "val": 21.1}, {"name": "Jerami Grant", "val": 20.5}, {"name": "Skylar Mays", "val": 15.3}, {"name": "Jusuf Nurkić", "val": 13.3}, {"name": "Cam Reddish", "val": 11.0}, {"name": "Nate Williams", "val": 10.6}, {"name": "Shaedon Sharpe", "val": 9.9}, {"name": "Josh Hart", "val": 9.5}, {"name": "Shaquille Harrison", "val": 8.8}, {"name": "Kevin Knox", "val": 8.5}, {"name": "Matisse Thybulle", "val": 7.4}, {"name": "Trendon Watford", "val": 7.4}, {"name": "Chance Comanche", "val": 7.0}, {"name": "Justise Winslow", "val": 6.8}, {"name": "Drew Eubanks", "val": 6.6}, {"name": "Nassir Little", "val": 6.6}, {"name": "Keon Johnson", "val": 4.7}, {"name": "Justin Minaya", "val": 4.3}, {"name": "Gary Payton II", "val": 4.1}, {"name": "Jabari Walker", "val": 3.9}, {"name": "Ryan Arcidiacono", "val": 2.6}, {"name": "John Butler", "val": 2.4}, {"name": "Greg Brown III", "val": 1.8}] },
      reb: { name: "Jusuf Nurkić", val: 9.1, all: [{"name": "Jusuf Nurkić", "val": 9.1}, {"name": "Josh Hart", "val": 8.2}, {"name": "Drew Eubanks", "val": 5.4}, {"name": "Justise Winslow", "val": 5.0}, {"name": "Damian Lillard", "val": 4.8}, {"name": "Jerami Grant", "val": 4.5}, {"name": "Shaquille Harrison", "val": 4.4}, {"name": "Trendon Watford", "val": 3.8}, {"name": "Justin Minaya", "val": 3.8}, {"name": "Matisse Thybulle", "val": 3.5}, {"name": "Kevin Knox", "val": 3.3}, {"name": "Skylar Mays", "val": 3.2}, {"name": "Chance Comanche", "val": 3.0}, {"name": "Shaedon Sharpe", "val": 3.0}, {"name": "Nate Williams", "val": 3.0}, {"name": "Cam Reddish", "val": 2.9}, {"name": "Nassir Little", "val": 2.6}, {"name": "Anfernee Simons", "val": 2.6}, {"name": "Gary Payton II", "val": 2.6}, {"name": "Jabari Walker", "val": 2.3}, {"name": "Ryan Arcidiacono", "val": 1.2}, {"name": "Greg Brown III", "val": 1.2}, {"name": "Keon Johnson", "val": 1.1}, {"name": "John Butler", "val": 0.9}] },
      ast: { name: "Skylar Mays", val: 8.3, all: [{"name": "Skylar Mays", "val": 8.3}, {"name": "Damian Lillard", "val": 7.3}, {"name": "Shaquille Harrison", "val": 6.0}, {"name": "Anfernee Simons", "val": 4.1}, {"name": "Josh Hart", "val": 3.9}, {"name": "Justise Winslow", "val": 3.4}, {"name": "Jusuf Nurkić", "val": 2.9}, {"name": "Jerami Grant", "val": 2.4}, {"name": "Ryan Arcidiacono", "val": 2.3}, {"name": "Trendon Watford", "val": 2.1}, {"name": "Nate Williams", "val": 2.0}, {"name": "Cam Reddish", "val": 1.9}, {"name": "Gary Payton II", "val": 1.5}, {"name": "Keon Johnson", "val": 1.5}, {"name": "Matisse Thybulle", "val": 1.4}, {"name": "Drew Eubanks", "val": 1.3}, {"name": "Shaedon Sharpe", "val": 1.2}, {"name": "Justin Minaya", "val": 1.0}, {"name": "Kevin Knox", "val": 0.9}, {"name": "Nassir Little", "val": 0.9}, {"name": "John Butler", "val": 0.6}, {"name": "Jabari Walker", "val": 0.6}, {"name": "Greg Brown III", "val": 0.2}, {"name": "Chance Comanche", "val": 0.0}] },
      stl: { name: "Shaquille Harrison", val: 2.2, all: [{"name": "Shaquille Harrison", "val": 2.2}, {"name": "Matisse Thybulle", "val": 1.7}, {"name": "Cam Reddish", "val": 1.2}, {"name": "Josh Hart", "val": 1.1}, {"name": "Gary Payton II", "val": 1.1}, {"name": "Skylar Mays", "val": 1.0}, {"name": "Justise Winslow", "val": 1.0}, {"name": "Damian Lillard", "val": 0.9}, {"name": "Jusuf Nurkić", "val": 0.8}, {"name": "Jerami Grant", "val": 0.8}, {"name": "Anfernee Simons", "val": 0.7}, {"name": "Nate Williams", "val": 0.6}, {"name": "Trendon Watford", "val": 0.5}, {"name": "Keon Johnson", "val": 0.5}, {"name": "Kevin Knox", "val": 0.5}, {"name": "Shaedon Sharpe", "val": 0.5}, {"name": "Drew Eubanks", "val": 0.5}, {"name": "Justin Minaya", "val": 0.5}, {"name": "Nassir Little", "val": 0.4}, {"name": "John Butler", "val": 0.4}, {"name": "Ryan Arcidiacono", "val": 0.3}, {"name": "Greg Brown III", "val": 0.3}, {"name": "Jabari Walker", "val": 0.2}, {"name": "Chance Comanche", "val": 0.0}] },
      blk: { name: "Drew Eubanks", val: 1.3, all: [{"name": "Drew Eubanks", "val": 1.3}, {"name": "Justin Minaya", "val": 1.3}, {"name": "Chance Comanche", "val": 1.0}, {"name": "Jerami Grant", "val": 0.8}, {"name": "Matisse Thybulle", "val": 0.8}, {"name": "Jusuf Nurkić", "val": 0.8}, {"name": "John Butler", "val": 0.5}, {"name": "Nassir Little", "val": 0.4}, {"name": "Justise Winslow", "val": 0.4}, {"name": "Nate Williams", "val": 0.4}, {"name": "Shaquille Harrison", "val": 0.4}, {"name": "Damian Lillard", "val": 0.3}, {"name": "Shaedon Sharpe", "val": 0.3}, {"name": "Cam Reddish", "val": 0.3}, {"name": "Greg Brown III", "val": 0.3}, {"name": "Skylar Mays", "val": 0.2}, {"name": "Trendon Watford", "val": 0.2}, {"name": "Josh Hart", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.2}, {"name": "Jabari Walker", "val": 0.2}, {"name": "Keon Johnson", "val": 0.2}, {"name": "Gary Payton II", "val": 0.1}, {"name": "Kevin Knox", "val": 0.0}, {"name": "Ryan Arcidiacono", "val": 0.0}] },
    },
    avail: [
      { name: "Shaedon Sharpe", g: 80 },
      { name: "Drew Eubanks", g: 78 },
      { name: "Jerami Grant", g: 63 },
      { name: "Anfernee Simons", g: 62 },
      { name: "Trendon Watford", g: 62 },
      { name: "Damian Lillard", g: 58 },
      { name: "Jabari Walker", g: 56 },
      { name: "Nassir Little", g: 54 },
      { name: "Jusuf Nurkić", g: 52 },
      { name: "Josh Hart", g: 51 },
      { name: "Keon Johnson", g: 40 },
      { name: "Justise Winslow", g: 29 },
      { name: "Matisse Thybulle", g: 22 },
      { name: "Kevin Knox", g: 21 },
      { name: "Cam Reddish", g: 20 },
      { name: "John Butler", g: 19 },
      { name: "Greg Brown III", g: 16 },
      { name: "Gary Payton II", g: 15 },
      { name: "Ryan Arcidiacono", g: 9 },
      { name: "Skylar Mays", g: 6 },
      { name: "Shaquille Harrison", g: 5 },
      { name: "Nate Williams", g: 5 },
      { name: "Justin Minaya", g: 4 },
      { name: "Chance Comanche", g: 1 },
    ]
  },

  "2023-24": {
    w: 21, l: 61,
    topW:   { pts: 122, opp: 92, against: "Memphis Grizzlies" },
    worstL: { pts: 77, opp: 139, against: "Oklahoma City Thunder" },
    conf_rank: 15,
    games: buildGames(
      "LLLWWWLLLLLLLLWLWWLLLLLLLWLLWLWLLLWLLLLWWLLWLLWWLLLLLLLLLWWLLLWLWLLLLLLLLLLWWLLLLL",
      ["Los Angeles Clippers", "Orlando Magic", "Philadelphia 76ers", "Toronto Raptors", "Detroit Pistons", "Memphis Grizzlies", "Memphis Grizzlies", "Sacramento Kings", "Los Angeles Lakers", "Utah Jazz", "Cleveland Cavaliers", "Los Angeles Lakers", "Oklahoma City Thunder", "Phoenix Suns", "Utah Jazz", "Milwaukee Bucks", "Indiana Pacers", "Cleveland Cavaliers", "Utah Jazz", "Golden State Warriors", "Dallas Mavericks", "Los Angeles Clippers", "Utah Jazz", "Dallas Mavericks", "Golden State Warriors", "Phoenix Suns", "Washington Wizards", "Golden State Warriors", "Sacramento Kings", "San Antonio Spurs", "San Antonio Spurs", "Phoenix Suns", "Dallas Mavericks", "Dallas Mavericks", "Brooklyn Nets", "New York Knicks", "Oklahoma City Thunder", "Minnesota Timberwolves", "Phoenix Suns", "Brooklyn Nets", "Indiana Pacers", "Los Angeles Lakers", "Oklahoma City Thunder", "Houston Rockets", "San Antonio Spurs", "Chicago Bulls", "Philadelphia 76ers", "Milwaukee Bucks", "Denver Nuggets", "Denver Nuggets", "Detroit Pistons", "New Orleans Pelicans", "Minnesota Timberwolves", "Minnesota Timberwolves", "Denver Nuggets", "Charlotte Hornets", "Miami Heat", "Memphis Grizzlies", "Memphis Grizzlies", "Minnesota Timberwolves", "Oklahoma City Thunder", "Houston Rockets", "Toronto Raptors", "Boston Celtics", "Atlanta Hawks", "New York Knicks", "New Orleans Pelicans", "Chicago Bulls", "Los Angeles Clippers", "Los Angeles Clippers", "Denver Nuggets", "Houston Rockets", "Atlanta Hawks", "Miami Heat", "Orlando Magic", "Charlotte Hornets", "Washington Wizards", "Boston Celtics", "New Orleans Pelicans", "Golden State Warriors", "Houston Rockets", "Sacramento Kings"],
      [111, 97, 98, 99, 110, 115, 100, 118, 110, 99, 95, 95, 91, 107, 121, 102, 114, 103, 113, 106, 112, 127, 114, 120, 114, 109, 117, 106, 130, 105, 134, 88, 97, 103, 134, 84, 77, 93, 116, 105, 118, 110, 109, 137, 100, 96, 130, 119, 108, 103, 122, 84, 109, 91, 112, 80, 96, 122, 107, 114, 120, 107, 128, 99, 106, 93, 107, 107, 103, 117, 111, 92, 106, 82, 103, 89, 108, 107, 100, 92, 107, 82],
      [-12, -5, -28, 8, 9, 2, -12, -3, -6, -16, -14, -12, -43, -13, 16, -6, 4, 8, -5, -4, -13, -5, -8, -11, -4, 5, -1, -20, 17, -13, 6, -21, -29, -36, 7, -28, -62, -23, -11, 2, 3, -24, -2, 6, -16, -8, 26, 3, -12, -9, -6, -9, -12, -37, -15, -13, -10, 30, 7, -5, -8, -16, 10, -22, 4, -12, -19, -3, -13, -8, -3, -18, -14, -60, -1, 3, 6, -17, -10, -8, -9, -39]
    ),
    leaders: {
      pts: { name: "Anfernee Simons", val: 22.6, all: [{"name": "Anfernee Simons", "val": 22.6}, {"name": "Jerami Grant", "val": 21.0}, {"name": "Deandre Ayton", "val": 16.7}, {"name": "Dalano Banton", "val": 16.7}, {"name": "Shaedon Sharpe", "val": 15.9}, {"name": "Malcolm Brogdon", "val": 15.7}, {"name": "Scoot Henderson", "val": 14.0}, {"name": "Duop Reath", "val": 9.1}, {"name": "Jabari Walker", "val": 8.9}, {"name": "Toumani Camara", "val": 7.5}, {"name": "Robert Williams", "val": 6.8}, {"name": "Skylar Mays", "val": 6.3}, {"name": "Kris Murray", "val": 6.1}, {"name": "Matisse Thybulle", "val": 5.4}, {"name": "Taze Moore", "val": 4.5}, {"name": "Ashton Hagans", "val": 4.2}, {"name": "Rayan Rupert", "val": 4.0}, {"name": "Moses Brown", "val": 3.4}, {"name": "Ish Wainright", "val": 2.9}, {"name": "Justin Minaya", "val": 1.8}, {"name": "Jamaree Bouyea", "val": 1.7}, {"name": "Ibou Badji", "val": 1.5}] },
      reb: { name: "Deandre Ayton", val: 11.1, all: [{"name": "Deandre Ayton", "val": 11.1}, {"name": "Jabari Walker", "val": 7.1}, {"name": "Robert Williams", "val": 6.3}, {"name": "Shaedon Sharpe", "val": 5.0}, {"name": "Toumani Camara", "val": 4.9}, {"name": "Dalano Banton", "val": 4.8}, {"name": "Moses Brown", "val": 3.9}, {"name": "Malcolm Brogdon", "val": 3.8}, {"name": "Duop Reath", "val": 3.7}, {"name": "Kris Murray", "val": 3.6}, {"name": "Anfernee Simons", "val": 3.6}, {"name": "Jerami Grant", "val": 3.5}, {"name": "Scoot Henderson", "val": 3.1}, {"name": "Ashton Hagans", "val": 2.4}, {"name": "Rayan Rupert", "val": 2.4}, {"name": "Ibou Badji", "val": 2.3}, {"name": "Matisse Thybulle", "val": 2.1}, {"name": "Taze Moore", "val": 2.0}, {"name": "Skylar Mays", "val": 1.8}, {"name": "Jamaree Bouyea", "val": 1.7}, {"name": "Justin Minaya", "val": 1.6}, {"name": "Ish Wainright", "val": 1.3}] },
      ast: { name: "Anfernee Simons", val: 5.5, all: [{"name": "Anfernee Simons", "val": 5.5}, {"name": "Malcolm Brogdon", "val": 5.5}, {"name": "Scoot Henderson", "val": 5.4}, {"name": "Dalano Banton", "val": 3.6}, {"name": "Skylar Mays", "val": 3.6}, {"name": "Shaedon Sharpe", "val": 2.9}, {"name": "Jerami Grant", "val": 2.8}, {"name": "Ashton Hagans", "val": 2.8}, {"name": "Deandre Ayton", "val": 1.6}, {"name": "Rayan Rupert", "val": 1.6}, {"name": "Matisse Thybulle", "val": 1.4}, {"name": "Jamaree Bouyea", "val": 1.3}, {"name": "Kris Murray", "val": 1.3}, {"name": "Taze Moore", "val": 1.3}, {"name": "Toumani Camara", "val": 1.2}, {"name": "Duop Reath", "val": 1.0}, {"name": "Jabari Walker", "val": 1.0}, {"name": "Robert Williams", "val": 0.8}, {"name": "Ibou Badji", "val": 0.6}, {"name": "Justin Minaya", "val": 0.6}, {"name": "Moses Brown", "val": 0.3}, {"name": "Ish Wainright", "val": 0.0}] },
      stl: { name: "Matisse Thybulle", val: 1.7, all: [{"name": "Matisse Thybulle", "val": 1.7}, {"name": "Robert Williams", "val": 1.2}, {"name": "Deandre Ayton", "val": 1.0}, {"name": "Shaedon Sharpe", "val": 0.9}, {"name": "Dalano Banton", "val": 0.9}, {"name": "Toumani Camara", "val": 0.9}, {"name": "Kris Murray", "val": 0.9}, {"name": "Scoot Henderson", "val": 0.8}, {"name": "Jerami Grant", "val": 0.8}, {"name": "Malcolm Brogdon", "val": 0.7}, {"name": "Skylar Mays", "val": 0.7}, {"name": "Ashton Hagans", "val": 0.6}, {"name": "Jabari Walker", "val": 0.6}, {"name": "Taze Moore", "val": 0.5}, {"name": "Anfernee Simons", "val": 0.5}, {"name": "Duop Reath", "val": 0.5}, {"name": "Rayan Rupert", "val": 0.3}, {"name": "Justin Minaya", "val": 0.3}, {"name": "Ish Wainright", "val": 0.3}, {"name": "Moses Brown", "val": 0.2}, {"name": "Ibou Badji", "val": 0.1}, {"name": "Jamaree Bouyea", "val": 0.0}] },
      blk: { name: "Robert Williams", val: 1.2, all: [{"name": "Robert Williams", "val": 1.2}, {"name": "Ibou Badji", "val": 0.9}, {"name": "Deandre Ayton", "val": 0.8}, {"name": "Matisse Thybulle", "val": 0.8}, {"name": "Dalano Banton", "val": 0.6}, {"name": "Jerami Grant", "val": 0.6}, {"name": "Duop Reath", "val": 0.6}, {"name": "Toumani Camara", "val": 0.5}, {"name": "Ashton Hagans", "val": 0.5}, {"name": "Shaedon Sharpe", "val": 0.4}, {"name": "Justin Minaya", "val": 0.3}, {"name": "Jabari Walker", "val": 0.3}, {"name": "Kris Murray", "val": 0.3}, {"name": "Moses Brown", "val": 0.3}, {"name": "Malcolm Brogdon", "val": 0.2}, {"name": "Scoot Henderson", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Rayan Rupert", "val": 0.1}, {"name": "Skylar Mays", "val": 0.1}, {"name": "Ish Wainright", "val": 0.1}, {"name": "Taze Moore", "val": 0.0}, {"name": "Jamaree Bouyea", "val": 0.0}] },
    },
    avail: [
      { name: "Jabari Walker", g: 72 },
      { name: "Toumani Camara", g: 70 },
      { name: "Duop Reath", g: 68 },
      { name: "Matisse Thybulle", g: 65 },
      { name: "Kris Murray", g: 62 },
      { name: "Scoot Henderson", g: 62 },
      { name: "Deandre Ayton", g: 55 },
      { name: "Jerami Grant", g: 54 },
      { name: "Anfernee Simons", g: 46 },
      { name: "Malcolm Brogdon", g: 39 },
      { name: "Rayan Rupert", g: 39 },
      { name: "Justin Minaya", g: 34 },
      { name: "Shaedon Sharpe", g: 32 },
      { name: "Dalano Banton", g: 30 },
      { name: "Moses Brown", g: 22 },
      { name: "Ibou Badji", g: 22 },
      { name: "Skylar Mays", g: 21 },
      { name: "Ashton Hagans", g: 19 },
      { name: "Ish Wainright", g: 7 },
      { name: "Jamaree Bouyea", g: 6 },
      { name: "Robert Williams", g: 6 },
      { name: "Taze Moore", g: 4 },
    ]
  },

  "2024-25": {
    w: 36, l: 46,
    topW:   { pts: 141, opp: 88, against: "Charlotte Hornets" },
    worstL: { pts: 89, opp: 134, against: "Memphis Grizzlies" },
    conf_rank: 12,
    games: buildGames(
      "LLWLWLLWLLLWWWLLWLLWLLLLLLWLLWWLLWLWLLLLLWWWWLWWWWWWLLLLWWWWLWLLLLLWWWWLLLLWWLWLLW",
      ["Golden State Warriors", "New Orleans Pelicans", "New Orleans Pelicans", "Sacramento Kings", "Los Angeles Clippers", "Oklahoma City Thunder", "Phoenix Suns", "New Orleans Pelicans", "San Antonio Spurs", "Minnesota Timberwolves", "Memphis Grizzlies", "Minnesota Timberwolves", "Minnesota Timberwolves", "Atlanta Hawks", "Oklahoma City Thunder", "Houston Rockets", "Houston Rockets", "Memphis Grizzlies", "Indiana Pacers", "Sacramento Kings", "Dallas Mavericks", "Los Angeles Clippers", "Utah Jazz", "Los Angeles Lakers", "San Antonio Spurs", "Phoenix Suns", "Denver Nuggets", "San Antonio Spurs", "Dallas Mavericks", "Utah Jazz", "Dallas Mavericks", "Philadelphia 76ers", "Los Angeles Lakers", "Milwaukee Bucks", "Detroit Pistons", "New Orleans Pelicans", "Dallas Mavericks", "Miami Heat", "Brooklyn Nets", "Los Angeles Clippers", "Houston Rockets", "Chicago Bulls", "Miami Heat", "Orlando Magic", "Charlotte Hornets", "Oklahoma City Thunder", "Milwaukee Bucks", "Orlando Magic", "Phoenix Suns", "Phoenix Suns", "Indiana Pacers", "Sacramento Kings", "Minnesota Timberwolves", "Denver Nuggets", "Denver Nuggets", "Los Angeles Lakers", "Charlotte Hornets", "Utah Jazz", "Washington Wizards", "Brooklyn Nets", "Cleveland Cavaliers", "Philadelphia 76ers", "Boston Celtics", "Oklahoma City Thunder", "Detroit Pistons", "Golden State Warriors", "New York Knicks", "Toronto Raptors", "Washington Wizards", "Memphis Grizzlies", "Denver Nuggets", "Boston Celtics", "Cleveland Cavaliers", "Sacramento Kings", "New York Knicks", "Atlanta Hawks", "Toronto Raptors", "Chicago Bulls", "San Antonio Spurs", "Utah Jazz", "Golden State Warriors", "Los Angeles Lakers"],
      [104, 103, 125, 98, 106, 114, 97, 118, 105, 102, 89, 122, 106, 114, 99, 88, 104, 98, 114, 115, 131, 105, 99, 98, 116, 109, 126, 94, 108, 122, 126, 103, 106, 105, 115, 119, 111, 98, 114, 89, 103, 113, 116, 101, 102, 108, 125, 119, 127, 121, 112, 108, 98, 117, 121, 102, 141, 114, 129, 121, 129, 119, 118, 89, 112, 120, 113, 105, 112, 115, 128, 116, 111, 107, 93, 127, 112, 113, 120, 126, 86, 109],
      [-36, -2, 22, -13, 1, -23, -6, 18, -13, -25, -45, 14, 8, 4, -10, -28, 6, -25, -7, 9, -6, -22, -42, -9, -2, -7, 2, -20, -24, 2, 4, -22, -8, 3, -3, 19, -6, -21, -18, -29, -22, 11, 9, 22, 5, -10, 13, 29, 19, 2, 23, 6, -16, -29, -11, -8, 53, 2, 8, 19, -4, 17, -10, -18, -7, -10, -1, 3, 15, 16, 19, -13, -11, -21, -17, 14, 9, -5, 11, -7, -17, 28]
    ),
    leaders: {
      pts: { name: "Anfernee Simons", val: 19.3, all: [{"name": "Anfernee Simons", "val": 19.3}, {"name": "Shaedon Sharpe", "val": 18.5}, {"name": "Deni Avdija", "val": 16.9}, {"name": "Jerami Grant", "val": 14.4}, {"name": "Deandre Ayton", "val": 14.4}, {"name": "Scoot Henderson", "val": 12.7}, {"name": "Toumani Camara", "val": 11.3}, {"name": "Dalano Banton", "val": 8.3}, {"name": "Matisse Thybulle", "val": 7.5}, {"name": "Donovan Clingan", "val": 6.5}, {"name": "Robert Williams", "val": 5.8}, {"name": "Jabari Walker", "val": 5.2}, {"name": "Kris Murray", "val": 4.2}, {"name": "Duop Reath", "val": 4.2}, {"name": "Taze Moore", "val": 3.0}, {"name": "Rayan Rupert", "val": 3.0}, {"name": "Sidy Cissoko", "val": 2.0}, {"name": "Bryce McGowens", "val": 1.0}, {"name": "Justin Minaya", "val": 0.9}] },
      reb: { name: "Deandre Ayton", val: 10.2, all: [{"name": "Deandre Ayton", "val": 10.2}, {"name": "Donovan Clingan", "val": 7.9}, {"name": "Deni Avdija", "val": 7.3}, {"name": "Robert Williams", "val": 5.9}, {"name": "Toumani Camara", "val": 5.8}, {"name": "Shaedon Sharpe", "val": 4.5}, {"name": "Taze Moore", "val": 4.0}, {"name": "Matisse Thybulle", "val": 3.5}, {"name": "Jerami Grant", "val": 3.5}, {"name": "Jabari Walker", "val": 3.5}, {"name": "Scoot Henderson", "val": 3.0}, {"name": "Anfernee Simons", "val": 2.7}, {"name": "Kris Murray", "val": 2.6}, {"name": "Sidy Cissoko", "val": 2.2}, {"name": "Dalano Banton", "val": 2.0}, {"name": "Duop Reath", "val": 2.0}, {"name": "Rayan Rupert", "val": 1.3}, {"name": "Justin Minaya", "val": 0.5}, {"name": "Bryce McGowens", "val": 0.2}] },
      ast: { name: "Scoot Henderson", val: 5.1, all: [{"name": "Scoot Henderson", "val": 5.1}, {"name": "Anfernee Simons", "val": 4.8}, {"name": "Deni Avdija", "val": 3.9}, {"name": "Shaedon Sharpe", "val": 2.8}, {"name": "Dalano Banton", "val": 2.4}, {"name": "Toumani Camara", "val": 2.2}, {"name": "Jerami Grant", "val": 2.1}, {"name": "Matisse Thybulle", "val": 1.9}, {"name": "Sidy Cissoko", "val": 1.8}, {"name": "Deandre Ayton", "val": 1.6}, {"name": "Robert Williams", "val": 1.1}, {"name": "Donovan Clingan", "val": 1.1}, {"name": "Kris Murray", "val": 1.0}, {"name": "Jabari Walker", "val": 0.6}, {"name": "Duop Reath", "val": 0.6}, {"name": "Taze Moore", "val": 0.5}, {"name": "Rayan Rupert", "val": 0.5}, {"name": "Justin Minaya", "val": 0.4}, {"name": "Bryce McGowens", "val": 0.2}] },
      stl: { name: "Matisse Thybulle", val: 2.2, all: [{"name": "Matisse Thybulle", "val": 2.2}, {"name": "Toumani Camara", "val": 1.5}, {"name": "Deni Avdija", "val": 1.0}, {"name": "Scoot Henderson", "val": 1.0}, {"name": "Taze Moore", "val": 1.0}, {"name": "Anfernee Simons", "val": 0.9}, {"name": "Jerami Grant", "val": 0.9}, {"name": "Shaedon Sharpe", "val": 0.9}, {"name": "Deandre Ayton", "val": 0.8}, {"name": "Robert Williams", "val": 0.7}, {"name": "Dalano Banton", "val": 0.6}, {"name": "Jabari Walker", "val": 0.6}, {"name": "Kris Murray", "val": 0.5}, {"name": "Donovan Clingan", "val": 0.5}, {"name": "Duop Reath", "val": 0.3}, {"name": "Rayan Rupert", "val": 0.3}, {"name": "Justin Minaya", "val": 0.3}, {"name": "Sidy Cissoko", "val": 0.2}, {"name": "Bryce McGowens", "val": 0.1}] },
      blk: { name: "Robert Williams", val: 1.7, all: [{"name": "Robert Williams", "val": 1.7}, {"name": "Donovan Clingan", "val": 1.6}, {"name": "Jerami Grant", "val": 1.0}, {"name": "Deandre Ayton", "val": 1.0}, {"name": "Matisse Thybulle", "val": 0.6}, {"name": "Toumani Camara", "val": 0.6}, {"name": "Deni Avdija", "val": 0.5}, {"name": "Dalano Banton", "val": 0.5}, {"name": "Duop Reath", "val": 0.3}, {"name": "Scoot Henderson", "val": 0.2}, {"name": "Shaedon Sharpe", "val": 0.2}, {"name": "Kris Murray", "val": 0.2}, {"name": "Sidy Cissoko", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.1}, {"name": "Jabari Walker", "val": 0.1}, {"name": "Rayan Rupert", "val": 0.1}, {"name": "Justin Minaya", "val": 0.1}, {"name": "Taze Moore", "val": 0.0}, {"name": "Bryce McGowens", "val": 0.0}] },
    },
    avail: [
      { name: "Toumani Camara", g: 78 },
      { name: "Shaedon Sharpe", g: 72 },
      { name: "Deni Avdija", g: 72 },
      { name: "Anfernee Simons", g: 70 },
      { name: "Kris Murray", g: 69 },
      { name: "Donovan Clingan", g: 67 },
      { name: "Dalano Banton", g: 67 },
      { name: "Scoot Henderson", g: 66 },
      { name: "Jabari Walker", g: 60 },
      { name: "Rayan Rupert", g: 52 },
      { name: "Jerami Grant", g: 47 },
      { name: "Duop Reath", g: 46 },
      { name: "Deandre Ayton", g: 40 },
      { name: "Robert Williams", g: 20 },
      { name: "Justin Minaya", g: 19 },
      { name: "Matisse Thybulle", g: 15 },
      { name: "Bryce McGowens", g: 13 },
      { name: "Sidy Cissoko", g: 5 },
      { name: "Taze Moore", g: 2 },
    ]
  },

  "2025-26": {
    w: 40, l: 39,
    topW:   { pts: 134, opp: 99, against: "Brooklyn Nets" },
    worstL: { pts: 103, opp: 157, against: "Denver Nuggets" },
    conf_rank: 9,
    games: buildGames(
      "LWLWWWLWLLWLLLLWLWLLLWLLLWWWLLLWWLWWWWWLLWWWWLLLLLLWWWLWLWLWLLWLWLWLWWWLWWLWWWL",
      ["Minnesota Timberwolves", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Utah Jazz", "Denver Nuggets", "Los Angeles Lakers", "Oklahoma City Thunder", "Miami Heat", "Orlando Magic", "New Orleans Pelicans", "Houston Rockets", "Dallas Mavericks", "Phoenix Suns", "Chicago Bulls", "Golden State Warriors", "Oklahoma City Thunder", "Milwaukee Bucks", "San Antonio Spurs", "Oklahoma City Thunder", "Toronto Raptors", "Cleveland Cavaliers", "Detroit Pistons", "Memphis Grizzlies", "New Orleans Pelicans", "Golden State Warriors", "Sacramento Kings", "Sacramento Kings", "Detroit Pistons", "Orlando Magic", "Los Angeles Clippers", "Boston Celtics", "Dallas Mavericks", "Oklahoma City Thunder", "New Orleans Pelicans", "San Antonio Spurs", "Utah Jazz", "Houston Rockets", "Houston Rockets", "New York Knicks", "Golden State Warriors", "Atlanta Hawks", "Los Angeles Lakers", "Sacramento Kings", "Miami Heat", "Toronto Raptors", "Boston Celtics", "Washington Wizards", "New York Knicks", "Cleveland Cavaliers", "Phoenix Suns", "Memphis Grizzlies", "Memphis Grizzlies", "Philadelphia 76ers", "Minnesota Timberwolves", "Utah Jazz", "Denver Nuggets", "Phoenix Suns", "Minnesota Timberwolves", "Chicago Bulls", "Charlotte Hornets", "Atlanta Hawks", "Memphis Grizzlies", "Houston Rockets", "Indiana Pacers", "Charlotte Hornets", "Utah Jazz", "Philadelphia 76ers", "Brooklyn Nets", "Indiana Pacers", "Minnesota Timberwolves", "Denver Nuggets", "Brooklyn Nets", "Milwaukee Bucks", "Dallas Mavericks", "Washington Wizards", "Los Angeles Clippers", "New Orleans Pelicans", "Denver Nuggets"],
      [114, 139, 107, 122, 136, 109, 115, 121, 131, 112, 125, 116, 133, 110, 121, 127, 95, 115, 102, 115, 118, 122, 116, 96, 120, 136, 134, 98, 102, 106, 103, 114, 125, 95, 122, 115, 137, 103, 111, 114, 97, 117, 132, 117, 127, 98, 94, 111, 97, 111, 125, 135, 122, 135, 109, 135, 103, 92, 121, 121, 93, 101, 122, 99, 131, 101, 124, 103, 114, 127, 108, 112, 134, 130, 93, 123, 114, 118, 132],
      [-4, 20, -7, 14, 2, 2, -8, 2, -5, -3, 8, -24, -5, -17, -1, 4, -27, 12, -13, -8, -3, 12, -6, -23, -23, 5, 1, 5, -8, -4, -16, 6, 3, -29, 13, 5, 20, 1, 6, -9, -22, 16, 16, 7, 17, -12, -8, -4, -30, -19, -5, 20, 7, 17, -24, 16, -54, 15, -3, 9, -16, -34, 8, -7, 20, -2, 10, -6, 19, 8, 4, -16, 35, 31, -7, 35, 10, 12, -5]
    ),
    leaders: {
      pts: { name: "Deni Avdija", val: 24.0, all: [{"name": "Deni Avdija", "val": 24.0}, {"name": "Shaedon Sharpe", "val": 21.4}, {"name": "Jerami Grant", "val": 18.6}, {"name": "Jrue Holiday", "val": 16.4}, {"name": "Scoot Henderson", "val": 14.2}, {"name": "Toumani Camara", "val": 13.4}, {"name": "Donovan Clingan", "val": 12.1}, {"name": "Caleb Love", "val": 10.8}, {"name": "Vít Krejčí", "val": 7.4}, {"name": "Robert Williams", "val": 6.7}, {"name": "Chris Youngblood", "val": 6.0}, {"name": "Matisse Thybulle", "val": 6.0}, {"name": "Kris Murray", "val": 5.7}, {"name": "Sidy Cissoko", "val": 5.3}, {"name": "Blake Wesley", "val": 5.2}, {"name": "Jayson Kent", "val": 3.3}, {"name": "Rayan Rupert", "val": 2.9}, {"name": "Duop Reath", "val": 2.9}, {"name": "Yang Hansen", "val": 2.3}, {"name": "Javonte Cooke", "val": 1.2}] },
      reb: { name: "Donovan Clingan", val: 11.6, all: [{"name": "Donovan Clingan", "val": 11.6}, {"name": "Deni Avdija", "val": 7.0}, {"name": "Robert Williams", "val": 6.9}, {"name": "Toumani Camara", "val": 5.2}, {"name": "Jrue Holiday", "val": 4.5}, {"name": "Shaedon Sharpe", "val": 4.4}, {"name": "Kris Murray", "val": 3.6}, {"name": "Jerami Grant", "val": 3.5}, {"name": "Vít Krejčí", "val": 2.8}, {"name": "Scoot Henderson", "val": 2.7}, {"name": "Caleb Love", "val": 2.4}, {"name": "Sidy Cissoko", "val": 2.3}, {"name": "Matisse Thybulle", "val": 2.1}, {"name": "Rayan Rupert", "val": 1.8}, {"name": "Yang Hansen", "val": 1.6}, {"name": "Blake Wesley", "val": 1.3}, {"name": "Jayson Kent", "val": 1.3}, {"name": "Duop Reath", "val": 1.2}, {"name": "Javonte Cooke", "val": 1.0}, {"name": "Chris Youngblood", "val": 0.0}] },
      ast: { name: "Deni Avdija", val: 6.7, all: [{"name": "Deni Avdija", "val": 6.7}, {"name": "Jrue Holiday", "val": 6.2}, {"name": "Scoot Henderson", "val": 3.8}, {"name": "Shaedon Sharpe", "val": 2.6}, {"name": "Caleb Love", "val": 2.6}, {"name": "Toumani Camara", "val": 2.4}, {"name": "Blake Wesley", "val": 2.2}, {"name": "Jerami Grant", "val": 2.1}, {"name": "Donovan Clingan", "val": 2.1}, {"name": "Vít Krejčí", "val": 1.8}, {"name": "Sidy Cissoko", "val": 1.5}, {"name": "Kris Murray", "val": 1.4}, {"name": "Robert Williams", "val": 1.0}, {"name": "Matisse Thybulle", "val": 1.0}, {"name": "Chris Youngblood", "val": 1.0}, {"name": "Rayan Rupert", "val": 0.7}, {"name": "Yang Hansen", "val": 0.5}, {"name": "Javonte Cooke", "val": 0.4}, {"name": "Duop Reath", "val": 0.3}, {"name": "Jayson Kent", "val": 0.0}] },
      stl: { name: "Matisse Thybulle", val: 2.0, all: [{"name": "Matisse Thybulle", "val": 2.0}, {"name": "Shaedon Sharpe", "val": 1.4}, {"name": "Toumani Camara", "val": 1.1}, {"name": "Jrue Holiday", "val": 1.1}, {"name": "Kris Murray", "val": 0.9}, {"name": "Deni Avdija", "val": 0.8}, {"name": "Sidy Cissoko", "val": 0.7}, {"name": "Scoot Henderson", "val": 0.7}, {"name": "Jerami Grant", "val": 0.7}, {"name": "Caleb Love", "val": 0.6}, {"name": "Vít Krejčí", "val": 0.6}, {"name": "Donovan Clingan", "val": 0.6}, {"name": "Robert Williams", "val": 0.6}, {"name": "Blake Wesley", "val": 0.6}, {"name": "Rayan Rupert", "val": 0.6}, {"name": "Jayson Kent", "val": 0.3}, {"name": "Javonte Cooke", "val": 0.3}, {"name": "Duop Reath", "val": 0.2}, {"name": "Yang Hansen", "val": 0.1}, {"name": "Chris Youngblood", "val": 0.0}] },
      blk: { name: "Donovan Clingan", val: 1.7, all: [{"name": "Donovan Clingan", "val": 1.7}, {"name": "Robert Williams", "val": 1.5}, {"name": "Deni Avdija", "val": 0.6}, {"name": "Jerami Grant", "val": 0.6}, {"name": "Matisse Thybulle", "val": 0.5}, {"name": "Toumani Camara", "val": 0.4}, {"name": "Kris Murray", "val": 0.4}, {"name": "Jayson Kent", "val": 0.3}, {"name": "Duop Reath", "val": 0.3}, {"name": "Sidy Cissoko", "val": 0.3}, {"name": "Vít Krejčí", "val": 0.3}, {"name": "Scoot Henderson", "val": 0.3}, {"name": "Blake Wesley", "val": 0.2}, {"name": "Yang Hansen", "val": 0.2}, {"name": "Caleb Love", "val": 0.1}, {"name": "Jrue Holiday", "val": 0.1}, {"name": "Shaedon Sharpe", "val": 0.1}, {"name": "Rayan Rupert", "val": 0.0}, {"name": "Chris Youngblood", "val": 0.0}, {"name": "Javonte Cooke", "val": 0.0}] },
    },
    avail: [
      { name: "Toumani Camara", g: 79 },
      { name: "Donovan Clingan", g: 74 },
      { name: "Sidy Cissoko", g: 72 },
      { name: "Deni Avdija", g: 63 },
      { name: "Jerami Grant", g: 57 },
      { name: "Robert Williams", g: 56 },
      { name: "Kris Murray", g: 54 },
      { name: "Jrue Holiday", g: 50 },
      { name: "Shaedon Sharpe", g: 48 },
      { name: "Rayan Rupert", g: 48 },
      { name: "Caleb Love", g: 47 },
      { name: "Yang Hansen", g: 41 },
      { name: "Duop Reath", g: 32 },
      { name: "Blake Wesley", g: 28 },
      { name: "Scoot Henderson", g: 27 },
      { name: "Matisse Thybulle", g: 27 },
      { name: "Javonte Cooke", g: 19 },
      { name: "Vít Krejčí", g: 18 },
      { name: "Jayson Kent", g: 3 },
      { name: "Chris Youngblood", g: 1 },
    ]
  },

};
