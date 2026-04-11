import { getTranslations, getLocale } from "next-intl/server";
import { MapPin, Phone } from "lucide-react";
import { ServicesFilter } from "@/components/services/services-filter";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";

const categoryInfo: Record<
  string,
  {
    labelKey:
      | "categoryEspecial"
      | "categoryDiagnostico"
      | "categoryEspecialidad"
      | "categoryMujer"
      | "categoryDefault";
  }
> = {
  especial: { labelKey: "categoryEspecial" },
  diagnostico: { labelKey: "categoryDiagnostico" },
  mujer: { labelKey: "categoryMujer" },
  especialidad: { labelKey: "categoryEspecialidad" },
  otro: { labelKey: "categoryDefault" },
};

const categoryOrder = ["especial", "diagnostico", "mujer", "especialidad"];

export async function Services() {
  const t = await getTranslations("services");
  const locale = await getLocale();

  // Sort and localize all services
  const sortedServices = [...SERVICES]
    .sort((a, b) => a.order - b.order)
    .map((s) => getLocalizedService(s, locale));

  // Derive available categories from actual services
  const availableCategoryIds = categoryOrder.filter((id) =>
    sortedServices.some((s) => s.category === id)
  );

  const categories = availableCategoryIds.map((id) => ({
    id,
    label: t(categoryInfo[id].labelKey),
  }));

  return (
    <section
      id="services"
      className="relative bg-white pt-16 md:pt-24 pb-16 md:pb-24"
    >
      {/* Decorative top strip */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-cyan-warm"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-24 h-px bg-cyan-bg"
      />

      {/* Section Header */}
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <span className="inline-block text-blue-primary uppercase tracking-widest text-sm font-semibold mb-3">
            {t("servicesAvailable")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-primary">{t("subtitle")}</p>
        </div>
      </div>

      {/* Filter pills + Grid (client component — brings its own container) */}
      <div className="relative">
        <ServicesFilter services={sortedServices} categories={categories} />
      </div>

      {/* Bottom CTA card */}
      <div className="container relative mx-auto px-4">
        <div className="mt-6 md:mt-8 max-w-5xl mx-auto">
          <div className="bg-linear-to-r from-blue-primary to-blue-dark text-white rounded-2xl p-8 md:p-10 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              {t("readyToSchedule")}
            </h3>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              {t("callOrVisit")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-accent text-blue-primary hover:bg-yellow-accent-dark font-bold rounded-full px-7 py-3 transition-colors shadow-lg w-full sm:w-auto"
              >
                <Phone className="size-5" aria-hidden="true" />
                {t("callNow")}
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-blue-primary font-semibold rounded-full px-7 py-3 transition-colors w-full sm:w-auto"
              >
                <MapPin className="size-5" aria-hidden="true" />
                {t("getDirections")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
