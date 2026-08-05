"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { DOCTORS } from "@/lib/content";

export function Doctors(): React.ReactElement {
  return (
    <Section id="doctors" band="dark">
      <SectionHeading
        eyebrow={DOCTORS.eyebrow}
        title={DOCTORS.heading}
        onDark
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {DOCTORS.list.map((doc, i) => (
          <Reveal key={doc.name} delay={i * 80}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-7 text-center">
              <span
                aria-hidden="true"
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#249c3c] to-[var(--color-accent)] font-display text-2xl font-semibold text-[var(--color-dark)]"
              >
                {doc.initials}
              </span>
              <h3 className="mt-5 font-display text-[22px] leading-snug text-white">
                {doc.name}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-on-dark)]/75">
                {doc.creds}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-[22px] leading-snug text-[var(--color-accent)] md:text-[26px]">
          “{DOCTORS.anchorLine}”
        </p>
        <DualCTA onDark />
      </Reveal>
    </Section>
  );
}
