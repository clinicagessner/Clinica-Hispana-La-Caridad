"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip first render — the base pixel script already fires PageView on initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Fire PageView on SPA route changes
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
