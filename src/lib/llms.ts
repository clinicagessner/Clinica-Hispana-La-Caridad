import {
  SITE_CONFIG,
  CONTACT_INFO,
  SERVICES,
  PROMOTIONS,
  SOCIAL_LINKS,
  GOOGLE_REVIEWS_DATA,
} from "@/lib/constants";
import { SERVICE_FAQS } from "@/lib/service-faqs";
import { getBlogPosts } from "@/lib/blog";
import { getGooglePlaceData } from "@/lib/google-places";

const BASE = SITE_CONFIG.baseUrl;

const CATEGORY_LABELS: Record<string, string> = {
  "medicina-general": "Medicina general",
  "salud-mujer": "Salud de la mujer",
  examenes: "Exámenes médicos",
  laboratorio: "Laboratorio",
  tratamientos: "Tratamientos y procedimientos",
};

/** Toda URL va como enlace Markdown: si no, Lighthouse Agentic Browsing marca
 *  el archivo como "does not contain any links" y los rastreadores de IA no
 *  siguen nada. */
const link = (text: string, url: string) => `[${text}](${url})`;

const clean = (s: string) =>
  s.replace(/\*\*/g, "").replace(/\n{3,}/g, "\n\n").trim();

async function header() {
  const place = await getGooglePlaceData();
  const rating = (place?.rating ?? GOOGLE_REVIEWS_DATA.averageRating).toFixed(1);
  const count = place?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  return `# ${SITE_CONFIG.name} — ${CONTACT_INFO.city}, ${CONTACT_INFO.state}

> Clínica hispana en ${CONTACT_INFO.city}, ${CONTACT_INFO.state}. Atención sin cita 100 % en español, los 7 días de la semana de 9 AM a 9 PM. No hace falta seguro médico. Calificación de ${rating} sobre 5 con ${count} reseñas en Google.

## Sobre la clínica

${SITE_CONFIG.description}

## Ubicación y contacto

- Dirección: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}
- Teléfono: ${CONTACT_INFO.phoneFormatted}
- WhatsApp: ${link("wa.me/" + CONTACT_INFO.whatsapp, "https://wa.me/" + CONTACT_INFO.whatsapp)}
- Correo: ${CONTACT_INFO.email}
- Mapa: ${link("Google Maps", CONTACT_INFO.googleMapsUrl)}
- Coordenadas: ${CONTACT_INFO.coordinates.lat}, ${CONTACT_INFO.coordinates.lng}
- Sitio web: ${link(BASE, BASE)}

## Horario

${CONTACT_INFO.hours}. Se atiende sin cita durante todo el horario.

## Idiomas

Español e inglés. Todo el personal atiende en español.
`;
}

function servicesIndex() {
  const byCategory = new Map<string, typeof SERVICES>();
  for (const s of [...SERVICES].sort((a, b) => a.order - b.order)) {
    const list = byCategory.get(s.category) ?? [];
    list.push(s);
    byCategory.set(s.category, list);
  }

  let out = `\n## Servicios (${SERVICES.length})\n`;
  for (const [category, list] of byCategory) {
    out += `\n### ${CATEGORY_LABELS[category] ?? category}\n\n`;
    for (const s of list) {
      out += `- ${link(s.title, `${BASE}/services/${s.slug}`)} — ${s.description}\n`;
    }
  }
  return out;
}

function promotions() {
  if (!PROMOTIONS.length) return "";
  let out = `\n## Promociones vigentes\n\n`;
  for (const p of PROMOTIONS) {
    out += `- ${link(p.title, `${BASE}/promociones`)} — ${p.price}. ${p.blurb}\n`;
  }
  return out;
}

function posts() {
  const es = getBlogPosts("es");
  if (!es.length) return "";
  let out = `\n## Guías y artículos (${es.length})\n\n`;
  for (const p of es) {
    out += `- ${link(p.title, `${BASE}/blog/${p.slug}`)} — ${p.description}\n`;
  }
  return out;
}

function pages() {
  return `\n## Páginas principales

- ${link("Inicio", BASE)}
- ${link("Todos los servicios", `${BASE}/services`)}
- ${link("Promociones", `${BASE}/promociones`)}
- ${link("Atención sin cita", `${BASE}/walk-in`)}
- ${link("Opiniones de pacientes", `${BASE}/opiniones`)}
- ${link("Blog", `${BASE}/blog`)}
- ${link("Versión en inglés", `${BASE}/en`)}

## Redes sociales

${socialLines()}`;
}

function socialLines() {
  const entries: Array<[string, string | undefined]> = [
    ["Facebook", SOCIAL_LINKS.facebook],
    ["Instagram", SOCIAL_LINKS.instagram],
    ["Twitter/X", SOCIAL_LINKS.twitter],
  ];
  return entries
    .filter((e): e is [string, string] => Boolean(e[1]))
    .map(([name, url]) => `- ${link(name, url)}`)
    .join("\n") + "\n";
}

export async function buildLlmsTxt() {
  return [await header(), servicesIndex(), promotions(), posts(), pages()].join("");
}

export async function buildLlmsFullTxt() {
  let out = [await header(), servicesIndex(), promotions(), posts(), pages()].join("");

  out += `\n\n---\n\n## Detalle de cada servicio\n`;
  for (const s of [...SERVICES].sort((a, b) => a.order - b.order)) {
    const url = `${BASE}/services/${s.slug}`;
    out += `\n### ${s.title}\n\n`;
    out += `${link(url, url)}\n\n`;
    if (s.titleEn) out += `English: ${s.titleEn}\n\n`;
    out += `${clean(s.longDescription)}\n\n`;
    if (s.features?.length) {
      out += `Incluye:\n`;
      for (const f of s.features) out += `- ${f}\n`;
      out += `\n`;
    }
    const faqs = SERVICE_FAQS[s.slug]?.faqs ?? s.faqs ?? [];
    for (const f of faqs) {
      out += `**${f.question}**\n${f.answer}\n\n`;
    }
  }

  out += `\n---\n\n## Services in English\n`;
  for (const s of [...SERVICES].sort((a, b) => a.order - b.order)) {
    const url = `${BASE}/en/services/${s.slug}`;
    out += `\n### ${s.titleEn ?? s.title}\n\n${link(url, url)}\n\n`;
    out += `${clean(s.longDescriptionEn ?? s.longDescription)}\n\n`;
    const faqs = SERVICE_FAQS[s.slug]?.faqsEn ?? s.faqsEn ?? [];
    for (const f of faqs) out += `**${f.question}**\n${f.answer}\n\n`;
  }

  return out;
}
