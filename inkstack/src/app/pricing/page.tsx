import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/hero";
import { PricingCards } from "@/components/pricing/cards";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingFAQ } from "@/components/pricing/faq";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for every studio size. Starter, Growth, and Domination plans with no hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <PricingFAQ />
      <CTASection />
    </>
  );
}
