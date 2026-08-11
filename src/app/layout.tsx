import type { Metadata } from "next";
import { Source_Serif_4, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display-active",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (real Spark values — Meta Pixel authorized 2026-08-11)
const SITE_KEY = "e0l9cid0feq22q6a";
const SITE_ID = "863c790a-8435-4bf8-a06f-09fdc965be15";
const GTM_ID = "GTM-T6PPJSLJ";
const META_PIXEL_ID = "1532928708309341";

export const metadata: Metadata = {
  metadataBase: new URL("https://explore.sparksleep.com"),
  title:
    "Sleep Apnea Treatment Without the Mask | Spark Sleep Solutions — San Jose, San Ramon & Sunnyvale",
  description:
    "Board-certified dental sleep medicine in the Bay Area. A custom, FDA-approved oral appliance for sleep apnea and snoring — no masks, no cords, no noise. We accept most PPO, HMO, and Medicare plans and verify your benefits for you.",
  openGraph: {
    title: "Sleep Apnea Treatment Without the Mask | Spark Sleep Solutions",
    description:
      "A custom, FDA-approved oral appliance worn at night — made and adjusted by doctors who treat only sleep apnea and snoring. Six Bay Area locations.",
    images: ["/images/hero-morning.jpg"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: false, follow: false }, // ads LP — not indexed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}",pixelId:"${META_PIXEL_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          id="mega-tag-config"
          dangerouslySetInnerHTML={{ __html: megaTagConfig }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
        {/* CallTrackingMetrics — universal Mega account (never remove) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
