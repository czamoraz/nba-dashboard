/* ================================================================
   main.js — Punto de entrada. Orquesta Render, Charts y Events.
   Depende de: data.js → state.js → api.js → charts.js → render.js → events.js
   ================================================================ */

"use strict";

(function () {

  /* ── Inicializar estado global ───────────────────────────────── */
  AppState.seasons       = DataAPI.getAllSeasons();
  AppState.currentSeason = AppState.seasons[AppState.seasons.length - 1];

  /* ── Aplicar colores del equipo al DOM ───────────────────────── */
  function applyTeamColors() {
    const config = DataAPI.getTeamConfig();
    const root   = document.documentElement;
    root.style.setProperty("--team-primary",   config.primaryColor);
    root.style.setProperty("--team-secondary", config.secondaryColor);
  }

  /* ── Aplicar nombre del equipo ───────────────────────────────── */
  function applyTeamIdentity() {
    const config = DataAPI.getTeamConfig();
    const h1 = document.querySelector(".logo h1");
    const p  = document.querySelector(".logo p");
    if (h1) h1.textContent = config.name;
    if (p)  p.textContent  = config.subtitleText;
    document.title = `${config.name} · Dashboard`;

    const link = document.getElementById("brefLink");
    if (link) {
      link.href        = `https://www.basketball-reference.com/teams/${config.abbr}/`;
      link.textContent = `Basketball-Reference — ${config.name}`;
    }
  }

  /* ── Renderizar todo para una temporada ──────────────────────── */
  function renderSeason(season, animate = false) {
    const d        = DataAPI.getSeason(season);
    const allGames = d.games;
    const streaks  = Charts.detectStreaks(allGames);

    const doRender = () => {
      Render.tabs(AppState.seasons, season, (newSeason) => {
        changeSeason(newSeason);
      });

      Render.metrics(season);
      Render.leaders(season);
      Render.availability(season);

      Charts.buildGamesChart("gamesChart", allGames, (game) => {
        window.__openPanel && window.__openPanel(game);
      });

      setTimeout(() => {
        const inst = Charts.getGamesInstance();
        if (inst) {
          inst.options.plugins.tooltip.external = Events.getExternalTooltipHandler();
          inst.update("none");
        }
      }, 0);

      Charts.buildWinPctChart("winPctChart", AppState.seasons, season);
      Render.streakLegend(streaks);
    };

    if (animate) {
      window.__triggerParticles && window.__triggerParticles();
      Charts.animateTransition(doRender);
    } else {
      doRender();
    }

    AppState.currentSeason = season;
  }

  /* ── Cambiar temporada con animación ─────────────────────────── */
  function changeSeason(newSeason) {
    if (newSeason === AppState.currentSeason) return;
    renderSeason(newSeason, true);
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    applyTeamColors();
    applyTeamIdentity();

    Events.initTooltip();
    Events.initDetailPanel();
    Events.initAvailPopup();
    Events.initParticles();

    Events.initThemeToggle(() => {
      Charts.updateTheme();
    });

    renderSeason(AppState.currentSeason, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
