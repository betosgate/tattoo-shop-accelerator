import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/hero";
import { FeatureCategories } from "@/components/features/categories";
import { ComparisonSection } from "@/components/features/comparison";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Online booking, Stripe payments, tattoo-specific CRM, SEO satellite sites, referral programs, and more. See every feature InkStack offers.",
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeatureCategories />
      <ComparisonSection />
      <CTASection />
    </>
  );
}
