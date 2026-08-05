import Image from "next/image";
import { BRAND, CURRENT_YEAR, FOOTER, PHONE, PHONE_HREF, REQUEST_ANCHOR, CTA } from "@/lib/content";
import { Icon } from "@/components/icons";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]/75">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Image
              src="/logo-white.png"
              alt="Spark Sleep Solutions"
              width={732}
              height={218}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-[16px] leading-relaxed">{FOOTER.descriptor}</p>
            <a
              href={REQUEST_ANCHOR}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-[16px] font-semibold text-white shadow-cta transition-all hover:bg-[var(--color-primary-hover)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-dark)]"
            >
              {CTA.primary}
              <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>

          <div className="md:text-right">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 font-display text-[26px] font-semibold text-white transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-md md:justify-end"
              aria-label={`Call Spark Sleep Solutions at ${PHONE}`}
            >
              <Icon
                name="phone"
                className="h-6 w-6 text-[var(--color-accent)]"
                strokeWidth={0}
                fill="currentColor"
              />
              {PHONE}
            </a>
            <p className="mt-4 text-[15px] leading-relaxed md:ml-auto md:max-w-xs">
              {FOOTER.summary}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[14px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {CURRENT_YEAR} {BRAND.company}. All rights reserved.
          </p>
          <a
            href={BRAND.privacyUrl}
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
