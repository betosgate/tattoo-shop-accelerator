"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function ContactHero() {
  return (
    <PageHero
      badge="Let's Talk"
      title="Ready to"
      titleHighlight="Accelerate Your Studio?"
      description="Book a free 30-minute demo. No sales pitch — just a real conversation about what this platform can do for your shop."
      backgroundImage={IMAGES.gettingTattooed1}
    />
  );
}
