import { Star } from "lucide-react";
import { LANDING_COPY } from "@/lib/landing-conquesting";
import type { Locale } from "@/i18n/config";

type Review = {
  author: string;
  initial: string;
  text: string;
  timeEs: string;
  timeEn: string;
};

const REVIEWS: Review[] = [
  {
    author: "María García",
    initial: "M",
    text: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
    timeEs: "Hace 2 semanas",
    timeEn: "2 weeks ago",
  },
  {
    author: "Carlos Rodríguez",
    initial: "C",
    text: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
    timeEs: "Hace 1 mes",
    timeEn: "1 month ago",
  },
  {
    author: "Ana Martínez",
    initial: "A",
    text: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
    timeEs: "Hace 3 semanas",
    timeEn: "3 weeks ago",
  },
];

export function LandingReviews({ locale }: { locale: Locale }) {
  const c = LANDING_COPY[locale].reviews;

  return (
    <section className="py-16 md:py-24 bg-cyan-warm" aria-labelledby="landing-reviews-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="landing-reviews-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-4"
          >
            {c.title}
          </h2>
          <p className="text-lg text-slate-dark/70">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.map((r) => (
            <article
              key={r.author}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-yellow-accent-dark"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-dark/80 leading-relaxed mb-6 flex-1">
                {r.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="size-10 rounded-full bg-red-accent-bg text-red-accent font-bold flex items-center justify-center"
                  aria-hidden
                >
                  {r.initial}
                </div>
                <div>
                  <p className="font-semibold text-slate-dark text-sm">
                    {r.author}
                  </p>
                  <p className="text-xs text-slate-dark/60">
                    {locale === "en" ? r.timeEn : r.timeEs}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
