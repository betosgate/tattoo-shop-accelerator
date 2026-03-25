import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/hero";
import { PricingCards } from "@/components/pricing/cards";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingFAQ } from "@/components/pricing/faq";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Pricing — Complete Tattoo Shop Platform for $5,000 + $249/mo Hosting",
  description:
    "One platform, one price. $5,000 for the complete build (or $1,250/mo × 4). Save 10% paying upfront. Includes 6 websites, 200+ SEO articles, booking, CRM, payments, and referral program. $249/mo hosting. No contracts.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/pricing",
  },
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
