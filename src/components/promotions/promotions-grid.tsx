"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PromotionDialog } from "@/components/promotions/promotion-dialog";
import type { LocalizedPromotion } from "@/lib/utils";

interface PromotionsGridProps {
  promotions: LocalizedPromotion[];
  formHref: string;
}

export function PromotionsGrid({ promotions, formHref }: PromotionsGridProps) {
  const t = useTranslations("promotions");
  const [active, setActive] = useState<LocalizedPromotion | null>(null);

  // Deep-link: /promociones#<slug> opens that dialog. Clean the hash
  // synchronously BEFORE opening so closing doesn't reopen or "redirect".
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const found = promotions.find((p) => p.slug === hash);
    if (found) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      setActive(found);
    }
  }, [promotions]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promotions.map((promo) => (
          <article
            key={promo.slug}
            id={promo.slug}
            className="flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-cyan-bg-alt bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Flyer thumbnail — complete, never cropped */}
            <button
              type="button"
              onClick={() => setActive(promo)}
              aria-label={t("openAria", { title: promo.title })}
              className="group relative aspect-4/5 w-full bg-cyan-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
            >
              <Image
                src={promo.image}
                alt={promo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </button>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="text-base font-bold leading-snug text-slate-dark">
                {promo.title}
              </h3>
              {promo.price && (
                <p className="text-xl font-bold text-red-accent">
                  {promo.price}
                </p>
              )}
              <p className="line-clamp-2 text-sm leading-relaxed text-slate-primary">
                {promo.blurb}
              </p>
              <Button
                type="button"
                onClick={() => setActive(promo)}
                variant="outline"
                className="mt-2 w-full border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white"
              >
                {t("viewDetail")}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <PromotionDialog
        promo={active}
        formHref={formHref}
        onClose={() => setActive(null)}
      />
    </>
  );
}
