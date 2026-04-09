# NBA Team Dashboard

Dashboard interactivo de rendimiento NBA por equipo y temporada. Construido con HTML, CSS, Chart.js y Python para el pipeline de datos.

**Demo en vivo →** `https://czamoraz.github.io/nba-dashboard`

---

## Qué incluye

- Landing page con los 30 equipos organizados por conferencia y división
- Dashboard por equipo: gráfico de resultados partido a partido, líderes estadísticos, win % histórico y disponibilidad de jugadores
- Pipeline híbrido: datos históricos desde Basketball-Reference, temporada actual desde nba_api
- Actualización automática diaria via GitHub Actions
- Tema oscuro / claro

---

## Estructura del proyecto

```
nba-dashboard/
├── index.html                  # Landing page (punto de entrada en GitHub Pages)
├── dashboard.html              # Dashboard por equipo (carga datos según ?team=)
│
├── css/
│   ├── base.css
│   ├── theme.css
│   ├── layout.css
│   └── components.css
│
├── js/
│   ├── state.js                # Estado global de la app
│   ├── api.js                  # Capa de acceso a datos
│   ├── main.js                 # Orquestación y lifecycle
│   ├── charts.js               # Visualizaciones Chart.js
│   ├── render.js               # Renderizado DOM
│   ├── events.js               # Interactividad
│   └── data/
│       ├── ATL.js              # Generado por setup_team.py
│       └── ...                 # Un archivo por equipo
│
├── pipeline/                   # Lógica Python modular
│   ├── catalog.py              # Nombres, colores y conferencias de los 30 equipos
│   ├── scrapers/
│   │   ├── base.py             # HTTP helpers (B-Ref)
│   │   ├── games.py            # Scraping de partidos
│   │   ├── leaders.py          # Scraping de estadísticas
│   │   ├── availability.py     # Scraping de disponibilidad
│   │   ├── conf_rank.py        # Scraping de posición en conferencia
│   │   └── nba_api/            # Scrapers alternativos via stats.nba.com
│   │       ├── team_ids.py
│   │       ├── games.py
│   │       ├── leaders.py
│   │       └── conf_rank.py
│   ├── transforms/
│   │   ├── games.py
│   │   ├── leaders.py
│   │   └── availability.py
│   └── writers/
│       └── js_writer.py        # Genera js/data/{TEAM}.js
│
├── scraper.py                  # CLI: scraping histórico (B-Ref)
├── csv_to_data_js.py           # CLI: convierte CSVs → JS
├── setup_team.py               # CLI: scraping + conversión en un paso
├── update_current_season.py    # CLI: actualiza temporada actual via nba_api
│
├── .github/
│   └── workflows/
│       └── update-season.yml   # GitHub Actions: actualización diaria automática
│
├── requirements.txt
└── .gitignore
```

---

## Cómo agregar un equipo

### Requisitos

```bash
pip install -r requirements.txt
```

### Paso a paso

**1. Scraping histórico (una sola vez por equipo)**

```bash
python setup_team.py --team BOS
```

Descarga datos desde Basketball-Reference y genera `js/data/BOS.js`. Tarda 5–15 minutos por los delays necesarios para no ser bloqueado.

**2. Commitear el archivo generado**

```bash
git add js/data/BOS.js
git commit -m "feat: add BOS dashboard data"
git push
```

**3. Añadir el equipo a las actualizaciones automáticas**

En `.github/workflows/update-season.yml`, editar la línea:

```yaml
DEFAULT_TEAMS: "ATL BOS"
```

```bash
git add .github/workflows/update-season.yml
git commit -m "chore: add BOS to auto-update workflow"
git push
```

A partir de ese punto, `update_current_season.py` se encargará de mantener los datos frescos todos los días.

### Flags de setup_team.py

| Flag | Descripción | Default |
|---|---|---|
| `--team` | Abreviatura del equipo (obligatorio) | — |
| `--seasons` | Años en que termina cada temporada | 2021 2022 2023 2024 2025 2026 |
| `--delay` | Segundos entre requests (subir a 8+ si hay bloqueos) | 4 |
| `--skip-scrape` | Solo regenera el JS sin volver a scrapear | false |

---

## Cómo funciona el pipeline de datos

```
Primera vez (datos históricos):
  python setup_team.py --team ATL
    └── scraper.py        → Basketball-Reference → CSVs
    └── csv_to_data_js.py → CSVs → js/data/ATL.js

Durante la temporada (automático, cada día):
  GitHub Actions
    └── update_current_season.py → nba_api → actualiza CSVs + js/data/ATL.js → git push
```

Los datos históricos (temporadas anteriores) se mantienen intactos desde B-Ref. Solo la temporada actual se actualiza via nba_api.

### Actualización manual de la temporada actual

```bash
python update_current_season.py --team ATL

# Forzar una temporada específica
python update_current_season.py --team ATL --season 2024-25

# Solo actualizar CSVs sin regenerar el JS
python update_current_season.py --team ATL --skip-js
```

> Si `update_current_season.py` falla en el paso de estadísticas de jugadores, es comportamiento normal — stats.nba.com tiene rate limiting agresivo. El script continúa y usa los datos existentes del CSV. Los partidos y la posición en conferencia se actualizan igualmente.

---

## Despliegue en GitHub Pages

**1. Activar Pages**
`Settings → Pages → Source: Deploy from a branch → Branch: main → / (root) → Save`

**2. Habilitar permisos del workflow**
`Settings → Actions → General → Workflow permissions → Read and write permissions → Save`

**3. Hacer push inicial**
```bash
git add .
git commit -m "feat: initial deploy"
git push
```

El sitio estará disponible en `https://TU_USUARIO.github.io/NOMBRE_REPO` en 1–2 minutos. La landing page (`index.html`) es el punto de entrada.

**Ejecutar el workflow manualmente**
`tu-repo → Actions → Update current season data → Run workflow`

---

## Referencia de abreviaturas NBA

| Conferencia Este | | Conferencia Oeste | |
|---|---|---|---|
| Atlanta Hawks | ATL | Dallas Mavericks | DAL |
| Boston Celtics | BOS | Denver Nuggets | DEN |
| Brooklyn Nets | BRK | Golden State Warriors | GSW |
| Charlotte Hornets | CHO | Houston Rockets | HOU |
| Chicago Bulls | CHI | Los Angeles Clippers | LAC |
| Cleveland Cavaliers | CLE | Los Angeles Lakers | LAL |
| Detroit Pistons | DET | Memphis Grizzlies | MEM |
| Indiana Pacers | IND | Minnesota Timberwolves | MIN |
| Miami Heat | MIA | New Orleans Pelicans | NOP |
| Milwaukee Bucks | MIL | Oklahoma City Thunder | OKC |
| New York Knicks | NYK | Phoenix Suns | PHX |
| Orlando Magic | ORL | Portland Trail Blazers | POR |
| Philadelphia 76ers | PHI | Sacramento Kings | SAC |
| Toronto Raptors | TOR | San Antonio Spurs | SAS |
| Washington Wizards | WAS | Utah Jazz | UTA |

---

## Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla), Chart.js 4
- **Pipeline histórico:** Python 3, requests, BeautifulSoup4, pandas — [Basketball-Reference](https://www.basketball-reference.com)
- **Pipeline temporada actual:** nba_api — [stats.nba.com](https://stats.nba.com)
- **Automatización:** GitHub Actions
- **Hosting:** GitHub Pages (estático, sin servidor)
