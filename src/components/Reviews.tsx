"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { Icon } from "@/components/icons";
import { REVIEWS } from "@/lib/content";

function Stars({ count }: { count: number }): React.ReactElement {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className="h-4 w-4 text-[var(--color-primary)]"
          strokeWidth={0}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export function Reviews(): React.ReactElement {
  return (
    <Section id="reviews" band="light">
      <SectionHeading
        eyebrow="Patient reviews"
        title="In their own words — including a physician who chose us"
        align="center"
      />

      <div className="mt-12 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={`${r.name}-${i}`} delay={(i % 3) * 60} className="mb-5 break-inside-avoid">
            <figure className="rounded-2xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] bg-white p-6 shadow-card">
              <Stars count={r.stars} />
              <blockquote className="mt-4 text-[17px] leading-relaxed text-[var(--color-text)]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-[15px] text-[var(--color-muted)]">
                <span className="font-semibold text-[var(--color-text)]">{r.name}</span>
                {`, ${r.city} · ${r.stars}-star review on ${r.platform}`}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <DualCTA />
      </Reveal>
    </Section>
  );
}
