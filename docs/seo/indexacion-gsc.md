# Indexación en Google Search Console — Clínica Hispana La Caridad

**Este archivo es la fuente de verdad del progreso.** Al pedir una tanda, marcar sus casillas y poner `✅ PEDIDA dd/mm/aaaa` en el encabezado de la tanda, y añadir su fila al historial.

Propiedad: **prefijo de URL** `https://www.chlacaridad.com/`, en la cuenta **clinicalacaridad2016@gmail.com** (siteOwner).
La misma cuenta ve además un dominio antiguo sin verificar, `sc-domain:clinicalacaridadhouston.com` — **no es esta propiedad, no pedir ahí.**

`https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fwww.chlacaridad.com%2F`

Proceso: **Inspección de URLs** → pegar la URL completa → **Solicitar indexación**. Cuota ~10 URLs/día por propiedad.

## Cómo retomar

1. Abrir el informe **Indexación → Páginas** y mirar la lista de indexadas.
2. Tachar de este archivo cualquier URL que ya se haya indexado sola — pedir una que ya está indexada gasta una de las 10 del día.
3. Seguir por la primera tanda sin marcar.

Para refrescar los datos: `node scripts/gsc-fetch.mjs la-caridad "https://www.chlacaridad.com/" 90`

## Estado de partida (18/09/2026)

Datos de GSC al 15/09/2026 (crudos en `seo-data/2026-09-15/`):

- **14 indexadas** / **84 no indexadas**, de 98 totales.
- Motivos: *Descubierta: actualmente sin indexar* **54** · *Rastreada: actualmente sin indexar* **19** · desconocidas **11**. **65 nunca rastreadas.**
- Sitemap enviado el 28/08/2026, rastreado el 15/09/2026.

> Las 14 ya indexadas **no quedaron enumeradas** en su momento. Antes de la tanda 5 conviene bajar el informe de Páginas y listarlas aquí, para no gastar peticiones en ellas.

## Orden de las tandas

No es por impresiones de página sino **por demanda medida en las consultas**: una página sin indexar tiene 0 impresiones aunque su consulta tenga cientos. Por eso `/opiniones` abre la lista pese a no tener un solo clic.

## Historial de solicitudes

| Fecha | URLs | Notas |
|---|---|---|
| 2026-09-18 | 10 | Tanda 1. Mismo día que se reenvió el sitemap en Bing |
| 2026-09-19 | 10 | Tanda 2. Confirmada por el usuario el 20-sep |

| 2026-09-25 | 10 | Tanda 4 |
## Tanda 1 — 18 de septiembre de 2026  ✅ PEDIDA 18/09/2026

- [x] https://www.chlacaridad.com/opiniones
- [x] https://www.chlacaridad.com/en/opiniones
- [x] https://www.chlacaridad.com/services/ginecologia
- [x] https://www.chlacaridad.com/en/services/ginecologia
- [x] https://www.chlacaridad.com/services/examenes-sangre
- [x] https://www.chlacaridad.com/en/services/examenes-sangre
- [x] https://www.chlacaridad.com/services/examenes-inmigracion
- [x] https://www.chlacaridad.com/services/examen-dot
- [x] https://www.chlacaridad.com/services/ultrasonido
- [x] https://www.chlacaridad.com/en/promociones

## Tanda 2 — 19 de septiembre de 2026  ✅ PEDIDA 19/09/2026

- [x] https://www.chlacaridad.com/blog/examen-papanicolau-cerca-de-mi-houston
- [x] https://www.chlacaridad.com/services/infecciones-urinarias
- [x] https://www.chlacaridad.com/services/anticonceptivos
- [x] https://www.chlacaridad.com/services/prueba-embarazo
- [x] https://www.chlacaridad.com/en/services/examenes-inmigracion
- [x] https://www.chlacaridad.com/en/services/examen-dot
- [x] https://www.chlacaridad.com/en/services/condiciones-cronicas
- [x] https://www.chlacaridad.com/services/vacunas
- [x] https://www.chlacaridad.com/en/services/ultrasonido
- [x] https://www.chlacaridad.com/blog/urologo-houston-habla-espanol-salud-hombre

## Tanda 3  ✅ PEDIDA 23/09/2026

- [x] https://www.chlacaridad.com/en/blog/ginecologos-hispanos-houston-hablan-espanol
- [x] https://www.chlacaridad.com/blog/medicos-autorizados-uscis-houston-civil-surgeon
- [x] https://www.chlacaridad.com/blog/examen-dot-cdl-camioneros-houston
- [x] https://www.chlacaridad.com/blog/guia-examen-medico-inmigracion-i693-houston
- [x] https://www.chlacaridad.com/blog/laboratorio-clinico-houston-analisis-sangre
- [x] https://www.chlacaridad.com/services/tiroides
- [x] https://www.chlacaridad.com/services/alergias
- [x] https://www.chlacaridad.com/services/enfermedades-respiratorias
- [x] https://www.chlacaridad.com/services/enfermedades-transmision-sexual
- [x] https://www.chlacaridad.com/en/services

## Tanda 4  ✅ PEDIDA 25/09/2026

- [x] https://www.chlacaridad.com/en/blog
- [x] https://www.chlacaridad.com/services/extraccion-implantes
- [x] https://www.chlacaridad.com/en/services/extraccion-implantes
- [x] https://www.chlacaridad.com/en/services/tiroides
- [x] https://www.chlacaridad.com/en/services/alergias
- [x] https://www.chlacaridad.com/en/services/enfermedades-respiratorias
- [x] https://www.chlacaridad.com/services/examen-fisico-escolar
- [x] https://www.chlacaridad.com/en/services/examen-fisico-escolar
- [x] https://www.chlacaridad.com/en/services/prueba-embarazo
- [x] https://www.chlacaridad.com/en/services/anticonceptivos

## Tanda 5

- [ ] https://www.chlacaridad.com/en/services/infecciones-urinarias
- [ ] https://www.chlacaridad.com/services/examen-heces
- [ ] https://www.chlacaridad.com/en/services/examen-heces
- [ ] https://www.chlacaridad.com/services/prueba-strep
- [ ] https://www.chlacaridad.com/en/services/prueba-strep
- [ ] https://www.chlacaridad.com/services/prueba-tuberculosis
- [ ] https://www.chlacaridad.com/en/services/prueba-tuberculosis
- [ ] https://www.chlacaridad.com/en/services/enfermedades-transmision-sexual

## Tanda 6

- [ ] https://www.chlacaridad.com/services/examen-alcohol-drogas
- [ ] https://www.chlacaridad.com/en/services/examen-alcohol-drogas
- [ ] https://www.chlacaridad.com/services/electrocardiograma
- [ ] https://www.chlacaridad.com/en/services/electrocardiograma
- [ ] https://www.chlacaridad.com/en/services/vacunas
- [ ] https://www.chlacaridad.com/services/sueros-vitaminados
- [ ] https://www.chlacaridad.com/en/services/sueros-vitaminados
- [ ] https://www.chlacaridad.com/services/suturas-heridas
- [ ] https://www.chlacaridad.com/en/services/suturas-heridas
- [ ] https://www.chlacaridad.com/services/curacion-heridas

## Tanda 7

- [ ] https://www.chlacaridad.com/en/services/curacion-heridas
- [ ] https://www.chlacaridad.com/services/cirugias-menores
- [ ] https://www.chlacaridad.com/en/services/cirugias-menores
- [ ] https://www.chlacaridad.com/services/drenaje-abscesos
- [ ] https://www.chlacaridad.com/en/services/drenaje-abscesos
- [ ] https://www.chlacaridad.com/services/unas-encarnadas
- [ ] https://www.chlacaridad.com/en/services/unas-encarnadas
- [ ] https://www.chlacaridad.com/services/farmacia
- [ ] https://www.chlacaridad.com/en/services/farmacia
- [ ] https://www.chlacaridad.com/en/blog/examen-papanicolau-cerca-de-mi-houston

## Tanda 8

- [ ] https://www.chlacaridad.com/blog/chequeo-preventivo-hombres-houston
- [ ] https://www.chlacaridad.com/en/blog/chequeo-preventivo-hombres-houston
- [ ] https://www.chlacaridad.com/en/blog/urologo-houston-habla-espanol-salud-hombre
- [ ] https://www.chlacaridad.com/en/blog/medicos-autorizados-uscis-houston-civil-surgeon
- [ ] https://www.chlacaridad.com/en/blog/examen-dot-cdl-camioneros-houston
- [ ] https://www.chlacaridad.com/en/blog/laboratorio-clinico-houston-analisis-sangre
- [ ] https://www.chlacaridad.com/en/blog/salud-mujer-houston-servicios-ginecologia
- [ ] https://www.chlacaridad.com/blog/control-diabetes-houston-guia-pacientes
- [ ] https://www.chlacaridad.com/en/blog/control-diabetes-houston-guia-pacientes
- [ ] https://www.chlacaridad.com/en/blog/guia-examen-medico-inmigracion-i693-houston

## Tanda 9 (solo 6; incluye /privacy, que vale poco)

- [ ] https://www.chlacaridad.com/blog/atencion-medica-sin-seguro-houston
- [ ] https://www.chlacaridad.com/en/blog/atencion-medica-sin-seguro-houston
- [ ] https://www.chlacaridad.com/blog/bienvenidos-clinica-hispana-la-caridad
- [ ] https://www.chlacaridad.com/en/blog/bienvenidos-clinica-hispana-la-caridad
- [ ] https://www.chlacaridad.com/privacy
- [ ] https://www.chlacaridad.com/en/privacy
