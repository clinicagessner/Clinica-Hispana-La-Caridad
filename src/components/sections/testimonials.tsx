import { getTranslations } from "next-intl/server";
import { Quote, Star } from "lucide-react";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData, type GoogleReview } from "@/lib/google-places";

// Fallback reviews when API is unavailable (using fixed timestamps to avoid hydration mismatch)
const fallbackReviews: GoogleReview[] = [
  {
    author_name: "María García",
    rating: 5,
    text: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
    time: 1710000000000,
    relative_time_description: "hace 2 semanas",
    profile_photo_url: "/images/avatars/avatar-1.webp",
  },
  {
    author_name: "Carlos Rodríguez",
    rating: 5,
    text: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
    time: 1707400000000,
    relative_time_description: "hace 1 mes",
    profile_photo_url: "/images/avatars/avatar-2.webp",
  },
  {
    author_name: "Ana Martínez",
    rating: 5,
    text: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
    time: 1709400000000,
    relative_time_description: "hace 3 semanas",
    profile_photo_url: "/images/avatars/avatar-3.webp",
  },
  {
    author_name: "José López",
    rating: 5,
    text: "Muy profesionales y atentos. Me explicaron todo en español y me dieron opciones de pago. Definitivamente volveré para mis chequeos regulares.",
    time: 1704800000000,
    relative_time_description: "hace 2 meses",
    profile_photo_url: "/images/avatars/avatar-4.webp",
  },
  {
    author_name: "Laura Hernández",
    rating: 5,
    text: "Excelente experiencia. El personal es muy amable y el lugar está muy limpio. Me sentí como en casa. Los recomiendo ampliamente.",
    time: 1710600000000,
    relative_time_description: "hace 1 semana",
    profile_photo_url: "/images/avatars/avatar-5.webp",
  },
];

export async function Testimonials() {
  // Parallel fetching - eliminates waterfall
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData(),
  ]);

  const averageRating =
    googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews =
    googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const reviews = googleData?.reviews?.length
    ? googleData.reviews
    : fallbackReviews;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-cyan-warm py-20 md:py-24"
    >
      {/* Decorative giant quote mark */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-6 size-48 md:size-72 text-blue-primary/10 rotate-180"
        strokeWidth={1.5}
      />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up mx-auto max-w-2xl text-center">
          <span className="text-red-accent text-sm font-semibold uppercase tracking-widest">
            {t("reviews")}
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-slate-primary">
            {t("subtitle")}
          </p>
        </div>

        {/* Rating hero */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-full bg-white px-8 py-6 shadow-xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-yellow-accent text-yellow-accent"
                />
              ))}
            </div>
            <div className="text-3xl font-bold text-blue-primary">
              {averageRating} / 5
            </div>
            <p className="text-slate-muted text-xs uppercase tracking-wider">
              {totalReviews}+ {t("reviews")} · Google
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-14">
          <TestimonialsCarousel reviews={reviews} />
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-blue-primary px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Star className="size-5 fill-yellow-accent text-yellow-accent" />
            {t("leaveReview")}
          </a>
        </div>
      </div>
    </section>
  );
}
