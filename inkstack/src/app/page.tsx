import { HeroSection } from "@/components/home/hero";
import { ProblemSection } from "@/components/home/problem";
import { StatsSection } from "@/components/home/stats";
import { FeaturesSection } from "@/components/home/features";
import { PlatformShowcase } from "@/components/home/platform-showcase";
import { TestimonialsSection } from "@/components/home/testimonials";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FAQSection } from "@/components/home/faq";
import { CTASection } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <FeaturesSection />
      <PlatformShowcase />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
