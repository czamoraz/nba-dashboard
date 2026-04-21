/* ================================================================
   CHI.js — Chicago Bulls · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Chicago Bulls",
  abbr:          "CHI",
  conference:    "East",
  primaryColor:  "#CE1141",
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
    w: 31, l: 41,
    topW:   { pts: 118, opp: 92, against: "Orlando Magic" },
    worstL: { pts: 96, opp: 126, against: "Milwaukee Bucks" },
    conf_rank: 11,
    games: buildGames(
      "LLLWWLWWLLLLWWWLLLWLLWLWLWWLWWWLLWLLWWLLWLLLLLLWWWLLLLLWWLWLWLLLLWWWLWLW",
      ["Atlanta Hawks", "Indiana Pacers", "Golden State Warriors", "Washington Wizards", "Washington Wizards", "Milwaukee Bucks", "Dallas Mavericks", "Portland Trail Blazers", "Sacramento Kings", "Los Angeles Lakers", "Los Angeles Clippers", "Oklahoma City Thunder", "Dallas Mavericks", "Houston Rockets", "Charlotte Hornets", "Los Angeles Lakers", "Boston Celtics", "Portland Trail Blazers", "New York Knicks", "New York Knicks", "Orlando Magic", "Orlando Magic", "Washington Wizards", "New Orleans Pelicans", "Los Angeles Clippers", "Indiana Pacers", "Detroit Pistons", "Philadelphia 76ers", "Sacramento Kings", "Houston Rockets", "Minnesota Timberwolves", "Phoenix Suns", "Denver Nuggets", "New Orleans Pelicans", "Philadelphia 76ers", "Miami Heat", "Toronto Raptors", "Oklahoma City Thunder", "San Antonio Spurs", "Denver Nuggets", "Detroit Pistons", "Utah Jazz", "Cleveland Cavaliers", "San Antonio Spurs", "Golden State Warriors", "Phoenix Suns", "Utah Jazz", "Brooklyn Nets", "Indiana Pacers", "Toronto Raptors", "Atlanta Hawks", "Minnesota Timberwolves", "Memphis Grizzlies", "Orlando Magic", "Memphis Grizzlies", "Cleveland Cavaliers", "Boston Celtics", "Cleveland Cavaliers", "Charlotte Hornets", "Miami Heat", "Miami Heat", "New York Knicks", "Milwaukee Bucks", "Atlanta Hawks", "Philadelphia 76ers", "Charlotte Hornets", "Boston Celtics", "Detroit Pistons", "Brooklyn Nets", "Toronto Raptors", "Brooklyn Nets", "Milwaukee Bucks"],
      [104, 106, 128, 115, 133, 96, 118, 111, 124, 115, 127, 125, 117, 125, 123, 90, 103, 122, 110, 103, 119, 118, 101, 129, 106, 120, 105, 105, 122, 120, 133, 97, 112, 128, 105, 90, 118, 123, 99, 127, 100, 95, 94, 104, 102, 116, 106, 115, 113, 122, 108, 117, 90, 106, 115, 106, 102, 105, 108, 101, 110, 94, 98, 97, 94, 120, 121, 108, 107, 114, 91, 118],
      [-20, -19, -1, 8, 3, -30, 10, 3, -4, -2, -3, -2, 16, 5, 13, -11, -16, -1, 8, -4, -4, 26, -4, 13, -19, 8, 3, -7, 8, 20, 7, -9, -6, 4, -22, -11, 23, 21, -7, -4, 14, -25, -9, -16, -14, -5, -7, 8, 16, 9, -12, -4, -11, -9, -11, 10, 6, -16, 17, -5, 8, -19, -10, -11, -12, 21, 22, 12, -8, 12, -14, 6]
    ),
    leaders: {
      pts: { name: "Zach LaVine", val: 27.4, all: [{"name": "Zach LaVine", "val": 27.4}, {"name": "Nikola Vučević", "val": 21.5}, {"name": "Coby White", "val": 15.1}, {"name": "Lauri Markkanen", "val": 13.6}, {"name": "Thaddeus Young", "val": 12.1}, {"name": "Wendell Carter Jr.", "val": 10.9}, {"name": "Daniel Theis", "val": 10.0}, {"name": "Otto Porter Jr.", "val": 9.9}, {"name": "Patrick Williams", "val": 9.2}, {"name": "Tomáš Satoranský", "val": 7.7}, {"name": "Garrett Temple", "val": 7.6}, {"name": "Denzel Valentine", "val": 6.5}, {"name": "Troy Brown Jr.", "val": 5.5}, {"name": "Daniel Gafford", "val": 4.7}, {"name": "Ryan Arcidiacono", "val": 3.1}, {"name": "Javonte Green", "val": 2.6}, {"name": "Devon Dotson", "val": 2.1}, {"name": "Luke Kornet", "val": 2.0}, {"name": "Chandler Hutchison", "val": 1.9}, {"name": "Al-Farouq Aminu", "val": 1.5}, {"name": "Cristiano Felício", "val": 1.3}, {"name": "Adam Mokoka", "val": 1.1}] },
      reb: { name: "Nikola Vučević", val: 11.5, all: [{"name": "Nikola Vučević", "val": 11.5}, {"name": "Wendell Carter Jr.", "val": 7.8}, {"name": "Thaddeus Young", "val": 6.2}, {"name": "Daniel Theis", "val": 5.9}, {"name": "Otto Porter Jr.", "val": 5.5}, {"name": "Lauri Markkanen", "val": 5.3}, {"name": "Zach LaVine", "val": 5.0}, {"name": "Patrick Williams", "val": 4.6}, {"name": "Coby White", "val": 4.1}, {"name": "Troy Brown Jr.", "val": 3.4}, {"name": "Daniel Gafford", "val": 3.3}, {"name": "Denzel Valentine", "val": 3.2}, {"name": "Al-Farouq Aminu", "val": 3.2}, {"name": "Garrett Temple", "val": 2.9}, {"name": "Chandler Hutchison", "val": 2.9}, {"name": "Tomáš Satoranský", "val": 2.4}, {"name": "Ryan Arcidiacono", "val": 1.5}, {"name": "Cristiano Felício", "val": 1.4}, {"name": "Javonte Green", "val": 1.2}, {"name": "Luke Kornet", "val": 1.2}, {"name": "Devon Dotson", "val": 0.5}, {"name": "Adam Mokoka", "val": 0.4}] },
      ast: { name: "Zach LaVine", val: 4.9, all: [{"name": "Zach LaVine", "val": 4.9}, {"name": "Coby White", "val": 4.8}, {"name": "Tomáš Satoranský", "val": 4.7}, {"name": "Thaddeus Young", "val": 4.3}, {"name": "Nikola Vučević", "val": 3.9}, {"name": "Garrett Temple", "val": 2.2}, {"name": "Wendell Carter Jr.", "val": 2.2}, {"name": "Otto Porter Jr.", "val": 2.0}, {"name": "Daniel Theis", "val": 1.8}, {"name": "Denzel Valentine", "val": 1.7}, {"name": "Patrick Williams", "val": 1.4}, {"name": "Ryan Arcidiacono", "val": 1.3}, {"name": "Lauri Markkanen", "val": 0.9}, {"name": "Troy Brown Jr.", "val": 0.8}, {"name": "Chandler Hutchison", "val": 0.6}, {"name": "Devon Dotson", "val": 0.6}, {"name": "Daniel Gafford", "val": 0.5}, {"name": "Cristiano Felício", "val": 0.5}, {"name": "Javonte Green", "val": 0.4}, {"name": "Adam Mokoka", "val": 0.4}, {"name": "Al-Farouq Aminu", "val": 0.3}, {"name": "Luke Kornet", "val": 0.3}] },
      stl: { name: "Thaddeus Young", val: 1.1, all: [{"name": "Thaddeus Young", "val": 1.1}, {"name": "Nikola Vučević", "val": 0.9}, {"name": "Patrick Williams", "val": 0.9}, {"name": "Zach LaVine", "val": 0.8}, {"name": "Garrett Temple", "val": 0.8}, {"name": "Daniel Theis", "val": 0.7}, {"name": "Tomáš Satoranský", "val": 0.7}, {"name": "Coby White", "val": 0.6}, {"name": "Javonte Green", "val": 0.6}, {"name": "Wendell Carter Jr.", "val": 0.6}, {"name": "Denzel Valentine", "val": 0.5}, {"name": "Troy Brown Jr.", "val": 0.5}, {"name": "Otto Porter Jr.", "val": 0.5}, {"name": "Lauri Markkanen", "val": 0.5}, {"name": "Daniel Gafford", "val": 0.4}, {"name": "Devon Dotson", "val": 0.4}, {"name": "Al-Farouq Aminu", "val": 0.3}, {"name": "Ryan Arcidiacono", "val": 0.2}, {"name": "Luke Kornet", "val": 0.2}, {"name": "Cristiano Felício", "val": 0.2}, {"name": "Chandler Hutchison", "val": 0.1}, {"name": "Adam Mokoka", "val": 0.1}] },
      blk: { name: "Daniel Gafford", val: 1.1, all: [{"name": "Daniel Gafford", "val": 1.1}, {"name": "Nikola Vučević", "val": 0.8}, {"name": "Wendell Carter Jr.", "val": 0.8}, {"name": "Patrick Williams", "val": 0.6}, {"name": "Daniel Theis", "val": 0.6}, {"name": "Thaddeus Young", "val": 0.6}, {"name": "Zach LaVine", "val": 0.5}, {"name": "Luke Kornet", "val": 0.5}, {"name": "Garrett Temple", "val": 0.5}, {"name": "Lauri Markkanen", "val": 0.3}, {"name": "Javonte Green", "val": 0.3}, {"name": "Troy Brown Jr.", "val": 0.2}, {"name": "Otto Porter Jr.", "val": 0.2}, {"name": "Tomáš Satoranský", "val": 0.2}, {"name": "Coby White", "val": 0.2}, {"name": "Denzel Valentine", "val": 0.1}, {"name": "Adam Mokoka", "val": 0.1}, {"name": "Al-Farouq Aminu", "val": 0.0}, {"name": "Ryan Arcidiacono", "val": 0.0}, {"name": "Chandler Hutchison", "val": 0.0}, {"name": "Cristiano Felício", "val": 0.0}, {"name": "Devon Dotson", "val": 0.0}] },
    },
    avail: [
      { name: "Patrick Williams", g: 71 },
      { name: "Coby White", g: 69 },
      { name: "Thaddeus Young", g: 68 },
      { name: "Denzel Valentine", g: 62 },
      { name: "Zach LaVine", g: 58 },
      { name: "Tomáš Satoranský", g: 58 },
      { name: "Garrett Temple", g: 56 },
      { name: "Lauri Markkanen", g: 51 },
      { name: "Ryan Arcidiacono", g: 44 },
      { name: "Wendell Carter Jr.", g: 32 },
      { name: "Daniel Gafford", g: 31 },
      { name: "Nikola Vučević", g: 26 },
      { name: "Otto Porter Jr.", g: 25 },
      { name: "Daniel Theis", g: 23 },
      { name: "Cristiano Felício", g: 18 },
      { name: "Javonte Green", g: 16 },
      { name: "Adam Mokoka", g: 14 },
      { name: "Luke Kornet", g: 13 },
      { name: "Troy Brown Jr.", g: 13 },
      { name: "Devon Dotson", g: 11 },
      { name: "Chandler Hutchison", g: 7 },
      { name: "Al-Farouq Aminu", g: 6 },
    ]
  },

  "2021-22": {
    w: 46, l: 36,
    topW:   { pts: 133, opp: 87, against: "Detroit Pistons" },
    worstL: { pts: 96, opp: 138, against: "Golden State Warriors" },
    conf_rank: 6,
    games: buildGames(
      "WWWWLWWLLWWLWWLWWLLWLWWWWLLWWWWWWWWWLWLLLLWLLWWLWWLWLLWWWWWWLLLLLWWLLLWLLWLWWLLLLW",
      ["Detroit Pistons", "New Orleans Pelicans", "Detroit Pistons", "Toronto Raptors", "New York Knicks", "Utah Jazz", "Boston Celtics", "Philadelphia 76ers", "Philadelphia 76ers", "Brooklyn Nets", "Dallas Mavericks", "Golden State Warriors", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Denver Nuggets", "New York Knicks", "Indiana Pacers", "Houston Rockets", "Orlando Magic", "Miami Heat", "Charlotte Hornets", "New York Knicks", "Brooklyn Nets", "Denver Nuggets", "Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers", "Houston Rockets", "Indiana Pacers", "Atlanta Hawks", "Atlanta Hawks", "Indiana Pacers", "Washington Wizards", "Orlando Magic", "Washington Wizards", "Dallas Mavericks", "Detroit Pistons", "Brooklyn Nets", "Golden State Warriors", "Boston Celtics", "Memphis Grizzlies", "Cleveland Cavaliers", "Milwaukee Bucks", "Orlando Magic", "Oklahoma City Thunder", "Toronto Raptors", "San Antonio Spurs", "Portland Trail Blazers", "Orlando Magic", "Toronto Raptors", "Indiana Pacers", "Philadelphia 76ers", "Phoenix Suns", "Charlotte Hornets", "Minnesota Timberwolves", "Oklahoma City Thunder", "San Antonio Spurs", "Sacramento Kings", "Atlanta Hawks", "Memphis Grizzlies", "Miami Heat", "Atlanta Hawks", "Milwaukee Bucks", "Philadelphia 76ers", "Detroit Pistons", "Cleveland Cavaliers", "Sacramento Kings", "Utah Jazz", "Phoenix Suns", "Toronto Raptors", "Milwaukee Bucks", "New Orleans Pelicans", "Cleveland Cavaliers", "New York Knicks", "Washington Wizards", "Los Angeles Clippers", "Miami Heat", "Milwaukee Bucks", "Boston Celtics", "Charlotte Hornets", "Minnesota Timberwolves"],
      [94, 128, 97, 111, 103, 107, 128, 98, 105, 118, 117, 93, 100, 121, 107, 114, 109, 77, 113, 123, 104, 133, 119, 111, 109, 92, 92, 115, 133, 113, 130, 131, 108, 120, 102, 130, 99, 133, 112, 96, 112, 106, 117, 90, 95, 111, 111, 122, 130, 126, 120, 122, 108, 124, 121, 134, 106, 120, 125, 112, 110, 99, 124, 112, 106, 114, 101, 103, 110, 102, 113, 98, 109, 98, 104, 107, 135, 109, 106, 94, 117, 124],
      [6, 16, 15, 3, -1, 8, 14, -5, -9, 23, 10, -26, 10, 18, -5, 6, 6, -32, -5, 35, -3, 14, 4, 4, 12, -23, -26, 5, 15, 8, 12, 14, 2, 1, 4, 8, -14, 46, -26, -42, -2, -13, 13, -4, -19, 1, 6, -9, 14, 11, -7, 7, -11, -3, 12, 12, 5, 11, 7, 4, -6, -13, -6, -6, -15, 6, 10, -9, -15, -27, 14, -28, -17, 4, -5, 13, 5, -18, -21, -23, -16, 4]
    ),
    leaders: {
      pts: { name: "DeMar DeRozan", val: 27.9, all: [{"name": "DeMar DeRozan", "val": 27.9}, {"name": "Zach LaVine", "val": 24.4}, {"name": "Nikola Vučević", "val": 17.6}, {"name": "Lonzo Ball", "val": 13.0}, {"name": "Coby White", "val": 12.7}, {"name": "Patrick Williams", "val": 9.0}, {"name": "Ayo Dosunmu", "val": 8.8}, {"name": "Alex Caruso", "val": 7.4}, {"name": "Javonte Green", "val": 7.2}, {"name": "Tristan Thompson", "val": 5.7}, {"name": "Derrick Jones Jr.", "val": 5.6}, {"name": "Troy Brown Jr.", "val": 4.3}, {"name": "Matt Thomas", "val": 4.0}, {"name": "Alfonzo McKinnie", "val": 3.5}, {"name": "Malcolm Hill", "val": 3.4}, {"name": "Tyler Cook", "val": 3.4}, {"name": "Tony Bradley", "val": 3.0}, {"name": "Devon Dotson", "val": 2.6}, {"name": "Mac McClung", "val": 2.0}, {"name": "Marko Simonovic", "val": 1.9}, {"name": "Alize Johnson", "val": 1.8}, {"name": "Jordan Bell", "val": 0.0}] },
      reb: { name: "Nikola Vučević", val: 11.0, all: [{"name": "Nikola Vučević", "val": 11.0}, {"name": "Lonzo Ball", "val": 5.4}, {"name": "DeMar DeRozan", "val": 5.2}, {"name": "Tristan Thompson", "val": 4.7}, {"name": "Zach LaVine", "val": 4.6}, {"name": "Javonte Green", "val": 4.2}, {"name": "Patrick Williams", "val": 4.1}, {"name": "Alex Caruso", "val": 3.6}, {"name": "Tony Bradley", "val": 3.4}, {"name": "Derrick Jones Jr.", "val": 3.3}, {"name": "Troy Brown Jr.", "val": 3.1}, {"name": "Coby White", "val": 3.0}, {"name": "Ayo Dosunmu", "val": 2.8}, {"name": "Tyler Cook", "val": 2.7}, {"name": "Alize Johnson", "val": 2.3}, {"name": "Alfonzo McKinnie", "val": 1.9}, {"name": "Malcolm Hill", "val": 1.8}, {"name": "Matt Thomas", "val": 1.3}, {"name": "Marko Simonovic", "val": 1.1}, {"name": "Jordan Bell", "val": 1.0}, {"name": "Devon Dotson", "val": 0.8}, {"name": "Mac McClung", "val": 0.0}] },
      ast: { name: "Lonzo Ball", val: 5.1, all: [{"name": "Lonzo Ball", "val": 5.1}, {"name": "DeMar DeRozan", "val": 4.9}, {"name": "Zach LaVine", "val": 4.5}, {"name": "Alex Caruso", "val": 4.0}, {"name": "Ayo Dosunmu", "val": 3.3}, {"name": "Nikola Vučević", "val": 3.2}, {"name": "Coby White", "val": 2.9}, {"name": "Devon Dotson", "val": 1.4}, {"name": "Troy Brown Jr.", "val": 1.0}, {"name": "Javonte Green", "val": 0.9}, {"name": "Patrick Williams", "val": 0.9}, {"name": "Derrick Jones Jr.", "val": 0.6}, {"name": "Tristan Thompson", "val": 0.6}, {"name": "Matt Thomas", "val": 0.5}, {"name": "Tony Bradley", "val": 0.5}, {"name": "Alize Johnson", "val": 0.5}, {"name": "Malcolm Hill", "val": 0.4}, {"name": "Alfonzo McKinnie", "val": 0.3}, {"name": "Tyler Cook", "val": 0.2}, {"name": "Marko Simonovic", "val": 0.0}, {"name": "Mac McClung", "val": 0.0}, {"name": "Jordan Bell", "val": 0.0}] },
      stl: { name: "Lonzo Ball", val: 1.8, all: [{"name": "Lonzo Ball", "val": 1.8}, {"name": "Alex Caruso", "val": 1.7}, {"name": "Jordan Bell", "val": 1.0}, {"name": "Javonte Green", "val": 1.0}, {"name": "Nikola Vučević", "val": 1.0}, {"name": "DeMar DeRozan", "val": 0.9}, {"name": "Ayo Dosunmu", "val": 0.8}, {"name": "Zach LaVine", "val": 0.6}, {"name": "Patrick Williams", "val": 0.5}, {"name": "Coby White", "val": 0.5}, {"name": "Derrick Jones Jr.", "val": 0.5}, {"name": "Tristan Thompson", "val": 0.5}, {"name": "Troy Brown Jr.", "val": 0.5}, {"name": "Matt Thomas", "val": 0.2}, {"name": "Malcolm Hill", "val": 0.2}, {"name": "Tyler Cook", "val": 0.2}, {"name": "Tony Bradley", "val": 0.2}, {"name": "Alize Johnson", "val": 0.2}, {"name": "Alfonzo McKinnie", "val": 0.1}, {"name": "Devon Dotson", "val": 0.1}, {"name": "Marko Simonovic", "val": 0.1}, {"name": "Mac McClung", "val": 0.0}] },
      blk: { name: "Nikola Vučević", val: 1.0, all: [{"name": "Nikola Vučević", "val": 1.0}, {"name": "Lonzo Ball", "val": 0.9}, {"name": "Derrick Jones Jr.", "val": 0.6}, {"name": "Tony Bradley", "val": 0.6}, {"name": "Patrick Williams", "val": 0.5}, {"name": "Javonte Green", "val": 0.5}, {"name": "Alex Caruso", "val": 0.4}, {"name": "Ayo Dosunmu", "val": 0.4}, {"name": "DeMar DeRozan", "val": 0.3}, {"name": "Tristan Thompson", "val": 0.3}, {"name": "Zach LaVine", "val": 0.3}, {"name": "Tyler Cook", "val": 0.2}, {"name": "Coby White", "val": 0.2}, {"name": "Alfonzo McKinnie", "val": 0.2}, {"name": "Marko Simonovic", "val": 0.1}, {"name": "Troy Brown Jr.", "val": 0.1}, {"name": "Malcolm Hill", "val": 0.1}, {"name": "Matt Thomas", "val": 0.1}, {"name": "Devon Dotson", "val": 0.0}, {"name": "Alize Johnson", "val": 0.0}, {"name": "Mac McClung", "val": 0.0}, {"name": "Jordan Bell", "val": 0.0}] },
    },
    avail: [
      { name: "Ayo Dosunmu", g: 77 },
      { name: "DeMar DeRozan", g: 76 },
      { name: "Nikola Vučević", g: 73 },
      { name: "Zach LaVine", g: 67 },
      { name: "Troy Brown Jr.", g: 66 },
      { name: "Javonte Green", g: 65 },
      { name: "Coby White", g: 61 },
      { name: "Tony Bradley", g: 55 },
      { name: "Derrick Jones Jr.", g: 51 },
      { name: "Alex Caruso", g: 41 },
      { name: "Matt Thomas", g: 40 },
      { name: "Lonzo Ball", g: 35 },
      { name: "Tristan Thompson", g: 23 },
      { name: "Tyler Cook", g: 20 },
      { name: "Alfonzo McKinnie", g: 17 },
      { name: "Patrick Williams", g: 17 },
      { name: "Malcolm Hill", g: 16 },
      { name: "Alize Johnson", g: 16 },
      { name: "Devon Dotson", g: 11 },
      { name: "Marko Simonovic", g: 9 },
      { name: "Mac McClung", g: 1 },
      { name: "Jordan Bell", g: 1 },
    ]
  },

  "2022-23": {
    w: 40, l: 42,
    topW:   { pts: 131, opp: 87, against: "Brooklyn Nets" },
    worstL: { pts: 96, opp: 128, against: "Cleveland Cavaliers" },
    conf_rank: 10,
    games: buildGames(
      "WLLWWLLWWLLWLLLLWWLWLLLWWLLLLWWWLWWLLWWWLLLWWWLLWLWWWLLLLLLWWLWLLWWLWWWLWWLLWWLLWW",
      ["Miami Heat", "Washington Wizards", "Cleveland Cavaliers", "Boston Celtics", "Indiana Pacers", "San Antonio Spurs", "Philadelphia 76ers", "Brooklyn Nets", "Charlotte Hornets", "Boston Celtics", "Toronto Raptors", "Toronto Raptors", "New Orleans Pelicans", "Denver Nuggets", "New Orleans Pelicans", "Orlando Magic", "Boston Celtics", "Milwaukee Bucks", "Oklahoma City Thunder", "Utah Jazz", "Phoenix Suns", "Golden State Warriors", "Sacramento Kings", "Washington Wizards", "Dallas Mavericks", "Atlanta Hawks", "New York Knicks", "New York Knicks", "Minnesota Timberwolves", "Miami Heat", "Atlanta Hawks", "New York Knicks", "Houston Rockets", "Milwaukee Bucks", "Detroit Pistons", "Cleveland Cavaliers", "Cleveland Cavaliers", "Brooklyn Nets", "Philadelphia 76ers", "Utah Jazz", "Boston Celtics", "Washington Wizards", "Oklahoma City Thunder", "Golden State Warriors", "Detroit Pistons", "Atlanta Hawks", "Indiana Pacers", "Charlotte Hornets", "Orlando Magic", "Los Angeles Clippers", "Charlotte Hornets", "Portland Trail Blazers", "San Antonio Spurs", "Memphis Grizzlies", "Brooklyn Nets", "Cleveland Cavaliers", "Orlando Magic", "Indiana Pacers", "Milwaukee Bucks", "Brooklyn Nets", "Washington Wizards", "Toronto Raptors", "Detroit Pistons", "Phoenix Suns", "Indiana Pacers", "Denver Nuggets", "Houston Rockets", "Sacramento Kings", "Minnesota Timberwolves", "Miami Heat", "Philadelphia 76ers", "Philadelphia 76ers", "Portland Trail Blazers", "Los Angeles Lakers", "Los Angeles Clippers", "Los Angeles Lakers", "Charlotte Hornets", "Memphis Grizzlies", "Atlanta Hawks", "Milwaukee Bucks", "Dallas Mavericks", "Detroit Pistons"],
      [116, 100, 96, 120, 124, 124, 109, 108, 106, 119, 104, 111, 111, 103, 110, 107, 121, 118, 119, 114, 113, 111, 101, 115, 144, 122, 120, 91, 126, 113, 110, 118, 118, 119, 132, 102, 134, 121, 126, 126, 99, 97, 110, 132, 126, 111, 110, 96, 128, 103, 114, 129, 128, 89, 105, 89, 91, 113, 100, 131, 102, 98, 117, 104, 122, 117, 119, 114, 139, 113, 109, 91, 124, 118, 112, 110, 121, 128, 105, 92, 115, 103],
      [8, -2, -32, 18, 15, -5, -5, 9, 18, -4, -9, 14, -4, -23, -14, -1, 14, 5, -4, 7, -19, -8, -9, 4, 29, -1, -8, -23, -24, 10, 2, 1, -15, 6, 14, -1, -11, 9, 14, 8, -8, -3, -14, 14, 18, 11, -6, -15, 19, -5, 16, 8, 24, -15, -11, -8, -9, -4, -12, 44, 20, -6, 2, -21, -3, 21, 8, -3, 8, 14, 4, -25, 28, 10, -12, -11, 30, 21, -18, -13, 3, 22]
    ),
    leaders: {
      pts: { name: "Zach LaVine", val: 24.8, all: [{"name": "Zach LaVine", "val": 24.8}, {"name": "DeMar DeRozan", "val": 24.5}, {"name": "Nikola Vučević", "val": 17.6}, {"name": "Patrick Williams", "val": 10.2}, {"name": "Coby White", "val": 9.7}, {"name": "Ayo Dosunmu", "val": 8.6}, {"name": "Goran Dragić", "val": 6.4}, {"name": "Andre Drummond", "val": 6.0}, {"name": "Patrick Beverley", "val": 5.8}, {"name": "Alex Caruso", "val": 5.6}, {"name": "Javonte Green", "val": 5.2}, {"name": "Derrick Jones Jr.", "val": 5.0}, {"name": "Terry Taylor", "val": 4.0}, {"name": "Carlik Jones", "val": 2.9}, {"name": "Dalen Terry", "val": 2.2}, {"name": "Tony Bradley", "val": 1.6}, {"name": "Malcolm Hill", "val": 1.0}, {"name": "Marko Simonovic", "val": 0.9}] },
      reb: { name: "Nikola Vučević", val: 11.0, all: [{"name": "Nikola Vučević", "val": 11.0}, {"name": "Andre Drummond", "val": 6.6}, {"name": "Patrick Beverley", "val": 4.9}, {"name": "DeMar DeRozan", "val": 4.6}, {"name": "Zach LaVine", "val": 4.5}, {"name": "Patrick Williams", "val": 4.0}, {"name": "Alex Caruso", "val": 2.9}, {"name": "Coby White", "val": 2.9}, {"name": "Javonte Green", "val": 2.8}, {"name": "Ayo Dosunmu", "val": 2.8}, {"name": "Derrick Jones Jr.", "val": 2.4}, {"name": "Terry Taylor", "val": 1.6}, {"name": "Goran Dragić", "val": 1.4}, {"name": "Dalen Terry", "val": 1.0}, {"name": "Tony Bradley", "val": 0.9}, {"name": "Carlik Jones", "val": 0.7}, {"name": "Malcolm Hill", "val": 0.6}, {"name": "Marko Simonovic", "val": 0.3}] },
      ast: { name: "DeMar DeRozan", val: 5.1, all: [{"name": "DeMar DeRozan", "val": 5.1}, {"name": "Zach LaVine", "val": 4.2}, {"name": "Patrick Beverley", "val": 3.5}, {"name": "Nikola Vučević", "val": 3.2}, {"name": "Alex Caruso", "val": 2.9}, {"name": "Coby White", "val": 2.8}, {"name": "Goran Dragić", "val": 2.7}, {"name": "Ayo Dosunmu", "val": 2.6}, {"name": "Patrick Williams", "val": 1.2}, {"name": "Carlik Jones", "val": 0.9}, {"name": "Javonte Green", "val": 0.7}, {"name": "Dalen Terry", "val": 0.6}, {"name": "Andre Drummond", "val": 0.5}, {"name": "Derrick Jones Jr.", "val": 0.5}, {"name": "Tony Bradley", "val": 0.1}, {"name": "Terry Taylor", "val": 0.0}, {"name": "Marko Simonovic", "val": 0.0}, {"name": "Malcolm Hill", "val": 0.0}] },
      stl: { name: "Alex Caruso", val: 1.5, all: [{"name": "Alex Caruso", "val": 1.5}, {"name": "DeMar DeRozan", "val": 1.1}, {"name": "Patrick Beverley", "val": 1.0}, {"name": "Zach LaVine", "val": 0.9}, {"name": "Patrick Williams", "val": 0.9}, {"name": "Javonte Green", "val": 0.8}, {"name": "Ayo Dosunmu", "val": 0.8}, {"name": "Coby White", "val": 0.7}, {"name": "Nikola Vučević", "val": 0.7}, {"name": "Andre Drummond", "val": 0.7}, {"name": "Derrick Jones Jr.", "val": 0.5}, {"name": "Carlik Jones", "val": 0.3}, {"name": "Dalen Terry", "val": 0.3}, {"name": "Goran Dragić", "val": 0.2}, {"name": "Tony Bradley", "val": 0.1}, {"name": "Terry Taylor", "val": 0.0}, {"name": "Marko Simonovic", "val": 0.0}, {"name": "Malcolm Hill", "val": 0.0}] },
      blk: { name: "Patrick Williams", val: 0.9, all: [{"name": "Patrick Williams", "val": 0.9}, {"name": "Javonte Green", "val": 0.7}, {"name": "Alex Caruso", "val": 0.7}, {"name": "Nikola Vučević", "val": 0.7}, {"name": "Patrick Beverley", "val": 0.7}, {"name": "Derrick Jones Jr.", "val": 0.6}, {"name": "DeMar DeRozan", "val": 0.5}, {"name": "Andre Drummond", "val": 0.4}, {"name": "Ayo Dosunmu", "val": 0.3}, {"name": "Zach LaVine", "val": 0.2}, {"name": "Terry Taylor", "val": 0.2}, {"name": "Coby White", "val": 0.1}, {"name": "Goran Dragić", "val": 0.1}, {"name": "Dalen Terry", "val": 0.1}, {"name": "Tony Bradley", "val": 0.1}, {"name": "Carlik Jones", "val": 0.0}, {"name": "Marko Simonovic", "val": 0.0}, {"name": "Malcolm Hill", "val": 0.0}] },
    },
    avail: [
      { name: "Nikola Vučević", g: 82 },
      { name: "Patrick Williams", g: 82 },
      { name: "Ayo Dosunmu", g: 80 },
      { name: "Zach LaVine", g: 77 },
      { name: "DeMar DeRozan", g: 74 },
      { name: "Coby White", g: 74 },
      { name: "Andre Drummond", g: 67 },
      { name: "Alex Caruso", g: 67 },
      { name: "Derrick Jones Jr.", g: 64 },
      { name: "Goran Dragić", g: 51 },
      { name: "Dalen Terry", g: 38 },
      { name: "Javonte Green", g: 32 },
      { name: "Patrick Beverley", g: 22 },
      { name: "Tony Bradley", g: 12 },
      { name: "Carlik Jones", g: 7 },
      { name: "Marko Simonovic", g: 7 },
      { name: "Terry Taylor", g: 5 },
      { name: "Malcolm Hill", g: 5 },
    ]
  },

  "2023-24": {
    w: 39, l: 43,
    topW:   { pts: 125, opp: 96, against: "Memphis Grizzlies" },
    worstL: { pts: 92, opp: 127, against: "Dallas Mavericks" },
    conf_rank: 9,
    games: buildGames(
      "LWLWLLLWLWLLLWLLLLLWWWWLLWLWWWLWLWLLWWWLWLWWLLWLWLWWLWLLWLWLWWWLLWLWWLLLWLWLWLLWWL",
      ["Oklahoma City Thunder", "Toronto Raptors", "Detroit Pistons", "Indiana Pacers", "Dallas Mavericks", "Brooklyn Nets", "Denver Nuggets", "Utah Jazz", "Phoenix Suns", "Detroit Pistons", "Milwaukee Bucks", "Orlando Magic", "Orlando Magic", "Miami Heat", "Miami Heat", "Oklahoma City Thunder", "Toronto Raptors", "Brooklyn Nets", "Boston Celtics", "Milwaukee Bucks", "New Orleans Pelicans", "Charlotte Hornets", "San Antonio Spurs", "Milwaukee Bucks", "Denver Nuggets", "Miami Heat", "Miami Heat", "Philadelphia 76ers", "Los Angeles Lakers", "San Antonio Spurs", "Cleveland Cavaliers", "Atlanta Hawks", "Indiana Pacers", "Philadelphia 76ers", "Philadelphia 76ers", "New York Knicks", "Charlotte Hornets", "Charlotte Hornets", "Houston Rockets", "Golden State Warriors", "San Antonio Spurs", "Cleveland Cavaliers", "Toronto Raptors", "Memphis Grizzlies", "Phoenix Suns", "Los Angeles Lakers", "Portland Trail Blazers", "Toronto Raptors", "Charlotte Hornets", "Sacramento Kings", "Minnesota Timberwolves", "Memphis Grizzlies", "Orlando Magic", "Atlanta Hawks", "Cleveland Cavaliers", "Boston Celtics", "New Orleans Pelicans", "Detroit Pistons", "Cleveland Cavaliers", "Milwaukee Bucks", "Sacramento Kings", "Utah Jazz", "Golden State Warriors", "Los Angeles Clippers", "Dallas Mavericks", "Indiana Pacers", "Los Angeles Clippers", "Washington Wizards", "Portland Trail Blazers", "Houston Rockets", "Boston Celtics", "Washington Wizards", "Indiana Pacers", "Brooklyn Nets", "Minnesota Timberwolves", "Atlanta Hawks", "New York Knicks", "Orlando Magic", "New York Knicks", "Detroit Pistons", "Washington Wizards", "New York Knicks"],
      [104, 104, 102, 112, 105, 107, 101, 130, 115, 119, 109, 94, 97, 102, 100, 102, 108, 109, 97, 120, 124, 111, 121, 129, 106, 124, 116, 108, 124, 114, 95, 118, 104, 105, 97, 100, 104, 119, 124, 131, 122, 91, 116, 125, 113, 132, 104, 107, 117, 115, 129, 118, 108, 136, 105, 112, 114, 95, 132, 97, 113, 119, 125, 102, 92, 132, 111, 127, 110, 117, 113, 105, 125, 108, 109, 101, 108, 98, 117, 127, 129, 119],
      [-20, 1, -16, 7, -9, -2, -22, 17, -1, 11, -9, -2, -6, 5, -18, -14, -13, -9, -27, 7, 6, 11, 9, -4, -8, 8, -2, 4, 16, 19, -14, 5, -16, 13, -13, -16, 13, 7, 5, -9, 6, -18, 6, 29, -2, -9, 8, -11, 7, -8, 6, 8, -6, 10, -3, -17, 8, -10, 9, -16, 4, 2, 3, -10, -35, 3, -15, 29, 3, -10, -11, -2, 26, -17, 8, -12, 8, -15, -11, 22, 2, -1]
    ),
    leaders: {
      pts: { name: "DeMar DeRozan", val: 24.0, all: [{"name": "DeMar DeRozan", "val": 24.0}, {"name": "Zach LaVine", "val": 19.5}, {"name": "Coby White", "val": 19.1}, {"name": "Nikola Vučević", "val": 18.0}, {"name": "Ayo Dosunmu", "val": 12.2}, {"name": "Javonte Green", "val": 12.2}, {"name": "Alex Caruso", "val": 10.1}, {"name": "Patrick Williams", "val": 10.0}, {"name": "Andre Drummond", "val": 8.4}, {"name": "Torrey Craig", "val": 5.7}, {"name": "Jevon Carter", "val": 5.0}, {"name": "Adama Sanogo", "val": 4.0}, {"name": "Onuralp Bitim", "val": 3.5}, {"name": "Dalen Terry", "val": 3.1}, {"name": "Henri Drell", "val": 2.8}, {"name": "Julian Phillips", "val": 2.2}, {"name": "Terry Taylor", "val": 1.5}, {"name": "Andrew Funk", "val": 0.0}] },
      reb: { name: "Nikola Vučević", val: 10.5, all: [{"name": "Nikola Vučević", "val": 10.5}, {"name": "Andre Drummond", "val": 9.0}, {"name": "Javonte Green", "val": 7.4}, {"name": "Zach LaVine", "val": 5.2}, {"name": "Coby White", "val": 4.5}, {"name": "DeMar DeRozan", "val": 4.3}, {"name": "Torrey Craig", "val": 4.1}, {"name": "Adama Sanogo", "val": 4.0}, {"name": "Patrick Williams", "val": 3.9}, {"name": "Alex Caruso", "val": 3.8}, {"name": "Ayo Dosunmu", "val": 2.8}, {"name": "Dalen Terry", "val": 1.9}, {"name": "Onuralp Bitim", "val": 1.4}, {"name": "Terry Taylor", "val": 1.2}, {"name": "Henri Drell", "val": 1.0}, {"name": "Julian Phillips", "val": 0.9}, {"name": "Jevon Carter", "val": 0.8}, {"name": "Andrew Funk", "val": 0.0}] },
      ast: { name: "DeMar DeRozan", val: 5.3, all: [{"name": "DeMar DeRozan", "val": 5.3}, {"name": "Coby White", "val": 5.1}, {"name": "Zach LaVine", "val": 3.9}, {"name": "Alex Caruso", "val": 3.5}, {"name": "Nikola Vučević", "val": 3.3}, {"name": "Ayo Dosunmu", "val": 3.2}, {"name": "Patrick Williams", "val": 1.5}, {"name": "Dalen Terry", "val": 1.4}, {"name": "Jevon Carter", "val": 1.3}, {"name": "Torrey Craig", "val": 1.1}, {"name": "Henri Drell", "val": 1.0}, {"name": "Javonte Green", "val": 0.6}, {"name": "Onuralp Bitim", "val": 0.6}, {"name": "Andre Drummond", "val": 0.5}, {"name": "Julian Phillips", "val": 0.3}, {"name": "Terry Taylor", "val": 0.3}, {"name": "Adama Sanogo", "val": 0.0}, {"name": "Andrew Funk", "val": 0.0}] },
      stl: { name: "Alex Caruso", val: 1.7, all: [{"name": "Alex Caruso", "val": 1.7}, {"name": "DeMar DeRozan", "val": 1.1}, {"name": "Javonte Green", "val": 1.1}, {"name": "Patrick Williams", "val": 0.9}, {"name": "Andre Drummond", "val": 0.9}, {"name": "Ayo Dosunmu", "val": 0.9}, {"name": "Zach LaVine", "val": 0.8}, {"name": "Nikola Vučević", "val": 0.7}, {"name": "Coby White", "val": 0.7}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Jevon Carter", "val": 0.5}, {"name": "Dalen Terry", "val": 0.5}, {"name": "Henri Drell", "val": 0.5}, {"name": "Julian Phillips", "val": 0.2}, {"name": "Terry Taylor", "val": 0.2}, {"name": "Andrew Funk", "val": 0.2}, {"name": "Onuralp Bitim", "val": 0.1}, {"name": "Adama Sanogo", "val": 0.1}] },
      blk: { name: "Alex Caruso", val: 1.0, all: [{"name": "Alex Caruso", "val": 1.0}, {"name": "Javonte Green", "val": 0.9}, {"name": "Nikola Vučević", "val": 0.8}, {"name": "Patrick Williams", "val": 0.8}, {"name": "DeMar DeRozan", "val": 0.6}, {"name": "Andre Drummond", "val": 0.6}, {"name": "Ayo Dosunmu", "val": 0.5}, {"name": "Torrey Craig", "val": 0.4}, {"name": "Zach LaVine", "val": 0.3}, {"name": "Dalen Terry", "val": 0.3}, {"name": "Henri Drell", "val": 0.3}, {"name": "Coby White", "val": 0.2}, {"name": "Jevon Carter", "val": 0.2}, {"name": "Julian Phillips", "val": 0.2}, {"name": "Andrew Funk", "val": 0.2}, {"name": "Onuralp Bitim", "val": 0.1}, {"name": "Terry Taylor", "val": 0.1}, {"name": "Adama Sanogo", "val": 0.0}] },
    },
    avail: [
      { name: "DeMar DeRozan", g: 79 },
      { name: "Coby White", g: 79 },
      { name: "Andre Drummond", g: 79 },
      { name: "Nikola Vučević", g: 76 },
      { name: "Ayo Dosunmu", g: 76 },
      { name: "Jevon Carter", g: 72 },
      { name: "Alex Caruso", g: 71 },
      { name: "Dalen Terry", g: 59 },
      { name: "Torrey Craig", g: 53 },
      { name: "Patrick Williams", g: 43 },
      { name: "Julian Phillips", g: 40 },
      { name: "Terry Taylor", g: 31 },
      { name: "Zach LaVine", g: 25 },
      { name: "Onuralp Bitim", g: 23 },
      { name: "Javonte Green", g: 9 },
      { name: "Adama Sanogo", g: 9 },
      { name: "Andrew Funk", g: 5 },
      { name: "Henri Drell", g: 4 },
    ]
  },

  "2024-25": {
    w: 39, l: 43,
    topW:   { pts: 138, opp: 105, against: "Washington Wizards" },
    worstL: { pts: 92, opp: 132, against: "Detroit Pistons" },
    conf_rank: 9,
    games: buildGames(
      "LWLWWLLLLWLWLLWLWLWLLWWLLWWWLLLWWLWWLWLLLLLWLLWLWLWLLLLLLWLWLLWWWWLWLWWWWLLWWWLWWW",
      ["New Orleans Pelicans", "Milwaukee Bucks", "Oklahoma City Thunder", "Memphis Grizzlies", "Orlando Magic", "Brooklyn Nets", "Utah Jazz", "Dallas Mavericks", "Minnesota Timberwolves", "Atlanta Hawks", "Cleveland Cavaliers", "New York Knicks", "Cleveland Cavaliers", "Houston Rockets", "Detroit Pistons", "Milwaukee Bucks", "Atlanta Hawks", "Memphis Grizzlies", "Washington Wizards", "Orlando Magic", "Boston Celtics", "Brooklyn Nets", "San Antonio Spurs", "Indiana Pacers", "Philadelphia 76ers", "Charlotte Hornets", "Toronto Raptors", "Boston Celtics", "Boston Celtics", "Milwaukee Bucks", "Atlanta Hawks", "Milwaukee Bucks", "Charlotte Hornets", "Washington Wizards", "New York Knicks", "San Antonio Spurs", "Indiana Pacers", "Washington Wizards", "Sacramento Kings", "New Orleans Pelicans", "Atlanta Hawks", "Charlotte Hornets", "Portland Trail Blazers", "Los Angeles Clippers", "Golden State Warriors", "Philadelphia 76ers", "Denver Nuggets", "Boston Celtics", "Toronto Raptors", "Detroit Pistons", "Miami Heat", "Minnesota Timberwolves", "Golden State Warriors", "Detroit Pistons", "Detroit Pistons", "New York Knicks", "Phoenix Suns", "Philadelphia 76ers", "Los Angeles Clippers", "Toronto Raptors", "Indiana Pacers", "Cleveland Cavaliers", "Orlando Magic", "Miami Heat", "Indiana Pacers", "Brooklyn Nets", "Houston Rockets", "Utah Jazz", "Phoenix Suns", "Sacramento Kings", "Los Angeles Lakers", "Denver Nuggets", "Los Angeles Lakers", "Dallas Mavericks", "Oklahoma City Thunder", "Toronto Raptors", "Portland Trail Blazers", "Charlotte Hornets", "Cleveland Cavaliers", "Miami Heat", "Washington Wizards", "Philadelphia 76ers"],
      [111, 133, 95, 126, 102, 112, 126, 99, 119, 125, 113, 124, 126, 107, 122, 106, 136, 131, 127, 119, 129, 128, 139, 123, 100, 109, 122, 117, 98, 91, 133, 116, 115, 107, 139, 114, 113, 138, 119, 113, 94, 123, 102, 112, 106, 97, 129, 100, 122, 119, 133, 108, 111, 92, 110, 111, 117, 142, 117, 125, 112, 117, 125, 114, 121, 116, 114, 111, 121, 128, 146, 129, 119, 119, 117, 137, 118, 131, 113, 119, 119, 122],
      [-12, 11, -19, 3, 3, -8, -9, -20, -16, 12, -6, 1, -18, -36, 10, -16, 14, -11, 19, -14, -9, 26, 15, -9, -8, 14, 1, 9, -25, -21, -8, 5, 7, -18, 13, 4, -16, 33, -5, -6, -16, -2, -11, 13, -25, -12, 8, -22, 16, -8, 9, -19, -21, -40, -18, -2, -4, 32, -5, 10, -15, -22, 2, 5, 18, 6, -3, 14, -6, 12, 31, 10, 2, -1, -28, 19, 5, 14, -22, 8, 30, 20]
    ),
    leaders: {
      pts: { name: "Zach LaVine", val: 24.0, all: [{"name": "Zach LaVine", "val": 24.0}, {"name": "Coby White", "val": 20.4}, {"name": "Nikola Vučević", "val": 18.5}, {"name": "Josh Giddey", "val": 14.6}, {"name": "Kevin Huerter", "val": 13.2}, {"name": "Ayo Dosunmu", "val": 12.3}, {"name": "Tre Jones", "val": 11.5}, {"name": "Patrick Williams", "val": 9.0}, {"name": "Matas Buzelis", "val": 8.6}, {"name": "Zach Collins", "val": 8.6}, {"name": "Jalen Smith", "val": 8.2}, {"name": "Lonzo Ball", "val": 7.6}, {"name": "Torrey Craig", "val": 6.9}, {"name": "Talen Horton-Tucker", "val": 6.5}, {"name": "Julian Phillips", "val": 4.6}, {"name": "Dalen Terry", "val": 4.5}, {"name": "Jevon Carter", "val": 4.3}, {"name": "Chris Duarte", "val": 2.1}, {"name": "Adama Sanogo", "val": 2.0}, {"name": "Jahmir Young", "val": 1.8}, {"name": "E.J. Liddell", "val": 1.8}, {"name": "Emanuel Miller", "val": 1.7}] },
      reb: { name: "Nikola Vučević", val: 10.1, all: [{"name": "Nikola Vučević", "val": 10.1}, {"name": "Josh Giddey", "val": 8.1}, {"name": "Zach Collins", "val": 6.7}, {"name": "Jalen Smith", "val": 5.6}, {"name": "Zach LaVine", "val": 4.8}, {"name": "Patrick Williams", "val": 3.8}, {"name": "Coby White", "val": 3.7}, {"name": "Ayo Dosunmu", "val": 3.5}, {"name": "Matas Buzelis", "val": 3.5}, {"name": "Lonzo Ball", "val": 3.4}, {"name": "Kevin Huerter", "val": 3.3}, {"name": "Tre Jones", "val": 3.2}, {"name": "Torrey Craig", "val": 2.8}, {"name": "Julian Phillips", "val": 2.1}, {"name": "Talen Horton-Tucker", "val": 1.7}, {"name": "Dalen Terry", "val": 1.7}, {"name": "Adama Sanogo", "val": 1.5}, {"name": "Emanuel Miller", "val": 1.3}, {"name": "Chris Duarte", "val": 1.2}, {"name": "Jevon Carter", "val": 1.1}, {"name": "E.J. Liddell", "val": 0.8}, {"name": "Jahmir Young", "val": 0.5}] },
      ast: { name: "Josh Giddey", val: 7.2, all: [{"name": "Josh Giddey", "val": 7.2}, {"name": "Tre Jones", "val": 4.9}, {"name": "Zach LaVine", "val": 4.5}, {"name": "Ayo Dosunmu", "val": 4.5}, {"name": "Coby White", "val": 4.5}, {"name": "Nikola Vučević", "val": 3.5}, {"name": "Lonzo Ball", "val": 3.3}, {"name": "Kevin Huerter", "val": 3.2}, {"name": "Zach Collins", "val": 2.1}, {"name": "Patrick Williams", "val": 2.0}, {"name": "Talen Horton-Tucker", "val": 1.4}, {"name": "Dalen Terry", "val": 1.3}, {"name": "Jevon Carter", "val": 1.1}, {"name": "Jahmir Young", "val": 1.0}, {"name": "Jalen Smith", "val": 1.0}, {"name": "Matas Buzelis", "val": 1.0}, {"name": "Torrey Craig", "val": 0.6}, {"name": "Julian Phillips", "val": 0.5}, {"name": "Chris Duarte", "val": 0.5}, {"name": "Adama Sanogo", "val": 0.3}, {"name": "E.J. Liddell", "val": 0.3}, {"name": "Emanuel Miller", "val": 0.3}] },
      stl: { name: "Lonzo Ball", val: 1.3, all: [{"name": "Lonzo Ball", "val": 1.3}, {"name": "Josh Giddey", "val": 1.2}, {"name": "Kevin Huerter", "val": 1.2}, {"name": "Tre Jones", "val": 1.1}, {"name": "Zach LaVine", "val": 0.9}, {"name": "Ayo Dosunmu", "val": 0.9}, {"name": "Coby White", "val": 0.9}, {"name": "Nikola Vučević", "val": 0.8}, {"name": "Patrick Williams", "val": 0.8}, {"name": "Dalen Terry", "val": 0.6}, {"name": "Zach Collins", "val": 0.5}, {"name": "Julian Phillips", "val": 0.5}, {"name": "Talen Horton-Tucker", "val": 0.4}, {"name": "Matas Buzelis", "val": 0.4}, {"name": "Jevon Carter", "val": 0.4}, {"name": "Jalen Smith", "val": 0.3}, {"name": "Torrey Craig", "val": 0.2}, {"name": "Emanuel Miller", "val": 0.2}, {"name": "E.J. Liddell", "val": 0.1}, {"name": "Adama Sanogo", "val": 0.0}, {"name": "Jahmir Young", "val": 0.0}, {"name": "Chris Duarte", "val": 0.0}] },
      blk: { name: "Matas Buzelis", val: 0.9, all: [{"name": "Matas Buzelis", "val": 0.9}, {"name": "Jalen Smith", "val": 0.7}, {"name": "Nikola Vučević", "val": 0.7}, {"name": "Josh Giddey", "val": 0.6}, {"name": "Patrick Williams", "val": 0.5}, {"name": "Lonzo Ball", "val": 0.5}, {"name": "Zach Collins", "val": 0.5}, {"name": "Ayo Dosunmu", "val": 0.4}, {"name": "Kevin Huerter", "val": 0.3}, {"name": "Tre Jones", "val": 0.3}, {"name": "Julian Phillips", "val": 0.3}, {"name": "Dalen Terry", "val": 0.2}, {"name": "Talen Horton-Tucker", "val": 0.2}, {"name": "Zach LaVine", "val": 0.2}, {"name": "Coby White", "val": 0.2}, {"name": "Torrey Craig", "val": 0.1}, {"name": "Jevon Carter", "val": 0.1}, {"name": "E.J. Liddell", "val": 0.1}, {"name": "Adama Sanogo", "val": 0.0}, {"name": "Jahmir Young", "val": 0.0}, {"name": "Chris Duarte", "val": 0.0}, {"name": "Emanuel Miller", "val": 0.0}] },
    },
    avail: [
      { name: "Matas Buzelis", g: 80 },
      { name: "Julian Phillips", g: 79 },
      { name: "Coby White", g: 74 },
      { name: "Nikola Vučević", g: 73 },
      { name: "Dalen Terry", g: 73 },
      { name: "Josh Giddey", g: 70 },
      { name: "Jalen Smith", g: 64 },
      { name: "Patrick Williams", g: 63 },
      { name: "Talen Horton-Tucker", g: 58 },
      { name: "Ayo Dosunmu", g: 46 },
      { name: "Zach LaVine", g: 42 },
      { name: "Jevon Carter", g: 36 },
      { name: "Lonzo Ball", g: 35 },
      { name: "Zach Collins", g: 28 },
      { name: "Kevin Huerter", g: 26 },
      { name: "Tre Jones", g: 18 },
      { name: "Chris Duarte", g: 17 },
      { name: "E.J. Liddell", g: 12 },
      { name: "Torrey Craig", g: 9 },
      { name: "Jahmir Young", g: 6 },
      { name: "Emanuel Miller", g: 6 },
      { name: "Adama Sanogo", g: 4 },
    ]
  },

  "2025-26": {
    w: 31, l: 51,
    topW:   { pts: 129, opp: 98, against: "Washington Wizards" },
    worstL: { pts: 91, opp: 134, against: "Miami Heat" },
    conf_rank: 12,
    games: buildGames(
      "WWWWWLWLLLLLWWLWLLLLLLLWLWWWWWLLWWLLLWLWLWWWWLLLWLLLLLLLLLLLWLWLWLLWLLWLLLLLLLWWLL",
      ["Detroit Pistons", "Orlando Magic", "Atlanta Hawks", "Sacramento Kings", "New York Knicks", "New York Knicks", "Philadelphia 76ers", "Milwaukee Bucks", "Cleveland Cavaliers", "San Antonio Spurs", "Detroit Pistons", "Utah Jazz", "Denver Nuggets", "Portland Trail Blazers", "Miami Heat", "Washington Wizards", "New Orleans Pelicans", "Charlotte Hornets", "Indiana Pacers", "Orlando Magic", "Brooklyn Nets", "Indiana Pacers", "Golden State Warriors", "Charlotte Hornets", "New Orleans Pelicans", "Cleveland Cavaliers", "Cleveland Cavaliers", "Atlanta Hawks", "Atlanta Hawks", "Philadelphia 76ers", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "Orlando Magic", "Charlotte Hornets", "Boston Celtics", "Detroit Pistons", "Dallas Mavericks", "Houston Rockets", "Utah Jazz", "Brooklyn Nets", "Brooklyn Nets", "Los Angeles Clippers", "Minnesota Timberwolves", "Boston Celtics", "Los Angeles Lakers", "Indiana Pacers", "Miami Heat", "Miami Heat", "Miami Heat", "Milwaukee Bucks", "Toronto Raptors", "Denver Nuggets", "Brooklyn Nets", "Boston Celtics", "Toronto Raptors", "Detroit Pistons", "New York Knicks", "Charlotte Hornets", "Portland Trail Blazers", "Milwaukee Bucks", "Oklahoma City Thunder", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Los Angeles Lakers", "Los Angeles Clippers", "Memphis Grizzlies", "Toronto Raptors", "Cleveland Cavaliers", "Houston Rockets", "Philadelphia 76ers", "Oklahoma City Thunder", "Memphis Grizzlies", "San Antonio Spurs", "Indiana Pacers", "New York Knicks", "Phoenix Suns", "Washington Wizards", "Washington Wizards", "Orlando Magic", "Dallas Mavericks"],
      [115, 110, 128, 126, 135, 116, 113, 110, 122, 117, 113, 147, 130, 122, 107, 121, 130, 116, 101, 120, 103, 105, 91, 129, 104, 127, 136, 152, 126, 109, 103, 101, 134, 121, 99, 101, 93, 125, 113, 128, 109, 124, 138, 120, 114, 118, 110, 113, 125, 91, 115, 107, 120, 115, 105, 101, 110, 99, 99, 112, 120, 108, 105, 110, 130, 130, 108, 132, 109, 110, 132, 137, 113, 124, 114, 126, 96, 110, 129, 119, 103, 128],
      [4, 12, 5, 13, 10, -12, 2, -16, -6, -4, -11, -3, 3, 1, -36, 1, -13, -7, -2, -5, -10, -15, -32, 3, -10, 16, 11, 2, 3, 7, -9, -35, 16, 7, -13, -14, -15, 18, -6, 2, -3, 22, 28, 5, 3, -11, -3, -3, 7, -43, -16, -16, -16, -8, -19, -9, -16, -6, -32, -9, 23, -8, 2, -16, 6, -12, -11, 25, -30, -5, 8, -20, -18, -1, -15, -19, -40, -10, 31, 11, -24, -21]
    ),
    leaders: {
      pts: { name: "Coby White", val: 18.6, all: [{"name": "Coby White", "val": 18.6}, {"name": "Collin Sexton", "val": 17.5}, {"name": "Josh Giddey", "val": 17.0}, {"name": "Nikola Vučević", "val": 16.9}, {"name": "Matas Buzelis", "val": 16.3}, {"name": "Anfernee Simons", "val": 15.2}, {"name": "Ayo Dosunmu", "val": 15.0}, {"name": "Tre Jones", "val": 14.1}, {"name": "Leonard Miller", "val": 11.7}, {"name": "Jaden Ivey", "val": 11.5}, {"name": "Kevin Huerter", "val": 10.9}, {"name": "Jalen Smith", "val": 10.2}, {"name": "Guerschon Yabusele", "val": 10.0}, {"name": "Zach Collins", "val": 9.7}, {"name": "Rob Dillingham", "val": 9.6}, {"name": "Nick Richards", "val": 9.4}, {"name": "Isaac Okoro", "val": 9.3}, {"name": "Mouhamadou Gueye", "val": 8.0}, {"name": "Patrick Williams", "val": 7.0}, {"name": "Mac McClung", "val": 6.0}, {"name": "Jevon Carter", "val": 5.4}, {"name": "Dalen Terry", "val": 3.5}, {"name": "Yuki Kawamura", "val": 3.4}, {"name": "Emanuel Miller", "val": 3.0}, {"name": "Julian Phillips", "val": 2.8}, {"name": "Lachlan Olbrich", "val": 2.4}, {"name": "Trentyn Flowers", "val": 2.0}, {"name": "Noa Essengue", "val": 0.0}] },
      reb: { name: "Nikola Vučević", val: 9.0, all: [{"name": "Nikola Vučević", "val": 9.0}, {"name": "Josh Giddey", "val": 8.3}, {"name": "Nick Richards", "val": 7.6}, {"name": "Jalen Smith", "val": 6.7}, {"name": "Matas Buzelis", "val": 5.8}, {"name": "Leonard Miller", "val": 5.8}, {"name": "Guerschon Yabusele", "val": 5.7}, {"name": "Zach Collins", "val": 5.6}, {"name": "Jaden Ivey", "val": 4.8}, {"name": "Kevin Huerter", "val": 3.8}, {"name": "Coby White", "val": 3.7}, {"name": "Tre Jones", "val": 3.1}, {"name": "Lachlan Olbrich", "val": 3.0}, {"name": "Patrick Williams", "val": 3.0}, {"name": "Rob Dillingham", "val": 3.0}, {"name": "Mouhamadou Gueye", "val": 3.0}, {"name": "Ayo Dosunmu", "val": 3.0}, {"name": "Collin Sexton", "val": 2.9}, {"name": "Anfernee Simons", "val": 2.8}, {"name": "Isaac Okoro", "val": 2.7}, {"name": "Dalen Terry", "val": 1.9}, {"name": "Yuki Kawamura", "val": 1.8}, {"name": "Julian Phillips", "val": 1.3}, {"name": "Jevon Carter", "val": 1.1}, {"name": "Mac McClung", "val": 0.8}, {"name": "Emanuel Miller", "val": 0.6}, {"name": "Trentyn Flowers", "val": 0.5}, {"name": "Noa Essengue", "val": 0.0}] },
      ast: { name: "Josh Giddey", val: 9.1, all: [{"name": "Josh Giddey", "val": 9.1}, {"name": "Tre Jones", "val": 5.4}, {"name": "Coby White", "val": 4.7}, {"name": "Jaden Ivey", "val": 4.0}, {"name": "Nikola Vučević", "val": 3.8}, {"name": "Ayo Dosunmu", "val": 3.6}, {"name": "Anfernee Simons", "val": 3.0}, {"name": "Mouhamadou Gueye", "val": 3.0}, {"name": "Rob Dillingham", "val": 2.8}, {"name": "Kevin Huerter", "val": 2.6}, {"name": "Yuki Kawamura", "val": 2.6}, {"name": "Collin Sexton", "val": 2.5}, {"name": "Matas Buzelis", "val": 2.1}, {"name": "Guerschon Yabusele", "val": 1.7}, {"name": "Isaac Okoro", "val": 1.6}, {"name": "Zach Collins", "val": 1.5}, {"name": "Patrick Williams", "val": 1.5}, {"name": "Dalen Terry", "val": 1.3}, {"name": "Leonard Miller", "val": 1.3}, {"name": "Jalen Smith", "val": 1.2}, {"name": "Mac McClung", "val": 1.1}, {"name": "Lachlan Olbrich", "val": 1.1}, {"name": "Emanuel Miller", "val": 0.8}, {"name": "Jevon Carter", "val": 0.8}, {"name": "Trentyn Flowers", "val": 0.5}, {"name": "Nick Richards", "val": 0.4}, {"name": "Julian Phillips", "val": 0.2}, {"name": "Noa Essengue", "val": 0.0}] },
      stl: { name: "Jaden Ivey", val: 2.0, all: [{"name": "Jaden Ivey", "val": 2.0}, {"name": "Collin Sexton", "val": 1.5}, {"name": "Tre Jones", "val": 1.2}, {"name": "Mouhamadou Gueye", "val": 1.0}, {"name": "Josh Giddey", "val": 1.0}, {"name": "Rob Dillingham", "val": 0.9}, {"name": "Ayo Dosunmu", "val": 0.8}, {"name": "Mac McClung", "val": 0.8}, {"name": "Guerschon Yabusele", "val": 0.8}, {"name": "Kevin Huerter", "val": 0.8}, {"name": "Coby White", "val": 0.7}, {"name": "Isaac Okoro", "val": 0.7}, {"name": "Matas Buzelis", "val": 0.7}, {"name": "Nikola Vučević", "val": 0.7}, {"name": "Patrick Williams", "val": 0.7}, {"name": "Jevon Carter", "val": 0.6}, {"name": "Dalen Terry", "val": 0.6}, {"name": "Julian Phillips", "val": 0.5}, {"name": "Yuki Kawamura", "val": 0.5}, {"name": "Noa Essengue", "val": 0.5}, {"name": "Jalen Smith", "val": 0.5}, {"name": "Leonard Miller", "val": 0.5}, {"name": "Emanuel Miller", "val": 0.4}, {"name": "Lachlan Olbrich", "val": 0.3}, {"name": "Nick Richards", "val": 0.3}, {"name": "Zach Collins", "val": 0.2}, {"name": "Anfernee Simons", "val": 0.0}, {"name": "Trentyn Flowers", "val": 0.0}] },
      blk: { name: "Matas Buzelis", val: 1.5, all: [{"name": "Matas Buzelis", "val": 1.5}, {"name": "Nick Richards", "val": 0.9}, {"name": "Jalen Smith", "val": 0.8}, {"name": "Kevin Huerter", "val": 0.6}, {"name": "Nikola Vučević", "val": 0.6}, {"name": "Leonard Miller", "val": 0.6}, {"name": "Mouhamadou Gueye", "val": 0.5}, {"name": "Josh Giddey", "val": 0.5}, {"name": "Isaac Okoro", "val": 0.5}, {"name": "Jaden Ivey", "val": 0.5}, {"name": "Zach Collins", "val": 0.4}, {"name": "Patrick Williams", "val": 0.4}, {"name": "Guerschon Yabusele", "val": 0.4}, {"name": "Dalen Terry", "val": 0.3}, {"name": "Mac McClung", "val": 0.3}, {"name": "Ayo Dosunmu", "val": 0.3}, {"name": "Anfernee Simons", "val": 0.3}, {"name": "Tre Jones", "val": 0.2}, {"name": "Julian Phillips", "val": 0.2}, {"name": "Lachlan Olbrich", "val": 0.2}, {"name": "Coby White", "val": 0.1}, {"name": "Rob Dillingham", "val": 0.1}, {"name": "Collin Sexton", "val": 0.1}, {"name": "Jevon Carter", "val": 0.1}, {"name": "Yuki Kawamura", "val": 0.0}, {"name": "Emanuel Miller", "val": 0.0}, {"name": "Trentyn Flowers", "val": 0.0}, {"name": "Noa Essengue", "val": 0.0}] },
    },
    avail: [
      { name: "Matas Buzelis", g: 77 },
      { name: "Patrick Williams", g: 72 },
      { name: "Tre Jones", g: 65 },
      { name: "Isaac Okoro", g: 63 },
      { name: "Josh Giddey", g: 54 },
      { name: "Jalen Smith", g: 53 },
      { name: "Nikola Vučević", g: 48 },
      { name: "Ayo Dosunmu", g: 45 },
      { name: "Kevin Huerter", g: 44 },
      { name: "Lachlan Olbrich", g: 37 },
      { name: "Julian Phillips", g: 35 },
      { name: "Dalen Terry", g: 34 },
      { name: "Rob Dillingham", g: 30 },
      { name: "Coby White", g: 29 },
      { name: "Leonard Miller", g: 27 },
      { name: "Guerschon Yabusele", g: 26 },
      { name: "Collin Sexton", g: 26 },
      { name: "Jevon Carter", g: 23 },
      { name: "Nick Richards", g: 20 },
      { name: "Yuki Kawamura", g: 18 },
      { name: "Zach Collins", g: 10 },
      { name: "Mac McClung", g: 8 },
      { name: "Anfernee Simons", g: 6 },
      { name: "Emanuel Miller", g: 5 },
      { name: "Jaden Ivey", g: 4 },
      { name: "Mouhamadou Gueye", g: 2 },
      { name: "Trentyn Flowers", g: 2 },
      { name: "Noa Essengue", g: 2 },
    ]
  },

};
