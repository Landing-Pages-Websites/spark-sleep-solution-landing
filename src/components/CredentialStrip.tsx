"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section } from "@/components/Section";
import { Icon } from "@/components/icons";
import { CREDENTIALS } from "@/lib/content";

export function CredentialStrip(): React.ReactElement {
  return (
    <Section id="credentials" band="tint">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <p className="eyebrow">The credentials</p>
        <h2 className="h2 mt-3 text-[var(--color-text)]">
          Specialists in sleep medicine, not a general dental office
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CREDENTIALS.map((item, i) => (
          <Reveal key={item.label} delay={i * 70}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-[var(--color-border)] bg-white px-5 py-7 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon name={item.icon} className="h-8 w-8" />
              </span>
              <p className="mt-4 font-display text-[26px] font-semibold leading-none text-[var(--color-text)]">
                {item.value}
              </p>
              <p className="mt-2 text-[15px] leading-snug text-[var(--color-muted)]">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <DualCTA />
      </Reveal>
    </Section>
  );
}
