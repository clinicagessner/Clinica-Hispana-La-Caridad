"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const SECTION_IDS = [
  "home",
  "services",
  "chronic-care",
  "testimonials",
  "faq",
  "location",
  "blog",
  "contact",
];

export function ScrollAnimations() {
  useAnimateOnScroll();

  const pathname = usePathname();
  const isHomepage = pathname === "/" || pathname === "/es" || pathname === "/en";

  useEffect(() => {
    if (!isHomepage) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const newHash = id === "home" ? "" : `#${id}`;
            const currentHash = window.location.hash;

            if (currentHash !== newHash && currentHash !== `#${id}`) {
              history.replaceState(null, "", newHash || window.location.pathname);
            }
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomepage]);

  return null;
}
