"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function SEOHero() {
  return (
    <PageHero
      badge="SEO Strategy"
      title="Imagine Owning Page 1 of Google"
      titleHighlight="for Every Tattoo Search in Your Area"
      description="5 satellite websites. 200+ articles. Total local search domination that your competitors simply can't match."
      backgroundImage={IMAGES.tattooDetail1}
    />
  );
}
