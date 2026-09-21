# Línea base IA (A1) — Clínica Hispana La Caridad

**Este archivo es la fuente de verdad de la medición.** La batería de Mangum se entregó solo en
consola el 17-sep y se perdió; por eso esta vive en git. Al medir, se rellenan las tablas **en este
archivo**, no en el chat.

Qué mide: si los buscadores generativos mencionan la clínica cuando alguien pregunta lo que
pregunta un paciente real. **No existe analítica de citas** — ninguna plataforma da impresiones
como Search Console. Esto es una medición manual, reproducible, comparable contra sí misma.

Datos de la clínica: `5705 Fondren Rd STE 101, Houston, TX 77036` · (832) 925-8135 ·
`chlacaridad.com` · Sharpstown, Gulfton, Bellaire, Alief, Westwood, Meyerland, Stafford,
Mission Bend · 7 días 9-21, sin cita, sin seguro.

## Protocolo

Igual en cada ronda, o los resultados no se pueden comparar:

1. **Sin sesión** (ventana de incógnito, sin cuenta). Una sesión con historial contamina la respuesta.
2. Anotar **fecha y superficie**. La ubicación del navegador influye: dejar constancia de cuál es.
3. Superficies, en este orden: **Modo IA de Google** · **Perplexity** · **ChatGPT** ·
   (opcional) Gemini y Copilot.
4. Por cada pregunta anotar cuatro cosas:
   - **¿Sale?** sí / no
   - **Posición** entre las clínicas mencionadas
   - **¿Con marca?** si la nombra "Clínica Hispana La Caridad" o solo como "otra opción cercana".
     Mangum salía 3.º en Perplexity como *"Clínica Hispana (otra opción)"* — eso cuenta como **no**.
   - **Competidores** que sí salen, sobre todo **hermanos de la red** (Cruz, Cruz 2/3/4, 529,
     Airline, Nueva Salud, Lawndale, Mangum, Pasadena, Corazón y Vida).

Limitación conocida de Mangum: **ChatGPT sin sesión se congeló** al automatizarlo, y Gemini y
Copilot no se midieron. Si vuelve a pasar, se hace a mano y se anota que fue manual.

## Por qué estas preguntas

No son inventadas: salen de la **demanda medida en GSC** (90 días al 15-sep, `seo-data/2026-09-15/`).
La ginecología es el activo real del sitio (`/blog/ginecologos-hispanos-...`, 1.303 impresiones y
42 de los 122 clics), y I-693, DOT y exámenes de sangre son los servicios con consulta propia.

## Batería

Las **⭐** son el subconjunto mínimo si no hay tiempo para las 16 — Mangum midió 5.

### Español

| # | Pregunta |
|---|---|
| 1 ⭐ | clínica hispana sin cita cerca de 77036 |
| 2 ⭐ | clínica que hable español en Sharpstown Houston sin seguro |
| 3 ⭐ | médico autorizado por USCIS para el examen I-693 en Houston que hable español |
| 4 ⭐ | dónde hacer análisis de sangre sin cita en español en Houston |
| 5 | examen médico DOT para licencia CDL en Houston en español |
| 6 | clínica para papanicolaou cerca de mí en Houston sin seguro |
| 7 | consulta ginecológica sin cita en Houston que hable español |
| 8 | dónde hacen ultrasonido sin cita en Houston |
| 9 | clínica en Fondren Rd Houston abierta domingo |
| 10 | clínica abierta hasta las 9 de la noche en Houston que hable español |
| 11 | control de diabetes e hipertensión sin seguro en Houston |
| 12 | examen físico escolar para niños en Houston en español |

### Inglés

| # | Pregunta |
|---|---|
| 13 ⭐ | walk-in Spanish-speaking clinic near 77036 Houston |
| 14 | immigration medical exam I-693 civil surgeon Houston Spanish |
| 15 | DOT physical exam Houston walk-in no appointment |
| 16 | blood work without insurance Houston clinic open Sunday |

## Controles negativos

Estas **no** se quieren ganar. Se miden porque una atribución falsa es un pasivo, no un logro.
El cliente confirmó que **no hay urólogos ni ginecólogos titulados**, y que **no se sabe si hay
licencia de farmacia**. Si un modelo afirma lo contrario, hay que corregir la fuente que se lo dijo.

| # | Pregunta | Respuesta que sería un problema |
|---|---|---|
| N1 | urólogo que hable español en Houston | Que nombre a La Caridad como si tuviera urólogo |
| N2 | ginecólogo en Houston que acepte pacientes sin seguro | Que la presente como consulta con ginecólogo titulado |
| N3 | farmacia que surta recetas en Houston suroeste | Que diga que surte recetas externas |

## Rondas

### Ronda 1 — línea base (sin medir)

Antes del 1-oct-2026, para que sea línea base y no medición posterior. Estado del sitio en esta
ronda: B0, B1, B2, B3 y B4 cerrados; 96 textos propios (solapamiento con la red 78,8 % → 1,0 %);
20 de 84 URLs pedidas a indexación; **14 de 98 indexadas**.

> El bajo número de páginas indexadas limita lo que puede salir: un modelo no cita lo que no está
> en el índice. Si la ronda 1 sale pobre, la lectura no es "el GEO no funciona" sino "aún no hay
> superficie indexada que citar". Por eso la ronda 2 va después de las 9 tandas.

| # | Superficie | ¿Sale? | Posición | ¿Con marca? | Competidores |
|---|---|---|---|---|---|
| | | | | | |

### Ronda 2 — tras cerrar la indexación

Cuando las 9 tandas estén pedidas y el informe de Páginas suba de 14. Comparar contra la ronda 1.

## La hipótesis que hay que confirmar

En Mangum, **Perplexity no reconoció la marca y prefirió los dominios hermanos de la red.**
La Caridad venía del mismo grupo de plantilla (Cruz / Cruz 3 / Cruz 4) al **78,8 %** de duplicado y
B3 lo bajó a **1,0 %**. Si en la ronda 1 Perplexity sigue prefiriendo a los hermanos, el texto
propio no basta para desambiguar la entidad y el problema es de marca, no de contenido.
