import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Phone, MapPin, Clock, CheckCircle, IdentificationCard, FirstAidKit, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { JsonLdBreadcrumb } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

const COPY = {
  es: {
    title: "Clínica Sin Cita Houston Abierta 9 AM-9 PM | Walk-In",
    description:
      "Clínica hispana abierta sin cita previa en Houston, todos los días de 9 AM a 9 PM. Atención en español, cerca de mí. Walk-in clinic en Fondren Rd.",
    h1: "Clínica Hispana Sin Cita en Houston",
    subtitle:
      "Abierta los 7 días de la semana, 9 AM a 9 PM. Atención profesional en español, sin necesidad de cita previa.",
    hoursHeading: "Horario walk-in",
    hoursDays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    hoursLabel: "9:00 AM – 9:00 PM",
    hoursNote: "Llegue en cualquier momento dentro del horario. No necesita cita.",
    servicesHeading: "Servicios disponibles sin cita",
    servicesIntro:
      "Estos son los servicios que atendemos como walk-in para que llegue, sea atendido y reciba sus resultados el mismo día:",
    services: [
      { name: "Consulta médica general", slug: "medicina-familiar" },
      { name: "Gripe, tos y síntomas respiratorios", slug: "enfermedades-respiratorias" },
      { name: "Análisis de sangre y laboratorio", slug: "laboratorio" },
      { name: "Examen físico DOT (camioneros)", slug: "examen-dot" },
      { name: "Examen físico general (trabajo, escuela, deportes)", slug: "examenes-generales" },
      { name: "Vacunas", slug: "vacunas-anticonceptivas" },
      { name: "Infecciones urinarias", slug: "infecciones-urinarias" },
      { name: "Manejo de diabetes, presión y colesterol", slug: "condiciones-cronicas" },
    ],
    servicesNote:
      "Algunos exámenes especializados (como el examen de inmigración I-693) recomendamos coordinarlos con anticipación llamando.",
    howHeading: "¿Cómo funciona la visita walk-in?",
    howSteps: [
      "Llegue dentro del horario (9 AM a 9 PM, todos los días).",
      "Regístrese en recepción con su identificación.",
      "Lo evalúa el médico y se realizan los análisis si es necesario.",
      "Recibe resultados de laboratorio y plan de tratamiento el mismo día.",
    ],
    bringHeading: "Qué traer a su visita",
    bringItems: [
      "Identificación con foto (ID estatal, pasaporte o licencia)",
      "Lista de medicamentos que toma actualmente",
      "Tarjeta de seguro (si tiene)",
      "Resultados médicos recientes (si tiene)",
    ],
    bringNote:
      "No es requisito tener seguro médico. Atendemos con o sin seguro.",
    locationHeading: "Ubicación",
    locationCta: "Cómo llegar",
    callCta: "Llamar ahora",
    finalCta: "Venga sin cita hoy mismo",
    finalCtaText:
      "Estamos abiertos ahora dentro del horario. Sin compromiso, sin papeleo previo, atención profesional en español.",
    breadcrumbs: [
      { name: "Inicio", path: "" },
      { name: "Walk-in / Sin cita", path: "/walk-in" },
    ],
  },
  en: {
    title: "Walk-in Clinic Houston Open 9 AM-9 PM | No Appointment",
    description:
      "Hispanic walk-in clinic in Houston, open 7 days a week 9 AM - 9 PM. Spanish-speaking care near you, no appointment needed. Located on Fondren Rd.",
    h1: "Walk-in Clinic in Houston (Spanish-speaking)",
    subtitle:
      "Open 7 days a week, 9 AM to 9 PM. Professional care in Spanish — no appointment required.",
    hoursHeading: "Walk-in hours",
    hoursDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hoursLabel: "9:00 AM – 9:00 PM",
    hoursNote: "Come in any time within our hours. No appointment needed.",
    servicesHeading: "Services available without appointment",
    servicesIntro:
      "These are the services we provide on a walk-in basis so you can come in, be seen, and get same-day results:",
    services: [
      { name: "General medical consultation", slug: "medicina-familiar" },
      { name: "Flu, cough and respiratory symptoms", slug: "enfermedades-respiratorias" },
      { name: "Blood tests and laboratory", slug: "laboratorio" },
      { name: "DOT physical (truck drivers)", slug: "examen-dot" },
      { name: "General physical exam (work, school, sports)", slug: "examenes-generales" },
      { name: "Vaccinations", slug: "vacunas-anticonceptivas" },
      { name: "Urinary tract infections", slug: "infecciones-urinarias" },
      { name: "Diabetes, blood pressure and cholesterol management", slug: "condiciones-cronicas" },
    ],
    servicesNote:
      "For specialized exams (such as the I-693 immigration medical exam) we recommend calling ahead.",
    howHeading: "How a walk-in visit works",
    howSteps: [
      "Come in within our hours (9 AM to 9 PM, every day).",
      "Sign in at the front desk with your ID.",
      "Our doctor evaluates you and orders lab tests if needed.",
      "Receive your lab results and care plan the same day.",
    ],
    bringHeading: "What to bring",
    bringItems: [
      "Photo ID (state ID, passport or driver's license)",
      "List of current medications",
      "Insurance card (if you have one)",
      "Any recent medical test results",
    ],
    bringNote:
      "No insurance required. We treat patients with or without insurance.",
    locationHeading: "Location",
    locationCta: "Get directions",
    callCta: "Call now",
    finalCta: "Come in today — no appointment",
    finalCtaText:
      "We are open now within our hours. No paperwork required in advance, professional Spanish-speaking care.",
    breadcrumbs: [
      { name: "Home", path: "" },
      { name: "Walk-in / No Appointment", path: "/walk-in" },
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
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/walk-in`,
      languages: {
        es: "/walk-in",
        en: "/en/walk-in",
        "x-default": "/walk-in",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE_CONFIG.baseUrl}${localePath}/walk-in`,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function WalkInPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = COPY[locale as "es" | "en"] ?? COPY.es;
  const localePath = locale === "en" ? "/en" : "";
  const breadcrumbs = c.breadcrumbs.map((b) => ({
    name: b.name,
    url: `${SITE_CONFIG.baseUrl}${localePath}${b.path}`,
  }));

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-blue-primary via-blue-primary to-blue-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-yellow-primary text-blue-primary font-semibold text-sm rounded-full px-4 py-1.5 mb-5">
                <Clock weight="bold" className="size-4" />
                {c.hoursLabel} — {locale === "en" ? "Open every day" : "Abierta todos los días"}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 drop-shadow-lg">
                {c.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-7 leading-relaxed">
                {c.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-yellow-primary text-blue-primary font-semibold rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone weight="bold" className="size-5" />
                  {c.callCta} — {CONTACT_INFO.phone}
                </a>
                <Link
                  href={`${localePath}/#location`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-semibold rounded-lg px-6 py-3 hover:bg-white/20 transition-all"
                >
                  <MapPin weight="bold" className="size-5" />
                  {c.locationCta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hours grid */}
        <section className="py-12 md:py-16 bg-cyan-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-3 text-center">
                {c.hoursHeading}
              </h2>
              <p className="text-center text-muted-foreground mb-8">{c.hoursNote}</p>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
                {c.hoursDays.map((day) => (
                  <div
                    key={day}
                    className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm"
                  >
                    <div className="text-sm font-semibold text-slate-dark mb-1">{day}</div>
                    <div className="text-xs text-blue-primary font-medium">{c.hoursLabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-3 text-center">
                {c.servicesHeading}
              </h2>
              <p className="text-center text-muted-foreground mb-8">{c.servicesIntro}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`${localePath}/services/${s.slug}`}
                    className="group flex items-center justify-between gap-3 p-4 bg-cyan-warm border border-cyan-200 rounded-xl hover:border-blue-primary hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle weight="fill" className="size-5 text-blue-primary shrink-0" />
                      <span className="font-medium text-slate-dark group-hover:text-blue-primary">
                        {s.name}
                      </span>
                    </div>
                    <ArrowRight weight="bold" className="size-4 text-blue-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6 italic">
                {c.servicesNote}
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 md:py-16 bg-cyan-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-8 text-center">
                {c.howHeading}
              </h2>
              <ol className="space-y-4">
                {c.howSteps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <span className="shrink-0 size-9 rounded-full bg-blue-primary text-white font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-slate-dark pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* What to bring */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <IdentificationCard weight="duotone" className="size-8 text-blue-primary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark">
                  {c.bringHeading}
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
                {c.bringItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 bg-cyan-warm rounded-lg"
                  >
                    <CheckCircle weight="fill" className="size-5 text-blue-primary shrink-0 mt-0.5" />
                    <span className="text-slate-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-blue-primary font-semibold mt-6">
                {c.bringNote}
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-red-primary to-red-700 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <FirstAidKit weight="duotone" className="size-12 mx-auto mb-4 text-yellow-primary" />
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              {c.finalCta}
            </h2>
            <p className="text-lg text-white/95 mb-7">{c.finalCtaText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-yellow-primary text-blue-primary font-bold rounded-lg px-7 py-3.5 shadow-md hover:shadow-lg transition-all text-lg"
              >
                <Phone weight="bold" className="size-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link
                href={`${localePath}/#location`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/40 text-white font-semibold rounded-lg px-7 py-3.5 hover:bg-white/20 transition-all"
              >
                <MapPin weight="bold" className="size-5" />
                {CONTACT_INFO.address}, {CONTACT_INFO.city}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JsonLdBreadcrumb items={breadcrumbs} />
    </>
  );
}
