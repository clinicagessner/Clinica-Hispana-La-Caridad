import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";


export async function JsonLdMedicalClinic() {
  const placeData = await getGooglePlaceData();

  const aggregateRating = {
    "@type": "AggregateRating" as const,
    ratingValue: placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating,
    reviewCount: placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews,
    bestRating: 5,
    worstRating: 1,
  };

  // Solo reseñas reales de Google Places. Si la API no responde, el schema sale
  // sin `review` en vez de publicar testimonios inventados como datos estructurados.
  const reviewItems =
    placeData?.reviews?.slice(0, 5).map((r) => ({
      "@type": "Review" as const,
      author: { "@type": "Person" as const, name: r.author_name },
      datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
      reviewBody: r.text,
      reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
      itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    })) ?? [];

  if (!reviewItems.length) {
    console.warn("[json-ld] Places no devolvió reseñas: schema sin `review`.");
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        // Como aparece en la ficha de Google Business.
        alternateName: "Clinica La Caridad",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
        foundingDate: "2016-09",
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Efectivo, tarjeta de crédito, tarjeta de débito",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        aggregateRating,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        availableService: SERVICES.map((service) => ({
          "@type": "MedicalProcedure",
          "@id": `${SITE_CONFIG.baseUrl}/services/${service.slug}#procedure`,
          name: service.title,
          description: service.description,
          url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
        })),
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`
        )}`,
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.twitter,
        ].filter(Boolean),
        // Las mismas áreas de servicio declaradas en la ficha de Google.
        areaServed: [
          { "@type": "City", name: "Houston", "@id": "https://www.wikidata.org/wiki/Q16555" },
          { "@type": "Place", name: "Sharpstown, Houston, TX" },
          { "@type": "Place", name: "Westwood, Houston, TX" },
          { "@type": "Place", name: "Gulfton, Houston, TX" },
          { "@type": "Place", name: "Alief, Houston, TX" },
          { "@type": "Place", name: "Meyerland, Houston, TX" },
          { "@type": "City", name: "Bellaire, TX" },
          { "@type": "City", name: "Stafford, TX" },
          { "@type": "Place", name: "Mission Bend, TX" },
        ],
        // Atributos publicados en la ficha.
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Entrada accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sanitarios accesibles para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento gratuito", value: true },
        ],
        isAccessibleForFree: false,
        publicAccess: true,
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/EmergencyMedicine",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/Gynecologic",
          "https://schema.org/LaboratoryScience",
        ],
        ...(reviewItems.length ? { review: reviewItems } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        inLanguage: ["es-MX", "en-US"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    "@id": `${url}#procedure`,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
    // Sin `provider` embebido: la clínica ya está definida una vez en la home
    // con su @id, y repetirla aquí crea una entidad paralela sin reseñas.
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Referencia ligera a la clínica para páginas que no son la home.
 * El nodo completo (rating, reseñas, 29 servicios) va una sola vez en la home;
 * aquí basta el mismo @id para que Google una las entidades.
 */
export function JsonLdMedicalClinicRef() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// B2 — Autoría médica. Declara cuándo se revisó la página y quién responde por
// ella. `reviewedBy` apunta al @id de la clínica definido en la home: no hay
// médico nombrado, así que la entidad revisora es la propia clínica.
export function JsonLdMedicalWebPage({
  name,
  url,
  lastReviewed,
  about,
  inLanguage,
}: {
  name: string;
  url: string;
  lastReviewed: string;
  about?: string;
  inLanguage: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    name,
    url,
    inLanguage,
    lastReviewed,
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    ...(about && {
      about: { "@type": "MedicalProcedure", "@id": `${url}#procedure` },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
