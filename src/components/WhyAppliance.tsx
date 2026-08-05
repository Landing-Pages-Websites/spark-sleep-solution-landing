"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { Icon } from "@/components/icons";
import { WHY_APPLIANCE } from "@/lib/content";

export function WhyAppliance(): React.ReactElement {
  return (
    <Section id="why-an-appliance" band="tint">
      <SectionHeading
        eyebrow={WHY_APPLIANCE.eyebrow}
        title={WHY_APPLIANCE.heading}
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {WHY_APPLIANCE.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 60}>
            <article className="group h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-[21px] leading-snug text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="mt-2.5 text-[17px] leading-relaxed text-[var(--color-muted)]">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <DualCTA />
      </Reveal>
    </Section>
  );
}
