"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function HowItWorksHero() {
  return (
    <PageHero
      badge="How It Works"
      title="From Zero to"
      titleHighlight="Search Domination in 3 Weeks"
      description="We handle everything. You provide your portfolio and business info, we build your entire digital empire."
      backgroundImage={IMAGES.studioInterior}
    />
  );
}
