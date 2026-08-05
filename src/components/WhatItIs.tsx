"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { WHAT_IT_IS } from "@/lib/content";

export function WhatItIs(): React.ReactElement {
  return (
    <Section id="what-it-is" band="light">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-[var(--color-border)]">
            <Image
              src="/images/oral-appliance.jpg"
              alt={WHAT_IT_IS.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <SectionHeading eyebrow={WHAT_IT_IS.eyebrow} title={WHAT_IT_IS.heading} />
          <div className="mt-5 space-y-4">
            {WHAT_IT_IS.body.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p
                  className={`text-[18px] leading-relaxed ${
                    i === WHAT_IT_IS.body.length - 1
                      ? "border-l-2 border-[var(--color-accent)] pl-5 font-medium text-[var(--color-text)]"
                      : "text-[var(--color-muted)]"
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <DualCTA align="start" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
