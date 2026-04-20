"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function MetaPixelPageTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    if (!PIXEL_ID) return;
    if (lastTrackedPath.current === pathname) return;

    if (lastTrackedPath.current === null) {
      lastTrackedPath.current = pathname;
      return;
    }

    lastTrackedPath.current = pathname;
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}

export function MetaPixel() {
  const handleLoad = useCallback(() => {
    if (typeof window.fbq === "function") {
      window.fbq("init", PIXEL_ID!);
      window.fbq("track", "PageView");
    }
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <MetaPixelPageTracker />
    </>
  );
}
