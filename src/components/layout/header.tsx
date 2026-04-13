"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Home,
  Briefcase,
  BookOpen,
  Star,
  Mail,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  labelKey: string;
  Icon: typeof Home;
};

const NAV_LINKS: NavLink[] = [
  { href: "/services", labelKey: "services", Icon: Briefcase },
  { href: "/#green-card", labelKey: "greenCard", Icon: Star },
  { href: "/blog", labelKey: "blog", Icon: BookOpen },
  { href: "/#contact", labelKey: "contact", Icon: Mail },
];

export function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => setIsOpen(false);

  return (
    <>
      {/* Top Contact Bar — desktop only */}
      <div className="hidden lg:block bg-blue-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="size-4" aria-hidden="true" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
            <span className="h-4 w-px bg-white/30" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              <span>
                {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state}{" "}
                {CONTACT_INFO.zip}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 hover:text-yellow-accent transition-colors font-medium"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
            <span className="h-4 w-px bg-white/30" aria-hidden="true" />
            <LanguageSwitcher isScrolled={false} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-cyan-warm/95 border-b border-cyan-bg-alt backdrop-blur-md transition-shadow duration-300",
          isScrolled ? "shadow-lg" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-3 shrink-0"
            aria-label={SITE_CONFIG.name}
          >
            <div className="relative w-[140px] h-[50px] md:w-[160px] md:h-[50px]">
              <Image
                src="/images/logo.webp"
                alt={SITE_CONFIG.name}
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-contain object-left"
                priority
                fetchPriority="high"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-slate-dark font-medium hover:text-blue-primary transition-colors",
                  "after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0",
                  "after:bg-red-accent after:transition-all after:duration-300",
                  "hover:after:w-full"
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              asChild
              className="bg-red-accent hover:bg-red-accent-dark text-white rounded-full px-6 py-2 font-bold shadow-md hover:shadow-lg transition-all gap-2"
            >
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("menu") === "Menú" ? "Llamar Ahora" : "Call Now"} ${CONTACT_INFO.phoneFormatted}`}
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>{CONTACT_INFO.phoneFormatted}</span>
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              aria-label={CONTACT_INFO.phoneFormatted}
              className="bg-red-accent hover:bg-red-accent-dark text-white rounded-full p-2.5 shadow-md transition-colors"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-dark hover:text-blue-primary hover:bg-cyan-bg"
                  aria-label={t("menu")}
                >
                  <Menu className="size-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:max-w-sm bg-white p-0 flex flex-col"
              >
                <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
                <SheetDescription className="sr-only">
                  {SITE_CONFIG.name}
                </SheetDescription>

                {/* Sheet Header with logo */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-light">
                  <Link href="/" onClick={closeSheet} aria-label={SITE_CONFIG.name}>
                    <div className="relative w-[140px] h-[45px]">
                      <Image
                        src="/images/logo.webp"
                        alt={SITE_CONFIG.name}
                        fill
                        sizes="140px"
                        className="object-contain object-left"
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={closeSheet}
                    aria-label={t("closeMenu")}
                    className="p-2 rounded-full text-slate-muted hover:text-blue-primary hover:bg-cyan-bg transition-colors"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav
                  aria-label="Mobile navigation"
                  className="flex-1 overflow-y-auto px-4 py-5"
                >
                  <ul className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => {
                      const Icon = link.Icon;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeSheet}
                            className="py-3 px-4 rounded-lg text-slate-dark font-medium hover:bg-cyan-bg hover:text-blue-primary flex items-center gap-3 transition-colors"
                          >
                            <Icon className="size-5 shrink-0" aria-hidden="true" />
                            <span>{t(link.labelKey)}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-light" />

                  {/* Contact Info */}
                  <div className="px-4 space-y-3">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      onClick={closeSheet}
                      className="flex items-start gap-3 text-slate-dark hover:text-blue-primary transition-colors"
                    >
                      <Phone className="size-5 mt-0.5 text-blue-primary shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">{CONTACT_INFO.phoneFormatted}</p>
                        <p className="text-sm text-slate-muted">24/7</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 text-slate-dark">
                      <Clock className="size-5 mt-0.5 text-blue-primary shrink-0" aria-hidden="true" />
                      <p className="text-sm">{CONTACT_INFO.hours}</p>
                    </div>

                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeSheet}
                      className="flex items-start gap-3 text-slate-dark hover:text-blue-primary transition-colors"
                    >
                      <MapPin className="size-5 mt-0.5 text-blue-primary shrink-0" aria-hidden="true" />
                      <p className="text-sm">
                        {CONTACT_INFO.address}
                        <br />
                        {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                      </p>
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-light" />

                  {/* Language Switcher */}
                  <div className="px-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-muted">
                      {/* Language label */}
                      Language / Idioma
                    </span>
                    <LanguageSwitcher isScrolled={true} />
                  </div>
                </nav>

                {/* Sticky CTA at bottom */}
                <div className="p-4 border-t border-slate-light bg-white">
                  <Button
                    asChild
                    className="w-full bg-red-accent hover:bg-red-accent-dark text-white rounded-full py-6 font-bold text-base gap-2 shadow-md"
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`} onClick={closeSheet}>
                      <Phone className="size-5" aria-hidden="true" />
                      <span>{CONTACT_INFO.phoneFormatted}</span>
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
