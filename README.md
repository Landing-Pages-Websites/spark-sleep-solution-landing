# Spark Sleep Solutions — Landing Page

Single-route paid-ads landing page for **Spark Sleep Solutions**, served at
`https://explore.sparksleep.com`. Board-certified dental sleep medicine: a custom,
FDA-approved oral appliance for sleep apnea and snoring — positioned positively against
CPAP, never as an attack on it.

## Stack
- Next.js (App Router) + Tailwind CSS v4
- Typography: **Source Serif 4** (display) + **Figtree** (body) via `next/font/google`
- Brand green `#0B8846`, dark ground `#0F2A3F`, lime accent `#B4D86C`

## Structure
One route (`/`) with sections in DOM order:
`#hero` → `#credentials` → `#what-it-is` → `#why-an-appliance` → `#insurance` →
`#doctors` → `#how-it-works` → `#reviews` → `#locations` → `#faq` →
`#request-appointment`, plus a form-only sticky mobile CTA and the footer.

## Lead form
Seven fields (`firstName`, `lastName`, `email`, `phone`, `isAdult`, `insuranceType`,
`reasonForVisit`). A visible hero step-1 card captures fields 1–4; the full form lives at
`#request-appointment`. Both write the same payload.

Qualification (`isAdult === "Yes"` AND insurance in PPO/HMO/Medicare AND reason in sleep
apnea/snoring) drives the ad conversion event **only** — it never blocks submission and is
never surfaced in the UI. Every lead submits successfully and sees the same courteous
confirmation. On success, `MegaTag.trackEvent("form_submit", …)` fires before
`dataLayer.push({ event: "form_submit", … })`; a `qualified_lead` dataLayer event fires
only when all three qualify.

## Content integrity
All copy, stats, and testimonials are verbatim from the client brief / sparksleep.com —
see `content-sources.json`. No aggregate rating, no invented facts, no negative-CPAP
framing, no outcome guarantees, no age-qualifying copy outside the form field.

## Tracking
Mega optimizer + GTM (`GTM-T6PPJSLJ`) + the shared CallTrackingMetrics script + the Meta
Pixel (`1532928708309341`, configured via `MEGA_TAG_CONFIG.pixelId` — the optimizer injects
it). `robots: noindex` — this is an ads LP.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
