"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-places";

interface TestimonialsCarouselProps {
  reviews: GoogleReview[];
}

function getInitial(name: string): string {
  const trimmed = name.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

export function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

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
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
            >
              {/* Card */}
              <article className="group flex h-full flex-col rounded-2xl border-t-4 border-blue-primary bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Header: avatar + name + stars */}
                <div className="flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-primary font-bold text-white"
                  >
                    {getInitial(review.author_name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-slate-dark">
                      {review.author_name}
                    </p>
                    <p className="text-xs text-slate-muted">
                      {review.relative_time_description}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < review.rating
                            ? "fill-yellow-accent text-yellow-accent"
                            : "fill-cyan-bg-alt text-cyan-bg-alt"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Body */}
                <p className="mt-5 flex-1 text-slate-primary leading-relaxed line-clamp-5">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Footer: verified badge */}
                <div className="mt-6 flex items-center gap-2 border-t border-cyan-bg-alt pt-4">
                  <BadgeCheck className="size-4 text-blue-primary" />
                  <span className="text-xs font-medium text-slate-muted">
                    Verificado en Google
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons - desktop only */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-colors duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 z-10 hidden size-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-primary text-white shadow-lg transition-colors duration-300 hover:bg-blue-dark md:flex"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dot indicators */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir a reseña ${index + 1}`}
            className={`size-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-6 bg-blue-primary"
                : "bg-cyan-bg-alt hover:bg-blue-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
