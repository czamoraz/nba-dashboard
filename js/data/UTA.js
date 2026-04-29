/* ================================================================
   UTA.js — Utah Jazz · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Utah Jazz",
  abbr:          "UTA",
  conference:    "West",
  primaryColor:  "#002B5C",
  secondaryColor:"#00471B",
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
    w: 52, l: 20,
    topW:   { pts: 154, opp: 105, against: "Sacramento Kings" },
    worstL: { pts: 96, opp: 130, against: "Brooklyn Nets" },
    conf_rank: 1,
    games: buildGames(
      "WLWLWWLLWWWWWWWWWWWLWWWWWWWWWLWWLWLLWLWLWWWWWWWWWLLWWLWWLWWLLWLWWWWWLLWW",
      ["Portland Trail Blazers", "Minnesota Timberwolves", "Oklahoma City Thunder", "Phoenix Suns", "Los Angeles Clippers", "San Antonio Spurs", "Brooklyn Nets", "New York Knicks", "Milwaukee Bucks", "Detroit Pistons", "Cleveland Cavaliers", "Atlanta Hawks", "Denver Nuggets", "New Orleans Pelicans", "New Orleans Pelicans", "Golden State Warriors", "New York Knicks", "Dallas Mavericks", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Atlanta Hawks", "Charlotte Hornets", "Indiana Pacers", "Boston Celtics", "Milwaukee Bucks", "Miami Heat", "Philadelphia 76ers", "Los Angeles Clippers", "Los Angeles Clippers", "Charlotte Hornets", "Los Angeles Lakers", "Miami Heat", "Orlando Magic", "New Orleans Pelicans", "Philadelphia 76ers", "Houston Rockets", "Golden State Warriors", "Boston Celtics", "Washington Wizards", "Toronto Raptors", "Chicago Bulls", "Brooklyn Nets", "Memphis Grizzlies", "Memphis Grizzlies", "Cleveland Cavaliers", "Memphis Grizzlies", "Chicago Bulls", "Orlando Magic", "Dallas Mavericks", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "Washington Wizards", "Oklahoma City Thunder", "Indiana Pacers", "Los Angeles Lakers", "Los Angeles Lakers", "Houston Rockets", "Minnesota Timberwolves", "Minnesota Timberwolves", "Sacramento Kings", "Phoenix Suns", "Toronto Raptors", "San Antonio Spurs", "San Antonio Spurs", "Denver Nuggets", "Houston Rockets", "Golden State Warriors", "Portland Trail Blazers", "Oklahoma City Thunder", "Sacramento Kings"],
      [120, 111, 110, 95, 106, 130, 96, 100, 131, 96, 117, 116, 109, 118, 129, 127, 108, 116, 120, 117, 117, 112, 138, 103, 122, 129, 112, 134, 114, 112, 132, 114, 116, 124, 124, 123, 114, 119, 117, 122, 115, 120, 118, 117, 126, 114, 111, 113, 137, 103, 113, 122, 128, 121, 106, 119, 115, 111, 112, 96, 104, 154, 100, 106, 110, 126, 127, 124, 116, 98, 109, 121],
      [20, -5, 1, -11, 6, 21, -34, -12, 13, 10, 30, 24, 4, 16, 11, 19, 14, 12, 19, -11, 12, 21, 17, 8, 14, 14, 18, 11, 18, -4, 22, 25, -8, 15, -5, -8, 15, -12, 8, -9, 3, 25, 30, 3, 16, 39, 4, 7, 46, -8, -4, 19, 16, -4, 10, 8, -12, 14, 23, -5, -1, 49, -21, 4, 11, 32, 7, 8, -3, -7, 16, 22]
    ),
    leaders: {
      pts: { name: "Donovan Mitchell", val: 26.4, all: [{"name": "Donovan Mitchell", "val": 26.4}, {"name": "Jordan Clarkson", "val": 18.4}, {"name": "Bojan Bogdanović", "val": 17.0}, {"name": "Mike Conley", "val": 16.2}, {"name": "Rudy Gobert", "val": 14.3}, {"name": "Joe Ingles", "val": 12.1}, {"name": "Royce O'Neale", "val": 7.0}, {"name": "Georges Niang", "val": 6.9}, {"name": "Derrick Favors", "val": 5.4}, {"name": "Ersan İlyasova", "val": 3.8}, {"name": "Matt Thomas", "val": 3.6}, {"name": "Trent Forrest", "val": 2.9}, {"name": "Jarrell Brantley", "val": 2.3}, {"name": "Miye Oni", "val": 1.9}, {"name": "Elijah Hughes", "val": 1.7}, {"name": "Juwan Morgan", "val": 1.2}, {"name": "Udoka Azubuike", "val": 1.1}, {"name": "Shaquille Harrison", "val": 1.0}] },
      reb: { name: "Rudy Gobert", val: 13.5, all: [{"name": "Rudy Gobert", "val": 13.5}, {"name": "Royce O'Neale", "val": 6.8}, {"name": "Derrick Favors", "val": 5.5}, {"name": "Donovan Mitchell", "val": 4.4}, {"name": "Jordan Clarkson", "val": 4.0}, {"name": "Bojan Bogdanović", "val": 3.9}, {"name": "Joe Ingles", "val": 3.6}, {"name": "Mike Conley", "val": 3.5}, {"name": "Georges Niang", "val": 2.4}, {"name": "Ersan İlyasova", "val": 1.7}, {"name": "Miye Oni", "val": 1.6}, {"name": "Trent Forrest", "val": 1.5}, {"name": "Matt Thomas", "val": 1.2}, {"name": "Juwan Morgan", "val": 1.0}, {"name": "Jarrell Brantley", "val": 1.0}, {"name": "Udoka Azubuike", "val": 0.9}, {"name": "Elijah Hughes", "val": 0.5}, {"name": "Shaquille Harrison", "val": 0.5}] },
      ast: { name: "Mike Conley", val: 6.0, all: [{"name": "Mike Conley", "val": 6.0}, {"name": "Donovan Mitchell", "val": 5.2}, {"name": "Joe Ingles", "val": 4.7}, {"name": "Jordan Clarkson", "val": 2.5}, {"name": "Royce O'Neale", "val": 2.5}, {"name": "Bojan Bogdanović", "val": 1.9}, {"name": "Trent Forrest", "val": 1.5}, {"name": "Rudy Gobert", "val": 1.3}, {"name": "Georges Niang", "val": 0.8}, {"name": "Derrick Favors", "val": 0.6}, {"name": "Miye Oni", "val": 0.5}, {"name": "Matt Thomas", "val": 0.5}, {"name": "Jarrell Brantley", "val": 0.5}, {"name": "Shaquille Harrison", "val": 0.5}, {"name": "Juwan Morgan", "val": 0.3}, {"name": "Elijah Hughes", "val": 0.3}, {"name": "Ersan İlyasova", "val": 0.2}, {"name": "Udoka Azubuike", "val": 0.0}] },
      stl: { name: "Mike Conley", val: 1.4, all: [{"name": "Mike Conley", "val": 1.4}, {"name": "Donovan Mitchell", "val": 1.0}, {"name": "Jordan Clarkson", "val": 0.9}, {"name": "Royce O'Neale", "val": 0.8}, {"name": "Joe Ingles", "val": 0.7}, {"name": "Ersan İlyasova", "val": 0.6}, {"name": "Bojan Bogdanović", "val": 0.6}, {"name": "Rudy Gobert", "val": 0.6}, {"name": "Derrick Favors", "val": 0.5}, {"name": "Jarrell Brantley", "val": 0.3}, {"name": "Trent Forrest", "val": 0.3}, {"name": "Georges Niang", "val": 0.3}, {"name": "Miye Oni", "val": 0.2}, {"name": "Matt Thomas", "val": 0.1}, {"name": "Juwan Morgan", "val": 0.1}, {"name": "Udoka Azubuike", "val": 0.1}, {"name": "Elijah Hughes", "val": 0.1}, {"name": "Shaquille Harrison", "val": 0.1}] },
      blk: { name: "Rudy Gobert", val: 2.7, all: [{"name": "Rudy Gobert", "val": 2.7}, {"name": "Derrick Favors", "val": 1.0}, {"name": "Royce O'Neale", "val": 0.5}, {"name": "Donovan Mitchell", "val": 0.3}, {"name": "Udoka Azubuike", "val": 0.3}, {"name": "Ersan İlyasova", "val": 0.2}, {"name": "Mike Conley", "val": 0.2}, {"name": "Joe Ingles", "val": 0.2}, {"name": "Elijah Hughes", "val": 0.1}, {"name": "Jarrell Brantley", "val": 0.1}, {"name": "Trent Forrest", "val": 0.1}, {"name": "Miye Oni", "val": 0.1}, {"name": "Georges Niang", "val": 0.1}, {"name": "Jordan Clarkson", "val": 0.1}, {"name": "Bojan Bogdanović", "val": 0.1}, {"name": "Matt Thomas", "val": 0.0}, {"name": "Juwan Morgan", "val": 0.0}, {"name": "Shaquille Harrison", "val": 0.0}] },
    },
    avail: [
      { name: "Bojan Bogdanović", g: 72 },
      { name: "Georges Niang", g: 72 },
      { name: "Rudy Gobert", g: 71 },
      { name: "Royce O'Neale", g: 71 },
      { name: "Jordan Clarkson", g: 68 },
      { name: "Derrick Favors", g: 68 },
      { name: "Joe Ingles", g: 67 },
      { name: "Miye Oni", g: 54 },
      { name: "Donovan Mitchell", g: 53 },
      { name: "Mike Conley", g: 51 },
      { name: "Trent Forrest", g: 30 },
      { name: "Juwan Morgan", g: 29 },
      { name: "Jarrell Brantley", g: 28 },
      { name: "Matt Thomas", g: 19 },
      { name: "Elijah Hughes", g: 18 },
      { name: "Ersan İlyasova", g: 17 },
      { name: "Shaquille Harrison", g: 17 },
      { name: "Udoka Azubuike", g: 15 },
    ]
  },

  "2021-22": {
    w: 49, l: 33,
    topW:   { pts: 123, opp: 85, against: "Portland Trail Blazers" },
    worstL: { pts: 90, opp: 124, against: "New Orleans Pelicans" },
    conf_rank: 5,
    games: buildGames(
      "WWWWLWWWLLWLLWWWLWLWWWWWWWWLLWWWWWWLWWLLLLWLLWLLLLLWWWWWWLWWWLWLWLWLWWWLLLLLWLWWLW",
      ["Oklahoma City Thunder", "Sacramento Kings", "Denver Nuggets", "Houston Rockets", "Chicago Bulls", "Milwaukee Bucks", "Sacramento Kings", "Atlanta Hawks", "Miami Heat", "Orlando Magic", "Atlanta Hawks", "Indiana Pacers", "Miami Heat", "Philadelphia 76ers", "Toronto Raptors", "Sacramento Kings", "Memphis Grizzlies", "Oklahoma City Thunder", "New Orleans Pelicans", "New Orleans Pelicans", "Portland Trail Blazers", "Boston Celtics", "Cleveland Cavaliers", "Minnesota Timberwolves", "Philadelphia 76ers", "Washington Wizards", "Los Angeles Clippers", "San Antonio Spurs", "Washington Wizards", "Charlotte Hornets", "Minnesota Timberwolves", "Dallas Mavericks", "San Antonio Spurs", "Portland Trail Blazers", "Minnesota Timberwolves", "Golden State Warriors", "New Orleans Pelicans", "Denver Nuggets", "Toronto Raptors", "Indiana Pacers", "Detroit Pistons", "Cleveland Cavaliers", "Denver Nuggets", "Los Angeles Lakers", "Houston Rockets", "Detroit Pistons", "Golden State Warriors", "Phoenix Suns", "Phoenix Suns", "Memphis Grizzlies", "Minnesota Timberwolves", "Denver Nuggets", "Brooklyn Nets", "New York Knicks", "Golden State Warriors", "Orlando Magic", "Houston Rockets", "Los Angeles Lakers", "Dallas Mavericks", "Phoenix Suns", "Houston Rockets", "New Orleans Pelicans", "Oklahoma City Thunder", "Dallas Mavericks", "Portland Trail Blazers", "San Antonio Spurs", "Sacramento Kings", "Milwaukee Bucks", "Chicago Bulls", "Los Angeles Clippers", "New York Knicks", "Brooklyn Nets", "Boston Celtics", "Charlotte Hornets", "Dallas Mavericks", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Memphis Grizzlies", "Oklahoma City Thunder", "Phoenix Suns", "Portland Trail Blazers"],
      [107, 110, 122, 122, 99, 107, 119, 116, 115, 100, 110, 100, 105, 120, 119, 123, 118, 110, 97, 127, 129, 137, 109, 136, 118, 123, 124, 126, 103, 112, 128, 120, 110, 120, 120, 116, 115, 115, 108, 113, 116, 91, 125, 95, 111, 111, 92, 109, 97, 109, 106, 108, 125, 113, 111, 114, 135, 101, 114, 118, 132, 90, 116, 103, 123, 102, 134, 111, 125, 121, 108, 106, 97, 101, 100, 115, 122, 107, 121, 137, 105, 111],
      [21, 9, 12, 31, -8, 12, 6, 18, -3, -7, 12, -11, -6, 35, 16, 18, -1, 6, -1, 22, 22, 7, 1, 32, 22, 25, 21, -2, -6, 10, 12, 4, 6, 15, 12, -7, 11, 6, -14, -12, -10, -20, 23, -6, -5, 10, -2, -6, -8, -10, -20, 4, 23, 9, 26, 15, 34, -5, 5, 4, 5, -34, 13, -8, 38, -2, 9, -6, 15, 29, 15, -8, -28, -6, -14, -6, 13, -4, 6, 36, -6, 31]
    ),
    leaders: {
      pts: { name: "Donovan Mitchell", val: 25.9, all: [{"name": "Donovan Mitchell", "val": 25.9}, {"name": "Bojan Bogdanović", "val": 18.1}, {"name": "Jordan Clarkson", "val": 16.0}, {"name": "Rudy Gobert", "val": 15.6}, {"name": "Mike Conley", "val": 13.7}, {"name": "Hassan Whiteside", "val": 8.2}, {"name": "Rudy Gay", "val": 8.1}, {"name": "Royce O'Neale", "val": 7.4}, {"name": "Joe Ingles", "val": 7.2}, {"name": "Danuel House Jr.", "val": 6.8}, {"name": "Juancho Hernangómez", "val": 6.2}, {"name": "Eric Paschall", "val": 5.8}, {"name": "Udoka Azubuike", "val": 4.7}, {"name": "Greg Monroe", "val": 4.0}, {"name": "Jared Butler", "val": 3.8}, {"name": "Nickeil Alexander-Walker", "val": 3.5}, {"name": "Trent Forrest", "val": 3.3}, {"name": "Elijah Hughes", "val": 3.1}, {"name": "Denzel Valentine", "val": 2.5}, {"name": "Norvel Pelle", "val": 2.0}, {"name": "Malik Fitts", "val": 0.9}, {"name": "Xavier Sneed", "val": 0.7}, {"name": "Miye Oni", "val": 0.3}, {"name": "Zylan Cheatham", "val": 0.0}] },
      reb: { name: "Rudy Gobert", val: 14.7, all: [{"name": "Rudy Gobert", "val": 14.7}, {"name": "Hassan Whiteside", "val": 7.6}, {"name": "Royce O'Neale", "val": 4.8}, {"name": "Rudy Gay", "val": 4.4}, {"name": "Bojan Bogdanović", "val": 4.3}, {"name": "Donovan Mitchell", "val": 4.2}, {"name": "Udoka Azubuike", "val": 4.2}, {"name": "Jordan Clarkson", "val": 3.5}, {"name": "Juancho Hernangómez", "val": 3.5}, {"name": "Mike Conley", "val": 3.0}, {"name": "Greg Monroe", "val": 3.0}, {"name": "Joe Ingles", "val": 2.9}, {"name": "Danuel House Jr.", "val": 2.7}, {"name": "Denzel Valentine", "val": 2.0}, {"name": "Norvel Pelle", "val": 2.0}, {"name": "Eric Paschall", "val": 1.8}, {"name": "Trent Forrest", "val": 1.7}, {"name": "Nickeil Alexander-Walker", "val": 1.5}, {"name": "Malik Fitts", "val": 1.4}, {"name": "Elijah Hughes", "val": 1.2}, {"name": "Jared Butler", "val": 1.1}, {"name": "Xavier Sneed", "val": 0.6}, {"name": "Miye Oni", "val": 0.4}, {"name": "Zylan Cheatham", "val": 0.0}] },
      ast: { name: "Donovan Mitchell", val: 5.3, all: [{"name": "Donovan Mitchell", "val": 5.3}, {"name": "Mike Conley", "val": 5.3}, {"name": "Joe Ingles", "val": 3.5}, {"name": "Royce O'Neale", "val": 2.5}, {"name": "Jordan Clarkson", "val": 2.5}, {"name": "Trent Forrest", "val": 1.8}, {"name": "Bojan Bogdanović", "val": 1.7}, {"name": "Jared Butler", "val": 1.5}, {"name": "Nickeil Alexander-Walker", "val": 1.1}, {"name": "Rudy Gobert", "val": 1.1}, {"name": "Danuel House Jr.", "val": 1.0}, {"name": "Rudy Gay", "val": 1.0}, {"name": "Greg Monroe", "val": 1.0}, {"name": "Juancho Hernangómez", "val": 0.8}, {"name": "Eric Paschall", "val": 0.6}, {"name": "Hassan Whiteside", "val": 0.4}, {"name": "Elijah Hughes", "val": 0.4}, {"name": "Miye Oni", "val": 0.3}, {"name": "Xavier Sneed", "val": 0.1}, {"name": "Denzel Valentine", "val": 0.0}, {"name": "Udoka Azubuike", "val": 0.0}, {"name": "Norvel Pelle", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}, {"name": "Zylan Cheatham", "val": 0.0}] },
      stl: { name: "Donovan Mitchell", val: 1.5, all: [{"name": "Donovan Mitchell", "val": 1.5}, {"name": "Mike Conley", "val": 1.3}, {"name": "Royce O'Neale", "val": 1.1}, {"name": "Jordan Clarkson", "val": 0.8}, {"name": "Rudy Gobert", "val": 0.7}, {"name": "Danuel House Jr.", "val": 0.6}, {"name": "Bojan Bogdanović", "val": 0.5}, {"name": "Joe Ingles", "val": 0.5}, {"name": "Rudy Gay", "val": 0.5}, {"name": "Juancho Hernangómez", "val": 0.5}, {"name": "Trent Forrest", "val": 0.5}, {"name": "Denzel Valentine", "val": 0.5}, {"name": "Jared Butler", "val": 0.4}, {"name": "Hassan Whiteside", "val": 0.3}, {"name": "Elijah Hughes", "val": 0.3}, {"name": "Nickeil Alexander-Walker", "val": 0.3}, {"name": "Eric Paschall", "val": 0.2}, {"name": "Udoka Azubuike", "val": 0.1}, {"name": "Greg Monroe", "val": 0.0}, {"name": "Norvel Pelle", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}, {"name": "Zylan Cheatham", "val": 0.0}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "Miye Oni", "val": 0.0}] },
      blk: { name: "Rudy Gobert", val: 2.1, all: [{"name": "Rudy Gobert", "val": 2.1}, {"name": "Hassan Whiteside", "val": 1.6}, {"name": "Udoka Azubuike", "val": 0.6}, {"name": "Danuel House Jr.", "val": 0.5}, {"name": "Royce O'Neale", "val": 0.4}, {"name": "Juancho Hernangómez", "val": 0.4}, {"name": "Greg Monroe", "val": 0.3}, {"name": "Norvel Pelle", "val": 0.3}, {"name": "Mike Conley", "val": 0.3}, {"name": "Rudy Gay", "val": 0.3}, {"name": "Nickeil Alexander-Walker", "val": 0.3}, {"name": "Donovan Mitchell", "val": 0.2}, {"name": "Jordan Clarkson", "val": 0.2}, {"name": "Jared Butler", "val": 0.2}, {"name": "Elijah Hughes", "val": 0.1}, {"name": "Eric Paschall", "val": 0.1}, {"name": "Trent Forrest", "val": 0.1}, {"name": "Joe Ingles", "val": 0.1}, {"name": "Denzel Valentine", "val": 0.0}, {"name": "Bojan Bogdanović", "val": 0.0}, {"name": "Malik Fitts", "val": 0.0}, {"name": "Zylan Cheatham", "val": 0.0}, {"name": "Xavier Sneed", "val": 0.0}, {"name": "Miye Oni", "val": 0.0}] },
    },
    avail: [
      { name: "Jordan Clarkson", g: 79 },
      { name: "Royce O'Neale", g: 77 },
      { name: "Mike Conley", g: 72 },
      { name: "Bojan Bogdanović", g: 69 },
      { name: "Donovan Mitchell", g: 67 },
      { name: "Rudy Gobert", g: 66 },
      { name: "Hassan Whiteside", g: 65 },
      { name: "Trent Forrest", g: 60 },
      { name: "Eric Paschall", g: 58 },
      { name: "Rudy Gay", g: 55 },
      { name: "Joe Ingles", g: 45 },
      { name: "Jared Butler", g: 42 },
      { name: "Danuel House Jr.", g: 25 },
      { name: "Juancho Hernangómez", g: 17 },
      { name: "Udoka Azubuike", g: 17 },
      { name: "Miye Oni", g: 16 },
      { name: "Nickeil Alexander-Walker", g: 15 },
      { name: "Elijah Hughes", g: 14 },
      { name: "Malik Fitts", g: 7 },
      { name: "Xavier Sneed", g: 7 },
      { name: "Greg Monroe", g: 3 },
      { name: "Norvel Pelle", g: 3 },
      { name: "Denzel Valentine", g: 2 },
      { name: "Zylan Cheatham", g: 1 },
    ]
  },

  "2022-23": {
    w: 37, l: 45,
    topW:   { pts: 139, opp: 116, against: "Los Angeles Lakers" },
    worstL: { pts: 116, opp: 144, against: "Milwaukee Bucks" },
    conf_rank: 12,
    games: buildGames(
      "WWWLWLWWLWWWWLLLWWLLLLLWWLWLLWWLLWWLLLLLWLLWWLWWLWLWWLLLWLWLWWLLLLWWLWWLLLLWLLLLWL",
      ["Denver Nuggets", "Minnesota Timberwolves", "New Orleans Pelicans", "Houston Rockets", "Houston Rockets", "Denver Nuggets", "Memphis Grizzlies", "Memphis Grizzlies", "Dallas Mavericks", "Los Angeles Lakers", "Los Angeles Clippers", "Los Angeles Lakers", "Atlanta Hawks", "Washington Wizards", "Philadelphia 76ers", "New York Knicks", "Phoenix Suns", "Portland Trail Blazers", "Los Angeles Clippers", "Detroit Pistons", "Golden State Warriors", "Phoenix Suns", "Chicago Bulls", "Los Angeles Clippers", "Indiana Pacers", "Portland Trail Blazers", "Golden State Warriors", "Minnesota Timberwolves", "Denver Nuggets", "New Orleans Pelicans", "New Orleans Pelicans", "Milwaukee Bucks", "Cleveland Cavaliers", "Detroit Pistons", "Washington Wizards", "San Antonio Spurs", "Golden State Warriors", "Sacramento Kings", "Miami Heat", "Sacramento Kings", "Houston Rockets", "Chicago Bulls", "Memphis Grizzlies", "Cleveland Cavaliers", "Orlando Magic", "Philadelphia 76ers", "Minnesota Timberwolves", "Los Angeles Clippers", "Brooklyn Nets", "Charlotte Hornets", "Portland Trail Blazers", "Dallas Mavericks", "Toronto Raptors", "Atlanta Hawks", "Dallas Mavericks", "Minnesota Timberwolves", "Toronto Raptors", "New York Knicks", "Indiana Pacers", "Memphis Grizzlies", "Oklahoma City Thunder", "San Antonio Spurs", "San Antonio Spurs", "Oklahoma City Thunder", "Oklahoma City Thunder", "Dallas Mavericks", "Orlando Magic", "Charlotte Hornets", "Miami Heat", "Boston Celtics", "Sacramento Kings", "Portland Trail Blazers", "Milwaukee Bucks", "Sacramento Kings", "Phoenix Suns", "San Antonio Spurs", "Boston Celtics", "Brooklyn Nets", "Los Angeles Lakers", "Oklahoma City Thunder", "Denver Nuggets", "Los Angeles Lakers"],
      [123, 132, 122, 108, 109, 101, 124, 121, 100, 130, 110, 139, 125, 112, 98, 111, 134, 118, 114, 116, 118, 112, 107, 125, 139, 111, 124, 108, 110, 121, 132, 97, 99, 126, 120, 122, 107, 125, 123, 115, 131, 118, 118, 116, 112, 117, 126, 126, 106, 120, 124, 108, 131, 108, 111, 118, 122, 120, 123, 111, 120, 118, 94, 103, 119, 116, 131, 119, 115, 118, 128, 115, 116, 113, 103, 128, 114, 110, 133, 98, 118, 117],
      [21, 6, 1, -6, 8, -16, 1, 16, -3, 14, 8, 23, 6, -9, -7, -7, 1, 5, -7, -9, -11, -1, -7, 13, 20, -5, 1, -10, -5, 21, 3, -26, -23, 15, 8, -4, -5, -1, -3, -2, 17, -8, -5, 2, 4, -1, 1, 23, -11, 18, -10, 8, 3, -7, -13, -25, 6, -6, 6, -6, 1, 16, -8, -27, -10, -4, 7, 8, -4, 1, 8, -12, -28, -8, -14, 11, -8, -1, -2, -16, 4, -11]
    ),
    leaders: {
      pts: { name: "Lauri Markkanen", val: 25.6, all: [{"name": "Lauri Markkanen", "val": 25.6}, {"name": "Jordan Clarkson", "val": 20.8}, {"name": "Collin Sexton", "val": 14.3}, {"name": "Malik Beasley", "val": 13.4}, {"name": "Kris Dunn", "val": 13.2}, {"name": "Kelly Olynyk", "val": 12.5}, {"name": "Talen Horton-Tucker", "val": 10.7}, {"name": "Mike Conley", "val": 10.7}, {"name": "Luka Šamanić", "val": 9.9}, {"name": "Walker Kessler", "val": 9.2}, {"name": "Jarred Vanderbilt", "val": 8.3}, {"name": "Ochai Agbaji", "val": 7.9}, {"name": "Simone Fontecchio", "val": 6.3}, {"name": "Nickeil Alexander-Walker", "val": 6.3}, {"name": "Jarrell Brantley", "val": 5.5}, {"name": "Rudy Gay", "val": 5.2}, {"name": "Johnny Juzang", "val": 4.8}, {"name": "Damian Jones", "val": 4.6}, {"name": "Udoka Azubuike", "val": 3.5}, {"name": "Juan Toscano-Anderson", "val": 3.4}, {"name": "Micah Potter", "val": 3.4}, {"name": "Leandro Bolmaro", "val": 0.4}, {"name": "Frank Jackson", "val": 0.0}] },
      reb: { name: "Lauri Markkanen", val: 8.6, all: [{"name": "Lauri Markkanen", "val": 8.6}, {"name": "Walker Kessler", "val": 8.4}, {"name": "Jarred Vanderbilt", "val": 7.9}, {"name": "Kelly Olynyk", "val": 6.2}, {"name": "Kris Dunn", "val": 4.5}, {"name": "Luka Šamanić", "val": 4.3}, {"name": "Jordan Clarkson", "val": 4.0}, {"name": "Malik Beasley", "val": 3.6}, {"name": "Damian Jones", "val": 3.5}, {"name": "Udoka Azubuike", "val": 3.3}, {"name": "Talen Horton-Tucker", "val": 3.2}, {"name": "Juan Toscano-Anderson", "val": 2.9}, {"name": "Rudy Gay", "val": 2.9}, {"name": "Mike Conley", "val": 2.5}, {"name": "Micah Potter", "val": 2.3}, {"name": "Collin Sexton", "val": 2.2}, {"name": "Johnny Juzang", "val": 2.2}, {"name": "Ochai Agbaji", "val": 2.1}, {"name": "Frank Jackson", "val": 2.0}, {"name": "Simone Fontecchio", "val": 1.7}, {"name": "Nickeil Alexander-Walker", "val": 1.6}, {"name": "Jarrell Brantley", "val": 1.5}, {"name": "Leandro Bolmaro", "val": 0.5}] },
      ast: { name: "Mike Conley", val: 7.7, all: [{"name": "Mike Conley", "val": 7.7}, {"name": "Kris Dunn", "val": 5.6}, {"name": "Jordan Clarkson", "val": 4.4}, {"name": "Talen Horton-Tucker", "val": 3.8}, {"name": "Kelly Olynyk", "val": 3.7}, {"name": "Collin Sexton", "val": 2.9}, {"name": "Jarred Vanderbilt", "val": 2.7}, {"name": "Nickeil Alexander-Walker", "val": 2.1}, {"name": "Luka Šamanić", "val": 2.1}, {"name": "Lauri Markkanen", "val": 1.9}, {"name": "Juan Toscano-Anderson", "val": 1.8}, {"name": "Malik Beasley", "val": 1.7}, {"name": "Ochai Agbaji", "val": 1.1}, {"name": "Rudy Gay", "val": 1.0}, {"name": "Frank Jackson", "val": 1.0}, {"name": "Walker Kessler", "val": 0.9}, {"name": "Simone Fontecchio", "val": 0.8}, {"name": "Jarrell Brantley", "val": 0.8}, {"name": "Damian Jones", "val": 0.6}, {"name": "Micah Potter", "val": 0.6}, {"name": "Leandro Bolmaro", "val": 0.5}, {"name": "Johnny Juzang", "val": 0.4}, {"name": "Udoka Azubuike", "val": 0.3}] },
      stl: { name: "Kris Dunn", val: 1.1, all: [{"name": "Kris Dunn", "val": 1.1}, {"name": "Mike Conley", "val": 1.0}, {"name": "Jarred Vanderbilt", "val": 1.0}, {"name": "Luka Šamanić", "val": 0.9}, {"name": "Kelly Olynyk", "val": 0.9}, {"name": "Malik Beasley", "val": 0.8}, {"name": "Nickeil Alexander-Walker", "val": 0.7}, {"name": "Lauri Markkanen", "val": 0.6}, {"name": "Talen Horton-Tucker", "val": 0.6}, {"name": "Collin Sexton", "val": 0.6}, {"name": "Jordan Clarkson", "val": 0.5}, {"name": "Walker Kessler", "val": 0.4}, {"name": "Ochai Agbaji", "val": 0.3}, {"name": "Damian Jones", "val": 0.3}, {"name": "Juan Toscano-Anderson", "val": 0.3}, {"name": "Simone Fontecchio", "val": 0.3}, {"name": "Rudy Gay", "val": 0.3}, {"name": "Johnny Juzang", "val": 0.2}, {"name": "Udoka Azubuike", "val": 0.2}, {"name": "Leandro Bolmaro", "val": 0.2}, {"name": "Micah Potter", "val": 0.1}, {"name": "Jarrell Brantley", "val": 0.0}, {"name": "Frank Jackson", "val": 0.0}] },
      blk: { name: "Walker Kessler", val: 2.3, all: [{"name": "Walker Kessler", "val": 2.3}, {"name": "Lauri Markkanen", "val": 0.6}, {"name": "Jarrell Brantley", "val": 0.5}, {"name": "Kelly Olynyk", "val": 0.5}, {"name": "Kris Dunn", "val": 0.5}, {"name": "Damian Jones", "val": 0.5}, {"name": "Udoka Azubuike", "val": 0.4}, {"name": "Nickeil Alexander-Walker", "val": 0.4}, {"name": "Talen Horton-Tucker", "val": 0.4}, {"name": "Luka Šamanić", "val": 0.3}, {"name": "Ochai Agbaji", "val": 0.3}, {"name": "Jarred Vanderbilt", "val": 0.3}, {"name": "Rudy Gay", "val": 0.3}, {"name": "Jordan Clarkson", "val": 0.2}, {"name": "Simone Fontecchio", "val": 0.2}, {"name": "Johnny Juzang", "val": 0.2}, {"name": "Mike Conley", "val": 0.2}, {"name": "Collin Sexton", "val": 0.1}, {"name": "Juan Toscano-Anderson", "val": 0.1}, {"name": "Malik Beasley", "val": 0.1}, {"name": "Leandro Bolmaro", "val": 0.1}, {"name": "Micah Potter", "val": 0.0}, {"name": "Frank Jackson", "val": 0.0}] },
    },
    avail: [
      { name: "Walker Kessler", g: 74 },
      { name: "Kelly Olynyk", g: 68 },
      { name: "Lauri Markkanen", g: 66 },
      { name: "Talen Horton-Tucker", g: 65 },
      { name: "Jordan Clarkson", g: 61 },
      { name: "Ochai Agbaji", g: 59 },
      { name: "Rudy Gay", g: 56 },
      { name: "Malik Beasley", g: 55 },
      { name: "Simone Fontecchio", g: 52 },
      { name: "Jarred Vanderbilt", g: 52 },
      { name: "Collin Sexton", g: 48 },
      { name: "Mike Conley", g: 43 },
      { name: "Udoka Azubuike", g: 36 },
      { name: "Nickeil Alexander-Walker", g: 36 },
      { name: "Juan Toscano-Anderson", g: 22 },
      { name: "Kris Dunn", g: 22 },
      { name: "Damian Jones", g: 19 },
      { name: "Johnny Juzang", g: 18 },
      { name: "Leandro Bolmaro", g: 14 },
      { name: "Luka Šamanić", g: 7 },
      { name: "Micah Potter", g: 7 },
      { name: "Jarrell Brantley", g: 4 },
      { name: "Frank Jackson", g: 1 },
    ]
  },

  "2023-24": {
    w: 31, l: 51,
    topW:   { pts: 127, opp: 90, against: "Dallas Mavericks" },
    worstL: { pts: 97, opp: 147, against: "Dallas Mavericks" },
    conf_rank: 12,
    games: buildGames(
      "LWLLWLLLLWWLLLLWWLLWLLLWWLWLWWWLWWWLWWWWWWLLLWWLLLWWLLLLLWLLLWLLLWLLLLLLLLLLLLLWWL",
      ["Sacramento Kings", "Los Angeles Clippers", "Phoenix Suns", "Denver Nuggets", "Memphis Grizzlies", "Orlando Magic", "Minnesota Timberwolves", "Chicago Bulls", "Indiana Pacers", "Memphis Grizzlies", "Portland Trail Blazers", "Phoenix Suns", "Phoenix Suns", "Los Angeles Lakers", "Portland Trail Blazers", "New Orleans Pelicans", "New Orleans Pelicans", "Memphis Grizzlies", "Minnesota Timberwolves", "Portland Trail Blazers", "Dallas Mavericks", "Los Angeles Clippers", "Oklahoma City Thunder", "New York Knicks", "Portland Trail Blazers", "Sacramento Kings", "Brooklyn Nets", "Cleveland Cavaliers", "Detroit Pistons", "Toronto Raptors", "San Antonio Spurs", "New Orleans Pelicans", "Miami Heat", "Dallas Mavericks", "Detroit Pistons", "Boston Celtics", "Philadelphia 76ers", "Milwaukee Bucks", "Denver Nuggets", "Toronto Raptors", "Los Angeles Lakers", "Indiana Pacers", "Oklahoma City Thunder", "Houston Rockets", "New Orleans Pelicans", "Washington Wizards", "Charlotte Hornets", "Brooklyn Nets", "New York Knicks", "Philadelphia 76ers", "Milwaukee Bucks", "Oklahoma City Thunder", "Phoenix Suns", "Golden State Warriors", "Los Angeles Lakers", "Golden State Warriors", "Charlotte Hornets", "San Antonio Spurs", "Atlanta Hawks", "Orlando Magic", "Miami Heat", "Washington Wizards", "Chicago Bulls", "Denver Nuggets", "Boston Celtics", "Atlanta Hawks", "Minnesota Timberwolves", "Minnesota Timberwolves", "Oklahoma City Thunder", "Dallas Mavericks", "Houston Rockets", "Dallas Mavericks", "San Antonio Spurs", "Houston Rockets", "Sacramento Kings", "Cleveland Cavaliers", "Los Angeles Clippers", "Golden State Warriors", "Denver Nuggets", "Houston Rockets", "Los Angeles Clippers", "Golden State Warriors"],
      [114, 120, 104, 102, 133, 113, 95, 113, 118, 127, 115, 128, 137, 99, 105, 105, 114, 91, 90, 118, 97, 103, 120, 117, 122, 104, 125, 116, 119, 126, 130, 105, 117, 127, 154, 97, 120, 132, 124, 145, 132, 132, 129, 126, 124, 123, 134, 114, 103, 124, 123, 124, 115, 107, 122, 137, 107, 128, 97, 107, 120, 127, 117, 121, 107, 124, 100, 104, 107, 97, 119, 105, 111, 100, 106, 113, 102, 110, 95, 124, 110, 116],
      [-16, 2, -22, -8, 24, -2, -28, -17, -16, 6, 16, -3, -3, -32, -16, 5, 2, -14, -11, 5, -50, -14, -14, 4, 8, -21, 17, -8, 8, 7, 12, -7, 8, 37, 6, -29, 11, 16, 13, 32, 7, 27, -5, -1, -29, 15, 12, -33, -15, -3, 15, 7, -14, -22, -16, -3, -8, 19, -27, -8, -6, 12, -2, -21, -16, 2, -19, -10, -12, -16, -28, -10, -7, -1, -21, -16, -29, -8, -16, 3, 1, -7]
    ),
    leaders: {
      pts: { name: "Lauri Markkanen", val: 23.2, all: [{"name": "Lauri Markkanen", "val": 23.2}, {"name": "Collin Sexton", "val": 18.7}, {"name": "Jordan Clarkson", "val": 17.1}, {"name": "John Collins", "val": 15.1}, {"name": "Kenneth Lofton Jr.", "val": 13.8}, {"name": "Keyonte George", "val": 13.0}, {"name": "Talen Horton-Tucker", "val": 10.1}, {"name": "Simone Fontecchio", "val": 8.9}, {"name": "Kelly Olynyk", "val": 8.1}, {"name": "Walker Kessler", "val": 8.1}, {"name": "Darius Bazley", "val": 8.0}, {"name": "Brice Sensabaugh", "val": 7.5}, {"name": "Taylor Hendricks", "val": 7.3}, {"name": "Johnny Juzang", "val": 7.2}, {"name": "Ochai Agbaji", "val": 5.4}, {"name": "Kris Dunn", "val": 5.4}, {"name": "Omer Yurtseven", "val": 4.6}, {"name": "Luka Šamanić", "val": 4.1}, {"name": "Kira Lewis Jr.", "val": 3.8}, {"name": "Micah Potter", "val": 3.3}, {"name": "Jason Preston", "val": 1.7}] },
      reb: { name: "John Collins", val: 8.5, all: [{"name": "John Collins", "val": 8.5}, {"name": "Lauri Markkanen", "val": 8.2}, {"name": "Walker Kessler", "val": 7.5}, {"name": "Kelly Olynyk", "val": 5.1}, {"name": "Kenneth Lofton Jr.", "val": 5.0}, {"name": "Taylor Hendricks", "val": 4.6}, {"name": "Darius Bazley", "val": 4.5}, {"name": "Omer Yurtseven", "val": 4.3}, {"name": "Simone Fontecchio", "val": 3.5}, {"name": "Jordan Clarkson", "val": 3.4}, {"name": "Brice Sensabaugh", "val": 3.2}, {"name": "Kris Dunn", "val": 2.9}, {"name": "Keyonte George", "val": 2.8}, {"name": "Micah Potter", "val": 2.7}, {"name": "Collin Sexton", "val": 2.6}, {"name": "Ochai Agbaji", "val": 2.5}, {"name": "Talen Horton-Tucker", "val": 2.4}, {"name": "Jason Preston", "val": 2.4}, {"name": "Luka Šamanić", "val": 2.4}, {"name": "Johnny Juzang", "val": 1.8}, {"name": "Kira Lewis Jr.", "val": 1.0}] },
      ast: { name: "Jordan Clarkson", val: 5.0, all: [{"name": "Jordan Clarkson", "val": 5.0}, {"name": "Collin Sexton", "val": 4.9}, {"name": "Kenneth Lofton Jr.", "val": 4.8}, {"name": "Kelly Olynyk", "val": 4.4}, {"name": "Keyonte George", "val": 4.4}, {"name": "Kris Dunn", "val": 3.8}, {"name": "Talen Horton-Tucker", "val": 3.5}, {"name": "Jason Preston", "val": 2.3}, {"name": "Lauri Markkanen", "val": 2.0}, {"name": "Brice Sensabaugh", "val": 1.7}, {"name": "Kira Lewis Jr.", "val": 1.6}, {"name": "Simone Fontecchio", "val": 1.5}, {"name": "Johnny Juzang", "val": 1.2}, {"name": "John Collins", "val": 1.1}, {"name": "Walker Kessler", "val": 0.9}, {"name": "Ochai Agbaji", "val": 0.9}, {"name": "Taylor Hendricks", "val": 0.8}, {"name": "Darius Bazley", "val": 0.8}, {"name": "Omer Yurtseven", "val": 0.6}, {"name": "Micah Potter", "val": 0.4}, {"name": "Luka Šamanić", "val": 0.4}] },
      stl: { name: "Kris Dunn", val: 1.0, all: [{"name": "Kris Dunn", "val": 1.0}, {"name": "Darius Bazley", "val": 1.0}, {"name": "Lauri Markkanen", "val": 0.9}, {"name": "Talen Horton-Tucker", "val": 0.9}, {"name": "Kenneth Lofton Jr.", "val": 0.8}, {"name": "Collin Sexton", "val": 0.8}, {"name": "Taylor Hendricks", "val": 0.7}, {"name": "Kelly Olynyk", "val": 0.7}, {"name": "Simone Fontecchio", "val": 0.6}, {"name": "Jordan Clarkson", "val": 0.6}, {"name": "John Collins", "val": 0.6}, {"name": "Walker Kessler", "val": 0.5}, {"name": "Keyonte George", "val": 0.5}, {"name": "Ochai Agbaji", "val": 0.5}, {"name": "Brice Sensabaugh", "val": 0.4}, {"name": "Micah Potter", "val": 0.3}, {"name": "Jason Preston", "val": 0.3}, {"name": "Kira Lewis Jr.", "val": 0.3}, {"name": "Johnny Juzang", "val": 0.2}, {"name": "Omer Yurtseven", "val": 0.2}, {"name": "Luka Šamanić", "val": 0.1}] },
      blk: { name: "Walker Kessler", val: 2.4, all: [{"name": "Walker Kessler", "val": 2.4}, {"name": "Darius Bazley", "val": 1.2}, {"name": "John Collins", "val": 0.9}, {"name": "Taylor Hendricks", "val": 0.8}, {"name": "Ochai Agbaji", "val": 0.6}, {"name": "Lauri Markkanen", "val": 0.5}, {"name": "Kenneth Lofton Jr.", "val": 0.5}, {"name": "Kris Dunn", "val": 0.4}, {"name": "Omer Yurtseven", "val": 0.4}, {"name": "Micah Potter", "val": 0.4}, {"name": "Simone Fontecchio", "val": 0.4}, {"name": "Talen Horton-Tucker", "val": 0.4}, {"name": "Brice Sensabaugh", "val": 0.2}, {"name": "Kelly Olynyk", "val": 0.2}, {"name": "Collin Sexton", "val": 0.2}, {"name": "Luka Šamanić", "val": 0.2}, {"name": "Johnny Juzang", "val": 0.1}, {"name": "Jordan Clarkson", "val": 0.1}, {"name": "Keyonte George", "val": 0.1}, {"name": "Jason Preston", "val": 0.1}, {"name": "Kira Lewis Jr.", "val": 0.1}] },
    },
    avail: [
      { name: "Collin Sexton", g: 78 },
      { name: "Keyonte George", g: 75 },
      { name: "John Collins", g: 68 },
      { name: "Kris Dunn", g: 66 },
      { name: "Walker Kessler", g: 64 },
      { name: "Lauri Markkanen", g: 55 },
      { name: "Jordan Clarkson", g: 55 },
      { name: "Ochai Agbaji", g: 51 },
      { name: "Talen Horton-Tucker", g: 51 },
      { name: "Kelly Olynyk", g: 50 },
      { name: "Simone Fontecchio", g: 50 },
      { name: "Omer Yurtseven", g: 48 },
      { name: "Luka Šamanić", g: 43 },
      { name: "Taylor Hendricks", g: 40 },
      { name: "Brice Sensabaugh", g: 32 },
      { name: "Johnny Juzang", g: 20 },
      { name: "Micah Potter", g: 16 },
      { name: "Kira Lewis Jr.", g: 12 },
      { name: "Jason Preston", g: 7 },
      { name: "Darius Bazley", g: 6 },
      { name: "Kenneth Lofton Jr.", g: 4 },
    ]
  },

  "2024-25": {
    w: 17, l: 65,
    topW:   { pts: 141, opp: 99, against: "Portland Trail Blazers" },
    worstL: { pts: 97, opp: 141, against: "Sacramento Kings" },
    conf_rank: 15,
    games: buildGames(
      "LLLLLLWLWLWLLLLWLLLLLWLLLWWLLLLLWWLLLWLLLLLLLLWLWLLLWLLWLLWLLLLLLLLLLWLLLLLLLLLWLL",
      ["Memphis Grizzlies", "Golden State Warriors", "Dallas Mavericks", "Sacramento Kings", "San Antonio Spurs", "Denver Nuggets", "Chicago Bulls", "Milwaukee Bucks", "San Antonio Spurs", "Phoenix Suns", "Dallas Mavericks", "Sacramento Kings", "Los Angeles Clippers", "Los Angeles Lakers", "San Antonio Spurs", "New York Knicks", "San Antonio Spurs", "Denver Nuggets", "Dallas Mavericks", "Los Angeles Lakers", "Oklahoma City Thunder", "Portland Trail Blazers", "Sacramento Kings", "Phoenix Suns", "Los Angeles Clippers", "Detroit Pistons", "Brooklyn Nets", "Cleveland Cavaliers", "Portland Trail Blazers", "Philadelphia 76ers", "Denver Nuggets", "New York Knicks", "Miami Heat", "Orlando Magic", "Atlanta Hawks", "Miami Heat", "Phoenix Suns", "Brooklyn Nets", "Charlotte Hornets", "New Orleans Pelicans", "New Orleans Pelicans", "Oklahoma City Thunder", "Memphis Grizzlies", "Milwaukee Bucks", "Golden State Warriors", "Minnesota Timberwolves", "Orlando Magic", "Indiana Pacers", "Golden State Warriors", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Lakers", "Los Angeles Lakers", "Los Angeles Clippers", "Oklahoma City Thunder", "Houston Rockets", "Portland Trail Blazers", "Sacramento Kings", "Minnesota Timberwolves", "New Orleans Pelicans", "Detroit Pistons", "Washington Wizards", "Toronto Raptors", "Philadelphia 76ers", "Boston Celtics", "Memphis Grizzlies", "Toronto Raptors", "Minnesota Timberwolves", "Chicago Bulls", "Washington Wizards", "Boston Celtics", "Cleveland Cavaliers", "Memphis Grizzlies", "Houston Rockets", "Denver Nuggets", "Charlotte Hornets", "Houston Rockets", "Indiana Pacers", "Atlanta Hawks", "Portland Trail Blazers", "Oklahoma City Thunder", "Minnesota Timberwolves"],
      [124, 86, 102, 96, 88, 103, 135, 100, 111, 112, 115, 117, 105, 118, 118, 121, 115, 103, 94, 104, 106, 141, 97, 126, 107, 126, 105, 113, 120, 111, 121, 103, 136, 105, 121, 92, 106, 112, 112, 123, 119, 114, 103, 110, 103, 113, 113, 111, 131, 127, 110, 113, 131, 116, 107, 124, 112, 101, 117, 121, 106, 122, 109, 122, 108, 115, 118, 102, 97, 128, 99, 91, 103, 110, 93, 106, 105, 112, 134, 133, 111, 105],
      [-2, -41, -8, -17, -18, -26, 9, -23, 1, -8, 2, -4, -11, -6, -8, 15, -13, -19, -12, -1, -27, 42, -44, -8, -37, 7, 11, -11, -2, -3, -11, -16, 36, 13, -3, -5, -8, 1, -5, -13, -4, -9, -22, -15, -11, -25, 14, -1, 3, -8, -20, -19, 12, -4, -23, 9, -2, -17, 1, -7, -28, -3, -9, -4, -6, -7, -8, -26, -14, 16, -22, -29, -37, -11, -36, -4, -38, -28, -13, 7, -34, -11]
    ),
    leaders: {
      pts: { name: "Lauri Markkanen", val: 19.0, all: [{"name": "Lauri Markkanen", "val": 19.0}, {"name": "John Collins", "val": 19.0}, {"name": "Collin Sexton", "val": 18.4}, {"name": "Keyonte George", "val": 16.8}, {"name": "Jordan Clarkson", "val": 16.2}, {"name": "Walker Kessler", "val": 11.1}, {"name": "Brice Sensabaugh", "val": 10.9}, {"name": "Kyle Filipowski", "val": 9.6}, {"name": "Johnny Juzang", "val": 8.9}, {"name": "Svi Mykhailiuk", "val": 8.8}, {"name": "Isaiah Collier", "val": 8.7}, {"name": "Oscar Tshiebwe", "val": 7.6}, {"name": "KJ Martin", "val": 6.3}, {"name": "Drew Eubanks", "val": 5.8}, {"name": "Taylor Hendricks", "val": 4.7}, {"name": "Cody Williams", "val": 4.6}, {"name": "Patty Mills", "val": 4.4}, {"name": "Micah Potter", "val": 4.3}, {"name": "Jaden Springer", "val": 3.8}, {"name": "Elijah Harkless", "val": 3.2}] },
      reb: { name: "Walker Kessler", val: 12.2, all: [{"name": "Walker Kessler", "val": 12.2}, {"name": "Oscar Tshiebwe", "val": 8.7}, {"name": "John Collins", "val": 8.2}, {"name": "Kyle Filipowski", "val": 6.1}, {"name": "Lauri Markkanen", "val": 5.9}, {"name": "Taylor Hendricks", "val": 5.0}, {"name": "Drew Eubanks", "val": 4.5}, {"name": "Micah Potter", "val": 4.3}, {"name": "Keyonte George", "val": 3.8}, {"name": "Isaiah Collier", "val": 3.3}, {"name": "Jordan Clarkson", "val": 3.2}, {"name": "Brice Sensabaugh", "val": 3.0}, {"name": "Johnny Juzang", "val": 2.9}, {"name": "KJ Martin", "val": 2.8}, {"name": "Collin Sexton", "val": 2.7}, {"name": "Svi Mykhailiuk", "val": 2.4}, {"name": "Cody Williams", "val": 2.3}, {"name": "Elijah Harkless", "val": 2.1}, {"name": "Jaden Springer", "val": 2.0}, {"name": "Patty Mills", "val": 1.2}] },
      ast: { name: "Isaiah Collier", val: 6.3, all: [{"name": "Isaiah Collier", "val": 6.3}, {"name": "Keyonte George", "val": 5.6}, {"name": "Collin Sexton", "val": 4.2}, {"name": "Jordan Clarkson", "val": 3.7}, {"name": "John Collins", "val": 2.0}, {"name": "Svi Mykhailiuk", "val": 2.0}, {"name": "Kyle Filipowski", "val": 1.9}, {"name": "Walker Kessler", "val": 1.7}, {"name": "KJ Martin", "val": 1.5}, {"name": "Lauri Markkanen", "val": 1.5}, {"name": "Brice Sensabaugh", "val": 1.5}, {"name": "Jaden Springer", "val": 1.4}, {"name": "Cody Williams", "val": 1.2}, {"name": "Drew Eubanks", "val": 1.2}, {"name": "Patty Mills", "val": 1.2}, {"name": "Johnny Juzang", "val": 1.1}, {"name": "Micah Potter", "val": 0.8}, {"name": "Elijah Harkless", "val": 0.8}, {"name": "Taylor Hendricks", "val": 0.7}, {"name": "Oscar Tshiebwe", "val": 0.6}] },
      stl: { name: "Taylor Hendricks", val: 1.7, all: [{"name": "Taylor Hendricks", "val": 1.7}, {"name": "John Collins", "val": 1.0}, {"name": "Elijah Harkless", "val": 1.0}, {"name": "Isaiah Collier", "val": 0.9}, {"name": "Oscar Tshiebwe", "val": 0.9}, {"name": "Jordan Clarkson", "val": 0.8}, {"name": "Keyonte George", "val": 0.7}, {"name": "Lauri Markkanen", "val": 0.7}, {"name": "Patty Mills", "val": 0.7}, {"name": "Kyle Filipowski", "val": 0.7}, {"name": "Collin Sexton", "val": 0.7}, {"name": "Jaden Springer", "val": 0.7}, {"name": "Brice Sensabaugh", "val": 0.6}, {"name": "Johnny Juzang", "val": 0.6}, {"name": "Walker Kessler", "val": 0.6}, {"name": "Cody Williams", "val": 0.5}, {"name": "Svi Mykhailiuk", "val": 0.5}, {"name": "Micah Potter", "val": 0.4}, {"name": "KJ Martin", "val": 0.3}, {"name": "Drew Eubanks", "val": 0.3}] },
      blk: { name: "Walker Kessler", val: 2.4, all: [{"name": "Walker Kessler", "val": 2.4}, {"name": "Taylor Hendricks", "val": 1.3}, {"name": "John Collins", "val": 1.0}, {"name": "Drew Eubanks", "val": 0.9}, {"name": "Micah Potter", "val": 0.4}, {"name": "Lauri Markkanen", "val": 0.4}, {"name": "Kyle Filipowski", "val": 0.3}, {"name": "KJ Martin", "val": 0.3}, {"name": "Cody Williams", "val": 0.3}, {"name": "Svi Mykhailiuk", "val": 0.2}, {"name": "Patty Mills", "val": 0.2}, {"name": "Jaden Springer", "val": 0.2}, {"name": "Isaiah Collier", "val": 0.2}, {"name": "Jordan Clarkson", "val": 0.2}, {"name": "Brice Sensabaugh", "val": 0.1}, {"name": "Johnny Juzang", "val": 0.1}, {"name": "Oscar Tshiebwe", "val": 0.1}, {"name": "Collin Sexton", "val": 0.1}, {"name": "Elijah Harkless", "val": 0.1}, {"name": "Keyonte George", "val": 0.1}] },
    },
    avail: [
      { name: "Kyle Filipowski", g: 72 },
      { name: "Isaiah Collier", g: 71 },
      { name: "Brice Sensabaugh", g: 71 },
      { name: "Keyonte George", g: 67 },
      { name: "Johnny Juzang", g: 64 },
      { name: "Collin Sexton", g: 63 },
      { name: "Walker Kessler", g: 58 },
      { name: "Cody Williams", g: 50 },
      { name: "Lauri Markkanen", g: 47 },
      { name: "John Collins", g: 40 },
      { name: "Svi Mykhailiuk", g: 38 },
      { name: "Micah Potter", g: 38 },
      { name: "Jordan Clarkson", g: 37 },
      { name: "Drew Eubanks", g: 37 },
      { name: "KJ Martin", g: 19 },
      { name: "Patty Mills", g: 17 },
      { name: "Jaden Springer", g: 17 },
      { name: "Oscar Tshiebwe", g: 14 },
      { name: "Elijah Harkless", g: 10 },
      { name: "Taylor Hendricks", g: 3 },
    ]
  },

  "2025-26": {
    w: 22, l: 60,
    topW:   { pts: 147, opp: 101, against: "Memphis Grizzlies" },
    worstL: { pts: 95, opp: 150, against: "Charlotte Hornets" },
    conf_rank: 15,
    games: buildGames(
      "WLWLLLWLLLWLWLLLLWLWWLLWWLLLLWWLLLLLWLWLLLLWLLLLLLWLLWWLLLLLLLWLWLLLLWLLLLLLLLLLWL",
      ["Los Angeles Clippers", "Sacramento Kings", "Phoenix Suns", "Portland Trail Blazers", "Phoenix Suns", "Charlotte Hornets", "Boston Celtics", "Detroit Pistons", "Minnesota Timberwolves", "Minnesota Timberwolves", "Indiana Pacers", "Atlanta Hawks", "Chicago Bulls", "Los Angeles Lakers", "Oklahoma City Thunder", "Los Angeles Lakers", "Golden State Warriors", "Sacramento Kings", "Houston Rockets", "Houston Rockets", "Brooklyn Nets", "New York Knicks", "Oklahoma City Thunder", "Memphis Grizzlies", "Dallas Mavericks", "Los Angeles Lakers", "Orlando Magic", "Denver Nuggets", "Memphis Grizzlies", "Detroit Pistons", "San Antonio Spurs", "Boston Celtics", "Los Angeles Clippers", "Golden State Warriors", "Portland Trail Blazers", "Oklahoma City Thunder", "Dallas Mavericks", "Charlotte Hornets", "Cleveland Cavaliers", "Chicago Bulls", "Dallas Mavericks", "Dallas Mavericks", "San Antonio Spurs", "Minnesota Timberwolves", "San Antonio Spurs", "Miami Heat", "Los Angeles Clippers", "Golden State Warriors", "Brooklyn Nets", "Toronto Raptors", "Indiana Pacers", "Atlanta Hawks", "Orlando Magic", "Miami Heat", "Sacramento Kings", "Portland Trail Blazers", "Memphis Grizzlies", "Houston Rockets", "New Orleans Pelicans", "New Orleans Pelicans", "Denver Nuggets", "Philadelphia 76ers", "Washington Wizards", "Milwaukee Bucks", "Golden State Warriors", "New York Knicks", "Portland Trail Blazers", "Sacramento Kings", "Minnesota Timberwolves", "Milwaukee Bucks", "Philadelphia 76ers", "Toronto Raptors", "Washington Wizards", "Denver Nuggets", "Phoenix Suns", "Cleveland Cavaliers", "Denver Nuggets", "Houston Rockets", "Oklahoma City Thunder", "New Orleans Pelicans", "Memphis Grizzlies", "Los Angeles Lakers"],
      [129, 104, 138, 134, 96, 103, 105, 103, 97, 113, 152, 122, 150, 126, 112, 106, 117, 128, 101, 133, 123, 112, 101, 130, 140, 135, 127, 112, 128, 131, 127, 119, 101, 114, 117, 125, 116, 95, 123, 126, 122, 120, 110, 127, 109, 116, 103, 124, 99, 100, 131, 119, 117, 115, 121, 119, 114, 105, 118, 105, 125, 102, 122, 99, 119, 117, 114, 111, 111, 128, 116, 127, 110, 129, 109, 113, 117, 106, 111, 137, 147, 107],
      [21, -1, 4, -2, -22, -23, 2, -11, -40, -7, 24, -10, 3, -14, -32, -2, -17, 9, -28, 8, 13, -34, -30, 4, 7, -8, -1, -23, -9, 2, 13, -10, -17, -9, -20, -4, 2, -55, 11, -2, -22, -18, -13, 5, -17, -31, -12, -16, -10, -7, 9, -2, -3, 4, 28, -16, -9, -20, -11, -10, -3, -4, 10, -14, 3, -17, -10, -5, -36, 32, -10, -16, -23, -6, -25, -9, -13, -34, -35, -19, 46, -24]
    ),
    leaders: {
      pts: { name: "Lauri Markkanen", val: 26.7, all: [{"name": "Lauri Markkanen", "val": 26.7}, {"name": "Keyonte George", "val": 23.6}, {"name": "Jaren Jackson Jr.", "val": 22.3}, {"name": "Kennedy Chandler", "val": 15.0}, {"name": "Brice Sensabaugh", "val": 14.9}, {"name": "Walker Kessler", "val": 14.4}, {"name": "Ace Bailey", "val": 13.8}, {"name": "Blake Hinson", "val": 11.9}, {"name": "Isaiah Collier", "val": 11.7}, {"name": "Kyle Filipowski", "val": 11.4}, {"name": "Jusuf Nurkić", "val": 10.9}, {"name": "Svi Mykhailiuk", "val": 9.4}, {"name": "Cody Williams", "val": 8.8}, {"name": "Bez Mbeng", "val": 8.1}, {"name": "Oscar Tshiebwe", "val": 7.8}, {"name": "Kyle Anderson", "val": 7.1}, {"name": "Elijah Harkless", "val": 6.8}, {"name": "Walter Clayton", "val": 6.8}, {"name": "Kevin Love", "val": 6.7}, {"name": "Hayden Gray", "val": 6.0}, {"name": "John Konchar", "val": 5.9}, {"name": "Andersson Garcia", "val": 5.2}, {"name": "Mo Bamba", "val": 5.0}, {"name": "Taylor Hendricks", "val": 4.9}, {"name": "Vince Williams Jr.", "val": 4.7}] },
      reb: { name: "Walker Kessler", val: 10.8, all: [{"name": "Walker Kessler", "val": 10.8}, {"name": "Jusuf Nurkić", "val": 10.4}, {"name": "Mo Bamba", "val": 10.0}, {"name": "Andersson Garcia", "val": 8.4}, {"name": "Kyle Filipowski", "val": 7.2}, {"name": "Lauri Markkanen", "val": 6.9}, {"name": "Oscar Tshiebwe", "val": 6.6}, {"name": "Kevin Love", "val": 5.8}, {"name": "John Konchar", "val": 5.7}, {"name": "Jaren Jackson Jr.", "val": 4.3}, {"name": "Ace Bailey", "val": 4.2}, {"name": "Bez Mbeng", "val": 3.8}, {"name": "Keyonte George", "val": 3.7}, {"name": "Kennedy Chandler", "val": 3.4}, {"name": "Kyle Anderson", "val": 3.3}, {"name": "Vince Williams Jr.", "val": 3.2}, {"name": "Brice Sensabaugh", "val": 3.1}, {"name": "Cody Williams", "val": 3.0}, {"name": "Taylor Hendricks", "val": 3.0}, {"name": "Isaiah Collier", "val": 2.5}, {"name": "Svi Mykhailiuk", "val": 2.5}, {"name": "Blake Hinson", "val": 2.4}, {"name": "Elijah Harkless", "val": 2.0}, {"name": "Walter Clayton", "val": 2.0}, {"name": "Hayden Gray", "val": 0.0}] },
      ast: { name: "Isaiah Collier", val: 7.2, all: [{"name": "Isaiah Collier", "val": 7.2}, {"name": "Kennedy Chandler", "val": 6.7}, {"name": "Keyonte George", "val": 6.1}, {"name": "Jusuf Nurkić", "val": 4.8}, {"name": "Bez Mbeng", "val": 4.1}, {"name": "Walter Clayton", "val": 3.2}, {"name": "Kyle Anderson", "val": 3.1}, {"name": "Walker Kessler", "val": 3.0}, {"name": "John Konchar", "val": 3.0}, {"name": "Elijah Harkless", "val": 2.9}, {"name": "Andersson Garcia", "val": 2.8}, {"name": "Jaren Jackson Jr.", "val": 2.7}, {"name": "Vince Williams Jr.", "val": 2.7}, {"name": "Kyle Filipowski", "val": 2.6}, {"name": "Lauri Markkanen", "val": 2.1}, {"name": "Cody Williams", "val": 2.0}, {"name": "Brice Sensabaugh", "val": 1.9}, {"name": "Svi Mykhailiuk", "val": 1.9}, {"name": "Ace Bailey", "val": 1.8}, {"name": "Kevin Love", "val": 1.8}, {"name": "Oscar Tshiebwe", "val": 1.2}, {"name": "Blake Hinson", "val": 1.1}, {"name": "Hayden Gray", "val": 1.0}, {"name": "Taylor Hendricks", "val": 0.7}, {"name": "Mo Bamba", "val": 0.5}] },
      stl: { name: "Bez Mbeng", val: 2.3, all: [{"name": "Bez Mbeng", "val": 2.3}, {"name": "John Konchar", "val": 2.0}, {"name": "Jaren Jackson Jr.", "val": 2.0}, {"name": "Andersson Garcia", "val": 1.6}, {"name": "Walker Kessler", "val": 1.4}, {"name": "Jusuf Nurkić", "val": 1.3}, {"name": "Elijah Harkless", "val": 1.2}, {"name": "Kyle Anderson", "val": 1.2}, {"name": "Keyonte George", "val": 1.1}, {"name": "Isaiah Collier", "val": 1.1}, {"name": "Hayden Gray", "val": 1.0}, {"name": "Lauri Markkanen", "val": 1.0}, {"name": "Kennedy Chandler", "val": 1.0}, {"name": "Kyle Filipowski", "val": 0.9}, {"name": "Ace Bailey", "val": 0.8}, {"name": "Cody Williams", "val": 0.8}, {"name": "Brice Sensabaugh", "val": 0.7}, {"name": "Oscar Tshiebwe", "val": 0.6}, {"name": "Svi Mykhailiuk", "val": 0.5}, {"name": "Walter Clayton", "val": 0.5}, {"name": "Blake Hinson", "val": 0.4}, {"name": "Taylor Hendricks", "val": 0.4}, {"name": "Kevin Love", "val": 0.4}, {"name": "Vince Williams Jr.", "val": 0.3}, {"name": "Mo Bamba", "val": 0.0}] },
      blk: { name: "Walker Kessler", val: 1.8, all: [{"name": "Walker Kessler", "val": 1.8}, {"name": "John Konchar", "val": 1.0}, {"name": "Hayden Gray", "val": 1.0}, {"name": "Mo Bamba", "val": 1.0}, {"name": "Andersson Garcia", "val": 0.8}, {"name": "Ace Bailey", "val": 0.7}, {"name": "Kyle Anderson", "val": 0.5}, {"name": "Jusuf Nurkić", "val": 0.5}, {"name": "Lauri Markkanen", "val": 0.5}, {"name": "Kyle Filipowski", "val": 0.5}, {"name": "Cody Williams", "val": 0.4}, {"name": "Keyonte George", "val": 0.3}, {"name": "Bez Mbeng", "val": 0.3}, {"name": "Vince Williams Jr.", "val": 0.3}, {"name": "Walter Clayton", "val": 0.3}, {"name": "Jaren Jackson Jr.", "val": 0.3}, {"name": "Isaiah Collier", "val": 0.3}, {"name": "Kennedy Chandler", "val": 0.2}, {"name": "Oscar Tshiebwe", "val": 0.2}, {"name": "Brice Sensabaugh", "val": 0.2}, {"name": "Elijah Harkless", "val": 0.2}, {"name": "Taylor Hendricks", "val": 0.2}, {"name": "Kevin Love", "val": 0.2}, {"name": "Svi Mykhailiuk", "val": 0.1}, {"name": "Blake Hinson", "val": 0.1}] },
    },
    avail: [
      { name: "Kyle Filipowski", g: 77 },
      { name: "Brice Sensabaugh", g: 75 },
      { name: "Ace Bailey", g: 72 },
      { name: "Cody Williams", g: 67 },
      { name: "Isaiah Collier", g: 59 },
      { name: "Keyonte George", g: 54 },
      { name: "Svi Mykhailiuk", g: 50 },
      { name: "Walter Clayton", g: 45 },
      { name: "Lauri Markkanen", g: 42 },
      { name: "Jusuf Nurkić", g: 41 },
      { name: "Kevin Love", g: 37 },
      { name: "Taylor Hendricks", g: 33 },
      { name: "Oscar Tshiebwe", g: 27 },
      { name: "John Konchar", g: 26 },
      { name: "Elijah Harkless", g: 26 },
      { name: "Kyle Anderson", g: 20 },
      { name: "Bez Mbeng", g: 15 },
      { name: "Blake Hinson", g: 14 },
      { name: "Kennedy Chandler", g: 11 },
      { name: "Vince Williams Jr.", g: 6 },
      { name: "Andersson Garcia", g: 5 },
      { name: "Walker Kessler", g: 5 },
      { name: "Jaren Jackson Jr.", g: 3 },
      { name: "Mo Bamba", g: 2 },
      { name: "Hayden Gray", g: 1 },
    ]
  },

};
