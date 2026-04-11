import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import { Link } from "@/i18n/routing";
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAV_ITEMS,
  SERVICES,
} from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  const highlightedServices = SERVICES.filter((s) => s.highlighted).slice(0, 6);
  const featuredServices =
    highlightedServices.length >= 6
      ? highlightedServices
      : [...SERVICES].sort((a, b) => a.order - b.order).slice(0, 6);

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden bg-linear-to-br from-blue-dark via-blue-primary to-blue-deep text-white"
    >
      {/* Top brand band */}
      <div className="h-1 w-full bg-yellow-accent" aria-hidden="true" />

      {/* Decorative blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-yellow-accent/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-red-accent/5 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5"
              aria-label={SITE_CONFIG.name}
            >
              <Image
                src="/images/logo.webp"
                alt={`Logo de ${SITE_CONFIG.name}`}
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <h2 className="text-xl font-bold text-white mb-3 leading-tight">
              {SITE_CONFIG.name}
            </h2>
            <p className="text-blue-light text-sm leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Clínica Hispana La Caridad"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="size-5" />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Clínica Hispana La Caridad"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-accent hover:text-blue-primary flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="size-5" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <nav aria-label={t("footer.quickLinks")}>
            <h3 className="text-yellow-accent font-semibold uppercase text-xs tracking-widest mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#testimonials"
                  className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                >
                  {t("nav.testimonials")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                >
                  {t("nav.privacy")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3 — Services */}
          <nav aria-label="Servicios">
            <h3 className="text-yellow-accent font-semibold uppercase text-xs tracking-widest mb-4">
              {t("nav.services")}
            </h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                  >
                    {service.shortTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-yellow-accent font-semibold uppercase text-xs tracking-widest mb-4">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="size-5 shrink-0 mt-0.5 text-yellow-accent"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-light hover:text-yellow-accent text-sm leading-relaxed transition-colors"
                >
                  {CONTACT_INFO.address}, {CONTACT_INFO.city},{" "}
                  {CONTACT_INFO.state} {CONTACT_INFO.zip}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="size-5 shrink-0 mt-0.5 text-yellow-accent"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-blue-light hover:text-yellow-accent text-sm transition-colors"
                >
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="size-5 shrink-0 mt-0.5 text-yellow-accent"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-blue-light hover:text-yellow-accent text-sm break-all transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="size-5 shrink-0 mt-0.5 text-yellow-accent"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="text-blue-light text-sm leading-relaxed">
                    {CONTACT_INFO.hours}
                  </span>
                  <span className="text-red-accent-light text-xs mt-1">
                    Último paciente: 5:30 PM
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-light text-xs text-center md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos los derechos
            reservados.
          </p>
          <nav aria-label="Legal">
            <ul className="flex items-center gap-3 text-blue-light text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-yellow-accent transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                &middot;
              </li>
              <li>
                <span>Términos</span>
              </li>
              <li aria-hidden="true" className="text-white/30">
                &middot;
              </li>
              <li>
                <span>Accesibilidad</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
