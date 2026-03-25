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
  title: "Tattoo Shop Accelerator — Websites, SEO & Booking for Tattoo Studios",
  description:
    "Get 6 professional websites, 200+ SEO articles, online booking with Stripe, a tattoo-specific CRM, digital consent forms, and a referral program — all built for your tattoo studio. Done for you in 3 weeks.",
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
