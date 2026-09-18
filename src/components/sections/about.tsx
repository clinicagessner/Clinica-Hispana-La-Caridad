import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";

/**
 * Definición de entidad para buscadores y motores de IA: qué es la clínica,
 * dónde, cuándo abre y qué hace, en hechos verificables y sin publicidad.
 * El mismo texto, recortado a 750 caracteres, sirve de descripción del perfil
 * de Google Business.
 */
export async function About() {
  const t = await getTranslations("about");

  return (
    <section id="que-es" className="py-16 md:py-24 bg-cyan-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-6">
            {t("title")}
          </h2>

          <div className="space-y-4 text-slate-dark/80 leading-relaxed">
            <p>
              {t.rich("p1", {
                address: () => (
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-primary font-medium hover:underline"
                  >
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </a>
                ),
              })}
            </p>

            <p>
              {t.rich("p2", {
                count: SERVICES.length,
                services: (chunks) => (
                  <Link href="/services" className="text-blue-primary font-medium hover:underline">
                    {chunks}
                  </Link>
                ),
                lab: (chunks) => (
                  <Link
                    href="/blog/laboratorio-clinico-houston-analisis-sangre"
                    className="text-blue-primary font-medium hover:underline"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>

            <p>
              {t.rich("p3", {
                visit: (chunks) => (
                  <Link
                    href="/blog/bienvenidos-clinica-hispana-la-caridad"
                    className="text-blue-primary font-medium hover:underline"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
