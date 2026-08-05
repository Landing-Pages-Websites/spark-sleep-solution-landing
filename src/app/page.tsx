"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CredentialStrip } from "@/components/CredentialStrip";
import { WhatItIs } from "@/components/WhatItIs";
import { WhyAppliance } from "@/components/WhyAppliance";
import { Insurance } from "@/components/Insurance";
import { Doctors } from "@/components/Doctors";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { Locations } from "@/components/Locations";
import { Faq } from "@/components/Faq";
import { RequestAppointment } from "@/components/RequestAppointment";
import { StickyCta } from "@/components/StickyCta";
import { SiteFooter } from "@/components/SiteFooter";
import { TRACKING } from "@/lib/content";

export default function Page(): React.ReactElement {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
  });

  return (
    <main className="overflow-x-hidden bg-white">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <CredentialStrip />
      <WhatItIs />
      <WhyAppliance />
      <Insurance />
      <Doctors />
      <HowItWorks />
      <Reviews />
      <Locations />
      <Faq />
      <RequestAppointment />
      <SiteFooter />
      <StickyCta />
    </main>
  );
}
