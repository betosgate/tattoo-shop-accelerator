"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function DemoHero() {
  return (
    <PageHero
      badge="Live Product Walkthrough"
      title="Don't Take Our Word For It."
      titleHighlight="See Exactly What You're Getting."
      description="Walk through every feature of a real, live Tattoo Shop Accelerator deployment. This isn't a mockup — it's the actual platform running for a real studio right now."
      backgroundImage={IMAGES.heroTattooSession}
    />
  );
}
