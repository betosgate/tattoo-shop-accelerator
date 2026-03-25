"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function FeaturesHero() {
  return (
    <PageHero
      badge="Features"
      title="Built for Tattoo Shops."
      titleHighlight="Not Adapted From Generic Software."
      description="Every feature was designed from scratch for how tattoo studios actually work — from the receptionist desk to the artist chair."
      backgroundImage={IMAGES.artistWorking1}
    />
  );
}
