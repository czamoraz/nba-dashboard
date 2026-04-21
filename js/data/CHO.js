/* ================================================================
   CHO.js — Charlotte Hornets · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Charlotte Hornets",
  abbr:          "CHO",
  conference:    "East",
  primaryColor:  "#1D1160",
  secondaryColor:"#00788C",
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
    w: 33, l: 39,
    topW:   { pts: 135, opp: 102, against: "Minnesota Timberwolves" },
    worstL: { pts: 86, opp: 116, against: "Boston Celtics" },
    conf_rank: 10,
    games: buildGames(
      "LLWWLLLWWWWLLLLWLLWWWLLWWLWLWLWLWLWWWWLLLWWWLWLWLWWLLLLWLLWWLLWLWLWLLLLL",
      ["Cleveland Cavaliers", "Oklahoma City Thunder", "Brooklyn Nets", "Dallas Mavericks", "Memphis Grizzlies", "Philadelphia 76ers", "Philadelphia 76ers", "Atlanta Hawks", "New Orleans Pelicans", "Atlanta Hawks", "New York Knicks", "Dallas Mavericks", "Toronto Raptors", "Toronto Raptors", "Chicago Bulls", "Orlando Magic", "Orlando Magic", "Indiana Pacers", "Indiana Pacers", "Milwaukee Bucks", "Miami Heat", "Philadelphia 76ers", "Utah Jazz", "Washington Wizards", "Houston Rockets", "Memphis Grizzlies", "Minnesota Timberwolves", "San Antonio Spurs", "Golden State Warriors", "Utah Jazz", "Phoenix Suns", "Golden State Warriors", "Sacramento Kings", "Portland Trail Blazers", "Minnesota Timberwolves", "Detroit Pistons", "Toronto Raptors", "Sacramento Kings", "Denver Nuggets", "Los Angeles Lakers", "Los Angeles Clippers", "San Antonio Spurs", "Houston Rockets", "Miami Heat", "Phoenix Suns", "Washington Wizards", "Brooklyn Nets", "Indiana Pacers", "Boston Celtics", "Oklahoma City Thunder", "Milwaukee Bucks", "Atlanta Hawks", "Los Angeles Lakers", "Cleveland Cavaliers", "Brooklyn Nets", "Portland Trail Blazers", "New York Knicks", "Chicago Bulls", "Cleveland Cavaliers", "Boston Celtics", "Milwaukee Bucks", "Boston Celtics", "Detroit Pistons", "Miami Heat", "Detroit Pistons", "Chicago Bulls", "Orlando Magic", "New Orleans Pelicans", "Denver Nuggets", "Los Angeles Clippers", "New York Knicks", "Washington Wizards"],
      [114, 107, 106, 118, 93, 112, 101, 102, 118, 113, 109, 93, 108, 113, 110, 107, 108, 106, 108, 126, 129, 111, 121, 119, 119, 114, 120, 110, 102, 110, 124, 121, 127, 111, 135, 105, 114, 122, 104, 105, 98, 100, 122, 110, 97, 114, 89, 114, 86, 113, 127, 101, 93, 90, 115, 109, 97, 91, 108, 125, 104, 111, 107, 111, 102, 99, 122, 110, 112, 90, 109, 110],
      [-7, -2, 2, 19, -15, -15, -17, 8, 8, 8, 21, -11, -3, -3, -13, 3, -9, -10, 3, 12, 8, -7, -17, 22, 25, -16, 6, -12, 2, -22, 3, -9, 1, -12, 33, 3, 10, 6, -25, -11, -27, 3, 25, 5, -4, 10, -22, 17, -30, 11, 8, -4, -8, -13, -15, 8, -12, -17, 6, 21, -10, -9, 13, -10, 3, -21, 10, -2, -5, -23, -9, -5]
    ),
    leaders: {
      pts: { name: "Terry Rozier", val: 20.4, all: [{"name": "Terry Rozier", "val": 20.4}, {"name": "Gordon Hayward", "val": 19.6}, {"name": "LaMelo Ball", "val": 15.7}, {"name": "Devonte' Graham", "val": 14.8}, {"name": "P.J. Washington", "val": 12.9}, {"name": "Miles Bridges", "val": 12.7}, {"name": "Malik Monk", "val": 11.7}, {"name": "Cody Zeller", "val": 9.4}, {"name": "Jalen McDaniels", "val": 7.4}, {"name": "Brad Wanamaker", "val": 6.9}, {"name": "Caleb Martin", "val": 5.0}, {"name": "Bismack Biyombo", "val": 5.0}, {"name": "Cody Martin", "val": 4.0}, {"name": "Grant Riller", "val": 2.6}, {"name": "Vernon Carey Jr.", "val": 2.4}, {"name": "Nate Darling", "val": 1.3}, {"name": "Nick Richards", "val": 0.8}] },
      reb: { name: "Cody Zeller", val: 6.8, all: [{"name": "Cody Zeller", "val": 6.8}, {"name": "P.J. Washington", "val": 6.5}, {"name": "Miles Bridges", "val": 6.0}, {"name": "Gordon Hayward", "val": 5.9}, {"name": "LaMelo Ball", "val": 5.9}, {"name": "Bismack Biyombo", "val": 5.3}, {"name": "Terry Rozier", "val": 4.4}, {"name": "Jalen McDaniels", "val": 3.6}, {"name": "Cody Martin", "val": 3.1}, {"name": "Devonte' Graham", "val": 2.7}, {"name": "Caleb Martin", "val": 2.7}, {"name": "Malik Monk", "val": 2.4}, {"name": "Brad Wanamaker", "val": 1.8}, {"name": "Vernon Carey Jr.", "val": 1.4}, {"name": "Nick Richards", "val": 0.6}, {"name": "Grant Riller", "val": 0.1}, {"name": "Nate Darling", "val": 0.1}] },
      ast: { name: "LaMelo Ball", val: 6.1, all: [{"name": "LaMelo Ball", "val": 6.1}, {"name": "Devonte' Graham", "val": 5.4}, {"name": "Terry Rozier", "val": 4.2}, {"name": "Gordon Hayward", "val": 4.1}, {"name": "Brad Wanamaker", "val": 3.4}, {"name": "P.J. Washington", "val": 2.5}, {"name": "Miles Bridges", "val": 2.2}, {"name": "Malik Monk", "val": 2.1}, {"name": "Cody Zeller", "val": 1.8}, {"name": "Cody Martin", "val": 1.7}, {"name": "Caleb Martin", "val": 1.3}, {"name": "Bismack Biyombo", "val": 1.2}, {"name": "Jalen McDaniels", "val": 1.1}, {"name": "Grant Riller", "val": 0.4}, {"name": "Vernon Carey Jr.", "val": 0.1}, {"name": "Nate Darling", "val": 0.1}, {"name": "Nick Richards", "val": 0.1}] },
      stl: { name: "LaMelo Ball", val: 1.6, all: [{"name": "LaMelo Ball", "val": 1.6}, {"name": "Terry Rozier", "val": 1.3}, {"name": "Gordon Hayward", "val": 1.2}, {"name": "P.J. Washington", "val": 1.1}, {"name": "Devonte' Graham", "val": 0.9}, {"name": "Brad Wanamaker", "val": 0.8}, {"name": "Caleb Martin", "val": 0.7}, {"name": "Miles Bridges", "val": 0.7}, {"name": "Cody Martin", "val": 0.7}, {"name": "Cody Zeller", "val": 0.6}, {"name": "Jalen McDaniels", "val": 0.6}, {"name": "Malik Monk", "val": 0.5}, {"name": "Bismack Biyombo", "val": 0.3}, {"name": "Vernon Carey Jr.", "val": 0.1}, {"name": "Grant Riller", "val": 0.1}, {"name": "Nate Darling", "val": 0.0}, {"name": "Nick Richards", "val": 0.0}] },
      blk: { name: "P.J. Washington", val: 1.2, all: [{"name": "P.J. Washington", "val": 1.2}, {"name": "Bismack Biyombo", "val": 1.1}, {"name": "Miles Bridges", "val": 0.8}, {"name": "Cody Zeller", "val": 0.4}, {"name": "Jalen McDaniels", "val": 0.4}, {"name": "Terry Rozier", "val": 0.4}, {"name": "LaMelo Ball", "val": 0.4}, {"name": "Gordon Hayward", "val": 0.3}, {"name": "Vernon Carey Jr.", "val": 0.3}, {"name": "Brad Wanamaker", "val": 0.2}, {"name": "Cody Martin", "val": 0.2}, {"name": "Caleb Martin", "val": 0.2}, {"name": "Malik Monk", "val": 0.1}, {"name": "Devonte' Graham", "val": 0.1}, {"name": "Nate Darling", "val": 0.1}, {"name": "Grant Riller", "val": 0.0}, {"name": "Nick Richards", "val": 0.0}] },
    },
    avail: [
      { name: "Terry Rozier", g: 69 },
      { name: "Miles Bridges", g: 66 },
      { name: "Bismack Biyombo", g: 66 },
      { name: "P.J. Washington", g: 64 },
      { name: "Devonte' Graham", g: 55 },
      { name: "Caleb Martin", g: 53 },
      { name: "Cody Martin", g: 52 },
      { name: "LaMelo Ball", g: 51 },
      { name: "Cody Zeller", g: 48 },
      { name: "Jalen McDaniels", g: 47 },
      { name: "Gordon Hayward", g: 44 },
      { name: "Malik Monk", g: 42 },
      { name: "Brad Wanamaker", g: 22 },
      { name: "Vernon Carey Jr.", g: 19 },
      { name: "Nick Richards", g: 18 },
      { name: "Grant Riller", g: 7 },
      { name: "Nate Darling", g: 7 },
    ]
  },

  "2021-22": {
    w: 43, l: 39,
    topW:   { pts: 158, opp: 126, against: "Indiana Pacers" },
    worstL: { pts: 99, opp: 133, against: "Phoenix Suns" },
    conf_rank: 10,
    games: buildGames(
      "WWWLWLWLLLLLWWWWWLWWWLLLWLLWLWLLLWWWLLWWWWLWWWLLWWLLLLLLWLLLWLLWWLLWWWWWLWWLWLLWWW",
      ["Indiana Pacers", "Cleveland Cavaliers", "Brooklyn Nets", "Boston Celtics", "Orlando Magic", "Miami Heat", "Portland Trail Blazers", "Cleveland Cavaliers", "Golden State Warriors", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "New York Knicks", "Golden State Warriors", "Washington Wizards", "Indiana Pacers", "Atlanta Hawks", "Washington Wizards", "Orlando Magic", "Minnesota Timberwolves", "Houston Rockets", "Chicago Bulls", "Milwaukee Bucks", "Atlanta Hawks", "Philadelphia 76ers", "Philadelphia 76ers", "Sacramento Kings", "Dallas Mavericks", "San Antonio Spurs", "Portland Trail Blazers", "Phoenix Suns", "Utah Jazz", "Denver Nuggets", "Houston Rockets", "Indiana Pacers", "Phoenix Suns", "Washington Wizards", "Detroit Pistons", "Milwaukee Bucks", "Milwaukee Bucks", "Philadelphia 76ers", "Orlando Magic", "New York Knicks", "Boston Celtics", "Oklahoma City Thunder", "Atlanta Hawks", "Toronto Raptors", "Indiana Pacers", "Los Angeles Lakers", "Los Angeles Clippers", "Boston Celtics", "Cleveland Cavaliers", "Miami Heat", "Toronto Raptors", "Chicago Bulls", "Detroit Pistons", "Memphis Grizzlies", "Minnesota Timberwolves", "Miami Heat", "Toronto Raptors", "Detroit Pistons", "Milwaukee Bucks", "Cleveland Cavaliers", "San Antonio Spurs", "Brooklyn Nets", "Boston Celtics", "New Orleans Pelicans", "Oklahoma City Thunder", "Atlanta Hawks", "Dallas Mavericks", "New Orleans Pelicans", "New York Knicks", "Utah Jazz", "Brooklyn Nets", "Denver Nuggets", "New York Knicks", "Philadelphia 76ers", "Miami Heat", "Orlando Magic", "Chicago Bulls", "Washington Wizards"],
      [123, 123, 111, 129, 120, 99, 125, 110, 92, 110, 106, 123, 118, 104, 106, 97, 121, 105, 109, 106, 133, 143, 119, 125, 130, 124, 106, 124, 96, 131, 116, 106, 102, 115, 123, 116, 99, 121, 140, 114, 103, 109, 109, 97, 111, 121, 91, 113, 158, 117, 90, 107, 101, 86, 101, 109, 141, 118, 120, 107, 125, 126, 106, 119, 123, 121, 101, 142, 134, 116, 129, 106, 106, 107, 119, 109, 125, 114, 115, 128, 133, 124],
      [1, 11, 16, -11, 9, -15, 12, -3, -22, -30, -14, -3, 10, 8, 4, 10, 3, -10, 6, 7, 18, -3, -14, -2, 3, -3, -4, 1, -24, 16, -9, -31, -10, 8, 24, 8, -34, -3, 29, 8, 4, 11, -7, 10, 9, 23, -22, -12, 32, 3, -25, -6, -1, -18, -15, -12, 22, -7, -6, -4, 32, -1, -24, 21, 6, -11, -14, 22, 18, 10, 21, 3, -15, 6, 9, -4, 11, -30, -29, 27, 16, 16]
    ),
    leaders: {
      pts: { name: "Miles Bridges", val: 20.2, all: [{"name": "Miles Bridges", "val": 20.2}, {"name": "LaMelo Ball", "val": 20.1}, {"name": "Terry Rozier", "val": 19.3}, {"name": "Gordon Hayward", "val": 15.9}, {"name": "Kelly Oubre Jr.", "val": 15.0}, {"name": "Montrezl Harrell", "val": 11.4}, {"name": "P.J. Washington", "val": 10.3}, {"name": "Isaiah Thomas", "val": 8.3}, {"name": "Cody Martin", "val": 7.7}, {"name": "Mason Plumlee", "val": 6.5}, {"name": "Jalen McDaniels", "val": 6.2}, {"name": "James Bouknight", "val": 4.6}, {"name": "Ish Smith", "val": 4.5}, {"name": "Nick Richards", "val": 3.0}, {"name": "JT Thor", "val": 2.0}, {"name": "Vernon Carey Jr.", "val": 2.0}, {"name": "Kai Jones", "val": 1.0}, {"name": "Scottie Lewis", "val": 0.5}, {"name": "Arnoldas Kulboka", "val": 0.0}] },
      reb: { name: "Mason Plumlee", val: 7.7, all: [{"name": "Mason Plumlee", "val": 7.7}, {"name": "Miles Bridges", "val": 7.0}, {"name": "LaMelo Ball", "val": 6.7}, {"name": "P.J. Washington", "val": 5.2}, {"name": "Montrezl Harrell", "val": 4.9}, {"name": "Gordon Hayward", "val": 4.6}, {"name": "Terry Rozier", "val": 4.3}, {"name": "Cody Martin", "val": 4.0}, {"name": "Kelly Oubre Jr.", "val": 4.0}, {"name": "Jalen McDaniels", "val": 3.1}, {"name": "James Bouknight", "val": 1.7}, {"name": "Nick Richards", "val": 1.7}, {"name": "Ish Smith", "val": 1.5}, {"name": "JT Thor", "val": 1.3}, {"name": "Vernon Carey Jr.", "val": 1.3}, {"name": "Isaiah Thomas", "val": 1.2}, {"name": "Kai Jones", "val": 0.5}, {"name": "Scottie Lewis", "val": 0.0}, {"name": "Arnoldas Kulboka", "val": 0.0}] },
      ast: { name: "LaMelo Ball", val: 7.6, all: [{"name": "LaMelo Ball", "val": 7.6}, {"name": "Terry Rozier", "val": 4.5}, {"name": "Miles Bridges", "val": 3.8}, {"name": "Gordon Hayward", "val": 3.6}, {"name": "Mason Plumlee", "val": 3.1}, {"name": "Ish Smith", "val": 2.6}, {"name": "Cody Martin", "val": 2.5}, {"name": "P.J. Washington", "val": 2.3}, {"name": "Montrezl Harrell", "val": 2.0}, {"name": "Isaiah Thomas", "val": 1.4}, {"name": "Jalen McDaniels", "val": 1.1}, {"name": "Kelly Oubre Jr.", "val": 1.1}, {"name": "James Bouknight", "val": 0.8}, {"name": "JT Thor", "val": 0.6}, {"name": "Scottie Lewis", "val": 0.5}, {"name": "Nick Richards", "val": 0.3}, {"name": "Kai Jones", "val": 0.2}, {"name": "Vernon Carey Jr.", "val": 0.0}, {"name": "Arnoldas Kulboka", "val": 0.0}] },
      stl: { name: "LaMelo Ball", val: 1.6, all: [{"name": "LaMelo Ball", "val": 1.6}, {"name": "Terry Rozier", "val": 1.3}, {"name": "Cody Martin", "val": 1.2}, {"name": "Gordon Hayward", "val": 1.0}, {"name": "Kelly Oubre Jr.", "val": 1.0}, {"name": "Miles Bridges", "val": 0.9}, {"name": "P.J. Washington", "val": 0.9}, {"name": "Mason Plumlee", "val": 0.8}, {"name": "Ish Smith", "val": 0.5}, {"name": "Scottie Lewis", "val": 0.5}, {"name": "Jalen McDaniels", "val": 0.5}, {"name": "Isaiah Thomas", "val": 0.4}, {"name": "Montrezl Harrell", "val": 0.4}, {"name": "Vernon Carey Jr.", "val": 0.3}, {"name": "James Bouknight", "val": 0.2}, {"name": "JT Thor", "val": 0.2}, {"name": "Nick Richards", "val": 0.2}, {"name": "Kai Jones", "val": 0.0}, {"name": "Arnoldas Kulboka", "val": 0.0}] },
      blk: { name: "P.J. Washington", val: 0.9, all: [{"name": "P.J. Washington", "val": 0.9}, {"name": "Miles Bridges", "val": 0.8}, {"name": "Mason Plumlee", "val": 0.7}, {"name": "Montrezl Harrell", "val": 0.5}, {"name": "Cody Martin", "val": 0.5}, {"name": "Nick Richards", "val": 0.4}, {"name": "Jalen McDaniels", "val": 0.4}, {"name": "Kelly Oubre Jr.", "val": 0.4}, {"name": "Gordon Hayward", "val": 0.4}, {"name": "LaMelo Ball", "val": 0.4}, {"name": "Terry Rozier", "val": 0.3}, {"name": "Ish Smith", "val": 0.3}, {"name": "JT Thor", "val": 0.3}, {"name": "Isaiah Thomas", "val": 0.2}, {"name": "Kai Jones", "val": 0.1}, {"name": "James Bouknight", "val": 0.0}, {"name": "Vernon Carey Jr.", "val": 0.0}, {"name": "Scottie Lewis", "val": 0.0}, {"name": "Arnoldas Kulboka", "val": 0.0}] },
    },
    avail: [
      { name: "Miles Bridges", g: 80 },
      { name: "Kelly Oubre Jr.", g: 76 },
      { name: "LaMelo Ball", g: 75 },
      { name: "Mason Plumlee", g: 73 },
      { name: "Terry Rozier", g: 73 },
      { name: "Cody Martin", g: 71 },
      { name: "P.J. Washington", g: 65 },
      { name: "Jalen McDaniels", g: 55 },
      { name: "Nick Richards", g: 50 },
      { name: "Gordon Hayward", g: 49 },
      { name: "Ish Smith", g: 37 },
      { name: "JT Thor", g: 33 },
      { name: "James Bouknight", g: 31 },
      { name: "Montrezl Harrell", g: 25 },
      { name: "Kai Jones", g: 21 },
      { name: "Isaiah Thomas", g: 17 },
      { name: "Vernon Carey Jr.", g: 4 },
      { name: "Scottie Lewis", g: 2 },
      { name: "Arnoldas Kulboka", g: 2 },
    ]
  },

  "2022-23": {
    w: 27, l: 55,
    topW:   { pts: 138, opp: 109, against: "Milwaukee Bucks" },
    worstL: { pts: 82, opp: 121, against: "Philadelphia 76ers" },
    conf_rank: 14,
    games: buildGames(
      "WLWLLWLLLLLLLLWLLLWWLWLLLLLLLLWLWLLWLLLWLLLLLWWLLWWLLLLLLLWWWWWLLLWWLLLLWLWWWLLLLW",
      ["San Antonio Spurs", "New Orleans Pelicans", "Atlanta Hawks", "New York Knicks", "Orlando Magic", "Golden State Warriors", "Sacramento Kings", "Chicago Bulls", "Memphis Grizzlies", "Brooklyn Nets", "Washington Wizards", "Portland Trail Blazers", "Miami Heat", "Miami Heat", "Orlando Magic", "Indiana Pacers", "Cleveland Cavaliers", "Washington Wizards", "Philadelphia 76ers", "Minnesota Timberwolves", "Boston Celtics", "Washington Wizards", "Milwaukee Bucks", "Los Angeles Clippers", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Detroit Pistons", "Atlanta Hawks", "Denver Nuggets", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Golden State Warriors", "Oklahoma City Thunder", "Brooklyn Nets", "Los Angeles Lakers", "Memphis Grizzlies", "Milwaukee Bucks", "Indiana Pacers", "Toronto Raptors", "Toronto Raptors", "Boston Celtics", "Boston Celtics", "Houston Rockets", "Atlanta Hawks", "Utah Jazz", "Phoenix Suns", "Chicago Bulls", "Miami Heat", "Milwaukee Bucks", "Chicago Bulls", "Detroit Pistons", "Orlando Magic", "Washington Wizards", "Boston Celtics", "Denver Nuggets", "Atlanta Hawks", "San Antonio Spurs", "Minnesota Timberwolves", "Miami Heat", "Detroit Pistons", "Phoenix Suns", "Orlando Magic", "Brooklyn Nets", "New York Knicks", "Detroit Pistons", "Utah Jazz", "Cleveland Cavaliers", "Cleveland Cavaliers", "Philadelphia 76ers", "Indiana Pacers", "New Orleans Pelicans", "Dallas Mavericks", "Dallas Mavericks", "Oklahoma City Thunder", "Chicago Bulls", "Toronto Raptors", "Toronto Raptors", "Houston Rockets", "Cleveland Cavaliers"],
      [129, 112, 126, 131, 93, 120, 108, 88, 99, 94, 100, 95, 112, 115, 112, 113, 122, 102, 107, 110, 105, 117, 96, 117, 116, 102, 113, 134, 106, 115, 125, 105, 134, 113, 105, 121, 106, 115, 107, 138, 111, 120, 114, 106, 118, 122, 122, 102, 97, 111, 122, 115, 98, 112, 113, 104, 116, 105, 144, 120, 121, 108, 117, 91, 106, 86, 112, 113, 111, 108, 104, 82, 115, 96, 117, 110, 137, 91, 108, 100, 109, 106],
      [27, -12, 17, -3, -20, 7, -7, -18, -31, -4, -8, -10, -5, -17, 7, -12, -10, -4, 6, 2, -35, 1, -9, -2, -6, -19, -18, -7, -19, -4, 6, -21, 4, -11, -5, 8, -17, -6, -24, 29, -5, -12, -10, -16, -12, 5, 4, -18, -31, 15, 5, -9, -16, -6, -6, -14, -11, -14, 6, 10, 8, 5, 11, -14, -11, -16, 7, 10, -8, -6, -16, -39, 6, -19, 8, 6, 3, -30, -20, -20, -3, 11]
    ),
    leaders: {
      pts: { name: "LaMelo Ball", val: 23.3, all: [{"name": "LaMelo Ball", "val": 23.3}, {"name": "Terry Rozier", "val": 21.1}, {"name": "Kelly Oubre Jr.", "val": 20.3}, {"name": "P.J. Washington", "val": 15.7}, {"name": "Gordon Hayward", "val": 14.7}, {"name": "Mason Plumlee", "val": 12.2}, {"name": "Jalen McDaniels", "val": 10.6}, {"name": "Svi Mykhailiuk", "val": 10.6}, {"name": "Mark Williams", "val": 9.0}, {"name": "Dennis Smith Jr.", "val": 8.8}, {"name": "Nick Richards", "val": 8.2}, {"name": "Théo Maledon", "val": 6.7}, {"name": "James Bouknight", "val": 5.6}, {"name": "Bryce McGowens", "val": 5.3}, {"name": "Cody Martin", "val": 5.0}, {"name": "Xavier Sneed", "val": 4.3}, {"name": "JT Thor", "val": 3.8}, {"name": "Kai Jones", "val": 3.4}, {"name": "Kobi Simmons", "val": 1.0}] },
      reb: { name: "Mason Plumlee", val: 9.7, all: [{"name": "Mason Plumlee", "val": 9.7}, {"name": "Mark Williams", "val": 7.1}, {"name": "Nick Richards", "val": 6.4}, {"name": "LaMelo Ball", "val": 6.4}, {"name": "Kelly Oubre Jr.", "val": 5.2}, {"name": "P.J. Washington", "val": 4.9}, {"name": "Jalen McDaniels", "val": 4.8}, {"name": "Gordon Hayward", "val": 4.3}, {"name": "Terry Rozier", "val": 4.1}, {"name": "Cody Martin", "val": 3.4}, {"name": "Dennis Smith Jr.", "val": 3.1}, {"name": "Théo Maledon", "val": 2.8}, {"name": "Kai Jones", "val": 2.7}, {"name": "Svi Mykhailiuk", "val": 2.4}, {"name": "JT Thor", "val": 2.2}, {"name": "James Bouknight", "val": 2.1}, {"name": "Bryce McGowens", "val": 2.0}, {"name": "Xavier Sneed", "val": 1.3}, {"name": "Kobi Simmons", "val": 0.8}] },
      ast: { name: "LaMelo Ball", val: 8.4, all: [{"name": "LaMelo Ball", "val": 8.4}, {"name": "Terry Rozier", "val": 5.1}, {"name": "Dennis Smith Jr.", "val": 4.8}, {"name": "Gordon Hayward", "val": 4.1}, {"name": "Mason Plumlee", "val": 3.7}, {"name": "Théo Maledon", "val": 3.5}, {"name": "Svi Mykhailiuk", "val": 2.7}, {"name": "P.J. Washington", "val": 2.4}, {"name": "Jalen McDaniels", "val": 2.0}, {"name": "Cody Martin", "val": 1.6}, {"name": "Xavier Sneed", "val": 1.3}, {"name": "Bryce McGowens", "val": 1.2}, {"name": "James Bouknight", "val": 1.2}, {"name": "Kelly Oubre Jr.", "val": 1.1}, {"name": "Kobi Simmons", "val": 1.0}, {"name": "Nick Richards", "val": 0.6}, {"name": "JT Thor", "val": 0.5}, {"name": "Mark Williams", "val": 0.4}, {"name": "Kai Jones", "val": 0.3}] },
      stl: { name: "Kelly Oubre Jr.", val: 1.4, all: [{"name": "Kelly Oubre Jr.", "val": 1.4}, {"name": "Dennis Smith Jr.", "val": 1.4}, {"name": "LaMelo Ball", "val": 1.3}, {"name": "Terry Rozier", "val": 1.2}, {"name": "Jalen McDaniels", "val": 1.2}, {"name": "P.J. Washington", "val": 0.9}, {"name": "Théo Maledon", "val": 0.8}, {"name": "Gordon Hayward", "val": 0.8}, {"name": "Svi Mykhailiuk", "val": 0.7}, {"name": "Mark Williams", "val": 0.7}, {"name": "Mason Plumlee", "val": 0.6}, {"name": "Cody Martin", "val": 0.6}, {"name": "James Bouknight", "val": 0.4}, {"name": "Kai Jones", "val": 0.4}, {"name": "Bryce McGowens", "val": 0.3}, {"name": "JT Thor", "val": 0.3}, {"name": "Nick Richards", "val": 0.2}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "Kobi Simmons", "val": 0.0}] },
      blk: { name: "Nick Richards", val: 1.1, all: [{"name": "Nick Richards", "val": 1.1}, {"name": "P.J. Washington", "val": 1.1}, {"name": "Mark Williams", "val": 1.0}, {"name": "Kai Jones", "val": 0.7}, {"name": "Mason Plumlee", "val": 0.6}, {"name": "Jalen McDaniels", "val": 0.5}, {"name": "Dennis Smith Jr.", "val": 0.5}, {"name": "Kobi Simmons", "val": 0.4}, {"name": "Kelly Oubre Jr.", "val": 0.4}, {"name": "Xavier Sneed", "val": 0.3}, {"name": "JT Thor", "val": 0.3}, {"name": "Terry Rozier", "val": 0.3}, {"name": "LaMelo Ball", "val": 0.3}, {"name": "Théo Maledon", "val": 0.3}, {"name": "Svi Mykhailiuk", "val": 0.2}, {"name": "Gordon Hayward", "val": 0.2}, {"name": "Cody Martin", "val": 0.1}, {"name": "Bryce McGowens", "val": 0.1}, {"name": "James Bouknight", "val": 0.1}] },
    },
    avail: [
      { name: "P.J. Washington", g: 73 },
      { name: "JT Thor", g: 69 },
      { name: "Nick Richards", g: 65 },
      { name: "Terry Rozier", g: 63 },
      { name: "Mason Plumlee", g: 56 },
      { name: "Jalen McDaniels", g: 56 },
      { name: "Dennis Smith Jr.", g: 54 },
      { name: "Gordon Hayward", g: 50 },
      { name: "Kelly Oubre Jr.", g: 48 },
      { name: "Kai Jones", g: 46 },
      { name: "Bryce McGowens", g: 46 },
      { name: "Théo Maledon", g: 44 },
      { name: "Mark Williams", g: 43 },
      { name: "LaMelo Ball", g: 36 },
      { name: "James Bouknight", g: 34 },
      { name: "Svi Mykhailiuk", g: 19 },
      { name: "Cody Martin", g: 7 },
      { name: "Kobi Simmons", g: 5 },
      { name: "Xavier Sneed", g: 4 },
    ]
  },

  "2023-24": {
    w: 21, l: 61,
    topW:   { pts: 122, opp: 99, against: "Atlanta Hawks" },
    worstL: { pts: 82, opp: 135, against: "Philadelphia 76ers" },
    conf_rank: 13,
    games: buildGames(
      "WLLLWLLWLLLLWWLLWLLWLLLLLLLLLLLWLLLLLLWLWLLLLLLLLLLWWWWLWLLLLLLWLWLLLLLWLLLLWLLWLW",
      ["Atlanta Hawks", "Detroit Pistons", "Brooklyn Nets", "Houston Rockets", "Indiana Pacers", "Dallas Mavericks", "Washington Wizards", "Washington Wizards", "New York Knicks", "Miami Heat", "Milwaukee Bucks", "New York Knicks", "Boston Celtics", "Washington Wizards", "Orlando Magic", "New York Knicks", "Brooklyn Nets", "Minnesota Timberwolves", "Chicago Bulls", "Toronto Raptors", "Miami Heat", "Miami Heat", "New Orleans Pelicans", "Philadelphia 76ers", "Toronto Raptors", "Indiana Pacers", "Denver Nuggets", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Denver Nuggets", "Sacramento Kings", "Chicago Bulls", "Chicago Bulls", "Sacramento Kings", "San Antonio Spurs", "Miami Heat", "New Orleans Pelicans", "San Antonio Spurs", "Philadelphia 76ers", "Minnesota Timberwolves", "Detroit Pistons", "Houston Rockets", "Utah Jazz", "New York Knicks", "Chicago Bulls", "Oklahoma City Thunder", "Indiana Pacers", "Los Angeles Lakers", "Toronto Raptors", "Milwaukee Bucks", "Memphis Grizzlies", "Indiana Pacers", "Atlanta Hawks", "Utah Jazz", "Golden State Warriors", "Portland Trail Blazers", "Milwaukee Bucks", "Milwaukee Bucks", "Philadelphia 76ers", "Toronto Raptors", "Orlando Magic", "Washington Wizards", "Brooklyn Nets", "Detroit Pistons", "Memphis Grizzlies", "Phoenix Suns", "Philadelphia 76ers", "Orlando Magic", "Atlanta Hawks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Golden State Warriors", "Los Angeles Clippers", "Boston Celtics", "Portland Trail Blazers", "Orlando Magic", "Oklahoma City Thunder", "Dallas Mavericks", "Atlanta Hawks", "Boston Celtics", "Cleveland Cavaliers"],
      [116, 99, 121, 119, 125, 118, 116, 124, 107, 105, 99, 108, 121, 117, 117, 91, 129, 117, 100, 119, 114, 104, 107, 82, 99, 113, 95, 104, 112, 119, 93, 111, 91, 112, 98, 99, 87, 112, 124, 89, 128, 106, 104, 122, 92, 110, 106, 99, 118, 117, 84, 115, 111, 122, 115, 84, 93, 85, 99, 114, 106, 89, 100, 110, 97, 110, 96, 98, 92, 91, 92, 118, 97, 118, 104, 86, 124, 118, 104, 115, 98, 120],
      [6, -12, -12, -9, 1, -6, -16, 7, -22, -6, -31, -14, 3, 3, -13, -24, 1, -6, -11, 3, -2, -11, -5, -53, -15, -31, -7, -9, -21, -14, -18, 7, -13, -7, -25, -36, -17, -20, 4, -8, 3, -7, -34, -12, -21, -7, -20, -16, -6, -6, -36, 9, 9, 23, 8, -13, 13, -38, -12, -7, -5, -12, -12, 11, -17, 12, -11, -11, -20, -41, -23, 7, -18, -12, -14, -3, 9, -3, -26, 1, -33, 10]
    ),
    leaders: {
      pts: { name: "LaMelo Ball", val: 23.9, all: [{"name": "LaMelo Ball", "val": 23.9}, {"name": "Terry Rozier", "val": 23.2}, {"name": "Miles Bridges", "val": 21.0}, {"name": "Brandon Miller", "val": 17.3}, {"name": "Gordon Hayward", "val": 14.5}, {"name": "Grant Williams", "val": 13.9}, {"name": "P.J. Washington", "val": 13.6}, {"name": "Mark Williams", "val": 12.7}, {"name": "Tre Mann", "val": 11.9}, {"name": "Vasilije Micić", "val": 10.8}, {"name": "Nick Richards", "val": 9.7}, {"name": "Seth Curry", "val": 9.0}, {"name": "Dāvis Bertāns", "val": 8.8}, {"name": "Cody Martin", "val": 7.5}, {"name": "Aleksej Pokusevski", "val": 7.4}, {"name": "Nick Smith Jr.", "val": 5.9}, {"name": "Bryce McGowens", "val": 5.1}, {"name": "Théo Maledon", "val": 4.2}, {"name": "Marques Bolden", "val": 4.1}, {"name": "James Bouknight", "val": 3.6}, {"name": "Ish Smith", "val": 3.2}, {"name": "JT Thor", "val": 3.2}, {"name": "Leaky Black", "val": 2.7}, {"name": "Amari Bailey", "val": 2.3}, {"name": "Nathan Mensah", "val": 1.3}, {"name": "Frank Ntilikina", "val": 1.0}] },
      reb: { name: "Mark Williams", val: 9.7, all: [{"name": "Mark Williams", "val": 9.7}, {"name": "Nick Richards", "val": 8.0}, {"name": "Miles Bridges", "val": 7.3}, {"name": "P.J. Washington", "val": 5.3}, {"name": "LaMelo Ball", "val": 5.1}, {"name": "Grant Williams", "val": 5.1}, {"name": "Gordon Hayward", "val": 4.7}, {"name": "Tre Mann", "val": 4.5}, {"name": "Aleksej Pokusevski", "val": 4.4}, {"name": "Brandon Miller", "val": 4.3}, {"name": "Cody Martin", "val": 3.9}, {"name": "Terry Rozier", "val": 3.9}, {"name": "Marques Bolden", "val": 3.6}, {"name": "Nathan Mensah", "val": 2.6}, {"name": "JT Thor", "val": 2.3}, {"name": "Vasilije Micić", "val": 2.1}, {"name": "Seth Curry", "val": 2.0}, {"name": "Théo Maledon", "val": 1.8}, {"name": "Ish Smith", "val": 1.8}, {"name": "Dāvis Bertāns", "val": 1.8}, {"name": "Leaky Black", "val": 1.8}, {"name": "Bryce McGowens", "val": 1.7}, {"name": "Nick Smith Jr.", "val": 1.4}, {"name": "Frank Ntilikina", "val": 1.2}, {"name": "Amari Bailey", "val": 0.9}, {"name": "James Bouknight", "val": 0.6}] },
      ast: { name: "LaMelo Ball", val: 8.0, all: [{"name": "LaMelo Ball", "val": 8.0}, {"name": "Terry Rozier", "val": 6.6}, {"name": "Vasilije Micić", "val": 6.2}, {"name": "Tre Mann", "val": 5.2}, {"name": "Gordon Hayward", "val": 4.6}, {"name": "Cody Martin", "val": 3.7}, {"name": "Ish Smith", "val": 3.4}, {"name": "Miles Bridges", "val": 3.3}, {"name": "Grant Williams", "val": 3.2}, {"name": "Brandon Miller", "val": 2.4}, {"name": "P.J. Washington", "val": 2.2}, {"name": "Théo Maledon", "val": 2.2}, {"name": "Seth Curry", "val": 1.8}, {"name": "Aleksej Pokusevski", "val": 1.7}, {"name": "Mark Williams", "val": 1.2}, {"name": "Nick Smith Jr.", "val": 1.2}, {"name": "Dāvis Bertāns", "val": 0.9}, {"name": "Bryce McGowens", "val": 0.9}, {"name": "Leaky Black", "val": 0.9}, {"name": "Nick Richards", "val": 0.8}, {"name": "Frank Ntilikina", "val": 0.8}, {"name": "Amari Bailey", "val": 0.7}, {"name": "JT Thor", "val": 0.5}, {"name": "Marques Bolden", "val": 0.4}, {"name": "Nathan Mensah", "val": 0.4}, {"name": "James Bouknight", "val": 0.4}] },
      stl: { name: "LaMelo Ball", val: 1.8, all: [{"name": "LaMelo Ball", "val": 1.8}, {"name": "Tre Mann", "val": 1.7}, {"name": "Terry Rozier", "val": 1.1}, {"name": "Gordon Hayward", "val": 1.1}, {"name": "Cody Martin", "val": 1.1}, {"name": "Miles Bridges", "val": 0.9}, {"name": "Brandon Miller", "val": 0.9}, {"name": "P.J. Washington", "val": 0.9}, {"name": "Mark Williams", "val": 0.8}, {"name": "Aleksej Pokusevski", "val": 0.8}, {"name": "Dāvis Bertāns", "val": 0.8}, {"name": "Grant Williams", "val": 0.7}, {"name": "Vasilije Micić", "val": 0.7}, {"name": "Seth Curry", "val": 0.6}, {"name": "Théo Maledon", "val": 0.5}, {"name": "Nick Richards", "val": 0.4}, {"name": "Ish Smith", "val": 0.4}, {"name": "Bryce McGowens", "val": 0.4}, {"name": "Marques Bolden", "val": 0.3}, {"name": "Leaky Black", "val": 0.3}, {"name": "Amari Bailey", "val": 0.3}, {"name": "Nick Smith Jr.", "val": 0.2}, {"name": "JT Thor", "val": 0.2}, {"name": "Nathan Mensah", "val": 0.2}, {"name": "James Bouknight", "val": 0.1}, {"name": "Frank Ntilikina", "val": 0.0}] },
      blk: { name: "Mark Williams", val: 1.1, all: [{"name": "Mark Williams", "val": 1.1}, {"name": "Nick Richards", "val": 1.1}, {"name": "Marques Bolden", "val": 0.8}, {"name": "P.J. Washington", "val": 0.7}, {"name": "Aleksej Pokusevski", "val": 0.7}, {"name": "Brandon Miller", "val": 0.6}, {"name": "Nathan Mensah", "val": 0.6}, {"name": "Cody Martin", "val": 0.6}, {"name": "Miles Bridges", "val": 0.5}, {"name": "Gordon Hayward", "val": 0.5}, {"name": "Terry Rozier", "val": 0.4}, {"name": "Leaky Black", "val": 0.4}, {"name": "JT Thor", "val": 0.4}, {"name": "Seth Curry", "val": 0.4}, {"name": "Grant Williams", "val": 0.4}, {"name": "Dāvis Bertāns", "val": 0.3}, {"name": "Bryce McGowens", "val": 0.2}, {"name": "LaMelo Ball", "val": 0.2}, {"name": "Ish Smith", "val": 0.1}, {"name": "Nick Smith Jr.", "val": 0.1}, {"name": "Vasilije Micić", "val": 0.1}, {"name": "Tre Mann", "val": 0.1}, {"name": "James Bouknight", "val": 0.1}, {"name": "Théo Maledon", "val": 0.0}, {"name": "Frank Ntilikina", "val": 0.0}, {"name": "Amari Bailey", "val": 0.0}] },
    },
    avail: [
      { name: "Brandon Miller", g: 74 },
      { name: "Miles Bridges", g: 69 },
      { name: "Nick Richards", g: 67 },
      { name: "JT Thor", g: 63 },
      { name: "Bryce McGowens", g: 59 },
      { name: "Nick Smith Jr.", g: 51 },
      { name: "P.J. Washington", g: 44 },
      { name: "Ish Smith", g: 43 },
      { name: "Vasilije Micić", g: 30 },
      { name: "Terry Rozier", g: 30 },
      { name: "Grant Williams", g: 29 },
      { name: "Tre Mann", g: 28 },
      { name: "Cody Martin", g: 28 },
      { name: "Dāvis Bertāns", g: 28 },
      { name: "Leaky Black", g: 26 },
      { name: "Nathan Mensah", g: 25 },
      { name: "Gordon Hayward", g: 25 },
      { name: "LaMelo Ball", g: 22 },
      { name: "Mark Williams", g: 19 },
      { name: "Aleksej Pokusevski", g: 18 },
      { name: "James Bouknight", g: 14 },
      { name: "Théo Maledon", g: 13 },
      { name: "Amari Bailey", g: 10 },
      { name: "Marques Bolden", g: 9 },
      { name: "Seth Curry", g: 8 },
      { name: "Frank Ntilikina", g: 5 },
    ]
  },

  "2024-25": {
    w: 19, l: 63,
    topW:   { pts: 123, opp: 92, against: "New Orleans Pelicans" },
    worstL: { pts: 88, opp: 141, against: "Portland Trail Blazers" },
    conf_rank: 14,
    games: buildGames(
      "WLLWLLLWWLLWLLWLLLLLLLLWLLLLLLLLLLWLWWWLLWLLLLLLWLLLWLLLLLLLLLWWLWLLWLLLLLWLLLLLLL",
      ["Houston Rockets", "Atlanta Hawks", "Miami Heat", "Toronto Raptors", "Boston Celtics", "Boston Celtics", "Minnesota Timberwolves", "Detroit Pistons", "Indiana Pacers", "Philadelphia 76ers", "Orlando Magic", "Milwaukee Bucks", "Cleveland Cavaliers", "Brooklyn Nets", "Detroit Pistons", "Milwaukee Bucks", "Orlando Magic", "Miami Heat", "New York Knicks", "Atlanta Hawks", "Philadelphia 76ers", "New York Knicks", "Cleveland Cavaliers", "Indiana Pacers", "Chicago Bulls", "Philadelphia 76ers", "Washington Wizards", "Philadelphia 76ers", "Houston Rockets", "Washington Wizards", "Oklahoma City Thunder", "Chicago Bulls", "Detroit Pistons", "Cleveland Cavaliers", "Phoenix Suns", "Phoenix Suns", "Utah Jazz", "Chicago Bulls", "Dallas Mavericks", "Memphis Grizzlies", "Portland Trail Blazers", "New Orleans Pelicans", "Los Angeles Lakers", "Brooklyn Nets", "Los Angeles Clippers", "Denver Nuggets", "Washington Wizards", "Milwaukee Bucks", "San Antonio Spurs", "Detroit Pistons", "Brooklyn Nets", "Orlando Magic", "Los Angeles Lakers", "Denver Nuggets", "Portland Trail Blazers", "Sacramento Kings", "Golden State Warriors", "Dallas Mavericks", "Washington Wizards", "Golden State Warriors", "Minnesota Timberwolves", "Cleveland Cavaliers", "Brooklyn Nets", "Miami Heat", "Atlanta Hawks", "San Antonio Spurs", "Los Angeles Clippers", "Atlanta Hawks", "New York Knicks", "Oklahoma City Thunder", "Miami Heat", "Orlando Magic", "Toronto Raptors", "New Orleans Pelicans", "Utah Jazz", "Indiana Pacers", "Sacramento Kings", "Chicago Bulls", "Memphis Grizzlies", "Toronto Raptors", "Boston Celtics", "Boston Celtics"],
      [110, 120, 106, 138, 109, 103, 93, 108, 103, 105, 89, 115, 114, 115, 123, 119, 84, 94, 98, 104, 104, 101, 102, 113, 95, 108, 114, 98, 101, 110, 94, 108, 94, 105, 115, 113, 117, 125, 110, 120, 97, 123, 107, 83, 104, 104, 114, 102, 117, 102, 89, 86, 100, 115, 88, 88, 92, 96, 100, 101, 110, 117, 105, 105, 110, 145, 88, 102, 115, 106, 105, 104, 97, 94, 110, 105, 102, 117, 100, 96, 94, 86],
      [5, -5, -8, 5, -15, -10, -21, 1, 20, -2, -25, 1, -14, -1, 2, -6, -11, -4, -1, -3, -6, -24, -14, 4, -14, -13, -9, -10, -13, -3, -12, -7, -4, -10, 11, -7, 5, 2, 5, -12, -5, 31, -5, -21, -8, -3, -10, -10, 1, -10, -8, -16, 3, -14, -53, -42, -36, -7, -13, -18, -15, -1, 3, 3, -13, 11, -35, -32, 17, -35, -17, -7, -11, -4, 4, -14, -23, -14, -24, -30, -36, -7]
    ),
    leaders: {
      pts: { name: "LaMelo Ball", val: 25.2, all: [{"name": "LaMelo Ball", "val": 25.2}, {"name": "Brandon Miller", "val": 21.0}, {"name": "Miles Bridges", "val": 20.3}, {"name": "Mark Williams", "val": 15.3}, {"name": "Tre Mann", "val": 14.1}, {"name": "Grant Williams", "val": 10.4}, {"name": "Nick Smith Jr.", "val": 9.9}, {"name": "Jusuf Nurkić", "val": 9.2}, {"name": "Josh Okogie", "val": 8.9}, {"name": "Nick Richards", "val": 8.9}, {"name": "Cody Martin", "val": 7.8}, {"name": "KJ Simpson", "val": 7.8}, {"name": "Vasilije Micić", "val": 7.5}, {"name": "Josh Green", "val": 7.4}, {"name": "Damion Baugh", "val": 7.3}, {"name": "Jaylen Sims", "val": 7.0}, {"name": "Marcus Garrett", "val": 7.0}, {"name": "DaQuan Jeffries", "val": 6.7}, {"name": "Seth Curry", "val": 6.5}, {"name": "Isaiah Wong", "val": 6.0}, {"name": "Tidjane Salaün", "val": 5.9}, {"name": "Moussa Diabaté", "val": 5.7}, {"name": "Wendell Moore Jr.", "val": 5.4}, {"name": "Malachi Flynn", "val": 4.0}, {"name": "Taj Gibson", "val": 2.9}, {"name": "Elfrid Payton", "val": 1.0}, {"name": "Jared Rhoden", "val": 1.0}] },
      reb: { name: "Mark Williams", val: 10.2, all: [{"name": "Mark Williams", "val": 10.2}, {"name": "Nick Richards", "val": 7.5}, {"name": "Miles Bridges", "val": 7.5}, {"name": "Jusuf Nurkić", "val": 6.5}, {"name": "Moussa Diabaté", "val": 6.2}, {"name": "Grant Williams", "val": 5.1}, {"name": "LaMelo Ball", "val": 4.9}, {"name": "Brandon Miller", "val": 4.9}, {"name": "Tidjane Salaün", "val": 4.7}, {"name": "Cody Martin", "val": 4.5}, {"name": "Damion Baugh", "val": 3.3}, {"name": "Taj Gibson", "val": 3.2}, {"name": "Wendell Moore Jr.", "val": 3.2}, {"name": "KJ Simpson", "val": 3.0}, {"name": "Tre Mann", "val": 2.9}, {"name": "DaQuan Jeffries", "val": 2.9}, {"name": "Josh Okogie", "val": 2.7}, {"name": "Josh Green", "val": 2.5}, {"name": "Vasilije Micić", "val": 2.4}, {"name": "Elfrid Payton", "val": 2.2}, {"name": "Nick Smith Jr.", "val": 2.1}, {"name": "Malachi Flynn", "val": 1.8}, {"name": "Seth Curry", "val": 1.7}, {"name": "Isaiah Wong", "val": 1.6}, {"name": "Marcus Garrett", "val": 1.5}, {"name": "Jaylen Sims", "val": 1.0}, {"name": "Jared Rhoden", "val": 1.0}] },
      ast: { name: "LaMelo Ball", val: 7.4, all: [{"name": "LaMelo Ball", "val": 7.4}, {"name": "Miles Bridges", "val": 3.9}, {"name": "Damion Baugh", "val": 3.7}, {"name": "Brandon Miller", "val": 3.6}, {"name": "Vasilije Micić", "val": 3.5}, {"name": "Marcus Garrett", "val": 3.3}, {"name": "Elfrid Payton", "val": 3.3}, {"name": "KJ Simpson", "val": 3.1}, {"name": "Tre Mann", "val": 3.0}, {"name": "Jusuf Nurkić", "val": 2.6}, {"name": "Mark Williams", "val": 2.5}, {"name": "Nick Smith Jr.", "val": 2.4}, {"name": "Cody Martin", "val": 2.3}, {"name": "Grant Williams", "val": 2.3}, {"name": "Jaylen Sims", "val": 2.0}, {"name": "Malachi Flynn", "val": 1.8}, {"name": "Josh Green", "val": 1.6}, {"name": "Isaiah Wong", "val": 1.4}, {"name": "Nick Richards", "val": 1.3}, {"name": "Josh Okogie", "val": 1.3}, {"name": "Wendell Moore Jr.", "val": 1.2}, {"name": "Tidjane Salaün", "val": 1.2}, {"name": "DaQuan Jeffries", "val": 1.1}, {"name": "Seth Curry", "val": 0.9}, {"name": "Moussa Diabaté", "val": 0.8}, {"name": "Taj Gibson", "val": 0.6}, {"name": "Jared Rhoden", "val": 0.5}] },
      stl: { name: "Josh Okogie", val: 1.8, all: [{"name": "Josh Okogie", "val": 1.8}, {"name": "Brandon Miller", "val": 1.1}, {"name": "LaMelo Ball", "val": 1.1}, {"name": "Grant Williams", "val": 1.1}, {"name": "Josh Green", "val": 1.1}, {"name": "Cody Martin", "val": 1.1}, {"name": "Damion Baugh", "val": 1.0}, {"name": "Elfrid Payton", "val": 1.0}, {"name": "KJ Simpson", "val": 0.9}, {"name": "Marcus Garrett", "val": 0.8}, {"name": "Malachi Flynn", "val": 0.8}, {"name": "Mark Williams", "val": 0.7}, {"name": "Miles Bridges", "val": 0.7}, {"name": "Jusuf Nurkić", "val": 0.7}, {"name": "Isaiah Wong", "val": 0.6}, {"name": "DaQuan Jeffries", "val": 0.6}, {"name": "Wendell Moore Jr.", "val": 0.6}, {"name": "Moussa Diabaté", "val": 0.6}, {"name": "Tidjane Salaün", "val": 0.5}, {"name": "Tre Mann", "val": 0.5}, {"name": "Jaylen Sims", "val": 0.5}, {"name": "Vasilije Micić", "val": 0.4}, {"name": "Seth Curry", "val": 0.4}, {"name": "Nick Richards", "val": 0.3}, {"name": "Nick Smith Jr.", "val": 0.3}, {"name": "Jared Rhoden", "val": 0.3}, {"name": "Taj Gibson", "val": 0.2}] },
      blk: { name: "Nick Richards", val: 1.2, all: [{"name": "Nick Richards", "val": 1.2}, {"name": "Mark Williams", "val": 1.2}, {"name": "Grant Williams", "val": 0.8}, {"name": "Jusuf Nurkić", "val": 0.7}, {"name": "Cody Martin", "val": 0.7}, {"name": "Brandon Miller", "val": 0.7}, {"name": "Miles Bridges", "val": 0.7}, {"name": "Moussa Diabaté", "val": 0.6}, {"name": "Marcus Garrett", "val": 0.5}, {"name": "Taj Gibson", "val": 0.5}, {"name": "DaQuan Jeffries", "val": 0.5}, {"name": "Josh Okogie", "val": 0.5}, {"name": "Elfrid Payton", "val": 0.5}, {"name": "Tre Mann", "val": 0.3}, {"name": "LaMelo Ball", "val": 0.3}, {"name": "Jaylen Sims", "val": 0.2}, {"name": "Josh Green", "val": 0.2}, {"name": "Tidjane Salaün", "val": 0.2}, {"name": "KJ Simpson", "val": 0.2}, {"name": "Damion Baugh", "val": 0.1}, {"name": "Wendell Moore Jr.", "val": 0.1}, {"name": "Nick Smith Jr.", "val": 0.1}, {"name": "Seth Curry", "val": 0.1}, {"name": "Vasilije Micić", "val": 0.0}, {"name": "Isaiah Wong", "val": 0.0}, {"name": "Malachi Flynn", "val": 0.0}, {"name": "Jared Rhoden", "val": 0.0}] },
    },
    avail: [
      { name: "Moussa Diabaté", g: 71 },
      { name: "Josh Green", g: 68 },
      { name: "Seth Curry", g: 68 },
      { name: "Miles Bridges", g: 64 },
      { name: "Nick Smith Jr.", g: 60 },
      { name: "Tidjane Salaün", g: 60 },
      { name: "DaQuan Jeffries", g: 47 },
      { name: "LaMelo Ball", g: 47 },
      { name: "Mark Williams", g: 44 },
      { name: "Cody Martin", g: 39 },
      { name: "Taj Gibson", g: 37 },
      { name: "KJ Simpson", g: 36 },
      { name: "Vasilije Micić", g: 36 },
      { name: "Brandon Miller", g: 27 },
      { name: "Jusuf Nurkić", g: 26 },
      { name: "Nick Richards", g: 21 },
      { name: "Isaiah Wong", g: 20 },
      { name: "Wendell Moore Jr.", g: 16 },
      { name: "Grant Williams", g: 16 },
      { name: "Josh Okogie", g: 15 },
      { name: "Damion Baugh", g: 15 },
      { name: "Tre Mann", g: 13 },
      { name: "Jaylen Sims", g: 6 },
      { name: "Elfrid Payton", g: 6 },
      { name: "Marcus Garrett", g: 4 },
      { name: "Malachi Flynn", g: 4 },
      { name: "Jared Rhoden", g: 4 },
    ]
  },

  "2025-26": {
    w: 44, l: 38,
    topW:   { pts: 150, opp: 95, against: "Utah Jazz" },
    worstL: { pts: 101, opp: 129, against: "New York Knicks" },
    conf_rank: 9,
    games: buildGames(
      "WLWLLLWLLLWLLLLLLLWWLLWLLWWLLWWLLLWWLLWLWLWLWWWWWWWWWLWLLWWWWWWLLWWLWWWWWLLWWWWLLW",
      ["Brooklyn Nets", "Philadelphia 76ers", "Washington Wizards", "Miami Heat", "Orlando Magic", "Minnesota Timberwolves", "Utah Jazz", "New Orleans Pelicans", "Miami Heat", "Los Angeles Lakers", "Milwaukee Bucks", "Milwaukee Bucks", "Oklahoma City Thunder", "Toronto Raptors", "Indiana Pacers", "Los Angeles Clippers", "Atlanta Hawks", "New York Knicks", "Chicago Bulls", "Toronto Raptors", "Brooklyn Nets", "New York Knicks", "Toronto Raptors", "Denver Nuggets", "Chicago Bulls", "Cleveland Cavaliers", "Atlanta Hawks", "Detroit Pistons", "Cleveland Cavaliers", "Washington Wizards", "Orlando Magic", "Milwaukee Bucks", "Golden State Warriors", "Milwaukee Bucks", "Chicago Bulls", "Oklahoma City Thunder", "Toronto Raptors", "Indiana Pacers", "Utah Jazz", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Denver Nuggets", "Cleveland Cavaliers", "Orlando Magic", "Washington Wizards", "Philadelphia 76ers", "Memphis Grizzlies", "Dallas Mavericks", "San Antonio Spurs", "New Orleans Pelicans", "Houston Rockets", "Atlanta Hawks", "Detroit Pistons", "Atlanta Hawks", "Houston Rockets", "Cleveland Cavaliers", "Washington Wizards", "Chicago Bulls", "Indiana Pacers", "Portland Trail Blazers", "Dallas Mavericks", "Boston Celtics", "Miami Heat", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Miami Heat", "Orlando Magic", "Memphis Grizzlies", "Sacramento Kings", "New York Knicks", "Philadelphia 76ers", "Boston Celtics", "Brooklyn Nets", "Phoenix Suns", "Indiana Pacers", "Minnesota Timberwolves", "Boston Celtics", "Detroit Pistons", "New York Knicks"],
      [136, 121, 139, 117, 107, 105, 126, 112, 108, 111, 111, 134, 96, 108, 118, 116, 110, 101, 123, 118, 103, 104, 111, 106, 126, 119, 133, 86, 132, 126, 120, 113, 125, 121, 112, 124, 96, 112, 150, 109, 135, 116, 110, 87, 124, 119, 130, 112, 123, 111, 102, 109, 126, 104, 110, 101, 113, 129, 131, 133, 109, 117, 118, 120, 99, 103, 117, 102, 136, 130, 124, 134, 114, 114, 99, 117, 127, 129, 122, 102, 100, 110],
      [19, -4, 26, -27, -16, -17, 23, -4, -18, -10, 11, -13, -13, -2, -9, -15, -3, -28, 7, 7, -13, -15, 25, -9, -3, 8, 7, -26, -7, 17, 15, -10, -7, -1, 13, 27, -1, -2, 55, -8, 18, -20, 23, -7, 27, 4, 37, 15, 2, 5, 7, 10, 7, -6, 3, -4, -5, 17, 32, 24, 16, 27, 29, -8, -12, 2, 8, -13, 30, 19, 23, 44, 11, -4, -15, 31, 20, 21, 14, -11, -18, 14]
    ),
    leaders: {
      pts: { name: "Brandon Miller", val: 20.2, all: [{"name": "Brandon Miller", "val": 20.2}, {"name": "LaMelo Ball", "val": 20.1}, {"name": "Kon Knueppel", "val": 18.5}, {"name": "Miles Bridges", "val": 17.1}, {"name": "Coby White", "val": 15.6}, {"name": "Collin Sexton", "val": 14.2}, {"name": "Moussa Diabaté", "val": 7.9}, {"name": "Ryan Kalkbrenner", "val": 7.6}, {"name": "Grant Williams", "val": 7.0}, {"name": "PJ Hall", "val": 6.1}, {"name": "Tidjane Salaün", "val": 6.0}, {"name": "KJ Simpson", "val": 6.0}, {"name": "Tre Mann", "val": 5.5}, {"name": "Sion James", "val": 5.4}, {"name": "Josh Green", "val": 4.3}, {"name": "Liam McNeeley", "val": 4.3}, {"name": "Antonio Reeves", "val": 2.7}, {"name": "Pat Connaughton", "val": 2.6}, {"name": "Mason Plumlee", "val": 1.9}, {"name": "Drew Peterson", "val": 0.8}, {"name": "Xavier Tillman Sr.", "val": 0.8}] },
      reb: { name: "Moussa Diabaté", val: 8.7, all: [{"name": "Moussa Diabaté", "val": 8.7}, {"name": "Miles Bridges", "val": 5.8}, {"name": "Ryan Kalkbrenner", "val": 5.5}, {"name": "PJ Hall", "val": 5.5}, {"name": "Kon Knueppel", "val": 5.3}, {"name": "Brandon Miller", "val": 4.9}, {"name": "LaMelo Ball", "val": 4.8}, {"name": "Tidjane Salaün", "val": 4.0}, {"name": "Grant Williams", "val": 3.9}, {"name": "Sion James", "val": 3.5}, {"name": "Coby White", "val": 3.0}, {"name": "Mason Plumlee", "val": 2.9}, {"name": "Liam McNeeley", "val": 2.4}, {"name": "KJ Simpson", "val": 2.1}, {"name": "Collin Sexton", "val": 1.9}, {"name": "Josh Green", "val": 1.8}, {"name": "Tre Mann", "val": 1.7}, {"name": "Drew Peterson", "val": 1.5}, {"name": "Pat Connaughton", "val": 1.5}, {"name": "Xavier Tillman Sr.", "val": 1.1}, {"name": "Antonio Reeves", "val": 0.8}] },
      ast: { name: "LaMelo Ball", val: 7.1, all: [{"name": "LaMelo Ball", "val": 7.1}, {"name": "Collin Sexton", "val": 3.7}, {"name": "Kon Knueppel", "val": 3.4}, {"name": "Brandon Miller", "val": 3.3}, {"name": "Miles Bridges", "val": 3.2}, {"name": "Coby White", "val": 3.0}, {"name": "KJ Simpson", "val": 2.5}, {"name": "Sion James", "val": 2.0}, {"name": "Moussa Diabaté", "val": 1.9}, {"name": "Grant Williams", "val": 1.6}, {"name": "Tre Mann", "val": 1.6}, {"name": "Mason Plumlee", "val": 1.1}, {"name": "Ryan Kalkbrenner", "val": 0.8}, {"name": "Josh Green", "val": 0.8}, {"name": "Liam McNeeley", "val": 0.8}, {"name": "PJ Hall", "val": 0.7}, {"name": "Tidjane Salaün", "val": 0.7}, {"name": "Xavier Tillman Sr.", "val": 0.5}, {"name": "Pat Connaughton", "val": 0.4}, {"name": "Drew Peterson", "val": 0.3}, {"name": "Antonio Reeves", "val": 0.3}] },
      stl: { name: "LaMelo Ball", val: 1.2, all: [{"name": "LaMelo Ball", "val": 1.2}, {"name": "KJ Simpson", "val": 1.1}, {"name": "Brandon Miller", "val": 1.0}, {"name": "Collin Sexton", "val": 0.9}, {"name": "Moussa Diabaté", "val": 0.8}, {"name": "Kon Knueppel", "val": 0.7}, {"name": "Sion James", "val": 0.6}, {"name": "Miles Bridges", "val": 0.6}, {"name": "Josh Green", "val": 0.6}, {"name": "Ryan Kalkbrenner", "val": 0.5}, {"name": "Grant Williams", "val": 0.5}, {"name": "Tre Mann", "val": 0.5}, {"name": "Drew Peterson", "val": 0.5}, {"name": "Tidjane Salaün", "val": 0.4}, {"name": "Mason Plumlee", "val": 0.4}, {"name": "PJ Hall", "val": 0.3}, {"name": "Pat Connaughton", "val": 0.3}, {"name": "Coby White", "val": 0.2}, {"name": "Liam McNeeley", "val": 0.2}, {"name": "Xavier Tillman Sr.", "val": 0.2}, {"name": "Antonio Reeves", "val": 0.1}] },
      blk: { name: "Ryan Kalkbrenner", val: 1.5, all: [{"name": "Ryan Kalkbrenner", "val": 1.5}, {"name": "Moussa Diabaté", "val": 1.0}, {"name": "Brandon Miller", "val": 0.7}, {"name": "PJ Hall", "val": 0.7}, {"name": "Grant Williams", "val": 0.5}, {"name": "Miles Bridges", "val": 0.4}, {"name": "Kon Knueppel", "val": 0.2}, {"name": "Drew Peterson", "val": 0.2}, {"name": "Tidjane Salaün", "val": 0.2}, {"name": "Xavier Tillman Sr.", "val": 0.2}, {"name": "Collin Sexton", "val": 0.2}, {"name": "Sion James", "val": 0.2}, {"name": "LaMelo Ball", "val": 0.2}, {"name": "Coby White", "val": 0.1}, {"name": "Josh Green", "val": 0.1}, {"name": "Tre Mann", "val": 0.1}, {"name": "Liam McNeeley", "val": 0.1}, {"name": "Mason Plumlee", "val": 0.0}, {"name": "Pat Connaughton", "val": 0.0}, {"name": "Antonio Reeves", "val": 0.0}, {"name": "KJ Simpson", "val": 0.0}] },
    },
    avail: [
      { name: "Sion James", g: 82 },
      { name: "Kon Knueppel", g: 81 },
      { name: "Miles Bridges", g: 77 },
      { name: "Moussa Diabaté", g: 73 },
      { name: "LaMelo Ball", g: 72 },
      { name: "Ryan Kalkbrenner", g: 69 },
      { name: "Brandon Miller", g: 65 },
      { name: "Josh Green", g: 58 },
      { name: "Tre Mann", g: 53 },
      { name: "Collin Sexton", g: 42 },
      { name: "Pat Connaughton", g: 42 },
      { name: "Tidjane Salaün", g: 37 },
      { name: "Grant Williams", g: 36 },
      { name: "Liam McNeeley", g: 31 },
      { name: "Coby White", g: 21 },
      { name: "Xavier Tillman Sr.", g: 16 },
      { name: "Mason Plumlee", g: 14 },
      { name: "KJ Simpson", g: 14 },
      { name: "PJ Hall", g: 12 },
      { name: "Antonio Reeves", g: 10 },
      { name: "Drew Peterson", g: 6 },
    ]
  },

};
