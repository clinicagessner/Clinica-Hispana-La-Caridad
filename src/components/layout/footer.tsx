import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { House } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/routing";
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SERVICES,
} from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

// Redes que se van sumando: un icono por red, visible en el pie (regla de red: toda red enlazada se ve en la web).
const BRAND_PATHS = {
  x: "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z",
  tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  pinterest: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
  nextdoor: "", // se pinta con House de Phosphor, igual que en las demás webs
  yelp: "m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041zm2.86 3.742a.8523.8523 0 0 1-.111.4236c-.074.132-.178.2377-.3115.3172a.8428.8428 0 0 1-.4385.119.847.847 0 0 1-.4373-.1179.8526.8526 0 0 1-.3125-.3171.8548.8548 0 0 1-.111-.4248c0-.1526.038-.2958.1143-.4294a.8405.8405 0 0 1 .315-.3159.849.849 0 0 1 .4315-.1156.8514.8514 0 0 1 .4294.1144.84.84 0 0 1 .316.3148.8494.8494 0 0 1 .1156.4317zm-.1202 0c0-.1328-.0332-.256-.0996-.3698s-.1564-.2038-.2702-.2702a.7125.7125 0 0 0-.371-.1007.7204.7204 0 0 0-.3698.0996.7487.7487 0 0 0-.2713.2702.7181.7181 0 0 0-.0996.3709c0 .132.0332.2557.0996.371a.7355.7355 0 0 0 .2713.2713.7354.7354 0 0 0 .3698.0985.7205.7205 0 0 0 .3698-.0996.7423.7423 0 0 0 .2702-.2691.7186.7186 0 0 0 .1008-.3721zm-.577.0584.2724.4522h-.1922l-.237-.4052h-.1546v.4052h-.1695v-1.02h.2988c.1268 0 .2195.0247.2783.0744.0595.0496.0892.1252.0892.2267a.2785.2785 0 0 1-.0492.1625c-.032.0466-.0775.0813-.1362.1042zm-.0412-.1408a.1532.1532 0 0 0 .056-.1214c0-.0573-.0164-.0981-.0491-.1225-.0329-.0251-.0847-.0377-.1557-.0377h-.1214v.3285h.1237c.061 0 .1098-.0157.1465-.047z",
} as const;
const BRAND_LABELS: Record<keyof typeof BRAND_PATHS, string> = { x: "X", tiktok: "TikTok", linkedin: "LinkedIn", pinterest: "Pinterest", nextdoor: "Nextdoor", yelp: "Yelp" };

const BrandIcon = ({ path, className }: { path: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d={path} />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Servicios con mayor demanda de búsqueda (GSC), no los primeros por `order`:
// el footer es el único enlace sitewide hacia estas páginas y Google prioriza
// el rastreo/indexación según los enlaces internos que reciben.
const FOOTER_SERVICE_SLUGS = [
  "ginecologia",
  "salud-hombre",
  "examenes-sangre",
  "enfermedades-transmision-sexual",
  "examenes-inmigracion",
  "examen-dot",
];

// Orden de las categorías en la banda inferior del footer.
const FOOTER_CATEGORIES = [
  "medicina-general",
  "salud-mujer",
  "examenes",
  "laboratorio",
  "tratamientos",
] as const;

export async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();
  const currentYear = new Date().getFullYear();

  const topServices = FOOTER_SERVICE_SLUGS.flatMap((slug) => {
    const service = SERVICES.find((s) => s.slug === slug);
    return service ? [getLocalizedService(service, locale)] : [];
  });

  // Los 29 servicios agrupados por categoría. El footer es el único enlace
  // sitewide hacia estas páginas y Google rastrea según los enlaces internos
  // que reciben: antes solo 6 de 29 lo tenían.
  const servicesByCategory = FOOTER_CATEGORIES.map((category) => ({
    category,
    label: t(`services.categories.${category}`),
    items: SERVICES.filter((s) => s.category === category)
      .sort((a, b) => a.order - b.order)
      .map((s) => getLocalizedService(s, locale)),
  })).filter((g) => g.items.length > 0);

  return (
    <footer role="contentinfo" className="relative overflow-hidden bg-blue-dark text-white">
      {/* Top accent band */}
      <div className="h-1 w-full bg-yellow-accent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4" aria-label={SITE_CONFIG.name}>
              <Image
                src="/images/logo.webp"
                alt={`Logo de ${SITE_CONFIG.name}`}
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Clínica Hispana La Caridad"
                  className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="size-4" />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Clínica Hispana La Caridad"
                  className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="size-4" />
                </a>
              )}
              {SOCIAL_LINKS.youtube && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube de Clínica Hispana La Caridad"
                  className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="size-4" />
                </a>
              )}
              {(Object.keys(BRAND_PATHS) as Array<keyof typeof BRAND_PATHS>).map((red) => {
                const href = SOCIAL_LINKS[red];
                if (!href) return null;
                return (
                  <a
                    key={red}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${BRAND_LABELS[red]} de Clínica Hispana La Caridad`}
                    className="size-9 rounded-lg bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                  >
                    {red === "nextdoor" ? (
                      <House className="size-4" weight="fill" aria-hidden="true" />
                    ) : (
                      <BrandIcon path={BRAND_PATHS[red]} className="size-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation — 2 cols */}
          <nav aria-label="Navegación" className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/promociones" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.promotions")}
                </Link>
              </li>
              <li>
                <a href="/#chronic-care" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.chronicCare")}
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/walk-in" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.walkIn")}
                </Link>
              </li>
              <li>
                <Link href="/opiniones" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.reviews")}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Services — 3 cols */}
          <nav aria-label="Servicios" className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              {t("nav.services")}
            </h3>
            <ul className="space-y-2.5">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {service.shortTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <MapPin className="size-4 shrink-0 mt-0.5 text-yellow-accent" aria-hidden="true" />
                  <span>
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors break-all"
                >
                  <Mail className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <Clock className="size-4 shrink-0 mt-0.5 text-yellow-accent" aria-hidden="true" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Todos los servicios — un enlace sitewide por página de servicio */}
        <nav aria-label={t("services.allServices")} className="border-t border-white/10 mt-12 pt-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-accent mb-5">
            {t("services.allServices")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-7">
            {servicesByCategory.map((group) => (
              <div key={group.category}>
                <p className="text-white text-xs font-semibold mb-2.5">{group.label}</p>
                <ul className="space-y-2">
                  {group.items.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-white/70 hover:text-white text-xs leading-snug transition-colors"
                      >
                        {service.shortTitle || service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/70 text-xs text-center md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/70 text-xs text-center md:text-right">
            Sitio web creado por{" "}
            <a
              href="https://rcweb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-accent hover:text-white transition-colors font-medium"
            >
              RC Web Solutions LLC
            </a>
          </p>
        </div>

        {/* Medical disclaimer */}
        <p className="text-white/70 text-[10px] text-center mt-6 max-w-3xl mx-auto leading-relaxed">
          La información proporcionada en este sitio web es solo con fines informativos y no sustituye el consejo médico profesional. Consulte a un profesional de la salud para diagnóstico y tratamiento.
        </p>
      </div>
    </footer>
  );
}
