import type { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by people who understand the tattoo industry. Learn the story behind InkStack.",
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
