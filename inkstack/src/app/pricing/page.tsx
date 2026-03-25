import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/hero";
import { PricingCards } from "@/components/pricing/cards";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingFAQ } from "@/components/pricing/faq";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Pricing — Tattoo Shop Website & SEO Packages from $249/mo",
  description:
    "Starter ($249/mo), Growth ($349/mo), and Domination ($449/mo) plans. Includes tattoo studio website, booking system, Stripe payments, CRM, and up to 5 SEO satellite sites with 200+ articles. No contracts.",
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
