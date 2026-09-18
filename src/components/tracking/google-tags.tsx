import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/**
 * Un único gtag.js para GA4 y Google Ads, cargado tras `load`.
 * Antes se cargaban dos: @next/third-parties (con preload de alta prioridad,
 * que entraba en el camino del LCP) y el tag de Ads por su cuenta.
 */
export function GoogleTags() {
  const primary = GA_ID ?? ADS_ID;
  if (!primary) return null;

  const configs = [GA_ID, ADS_ID]
    .filter(Boolean)
    .map((id) => `gtag('config', '${id}');`)
    .join("\n          ");

  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${primary}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configs}
        `}
      </Script>
    </>
  );
}
