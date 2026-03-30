import type { Metadata } from "next";
import { AIDesignStudioHero } from "@/components/ai-design-studio/hero";
import { HowItWorks } from "@/components/ai-design-studio/how-it-works";
import { GalleryFeatures } from "@/components/ai-design-studio/gallery-features";
import { PricingSection } from "@/components/ai-design-studio/pricing";
import { CompetitiveEdge } from "@/components/ai-design-studio/competitive-edge";
import { ShopControls } from "@/components/ai-design-studio/shop-controls";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "AI Tattoo Design Studio — Generate Custom Designs & Book Instantly",
  description:
    "The only AI tattoo design tool that lives on your website and connects directly to your booking calendar. 20 styles, body placement awareness, real-time pricing, and one-click booking. $15 per design pack, $10 profit per sale.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/ai-design-studio",
  },
};

export default function AIDesignStudioPage() {
  return (
    <>
      <AIDesignStudioHero />
      <HowItWorks />
      <GalleryFeatures />
      <PricingSection />
      <CompetitiveEdge />
      <ShopControls />
      <CTASection />
    </>
  );
}
