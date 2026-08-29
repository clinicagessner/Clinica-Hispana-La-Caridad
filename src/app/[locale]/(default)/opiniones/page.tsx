import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Star, GoogleLogo, Phone, MapPin, ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { SITE_CONFIG, CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { JsonLdBreadcrumb } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

// Landing de una sola página (mismo patrón que /walk-in): copy inline en vez de messages/*.json.
const COPY = {
  es: {
    title: "Opiniones de Clínica La Caridad Houston | Reseñas Google",
    description:
      "Lee las opiniones reales de pacientes de Clínica Hispana La Caridad en Houston, TX. Reseñas verificadas de Google sobre la atención en español, precios y tiempos de espera.",
    h1: "Opiniones de Clínica Hispana La Caridad en Houston",
    subtitle:
      "Lo que dicen nuestros pacientes en Google. Reseñas reales y verificadas, actualizadas automáticamente desde Google Maps.",
    ratingLabel: "calificación en Google",
    reviewsLabel: "reseñas de pacientes",
    latestHeading: "Reseñas recientes de pacientes",
    latestIntro:
      "Estas son las reseñas más relevantes publicadas por pacientes reales en el perfil de Google de la clínica. Se actualizan cada semana.",
    emptyReviews:
      "En este momento no podemos mostrar las reseñas aquí. Puedes leerlas todas directamente en Google Maps.",
    readAllCta: "Ver todas las reseñas en Google",
    leaveCta: "Dejar una reseña",
    whyHeading: "Lo que más valoran nuestros pacientes",
    whyItems: [
      {
        title: "Atención 100% en español",
        text: "Médicos, enfermeras y recepción que hablan tu idioma. Explicamos cada diagnóstico y tratamiento con claridad.",
      },
      {
        title: "Sin cita y abiertos todos los días",
        text: "Llega cuando puedas: lunes a domingo de 9 AM a 9 PM, sin cita previa y con tiempos de espera cortos.",
      },
      {
        title: "Precios accesibles sin seguro",
        text: "No necesitas seguro médico. Te decimos el costo antes de la consulta, sin sorpresas.",
      },
      {
        title: "Laboratorio y farmacia en el mismo lugar",
        text: "Análisis de sangre con resultados rápidos y medicamentos disponibles en la clínica.",
      },
    ],
    aboutHeading: "Sobre Clínica Hispana La Caridad",
    aboutText:
      "Somos una clínica médica hispana en Fondren Rd, en la zona de Sharpstown al suroeste de Houston, TX. Atendemos medicina general, ginecología, salud del hombre, laboratorio, exámenes de inmigración y más, con atención profesional en español para toda la familia. Esta página reúne las opiniones de nuestros pacientes para que conozcas la experiencia real antes de tu visita.",
    servicesCta: "Ver todos los servicios",
    walkInCta: "Cómo funciona la visita sin cita",
    finalCta: "¿Listo para tu visita?",
    finalCtaText: "Ven sin cita hoy mismo o llámanos. Atención en español, precios accesibles y sin necesidad de seguro.",
    callCta: "Llamar ahora",
    locationCta: "Cómo llegar",
    breadcrumbs: [
      { name: "Inicio", path: "" },
      { name: "Opiniones", path: "/opiniones" },
    ],
  },
  en: {
    title: "Clinica La Caridad Houston Reviews | Patient Opinions",
    description:
      "Read real patient reviews of Clínica Hispana La Caridad in Houston, TX. Verified Google reviews about Spanish-speaking care, pricing and wait times.",
    h1: "Clínica Hispana La Caridad Reviews — Houston, TX",
    subtitle:
      "What our patients say on Google. Real, verified reviews, updated automatically from Google Maps.",
    ratingLabel: "Google rating",
    reviewsLabel: "patient reviews",
    latestHeading: "Recent patient reviews",
    latestIntro:
      "These are the most relevant reviews published by real patients on the clinic's Google profile. They refresh every week.",
    emptyReviews:
      "We can't display the reviews here right now. You can read all of them directly on Google Maps.",
    readAllCta: "See all reviews on Google",
    leaveCta: "Leave a review",
    whyHeading: "What our patients value most",
    whyItems: [
      {
        title: "Care 100% in Spanish",
        text: "Doctors, nurses and front desk who speak your language. Every diagnosis and treatment explained clearly.",
      },
      {
        title: "Walk-ins, open every day",
        text: "Come when you can: Monday to Sunday, 9 AM to 9 PM, no appointment and short wait times.",
      },
      {
        title: "Affordable pricing, no insurance needed",
        text: "You don't need health insurance. We tell you the cost before the visit — no surprises.",
      },
      {
        title: "Lab and pharmacy on site",
        text: "Blood work with fast results and medications available at the clinic.",
      },
    ],
    aboutHeading: "About Clínica Hispana La Caridad",
    aboutText:
      "We are a Hispanic medical clinic on Fondren Rd, in the Sharpstown area of southwest Houston, TX. We provide general medicine, gynecology, men's health, lab work, immigration exams and more, with professional Spanish-speaking care for the whole family. This page gathers our patients' opinions so you know the real experience before your visit.",
    servicesCta: "See all services",
    walkInCta: "How a walk-in visit works",
    finalCta: "Ready for your visit?",
    finalCtaText: "Walk in today or give us a call. Spanish-speaking care, affordable pricing, no insurance needed.",
    callCta: "Call now",
    locationCta: "Get directions",
    breadcrumbs: [
      { name: "Home", path: "" },
      { name: "Reviews", path: "/opiniones" },
    ],
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const localePath = locale === "en" ? "/en" : "";
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/opiniones`,
      languages: {
        es: "/opiniones",
        en: "/en/opiniones",
        "x-default": "/opiniones",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE_CONFIG.baseUrl}${localePath}/opiniones`,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const localePath = locale === "en" ? "/en" : "";

  const placeData = await getGooglePlaceData();
  const rating = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const reviews = placeData?.reviews ?? [];

  const breadcrumbs = c.breadcrumbs.map((b) => ({
    name: b.name,
    url: `${SITE_CONFIG.baseUrl}${localePath}${b.path}`,
  }));

  // WebPage que apunta a la MedicalClinic global (#clinic), donde ya viven aggregateRating y review[].
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.baseUrl}${localePath}/opiniones#webpage`,
    url: `${SITE_CONFIG.baseUrl}${localePath}/opiniones`,
    name: c.title,
    description: c.description,
    inLanguage: locale === "en" ? "en-US" : "es-MX",
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    about: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    mainEntity: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-linear-to-br from-blue-900 via-blue-primary to-blue-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-yellow-accent text-blue-primary font-bold text-sm md:text-base rounded-full px-4 py-2 mb-5 shadow-md">
                <GoogleLogo weight="bold" className="size-4" />
                {rating.toFixed(1)} ★ · {totalReviews}+ {c.reviewsLabel}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 [text-shadow:0_2px_8px_rgb(0_0_0/45%)]">
                {c.h1}
              </h1>
              <p className="text-lg md:text-xl text-white mb-7 leading-relaxed font-medium [text-shadow:0_1px_4px_rgb(0_0_0/40%)]">
                {c.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-accent text-blue-primary font-bold text-base md:text-lg rounded-lg px-7 py-3.5 shadow-lg hover:shadow-xl hover:bg-yellow-accent/90 transition-all"
                >
                  <Star weight="fill" className="size-5" />
                  {c.readAllCta}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-primary font-bold text-base md:text-lg rounded-lg px-7 py-3.5 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all"
                >
                  <Phone weight="bold" className="size-5" />
                  {c.callCta} — {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rating summary */}
        <section className="py-12 md:py-16 bg-cyan-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-5xl font-heading font-bold text-blue-primary">{rating.toFixed(1)}</div>
                <div className="flex justify-center gap-0.5 my-2" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      weight="fill"
                      className={i < Math.round(rating) ? "size-5 text-yellow-accent" : "size-5 text-slate-300"}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">{c.ratingLabel}</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-5xl font-heading font-bold text-blue-primary">{totalReviews}+</div>
                <div className="flex justify-center my-2">
                  <GoogleLogo weight="bold" className="size-5 text-blue-primary" />
                </div>
                <div className="text-sm text-muted-foreground">{c.reviewsLabel}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12 md:py-16 bg-linear-to-b from-cyan-warm to-cyan-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-3 text-center">
                {c.latestHeading}
              </h2>
              <p className="text-center text-muted-foreground mb-8">{c.latestIntro}</p>

              {reviews.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {reviews.map((r) => (
                    <article
                      key={`${r.author_name}-${r.time}`}
                      className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          aria-hidden="true"
                          className="size-11 rounded-full bg-blue-primary text-white font-bold flex items-center justify-center shrink-0"
                        >
                          {initials(r.author_name)}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-dark truncate">{r.author_name}</div>
                          <div className="text-xs text-muted-foreground">{r.relative_time_description}</div>
                        </div>
                        <div className="ml-auto flex gap-0.5" aria-label={`${r.rating}/5`}>
                          {[...Array(r.rating)].map((_, i) => (
                            <Star key={i} weight="fill" className="size-4 text-yellow-accent" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-slate-dark/90 leading-relaxed">
                        <Quotes weight="fill" className="size-5 text-cyan-300 inline mr-1 -mt-1" aria-hidden="true" />
                        {r.text}
                      </blockquote>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-center text-slate-dark bg-white border border-slate-200 rounded-xl p-6">
                  {c.emptyReviews}
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-primary text-white font-bold rounded-lg px-6 py-3 shadow-md hover:bg-blue-dark transition-all"
                >
                  <GoogleLogo weight="bold" className="size-5" />
                  {c.readAllCta}
                </a>
                <a
                  href={CONTACT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-primary border-2 border-blue-primary font-bold rounded-lg px-6 py-3 hover:bg-cyan-warm transition-all"
                >
                  <Star weight="fill" className="size-5 text-yellow-accent" />
                  {c.leaveCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why patients choose us */}
        <section className="py-12 md:py-16 bg-cyan-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-8 text-center">
                {c.whyHeading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.whyItems.map((item) => (
                  <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h3 className="font-heading font-bold text-slate-dark mb-2">{item.title}</h3>
                    <p className="text-slate-dark/90 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About + internal links */}
        <section className="py-12 md:py-16 bg-linear-to-b from-cyan-warm to-cyan-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-4">
                {c.aboutHeading}
              </h2>
              <p className="text-slate-dark/90 leading-relaxed mb-6">{c.aboutText}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`${localePath}/services`}
                  className="inline-flex items-center justify-center gap-2 text-blue-primary font-semibold hover:underline"
                >
                  {c.servicesCta} <ArrowRight weight="bold" className="size-4" />
                </Link>
                <Link
                  href={`${localePath}/walk-in`}
                  className="inline-flex items-center justify-center gap-2 text-blue-primary font-semibold hover:underline"
                >
                  {c.walkInCta} <ArrowRight weight="bold" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 md:py-20 bg-linear-to-br from-red-accent to-red-700 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">{c.finalCta}</h2>
            <p className="text-lg text-white/95 mb-7">{c.finalCtaText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-accent text-blue-primary font-bold rounded-lg px-7 py-3.5 shadow-md hover:shadow-lg transition-all text-lg"
              >
                <Phone weight="bold" className="size-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link
                href={`${localePath}/#location`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white font-semibold rounded-lg px-7 py-3.5 hover:bg-white/20 transition-all"
              >
                <MapPin weight="bold" className="size-5" />
                {c.locationCta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JsonLdBreadcrumb items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  );
}
