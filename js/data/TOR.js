/* ================================================================
   TOR.js — Toronto Raptors · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Toronto Raptors",
  abbr:          "TOR",
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
    w: 27, l: 45,
    topW:   { pts: 130, opp: 77, against: "Golden State Warriors" },
    worstL: { pts: 105, opp: 129, against: "Detroit Pistons" },
    conf_rank: 12,
    games: buildGames(
      "LLLWLLLWLLWWWLWWLLLWWWLWWLLWWWWLLWLLLLLLLLLWLLLLWWLLWLLWWWWLWLLLWLLLLLLL",
      ["New Orleans Pelicans", "San Antonio Spurs", "Philadelphia 76ers", "New York Knicks", "New Orleans Pelicans", "Boston Celtics", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Portland Trail Blazers", "Charlotte Hornets", "Charlotte Hornets", "Dallas Mavericks", "Miami Heat", "Miami Heat", "Indiana Pacers", "Indiana Pacers", "Milwaukee Bucks", "Sacramento Kings", "Orlando Magic", "Orlando Magic", "Brooklyn Nets", "Atlanta Hawks", "Memphis Grizzlies", "Washington Wizards", "Boston Celtics", "Minnesota Timberwolves", "Milwaukee Bucks", "Milwaukee Bucks", "Minnesota Timberwolves", "Philadelphia 76ers", "Philadelphia 76ers", "Miami Heat", "Houston Rockets", "Detroit Pistons", "Boston Celtics", "Atlanta Hawks", "Charlotte Hornets", "Chicago Bulls", "Detroit Pistons", "Utah Jazz", "Cleveland Cavaliers", "Houston Rockets", "Denver Nuggets", "Phoenix Suns", "Portland Trail Blazers", "Detroit Pistons", "Oklahoma City Thunder", "Golden State Warriors", "Washington Wizards", "Los Angeles Lakers", "Chicago Bulls", "Cleveland Cavaliers", "New York Knicks", "Atlanta Hawks", "San Antonio Spurs", "Orlando Magic", "Oklahoma City Thunder", "Brooklyn Nets", "New York Knicks", "Cleveland Cavaliers", "Brooklyn Nets", "Denver Nuggets", "Utah Jazz", "Los Angeles Lakers", "Los Angeles Clippers", "Washington Wizards", "Memphis Grizzlies", "Los Angeles Clippers", "Chicago Bulls", "Dallas Mavericks", "Indiana Pacers"],
      [99, 114, 93, 100, 116, 114, 115, 144, 105, 111, 111, 116, 116, 102, 101, 107, 114, 108, 124, 115, 123, 123, 121, 128, 137, 106, 112, 124, 110, 86, 110, 102, 108, 122, 105, 125, 120, 104, 95, 112, 112, 105, 99, 135, 100, 117, 104, 103, 130, 103, 101, 113, 135, 96, 103, 117, 113, 112, 114, 103, 112, 103, 111, 102, 121, 100, 129, 99, 96, 102, 110, 113],
      [-14, -5, -7, 17, -4, -12, -8, 21, -1, -1, 3, 3, 23, -9, 20, 5, -15, -7, -2, 13, 15, 6, -11, 15, 22, -14, -4, 11, 14, 5, 7, -7, -8, 11, -24, -7, -1, -10, -23, -4, -3, -11, -18, 24, -4, -5, -14, -10, 53, 2, -9, -9, 20, -6, -5, 5, 11, 6, 11, -17, 16, -13, -10, -4, 7, -5, -2, -10, -19, -12, -4, -12]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 21.4, all: [{"name": "Pascal Siakam", "val": 21.4}, {"name": "Fred VanVleet", "val": 19.6}, {"name": "Norman Powell", "val": 19.6}, {"name": "Kyle Lowry", "val": 17.2}, {"name": "Gary Trent Jr.", "val": 16.2}, {"name": "OG Anunoby", "val": 15.9}, {"name": "Chris Boucher", "val": 13.6}, {"name": "Khem Birch", "val": 11.9}, {"name": "Henry Ellenson", "val": 7.5}, {"name": "Malachi Flynn", "val": 7.5}, {"name": "Jalen Harris", "val": 7.4}, {"name": "Terence Davis", "val": 6.9}, {"name": "Aron Baynes", "val": 6.1}, {"name": "DeAndre' Bembry", "val": 5.7}, {"name": "Freddie Gillespie", "val": 5.6}, {"name": "Stanley Johnson", "val": 4.4}, {"name": "Yuta Watanabe", "val": 4.4}, {"name": "Paul Watson", "val": 4.1}, {"name": "Rodney Hood", "val": 3.9}, {"name": "Matt Thomas", "val": 2.7}, {"name": "Alex Len", "val": 2.3}, {"name": "Patrick McCaw", "val": 1.0}] },
      reb: { name: "Khem Birch", val: 7.6, all: [{"name": "Khem Birch", "val": 7.6}, {"name": "Pascal Siakam", "val": 7.2}, {"name": "Chris Boucher", "val": 6.7}, {"name": "Henry Ellenson", "val": 6.0}, {"name": "OG Anunoby", "val": 5.5}, {"name": "Kyle Lowry", "val": 5.4}, {"name": "Aron Baynes", "val": 5.2}, {"name": "Freddie Gillespie", "val": 4.9}, {"name": "Fred VanVleet", "val": 4.2}, {"name": "Gary Trent Jr.", "val": 3.6}, {"name": "Yuta Watanabe", "val": 3.2}, {"name": "Norman Powell", "val": 3.0}, {"name": "DeAndre' Bembry", "val": 2.9}, {"name": "Malachi Flynn", "val": 2.5}, {"name": "Stanley Johnson", "val": 2.5}, {"name": "Terence Davis", "val": 1.9}, {"name": "Rodney Hood", "val": 1.8}, {"name": "Paul Watson", "val": 1.7}, {"name": "Alex Len", "val": 1.6}, {"name": "Jalen Harris", "val": 1.4}, {"name": "Matt Thomas", "val": 0.8}, {"name": "Patrick McCaw", "val": 0.6}] },
      ast: { name: "Kyle Lowry", val: 7.3, all: [{"name": "Kyle Lowry", "val": 7.3}, {"name": "Fred VanVleet", "val": 6.3}, {"name": "Pascal Siakam", "val": 4.5}, {"name": "Malachi Flynn", "val": 2.9}, {"name": "Henry Ellenson", "val": 2.5}, {"name": "OG Anunoby", "val": 2.2}, {"name": "DeAndre' Bembry", "val": 2.1}, {"name": "Khem Birch", "val": 1.9}, {"name": "Norman Powell", "val": 1.8}, {"name": "Stanley Johnson", "val": 1.5}, {"name": "Gary Trent Jr.", "val": 1.3}, {"name": "Jalen Harris", "val": 1.3}, {"name": "Chris Boucher", "val": 1.1}, {"name": "Terence Davis", "val": 1.1}, {"name": "Aron Baynes", "val": 0.9}, {"name": "Yuta Watanabe", "val": 0.8}, {"name": "Patrick McCaw", "val": 0.8}, {"name": "Paul Watson", "val": 0.6}, {"name": "Freddie Gillespie", "val": 0.5}, {"name": "Rodney Hood", "val": 0.4}, {"name": "Alex Len", "val": 0.4}, {"name": "Matt Thomas", "val": 0.3}] },
      stl: { name: "Fred VanVleet", val: 1.7, all: [{"name": "Fred VanVleet", "val": 1.7}, {"name": "OG Anunoby", "val": 1.5}, {"name": "Gary Trent Jr.", "val": 1.1}, {"name": "Norman Powell", "val": 1.1}, {"name": "Pascal Siakam", "val": 1.1}, {"name": "Kyle Lowry", "val": 1.0}, {"name": "DeAndre' Bembry", "val": 1.0}, {"name": "Stanley Johnson", "val": 0.9}, {"name": "Khem Birch", "val": 0.8}, {"name": "Malachi Flynn", "val": 0.8}, {"name": "Freddie Gillespie", "val": 0.7}, {"name": "Chris Boucher", "val": 0.6}, {"name": "Jalen Harris", "val": 0.6}, {"name": "Yuta Watanabe", "val": 0.5}, {"name": "Terence Davis", "val": 0.5}, {"name": "Patrick McCaw", "val": 0.4}, {"name": "Aron Baynes", "val": 0.3}, {"name": "Rodney Hood", "val": 0.2}, {"name": "Paul Watson", "val": 0.2}, {"name": "Alex Len", "val": 0.1}, {"name": "Matt Thomas", "val": 0.1}, {"name": "Henry Ellenson", "val": 0.0}] },
      blk: { name: "Chris Boucher", val: 1.9, all: [{"name": "Chris Boucher", "val": 1.9}, {"name": "Khem Birch", "val": 1.2}, {"name": "Freddie Gillespie", "val": 1.0}, {"name": "Alex Len", "val": 0.9}, {"name": "Pascal Siakam", "val": 0.7}, {"name": "Fred VanVleet", "val": 0.7}, {"name": "OG Anunoby", "val": 0.7}, {"name": "DeAndre' Bembry", "val": 0.4}, {"name": "Aron Baynes", "val": 0.4}, {"name": "Yuta Watanabe", "val": 0.4}, {"name": "Kyle Lowry", "val": 0.3}, {"name": "Stanley Johnson", "val": 0.3}, {"name": "Norman Powell", "val": 0.2}, {"name": "Gary Trent Jr.", "val": 0.2}, {"name": "Terence Davis", "val": 0.2}, {"name": "Rodney Hood", "val": 0.2}, {"name": "Malachi Flynn", "val": 0.1}, {"name": "Paul Watson", "val": 0.1}, {"name": "Matt Thomas", "val": 0.0}, {"name": "Henry Ellenson", "val": 0.0}, {"name": "Jalen Harris", "val": 0.0}, {"name": "Patrick McCaw", "val": 0.0}] },
    },
    avail: [
      { name: "Stanley Johnson", g: 61 },
      { name: "Chris Boucher", g: 60 },
      { name: "Pascal Siakam", g: 56 },
      { name: "Aron Baynes", g: 53 },
      { name: "Fred VanVleet", g: 52 },
      { name: "DeAndre' Bembry", g: 51 },
      { name: "Yuta Watanabe", g: 50 },
      { name: "Malachi Flynn", g: 47 },
      { name: "Kyle Lowry", g: 46 },
      { name: "OG Anunoby", g: 43 },
      { name: "Norman Powell", g: 42 },
      { name: "Terence Davis", g: 34 },
      { name: "Paul Watson", g: 27 },
      { name: "Matt Thomas", g: 26 },
      { name: "Freddie Gillespie", g: 20 },
      { name: "Khem Birch", g: 19 },
      { name: "Gary Trent Jr.", g: 17 },
      { name: "Rodney Hood", g: 17 },
      { name: "Jalen Harris", g: 13 },
      { name: "Alex Len", g: 7 },
      { name: "Patrick McCaw", g: 5 },
      { name: "Henry Ellenson", g: 2 },
    ]
  },

  "2021-22": {
    w: 48, l: 34,
    topW:   { pts: 131, opp: 91, against: "Indiana Pacers" },
    worstL: { pts: 99, opp: 144, against: "Cleveland Cavaliers" },
    conf_rank: 5,
    games: buildGames(
      "LWLLWWWWWLLLWLLLWLWLLLWWLWWLWLLWWWWWWLLWLLWLWLWWWWWWWWLLWLLWWLLLWWWWWLWLWWWWWLWWWL",
      ["Washington Wizards", "Boston Celtics", "Dallas Mavericks", "Chicago Bulls", "Indiana Pacers", "Orlando Magic", "Indiana Pacers", "New York Knicks", "Washington Wizards", "Cleveland Cavaliers", "Brooklyn Nets", "Boston Celtics", "Philadelphia 76ers", "Detroit Pistons", "Portland Trail Blazers", "Utah Jazz", "Sacramento Kings", "Golden State Warriors", "Memphis Grizzlies", "Indiana Pacers", "Boston Celtics", "Memphis Grizzlies", "Milwaukee Bucks", "Washington Wizards", "Oklahoma City Thunder", "New York Knicks", "Sacramento Kings", "Brooklyn Nets", "Golden State Warriors", "Cleveland Cavaliers", "Philadelphia 76ers", "Los Angeles Clippers", "New York Knicks", "San Antonio Spurs", "Milwaukee Bucks", "Utah Jazz", "New Orleans Pelicans", "Phoenix Suns", "Detroit Pistons", "Milwaukee Bucks", "Miami Heat", "Dallas Mavericks", "Washington Wizards", "Portland Trail Blazers", "Charlotte Hornets", "Chicago Bulls", "Miami Heat", "Atlanta Hawks", "Miami Heat", "Chicago Bulls", "Atlanta Hawks", "Charlotte Hornets", "Oklahoma City Thunder", "Houston Rockets", "Denver Nuggets", "New Orleans Pelicans", "Minnesota Timberwolves", "Charlotte Hornets", "Atlanta Hawks", "Brooklyn Nets", "Brooklyn Nets", "Detroit Pistons", "Orlando Magic", "Cleveland Cavaliers", "San Antonio Spurs", "Phoenix Suns", "Denver Nuggets", "Los Angeles Lakers", "Los Angeles Clippers", "Los Angeles Lakers", "Philadelphia 76ers", "Chicago Bulls", "Cleveland Cavaliers", "Indiana Pacers", "Boston Celtics", "Minnesota Timberwolves", "Orlando Magic", "Miami Heat", "Atlanta Hawks", "Philadelphia 76ers", "Houston Rockets", "New York Knicks"],
      [83, 115, 95, 108, 118, 110, 97, 113, 109, 101, 103, 88, 115, 121, 113, 103, 108, 104, 126, 97, 97, 91, 97, 102, 109, 90, 124, 129, 119, 99, 109, 116, 120, 129, 117, 122, 105, 95, 87, 103, 99, 98, 109, 105, 125, 105, 124, 106, 110, 127, 125, 116, 117, 139, 109, 90, 103, 93, 100, 133, 109, 106, 97, 96, 119, 117, 127, 114, 103, 123, 93, 99, 117, 131, 115, 125, 102, 109, 118, 119, 117, 94],
      [-15, 32, -8, -3, 18, 1, 3, 9, 9, -1, -13, -16, 6, -6, -5, -16, 19, -15, 13, -17, -12, -7, 4, 12, -1, 3, 23, -2, 19, -45, -5, 8, 15, 25, 6, 14, 4, -4, -16, 7, -5, -4, 4, -9, 12, -6, 4, 6, 4, 7, 11, 15, 19, 19, -1, -30, 12, -32, -27, 36, 1, -2, -6, -8, 15, 5, 12, 11, 3, -5, 5, -14, 13, 40, 3, 23, 13, -5, 10, 5, 2, -11]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 22.8, all: [{"name": "Pascal Siakam", "val": 22.8}, {"name": "Fred VanVleet", "val": 20.3}, {"name": "Gary Trent Jr.", "val": 18.3}, {"name": "OG Anunoby", "val": 17.1}, {"name": "Scottie Barnes", "val": 15.3}, {"name": "Chris Boucher", "val": 9.4}, {"name": "Precious Achiuwa", "val": 9.1}, {"name": "Goran Dragić", "val": 8.0}, {"name": "D.J. Wilson", "val": 7.5}, {"name": "Thaddeus Young", "val": 6.3}, {"name": "Juwan Morgan", "val": 5.0}, {"name": "Svi Mykhailiuk", "val": 4.6}, {"name": "Khem Birch", "val": 4.5}, {"name": "Malachi Flynn", "val": 4.3}, {"name": "Yuta Watanabe", "val": 4.3}, {"name": "Tremont Waters", "val": 4.0}, {"name": "Dalano Banton", "val": 3.2}, {"name": "Daniel Oturu", "val": 3.0}, {"name": "Armoni Brooks", "val": 2.6}, {"name": "Justin Champagnie", "val": 2.3}, {"name": "Isaac Bonga", "val": 0.8}, {"name": "David Johnson", "val": 0.0}, {"name": "Sam Dekker", "val": 0.0}] },
      reb: { name: "Pascal Siakam", val: 8.5, all: [{"name": "Pascal Siakam", "val": 8.5}, {"name": "Scottie Barnes", "val": 7.5}, {"name": "Precious Achiuwa", "val": 6.5}, {"name": "Chris Boucher", "val": 6.2}, {"name": "OG Anunoby", "val": 5.5}, {"name": "Fred VanVleet", "val": 4.4}, {"name": "Thaddeus Young", "val": 4.4}, {"name": "Khem Birch", "val": 4.3}, {"name": "Juwan Morgan", "val": 4.0}, {"name": "D.J. Wilson", "val": 4.0}, {"name": "Goran Dragić", "val": 2.8}, {"name": "Gary Trent Jr.", "val": 2.7}, {"name": "Yuta Watanabe", "val": 2.4}, {"name": "Tremont Waters", "val": 2.0}, {"name": "Justin Champagnie", "val": 2.0}, {"name": "Dalano Banton", "val": 1.9}, {"name": "Armoni Brooks", "val": 1.7}, {"name": "Daniel Oturu", "val": 1.7}, {"name": "Svi Mykhailiuk", "val": 1.6}, {"name": "Malachi Flynn", "val": 1.4}, {"name": "Isaac Bonga", "val": 0.5}, {"name": "David Johnson", "val": 0.0}, {"name": "Sam Dekker", "val": 0.0}] },
      ast: { name: "Fred VanVleet", val: 6.7, all: [{"name": "Fred VanVleet", "val": 6.7}, {"name": "Pascal Siakam", "val": 5.3}, {"name": "Scottie Barnes", "val": 3.5}, {"name": "Tremont Waters", "val": 3.5}, {"name": "OG Anunoby", "val": 2.6}, {"name": "Gary Trent Jr.", "val": 2.0}, {"name": "Goran Dragić", "val": 1.8}, {"name": "Thaddeus Young", "val": 1.7}, {"name": "Malachi Flynn", "val": 1.6}, {"name": "Dalano Banton", "val": 1.5}, {"name": "D.J. Wilson", "val": 1.3}, {"name": "Precious Achiuwa", "val": 1.1}, {"name": "Armoni Brooks", "val": 1.0}, {"name": "Khem Birch", "val": 1.0}, {"name": "Juwan Morgan", "val": 1.0}, {"name": "Svi Mykhailiuk", "val": 0.8}, {"name": "Yuta Watanabe", "val": 0.6}, {"name": "Chris Boucher", "val": 0.3}, {"name": "Justin Champagnie", "val": 0.3}, {"name": "Isaac Bonga", "val": 0.3}, {"name": "Daniel Oturu", "val": 0.0}, {"name": "David Johnson", "val": 0.0}, {"name": "Sam Dekker", "val": 0.0}] },
      stl: { name: "Tremont Waters", val: 2.0, all: [{"name": "Tremont Waters", "val": 2.0}, {"name": "Fred VanVleet", "val": 1.7}, {"name": "Gary Trent Jr.", "val": 1.7}, {"name": "OG Anunoby", "val": 1.5}, {"name": "Pascal Siakam", "val": 1.3}, {"name": "D.J. Wilson", "val": 1.3}, {"name": "Thaddeus Young", "val": 1.2}, {"name": "Scottie Barnes", "val": 1.1}, {"name": "Goran Dragić", "val": 1.0}, {"name": "Chris Boucher", "val": 0.6}, {"name": "Malachi Flynn", "val": 0.5}, {"name": "Isaac Bonga", "val": 0.5}, {"name": "Armoni Brooks", "val": 0.5}, {"name": "Khem Birch", "val": 0.5}, {"name": "Svi Mykhailiuk", "val": 0.5}, {"name": "Precious Achiuwa", "val": 0.5}, {"name": "Dalano Banton", "val": 0.4}, {"name": "Yuta Watanabe", "val": 0.3}, {"name": "Justin Champagnie", "val": 0.2}, {"name": "Daniel Oturu", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "David Johnson", "val": 0.0}, {"name": "Sam Dekker", "val": 0.0}] },
      blk: { name: "Chris Boucher", val: 0.9, all: [{"name": "Chris Boucher", "val": 0.9}, {"name": "Daniel Oturu", "val": 0.7}, {"name": "Scottie Barnes", "val": 0.7}, {"name": "Precious Achiuwa", "val": 0.6}, {"name": "Pascal Siakam", "val": 0.6}, {"name": "Fred VanVleet", "val": 0.5}, {"name": "Khem Birch", "val": 0.5}, {"name": "OG Anunoby", "val": 0.5}, {"name": "Thaddeus Young", "val": 0.4}, {"name": "Yuta Watanabe", "val": 0.4}, {"name": "Gary Trent Jr.", "val": 0.3}, {"name": "D.J. Wilson", "val": 0.3}, {"name": "Goran Dragić", "val": 0.2}, {"name": "Armoni Brooks", "val": 0.2}, {"name": "Dalano Banton", "val": 0.2}, {"name": "Svi Mykhailiuk", "val": 0.1}, {"name": "Malachi Flynn", "val": 0.1}, {"name": "Justin Champagnie", "val": 0.1}, {"name": "Isaac Bonga", "val": 0.1}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "Tremont Waters", "val": 0.0}, {"name": "David Johnson", "val": 0.0}, {"name": "Sam Dekker", "val": 0.0}] },
    },
    avail: [
      { name: "Chris Boucher", g: 80 },
      { name: "Scottie Barnes", g: 74 },
      { name: "Precious Achiuwa", g: 73 },
      { name: "Gary Trent Jr.", g: 70 },
      { name: "Pascal Siakam", g: 68 },
      { name: "Fred VanVleet", g: 65 },
      { name: "Dalano Banton", g: 64 },
      { name: "Svi Mykhailiuk", g: 56 },
      { name: "Khem Birch", g: 55 },
      { name: "OG Anunoby", g: 48 },
      { name: "Malachi Flynn", g: 44 },
      { name: "Yuta Watanabe", g: 38 },
      { name: "Justin Champagnie", g: 36 },
      { name: "Thaddeus Young", g: 26 },
      { name: "Isaac Bonga", g: 15 },
      { name: "Armoni Brooks", g: 13 },
      { name: "Goran Dragić", g: 5 },
      { name: "D.J. Wilson", g: 4 },
      { name: "Daniel Oturu", g: 3 },
      { name: "Tremont Waters", g: 2 },
      { name: "David Johnson", g: 2 },
      { name: "Juwan Morgan", g: 1 },
      { name: "Sam Dekker", g: 1 },
    ]
  },

  "2022-23": {
    w: 41, l: 41,
    topW:   { pts: 143, opp: 100, against: "San Antonio Spurs" },
    worstL: { pts: 93, opp: 118, against: "Cleveland Cavaliers" },
    conf_rank: 9,
    games: buildGames(
      "WLLWWLWWLWLWLLWWLLWWLLWLWLLLLLLWWLLWLLLWWWLWLLLWWLWLLWWWLWWWWLWLWLLLWWWLLWWWLWWLLW",
      ["Cleveland Cavaliers", "Brooklyn Nets", "Miami Heat", "Miami Heat", "Philadelphia 76ers", "Philadelphia 76ers", "Atlanta Hawks", "San Antonio Spurs", "Dallas Mavericks", "Chicago Bulls", "Chicago Bulls", "Houston Rockets", "Oklahoma City Thunder", "Indiana Pacers", "Detroit Pistons", "Miami Heat", "Atlanta Hawks", "Brooklyn Nets", "Dallas Mavericks", "Cleveland Cavaliers", "New Orleans Pelicans", "Brooklyn Nets", "Orlando Magic", "Boston Celtics", "Los Angeles Lakers", "Orlando Magic", "Orlando Magic", "Sacramento Kings", "Brooklyn Nets", "Golden State Warriors", "Philadelphia 76ers", "New York Knicks", "Cleveland Cavaliers", "Los Angeles Clippers", "Memphis Grizzlies", "Phoenix Suns", "Indiana Pacers", "Milwaukee Bucks", "New York Knicks", "Portland Trail Blazers", "Charlotte Hornets", "Charlotte Hornets", "Atlanta Hawks", "New York Knicks", "Milwaukee Bucks", "Minnesota Timberwolves", "Boston Celtics", "New York Knicks", "Sacramento Kings", "Golden State Warriors", "Portland Trail Blazers", "Phoenix Suns", "Utah Jazz", "Houston Rockets", "Memphis Grizzlies", "San Antonio Spurs", "Utah Jazz", "Detroit Pistons", "Orlando Magic", "New Orleans Pelicans", "Detroit Pistons", "Cleveland Cavaliers", "Chicago Bulls", "Washington Wizards", "Washington Wizards", "Denver Nuggets", "Los Angeles Clippers", "Los Angeles Lakers", "Denver Nuggets", "Oklahoma City Thunder", "Minnesota Timberwolves", "Milwaukee Bucks", "Indiana Pacers", "Detroit Pistons", "Washington Wizards", "Miami Heat", "Philadelphia 76ers", "Charlotte Hornets", "Charlotte Hornets", "Boston Celtics", "Boston Celtics", "Milwaukee Bucks"],
      [108, 105, 109, 98, 119, 90, 139, 143, 110, 113, 97, 116, 113, 104, 115, 112, 122, 98, 105, 100, 108, 105, 121, 110, 126, 109, 99, 123, 116, 110, 101, 113, 118, 113, 106, 113, 114, 101, 108, 117, 132, 124, 103, 123, 122, 126, 104, 125, 113, 117, 123, 106, 128, 117, 106, 112, 116, 119, 123, 115, 95, 93, 104, 108, 116, 113, 100, 112, 125, 128, 122, 111, 114, 118, 114, 106, 110, 128, 120, 93, 102, 121],
      [3, -4, -3, 8, 10, -22, 30, 43, -1, 9, -14, 7, -19, -14, 4, 8, -2, -14, 5, 12, -18, -9, 13, -6, 13, -4, -12, -1, -3, -16, -3, 7, 11, -11, -13, 9, -8, -3, -4, 12, 12, 10, -11, 2, -8, -2, -2, 9, 18, -12, 18, -8, -3, 6, 3, 14, -6, 1, 10, 5, 4, -25, 6, -11, 7, -5, -8, -10, 15, 17, 15, -7, -4, 21, 10, 14, -7, 20, 20, -4, -19, 16]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 24.2, all: [{"name": "Pascal Siakam", "val": 24.2}, {"name": "Fred VanVleet", "val": 19.3}, {"name": "Gary Trent Jr.", "val": 17.4}, {"name": "OG Anunoby", "val": 16.8}, {"name": "Scottie Barnes", "val": 15.3}, {"name": "Jakob Poeltl", "val": 13.1}, {"name": "Chris Boucher", "val": 9.4}, {"name": "Precious Achiuwa", "val": 9.2}, {"name": "Otto Porter Jr.", "val": 5.5}, {"name": "Dalano Banton", "val": 4.6}, {"name": "Malachi Flynn", "val": 4.6}, {"name": "Will Barton", "val": 4.5}, {"name": "Thaddeus Young", "val": 4.4}, {"name": "Christian Koloko", "val": 3.1}, {"name": "Juancho Hernangómez", "val": 2.9}, {"name": "Jeff Dowtin Jr.", "val": 2.4}, {"name": "Khem Birch", "val": 2.2}, {"name": "Ron Harper Jr.", "val": 2.2}, {"name": "Justin Champagnie", "val": 2.0}, {"name": "Joe Wieskamp", "val": 1.0}] },
      reb: { name: "Jakob Poeltl", val: 9.1, all: [{"name": "Jakob Poeltl", "val": 9.1}, {"name": "Pascal Siakam", "val": 7.8}, {"name": "Scottie Barnes", "val": 6.6}, {"name": "Precious Achiuwa", "val": 6.0}, {"name": "Chris Boucher", "val": 5.5}, {"name": "OG Anunoby", "val": 5.0}, {"name": "Fred VanVleet", "val": 4.1}, {"name": "Thaddeus Young", "val": 3.1}, {"name": "Christian Koloko", "val": 2.9}, {"name": "Juancho Hernangómez", "val": 2.9}, {"name": "Gary Trent Jr.", "val": 2.6}, {"name": "Otto Porter Jr.", "val": 2.4}, {"name": "Will Barton", "val": 1.6}, {"name": "Dalano Banton", "val": 1.5}, {"name": "Malachi Flynn", "val": 1.4}, {"name": "Khem Birch", "val": 1.3}, {"name": "Justin Champagnie", "val": 1.3}, {"name": "Jeff Dowtin Jr.", "val": 0.9}, {"name": "Ron Harper Jr.", "val": 0.8}, {"name": "Joe Wieskamp", "val": 0.4}] },
      ast: { name: "Fred VanVleet", val: 7.2, all: [{"name": "Fred VanVleet", "val": 7.2}, {"name": "Pascal Siakam", "val": 5.8}, {"name": "Scottie Barnes", "val": 4.8}, {"name": "Jakob Poeltl", "val": 2.2}, {"name": "OG Anunoby", "val": 2.0}, {"name": "Gary Trent Jr.", "val": 1.6}, {"name": "Thaddeus Young", "val": 1.4}, {"name": "Malachi Flynn", "val": 1.3}, {"name": "Dalano Banton", "val": 1.2}, {"name": "Jeff Dowtin Jr.", "val": 1.2}, {"name": "Will Barton", "val": 1.1}, {"name": "Otto Porter Jr.", "val": 1.0}, {"name": "Precious Achiuwa", "val": 0.9}, {"name": "Juancho Hernangómez", "val": 0.6}, {"name": "Christian Koloko", "val": 0.5}, {"name": "Chris Boucher", "val": 0.4}, {"name": "Khem Birch", "val": 0.4}, {"name": "Ron Harper Jr.", "val": 0.4}, {"name": "Joe Wieskamp", "val": 0.3}, {"name": "Justin Champagnie", "val": 0.3}] },
      stl: { name: "OG Anunoby", val: 1.9, all: [{"name": "OG Anunoby", "val": 1.9}, {"name": "Fred VanVleet", "val": 1.8}, {"name": "Gary Trent Jr.", "val": 1.6}, {"name": "Otto Porter Jr.", "val": 1.4}, {"name": "Jakob Poeltl", "val": 1.2}, {"name": "Scottie Barnes", "val": 1.1}, {"name": "Thaddeus Young", "val": 1.0}, {"name": "Pascal Siakam", "val": 0.9}, {"name": "Will Barton", "val": 0.7}, {"name": "Precious Achiuwa", "val": 0.6}, {"name": "Chris Boucher", "val": 0.6}, {"name": "Jeff Dowtin Jr.", "val": 0.4}, {"name": "Dalano Banton", "val": 0.4}, {"name": "Juancho Hernangómez", "val": 0.4}, {"name": "Malachi Flynn", "val": 0.4}, {"name": "Christian Koloko", "val": 0.4}, {"name": "Khem Birch", "val": 0.3}, {"name": "Joe Wieskamp", "val": 0.0}, {"name": "Ron Harper Jr.", "val": 0.0}, {"name": "Justin Champagnie", "val": 0.0}] },
      blk: { name: "Jakob Poeltl", val: 1.3, all: [{"name": "Jakob Poeltl", "val": 1.3}, {"name": "Christian Koloko", "val": 1.0}, {"name": "Scottie Barnes", "val": 0.8}, {"name": "Chris Boucher", "val": 0.8}, {"name": "OG Anunoby", "val": 0.7}, {"name": "Fred VanVleet", "val": 0.6}, {"name": "Pascal Siakam", "val": 0.5}, {"name": "Precious Achiuwa", "val": 0.5}, {"name": "Dalano Banton", "val": 0.4}, {"name": "Khem Birch", "val": 0.3}, {"name": "Gary Trent Jr.", "val": 0.2}, {"name": "Will Barton", "val": 0.2}, {"name": "Jeff Dowtin Jr.", "val": 0.1}, {"name": "Ron Harper Jr.", "val": 0.1}, {"name": "Juancho Hernangómez", "val": 0.1}, {"name": "Malachi Flynn", "val": 0.1}, {"name": "Thaddeus Young", "val": 0.1}, {"name": "Joe Wieskamp", "val": 0.0}, {"name": "Otto Porter Jr.", "val": 0.0}, {"name": "Justin Champagnie", "val": 0.0}] },
    },
    avail: [
      { name: "Scottie Barnes", g: 77 },
      { name: "Chris Boucher", g: 76 },
      { name: "Pascal Siakam", g: 71 },
      { name: "Fred VanVleet", g: 69 },
      { name: "OG Anunoby", g: 67 },
      { name: "Gary Trent Jr.", g: 66 },
      { name: "Christian Koloko", g: 58 },
      { name: "Precious Achiuwa", g: 55 },
      { name: "Thaddeus Young", g: 54 },
      { name: "Malachi Flynn", g: 53 },
      { name: "Juancho Hernangómez", g: 42 },
      { name: "Dalano Banton", g: 31 },
      { name: "Jakob Poeltl", g: 26 },
      { name: "Jeff Dowtin Jr.", g: 25 },
      { name: "Khem Birch", g: 20 },
      { name: "Will Barton", g: 16 },
      { name: "Joe Wieskamp", g: 9 },
      { name: "Ron Harper Jr.", g: 9 },
      { name: "Otto Porter Jr.", g: 8 },
      { name: "Justin Champagnie", g: 3 },
    ]
  },

  "2023-24": {
    w: 25, l: 57,
    topW:   { pts: 132, opp: 102, against: "Washington Wizards" },
    worstL: { pts: 85, opp: 133, against: "Minnesota Timberwolves" },
    conf_rank: 12,
    games: buildGames(
      "WLLLWLWWLWLLWLWWLLWLLLLWLWLLLWLLWWLWLLLLWLLLLLWLLLWWLLLWWWLLWLLLLLLLLLLLLLLLWWLLLL",
      ["Minnesota Timberwolves", "Chicago Bulls", "Philadelphia 76ers", "Portland Trail Blazers", "Milwaukee Bucks", "Philadelphia 76ers", "San Antonio Spurs", "Dallas Mavericks", "Boston Celtics", "Washington Wizards", "Milwaukee Bucks", "Boston Celtics", "Detroit Pistons", "Orlando Magic", "Indiana Pacers", "Chicago Bulls", "Cleveland Cavaliers", "Brooklyn Nets", "Phoenix Suns", "New York Knicks", "Miami Heat", "Charlotte Hornets", "New York Knicks", "Atlanta Hawks", "Atlanta Hawks", "Charlotte Hornets", "Denver Nuggets", "Philadelphia 76ers", "Utah Jazz", "Washington Wizards", "Boston Celtics", "Detroit Pistons", "Cleveland Cavaliers", "Memphis Grizzlies", "Sacramento Kings", "Golden State Warriors", "Los Angeles Lakers", "Los Angeles Clippers", "Utah Jazz", "Boston Celtics", "Miami Heat", "Chicago Bulls", "New York Knicks", "Memphis Grizzlies", "Los Angeles Clippers", "Atlanta Hawks", "Chicago Bulls", "Houston Rockets", "Oklahoma City Thunder", "New Orleans Pelicans", "Charlotte Hornets", "Houston Rockets", "Cleveland Cavaliers", "San Antonio Spurs", "Indiana Pacers", "Brooklyn Nets", "Atlanta Hawks", "Indiana Pacers", "Dallas Mavericks", "Golden State Warriors", "Charlotte Hornets", "New Orleans Pelicans", "Phoenix Suns", "Portland Trail Blazers", "Denver Nuggets", "Detroit Pistons", "Orlando Magic", "Orlando Magic", "Sacramento Kings", "Oklahoma City Thunder", "Washington Wizards", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Los Angeles Lakers", "Minnesota Timberwolves", "Milwaukee Bucks", "Washington Wizards", "Indiana Pacers", "Brooklyn Nets", "Miami Heat", "Miami Heat"],
      [97, 103, 107, 91, 130, 99, 123, 127, 94, 111, 112, 105, 142, 107, 132, 121, 102, 103, 112, 106, 103, 116, 130, 135, 104, 114, 104, 111, 119, 132, 118, 127, 124, 116, 130, 133, 131, 120, 113, 96, 121, 110, 100, 100, 107, 125, 118, 106, 127, 100, 123, 107, 95, 99, 125, 121, 123, 130, 125, 105, 111, 98, 113, 118, 119, 104, 103, 96, 89, 103, 109, 88, 101, 120, 111, 85, 117, 130, 123, 102, 103, 103],
      [3, -1, -7, -8, 19, -15, 7, 11, -23, 4, -16, -3, 29, -19, 1, 13, -3, -12, 7, -13, -9, -3, -6, 7, -21, 15, -9, -10, -7, 30, -2, -2, 3, 5, -5, 15, -1, -6, -32, -9, 24, -6, -26, -8, -20, -1, 11, -29, -8, -38, 6, 3, -24, -23, -2, 28, 2, 8, -11, -15, 5, -41, -7, -10, -6, -9, -10, -15, -34, -20, -3, -8, -44, -15, -17, -48, 6, 8, -17, -4, -22, -15]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 22.2, all: [{"name": "Pascal Siakam", "val": 22.2}, {"name": "RJ Barrett", "val": 21.8}, {"name": "Scottie Barnes", "val": 19.9}, {"name": "Immanuel Quickley", "val": 18.6}, {"name": "OG Anunoby", "val": 15.1}, {"name": "Dennis Schröder", "val": 13.7}, {"name": "Gary Trent Jr.", "val": 13.7}, {"name": "Kelly Olynyk", "val": 12.7}, {"name": "Jakob Poeltl", "val": 11.1}, {"name": "Bruce Brown", "val": 9.6}, {"name": "Gradey Dick", "val": 8.5}, {"name": "Jordan Nwora", "val": 7.9}, {"name": "Precious Achiuwa", "val": 7.7}, {"name": "Javon Freeman-Liberty", "val": 7.0}, {"name": "Ochai Agbaji", "val": 6.7}, {"name": "Jahmi'us Ramsey", "val": 6.7}, {"name": "Chris Boucher", "val": 6.4}, {"name": "Malachi Flynn", "val": 5.1}, {"name": "Thaddeus Young", "val": 5.0}, {"name": "Kobi Simmons", "val": 5.0}, {"name": "Jontay Porter", "val": 4.4}, {"name": "Jalen McDaniels", "val": 3.4}, {"name": "Garrett Temple", "val": 3.3}, {"name": "D.J. Carton", "val": 2.8}, {"name": "Malik Williams", "val": 2.7}, {"name": "Otto Porter Jr.", "val": 2.6}, {"name": "Mouhamadou Gueye", "val": 2.4}, {"name": "Markquis Nowell", "val": 2.0}, {"name": "Ron Harper Jr.", "val": 0.0}, {"name": "Kira Lewis Jr.", "val": 0.0}] },
      reb: { name: "Jakob Poeltl", val: 8.6, all: [{"name": "Jakob Poeltl", "val": 8.6}, {"name": "Scottie Barnes", "val": 8.2}, {"name": "RJ Barrett", "val": 6.4}, {"name": "Pascal Siakam", "val": 6.3}, {"name": "Kelly Olynyk", "val": 5.6}, {"name": "Malik Williams", "val": 5.4}, {"name": "Precious Achiuwa", "val": 5.4}, {"name": "Immanuel Quickley", "val": 4.8}, {"name": "Chris Boucher", "val": 4.1}, {"name": "OG Anunoby", "val": 3.9}, {"name": "Bruce Brown", "val": 3.8}, {"name": "Jordan Nwora", "val": 3.4}, {"name": "Ochai Agbaji", "val": 3.3}, {"name": "Thaddeus Young", "val": 3.3}, {"name": "Jontay Porter", "val": 3.2}, {"name": "Javon Freeman-Liberty", "val": 3.2}, {"name": "Jahmi'us Ramsey", "val": 3.1}, {"name": "Dennis Schröder", "val": 2.7}, {"name": "Gary Trent Jr.", "val": 2.6}, {"name": "Gradey Dick", "val": 2.2}, {"name": "Malachi Flynn", "val": 2.1}, {"name": "Mouhamadou Gueye", "val": 2.1}, {"name": "Markquis Nowell", "val": 2.0}, {"name": "Otto Porter Jr.", "val": 1.9}, {"name": "Kobi Simmons", "val": 1.8}, {"name": "Garrett Temple", "val": 1.7}, {"name": "Jalen McDaniels", "val": 1.6}, {"name": "D.J. Carton", "val": 1.0}, {"name": "Ron Harper Jr.", "val": 0.0}, {"name": "Kira Lewis Jr.", "val": 0.0}] },
      ast: { name: "Immanuel Quickley", val: 6.8, all: [{"name": "Immanuel Quickley", "val": 6.8}, {"name": "Scottie Barnes", "val": 6.1}, {"name": "Dennis Schröder", "val": 6.1}, {"name": "Pascal Siakam", "val": 4.9}, {"name": "Kelly Olynyk", "val": 4.6}, {"name": "RJ Barrett", "val": 4.1}, {"name": "Kobi Simmons", "val": 3.0}, {"name": "OG Anunoby", "val": 2.7}, {"name": "Bruce Brown", "val": 2.7}, {"name": "Jakob Poeltl", "val": 2.5}, {"name": "Malachi Flynn", "val": 2.4}, {"name": "Jontay Porter", "val": 2.3}, {"name": "Thaddeus Young", "val": 2.2}, {"name": "Markquis Nowell", "val": 2.0}, {"name": "Javon Freeman-Liberty", "val": 1.8}, {"name": "Precious Achiuwa", "val": 1.8}, {"name": "Gary Trent Jr.", "val": 1.7}, {"name": "Ochai Agbaji", "val": 1.3}, {"name": "Jordan Nwora", "val": 1.3}, {"name": "Jahmi'us Ramsey", "val": 1.1}, {"name": "Gradey Dick", "val": 1.1}, {"name": "Ron Harper Jr.", "val": 1.0}, {"name": "Garrett Temple", "val": 1.0}, {"name": "D.J. Carton", "val": 0.8}, {"name": "Jalen McDaniels", "val": 0.7}, {"name": "Chris Boucher", "val": 0.5}, {"name": "Otto Porter Jr.", "val": 0.5}, {"name": "Mouhamadou Gueye", "val": 0.5}, {"name": "Malik Williams", "val": 0.3}, {"name": "Kira Lewis Jr.", "val": 0.0}] },
      stl: { name: "Kobi Simmons", val: 1.5, all: [{"name": "Kobi Simmons", "val": 1.5}, {"name": "Kelly Olynyk", "val": 1.3}, {"name": "Scottie Barnes", "val": 1.3}, {"name": "Gary Trent Jr.", "val": 1.1}, {"name": "OG Anunoby", "val": 1.0}, {"name": "Markquis Nowell", "val": 1.0}, {"name": "Jahmi'us Ramsey", "val": 1.0}, {"name": "Immanuel Quickley", "val": 0.9}, {"name": "Dennis Schröder", "val": 0.9}, {"name": "Jontay Porter", "val": 0.8}, {"name": "Thaddeus Young", "val": 0.8}, {"name": "Pascal Siakam", "val": 0.8}, {"name": "Jakob Poeltl", "val": 0.7}, {"name": "Bruce Brown", "val": 0.7}, {"name": "Ochai Agbaji", "val": 0.7}, {"name": "Malachi Flynn", "val": 0.6}, {"name": "Jordan Nwora", "val": 0.6}, {"name": "Precious Achiuwa", "val": 0.6}, {"name": "Gradey Dick", "val": 0.6}, {"name": "RJ Barrett", "val": 0.6}, {"name": "Javon Freeman-Liberty", "val": 0.5}, {"name": "Malik Williams", "val": 0.4}, {"name": "Jalen McDaniels", "val": 0.4}, {"name": "Garrett Temple", "val": 0.4}, {"name": "Chris Boucher", "val": 0.3}, {"name": "Otto Porter Jr.", "val": 0.3}, {"name": "Mouhamadou Gueye", "val": 0.3}, {"name": "D.J. Carton", "val": 0.3}, {"name": "Ron Harper Jr.", "val": 0.0}, {"name": "Kira Lewis Jr.", "val": 0.0}] },
      blk: { name: "Mouhamadou Gueye", val: 1.6, all: [{"name": "Mouhamadou Gueye", "val": 1.6}, {"name": "Scottie Barnes", "val": 1.5}, {"name": "Jakob Poeltl", "val": 1.5}, {"name": "Jontay Porter", "val": 0.8}, {"name": "Ochai Agbaji", "val": 0.6}, {"name": "Malik Williams", "val": 0.6}, {"name": "Kelly Olynyk", "val": 0.6}, {"name": "Chris Boucher", "val": 0.5}, {"name": "Precious Achiuwa", "val": 0.5}, {"name": "Kobi Simmons", "val": 0.5}, {"name": "OG Anunoby", "val": 0.5}, {"name": "RJ Barrett", "val": 0.4}, {"name": "Jordan Nwora", "val": 0.4}, {"name": "Pascal Siakam", "val": 0.3}, {"name": "Otto Porter Jr.", "val": 0.3}, {"name": "Bruce Brown", "val": 0.3}, {"name": "Malachi Flynn", "val": 0.2}, {"name": "Dennis Schröder", "val": 0.2}, {"name": "Immanuel Quickley", "val": 0.2}, {"name": "Javon Freeman-Liberty", "val": 0.2}, {"name": "Thaddeus Young", "val": 0.1}, {"name": "Gary Trent Jr.", "val": 0.1}, {"name": "Jalen McDaniels", "val": 0.1}, {"name": "Garrett Temple", "val": 0.1}, {"name": "Jahmi'us Ramsey", "val": 0.0}, {"name": "Gradey Dick", "val": 0.0}, {"name": "D.J. Carton", "val": 0.0}, {"name": "Markquis Nowell", "val": 0.0}, {"name": "Ron Harper Jr.", "val": 0.0}, {"name": "Kira Lewis Jr.", "val": 0.0}] },
    },
    avail: [
      { name: "Gary Trent Jr.", g: 71 },
      { name: "Scottie Barnes", g: 60 },
      { name: "Gradey Dick", g: 60 },
      { name: "Dennis Schröder", g: 51 },
      { name: "Jalen McDaniels", g: 50 },
      { name: "Jakob Poeltl", g: 50 },
      { name: "Chris Boucher", g: 50 },
      { name: "Pascal Siakam", g: 39 },
      { name: "Immanuel Quickley", g: 38 },
      { name: "Bruce Brown", g: 34 },
      { name: "Jordan Nwora", g: 34 },
      { name: "RJ Barrett", g: 32 },
      { name: "Malachi Flynn", g: 31 },
      { name: "Kelly Olynyk", g: 28 },
      { name: "Garrett Temple", g: 27 },
      { name: "Ochai Agbaji", g: 27 },
      { name: "OG Anunoby", g: 27 },
      { name: "Jontay Porter", g: 26 },
      { name: "Precious Achiuwa", g: 25 },
      { name: "Thaddeus Young", g: 23 },
      { name: "Javon Freeman-Liberty", g: 22 },
      { name: "Otto Porter Jr.", g: 15 },
      { name: "Mouhamadou Gueye", g: 11 },
      { name: "Jahmi'us Ramsey", g: 7 },
      { name: "Malik Williams", g: 7 },
      { name: "D.J. Carton", g: 4 },
      { name: "Kobi Simmons", g: 4 },
      { name: "Markquis Nowell", g: 1 },
      { name: "Ron Harper Jr.", g: 1 },
      { name: "Kira Lewis Jr.", g: 1 },
    ]
  },

  "2024-25": {
    w: 30, l: 52,
    topW:   { pts: 116, opp: 86, against: "Brooklyn Nets" },
    worstL: { pts: 71, opp: 125, against: "Boston Celtics" },
    conf_rank: 11,
    games: buildGames(
      "LWLLLLWLLLLLLLWWLLWLWWLLLLLLLLLLLWLLLLLWWLWWWWWLWLLLLWLLWLLLWWWLWWWLLLLWWWWLLLWWLL",
      ["Cleveland Cavaliers", "Philadelphia 76ers", "Minnesota Timberwolves", "Denver Nuggets", "Charlotte Hornets", "Los Angeles Lakers", "Sacramento Kings", "Denver Nuggets", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "Milwaukee Bucks", "Detroit Pistons", "Boston Celtics", "Indiana Pacers", "Minnesota Timberwolves", "Cleveland Cavaliers", "Detroit Pistons", "New Orleans Pelicans", "Miami Heat", "Miami Heat", "Indiana Pacers", "Oklahoma City Thunder", "Dallas Mavericks", "New York Knicks", "Miami Heat", "Chicago Bulls", "Brooklyn Nets", "Houston Rockets", "New York Knicks", "Memphis Grizzlies", "Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Orlando Magic", "Milwaukee Bucks", "New York Knicks", "Cleveland Cavaliers", "Detroit Pistons", "Golden State Warriors", "Boston Celtics", "Milwaukee Bucks", "Orlando Magic", "Atlanta Hawks", "Atlanta Hawks", "New Orleans Pelicans", "Washington Wizards", "Chicago Bulls", "Los Angeles Clippers", "New York Knicks", "Memphis Grizzlies", "Oklahoma City Thunder", "Houston Rockets", "Philadelphia 76ers", "Cleveland Cavaliers", "Miami Heat", "Phoenix Suns", "Boston Celtics", "Indiana Pacers", "Chicago Bulls", "Orlando Magic", "Orlando Magic", "Utah Jazz", "Washington Wizards", "Washington Wizards", "Philadelphia 76ers", "Utah Jazz", "Portland Trail Blazers", "Phoenix Suns", "Golden State Warriors", "San Antonio Spurs", "Washington Wizards", "Brooklyn Nets", "Charlotte Hornets", "Philadelphia 76ers", "Chicago Bulls", "Portland Trail Blazers", "Detroit Pistons", "Brooklyn Nets", "Charlotte Hornets", "Dallas Mavericks", "San Antonio Spurs"],
      [106, 115, 101, 125, 133, 125, 131, 119, 107, 103, 103, 85, 95, 123, 130, 110, 108, 100, 119, 111, 119, 122, 92, 118, 108, 104, 121, 94, 110, 125, 126, 107, 71, 130, 97, 104, 98, 126, 114, 104, 110, 112, 109, 122, 117, 113, 106, 106, 115, 115, 107, 109, 87, 106, 108, 111, 127, 101, 91, 115, 104, 114, 118, 117, 119, 118, 126, 102, 89, 114, 89, 112, 116, 108, 127, 118, 103, 105, 120, 126, 102, 118],
      [-30, 8, -11, -2, -5, -6, 3, -2, -15, -2, -20, -14, -4, -3, 11, 5, -14, -2, 26, -10, 3, 11, -37, -7, -5, -10, -1, -7, -4, -14, -29, -29, -54, 17, -9, -24, -14, -6, -9, 3, 13, -18, 16, 3, 23, 9, 24, -16, 7, -6, -31, -12, -7, 3, -23, -9, 18, -10, -20, -10, 2, 1, 9, -1, 15, 13, 8, -3, -40, -3, -34, 8, 30, 11, 18, -19, -9, -12, 11, 30, -22, -7]
    ),
    leaders: {
      pts: { name: "RJ Barrett", val: 21.1, all: [{"name": "RJ Barrett", "val": 21.1}, {"name": "Scottie Barnes", "val": 19.3}, {"name": "Immanuel Quickley", "val": 17.1}, {"name": "Jakob Poeltl", "val": 14.5}, {"name": "Gradey Dick", "val": 14.4}, {"name": "Jared Rhoden", "val": 11.4}, {"name": "Ochai Agbaji", "val": 10.4}, {"name": "Chris Boucher", "val": 10.0}, {"name": "A.J. Lawson", "val": 9.1}, {"name": "Ja'Kobe Walter", "val": 8.6}, {"name": "Bruce Brown", "val": 8.4}, {"name": "Orlando Robinson", "val": 8.1}, {"name": "Cole Swider", "val": 7.4}, {"name": "Colin Castleton", "val": 7.2}, {"name": "Jamal Shead", "val": 7.1}, {"name": "Jamison Battle", "val": 7.1}, {"name": "Kelly Olynyk", "val": 7.1}, {"name": "Davion Mitchell", "val": 6.3}, {"name": "Jonathan Mogbo", "val": 6.2}, {"name": "Bruno Fernando", "val": 3.4}, {"name": "Garrett Temple", "val": 1.9}, {"name": "D.J. Carton", "val": 0.8}, {"name": "Ulrich Chomche", "val": 0.7}] },
      reb: { name: "Jakob Poeltl", val: 9.6, all: [{"name": "Jakob Poeltl", "val": 9.6}, {"name": "Scottie Barnes", "val": 7.7}, {"name": "Colin Castleton", "val": 6.9}, {"name": "RJ Barrett", "val": 6.3}, {"name": "Orlando Robinson", "val": 5.9}, {"name": "Jonathan Mogbo", "val": 4.9}, {"name": "Chris Boucher", "val": 4.5}, {"name": "Ochai Agbaji", "val": 3.8}, {"name": "Jared Rhoden", "val": 3.8}, {"name": "Bruce Brown", "val": 3.8}, {"name": "Kelly Olynyk", "val": 3.7}, {"name": "Gradey Dick", "val": 3.6}, {"name": "Immanuel Quickley", "val": 3.5}, {"name": "A.J. Lawson", "val": 3.3}, {"name": "Cole Swider", "val": 3.1}, {"name": "Ja'Kobe Walter", "val": 3.1}, {"name": "Bruno Fernando", "val": 3.0}, {"name": "Jamison Battle", "val": 2.7}, {"name": "Davion Mitchell", "val": 1.9}, {"name": "Jamal Shead", "val": 1.5}, {"name": "Ulrich Chomche", "val": 1.1}, {"name": "D.J. Carton", "val": 1.0}, {"name": "Garrett Temple", "val": 1.0}] },
      ast: { name: "Scottie Barnes", val: 5.8, all: [{"name": "Scottie Barnes", "val": 5.8}, {"name": "Immanuel Quickley", "val": 5.8}, {"name": "RJ Barrett", "val": 5.4}, {"name": "Davion Mitchell", "val": 4.6}, {"name": "Jamal Shead", "val": 4.2}, {"name": "Jakob Poeltl", "val": 2.8}, {"name": "Jonathan Mogbo", "val": 2.3}, {"name": "Kelly Olynyk", "val": 2.3}, {"name": "Orlando Robinson", "val": 1.9}, {"name": "Gradey Dick", "val": 1.8}, {"name": "Ja'Kobe Walter", "val": 1.6}, {"name": "Colin Castleton", "val": 1.6}, {"name": "Bruce Brown", "val": 1.6}, {"name": "Ochai Agbaji", "val": 1.5}, {"name": "Jared Rhoden", "val": 1.4}, {"name": "A.J. Lawson", "val": 1.2}, {"name": "Bruno Fernando", "val": 1.1}, {"name": "Garrett Temple", "val": 1.1}, {"name": "Jamison Battle", "val": 0.9}, {"name": "D.J. Carton", "val": 0.8}, {"name": "Chris Boucher", "val": 0.7}, {"name": "Cole Swider", "val": 0.3}, {"name": "Ulrich Chomche", "val": 0.3}] },
      stl: { name: "Scottie Barnes", val: 1.4, all: [{"name": "Scottie Barnes", "val": 1.4}, {"name": "Jakob Poeltl", "val": 1.2}, {"name": "Jonathan Mogbo", "val": 0.9}, {"name": "Gradey Dick", "val": 0.9}, {"name": "Ochai Agbaji", "val": 0.9}, {"name": "Bruce Brown", "val": 0.9}, {"name": "Jared Rhoden", "val": 0.9}, {"name": "Jamal Shead", "val": 0.8}, {"name": "RJ Barrett", "val": 0.8}, {"name": "Ja'Kobe Walter", "val": 0.8}, {"name": "Davion Mitchell", "val": 0.7}, {"name": "Immanuel Quickley", "val": 0.7}, {"name": "Kelly Olynyk", "val": 0.7}, {"name": "Garrett Temple", "val": 0.6}, {"name": "D.J. Carton", "val": 0.5}, {"name": "Colin Castleton", "val": 0.5}, {"name": "Cole Swider", "val": 0.5}, {"name": "A.J. Lawson", "val": 0.5}, {"name": "Chris Boucher", "val": 0.5}, {"name": "Orlando Robinson", "val": 0.4}, {"name": "Jamison Battle", "val": 0.3}, {"name": "Bruno Fernando", "val": 0.2}, {"name": "Ulrich Chomche", "val": 0.0}] },
      blk: { name: "Jakob Poeltl", val: 1.2, all: [{"name": "Jakob Poeltl", "val": 1.2}, {"name": "Scottie Barnes", "val": 1.0}, {"name": "Colin Castleton", "val": 0.7}, {"name": "Jonathan Mogbo", "val": 0.5}, {"name": "Bruno Fernando", "val": 0.5}, {"name": "Chris Boucher", "val": 0.5}, {"name": "Ochai Agbaji", "val": 0.5}, {"name": "Orlando Robinson", "val": 0.4}, {"name": "RJ Barrett", "val": 0.3}, {"name": "Cole Swider", "val": 0.3}, {"name": "Kelly Olynyk", "val": 0.3}, {"name": "Jared Rhoden", "val": 0.2}, {"name": "Ja'Kobe Walter", "val": 0.2}, {"name": "Davion Mitchell", "val": 0.2}, {"name": "Bruce Brown", "val": 0.2}, {"name": "A.J. Lawson", "val": 0.2}, {"name": "Jamison Battle", "val": 0.2}, {"name": "Gradey Dick", "val": 0.2}, {"name": "Jamal Shead", "val": 0.1}, {"name": "Immanuel Quickley", "val": 0.1}, {"name": "Garrett Temple", "val": 0.1}, {"name": "Ulrich Chomche", "val": 0.1}, {"name": "D.J. Carton", "val": 0.0}] },
    },
    avail: [
      { name: "Jamal Shead", g: 75 },
      { name: "Scottie Barnes", g: 65 },
      { name: "Ochai Agbaji", g: 64 },
      { name: "Jonathan Mogbo", g: 63 },
      { name: "Jamison Battle", g: 59 },
      { name: "RJ Barrett", g: 58 },
      { name: "Jakob Poeltl", g: 57 },
      { name: "Gradey Dick", g: 54 },
      { name: "Ja'Kobe Walter", g: 52 },
      { name: "Chris Boucher", g: 50 },
      { name: "Davion Mitchell", g: 44 },
      { name: "Orlando Robinson", g: 35 },
      { name: "Immanuel Quickley", g: 33 },
      { name: "Garrett Temple", g: 28 },
      { name: "A.J. Lawson", g: 26 },
      { name: "Kelly Olynyk", g: 24 },
      { name: "Bruce Brown", g: 18 },
      { name: "Bruno Fernando", g: 17 },
      { name: "Colin Castleton", g: 11 },
      { name: "Jared Rhoden", g: 10 },
      { name: "Cole Swider", g: 8 },
      { name: "Ulrich Chomche", g: 7 },
      { name: "D.J. Carton", g: 4 },
    ]
  },

  "2025-26": {
    w: 44, l: 35,
    topW:   { pts: 139, opp: 87, against: "Orlando Magic" },
    worstL: { pts: 92, opp: 119, against: "New York Knicks" },
    conf_rank: 6,
    games: buildGames(
      "WLLLLWWWWLWWWWWWWWWLLWLLLLWWLLWLWWLWWWLWLWLLWWWWLLWLWWLWWLLWLLWLLWWWLLWLWWLLWLW",
      ["Atlanta Hawks", "Milwaukee Bucks", "Dallas Mavericks", "San Antonio Spurs", "Houston Rockets", "Cleveland Cavaliers", "Memphis Grizzlies", "Milwaukee Bucks", "Atlanta Hawks", "Philadelphia 76ers", "Brooklyn Nets", "Cleveland Cavaliers", "Indiana Pacers", "Charlotte Hornets", "Philadelphia 76ers", "Washington Wizards", "Brooklyn Nets", "Cleveland Cavaliers", "Indiana Pacers", "Charlotte Hornets", "New York Knicks", "Portland Trail Blazers", "Los Angeles Lakers", "Charlotte Hornets", "Boston Celtics", "New York Knicks", "Miami Heat", "Milwaukee Bucks", "Boston Celtics", "Brooklyn Nets", "Miami Heat", "Washington Wizards", "Golden State Warriors", "Orlando Magic", "Denver Nuggets", "Atlanta Hawks", "Atlanta Hawks", "Charlotte Hornets", "Boston Celtics", "Philadelphia 76ers", "Philadelphia 76ers", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Sacramento Kings", "Portland Trail Blazers", "Oklahoma City Thunder", "New York Knicks", "Orlando Magic", "Utah Jazz", "Minnesota Timberwolves", "Chicago Bulls", "Indiana Pacers", "Detroit Pistons", "Chicago Bulls", "Milwaukee Bucks", "Oklahoma City Thunder", "San Antonio Spurs", "Washington Wizards", "New York Knicks", "Minnesota Timberwolves", "Dallas Mavericks", "Houston Rockets", "New Orleans Pelicans", "Phoenix Suns", "Detroit Pistons", "Chicago Bulls", "Denver Nuggets", "Phoenix Suns", "Utah Jazz", "Los Angeles Clippers", "New Orleans Pelicans", "Orlando Magic", "Detroit Pistons", "Sacramento Kings", "Memphis Grizzlies", "Boston Celtics", "Miami Heat"],
      [138, 116, 129, 103, 121, 112, 117, 128, 109, 120, 119, 126, 129, 110, 121, 140, 119, 110, 97, 111, 94, 121, 120, 86, 113, 101, 106, 111, 96, 81, 112, 117, 141, 107, 103, 134, 118, 97, 117, 116, 102, 115, 117, 93, 145, 122, 110, 103, 92, 120, 107, 126, 123, 122, 95, 110, 122, 107, 107, 134, 95, 107, 122, 99, 111, 122, 119, 139, 115, 98, 143, 94, 119, 139, 116, 115, 128, 101, 121],
      [20, -6, -10, -18, -18, 11, 13, 28, 12, -10, 10, 13, 18, 2, 9, 30, 10, 11, 2, -7, -22, 3, -3, -25, -8, -16, 10, 6, -16, -15, 21, -21, 14, 1, -3, 17, 18, 1, -8, 1, -13, 14, -4, -17, 18, 13, 12, 2, -27, -10, 7, -2, 16, 18, -18, 9, 28, -9, -3, 9, -16, -8, 30, -14, -11, 7, 11, 30, -6, -22, 16, -25, 13, 52, -11, -8, 32, -14, 26]
    ),
    leaders: {
      pts: { name: "Brandon Ingram", val: 21.3, all: [{"name": "Brandon Ingram", "val": 21.3}, {"name": "RJ Barrett", "val": 19.1}, {"name": "Scottie Barnes", "val": 18.2}, {"name": "Immanuel Quickley", "val": 16.7}, {"name": "Sandro Mamukelashvili", "val": 11.2}, {"name": "Jakob Poeltl", "val": 11.0}, {"name": "Collin Murray-Boyles", "val": 8.5}, {"name": "Ja'Kobe Walter", "val": 7.4}, {"name": "Jamal Shead", "val": 6.7}, {"name": "Gradey Dick", "val": 6.1}, {"name": "Ochai Agbaji", "val": 4.3}, {"name": "A.J. Lawson", "val": 4.1}, {"name": "Jamison Battle", "val": 3.2}, {"name": "Alijah Martin", "val": 2.3}, {"name": "Trayce Jackson-Davis", "val": 1.7}, {"name": "Jonathan Mogbo", "val": 1.4}, {"name": "Markelle Fultz", "val": 0.8}, {"name": "Garrett Temple", "val": 0.7}, {"name": "Chucky Hepburn", "val": 0.0}, {"name": "Mo Bamba", "val": 0.0}] },
      reb: { name: "Scottie Barnes", val: 7.5, all: [{"name": "Scottie Barnes", "val": 7.5}, {"name": "Jakob Poeltl", "val": 7.3}, {"name": "Brandon Ingram", "val": 5.5}, {"name": "RJ Barrett", "val": 5.3}, {"name": "Collin Murray-Boyles", "val": 5.0}, {"name": "Sandro Mamukelashvili", "val": 4.9}, {"name": "Immanuel Quickley", "val": 4.1}, {"name": "Ja'Kobe Walter", "val": 2.6}, {"name": "Ochai Agbaji", "val": 2.3}, {"name": "Gradey Dick", "val": 2.0}, {"name": "Jamal Shead", "val": 1.8}, {"name": "Trayce Jackson-Davis", "val": 1.8}, {"name": "A.J. Lawson", "val": 1.7}, {"name": "Jonathan Mogbo", "val": 1.7}, {"name": "Jamison Battle", "val": 1.5}, {"name": "Alijah Martin", "val": 1.0}, {"name": "Mo Bamba", "val": 1.0}, {"name": "Chucky Hepburn", "val": 0.5}, {"name": "Garrett Temple", "val": 0.4}, {"name": "Markelle Fultz", "val": 0.2}] },
      ast: { name: "Immanuel Quickley", val: 6.0, all: [{"name": "Immanuel Quickley", "val": 6.0}, {"name": "Scottie Barnes", "val": 5.9}, {"name": "Jamal Shead", "val": 5.5}, {"name": "Brandon Ingram", "val": 3.6}, {"name": "RJ Barrett", "val": 3.3}, {"name": "Jakob Poeltl", "val": 2.1}, {"name": "Collin Murray-Boyles", "val": 1.9}, {"name": "Sandro Mamukelashvili", "val": 1.9}, {"name": "Markelle Fultz", "val": 1.6}, {"name": "Ja'Kobe Walter", "val": 1.2}, {"name": "Chucky Hepburn", "val": 1.0}, {"name": "Gradey Dick", "val": 0.7}, {"name": "Ochai Agbaji", "val": 0.7}, {"name": "Jonathan Mogbo", "val": 0.6}, {"name": "Alijah Martin", "val": 0.5}, {"name": "Jamison Battle", "val": 0.4}, {"name": "Trayce Jackson-Davis", "val": 0.4}, {"name": "Garrett Temple", "val": 0.4}, {"name": "A.J. Lawson", "val": 0.3}, {"name": "Mo Bamba", "val": 0.0}] },
      stl: { name: "Scottie Barnes", val: 1.5, all: [{"name": "Scottie Barnes", "val": 1.5}, {"name": "Immanuel Quickley", "val": 1.3}, {"name": "Ja'Kobe Walter", "val": 1.0}, {"name": "Jakob Poeltl", "val": 0.9}, {"name": "Jamal Shead", "val": 0.9}, {"name": "Collin Murray-Boyles", "val": 0.9}, {"name": "Brandon Ingram", "val": 0.8}, {"name": "Sandro Mamukelashvili", "val": 0.8}, {"name": "RJ Barrett", "val": 0.7}, {"name": "Gradey Dick", "val": 0.6}, {"name": "A.J. Lawson", "val": 0.5}, {"name": "Chucky Hepburn", "val": 0.5}, {"name": "Ochai Agbaji", "val": 0.4}, {"name": "Markelle Fultz", "val": 0.4}, {"name": "Alijah Martin", "val": 0.4}, {"name": "Jonathan Mogbo", "val": 0.3}, {"name": "Trayce Jackson-Davis", "val": 0.3}, {"name": "Jamison Battle", "val": 0.1}, {"name": "Garrett Temple", "val": 0.1}, {"name": "Mo Bamba", "val": 0.0}] },
      blk: { name: "Scottie Barnes", val: 1.5, all: [{"name": "Scottie Barnes", "val": 1.5}, {"name": "Collin Murray-Boyles", "val": 0.9}, {"name": "Brandon Ingram", "val": 0.7}, {"name": "Jakob Poeltl", "val": 0.7}, {"name": "Sandro Mamukelashvili", "val": 0.5}, {"name": "Mo Bamba", "val": 0.5}, {"name": "RJ Barrett", "val": 0.3}, {"name": "Ochai Agbaji", "val": 0.3}, {"name": "Trayce Jackson-Davis", "val": 0.3}, {"name": "Jamal Shead", "val": 0.2}, {"name": "Ja'Kobe Walter", "val": 0.2}, {"name": "A.J. Lawson", "val": 0.2}, {"name": "Alijah Martin", "val": 0.2}, {"name": "Jonathan Mogbo", "val": 0.2}, {"name": "Immanuel Quickley", "val": 0.1}, {"name": "Jamison Battle", "val": 0.1}, {"name": "Garrett Temple", "val": 0.1}, {"name": "Gradey Dick", "val": 0.1}, {"name": "Markelle Fultz", "val": 0.0}, {"name": "Chucky Hepburn", "val": 0.0}] },
    },
    avail: [
      { name: "Jamal Shead", g: 79 },
      { name: "Scottie Barnes", g: 77 },
      { name: "Sandro Mamukelashvili", g: 77 },
      { name: "Brandon Ingram", g: 74 },
      { name: "Gradey Dick", g: 73 },
      { name: "Ja'Kobe Walter", g: 69 },
      { name: "Immanuel Quickley", g: 68 },
      { name: "Jamison Battle", g: 58 },
      { name: "Collin Murray-Boyles", g: 55 },
      { name: "RJ Barrett", g: 55 },
      { name: "Jakob Poeltl", g: 43 },
      { name: "Ochai Agbaji", g: 42 },
      { name: "Jonathan Mogbo", g: 37 },
      { name: "A.J. Lawson", g: 21 },
      { name: "Alijah Martin", g: 21 },
      { name: "Garrett Temple", g: 21 },
      { name: "Trayce Jackson-Davis", g: 16 },
      { name: "Markelle Fultz", g: 5 },
      { name: "Chucky Hepburn", g: 2 },
      { name: "Mo Bamba", g: 2 },
    ]
  },

};
