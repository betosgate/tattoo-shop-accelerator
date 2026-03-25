import type { Metadata } from "next";
import { SEOHero } from "@/components/seo/hero";
import { SatelliteStrategy } from "@/components/seo/satellite-strategy";
import { SearchExamples } from "@/components/seo/search-examples";
import { BeforeAfter } from "@/components/seo/before-after";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "SEO Results",
  description:
    "5 satellite websites, 200+ articles, and total local search domination. See how InkStack's SEO strategy works.",
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
