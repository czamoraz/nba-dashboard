/* ================================================================
   main.js — Punto de entrada. Orquesta Render, Charts y Events.
   Depende de: data.js → charts.js → render.js → events.js
   ================================================================ */

"use strict";

(function () {

  /* ── Estado global del dashboard ─────────────────────────────── */
  const seasons = Object.keys(window.SEASON_DATA);
  let current   = seasons[seasons.length - 1]; /* Temporada más reciente */

  /* ── Aplicar colores del equipo al DOM ───────────────────────── */
  function applyTeamColors() {
    const root = document.documentElement;
    root.style.setProperty("--team-primary",   window.TEAM_CONFIG.primaryColor);
    root.style.setProperty("--team-secondary", window.TEAM_CONFIG.secondaryColor);
  }

  /* ── Aplicar nombre del equipo ───────────────────────────────── */
  function applyTeamIdentity() {
    const h1 = document.querySelector(".logo h1");
    const p  = document.querySelector(".logo p");
    if (h1) h1.textContent = window.TEAM_CONFIG.name;
    if (p)  p.textContent  = window.TEAM_CONFIG.subtitleText;
    document.title = `${window.TEAM_CONFIG.name} · Dashboard`;
  }

  /* ── Renderizar todo para una temporada ──────────────────────── */
  function renderSeason(season, animate = false) {
    const d         = window.SEASON_DATA[season];
    const allGames  = d.games;

    /* Streak data */
    const streaks   = Charts.detectStreaks(allGames);

    const doRender = () => {
      /* Tabs */
      Render.tabs(seasons, season, (newSeason) => {
        changeSeason(newSeason);
      });

      /* Metrics */
      Render.metrics(season);

      /* Leaders */
      Render.leaders(season);

      /* Availability */
      Render.availability(season);

      /* Games chart */
      Charts.buildGamesChart("gamesChart", allGames, (game) => {
        window.__openPanel && window.__openPanel(game);
      });

      /* Inject external tooltip handler into chart after build */
      setTimeout(() => {
        const inst = Charts.getGamesInstance();
        if (inst) {
          inst.options.plugins.tooltip.external = Events.getExternalTooltipHandler();
          inst.update("none");
        }
      }, 0);

      /* Win % line chart — always shows all seasons */
      Charts.buildWinPctChart("winPctChart", seasons, season);

      /* Streak legend */
      Render.streakLegend(streaks);
    };

    if (animate) {
      /* Partículas + fade de canvas */
      window.__triggerParticles && window.__triggerParticles();
      Charts.animateTransition(doRender);
    } else {
      doRender();
    }

    current = season;
  }

  /* ── Cambiar temporada con animación ─────────────────────────── */
  function changeSeason(newSeason) {
    if (newSeason === current) return;
    renderSeason(newSeason, true);
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    applyTeamColors();
    applyTeamIdentity();

    /* Tooltip */
    Events.initTooltip();

    /* Panel lateral */
    Events.initDetailPanel();

    /* Partículas */
    Events.initParticles();

    /* Theme toggle — al cambiar tema, actualizar charts */
    Events.initThemeToggle((theme) => {
      Charts.updateTheme();
    });

    /* Render inicial sin animación */
    renderSeason(current, false);
  }

  /* Esperar a que el DOM esté listo */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
