"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  // href escrito a mano: el Link de next-intl con `locale` genera /es, que
  // responde 307 y deja la versión en inglés sin enlaces rastreables.
  const target = locale === "es" ? "en" : "es";
  const clean = pathname === "/" ? "" : pathname;
  const href = target === "en" ? `/en${clean}` : clean || "/";

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn(
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-blue-primary hover:bg-blue-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
    >
      <a
        href={href}
        hrefLang={target}
        aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        <Globe className="size-4" weight="bold" />
        <span className="uppercase">{locale === "es" ? "EN" : "ES"}</span>
      </a>
    </Button>
  );
}
