import type { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About — Built by a Tattoo Shop Owner & 20-Year Digital Marketing Expert",
  description:
    "Tattoo Shop Accelerator was built by Beto Paredes — co-owner of Synergy Tattoo and a digital marketing expert with 300+ websites launched, 2000+ projects delivered, and 20 years of SEO experience.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <CTASection />
    </>
  );
}
