"use client";

import {
  LANDING_CALLRAIL,
  LANDING_GADS_TAG,
} from "@/lib/landing-conquesting";

type Props = {
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export function LandingCallButton({ className, ariaLabel, children }: Props) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL_LANDING_CALL;
    if (!label || typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", {
      send_to: `${LANDING_GADS_TAG}/${label}`,
    });
  };

  return (
    <a
      href={LANDING_CALLRAIL.href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel ?? `Llamar ${LANDING_CALLRAIL.display}`}
    >
      {children}
    </a>
  );
}
