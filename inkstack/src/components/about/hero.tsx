"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function AboutHero() {
  return (
    <PageHero
      badge="About Us"
      title="Built by Someone Who"
      titleHighlight="Owns a Tattoo Shop"
      description="This isn't some Silicon Valley startup that thinks they understand your business. Tattoo Shop Accelerator was built from inside the industry, by someone who runs one."
      backgroundImage={IMAGES.artistWorking2}
    />
  );
}
