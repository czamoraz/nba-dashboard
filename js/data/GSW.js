/* ================================================================
   GSW.js — Golden State Warriors · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Golden State Warriors",
  abbr:          "GSW",
  conference:    "West",
  primaryColor:  "#1D428A",
  secondaryColor:"#FFC72C",
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
    w: 39, l: 33,
    topW:   { pts: 136, opp: 97, against: "Oklahoma City Thunder" },
    worstL: { pts: 77, opp: 130, against: "Toronto Raptors" },
    conf_rank: 8,
    games: buildGames(
      "LLWWLWWLWWLLWWLLWWLWLWLLWWLWWLLWWWLLLLWLWWLLLLWLLLWLWWWWLWLWWLLWWLWWWWWW",
      ["Brooklyn Nets", "Milwaukee Bucks", "Chicago Bulls", "Detroit Pistons", "Portland Trail Blazers", "Portland Trail Blazers", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Clippers", "Toronto Raptors", "Indiana Pacers", "Denver Nuggets", "Los Angeles Lakers", "San Antonio Spurs", "New York Knicks", "Utah Jazz", "Minnesota Timberwolves", "Minnesota Timberwolves", "Phoenix Suns", "Detroit Pistons", "Boston Celtics", "Dallas Mavericks", "Dallas Mavericks", "San Antonio Spurs", "San Antonio Spurs", "Orlando Magic", "Brooklyn Nets", "Cleveland Cavaliers", "Miami Heat", "Orlando Magic", "Charlotte Hornets", "New York Knicks", "Indiana Pacers", "Charlotte Hornets", "Los Angeles Lakers", "Portland Trail Blazers", "Phoenix Suns", "Los Angeles Clippers", "Utah Jazz", "Los Angeles Lakers", "Houston Rockets", "Memphis Grizzlies", "Memphis Grizzlies", "Philadelphia 76ers", "Sacramento Kings", "Atlanta Hawks", "Chicago Bulls", "Miami Heat", "Toronto Raptors", "Atlanta Hawks", "Milwaukee Bucks", "Washington Wizards", "Houston Rockets", "Denver Nuggets", "Oklahoma City Thunder", "Cleveland Cavaliers", "Boston Celtics", "Philadelphia 76ers", "Washington Wizards", "Denver Nuggets", "Sacramento Kings", "Dallas Mavericks", "Minnesota Timberwolves", "Houston Rockets", "New Orleans Pelicans", "New Orleans Pelicans", "Oklahoma City Thunder", "Oklahoma City Thunder", "Utah Jazz", "Phoenix Suns", "New Orleans Pelicans", "Memphis Grizzlies"],
      [99, 99, 129, 116, 98, 137, 137, 101, 115, 106, 95, 104, 115, 121, 104, 108, 130, 123, 93, 118, 107, 147, 132, 100, 114, 111, 117, 129, 120, 120, 100, 114, 111, 130, 91, 106, 98, 104, 131, 97, 108, 116, 103, 98, 119, 108, 116, 109, 77, 111, 122, 107, 125, 116, 147, 119, 114, 107, 114, 118, 117, 103, 114, 113, 123, 103, 118, 136, 119, 122, 125, 113],
      [-26, -39, 1, 10, -25, 15, 31, -7, 10, 1, -9, -10, 2, 22, -15, -19, 22, 12, -21, 27, -4, 31, -2, -5, 23, 6, -17, 31, 8, -4, -2, 8, 4, 9, -26, -2, -22, -26, 12, -31, 14, 13, -8, -10, -22, -16, 14, -7, -53, -6, 1, -3, 16, 9, 38, 18, -5, 11, -4, 21, 4, -30, -12, 26, 15, -5, 21, 39, 3, 6, 3, 12]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 32.0, all: [{"name": "Stephen Curry", "val": 32.0}, {"name": "Andrew Wiggins", "val": 18.6}, {"name": "Kelly Oubre Jr.", "val": 15.4}, {"name": "Jordan Poole", "val": 12.0}, {"name": "James Wiseman", "val": 11.5}, {"name": "Eric Paschall", "val": 9.5}, {"name": "Kent Bazemore", "val": 7.2}, {"name": "Draymond Green", "val": 7.0}, {"name": "Marquese Chriss", "val": 6.5}, {"name": "Damion Lee", "val": 6.5}, {"name": "Juan Toscano-Anderson", "val": 5.7}, {"name": "Mychal Mulder", "val": 5.6}, {"name": "Brad Wanamaker", "val": 4.7}, {"name": "Kevon Looney", "val": 4.1}, {"name": "Nico Mannion", "val": 4.1}, {"name": "Gary Payton II", "val": 2.5}, {"name": "Alen Smailagić", "val": 1.9}, {"name": "Jordan Bell", "val": 1.0}] },
      reb: { name: "Draymond Green", val: 7.1, all: [{"name": "Draymond Green", "val": 7.1}, {"name": "Marquese Chriss", "val": 6.5}, {"name": "Kelly Oubre Jr.", "val": 6.0}, {"name": "James Wiseman", "val": 5.8}, {"name": "Stephen Curry", "val": 5.5}, {"name": "Kevon Looney", "val": 5.3}, {"name": "Jordan Bell", "val": 5.0}, {"name": "Andrew Wiggins", "val": 4.9}, {"name": "Juan Toscano-Anderson", "val": 4.4}, {"name": "Kent Bazemore", "val": 3.4}, {"name": "Damion Lee", "val": 3.2}, {"name": "Eric Paschall", "val": 3.2}, {"name": "Jordan Poole", "val": 1.8}, {"name": "Brad Wanamaker", "val": 1.7}, {"name": "Nico Mannion", "val": 1.5}, {"name": "Alen Smailagić", "val": 1.1}, {"name": "Gary Payton II", "val": 1.1}, {"name": "Mychal Mulder", "val": 1.0}] },
      ast: { name: "Draymond Green", val: 8.9, all: [{"name": "Draymond Green", "val": 8.9}, {"name": "Stephen Curry", "val": 5.8}, {"name": "Juan Toscano-Anderson", "val": 2.8}, {"name": "Brad Wanamaker", "val": 2.5}, {"name": "Andrew Wiggins", "val": 2.4}, {"name": "Nico Mannion", "val": 2.3}, {"name": "Jordan Bell", "val": 2.0}, {"name": "Kevon Looney", "val": 2.0}, {"name": "Jordan Poole", "val": 1.9}, {"name": "Kent Bazemore", "val": 1.6}, {"name": "Damion Lee", "val": 1.3}, {"name": "Eric Paschall", "val": 1.3}, {"name": "Kelly Oubre Jr.", "val": 1.3}, {"name": "Marquese Chriss", "val": 1.0}, {"name": "James Wiseman", "val": 0.7}, {"name": "Mychal Mulder", "val": 0.4}, {"name": "Alen Smailagić", "val": 0.3}, {"name": "Gary Payton II", "val": 0.1}] },
      stl: { name: "Draymond Green", val: 1.7, all: [{"name": "Draymond Green", "val": 1.7}, {"name": "Stephen Curry", "val": 1.2}, {"name": "Kelly Oubre Jr.", "val": 1.0}, {"name": "Kent Bazemore", "val": 1.0}, {"name": "Andrew Wiggins", "val": 0.9}, {"name": "Juan Toscano-Anderson", "val": 0.8}, {"name": "Brad Wanamaker", "val": 0.7}, {"name": "Damion Lee", "val": 0.7}, {"name": "Gary Payton II", "val": 0.6}, {"name": "Jordan Poole", "val": 0.5}, {"name": "Nico Mannion", "val": 0.5}, {"name": "Kevon Looney", "val": 0.3}, {"name": "Eric Paschall", "val": 0.3}, {"name": "James Wiseman", "val": 0.3}, {"name": "Mychal Mulder", "val": 0.2}, {"name": "Alen Smailagić", "val": 0.2}, {"name": "Jordan Bell", "val": 0.0}, {"name": "Marquese Chriss", "val": 0.0}] },
      blk: { name: "Jordan Bell", val: 2.0, all: [{"name": "Jordan Bell", "val": 2.0}, {"name": "Andrew Wiggins", "val": 1.0}, {"name": "Marquese Chriss", "val": 1.0}, {"name": "James Wiseman", "val": 0.9}, {"name": "Draymond Green", "val": 0.8}, {"name": "Kelly Oubre Jr.", "val": 0.8}, {"name": "Juan Toscano-Anderson", "val": 0.5}, {"name": "Kent Bazemore", "val": 0.5}, {"name": "Kevon Looney", "val": 0.4}, {"name": "Alen Smailagić", "val": 0.3}, {"name": "Jordan Poole", "val": 0.2}, {"name": "Eric Paschall", "val": 0.2}, {"name": "Brad Wanamaker", "val": 0.2}, {"name": "Mychal Mulder", "val": 0.2}, {"name": "Stephen Curry", "val": 0.1}, {"name": "Damion Lee", "val": 0.1}, {"name": "Gary Payton II", "val": 0.1}, {"name": "Nico Mannion", "val": 0.0}] },
    },
    avail: [
      { name: "Andrew Wiggins", g: 71 },
      { name: "Kent Bazemore", g: 67 },
      { name: "Stephen Curry", g: 63 },
      { name: "Draymond Green", g: 63 },
      { name: "Kevon Looney", g: 61 },
      { name: "Mychal Mulder", g: 60 },
      { name: "Damion Lee", g: 57 },
      { name: "Kelly Oubre Jr.", g: 55 },
      { name: "Juan Toscano-Anderson", g: 53 },
      { name: "Jordan Poole", g: 51 },
      { name: "Eric Paschall", g: 40 },
      { name: "James Wiseman", g: 39 },
      { name: "Brad Wanamaker", g: 39 },
      { name: "Nico Mannion", g: 30 },
      { name: "Alen Smailagić", g: 15 },
      { name: "Gary Payton II", g: 10 },
      { name: "Marquese Chriss", g: 2 },
      { name: "Jordan Bell", g: 1 },
    ]
  },

  "2021-22": {
    w: 53, l: 29,
    topW:   { pts: 138, opp: 96, against: "Chicago Bulls" },
    worstL: { pts: 95, opp: 123, against: "Memphis Grizzlies" },
    conf_rank: 3,
    games: buildGames(
      "WWWWLWWWWWWWLWWWWWWWLWLWWLWWWLWWWLWWLLWLLWLWLWWWWWWWWWLLWLLWLLLLLWWWWLLLWLLLLWWWWW",
      ["Los Angeles Lakers", "Los Angeles Clippers", "Sacramento Kings", "Oklahoma City Thunder", "Memphis Grizzlies", "Oklahoma City Thunder", "Charlotte Hornets", "New Orleans Pelicans", "Houston Rockets", "Atlanta Hawks", "Minnesota Timberwolves", "Chicago Bulls", "Charlotte Hornets", "Brooklyn Nets", "Cleveland Cavaliers", "Detroit Pistons", "Toronto Raptors", "Philadelphia 76ers", "Portland Trail Blazers", "Los Angeles Clippers", "Phoenix Suns", "Phoenix Suns", "San Antonio Spurs", "Orlando Magic", "Portland Trail Blazers", "Philadelphia 76ers", "Indiana Pacers", "New York Knicks", "Boston Celtics", "Toronto Raptors", "Sacramento Kings", "Memphis Grizzlies", "Phoenix Suns", "Denver Nuggets", "Utah Jazz", "Miami Heat", "Dallas Mavericks", "New Orleans Pelicans", "Cleveland Cavaliers", "Memphis Grizzlies", "Milwaukee Bucks", "Chicago Bulls", "Minnesota Timberwolves", "Detroit Pistons", "Indiana Pacers", "Houston Rockets", "Utah Jazz", "Dallas Mavericks", "Minnesota Timberwolves", "Brooklyn Nets", "Houston Rockets", "San Antonio Spurs", "Sacramento Kings", "Oklahoma City Thunder", "Utah Jazz", "New York Knicks", "Los Angeles Lakers", "Los Angeles Clippers", "Denver Nuggets", "Portland Trail Blazers", "Dallas Mavericks", "Minnesota Timberwolves", "Dallas Mavericks", "Los Angeles Lakers", "Denver Nuggets", "Los Angeles Clippers", "Denver Nuggets", "Milwaukee Bucks", "Washington Wizards", "Boston Celtics", "San Antonio Spurs", "Orlando Magic", "Miami Heat", "Atlanta Hawks", "Washington Wizards", "Memphis Grizzlies", "Phoenix Suns", "Utah Jazz", "Sacramento Kings", "Los Angeles Lakers", "San Antonio Spurs", "New Orleans Pelicans"],
      [121, 115, 119, 106, 101, 103, 114, 126, 120, 127, 123, 119, 102, 117, 104, 105, 119, 116, 118, 105, 96, 118, 107, 126, 104, 93, 102, 105, 111, 100, 113, 113, 116, 86, 123, 115, 82, 96, 96, 108, 99, 138, 99, 102, 117, 105, 94, 130, 124, 110, 122, 124, 126, 110, 85, 114, 117, 104, 116, 132, 101, 114, 113, 116, 124, 112, 113, 122, 126, 88, 108, 90, 118, 110, 115, 95, 103, 111, 109, 128, 100, 128],
      [7, 2, 12, 8, -3, 21, 22, 41, 13, 14, 13, 26, -4, 18, 15, 3, 15, 20, 15, 15, -8, 22, -5, 31, 10, -9, 2, 9, 4, -19, 15, 9, 9, -3, 7, 7, -17, -5, 14, -8, -19, 42, -20, 16, -4, 2, 2, 38, 9, 4, 14, 4, 12, 12, -26, -2, 2, -15, -1, 37, -6, -15, -9, -8, -7, 15, 11, 13, 14, -22, -2, -4, 14, -11, -8, -28, -4, 4, 19, 16, 6, 21]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 25.5, all: [{"name": "Stephen Curry", "val": 25.5}, {"name": "Klay Thompson", "val": 20.4}, {"name": "Jordan Poole", "val": 18.5}, {"name": "Andrew Wiggins", "val": 17.2}, {"name": "Jonathan Kuminga", "val": 9.3}, {"name": "Otto Porter Jr.", "val": 8.2}, {"name": "Draymond Green", "val": 7.5}, {"name": "Damion Lee", "val": 7.4}, {"name": "Gary Payton II", "val": 7.1}, {"name": "Nemanja Bjelica", "val": 6.1}, {"name": "Kevon Looney", "val": 6.0}, {"name": "Moses Moody", "val": 4.4}, {"name": "Juan Toscano-Anderson", "val": 4.1}, {"name": "Andre Iguodala", "val": 4.0}, {"name": "Quinndary Weatherspoon", "val": 2.7}, {"name": "Chris Chiozza", "val": 2.0}, {"name": "Jeff Dowtin Jr.", "val": 1.5}] },
      reb: { name: "Draymond Green", val: 7.3, all: [{"name": "Draymond Green", "val": 7.3}, {"name": "Kevon Looney", "val": 7.3}, {"name": "Otto Porter Jr.", "val": 5.7}, {"name": "Stephen Curry", "val": 5.2}, {"name": "Andrew Wiggins", "val": 4.5}, {"name": "Nemanja Bjelica", "val": 4.1}, {"name": "Klay Thompson", "val": 3.9}, {"name": "Gary Payton II", "val": 3.5}, {"name": "Jordan Poole", "val": 3.4}, {"name": "Jonathan Kuminga", "val": 3.3}, {"name": "Andre Iguodala", "val": 3.2}, {"name": "Damion Lee", "val": 3.2}, {"name": "Juan Toscano-Anderson", "val": 2.4}, {"name": "Jeff Dowtin Jr.", "val": 1.8}, {"name": "Moses Moody", "val": 1.5}, {"name": "Quinndary Weatherspoon", "val": 1.3}, {"name": "Chris Chiozza", "val": 1.1}] },
      ast: { name: "Draymond Green", val: 7.0, all: [{"name": "Draymond Green", "val": 7.0}, {"name": "Stephen Curry", "val": 6.3}, {"name": "Jordan Poole", "val": 4.0}, {"name": "Andre Iguodala", "val": 3.7}, {"name": "Klay Thompson", "val": 2.8}, {"name": "Andrew Wiggins", "val": 2.2}, {"name": "Nemanja Bjelica", "val": 2.2}, {"name": "Kevon Looney", "val": 2.0}, {"name": "Chris Chiozza", "val": 1.9}, {"name": "Juan Toscano-Anderson", "val": 1.7}, {"name": "Otto Porter Jr.", "val": 1.5}, {"name": "Damion Lee", "val": 1.0}, {"name": "Gary Payton II", "val": 0.9}, {"name": "Jonathan Kuminga", "val": 0.9}, {"name": "Jeff Dowtin Jr.", "val": 0.8}, {"name": "Quinndary Weatherspoon", "val": 0.5}, {"name": "Moses Moody", "val": 0.4}] },
      stl: { name: "Gary Payton II", val: 1.4, all: [{"name": "Gary Payton II", "val": 1.4}, {"name": "Stephen Curry", "val": 1.3}, {"name": "Draymond Green", "val": 1.3}, {"name": "Otto Porter Jr.", "val": 1.1}, {"name": "Andrew Wiggins", "val": 1.0}, {"name": "Andre Iguodala", "val": 0.9}, {"name": "Jordan Poole", "val": 0.8}, {"name": "Juan Toscano-Anderson", "val": 0.7}, {"name": "Kevon Looney", "val": 0.6}, {"name": "Damion Lee", "val": 0.6}, {"name": "Nemanja Bjelica", "val": 0.6}, {"name": "Klay Thompson", "val": 0.5}, {"name": "Jonathan Kuminga", "val": 0.4}, {"name": "Chris Chiozza", "val": 0.4}, {"name": "Moses Moody", "val": 0.1}, {"name": "Quinndary Weatherspoon", "val": 0.1}, {"name": "Jeff Dowtin Jr.", "val": 0.0}] },
      blk: { name: "Draymond Green", val: 1.1, all: [{"name": "Draymond Green", "val": 1.1}, {"name": "Andre Iguodala", "val": 0.7}, {"name": "Andrew Wiggins", "val": 0.7}, {"name": "Kevon Looney", "val": 0.6}, {"name": "Klay Thompson", "val": 0.5}, {"name": "Otto Porter Jr.", "val": 0.5}, {"name": "Nemanja Bjelica", "val": 0.4}, {"name": "Stephen Curry", "val": 0.4}, {"name": "Gary Payton II", "val": 0.3}, {"name": "Jonathan Kuminga", "val": 0.3}, {"name": "Jordan Poole", "val": 0.3}, {"name": "Jeff Dowtin Jr.", "val": 0.3}, {"name": "Juan Toscano-Anderson", "val": 0.2}, {"name": "Moses Moody", "val": 0.2}, {"name": "Damion Lee", "val": 0.1}, {"name": "Quinndary Weatherspoon", "val": 0.1}, {"name": "Chris Chiozza", "val": 0.0}] },
    },
    avail: [
      { name: "Kevon Looney", g: 82 },
      { name: "Jordan Poole", g: 76 },
      { name: "Andrew Wiggins", g: 73 },
      { name: "Juan Toscano-Anderson", g: 73 },
      { name: "Gary Payton II", g: 71 },
      { name: "Nemanja Bjelica", g: 71 },
      { name: "Jonathan Kuminga", g: 70 },
      { name: "Stephen Curry", g: 64 },
      { name: "Otto Porter Jr.", g: 63 },
      { name: "Damion Lee", g: 63 },
      { name: "Moses Moody", g: 52 },
      { name: "Draymond Green", g: 46 },
      { name: "Chris Chiozza", g: 34 },
      { name: "Klay Thompson", g: 32 },
      { name: "Andre Iguodala", g: 31 },
      { name: "Quinndary Weatherspoon", g: 11 },
      { name: "Jeff Dowtin Jr.", g: 4 },
    ]
  },

  "2022-23": {
    w: 44, l: 38,
    topW:   { pts: 157, opp: 101, against: "Portland Trail Blazers" },
    worstL: { pts: 83, opp: 128, against: "New Orleans Pelicans" },
    conf_rank: 6,
    games: buildGames(
      "WLWLWLLLLLWWLWLWWLWWWLWWLLWLLLWLLWWWWWLLLWLWLWLWWWLLWWLLWLLWWWWWLLLWWLLLWWWLWWLWWW",
      ["Los Angeles Lakers", "Denver Nuggets", "Sacramento Kings", "Phoenix Suns", "Miami Heat", "Charlotte Hornets", "Detroit Pistons", "Miami Heat", "Orlando Magic", "New Orleans Pelicans", "Sacramento Kings", "Cleveland Cavaliers", "Sacramento Kings", "San Antonio Spurs", "Phoenix Suns", "New York Knicks", "Houston Rockets", "New Orleans Pelicans", "Los Angeles Clippers", "Utah Jazz", "Minnesota Timberwolves", "Dallas Mavericks", "Chicago Bulls", "Houston Rockets", "Indiana Pacers", "Utah Jazz", "Boston Celtics", "Milwaukee Bucks", "Indiana Pacers", "Philadelphia 76ers", "Toronto Raptors", "New York Knicks", "Brooklyn Nets", "Memphis Grizzlies", "Charlotte Hornets", "Utah Jazz", "Portland Trail Blazers", "Atlanta Hawks", "Detroit Pistons", "Orlando Magic", "Phoenix Suns", "San Antonio Spurs", "Chicago Bulls", "Washington Wizards", "Boston Celtics", "Cleveland Cavaliers", "Brooklyn Nets", "Memphis Grizzlies", "Toronto Raptors", "Oklahoma City Thunder", "Minnesota Timberwolves", "Denver Nuggets", "Dallas Mavericks", "Oklahoma City Thunder", "Portland Trail Blazers", "Los Angeles Lakers", "Washington Wizards", "Los Angeles Clippers", "Los Angeles Lakers", "Houston Rockets", "Minnesota Timberwolves", "Portland Trail Blazers", "Los Angeles Clippers", "New Orleans Pelicans", "Los Angeles Lakers", "Oklahoma City Thunder", "Memphis Grizzlies", "Milwaukee Bucks", "Phoenix Suns", "Los Angeles Clippers", "Atlanta Hawks", "Memphis Grizzlies", "Houston Rockets", "Dallas Mavericks", "Philadelphia 76ers", "Minnesota Timberwolves", "New Orleans Pelicans", "San Antonio Spurs", "Denver Nuggets", "Oklahoma City Thunder", "Sacramento Kings", "Portland Trail Blazers"],
      [123, 123, 130, 105, 123, 113, 114, 109, 129, 105, 116, 106, 115, 132, 119, 111, 127, 83, 124, 129, 137, 113, 119, 120, 104, 123, 123, 111, 119, 106, 126, 94, 113, 123, 110, 112, 118, 143, 119, 101, 113, 144, 118, 127, 118, 120, 116, 122, 129, 128, 114, 117, 119, 141, 122, 103, 135, 124, 111, 116, 109, 123, 115, 108, 105, 128, 110, 125, 123, 126, 119, 119, 121, 127, 120, 96, 120, 130, 110, 136, 119, 157],
      [14, -5, 5, -29, 13, -7, -14, -7, -1, -9, 3, 5, -7, 37, -11, 10, 7, -45, 17, 11, 23, -3, 8, 19, -8, -1, 16, -17, -6, -12, 16, -38, -30, 14, 5, 5, 6, 2, -3, -14, -12, 31, -14, 9, -3, 6, -4, 2, 12, 8, -5, -17, 6, 27, -3, -6, 9, -10, -13, 15, 5, 18, 24, 9, -8, -9, -21, 9, 11, -8, -8, -14, 13, 2, 8, -3, 11, 15, -2, 11, 22, 56]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 29.4, all: [{"name": "Stephen Curry", "val": 29.4}, {"name": "Klay Thompson", "val": 21.9}, {"name": "Jordan Poole", "val": 20.4}, {"name": "Andrew Wiggins", "val": 17.1}, {"name": "Jonathan Kuminga", "val": 9.9}, {"name": "Donte DiVincenzo", "val": 9.4}, {"name": "Draymond Green", "val": 8.5}, {"name": "Kevon Looney", "val": 7.0}, {"name": "James Wiseman", "val": 6.9}, {"name": "Ty Jerome", "val": 6.9}, {"name": "Anthony Lamb", "val": 6.7}, {"name": "JaMychal Green", "val": 6.4}, {"name": "Gary Payton II", "val": 5.7}, {"name": "Moses Moody", "val": 4.8}, {"name": "Patrick Baldwin Jr.", "val": 3.9}, {"name": "Lester Quiñones", "val": 2.5}, {"name": "Andre Iguodala", "val": 2.1}, {"name": "Ryan Rollins", "val": 1.9}] },
      reb: { name: "Kevon Looney", val: 9.3, all: [{"name": "Kevon Looney", "val": 9.3}, {"name": "Draymond Green", "val": 7.2}, {"name": "Stephen Curry", "val": 6.1}, {"name": "Andrew Wiggins", "val": 5.0}, {"name": "Donte DiVincenzo", "val": 4.5}, {"name": "Gary Payton II", "val": 4.3}, {"name": "Klay Thompson", "val": 4.1}, {"name": "JaMychal Green", "val": 3.6}, {"name": "James Wiseman", "val": 3.5}, {"name": "Anthony Lamb", "val": 3.5}, {"name": "Jonathan Kuminga", "val": 3.4}, {"name": "Jordan Poole", "val": 2.7}, {"name": "Andre Iguodala", "val": 2.1}, {"name": "Ty Jerome", "val": 1.7}, {"name": "Moses Moody", "val": 1.7}, {"name": "Patrick Baldwin Jr.", "val": 1.3}, {"name": "Ryan Rollins", "val": 1.0}, {"name": "Lester Quiñones", "val": 0.8}] },
      ast: { name: "Draymond Green", val: 6.8, all: [{"name": "Draymond Green", "val": 6.8}, {"name": "Stephen Curry", "val": 6.3}, {"name": "Jordan Poole", "val": 4.5}, {"name": "Donte DiVincenzo", "val": 3.5}, {"name": "Ty Jerome", "val": 3.0}, {"name": "Kevon Looney", "val": 2.5}, {"name": "Klay Thompson", "val": 2.4}, {"name": "Andre Iguodala", "val": 2.4}, {"name": "Andrew Wiggins", "val": 2.3}, {"name": "Jonathan Kuminga", "val": 1.9}, {"name": "Anthony Lamb", "val": 1.5}, {"name": "Gary Payton II", "val": 1.1}, {"name": "JaMychal Green", "val": 0.9}, {"name": "Moses Moody", "val": 0.8}, {"name": "James Wiseman", "val": 0.7}, {"name": "Ryan Rollins", "val": 0.5}, {"name": "Lester Quiñones", "val": 0.5}, {"name": "Patrick Baldwin Jr.", "val": 0.4}] },
      stl: { name: "Donte DiVincenzo", val: 1.3, all: [{"name": "Donte DiVincenzo", "val": 1.3}, {"name": "Andrew Wiggins", "val": 1.2}, {"name": "Draymond Green", "val": 1.0}, {"name": "Stephen Curry", "val": 0.9}, {"name": "Gary Payton II", "val": 0.9}, {"name": "Jordan Poole", "val": 0.8}, {"name": "Klay Thompson", "val": 0.7}, {"name": "Kevon Looney", "val": 0.6}, {"name": "Jonathan Kuminga", "val": 0.6}, {"name": "Andre Iguodala", "val": 0.5}, {"name": "Ty Jerome", "val": 0.5}, {"name": "Anthony Lamb", "val": 0.5}, {"name": "JaMychal Green", "val": 0.4}, {"name": "Moses Moody", "val": 0.3}, {"name": "Lester Quiñones", "val": 0.3}, {"name": "Patrick Baldwin Jr.", "val": 0.2}, {"name": "James Wiseman", "val": 0.1}, {"name": "Ryan Rollins", "val": 0.1}] },
      blk: { name: "Andrew Wiggins", val: 0.8, all: [{"name": "Andrew Wiggins", "val": 0.8}, {"name": "Draymond Green", "val": 0.8}, {"name": "Kevon Looney", "val": 0.6}, {"name": "Gary Payton II", "val": 0.6}, {"name": "Jonathan Kuminga", "val": 0.5}, {"name": "Stephen Curry", "val": 0.4}, {"name": "Klay Thompson", "val": 0.4}, {"name": "Andre Iguodala", "val": 0.4}, {"name": "JaMychal Green", "val": 0.4}, {"name": "James Wiseman", "val": 0.3}, {"name": "Jordan Poole", "val": 0.3}, {"name": "Anthony Lamb", "val": 0.3}, {"name": "Ryan Rollins", "val": 0.1}, {"name": "Patrick Baldwin Jr.", "val": 0.1}, {"name": "Ty Jerome", "val": 0.1}, {"name": "Moses Moody", "val": 0.1}, {"name": "Donte DiVincenzo", "val": 0.1}, {"name": "Lester Quiñones", "val": 0.0}] },
    },
    avail: [
      { name: "Jordan Poole", g: 82 },
      { name: "Kevon Looney", g: 82 },
      { name: "Draymond Green", g: 73 },
      { name: "Donte DiVincenzo", g: 72 },
      { name: "Klay Thompson", g: 69 },
      { name: "Jonathan Kuminga", g: 67 },
      { name: "Moses Moody", g: 63 },
      { name: "Anthony Lamb", g: 62 },
      { name: "JaMychal Green", g: 57 },
      { name: "Stephen Curry", g: 56 },
      { name: "Ty Jerome", g: 45 },
      { name: "Andrew Wiggins", g: 37 },
      { name: "Patrick Baldwin Jr.", g: 31 },
      { name: "James Wiseman", g: 21 },
      { name: "Ryan Rollins", g: 12 },
      { name: "Andre Iguodala", g: 8 },
      { name: "Gary Payton II", g: 7 },
      { name: "Lester Quiñones", g: 4 },
    ]
  },

  "2023-24": {
    w: 46, l: 36,
    topW:   { pts: 125, opp: 90, against: "Milwaukee Bucks" },
    worstL: { pts: 88, opp: 140, against: "Boston Celtics" },
    conf_rank: 10,
    games: buildGames(
      "LWWWWWLWLLLLLLWLWLWLWLLLWWWWWLLLWLWLLWLLWLLWWLWWWWWLWWWLWWWLWLLWLWLWLLWWWWWWLWWWLW",
      ["Phoenix Suns", "Sacramento Kings", "Houston Rockets", "New Orleans Pelicans", "Sacramento Kings", "Oklahoma City Thunder", "Cleveland Cavaliers", "Detroit Pistons", "Denver Nuggets", "Cleveland Cavaliers", "Minnesota Timberwolves", "Minnesota Timberwolves", "Oklahoma City Thunder", "Oklahoma City Thunder", "Houston Rockets", "Phoenix Suns", "San Antonio Spurs", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Clippers", "Portland Trail Blazers", "Oklahoma City Thunder", "Phoenix Suns", "Los Angeles Clippers", "Brooklyn Nets", "Portland Trail Blazers", "Boston Celtics", "Washington Wizards", "Portland Trail Blazers", "Denver Nuggets", "Miami Heat", "Dallas Mavericks", "Orlando Magic", "Denver Nuggets", "Detroit Pistons", "Toronto Raptors", "New Orleans Pelicans", "Chicago Bulls", "Milwaukee Bucks", "Memphis Grizzlies", "Atlanta Hawks", "Sacramento Kings", "Los Angeles Lakers", "Philadelphia 76ers", "Memphis Grizzlies", "Atlanta Hawks", "Brooklyn Nets", "Philadelphia 76ers", "Indiana Pacers", "Phoenix Suns", "Utah Jazz", "Los Angeles Clippers", "Utah Jazz", "Los Angeles Lakers", "Charlotte Hornets", "Denver Nuggets", "Washington Wizards", "New York Knicks", "Toronto Raptors", "Boston Celtics", "Milwaukee Bucks", "Chicago Bulls", "San Antonio Spurs", "San Antonio Spurs", "Dallas Mavericks", "Los Angeles Lakers", "New York Knicks", "Memphis Grizzlies", "Indiana Pacers", "Minnesota Timberwolves", "Miami Heat", "Orlando Magic", "Charlotte Hornets", "San Antonio Spurs", "Dallas Mavericks", "Houston Rockets", "Dallas Mavericks", "Utah Jazz", "Los Angeles Lakers", "Portland Trail Blazers", "New Orleans Pelicans", "Utah Jazz"],
      [104, 122, 106, 130, 102, 141, 104, 120, 105, 110, 110, 101, 109, 123, 121, 115, 118, 123, 120, 112, 110, 136, 116, 113, 124, 118, 132, 129, 126, 114, 102, 122, 121, 127, 113, 118, 105, 140, 118, 107, 134, 133, 144, 119, 121, 134, 109, 127, 131, 113, 129, 125, 140, 128, 97, 103, 123, 110, 120, 88, 125, 122, 113, 112, 99, 128, 112, 137, 111, 110, 113, 101, 115, 117, 104, 133, 106, 118, 134, 100, 109, 123],
      [-4, 8, 11, 28, 1, 2, -11, 11, -3, -8, -6, -3, -19, -7, 5, -8, 6, -1, 6, -1, 4, -2, -3, -8, 4, 4, 6, 11, 20, -6, -12, -10, 6, -3, 4, -15, -36, 9, -11, -9, 22, -1, -1, 12, 20, -7, 11, 23, 22, 1, 22, -5, 3, 18, 13, -16, 11, 11, 15, -52, 35, -3, -13, 10, -10, 7, -7, 21, -12, -4, 21, 8, 18, 4, 4, 23, -2, 8, 14, 8, -5, 7]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 26.4, all: [{"name": "Stephen Curry", "val": 26.4}, {"name": "Klay Thompson", "val": 17.9}, {"name": "Jonathan Kuminga", "val": 16.1}, {"name": "Andrew Wiggins", "val": 13.2}, {"name": "Brandin Podziemski", "val": 9.2}, {"name": "Chris Paul", "val": 9.2}, {"name": "Draymond Green", "val": 8.6}, {"name": "Moses Moody", "val": 8.1}, {"name": "Dario Šarić", "val": 8.0}, {"name": "Trayce Jackson-Davis", "val": 7.9}, {"name": "Gary Payton II", "val": 5.5}, {"name": "Kevon Looney", "val": 4.5}, {"name": "Lester Quiñones", "val": 4.4}, {"name": "Gui Santos", "val": 3.6}, {"name": "Cory Joseph", "val": 2.4}, {"name": "Jerome Robinson", "val": 1.4}, {"name": "Pat Spencer", "val": 0.7}, {"name": "Usman Garuba", "val": 0.5}] },
      reb: { name: "Draymond Green", val: 7.2, all: [{"name": "Draymond Green", "val": 7.2}, {"name": "Brandin Podziemski", "val": 5.8}, {"name": "Kevon Looney", "val": 5.7}, {"name": "Trayce Jackson-Davis", "val": 5.0}, {"name": "Jonathan Kuminga", "val": 4.8}, {"name": "Stephen Curry", "val": 4.5}, {"name": "Andrew Wiggins", "val": 4.5}, {"name": "Dario Šarić", "val": 4.4}, {"name": "Chris Paul", "val": 3.9}, {"name": "Klay Thompson", "val": 3.3}, {"name": "Moses Moody", "val": 3.0}, {"name": "Gary Payton II", "val": 2.6}, {"name": "Gui Santos", "val": 2.1}, {"name": "Lester Quiñones", "val": 1.9}, {"name": "Cory Joseph", "val": 1.2}, {"name": "Usman Garuba", "val": 1.2}, {"name": "Pat Spencer", "val": 0.7}, {"name": "Jerome Robinson", "val": 0.3}] },
      ast: { name: "Chris Paul", val: 6.8, all: [{"name": "Chris Paul", "val": 6.8}, {"name": "Draymond Green", "val": 6.0}, {"name": "Stephen Curry", "val": 5.1}, {"name": "Brandin Podziemski", "val": 3.7}, {"name": "Dario Šarić", "val": 2.3}, {"name": "Klay Thompson", "val": 2.3}, {"name": "Jonathan Kuminga", "val": 2.2}, {"name": "Kevon Looney", "val": 1.8}, {"name": "Andrew Wiggins", "val": 1.7}, {"name": "Cory Joseph", "val": 1.6}, {"name": "Trayce Jackson-Davis", "val": 1.2}, {"name": "Gary Payton II", "val": 1.1}, {"name": "Lester Quiñones", "val": 1.0}, {"name": "Moses Moody", "val": 0.9}, {"name": "Pat Spencer", "val": 0.8}, {"name": "Gui Santos", "val": 0.6}, {"name": "Jerome Robinson", "val": 0.2}, {"name": "Usman Garuba", "val": 0.2}] },
      stl: { name: "Chris Paul", val: 1.2, all: [{"name": "Chris Paul", "val": 1.2}, {"name": "Draymond Green", "val": 1.0}, {"name": "Gary Payton II", "val": 0.9}, {"name": "Brandin Podziemski", "val": 0.8}, {"name": "Stephen Curry", "val": 0.7}, {"name": "Jonathan Kuminga", "val": 0.7}, {"name": "Andrew Wiggins", "val": 0.6}, {"name": "Moses Moody", "val": 0.6}, {"name": "Klay Thompson", "val": 0.6}, {"name": "Dario Šarić", "val": 0.5}, {"name": "Trayce Jackson-Davis", "val": 0.4}, {"name": "Kevon Looney", "val": 0.4}, {"name": "Cory Joseph", "val": 0.2}, {"name": "Lester Quiñones", "val": 0.2}, {"name": "Gui Santos", "val": 0.2}, {"name": "Usman Garuba", "val": 0.2}, {"name": "Pat Spencer", "val": 0.0}, {"name": "Jerome Robinson", "val": 0.0}] },
      blk: { name: "Trayce Jackson-Davis", val: 1.1, all: [{"name": "Trayce Jackson-Davis", "val": 1.1}, {"name": "Draymond Green", "val": 0.9}, {"name": "Andrew Wiggins", "val": 0.6}, {"name": "Jonathan Kuminga", "val": 0.5}, {"name": "Klay Thompson", "val": 0.5}, {"name": "Usman Garuba", "val": 0.5}, {"name": "Moses Moody", "val": 0.4}, {"name": "Kevon Looney", "val": 0.4}, {"name": "Gary Payton II", "val": 0.4}, {"name": "Stephen Curry", "val": 0.4}, {"name": "Dario Šarić", "val": 0.2}, {"name": "Brandin Podziemski", "val": 0.2}, {"name": "Chris Paul", "val": 0.1}, {"name": "Cory Joseph", "val": 0.1}, {"name": "Lester Quiñones", "val": 0.1}, {"name": "Gui Santos", "val": 0.1}, {"name": "Jerome Robinson", "val": 0.1}, {"name": "Pat Spencer", "val": 0.0}] },
    },
    avail: [
      { name: "Klay Thompson", g: 77 },
      { name: "Stephen Curry", g: 74 },
      { name: "Jonathan Kuminga", g: 74 },
      { name: "Kevon Looney", g: 74 },
      { name: "Brandin Podziemski", g: 74 },
      { name: "Andrew Wiggins", g: 71 },
      { name: "Trayce Jackson-Davis", g: 68 },
      { name: "Moses Moody", g: 66 },
      { name: "Dario Šarić", g: 64 },
      { name: "Chris Paul", g: 58 },
      { name: "Draymond Green", g: 55 },
      { name: "Gary Payton II", g: 44 },
      { name: "Lester Quiñones", g: 37 },
      { name: "Cory Joseph", g: 26 },
      { name: "Gui Santos", g: 23 },
      { name: "Jerome Robinson", g: 22 },
      { name: "Pat Spencer", g: 6 },
      { name: "Usman Garuba", g: 6 },
    ]
  },

  "2024-25": {
    w: 48, l: 34,
    topW:   { pts: 148, opp: 106, against: "San Antonio Spurs" },
    worstL: { pts: 93, opp: 144, against: "Memphis Grizzlies" },
    conf_rank: 7,
    games: buildGames(
      "WWLWWWWWLWWWLWWLLLLLWLWLLLWLLLWLWWLLWLLWWLLWLWWLWLLWWLWWWWWLWWWWWWWLWWLLWWWWWLWLWL",
      ["Portland Trail Blazers", "Utah Jazz", "Los Angeles Clippers", "New Orleans Pelicans", "New Orleans Pelicans", "Houston Rockets", "Washington Wizards", "Boston Celtics", "Cleveland Cavaliers", "Oklahoma City Thunder", "Dallas Mavericks", "Memphis Grizzlies", "Los Angeles Clippers", "Atlanta Hawks", "New Orleans Pelicans", "San Antonio Spurs", "Brooklyn Nets", "Oklahoma City Thunder", "Phoenix Suns", "Denver Nuggets", "Houston Rockets", "Minnesota Timberwolves", "Minnesota Timberwolves", "Houston Rockets", "Dallas Mavericks", "Memphis Grizzlies", "Minnesota Timberwolves", "Indiana Pacers", "Los Angeles Lakers", "Los Angeles Clippers", "Phoenix Suns", "Cleveland Cavaliers", "Philadelphia 76ers", "Memphis Grizzlies", "Sacramento Kings", "Miami Heat", "Detroit Pistons", "Indiana Pacers", "Toronto Raptors", "Minnesota Timberwolves", "Washington Wizards", "Boston Celtics", "Sacramento Kings", "Chicago Bulls", "Los Angeles Lakers", "Utah Jazz", "Oklahoma City Thunder", "Phoenix Suns", "Orlando Magic", "Utah Jazz", "Los Angeles Lakers", "Chicago Bulls", "Milwaukee Bucks", "Dallas Mavericks", "Houston Rockets", "Sacramento Kings", "Dallas Mavericks", "Charlotte Hornets", "Orlando Magic", "Philadelphia 76ers", "Charlotte Hornets", "New York Knicks", "Brooklyn Nets", "Detroit Pistons", "Portland Trail Blazers", "Sacramento Kings", "New York Knicks", "Denver Nuggets", "Milwaukee Bucks", "Toronto Raptors", "Atlanta Hawks", "Miami Heat", "New Orleans Pelicans", "San Antonio Spurs", "Memphis Grizzlies", "Los Angeles Lakers", "Denver Nuggets", "Houston Rockets", "Phoenix Suns", "San Antonio Spurs", "Portland Trail Blazers", "Los Angeles Clippers"],
      [140, 127, 104, 124, 104, 127, 125, 118, 117, 127, 120, 123, 99, 120, 112, 94, 120, 101, 105, 115, 99, 90, 114, 90, 133, 93, 113, 105, 113, 92, 109, 95, 139, 121, 99, 98, 107, 96, 101, 116, 122, 85, 117, 131, 108, 114, 116, 105, 104, 128, 112, 132, 125, 107, 105, 132, 126, 128, 121, 119, 119, 114, 121, 115, 130, 130, 97, 105, 104, 117, 115, 86, 111, 148, 134, 123, 118, 96, 133, 111, 103, 119],
      [36, 41, -8, 18, 15, 6, 13, 6, -19, 11, 3, 5, -3, 23, 4, -10, -8, -4, -8, -4, 6, -17, 8, -1, -10, -51, 10, -6, -2, -10, 4, -18, 34, 8, -30, -16, 3, -12, -3, 1, 8, -40, -6, 25, -10, 11, 7, -25, 5, -3, -8, 21, 14, -4, 7, 24, 24, 36, 6, -7, 18, 12, 2, 5, 10, 26, 3, -9, 11, 3, -9, -26, 16, 42, 9, 7, 14, -10, 38, -3, 17, -5]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 24.5, all: [{"name": "Stephen Curry", "val": 24.5}, {"name": "Jimmy Butler", "val": 17.9}, {"name": "Andrew Wiggins", "val": 17.6}, {"name": "Jonathan Kuminga", "val": 15.3}, {"name": "Brandin Podziemski", "val": 11.7}, {"name": "Buddy Hield", "val": 11.1}, {"name": "Dennis Schröder", "val": 10.6}, {"name": "De'Anthony Melton", "val": 10.3}, {"name": "Moses Moody", "val": 9.8}, {"name": "Draymond Green", "val": 9.0}, {"name": "Quinten Post", "val": 8.1}, {"name": "Trayce Jackson-Davis", "val": 6.6}, {"name": "Gary Payton II", "val": 6.5}, {"name": "Lindy Waters III", "val": 5.5}, {"name": "Kyle Anderson", "val": 5.3}, {"name": "Kevon Looney", "val": 4.5}, {"name": "Gui Santos", "val": 4.1}, {"name": "Jackson Rowe", "val": 3.7}, {"name": "Kevin Knox", "val": 3.3}, {"name": "Pat Spencer", "val": 2.5}, {"name": "Yuri Collins", "val": 1.0}, {"name": "Braxton Key", "val": 1.0}, {"name": "Reece Beekman", "val": 1.0}] },
      reb: { name: "Draymond Green", val: 6.1, all: [{"name": "Draymond Green", "val": 6.1}, {"name": "Kevon Looney", "val": 6.1}, {"name": "Jimmy Butler", "val": 5.5}, {"name": "Brandin Podziemski", "val": 5.1}, {"name": "Trayce Jackson-Davis", "val": 5.0}, {"name": "Andrew Wiggins", "val": 4.6}, {"name": "Jonathan Kuminga", "val": 4.6}, {"name": "Stephen Curry", "val": 4.4}, {"name": "Quinten Post", "val": 3.5}, {"name": "De'Anthony Melton", "val": 3.3}, {"name": "Buddy Hield", "val": 3.2}, {"name": "Kyle Anderson", "val": 3.1}, {"name": "Gui Santos", "val": 3.1}, {"name": "Gary Payton II", "val": 3.0}, {"name": "Moses Moody", "val": 2.6}, {"name": "Lindy Waters III", "val": 2.5}, {"name": "Dennis Schröder", "val": 2.3}, {"name": "Jackson Rowe", "val": 1.8}, {"name": "Yuri Collins", "val": 1.5}, {"name": "Pat Spencer", "val": 1.2}, {"name": "Kevin Knox", "val": 1.2}, {"name": "Braxton Key", "val": 0.7}, {"name": "Reece Beekman", "val": 0.5}] },
      ast: { name: "Stephen Curry", val: 6.0, all: [{"name": "Stephen Curry", "val": 6.0}, {"name": "Jimmy Butler", "val": 5.9}, {"name": "Draymond Green", "val": 5.6}, {"name": "Dennis Schröder", "val": 4.4}, {"name": "Brandin Podziemski", "val": 3.4}, {"name": "De'Anthony Melton", "val": 2.8}, {"name": "Andrew Wiggins", "val": 2.4}, {"name": "Kyle Anderson", "val": 2.3}, {"name": "Jonathan Kuminga", "val": 2.2}, {"name": "Yuri Collins", "val": 2.0}, {"name": "Trayce Jackson-Davis", "val": 1.7}, {"name": "Buddy Hield", "val": 1.6}, {"name": "Kevon Looney", "val": 1.6}, {"name": "Gui Santos", "val": 1.4}, {"name": "Quinten Post", "val": 1.3}, {"name": "Gary Payton II", "val": 1.3}, {"name": "Moses Moody", "val": 1.3}, {"name": "Pat Spencer", "val": 1.2}, {"name": "Lindy Waters III", "val": 1.1}, {"name": "Jackson Rowe", "val": 0.7}, {"name": "Reece Beekman", "val": 0.5}, {"name": "Kevin Knox", "val": 0.4}, {"name": "Braxton Key", "val": 0.0}] },
      stl: { name: "Jimmy Butler", val: 1.7, all: [{"name": "Jimmy Butler", "val": 1.7}, {"name": "Draymond Green", "val": 1.5}, {"name": "De'Anthony Melton", "val": 1.2}, {"name": "Stephen Curry", "val": 1.1}, {"name": "Brandin Podziemski", "val": 1.1}, {"name": "Yuri Collins", "val": 1.0}, {"name": "Dennis Schröder", "val": 1.0}, {"name": "Andrew Wiggins", "val": 0.9}, {"name": "Jonathan Kuminga", "val": 0.8}, {"name": "Buddy Hield", "val": 0.8}, {"name": "Gary Payton II", "val": 0.8}, {"name": "Moses Moody", "val": 0.8}, {"name": "Jackson Rowe", "val": 0.7}, {"name": "Braxton Key", "val": 0.7}, {"name": "Kyle Anderson", "val": 0.7}, {"name": "Lindy Waters III", "val": 0.6}, {"name": "Kevon Looney", "val": 0.6}, {"name": "Reece Beekman", "val": 0.5}, {"name": "Gui Santos", "val": 0.4}, {"name": "Pat Spencer", "val": 0.4}, {"name": "Trayce Jackson-Davis", "val": 0.4}, {"name": "Quinten Post", "val": 0.4}, {"name": "Kevin Knox", "val": 0.1}] },
      blk: { name: "Draymond Green", val: 1.0, all: [{"name": "Draymond Green", "val": 1.0}, {"name": "Andrew Wiggins", "val": 0.8}, {"name": "Kyle Anderson", "val": 0.6}, {"name": "Trayce Jackson-Davis", "val": 0.6}, {"name": "Kevon Looney", "val": 0.5}, {"name": "Quinten Post", "val": 0.4}, {"name": "Stephen Curry", "val": 0.4}, {"name": "Jonathan Kuminga", "val": 0.4}, {"name": "Moses Moody", "val": 0.4}, {"name": "Kevin Knox", "val": 0.3}, {"name": "Gary Payton II", "val": 0.3}, {"name": "Jimmy Butler", "val": 0.3}, {"name": "Lindy Waters III", "val": 0.3}, {"name": "De'Anthony Melton", "val": 0.3}, {"name": "Buddy Hield", "val": 0.3}, {"name": "Gui Santos", "val": 0.2}, {"name": "Brandin Podziemski", "val": 0.2}, {"name": "Dennis Schröder", "val": 0.1}, {"name": "Pat Spencer", "val": 0.1}, {"name": "Jackson Rowe", "val": 0.0}, {"name": "Yuri Collins", "val": 0.0}, {"name": "Braxton Key", "val": 0.0}, {"name": "Reece Beekman", "val": 0.0}] },
    },
    avail: [
      { name: "Buddy Hield", g: 82 },
      { name: "Kevon Looney", g: 76 },
      { name: "Moses Moody", g: 74 },
      { name: "Stephen Curry", g: 70 },
      { name: "Draymond Green", g: 68 },
      { name: "Brandin Podziemski", g: 64 },
      { name: "Trayce Jackson-Davis", g: 62 },
      { name: "Gary Payton II", g: 62 },
      { name: "Gui Santos", g: 56 },
      { name: "Jonathan Kuminga", g: 47 },
      { name: "Andrew Wiggins", g: 43 },
      { name: "Quinten Post", g: 42 },
      { name: "Pat Spencer", g: 39 },
      { name: "Lindy Waters III", g: 38 },
      { name: "Kyle Anderson", g: 36 },
      { name: "Jimmy Butler", g: 30 },
      { name: "Dennis Schröder", g: 24 },
      { name: "Kevin Knox", g: 14 },
      { name: "De'Anthony Melton", g: 6 },
      { name: "Jackson Rowe", g: 6 },
      { name: "Braxton Key", g: 3 },
      { name: "Yuri Collins", g: 2 },
      { name: "Reece Beekman", g: 2 },
    ]
  },

  "2025-26": {
    w: 37, l: 45,
    topW:   { pts: 137, opp: 103, against: "Sacramento Kings" },
    worstL: { pts: 94, opp: 131, against: "Oklahoma City Thunder" },
    conf_rank: 10,
    games: buildGames(
      "WWLWWLLWLLWLWWWLLLWLWLLWWLLLWWWLWWLWLWWLWWWWLLWLWLLWLWLLWLWLLWLLLLLWLLLWWWLLLLWLLL",
      ["Los Angeles Lakers", "Denver Nuggets", "Portland Trail Blazers", "Memphis Grizzlies", "Los Angeles Clippers", "Milwaukee Bucks", "Indiana Pacers", "Phoenix Suns", "Sacramento Kings", "Denver Nuggets", "Indiana Pacers", "Oklahoma City Thunder", "San Antonio Spurs", "San Antonio Spurs", "New Orleans Pelicans", "Orlando Magic", "Miami Heat", "Portland Trail Blazers", "Utah Jazz", "Houston Rockets", "New Orleans Pelicans", "Oklahoma City Thunder", "Philadelphia 76ers", "Cleveland Cavaliers", "Chicago Bulls", "Minnesota Timberwolves", "Portland Trail Blazers", "Phoenix Suns", "Phoenix Suns", "Orlando Magic", "Dallas Mavericks", "Toronto Raptors", "Brooklyn Nets", "Charlotte Hornets", "Oklahoma City Thunder", "Utah Jazz", "Los Angeles Clippers", "Milwaukee Bucks", "Sacramento Kings", "Atlanta Hawks", "Portland Trail Blazers", "New York Knicks", "Charlotte Hornets", "Miami Heat", "Toronto Raptors", "Dallas Mavericks", "Minnesota Timberwolves", "Minnesota Timberwolves", "Utah Jazz", "Detroit Pistons", "Philadelphia 76ers", "Phoenix Suns", "Los Angeles Lakers", "Memphis Grizzlies", "San Antonio Spurs", "Boston Celtics", "Denver Nuggets", "New Orleans Pelicans", "Memphis Grizzlies", "Los Angeles Lakers", "Los Angeles Clippers", "Houston Rockets", "Oklahoma City Thunder", "Utah Jazz", "Chicago Bulls", "Minnesota Timberwolves", "New York Knicks", "Washington Wizards", "Boston Celtics", "Detroit Pistons", "Atlanta Hawks", "Dallas Mavericks", "Brooklyn Nets", "Washington Wizards", "Denver Nuggets", "San Antonio Spurs", "Cleveland Cavaliers", "Houston Rockets", "Sacramento Kings", "Los Angeles Lakers", "Sacramento Kings", "Los Angeles Clippers"],
      [119, 137, 119, 131, 98, 110, 109, 118, 116, 104, 114, 102, 125, 109, 124, 113, 96, 123, 134, 100, 104, 112, 98, 99, 123, 120, 131, 98, 119, 120, 126, 127, 120, 132, 94, 123, 102, 120, 137, 111, 119, 126, 136, 135, 127, 115, 111, 83, 140, 124, 94, 101, 99, 114, 113, 110, 128, 109, 133, 101, 101, 115, 97, 116, 124, 117, 107, 125, 99, 101, 110, 137, 109, 131, 93, 113, 111, 116, 110, 103, 118, 110],
      [10, 6, -20, 13, 19, -10, -5, 11, -5, -25, 31, -24, 5, 1, 18, -8, -14, -4, 17, -4, 8, -12, -1, 5, 32, -7, -5, -1, 3, 23, 10, -14, 13, 7, -37, 9, -1, 7, 34, -13, 22, 13, 20, 23, -18, -8, 26, -25, 16, -7, -19, 4, -6, 1, -13, -11, 11, -4, 21, -28, -13, 2, -7, -3, -6, -10, -3, 8, -21, -14, -16, 6, 3, 5, -23, -14, -7, -1, 5, -16, -6, -5]
    ),
    leaders: {
      pts: { name: "Stephen Curry", val: 26.6, all: [{"name": "Stephen Curry", "val": 26.6}, {"name": "Jimmy Butler", "val": 20.0}, {"name": "Kristaps Porziņģis", "val": 16.1}, {"name": "Brandin Podziemski", "val": 13.8}, {"name": "De'Anthony Melton", "val": 12.3}, {"name": "Moses Moody", "val": 12.1}, {"name": "Jonathan Kuminga", "val": 12.1}, {"name": "Charles Bassey", "val": 10.6}, {"name": "Gui Santos", "val": 9.2}, {"name": "Draymond Green", "val": 8.4}, {"name": "Al Horford", "val": 8.3}, {"name": "LJ Cryer", "val": 8.2}, {"name": "Nate Williams", "val": 8.0}, {"name": "Buddy Hield", "val": 8.0}, {"name": "Quinten Post", "val": 7.7}, {"name": "Gary Payton II", "val": 7.5}, {"name": "Pat Spencer", "val": 7.2}, {"name": "Seth Curry", "val": 7.1}, {"name": "Will Richard", "val": 6.4}, {"name": "Trayce Jackson-Davis", "val": 4.2}, {"name": "Omer Yurtseven", "val": 3.8}, {"name": "Malevy Leons", "val": 3.3}] },
      reb: { name: "Charles Bassey", val: 7.2, all: [{"name": "Charles Bassey", "val": 7.2}, {"name": "Jonathan Kuminga", "val": 5.9}, {"name": "Jimmy Butler", "val": 5.6}, {"name": "Draymond Green", "val": 5.5}, {"name": "Kristaps Porziņģis", "val": 5.3}, {"name": "Brandin Podziemski", "val": 5.1}, {"name": "Al Horford", "val": 4.9}, {"name": "Quinten Post", "val": 4.0}, {"name": "Gui Santos", "val": 3.9}, {"name": "Stephen Curry", "val": 3.6}, {"name": "Gary Payton II", "val": 3.6}, {"name": "Moses Moody", "val": 3.3}, {"name": "Omer Yurtseven", "val": 3.3}, {"name": "De'Anthony Melton", "val": 3.2}, {"name": "Trayce Jackson-Davis", "val": 3.1}, {"name": "Will Richard", "val": 2.5}, {"name": "Buddy Hield", "val": 2.5}, {"name": "Pat Spencer", "val": 2.4}, {"name": "Malevy Leons", "val": 2.1}, {"name": "Nate Williams", "val": 2.1}, {"name": "LJ Cryer", "val": 1.6}, {"name": "Seth Curry", "val": 1.2}] },
      ast: { name: "Draymond Green", val: 5.5, all: [{"name": "Draymond Green", "val": 5.5}, {"name": "Jimmy Butler", "val": 4.9}, {"name": "Stephen Curry", "val": 4.7}, {"name": "Brandin Podziemski", "val": 3.7}, {"name": "Pat Spencer", "val": 3.5}, {"name": "De'Anthony Melton", "val": 2.6}, {"name": "Al Horford", "val": 2.6}, {"name": "Jonathan Kuminga", "val": 2.5}, {"name": "Gui Santos", "val": 2.3}, {"name": "Kristaps Porziņģis", "val": 2.3}, {"name": "Gary Payton II", "val": 1.7}, {"name": "Moses Moody", "val": 1.6}, {"name": "Buddy Hield", "val": 1.5}, {"name": "Quinten Post", "val": 1.4}, {"name": "Will Richard", "val": 1.3}, {"name": "Charles Bassey", "val": 1.0}, {"name": "Nate Williams", "val": 1.0}, {"name": "LJ Cryer", "val": 1.0}, {"name": "Seth Curry", "val": 1.0}, {"name": "Omer Yurtseven", "val": 0.9}, {"name": "Trayce Jackson-Davis", "val": 0.9}, {"name": "Malevy Leons", "val": 0.9}] },
      stl: { name: "De'Anthony Melton", val: 1.6, all: [{"name": "De'Anthony Melton", "val": 1.6}, {"name": "Jimmy Butler", "val": 1.4}, {"name": "Will Richard", "val": 1.2}, {"name": "Stephen Curry", "val": 1.1}, {"name": "Brandin Podziemski", "val": 1.1}, {"name": "Moses Moody", "val": 1.0}, {"name": "Gui Santos", "val": 0.9}, {"name": "Draymond Green", "val": 0.9}, {"name": "Gary Payton II", "val": 0.9}, {"name": "Buddy Hield", "val": 0.8}, {"name": "Al Horford", "val": 0.7}, {"name": "Pat Spencer", "val": 0.7}, {"name": "Malevy Leons", "val": 0.6}, {"name": "Kristaps Porziņģis", "val": 0.6}, {"name": "Jonathan Kuminga", "val": 0.4}, {"name": "Charles Bassey", "val": 0.4}, {"name": "Nate Williams", "val": 0.4}, {"name": "Quinten Post", "val": 0.4}, {"name": "Trayce Jackson-Davis", "val": 0.4}, {"name": "Seth Curry", "val": 0.3}, {"name": "LJ Cryer", "val": 0.2}, {"name": "Omer Yurtseven", "val": 0.2}] },
      blk: { name: "Charles Bassey", val: 1.4, all: [{"name": "Charles Bassey", "val": 1.4}, {"name": "Kristaps Porziņģis", "val": 1.1}, {"name": "Al Horford", "val": 1.1}, {"name": "Moses Moody", "val": 0.6}, {"name": "Draymond Green", "val": 0.6}, {"name": "Quinten Post", "val": 0.5}, {"name": "Trayce Jackson-Davis", "val": 0.5}, {"name": "Malevy Leons", "val": 0.4}, {"name": "De'Anthony Melton", "val": 0.4}, {"name": "Stephen Curry", "val": 0.4}, {"name": "Gary Payton II", "val": 0.3}, {"name": "Gui Santos", "val": 0.3}, {"name": "Jonathan Kuminga", "val": 0.3}, {"name": "Jimmy Butler", "val": 0.2}, {"name": "Brandin Podziemski", "val": 0.2}, {"name": "Buddy Hield", "val": 0.2}, {"name": "Pat Spencer", "val": 0.1}, {"name": "Will Richard", "val": 0.1}, {"name": "Omer Yurtseven", "val": 0.1}, {"name": "Nate Williams", "val": 0.0}, {"name": "LJ Cryer", "val": 0.0}, {"name": "Seth Curry", "val": 0.0}] },
    },
    avail: [
      { name: "Brandin Podziemski", g: 82 },
      { name: "Gary Payton II", g: 73 },
      { name: "Will Richard", g: 69 },
      { name: "Gui Santos", g: 68 },
      { name: "Draymond Green", g: 68 },
      { name: "Quinten Post", g: 67 },
      { name: "Pat Spencer", g: 66 },
      { name: "Moses Moody", g: 60 },
      { name: "De'Anthony Melton", g: 49 },
      { name: "Al Horford", g: 45 },
      { name: "Buddy Hield", g: 44 },
      { name: "Stephen Curry", g: 43 },
      { name: "Jimmy Butler", g: 38 },
      { name: "Trayce Jackson-Davis", g: 36 },
      { name: "Malevy Leons", g: 25 },
      { name: "Jonathan Kuminga", g: 20 },
      { name: "LJ Cryer", g: 18 },
      { name: "Kristaps Porziņģis", g: 15 },
      { name: "Nate Williams", g: 14 },
      { name: "Seth Curry", g: 10 },
      { name: "Omer Yurtseven", g: 9 },
      { name: "Charles Bassey", g: 5 },
    ]
  },

};
