"use client";

import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Section } from "@/components/Section";
import { Icon } from "@/components/icons";
import { REQUEST, PHONE, PHONE_HREF } from "@/lib/content";

export function RequestAppointment(): React.ReactElement {
  return (
    <Section id="request-appointment" band="tint">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5 lg:pt-6">
          <p className="eyebrow">{REQUEST.eyebrow}</p>
          <h2 className="h2 mt-3 text-[var(--color-text)]">{REQUEST.heading}</h2>
          <p className="mt-5 text-[18px] leading-relaxed text-[var(--color-muted)]">
            {REQUEST.subheading}
          </p>

          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <p className="text-[15px] text-[var(--color-muted)]">{REQUEST.altPathLead}</p>
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex items-center gap-3 font-display text-[28px] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-link)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:text-[32px]"
              aria-label={`Call Spark Sleep Solutions at ${PHONE}`}
            >
              <Icon
                name="phone"
                className="h-6 w-6 text-[var(--color-primary)]"
                strokeWidth={0}
                fill="currentColor"
              />
              {PHONE}
            </a>
            <p className="mt-4 flex items-center gap-2 text-[15px] text-[var(--color-muted)]">
              <Icon
                name="check"
                className="h-4 w-4 text-[var(--color-primary)]"
                strokeWidth={2.5}
              />
              We verify your insurance benefits before your visit.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <FormCard variant="full" idPrefix="request" />
        </div>
      </div>
    </Section>
  );
}
