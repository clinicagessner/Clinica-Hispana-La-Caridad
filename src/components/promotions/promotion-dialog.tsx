"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone, MapPin, ClipboardList, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import type { LocalizedPromotion } from "@/lib/utils";

interface PromotionDialogProps {
  promo: LocalizedPromotion | null;
  /** Anchor of the lead form on the current page (e.g. "#contact" or "#lead-form") */
  formHref: string;
  onClose: () => void;
}

export function PromotionDialog({ promo, formHref, onClose }: PromotionDialogProps) {
  const t = useTranslations("promotions");
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape to close, lock body scroll, focus the close button on open
  useEffect(() => {
    if (!promo) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [promo, onClose]);

  if (!promo) return null;

  const titleId = `promo-dialog-title-${promo.slug}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Flyer image — full, never cropped */}
        <div className="relative aspect-4/5 w-full shrink-0 bg-cyan-bg">
          <Image
            src={promo.image}
            alt={promo.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 28rem"
          />

          {/* Close */}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-dark shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 p-5">
          <h2 id={titleId} className="text-xl font-bold text-slate-dark">
            {promo.title}
          </h2>

          {promo.price && (
            <p className="flex items-baseline gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-muted">
                {t("priceLabel")}
              </span>
              <span className="text-3xl font-bold text-red-accent">
                {promo.price}
              </span>
            </p>
          )}

          <p className="text-sm leading-relaxed text-slate-primary">
            {promo.blurb}
          </p>

          <div>
            <h3 className="mb-2 text-sm font-bold text-slate-dark">
              {t("includesLabel")}
            </h3>
            <ul className="flex flex-col gap-2">
              {promo.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-blue-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2 pt-1">
            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-red-accent text-white hover:bg-red-accent-dark"
            >
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("ctaCall")} — ${promo.title} — ${CONTACT_INFO.phoneFormatted}`}
              >
                <Phone className="size-5" aria-hidden="true" />
                {t("ctaCall")}
              </a>
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white"
              >
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("ctaDirections")} — ${CONTACT_INFO.address}, ${CONTACT_INFO.city} ${CONTACT_INFO.state}`}
                >
                  <MapPin className="size-5" aria-hidden="true" />
                  {t("ctaDirections")}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="gap-2 bg-blue-primary text-white hover:bg-blue-dark"
              >
                <a href={formHref} onClick={onClose}>
                  <ClipboardList className="size-5" aria-hidden="true" />
                  {t("ctaForm")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
