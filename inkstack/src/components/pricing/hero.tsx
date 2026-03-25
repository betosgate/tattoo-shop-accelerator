"use client";

import { PageHero } from "@/components/page-hero";
import { IMAGES } from "@/lib/images";

export function PricingHero() {
  return (
    <PageHero
      badge="Pricing"
      title="Simple Pricing."
      titleHighlight="Serious Results."
      description="No hidden fees. No long-term contracts. Just a platform that pays for itself in new bookings — usually within the first month."
      backgroundImage={IMAGES.tattooedArm}
    />
  );
}
