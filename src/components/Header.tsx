import Image from "next/image";
import Link from "next/link";
import { CTA, PHONE, PHONE_HREF, REQUEST_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";

// Solid white sticky header. The logo is a dark-ink wordmark, so the bar must
// stay light at scroll=0 — never transparent over the dark hero. No nav links:
// this is a single-goal landing page.
export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-5 py-3 md:px-8">
        <Link
          href="#hero"
          aria-label="Spark Sleep Solutions home"
          className="flex max-w-[190px] shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:max-w-none"
        >
          <Image
            src="/logo.png"
            alt="Spark Sleep Solutions"
            width={732}
            height={218}
            priority
            className="h-9 w-auto object-contain md:h-11"
          />
        </Link>

        <div className="flex items-center gap-2.5 md:gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[var(--color-border)] bg-white px-3.5 py-2.5 text-[15px] font-semibold text-[var(--color-dark)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-link)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label={`Call Spark Sleep Solutions at ${PHONE}`}
          >
            <Icon
              name="phone"
              className="h-4 w-4 text-[var(--color-primary)]"
              strokeWidth={0}
              fill="currentColor"
            />
            <span className="whitespace-nowrap">{PHONE}</span>
          </a>
          <a
            href={REQUEST_ANCHOR}
            className="hidden items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-[15px] font-semibold text-white shadow-cta transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-cta-hover hover:-translate-y-px focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 sm:inline-flex"
          >
            {CTA.primary}
            <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
