"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { Icon } from "@/components/icons";
import { HOW_IT_WORKS, CTA } from "@/lib/content";

export function HowItWorks(): React.ReactElement {
  return (
    <Section id="how-it-works" band="tint">
      <SectionHeading
        eyebrow={HOW_IT_WORKS.eyebrow}
        title={HOW_IT_WORKS.heading}
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 70}>
            <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] font-display text-lg font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[20px] leading-snug text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-[var(--color-muted)]">
                {step.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl ring-1 ring-[var(--color-border)]">
            <Image
              src="/images/consultation.jpg"
              alt={HOW_IT_WORKS.imageAlt}
              fill
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={80}>
          <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8">
            <h3 className="font-display text-[21px] text-[var(--color-text)]">
              {HOW_IT_WORKS.bringHeading}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {HOW_IT_WORKS.bring.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <span className="text-[17px] leading-relaxed text-[var(--color-muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <DualCTA primaryLabel={CTA.secondary} />
      </Reveal>
    </Section>
  );
}
