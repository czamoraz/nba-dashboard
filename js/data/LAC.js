/* ================================================================
   LAC.js — Los Angeles Clippers · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Los Angeles Clippers",
  abbr:          "LAC",
  conference:    "West",
  primaryColor:  "#C8102E",
  secondaryColor:"#1D428A",
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
    w: 47, l: 25,
    topW:   { pts: 138, opp: 100, against: "Sacramento Kings" },
    worstL: { pts: 73, opp: 124, against: "Dallas Mavericks" },
    conf_rank: 4,
    games: buildGames(
      "WWLWWLWLWLWWWWWWWLWWWLWLLWWWWLWLWLWLLLWLWLWWWWWWLLWWWWWWWLWWWWLLLWWLWWLL",
      ["Los Angeles Lakers", "Denver Nuggets", "Dallas Mavericks", "Minnesota Timberwolves", "Portland Trail Blazers", "Utah Jazz", "Phoenix Suns", "San Antonio Spurs", "Golden State Warriors", "Golden State Warriors", "Chicago Bulls", "New Orleans Pelicans", "Sacramento Kings", "Indiana Pacers", "Sacramento Kings", "Oklahoma City Thunder", "Oklahoma City Thunder", "Atlanta Hawks", "Miami Heat", "Orlando Magic", "New York Knicks", "Brooklyn Nets", "Cleveland Cavaliers", "Boston Celtics", "Sacramento Kings", "Minnesota Timberwolves", "Chicago Bulls", "Cleveland Cavaliers", "Miami Heat", "Utah Jazz", "Utah Jazz", "Brooklyn Nets", "Washington Wizards", "Memphis Grizzlies", "Memphis Grizzlies", "Milwaukee Bucks", "Boston Celtics", "Washington Wizards", "Golden State Warriors", "New Orleans Pelicans", "Dallas Mavericks", "Dallas Mavericks", "Charlotte Hornets", "Atlanta Hawks", "San Antonio Spurs", "San Antonio Spurs", "Philadelphia 76ers", "Milwaukee Bucks", "Orlando Magic", "Denver Nuggets", "Los Angeles Lakers", "Portland Trail Blazers", "Phoenix Suns", "Houston Rockets", "Detroit Pistons", "Indiana Pacers", "Detroit Pistons", "Philadelphia 76ers", "Minnesota Timberwolves", "Portland Trail Blazers", "Memphis Grizzlies", "Houston Rockets", "New Orleans Pelicans", "Phoenix Suns", "Denver Nuggets", "Toronto Raptors", "Los Angeles Lakers", "New York Knicks", "Toronto Raptors", "Charlotte Hornets", "Houston Rockets", "Oklahoma City Thunder"],
      [116, 121, 73, 124, 128, 100, 112, 113, 108, 105, 130, 111, 138, 129, 115, 120, 108, 99, 109, 116, 129, 120, 121, 115, 110, 119, 125, 128, 125, 96, 116, 108, 135, 94, 119, 100, 112, 117, 130, 115, 109, 89, 125, 119, 134, 98, 122, 129, 96, 94, 104, 133, 113, 126, 131, 126, 100, 103, 124, 113, 117, 109, 103, 101, 104, 105, 118, 100, 115, 113, 115, 112],
      [7, 13, -51, 23, 23, -6, 5, -3, 7, -10, 3, 5, 38, 33, 19, 14, 8, -9, 4, 26, 14, -4, 22, -4, -3, 7, 19, 17, 7, -18, 4, -4, 19, -28, 20, -5, -5, -2, 26, -20, 10, -16, 27, 9, 33, 13, 10, 24, -7, -7, 18, 17, 10, 17, 7, 11, 2, -3, 19, 1, 12, 5, -17, -8, -6, 5, 24, -6, 19, 23, -7, -5]
    ),
    leaders: {
      pts: { name: "Kawhi Leonard", val: 24.8, all: [{"name": "Kawhi Leonard", "val": 24.8}, {"name": "Paul George", "val": 23.3}, {"name": "Marcus Morris", "val": 13.4}, {"name": "Lou Williams", "val": 12.1}, {"name": "Serge Ibaka", "val": 11.1}, {"name": "Reggie Jackson", "val": 10.7}, {"name": "Ivica Zubac", "val": 9.0}, {"name": "Jay Scrubb", "val": 8.8}, {"name": "Luke Kennard", "val": 8.3}, {"name": "Nicolas Batum", "val": 8.1}, {"name": "DeMarcus Cousins", "val": 7.8}, {"name": "Rajon Rondo", "val": 7.6}, {"name": "Patrick Beverley", "val": 7.5}, {"name": "Terance Mann", "val": 7.0}, {"name": "Patrick Patterson", "val": 5.2}, {"name": "Yogi Ferrell", "val": 4.6}, {"name": "Amir Coffey", "val": 3.2}, {"name": "Daniel Oturu", "val": 1.8}, {"name": "Mfiondu Kabengele", "val": 1.2}, {"name": "Malik Fitts", "val": 1.0}] },
      reb: { name: "Ivica Zubac", val: 7.2, all: [{"name": "Ivica Zubac", "val": 7.2}, {"name": "Serge Ibaka", "val": 6.7}, {"name": "Paul George", "val": 6.6}, {"name": "Kawhi Leonard", "val": 6.5}, {"name": "Nicolas Batum", "val": 4.7}, {"name": "DeMarcus Cousins", "val": 4.5}, {"name": "Marcus Morris", "val": 4.1}, {"name": "Terance Mann", "val": 3.6}, {"name": "Jay Scrubb", "val": 3.5}, {"name": "Patrick Beverley", "val": 3.2}, {"name": "Rajon Rondo", "val": 3.1}, {"name": "Reggie Jackson", "val": 2.9}, {"name": "Luke Kennard", "val": 2.6}, {"name": "Lou Williams", "val": 2.1}, {"name": "Patrick Patterson", "val": 2.0}, {"name": "Daniel Oturu", "val": 1.6}, {"name": "Yogi Ferrell", "val": 1.5}, {"name": "Amir Coffey", "val": 1.0}, {"name": "Malik Fitts", "val": 1.0}, {"name": "Mfiondu Kabengele", "val": 0.6}] },
      ast: { name: "Rajon Rondo", val: 5.8, all: [{"name": "Rajon Rondo", "val": 5.8}, {"name": "Paul George", "val": 5.2}, {"name": "Kawhi Leonard", "val": 5.2}, {"name": "Lou Williams", "val": 3.4}, {"name": "Reggie Jackson", "val": 3.1}, {"name": "Nicolas Batum", "val": 2.2}, {"name": "Patrick Beverley", "val": 2.1}, {"name": "Yogi Ferrell", "val": 2.1}, {"name": "Serge Ibaka", "val": 1.8}, {"name": "Luke Kennard", "val": 1.7}, {"name": "Terance Mann", "val": 1.6}, {"name": "Ivica Zubac", "val": 1.3}, {"name": "DeMarcus Cousins", "val": 1.0}, {"name": "Marcus Morris", "val": 1.0}, {"name": "Patrick Patterson", "val": 0.8}, {"name": "Amir Coffey", "val": 0.5}, {"name": "Jay Scrubb", "val": 0.3}, {"name": "Daniel Oturu", "val": 0.3}, {"name": "Mfiondu Kabengele", "val": 0.2}, {"name": "Malik Fitts", "val": 0.0}] },
      stl: { name: "Kawhi Leonard", val: 1.6, all: [{"name": "Kawhi Leonard", "val": 1.6}, {"name": "Paul George", "val": 1.1}, {"name": "Jay Scrubb", "val": 1.0}, {"name": "Rajon Rondo", "val": 1.0}, {"name": "Nicolas Batum", "val": 1.0}, {"name": "Lou Williams", "val": 0.9}, {"name": "Patrick Beverley", "val": 0.8}, {"name": "DeMarcus Cousins", "val": 0.8}, {"name": "Reggie Jackson", "val": 0.6}, {"name": "Marcus Morris", "val": 0.6}, {"name": "Yogi Ferrell", "val": 0.5}, {"name": "Luke Kennard", "val": 0.4}, {"name": "Terance Mann", "val": 0.4}, {"name": "Patrick Patterson", "val": 0.4}, {"name": "Ivica Zubac", "val": 0.3}, {"name": "Serge Ibaka", "val": 0.2}, {"name": "Amir Coffey", "val": 0.2}, {"name": "Daniel Oturu", "val": 0.1}, {"name": "Mfiondu Kabengele", "val": 0.1}, {"name": "Malik Fitts", "val": 0.0}] },
      blk: { name: "Serge Ibaka", val: 1.1, all: [{"name": "Serge Ibaka", "val": 1.1}, {"name": "Ivica Zubac", "val": 0.9}, {"name": "Patrick Beverley", "val": 0.8}, {"name": "Nicolas Batum", "val": 0.6}, {"name": "Kawhi Leonard", "val": 0.4}, {"name": "Paul George", "val": 0.4}, {"name": "DeMarcus Cousins", "val": 0.4}, {"name": "Marcus Morris", "val": 0.3}, {"name": "Yogi Ferrell", "val": 0.3}, {"name": "Patrick Patterson", "val": 0.2}, {"name": "Daniel Oturu", "val": 0.2}, {"name": "Terance Mann", "val": 0.2}, {"name": "Mfiondu Kabengele", "val": 0.1}, {"name": "Rajon Rondo", "val": 0.1}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Lou Williams", "val": 0.1}, {"name": "Reggie Jackson", "val": 0.1}, {"name": "Jay Scrubb", "val": 0.0}, {"name": "Amir Coffey", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}] },
    },
    avail: [
      { name: "Ivica Zubac", g: 72 },
      { name: "Nicolas Batum", g: 67 },
      { name: "Reggie Jackson", g: 67 },
      { name: "Terance Mann", g: 67 },
      { name: "Luke Kennard", g: 63 },
      { name: "Marcus Morris", g: 57 },
      { name: "Paul George", g: 54 },
      { name: "Kawhi Leonard", g: 52 },
      { name: "Amir Coffey", g: 44 },
      { name: "Lou Williams", g: 42 },
      { name: "Serge Ibaka", g: 41 },
      { name: "Patrick Patterson", g: 38 },
      { name: "Patrick Beverley", g: 37 },
      { name: "Daniel Oturu", g: 30 },
      { name: "Mfiondu Kabengele", g: 23 },
      { name: "Rajon Rondo", g: 18 },
      { name: "DeMarcus Cousins", g: 16 },
      { name: "Yogi Ferrell", g: 8 },
      { name: "Jay Scrubb", g: 4 },
      { name: "Malik Fitts", g: 3 },
    ]
  },

  "2021-22": {
    w: 42, l: 40,
    topW:   { pts: 138, opp: 88, against: "Oklahoma City Thunder" },
    worstL: { pts: 92, opp: 121, against: "Utah Jazz" },
    conf_rank: 8,
    games: buildGames(
      "LLWLLWWWWWWWLWLLWLWLLLWLWWWWLLLWLLWLWLLLWWLLWLWLWWLWLWLLLWWLWWWWWLLWLWLLLLLWLWWWWW",
      ["Golden State Warriors", "Memphis Grizzlies", "Portland Trail Blazers", "Cleveland Cavaliers", "Portland Trail Blazers", "Oklahoma City Thunder", "Minnesota Timberwolves", "Minnesota Timberwolves", "Charlotte Hornets", "Portland Trail Blazers", "Miami Heat", "Minnesota Timberwolves", "Chicago Bulls", "San Antonio Spurs", "Memphis Grizzlies", "New Orleans Pelicans", "Dallas Mavericks", "Dallas Mavericks", "Detroit Pistons", "Golden State Warriors", "New Orleans Pelicans", "Sacramento Kings", "Los Angeles Lakers", "Sacramento Kings", "Portland Trail Blazers", "Boston Celtics", "Orlando Magic", "Phoenix Suns", "Utah Jazz", "Oklahoma City Thunder", "San Antonio Spurs", "Sacramento Kings", "Denver Nuggets", "Brooklyn Nets", "Boston Celtics", "Toronto Raptors", "Brooklyn Nets", "Minnesota Timberwolves", "Phoenix Suns", "Memphis Grizzlies", "Atlanta Hawks", "Denver Nuggets", "New Orleans Pelicans", "San Antonio Spurs", "Indiana Pacers", "Denver Nuggets", "Philadelphia 76ers", "New York Knicks", "Washington Wizards", "Orlando Magic", "Miami Heat", "Charlotte Hornets", "Indiana Pacers", "Los Angeles Lakers", "Milwaukee Bucks", "Memphis Grizzlies", "Dallas Mavericks", "Dallas Mavericks", "Golden State Warriors", "Phoenix Suns", "Houston Rockets", "Los Angeles Lakers", "Houston Rockets", "Houston Rockets", "Los Angeles Lakers", "New York Knicks", "Golden State Warriors", "Washington Wizards", "Atlanta Hawks", "Detroit Pistons", "Cleveland Cavaliers", "Toronto Raptors", "Utah Jazz", "Denver Nuggets", "Philadelphia 76ers", "Utah Jazz", "Chicago Bulls", "Milwaukee Bucks", "New Orleans Pelicans", "Phoenix Suns", "Sacramento Kings", "Oklahoma City Thunder"],
      [113, 114, 116, 79, 92, 99, 126, 104, 120, 117, 112, 129, 90, 106, 108, 81, 97, 104, 107, 90, 104, 115, 119, 99, 102, 114, 106, 111, 103, 103, 92, 105, 100, 108, 91, 108, 120, 104, 89, 108, 106, 87, 89, 94, 139, 128, 102, 102, 116, 111, 114, 115, 116, 111, 113, 109, 105, 99, 119, 96, 142, 105, 99, 113, 132, 93, 97, 115, 106, 106, 111, 100, 92, 115, 97, 121, 130, 153, 119, 113, 117, 138],
      [-2, -6, 30, -13, -19, 5, 11, 20, 14, 8, 3, 27, -10, 14, -12, -13, 6, -8, 11, -15, -19, -9, 4, -5, 12, 3, 2, 16, -21, -1, -24, 16, -3, -16, 9, -8, 4, -18, -17, -15, 13, 2, -24, -7, 6, -2, 1, -8, 1, 9, -7, 25, -6, 1, -24, -26, -7, 2, 15, -7, 31, 3, 1, 13, 21, -23, -15, 6, -6, 4, -9, -3, -29, -12, -25, 6, -5, 34, 19, 4, 19, 50]
    ),
    leaders: {
      pts: { name: "Paul George", val: 24.3, all: [{"name": "Paul George", "val": 24.3}, {"name": "Norman Powell", "val": 21.4}, {"name": "Reggie Jackson", "val": 16.8}, {"name": "Marcus Morris", "val": 15.4}, {"name": "Luke Kennard", "val": 11.9}, {"name": "Terance Mann", "val": 10.8}, {"name": "Robert Covington", "val": 10.4}, {"name": "Ivica Zubac", "val": 10.3}, {"name": "James Ennis III", "val": 10.0}, {"name": "Eric Bledsoe", "val": 9.9}, {"name": "Amir Coffey", "val": 9.0}, {"name": "Isaiah Hartenstein", "val": 8.3}, {"name": "Nicolas Batum", "val": 8.3}, {"name": "Brandon Boston Jr.", "val": 6.7}, {"name": "Serge Ibaka", "val": 6.6}, {"name": "Xavier Moon", "val": 5.8}, {"name": "Justise Winslow", "val": 4.2}, {"name": "Semi Ojeleye", "val": 4.1}, {"name": "Keon Johnson", "val": 3.5}, {"name": "Jay Scrubb", "val": 2.7}, {"name": "Rodney Hood", "val": 2.6}, {"name": "Wenyen Gabriel", "val": 2.3}, {"name": "Moses Wright", "val": 0.0}] },
      reb: { name: "Ivica Zubac", val: 8.5, all: [{"name": "Ivica Zubac", "val": 8.5}, {"name": "Paul George", "val": 6.9}, {"name": "Terance Mann", "val": 5.2}, {"name": "Robert Covington", "val": 5.1}, {"name": "Isaiah Hartenstein", "val": 4.9}, {"name": "Marcus Morris", "val": 4.4}, {"name": "Nicolas Batum", "val": 4.3}, {"name": "Serge Ibaka", "val": 4.3}, {"name": "Reggie Jackson", "val": 3.6}, {"name": "Justise Winslow", "val": 3.6}, {"name": "Eric Bledsoe", "val": 3.4}, {"name": "Luke Kennard", "val": 3.3}, {"name": "Amir Coffey", "val": 2.9}, {"name": "Norman Powell", "val": 2.8}, {"name": "James Ennis III", "val": 2.5}, {"name": "Wenyen Gabriel", "val": 2.3}, {"name": "Brandon Boston Jr.", "val": 2.2}, {"name": "Semi Ojeleye", "val": 1.6}, {"name": "Xavier Moon", "val": 1.4}, {"name": "Keon Johnson", "val": 1.4}, {"name": "Jay Scrubb", "val": 0.9}, {"name": "Rodney Hood", "val": 0.8}, {"name": "Moses Wright", "val": 0.0}] },
      ast: { name: "Paul George", val: 5.7, all: [{"name": "Paul George", "val": 5.7}, {"name": "Reggie Jackson", "val": 4.8}, {"name": "Eric Bledsoe", "val": 4.2}, {"name": "Norman Powell", "val": 2.8}, {"name": "Terance Mann", "val": 2.6}, {"name": "Xavier Moon", "val": 2.4}, {"name": "Isaiah Hartenstein", "val": 2.4}, {"name": "Luke Kennard", "val": 2.1}, {"name": "Marcus Morris", "val": 2.1}, {"name": "Amir Coffey", "val": 1.8}, {"name": "Nicolas Batum", "val": 1.7}, {"name": "Ivica Zubac", "val": 1.6}, {"name": "Justise Winslow", "val": 1.4}, {"name": "Robert Covington", "val": 1.0}, {"name": "Serge Ibaka", "val": 1.0}, {"name": "Brandon Boston Jr.", "val": 1.0}, {"name": "Moses Wright", "val": 1.0}, {"name": "Keon Johnson", "val": 0.9}, {"name": "Rodney Hood", "val": 0.6}, {"name": "Semi Ojeleye", "val": 0.4}, {"name": "Jay Scrubb", "val": 0.4}, {"name": "Wenyen Gabriel", "val": 0.3}, {"name": "James Ennis III", "val": 0.0}] },
      stl: { name: "Paul George", val: 2.2, all: [{"name": "Paul George", "val": 2.2}, {"name": "Robert Covington", "val": 1.3}, {"name": "Eric Bledsoe", "val": 1.3}, {"name": "Nicolas Batum", "val": 1.0}, {"name": "Xavier Moon", "val": 0.7}, {"name": "Reggie Jackson", "val": 0.7}, {"name": "Isaiah Hartenstein", "val": 0.7}, {"name": "Terance Mann", "val": 0.7}, {"name": "Amir Coffey", "val": 0.6}, {"name": "Luke Kennard", "val": 0.6}, {"name": "Justise Winslow", "val": 0.6}, {"name": "Ivica Zubac", "val": 0.5}, {"name": "Brandon Boston Jr.", "val": 0.5}, {"name": "James Ennis III", "val": 0.5}, {"name": "Marcus Morris", "val": 0.5}, {"name": "Keon Johnson", "val": 0.5}, {"name": "Norman Powell", "val": 0.4}, {"name": "Serge Ibaka", "val": 0.2}, {"name": "Semi Ojeleye", "val": 0.2}, {"name": "Rodney Hood", "val": 0.2}, {"name": "Wenyen Gabriel", "val": 0.2}, {"name": "Jay Scrubb", "val": 0.2}, {"name": "Moses Wright", "val": 0.0}] },
      blk: { name: "Robert Covington", val: 1.2, all: [{"name": "Robert Covington", "val": 1.2}, {"name": "Isaiah Hartenstein", "val": 1.1}, {"name": "Ivica Zubac", "val": 1.0}, {"name": "Norman Powell", "val": 0.8}, {"name": "Serge Ibaka", "val": 0.7}, {"name": "Nicolas Batum", "val": 0.7}, {"name": "Justise Winslow", "val": 0.5}, {"name": "James Ennis III", "val": 0.5}, {"name": "Paul George", "val": 0.4}, {"name": "Eric Bledsoe", "val": 0.4}, {"name": "Brandon Boston Jr.", "val": 0.3}, {"name": "Terance Mann", "val": 0.3}, {"name": "Xavier Moon", "val": 0.3}, {"name": "Marcus Morris", "val": 0.3}, {"name": "Wenyen Gabriel", "val": 0.3}, {"name": "Amir Coffey", "val": 0.2}, {"name": "Reggie Jackson", "val": 0.2}, {"name": "Rodney Hood", "val": 0.2}, {"name": "Jay Scrubb", "val": 0.2}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Semi Ojeleye", "val": 0.1}, {"name": "Keon Johnson", "val": 0.1}, {"name": "Moses Wright", "val": 0.0}] },
    },
    avail: [
      { name: "Terance Mann", g: 81 },
      { name: "Ivica Zubac", g: 76 },
      { name: "Reggie Jackson", g: 75 },
      { name: "Luke Kennard", g: 70 },
      { name: "Amir Coffey", g: 69 },
      { name: "Isaiah Hartenstein", g: 68 },
      { name: "Nicolas Batum", g: 59 },
      { name: "Marcus Morris", g: 54 },
      { name: "Eric Bledsoe", g: 54 },
      { name: "Brandon Boston Jr.", g: 51 },
      { name: "Justise Winslow", g: 37 },
      { name: "Serge Ibaka", g: 35 },
      { name: "Paul George", g: 31 },
      { name: "Robert Covington", g: 23 },
      { name: "Jay Scrubb", g: 18 },
      { name: "Keon Johnson", g: 15 },
      { name: "Rodney Hood", g: 13 },
      { name: "Xavier Moon", g: 10 },
      { name: "Semi Ojeleye", g: 10 },
      { name: "Wenyen Gabriel", g: 6 },
      { name: "Norman Powell", g: 5 },
      { name: "James Ennis III", g: 2 },
      { name: "Moses Wright", g: 1 },
    ]
  },

  "2022-23": {
    w: 44, l: 38,
    topW:   { pts: 138, opp: 100, against: "San Antonio Spurs" },
    worstL: { pts: 91, opp: 122, against: "Denver Nuggets" },
    conf_rank: 5,
    games: buildGames(
      "WWLLLLWWWLWWLWLWWWLLWWLLWLLWWWLWWLWWLLLLLLWLWLLWWWWWLWLWWLLWWLLLLLWWWWLWLWLWWLLWWW",
      ["Los Angeles Lakers", "Sacramento Kings", "Phoenix Suns", "Oklahoma City Thunder", "Oklahoma City Thunder", "New Orleans Pelicans", "Houston Rockets", "Houston Rockets", "San Antonio Spurs", "Utah Jazz", "Cleveland Cavaliers", "Los Angeles Lakers", "Brooklyn Nets", "Houston Rockets", "Dallas Mavericks", "Detroit Pistons", "San Antonio Spurs", "Utah Jazz", "Golden State Warriors", "Denver Nuggets", "Indiana Pacers", "Portland Trail Blazers", "Utah Jazz", "Sacramento Kings", "Charlotte Hornets", "Orlando Magic", "Miami Heat", "Washington Wizards", "Boston Celtics", "Minnesota Timberwolves", "Phoenix Suns", "Washington Wizards", "Charlotte Hornets", "Philadelphia 76ers", "Detroit Pistons", "Toronto Raptors", "Boston Celtics", "Indiana Pacers", "Miami Heat", "Denver Nuggets", "Minnesota Timberwolves", "Atlanta Hawks", "Dallas Mavericks", "Denver Nuggets", "Houston Rockets", "Philadelphia 76ers", "Utah Jazz", "San Antonio Spurs", "Dallas Mavericks", "Los Angeles Lakers", "San Antonio Spurs", "Atlanta Hawks", "Cleveland Cavaliers", "Chicago Bulls", "Milwaukee Bucks", "New York Knicks", "Brooklyn Nets", "Dallas Mavericks", "Milwaukee Bucks", "Golden State Warriors", "Phoenix Suns", "Sacramento Kings", "Denver Nuggets", "Minnesota Timberwolves", "Golden State Warriors", "Sacramento Kings", "Memphis Grizzlies", "Toronto Raptors", "New York Knicks", "Golden State Warriors", "Orlando Magic", "Portland Trail Blazers", "Oklahoma City Thunder", "Oklahoma City Thunder", "New Orleans Pelicans", "Chicago Bulls", "Memphis Grizzlies", "Memphis Grizzlies", "New Orleans Pelicans", "Los Angeles Lakers", "Portland Trail Blazers", "Phoenix Suns"],
      [103, 111, 95, 94, 110, 91, 95, 109, 113, 102, 119, 114, 95, 122, 101, 96, 119, 121, 107, 104, 114, 118, 112, 96, 119, 111, 110, 114, 113, 99, 95, 102, 126, 114, 142, 124, 110, 130, 100, 91, 115, 108, 113, 103, 121, 110, 103, 131, 112, 133, 138, 120, 99, 108, 105, 134, 124, 104, 106, 134, 116, 175, 124, 101, 91, 127, 135, 108, 106, 134, 108, 117, 100, 127, 110, 124, 141, 94, 114, 125, 136, 119],
      [6, 2, -17, -14, -8, -21, 2, 8, 7, -8, 2, 13, -15, 16, -2, 5, 22, 7, -17, -10, 14, 6, -13, -27, 2, -5, -5, 7, 20, 11, -16, 9, 21, -5, 11, 11, -6, -1, -10, -31, -13, -4, 12, -12, 21, -10, -23, 5, 14, 18, 38, 7, -23, 5, -1, 6, 8, -6, -13, 10, 9, -1, -10, -7, -24, -1, 6, 8, 11, 8, -5, 15, -1, 22, -21, 12, 9, -14, -8, 7, 11, 5]
    ),
    leaders: {
      pts: { name: "Paul George", val: 23.8, all: [{"name": "Paul George", "val": 23.8}, {"name": "Kawhi Leonard", "val": 23.8}, {"name": "Norman Powell", "val": 17.0}, {"name": "Russell Westbrook", "val": 15.8}, {"name": "John Wall", "val": 11.4}, {"name": "Marcus Morris", "val": 11.2}, {"name": "Eric Gordon", "val": 11.0}, {"name": "Reggie Jackson", "val": 10.9}, {"name": "Ivica Zubac", "val": 10.8}, {"name": "Bones Hyland", "val": 10.8}, {"name": "Terance Mann", "val": 8.8}, {"name": "Luke Kennard", "val": 7.8}, {"name": "Mason Plumlee", "val": 7.5}, {"name": "Brandon Boston Jr.", "val": 6.5}, {"name": "Nicolas Batum", "val": 6.1}, {"name": "Robert Covington", "val": 6.0}, {"name": "Moses Brown", "val": 4.6}, {"name": "Amir Coffey", "val": 3.4}, {"name": "Jason Preston", "val": 2.9}, {"name": "Moussa Diabaté", "val": 2.7}, {"name": "Xavier Moon", "val": 1.8}] },
      reb: { name: "Ivica Zubac", val: 9.9, all: [{"name": "Ivica Zubac", "val": 9.9}, {"name": "Mason Plumlee", "val": 6.9}, {"name": "Kawhi Leonard", "val": 6.5}, {"name": "Paul George", "val": 6.1}, {"name": "Russell Westbrook", "val": 4.9}, {"name": "Moses Brown", "val": 4.1}, {"name": "Marcus Morris", "val": 4.0}, {"name": "Nicolas Batum", "val": 3.8}, {"name": "Bones Hyland", "val": 3.5}, {"name": "Robert Covington", "val": 3.5}, {"name": "Terance Mann", "val": 3.4}, {"name": "Norman Powell", "val": 2.9}, {"name": "John Wall", "val": 2.7}, {"name": "Luke Kennard", "val": 2.4}, {"name": "Moussa Diabaté", "val": 2.3}, {"name": "Reggie Jackson", "val": 2.2}, {"name": "Eric Gordon", "val": 1.7}, {"name": "Jason Preston", "val": 1.6}, {"name": "Brandon Boston Jr.", "val": 1.4}, {"name": "Amir Coffey", "val": 1.1}, {"name": "Xavier Moon", "val": 0.8}] },
      ast: { name: "Russell Westbrook", val: 7.6, all: [{"name": "Russell Westbrook", "val": 7.6}, {"name": "John Wall", "val": 5.2}, {"name": "Paul George", "val": 5.1}, {"name": "Kawhi Leonard", "val": 3.9}, {"name": "Reggie Jackson", "val": 3.5}, {"name": "Bones Hyland", "val": 3.4}, {"name": "Terance Mann", "val": 2.3}, {"name": "Eric Gordon", "val": 2.1}, {"name": "Jason Preston", "val": 1.9}, {"name": "Marcus Morris", "val": 1.8}, {"name": "Norman Powell", "val": 1.8}, {"name": "Mason Plumlee", "val": 1.7}, {"name": "Nicolas Batum", "val": 1.6}, {"name": "Xavier Moon", "val": 1.3}, {"name": "Robert Covington", "val": 1.2}, {"name": "Luke Kennard", "val": 1.1}, {"name": "Amir Coffey", "val": 1.1}, {"name": "Ivica Zubac", "val": 1.0}, {"name": "Brandon Boston Jr.", "val": 0.9}, {"name": "Moussa Diabaté", "val": 0.2}, {"name": "Moses Brown", "val": 0.1}] },
      stl: { name: "Paul George", val: 1.5, all: [{"name": "Paul George", "val": 1.5}, {"name": "Kawhi Leonard", "val": 1.4}, {"name": "Russell Westbrook", "val": 1.1}, {"name": "John Wall", "val": 0.8}, {"name": "Robert Covington", "val": 0.8}, {"name": "Bones Hyland", "val": 0.8}, {"name": "Norman Powell", "val": 0.8}, {"name": "Nicolas Batum", "val": 0.7}, {"name": "Reggie Jackson", "val": 0.7}, {"name": "Eric Gordon", "val": 0.6}, {"name": "Marcus Morris", "val": 0.6}, {"name": "Terance Mann", "val": 0.5}, {"name": "Luke Kennard", "val": 0.5}, {"name": "Mason Plumlee", "val": 0.5}, {"name": "Ivica Zubac", "val": 0.4}, {"name": "Brandon Boston Jr.", "val": 0.4}, {"name": "Moussa Diabaté", "val": 0.3}, {"name": "Amir Coffey", "val": 0.1}, {"name": "Jason Preston", "val": 0.1}, {"name": "Moses Brown", "val": 0.1}, {"name": "Xavier Moon", "val": 0.0}] },
      blk: { name: "Ivica Zubac", val: 1.3, all: [{"name": "Ivica Zubac", "val": 1.3}, {"name": "Robert Covington", "val": 0.7}, {"name": "Nicolas Batum", "val": 0.6}, {"name": "Russell Westbrook", "val": 0.5}, {"name": "Mason Plumlee", "val": 0.5}, {"name": "Kawhi Leonard", "val": 0.5}, {"name": "John Wall", "val": 0.4}, {"name": "Moses Brown", "val": 0.4}, {"name": "Moussa Diabaté", "val": 0.4}, {"name": "Paul George", "val": 0.4}, {"name": "Eric Gordon", "val": 0.4}, {"name": "Terance Mann", "val": 0.3}, {"name": "Norman Powell", "val": 0.3}, {"name": "Marcus Morris", "val": 0.3}, {"name": "Luke Kennard", "val": 0.1}, {"name": "Bones Hyland", "val": 0.1}, {"name": "Reggie Jackson", "val": 0.1}, {"name": "Amir Coffey", "val": 0.1}, {"name": "Brandon Boston Jr.", "val": 0.0}, {"name": "Jason Preston", "val": 0.0}, {"name": "Xavier Moon", "val": 0.0}] },
    },
    avail: [
      { name: "Terance Mann", g: 81 },
      { name: "Nicolas Batum", g: 78 },
      { name: "Ivica Zubac", g: 76 },
      { name: "Marcus Morris", g: 65 },
      { name: "Norman Powell", g: 60 },
      { name: "Paul George", g: 56 },
      { name: "Reggie Jackson", g: 52 },
      { name: "Kawhi Leonard", g: 52 },
      { name: "Amir Coffey", g: 50 },
      { name: "Robert Covington", g: 48 },
      { name: "Luke Kennard", g: 35 },
      { name: "John Wall", g: 34 },
      { name: "Moses Brown", g: 34 },
      { name: "Mason Plumlee", g: 23 },
      { name: "Eric Gordon", g: 22 },
      { name: "Brandon Boston Jr.", g: 22 },
      { name: "Moussa Diabaté", g: 22 },
      { name: "Russell Westbrook", g: 21 },
      { name: "Bones Hyland", g: 14 },
      { name: "Jason Preston", g: 14 },
      { name: "Xavier Moon", g: 4 },
    ]
  },

  "2023-24": {
    w: 51, l: 31,
    topW:   { pts: 123, opp: 83, against: "San Antonio Spurs" },
    worstL: { pts: 108, opp: 145, against: "Boston Celtics" },
    conf_rank: 4,
    games: buildGames(
      "WLWWLLLLLLWWWLWLWLWWWWWWWWWLLWWWWWLWWWLWWWWWLWWWWLWLWLWLLWWLWWLLWLLWWLLWWWLWWWWLLL",
      ["Portland Trail Blazers", "Utah Jazz", "San Antonio Spurs", "Orlando Magic", "Los Angeles Lakers", "New York Knicks", "Brooklyn Nets", "Dallas Mavericks", "Memphis Grizzlies", "Denver Nuggets", "Houston Rockets", "San Antonio Spurs", "San Antonio Spurs", "New Orleans Pelicans", "Dallas Mavericks", "Denver Nuggets", "Sacramento Kings", "Golden State Warriors", "Golden State Warriors", "Denver Nuggets", "Utah Jazz", "Portland Trail Blazers", "Sacramento Kings", "Golden State Warriors", "New York Knicks", "Indiana Pacers", "Dallas Mavericks", "Oklahoma City Thunder", "Boston Celtics", "Charlotte Hornets", "Memphis Grizzlies", "Miami Heat", "Phoenix Suns", "New Orleans Pelicans", "Los Angeles Lakers", "Phoenix Suns", "Toronto Raptors", "Memphis Grizzlies", "Minnesota Timberwolves", "Oklahoma City Thunder", "Brooklyn Nets", "Los Angeles Lakers", "Toronto Raptors", "Boston Celtics", "Cleveland Cavaliers", "Washington Wizards", "Detroit Pistons", "Miami Heat", "Atlanta Hawks", "New Orleans Pelicans", "Detroit Pistons", "Minnesota Timberwolves", "Golden State Warriors", "Oklahoma City Thunder", "Memphis Grizzlies", "Sacramento Kings", "Los Angeles Lakers", "Washington Wizards", "Minnesota Timberwolves", "Milwaukee Bucks", "Houston Rockets", "Chicago Bulls", "Milwaukee Bucks", "Minnesota Timberwolves", "Chicago Bulls", "New Orleans Pelicans", "Atlanta Hawks", "Portland Trail Blazers", "Portland Trail Blazers", "Philadelphia 76ers", "Indiana Pacers", "Philadelphia 76ers", "Orlando Magic", "Charlotte Hornets", "Sacramento Kings", "Denver Nuggets", "Utah Jazz", "Cleveland Cavaliers", "Phoenix Suns", "Phoenix Suns", "Utah Jazz", "Houston Rockets"],
      [123, 118, 123, 118, 125, 97, 93, 126, 101, 108, 106, 124, 109, 106, 107, 104, 131, 114, 113, 111, 117, 132, 119, 121, 144, 151, 120, 115, 108, 113, 117, 121, 131, 111, 103, 138, 126, 128, 105, 128, 125, 127, 127, 115, 108, 125, 136, 103, 149, 106, 112, 100, 130, 107, 101, 107, 112, 140, 89, 106, 122, 112, 117, 100, 126, 104, 93, 116, 125, 107, 116, 108, 100, 130, 95, 102, 131, 120, 105, 108, 109, 105],
      [12, -2, 40, 16, -5, -14, -7, -18, -4, -3, 6, 25, 7, -10, 19, -9, 14, -6, 1, 9, 14, 5, 20, 8, 22, 24, 9, -19, -37, 9, 11, 17, 9, 16, -3, 27, 6, 9, -4, 11, 11, 11, 20, 19, -10, 16, 11, 8, 5, -11, 6, -21, 5, -22, 6, -16, -4, 25, 1, -7, 6, 10, -7, -18, 15, -8, -17, 13, 8, -14, -17, 1, 3, 12, -14, 2, 29, 2, 13, -16, -1, -11]
    ),
    leaders: {
      pts: { name: "Kawhi Leonard", val: 23.7, all: [{"name": "Kawhi Leonard", "val": 23.7}, {"name": "Paul George", "val": 22.6}, {"name": "James Harden", "val": 16.6}, {"name": "Norman Powell", "val": 13.9}, {"name": "Ivica Zubac", "val": 11.7}, {"name": "Russell Westbrook", "val": 11.1}, {"name": "Terance Mann", "val": 8.8}, {"name": "Bones Hyland", "val": 6.9}, {"name": "Amir Coffey", "val": 6.6}, {"name": "Daniel Theis", "val": 6.3}, {"name": "Mason Plumlee", "val": 5.3}, {"name": "Brandon Boston Jr.", "val": 5.2}, {"name": "KJ Martin", "val": 5.0}, {"name": "Robert Covington", "val": 3.0}, {"name": "Nicolas Batum", "val": 2.7}, {"name": "Moussa Diabaté", "val": 2.6}, {"name": "Xavier Moon", "val": 2.4}, {"name": "Kobe Brown", "val": 2.0}, {"name": "P.J. Tucker", "val": 1.6}, {"name": "Jordan Miller", "val": 1.6}, {"name": "Joshua Primo", "val": 1.0}] },
      reb: { name: "Ivica Zubac", val: 9.2, all: [{"name": "Ivica Zubac", "val": 9.2}, {"name": "Kawhi Leonard", "val": 6.1}, {"name": "Paul George", "val": 5.2}, {"name": "Mason Plumlee", "val": 5.1}, {"name": "James Harden", "val": 5.1}, {"name": "Russell Westbrook", "val": 5.0}, {"name": "Daniel Theis", "val": 4.1}, {"name": "Terance Mann", "val": 3.4}, {"name": "Robert Covington", "val": 2.7}, {"name": "Norman Powell", "val": 2.6}, {"name": "P.J. Tucker", "val": 2.5}, {"name": "Nicolas Batum", "val": 2.3}, {"name": "Moussa Diabaté", "val": 2.2}, {"name": "Amir Coffey", "val": 2.1}, {"name": "Brandon Boston Jr.", "val": 1.6}, {"name": "KJ Martin", "val": 1.5}, {"name": "Bones Hyland", "val": 1.5}, {"name": "Kobe Brown", "val": 1.4}, {"name": "Xavier Moon", "val": 1.3}, {"name": "Jordan Miller", "val": 0.6}, {"name": "Joshua Primo", "val": 0.5}] },
      ast: { name: "James Harden", val: 8.5, all: [{"name": "James Harden", "val": 8.5}, {"name": "Russell Westbrook", "val": 4.5}, {"name": "Kawhi Leonard", "val": 3.6}, {"name": "Paul George", "val": 3.5}, {"name": "Bones Hyland", "val": 2.5}, {"name": "Robert Covington", "val": 2.3}, {"name": "Nicolas Batum", "val": 1.7}, {"name": "Terance Mann", "val": 1.6}, {"name": "Xavier Moon", "val": 1.5}, {"name": "Ivica Zubac", "val": 1.4}, {"name": "Mason Plumlee", "val": 1.2}, {"name": "Norman Powell", "val": 1.1}, {"name": "Amir Coffey", "val": 1.1}, {"name": "Daniel Theis", "val": 1.0}, {"name": "P.J. Tucker", "val": 0.6}, {"name": "Kobe Brown", "val": 0.6}, {"name": "KJ Martin", "val": 0.5}, {"name": "Brandon Boston Jr.", "val": 0.4}, {"name": "Moussa Diabaté", "val": 0.4}, {"name": "Joshua Primo", "val": 0.0}, {"name": "Jordan Miller", "val": 0.0}] },
      stl: { name: "Robert Covington", val: 2.0, all: [{"name": "Robert Covington", "val": 2.0}, {"name": "Kawhi Leonard", "val": 1.6}, {"name": "Paul George", "val": 1.5}, {"name": "Russell Westbrook", "val": 1.1}, {"name": "James Harden", "val": 1.1}, {"name": "Nicolas Batum", "val": 1.0}, {"name": "KJ Martin", "val": 1.0}, {"name": "Bones Hyland", "val": 0.7}, {"name": "Norman Powell", "val": 0.6}, {"name": "Terance Mann", "val": 0.6}, {"name": "Amir Coffey", "val": 0.6}, {"name": "Moussa Diabaté", "val": 0.5}, {"name": "P.J. Tucker", "val": 0.5}, {"name": "Daniel Theis", "val": 0.4}, {"name": "Mason Plumlee", "val": 0.3}, {"name": "Brandon Boston Jr.", "val": 0.3}, {"name": "Kobe Brown", "val": 0.3}, {"name": "Ivica Zubac", "val": 0.3}, {"name": "Xavier Moon", "val": 0.2}, {"name": "Joshua Primo", "val": 0.0}, {"name": "Jordan Miller", "val": 0.0}] },
      blk: { name: "Nicolas Batum", val: 1.3, all: [{"name": "Nicolas Batum", "val": 1.3}, {"name": "Ivica Zubac", "val": 1.2}, {"name": "Kawhi Leonard", "val": 0.9}, {"name": "Daniel Theis", "val": 0.9}, {"name": "James Harden", "val": 0.8}, {"name": "Robert Covington", "val": 0.7}, {"name": "Joshua Primo", "val": 0.5}, {"name": "Paul George", "val": 0.5}, {"name": "KJ Martin", "val": 0.5}, {"name": "Mason Plumlee", "val": 0.4}, {"name": "Norman Powell", "val": 0.3}, {"name": "Brandon Boston Jr.", "val": 0.3}, {"name": "Russell Westbrook", "val": 0.3}, {"name": "Xavier Moon", "val": 0.2}, {"name": "P.J. Tucker", "val": 0.2}, {"name": "Terance Mann", "val": 0.2}, {"name": "Amir Coffey", "val": 0.2}, {"name": "Bones Hyland", "val": 0.1}, {"name": "Kobe Brown", "val": 0.1}, {"name": "Moussa Diabaté", "val": 0.1}, {"name": "Jordan Miller", "val": 0.0}] },
    },
    avail: [
      { name: "Norman Powell", g: 76 },
      { name: "Terance Mann", g: 75 },
      { name: "Paul George", g: 74 },
      { name: "James Harden", g: 72 },
      { name: "Amir Coffey", g: 70 },
      { name: "Kawhi Leonard", g: 68 },
      { name: "Ivica Zubac", g: 68 },
      { name: "Russell Westbrook", g: 68 },
      { name: "Daniel Theis", g: 59 },
      { name: "Mason Plumlee", g: 46 },
      { name: "Kobe Brown", g: 44 },
      { name: "Bones Hyland", g: 37 },
      { name: "Brandon Boston Jr.", g: 32 },
      { name: "P.J. Tucker", g: 28 },
      { name: "Xavier Moon", g: 14 },
      { name: "Moussa Diabaté", g: 11 },
      { name: "Jordan Miller", g: 8 },
      { name: "Nicolas Batum", g: 3 },
      { name: "Robert Covington", g: 3 },
      { name: "KJ Martin", g: 2 },
      { name: "Joshua Primo", g: 2 },
    ]
  },

  "2024-25": {
    w: 50, l: 32,
    topW:   { pts: 126, opp: 67, against: "Brooklyn Nets" },
    worstL: { pts: 86, opp: 122, against: "San Antonio Spurs" },
    conf_rank: 5,
    games: buildGames(
      "LWWLLLWWWWLLLWWWWWLWLWWLLLWWLWWWLLWLLWWWWLLWWLWWLLLWWWLLLWLLLWWWLWWWWWLWWLWWWWWWWW",
      ["Phoenix Suns", "Denver Nuggets", "Golden State Warriors", "Portland Trail Blazers", "Phoenix Suns", "Oklahoma City Thunder", "San Antonio Spurs", "Philadelphia 76ers", "Sacramento Kings", "Toronto Raptors", "Oklahoma City Thunder", "Houston Rockets", "Houston Rockets", "Utah Jazz", "Golden State Warriors", "Orlando Magic", "Sacramento Kings", "Philadelphia 76ers", "Boston Celtics", "Washington Wizards", "Minnesota Timberwolves", "Denver Nuggets", "Portland Trail Blazers", "Minnesota Timberwolves", "Houston Rockets", "Denver Nuggets", "Utah Jazz", "Dallas Mavericks", "Dallas Mavericks", "Memphis Grizzlies", "Golden State Warriors", "New Orleans Pelicans", "San Antonio Spurs", "Oklahoma City Thunder", "Atlanta Hawks", "Minnesota Timberwolves", "Denver Nuggets", "Miami Heat", "Brooklyn Nets", "Portland Trail Blazers", "Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Washington Wizards", "Milwaukee Bucks", "Phoenix Suns", "San Antonio Spurs", "Charlotte Hornets", "Toronto Raptors", "Los Angeles Lakers", "Indiana Pacers", "Utah Jazz", "Memphis Grizzlies", "Utah Jazz", "Milwaukee Bucks", "Indiana Pacers", "Detroit Pistons", "Chicago Bulls", "Los Angeles Lakers", "Los Angeles Lakers", "Phoenix Suns", "Detroit Pistons", "New York Knicks", "Sacramento Kings", "New Orleans Pelicans", "Miami Heat", "Atlanta Hawks", "Charlotte Hornets", "Cleveland Cavaliers", "Memphis Grizzlies", "Oklahoma City Thunder", "New York Knicks", "Brooklyn Nets", "Cleveland Cavaliers", "Orlando Magic", "New Orleans Pelicans", "Dallas Mavericks", "Dallas Mavericks", "San Antonio Spurs", "Houston Rockets", "Sacramento Kings", "Golden State Warriors"],
      [113, 109, 112, 105, 119, 92, 113, 110, 107, 105, 128, 103, 104, 116, 102, 104, 104, 125, 94, 121, 92, 126, 127, 80, 106, 98, 144, 118, 97, 114, 102, 116, 86, 98, 131, 106, 103, 109, 126, 118, 116, 99, 113, 110, 127, 109, 128, 112, 108, 97, 112, 130, 128, 120, 110, 111, 97, 122, 102, 102, 117, 123, 105, 111, 120, 119, 121, 123, 132, 128, 101, 126, 132, 122, 96, 114, 114, 135, 122, 134, 101, 124],
      [-3, 5, 8, -1, -6, -13, 9, 12, 9, 2, -6, -8, -21, 11, 3, 11, 16, 26, -32, 25, -1, 4, 22, -28, -11, -22, 37, 23, -16, 4, 10, 3, -36, -18, 26, -2, -23, 11, 59, 29, 14, -13, -4, 17, 10, -2, 12, 8, -7, -25, -7, 20, 14, 4, -6, -18, -9, 5, -4, -6, -2, 8, 10, 1, -7, 15, 23, 35, 13, 20, -2, 13, 32, -5, 9, 16, 23, 31, 5, 17, 1, 5]
    ),
    leaders: {
      pts: { name: "James Harden", val: 22.8, all: [{"name": "James Harden", "val": 22.8}, {"name": "Norman Powell", "val": 21.8}, {"name": "Kawhi Leonard", "val": 21.5}, {"name": "Ivica Zubac", "val": 16.8}, {"name": "Bogdan Bogdanović", "val": 11.4}, {"name": "Derrick Jones Jr.", "val": 10.1}, {"name": "Amir Coffey", "val": 9.7}, {"name": "Kevin Porter Jr.", "val": 9.3}, {"name": "Bones Hyland", "val": 7.2}, {"name": "Kris Dunn", "val": 6.4}, {"name": "Terance Mann", "val": 6.0}, {"name": "Mo Bamba", "val": 4.6}, {"name": "Jordan Miller", "val": 4.1}, {"name": "MarJon Beauchamp", "val": 4.0}, {"name": "Nicolas Batum", "val": 4.0}, {"name": "Patty Mills", "val": 3.1}, {"name": "Patrick Baldwin Jr.", "val": 3.0}, {"name": "Ben Simmons", "val": 2.9}, {"name": "Drew Eubanks", "val": 2.7}, {"name": "Kai Jones", "val": 2.2}, {"name": "Kobe Brown", "val": 1.9}, {"name": "Trentyn Flowers", "val": 1.8}, {"name": "Cam Christie", "val": 1.4}] },
      reb: { name: "Ivica Zubac", val: 12.6, all: [{"name": "Ivica Zubac", "val": 12.6}, {"name": "Kawhi Leonard", "val": 5.9}, {"name": "James Harden", "val": 5.8}, {"name": "Mo Bamba", "val": 4.3}, {"name": "Ben Simmons", "val": 3.8}, {"name": "Kevin Porter Jr.", "val": 3.6}, {"name": "Derrick Jones Jr.", "val": 3.4}, {"name": "Kris Dunn", "val": 3.4}, {"name": "Norman Powell", "val": 3.2}, {"name": "Bogdan Bogdanović", "val": 3.1}, {"name": "Terance Mann", "val": 2.9}, {"name": "Nicolas Batum", "val": 2.8}, {"name": "Drew Eubanks", "val": 2.4}, {"name": "Amir Coffey", "val": 2.2}, {"name": "Kobe Brown", "val": 1.6}, {"name": "Jordan Miller", "val": 1.6}, {"name": "Kai Jones", "val": 1.6}, {"name": "Patrick Baldwin Jr.", "val": 1.5}, {"name": "Bones Hyland", "val": 1.2}, {"name": "MarJon Beauchamp", "val": 1.0}, {"name": "Cam Christie", "val": 0.9}, {"name": "Trentyn Flowers", "val": 0.7}, {"name": "Patty Mills", "val": 0.1}] },
      ast: { name: "James Harden", val: 8.7, all: [{"name": "James Harden", "val": 8.7}, {"name": "Bogdan Bogdanović", "val": 3.2}, {"name": "Kevin Porter Jr.", "val": 3.2}, {"name": "Ben Simmons", "val": 3.1}, {"name": "Kawhi Leonard", "val": 3.1}, {"name": "Kris Dunn", "val": 2.8}, {"name": "Ivica Zubac", "val": 2.7}, {"name": "Norman Powell", "val": 2.1}, {"name": "Terance Mann", "val": 1.6}, {"name": "Bones Hyland", "val": 1.4}, {"name": "Amir Coffey", "val": 1.1}, {"name": "Nicolas Batum", "val": 1.1}, {"name": "Jordan Miller", "val": 0.9}, {"name": "Derrick Jones Jr.", "val": 0.8}, {"name": "MarJon Beauchamp", "val": 0.7}, {"name": "Mo Bamba", "val": 0.6}, {"name": "Kobe Brown", "val": 0.6}, {"name": "Cam Christie", "val": 0.5}, {"name": "Patrick Baldwin Jr.", "val": 0.5}, {"name": "Drew Eubanks", "val": 0.4}, {"name": "Kai Jones", "val": 0.4}, {"name": "Patty Mills", "val": 0.4}, {"name": "Trentyn Flowers", "val": 0.0}] },
      stl: { name: "Kris Dunn", val: 1.7, all: [{"name": "Kris Dunn", "val": 1.7}, {"name": "Kawhi Leonard", "val": 1.6}, {"name": "James Harden", "val": 1.5}, {"name": "Norman Powell", "val": 1.2}, {"name": "Derrick Jones Jr.", "val": 1.0}, {"name": "Kevin Porter Jr.", "val": 1.0}, {"name": "Bones Hyland", "val": 0.9}, {"name": "Terance Mann", "val": 0.8}, {"name": "Nicolas Batum", "val": 0.7}, {"name": "Ivica Zubac", "val": 0.7}, {"name": "Ben Simmons", "val": 0.7}, {"name": "Bogdan Bogdanović", "val": 0.7}, {"name": "Amir Coffey", "val": 0.6}, {"name": "Jordan Miller", "val": 0.5}, {"name": "Cam Christie", "val": 0.4}, {"name": "Mo Bamba", "val": 0.3}, {"name": "Kai Jones", "val": 0.2}, {"name": "Kobe Brown", "val": 0.2}, {"name": "Drew Eubanks", "val": 0.1}, {"name": "Patty Mills", "val": 0.1}, {"name": "MarJon Beauchamp", "val": 0.0}, {"name": "Trentyn Flowers", "val": 0.0}, {"name": "Patrick Baldwin Jr.", "val": 0.0}] },
      blk: { name: "Ivica Zubac", val: 1.1, all: [{"name": "Ivica Zubac", "val": 1.1}, {"name": "Mo Bamba", "val": 1.0}, {"name": "James Harden", "val": 0.7}, {"name": "Kai Jones", "val": 0.5}, {"name": "Kawhi Leonard", "val": 0.5}, {"name": "Nicolas Batum", "val": 0.5}, {"name": "Kris Dunn", "val": 0.4}, {"name": "Ben Simmons", "val": 0.4}, {"name": "Derrick Jones Jr.", "val": 0.4}, {"name": "Terance Mann", "val": 0.3}, {"name": "Drew Eubanks", "val": 0.3}, {"name": "Kevin Porter Jr.", "val": 0.2}, {"name": "Bogdan Bogdanović", "val": 0.2}, {"name": "Bones Hyland", "val": 0.2}, {"name": "Norman Powell", "val": 0.2}, {"name": "Amir Coffey", "val": 0.1}, {"name": "Jordan Miller", "val": 0.1}, {"name": "Kobe Brown", "val": 0.1}, {"name": "Cam Christie", "val": 0.1}, {"name": "MarJon Beauchamp", "val": 0.0}, {"name": "Patty Mills", "val": 0.0}, {"name": "Trentyn Flowers", "val": 0.0}, {"name": "Patrick Baldwin Jr.", "val": 0.0}] },
    },
    avail: [
      { name: "Ivica Zubac", g: 80 },
      { name: "James Harden", g: 79 },
      { name: "Nicolas Batum", g: 78 },
      { name: "Derrick Jones Jr.", g: 77 },
      { name: "Kris Dunn", g: 74 },
      { name: "Amir Coffey", g: 72 },
      { name: "Norman Powell", g: 60 },
      { name: "Kevin Porter Jr.", g: 45 },
      { name: "Kobe Brown", g: 40 },
      { name: "Jordan Miller", g: 37 },
      { name: "Terance Mann", g: 37 },
      { name: "Kawhi Leonard", g: 37 },
      { name: "Bogdan Bogdanović", g: 30 },
      { name: "Mo Bamba", g: 28 },
      { name: "Kai Jones", g: 28 },
      { name: "Drew Eubanks", g: 24 },
      { name: "Bones Hyland", g: 20 },
      { name: "Ben Simmons", g: 18 },
      { name: "Cam Christie", g: 13 },
      { name: "Patty Mills", g: 12 },
      { name: "Trentyn Flowers", g: 6 },
      { name: "MarJon Beauchamp", g: 3 },
      { name: "Patrick Baldwin Jr.", g: 2 },
    ]
  },

  "2025-26": {
    w: 42, l: 40,
    topW:   { pts: 131, opp: 90, against: "Sacramento Kings" },
    worstL: { pts: 91, opp: 124, against: "Cleveland Cavaliers" },
    conf_rank: 9,
    games: buildGames(
      "LWWLWLLLLLLWLLLWLLLLLWLLLLLWWWWWWLWLWWWWWWLWWWLWLLWWLWWLLLWWWLWWWWLLLLWWWWWLLWWLLW",
      ["Utah Jazz", "Phoenix Suns", "Portland Trail Blazers", "Golden State Warriors", "New Orleans Pelicans", "Miami Heat", "Oklahoma City Thunder", "Phoenix Suns", "Phoenix Suns", "Atlanta Hawks", "Denver Nuggets", "Dallas Mavericks", "Boston Celtics", "Philadelphia 76ers", "Orlando Magic", "Charlotte Hornets", "Cleveland Cavaliers", "Los Angeles Lakers", "Memphis Grizzlies", "Dallas Mavericks", "Miami Heat", "Atlanta Hawks", "Memphis Grizzlies", "Minnesota Timberwolves", "Houston Rockets", "Memphis Grizzlies", "Oklahoma City Thunder", "Los Angeles Lakers", "Houston Rockets", "Portland Trail Blazers", "Detroit Pistons", "Sacramento Kings", "Utah Jazz", "Boston Celtics", "Golden State Warriors", "New York Knicks", "Brooklyn Nets", "Detroit Pistons", "Charlotte Hornets", "Washington Wizards", "Toronto Raptors", "Washington Wizards", "Chicago Bulls", "Los Angeles Lakers", "Brooklyn Nets", "Utah Jazz", "Denver Nuggets", "Phoenix Suns", "Philadelphia 76ers", "Cleveland Cavaliers", "Sacramento Kings", "Minnesota Timberwolves", "Houston Rockets", "Houston Rockets", "Denver Nuggets", "Los Angeles Lakers", "Orlando Magic", "Minnesota Timberwolves", "New Orleans Pelicans", "Golden State Warriors", "Indiana Pacers", "San Antonio Spurs", "Memphis Grizzlies", "New York Knicks", "Minnesota Timberwolves", "Chicago Bulls", "Sacramento Kings", "San Antonio Spurs", "New Orleans Pelicans", "New Orleans Pelicans", "Dallas Mavericks", "Milwaukee Bucks", "Toronto Raptors", "Indiana Pacers", "Milwaukee Bucks", "Portland Trail Blazers", "San Antonio Spurs", "Sacramento Kings", "Dallas Mavericks", "Oklahoma City Thunder", "Portland Trail Blazers", "Golden State Warriors"],
      [108, 129, 114, 79, 126, 119, 107, 102, 103, 102, 116, 133, 118, 108, 101, 131, 105, 118, 107, 110, 123, 115, 98, 106, 113, 103, 101, 103, 128, 119, 112, 131, 118, 115, 103, 111, 121, 98, 117, 119, 121, 110, 110, 112, 126, 115, 109, 117, 113, 91, 114, 115, 95, 105, 115, 122, 109, 88, 137, 114, 130, 112, 123, 126, 153, 119, 109, 115, 109, 99, 138, 129, 119, 114, 127, 104, 99, 138, 116, 110, 97, 115],
      [-21, 27, 7, -19, 2, -1, -19, -13, -11, -3, -14, 6, -3, -2, -28, 15, -15, -17, -5, -4, -17, 23, -9, -3, -2, -18, -21, 15, 20, 16, 13, 41, 17, -31, 1, -12, 16, 6, 8, 14, 4, 4, -28, 8, 37, 12, -13, 24, -15, -33, 3, 19, -7, 3, 1, -3, -2, -6, 20, 13, 23, -4, 3, 8, 25, 11, -9, -4, -15, -6, 7, 33, 25, 1, 14, -10, -19, 29, 13, -18, -19, 5]
    ),
    leaders: {
      pts: { name: "Kawhi Leonard", val: 27.9, all: [{"name": "Kawhi Leonard", "val": 27.9}, {"name": "James Harden", "val": 25.4}, {"name": "Darius Garland", "val": 19.9}, {"name": "Bennedict Mathurin", "val": 17.4}, {"name": "Ivica Zubac", "val": 14.4}, {"name": "John Collins", "val": 13.6}, {"name": "Derrick Jones Jr.", "val": 10.1}, {"name": "Jordan Miller", "val": 10.0}, {"name": "Brook Lopez", "val": 8.5}, {"name": "Bradley Beal", "val": 8.2}, {"name": "Isaiah Jackson", "val": 7.5}, {"name": "Bogdan Bogdanović", "val": 7.4}, {"name": "Kris Dunn", "val": 7.3}, {"name": "Kobe Sanders", "val": 7.3}, {"name": "Patrick Baldwin Jr.", "val": 5.0}, {"name": "Yanic Konan Niederhäuser", "val": 4.3}, {"name": "Nicolas Batum", "val": 4.0}, {"name": "Dalano Banton", "val": 3.0}, {"name": "Kobe Brown", "val": 2.9}, {"name": "Chris Paul", "val": 2.9}, {"name": "Cam Christie", "val": 2.8}, {"name": "Norchad Omier", "val": 2.8}, {"name": "Sean Pedulla", "val": 1.9}, {"name": "TyTy Washington Jr.", "val": 1.3}, {"name": "Jahmyl Telfort", "val": 0.1}, {"name": "RayJ Dennis", "val": 0.0}] },
      reb: { name: "Ivica Zubac", val: 11.0, all: [{"name": "Ivica Zubac", "val": 11.0}, {"name": "Kawhi Leonard", "val": 6.4}, {"name": "Bennedict Mathurin", "val": 5.5}, {"name": "John Collins", "val": 5.3}, {"name": "James Harden", "val": 4.8}, {"name": "Isaiah Jackson", "val": 4.6}, {"name": "Brook Lopez", "val": 3.6}, {"name": "Derrick Jones Jr.", "val": 3.5}, {"name": "Kris Dunn", "val": 3.3}, {"name": "Jordan Miller", "val": 3.0}, {"name": "Yanic Konan Niederhäuser", "val": 2.9}, {"name": "Bogdan Bogdanović", "val": 2.6}, {"name": "Nicolas Batum", "val": 2.5}, {"name": "Darius Garland", "val": 2.3}, {"name": "Kobe Sanders", "val": 2.3}, {"name": "RayJ Dennis", "val": 2.0}, {"name": "Chris Paul", "val": 1.8}, {"name": "Kobe Brown", "val": 1.6}, {"name": "Cam Christie", "val": 1.4}, {"name": "Norchad Omier", "val": 1.2}, {"name": "Bradley Beal", "val": 0.8}, {"name": "Patrick Baldwin Jr.", "val": 0.5}, {"name": "Dalano Banton", "val": 0.5}, {"name": "TyTy Washington Jr.", "val": 0.4}, {"name": "Sean Pedulla", "val": 0.4}, {"name": "Jahmyl Telfort", "val": 0.4}] },
      ast: { name: "James Harden", val: 8.1, all: [{"name": "James Harden", "val": 8.1}, {"name": "Darius Garland", "val": 6.4}, {"name": "Kawhi Leonard", "val": 3.6}, {"name": "Kris Dunn", "val": 3.6}, {"name": "Chris Paul", "val": 3.3}, {"name": "Bennedict Mathurin", "val": 2.5}, {"name": "Jordan Miller", "val": 2.3}, {"name": "Ivica Zubac", "val": 2.2}, {"name": "Bogdan Bogdanović", "val": 2.2}, {"name": "Bradley Beal", "val": 1.7}, {"name": "Kobe Sanders", "val": 1.6}, {"name": "Derrick Jones Jr.", "val": 1.4}, {"name": "Brook Lopez", "val": 1.3}, {"name": "Isaiah Jackson", "val": 1.2}, {"name": "TyTy Washington Jr.", "val": 1.1}, {"name": "John Collins", "val": 1.0}, {"name": "Dalano Banton", "val": 1.0}, {"name": "Nicolas Batum", "val": 0.9}, {"name": "Kobe Brown", "val": 0.8}, {"name": "Sean Pedulla", "val": 0.7}, {"name": "Cam Christie", "val": 0.6}, {"name": "Yanic Konan Niederhäuser", "val": 0.3}, {"name": "Norchad Omier", "val": 0.3}, {"name": "Jahmyl Telfort", "val": 0.1}, {"name": "Patrick Baldwin Jr.", "val": 0.0}, {"name": "RayJ Dennis", "val": 0.0}] },
      stl: { name: "Kawhi Leonard", val: 1.9, all: [{"name": "Kawhi Leonard", "val": 1.9}, {"name": "Kris Dunn", "val": 1.6}, {"name": "James Harden", "val": 1.3}, {"name": "Darius Garland", "val": 1.2}, {"name": "Bennedict Mathurin", "val": 1.0}, {"name": "John Collins", "val": 0.9}, {"name": "Derrick Jones Jr.", "val": 0.9}, {"name": "Jordan Miller", "val": 0.8}, {"name": "Chris Paul", "val": 0.7}, {"name": "Kobe Sanders", "val": 0.7}, {"name": "Isaiah Jackson", "val": 0.6}, {"name": "Brook Lopez", "val": 0.6}, {"name": "Nicolas Batum", "val": 0.6}, {"name": "Bradley Beal", "val": 0.5}, {"name": "Dalano Banton", "val": 0.5}, {"name": "Ivica Zubac", "val": 0.4}, {"name": "TyTy Washington Jr.", "val": 0.4}, {"name": "Bogdan Bogdanović", "val": 0.4}, {"name": "Kobe Brown", "val": 0.3}, {"name": "Cam Christie", "val": 0.3}, {"name": "Norchad Omier", "val": 0.2}, {"name": "Yanic Konan Niederhäuser", "val": 0.1}, {"name": "Jahmyl Telfort", "val": 0.1}, {"name": "Patrick Baldwin Jr.", "val": 0.0}, {"name": "Sean Pedulla", "val": 0.0}, {"name": "RayJ Dennis", "val": 0.0}] },
      blk: { name: "Brook Lopez", val: 1.2, all: [{"name": "Brook Lopez", "val": 1.2}, {"name": "Isaiah Jackson", "val": 1.2}, {"name": "Derrick Jones Jr.", "val": 1.0}, {"name": "Ivica Zubac", "val": 0.8}, {"name": "Yanic Konan Niederhäuser", "val": 0.7}, {"name": "John Collins", "val": 0.7}, {"name": "Kawhi Leonard", "val": 0.4}, {"name": "James Harden", "val": 0.4}, {"name": "Darius Garland", "val": 0.3}, {"name": "Bennedict Mathurin", "val": 0.3}, {"name": "Nicolas Batum", "val": 0.3}, {"name": "Kris Dunn", "val": 0.2}, {"name": "Jordan Miller", "val": 0.2}, {"name": "TyTy Washington Jr.", "val": 0.2}, {"name": "Cam Christie", "val": 0.1}, {"name": "Bogdan Bogdanović", "val": 0.1}, {"name": "Kobe Brown", "val": 0.1}, {"name": "Kobe Sanders", "val": 0.1}, {"name": "Chris Paul", "val": 0.0}, {"name": "Bradley Beal", "val": 0.0}, {"name": "Patrick Baldwin Jr.", "val": 0.0}, {"name": "Dalano Banton", "val": 0.0}, {"name": "Sean Pedulla", "val": 0.0}, {"name": "Norchad Omier", "val": 0.0}, {"name": "RayJ Dennis", "val": 0.0}, {"name": "Jahmyl Telfort", "val": 0.0}] },
    },
    avail: [
      { name: "Kris Dunn", g: 82 },
      { name: "Brook Lopez", g: 75 },
      { name: "Nicolas Batum", g: 74 },
      { name: "John Collins", g: 69 },
      { name: "Kobe Sanders", g: 68 },
      { name: "Kawhi Leonard", g: 65 },
      { name: "Jordan Miller", g: 60 },
      { name: "Cam Christie", g: 55 },
      { name: "Derrick Jones Jr.", g: 50 },
      { name: "James Harden", g: 44 },
      { name: "Ivica Zubac", g: 43 },
      { name: "Yanic Konan Niederhäuser", g: 41 },
      { name: "Kobe Brown", g: 34 },
      { name: "Bennedict Mathurin", g: 26 },
      { name: "Bogdan Bogdanović", g: 23 },
      { name: "Darius Garland", g: 19 },
      { name: "Isaiah Jackson", g: 17 },
      { name: "Chris Paul", g: 16 },
      { name: "TyTy Washington Jr.", g: 16 },
      { name: "Jahmyl Telfort", g: 8 },
      { name: "Sean Pedulla", g: 7 },
      { name: "Bradley Beal", g: 6 },
      { name: "Norchad Omier", g: 6 },
      { name: "Patrick Baldwin Jr.", g: 2 },
      { name: "Dalano Banton", g: 2 },
      { name: "RayJ Dennis", g: 1 },
    ]
  },

};
