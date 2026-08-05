"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { INSURANCE } from "@/lib/content";

export function Insurance(): React.ReactElement {
  return (
    <Section id="insurance" band="light">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow={INSURANCE.eyebrow} title={INSURANCE.heading} />
          <div className="mt-5 space-y-4">
            {INSURANCE.body.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-[18px] leading-relaxed text-[var(--color-muted)]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-6" delay={80}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
            <p className="text-[15px] font-semibold uppercase tracking-[0.1em] text-[var(--color-link)]">
              Plans we work with
            </p>
            {/* Grayscale logos, full color on hover; horizontally scrollable on mobile */}
            <div className="no-scrollbar mt-6 flex gap-8 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 sm:overflow-visible sm:pb-0">
              {INSURANCE.insurers.map((ins) => (
                <div
                  key={ins.name}
                  className="flex shrink-0 items-center justify-center sm:shrink"
                >
                  <Image
                    src={ins.src}
                    alt={ins.name}
                    width={140}
                    height={40}
                    className="h-9 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-[var(--color-border)] pt-5 text-[15px] leading-relaxed text-[var(--color-muted)]">
              {INSURANCE.caption}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <DualCTA primaryLabel={INSURANCE.cta} />
      </Reveal>
    </Section>
  );
}
