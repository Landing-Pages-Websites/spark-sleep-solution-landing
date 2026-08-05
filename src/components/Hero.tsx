"use client";

import Image from "next/image";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { HERO, PHONE, PHONE_HREF } from "@/lib/content";

const TRUST_CHIPS = ["DABDSM & ASBA board-certified", "5,000+ patients treated"];

export function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--color-dark)] pt-4 pb-12 md:pt-16 md:pb-20"
    >
      {/* Full-bleed morning photo under a navy→green gradient scrim */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-morning.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)]/92 via-[var(--color-dark)]/80 to-[var(--color-dark-deep)]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid max-w-[1320px] items-center gap-5 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow on-dark">{HERO.eyebrow}</p>
          <h1 className="h1 mt-2.5 max-w-2xl text-white md:mt-3">{HERO.h1}</h1>
          <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-[var(--color-on-dark)]/85 md:mt-4 md:text-[18px]">
            {HERO.subhead}
          </p>

          {/* Compact tel link — kept small on mobile so the form card clears the fold */}
          <a
            href={PHONE_HREF}
            className="mt-3 inline-flex items-center gap-2 rounded-md px-1 text-[17px] font-semibold text-white transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:mt-6 md:rounded-xl md:border-[1.5px] md:border-white/35 md:px-5 md:py-3 md:hover:border-white md:hover:bg-white/10 md:hover:text-white"
            aria-label={`Call Spark Sleep Solutions at ${PHONE}`}
          >
            <Icon
              name="phone"
              className="h-[18px] w-[18px] text-[var(--color-accent)]"
              strokeWidth={0}
              fill="currentColor"
            />
            <span>
              <span className="mr-1.5 font-normal text-white/60">{HERO.phoneLead}</span>
              {PHONE}
            </span>
          </a>

          <ul className="mt-7 hidden flex-wrap gap-x-6 gap-y-2 sm:flex">
            {TRUST_CHIPS.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-on-dark)]/80"
              >
                <Icon
                  name="check"
                  className="h-4 w-4 text-[var(--color-accent)]"
                  strokeWidth={2.6}
                />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Form — no reveal animation; visible immediately */}
        <div className="lg:col-span-5">
          <FormCard
            variant="hero"
            idPrefix="hero"
            onDark
            eyebrow="Request your appointment"
            heading="Start with a few details"
          />
        </div>
      </div>
    </section>
  );
}
