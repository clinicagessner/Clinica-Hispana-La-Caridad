// Constantes exclusivas de la landing CPC /landing/comparacion-clinicas-houston.
// El número CallRail (832) 639-1005 es DEDICADO a esta landing — no usar fuera de aquí.

export const LANDING_CALLRAIL = {
  display: "(832) 639-1005",
  href: "tel:+18326391005",
  raw: "+18326391005",
} as const;

export const LANDING_PATH = "/landing/comparacion-clinicas-houston" as const;

type Locale = "es" | "en";

export type LandingCopy = {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    rating: string;
    h1: string;
    subtitle: string;
    ctaCall: string;
    ctaDirections: string;
    imageAlt: string;
  };
  diff: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; body: string }[];
  };
  offerings: {
    title: string;
    subtitle: string;
    items: { icon: string; label: string; value: string }[];
  };
  services: {
    title: string;
    subtitle: string;
  };
  reviews: { title: string; subtitle: string };
  location: {
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    hoursValue: string;
    ctaMaps: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaCall: string;
    ctaDirections: string;
    badges: string[];
  };
};

export const LANDING_COPY: Record<Locale, LandingCopy> = {
  es: {
    meta: {
      title: "Clínica Hispana en Houston | Sin Cita | Walk-in 7 Días",
      description:
        "Atención médica profesional en español en Houston, TX. Sin cita previa, abierto 7 días hasta 9 PM. Civil Surgeon USCIS. Llame hoy (832) 639-1005.",
    },
    hero: {
      badge: "Lunes a Domingo · 9 AM - 9 PM",
      rating: "5.0 · Reseñas verificadas en Google",
      h1: "¿Busca una mejor opción de clínica hispana en Houston?",
      subtitle:
        "Atención médica profesional al mismo día, 100% en español, sin cita previa, con o sin seguro. Civil Surgeon certificado por USCIS para examen I-693.",
      ctaCall: "Llamar",
      ctaDirections: "Cómo Llegar",
      imageAlt: "Equipo médico de Clínica Hispana La Caridad en Houston atendiendo a pacientes",
    },
    diff: {
      title: "¿Por qué los hispanos eligen Clínica La Caridad?",
      subtitle:
        "Atención médica accesible para usted y su familia, sin las complicaciones de hospitales grandes.",
      items: [
        {
          icon: "Star",
          title: "Reseñas 5 estrellas",
          body: "Cientos de pacientes hispanos satisfechos en Google.",
        },
        {
          icon: "CalendarOff",
          title: "Sin cita previa",
          body: "Llegue y reciba atención el mismo día.",
        },
        {
          icon: "Clock",
          title: "Lunes a Domingo",
          body: "Horario extendido de 9:00 AM a 9:00 PM, todos los días.",
        },
        {
          icon: "Languages",
          title: "100% en español",
          body: "Todo el personal habla su idioma.",
        },
        {
          icon: "ShieldCheck",
          title: "Sin seguro requerido",
          body: "Aceptamos pacientes con o sin cobertura.",
        },
        {
          icon: "DollarSign",
          title: "Precios accesibles",
          body: "Tarifas transparentes antes de atenderle.",
        },
        {
          icon: "Car",
          title: "Estacionamiento gratis",
          body: "Amplio parking frente a la clínica.",
        },
        {
          icon: "FlaskConical",
          title: "Laboratorio en sitio",
          body: "Resultados el mismo día sin enviarle a otro lugar.",
        },
      ],
    },
    offerings: {
      title: "Lo que ofrecemos",
      subtitle: "Todo lo que necesita en una sola visita, sin complicaciones.",
      items: [
        { icon: "Star", label: "Reseñas en Google", value: "Verificadas, 5★" },
        { icon: "Clock", label: "Horario", value: "7 días, hasta 9:00 PM" },
        { icon: "CalendarOff", label: "Cita previa", value: "No se requiere" },
        { icon: "DollarSign", label: "Pago", value: "Con o sin seguro" },
        { icon: "Languages", label: "Idioma", value: "100% Español" },
        { icon: "FileCheck", label: "Examen I-693", value: "Civil Surgeon USCIS" },
        { icon: "Car", label: "Estacionamiento", value: "Gratis y amplio" },
        { icon: "FlaskConical", label: "Laboratorio", value: "Resultados el mismo día" },
      ],
    },
    services: {
      title: "Servicios principales",
      subtitle: "Atención médica integral para toda la familia hispana.",
    },
    reviews: {
      title: "Lo que dicen nuestros pacientes",
      subtitle: "Reseñas verificadas de Google de pacientes reales.",
    },
    location: {
      title: "Visítenos en Houston",
      subtitle: "Ubicados en Sharpstown con acceso fácil y estacionamiento gratuito.",
      addressLabel: "Dirección",
      hoursLabel: "Horario",
      phoneLabel: "Teléfono",
      hoursValue: "Lunes a Domingo: 9:00 AM - 9:00 PM",
      ctaMaps: "Abrir en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas a las dudas más comunes antes de su visita.",
      items: [
        {
          q: "¿Necesito hacer cita?",
          a: "No. Atendemos por orden de llegada todos los días de 9:00 AM a 9:00 PM. Solo llegue a la clínica y nuestro personal le ayudará con el registro.",
        },
        {
          q: "¿Atienden a pacientes sin seguro médico?",
          a: "Sí. Atendemos pacientes con o sin seguro. Para quienes pagan directo, ofrecemos precios accesibles y le informamos el costo antes de la consulta. Aceptamos efectivo, tarjeta y la mayoría de seguros incluyendo Medicaid y Medicare.",
        },
        {
          q: "¿Todo el personal habla español?",
          a: "Sí. Todo nuestro equipo médico y administrativo es 100% bilingüe. Su consulta, diagnóstico y plan de tratamiento se le explicarán completamente en español.",
        },
        {
          q: "¿Tienen laboratorio en la clínica?",
          a: "Sí. Contamos con laboratorio en sitio. Análisis de sangre, orina y otros estudios se procesan el mismo día — no necesita ir a otro lugar.",
        },
        {
          q: "¿Realizan exámenes de inmigración I-693?",
          a: "Sí. Nuestros médicos son Civil Surgeons certificados por USCIS. Completamos el examen y el formulario I-693 oficial en una sola visita, con todas las vacunas requeridas disponibles en la clínica.",
        },
        {
          q: "¿Dónde están ubicados?",
          a: "Estamos en 5705 Fondren Rd STE 101, Houston, TX 77036, en el área de Sharpstown. Servimos a Spring Branch, Westchase, Alief, Bellaire, Meyerland, Gulfton y todo el suroeste de Houston. Estacionamiento gratuito disponible.",
        },
      ],
    },
    finalCta: {
      title: "Reciba atención médica hoy mismo",
      subtitle:
        "Llame ahora o llegue directo a la clínica. Sin cita previa, atención el mismo día.",
      ctaCall: "Llamar",
      ctaDirections: "Cómo Llegar",
      badges: ["Sin cita previa", "Con o sin seguro", "100% en español"],
    },
  },
  en: {
    meta: {
      title: "Hispanic Clinic in Houston | No Appointment | Walk-in 7 Days",
      description:
        "Professional medical care in Spanish in Houston, TX. Walk-in 7 days a week until 9 PM. USCIS-certified Civil Surgeon. Call today (832) 639-1005.",
    },
    hero: {
      badge: "Monday to Sunday · 9 AM - 9 PM",
      rating: "5.0 · Verified Google reviews",
      h1: "Looking for a better Hispanic clinic option in Houston?",
      subtitle:
        "Professional same-day medical care, 100% in Spanish, no appointment needed, with or without insurance. USCIS-certified Civil Surgeon for I-693 exam.",
      ctaCall: "Call",
      ctaDirections: "Get Directions",
      imageAlt: "Clínica Hispana La Caridad medical team in Houston caring for patients",
    },
    diff: {
      title: "Why Hispanic patients choose Clínica La Caridad",
      subtitle:
        "Accessible medical care for you and your family, without the hassles of large hospitals.",
      items: [
        { icon: "Star", title: "5-star reviews", body: "Hundreds of satisfied Hispanic patients on Google." },
        { icon: "CalendarOff", title: "No appointment", body: "Walk in and get same-day care." },
        { icon: "Clock", title: "Monday to Sunday", body: "Extended hours 9:00 AM to 9:00 PM, every day." },
        { icon: "Languages", title: "100% in Spanish", body: "All staff speaks your language." },
        { icon: "ShieldCheck", title: "No insurance required", body: "We see patients with or without coverage." },
        { icon: "DollarSign", title: "Affordable pricing", body: "Transparent rates before your visit." },
        { icon: "Car", title: "Free parking", body: "Spacious parking right in front of the clinic." },
        { icon: "FlaskConical", title: "On-site lab", body: "Same-day results — no need to go anywhere else." },
      ],
    },
    offerings: {
      title: "What we offer",
      subtitle: "Everything you need in a single visit, no complications.",
      items: [
        { icon: "Star", label: "Google reviews", value: "Verified, 5★" },
        { icon: "Clock", label: "Hours", value: "7 days, until 9:00 PM" },
        { icon: "CalendarOff", label: "Appointment", value: "Not required" },
        { icon: "DollarSign", label: "Payment", value: "With or without insurance" },
        { icon: "Languages", label: "Language", value: "100% Spanish" },
        { icon: "FileCheck", label: "I-693 Exam", value: "USCIS Civil Surgeon" },
        { icon: "Car", label: "Parking", value: "Free and spacious" },
        { icon: "FlaskConical", label: "Lab", value: "Same-day results" },
      ],
    },
    services: {
      title: "Main services",
      subtitle: "Comprehensive medical care for the whole Hispanic family.",
    },
    reviews: {
      title: "What our patients say",
      subtitle: "Verified Google reviews from real patients.",
    },
    location: {
      title: "Visit us in Houston",
      subtitle: "Located in Sharpstown with easy access and free parking.",
      addressLabel: "Address",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
      hoursValue: "Monday to Sunday: 9:00 AM - 9:00 PM",
      ctaMaps: "Open in Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions before your visit.",
      items: [
        {
          q: "Do I need an appointment?",
          a: "No. We see patients on a walk-in basis every day from 9:00 AM to 9:00 PM. Just come in and our staff will help you register.",
        },
        {
          q: "Do you see uninsured patients?",
          a: "Yes. We see patients with or without insurance. For self-pay patients, we offer affordable rates and tell you the cost before your visit. We accept cash, cards, and most insurance plans including Medicaid and Medicare.",
        },
        {
          q: "Does all staff speak Spanish?",
          a: "Yes. Our entire medical and administrative team is 100% bilingual. Your consultation, diagnosis, and treatment plan are explained fully in Spanish.",
        },
        {
          q: "Do you have a lab in the clinic?",
          a: "Yes. We have an on-site lab. Blood work, urine tests, and other studies are processed the same day — no need to go anywhere else.",
        },
        {
          q: "Do you perform I-693 immigration exams?",
          a: "Yes. Our physicians are USCIS-certified Civil Surgeons. We complete the exam and the official I-693 form in a single visit, with all required vaccines available on-site.",
        },
        {
          q: "Where are you located?",
          a: "We are at 5705 Fondren Rd STE 101, Houston, TX 77036, in the Sharpstown area. We serve Spring Branch, Westchase, Alief, Bellaire, Meyerland, Gulfton, and all of southwest Houston. Free parking available.",
        },
      ],
    },
    finalCta: {
      title: "Get medical care today",
      subtitle:
        "Call now or come straight to the clinic. No appointment needed, same-day care.",
      ctaCall: "Call",
      ctaDirections: "Get Directions",
      badges: ["No appointment", "With or without insurance", "100% in Spanish"],
    },
  },
};
