import Image from "next/image";
import { Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SITE_CONFIG } from "@/lib/constants";
import { LANDING_CALLRAIL } from "@/lib/landing-conquesting";
import { LandingCallButton } from "@/components/landing/landing-call-button";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={SITE_CONFIG.logoUrl}
            alt={SITE_CONFIG.name}
            width={48}
            height={48}
            priority
            className="size-10 md:size-12 object-contain"
          />
          <span className="hidden sm:block font-heading font-bold text-blue-primary text-base md:text-lg leading-tight">
            Clínica Hispana
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            La Caridad
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher isScrolled />
          <LandingCallButton
            className="inline-flex items-center gap-2 rounded-full bg-red-accent text-white px-4 py-2 md:px-5 md:py-2.5 font-semibold text-sm md:text-base shadow-md hover:bg-red-accent-dark hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent focus-visible:ring-offset-2"
            ariaLabel={`Llamar ${LANDING_CALLRAIL.display}`}
          >
            <Phone className="size-4 md:size-5" aria-hidden />
            <span className="hidden xs:inline">{LANDING_CALLRAIL.display}</span>
            <span className="xs:hidden">Llamar</span>
          </LandingCallButton>
        </div>
      </div>
    </header>
  );
}
