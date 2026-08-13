"use client";

import { CTA, PHONE, PHONE_HREF, REQUEST_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";

interface DualCTAProps {
  align?: "start" | "center";
  primaryLabel?: string;
  /** Use on the dark navy band: lightens the secondary phone link. */
  onDark?: boolean;
}

// Every content section closes with this: a primary button that scrolls to the
// form, and a secondary phone text link. Phone links are allowed everywhere
// EXCEPT the sticky mobile bar.
export function DualCTA({
  align = "center",
  primaryLabel = CTA.primary,
  onDark = false,
}: DualCTAProps): React.ReactElement {
  const justify = align === "start" ? "sm:justify-start" : "sm:justify-center";
  const phoneColor = onDark
    ? "text-[var(--color-on-dark)] hover:text-white"
    : "text-[var(--color-link)] hover:text-[var(--color-primary-active)]";

  return (
    <div
      className={`mt-10 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row ${justify}`}
    >
      <a
        href={REQUEST_ANCHOR}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-7 py-4 text-[17px] font-semibold text-white shadow-cta transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-cta-hover hover:-translate-y-px active:translate-y-0 active:bg-[var(--color-primary-active)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      >
        {primaryLabel}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
      </a>
      <a
        href={PHONE_HREF}
        className={`inline-flex items-center gap-2 text-[17px] font-semibold ${phoneColor} rounded-md px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]`}
        aria-label={`Call Spark Sleep Solutions at ${PHONE}`}
      >
        <Icon name="phone" className="h-[18px] w-[18px]" strokeWidth={0} fill="currentColor" />
        Or call {PHONE}
      </a>
    </div>
  );
}
