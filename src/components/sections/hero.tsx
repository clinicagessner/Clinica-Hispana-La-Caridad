import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Star, CheckCircle2 } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Hero() {
  const [t, tc, placeData] = await Promise.all([
    getTranslations("hero"),
    getTranslations("cta"),
    getGooglePlaceData(),
  ]);

  // WhatsApp usa CONTACT_INFO.whatsapp (solo dígitos, formato wa.me) y el botón
  // nunca muestra el número como texto: así el swap.js de CallRail no lo
  // reescribe con el número de tracking.
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(tc("whatsappMessage"))}`;

  // Live Google rating/review count, falling back to static constants
  const rating = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const ratingPercent = Math.max(0, Math.min(100, (rating / 5) * 100));

  const features = ["1", "2", "3", "4"] as const;
  const fullTitle = t("title");
  const highlightMatch = fullTitle.match(/(.*?)(La Caridad)(.*)/);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-[calc(100svh-5rem)] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-clinic.webp"
        alt="Equipo médico de Clínica Hispana La Caridad atendiendo pacientes en Houston"
        fill
        priority
        fetchPriority="high"
        quality={80}
        className="object-cover object-center -z-20"
        sizes="100vw"
      />

      {/* Brand-blue gradient overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-blue-primary/95 via-blue-primary/80 to-blue-primary/40 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-blue-primary/80 via-transparent to-transparent"
      />

      {/* Bottom fade into the next (cyan) section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 md:h-32 bg-linear-to-t from-cyan-bg to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 w-full py-12 md:py-16">
        <div className="max-w-2xl">
          {/* Reviews trust badge — live rating + count from Google */}
          <div className="animate-hero-title inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm ring-1 ring-white/25 rounded-full px-4 py-1.5 mb-5">
            <span
              className="relative inline-flex items-center gap-0.5"
              role="img"
              aria-label={`${rating.toFixed(1)} de 5 estrellas`}
            >
              {/* Empty stars (track) */}
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 text-white/40" />
              ))}
              {/* Filled overlay clipped to the real rating */}
              <span
                className="absolute inset-0 flex items-center gap-0.5 overflow-hidden"
                style={{ width: `${ratingPercent}%` }}
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 shrink-0 fill-yellow-accent text-yellow-accent"
                  />
                ))}
              </span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-white">
              {rating.toFixed(1)} · {totalReviews}
              {t("googleReviews")}
            </span>
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="animate-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 text-balance"
          >
            {highlightMatch ? (
              <>
                {highlightMatch[1]}
                <span className="text-yellow-accent">{highlightMatch[2]}</span>
                {highlightMatch[3]}
              </>
            ) : (
              fullTitle
            )}
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-subtitle text-base md:text-xl text-white/90 mb-6 max-w-xl">
            {t("subtitle")}
          </p>

          {/* Features list */}
          <ul className="animate-hero-features flex flex-wrap gap-x-5 gap-y-2 mb-7 max-w-xl">
            {features.map((key) => (
              <li key={key} className="flex items-center gap-2">
                <CheckCircle2
                  className="size-4 shrink-0 text-yellow-accent"
                  aria-hidden="true"
                />
                <span className="text-white/90 text-sm font-medium leading-snug">
                  {t(`features.${key}`)}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-red-accent hover:bg-red-accent-dark text-white text-sm md:text-base px-7 py-6 gap-2 shadow-lg shadow-black/20"
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
              className="bg-whatsapp hover:bg-whatsapp-dark text-white text-sm md:text-base px-7 py-6 gap-2 shadow-lg shadow-black/20"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tc("whatsapp")}
              >
                <WhatsappLogo className="size-5" weight="fill" aria-hidden="true" />
                {t("ctaWhatsapp")}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-blue-primary text-sm md:text-base px-7 py-6 gap-2 bg-white/10 backdrop-blur-sm"
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

          {/* Secondary contact prompt */}
          <p className="animate-hero-cta mt-4 text-sm md:text-base text-white/85">
            {t("contactPrompt")}{" "}
            <a
              href="#contact"
              className="font-semibold text-yellow-accent underline underline-offset-4 hover:text-white transition-colors"
            >
              {t("contactLink")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
