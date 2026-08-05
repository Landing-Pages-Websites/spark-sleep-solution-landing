"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Section } from "@/components/Section";
import { Icon } from "@/components/icons";
import { FAQ } from "@/lib/content";

export function Faq(): React.ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" band="light">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">Before you book</p>
          <h2 className="h2 mt-3 text-[var(--color-text)]">Questions patients ask us</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-[var(--color-primary)] bg-white shadow-card"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:p-6"
                    >
                      <span className="font-display text-[19px] leading-snug text-[var(--color-text)] md:text-[21px]">
                        {item.q}
                      </span>
                      <Icon
                        name="plus"
                        className={`mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-[17px] leading-relaxed text-[var(--color-muted)] md:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <DualCTA />
        </Reveal>
      </div>
    </Section>
  );
}
