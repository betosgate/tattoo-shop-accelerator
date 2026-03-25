import type { Metadata } from "next";
import { SEOHero } from "@/components/seo/hero";
import { SatelliteStrategy } from "@/components/seo/satellite-strategy";
import { SearchExamples } from "@/components/seo/search-examples";
import { BeforeAfter } from "@/components/seo/before-after";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "SEO for Tattoo Shops — 5 Satellite Sites & 200+ Articles",
  description:
    "Dominate every local tattoo search with 5 satellite websites targeting surrounding cities, 200+ long-form SEO articles, and 11 on-site landing pages. See the strategy that puts you on page 1 of Google.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/seo",
  },
};

export default function SEOPage() {
  return (
    <>
      <SEOHero />
      <SatelliteStrategy />
      <SearchExamples />
      <BeforeAfter />
      <CTASection />
    </>
  );
}
