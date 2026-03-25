import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/hero";
import { ProcessTimeline } from "@/components/how-it-works/timeline";
import { WhatYouProvide } from "@/components/how-it-works/what-you-provide";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From discovery call to launch in 2-3 weeks. See the step-by-step process of getting your InkStack platform live.",
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
