import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { PROMOTIONS } from "@/lib/constants";
import { getLocalizedPromotion } from "@/lib/utils";
import { PromotionsCarousel } from "@/components/promotions/promotions-carousel";

export async function Promotions() {
  const [t, locale] = await Promise.all([
    getTranslations("promotions"),
    getLocale(),
  ]);

  const promotions = PROMOTIONS.map((p) => getLocalizedPromotion(p, locale));

  return (
    <section
      id="promociones"
      className="scroll-mt-24 bg-linear-to-b from-cyan-bg to-cyan-warm py-12 md:py-16"
      aria-labelledby="promotions-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-accent/10 px-4 py-1.5 text-xs font-semibold text-red-accent md:text-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2
            id="promotions-heading"
            className="mt-3 text-2xl font-heading font-bold text-slate-dark md:text-3xl"
          >
            {t("title")}
          </h2>
          <p className="mt-2 text-sm text-slate-primary md:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <PromotionsCarousel promotions={promotions} formHref="#contact" />

        {/* View all */}
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-blue-primary text-white hover:bg-blue-dark"
          >
            <Link href="/promociones">
              {t("viewAll")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
