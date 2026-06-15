import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Slugs de servicios retirados en el swap al catálogo de 29 servicios (familia).
// Cada uno se redirige (301) a su equivalente más cercano para preservar el
// link-equity y evitar 404 en URLs ya indexadas o enlazadas externamente.
const RETIRED_SERVICE_SLUGS: Record<string, string> = {
  urologia: "salud-hombre",
  "planificacion-familiar": "anticonceptivos",
  "infecciones-vaginales": "ginecologia",
  "vacunas-anticonceptivas": "anticonceptivos",
  laboratorio: "examenes-sangre",
  // Sin equivalente exacto -> hub de medicina general (condiciones crónicas)
  "examenes-generales": "condiciones-cronicas",
  "medicina-familiar": "condiciones-cronicas",
  "dolores-musculares": "condiciones-cronicas",
};

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "@phosphor-icons/react",
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
    ],
  },
  async redirects() {
    // localePrefix: "as-needed" -> ES sin prefijo (/services/...),
    // EN con prefijo (/en/services/...). Cubrimos ambos.
    return Object.entries(RETIRED_SERVICE_SLUGS).flatMap(([from, to]) => [
      {
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      },
      {
        source: `/en/services/${from}`,
        destination: `/en/services/${to}`,
        permanent: true,
      },
    ]);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.callrail.com https://js.callrail.com https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net https://www.facebook.com https://*.facebook.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://lh3.googleusercontent.com https://maps.googleapis.com https://maps.gstatic.com https://maps.google.com https://www.google.com https://www.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com",
              "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-analytics.com https://cdn.callrail.com https://js.callrail.com https://api.callrail.com https://maps.googleapis.com https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com https://connect.facebook.net https://api.facebook.com https://graph.facebook.com https://*.facebook.com",
              "frame-src 'self' https://www.google.com https://maps.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
