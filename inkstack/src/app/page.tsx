import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero";
import { ProblemSection } from "@/components/home/problem";
import { StatsSection } from "@/components/home/stats";
import { FeaturesSection } from "@/components/home/features";
import { PlatformShowcase } from "@/components/home/platform-showcase";
import { GallerySection } from "@/components/home/gallery";
import { TestimonialsSection } from "@/components/home/testimonials";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FAQSection } from "@/components/home/faq";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Tattoo Shop Accelerator — Booking, CRM, Payments & SEO Platform for Tattoo Studios",
  description:
    "The complete digital platform for tattoo studios: online booking with Stripe deposits, tattoo CRM with session tracking, 3 role-based dashboards, digital consent forms, referral programs, portfolio galleries, and 6 SEO-optimized websites with 200+ articles. Done for you in 3 weeks.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <FeaturesSection />
      <PlatformShowcase />
      <GallerySection />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
