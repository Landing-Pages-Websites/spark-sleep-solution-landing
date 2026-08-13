"use client";

import { useEffect, useState } from "react";
import { CTA, REQUEST_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";

// Mobile-only sticky bar. FORM-ONLY: zero tel: links here (hard rule). Hidden
// while the hero form or the final form is on screen so it never covers a field.
export function StickyCta(): React.ReactElement {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const request = document.getElementById("request-appointment");
    const targets = [hero, request].filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setShow(visible.size === 0);
      },
      { threshold: 0.05 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white px-4 py-3 transition-transform duration-300 [box-shadow:0_-6px_24px_-12px_rgba(9,26,20,0.35)] lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={REQUEST_ANCHOR}
        tabIndex={show ? undefined : -1}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3.5 text-[17px] font-semibold text-white shadow-cta focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]"
      >
        {CTA.primary}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
      </a>
    </div>
  );
}
