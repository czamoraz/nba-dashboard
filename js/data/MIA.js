/* ================================================================
   MIA.js — Miami Heat · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Miami Heat",
  abbr:          "MIA",
  conference:    "East",
  primaryColor:  "#98002E",
  secondaryColor:"#F9A01B",
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
    w: 40, l: 32,
    topW:   { pts: 118, opp: 90, against: "Oklahoma City Thunder" },
    worstL: { pts: 97, opp: 144, against: "Milwaukee Bucks" },
    conf_rank: 6,
    games: buildGames(
      "LWLWLWLWLLLWWLLLLLWLLWWWWLLLWWWWWWLWWWWWLLLLLLWWWWLWWLLLWWWLWLWWWLWWWWLW",
      ["Orlando Magic", "New Orleans Pelicans", "Milwaukee Bucks", "Milwaukee Bucks", "Dallas Mavericks", "Oklahoma City Thunder", "Boston Celtics", "Washington Wizards", "Philadelphia 76ers", "Philadelphia 76ers", "Detroit Pistons", "Detroit Pistons", "Toronto Raptors", "Toronto Raptors", "Brooklyn Nets", "Brooklyn Nets", "Denver Nuggets", "Los Angeles Clippers", "Sacramento Kings", "Charlotte Hornets", "Washington Wizards", "Washington Wizards", "New York Knicks", "New York Knicks", "Houston Rockets", "Utah Jazz", "Los Angeles Clippers", "Golden State Warriors", "Sacramento Kings", "Los Angeles Lakers", "Oklahoma City Thunder", "Toronto Raptors", "Utah Jazz", "Atlanta Hawks", "Atlanta Hawks", "New Orleans Pelicans", "Orlando Magic", "Chicago Bulls", "Orlando Magic", "Cleveland Cavaliers", "Memphis Grizzlies", "Indiana Pacers", "Indiana Pacers", "Phoenix Suns", "Portland Trail Blazers", "Charlotte Hornets", "New York Knicks", "Indiana Pacers", "Golden State Warriors", "Cleveland Cavaliers", "Memphis Grizzlies", "Los Angeles Lakers", "Portland Trail Blazers", "Phoenix Suns", "Denver Nuggets", "Minnesota Timberwolves", "Brooklyn Nets", "Houston Rockets", "San Antonio Spurs", "Atlanta Hawks", "Chicago Bulls", "Chicago Bulls", "San Antonio Spurs", "Cleveland Cavaliers", "Charlotte Hornets", "Dallas Mavericks", "Minnesota Timberwolves", "Boston Celtics", "Boston Celtics", "Philadelphia 76ers", "Milwaukee Bucks", "Detroit Pistons"],
      [107, 111, 97, 119, 83, 118, 105, 128, 134, 108, 100, 113, 111, 81, 124, 85, 82, 105, 105, 121, 100, 122, 109, 98, 101, 94, 118, 112, 118, 96, 108, 116, 124, 109, 80, 103, 111, 101, 102, 113, 85, 110, 106, 100, 122, 105, 98, 92, 116, 115, 112, 110, 107, 86, 106, 111, 109, 113, 107, 103, 106, 102, 116, 124, 121, 113, 121, 130, 129, 106, 108, 120],
      [-6, 13, -47, 11, -10, 28, -2, 4, -3, -17, -20, 6, 9, -20, -4, -13, -27, -4, 1, -8, -3, 27, 6, 2, 7, -18, -7, -8, 8, 2, 14, 8, 8, 10, -14, 10, 8, 11, 5, 15, -4, -27, -3, -10, -3, -5, 10, 5, 7, 14, -12, 6, 9, -20, -17, -8, 2, 22, 20, -15, 5, -8, 5, 17, 10, -14, 9, 6, 8, 12, -14, 13]
    ),
    leaders: {
      pts: { name: "Jimmy Butler", val: 21.5, all: [{"name": "Jimmy Butler", "val": 21.5}, {"name": "Bam Adebayo", "val": 18.7}, {"name": "Tyler Herro", "val": 15.1}, {"name": "Kendrick Nunn", "val": 14.6}, {"name": "Goran Dragić", "val": 13.4}, {"name": "Duncan Robinson", "val": 13.1}, {"name": "Victor Oladipo", "val": 12.0}, {"name": "Kelly Olynyk", "val": 10.0}, {"name": "Trevor Ariza", "val": 9.4}, {"name": "Avery Bradley", "val": 8.5}, {"name": "Dewayne Dedmon", "val": 7.1}, {"name": "Max Strus", "val": 6.1}, {"name": "Nemanja Bjelica", "val": 5.0}, {"name": "Precious Achiuwa", "val": 5.0}, {"name": "Gabe Vincent", "val": 4.8}, {"name": "Andre Iguodala", "val": 4.4}, {"name": "Udonis Haslem", "val": 4.0}, {"name": "Meyers Leonard", "val": 3.3}, {"name": "Chris Silva", "val": 2.7}, {"name": "KZ Okpala", "val": 2.5}, {"name": "Maurice Harkless", "val": 1.4}] },
      reb: { name: "Bam Adebayo", val: 9.0, all: [{"name": "Bam Adebayo", "val": 9.0}, {"name": "Jimmy Butler", "val": 6.9}, {"name": "Kelly Olynyk", "val": 6.1}, {"name": "Dewayne Dedmon", "val": 5.4}, {"name": "Tyler Herro", "val": 5.0}, {"name": "Trevor Ariza", "val": 4.8}, {"name": "Duncan Robinson", "val": 3.5}, {"name": "Victor Oladipo", "val": 3.5}, {"name": "Andre Iguodala", "val": 3.5}, {"name": "Precious Achiuwa", "val": 3.4}, {"name": "Goran Dragić", "val": 3.4}, {"name": "Kendrick Nunn", "val": 3.2}, {"name": "Nemanja Bjelica", "val": 2.5}, {"name": "Chris Silva", "val": 2.3}, {"name": "Meyers Leonard", "val": 2.3}, {"name": "Avery Bradley", "val": 1.8}, {"name": "KZ Okpala", "val": 1.8}, {"name": "Maurice Harkless", "val": 1.2}, {"name": "Max Strus", "val": 1.1}, {"name": "Gabe Vincent", "val": 1.1}, {"name": "Udonis Haslem", "val": 1.0}] },
      ast: { name: "Jimmy Butler", val: 7.1, all: [{"name": "Jimmy Butler", "val": 7.1}, {"name": "Bam Adebayo", "val": 5.4}, {"name": "Goran Dragić", "val": 4.4}, {"name": "Victor Oladipo", "val": 3.5}, {"name": "Tyler Herro", "val": 3.4}, {"name": "Kendrick Nunn", "val": 2.6}, {"name": "Andre Iguodala", "val": 2.3}, {"name": "Kelly Olynyk", "val": 2.1}, {"name": "Nemanja Bjelica", "val": 1.8}, {"name": "Duncan Robinson", "val": 1.8}, {"name": "Trevor Ariza", "val": 1.8}, {"name": "Avery Bradley", "val": 1.4}, {"name": "Gabe Vincent", "val": 1.3}, {"name": "Dewayne Dedmon", "val": 0.8}, {"name": "Meyers Leonard", "val": 0.7}, {"name": "Max Strus", "val": 0.6}, {"name": "Maurice Harkless", "val": 0.6}, {"name": "KZ Okpala", "val": 0.5}, {"name": "Precious Achiuwa", "val": 0.5}, {"name": "Chris Silva", "val": 0.5}, {"name": "Udonis Haslem", "val": 0.0}] },
      stl: { name: "Jimmy Butler", val: 2.1, all: [{"name": "Jimmy Butler", "val": 2.1}, {"name": "Victor Oladipo", "val": 1.8}, {"name": "Bam Adebayo", "val": 1.2}, {"name": "Trevor Ariza", "val": 1.0}, {"name": "Andre Iguodala", "val": 0.9}, {"name": "Kendrick Nunn", "val": 0.9}, {"name": "Kelly Olynyk", "val": 0.9}, {"name": "Goran Dragić", "val": 0.7}, {"name": "Avery Bradley", "val": 0.7}, {"name": "Tyler Herro", "val": 0.6}, {"name": "Duncan Robinson", "val": 0.6}, {"name": "Nemanja Bjelica", "val": 0.6}, {"name": "Dewayne Dedmon", "val": 0.6}, {"name": "Gabe Vincent", "val": 0.4}, {"name": "Max Strus", "val": 0.3}, {"name": "KZ Okpala", "val": 0.3}, {"name": "Precious Achiuwa", "val": 0.3}, {"name": "Maurice Harkless", "val": 0.2}, {"name": "Chris Silva", "val": 0.1}, {"name": "Meyers Leonard", "val": 0.0}, {"name": "Udonis Haslem", "val": 0.0}] },
      blk: { name: "Bam Adebayo", val: 1.0, all: [{"name": "Bam Adebayo", "val": 1.0}, {"name": "Trevor Ariza", "val": 0.6}, {"name": "Kelly Olynyk", "val": 0.6}, {"name": "Andre Iguodala", "val": 0.6}, {"name": "Precious Achiuwa", "val": 0.5}, {"name": "Victor Oladipo", "val": 0.5}, {"name": "Chris Silva", "val": 0.5}, {"name": "Dewayne Dedmon", "val": 0.4}, {"name": "Maurice Harkless", "val": 0.4}, {"name": "Jimmy Butler", "val": 0.3}, {"name": "Duncan Robinson", "val": 0.3}, {"name": "Tyler Herro", "val": 0.3}, {"name": "Kendrick Nunn", "val": 0.3}, {"name": "Nemanja Bjelica", "val": 0.3}, {"name": "KZ Okpala", "val": 0.3}, {"name": "Goran Dragić", "val": 0.2}, {"name": "Avery Bradley", "val": 0.1}, {"name": "Max Strus", "val": 0.1}, {"name": "Meyers Leonard", "val": 0.0}, {"name": "Gabe Vincent", "val": 0.0}, {"name": "Udonis Haslem", "val": 0.0}] },
    },
    avail: [
      { name: "Duncan Robinson", g: 72 },
      { name: "Bam Adebayo", g: 64 },
      { name: "Andre Iguodala", g: 63 },
      { name: "Precious Achiuwa", g: 61 },
      { name: "Kendrick Nunn", g: 56 },
      { name: "Tyler Herro", g: 54 },
      { name: "Jimmy Butler", g: 52 },
      { name: "Gabe Vincent", g: 50 },
      { name: "Goran Dragić", g: 50 },
      { name: "Kelly Olynyk", g: 43 },
      { name: "Max Strus", g: 39 },
      { name: "KZ Okpala", g: 37 },
      { name: "Trevor Ariza", g: 30 },
      { name: "Dewayne Dedmon", g: 16 },
      { name: "Maurice Harkless", g: 11 },
      { name: "Chris Silva", g: 11 },
      { name: "Nemanja Bjelica", g: 11 },
      { name: "Avery Bradley", g: 10 },
      { name: "Victor Oladipo", g: 4 },
      { name: "Meyers Leonard", g: 3 },
      { name: "Udonis Haslem", g: 1 },
    ]
  },

  "2021-22": {
    w: 53, l: 29,
    topW:   { pts: 137, opp: 95, against: "Milwaukee Bucks" },
    worstL: { pts: 92, opp: 122, against: "Boston Celtics" },
    conf_rank: 1,
    games: buildGames(
      "WLWWWWWLWLLLWWWWLWLWLLWLLWWLWWLWWWWWLLWWWWLWWLWWWLLLWWWWWLWWWWLWWWLWLWWLLLLWWWWWWL",
      ["Milwaukee Bucks", "Indiana Pacers", "Orlando Magic", "Brooklyn Nets", "Charlotte Hornets", "Memphis Grizzlies", "Dallas Mavericks", "Boston Celtics", "Utah Jazz", "Denver Nuggets", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Oklahoma City Thunder", "New Orleans Pelicans", "Washington Wizards", "Washington Wizards", "Detroit Pistons", "Minnesota Timberwolves", "Chicago Bulls", "Denver Nuggets", "Cleveland Cavaliers", "Indiana Pacers", "Milwaukee Bucks", "Memphis Grizzlies", "Milwaukee Bucks", "Chicago Bulls", "Cleveland Cavaliers", "Philadelphia 76ers", "Orlando Magic", "Detroit Pistons", "Indiana Pacers", "Detroit Pistons", "Orlando Magic", "Washington Wizards", "Houston Rockets", "Sacramento Kings", "Golden State Warriors", "Portland Trail Blazers", "Phoenix Suns", "Atlanta Hawks", "Atlanta Hawks", "Philadelphia 76ers", "Toronto Raptors", "Portland Trail Blazers", "Atlanta Hawks", "Los Angeles Lakers", "New York Knicks", "Los Angeles Clippers", "Toronto Raptors", "Boston Celtics", "Toronto Raptors", "San Antonio Spurs", "Charlotte Hornets", "Washington Wizards", "New Orleans Pelicans", "Brooklyn Nets", "Dallas Mavericks", "Charlotte Hornets", "New York Knicks", "San Antonio Spurs", "Chicago Bulls", "Milwaukee Bucks", "Brooklyn Nets", "Philadelphia 76ers", "Houston Rockets", "Phoenix Suns", "Cleveland Cavaliers", "Minnesota Timberwolves", "Detroit Pistons", "Oklahoma City Thunder", "Philadelphia 76ers", "Golden State Warriors", "New York Knicks", "Brooklyn Nets", "Sacramento Kings", "Boston Celtics", "Chicago Bulls", "Toronto Raptors", "Charlotte Hornets", "Atlanta Hawks", "Orlando Magic"],
      [137, 91, 107, 106, 114, 129, 125, 78, 118, 96, 117, 109, 111, 103, 113, 112, 100, 100, 101, 107, 111, 85, 113, 102, 90, 113, 118, 94, 101, 115, 90, 125, 115, 93, 119, 120, 113, 108, 115, 123, 115, 124, 98, 104, 104, 108, 113, 110, 121, 120, 92, 106, 112, 104, 121, 112, 115, 99, 111, 115, 133, 112, 119, 113, 99, 123, 90, 117, 104, 105, 120, 106, 104, 103, 95, 123, 106, 127, 114, 144, 113, 111],
      [42, -11, 17, 13, 15, 26, 15, -17, 3, -17, -3, -3, 6, 13, 15, 15, -3, 8, -12, 3, -9, -26, 9, -22, -15, 9, 26, -11, 5, 10, -10, 29, 3, 10, 7, 10, -2, -7, 6, 23, 24, 6, -11, 5, 12, -2, 6, 14, 7, -4, -30, -4, 17, 18, 21, 15, 4, -8, 4, 15, 4, 13, -1, 6, 17, 17, -21, 12, -9, 7, 12, -7, -14, -8, -15, 23, 8, 18, 5, 29, 4, -14]
    ),
    leaders: {
      pts: { name: "Jimmy Butler", val: 21.4, all: [{"name": "Jimmy Butler", "val": 21.4}, {"name": "Tyler Herro", "val": 20.7}, {"name": "Bam Adebayo", "val": 19.1}, {"name": "Kyle Lowry", "val": 13.4}, {"name": "Victor Oladipo", "val": 12.4}, {"name": "Duncan Robinson", "val": 10.9}, {"name": "Max Strus", "val": 10.6}, {"name": "Caleb Martin", "val": 9.2}, {"name": "Gabe Vincent", "val": 8.7}, {"name": "Markieff Morris", "val": 7.6}, {"name": "P.J. Tucker", "val": 7.6}, {"name": "Mychal Mulder", "val": 7.0}, {"name": "Dewayne Dedmon", "val": 6.3}, {"name": "Nik Stauskas", "val": 5.5}, {"name": "Omer Yurtseven", "val": 5.3}, {"name": "Javonte Smart", "val": 5.0}, {"name": "Kyle Guy", "val": 3.9}, {"name": "KZ Okpala", "val": 3.7}, {"name": "Chris Silva", "val": 2.9}, {"name": "Udonis Haslem", "val": 2.5}, {"name": "Haywood Highsmith", "val": 2.3}, {"name": "Marcus Garrett", "val": 1.1}] },
      reb: { name: "Bam Adebayo", val: 10.1, all: [{"name": "Bam Adebayo", "val": 10.1}, {"name": "Jimmy Butler", "val": 5.9}, {"name": "Dewayne Dedmon", "val": 5.8}, {"name": "P.J. Tucker", "val": 5.5}, {"name": "Omer Yurtseven", "val": 5.3}, {"name": "Tyler Herro", "val": 5.0}, {"name": "Kyle Lowry", "val": 4.5}, {"name": "Chris Silva", "val": 3.9}, {"name": "Caleb Martin", "val": 3.8}, {"name": "Max Strus", "val": 3.0}, {"name": "Victor Oladipo", "val": 2.9}, {"name": "Markieff Morris", "val": 2.6}, {"name": "Duncan Robinson", "val": 2.6}, {"name": "KZ Okpala", "val": 2.0}, {"name": "Gabe Vincent", "val": 1.9}, {"name": "Marcus Garrett", "val": 1.9}, {"name": "Udonis Haslem", "val": 1.9}, {"name": "Mychal Mulder", "val": 1.5}, {"name": "Nik Stauskas", "val": 1.5}, {"name": "Haywood Highsmith", "val": 1.4}, {"name": "Javonte Smart", "val": 1.3}, {"name": "Kyle Guy", "val": 0.9}] },
      ast: { name: "Kyle Lowry", val: 7.5, all: [{"name": "Kyle Lowry", "val": 7.5}, {"name": "Jimmy Butler", "val": 5.5}, {"name": "Tyler Herro", "val": 4.0}, {"name": "Victor Oladipo", "val": 3.5}, {"name": "Bam Adebayo", "val": 3.4}, {"name": "Gabe Vincent", "val": 3.1}, {"name": "P.J. Tucker", "val": 2.1}, {"name": "Duncan Robinson", "val": 1.6}, {"name": "Markieff Morris", "val": 1.4}, {"name": "Max Strus", "val": 1.4}, {"name": "Caleb Martin", "val": 1.1}, {"name": "Mychal Mulder", "val": 1.0}, {"name": "Omer Yurtseven", "val": 0.9}, {"name": "Kyle Guy", "val": 0.9}, {"name": "Chris Silva", "val": 0.8}, {"name": "Dewayne Dedmon", "val": 0.7}, {"name": "KZ Okpala", "val": 0.7}, {"name": "Marcus Garrett", "val": 0.6}, {"name": "Nik Stauskas", "val": 0.5}, {"name": "Javonte Smart", "val": 0.5}, {"name": "Haywood Highsmith", "val": 0.3}, {"name": "Udonis Haslem", "val": 0.3}] },
      stl: { name: "Jimmy Butler", val: 1.6, all: [{"name": "Jimmy Butler", "val": 1.6}, {"name": "Bam Adebayo", "val": 1.4}, {"name": "Kyle Lowry", "val": 1.1}, {"name": "Caleb Martin", "val": 1.0}, {"name": "Gabe Vincent", "val": 0.9}, {"name": "P.J. Tucker", "val": 0.8}, {"name": "Tyler Herro", "val": 0.7}, {"name": "Victor Oladipo", "val": 0.6}, {"name": "Duncan Robinson", "val": 0.5}, {"name": "Javonte Smart", "val": 0.5}, {"name": "Marcus Garrett", "val": 0.4}, {"name": "Kyle Guy", "val": 0.4}, {"name": "Markieff Morris", "val": 0.4}, {"name": "Dewayne Dedmon", "val": 0.4}, {"name": "Max Strus", "val": 0.4}, {"name": "Omer Yurtseven", "val": 0.3}, {"name": "KZ Okpala", "val": 0.2}, {"name": "Haywood Highsmith", "val": 0.1}, {"name": "Udonis Haslem", "val": 0.1}, {"name": "Nik Stauskas", "val": 0.0}, {"name": "Mychal Mulder", "val": 0.0}, {"name": "Chris Silva", "val": 0.0}] },
      blk: { name: "Bam Adebayo", val: 0.8, all: [{"name": "Bam Adebayo", "val": 0.8}, {"name": "Dewayne Dedmon", "val": 0.6}, {"name": "Jimmy Butler", "val": 0.5}, {"name": "Mychal Mulder", "val": 0.5}, {"name": "Caleb Martin", "val": 0.5}, {"name": "Omer Yurtseven", "val": 0.4}, {"name": "Javonte Smart", "val": 0.3}, {"name": "Kyle Lowry", "val": 0.3}, {"name": "KZ Okpala", "val": 0.3}, {"name": "Marcus Garrett", "val": 0.3}, {"name": "Duncan Robinson", "val": 0.2}, {"name": "Gabe Vincent", "val": 0.2}, {"name": "Max Strus", "val": 0.2}, {"name": "P.J. Tucker", "val": 0.2}, {"name": "Haywood Highsmith", "val": 0.2}, {"name": "Kyle Guy", "val": 0.1}, {"name": "Chris Silva", "val": 0.1}, {"name": "Markieff Morris", "val": 0.1}, {"name": "Victor Oladipo", "val": 0.1}, {"name": "Tyler Herro", "val": 0.1}, {"name": "Udonis Haslem", "val": 0.1}, {"name": "Nik Stauskas", "val": 0.0}] },
    },
    avail: [
      { name: "Duncan Robinson", g: 79 },
      { name: "P.J. Tucker", g: 71 },
      { name: "Gabe Vincent", g: 68 },
      { name: "Max Strus", g: 68 },
      { name: "Dewayne Dedmon", g: 67 },
      { name: "Tyler Herro", g: 66 },
      { name: "Kyle Lowry", g: 63 },
      { name: "Caleb Martin", g: 60 },
      { name: "Jimmy Butler", g: 57 },
      { name: "Bam Adebayo", g: 56 },
      { name: "Omer Yurtseven", g: 56 },
      { name: "KZ Okpala", g: 21 },
      { name: "Haywood Highsmith", g: 19 },
      { name: "Kyle Guy", g: 19 },
      { name: "Markieff Morris", g: 17 },
      { name: "Udonis Haslem", g: 13 },
      { name: "Marcus Garrett", g: 12 },
      { name: "Chris Silva", g: 9 },
      { name: "Victor Oladipo", g: 8 },
      { name: "Javonte Smart", g: 4 },
      { name: "Nik Stauskas", g: 2 },
      { name: "Mychal Mulder", g: 2 },
    ]
  },

  "2022-23": {
    w: 44, l: 38,
    topW:   { pts: 129, opp: 101, against: "Philadelphia 76ers" },
    worstL: { pts: 99, opp: 128, against: "Milwaukee Bucks" },
    conf_rank: 7,
    games: buildGames(
      "LLWLWLLWWLLWWWLLLLWWWLWLLWLWWWWLLWWLWWLWLWWWLWLWWWLWLLWWWLLLLWLLWWLWLWWLWWLLLWWWLW",
      ["Chicago Bulls", "Boston Celtics", "Toronto Raptors", "Toronto Raptors", "Portland Trail Blazers", "Golden State Warriors", "Sacramento Kings", "Golden State Warriors", "Sacramento Kings", "Indiana Pacers", "Portland Trail Blazers", "Charlotte Hornets", "Charlotte Hornets", "Phoenix Suns", "Toronto Raptors", "Washington Wizards", "Cleveland Cavaliers", "Minnesota Timberwolves", "Washington Wizards", "Washington Wizards", "Atlanta Hawks", "Boston Celtics", "Boston Celtics", "Memphis Grizzlies", "Detroit Pistons", "Los Angeles Clippers", "San Antonio Spurs", "Indiana Pacers", "Oklahoma City Thunder", "Houston Rockets", "San Antonio Spurs", "Chicago Bulls", "Indiana Pacers", "Minnesota Timberwolves", "Los Angeles Lakers", "Denver Nuggets", "Utah Jazz", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Brooklyn Nets", "Oklahoma City Thunder", "Milwaukee Bucks", "Milwaukee Bucks", "Atlanta Hawks", "New Orleans Pelicans", "Dallas Mavericks", "New Orleans Pelicans", "Boston Celtics", "Orlando Magic", "Charlotte Hornets", "Cleveland Cavaliers", "New York Knicks", "Milwaukee Bucks", "Indiana Pacers", "Houston Rockets", "Orlando Magic", "Denver Nuggets", "Brooklyn Nets", "Milwaukee Bucks", "Charlotte Hornets", "Philadelphia 76ers", "Philadelphia 76ers", "New York Knicks", "Atlanta Hawks", "Atlanta Hawks", "Cleveland Cavaliers", "Cleveland Cavaliers", "Orlando Magic", "Utah Jazz", "Memphis Grizzlies", "Chicago Bulls", "Detroit Pistons", "New York Knicks", "Brooklyn Nets", "Toronto Raptors", "New York Knicks", "Dallas Mavericks", "Detroit Pistons", "Philadelphia 76ers", "Washington Wizards", "Orlando Magic"],
      [108, 104, 112, 90, 119, 110, 113, 116, 110, 99, 107, 117, 132, 113, 104, 106, 87, 101, 113, 110, 106, 121, 120, 93, 96, 115, 111, 87, 110, 111, 111, 103, 108, 113, 112, 119, 126, 110, 109, 104, 101, 112, 108, 111, 113, 124, 90, 100, 98, 110, 117, 100, 104, 115, 116, 97, 107, 108, 105, 99, 103, 101, 96, 120, 117, 130, 100, 119, 114, 119, 138, 99, 112, 127, 100, 92, 92, 129, 118, 129, 108, 123],
      [-8, -7, 3, -8, 21, -13, -6, 7, 3, -2, -3, 5, 17, 1, -8, -1, -26, -4, 8, 3, 8, -13, 4, -8, -20, 5, -4, 5, 2, 3, 10, -10, -3, 3, 14, -5, 3, 10, -3, 8, -1, 1, 6, 16, -8, 26, -25, 4, 3, 5, -5, 3, -2, -8, 5, 2, 4, -4, -11, -29, -5, 2, -23, -2, 8, 2, -4, 4, -12, 4, 19, -14, 12, 7, -29, -14, -9, 7, 13, 28, -6, 13]
    ),
    leaders: {
      pts: { name: "Jimmy Butler", val: 22.9, all: [{"name": "Jimmy Butler", "val": 22.9}, {"name": "Bam Adebayo", "val": 20.4}, {"name": "Tyler Herro", "val": 20.1}, {"name": "Max Strus", "val": 11.5}, {"name": "Kyle Lowry", "val": 11.2}, {"name": "Victor Oladipo", "val": 10.7}, {"name": "Caleb Martin", "val": 9.6}, {"name": "Gabe Vincent", "val": 9.4}, {"name": "Kevin Love", "val": 7.7}, {"name": "Cody Zeller", "val": 6.5}, {"name": "Duncan Robinson", "val": 6.4}, {"name": "Dewayne Dedmon", "val": 5.7}, {"name": "Nikola Jović", "val": 5.5}, {"name": "Jamal Cain", "val": 5.4}, {"name": "Haywood Highsmith", "val": 4.4}, {"name": "Omer Yurtseven", "val": 4.4}, {"name": "Udonis Haslem", "val": 3.9}, {"name": "Jamaree Bouyea", "val": 3.8}, {"name": "Orlando Robinson", "val": 3.7}, {"name": "Dru Smith", "val": 2.2}] },
      reb: { name: "Bam Adebayo", val: 9.2, all: [{"name": "Bam Adebayo", "val": 9.2}, {"name": "Jimmy Butler", "val": 5.9}, {"name": "Kevin Love", "val": 5.7}, {"name": "Tyler Herro", "val": 5.4}, {"name": "Caleb Martin", "val": 4.8}, {"name": "Cody Zeller", "val": 4.3}, {"name": "Orlando Robinson", "val": 4.1}, {"name": "Kyle Lowry", "val": 4.1}, {"name": "Dewayne Dedmon", "val": 3.6}, {"name": "Haywood Highsmith", "val": 3.5}, {"name": "Max Strus", "val": 3.2}, {"name": "Victor Oladipo", "val": 3.0}, {"name": "Jamal Cain", "val": 2.9}, {"name": "Omer Yurtseven", "val": 2.6}, {"name": "Nikola Jović", "val": 2.1}, {"name": "Gabe Vincent", "val": 2.1}, {"name": "Dru Smith", "val": 1.8}, {"name": "Udonis Haslem", "val": 1.6}, {"name": "Duncan Robinson", "val": 1.6}, {"name": "Jamaree Bouyea", "val": 1.3}] },
      ast: { name: "Jimmy Butler", val: 5.3, all: [{"name": "Jimmy Butler", "val": 5.3}, {"name": "Kyle Lowry", "val": 5.1}, {"name": "Tyler Herro", "val": 4.2}, {"name": "Victor Oladipo", "val": 3.5}, {"name": "Bam Adebayo", "val": 3.2}, {"name": "Gabe Vincent", "val": 2.5}, {"name": "Max Strus", "val": 2.1}, {"name": "Kevin Love", "val": 1.9}, {"name": "Caleb Martin", "val": 1.6}, {"name": "Duncan Robinson", "val": 1.1}, {"name": "Jamaree Bouyea", "val": 1.0}, {"name": "Dru Smith", "val": 1.0}, {"name": "Haywood Highsmith", "val": 0.8}, {"name": "Orlando Robinson", "val": 0.8}, {"name": "Cody Zeller", "val": 0.7}, {"name": "Nikola Jović", "val": 0.7}, {"name": "Jamal Cain", "val": 0.7}, {"name": "Dewayne Dedmon", "val": 0.5}, {"name": "Omer Yurtseven", "val": 0.2}, {"name": "Udonis Haslem", "val": 0.0}] },
      stl: { name: "Jimmy Butler", val: 1.8, all: [{"name": "Jimmy Butler", "val": 1.8}, {"name": "Victor Oladipo", "val": 1.4}, {"name": "Bam Adebayo", "val": 1.2}, {"name": "Kyle Lowry", "val": 1.0}, {"name": "Caleb Martin", "val": 1.0}, {"name": "Jamaree Bouyea", "val": 1.0}, {"name": "Gabe Vincent", "val": 0.9}, {"name": "Tyler Herro", "val": 0.8}, {"name": "Dru Smith", "val": 0.8}, {"name": "Haywood Highsmith", "val": 0.7}, {"name": "Jamal Cain", "val": 0.6}, {"name": "Max Strus", "val": 0.5}, {"name": "Nikola Jović", "val": 0.5}, {"name": "Kevin Love", "val": 0.4}, {"name": "Orlando Robinson", "val": 0.4}, {"name": "Duncan Robinson", "val": 0.3}, {"name": "Cody Zeller", "val": 0.2}, {"name": "Dewayne Dedmon", "val": 0.2}, {"name": "Omer Yurtseven", "val": 0.2}, {"name": "Udonis Haslem", "val": 0.1}] },
      blk: { name: "Bam Adebayo", val: 0.8, all: [{"name": "Bam Adebayo", "val": 0.8}, {"name": "Dru Smith", "val": 0.6}, {"name": "Dewayne Dedmon", "val": 0.5}, {"name": "Jamaree Bouyea", "val": 0.5}, {"name": "Orlando Robinson", "val": 0.4}, {"name": "Kyle Lowry", "val": 0.4}, {"name": "Caleb Martin", "val": 0.4}, {"name": "Jimmy Butler", "val": 0.3}, {"name": "Udonis Haslem", "val": 0.3}, {"name": "Victor Oladipo", "val": 0.3}, {"name": "Haywood Highsmith", "val": 0.3}, {"name": "Cody Zeller", "val": 0.3}, {"name": "Tyler Herro", "val": 0.2}, {"name": "Omer Yurtseven", "val": 0.2}, {"name": "Kevin Love", "val": 0.2}, {"name": "Max Strus", "val": 0.2}, {"name": "Nikola Jović", "val": 0.1}, {"name": "Jamal Cain", "val": 0.1}, {"name": "Gabe Vincent", "val": 0.1}, {"name": "Duncan Robinson", "val": 0.0}] },
    },
    avail: [
      { name: "Max Strus", g: 80 },
      { name: "Bam Adebayo", g: 75 },
      { name: "Caleb Martin", g: 71 },
      { name: "Gabe Vincent", g: 68 },
      { name: "Tyler Herro", g: 67 },
      { name: "Jimmy Butler", g: 64 },
      { name: "Kyle Lowry", g: 55 },
      { name: "Haywood Highsmith", g: 54 },
      { name: "Duncan Robinson", g: 42 },
      { name: "Victor Oladipo", g: 42 },
      { name: "Orlando Robinson", g: 31 },
      { name: "Dewayne Dedmon", g: 30 },
      { name: "Kevin Love", g: 21 },
      { name: "Jamal Cain", g: 18 },
      { name: "Cody Zeller", g: 15 },
      { name: "Nikola Jović", g: 15 },
      { name: "Omer Yurtseven", g: 9 },
      { name: "Udonis Haslem", g: 7 },
      { name: "Dru Smith", g: 5 },
      { name: "Jamaree Bouyea", g: 4 },
    ]
  },

  "2023-24": {
    w: 46, l: 36,
    topW:   { pts: 142, opp: 82, against: "Portland Trail Blazers" },
    worstL: { pts: 110, opp: 143, against: "Boston Celtics" },
    conf_rank: 8,
    games: buildGames(
      "WLLLLWWWWWWWLWWLLLWLWLWWLWLWWWWLLWLWLWWWLLLLLLLWWLWWLWWWWWLWWLLLLWWLWLWLWWWLWLWLWW",
      ["Detroit Pistons", "Boston Celtics", "Minnesota Timberwolves", "Milwaukee Bucks", "Brooklyn Nets", "Washington Wizards", "Los Angeles Lakers", "Memphis Grizzlies", "Atlanta Hawks", "San Antonio Spurs", "Charlotte Hornets", "Brooklyn Nets", "Chicago Bulls", "Chicago Bulls", "Cleveland Cavaliers", "New York Knicks", "Brooklyn Nets", "Milwaukee Bucks", "Indiana Pacers", "Indiana Pacers", "Toronto Raptors", "Cleveland Cavaliers", "Charlotte Hornets", "Charlotte Hornets", "Chicago Bulls", "Chicago Bulls", "Minnesota Timberwolves", "Orlando Magic", "Atlanta Hawks", "Philadelphia 76ers", "Golden State Warriors", "Utah Jazz", "Los Angeles Clippers", "Los Angeles Lakers", "Phoenix Suns", "Houston Rockets", "Oklahoma City Thunder", "Orlando Magic", "Charlotte Hornets", "Brooklyn Nets", "Toronto Raptors", "Atlanta Hawks", "Orlando Magic", "Memphis Grizzlies", "Boston Celtics", "New York Knicks", "Phoenix Suns", "Sacramento Kings", "Washington Wizards", "Los Angeles Clippers", "Orlando Magic", "San Antonio Spurs", "Boston Celtics", "Milwaukee Bucks", "Philadelphia 76ers", "New Orleans Pelicans", "Sacramento Kings", "Portland Trail Blazers", "Denver Nuggets", "Utah Jazz", "Detroit Pistons", "Dallas Mavericks", "Oklahoma City Thunder", "Washington Wizards", "Denver Nuggets", "Detroit Pistons", "Detroit Pistons", "Philadelphia 76ers", "Cleveland Cavaliers", "New Orleans Pelicans", "Cleveland Cavaliers", "Golden State Warriors", "Portland Trail Blazers", "Washington Wizards", "New York Knicks", "Philadelphia 76ers", "Houston Rockets", "Indiana Pacers", "Atlanta Hawks", "Dallas Mavericks", "Toronto Raptors", "Toronto Raptors"],
      [103, 111, 90, 114, 105, 121, 108, 108, 117, 118, 111, 122, 97, 118, 129, 98, 97, 124, 142, 129, 112, 99, 116, 115, 116, 118, 108, 115, 122, 119, 114, 109, 104, 110, 97, 120, 120, 99, 104, 96, 97, 108, 87, 96, 110, 109, 105, 115, 110, 95, 121, 116, 106, 123, 109, 106, 121, 106, 97, 126, 118, 108, 100, 108, 88, 108, 104, 91, 107, 88, 121, 92, 142, 119, 109, 105, 119, 115, 117, 92, 125, 118],
      [1, -8, -16, -8, -4, 7, 1, 6, 8, 5, 6, 7, -5, 18, 33, -2, -15, -7, 10, -15, 9, -12, 2, 11, -8, 2, -4, 9, 9, 6, 12, -8, -17, 14, -16, 7, -8, 3, 17, 1, -24, -1, -18, -9, -33, -16, -13, 9, 8, -8, 26, 12, -4, 26, 5, 11, 11, 10, -6, 6, 8, -6, -7, -2, -12, 13, 3, -7, 3, -23, 37, -21, 60, 12, 10, -4, 15, -2, 6, -19, 22, 15]
    ),
    leaders: {
      pts: { name: "Tyler Herro", val: 20.8, all: [{"name": "Tyler Herro", "val": 20.8}, {"name": "Jimmy Butler", "val": 20.8}, {"name": "Bam Adebayo", "val": 19.3}, {"name": "Terry Rozier", "val": 16.4}, {"name": "Duncan Robinson", "val": 12.9}, {"name": "Jaime Jaquez Jr.", "val": 11.9}, {"name": "Caleb Martin", "val": 10.0}, {"name": "Josh Richardson", "val": 9.9}, {"name": "Kevin Love", "val": 8.8}, {"name": "Kyle Lowry", "val": 8.2}, {"name": "Nikola Jović", "val": 7.7}, {"name": "Haywood Highsmith", "val": 6.1}, {"name": "Patty Mills", "val": 5.8}, {"name": "Thomas Bryant", "val": 5.7}, {"name": "Delon Wright", "val": 5.4}, {"name": "Dru Smith", "val": 4.3}, {"name": "Jamal Cain", "val": 3.7}, {"name": "Orlando Robinson", "val": 2.8}, {"name": "Cole Swider", "val": 2.3}, {"name": "R.J. Hampton", "val": 1.3}, {"name": "Alondes Williams", "val": 0.7}] },
      reb: { name: "Bam Adebayo", val: 10.4, all: [{"name": "Bam Adebayo", "val": 10.4}, {"name": "Kevin Love", "val": 6.1}, {"name": "Tyler Herro", "val": 5.3}, {"name": "Jimmy Butler", "val": 5.3}, {"name": "Caleb Martin", "val": 4.4}, {"name": "Terry Rozier", "val": 4.2}, {"name": "Nikola Jović", "val": 4.2}, {"name": "Jaime Jaquez Jr.", "val": 3.8}, {"name": "Thomas Bryant", "val": 3.7}, {"name": "Kyle Lowry", "val": 3.5}, {"name": "Haywood Highsmith", "val": 3.2}, {"name": "Josh Richardson", "val": 2.8}, {"name": "Duncan Robinson", "val": 2.5}, {"name": "Orlando Robinson", "val": 2.3}, {"name": "Delon Wright", "val": 1.9}, {"name": "Dru Smith", "val": 1.6}, {"name": "Jamal Cain", "val": 1.4}, {"name": "Patty Mills", "val": 1.2}, {"name": "R.J. Hampton", "val": 0.8}, {"name": "Cole Swider", "val": 0.4}, {"name": "Alondes Williams", "val": 0.1}] },
      ast: { name: "Jimmy Butler", val: 5.0, all: [{"name": "Jimmy Butler", "val": 5.0}, {"name": "Terry Rozier", "val": 4.6}, {"name": "Tyler Herro", "val": 4.5}, {"name": "Kyle Lowry", "val": 4.0}, {"name": "Bam Adebayo", "val": 3.9}, {"name": "Duncan Robinson", "val": 2.8}, {"name": "Delon Wright", "val": 2.6}, {"name": "Jaime Jaquez Jr.", "val": 2.6}, {"name": "Josh Richardson", "val": 2.4}, {"name": "Caleb Martin", "val": 2.2}, {"name": "Kevin Love", "val": 2.1}, {"name": "Nikola Jović", "val": 2.0}, {"name": "Dru Smith", "val": 1.6}, {"name": "Patty Mills", "val": 1.5}, {"name": "Haywood Highsmith", "val": 1.1}, {"name": "R.J. Hampton", "val": 1.0}, {"name": "Orlando Robinson", "val": 0.9}, {"name": "Thomas Bryant", "val": 0.6}, {"name": "Jamal Cain", "val": 0.4}, {"name": "Cole Swider", "val": 0.3}, {"name": "Alondes Williams", "val": 0.0}] },
      stl: { name: "Delon Wright", val: 1.4, all: [{"name": "Delon Wright", "val": 1.4}, {"name": "Jimmy Butler", "val": 1.3}, {"name": "Kyle Lowry", "val": 1.1}, {"name": "Bam Adebayo", "val": 1.1}, {"name": "Jaime Jaquez Jr.", "val": 1.0}, {"name": "Terry Rozier", "val": 1.0}, {"name": "Dru Smith", "val": 1.0}, {"name": "Haywood Highsmith", "val": 0.8}, {"name": "Patty Mills", "val": 0.8}, {"name": "Caleb Martin", "val": 0.7}, {"name": "Tyler Herro", "val": 0.7}, {"name": "Duncan Robinson", "val": 0.7}, {"name": "Josh Richardson", "val": 0.6}, {"name": "Nikola Jović", "val": 0.5}, {"name": "Jamal Cain", "val": 0.4}, {"name": "Kevin Love", "val": 0.3}, {"name": "Thomas Bryant", "val": 0.3}, {"name": "Orlando Robinson", "val": 0.2}, {"name": "Cole Swider", "val": 0.1}, {"name": "R.J. Hampton", "val": 0.0}, {"name": "Alondes Williams", "val": 0.0}] },
      blk: { name: "Bam Adebayo", val: 0.9, all: [{"name": "Bam Adebayo", "val": 0.9}, {"name": "Caleb Martin", "val": 0.5}, {"name": "Haywood Highsmith", "val": 0.5}, {"name": "Kyle Lowry", "val": 0.4}, {"name": "Thomas Bryant", "val": 0.4}, {"name": "Dru Smith", "val": 0.3}, {"name": "Terry Rozier", "val": 0.3}, {"name": "Jaime Jaquez Jr.", "val": 0.3}, {"name": "Josh Richardson", "val": 0.3}, {"name": "Jimmy Butler", "val": 0.3}, {"name": "Nikola Jović", "val": 0.3}, {"name": "Orlando Robinson", "val": 0.2}, {"name": "Jamal Cain", "val": 0.2}, {"name": "Delon Wright", "val": 0.2}, {"name": "Kevin Love", "val": 0.2}, {"name": "Duncan Robinson", "val": 0.2}, {"name": "Tyler Herro", "val": 0.1}, {"name": "Cole Swider", "val": 0.1}, {"name": "Alondes Williams", "val": 0.1}, {"name": "Patty Mills", "val": 0.0}, {"name": "R.J. Hampton", "val": 0.0}] },
    },
    avail: [
      { name: "Jaime Jaquez Jr.", g: 75 },
      { name: "Bam Adebayo", g: 71 },
      { name: "Duncan Robinson", g: 68 },
      { name: "Haywood Highsmith", g: 66 },
      { name: "Caleb Martin", g: 64 },
      { name: "Jimmy Butler", g: 60 },
      { name: "Kevin Love", g: 55 },
      { name: "Nikola Jović", g: 46 },
      { name: "Josh Richardson", g: 43 },
      { name: "Tyler Herro", g: 42 },
      { name: "Thomas Bryant", g: 38 },
      { name: "Kyle Lowry", g: 37 },
      { name: "Orlando Robinson", g: 36 },
      { name: "Terry Rozier", g: 31 },
      { name: "Jamal Cain", g: 26 },
      { name: "Cole Swider", g: 18 },
      { name: "Delon Wright", g: 14 },
      { name: "Patty Mills", g: 13 },
      { name: "Dru Smith", g: 9 },
      { name: "R.J. Hampton", g: 8 },
      { name: "Alondes Williams", g: 7 },
    ]
  },

  "2024-25": {
    w: 37, l: 45,
    topW:   { pts: 153, opp: 104, against: "New Orleans Pelicans" },
    worstL: { pts: 100, opp: 136, against: "Utah Jazz" },
    conf_rank: 10,
    games: buildGames(
      "LWWLWLLLWLWLWWLWWLLWWWWLLLWWLWWLLLWWWLLLWLLWWLWLWLLLLWLLWWLWLLLLLLLLLLWWWWWWLLWLWL",
      ["Orlando Magic", "Charlotte Hornets", "Detroit Pistons", "New York Knicks", "Washington Wizards", "Sacramento Kings", "Phoenix Suns", "Denver Nuggets", "Minnesota Timberwolves", "Detroit Pistons", "Indiana Pacers", "Indiana Pacers", "Philadelphia 76ers", "Dallas Mavericks", "Milwaukee Bucks", "Charlotte Hornets", "Toronto Raptors", "Toronto Raptors", "Boston Celtics", "Los Angeles Lakers", "Phoenix Suns", "Cleveland Cavaliers", "Toronto Raptors", "Detroit Pistons", "Oklahoma City Thunder", "Orlando Magic", "Brooklyn Nets", "Orlando Magic", "Atlanta Hawks", "Houston Rockets", "New Orleans Pelicans", "Indiana Pacers", "Utah Jazz", "Sacramento Kings", "Golden State Warriors", "Utah Jazz", "Portland Trail Blazers", "Los Angeles Clippers", "Los Angeles Lakers", "Denver Nuggets", "San Antonio Spurs", "Portland Trail Blazers", "Milwaukee Bucks", "Brooklyn Nets", "Orlando Magic", "Cleveland Cavaliers", "San Antonio Spurs", "Chicago Bulls", "Philadelphia 76ers", "Brooklyn Nets", "Boston Celtics", "Oklahoma City Thunder", "Dallas Mavericks", "Toronto Raptors", "Milwaukee Bucks", "Atlanta Hawks", "Atlanta Hawks", "Indiana Pacers", "New York Knicks", "Washington Wizards", "Cleveland Cavaliers", "Minnesota Timberwolves", "Chicago Bulls", "Charlotte Hornets", "Los Angeles Clippers", "Boston Celtics", "Memphis Grizzlies", "New York Knicks", "Detroit Pistons", "Houston Rockets", "Charlotte Hornets", "Golden State Warriors", "Atlanta Hawks", "Philadelphia 76ers", "Washington Wizards", "Boston Celtics", "Memphis Grizzlies", "Milwaukee Bucks", "Philadelphia 76ers", "Chicago Bulls", "New Orleans Pelicans", "Washington Wizards"],
      [97, 114, 106, 107, 118, 110, 112, 122, 95, 121, 124, 110, 106, 123, 103, 98, 121, 116, 89, 134, 121, 122, 114, 124, 97, 114, 110, 89, 110, 104, 119, 115, 100, 118, 114, 97, 119, 98, 108, 113, 128, 107, 96, 106, 125, 106, 105, 124, 108, 86, 85, 101, 113, 120, 113, 86, 131, 125, 112, 106, 107, 104, 109, 102, 104, 91, 91, 95, 113, 98, 122, 112, 122, 118, 120, 124, 108, 115, 117, 111, 153, 118],
      [-19, 8, 8, -9, 20, -1, -3, -13, 1, -2, 13, -9, 17, 5, -3, 4, 10, -3, -19, 41, 10, 9, 10, -1, -7, -7, 15, 1, -10, 4, 11, -13, -36, -5, 16, 5, 21, -11, -9, -20, 21, -9, -29, 9, 6, -20, 2, -9, 7, -16, -18, -14, -5, 9, -7, -12, 22, 5, -4, 16, -5, -2, -5, -3, -15, -12, -34, -21, -3, -4, 17, 26, 10, 23, 26, 21, -2, -6, 12, -8, 49, -1]
    ),
    leaders: {
      pts: { name: "Tyler Herro", val: 23.9, all: [{"name": "Tyler Herro", "val": 23.9}, {"name": "Andrew Wiggins", "val": 19.0}, {"name": "Bam Adebayo", "val": 18.1}, {"name": "Jimmy Butler", "val": 17.0}, {"name": "Duncan Robinson", "val": 11.0}, {"name": "Nikola Jović", "val": 10.7}, {"name": "Terry Rozier", "val": 10.6}, {"name": "Davion Mitchell", "val": 10.3}, {"name": "Kel'el Ware", "val": 9.3}, {"name": "Jaime Jaquez Jr.", "val": 8.6}, {"name": "Alec Burks", "val": 7.3}, {"name": "Kyle Anderson", "val": 6.7}, {"name": "Haywood Highsmith", "val": 6.5}, {"name": "Dru Smith", "val": 6.2}, {"name": "Kevin Love", "val": 5.3}, {"name": "Pelle Larsson", "val": 4.6}, {"name": "Thomas Bryant", "val": 4.1}, {"name": "Josh Richardson", "val": 4.0}, {"name": "Keshad Johnson", "val": 2.7}, {"name": "Josh Christopher", "val": 2.0}, {"name": "Isaiah Stevens", "val": 0.0}] },
      reb: { name: "Bam Adebayo", val: 9.6, all: [{"name": "Bam Adebayo", "val": 9.6}, {"name": "Kel'el Ware", "val": 7.4}, {"name": "Tyler Herro", "val": 5.2}, {"name": "Jimmy Butler", "val": 5.2}, {"name": "Jaime Jaquez Jr.", "val": 4.4}, {"name": "Andrew Wiggins", "val": 4.2}, {"name": "Kevin Love", "val": 4.1}, {"name": "Nikola Jović", "val": 3.9}, {"name": "Kyle Anderson", "val": 3.8}, {"name": "Terry Rozier", "val": 3.7}, {"name": "Haywood Highsmith", "val": 3.4}, {"name": "Thomas Bryant", "val": 3.2}, {"name": "Davion Mitchell", "val": 2.7}, {"name": "Dru Smith", "val": 2.6}, {"name": "Alec Burks", "val": 2.5}, {"name": "Duncan Robinson", "val": 2.3}, {"name": "Keshad Johnson", "val": 1.8}, {"name": "Pelle Larsson", "val": 1.7}, {"name": "Josh Richardson", "val": 1.5}, {"name": "Isaiah Stevens", "val": 0.7}, {"name": "Josh Christopher", "val": 0.6}] },
      ast: { name: "Tyler Herro", val: 5.5, all: [{"name": "Tyler Herro", "val": 5.5}, {"name": "Davion Mitchell", "val": 5.3}, {"name": "Jimmy Butler", "val": 4.8}, {"name": "Bam Adebayo", "val": 4.3}, {"name": "Andrew Wiggins", "val": 3.3}, {"name": "Nikola Jović", "val": 2.8}, {"name": "Terry Rozier", "val": 2.6}, {"name": "Kyle Anderson", "val": 2.6}, {"name": "Jaime Jaquez Jr.", "val": 2.5}, {"name": "Duncan Robinson", "val": 2.4}, {"name": "Dru Smith", "val": 1.6}, {"name": "Josh Richardson", "val": 1.5}, {"name": "Haywood Highsmith", "val": 1.5}, {"name": "Pelle Larsson", "val": 1.2}, {"name": "Alec Burks", "val": 1.1}, {"name": "Kevin Love", "val": 1.0}, {"name": "Kel'el Ware", "val": 0.9}, {"name": "Josh Christopher", "val": 0.6}, {"name": "Thomas Bryant", "val": 0.4}, {"name": "Keshad Johnson", "val": 0.3}, {"name": "Isaiah Stevens", "val": 0.0}] },
      stl: { name: "Dru Smith", val: 1.5, all: [{"name": "Dru Smith", "val": 1.5}, {"name": "Davion Mitchell", "val": 1.4}, {"name": "Bam Adebayo", "val": 1.3}, {"name": "Andrew Wiggins", "val": 1.2}, {"name": "Jimmy Butler", "val": 1.1}, {"name": "Josh Richardson", "val": 1.0}, {"name": "Tyler Herro", "val": 0.9}, {"name": "Jaime Jaquez Jr.", "val": 0.9}, {"name": "Haywood Highsmith", "val": 0.9}, {"name": "Nikola Jović", "val": 0.8}, {"name": "Kevin Love", "val": 0.7}, {"name": "Kel'el Ware", "val": 0.6}, {"name": "Terry Rozier", "val": 0.6}, {"name": "Kyle Anderson", "val": 0.6}, {"name": "Alec Burks", "val": 0.6}, {"name": "Pelle Larsson", "val": 0.6}, {"name": "Duncan Robinson", "val": 0.5}, {"name": "Josh Christopher", "val": 0.4}, {"name": "Keshad Johnson", "val": 0.3}, {"name": "Isaiah Stevens", "val": 0.3}, {"name": "Thomas Bryant", "val": 0.1}] },
      blk: { name: "Kel'el Ware", val: 1.1, all: [{"name": "Kel'el Ware", "val": 1.1}, {"name": "Andrew Wiggins", "val": 1.0}, {"name": "Thomas Bryant", "val": 0.9}, {"name": "Bam Adebayo", "val": 0.7}, {"name": "Haywood Highsmith", "val": 0.5}, {"name": "Kyle Anderson", "val": 0.5}, {"name": "Jimmy Butler", "val": 0.4}, {"name": "Dru Smith", "val": 0.4}, {"name": "Davion Mitchell", "val": 0.3}, {"name": "Nikola Jović", "val": 0.3}, {"name": "Keshad Johnson", "val": 0.3}, {"name": "Tyler Herro", "val": 0.2}, {"name": "Josh Christopher", "val": 0.2}, {"name": "Kevin Love", "val": 0.2}, {"name": "Jaime Jaquez Jr.", "val": 0.2}, {"name": "Terry Rozier", "val": 0.2}, {"name": "Pelle Larsson", "val": 0.1}, {"name": "Alec Burks", "val": 0.1}, {"name": "Josh Richardson", "val": 0.1}, {"name": "Duncan Robinson", "val": 0.1}, {"name": "Isaiah Stevens", "val": 0.0}] },
    },
    avail: [
      { name: "Bam Adebayo", g: 78 },
      { name: "Tyler Herro", g: 77 },
      { name: "Haywood Highsmith", g: 74 },
      { name: "Duncan Robinson", g: 74 },
      { name: "Jaime Jaquez Jr.", g: 66 },
      { name: "Terry Rozier", g: 64 },
      { name: "Kel'el Ware", g: 64 },
      { name: "Pelle Larsson", g: 55 },
      { name: "Alec Burks", g: 49 },
      { name: "Nikola Jović", g: 46 },
      { name: "Davion Mitchell", g: 30 },
      { name: "Jimmy Butler", g: 25 },
      { name: "Kyle Anderson", g: 25 },
      { name: "Kevin Love", g: 23 },
      { name: "Andrew Wiggins", g: 17 },
      { name: "Keshad Johnson", g: 16 },
      { name: "Dru Smith", g: 14 },
      { name: "Josh Christopher", g: 14 },
      { name: "Thomas Bryant", g: 10 },
      { name: "Josh Richardson", g: 8 },
      { name: "Isaiah Stevens", g: 3 },
    ]
  },

  "2025-26": {
    w: 43, l: 39,
    topW:   { pts: 134, opp: 91, against: "Chicago Bulls" },
    worstL: { pts: 106, opp: 136, against: "Charlotte Hornets" },
    conf_rank: 10,
    games: buildGames(
      "LWWWLLWLWWWLLWWWWWWLWLLLLLWLLLWWWWLWLLLWLWLWLWWLWLWLLWLWWWLLWWWWWWWLLLLLWLLWLWLLWW",
      ["Orlando Magic", "Memphis Grizzlies", "New York Knicks", "Charlotte Hornets", "San Antonio Spurs", "Los Angeles Lakers", "Los Angeles Clippers", "Denver Nuggets", "Charlotte Hornets", "Portland Trail Blazers", "Cleveland Cavaliers", "Cleveland Cavaliers", "New York Knicks", "New York Knicks", "Golden State Warriors", "Chicago Bulls", "Philadelphia 76ers", "Dallas Mavericks", "Milwaukee Bucks", "Detroit Pistons", "Los Angeles Clippers", "Dallas Mavericks", "Orlando Magic", "Sacramento Kings", "Orlando Magic", "Toronto Raptors", "Brooklyn Nets", "Boston Celtics", "New York Knicks", "Toronto Raptors", "Atlanta Hawks", "Indiana Pacers", "Denver Nuggets", "Detroit Pistons", "Minnesota Timberwolves", "New Orleans Pelicans", "Minnesota Timberwolves", "Indiana Pacers", "Oklahoma City Thunder", "Phoenix Suns", "Boston Celtics", "Oklahoma City Thunder", "Golden State Warriors", "Sacramento Kings", "Portland Trail Blazers", "Utah Jazz", "Phoenix Suns", "Orlando Magic", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Atlanta Hawks", "Boston Celtics", "Washington Wizards", "Utah Jazz", "New Orleans Pelicans", "Atlanta Hawks", "Memphis Grizzlies", "Milwaukee Bucks", "Philadelphia 76ers", "Houston Rockets", "Brooklyn Nets", "Brooklyn Nets", "Charlotte Hornets", "Detroit Pistons", "Washington Wizards", "Milwaukee Bucks", "Orlando Magic", "Charlotte Hornets", "Los Angeles Lakers", "Houston Rockets", "San Antonio Spurs", "Cleveland Cavaliers", "Cleveland Cavaliers", "Indiana Pacers", "Philadelphia 76ers", "Boston Celtics", "Washington Wizards", "Toronto Raptors", "Toronto Raptors", "Washington Wizards", "Atlanta Hawks"],
      [121, 146, 115, 144, 101, 120, 120, 112, 126, 136, 140, 116, 132, 115, 110, 143, 127, 106, 106, 135, 140, 108, 105, 111, 108, 96, 106, 116, 125, 91, 126, 142, 147, 118, 115, 125, 94, 99, 112, 127, 114, 122, 112, 130, 110, 147, 111, 124, 116, 118, 134, 115, 96, 132, 111, 123, 128, 136, 117, 117, 115, 124, 126, 128, 121, 150, 112, 117, 106, 126, 122, 111, 120, 128, 118, 119, 129, 152, 95, 114, 140, 143],
      [-4, 32, 8, 27, -6, -10, 1, -10, 18, 5, 2, -14, -8, 2, 14, 36, 10, 4, 3, -3, 17, -10, -1, -16, -9, -10, 11, -13, -7, -21, 15, 26, 24, 6, -10, 19, -28, -24, -12, 6, -5, 2, -23, 13, -17, 31, 9, -9, 3, -7, 43, -12, -2, 31, -4, 12, 31, 16, -11, -7, 10, 26, 16, 8, 11, 21, 7, -4, -30, -8, -1, -25, 17, -21, -17, 10, -18, 16, -26, -14, 23, 26]
    ),
    leaders: {
      pts: { name: "Norman Powell", val: 21.7, all: [{"name": "Norman Powell", "val": 21.7}, {"name": "Tyler Herro", "val": 20.5}, {"name": "Bam Adebayo", "val": 20.1}, {"name": "Andrew Wiggins", "val": 15.4}, {"name": "Jaime Jaquez Jr.", "val": 15.4}, {"name": "Pelle Larsson", "val": 11.4}, {"name": "Kel'el Ware", "val": 11.1}, {"name": "Davion Mitchell", "val": 9.3}, {"name": "Simone Fontecchio", "val": 8.5}, {"name": "Nikola Jović", "val": 7.3}, {"name": "Kasparas Jakučionis", "val": 6.2}, {"name": "Dru Smith", "val": 5.6}, {"name": "Keshad Johnson", "val": 4.3}, {"name": "Myron Gardner", "val": 3.6}, {"name": "Jahmir Young", "val": 1.8}, {"name": "Trevor Keels", "val": 1.0}, {"name": "Vladislav Goldin", "val": 0.8}] },
      reb: { name: "Bam Adebayo", val: 10.0, all: [{"name": "Bam Adebayo", "val": 10.0}, {"name": "Kel'el Ware", "val": 9.0}, {"name": "Jaime Jaquez Jr.", "val": 5.0}, {"name": "Tyler Herro", "val": 4.8}, {"name": "Andrew Wiggins", "val": 4.8}, {"name": "Pelle Larsson", "val": 3.5}, {"name": "Norman Powell", "val": 3.5}, {"name": "Nikola Jović", "val": 3.3}, {"name": "Simone Fontecchio", "val": 3.0}, {"name": "Myron Gardner", "val": 2.7}, {"name": "Davion Mitchell", "val": 2.7}, {"name": "Kasparas Jakučionis", "val": 2.6}, {"name": "Dru Smith", "val": 2.5}, {"name": "Keshad Johnson", "val": 1.9}, {"name": "Vladislav Goldin", "val": 1.0}, {"name": "Jahmir Young", "val": 0.3}, {"name": "Trevor Keels", "val": 0.3}] },
      ast: { name: "Davion Mitchell", val: 6.5, all: [{"name": "Davion Mitchell", "val": 6.5}, {"name": "Jaime Jaquez Jr.", "val": 4.7}, {"name": "Tyler Herro", "val": 4.1}, {"name": "Pelle Larsson", "val": 3.4}, {"name": "Bam Adebayo", "val": 3.2}, {"name": "Andrew Wiggins", "val": 2.7}, {"name": "Kasparas Jakučionis", "val": 2.6}, {"name": "Dru Smith", "val": 2.6}, {"name": "Norman Powell", "val": 2.5}, {"name": "Nikola Jović", "val": 2.2}, {"name": "Simone Fontecchio", "val": 1.4}, {"name": "Myron Gardner", "val": 1.0}, {"name": "Kel'el Ware", "val": 0.7}, {"name": "Jahmir Young", "val": 0.6}, {"name": "Keshad Johnson", "val": 0.3}, {"name": "Vladislav Goldin", "val": 0.3}, {"name": "Trevor Keels", "val": 0.0}] },
      stl: { name: "Dru Smith", val: 1.4, all: [{"name": "Dru Smith", "val": 1.4}, {"name": "Bam Adebayo", "val": 1.2}, {"name": "Andrew Wiggins", "val": 1.1}, {"name": "Norman Powell", "val": 1.1}, {"name": "Davion Mitchell", "val": 1.0}, {"name": "Kel'el Ware", "val": 0.8}, {"name": "Tyler Herro", "val": 0.7}, {"name": "Pelle Larsson", "val": 0.7}, {"name": "Jaime Jaquez Jr.", "val": 0.7}, {"name": "Kasparas Jakučionis", "val": 0.6}, {"name": "Nikola Jović", "val": 0.6}, {"name": "Simone Fontecchio", "val": 0.5}, {"name": "Keshad Johnson", "val": 0.5}, {"name": "Myron Gardner", "val": 0.4}, {"name": "Jahmir Young", "val": 0.1}, {"name": "Trevor Keels", "val": 0.1}, {"name": "Vladislav Goldin", "val": 0.0}] },
      blk: { name: "Kel'el Ware", val: 1.1, all: [{"name": "Kel'el Ware", "val": 1.1}, {"name": "Andrew Wiggins", "val": 1.0}, {"name": "Bam Adebayo", "val": 0.7}, {"name": "Tyler Herro", "val": 0.4}, {"name": "Nikola Jović", "val": 0.4}, {"name": "Keshad Johnson", "val": 0.3}, {"name": "Vladislav Goldin", "val": 0.3}, {"name": "Dru Smith", "val": 0.3}, {"name": "Jaime Jaquez Jr.", "val": 0.3}, {"name": "Myron Gardner", "val": 0.2}, {"name": "Pelle Larsson", "val": 0.2}, {"name": "Norman Powell", "val": 0.2}, {"name": "Davion Mitchell", "val": 0.2}, {"name": "Kasparas Jakučionis", "val": 0.1}, {"name": "Simone Fontecchio", "val": 0.1}, {"name": "Jahmir Young", "val": 0.0}, {"name": "Trevor Keels", "val": 0.0}] },
    },
    avail: [
      { name: "Kel'el Ware", g: 77 },
      { name: "Jaime Jaquez Jr.", g: 75 },
      { name: "Bam Adebayo", g: 73 },
      { name: "Davion Mitchell", g: 70 },
      { name: "Pelle Larsson", g: 70 },
      { name: "Dru Smith", g: 70 },
      { name: "Simone Fontecchio", g: 70 },
      { name: "Andrew Wiggins", g: 68 },
      { name: "Norman Powell", g: 58 },
      { name: "Kasparas Jakučionis", g: 53 },
      { name: "Nikola Jović", g: 47 },
      { name: "Myron Gardner", g: 45 },
      { name: "Tyler Herro", g: 33 },
      { name: "Keshad Johnson", g: 32 },
      { name: "Jahmir Young", g: 14 },
      { name: "Vladislav Goldin", g: 9 },
      { name: "Trevor Keels", g: 8 },
    ]
  },

};
