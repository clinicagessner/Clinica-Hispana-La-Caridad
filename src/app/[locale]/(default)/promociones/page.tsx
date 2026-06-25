import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Star, Sparkles } from "lucide-react";
import { Link, routing } from "@/i18n/routing";
import { PromotionsGrid } from "@/components/promotions/promotions-grid";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLdFAQ, JsonLdBreadcrumb } from "@/components/seo/json-ld";
import { PROMOTIONS, SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getLocalizedPromotion } from "@/lib/utils";
import { getGooglePlaceData } from "@/lib/google-places";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      languages: {
        es: "/promociones",
        en: "/en/promociones",
        "x-default": "/promociones",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("subtitle"),
      url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PromocionesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, placeData] = await Promise.all([
    getTranslations("promotions"),
    getGooglePlaceData(),
  ]);

  const promotions = PROMOTIONS.map((p) => getLocalizedPromotion(p, locale));

  // Live Google rating/review count with fallback to constants
  const rating = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews =
    placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const ratingPercent = Math.max(0, Math.min(100, (rating / 5) * 100));

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
  ];

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          {
            name: locale === "en" ? "Home" : "Inicio",
            url: `${SITE_CONFIG.baseUrl}${localePath}`,
          },
          {
            name: t("metaTitle"),
            url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
          },
        ]}
      />
      <JsonLdFAQ questions={faqs} />

      <main>
        {/* Compact header */}
        <section className="scroll-mt-24 bg-linear-to-b from-cyan-warm to-cyan-bg pt-24 pb-8 md:pt-28 md:pb-10">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-slate-primary transition-colors hover:text-blue-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {t("backToHome")}
            </Link>

            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-accent/10 px-4 py-1.5 text-xs font-semibold text-red-accent md:text-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                {t("eyebrow")}
              </span>
              <h1 className="mt-3 text-3xl font-heading font-bold text-slate-dark md:text-4xl">
                {t("title")}
              </h1>
              <p className="mt-2 text-base text-slate-primary">
                {t("subtitle")}
              </p>

              {/* Live reviews badge */}
              <div className="mt-4 inline-flex items-center gap-2">
                <span
                  className="relative inline-flex items-center gap-0.5"
                  role="img"
                  aria-label={`${rating.toFixed(1)} ${
                    locale === "en" ? "out of 5 stars" : "de 5 estrellas"
                  }`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 text-slate-light" />
                  ))}
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
                <span className="text-sm font-medium text-slate-primary">
                  {rating.toFixed(1)} · {totalReviews}
                  {t("googleReviews")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-cyan-bg py-10 md:py-14">
          <div className="container mx-auto px-4">
            <PromotionsGrid promotions={promotions} formHref="#lead-form" />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cyan-warm py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-6 text-center text-2xl font-heading font-bold text-slate-dark md:text-3xl">
              {t("faqTitle")}
            </h2>
            <dl className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-cyan-bg-alt bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-dark">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-primary">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Lead form */}
        <section
          id="lead-form"
          className="scroll-mt-24 bg-cyan-bg py-12 md:py-16"
        >
          <div className="container mx-auto max-w-3xl px-4">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold text-slate-dark md:text-3xl">
                {t("formTitle")}
              </h2>
              <p className="mt-2 text-base text-slate-primary">
                {t("formSubtitle")}
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-bg-alt bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
