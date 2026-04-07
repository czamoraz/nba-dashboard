/* ================================================================
   api.js — Capa de acceso a datos del dashboard.
   Abstrae window.SEASON_DATA y window.TEAM_CONFIG de modo que si
   el origen de datos cambia (ej: fetch() en vez de script tags),
   solo este archivo necesita actualizarse.
   ================================================================ */

"use strict";

window.DataAPI = (function () {

  function getSeason(season) {
    return window.SEASON_DATA[season] || null;
  }

  function getAllSeasons() {
    return Object.keys(window.SEASON_DATA);
  }

  function getTeamConfig() {
    return window.TEAM_CONFIG;
  }

  return { getSeason, getAllSeasons, getTeamConfig };

})();
