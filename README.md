# 🏀 NBA Team Dashboard

Dashboard interactivo de rendimiento NBA por equipo y temporada. Construido con HTML, CSS, Chart.js y Python para el scraping de datos desde Basketball-Reference.

**Demo en vivo →** `https://czamoraz.github.io/nba-dashboard`

---

## ¿Qué incluye?

- Landing page con los 30 equipos de la NBA organizados por conferencia y división
- Dashboard por equipo con gráfico de resultados partido a partido, líderes estadísticos, win % histórico y disponibilidad de jugadores
- Soporte para múltiples equipos y temporadas
- Tema oscuro / claro

---

## Estructura del proyecto

```
nba-dashboard/
├── landing.html          # Selector de equipos (punto de entrada)
├── index.html            # Dashboard (carga datos según ?team=)
├── css/
│   ├── base.css
│   ├── theme.css
│   ├── layout.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── charts.js
│   ├── render.js
│   ├── events.js
│   └── data/
│       ├── ATL.js        # Datos generados por setup_team.py
│       ├── GSW.js        # Se agrega un archivo por equipo
│       └── ...
├── setup_team.py         # ⭐ Script principal: scraping + generación
├── scraper.py            # Scraper de Basketball-Reference
├── csv_to_data_js.py     # Convierte CSVs → js/data/{TEAM}.js
├── .gitignore
└── README.md
```

---

## Cómo agregar un equipo

### Requisitos

```bash
pip install requests beautifulsoup4 pandas lxml
```

### Paso a paso

**1. Corre `setup_team.py` con la abreviatura del equipo**

```bash
python setup_team.py --team ATL
```

Esto hace dos cosas automáticamente:
- Descarga los datos de Basketball-Reference (partidos, líderes, disponibilidad)
- Genera el archivo `js/data/ATL.js` listo para el dashboard

El proceso tarda entre **5 y 15 minutos** por equipo debido a los delays necesarios para no ser bloqueado por Basketball-Reference. Es normal.

**2. (Opcional) Especifica las temporadas**

Por defecto descarga las temporadas 2020-21 a 2024-25. Puedes elegir cuáles:

```bash
python setup_team.py --team GSW --seasons 2023 2024 2025
```

**3. (Opcional) Agrega la posición en conferencia**

La posición final en conferencia no está disponible directamente en el scraper. Puedes pasarla manualmente:

```bash
python setup_team.py --team ATL --ranks 2020-21:5 2021-22:8 2022-23:7 2023-24:11 2024-25:6
```

Si no la pasas, quedará en 0 y puedes editarla después directamente en `js/data/ATL.js`.

**4. (Opcional) Sube el delay si te bloquean**

Basketball-Reference a veces bloquea requests. Si ves errores HTTP 429 o de conexión, sube el delay:

```bash
python setup_team.py --team LAL --delay 8
```

**5. Commitea el archivo generado**

```bash
git add js/data/ATL.js
git commit -m "feat: add ATL dashboard data"
git push
```

El dashboard estará disponible en `landing.html → Atlanta Hawks`.

---

## Flags de setup_team.py

| Flag | Descripción | Default |
|---|---|---|
| `--team` | Abreviatura del equipo (obligatorio) | — |
| `--seasons` | Años en que termina cada temporada | 2021 2022 2023 2024 2025 |
| `--ranks` | Posición en conferencia por temporada (ej: `2020-21:5`) | — |
| `--delay` | Segundos entre requests (subir a 8+ si hay bloqueos) | 4 |
| `--skip-scrape` | Solo regenera el JS sin volver a scrapear | false |

---

## Referencia de abreviaturas NBA

| Conferencia Este | | Conferencia Oeste | |
|---|---|---|---|
| Atlanta Hawks | ATL | Dallas Mavericks | DAL |
| Boston Celtics | BOS | Denver Nuggets | DEN |
| Brooklyn Nets | BKN | Golden State Warriors | GSW |
| Charlotte Hornets | CHA | Houston Rockets | HOU |
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

## Despliegue en GitHub Pages

1. Sube el proyecto a un repositorio público en GitHub
2. Ve a **Settings → Pages**
3. En *Branch*, selecciona `main` y haz clic en **Save**
4. En 1-2 minutos el sitio estará en `https://TU_USUARIO.github.io/NOMBRE_REPO`

> Los archivos `js/data/*.js` **deben estar commiteados** para que el dashboard funcione online. Los CSVs intermedios son locales y están en el `.gitignore`.

---

## Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla), Chart.js 4
- **Scraping:** Python 3, requests, BeautifulSoup4, pandas
- **Fuente de datos:** [Basketball-Reference](https://www.basketball-reference.com)
- **Hosting:** GitHub Pages (estático, sin servidor)
