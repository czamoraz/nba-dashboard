/* ================================================================
   IND.js — Indiana Pacers · Generado por csv_to_data_js.py
   ================================================================ */

"use strict";

/* ── Configuración del equipo ────────────────────────────────── */
window.TEAM_CONFIG = {
  name:          "Indiana Pacers",
  abbr:          "IND",
  conference:    "East",
  primaryColor:  "#002D62",
  secondaryColor:"#FDBB30",
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
    w: 34, l: 38,
    topW:   { pts: 152, opp: 95, against: "Oklahoma City Thunder" },
    worstL: { pts: 96, opp: 129, against: "Los Angeles Clippers" },
    conf_rank: 9,
    games: buildGames(
      "WWWLWLWWLLWWLLWLWWLLWLLLLWWLWLLLLWLLWLLWWLWWLLLWLWWWLWLLLWWWLLWLLWLWWLLW",
      ["New York Knicks", "Chicago Bulls", "Boston Celtics", "Boston Celtics", "Cleveland Cavaliers", "New York Knicks", "New Orleans Pelicans", "Houston Rockets", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Portland Trail Blazers", "Los Angeles Clippers", "Dallas Mavericks", "Orlando Magic", "Toronto Raptors", "Toronto Raptors", "Charlotte Hornets", "Charlotte Hornets", "Philadelphia 76ers", "Memphis Grizzlies", "Milwaukee Bucks", "New Orleans Pelicans", "Utah Jazz", "Brooklyn Nets", "Detroit Pistons", "Atlanta Hawks", "Chicago Bulls", "Minnesota Timberwolves", "Golden State Warriors", "Boston Celtics", "New York Knicks", "Philadelphia 76ers", "Cleveland Cavaliers", "Denver Nuggets", "Los Angeles Lakers", "Phoenix Suns", "Denver Nuggets", "Brooklyn Nets", "Miami Heat", "Miami Heat", "Milwaukee Bucks", "Detroit Pistons", "Dallas Mavericks", "Washington Wizards", "Miami Heat", "Charlotte Hornets", "San Antonio Spurs", "Chicago Bulls", "Minnesota Timberwolves", "Orlando Magic", "Memphis Grizzlies", "Los Angeles Clippers", "Houston Rockets", "Utah Jazz", "Atlanta Hawks", "San Antonio Spurs", "Oklahoma City Thunder", "Detroit Pistons", "Orlando Magic", "Portland Trail Blazers", "Brooklyn Nets", "Oklahoma City Thunder", "Washington Wizards", "Sacramento Kings", "Atlanta Hawks", "Washington Wizards", "Cleveland Cavaliers", "Philadelphia 76ers", "Milwaukee Bucks", "Los Angeles Lakers", "Toronto Raptors"],
      [121, 125, 108, 111, 119, 102, 118, 114, 117, 122, 104, 111, 96, 112, 120, 102, 129, 116, 105, 110, 134, 110, 113, 95, 94, 111, 125, 112, 134, 107, 112, 107, 114, 114, 103, 100, 122, 106, 115, 137, 109, 113, 116, 109, 124, 87, 97, 139, 97, 141, 111, 132, 115, 132, 111, 117, 94, 122, 115, 131, 112, 113, 152, 141, 93, 133, 132, 111, 103, 133, 115, 125],
      [14, 19, 1, -5, 20, -4, 2, 7, -8, -5, 9, 24, -33, -12, 2, -5, 15, 10, -3, -9, 18, -20, -1, -8, -10, 16, 12, -8, 6, -4, -6, -3, -16, 3, -10, -5, 11, -15, -9, 27, 3, -27, 5, 15, -8, -5, -17, 6, -16, 4, 5, 7, -11, 8, -8, -12, -15, 6, 6, 19, -21, -17, 57, -13, -11, 7, -1, 9, 9, -9, -7, 12]
    ),
    leaders: {
      pts: { name: "Malcolm Brogdon", val: 21.2, all: [{"name": "Malcolm Brogdon", "val": 21.2}, {"name": "Caris LeVert", "val": 20.7}, {"name": "Domantas Sabonis", "val": 20.3}, {"name": "Victor Oladipo", "val": 20.0}, {"name": "T.J. Warren", "val": 15.5}, {"name": "Doug McDermott", "val": 13.6}, {"name": "Myles Turner", "val": 12.6}, {"name": "Oshae Brissett", "val": 10.9}, {"name": "Justin Holiday", "val": 10.5}, {"name": "Jeremy Lamb", "val": 10.1}, {"name": "T.J. McConnell", "val": 8.6}, {"name": "Edmond Sumner", "val": 7.5}, {"name": "Aaron Holiday", "val": 7.2}, {"name": "Goga Bitadze", "val": 5.1}, {"name": "JaKarr Sampson", "val": 4.6}, {"name": "Kelan Martin", "val": 4.5}, {"name": "Amida Brimah", "val": 2.6}, {"name": "Cassius Stanley", "val": 1.5}, {"name": "Jalen Lecque", "val": 1.3}, {"name": "Brian Bowen", "val": 0.5}] },
      reb: { name: "Domantas Sabonis", val: 12.0, all: [{"name": "Domantas Sabonis", "val": 12.0}, {"name": "Myles Turner", "val": 6.5}, {"name": "Victor Oladipo", "val": 5.7}, {"name": "Oshae Brissett", "val": 5.5}, {"name": "Malcolm Brogdon", "val": 5.3}, {"name": "Caris LeVert", "val": 4.6}, {"name": "T.J. McConnell", "val": 3.7}, {"name": "Jeremy Lamb", "val": 3.6}, {"name": "Justin Holiday", "val": 3.6}, {"name": "T.J. Warren", "val": 3.5}, {"name": "Doug McDermott", "val": 3.3}, {"name": "Goga Bitadze", "val": 3.3}, {"name": "JaKarr Sampson", "val": 2.7}, {"name": "Kelan Martin", "val": 2.2}, {"name": "Edmond Sumner", "val": 1.8}, {"name": "Amida Brimah", "val": 1.6}, {"name": "Aaron Holiday", "val": 1.3}, {"name": "Jalen Lecque", "val": 1.3}, {"name": "Cassius Stanley", "val": 0.8}, {"name": "Brian Bowen", "val": 0.5}] },
      ast: { name: "Domantas Sabonis", val: 6.7, all: [{"name": "Domantas Sabonis", "val": 6.7}, {"name": "T.J. McConnell", "val": 6.6}, {"name": "Malcolm Brogdon", "val": 5.9}, {"name": "Caris LeVert", "val": 4.9}, {"name": "Victor Oladipo", "val": 4.2}, {"name": "Aaron Holiday", "val": 1.9}, {"name": "Justin Holiday", "val": 1.7}, {"name": "Jeremy Lamb", "val": 1.5}, {"name": "Doug McDermott", "val": 1.3}, {"name": "T.J. Warren", "val": 1.3}, {"name": "Myles Turner", "val": 1.0}, {"name": "Oshae Brissett", "val": 0.9}, {"name": "Edmond Sumner", "val": 0.9}, {"name": "Goga Bitadze", "val": 0.8}, {"name": "Kelan Martin", "val": 0.5}, {"name": "Jalen Lecque", "val": 0.5}, {"name": "Amida Brimah", "val": 0.2}, {"name": "JaKarr Sampson", "val": 0.1}, {"name": "Cassius Stanley", "val": 0.0}, {"name": "Brian Bowen", "val": 0.0}] },
      stl: { name: "T.J. McConnell", val: 1.9, all: [{"name": "T.J. McConnell", "val": 1.9}, {"name": "Victor Oladipo", "val": 1.7}, {"name": "Caris LeVert", "val": 1.5}, {"name": "Domantas Sabonis", "val": 1.2}, {"name": "Justin Holiday", "val": 1.0}, {"name": "Malcolm Brogdon", "val": 0.9}, {"name": "Oshae Brissett", "val": 0.9}, {"name": "Jeremy Lamb", "val": 0.9}, {"name": "Myles Turner", "val": 0.9}, {"name": "Aaron Holiday", "val": 0.7}, {"name": "Edmond Sumner", "val": 0.6}, {"name": "T.J. Warren", "val": 0.5}, {"name": "Doug McDermott", "val": 0.3}, {"name": "Kelan Martin", "val": 0.3}, {"name": "Goga Bitadze", "val": 0.2}, {"name": "JaKarr Sampson", "val": 0.1}, {"name": "Amida Brimah", "val": 0.0}, {"name": "Cassius Stanley", "val": 0.0}, {"name": "Jalen Lecque", "val": 0.0}, {"name": "Brian Bowen", "val": 0.0}] },
      blk: { name: "Myles Turner", val: 3.4, all: [{"name": "Myles Turner", "val": 3.4}, {"name": "Goga Bitadze", "val": 1.3}, {"name": "Oshae Brissett", "val": 1.0}, {"name": "Amida Brimah", "val": 1.0}, {"name": "Caris LeVert", "val": 0.7}, {"name": "Jeremy Lamb", "val": 0.6}, {"name": "Justin Holiday", "val": 0.6}, {"name": "JaKarr Sampson", "val": 0.5}, {"name": "Domantas Sabonis", "val": 0.5}, {"name": "Malcolm Brogdon", "val": 0.3}, {"name": "T.J. McConnell", "val": 0.3}, {"name": "Kelan Martin", "val": 0.3}, {"name": "Aaron Holiday", "val": 0.2}, {"name": "Edmond Sumner", "val": 0.2}, {"name": "Victor Oladipo", "val": 0.2}, {"name": "Doug McDermott", "val": 0.1}, {"name": "Cassius Stanley", "val": 0.1}, {"name": "T.J. Warren", "val": 0.0}, {"name": "Jalen Lecque", "val": 0.0}, {"name": "Brian Bowen", "val": 0.0}] },
    },
    avail: [
      { name: "Justin Holiday", g: 72 },
      { name: "T.J. McConnell", g: 69 },
      { name: "Doug McDermott", g: 66 },
      { name: "Aaron Holiday", g: 66 },
      { name: "Domantas Sabonis", g: 62 },
      { name: "Malcolm Brogdon", g: 56 },
      { name: "Edmond Sumner", g: 53 },
      { name: "Myles Turner", g: 47 },
      { name: "Goga Bitadze", g: 45 },
      { name: "Jeremy Lamb", g: 36 },
      { name: "Caris LeVert", g: 35 },
      { name: "Kelan Martin", g: 35 },
      { name: "JaKarr Sampson", g: 29 },
      { name: "Cassius Stanley", g: 24 },
      { name: "Oshae Brissett", g: 21 },
      { name: "Victor Oladipo", g: 9 },
      { name: "Brian Bowen", g: 6 },
      { name: "Amida Brimah", g: 5 },
      { name: "T.J. Warren", g: 4 },
      { name: "Jalen Lecque", g: 4 },
    ]
  },

  "2021-22": {
    w: 25, l: 57,
    topW:   { pts: 109, opp: 77, against: "Chicago Bulls" },
    worstL: { pts: 91, opp: 131, against: "Toronto Raptors" },
    conf_rank: 13,
    games: buildGames(
      "LLWLLLLWWLWLWWLLLWWLWLLLLWWWLLWLWLLLLLLWLLLLWWLLLWLWLLLLLLLWLWLWLLLWLLWWLLLLLLLLLL",
      ["Charlotte Hornets", "Washington Wizards", "Miami Heat", "Milwaukee Bucks", "Toronto Raptors", "Brooklyn Nets", "Toronto Raptors", "San Antonio Spurs", "New York Knicks", "Portland Trail Blazers", "Sacramento Kings", "Denver Nuggets", "Utah Jazz", "Philadelphia 76ers", "New York Knicks", "Detroit Pistons", "Charlotte Hornets", "New Orleans Pelicans", "Chicago Bulls", "Los Angeles Lakers", "Toronto Raptors", "Milwaukee Bucks", "Minnesota Timberwolves", "Atlanta Hawks", "Miami Heat", "Washington Wizards", "New York Knicks", "Dallas Mavericks", "Golden State Warriors", "Milwaukee Bucks", "Detroit Pistons", "Miami Heat", "Houston Rockets", "Chicago Bulls", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "New York Knicks", "Brooklyn Nets", "Utah Jazz", "Boston Celtics", "Boston Celtics", "Phoenix Suns", "Los Angeles Clippers", "Los Angeles Lakers", "Golden State Warriors", "Phoenix Suns", "New Orleans Pelicans", "Charlotte Hornets", "Oklahoma City Thunder", "Dallas Mavericks", "Los Angeles Clippers", "Orlando Magic", "Chicago Bulls", "Cleveland Cavaliers", "Atlanta Hawks", "Cleveland Cavaliers", "Minnesota Timberwolves", "Milwaukee Bucks", "Washington Wizards", "Oklahoma City Thunder", "Boston Celtics", "Orlando Magic", "Orlando Magic", "Detroit Pistons", "Washington Wizards", "Cleveland Cavaliers", "San Antonio Spurs", "Atlanta Hawks", "Memphis Grizzlies", "Houston Rockets", "Portland Trail Blazers", "Sacramento Kings", "Memphis Grizzlies", "Toronto Raptors", "Atlanta Hawks", "Denver Nuggets", "Boston Celtics", "Detroit Pistons", "Philadelphia 76ers", "Philadelphia 76ers", "Brooklyn Nets"],
      [122, 134, 102, 109, 100, 98, 94, 131, 111, 106, 94, 98, 111, 118, 84, 89, 118, 111, 109, 116, 114, 100, 98, 111, 104, 116, 122, 106, 100, 99, 122, 96, 118, 105, 108, 106, 104, 94, 121, 125, 98, 100, 94, 133, 111, 121, 103, 113, 126, 113, 105, 122, 118, 115, 85, 112, 113, 120, 119, 113, 125, 128, 103, 122, 106, 123, 124, 119, 128, 102, 121, 129, 109, 103, 91, 123, 118, 123, 117, 122, 120, 126],
      [-1, -1, 11, -10, -18, -7, -3, 13, 13, -4, 3, -3, 11, 5, -8, -8, -3, 17, 32, -8, 17, -18, -2, -3, -9, 6, 20, 13, -2, -15, 9, -29, 12, -8, -8, -2, -4, -10, -8, 12, -3, -19, -18, -6, 7, 4, -10, -4, -32, 3, -27, 6, -1, -7, -13, -21, -7, -9, -9, 5, -4, 21, -16, 8, -5, -10, -3, 11, -3, -33, 3, 31, -1, -30, -40, -9, -7, -5, -4, -9, -13, -8]
    ),
    leaders: {
      pts: { name: "Malcolm Brogdon", val: 19.1, all: [{"name": "Malcolm Brogdon", "val": 19.1}, {"name": "Domantas Sabonis", "val": 18.9}, {"name": "Caris LeVert", "val": 18.7}, {"name": "Buddy Hield", "val": 18.2}, {"name": "Tyrese Haliburton", "val": 17.5}, {"name": "Jalen Smith", "val": 13.4}, {"name": "Chris Duarte", "val": 13.1}, {"name": "Myles Turner", "val": 12.9}, {"name": "Justin Holiday", "val": 11.0}, {"name": "Duane Washington Jr.", "val": 9.9}, {"name": "Terry Taylor", "val": 9.6}, {"name": "Lance Stephenson", "val": 9.3}, {"name": "Oshae Brissett", "val": 9.1}, {"name": "T.J. McConnell", "val": 8.5}, {"name": "Isaiah Jackson", "val": 8.3}, {"name": "Tristan Thompson", "val": 7.3}, {"name": "Jeremy Lamb", "val": 7.1}, {"name": "Goga Bitadze", "val": 7.0}, {"name": "Justin Anderson", "val": 6.8}, {"name": "Torrey Craig", "val": 6.5}, {"name": "Kelan Martin", "val": 6.3}, {"name": "Keifer Sykes", "val": 5.6}, {"name": "Gabe York", "val": 4.0}, {"name": "Brad Wanamaker", "val": 3.5}, {"name": "Reggie Perry", "val": 2.0}, {"name": "Ahmad Caver", "val": 2.0}, {"name": "DeJon Jarreau", "val": 0.0}, {"name": "Nate Hinton", "val": 0.0}] },
      reb: { name: "Domantas Sabonis", val: 12.1, all: [{"name": "Domantas Sabonis", "val": 12.1}, {"name": "Jalen Smith", "val": 7.6}, {"name": "Myles Turner", "val": 7.1}, {"name": "Oshae Brissett", "val": 5.3}, {"name": "Terry Taylor", "val": 5.2}, {"name": "Malcolm Brogdon", "val": 5.1}, {"name": "Buddy Hield", "val": 5.1}, {"name": "Tristan Thompson", "val": 4.5}, {"name": "Tyrese Haliburton", "val": 4.3}, {"name": "Isaiah Jackson", "val": 4.1}, {"name": "Chris Duarte", "val": 4.1}, {"name": "Torrey Craig", "val": 3.8}, {"name": "Caris LeVert", "val": 3.8}, {"name": "Goga Bitadze", "val": 3.5}, {"name": "T.J. McConnell", "val": 3.3}, {"name": "Justin Anderson", "val": 3.1}, {"name": "Justin Holiday", "val": 2.8}, {"name": "Lance Stephenson", "val": 2.8}, {"name": "Jeremy Lamb", "val": 2.4}, {"name": "Kelan Martin", "val": 2.0}, {"name": "Duane Washington Jr.", "val": 1.7}, {"name": "Brad Wanamaker", "val": 1.6}, {"name": "Keifer Sykes", "val": 1.4}, {"name": "Gabe York", "val": 1.0}, {"name": "Reggie Perry", "val": 1.0}, {"name": "DeJon Jarreau", "val": 0.0}, {"name": "Nate Hinton", "val": 0.0}, {"name": "Ahmad Caver", "val": 0.0}] },
      ast: { name: "Tyrese Haliburton", val: 9.6, all: [{"name": "Tyrese Haliburton", "val": 9.6}, {"name": "Malcolm Brogdon", "val": 5.9}, {"name": "Domantas Sabonis", "val": 5.0}, {"name": "T.J. McConnell", "val": 4.9}, {"name": "Buddy Hield", "val": 4.8}, {"name": "Caris LeVert", "val": 4.4}, {"name": "Lance Stephenson", "val": 3.9}, {"name": "Brad Wanamaker", "val": 2.2}, {"name": "Justin Anderson", "val": 2.1}, {"name": "Chris Duarte", "val": 2.1}, {"name": "Gabe York", "val": 2.0}, {"name": "Keifer Sykes", "val": 1.9}, {"name": "Duane Washington Jr.", "val": 1.8}, {"name": "Justin Holiday", "val": 1.8}, {"name": "Jeremy Lamb", "val": 1.3}, {"name": "Terry Taylor", "val": 1.2}, {"name": "Torrey Craig", "val": 1.1}, {"name": "Oshae Brissett", "val": 1.1}, {"name": "Goga Bitadze", "val": 1.1}, {"name": "Myles Turner", "val": 1.0}, {"name": "Jalen Smith", "val": 0.8}, {"name": "Kelan Martin", "val": 0.8}, {"name": "Tristan Thompson", "val": 0.5}, {"name": "Isaiah Jackson", "val": 0.3}, {"name": "Reggie Perry", "val": 0.0}, {"name": "DeJon Jarreau", "val": 0.0}, {"name": "Nate Hinton", "val": 0.0}, {"name": "Ahmad Caver", "val": 0.0}] },
      stl: { name: "Tyrese Haliburton", val: 1.8, all: [{"name": "Tyrese Haliburton", "val": 1.8}, {"name": "T.J. McConnell", "val": 1.1}, {"name": "Domantas Sabonis", "val": 1.0}, {"name": "Chris Duarte", "val": 1.0}, {"name": "Gabe York", "val": 1.0}, {"name": "Buddy Hield", "val": 1.0}, {"name": "Caris LeVert", "val": 0.9}, {"name": "Malcolm Brogdon", "val": 0.8}, {"name": "Myles Turner", "val": 0.7}, {"name": "Justin Holiday", "val": 0.7}, {"name": "Oshae Brissett", "val": 0.7}, {"name": "Isaiah Jackson", "val": 0.7}, {"name": "Lance Stephenson", "val": 0.6}, {"name": "Jeremy Lamb", "val": 0.6}, {"name": "Kelan Martin", "val": 0.5}, {"name": "Duane Washington Jr.", "val": 0.5}, {"name": "Torrey Craig", "val": 0.5}, {"name": "Justin Anderson", "val": 0.5}, {"name": "Keifer Sykes", "val": 0.4}, {"name": "Terry Taylor", "val": 0.4}, {"name": "Goga Bitadze", "val": 0.4}, {"name": "Jalen Smith", "val": 0.4}, {"name": "Brad Wanamaker", "val": 0.2}, {"name": "Tristan Thompson", "val": 0.0}, {"name": "Reggie Perry", "val": 0.0}, {"name": "DeJon Jarreau", "val": 0.0}, {"name": "Nate Hinton", "val": 0.0}, {"name": "Ahmad Caver", "val": 0.0}] },
      blk: { name: "Myles Turner", val: 2.8, all: [{"name": "Myles Turner", "val": 2.8}, {"name": "Isaiah Jackson", "val": 1.4}, {"name": "Jalen Smith", "val": 1.0}, {"name": "Goga Bitadze", "val": 0.8}, {"name": "Tyrese Haliburton", "val": 0.6}, {"name": "Caris LeVert", "val": 0.5}, {"name": "Domantas Sabonis", "val": 0.5}, {"name": "Justin Anderson", "val": 0.5}, {"name": "Gabe York", "val": 0.5}, {"name": "Tristan Thompson", "val": 0.5}, {"name": "Justin Holiday", "val": 0.4}, {"name": "Malcolm Brogdon", "val": 0.4}, {"name": "T.J. McConnell", "val": 0.4}, {"name": "Torrey Craig", "val": 0.4}, {"name": "Buddy Hield", "val": 0.4}, {"name": "Jeremy Lamb", "val": 0.4}, {"name": "Oshae Brissett", "val": 0.4}, {"name": "Brad Wanamaker", "val": 0.3}, {"name": "Kelan Martin", "val": 0.3}, {"name": "Chris Duarte", "val": 0.2}, {"name": "Terry Taylor", "val": 0.2}, {"name": "Duane Washington Jr.", "val": 0.1}, {"name": "Keifer Sykes", "val": 0.1}, {"name": "Lance Stephenson", "val": 0.1}, {"name": "Reggie Perry", "val": 0.0}, {"name": "DeJon Jarreau", "val": 0.0}, {"name": "Nate Hinton", "val": 0.0}, {"name": "Ahmad Caver", "val": 0.0}] },
    },
    avail: [
      { name: "Oshae Brissett", g: 67 },
      { name: "Chris Duarte", g: 55 },
      { name: "Torrey Craig", g: 51 },
      { name: "Goga Bitadze", g: 50 },
      { name: "Justin Holiday", g: 49 },
      { name: "Duane Washington Jr.", g: 48 },
      { name: "Domantas Sabonis", g: 47 },
      { name: "Myles Turner", g: 42 },
      { name: "Lance Stephenson", g: 40 },
      { name: "Caris LeVert", g: 39 },
      { name: "Jeremy Lamb", g: 39 },
      { name: "Malcolm Brogdon", g: 36 },
      { name: "Isaiah Jackson", g: 36 },
      { name: "Terry Taylor", g: 33 },
      { name: "Keifer Sykes", g: 32 },
      { name: "Kelan Martin", g: 27 },
      { name: "T.J. McConnell", g: 27 },
      { name: "Tyrese Haliburton", g: 26 },
      { name: "Buddy Hield", g: 26 },
      { name: "Jalen Smith", g: 22 },
      { name: "Brad Wanamaker", g: 22 },
      { name: "Justin Anderson", g: 13 },
      { name: "Tristan Thompson", g: 4 },
      { name: "Gabe York", g: 2 },
      { name: "Nate Hinton", g: 2 },
      { name: "Reggie Perry", g: 1 },
      { name: "DeJon Jarreau", g: 1 },
      { name: "Ahmad Caver", g: 1 },
    ]
  },

  "2022-23": {
    w: 35, l: 47,
    topW:   { pts: 123, opp: 102, against: "Orlando Magic" },
    worstL: { pts: 95, opp: 120, against: "Boston Celtics" },
    conf_rank: 11,
    games: buildGames(
      "LLWLLWWLWWLWWWWWLWLWLLLWLWLLWLLWWLWWWWLWWLLLLLLLWLLLLWLLLLLWLWWLWLWWLWLLWLLLLWLLLW",
      ["Washington Wizards", "San Antonio Spurs", "Detroit Pistons", "Philadelphia 76ers", "Chicago Bulls", "Washington Wizards", "Brooklyn Nets", "Brooklyn Nets", "Miami Heat", "New Orleans Pelicans", "Denver Nuggets", "Toronto Raptors", "Charlotte Hornets", "Houston Rockets", "Orlando Magic", "Orlando Magic", "Minnesota Timberwolves", "Brooklyn Nets", "Los Angeles Clippers", "Los Angeles Lakers", "Sacramento Kings", "Utah Jazz", "Portland Trail Blazers", "Golden State Warriors", "Minnesota Timberwolves", "Washington Wizards", "Brooklyn Nets", "Miami Heat", "Golden State Warriors", "Cleveland Cavaliers", "New York Knicks", "Boston Celtics", "Miami Heat", "New Orleans Pelicans", "Atlanta Hawks", "Cleveland Cavaliers", "Los Angeles Clippers", "Toronto Raptors", "Philadelphia 76ers", "Portland Trail Blazers", "Charlotte Hornets", "New York Knicks", "Atlanta Hawks", "Memphis Grizzlies", "Milwaukee Bucks", "Oklahoma City Thunder", "Denver Nuggets", "Phoenix Suns", "Chicago Bulls", "Orlando Magic", "Milwaukee Bucks", "Memphis Grizzlies", "Los Angeles Lakers", "Sacramento Kings", "Cleveland Cavaliers", "Miami Heat", "Phoenix Suns", "Washington Wizards", "Utah Jazz", "Chicago Bulls", "Boston Celtics", "Orlando Magic", "Dallas Mavericks", "San Antonio Spurs", "Chicago Bulls", "Philadelphia 76ers", "Houston Rockets", "Detroit Pistons", "Detroit Pistons", "Milwaukee Bucks", "Philadelphia 76ers", "Charlotte Hornets", "Toronto Raptors", "Boston Celtics", "Atlanta Hawks", "Dallas Mavericks", "Milwaukee Bucks", "Oklahoma City Thunder", "Cleveland Cavaliers", "New York Knicks", "Detroit Pistons", "New York Knicks"],
      [107, 134, 124, 106, 109, 127, 125, 109, 101, 129, 119, 118, 125, 99, 114, 123, 101, 128, 100, 116, 114, 119, 100, 112, 115, 121, 133, 82, 125, 112, 106, 117, 111, 93, 129, 135, 131, 122, 126, 108, 116, 113, 111, 112, 119, 106, 111, 107, 116, 120, 131, 100, 111, 107, 103, 111, 104, 113, 117, 117, 138, 121, 124, 99, 125, 143, 134, 121, 97, 139, 121, 109, 118, 95, 130, 104, 136, 121, 105, 129, 115, 141],
      [-7, -3, 9, -14, -15, 10, 9, -7, 2, 7, -3, 14, 12, 8, 1, 21, -14, 11, -14, 1, -23, -20, -16, 8, -6, 10, -3, -5, 6, -6, -3, 5, 3, -20, 15, 9, 1, 8, -3, 9, 5, -6, -2, -18, -13, -20, -23, -5, 6, -6, -10, -12, -1, 3, -19, -5, -13, -14, -6, 4, -4, 13, 2, -11, 3, -4, 9, 6, -20, 16, -20, -6, 4, -25, -13, -23, -13, 4, -10, -9, -7, 5]
    ),
    leaders: {
      pts: { name: "Tyrese Haliburton", val: 20.7, all: [{"name": "Tyrese Haliburton", "val": 20.7}, {"name": "Myles Turner", "val": 18.0}, {"name": "Buddy Hield", "val": 16.8}, {"name": "Bennedict Mathurin", "val": 16.7}, {"name": "Jordan Nwora", "val": 13.0}, {"name": "Aaron Nesmith", "val": 10.1}, {"name": "Andrew Nembhard", "val": 9.5}, {"name": "Jalen Smith", "val": 9.4}, {"name": "T.J. McConnell", "val": 8.7}, {"name": "Gabe York", "val": 8.0}, {"name": "Chris Duarte", "val": 7.9}, {"name": "Isaiah Jackson", "val": 7.2}, {"name": "Daniel Theis", "val": 7.0}, {"name": "Oshae Brissett", "val": 6.1}, {"name": "George Hill", "val": 5.2}, {"name": "Goga Bitadze", "val": 3.3}, {"name": "Trevelin Queen", "val": 3.0}, {"name": "James Johnson", "val": 2.8}, {"name": "Terry Taylor", "val": 2.7}, {"name": "Kendall Brown", "val": 1.5}] },
      reb: { name: "Myles Turner", val: 7.5, all: [{"name": "Myles Turner", "val": 7.5}, {"name": "Jalen Smith", "val": 5.8}, {"name": "Buddy Hield", "val": 5.0}, {"name": "Jordan Nwora", "val": 4.7}, {"name": "Isaiah Jackson", "val": 4.5}, {"name": "Bennedict Mathurin", "val": 4.1}, {"name": "Aaron Nesmith", "val": 3.8}, {"name": "Tyrese Haliburton", "val": 3.7}, {"name": "Oshae Brissett", "val": 3.4}, {"name": "T.J. McConnell", "val": 3.1}, {"name": "Daniel Theis", "val": 3.1}, {"name": "Andrew Nembhard", "val": 2.7}, {"name": "Chris Duarte", "val": 2.5}, {"name": "Trevelin Queen", "val": 2.4}, {"name": "Goga Bitadze", "val": 2.3}, {"name": "Gabe York", "val": 2.0}, {"name": "James Johnson", "val": 1.7}, {"name": "George Hill", "val": 1.6}, {"name": "Terry Taylor", "val": 1.5}, {"name": "Kendall Brown", "val": 1.0}] },
      ast: { name: "Tyrese Haliburton", val: 10.4, all: [{"name": "Tyrese Haliburton", "val": 10.4}, {"name": "T.J. McConnell", "val": 5.3}, {"name": "Andrew Nembhard", "val": 4.5}, {"name": "Buddy Hield", "val": 2.8}, {"name": "Jordan Nwora", "val": 2.1}, {"name": "George Hill", "val": 1.9}, {"name": "Gabe York", "val": 1.7}, {"name": "Bennedict Mathurin", "val": 1.5}, {"name": "Chris Duarte", "val": 1.4}, {"name": "Myles Turner", "val": 1.4}, {"name": "Aaron Nesmith", "val": 1.3}, {"name": "Daniel Theis", "val": 1.3}, {"name": "Jalen Smith", "val": 1.0}, {"name": "Trevelin Queen", "val": 0.9}, {"name": "Goga Bitadze", "val": 0.9}, {"name": "Isaiah Jackson", "val": 0.8}, {"name": "James Johnson", "val": 0.8}, {"name": "Oshae Brissett", "val": 0.7}, {"name": "Kendall Brown", "val": 0.5}, {"name": "Terry Taylor", "val": 0.4}] },
      stl: { name: "Tyrese Haliburton", val: 1.6, all: [{"name": "Tyrese Haliburton", "val": 1.6}, {"name": "Buddy Hield", "val": 1.2}, {"name": "T.J. McConnell", "val": 1.1}, {"name": "Andrew Nembhard", "val": 0.9}, {"name": "Aaron Nesmith", "val": 0.8}, {"name": "Gabe York", "val": 0.7}, {"name": "Kendall Brown", "val": 0.7}, {"name": "Bennedict Mathurin", "val": 0.6}, {"name": "Myles Turner", "val": 0.6}, {"name": "George Hill", "val": 0.6}, {"name": "Jordan Nwora", "val": 0.5}, {"name": "Chris Duarte", "val": 0.5}, {"name": "Oshae Brissett", "val": 0.5}, {"name": "Isaiah Jackson", "val": 0.5}, {"name": "Goga Bitadze", "val": 0.4}, {"name": "James Johnson", "val": 0.4}, {"name": "Jalen Smith", "val": 0.3}, {"name": "Daniel Theis", "val": 0.3}, {"name": "Trevelin Queen", "val": 0.3}, {"name": "Terry Taylor", "val": 0.1}] },
      blk: { name: "Myles Turner", val: 2.3, all: [{"name": "Myles Turner", "val": 2.3}, {"name": "Isaiah Jackson", "val": 1.5}, {"name": "Jalen Smith", "val": 0.9}, {"name": "Daniel Theis", "val": 0.9}, {"name": "Trevelin Queen", "val": 0.7}, {"name": "Goga Bitadze", "val": 0.5}, {"name": "Aaron Nesmith", "val": 0.5}, {"name": "Tyrese Haliburton", "val": 0.4}, {"name": "Buddy Hield", "val": 0.3}, {"name": "Jordan Nwora", "val": 0.3}, {"name": "George Hill", "val": 0.3}, {"name": "James Johnson", "val": 0.3}, {"name": "Chris Duarte", "val": 0.2}, {"name": "Terry Taylor", "val": 0.2}, {"name": "Oshae Brissett", "val": 0.2}, {"name": "Andrew Nembhard", "val": 0.2}, {"name": "Bennedict Mathurin", "val": 0.2}, {"name": "T.J. McConnell", "val": 0.1}, {"name": "Gabe York", "val": 0.0}, {"name": "Kendall Brown", "val": 0.0}] },
    },
    avail: [
      { name: "Buddy Hield", g: 80 },
      { name: "Bennedict Mathurin", g: 78 },
      { name: "Andrew Nembhard", g: 75 },
      { name: "T.J. McConnell", g: 75 },
      { name: "Aaron Nesmith", g: 73 },
      { name: "Jalen Smith", g: 68 },
      { name: "Oshae Brissett", g: 65 },
      { name: "Isaiah Jackson", g: 63 },
      { name: "Myles Turner", g: 62 },
      { name: "Tyrese Haliburton", g: 56 },
      { name: "Chris Duarte", g: 46 },
      { name: "Terry Taylor", g: 26 },
      { name: "Jordan Nwora", g: 24 },
      { name: "Goga Bitadze", g: 21 },
      { name: "James Johnson", g: 18 },
      { name: "George Hill", g: 11 },
      { name: "Daniel Theis", g: 7 },
      { name: "Trevelin Queen", g: 7 },
      { name: "Kendall Brown", g: 6 },
      { name: "Gabe York", g: 3 },
    ]
  },

  "2023-24": {
    w: 47, l: 35,
    topW:   { pts: 157, opp: 115, against: "Atlanta Hawks" },
    worstL: { pts: 104, opp: 155, against: "Boston Celtics" },
    conf_rank: 6,
    games: buildGames(
      "WWLLWLWWWLWLWLWLLWWWWLLLLWLLWWWWWWLWWWLLWLLLWWWLLLWWLWLWWWLWLLWLWWLWLWWLWLWWLWWWLW",
      ["Washington Wizards", "Cleveland Cavaliers", "Chicago Bulls", "Boston Celtics", "Cleveland Cavaliers", "Charlotte Hornets", "San Antonio Spurs", "Utah Jazz", "Milwaukee Bucks", "Philadelphia 76ers", "Philadelphia 76ers", "Orlando Magic", "Atlanta Hawks", "Toronto Raptors", "Detroit Pistons", "Portland Trail Blazers", "Miami Heat", "Miami Heat", "Boston Celtics", "Milwaukee Bucks", "Detroit Pistons", "Milwaukee Bucks", "Washington Wizards", "Minnesota Timberwolves", "Los Angeles Clippers", "Charlotte Hornets", "Memphis Grizzlies", "Orlando Magic", "Houston Rockets", "Chicago Bulls", "New York Knicks", "Milwaukee Bucks", "Milwaukee Bucks", "Atlanta Hawks", "Boston Celtics", "Boston Celtics", "Washington Wizards", "Atlanta Hawks", "Denver Nuggets", "Utah Jazz", "Sacramento Kings", "Portland Trail Blazers", "Phoenix Suns", "Denver Nuggets", "Philadelphia 76ers", "Phoenix Suns", "Memphis Grizzlies", "Boston Celtics", "New York Knicks", "Sacramento Kings", "Charlotte Hornets", "Houston Rockets", "Golden State Warriors", "New York Knicks", "Charlotte Hornets", "Toronto Raptors", "Detroit Pistons", "Dallas Mavericks", "Toronto Raptors", "New Orleans Pelicans", "New Orleans Pelicans", "San Antonio Spurs", "Dallas Mavericks", "Minnesota Timberwolves", "Orlando Magic", "Oklahoma City Thunder", "Chicago Bulls", "Brooklyn Nets", "Cleveland Cavaliers", "Detroit Pistons", "Golden State Warriors", "Los Angeles Lakers", "Los Angeles Clippers", "Chicago Bulls", "Los Angeles Lakers", "Brooklyn Nets", "Brooklyn Nets", "Oklahoma City Thunder", "Miami Heat", "Toronto Raptors", "Cleveland Cavaliers", "Atlanta Hawks"],
      [143, 125, 105, 104, 121, 124, 152, 134, 126, 126, 132, 116, 157, 131, 136, 110, 132, 144, 122, 128, 131, 126, 123, 109, 127, 144, 103, 110, 123, 120, 140, 122, 142, 150, 101, 133, 112, 126, 109, 105, 126, 115, 110, 109, 134, 133, 116, 124, 105, 122, 115, 132, 109, 125, 102, 127, 129, 133, 122, 123, 102, 105, 137, 111, 111, 121, 129, 121, 103, 122, 123, 145, 133, 99, 109, 133, 111, 126, 117, 140, 120, 157],
      [23, 12, -7, -51, 5, -1, 41, 16, 2, -11, 6, -12, 5, -1, 23, -4, -10, 15, 10, 9, 8, -14, -14, -18, -24, 31, -13, -7, 6, 16, 14, 9, 12, 34, -17, 2, 8, 18, -8, -27, 5, -3, -7, -5, 12, 2, 6, -5, -4, -11, 16, 3, -22, 14, -9, 2, 14, 22, -8, 9, -27, -12, 17, -2, 14, 10, -3, 21, -5, 19, 12, -5, 17, -26, 19, 22, -4, 14, 2, 17, -9, 42]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 21.3, all: [{"name": "Pascal Siakam", "val": 21.3}, {"name": "Tyrese Haliburton", "val": 20.1}, {"name": "Myles Turner", "val": 17.1}, {"name": "Bennedict Mathurin", "val": 14.5}, {"name": "Aaron Nesmith", "val": 12.2}, {"name": "Bruce Brown", "val": 12.1}, {"name": "Buddy Hield", "val": 12.0}, {"name": "Obi Toppin", "val": 10.3}, {"name": "T.J. McConnell", "val": 10.2}, {"name": "Jalen Smith", "val": 9.9}, {"name": "Andrew Nembhard", "val": 9.2}, {"name": "Isaiah Jackson", "val": 6.5}, {"name": "Jordan Nwora", "val": 5.2}, {"name": "Ben Sheppard", "val": 4.4}, {"name": "Doug McDermott", "val": 4.2}, {"name": "Jarace Walker", "val": 3.6}, {"name": "Oscar Tshiebwe", "val": 3.3}, {"name": "Daniel Theis", "val": 2.0}, {"name": "Isaiah Wong", "val": 2.0}, {"name": "Kendall Brown", "val": 1.4}, {"name": "James Johnson", "val": 0.9}, {"name": "Quenton Jackson", "val": 0.7}] },
      reb: { name: "Pascal Siakam", val: 7.8, all: [{"name": "Pascal Siakam", "val": 7.8}, {"name": "Myles Turner", "val": 6.9}, {"name": "Jalen Smith", "val": 5.5}, {"name": "Bruce Brown", "val": 4.7}, {"name": "Bennedict Mathurin", "val": 4.0}, {"name": "Isaiah Jackson", "val": 4.0}, {"name": "Tyrese Haliburton", "val": 3.9}, {"name": "Obi Toppin", "val": 3.9}, {"name": "Aaron Nesmith", "val": 3.8}, {"name": "Buddy Hield", "val": 3.2}, {"name": "T.J. McConnell", "val": 2.7}, {"name": "Andrew Nembhard", "val": 2.1}, {"name": "Oscar Tshiebwe", "val": 2.0}, {"name": "Jarace Walker", "val": 1.9}, {"name": "Jordan Nwora", "val": 1.8}, {"name": "Ben Sheppard", "val": 1.6}, {"name": "Quenton Jackson", "val": 1.3}, {"name": "Doug McDermott", "val": 0.6}, {"name": "James Johnson", "val": 0.4}, {"name": "Kendall Brown", "val": 0.3}, {"name": "Daniel Theis", "val": 0.0}, {"name": "Isaiah Wong", "val": 0.0}] },
      ast: { name: "Tyrese Haliburton", val: 10.9, all: [{"name": "Tyrese Haliburton", "val": 10.9}, {"name": "T.J. McConnell", "val": 5.5}, {"name": "Andrew Nembhard", "val": 4.1}, {"name": "Pascal Siakam", "val": 3.7}, {"name": "Bruce Brown", "val": 3.0}, {"name": "Buddy Hield", "val": 2.7}, {"name": "Bennedict Mathurin", "val": 2.0}, {"name": "Obi Toppin", "val": 1.6}, {"name": "Aaron Nesmith", "val": 1.5}, {"name": "Myles Turner", "val": 1.3}, {"name": "Jarace Walker", "val": 1.2}, {"name": "Jalen Smith", "val": 1.0}, {"name": "Jordan Nwora", "val": 1.0}, {"name": "James Johnson", "val": 0.9}, {"name": "Ben Sheppard", "val": 0.9}, {"name": "Isaiah Jackson", "val": 0.8}, {"name": "Doug McDermott", "val": 0.7}, {"name": "Quenton Jackson", "val": 0.7}, {"name": "Oscar Tshiebwe", "val": 0.3}, {"name": "Kendall Brown", "val": 0.3}, {"name": "Daniel Theis", "val": 0.0}, {"name": "Isaiah Wong", "val": 0.0}] },
      stl: { name: "Tyrese Haliburton", val: 1.2, all: [{"name": "Tyrese Haliburton", "val": 1.2}, {"name": "Bruce Brown", "val": 1.1}, {"name": "T.J. McConnell", "val": 1.0}, {"name": "Aaron Nesmith", "val": 0.9}, {"name": "Andrew Nembhard", "val": 0.9}, {"name": "Buddy Hield", "val": 0.8}, {"name": "Pascal Siakam", "val": 0.8}, {"name": "James Johnson", "val": 0.6}, {"name": "Isaiah Jackson", "val": 0.6}, {"name": "Ben Sheppard", "val": 0.6}, {"name": "Obi Toppin", "val": 0.6}, {"name": "Bennedict Mathurin", "val": 0.6}, {"name": "Jarace Walker", "val": 0.5}, {"name": "Myles Turner", "val": 0.5}, {"name": "Jalen Smith", "val": 0.3}, {"name": "Doug McDermott", "val": 0.3}, {"name": "Jordan Nwora", "val": 0.3}, {"name": "Oscar Tshiebwe", "val": 0.3}, {"name": "Quenton Jackson", "val": 0.3}, {"name": "Daniel Theis", "val": 0.0}, {"name": "Kendall Brown", "val": 0.0}, {"name": "Isaiah Wong", "val": 0.0}] },
      blk: { name: "Myles Turner", val: 1.9, all: [{"name": "Myles Turner", "val": 1.9}, {"name": "Isaiah Jackson", "val": 1.0}, {"name": "Tyrese Haliburton", "val": 0.7}, {"name": "Aaron Nesmith", "val": 0.7}, {"name": "Buddy Hield", "val": 0.6}, {"name": "Jalen Smith", "val": 0.6}, {"name": "Obi Toppin", "val": 0.5}, {"name": "Pascal Siakam", "val": 0.4}, {"name": "Jarace Walker", "val": 0.3}, {"name": "Bruce Brown", "val": 0.2}, {"name": "Bennedict Mathurin", "val": 0.2}, {"name": "Jordan Nwora", "val": 0.1}, {"name": "T.J. McConnell", "val": 0.1}, {"name": "James Johnson", "val": 0.1}, {"name": "Andrew Nembhard", "val": 0.1}, {"name": "Oscar Tshiebwe", "val": 0.1}, {"name": "Isaiah Wong", "val": 0.0}, {"name": "Kendall Brown", "val": 0.0}, {"name": "Ben Sheppard", "val": 0.0}, {"name": "Daniel Theis", "val": 0.0}, {"name": "Doug McDermott", "val": 0.0}, {"name": "Quenton Jackson", "val": 0.0}] },
    },
    avail: [
      { name: "Obi Toppin", g: 82 },
      { name: "Myles Turner", g: 77 },
      { name: "Aaron Nesmith", g: 72 },
      { name: "T.J. McConnell", g: 71 },
      { name: "Tyrese Haliburton", g: 69 },
      { name: "Andrew Nembhard", g: 68 },
      { name: "Jalen Smith", g: 61 },
      { name: "Isaiah Jackson", g: 59 },
      { name: "Bennedict Mathurin", g: 59 },
      { name: "Ben Sheppard", g: 57 },
      { name: "Buddy Hield", g: 52 },
      { name: "Pascal Siakam", g: 41 },
      { name: "Bruce Brown", g: 33 },
      { name: "Jarace Walker", g: 33 },
      { name: "Doug McDermott", g: 18 },
      { name: "Jordan Nwora", g: 18 },
      { name: "Kendall Brown", g: 15 },
      { name: "James Johnson", g: 9 },
      { name: "Oscar Tshiebwe", g: 8 },
      { name: "Quenton Jackson", g: 3 },
      { name: "Daniel Theis", g: 1 },
      { name: "Isaiah Wong", g: 1 },
    ]
  },

  "2024-25": {
    w: 50, l: 32,
    topW:   { pts: 162, opp: 109, against: "Washington Wizards" },
    worstL: { pts: 105, opp: 142, against: "Boston Celtics" },
    conf_rank: 4,
    games: buildGames(
      "WLLLWLWWLWLLWLLLWWWLLLLWLWWWWWLLWLWWWWWWLWWLWWWWLWLLWWWLWLWWLLLWWLWWWWWLWLWWWWWWLW",
      ["Detroit Pistons", "New York Knicks", "Philadelphia 76ers", "Orlando Magic", "Boston Celtics", "New Orleans Pelicans", "Dallas Mavericks", "Orlando Magic", "Charlotte Hornets", "New York Knicks", "Orlando Magic", "Miami Heat", "Miami Heat", "Toronto Raptors", "Houston Rockets", "Milwaukee Bucks", "Washington Wizards", "New Orleans Pelicans", "Portland Trail Blazers", "Detroit Pistons", "Memphis Grizzlies", "Toronto Raptors", "Brooklyn Nets", "Chicago Bulls", "Charlotte Hornets", "Philadelphia 76ers", "New Orleans Pelicans", "Phoenix Suns", "Sacramento Kings", "Golden State Warriors", "Oklahoma City Thunder", "Boston Celtics", "Boston Celtics", "Milwaukee Bucks", "Miami Heat", "Phoenix Suns", "Brooklyn Nets", "Chicago Bulls", "Golden State Warriors", "Cleveland Cavaliers", "Cleveland Cavaliers", "Detroit Pistons", "Philadelphia 76ers", "San Antonio Spurs", "San Antonio Spurs", "Detroit Pistons", "Atlanta Hawks", "Utah Jazz", "Portland Trail Blazers", "Los Angeles Clippers", "Los Angeles Lakers", "New York Knicks", "Washington Wizards", "Memphis Grizzlies", "Los Angeles Clippers", "Denver Nuggets", "Toronto Raptors", "Miami Heat", "Chicago Bulls", "Houston Rockets", "Atlanta Hawks", "Atlanta Hawks", "Chicago Bulls", "Milwaukee Bucks", "Philadelphia 76ers", "Milwaukee Bucks", "Minnesota Timberwolves", "Dallas Mavericks", "Brooklyn Nets", "Brooklyn Nets", "Minnesota Timberwolves", "Los Angeles Lakers", "Washington Wizards", "Oklahoma City Thunder", "Sacramento Kings", "Charlotte Hornets", "Utah Jazz", "Denver Nuggets", "Washington Wizards", "Cleveland Cavaliers", "Orlando Magic", "Cleveland Cavaliers"],
      [115, 98, 114, 115, 135, 118, 134, 118, 83, 132, 90, 111, 119, 119, 113, 117, 115, 114, 121, 106, 121, 111, 90, 132, 109, 121, 119, 120, 122, 111, 114, 105, 123, 112, 128, 126, 113, 129, 108, 108, 117, 111, 115, 110, 136, 133, 132, 112, 89, 119, 117, 115, 134, 127, 129, 116, 111, 120, 127, 115, 118, 118, 103, 115, 112, 119, 132, 135, 105, 108, 119, 119, 162, 111, 111, 119, 140, 125, 104, 114, 115, 126],
      [6, -25, -4, -4, 3, -7, 7, 7, -20, 11, -4, -13, 9, -11, -17, -12, 12, 4, 7, -24, -15, -11, -9, 9, -4, 14, 15, 9, 27, 6, -6, -37, 9, -8, 13, 18, 14, 16, 12, 15, -10, 11, 13, -30, 38, 14, 5, 1, -23, 7, -7, -13, 4, 14, 18, -9, 20, -5, 15, 13, -6, -2, -18, 1, 12, -7, 2, 4, 6, 5, 16, -1, 53, -21, 2, 14, 28, 5, 6, 2, -14, 8]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 20.2, all: [{"name": "Pascal Siakam", "val": 20.2}, {"name": "Tyrese Haliburton", "val": 18.6}, {"name": "Bennedict Mathurin", "val": 16.1}, {"name": "Myles Turner", "val": 15.6}, {"name": "Aaron Nesmith", "val": 12.0}, {"name": "Obi Toppin", "val": 10.5}, {"name": "Andrew Nembhard", "val": 10.0}, {"name": "T.J. McConnell", "val": 9.1}, {"name": "Isaiah Jackson", "val": 7.0}, {"name": "Thomas Bryant", "val": 6.9}, {"name": "Jarace Walker", "val": 6.1}, {"name": "James Wiseman", "val": 6.0}, {"name": "Quenton Jackson", "val": 5.8}, {"name": "Ben Sheppard", "val": 5.3}, {"name": "Tony Bradley", "val": 4.4}, {"name": "Moses Brown", "val": 3.2}, {"name": "RayJ Dennis", "val": 2.7}, {"name": "Enrique Freeman", "val": 2.1}, {"name": "Johnny Furphy", "val": 2.1}, {"name": "James Johnson", "val": 0.7}, {"name": "Tristen Newton", "val": 0.6}, {"name": "Jahlil Okafor", "val": 0.0}] },
      reb: { name: "Pascal Siakam", val: 6.9, all: [{"name": "Pascal Siakam", "val": 6.9}, {"name": "Myles Turner", "val": 6.5}, {"name": "Isaiah Jackson", "val": 5.6}, {"name": "Bennedict Mathurin", "val": 5.3}, {"name": "Aaron Nesmith", "val": 4.0}, {"name": "Obi Toppin", "val": 4.0}, {"name": "Thomas Bryant", "val": 3.9}, {"name": "Tyrese Haliburton", "val": 3.5}, {"name": "Andrew Nembhard", "val": 3.3}, {"name": "Jarace Walker", "val": 3.1}, {"name": "Tony Bradley", "val": 3.0}, {"name": "Ben Sheppard", "val": 2.8}, {"name": "T.J. McConnell", "val": 2.4}, {"name": "Quenton Jackson", "val": 1.6}, {"name": "Enrique Freeman", "val": 1.4}, {"name": "Johnny Furphy", "val": 1.4}, {"name": "Moses Brown", "val": 1.4}, {"name": "RayJ Dennis", "val": 1.1}, {"name": "James Wiseman", "val": 1.0}, {"name": "Jahlil Okafor", "val": 1.0}, {"name": "James Johnson", "val": 0.5}, {"name": "Tristen Newton", "val": 0.0}] },
      ast: { name: "Tyrese Haliburton", val: 9.2, all: [{"name": "Tyrese Haliburton", "val": 9.2}, {"name": "Andrew Nembhard", "val": 5.0}, {"name": "T.J. McConnell", "val": 4.4}, {"name": "Pascal Siakam", "val": 3.4}, {"name": "Bennedict Mathurin", "val": 1.9}, {"name": "Quenton Jackson", "val": 1.9}, {"name": "Obi Toppin", "val": 1.6}, {"name": "Myles Turner", "val": 1.5}, {"name": "Jarace Walker", "val": 1.5}, {"name": "RayJ Dennis", "val": 1.3}, {"name": "Ben Sheppard", "val": 1.3}, {"name": "Aaron Nesmith", "val": 1.2}, {"name": "Isaiah Jackson", "val": 1.0}, {"name": "Jahlil Okafor", "val": 1.0}, {"name": "Thomas Bryant", "val": 0.9}, {"name": "Johnny Furphy", "val": 0.4}, {"name": "Tony Bradley", "val": 0.4}, {"name": "Enrique Freeman", "val": 0.4}, {"name": "James Johnson", "val": 0.3}, {"name": "Tristen Newton", "val": 0.2}, {"name": "Moses Brown", "val": 0.0}, {"name": "James Wiseman", "val": 0.0}] },
      stl: { name: "Tyrese Haliburton", val: 1.4, all: [{"name": "Tyrese Haliburton", "val": 1.4}, {"name": "Andrew Nembhard", "val": 1.2}, {"name": "T.J. McConnell", "val": 1.1}, {"name": "Pascal Siakam", "val": 0.9}, {"name": "Myles Turner", "val": 0.8}, {"name": "Aaron Nesmith", "val": 0.8}, {"name": "Quenton Jackson", "val": 0.8}, {"name": "Bennedict Mathurin", "val": 0.7}, {"name": "Jarace Walker", "val": 0.7}, {"name": "RayJ Dennis", "val": 0.6}, {"name": "Obi Toppin", "val": 0.6}, {"name": "Ben Sheppard", "val": 0.6}, {"name": "Isaiah Jackson", "val": 0.6}, {"name": "Thomas Bryant", "val": 0.5}, {"name": "Johnny Furphy", "val": 0.4}, {"name": "Moses Brown", "val": 0.2}, {"name": "Tony Bradley", "val": 0.1}, {"name": "Enrique Freeman", "val": 0.1}, {"name": "James Wiseman", "val": 0.0}, {"name": "James Johnson", "val": 0.0}, {"name": "Jahlil Okafor", "val": 0.0}, {"name": "Tristen Newton", "val": 0.0}] },
      blk: { name: "Myles Turner", val: 2.0, all: [{"name": "Myles Turner", "val": 2.0}, {"name": "Isaiah Jackson", "val": 1.6}, {"name": "Tyrese Haliburton", "val": 0.7}, {"name": "Tony Bradley", "val": 0.6}, {"name": "Thomas Bryant", "val": 0.6}, {"name": "Pascal Siakam", "val": 0.5}, {"name": "Aaron Nesmith", "val": 0.4}, {"name": "Obi Toppin", "val": 0.4}, {"name": "T.J. McConnell", "val": 0.3}, {"name": "Jarace Walker", "val": 0.3}, {"name": "Bennedict Mathurin", "val": 0.3}, {"name": "James Johnson", "val": 0.2}, {"name": "Ben Sheppard", "val": 0.2}, {"name": "Andrew Nembhard", "val": 0.2}, {"name": "Quenton Jackson", "val": 0.2}, {"name": "Johnny Furphy", "val": 0.2}, {"name": "RayJ Dennis", "val": 0.2}, {"name": "Enrique Freeman", "val": 0.1}, {"name": "Moses Brown", "val": 0.1}, {"name": "James Wiseman", "val": 0.0}, {"name": "Jahlil Okafor", "val": 0.0}, {"name": "Tristen Newton", "val": 0.0}] },
    },
    avail: [
      { name: "Obi Toppin", g: 79 },
      { name: "T.J. McConnell", g: 79 },
      { name: "Pascal Siakam", g: 78 },
      { name: "Jarace Walker", g: 75 },
      { name: "Tyrese Haliburton", g: 73 },
      { name: "Myles Turner", g: 72 },
      { name: "Bennedict Mathurin", g: 72 },
      { name: "Andrew Nembhard", g: 65 },
      { name: "Ben Sheppard", g: 63 },
      { name: "Thomas Bryant", g: 56 },
      { name: "Johnny Furphy", g: 50 },
      { name: "Aaron Nesmith", g: 45 },
      { name: "Quenton Jackson", g: 28 },
      { name: "Enrique Freeman", g: 22 },
      { name: "Tony Bradley", g: 14 },
      { name: "James Johnson", g: 12 },
      { name: "RayJ Dennis", g: 11 },
      { name: "Moses Brown", g: 9 },
      { name: "Isaiah Jackson", g: 5 },
      { name: "Tristen Newton", g: 5 },
      { name: "James Wiseman", g: 1 },
      { name: "Jahlil Okafor", g: 1 },
    ]
  },

  "2025-26": {
    w: 19, l: 63,
    topW:   { pts: 119, opp: 86, against: "Washington Wizards" },
    worstL: { pts: 78, opp: 121, against: "Detroit Pistons" },
    conf_rank: 14,
    games: buildGames(
      "LLLLLWLLLLLLLLWLLLWWLLWWLLLLLLLLLLLLLWWWLWLLLWLWWLLLLWWLLLLLLLLLLLLLLLLWLLWWLLLWLL",
      ["Oklahoma City Thunder", "Memphis Grizzlies", "Minnesota Timberwolves", "Dallas Mavericks", "Atlanta Hawks", "Golden State Warriors", "Milwaukee Bucks", "Brooklyn Nets", "Denver Nuggets", "Golden State Warriors", "Utah Jazz", "Phoenix Suns", "Toronto Raptors", "Detroit Pistons", "Charlotte Hornets", "Cleveland Cavaliers", "Detroit Pistons", "Toronto Raptors", "Washington Wizards", "Chicago Bulls", "Cleveland Cavaliers", "Denver Nuggets", "Chicago Bulls", "Sacramento Kings", "Philadelphia 76ers", "Washington Wizards", "New York Knicks", "New Orleans Pelicans", "Boston Celtics", "Milwaukee Bucks", "Boston Celtics", "Miami Heat", "Houston Rockets", "Orlando Magic", "San Antonio Spurs", "Orlando Magic", "Cleveland Cavaliers", "Charlotte Hornets", "Miami Heat", "Boston Celtics", "Toronto Raptors", "New Orleans Pelicans", "Detroit Pistons", "Philadelphia 76ers", "Boston Celtics", "Oklahoma City Thunder", "Atlanta Hawks", "Chicago Bulls", "Atlanta Hawks", "Houston Rockets", "Utah Jazz", "Milwaukee Bucks", "Toronto Raptors", "New York Knicks", "Brooklyn Nets", "Washington Wizards", "Washington Wizards", "Dallas Mavericks", "Philadelphia 76ers", "Charlotte Hornets", "Memphis Grizzlies", "Los Angeles Clippers", "Los Angeles Lakers", "Portland Trail Blazers", "Sacramento Kings", "Phoenix Suns", "New York Knicks", "Milwaukee Bucks", "New York Knicks", "Portland Trail Blazers", "San Antonio Spurs", "Orlando Magic", "Los Angeles Lakers", "Los Angeles Clippers", "Miami Heat", "Chicago Bulls", "Charlotte Hornets", "Cleveland Cavaliers", "Minnesota Timberwolves", "Brooklyn Nets", "Philadelphia 76ers", "Detroit Pistons"],
      [135, 103, 110, 105, 108, 114, 115, 103, 100, 83, 128, 98, 111, 112, 127, 109, 117, 95, 119, 103, 119, 120, 120, 116, 105, 89, 113, 109, 95, 94, 122, 116, 119, 110, 113, 127, 116, 114, 123, 98, 101, 127, 78, 104, 104, 117, 116, 113, 129, 114, 122, 99, 104, 137, 115, 105, 118, 130, 114, 109, 106, 107, 117, 111, 109, 108, 92, 123, 110, 119, 119, 128, 130, 113, 135, 145, 108, 108, 104, 123, 94, 121],
      [-6, -25, -4, -2, -20, 5, -2, -9, -17, -31, -24, -35, -18, -15, 9, -11, -5, -2, 33, 2, -16, -15, 15, 11, -10, -19, -1, -19, -8, -17, -18, -26, -7, -2, -10, -8, -4, 2, 24, 2, -14, 8, -43, -9, -15, 3, -16, 3, 5, -4, -9, -6, -18, 3, 5, -7, -13, -4, -21, -24, -19, -23, -11, -20, -5, -15, -9, -11, -26, -8, -15, 2, -7, -1, 17, 19, -21, -9, -20, 29, -11, -12]
    ),
    leaders: {
      pts: { name: "Pascal Siakam", val: 24.0, all: [{"name": "Pascal Siakam", "val": 24.0}, {"name": "Bennedict Mathurin", "val": 17.8}, {"name": "Andrew Nembhard", "val": 16.9}, {"name": "Aaron Nesmith", "val": 13.8}, {"name": "Jarace Walker", "val": 11.6}, {"name": "Ivica Zubac", "val": 11.6}, {"name": "Obi Toppin", "val": 11.6}, {"name": "Micah Potter", "val": 9.7}, {"name": "Jay Huff", "val": 9.5}, {"name": "Kobe Brown", "val": 9.4}, {"name": "T.J. McConnell", "val": 9.4}, {"name": "Quenton Jackson", "val": 9.1}, {"name": "Jalen Slawson", "val": 7.3}, {"name": "Ben Sheppard", "val": 7.1}, {"name": "Ethan Thompson", "val": 7.0}, {"name": "Isaiah Jackson", "val": 6.4}, {"name": "Mac McClung", "val": 6.3}, {"name": "Garrison Mathews", "val": 5.2}, {"name": "Johnny Furphy", "val": 5.1}, {"name": "RayJ Dennis", "val": 4.9}, {"name": "Jeremiah Robinson-Earl", "val": 4.6}, {"name": "Taelon Peter", "val": 4.5}, {"name": "Kam Jones", "val": 4.4}, {"name": "Tony Bradley", "val": 4.0}, {"name": "James Wiseman", "val": 3.3}, {"name": "Monte Morris", "val": 3.0}, {"name": "Cody Martin", "val": 1.8}] },
      reb: { name: "Ivica Zubac", val: 7.2, all: [{"name": "Ivica Zubac", "val": 7.2}, {"name": "Pascal Siakam", "val": 6.6}, {"name": "Isaiah Jackson", "val": 5.6}, {"name": "Bennedict Mathurin", "val": 5.4}, {"name": "Jeremiah Robinson-Earl", "val": 5.2}, {"name": "Jarace Walker", "val": 5.1}, {"name": "Micah Potter", "val": 5.0}, {"name": "Kobe Brown", "val": 4.9}, {"name": "Jalen Slawson", "val": 4.4}, {"name": "Obi Toppin", "val": 4.4}, {"name": "Johnny Furphy", "val": 4.4}, {"name": "Aaron Nesmith", "val": 4.2}, {"name": "Jay Huff", "val": 4.0}, {"name": "Cody Martin", "val": 3.5}, {"name": "Ben Sheppard", "val": 3.0}, {"name": "Tony Bradley", "val": 2.8}, {"name": "Andrew Nembhard", "val": 2.8}, {"name": "Quenton Jackson", "val": 2.3}, {"name": "T.J. McConnell", "val": 2.2}, {"name": "Ethan Thompson", "val": 2.2}, {"name": "James Wiseman", "val": 2.0}, {"name": "Kam Jones", "val": 1.6}, {"name": "Taelon Peter", "val": 1.6}, {"name": "RayJ Dennis", "val": 1.6}, {"name": "Mac McClung", "val": 1.3}, {"name": "Monte Morris", "val": 1.2}, {"name": "Garrison Mathews", "val": 1.1}] },
      ast: { name: "Andrew Nembhard", val: 7.7, all: [{"name": "Andrew Nembhard", "val": 7.7}, {"name": "T.J. McConnell", "val": 5.1}, {"name": "Pascal Siakam", "val": 3.8}, {"name": "Kam Jones", "val": 3.2}, {"name": "Quenton Jackson", "val": 2.9}, {"name": "Jalen Slawson", "val": 2.8}, {"name": "Jarace Walker", "val": 2.5}, {"name": "Bennedict Mathurin", "val": 2.3}, {"name": "Obi Toppin", "val": 2.3}, {"name": "RayJ Dennis", "val": 2.0}, {"name": "Kobe Brown", "val": 2.0}, {"name": "Aaron Nesmith", "val": 1.9}, {"name": "Ethan Thompson", "val": 1.8}, {"name": "Ben Sheppard", "val": 1.8}, {"name": "Ivica Zubac", "val": 1.8}, {"name": "Micah Potter", "val": 1.5}, {"name": "Jay Huff", "val": 1.5}, {"name": "Monte Morris", "val": 1.5}, {"name": "Johnny Furphy", "val": 1.2}, {"name": "Taelon Peter", "val": 1.1}, {"name": "Isaiah Jackson", "val": 0.8}, {"name": "James Wiseman", "val": 0.8}, {"name": "Jeremiah Robinson-Earl", "val": 0.7}, {"name": "Garrison Mathews", "val": 0.7}, {"name": "Cody Martin", "val": 0.5}, {"name": "Tony Bradley", "val": 0.5}, {"name": "Mac McClung", "val": 0.3}] },
      stl: { name: "Mac McClung", val: 1.7, all: [{"name": "Mac McClung", "val": 1.7}, {"name": "Jalen Slawson", "val": 1.5}, {"name": "Pascal Siakam", "val": 1.1}, {"name": "Cody Martin", "val": 1.0}, {"name": "T.J. McConnell", "val": 1.0}, {"name": "Andrew Nembhard", "val": 0.9}, {"name": "Jarace Walker", "val": 0.8}, {"name": "Taelon Peter", "val": 0.7}, {"name": "Isaiah Jackson", "val": 0.7}, {"name": "Johnny Furphy", "val": 0.6}, {"name": "Bennedict Mathurin", "val": 0.6}, {"name": "Quenton Jackson", "val": 0.6}, {"name": "Ethan Thompson", "val": 0.6}, {"name": "Ben Sheppard", "val": 0.6}, {"name": "Aaron Nesmith", "val": 0.6}, {"name": "Micah Potter", "val": 0.5}, {"name": "Obi Toppin", "val": 0.5}, {"name": "Jay Huff", "val": 0.5}, {"name": "Kam Jones", "val": 0.5}, {"name": "Kobe Brown", "val": 0.5}, {"name": "Jeremiah Robinson-Earl", "val": 0.4}, {"name": "Ivica Zubac", "val": 0.4}, {"name": "Garrison Mathews", "val": 0.4}, {"name": "RayJ Dennis", "val": 0.2}, {"name": "Tony Bradley", "val": 0.2}, {"name": "Monte Morris", "val": 0.2}, {"name": "James Wiseman", "val": 0.0}] },
      blk: { name: "Jay Huff", val: 1.9, all: [{"name": "Jay Huff", "val": 1.9}, {"name": "Jalen Slawson", "val": 1.1}, {"name": "Isaiah Jackson", "val": 0.8}, {"name": "Ivica Zubac", "val": 0.8}, {"name": "Aaron Nesmith", "val": 0.5}, {"name": "Cody Martin", "val": 0.5}, {"name": "Pascal Siakam", "val": 0.4}, {"name": "Kobe Brown", "val": 0.4}, {"name": "Jarace Walker", "val": 0.3}, {"name": "Mac McClung", "val": 0.3}, {"name": "Ethan Thompson", "val": 0.3}, {"name": "Micah Potter", "val": 0.3}, {"name": "RayJ Dennis", "val": 0.3}, {"name": "James Wiseman", "val": 0.3}, {"name": "Tony Bradley", "val": 0.2}, {"name": "Garrison Mathews", "val": 0.2}, {"name": "Monte Morris", "val": 0.2}, {"name": "T.J. McConnell", "val": 0.2}, {"name": "Johnny Furphy", "val": 0.2}, {"name": "Jeremiah Robinson-Earl", "val": 0.1}, {"name": "Bennedict Mathurin", "val": 0.1}, {"name": "Taelon Peter", "val": 0.1}, {"name": "Ben Sheppard", "val": 0.1}, {"name": "Andrew Nembhard", "val": 0.1}, {"name": "Quenton Jackson", "val": 0.1}, {"name": "Kam Jones", "val": 0.0}, {"name": "Obi Toppin", "val": 0.0}] },
    },
    avail: [
      { name: "Jay Huff", g: 82 },
      { name: "Jarace Walker", g: 76 },
      { name: "Ben Sheppard", g: 65 },
      { name: "Pascal Siakam", g: 62 },
      { name: "Andrew Nembhard", g: 57 },
      { name: "T.J. McConnell", g: 56 },
      { name: "Quenton Jackson", g: 49 },
      { name: "Micah Potter", g: 47 },
      { name: "Aaron Nesmith", g: 45 },
      { name: "Isaiah Jackson", g: 38 },
      { name: "Taelon Peter", g: 38 },
      { name: "Tony Bradley", g: 38 },
      { name: "Kam Jones", g: 37 },
      { name: "Johnny Furphy", g: 35 },
      { name: "Ethan Thompson", g: 32 },
      { name: "Bennedict Mathurin", g: 28 },
      { name: "Kobe Brown", g: 27 },
      { name: "Obi Toppin", g: 24 },
      { name: "Jeremiah Robinson-Earl", g: 17 },
      { name: "Garrison Mathews", g: 15 },
      { name: "Jalen Slawson", g: 13 },
      { name: "RayJ Dennis", g: 13 },
      { name: "Monte Morris", g: 6 },
      { name: "Ivica Zubac", g: 5 },
      { name: "Cody Martin", g: 4 },
      { name: "James Wiseman", g: 4 },
      { name: "Mac McClung", g: 3 },
    ]
  },

};
