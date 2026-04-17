import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";

export function JsonLdMedicalClinic() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_REVIEWS_DATA.averageRating,
          reviewCount: GOOGLE_REVIEWS_DATA.totalReviews,
          bestRating: 5,
          worstRating: 1,
        },
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Médicos",
          itemListElement: SERVICES.slice(0, 10).map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.description,
            },
          })),
        },
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
        ].filter(Boolean),
        areaServed: {
          "@type": "City",
          name: "Houston",
          "@id": "https://www.wikidata.org/wiki/Q16555",
        },
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/EmergencyMedicine",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/Gynecologic",
          "https://schema.org/LaboratoryScience",
        ],
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "María García" },
            datePublished: "2026-03-28",
            reviewBody: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Carlos Rodríguez" },
            datePublished: "2026-03-10",
            reviewBody: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ana Martínez" },
            datePublished: "2026-03-21",
            reviewBody: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "José López" },
            datePublished: "2026-02-15",
            reviewBody: "Muy profesionales y atentos. Me explicaron todo en español y me dieron opciones de pago. Definitivamente volveré para mis chequeos regulares.",
            reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          },
        ],
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
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.baseUrl}/#webpage`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        isPartOf: {
          "@id": `${SITE_CONFIG.baseUrl}/#website`,
        },
        about: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        description: SITE_CONFIG.description,
        inLanguage: "es-MX",
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
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
      name: SITE_CONFIG.name,
      telephone: CONTACT_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.state,
        postalCode: CONTACT_INFO.zip,
        addressCountry: "US",
      },
    },
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
