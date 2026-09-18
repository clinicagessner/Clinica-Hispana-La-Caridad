import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  alternates?: { languages: Record<string, string> };
};

// Fecha de última edición real por página estática. Se actualiza en el mismo
// commit que toca la página; antes todas heredaban una fecha fija de abril.
const PAGE_DATES: Record<string, string> = {
  "": "2026-09-17",
  "/services": "2026-09-17",
  "/promociones": "2026-09-15",
  "/walk-in": "2026-08-20",
  "/opiniones": "2026-09-13",
  "/blog": "2026-09-17",
  "/privacy": "2026-06-06",
};

// Última reescritura del catálogo de servicios. Un servicio con `dateModified`
// propio en constants.ts gana a este valor.
const SERVICES_LAST_MODIFIED = "2026-08-20";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  const entry = (path: string, lastModified: Date): SitemapEntry[] =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${path}`,
      lastModified,
      alternates: createAlternates(path),
    }));

  const staticRoutes = Object.entries(PAGE_DATES).flatMap(([path, date]) =>
    entry(path, new Date(date))
  );

  const serviceRoutes = SERVICES.flatMap((service) =>
    entry(
      `/services/${service.slug}`,
      new Date(service.dateModified ?? SERVICES_LAST_MODIFIED)
    )
  );

  const blogRoutes = getBlogPosts("es").flatMap((post) =>
    entry(`/blog/${post.slug}`, new Date(post.dateModified ?? post.date))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
