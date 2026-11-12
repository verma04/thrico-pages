import type { Metadata } from "next";
import ClayFooter from "@/components/clay-footer";
import SiteHeader from "@/components/customer-360/site-header";
import Hero from "@/components/customer-360/hero";
import {
  AiCopilotSection,
  BlueBrandBanner,
  RfmSegmentsSection,
  SuperpowersAndHealthScore,
} from "@/components/customer-360/interactive-sections";
import {
  BusinessUseCases,
  DigitalFootprintSection,
  Faq,
} from "@/components/customer-360/sections";

export const metadata: Metadata = {
  title: "Customer 360 · Community Intelligence | Thrico",
  description:
    "An all-in-one digital passport for every member, student, or alumni — combining Engagement Health Scores, 7 Smart Member Categories, unified lifetime impact, and a plain-English AI Assistant.",
};

export default function Customer360Page() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col overflow-x-clip bg-white text-black antialiased selection:bg-blue-600 selection:text-white"
    >
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SuperpowersAndHealthScore />
        <RfmSegmentsSection />
        <BusinessUseCases />
        <AiCopilotSection />
        <DigitalFootprintSection />
        <BlueBrandBanner />
        <Faq />
      </main>
      <ClayFooter
        showPreFooter={true}
        preFooterTitle="Turn every member signal into action."
        preFooterSubtitle="Start with Customer 360."
        primaryCtaText="Book a Demo"
        primaryCtaLink="#demo"
        secondaryCtaText="Get Started Free"
        secondaryCtaLink="#get-started"
        brandBottomName="THRIVING COMMUNITIES"
      />
    </div>
  );
}
