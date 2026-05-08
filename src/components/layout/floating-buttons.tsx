"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CONTACT_INFO } from "@/lib/constants";
import {
  LANDING_CALLRAIL,
  LANDING_GADS_TAG,
  LANDING_PATH,
} from "@/lib/landing-conquesting";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const t = useTranslations("cta");
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isLanding = pathname?.endsWith(LANDING_PATH) ?? false;
  const phoneHref = isLanding ? LANDING_CALLRAIL.href : `tel:${CONTACT_INFO.phone}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneClick = () => {
    if (!isLanding) return;
    if (typeof window === "undefined") return;
    const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL_LANDING_CALL;
    if (!label || typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", {
      send_to: `${LANDING_GADS_TAG}/${label}`,
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 rounded-full bg-white text-slate-dark border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 hover:shadow-lg transition-all"
            aria-label="Ver ubicación en Google Maps"
          >
            <MapPin className="size-5" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("getDirections")}</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={phoneHref}
            onClick={handlePhoneClick}
            className="size-14 rounded-full bg-blue-primary text-white shadow-md shadow-blue-primary/30 flex items-center justify-center hover:bg-blue-dark hover:shadow-lg transition-all animate-pulse-float"
            aria-label="Llamar ahora"
          >
            <Phone className="size-6" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{t("callNow")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
