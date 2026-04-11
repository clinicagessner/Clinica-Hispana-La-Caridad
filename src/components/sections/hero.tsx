import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, MapPin, Clock, Star, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("hero");

  const features = ["1", "2", "3", "4"] as const;
  const fullTitle = t("title");
  // Highlight the brand words "La Caridad" within the translated title if present.
  const highlightMatch = fullTitle.match(/(.*?)(La Caridad)(.*)/);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-white via-cyan-warm to-cyan-bg pt-28 md:pt-32 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Decorative abstract blurred circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-primary/5 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-yellow-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN — Text content (~55%) */}
          <div className="lg:col-span-7">
            {/* Top badge */}
            <div className="animate-hero-title inline-flex items-center gap-2 bg-blue-primary/10 text-blue-primary rounded-full px-4 py-2 mb-6">
              <Clock className="size-4" aria-hidden="true" />
              <span className="text-sm font-semibold">{t("badge")}</span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="animate-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark leading-tight mb-5"
            >
              {highlightMatch ? (
                <>
                  {highlightMatch[1]}
                  <span className="text-blue-primary">
                    {highlightMatch[2]}
                  </span>
                  {highlightMatch[3]}
                </>
              ) : (
                fullTitle
              )}
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-subtitle text-lg md:text-xl text-slate-primary mb-8 max-w-2xl">
              {t("subtitle")}
            </p>

            {/* Features list */}
            <ul className="animate-hero-features grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
              {features.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-primary/10">
                    <CheckCircle2
                      className="size-4 text-blue-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-slate-dark text-sm md:text-base font-medium">
                    {t(`features.${key}`)}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-red-accent hover:bg-red-accent-dark text-white text-base md:text-lg px-8 py-6 gap-2 shadow-lg shadow-red-accent/30"
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  aria-label={`${t("ctaCall")} — ${CONTACT_INFO.phoneFormatted}`}
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {t("ctaCall")}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white text-base md:text-lg px-8 py-6 gap-2 bg-white"
              >
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("ctaLocation")} — ${CONTACT_INFO.address}, ${CONTACT_INFO.city} ${CONTACT_INFO.state}`}
                >
                  <MapPin className="size-5" aria-hidden="true" />
                  {t("ctaLocation")}
                </a>
              </Button>
            </div>

            {/* Trust row — Google rating */}
            <div className="animate-hero-cta flex items-center gap-3">
              <div
                className="flex items-center gap-0.5"
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-yellow-accent text-yellow-accent"
                  />
                ))}
              </div>
              <span className="sr-only">
                {GOOGLE_REVIEWS_DATA.averageRating} estrellas
              </span>
              <p className="text-sm md:text-base text-slate-primary font-medium">
                <span className="font-bold text-slate-dark">
                  {GOOGLE_REVIEWS_DATA.averageRating}
                </span>{" "}
                · {GOOGLE_REVIEWS_DATA.totalReviews}{" "}
                {t("googleReviews")}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — Visual card (~45%) */}
          <div className="lg:col-span-5">
            <div className="animate-hero-image relative">
              {/* Main card */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6 md:p-8">
                {/* Corner badge */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-accent text-blue-primary text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1.5 shadow-md">
                  Sin cita previa
                </div>

                {/* Card heading */}
                <div className="mb-6 pr-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-2">
                    {t("cardTitle")}
                  </h2>
                  <p className="text-sm md:text-base text-slate-muted">
                    {t("cardSubtitle")}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-cyan-bg">
                  <Image
                    src="/images/hero-clinic.webp"
                    alt="Equipo médico de Clínica Hispana La Caridad atendiendo pacientes en Houston"
                    fill
                    priority
                    fetchPriority="high"
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>

              {/* Mini info card below */}
              <div className="mt-5 bg-blue-primary text-white rounded-2xl shadow-xl p-5 md:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock
                    className="size-5 mt-0.5 shrink-0 text-yellow-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-0.5">
                      Horario
                    </p>
                    <p className="text-sm md:text-base font-medium leading-snug">
                      {CONTACT_INFO.hours}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/15 mb-4" />

                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-yellow-accent transition-colors group"
                >
                  <MapPin
                    className="size-5 mt-0.5 shrink-0 text-yellow-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-0.5">
                      Dirección
                    </p>
                    <p className="text-sm md:text-base font-medium leading-snug group-hover:underline">
                      {CONTACT_INFO.address}, {CONTACT_INFO.city}{" "}
                      {CONTACT_INFO.state}
                    </p>
                  </div>
                </a>
              </div>

              {/* Decorative floating accent */}
              <div
                aria-hidden="true"
                className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-yellow-accent/20 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 rounded-full bg-blue-primary/10 blur-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
