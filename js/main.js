/* ================================================================
   main.js — Punto de entrada. Orquesta Render, Charts y Events.
   Depende de: data.js → state.js → api.js → charts.js → render.js → events.js
   ================================================================ */

"use strict";

(function () {

  /* ── Inicializar estado global ───────────────────────────────── */
  AppState.seasons       = DataAPI.getAllSeasons();
  AppState.currentSeason = AppState.seasons[AppState.seasons.length - 1];

  /* ── Luminancia relativa WCAG ───────────────────────────────── */
  function relativeLuminance(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const lin = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  }

  function contrastRatio(l1, l2) {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  /* ── Aplicar colores del equipo al DOM (adaptado al tema) ────── */
  function applyTeamColors() {
    const config  = DataAPI.getTeamConfig();
    const isDark  = document.documentElement.getAttribute("data-theme") !== "light";
    // Luminancia aproximada del fondo: #0f0f0f (dark) / #f4f4f4 (light)
    const bgL     = isDark ? 0.003 : 0.91;
    const MIN_CONTRAST = 1.5;

    const primaryL   = relativeLuminance(config.primaryColor);
    const secondaryL = relativeLuminance(config.secondaryColor);

    let primary   = config.primaryColor;
    let secondary = config.secondaryColor;

    // Si el primary tiene poco contraste contra el fondo y el secondary lo mejora → swap
    if (contrastRatio(primaryL, bgL) < MIN_CONTRAST &&
        contrastRatio(secondaryL, bgL) > contrastRatio(primaryL, bgL)) {
      primary   = config.secondaryColor;
      secondary = config.primaryColor;
    }

    // Texto sobre el primary: negro si es claro, blanco si es oscuro (umbral WCAG ~0.179)
    const adaptedL    = relativeLuminance(primary);
    const textOnPrimary = adaptedL > 0.179 ? "#000000" : "#ffffff";

    const root = document.documentElement;
    root.style.setProperty("--team-primary",      primary);
    root.style.setProperty("--team-secondary",    secondary);
    root.style.setProperty("--team-primary-text", textOnPrimary);
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
      applyTeamColors();
      Charts.updateTheme();
      Render.availability(AppState.currentSeason);
    });

    renderSeason(AppState.currentSeason, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
