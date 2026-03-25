import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/hero";
import { ProcessTimeline } from "@/components/how-it-works/timeline";
import { WhatYouProvide } from "@/components/how-it-works/what-you-provide";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "How It Works — From Setup to Search Domination in 3 Weeks",
  description:
    "Discovery call, platform setup, 200+ SEO articles written, 6 websites launched, and bookings rolling in. See the step-by-step process of getting your tattoo studio's digital platform live.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessTimeline />
      <WhatYouProvide />
      <CTASection />
    </>
  );
}
