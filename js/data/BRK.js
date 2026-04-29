/* ================================================================
   BRK.js — Brooklyn Nets · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Brooklyn Nets",
  abbr:          "BRK",
  conference:    "East",
  primaryColor:  "#000000",
  secondaryColor:"#FFFFFF",
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
    w: 48, l: 24,
    topW:   { pts: 129, opp: 92, against: "Orlando Magic" },
    worstL: { pts: 88, opp: 118, against: "Utah Jazz" },
    conf_rank: 2,
    games: buildGames(
      "WWLLWLLWWLLWWWWLLWWWWLWLLLWWWWWWWWLWWWWWWLWWLWWWWLWWLWLWLWLWWWWLLLLWWWWW",
      ["Golden State Warriors", "Boston Celtics", "Charlotte Hornets", "Memphis Grizzlies", "Atlanta Hawks", "Atlanta Hawks", "Washington Wizards", "Utah Jazz", "Philadelphia 76ers", "Memphis Grizzlies", "Oklahoma City Thunder", "Denver Nuggets", "New York Knicks", "Orlando Magic", "Milwaukee Bucks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Miami Heat", "Miami Heat", "Atlanta Hawks", "Oklahoma City Thunder", "Washington Wizards", "Los Angeles Clippers", "Toronto Raptors", "Philadelphia 76ers", "Detroit Pistons", "Indiana Pacers", "Golden State Warriors", "Sacramento Kings", "Phoenix Suns", "Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Orlando Magic", "Dallas Mavericks", "San Antonio Spurs", "Houston Rockets", "Boston Celtics", "Detroit Pistons", "New York Knicks", "Indiana Pacers", "Orlando Magic", "Washington Wizards", "Portland Trail Blazers", "Utah Jazz", "Detroit Pistons", "Minnesota Timberwolves", "Houston Rockets", "Charlotte Hornets", "Chicago Bulls", "New York Knicks", "New Orleans Pelicans", "Los Angeles Lakers", "Minnesota Timberwolves", "Philadelphia 76ers", "Charlotte Hornets", "Miami Heat", "New Orleans Pelicans", "Toronto Raptors", "Boston Celtics", "Phoenix Suns", "Toronto Raptors", "Indiana Pacers", "Portland Trail Blazers", "Milwaukee Bucks", "Milwaukee Bucks", "Dallas Mavericks", "Denver Nuggets", "Chicago Bulls", "San Antonio Spurs", "Chicago Bulls", "Cleveland Cavaliers"],
      [125, 123, 104, 111, 145, 96, 122, 130, 122, 110, 116, 122, 116, 122, 125, 135, 113, 128, 98, 132, 147, 146, 124, 117, 108, 111, 104, 134, 136, 128, 109, 112, 127, 129, 98, 124, 132, 121, 100, 117, 124, 113, 113, 116, 88, 113, 112, 120, 111, 107, 114, 139, 101, 127, 117, 130, 107, 134, 103, 109, 128, 116, 130, 109, 114, 118, 109, 125, 115, 128, 105, 123],
      [26, 28, -2, -5, 4, -18, -1, 34, 13, -5, -13, 6, 7, 7, 2, -12, -12, 4, 13, 4, 22, -3, 4, -6, -16, -11, 10, 17, 11, 4, 11, 4, 9, 37, -17, 11, 18, 12, 5, 5, 9, -8, 7, 4, -30, 2, 5, 12, 22, -8, 2, 28, -25, 30, -6, 15, -2, 5, -11, 5, 9, 13, 17, -19, -3, -6, -4, 6, 8, 12, 14, 14]
    ),
    leaders: {
      pts: { name: "Kevin Durant", val: 26.9, all: [{"name": "Kevin Durant", "val": 26.9}, {"name": "Kyrie Irving", "val": 26.9}, {"name": "James Harden", "val": 24.6}, {"name": "Caris LeVert", "val": 18.5}, {"name": "Joe Harris", "val": 14.1}, {"name": "LaMarcus Aldridge", "val": 12.8}, {"name": "Jarrett Allen", "val": 11.2}, {"name": "Jeff Green", "val": 11.0}, {"name": "Blake Griffin", "val": 10.0}, {"name": "Landry Shamet", "val": 9.3}, {"name": "Bruce Brown", "val": 8.8}, {"name": "Taurean Prince", "val": 8.1}, {"name": "Mike James", "val": 7.7}, {"name": "DeAndre Jordan", "val": 7.5}, {"name": "Spencer Dinwiddie", "val": 6.7}, {"name": "Nic Claxton", "val": 6.6}, {"name": "Timothé Luwawu-Cabarrot", "val": 6.4}, {"name": "Tyler Johnson", "val": 5.4}, {"name": "Alize Johnson", "val": 5.2}, {"name": "Chris Chiozza", "val": 4.0}, {"name": "Reggie Perry", "val": 3.0}, {"name": "Norvel Pelle", "val": 2.0}, {"name": "Andre Roberson", "val": 1.2}, {"name": "Iman Shumpert", "val": 1.0}, {"name": "Rodions Kurucs", "val": 0.6}, {"name": "Tyler Cook", "val": 0.5}, {"name": "Noah Vonleh", "val": 0.0}] },
      reb: { name: "Jarrett Allen", val: 10.4, all: [{"name": "Jarrett Allen", "val": 10.4}, {"name": "James Harden", "val": 8.5}, {"name": "DeAndre Jordan", "val": 7.5}, {"name": "Kevin Durant", "val": 7.1}, {"name": "Bruce Brown", "val": 5.4}, {"name": "Nic Claxton", "val": 5.2}, {"name": "Alize Johnson", "val": 5.0}, {"name": "Kyrie Irving", "val": 4.8}, {"name": "LaMarcus Aldridge", "val": 4.8}, {"name": "Blake Griffin", "val": 4.7}, {"name": "Caris LeVert", "val": 4.3}, {"name": "Spencer Dinwiddie", "val": 4.3}, {"name": "Jeff Green", "val": 3.9}, {"name": "Joe Harris", "val": 3.6}, {"name": "Andre Roberson", "val": 3.0}, {"name": "Reggie Perry", "val": 2.8}, {"name": "Taurean Prince", "val": 2.8}, {"name": "Mike James", "val": 2.5}, {"name": "Norvel Pelle", "val": 2.3}, {"name": "Timothé Luwawu-Cabarrot", "val": 2.2}, {"name": "Tyler Johnson", "val": 2.0}, {"name": "Landry Shamet", "val": 1.8}, {"name": "Chris Chiozza", "val": 1.1}, {"name": "Rodions Kurucs", "val": 0.6}, {"name": "Iman Shumpert", "val": 0.5}, {"name": "Tyler Cook", "val": 0.5}, {"name": "Noah Vonleh", "val": 0.3}] },
      ast: { name: "James Harden", val: 10.9, all: [{"name": "James Harden", "val": 10.9}, {"name": "Caris LeVert", "val": 6.0}, {"name": "Kyrie Irving", "val": 6.0}, {"name": "Kevin Durant", "val": 5.6}, {"name": "Mike James", "val": 4.2}, {"name": "Chris Chiozza", "val": 3.0}, {"name": "Spencer Dinwiddie", "val": 3.0}, {"name": "LaMarcus Aldridge", "val": 2.6}, {"name": "Blake Griffin", "val": 2.4}, {"name": "Joe Harris", "val": 1.9}, {"name": "Jarrett Allen", "val": 1.7}, {"name": "Landry Shamet", "val": 1.6}, {"name": "DeAndre Jordan", "val": 1.6}, {"name": "Bruce Brown", "val": 1.6}, {"name": "Jeff Green", "val": 1.6}, {"name": "Tyler Johnson", "val": 1.2}, {"name": "Timothé Luwawu-Cabarrot", "val": 1.2}, {"name": "Nic Claxton", "val": 0.9}, {"name": "Andre Roberson", "val": 0.8}, {"name": "Alize Johnson", "val": 0.8}, {"name": "Taurean Prince", "val": 0.6}, {"name": "Reggie Perry", "val": 0.5}, {"name": "Tyler Cook", "val": 0.5}, {"name": "Rodions Kurucs", "val": 0.4}, {"name": "Noah Vonleh", "val": 0.3}, {"name": "Norvel Pelle", "val": 0.0}, {"name": "Iman Shumpert", "val": 0.0}] },
      stl: { name: "Kyrie Irving", val: 1.4, all: [{"name": "Kyrie Irving", "val": 1.4}, {"name": "James Harden", "val": 1.3}, {"name": "Caris LeVert", "val": 1.1}, {"name": "Bruce Brown", "val": 0.9}, {"name": "Taurean Prince", "val": 0.7}, {"name": "Spencer Dinwiddie", "val": 0.7}, {"name": "Blake Griffin", "val": 0.7}, {"name": "Nic Claxton", "val": 0.7}, {"name": "Joe Harris", "val": 0.7}, {"name": "Kevin Durant", "val": 0.7}, {"name": "Andre Roberson", "val": 0.6}, {"name": "Jarrett Allen", "val": 0.6}, {"name": "Timothé Luwawu-Cabarrot", "val": 0.6}, {"name": "LaMarcus Aldridge", "val": 0.6}, {"name": "Landry Shamet", "val": 0.5}, {"name": "Iman Shumpert", "val": 0.5}, {"name": "Jeff Green", "val": 0.5}, {"name": "Mike James", "val": 0.5}, {"name": "Tyler Johnson", "val": 0.4}, {"name": "Alize Johnson", "val": 0.3}, {"name": "Chris Chiozza", "val": 0.3}, {"name": "DeAndre Jordan", "val": 0.3}, {"name": "Reggie Perry", "val": 0.2}, {"name": "Norvel Pelle", "val": 0.0}, {"name": "Tyler Cook", "val": 0.0}, {"name": "Rodions Kurucs", "val": 0.0}, {"name": "Noah Vonleh", "val": 0.0}] },
      blk: { name: "LaMarcus Aldridge", val: 2.2, all: [{"name": "LaMarcus Aldridge", "val": 2.2}, {"name": "Jarrett Allen", "val": 1.6}, {"name": "Nic Claxton", "val": 1.3}, {"name": "Kevin Durant", "val": 1.3}, {"name": "DeAndre Jordan", "val": 1.1}, {"name": "Norvel Pelle", "val": 1.0}, {"name": "James Harden", "val": 0.8}, {"name": "Taurean Prince", "val": 0.7}, {"name": "Kyrie Irving", "val": 0.7}, {"name": "Blake Griffin", "val": 0.5}, {"name": "Caris LeVert", "val": 0.5}, {"name": "Jeff Green", "val": 0.4}, {"name": "Bruce Brown", "val": 0.4}, {"name": "Spencer Dinwiddie", "val": 0.3}, {"name": "Alize Johnson", "val": 0.3}, {"name": "Chris Chiozza", "val": 0.3}, {"name": "Landry Shamet", "val": 0.2}, {"name": "Andre Roberson", "val": 0.2}, {"name": "Joe Harris", "val": 0.2}, {"name": "Reggie Perry", "val": 0.2}, {"name": "Mike James", "val": 0.1}, {"name": "Timothé Luwawu-Cabarrot", "val": 0.1}, {"name": "Tyler Cook", "val": 0.0}, {"name": "Rodions Kurucs", "val": 0.0}, {"name": "Tyler Johnson", "val": 0.0}, {"name": "Iman Shumpert", "val": 0.0}, {"name": "Noah Vonleh", "val": 0.0}] },
    },
    avail: [
      { name: "Joe Harris", g: 69 },
      { name: "Jeff Green", g: 68 },
      { name: "Bruce Brown", g: 65 },
      { name: "Landry Shamet", g: 61 },
      { name: "Timothé Luwawu-Cabarrot", g: 58 },
      { name: "DeAndre Jordan", g: 57 },
      { name: "Kyrie Irving", g: 54 },
      { name: "Tyler Johnson", g: 39 },
      { name: "James Harden", g: 36 },
      { name: "Kevin Durant", g: 35 },
      { name: "Nic Claxton", g: 32 },
      { name: "Blake Griffin", g: 26 },
      { name: "Reggie Perry", g: 26 },
      { name: "Chris Chiozza", g: 22 },
      { name: "Alize Johnson", g: 18 },
      { name: "Mike James", g: 13 },
      { name: "Taurean Prince", g: 12 },
      { name: "Jarrett Allen", g: 12 },
      { name: "Caris LeVert", g: 12 },
      { name: "LaMarcus Aldridge", g: 5 },
      { name: "Andre Roberson", g: 5 },
      { name: "Rodions Kurucs", g: 5 },
      { name: "Tyler Cook", g: 4 },
      { name: "Noah Vonleh", g: 4 },
      { name: "Spencer Dinwiddie", g: 3 },
      { name: "Norvel Pelle", g: 3 },
      { name: "Iman Shumpert", g: 2 },
    ]
  },

  "2021-22": {
    w: 44, l: 38,
    topW:   { pts: 150, opp: 108, against: "Orlando Magic" },
    worstL: { pts: 97, opp: 133, against: "Toronto Raptors" },
    conf_rank: 7,
    games: buildGames(
      "LWLWLWWWWWLWWWLWWWWLWWLWLWWWWLWWLLLWLWLWLWLWWLLLLLLLLLLLWWLLWLLLLWWWWLWWLWLWLLWWWW",
      ["Milwaukee Bucks", "Philadelphia 76ers", "Charlotte Hornets", "Washington Wizards", "Miami Heat", "Indiana Pacers", "Detroit Pistons", "Atlanta Hawks", "Detroit Pistons", "Toronto Raptors", "Chicago Bulls", "Orlando Magic", "New Orleans Pelicans", "Oklahoma City Thunder", "Golden State Warriors", "Cleveland Cavaliers", "Orlando Magic", "Cleveland Cavaliers", "Boston Celtics", "Phoenix Suns", "New York Knicks", "Minnesota Timberwolves", "Chicago Bulls", "Dallas Mavericks", "Houston Rockets", "Atlanta Hawks", "Detroit Pistons", "Toronto Raptors", "Philadelphia 76ers", "Orlando Magic", "Los Angeles Lakers", "Los Angeles Clippers", "Philadelphia 76ers", "Los Angeles Clippers", "Memphis Grizzlies", "Indiana Pacers", "Milwaukee Bucks", "San Antonio Spurs", "Portland Trail Blazers", "Chicago Bulls", "Oklahoma City Thunder", "New Orleans Pelicans", "Cleveland Cavaliers", "Washington Wizards", "San Antonio Spurs", "Minnesota Timberwolves", "Los Angeles Lakers", "Denver Nuggets", "Golden State Warriors", "Phoenix Suns", "Sacramento Kings", "Utah Jazz", "Denver Nuggets", "Boston Celtics", "Washington Wizards", "Miami Heat", "Sacramento Kings", "New York Knicks", "Washington Wizards", "Boston Celtics", "Milwaukee Bucks", "Toronto Raptors", "Toronto Raptors", "Miami Heat", "Boston Celtics", "Charlotte Hornets", "Philadelphia 76ers", "New York Knicks", "Orlando Magic", "Dallas Mavericks", "Portland Trail Blazers", "Utah Jazz", "Memphis Grizzlies", "Miami Heat", "Charlotte Hornets", "Detroit Pistons", "Milwaukee Bucks", "Atlanta Hawks", "Houston Rockets", "New York Knicks", "Cleveland Cavaliers", "Indiana Pacers"],
      [104, 114, 95, 104, 93, 105, 117, 117, 96, 116, 95, 123, 120, 120, 99, 109, 115, 117, 123, 107, 112, 110, 107, 102, 104, 113, 116, 131, 114, 93, 122, 124, 102, 116, 104, 129, 109, 121, 108, 138, 109, 120, 107, 119, 117, 125, 96, 118, 106, 111, 101, 102, 104, 91, 112, 111, 109, 111, 103, 106, 126, 97, 108, 107, 120, 132, 129, 110, 150, 111, 128, 114, 120, 110, 110, 130, 119, 115, 118, 110, 118, 134],
      [-23, 5, -16, 14, -13, 7, 26, 9, 6, 13, -23, 33, 8, 24, -18, 10, 2, 5, 19, -6, 2, 5, -4, 3, -10, 8, 12, 2, 9, -7, 7, 16, -8, -4, -14, 8, -12, 2, -6, 26, -21, 15, -7, 1, 15, -11, -10, -6, -4, -10, -11, -23, -20, -35, -1, -4, 24, 5, -14, -23, 3, -36, -1, -6, -6, 11, 29, 3, 42, -2, 5, 8, -12, 15, -9, 7, -1, -7, 13, 12, 11, 8]
    ),
    leaders: {
      pts: { name: "Kevin Durant", val: 29.9, all: [{"name": "Kevin Durant", "val": 29.9}, {"name": "Kyrie Irving", "val": 27.4}, {"name": "James Harden", "val": 22.5}, {"name": "Seth Curry", "val": 14.9}, {"name": "LaMarcus Aldridge", "val": 12.9}, {"name": "Andre Drummond", "val": 11.8}, {"name": "Patty Mills", "val": 11.4}, {"name": "Joe Harris", "val": 11.3}, {"name": "Bruce Brown", "val": 9.0}, {"name": "Nic Claxton", "val": 8.7}, {"name": "Cam Thomas", "val": 8.5}, {"name": "Goran Dragić", "val": 7.3}, {"name": "Blake Griffin", "val": 6.4}, {"name": "Day'Ron Sharpe", "val": 6.2}, {"name": "Kessler Edwards", "val": 5.9}, {"name": "DeAndre' Bembry", "val": 5.8}, {"name": "James Johnson", "val": 5.5}, {"name": "David Duke Jr.", "val": 4.7}, {"name": "Jevon Carter", "val": 3.6}, {"name": "Paul Millsap", "val": 3.4}, {"name": "Langston Galloway", "val": 3.0}, {"name": "James Ennis III", "val": 2.5}, {"name": "Shaquille Harrison", "val": 2.0}, {"name": "Wenyen Gabriel", "val": 0.0}] },
      reb: { name: "Andre Drummond", val: 10.3, all: [{"name": "Andre Drummond", "val": 10.3}, {"name": "James Harden", "val": 8.0}, {"name": "Kevin Durant", "val": 7.4}, {"name": "Nic Claxton", "val": 5.6}, {"name": "LaMarcus Aldridge", "val": 5.5}, {"name": "Day'Ron Sharpe", "val": 5.0}, {"name": "Bruce Brown", "val": 4.8}, {"name": "Kyrie Irving", "val": 4.4}, {"name": "Blake Griffin", "val": 4.1}, {"name": "Joe Harris", "val": 4.0}, {"name": "Paul Millsap", "val": 3.7}, {"name": "Kessler Edwards", "val": 3.6}, {"name": "James Johnson", "val": 3.5}, {"name": "DeAndre' Bembry", "val": 3.2}, {"name": "Goran Dragić", "val": 3.2}, {"name": "David Duke Jr.", "val": 3.0}, {"name": "Seth Curry", "val": 2.6}, {"name": "James Ennis III", "val": 2.5}, {"name": "Cam Thomas", "val": 2.4}, {"name": "Langston Galloway", "val": 2.0}, {"name": "Shaquille Harrison", "val": 2.0}, {"name": "Patty Mills", "val": 1.9}, {"name": "Jevon Carter", "val": 1.5}, {"name": "Wenyen Gabriel", "val": 1.0}] },
      ast: { name: "James Harden", val: 10.2, all: [{"name": "James Harden", "val": 10.2}, {"name": "Kevin Durant", "val": 6.4}, {"name": "Kyrie Irving", "val": 5.8}, {"name": "Goran Dragić", "val": 4.8}, {"name": "Seth Curry", "val": 2.6}, {"name": "Patty Mills", "val": 2.3}, {"name": "Bruce Brown", "val": 2.1}, {"name": "James Johnson", "val": 2.1}, {"name": "Blake Griffin", "val": 1.9}, {"name": "Shaquille Harrison", "val": 1.5}, {"name": "Andre Drummond", "val": 1.4}, {"name": "Langston Galloway", "val": 1.3}, {"name": "DeAndre' Bembry", "val": 1.3}, {"name": "Cam Thomas", "val": 1.2}, {"name": "Jevon Carter", "val": 1.0}, {"name": "Joe Harris", "val": 1.0}, {"name": "Paul Millsap", "val": 1.0}, {"name": "Nic Claxton", "val": 0.9}, {"name": "LaMarcus Aldridge", "val": 0.9}, {"name": "David Duke Jr.", "val": 0.8}, {"name": "Kessler Edwards", "val": 0.6}, {"name": "Day'Ron Sharpe", "val": 0.5}, {"name": "James Ennis III", "val": 0.0}, {"name": "Wenyen Gabriel", "val": 0.0}] },
      stl: { name: "Kyrie Irving", val: 1.4, all: [{"name": "Kyrie Irving", "val": 1.4}, {"name": "James Harden", "val": 1.3}, {"name": "Bruce Brown", "val": 1.1}, {"name": "DeAndre' Bembry", "val": 1.0}, {"name": "Seth Curry", "val": 0.9}, {"name": "Goran Dragić", "val": 0.9}, {"name": "Andre Drummond", "val": 0.9}, {"name": "Kevin Durant", "val": 0.9}, {"name": "Patty Mills", "val": 0.6}, {"name": "David Duke Jr.", "val": 0.6}, {"name": "Kessler Edwards", "val": 0.6}, {"name": "James Ennis III", "val": 0.5}, {"name": "Shaquille Harrison", "val": 0.5}, {"name": "Blake Griffin", "val": 0.5}, {"name": "Cam Thomas", "val": 0.5}, {"name": "James Johnson", "val": 0.5}, {"name": "Nic Claxton", "val": 0.5}, {"name": "Joe Harris", "val": 0.5}, {"name": "Day'Ron Sharpe", "val": 0.3}, {"name": "Jevon Carter", "val": 0.3}, {"name": "LaMarcus Aldridge", "val": 0.3}, {"name": "Paul Millsap", "val": 0.2}, {"name": "Langston Galloway", "val": 0.0}, {"name": "Wenyen Gabriel", "val": 0.0}] },
      blk: { name: "Nic Claxton", val: 1.1, all: [{"name": "Nic Claxton", "val": 1.1}, {"name": "LaMarcus Aldridge", "val": 1.0}, {"name": "Andre Drummond", "val": 1.0}, {"name": "Kevin Durant", "val": 0.9}, {"name": "James Harden", "val": 0.7}, {"name": "Bruce Brown", "val": 0.7}, {"name": "Kyrie Irving", "val": 0.6}, {"name": "James Ennis III", "val": 0.5}, {"name": "Paul Millsap", "val": 0.5}, {"name": "Shaquille Harrison", "val": 0.5}, {"name": "Day'Ron Sharpe", "val": 0.5}, {"name": "James Johnson", "val": 0.5}, {"name": "DeAndre' Bembry", "val": 0.5}, {"name": "Kessler Edwards", "val": 0.5}, {"name": "Blake Griffin", "val": 0.3}, {"name": "David Duke Jr.", "val": 0.3}, {"name": "Goran Dragić", "val": 0.2}, {"name": "Jevon Carter", "val": 0.2}, {"name": "Patty Mills", "val": 0.2}, {"name": "Seth Curry", "val": 0.2}, {"name": "Cam Thomas", "val": 0.1}, {"name": "Joe Harris", "val": 0.1}, {"name": "Langston Galloway", "val": 0.0}, {"name": "Wenyen Gabriel", "val": 0.0}] },
    },
    avail: [
      { name: "Patty Mills", g: 81 },
      { name: "Bruce Brown", g: 72 },
      { name: "Cam Thomas", g: 67 },
      { name: "James Johnson", g: 62 },
      { name: "Blake Griffin", g: 56 },
      { name: "Kevin Durant", g: 55 },
      { name: "DeAndre' Bembry", g: 48 },
      { name: "Kessler Edwards", g: 48 },
      { name: "LaMarcus Aldridge", g: 47 },
      { name: "Nic Claxton", g: 47 },
      { name: "Jevon Carter", g: 46 },
      { name: "James Harden", g: 44 },
      { name: "Day'Ron Sharpe", g: 32 },
      { name: "Kyrie Irving", g: 29 },
      { name: "Andre Drummond", g: 24 },
      { name: "Paul Millsap", g: 24 },
      { name: "David Duke Jr.", g: 22 },
      { name: "Seth Curry", g: 19 },
      { name: "Goran Dragić", g: 16 },
      { name: "Joe Harris", g: 14 },
      { name: "Langston Galloway", g: 4 },
      { name: "Shaquille Harrison", g: 2 },
      { name: "James Ennis III", g: 2 },
      { name: "Wenyen Gabriel", g: 1 },
    ]
  },

  "2022-23": {
    w: 45, l: 37,
    topW:   { pts: 128, opp: 86, against: "Washington Wizards" },
    worstL: { pts: 87, opp: 131, against: "Chicago Bulls" },
    conf_rank: 6,
    games: buildGames(
      "LWLLLLWLWWLWWLLWWLWLWWWWLWWWWWWWWWWWWLWWLLLLWWLLWWLWLLWLLWLLLLWWWLWWLLLLLWLWWWLWWL",
      ["New Orleans Pelicans", "Toronto Raptors", "Memphis Grizzlies", "Milwaukee Bucks", "Dallas Mavericks", "Indiana Pacers", "Indiana Pacers", "Chicago Bulls", "Washington Wizards", "Charlotte Hornets", "Dallas Mavericks", "New York Knicks", "Los Angeles Clippers", "Los Angeles Lakers", "Sacramento Kings", "Portland Trail Blazers", "Memphis Grizzlies", "Philadelphia 76ers", "Toronto Raptors", "Indiana Pacers", "Portland Trail Blazers", "Orlando Magic", "Washington Wizards", "Toronto Raptors", "Boston Celtics", "Charlotte Hornets", "Atlanta Hawks", "Indiana Pacers", "Washington Wizards", "Toronto Raptors", "Detroit Pistons", "Golden State Warriors", "Milwaukee Bucks", "Cleveland Cavaliers", "Atlanta Hawks", "Charlotte Hornets", "San Antonio Spurs", "Chicago Bulls", "New Orleans Pelicans", "Miami Heat", "Boston Celtics", "Oklahoma City Thunder", "San Antonio Spurs", "Phoenix Suns", "Utah Jazz", "Golden State Warriors", "Philadelphia 76ers", "Detroit Pistons", "New York Knicks", "Los Angeles Lakers", "Boston Celtics", "Washington Wizards", "Los Angeles Clippers", "Phoenix Suns", "Chicago Bulls", "Philadelphia 76ers", "New York Knicks", "Miami Heat", "Chicago Bulls", "Atlanta Hawks", "Milwaukee Bucks", "New York Knicks", "Boston Celtics", "Charlotte Hornets", "Houston Rockets", "Milwaukee Bucks", "Minnesota Timberwolves", "Denver Nuggets", "Oklahoma City Thunder", "Sacramento Kings", "Denver Nuggets", "Cleveland Cavaliers", "Cleveland Cavaliers", "Miami Heat", "Orlando Magic", "Houston Rockets", "Atlanta Hawks", "Utah Jazz", "Minnesota Timberwolves", "Detroit Pistons", "Orlando Magic", "Philadelphia 76ers"],
      [108, 109, 124, 99, 125, 116, 116, 99, 128, 98, 94, 112, 110, 103, 121, 109, 127, 106, 112, 117, 111, 109, 113, 114, 92, 122, 120, 136, 112, 119, 124, 143, 118, 125, 108, 123, 139, 112, 108, 102, 98, 102, 98, 112, 117, 120, 133, 122, 122, 121, 96, 125, 116, 112, 116, 98, 106, 116, 87, 127, 104, 118, 115, 102, 118, 113, 124, 122, 107, 96, 102, 109, 114, 129, 106, 123, 124, 111, 102, 123, 101, 105],
      [-22, 4, -10, -11, -4, -9, 7, -9, 42, 4, -2, 27, 15, -13, -32, 2, 12, -9, 14, -11, 14, 7, 6, 9, -11, 6, 4, 3, 12, 3, 3, 30, 18, 8, 1, 17, 36, -9, 6, 1, -11, -10, -8, -5, 11, 4, -4, -8, 7, 17, -43, 2, -8, -4, 11, -3, -18, 11, -44, -2, -14, -24, 10, 16, 22, -5, 1, 2, -14, -5, -6, -6, -2, 29, -13, 9, 17, 1, -5, 15, 17, -29]
    ),
    leaders: {
      pts: { name: "Kevin Durant", val: 29.7, all: [{"name": "Kevin Durant", "val": 29.7}, {"name": "Kyrie Irving", "val": 27.1}, {"name": "Mikal Bridges", "val": 26.1}, {"name": "Cameron Johnson", "val": 16.6}, {"name": "Spencer Dinwiddie", "val": 16.5}, {"name": "RaiQuan Gray", "val": 16.0}, {"name": "Nic Claxton", "val": 12.6}, {"name": "Cam Thomas", "val": 10.6}, {"name": "T.J. Warren", "val": 9.5}, {"name": "Seth Curry", "val": 9.2}, {"name": "Royce O'Neale", "val": 8.8}, {"name": "Joe Harris", "val": 7.6}, {"name": "Dorian Finney-Smith", "val": 7.2}, {"name": "Edmond Sumner", "val": 7.1}, {"name": "Ben Simmons", "val": 6.9}, {"name": "Patty Mills", "val": 6.2}, {"name": "Yuta Watanabe", "val": 5.6}, {"name": "Day'Ron Sharpe", "val": 4.7}, {"name": "David Duke Jr.", "val": 3.7}, {"name": "Markieff Morris", "val": 3.6}, {"name": "Dru Smith", "val": 3.3}, {"name": "Kessler Edwards", "val": 1.1}, {"name": "Nerlens Noel", "val": 1.0}, {"name": "Alondes Williams", "val": 0.0}, {"name": "Moses Brown", "val": 0.0}] },
      reb: { name: "Nic Claxton", val: 9.2, all: [{"name": "Nic Claxton", "val": 9.2}, {"name": "RaiQuan Gray", "val": 9.0}, {"name": "Kevin Durant", "val": 6.7}, {"name": "Ben Simmons", "val": 6.3}, {"name": "Kyrie Irving", "val": 5.1}, {"name": "Royce O'Neale", "val": 5.1}, {"name": "Dorian Finney-Smith", "val": 4.9}, {"name": "Cameron Johnson", "val": 4.8}, {"name": "Mikal Bridges", "val": 4.5}, {"name": "Day'Ron Sharpe", "val": 4.2}, {"name": "Spencer Dinwiddie", "val": 4.1}, {"name": "Nerlens Noel", "val": 3.0}, {"name": "T.J. Warren", "val": 2.8}, {"name": "Yuta Watanabe", "val": 2.4}, {"name": "Joe Harris", "val": 2.2}, {"name": "Markieff Morris", "val": 2.2}, {"name": "Cam Thomas", "val": 1.7}, {"name": "Seth Curry", "val": 1.6}, {"name": "Edmond Sumner", "val": 1.5}, {"name": "Dru Smith", "val": 1.5}, {"name": "David Duke Jr.", "val": 1.3}, {"name": "Patty Mills", "val": 1.1}, {"name": "Kessler Edwards", "val": 1.0}, {"name": "Alondes Williams", "val": 1.0}, {"name": "Moses Brown", "val": 0.0}] },
      ast: { name: "Spencer Dinwiddie", val: 9.1, all: [{"name": "Spencer Dinwiddie", "val": 9.1}, {"name": "RaiQuan Gray", "val": 7.0}, {"name": "Ben Simmons", "val": 6.1}, {"name": "Kyrie Irving", "val": 5.3}, {"name": "Kevin Durant", "val": 5.3}, {"name": "Royce O'Neale", "val": 3.7}, {"name": "Mikal Bridges", "val": 2.7}, {"name": "Cameron Johnson", "val": 2.1}, {"name": "Nic Claxton", "val": 1.9}, {"name": "Dru Smith", "val": 1.7}, {"name": "Dorian Finney-Smith", "val": 1.6}, {"name": "Seth Curry", "val": 1.6}, {"name": "Patty Mills", "val": 1.4}, {"name": "Joe Harris", "val": 1.4}, {"name": "Cam Thomas", "val": 1.4}, {"name": "Edmond Sumner", "val": 1.3}, {"name": "T.J. Warren", "val": 1.1}, {"name": "Nerlens Noel", "val": 1.0}, {"name": "Markieff Morris", "val": 0.9}, {"name": "David Duke Jr.", "val": 0.9}, {"name": "Day'Ron Sharpe", "val": 0.8}, {"name": "Yuta Watanabe", "val": 0.8}, {"name": "Kessler Edwards", "val": 0.1}, {"name": "Alondes Williams", "val": 0.0}, {"name": "Moses Brown", "val": 0.0}] },
      stl: { name: "Cameron Johnson", val: 1.4, all: [{"name": "Cameron Johnson", "val": 1.4}, {"name": "Ben Simmons", "val": 1.3}, {"name": "Spencer Dinwiddie", "val": 1.1}, {"name": "Kyrie Irving", "val": 1.0}, {"name": "Mikal Bridges", "val": 1.0}, {"name": "Nerlens Noel", "val": 1.0}, {"name": "Royce O'Neale", "val": 0.9}, {"name": "Nic Claxton", "val": 0.9}, {"name": "Kevin Durant", "val": 0.8}, {"name": "Dorian Finney-Smith", "val": 0.7}, {"name": "Dru Smith", "val": 0.6}, {"name": "Edmond Sumner", "val": 0.6}, {"name": "T.J. Warren", "val": 0.6}, {"name": "Seth Curry", "val": 0.6}, {"name": "Joe Harris", "val": 0.5}, {"name": "Moses Brown", "val": 0.5}, {"name": "Cam Thomas", "val": 0.4}, {"name": "Yuta Watanabe", "val": 0.4}, {"name": "Patty Mills", "val": 0.4}, {"name": "David Duke Jr.", "val": 0.4}, {"name": "Day'Ron Sharpe", "val": 0.3}, {"name": "Markieff Morris", "val": 0.3}, {"name": "Kessler Edwards", "val": 0.2}, {"name": "RaiQuan Gray", "val": 0.0}, {"name": "Alondes Williams", "val": 0.0}] },
      blk: { name: "Nic Claxton", val: 2.5, all: [{"name": "Nic Claxton", "val": 2.5}, {"name": "Kevin Durant", "val": 1.5}, {"name": "RaiQuan Gray", "val": 1.0}, {"name": "Kyrie Irving", "val": 0.8}, {"name": "Day'Ron Sharpe", "val": 0.7}, {"name": "Mikal Bridges", "val": 0.6}, {"name": "Royce O'Neale", "val": 0.6}, {"name": "Dorian Finney-Smith", "val": 0.6}, {"name": "Ben Simmons", "val": 0.6}, {"name": "Nerlens Noel", "val": 0.3}, {"name": "Yuta Watanabe", "val": 0.3}, {"name": "T.J. Warren", "val": 0.3}, {"name": "Cameron Johnson", "val": 0.3}, {"name": "Spencer Dinwiddie", "val": 0.3}, {"name": "Joe Harris", "val": 0.2}, {"name": "Edmond Sumner", "val": 0.2}, {"name": "Markieff Morris", "val": 0.2}, {"name": "Seth Curry", "val": 0.1}, {"name": "Cam Thomas", "val": 0.1}, {"name": "Patty Mills", "val": 0.1}, {"name": "Dru Smith", "val": 0.1}, {"name": "Kessler Edwards", "val": 0.1}, {"name": "David Duke Jr.", "val": 0.0}, {"name": "Alondes Williams", "val": 0.0}, {"name": "Moses Brown", "val": 0.0}] },
    },
    avail: [
      { name: "Royce O'Neale", g: 76 },
      { name: "Nic Claxton", g: 76 },
      { name: "Joe Harris", g: 74 },
      { name: "Seth Curry", g: 61 },
      { name: "Yuta Watanabe", g: 58 },
      { name: "Cam Thomas", g: 57 },
      { name: "Edmond Sumner", g: 53 },
      { name: "Day'Ron Sharpe", g: 48 },
      { name: "Ben Simmons", g: 42 },
      { name: "Kyrie Irving", g: 40 },
      { name: "Patty Mills", g: 40 },
      { name: "Kevin Durant", g: 39 },
      { name: "Markieff Morris", g: 27 },
      { name: "Mikal Bridges", g: 27 },
      { name: "T.J. Warren", g: 26 },
      { name: "Dorian Finney-Smith", g: 26 },
      { name: "Spencer Dinwiddie", g: 26 },
      { name: "Cameron Johnson", g: 25 },
      { name: "David Duke Jr.", g: 23 },
      { name: "Kessler Edwards", g: 14 },
      { name: "Dru Smith", g: 10 },
      { name: "Nerlens Noel", g: 3 },
      { name: "Moses Brown", g: 2 },
      { name: "RaiQuan Gray", g: 1 },
      { name: "Alondes Williams", g: 1 },
    ]
  },

  "2023-24": {
    w: 32, l: 50,
    topW:   { pts: 147, opp: 114, against: "Utah Jazz" },
    worstL: { pts: 86, opp: 136, against: "Boston Celtics" },
    conf_rank: 11,
    games: buildGames(
      "LLWWWLLWLWWLLLWWWLWWWLWLLLLLWWLLLLLWLLLLWLLLWWLWLLLWLLLLWLWWLWLLWLLLLLLWWWLLWWLWLL",
      ["Cleveland Cavaliers", "Dallas Mavericks", "Charlotte Hornets", "Miami Heat", "Chicago Bulls", "Boston Celtics", "Milwaukee Bucks", "Los Angeles Clippers", "Boston Celtics", "Washington Wizards", "Orlando Magic", "Miami Heat", "Philadelphia 76ers", "Atlanta Hawks", "Miami Heat", "Chicago Bulls", "Toronto Raptors", "Charlotte Hornets", "Orlando Magic", "Atlanta Hawks", "Washington Wizards", "Sacramento Kings", "Phoenix Suns", "Denver Nuggets", "Golden State Warriors", "Utah Jazz", "New York Knicks", "Denver Nuggets", "Detroit Pistons", "Detroit Pistons", "Milwaukee Bucks", "Washington Wizards", "Oklahoma City Thunder", "New Orleans Pelicans", "Houston Rockets", "Oklahoma City Thunder", "Portland Trail Blazers", "Cleveland Cavaliers", "Miami Heat", "Portland Trail Blazers", "Los Angeles Lakers", "Los Angeles Clippers", "New York Knicks", "Minnesota Timberwolves", "Houston Rockets", "Utah Jazz", "Phoenix Suns", "Philadelphia 76ers", "Golden State Warriors", "Dallas Mavericks", "Cleveland Cavaliers", "San Antonio Spurs", "Boston Celtics", "Boston Celtics", "Toronto Raptors", "Minnesota Timberwolves", "Memphis Grizzlies", "Orlando Magic", "Atlanta Hawks", "Atlanta Hawks", "Memphis Grizzlies", "Philadelphia 76ers", "Detroit Pistons", "Charlotte Hornets", "Cleveland Cavaliers", "Orlando Magic", "Indiana Pacers", "San Antonio Spurs", "New Orleans Pelicans", "Milwaukee Bucks", "New York Knicks", "Toronto Raptors", "Washington Wizards", "Chicago Bulls", "Los Angeles Lakers", "Indiana Pacers", "Indiana Pacers", "Detroit Pistons", "Sacramento Kings", "Toronto Raptors", "New York Knicks", "Philadelphia 76ers"],
      [113, 120, 133, 109, 109, 114, 125, 100, 107, 102, 124, 115, 99, 145, 112, 118, 115, 128, 129, 114, 124, 118, 116, 101, 120, 108, 102, 117, 126, 118, 122, 104, 108, 85, 101, 124, 127, 102, 95, 103, 130, 114, 103, 94, 106, 147, 120, 136, 98, 107, 95, 123, 110, 86, 93, 86, 111, 81, 124, 114, 102, 112, 112, 99, 120, 106, 100, 115, 91, 108, 93, 96, 122, 125, 104, 111, 115, 113, 77, 106, 107, 86],
      [-1, -5, 12, 4, 2, -10, -4, 7, -14, 8, 20, -7, -22, -2, 15, 9, 12, -1, 28, 1, 27, -13, 4, -23, -4, -17, -19, -5, 11, 6, -22, -6, -16, -27, -11, 9, -7, -9, -1, -2, 18, -11, -5, -2, 2, 33, -16, 15, -11, -12, -23, 20, -8, -50, -28, -15, 25, -27, 27, 12, -4, 5, -6, -11, 19, -8, -21, -7, -13, -7, -12, 8, 3, 17, -12, -22, 4, 10, -30, 4, -4, -21]
    ),
    leaders: {
      pts: { name: "Cam Thomas", val: 22.5, all: [{"name": "Cam Thomas", "val": 22.5}, {"name": "Mikal Bridges", "val": 19.6}, {"name": "Dennis Schröder", "val": 14.6}, {"name": "Cameron Johnson", "val": 13.4}, {"name": "Spencer Dinwiddie", "val": 12.6}, {"name": "Nic Claxton", "val": 11.8}, {"name": "Lonnie Walker IV", "val": 9.7}, {"name": "Dorian Finney-Smith", "val": 8.5}, {"name": "Royce O'Neale", "val": 7.4}, {"name": "Trendon Watford", "val": 6.9}, {"name": "Day'Ron Sharpe", "val": 6.8}, {"name": "Dennis Smith Jr.", "val": 6.6}, {"name": "Keon Johnson", "val": 6.2}, {"name": "Ben Simmons", "val": 6.1}, {"name": "Noah Clowney", "val": 5.8}, {"name": "Jalen Wilson", "val": 5.0}, {"name": "Armoni Brooks", "val": 4.2}, {"name": "Harry Giles", "val": 3.4}, {"name": "Keita Bates-Diop", "val": 1.6}, {"name": "Dariq Whitehead", "val": 1.5}, {"name": "Jacob Gilyard", "val": 0.0}] },
      reb: { name: "Nic Claxton", val: 9.9, all: [{"name": "Nic Claxton", "val": 9.9}, {"name": "Ben Simmons", "val": 7.9}, {"name": "Day'Ron Sharpe", "val": 6.4}, {"name": "Dorian Finney-Smith", "val": 4.7}, {"name": "Mikal Bridges", "val": 4.5}, {"name": "Royce O'Neale", "val": 4.5}, {"name": "Cameron Johnson", "val": 4.3}, {"name": "Dennis Schröder", "val": 3.5}, {"name": "Noah Clowney", "val": 3.5}, {"name": "Spencer Dinwiddie", "val": 3.3}, {"name": "Cam Thomas", "val": 3.2}, {"name": "Trendon Watford", "val": 3.1}, {"name": "Jalen Wilson", "val": 3.0}, {"name": "Dennis Smith Jr.", "val": 2.9}, {"name": "Lonnie Walker IV", "val": 2.2}, {"name": "Dariq Whitehead", "val": 2.0}, {"name": "Armoni Brooks", "val": 1.8}, {"name": "Harry Giles", "val": 1.6}, {"name": "Keon Johnson", "val": 1.4}, {"name": "Jacob Gilyard", "val": 0.8}, {"name": "Keita Bates-Diop", "val": 0.6}] },
      ast: { name: "Spencer Dinwiddie", val: 6.0, all: [{"name": "Spencer Dinwiddie", "val": 6.0}, {"name": "Dennis Schröder", "val": 6.0}, {"name": "Ben Simmons", "val": 5.7}, {"name": "Mikal Bridges", "val": 3.6}, {"name": "Dennis Smith Jr.", "val": 3.6}, {"name": "Cam Thomas", "val": 2.9}, {"name": "Royce O'Neale", "val": 2.8}, {"name": "Cameron Johnson", "val": 2.4}, {"name": "Nic Claxton", "val": 2.1}, {"name": "Dorian Finney-Smith", "val": 1.6}, {"name": "Jacob Gilyard", "val": 1.5}, {"name": "Dariq Whitehead", "val": 1.5}, {"name": "Day'Ron Sharpe", "val": 1.4}, {"name": "Trendon Watford", "val": 1.3}, {"name": "Lonnie Walker IV", "val": 1.3}, {"name": "Jalen Wilson", "val": 1.0}, {"name": "Noah Clowney", "val": 0.8}, {"name": "Keon Johnson", "val": 0.6}, {"name": "Armoni Brooks", "val": 0.5}, {"name": "Harry Giles", "val": 0.4}, {"name": "Keita Bates-Diop", "val": 0.3}] },
      stl: { name: "Jacob Gilyard", val: 1.5, all: [{"name": "Jacob Gilyard", "val": 1.5}, {"name": "Dennis Smith Jr.", "val": 1.2}, {"name": "Mikal Bridges", "val": 1.0}, {"name": "Spencer Dinwiddie", "val": 0.8}, {"name": "Dorian Finney-Smith", "val": 0.8}, {"name": "Cameron Johnson", "val": 0.8}, {"name": "Ben Simmons", "val": 0.8}, {"name": "Cam Thomas", "val": 0.7}, {"name": "Royce O'Neale", "val": 0.7}, {"name": "Keon Johnson", "val": 0.6}, {"name": "Lonnie Walker IV", "val": 0.6}, {"name": "Dennis Schröder", "val": 0.6}, {"name": "Nic Claxton", "val": 0.6}, {"name": "Day'Ron Sharpe", "val": 0.4}, {"name": "Trendon Watford", "val": 0.4}, {"name": "Noah Clowney", "val": 0.3}, {"name": "Jalen Wilson", "val": 0.3}, {"name": "Keita Bates-Diop", "val": 0.2}, {"name": "Armoni Brooks", "val": 0.1}, {"name": "Harry Giles", "val": 0.1}, {"name": "Dariq Whitehead", "val": 0.0}] },
      blk: { name: "Nic Claxton", val: 2.1, all: [{"name": "Nic Claxton", "val": 2.1}, {"name": "Day'Ron Sharpe", "val": 0.7}, {"name": "Noah Clowney", "val": 0.7}, {"name": "Dorian Finney-Smith", "val": 0.6}, {"name": "Royce O'Neale", "val": 0.6}, {"name": "Ben Simmons", "val": 0.6}, {"name": "Dariq Whitehead", "val": 0.5}, {"name": "Mikal Bridges", "val": 0.4}, {"name": "Dennis Schröder", "val": 0.3}, {"name": "Trendon Watford", "val": 0.3}, {"name": "Lonnie Walker IV", "val": 0.3}, {"name": "Cameron Johnson", "val": 0.3}, {"name": "Dennis Smith Jr.", "val": 0.2}, {"name": "Spencer Dinwiddie", "val": 0.2}, {"name": "Keon Johnson", "val": 0.2}, {"name": "Cam Thomas", "val": 0.2}, {"name": "Harry Giles", "val": 0.2}, {"name": "Jalen Wilson", "val": 0.1}, {"name": "Armoni Brooks", "val": 0.1}, {"name": "Keita Bates-Diop", "val": 0.1}, {"name": "Jacob Gilyard", "val": 0.0}] },
    },
    avail: [
      { name: "Mikal Bridges", g: 82 },
      { name: "Nic Claxton", g: 71 },
      { name: "Dorian Finney-Smith", g: 68 },
      { name: "Cam Thomas", g: 66 },
      { name: "Trendon Watford", g: 63 },
      { name: "Day'Ron Sharpe", g: 61 },
      { name: "Lonnie Walker IV", g: 58 },
      { name: "Cameron Johnson", g: 58 },
      { name: "Dennis Smith Jr.", g: 56 },
      { name: "Royce O'Neale", g: 49 },
      { name: "Spencer Dinwiddie", g: 48 },
      { name: "Jalen Wilson", g: 43 },
      { name: "Dennis Schröder", g: 29 },
      { name: "Noah Clowney", g: 23 },
      { name: "Harry Giles", g: 16 },
      { name: "Ben Simmons", g: 15 },
      { name: "Keita Bates-Diop", g: 14 },
      { name: "Armoni Brooks", g: 10 },
      { name: "Keon Johnson", g: 5 },
      { name: "Jacob Gilyard", g: 4 },
      { name: "Dariq Whitehead", g: 2 },
    ]
  },

  "2024-25": {
    w: 26, l: 56,
    topW:   { pts: 104, opp: 83, against: "Charlotte Hornets" },
    worstL: { pts: 67, opp: 126, against: "Los Angeles Clippers" },
    conf_rank: 12,
    games: buildGames(
      "LLWLWWLWLLWLLLWLWWWLLLWLLLWLLWLLLWLLLLLWLLLLLLLWWWLWWWLWLLLLLLLWLLLWLLLLLLWWLLWLLL",
      ["Atlanta Hawks", "Orlando Magic", "Milwaukee Bucks", "Denver Nuggets", "Memphis Grizzlies", "Chicago Bulls", "Detroit Pistons", "Memphis Grizzlies", "Boston Celtics", "Cleveland Cavaliers", "New Orleans Pelicans", "Boston Celtics", "New York Knicks", "New York Knicks", "Charlotte Hornets", "Philadelphia 76ers", "Sacramento Kings", "Golden State Warriors", "Phoenix Suns", "Orlando Magic", "Orlando Magic", "Chicago Bulls", "Indiana Pacers", "Milwaukee Bucks", "Memphis Grizzlies", "Cleveland Cavaliers", "Toronto Raptors", "Utah Jazz", "Miami Heat", "Milwaukee Bucks", "San Antonio Spurs", "Orlando Magic", "Toronto Raptors", "Milwaukee Bucks", "Philadelphia 76ers", "Indiana Pacers", "Detroit Pistons", "Denver Nuggets", "Utah Jazz", "Portland Trail Blazers", "Los Angeles Clippers", "Los Angeles Lakers", "Oklahoma City Thunder", "New York Knicks", "Phoenix Suns", "Miami Heat", "Sacramento Kings", "Charlotte Hornets", "Houston Rockets", "Houston Rockets", "Washington Wizards", "Miami Heat", "Charlotte Hornets", "Philadelphia 76ers", "Cleveland Cavaliers", "Philadelphia 76ers", "Washington Wizards", "Oklahoma City Thunder", "Portland Trail Blazers", "Detroit Pistons", "San Antonio Spurs", "Golden State Warriors", "Charlotte Hornets", "Los Angeles Lakers", "Cleveland Cavaliers", "Chicago Bulls", "Boston Celtics", "Atlanta Hawks", "Boston Celtics", "Indiana Pacers", "Indiana Pacers", "Dallas Mavericks", "Toronto Raptors", "Los Angeles Clippers", "Washington Wizards", "Dallas Mavericks", "Minnesota Timberwolves", "Toronto Raptors", "New Orleans Pelicans", "Atlanta Hawks", "Minnesota Timberwolves", "New York Knicks"],
      [116, 101, 115, 139, 119, 120, 92, 106, 104, 100, 107, 114, 122, 104, 116, 98, 108, 128, 127, 100, 92, 102, 99, 113, 119, 101, 101, 94, 95, 111, 87, 101, 113, 113, 94, 99, 98, 105, 111, 132, 67, 101, 101, 95, 84, 97, 96, 104, 110, 99, 102, 102, 97, 100, 97, 105, 99, 121, 102, 94, 113, 119, 102, 111, 104, 110, 113, 122, 96, 99, 103, 101, 86, 100, 115, 113, 90, 109, 119, 109, 91, 105],
      [-4, -15, 13, -5, 13, 8, -14, 2, -4, -5, 2, -25, -2, -10, 1, -15, 5, 8, 10, -23, -8, -26, 9, -5, -16, -29, 7, -11, -15, 6, -9, -1, -17, 3, -29, -14, -15, -19, -1, 18, -59, -1, -26, -4, -24, -9, -14, 21, 12, 2, -17, 16, 8, 4, -13, 2, -8, -8, -19, -21, -14, -2, -3, 3, -5, -6, -2, 8, -8, -6, -5, -19, -30, -32, 3, 4, -15, -11, 5, -24, -26, -8]
    ),
    leaders: {
      pts: { name: "Cam Thomas", val: 24.0, all: [{"name": "Cam Thomas", "val": 24.0}, {"name": "Cameron Johnson", "val": 18.8}, {"name": "Dennis Schröder", "val": 18.4}, {"name": "D'Angelo Russell", "val": 12.9}, {"name": "Drew Timme", "val": 12.1}, {"name": "Keon Johnson", "val": 10.6}, {"name": "Dorian Finney-Smith", "val": 10.4}, {"name": "Nic Claxton", "val": 10.3}, {"name": "Trendon Watford", "val": 10.2}, {"name": "Ziaire Williams", "val": 10.0}, {"name": "Tosan Evbuomwan", "val": 9.5}, {"name": "Jalen Wilson", "val": 9.5}, {"name": "Noah Clowney", "val": 9.1}, {"name": "Killian Hayes", "val": 9.0}, {"name": "Tyrese Martin", "val": 8.7}, {"name": "Tyson Etienne", "val": 7.9}, {"name": "Day'Ron Sharpe", "val": 7.9}, {"name": "Shake Milton", "val": 7.4}, {"name": "Ben Simmons", "val": 6.2}, {"name": "Dariq Whitehead", "val": 5.7}, {"name": "Maxwell Lewis", "val": 5.3}, {"name": "Reece Beekman", "val": 2.7}, {"name": "Jaylen Martin", "val": 1.0}, {"name": "Cui Yongxi", "val": 0.6}] },
      reb: { name: "Nic Claxton", val: 7.4, all: [{"name": "Nic Claxton", "val": 7.4}, {"name": "Drew Timme", "val": 7.2}, {"name": "Day'Ron Sharpe", "val": 6.6}, {"name": "Ben Simmons", "val": 5.2}, {"name": "Dorian Finney-Smith", "val": 4.6}, {"name": "Ziaire Williams", "val": 4.6}, {"name": "Tosan Evbuomwan", "val": 4.3}, {"name": "Cameron Johnson", "val": 4.3}, {"name": "Noah Clowney", "val": 3.9}, {"name": "Keon Johnson", "val": 3.8}, {"name": "Tyrese Martin", "val": 3.7}, {"name": "Trendon Watford", "val": 3.6}, {"name": "Jalen Wilson", "val": 3.4}, {"name": "Cam Thomas", "val": 3.3}, {"name": "Dennis Schröder", "val": 3.0}, {"name": "Killian Hayes", "val": 3.0}, {"name": "D'Angelo Russell", "val": 2.8}, {"name": "Maxwell Lewis", "val": 2.5}, {"name": "Shake Milton", "val": 1.9}, {"name": "Dariq Whitehead", "val": 1.5}, {"name": "Tyson Etienne", "val": 1.3}, {"name": "Reece Beekman", "val": 1.1}, {"name": "Cui Yongxi", "val": 0.4}, {"name": "Jaylen Martin", "val": 0.0}] },
      ast: { name: "Ben Simmons", val: 6.9, all: [{"name": "Ben Simmons", "val": 6.9}, {"name": "Dennis Schröder", "val": 6.6}, {"name": "D'Angelo Russell", "val": 5.6}, {"name": "Killian Hayes", "val": 5.2}, {"name": "Cam Thomas", "val": 3.8}, {"name": "Cameron Johnson", "val": 3.4}, {"name": "Trendon Watford", "val": 2.6}, {"name": "Shake Milton", "val": 2.4}, {"name": "Drew Timme", "val": 2.2}, {"name": "Nic Claxton", "val": 2.2}, {"name": "Keon Johnson", "val": 2.2}, {"name": "Tyrese Martin", "val": 2.0}, {"name": "Tosan Evbuomwan", "val": 2.0}, {"name": "Jalen Wilson", "val": 1.8}, {"name": "Day'Ron Sharpe", "val": 1.8}, {"name": "Reece Beekman", "val": 1.8}, {"name": "Tyson Etienne", "val": 1.7}, {"name": "Dorian Finney-Smith", "val": 1.6}, {"name": "Ziaire Williams", "val": 1.3}, {"name": "Noah Clowney", "val": 0.9}, {"name": "Maxwell Lewis", "val": 0.8}, {"name": "Dariq Whitehead", "val": 0.6}, {"name": "Cui Yongxi", "val": 0.0}, {"name": "Jaylen Martin", "val": 0.0}] },
      stl: { name: "Dennis Schröder", val: 1.1, all: [{"name": "Dennis Schröder", "val": 1.1}, {"name": "D'Angelo Russell", "val": 1.1}, {"name": "Keon Johnson", "val": 1.0}, {"name": "Ziaire Williams", "val": 1.0}, {"name": "Reece Beekman", "val": 0.9}, {"name": "Cameron Johnson", "val": 0.9}, {"name": "Tosan Evbuomwan", "val": 0.9}, {"name": "Nic Claxton", "val": 0.9}, {"name": "Dorian Finney-Smith", "val": 0.9}, {"name": "Ben Simmons", "val": 0.8}, {"name": "Day'Ron Sharpe", "val": 0.8}, {"name": "Killian Hayes", "val": 0.7}, {"name": "Cam Thomas", "val": 0.6}, {"name": "Tyrese Martin", "val": 0.6}, {"name": "Trendon Watford", "val": 0.6}, {"name": "Shake Milton", "val": 0.6}, {"name": "Jalen Wilson", "val": 0.5}, {"name": "Noah Clowney", "val": 0.5}, {"name": "Maxwell Lewis", "val": 0.4}, {"name": "Tyson Etienne", "val": 0.4}, {"name": "Drew Timme", "val": 0.4}, {"name": "Dariq Whitehead", "val": 0.3}, {"name": "Cui Yongxi", "val": 0.0}, {"name": "Jaylen Martin", "val": 0.0}] },
      blk: { name: "Nic Claxton", val: 1.4, all: [{"name": "Nic Claxton", "val": 1.4}, {"name": "Day'Ron Sharpe", "val": 0.8}, {"name": "Killian Hayes", "val": 0.7}, {"name": "D'Angelo Russell", "val": 0.7}, {"name": "Dorian Finney-Smith", "val": 0.6}, {"name": "Ben Simmons", "val": 0.5}, {"name": "Noah Clowney", "val": 0.5}, {"name": "Tosan Evbuomwan", "val": 0.4}, {"name": "Ziaire Williams", "val": 0.4}, {"name": "Keon Johnson", "val": 0.4}, {"name": "Cameron Johnson", "val": 0.4}, {"name": "Maxwell Lewis", "val": 0.3}, {"name": "Trendon Watford", "val": 0.3}, {"name": "Tyrese Martin", "val": 0.2}, {"name": "Dennis Schröder", "val": 0.2}, {"name": "Tyson Etienne", "val": 0.1}, {"name": "Jalen Wilson", "val": 0.1}, {"name": "Drew Timme", "val": 0.1}, {"name": "Cam Thomas", "val": 0.1}, {"name": "Reece Beekman", "val": 0.1}, {"name": "Dariq Whitehead", "val": 0.1}, {"name": "Shake Milton", "val": 0.0}, {"name": "Cui Yongxi", "val": 0.0}, {"name": "Jaylen Martin", "val": 0.0}] },
    },
    avail: [
      { name: "Jalen Wilson", g: 79 },
      { name: "Keon Johnson", g: 79 },
      { name: "Nic Claxton", g: 70 },
      { name: "Ziaire Williams", g: 63 },
      { name: "Tyrese Martin", g: 60 },
      { name: "Cameron Johnson", g: 57 },
      { name: "Day'Ron Sharpe", g: 50 },
      { name: "Noah Clowney", g: 46 },
      { name: "Trendon Watford", g: 44 },
      { name: "Reece Beekman", g: 34 },
      { name: "Ben Simmons", g: 33 },
      { name: "D'Angelo Russell", g: 29 },
      { name: "Tosan Evbuomwan", g: 28 },
      { name: "Shake Milton", g: 27 },
      { name: "Cam Thomas", g: 25 },
      { name: "Dennis Schröder", g: 23 },
      { name: "Maxwell Lewis", g: 21 },
      { name: "Dorian Finney-Smith", g: 20 },
      { name: "Dariq Whitehead", g: 20 },
      { name: "Drew Timme", g: 9 },
      { name: "Tyson Etienne", g: 7 },
      { name: "Killian Hayes", g: 6 },
      { name: "Cui Yongxi", g: 5 },
      { name: "Jaylen Martin", g: 3 },
    ]
  },

  "2025-26": {
    w: 20, l: 62,
    topW:   { pts: 127, opp: 82, against: "Milwaukee Bucks" },
    worstL: { pts: 66, opp: 120, against: "New York Knicks" },
    conf_rank: 13,
    games: buildGames(
      "LLLLLLLWLLLLWLWLLLLWWLWLWLWWWLLLWLLLLLWLLLLLLLWLLLWWLLLLLLLLLLWWLLLLLLLLLLWLLWWLLL",
      ["Charlotte Hornets", "Cleveland Cavaliers", "San Antonio Spurs", "Houston Rockets", "Atlanta Hawks", "Philadelphia 76ers", "Minnesota Timberwolves", "Indiana Pacers", "Detroit Pistons", "New York Knicks", "Toronto Raptors", "Orlando Magic", "Washington Wizards", "Boston Celtics", "Boston Celtics", "Toronto Raptors", "New York Knicks", "Philadelphia 76ers", "Milwaukee Bucks", "Charlotte Hornets", "Chicago Bulls", "Utah Jazz", "New Orleans Pelicans", "Dallas Mavericks", "Milwaukee Bucks", "Miami Heat", "Toronto Raptors", "Philadelphia 76ers", "Minnesota Timberwolves", "Golden State Warriors", "Houston Rockets", "Washington Wizards", "Denver Nuggets", "Orlando Magic", "Los Angeles Clippers", "Memphis Grizzlies", "Dallas Mavericks", "New Orleans Pelicans", "Chicago Bulls", "Chicago Bulls", "Phoenix Suns", "New York Knicks", "Boston Celtics", "Los Angeles Clippers", "Phoenix Suns", "Denver Nuggets", "Utah Jazz", "Detroit Pistons", "Los Angeles Lakers", "Orlando Magic", "Washington Wizards", "Chicago Bulls", "Indiana Pacers", "Cleveland Cavaliers", "Oklahoma City Thunder", "Atlanta Hawks", "Dallas Mavericks", "San Antonio Spurs", "Boston Celtics", "Cleveland Cavaliers", "Miami Heat", "Miami Heat", "Detroit Pistons", "Memphis Grizzlies", "Detroit Pistons", "Atlanta Hawks", "Philadelphia 76ers", "Portland Trail Blazers", "Oklahoma City Thunder", "New York Knicks", "Sacramento Kings", "Portland Trail Blazers", "Golden State Warriors", "Los Angeles Lakers", "Sacramento Kings", "Charlotte Hornets", "Atlanta Hawks", "Washington Wizards", "Milwaukee Bucks", "Indiana Pacers", "Milwaukee Bucks", "Toronto Raptors"],
      [117, 124, 107, 109, 112, 105, 109, 112, 107, 98, 109, 98, 129, 99, 113, 109, 100, 103, 99, 116, 113, 110, 119, 111, 127, 95, 96, 114, 123, 107, 96, 99, 127, 103, 105, 98, 105, 113, 112, 102, 117, 66, 126, 89, 102, 103, 109, 77, 109, 98, 127, 123, 110, 84, 86, 104, 114, 110, 111, 102, 98, 110, 107, 126, 100, 97, 97, 95, 92, 92, 122, 99, 106, 99, 116, 86, 107, 121, 96, 94, 108, 101],
      [-19, -7, -11, -28, -5, -24, -16, 9, -18, -36, -10, -7, 23, -14, 8, -10, -13, -12, -17, 13, 10, -13, 18, -8, 45, -11, 15, 8, 16, -13, -24, -20, 12, -1, -16, -5, -8, -3, 3, -22, -9, -54, -4, -37, -4, -4, 10, -53, -16, -20, 14, 8, -5, -28, -19, -11, -9, -16, -37, -4, -26, -16, 2, 11, -38, -11, -7, -19, -29, -1, -4, -35, -3, -17, 17, -31, -34, 6, 6, -29, -17, -35]
    ),
    leaders: {
      pts: { name: "Michael Porter Jr.", val: 24.2, all: [{"name": "Michael Porter Jr.", "val": 24.2}, {"name": "Cam Thomas", "val": 15.6}, {"name": "Noah Clowney", "val": 12.3}, {"name": "Nic Claxton", "val": 11.7}, {"name": "Josh Minott", "val": 10.8}, {"name": "Egor Dёmin", "val": 10.3}, {"name": "Ziaire Williams", "val": 10.2}, {"name": "Nolan Traoré", "val": 8.9}, {"name": "Danny Wolf", "val": 8.9}, {"name": "Day'Ron Sharpe", "val": 8.7}, {"name": "Malachi Smith", "val": 8.3}, {"name": "Chaney Johnson", "val": 8.2}, {"name": "Tre Scott", "val": 8.0}, {"name": "Tyson Etienne", "val": 7.9}, {"name": "Ben Saraf", "val": 7.5}, {"name": "Tyrese Martin", "val": 7.3}, {"name": "Terance Mann", "val": 7.2}, {"name": "Ochai Agbaji", "val": 6.7}, {"name": "Drake Powell", "val": 6.5}, {"name": "Jalen Wilson", "val": 6.4}, {"name": "E.J. Liddell", "val": 5.7}, {"name": "Grant Nelson", "val": 4.3}] },
      reb: { name: "Michael Porter Jr.", val: 7.1, all: [{"name": "Michael Porter Jr.", "val": 7.1}, {"name": "Nic Claxton", "val": 6.9}, {"name": "Day'Ron Sharpe", "val": 6.7}, {"name": "Tre Scott", "val": 5.2}, {"name": "Danny Wolf", "val": 4.9}, {"name": "Chaney Johnson", "val": 4.6}, {"name": "Noah Clowney", "val": 4.1}, {"name": "Malachi Smith", "val": 3.4}, {"name": "Terance Mann", "val": 3.2}, {"name": "Egor Dёmin", "val": 3.2}, {"name": "Tyrese Martin", "val": 2.9}, {"name": "E.J. Liddell", "val": 2.7}, {"name": "Josh Minott", "val": 2.5}, {"name": "Ziaire Williams", "val": 2.4}, {"name": "Ochai Agbaji", "val": 2.3}, {"name": "Jalen Wilson", "val": 2.1}, {"name": "Ben Saraf", "val": 2.1}, {"name": "Cam Thomas", "val": 1.8}, {"name": "Drake Powell", "val": 1.8}, {"name": "Nolan Traoré", "val": 1.8}, {"name": "Grant Nelson", "val": 1.5}, {"name": "Tyson Etienne", "val": 1.1}] },
      ast: { name: "Nolan Traoré", val: 3.8, all: [{"name": "Nolan Traoré", "val": 3.8}, {"name": "Nic Claxton", "val": 3.7}, {"name": "Malachi Smith", "val": 3.3}, {"name": "Ben Saraf", "val": 3.3}, {"name": "Egor Dёmin", "val": 3.3}, {"name": "Cam Thomas", "val": 3.1}, {"name": "Michael Porter Jr.", "val": 3.0}, {"name": "Terance Mann", "val": 3.0}, {"name": "Day'Ron Sharpe", "val": 2.3}, {"name": "Danny Wolf", "val": 2.2}, {"name": "Chaney Johnson", "val": 2.1}, {"name": "Tyrese Martin", "val": 1.9}, {"name": "Tyson Etienne", "val": 1.7}, {"name": "Tre Scott", "val": 1.7}, {"name": "Noah Clowney", "val": 1.6}, {"name": "Drake Powell", "val": 1.4}, {"name": "Grant Nelson", "val": 1.3}, {"name": "Ziaire Williams", "val": 1.1}, {"name": "Jalen Wilson", "val": 0.9}, {"name": "Ochai Agbaji", "val": 0.9}, {"name": "E.J. Liddell", "val": 0.9}, {"name": "Josh Minott", "val": 0.8}] },
      stl: { name: "Ziaire Williams", val: 1.4, all: [{"name": "Ziaire Williams", "val": 1.4}, {"name": "Tre Scott", "val": 1.3}, {"name": "Josh Minott", "val": 1.3}, {"name": "Day'Ron Sharpe", "val": 1.1}, {"name": "Michael Porter Jr.", "val": 1.1}, {"name": "Chaney Johnson", "val": 0.9}, {"name": "Ben Saraf", "val": 0.9}, {"name": "Malachi Smith", "val": 0.8}, {"name": "Egor Dёmin", "val": 0.8}, {"name": "Noah Clowney", "val": 0.8}, {"name": "Nolan Traoré", "val": 0.8}, {"name": "Nic Claxton", "val": 0.7}, {"name": "Terance Mann", "val": 0.7}, {"name": "Drake Powell", "val": 0.6}, {"name": "Tyrese Martin", "val": 0.6}, {"name": "Danny Wolf", "val": 0.5}, {"name": "Tyson Etienne", "val": 0.5}, {"name": "Ochai Agbaji", "val": 0.4}, {"name": "Jalen Wilson", "val": 0.4}, {"name": "Grant Nelson", "val": 0.3}, {"name": "Cam Thomas", "val": 0.2}, {"name": "E.J. Liddell", "val": 0.2}] },
      blk: { name: "Grant Nelson", val: 1.3, all: [{"name": "Grant Nelson", "val": 1.3}, {"name": "Nic Claxton", "val": 1.1}, {"name": "Josh Minott", "val": 0.8}, {"name": "Tre Scott", "val": 0.8}, {"name": "Noah Clowney", "val": 0.7}, {"name": "Danny Wolf", "val": 0.6}, {"name": "Chaney Johnson", "val": 0.5}, {"name": "Day'Ron Sharpe", "val": 0.4}, {"name": "Nolan Traoré", "val": 0.4}, {"name": "E.J. Liddell", "val": 0.4}, {"name": "Ziaire Williams", "val": 0.4}, {"name": "Ochai Agbaji", "val": 0.3}, {"name": "Michael Porter Jr.", "val": 0.3}, {"name": "Egor Dёmin", "val": 0.3}, {"name": "Malachi Smith", "val": 0.3}, {"name": "Terance Mann", "val": 0.2}, {"name": "Drake Powell", "val": 0.2}, {"name": "Ben Saraf", "val": 0.2}, {"name": "Cam Thomas", "val": 0.1}, {"name": "Tyrese Martin", "val": 0.1}, {"name": "Tyson Etienne", "val": 0.0}, {"name": "Jalen Wilson", "val": 0.0}] },
    },
    avail: [
      { name: "Nic Claxton", g: 69 },
      { name: "Noah Clowney", g: 66 },
      { name: "Terance Mann", g: 63 },
      { name: "Drake Powell", g: 63 },
      { name: "Day'Ron Sharpe", g: 62 },
      { name: "Danny Wolf", g: 57 },
      { name: "Ziaire Williams", g: 56 },
      { name: "Nolan Traoré", g: 56 },
      { name: "Jalen Wilson", g: 54 },
      { name: "Michael Porter Jr.", g: 52 },
      { name: "Egor Dёmin", g: 52 },
      { name: "Ben Saraf", g: 44 },
      { name: "Tyrese Martin", g: 37 },
      { name: "E.J. Liddell", g: 26 },
      { name: "Cam Thomas", g: 24 },
      { name: "Tyson Etienne", g: 24 },
      { name: "Ochai Agbaji", g: 20 },
      { name: "Chaney Johnson", g: 17 },
      { name: "Josh Minott", g: 16 },
      { name: "Malachi Smith", g: 15 },
      { name: "Tre Scott", g: 6 },
      { name: "Grant Nelson", g: 4 },
    ]
  },

};
