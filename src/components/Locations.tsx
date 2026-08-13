"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section, SectionHeading } from "@/components/Section";
import { Icon } from "@/components/icons";
import { LOCATIONS } from "@/lib/content";

export function Locations(): React.ReactElement {
  return (
    <Section id="locations" band="tint">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="order-last lg:order-first lg:col-span-5">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl ring-1 ring-[var(--color-border)]">
            <Image
              src="/images/bay-area-office.jpg"
              alt={LOCATIONS.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow={LOCATIONS.eyebrow} title={LOCATIONS.heading} />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {LOCATIONS.list.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="map-pin"
                      className="h-5 w-5 text-[var(--color-primary)]"
                    />
                    <h3 className="font-display text-[20px] text-[var(--color-text)]">
                      {loc.city}
                    </h3>
                  </div>
                  {loc.address ? (
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      {loc.address}
                    </p>
                  ) : (
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                      Bay Area location. Address confirmed when you book.
                    </p>
                  )}
                  <p className="mt-3 flex items-start gap-2 border-t border-[var(--color-border)] pt-3 text-[14px] leading-snug text-[var(--color-muted)]">
                    <Icon
                      name="clock"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-muted-soft)]"
                    />
                    {LOCATIONS.hours}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="mt-6 text-[17px] font-medium text-[var(--color-text)]">
              {LOCATIONS.closing}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={120}>
        <DualCTA />
      </Reveal>
    </Section>
  );
}
