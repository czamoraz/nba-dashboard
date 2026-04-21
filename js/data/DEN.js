/* ================================================================
   DEN.js — Denver Nuggets · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Denver Nuggets",
  abbr:          "DEN",
  conference:    "West",
  primaryColor:  "#0E2240",
  secondaryColor:"#FEC524",
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
    topW:   { pts: 133, opp: 95, against: "Cleveland Cavaliers" },
    worstL: { pts: 111, opp: 135, against: "Toronto Raptors" },
    conf_rank: 3,
    games: buildGames(
      "LLWLLWWLWWLWLWWWWWLWLLLWWWLLWLWLWWWWWLWWWLWLWWWWWWWWLLWWWWLWWWWWLWLLWWWL",
      ["Sacramento Kings", "Los Angeles Clippers", "Houston Rockets", "Sacramento Kings", "Phoenix Suns", "Minnesota Timberwolves", "Minnesota Timberwolves", "Dallas Mavericks", "Philadelphia 76ers", "New York Knicks", "Brooklyn Nets", "Golden State Warriors", "Utah Jazz", "Oklahoma City Thunder", "Phoenix Suns", "Phoenix Suns", "Dallas Mavericks", "Miami Heat", "San Antonio Spurs", "Utah Jazz", "Los Angeles Lakers", "Sacramento Kings", "Milwaukee Bucks", "Cleveland Cavaliers", "Oklahoma City Thunder", "Los Angeles Lakers", "Boston Celtics", "Washington Wizards", "Cleveland Cavaliers", "Atlanta Hawks", "Portland Trail Blazers", "Washington Wizards", "Oklahoma City Thunder", "Chicago Bulls", "Milwaukee Bucks", "Indiana Pacers", "Memphis Grizzlies", "Dallas Mavericks", "Indiana Pacers", "Charlotte Hornets", "Chicago Bulls", "New Orleans Pelicans", "Orlando Magic", "Toronto Raptors", "New Orleans Pelicans", "Atlanta Hawks", "Philadelphia 76ers", "Los Angeles Clippers", "Orlando Magic", "Detroit Pistons", "San Antonio Spurs", "San Antonio Spurs", "Boston Celtics", "Golden State Warriors", "Miami Heat", "Houston Rockets", "Memphis Grizzlies", "Portland Trail Blazers", "Golden State Warriors", "Houston Rockets", "Memphis Grizzlies", "New Orleans Pelicans", "Toronto Raptors", "Los Angeles Clippers", "Los Angeles Lakers", "New York Knicks", "Utah Jazz", "Brooklyn Nets", "Charlotte Hornets", "Minnesota Timberwolves", "Detroit Pistons", "Portland Trail Blazers"],
      [122, 108, 124, 115, 103, 124, 123, 117, 115, 114, 116, 114, 105, 119, 130, 120, 117, 109, 109, 128, 93, 114, 112, 133, 97, 122, 99, 128, 120, 115, 111, 110, 126, 118, 128, 113, 103, 103, 121, 129, 131, 108, 110, 111, 113, 126, 104, 101, 119, 134, 106, 121, 87, 107, 123, 128, 139, 106, 97, 129, 120, 114, 121, 110, 89, 113, 120, 119, 117, 114, 104, 116],
      [-2, -13, 13, -10, -3, 15, 7, -7, 12, 25, -6, 10, -4, 18, 4, 8, 4, 27, -10, 11, -21, -5, -13, 38, 2, 17, -13, -2, 17, -8, 5, -2, 30, 6, 31, 10, 1, -13, 15, 25, 4, -5, 11, -24, 5, 24, 9, 7, 10, 15, 10, 2, -18, -9, 17, 29, 2, 1, -21, 13, 24, 2, 10, 6, -4, 16, -7, -6, 5, 11, 13, -16]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 26.4, all: [{"name": "Nikola Jokić", "val": 26.4}, {"name": "Jamal Murray", "val": 21.2}, {"name": "Michael Porter Jr.", "val": 19.0}, {"name": "Will Barton", "val": 12.7}, {"name": "Aaron Gordon", "val": 10.2}, {"name": "Monte Morris", "val": 10.2}, {"name": "Gary Harris", "val": 9.7}, {"name": "Paul Millsap", "val": 9.0}, {"name": "Austin Rivers", "val": 8.7}, {"name": "JaMychal Green", "val": 8.1}, {"name": "PJ Dozier", "val": 7.7}, {"name": "Facundo Campazzo", "val": 6.1}, {"name": "JaVale McGee", "val": 5.5}, {"name": "Isaiah Hartenstein", "val": 3.5}, {"name": "Shaquille Harrison", "val": 3.3}, {"name": "Zeke Nnaji", "val": 3.2}, {"name": "Markus Howard", "val": 2.8}, {"name": "R.J. Hampton", "val": 2.6}, {"name": "Bol Bol", "val": 2.2}, {"name": "Vlatko Čančar", "val": 2.1}, {"name": "Greg Whittington", "val": 0.0}, {"name": "Gary Clark", "val": 0.0}] },
      reb: { name: "Nikola Jokić", val: 10.8, all: [{"name": "Nikola Jokić", "val": 10.8}, {"name": "Michael Porter Jr.", "val": 7.3}, {"name": "JaVale McGee", "val": 5.3}, {"name": "JaMychal Green", "val": 4.8}, {"name": "Aaron Gordon", "val": 4.7}, {"name": "Paul Millsap", "val": 4.7}, {"name": "Jamal Murray", "val": 4.0}, {"name": "Will Barton", "val": 4.0}, {"name": "PJ Dozier", "val": 3.6}, {"name": "Isaiah Hartenstein", "val": 2.8}, {"name": "Gary Harris", "val": 2.5}, {"name": "Austin Rivers", "val": 2.3}, {"name": "Shaquille Harrison", "val": 2.3}, {"name": "Facundo Campazzo", "val": 2.1}, {"name": "Monte Morris", "val": 2.0}, {"name": "R.J. Hampton", "val": 2.0}, {"name": "Zeke Nnaji", "val": 1.5}, {"name": "Vlatko Čančar", "val": 1.2}, {"name": "Bol Bol", "val": 0.8}, {"name": "Markus Howard", "val": 0.6}, {"name": "Gary Clark", "val": 0.5}, {"name": "Greg Whittington", "val": 0.0}] },
      ast: { name: "Nikola Jokić", val: 8.3, all: [{"name": "Nikola Jokić", "val": 8.3}, {"name": "Jamal Murray", "val": 4.8}, {"name": "Facundo Campazzo", "val": 3.6}, {"name": "Will Barton", "val": 3.2}, {"name": "Monte Morris", "val": 3.2}, {"name": "Austin Rivers", "val": 2.6}, {"name": "Aaron Gordon", "val": 2.2}, {"name": "PJ Dozier", "val": 1.8}, {"name": "Paul Millsap", "val": 1.8}, {"name": "Gary Harris", "val": 1.7}, {"name": "Michael Porter Jr.", "val": 1.1}, {"name": "Shaquille Harrison", "val": 0.9}, {"name": "JaMychal Green", "val": 0.9}, {"name": "R.J. Hampton", "val": 0.6}, {"name": "JaVale McGee", "val": 0.5}, {"name": "Isaiah Hartenstein", "val": 0.5}, {"name": "Markus Howard", "val": 0.5}, {"name": "Vlatko Čančar", "val": 0.3}, {"name": "Zeke Nnaji", "val": 0.2}, {"name": "Bol Bol", "val": 0.2}, {"name": "Greg Whittington", "val": 0.0}, {"name": "Gary Clark", "val": 0.0}] },
      stl: { name: "Jamal Murray", val: 1.3, all: [{"name": "Jamal Murray", "val": 1.3}, {"name": "Nikola Jokić", "val": 1.3}, {"name": "Austin Rivers", "val": 1.2}, {"name": "Facundo Campazzo", "val": 1.2}, {"name": "Will Barton", "val": 0.9}, {"name": "Gary Harris", "val": 0.9}, {"name": "Paul Millsap", "val": 0.9}, {"name": "Shaquille Harrison", "val": 0.9}, {"name": "Michael Porter Jr.", "val": 0.7}, {"name": "Aaron Gordon", "val": 0.7}, {"name": "Monte Morris", "val": 0.7}, {"name": "PJ Dozier", "val": 0.6}, {"name": "Isaiah Hartenstein", "val": 0.4}, {"name": "JaMychal Green", "val": 0.4}, {"name": "Vlatko Čančar", "val": 0.3}, {"name": "Zeke Nnaji", "val": 0.2}, {"name": "R.J. Hampton", "val": 0.2}, {"name": "JaVale McGee", "val": 0.2}, {"name": "Markus Howard", "val": 0.1}, {"name": "Bol Bol", "val": 0.1}, {"name": "Greg Whittington", "val": 0.0}, {"name": "Gary Clark", "val": 0.0}] },
      blk: { name: "JaVale McGee", val: 1.1, all: [{"name": "JaVale McGee", "val": 1.1}, {"name": "Michael Porter Jr.", "val": 0.9}, {"name": "Nikola Jokić", "val": 0.7}, {"name": "Isaiah Hartenstein", "val": 0.7}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "Paul Millsap", "val": 0.6}, {"name": "JaMychal Green", "val": 0.4}, {"name": "Will Barton", "val": 0.4}, {"name": "PJ Dozier", "val": 0.4}, {"name": "Bol Bol", "val": 0.3}, {"name": "Shaquille Harrison", "val": 0.3}, {"name": "Jamal Murray", "val": 0.3}, {"name": "Monte Morris", "val": 0.3}, {"name": "Facundo Campazzo", "val": 0.2}, {"name": "Gary Harris", "val": 0.2}, {"name": "Zeke Nnaji", "val": 0.1}, {"name": "R.J. Hampton", "val": 0.1}, {"name": "Austin Rivers", "val": 0.1}, {"name": "Vlatko Čančar", "val": 0.0}, {"name": "Markus Howard", "val": 0.0}, {"name": "Greg Whittington", "val": 0.0}, {"name": "Gary Clark", "val": 0.0}] },
    },
    avail: [
      { name: "Nikola Jokić", g: 72 },
      { name: "Facundo Campazzo", g: 65 },
      { name: "Michael Porter Jr.", g: 61 },
      { name: "JaMychal Green", g: 58 },
      { name: "Will Barton", g: 56 },
      { name: "Paul Millsap", g: 56 },
      { name: "PJ Dozier", g: 50 },
      { name: "Jamal Murray", g: 48 },
      { name: "Monte Morris", g: 47 },
      { name: "Zeke Nnaji", g: 42 },
      { name: "Vlatko Čančar", g: 41 },
      { name: "Markus Howard", g: 37 },
      { name: "Bol Bol", g: 32 },
      { name: "Isaiah Hartenstein", g: 30 },
      { name: "Aaron Gordon", g: 25 },
      { name: "R.J. Hampton", g: 25 },
      { name: "Gary Harris", g: 19 },
      { name: "Shaquille Harrison", g: 17 },
      { name: "Austin Rivers", g: 15 },
      { name: "JaVale McGee", g: 13 },
      { name: "Greg Whittington", g: 4 },
      { name: "Gary Clark", g: 2 },
    ]
  },

  "2021-22": {
    w: 48, l: 34,
    topW:   { pts: 133, opp: 96, against: "Los Angeles Lakers" },
    worstL: { pts: 97, opp: 126, against: "Phoenix Suns" },
    conf_rank: 6,
    games: buildGames(
      "WWLLWWLLWWWWWLLLLLLWLWLWLWWLWLLWWWLLWWLWWLWLWWWWWLLLWWLWWWWWWLWWWWLLWWLLWLWWWLWLWL",
      ["Phoenix Suns", "San Antonio Spurs", "Cleveland Cavaliers", "Utah Jazz", "Dallas Mavericks", "Minnesota Timberwolves", "Memphis Grizzlies", "Memphis Grizzlies", "Houston Rockets", "Miami Heat", "Indiana Pacers", "Atlanta Hawks", "Portland Trail Blazers", "Dallas Mavericks", "Philadelphia 76ers", "Chicago Bulls", "Phoenix Suns", "Portland Trail Blazers", "Milwaukee Bucks", "Miami Heat", "Orlando Magic", "New York Knicks", "Chicago Bulls", "New Orleans Pelicans", "San Antonio Spurs", "San Antonio Spurs", "Washington Wizards", "Minnesota Timberwolves", "Atlanta Hawks", "Oklahoma City Thunder", "Charlotte Hornets", "Los Angeles Clippers", "Golden State Warriors", "Houston Rockets", "Dallas Mavericks", "Utah Jazz", "Sacramento Kings", "Oklahoma City Thunder", "Los Angeles Clippers", "Portland Trail Blazers", "Los Angeles Lakers", "Utah Jazz", "Los Angeles Clippers", "Memphis Grizzlies", "Detroit Pistons", "Detroit Pistons", "Brooklyn Nets", "New Orleans Pelicans", "Milwaukee Bucks", "Minnesota Timberwolves", "Utah Jazz", "New Orleans Pelicans", "Brooklyn Nets", "New York Knicks", "Boston Celtics", "Toronto Raptors", "Orlando Magic", "Golden State Warriors", "Sacramento Kings", "Sacramento Kings", "Portland Trail Blazers", "Oklahoma City Thunder", "Houston Rockets", "New Orleans Pelicans", "Golden State Warriors", "Sacramento Kings", "Golden State Warriors", "Toronto Raptors", "Philadelphia 76ers", "Washington Wizards", "Cleveland Cavaliers", "Boston Celtics", "Los Angeles Clippers", "Phoenix Suns", "Oklahoma City Thunder", "Charlotte Hornets", "Indiana Pacers", "Minnesota Timberwolves", "Los Angeles Lakers", "San Antonio Spurs", "Memphis Grizzlies", "Los Angeles Lakers"],
      [110, 102, 87, 110, 106, 93, 97, 106, 95, 113, 101, 105, 124, 101, 89, 108, 97, 100, 109, 120, 103, 113, 97, 120, 111, 127, 113, 107, 133, 94, 107, 103, 89, 124, 89, 109, 121, 99, 85, 140, 133, 102, 130, 118, 117, 110, 124, 116, 136, 115, 104, 105, 124, 132, 102, 110, 121, 117, 128, 115, 124, 107, 116, 138, 131, 106, 102, 115, 114, 127, 116, 104, 127, 130, 113, 113, 125, 130, 129, 97, 122, 141],
      [12, 6, -12, -12, 31, 2, -9, -2, 1, 17, 3, 9, 29, -10, -14, -6, -29, -19, -11, 9, -5, 14, -12, 6, -12, 15, 6, -17, 18, -14, -8, 3, 3, 13, -14, -6, 10, 4, -2, 32, 37, -23, 2, -4, 6, 5, 6, 11, 36, -15, -4, -8, 20, 17, -6, 1, 10, 1, 18, 5, 32, -12, 15, 8, 7, 6, -11, -12, 4, 18, -3, -20, 12, -10, 6, 4, 7, -6, 11, -19, 13, -5]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 27.1, all: [{"name": "Nikola Jokić", "val": 27.1}, {"name": "Aaron Gordon", "val": 15.0}, {"name": "Will Barton", "val": 14.7}, {"name": "Monte Morris", "val": 12.6}, {"name": "Jeff Green", "val": 10.3}, {"name": "Bones Hyland", "val": 10.1}, {"name": "Michael Porter Jr.", "val": 9.9}, {"name": "DeMarcus Cousins", "val": 8.9}, {"name": "Bryn Forbes", "val": 8.6}, {"name": "Zeke Nnaji", "val": 6.6}, {"name": "JaMychal Green", "val": 6.4}, {"name": "Austin Rivers", "val": 6.0}, {"name": "PJ Dozier", "val": 5.4}, {"name": "Facundo Campazzo", "val": 5.1}, {"name": "Davon Reed", "val": 4.4}, {"name": "Vlatko Čančar", "val": 4.1}, {"name": "Markus Howard", "val": 4.1}, {"name": "Bol Bol", "val": 2.4}, {"name": "Rayjon Tucker", "val": 2.0}, {"name": "James Ennis III", "val": 1.3}, {"name": "Petr Cornelie", "val": 1.1}, {"name": "Carlik Jones", "val": 1.0}] },
      reb: { name: "Nikola Jokić", val: 13.8, all: [{"name": "Nikola Jokić", "val": 13.8}, {"name": "Michael Porter Jr.", "val": 6.6}, {"name": "Aaron Gordon", "val": 5.9}, {"name": "DeMarcus Cousins", "val": 5.5}, {"name": "Will Barton", "val": 4.8}, {"name": "JaMychal Green", "val": 4.2}, {"name": "Zeke Nnaji", "val": 3.6}, {"name": "PJ Dozier", "val": 3.5}, {"name": "Jeff Green", "val": 3.1}, {"name": "Monte Morris", "val": 3.0}, {"name": "Bones Hyland", "val": 2.7}, {"name": "Davon Reed", "val": 2.3}, {"name": "Vlatko Čančar", "val": 2.1}, {"name": "Facundo Campazzo", "val": 1.8}, {"name": "Austin Rivers", "val": 1.7}, {"name": "Bol Bol", "val": 1.4}, {"name": "Rayjon Tucker", "val": 1.3}, {"name": "Petr Cornelie", "val": 1.1}, {"name": "Bryn Forbes", "val": 0.9}, {"name": "James Ennis III", "val": 0.7}, {"name": "Markus Howard", "val": 0.4}, {"name": "Carlik Jones", "val": 0.0}] },
      ast: { name: "Nikola Jokić", val: 7.9, all: [{"name": "Nikola Jokić", "val": 7.9}, {"name": "Monte Morris", "val": 4.4}, {"name": "Will Barton", "val": 3.9}, {"name": "Facundo Campazzo", "val": 3.4}, {"name": "Bones Hyland", "val": 2.8}, {"name": "Aaron Gordon", "val": 2.5}, {"name": "Michael Porter Jr.", "val": 1.9}, {"name": "DeMarcus Cousins", "val": 1.7}, {"name": "PJ Dozier", "val": 1.6}, {"name": "Austin Rivers", "val": 1.3}, {"name": "Jeff Green", "val": 1.3}, {"name": "Rayjon Tucker", "val": 1.3}, {"name": "Davon Reed", "val": 1.1}, {"name": "Vlatko Čančar", "val": 1.1}, {"name": "James Ennis III", "val": 1.0}, {"name": "Bryn Forbes", "val": 1.0}, {"name": "JaMychal Green", "val": 0.9}, {"name": "Zeke Nnaji", "val": 0.4}, {"name": "Bol Bol", "val": 0.4}, {"name": "Markus Howard", "val": 0.2}, {"name": "Petr Cornelie", "val": 0.2}, {"name": "Carlik Jones", "val": 0.0}] },
      stl: { name: "Nikola Jokić", val: 1.5, all: [{"name": "Nikola Jokić", "val": 1.5}, {"name": "Michael Porter Jr.", "val": 1.1}, {"name": "Facundo Campazzo", "val": 1.0}, {"name": "Austin Rivers", "val": 0.8}, {"name": "Will Barton", "val": 0.8}, {"name": "Monte Morris", "val": 0.7}, {"name": "JaMychal Green", "val": 0.6}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "Bones Hyland", "val": 0.6}, {"name": "PJ Dozier", "val": 0.6}, {"name": "DeMarcus Cousins", "val": 0.6}, {"name": "Davon Reed", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.4}, {"name": "Jeff Green", "val": 0.4}, {"name": "Rayjon Tucker", "val": 0.3}, {"name": "Markus Howard", "val": 0.3}, {"name": "Bryn Forbes", "val": 0.2}, {"name": "Vlatko Čančar", "val": 0.1}, {"name": "Bol Bol", "val": 0.1}, {"name": "Petr Cornelie", "val": 0.1}, {"name": "James Ennis III", "val": 0.0}, {"name": "Carlik Jones", "val": 0.0}] },
      blk: { name: "Nikola Jokić", val: 0.9, all: [{"name": "Nikola Jokić", "val": 0.9}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "DeMarcus Cousins", "val": 0.4}, {"name": "JaMychal Green", "val": 0.4}, {"name": "Jeff Green", "val": 0.4}, {"name": "Will Barton", "val": 0.4}, {"name": "Facundo Campazzo", "val": 0.4}, {"name": "PJ Dozier", "val": 0.3}, {"name": "Zeke Nnaji", "val": 0.3}, {"name": "Bones Hyland", "val": 0.3}, {"name": "Michael Porter Jr.", "val": 0.2}, {"name": "Monte Morris", "val": 0.2}, {"name": "Davon Reed", "val": 0.2}, {"name": "Vlatko Čančar", "val": 0.2}, {"name": "Bryn Forbes", "val": 0.1}, {"name": "Austin Rivers", "val": 0.1}, {"name": "Bol Bol", "val": 0.1}, {"name": "Petr Cornelie", "val": 0.1}, {"name": "Rayjon Tucker", "val": 0.0}, {"name": "Markus Howard", "val": 0.0}, {"name": "James Ennis III", "val": 0.0}, {"name": "Carlik Jones", "val": 0.0}] },
    },
    avail: [
      { name: "Aaron Gordon", g: 75 },
      { name: "Monte Morris", g: 75 },
      { name: "Jeff Green", g: 75 },
      { name: "Nikola Jokić", g: 74 },
      { name: "Will Barton", g: 71 },
      { name: "Bones Hyland", g: 69 },
      { name: "Austin Rivers", g: 67 },
      { name: "JaMychal Green", g: 67 },
      { name: "Facundo Campazzo", g: 65 },
      { name: "Davon Reed", g: 48 },
      { name: "Zeke Nnaji", g: 41 },
      { name: "Bryn Forbes", g: 35 },
      { name: "DeMarcus Cousins", g: 31 },
      { name: "Markus Howard", g: 31 },
      { name: "PJ Dozier", g: 18 },
      { name: "Vlatko Čančar", g: 15 },
      { name: "Bol Bol", g: 14 },
      { name: "Petr Cornelie", g: 13 },
      { name: "Michael Porter Jr.", g: 9 },
      { name: "Rayjon Tucker", g: 3 },
      { name: "James Ennis III", g: 3 },
      { name: "Carlik Jones", g: 2 },
    ]
  },

  "2022-23": {
    w: 53, l: 29,
    topW:   { pts: 146, opp: 112, against: "Minnesota Timberwolves" },
    worstL: { pts: 98, opp: 128, against: "Minnesota Timberwolves" },
    conf_rank: 1,
    games: buildGames(
      "LWWLWWLWWWWLWLLWLWWWWLLLWWWLWWWWWLWWLWWWWWWWWWLWLLWWWLWLWWWWLWWWWLLLLWLWWWWLLWLLLW",
      ["Utah Jazz", "Golden State Warriors", "Oklahoma City Thunder", "Portland Trail Blazers", "Los Angeles Lakers", "Utah Jazz", "Los Angeles Lakers", "Oklahoma City Thunder", "San Antonio Spurs", "San Antonio Spurs", "Indiana Pacers", "Boston Celtics", "Chicago Bulls", "New York Knicks", "Dallas Mavericks", "Dallas Mavericks", "Detroit Pistons", "Oklahoma City Thunder", "Los Angeles Clippers", "Houston Rockets", "Houston Rockets", "Atlanta Hawks", "New Orleans Pelicans", "Dallas Mavericks", "Portland Trail Blazers", "Utah Jazz", "Washington Wizards", "Los Angeles Lakers", "Charlotte Hornets", "Memphis Grizzlies", "Portland Trail Blazers", "Phoenix Suns", "Sacramento Kings", "Sacramento Kings", "Miami Heat", "Boston Celtics", "Minnesota Timberwolves", "Los Angeles Clippers", "Cleveland Cavaliers", "Los Angeles Lakers", "Phoenix Suns", "Los Angeles Clippers", "Orlando Magic", "Portland Trail Blazers", "Minnesota Timberwolves", "Indiana Pacers", "Oklahoma City Thunder", "New Orleans Pelicans", "Milwaukee Bucks", "Philadelphia 76ers", "New Orleans Pelicans", "Golden State Warriors", "Atlanta Hawks", "Minnesota Timberwolves", "Minnesota Timberwolves", "Orlando Magic", "Charlotte Hornets", "Miami Heat", "Dallas Mavericks", "Cleveland Cavaliers", "Memphis Grizzlies", "Los Angeles Clippers", "Houston Rockets", "Memphis Grizzlies", "Toronto Raptors", "Chicago Bulls", "San Antonio Spurs", "Brooklyn Nets", "Toronto Raptors", "Detroit Pistons", "New York Knicks", "Brooklyn Nets", "Washington Wizards", "Milwaukee Bucks", "Philadelphia 76ers", "New Orleans Pelicans", "Phoenix Suns", "Golden State Warriors", "Houston Rockets", "Phoenix Suns", "Utah Jazz", "Sacramento Kings"],
      [102, 128, 122, 110, 110, 117, 110, 122, 126, 115, 122, 112, 126, 103, 99, 98, 108, 131, 114, 129, 120, 109, 106, 115, 121, 115, 141, 108, 119, 105, 120, 128, 113, 126, 124, 123, 111, 122, 121, 122, 126, 115, 119, 122, 122, 134, 99, 99, 99, 119, 122, 134, 128, 98, 146, 104, 119, 112, 118, 115, 94, 134, 133, 113, 118, 96, 120, 120, 110, 119, 110, 108, 118, 129, 116, 88, 93, 112, 103, 115, 114, 109],
      [-21, 5, 5, -25, 11, 16, -11, 12, 25, 6, 3, -19, 23, -3, -28, 1, -2, 5, 10, 16, 20, -8, -15, -1, 1, 5, 13, -18, 4, 14, 13, 3, 7, -1, 5, 12, -13, 31, 13, 13, 29, 12, 3, 9, 4, 23, -2, 1, -8, -7, 9, 17, 20, -30, 34, -11, 14, 4, 9, 6, -18, 10, 21, 16, 5, -21, -8, -2, -15, 19, -6, 6, 14, 23, 5, -19, -7, 2, -21, -4, -4, 14]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 24.5, all: [{"name": "Nikola Jokić", "val": 24.5}, {"name": "Jamal Murray", "val": 20.0}, {"name": "Michael Porter Jr.", "val": 17.4}, {"name": "Aaron Gordon", "val": 16.3}, {"name": "Bones Hyland", "val": 12.1}, {"name": "Bruce Brown", "val": 11.5}, {"name": "Kentavious Caldwell-Pope", "val": 10.8}, {"name": "Reggie Jackson", "val": 7.9}, {"name": "Jeff Green", "val": 7.8}, {"name": "Zeke Nnaji", "val": 5.2}, {"name": "DeAndre Jordan", "val": 5.1}, {"name": "Vlatko Čančar", "val": 5.0}, {"name": "Christian Braun", "val": 4.7}, {"name": "Thomas Bryant", "val": 4.6}, {"name": "Peyton Watson", "val": 3.3}, {"name": "Ish Smith", "val": 2.5}, {"name": "Davon Reed", "val": 2.3}, {"name": "Jack White", "val": 1.2}] },
      reb: { name: "Nikola Jokić", val: 11.8, all: [{"name": "Nikola Jokić", "val": 11.8}, {"name": "Aaron Gordon", "val": 6.6}, {"name": "Michael Porter Jr.", "val": 5.5}, {"name": "DeAndre Jordan", "val": 5.2}, {"name": "Bruce Brown", "val": 4.1}, {"name": "Jamal Murray", "val": 4.0}, {"name": "Thomas Bryant", "val": 3.3}, {"name": "Kentavious Caldwell-Pope", "val": 2.7}, {"name": "Jeff Green", "val": 2.6}, {"name": "Zeke Nnaji", "val": 2.6}, {"name": "Christian Braun", "val": 2.4}, {"name": "Vlatko Čančar", "val": 2.1}, {"name": "Bones Hyland", "val": 2.0}, {"name": "Reggie Jackson", "val": 1.8}, {"name": "Davon Reed", "val": 1.6}, {"name": "Peyton Watson", "val": 1.6}, {"name": "Ish Smith", "val": 1.3}, {"name": "Jack White", "val": 1.0}] },
      ast: { name: "Nikola Jokić", val: 9.8, all: [{"name": "Nikola Jokić", "val": 9.8}, {"name": "Jamal Murray", "val": 6.2}, {"name": "Bruce Brown", "val": 3.4}, {"name": "Reggie Jackson", "val": 3.1}, {"name": "Aaron Gordon", "val": 3.0}, {"name": "Bones Hyland", "val": 3.0}, {"name": "Kentavious Caldwell-Pope", "val": 2.4}, {"name": "Ish Smith", "val": 2.3}, {"name": "Vlatko Čančar", "val": 1.3}, {"name": "Jeff Green", "val": 1.2}, {"name": "Michael Porter Jr.", "val": 1.0}, {"name": "DeAndre Jordan", "val": 0.9}, {"name": "Christian Braun", "val": 0.8}, {"name": "Davon Reed", "val": 0.5}, {"name": "Peyton Watson", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.3}, {"name": "Jack White", "val": 0.2}, {"name": "Thomas Bryant", "val": 0.1}] },
      stl: { name: "Kentavious Caldwell-Pope", val: 1.5, all: [{"name": "Kentavious Caldwell-Pope", "val": 1.5}, {"name": "Nikola Jokić", "val": 1.3}, {"name": "Bruce Brown", "val": 1.1}, {"name": "Jamal Murray", "val": 1.0}, {"name": "Aaron Gordon", "val": 0.8}, {"name": "Bones Hyland", "val": 0.7}, {"name": "Michael Porter Jr.", "val": 0.6}, {"name": "Reggie Jackson", "val": 0.6}, {"name": "Christian Braun", "val": 0.5}, {"name": "Vlatko Čančar", "val": 0.4}, {"name": "Davon Reed", "val": 0.4}, {"name": "Jeff Green", "val": 0.3}, {"name": "DeAndre Jordan", "val": 0.3}, {"name": "Zeke Nnaji", "val": 0.3}, {"name": "Ish Smith", "val": 0.2}, {"name": "Jack White", "val": 0.2}, {"name": "Thomas Bryant", "val": 0.1}, {"name": "Peyton Watson", "val": 0.1}] },
      blk: { name: "Aaron Gordon", val: 0.8, all: [{"name": "Aaron Gordon", "val": 0.8}, {"name": "Nikola Jokić", "val": 0.7}, {"name": "Bruce Brown", "val": 0.6}, {"name": "DeAndre Jordan", "val": 0.6}, {"name": "Kentavious Caldwell-Pope", "val": 0.5}, {"name": "Michael Porter Jr.", "val": 0.5}, {"name": "Peyton Watson", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.4}, {"name": "Thomas Bryant", "val": 0.4}, {"name": "Jeff Green", "val": 0.3}, {"name": "Bones Hyland", "val": 0.3}, {"name": "Ish Smith", "val": 0.2}, {"name": "Christian Braun", "val": 0.2}, {"name": "Vlatko Čančar", "val": 0.2}, {"name": "Jamal Murray", "val": 0.2}, {"name": "Davon Reed", "val": 0.1}, {"name": "Reggie Jackson", "val": 0.1}, {"name": "Jack White", "val": 0.1}] },
    },
    avail: [
      { name: "Bruce Brown", g: 80 },
      { name: "Christian Braun", g: 76 },
      { name: "Kentavious Caldwell-Pope", g: 76 },
      { name: "Nikola Jokić", g: 69 },
      { name: "Aaron Gordon", g: 68 },
      { name: "Jamal Murray", g: 65 },
      { name: "Michael Porter Jr.", g: 62 },
      { name: "Vlatko Čančar", g: 60 },
      { name: "Jeff Green", g: 56 },
      { name: "Zeke Nnaji", g: 53 },
      { name: "Ish Smith", g: 43 },
      { name: "Bones Hyland", g: 42 },
      { name: "DeAndre Jordan", g: 39 },
      { name: "Davon Reed", g: 35 },
      { name: "Peyton Watson", g: 23 },
      { name: "Thomas Bryant", g: 18 },
      { name: "Jack White", g: 17 },
      { name: "Reggie Jackson", g: 16 },
    ]
  },

  "2023-24": {
    w: 57, l: 25,
    topW:   { pts: 142, opp: 105, against: "Memphis Grizzlies" },
    worstL: { pts: 84, opp: 122, against: "New York Knicks" },
    conf_rank: 2,
    games: buildGames(
      "WWWWLWWWWLWLLWLLWWWWLLLWWWLWWWWWWLWWLWLWWLWWWLWWLWWWLLLWWWWWWLWWWWWLWWWWLLWWLWWWLW",
      ["Los Angeles Lakers", "Memphis Grizzlies", "Oklahoma City Thunder", "Utah Jazz", "Minnesota Timberwolves", "Dallas Mavericks", "Chicago Bulls", "New Orleans Pelicans", "Golden State Warriors", "Houston Rockets", "Los Angeles Clippers", "New Orleans Pelicans", "Cleveland Cavaliers", "Detroit Pistons", "Orlando Magic", "Houston Rockets", "San Antonio Spurs", "Los Angeles Clippers", "Houston Rockets", "Phoenix Suns", "Sacramento Kings", "Los Angeles Clippers", "Houston Rockets", "Atlanta Hawks", "Chicago Bulls", "Brooklyn Nets", "Oklahoma City Thunder", "Dallas Mavericks", "Toronto Raptors", "Brooklyn Nets", "Charlotte Hornets", "Golden State Warriors", "Memphis Grizzlies", "Oklahoma City Thunder", "Charlotte Hornets", "Golden State Warriors", "Orlando Magic", "Detroit Pistons", "Utah Jazz", "New Orleans Pelicans", "Indiana Pacers", "Philadelphia 76ers", "Boston Celtics", "Washington Wizards", "Indiana Pacers", "New York Knicks", "Philadelphia 76ers", "Milwaukee Bucks", "Oklahoma City Thunder", "Portland Trail Blazers", "Portland Trail Blazers", "Los Angeles Lakers", "Sacramento Kings", "Milwaukee Bucks", "Sacramento Kings", "Washington Wizards", "Portland Trail Blazers", "Golden State Warriors", "Sacramento Kings", "Miami Heat", "Los Angeles Lakers", "Phoenix Suns", "Boston Celtics", "Utah Jazz", "Toronto Raptors", "Miami Heat", "San Antonio Spurs", "Dallas Mavericks", "Minnesota Timberwolves", "New York Knicks", "Portland Trail Blazers", "Memphis Grizzlies", "Phoenix Suns", "Minnesota Timberwolves", "Cleveland Cavaliers", "San Antonio Spurs", "Los Angeles Clippers", "Atlanta Hawks", "Utah Jazz", "Minnesota Timberwolves", "San Antonio Spurs", "Memphis Grizzlies"],
      [119, 108, 128, 110, 89, 125, 123, 134, 108, 104, 111, 110, 109, 107, 119, 86, 132, 113, 134, 119, 117, 102, 106, 129, 114, 124, 117, 130, 113, 122, 102, 120, 142, 93, 111, 130, 120, 131, 111, 125, 117, 121, 102, 113, 114, 84, 111, 113, 100, 120, 112, 114, 106, 95, 98, 130, 127, 119, 117, 103, 124, 107, 115, 142, 125, 100, 117, 105, 115, 113, 114, 128, 97, 98, 130, 110, 100, 142, 111, 116, 120, 126],
      [12, 4, 33, 8, -21, 11, 22, 18, 3, -3, 3, -5, -12, 4, -5, -19, 12, 9, 10, 8, -6, -9, -8, 7, 8, 23, -1, 26, 9, 5, 7, 6, 37, -26, 18, 3, -2, 17, -13, 12, 8, -5, 2, 9, 5, -38, 6, 6, -5, 12, 9, 8, -29, -17, -4, 20, 15, 16, 21, 6, 10, -10, 6, 21, 6, 12, 11, -2, 3, 13, 3, 25, -7, -13, 29, 5, -2, 32, 16, 9, -1, 15]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 26.4, all: [{"name": "Nikola Jokić", "val": 26.4}, {"name": "Jamal Murray", "val": 21.2}, {"name": "Michael Porter Jr.", "val": 16.7}, {"name": "Aaron Gordon", "val": 13.9}, {"name": "Reggie Jackson", "val": 10.2}, {"name": "Kentavious Caldwell-Pope", "val": 10.1}, {"name": "Christian Braun", "val": 7.3}, {"name": "Peyton Watson", "val": 6.7}, {"name": "Julian Strawther", "val": 4.5}, {"name": "Justin Holiday", "val": 4.0}, {"name": "DeAndre Jordan", "val": 3.9}, {"name": "Collin Gillespie", "val": 3.6}, {"name": "Zeke Nnaji", "val": 3.2}, {"name": "Jalen Pickett", "val": 1.6}, {"name": "Jay Huff", "val": 1.2}, {"name": "Braxton Key", "val": 1.1}, {"name": "Hunter Tyson", "val": 1.1}] },
      reb: { name: "Nikola Jokić", val: 12.4, all: [{"name": "Nikola Jokić", "val": 12.4}, {"name": "Michael Porter Jr.", "val": 7.0}, {"name": "Aaron Gordon", "val": 6.5}, {"name": "DeAndre Jordan", "val": 4.4}, {"name": "Jamal Murray", "val": 4.1}, {"name": "Christian Braun", "val": 3.7}, {"name": "Peyton Watson", "val": 3.2}, {"name": "Kentavious Caldwell-Pope", "val": 2.4}, {"name": "Zeke Nnaji", "val": 2.2}, {"name": "Reggie Jackson", "val": 1.9}, {"name": "Justin Holiday", "val": 1.2}, {"name": "Julian Strawther", "val": 1.2}, {"name": "Collin Gillespie", "val": 0.9}, {"name": "Braxton Key", "val": 0.9}, {"name": "Jay Huff", "val": 0.6}, {"name": "Jalen Pickett", "val": 0.5}, {"name": "Hunter Tyson", "val": 0.5}] },
      ast: { name: "Nikola Jokić", val: 9.0, all: [{"name": "Nikola Jokić", "val": 9.0}, {"name": "Jamal Murray", "val": 6.5}, {"name": "Reggie Jackson", "val": 3.8}, {"name": "Aaron Gordon", "val": 3.5}, {"name": "Kentavious Caldwell-Pope", "val": 2.4}, {"name": "Christian Braun", "val": 1.6}, {"name": "Michael Porter Jr.", "val": 1.5}, {"name": "Justin Holiday", "val": 1.2}, {"name": "Peyton Watson", "val": 1.1}, {"name": "Collin Gillespie", "val": 1.1}, {"name": "Julian Strawther", "val": 0.9}, {"name": "Jalen Pickett", "val": 0.8}, {"name": "DeAndre Jordan", "val": 0.7}, {"name": "Zeke Nnaji", "val": 0.6}, {"name": "Braxton Key", "val": 0.5}, {"name": "Hunter Tyson", "val": 0.1}, {"name": "Jay Huff", "val": 0.1}] },
      stl: { name: "Nikola Jokić", val: 1.4, all: [{"name": "Nikola Jokić", "val": 1.4}, {"name": "Kentavious Caldwell-Pope", "val": 1.3}, {"name": "Jamal Murray", "val": 1.0}, {"name": "Aaron Gordon", "val": 0.8}, {"name": "Justin Holiday", "val": 0.6}, {"name": "Reggie Jackson", "val": 0.5}, {"name": "Christian Braun", "val": 0.5}, {"name": "Peyton Watson", "val": 0.5}, {"name": "Michael Porter Jr.", "val": 0.5}, {"name": "Collin Gillespie", "val": 0.5}, {"name": "Julian Strawther", "val": 0.3}, {"name": "Zeke Nnaji", "val": 0.3}, {"name": "DeAndre Jordan", "val": 0.2}, {"name": "Jalen Pickett", "val": 0.1}, {"name": "Braxton Key", "val": 0.1}, {"name": "Hunter Tyson", "val": 0.1}, {"name": "Jay Huff", "val": 0.1}] },
      blk: { name: "Peyton Watson", val: 1.1, all: [{"name": "Peyton Watson", "val": 1.1}, {"name": "Nikola Jokić", "val": 0.9}, {"name": "Jamal Murray", "val": 0.7}, {"name": "Zeke Nnaji", "val": 0.7}, {"name": "Michael Porter Jr.", "val": 0.7}, {"name": "Kentavious Caldwell-Pope", "val": 0.6}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "DeAndre Jordan", "val": 0.4}, {"name": "Christian Braun", "val": 0.4}, {"name": "Justin Holiday", "val": 0.2}, {"name": "Reggie Jackson", "val": 0.2}, {"name": "Jay Huff", "val": 0.2}, {"name": "Julian Strawther", "val": 0.1}, {"name": "Braxton Key", "val": 0.1}, {"name": "Collin Gillespie", "val": 0.0}, {"name": "Jalen Pickett", "val": 0.0}, {"name": "Hunter Tyson", "val": 0.0}] },
    },
    avail: [
      { name: "Reggie Jackson", g: 82 },
      { name: "Christian Braun", g: 82 },
      { name: "Michael Porter Jr.", g: 81 },
      { name: "Peyton Watson", g: 80 },
      { name: "Nikola Jokić", g: 79 },
      { name: "Kentavious Caldwell-Pope", g: 76 },
      { name: "Aaron Gordon", g: 73 },
      { name: "Jamal Murray", g: 59 },
      { name: "Zeke Nnaji", g: 58 },
      { name: "Justin Holiday", g: 58 },
      { name: "Julian Strawther", g: 50 },
      { name: "DeAndre Jordan", g: 36 },
      { name: "Jalen Pickett", g: 27 },
      { name: "Collin Gillespie", g: 24 },
      { name: "Braxton Key", g: 20 },
      { name: "Jay Huff", g: 20 },
      { name: "Hunter Tyson", g: 18 },
    ]
  },

  "2024-25": {
    w: 50, l: 32,
    topW:   { pts: 129, opp: 93, against: "Utah Jazz" },
    worstL: { pts: 104, opp: 133, against: "Minnesota Timberwolves" },
    conf_rank: 4,
    games: buildGames(
      "LLWWLWWWWWLLWLWLWLWLLWWWLWWLLWWWLWLWWWWLWWWWLLLWWWWWWWWWLWLWLWWLWLWLWLLWLWWLLLLWWW",
      ["Oklahoma City Thunder", "Los Angeles Clippers", "Toronto Raptors", "Brooklyn Nets", "Minnesota Timberwolves", "Utah Jazz", "Toronto Raptors", "Oklahoma City Thunder", "Miami Heat", "Dallas Mavericks", "New Orleans Pelicans", "Memphis Grizzlies", "Memphis Grizzlies", "Dallas Mavericks", "Los Angeles Lakers", "New York Knicks", "Utah Jazz", "Los Angeles Clippers", "Golden State Warriors", "Cleveland Cavaliers", "Washington Wizards", "Atlanta Hawks", "Los Angeles Clippers", "Sacramento Kings", "Portland Trail Blazers", "New Orleans Pelicans", "Phoenix Suns", "Phoenix Suns", "Cleveland Cavaliers", "Detroit Pistons", "Utah Jazz", "Atlanta Hawks", "San Antonio Spurs", "San Antonio Spurs", "Boston Celtics", "Los Angeles Clippers", "Brooklyn Nets", "Dallas Mavericks", "Dallas Mavericks", "Houston Rockets", "Miami Heat", "Orlando Magic", "Philadelphia 76ers", "Sacramento Kings", "Minnesota Timberwolves", "Chicago Bulls", "New York Knicks", "Philadelphia 76ers", "Charlotte Hornets", "New Orleans Pelicans", "New Orleans Pelicans", "Orlando Magic", "Phoenix Suns", "Portland Trail Blazers", "Portland Trail Blazers", "Charlotte Hornets", "Los Angeles Lakers", "Indiana Pacers", "Milwaukee Bucks", "Detroit Pistons", "Boston Celtics", "Sacramento Kings", "Phoenix Suns", "Oklahoma City Thunder", "Oklahoma City Thunder", "Minnesota Timberwolves", "Los Angeles Lakers", "Washington Wizards", "Golden State Warriors", "Los Angeles Lakers", "Portland Trail Blazers", "Houston Rockets", "Chicago Bulls", "Milwaukee Bucks", "Utah Jazz", "Minnesota Timberwolves", "San Antonio Spurs", "Golden State Warriors", "Indiana Pacers", "Sacramento Kings", "Memphis Grizzlies", "Houston Rockets"],
      [87, 104, 127, 144, 116, 129, 121, 124, 135, 122, 94, 90, 122, 120, 127, 118, 122, 122, 119, 114, 113, 141, 120, 130, 124, 132, 117, 100, 135, 134, 132, 139, 110, 122, 106, 126, 124, 112, 118, 108, 133, 113, 144, 132, 104, 121, 112, 137, 107, 125, 144, 112, 122, 146, 132, 129, 100, 125, 112, 134, 103, 116, 149, 103, 140, 95, 131, 123, 114, 108, 109, 116, 119, 127, 129, 139, 106, 104, 120, 124, 117, 126],
      [-15, -5, 2, 5, -3, 26, 2, 2, 13, 2, -7, -15, 12, -3, 25, -27, 19, -4, 4, -12, -9, 30, 22, 1, -2, 3, 27, -10, -14, 13, 11, 19, -3, 11, -12, 23, 19, 11, 19, -20, 20, 13, 35, 9, -29, -8, -10, 3, 3, 12, 25, 22, 17, 29, 11, 14, -23, 9, -9, 15, -7, 6, 8, -24, 13, -20, 5, -3, 9, -12, -19, 5, -10, 10, 36, -1, -7, -14, -5, 8, 8, 15]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 29.6, all: [{"name": "Nikola Jokić", "val": 29.6}, {"name": "Jamal Murray", "val": 21.4}, {"name": "Michael Porter Jr.", "val": 18.2}, {"name": "Christian Braun", "val": 15.4}, {"name": "Aaron Gordon", "val": 14.7}, {"name": "Russell Westbrook", "val": 13.3}, {"name": "Julian Strawther", "val": 9.0}, {"name": "Peyton Watson", "val": 8.1}, {"name": "Jalen Pickett", "val": 4.1}, {"name": "DeAndre Jordan", "val": 3.7}, {"name": "Dario Šarić", "val": 3.5}, {"name": "Zeke Nnaji", "val": 3.2}, {"name": "Hunter Tyson", "val": 2.6}, {"name": "Vlatko Čančar", "val": 1.8}, {"name": "PJ Hall", "val": 1.7}, {"name": "Spencer Jones", "val": 1.3}, {"name": "Trey Alexander", "val": 1.3}] },
      reb: { name: "Nikola Jokić", val: 12.7, all: [{"name": "Nikola Jokić", "val": 12.7}, {"name": "Michael Porter Jr.", "val": 7.0}, {"name": "Christian Braun", "val": 5.2}, {"name": "DeAndre Jordan", "val": 5.1}, {"name": "Russell Westbrook", "val": 4.9}, {"name": "Aaron Gordon", "val": 4.8}, {"name": "Jamal Murray", "val": 3.9}, {"name": "Peyton Watson", "val": 3.4}, {"name": "Dario Šarić", "val": 3.1}, {"name": "Vlatko Čančar", "val": 2.5}, {"name": "Julian Strawther", "val": 2.2}, {"name": "Zeke Nnaji", "val": 1.6}, {"name": "Hunter Tyson", "val": 1.5}, {"name": "Jalen Pickett", "val": 1.4}, {"name": "PJ Hall", "val": 1.2}, {"name": "Spencer Jones", "val": 0.9}, {"name": "Trey Alexander", "val": 0.5}] },
      ast: { name: "Nikola Jokić", val: 10.2, all: [{"name": "Nikola Jokić", "val": 10.2}, {"name": "Russell Westbrook", "val": 6.1}, {"name": "Jamal Murray", "val": 6.0}, {"name": "Aaron Gordon", "val": 3.2}, {"name": "Christian Braun", "val": 2.6}, {"name": "Jalen Pickett", "val": 2.2}, {"name": "Michael Porter Jr.", "val": 2.1}, {"name": "Peyton Watson", "val": 1.4}, {"name": "Dario Šarić", "val": 1.4}, {"name": "Julian Strawther", "val": 1.3}, {"name": "DeAndre Jordan", "val": 0.9}, {"name": "Vlatko Čančar", "val": 0.7}, {"name": "Trey Alexander", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.4}, {"name": "Hunter Tyson", "val": 0.4}, {"name": "Spencer Jones", "val": 0.3}, {"name": "PJ Hall", "val": 0.2}] },
      stl: { name: "Nikola Jokić", val: 1.8, all: [{"name": "Nikola Jokić", "val": 1.8}, {"name": "Russell Westbrook", "val": 1.4}, {"name": "Jamal Murray", "val": 1.4}, {"name": "Christian Braun", "val": 1.1}, {"name": "Peyton Watson", "val": 0.7}, {"name": "Michael Porter Jr.", "val": 0.6}, {"name": "Julian Strawther", "val": 0.6}, {"name": "Aaron Gordon", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.4}, {"name": "Jalen Pickett", "val": 0.4}, {"name": "Dario Šarić", "val": 0.4}, {"name": "DeAndre Jordan", "val": 0.3}, {"name": "Spencer Jones", "val": 0.3}, {"name": "Vlatko Čančar", "val": 0.2}, {"name": "Hunter Tyson", "val": 0.2}, {"name": "Trey Alexander", "val": 0.1}, {"name": "PJ Hall", "val": 0.0}] },
      blk: { name: "Peyton Watson", val: 1.4, all: [{"name": "Peyton Watson", "val": 1.4}, {"name": "Zeke Nnaji", "val": 0.7}, {"name": "Nikola Jokić", "val": 0.6}, {"name": "Christian Braun", "val": 0.5}, {"name": "Michael Porter Jr.", "val": 0.5}, {"name": "Russell Westbrook", "val": 0.5}, {"name": "Jamal Murray", "val": 0.5}, {"name": "DeAndre Jordan", "val": 0.5}, {"name": "Aaron Gordon", "val": 0.3}, {"name": "Spencer Jones", "val": 0.3}, {"name": "Vlatko Čančar", "val": 0.2}, {"name": "PJ Hall", "val": 0.2}, {"name": "Julian Strawther", "val": 0.2}, {"name": "Dario Šarić", "val": 0.1}, {"name": "Hunter Tyson", "val": 0.1}, {"name": "Jalen Pickett", "val": 0.1}, {"name": "Trey Alexander", "val": 0.0}] },
    },
    avail: [
      { name: "Christian Braun", g: 79 },
      { name: "Michael Porter Jr.", g: 77 },
      { name: "Russell Westbrook", g: 75 },
      { name: "Nikola Jokić", g: 70 },
      { name: "Peyton Watson", g: 68 },
      { name: "Jamal Murray", g: 67 },
      { name: "Julian Strawther", g: 65 },
      { name: "Zeke Nnaji", g: 57 },
      { name: "DeAndre Jordan", g: 56 },
      { name: "Aaron Gordon", g: 51 },
      { name: "Hunter Tyson", g: 51 },
      { name: "Jalen Pickett", g: 49 },
      { name: "Trey Alexander", g: 24 },
      { name: "Spencer Jones", g: 20 },
      { name: "PJ Hall", g: 19 },
      { name: "Dario Šarić", g: 16 },
      { name: "Vlatko Čančar", g: 13 },
    ]
  },

  "2025-26": {
    w: 54, l: 28,
    topW:   { pts: 157, opp: 103, against: "Portland Trail Blazers" },
    worstL: { pts: 103, opp: 142, against: "New York Knicks" },
    conf_rank: 3,
    games: buildGames(
      "LWWWLWWWWWWWLWWLWLWLWWWWWWLWLWLLWLLWWLWWWWLLWWLWWLLLWLWLWLWLLWWLLWWLWLWWWWWWWWWWWW",
      ["Golden State Warriors", "Phoenix Suns", "Minnesota Timberwolves", "New Orleans Pelicans", "Portland Trail Blazers", "Sacramento Kings", "Miami Heat", "Golden State Warriors", "Indiana Pacers", "Sacramento Kings", "Los Angeles Clippers", "Minnesota Timberwolves", "Chicago Bulls", "New Orleans Pelicans", "Houston Rockets", "Sacramento Kings", "Memphis Grizzlies", "San Antonio Spurs", "Phoenix Suns", "Dallas Mavericks", "Indiana Pacers", "Atlanta Hawks", "Charlotte Hornets", "Sacramento Kings", "Houston Rockets", "Orlando Magic", "Houston Rockets", "Utah Jazz", "Dallas Mavericks", "Minnesota Timberwolves", "Orlando Magic", "Miami Heat", "Toronto Raptors", "Cleveland Cavaliers", "Brooklyn Nets", "Philadelphia 76ers", "Boston Celtics", "Atlanta Hawks", "Milwaukee Bucks", "New Orleans Pelicans", "Dallas Mavericks", "Washington Wizards", "Charlotte Hornets", "Los Angeles Lakers", "Washington Wizards", "Milwaukee Bucks", "Detroit Pistons", "Brooklyn Nets", "Los Angeles Clippers", "Oklahoma City Thunder", "Detroit Pistons", "New York Knicks", "Chicago Bulls", "Cleveland Cavaliers", "Memphis Grizzlies", "Los Angeles Clippers", "Portland Trail Blazers", "Golden State Warriors", "Boston Celtics", "Oklahoma City Thunder", "Minnesota Timberwolves", "Utah Jazz", "Los Angeles Lakers", "New York Knicks", "Oklahoma City Thunder", "Houston Rockets", "San Antonio Spurs", "Los Angeles Lakers", "Philadelphia 76ers", "Memphis Grizzlies", "Toronto Raptors", "Portland Trail Blazers", "Phoenix Suns", "Dallas Mavericks", "Utah Jazz", "Golden State Warriors", "Utah Jazz", "San Antonio Spurs", "Portland Trail Blazers", "Memphis Grizzlies", "Oklahoma City Thunder", "San Antonio Spurs"],
      [131, 133, 127, 122, 107, 130, 122, 129, 117, 122, 130, 123, 127, 125, 112, 123, 125, 136, 130, 121, 135, 134, 115, 136, 128, 126, 101, 135, 130, 142, 126, 123, 106, 108, 115, 125, 114, 87, 108, 122, 118, 121, 87, 107, 107, 102, 107, 107, 122, 111, 121, 127, 136, 117, 122, 114, 157, 117, 103, 121, 108, 128, 120, 103, 126, 129, 136, 125, 124, 118, 121, 128, 125, 142, 135, 116, 130, 136, 137, 136, 127, 128],
      [-6, 22, 13, 34, -2, 6, 10, 25, 17, 14, 14, 11, -3, 7, 3, -5, 10, -3, 18, -10, 15, 1, 9, 31, 3, 11, -14, 23, -1, 4, -1, -24, 3, -5, -12, 1, 4, -23, 4, 6, 9, 6, -23, -8, 10, 2, -2, 4, 13, -10, -3, -7, 16, -2, 6, -1, 54, -11, 19, -6, -9, 3, 7, -39, -3, 36, 5, -2, 28, -7, 6, 16, 2, 7, 6, 23, 13, 2, 5, 17, 20, 10]
    ),
    leaders: {
      pts: { name: "Nikola Jokić", val: 27.7, all: [{"name": "Nikola Jokić", "val": 27.7}, {"name": "Jamal Murray", "val": 25.4}, {"name": "Aaron Gordon", "val": 16.2}, {"name": "Peyton Watson", "val": 14.6}, {"name": "Tim Hardaway Jr.", "val": 13.5}, {"name": "Cameron Johnson", "val": 12.2}, {"name": "Christian Braun", "val": 12.0}, {"name": "Jonas Valančiūnas", "val": 8.7}, {"name": "David Roddy", "val": 8.0}, {"name": "Bruce Brown", "val": 7.9}, {"name": "Julian Strawther", "val": 7.2}, {"name": "Spencer Jones", "val": 5.5}, {"name": "Jalen Pickett", "val": 5.2}, {"name": "Zeke Nnaji", "val": 3.7}, {"name": "DaRon Holmes", "val": 3.7}, {"name": "Curtis Jones", "val": 2.9}, {"name": "Tyus Jones", "val": 2.2}, {"name": "Hunter Tyson", "val": 2.2}, {"name": "KJ Simpson", "val": 1.2}] },
      reb: { name: "Nikola Jokić", val: 12.9, all: [{"name": "Nikola Jokić", "val": 12.9}, {"name": "Aaron Gordon", "val": 5.8}, {"name": "Jonas Valančiūnas", "val": 5.1}, {"name": "Peyton Watson", "val": 4.9}, {"name": "Christian Braun", "val": 4.8}, {"name": "Jamal Murray", "val": 4.4}, {"name": "David Roddy", "val": 4.0}, {"name": "Bruce Brown", "val": 3.9}, {"name": "Cameron Johnson", "val": 3.8}, {"name": "Spencer Jones", "val": 3.3}, {"name": "Tim Hardaway Jr.", "val": 2.6}, {"name": "Zeke Nnaji", "val": 2.6}, {"name": "Jalen Pickett", "val": 2.3}, {"name": "Julian Strawther", "val": 2.0}, {"name": "Hunter Tyson", "val": 1.7}, {"name": "DaRon Holmes", "val": 1.4}, {"name": "Tyus Jones", "val": 1.3}, {"name": "KJ Simpson", "val": 1.3}, {"name": "Curtis Jones", "val": 1.1}] },
      ast: { name: "Nikola Jokić", val: 10.7, all: [{"name": "Nikola Jokić", "val": 10.7}, {"name": "Jamal Murray", "val": 7.1}, {"name": "Aaron Gordon", "val": 2.7}, {"name": "Christian Braun", "val": 2.7}, {"name": "Cameron Johnson", "val": 2.4}, {"name": "Jalen Pickett", "val": 2.3}, {"name": "Bruce Brown", "val": 2.1}, {"name": "Peyton Watson", "val": 2.1}, {"name": "Tim Hardaway Jr.", "val": 1.4}, {"name": "KJ Simpson", "val": 1.3}, {"name": "Jonas Valančiūnas", "val": 1.2}, {"name": "Tyus Jones", "val": 1.2}, {"name": "Julian Strawther", "val": 1.1}, {"name": "Curtis Jones", "val": 1.0}, {"name": "Spencer Jones", "val": 0.8}, {"name": "David Roddy", "val": 0.8}, {"name": "Hunter Tyson", "val": 0.8}, {"name": "Zeke Nnaji", "val": 0.6}, {"name": "DaRon Holmes", "val": 0.6}] },
      stl: { name: "Nikola Jokić", val: 1.4, all: [{"name": "Nikola Jokić", "val": 1.4}, {"name": "Bruce Brown", "val": 1.0}, {"name": "Jamal Murray", "val": 0.9}, {"name": "Peyton Watson", "val": 0.9}, {"name": "Spencer Jones", "val": 0.8}, {"name": "David Roddy", "val": 0.8}, {"name": "Christian Braun", "val": 0.7}, {"name": "Cameron Johnson", "val": 0.7}, {"name": "Aaron Gordon", "val": 0.6}, {"name": "Tim Hardaway Jr.", "val": 0.5}, {"name": "Julian Strawther", "val": 0.4}, {"name": "Curtis Jones", "val": 0.4}, {"name": "Zeke Nnaji", "val": 0.3}, {"name": "Jalen Pickett", "val": 0.3}, {"name": "Jonas Valančiūnas", "val": 0.2}, {"name": "KJ Simpson", "val": 0.2}, {"name": "Tyus Jones", "val": 0.1}, {"name": "Hunter Tyson", "val": 0.1}, {"name": "DaRon Holmes", "val": 0.0}] },
      blk: { name: "Peyton Watson", val: 1.1, all: [{"name": "Peyton Watson", "val": 1.1}, {"name": "Nikola Jokić", "val": 0.8}, {"name": "Jonas Valančiūnas", "val": 0.6}, {"name": "Spencer Jones", "val": 0.5}, {"name": "Zeke Nnaji", "val": 0.5}, {"name": "Jamal Murray", "val": 0.4}, {"name": "Cameron Johnson", "val": 0.4}, {"name": "Christian Braun", "val": 0.3}, {"name": "Aaron Gordon", "val": 0.3}, {"name": "DaRon Holmes", "val": 0.2}, {"name": "Bruce Brown", "val": 0.2}, {"name": "David Roddy", "val": 0.2}, {"name": "Jalen Pickett", "val": 0.1}, {"name": "Julian Strawther", "val": 0.1}, {"name": "Tim Hardaway Jr.", "val": 0.1}, {"name": "Curtis Jones", "val": 0.0}, {"name": "Tyus Jones", "val": 0.0}, {"name": "Hunter Tyson", "val": 0.0}, {"name": "KJ Simpson", "val": 0.0}] },
    },
    avail: [
      { name: "Bruce Brown", g: 82 },
      { name: "Tim Hardaway Jr.", g: 80 },
      { name: "Jamal Murray", g: 75 },
      { name: "Jonas Valančiūnas", g: 65 },
      { name: "Nikola Jokić", g: 65 },
      { name: "Spencer Jones", g: 64 },
      { name: "Julian Strawther", g: 57 },
      { name: "Cameron Johnson", g: 54 },
      { name: "Peyton Watson", g: 54 },
      { name: "Zeke Nnaji", g: 52 },
      { name: "Jalen Pickett", g: 50 },
      { name: "Christian Braun", g: 44 },
      { name: "Aaron Gordon", g: 36 },
      { name: "DaRon Holmes", g: 25 },
      { name: "Hunter Tyson", g: 21 },
      { name: "Tyus Jones", g: 11 },
      { name: "Curtis Jones", g: 10 },
      { name: "KJ Simpson", g: 6 },
      { name: "David Roddy", g: 5 },
    ]
  },

};
