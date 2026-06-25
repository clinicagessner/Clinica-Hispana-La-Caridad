"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PromotionDialog } from "@/components/promotions/promotion-dialog";
import type { LocalizedPromotion } from "@/lib/utils";

interface PromotionsCarouselProps {
  promotions: LocalizedPromotion[];
  formHref: string;
}

export function PromotionsCarousel({
  promotions,
  formHref,
}: PromotionsCarouselProps) {
  const t = useTranslations("promotions");
  const [active, setActive] = useState<LocalizedPromotion | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {promotions.map((promo) => (
            <div
              key={promo.slug}
              className="flex-[0_0_78%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
            >
              <button
                type="button"
                onClick={() => setActive(promo)}
                aria-label={t("openAria", { title: promo.title })}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white border border-cyan-bg-alt shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
              >
                {/* Flyer — complete, never cropped */}
                <div className="relative aspect-4/5 w-full bg-cyan-bg">
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <span className="absolute inset-0 flex items-end justify-center bg-blue-primary/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-blue-primary/30 group-hover:opacity-100 group-focus-visible:bg-blue-primary/30 group-focus-visible:opacity-100">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-primary shadow-md">
                      {t("viewDetail")}
                    </span>
                  </span>
                </div>

                {/* Caption */}
                <div className="flex flex-1 flex-col gap-1 p-4 text-left">
                  <h3 className="text-sm font-bold text-slate-dark leading-snug">
                    {promo.title}
                  </h3>
                  {promo.price && (
                    <p className="text-lg font-bold text-red-accent">
                      {promo.price}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label={t("prev")}
        className="absolute left-0 top-1/3 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-all duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={t("next")}
        className="absolute right-0 top-1/3 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-all duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Swipe hint (mobile) */}
      <p className="mt-4 text-center text-xs text-slate-muted md:hidden">
        {t("swipeHint")}
      </p>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={t("goToSlide", { n: index + 1 })}
            className="group flex items-center justify-center p-2"
          >
            <span
              className={`block size-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-blue-primary"
                  : "bg-cyan-bg-alt group-hover:bg-blue-primary/50"
              }`}
            />
          </button>
        ))}
      </div>

      <PromotionDialog
        promo={active}
        formHref={formHref}
        onClose={() => setActive(null)}
      />
    </div>
  );
}
