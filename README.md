# NBA Team Dashboard — Guía de uso

## Estructura del proyecto

```
nba_visualization/
├── index.html          ← HTML puro, sin lógica ni estilos inline
├── css/
│   ├── base.css        ← Variables de equipo, reset, tipografía
│   ├── theme.css       ← Toggle light/dark + transiciones
│   ├── layout.css      ← Grid, top-bar, secciones, responsive
│   └── components.css  ← Cards, tooltip, panel, barras, líderes
├── js/
│   ├── data.js         ← ⬅ ÚNICO archivo que cambia por equipo
│   ├── charts.js       ← Lógica de Chart.js (reutilizable)
│   ├── render.js       ← Funciones DOM (reutilizable)
│   ├── events.js       ← Tooltip, panel, partículas, tema (reutilizable)
│   └── main.js         ← Punto de entrada (reutilizable)
└── assets/             ← Logos, imágenes opcionales
```

## Cómo usar con otro equipo

### 1. Copiar la carpeta entera
```bash
cp -r hawks/ celtics/
cd celtics/
```

### 2. Editar `js/data.js` — solo este archivo cambia
```js
window.TEAM_CONFIG = {
  name:          "Boston Celtics",
  abbr:          "BOS",
  conference:    "East",
  primaryColor:  "#007A33",   // Verde Celtics
  secondaryColor:"#BA9653",   // Dorado Celtics
  subtitleText:  "Performance Dashboard · 2020–21 → 2024–25",
};

window.SEASON_DATA = {
  "2020-21": {
    w: 36, l: 36,
    // ... datos del equipo
  },
  // ...
};
```

### 3. Obtener datos reales con el scraper
```bash
pip install requests beautifulsoup4 pandas lxml

# Editar hawks_scraper.py:
# Cambiar la línea:  TEAM_ABR = "ATL"
# Por:               TEAM_ABR = "BOS"

python hawks_scraper.py
# Genera: games.csv, leaders.csv, availability.csv
```

Luego copiar los valores de los CSVs al objeto `SEASON_DATA` en `data.js`.

## Eventos disponibles

| Evento | Comportamiento |
|--------|---------------|
| Hover sobre punto | Tooltip con detalle del partido |
| Click sobre punto | Panel lateral con stats del partido + racha |
| Click en tab de temporada | Cambio con animación de partículas + fade |
| Click en toggle | Cambia entre dark/light mode (se guarda en localStorage) |
| Hover en métrica | Animación de elevación |
| Hover en leader card | Elevación + borde rojo |

## Rachas destacadas

El sistema detecta automáticamente rachas de **4 o más** victorias o derrotas
consecutivas y las resalta como bandas de fondo en el gráfico de puntos.

Para cambiar el mínimo de partidos de una racha:
```js
// En charts.js, función buildGamesChart:
const streaks = detectStreaks(allGames, 4); // Cambia 4 por el mínimo deseado
```

## Notas técnicas

- **Sin frameworks**: HTML + CSS + JS vanilla + Chart.js vía CDN.
- **Sin build step**: Abre `index.html` directamente en el navegador.
- **Tema persistente**: Se guarda en `localStorage` entre sesiones.
- **Flash prevention**: El script inline en `<head>` aplica el tema antes del primer render.
- **Responsive**: Layout de 2 columnas colapsa a 1 en móvil (<680px).
