import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/hero";
import { FeatureCategories } from "@/components/features/categories";
import { ComparisonSection } from "@/components/features/comparison";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Features — Booking, CRM, Payments & SEO for Tattoo Shops",
  description:
    "Online booking with Stripe deposits, tattoo-specific CRM with session tracking, 3 role-based dashboards, digital consent forms, referral programs, portfolio galleries, and 200+ SEO articles. See every feature.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/features",
  },
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
