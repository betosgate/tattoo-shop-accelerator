"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Globe, FileText, Target, TrendingUp, Zap } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "5 Websites Beat 1 Website",
    description: "Google sees 5 different authoritative domains all pointing to your booking system. That's 5x the chances to rank for any given search term.",
  },
  {
    icon: FileText,
    title: "200+ Content Pieces",
    description: "Each satellite site has 40+ long-form articles (1,500-2,500 words). That's 200+ indexed pages competing for thousands of search terms in your area.",
  },
  {
    icon: Target,
    title: "City-by-City Targeting",
    description: "Each satellite site targets a different surrounding city within a 15-30 minute drive. You're not just ranking in your city — you're owning the entire region.",
  },
  {
    icon: TrendingUp,
    title: "Compounding SEO Moat",
    description: "Every month, your content ages and gains authority. A competitor starting from scratch would need years and tens of thousands of dollars to match your coverage.",
  },
  {
    icon: Zap,
    title: "Every Article Sells",
    description: "No fluff content. Every article contains strategic CTAs that funnel readers to your main site's booking system. Content that ranks AND converts.",
  },
];

const siteTypes = [
  {
    name: "Site 1: Local Business Guide",
    example: '"Tattoos [Your City]"',
    focus: "Shop guides, pricing info, walk-in policies, local tattoo laws",
    color: "electric",
  },
  {
    name: "Site 2: Educational Hub",
    example: '"[City] Tattoo Guide"',
    focus: "Style encyclopedia, deep-dive care guides, tattoo culture",
    color: "neon-green",
  },
  {
    name: "Site 3: Trending Styles",
    example: '"Tattoos [Nearby City]"',
    focus: "Trending styles for urban markets, celebrity tattoo breakdowns",
    color: "neon-pink",
  },
  {
    name: "Site 4: Heritage Focus",
    example: '"Tattoos [Small Town]"',
    focus: "Traditional styles, cultural connections, community values",
    color: "electric",
  },
  {
    name: "Site 5: Lifestyle",
    example: '"Tattoos [Outdoor Town]"',
    focus: "Nature/adventure-themed content for outdoor lifestyle areas",
    color: "neon-green",
  },
];

export function SatelliteStrategy() {
  return (
    <>
      <Section>
        <FadeUp>
          <SectionHeader
            badge="The Strategy"
            title="Why 5 Separate Websites?"
            description="One website competes. Six websites dominate. Here's the math behind our satellite site strategy."
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mb-4">
                  <reason.icon className="h-5 w-5 text-electric" />
                </div>
                <h3 className="text-base font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm text-ink-400 leading-relaxed">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section className="bg-ink-900/30">
        <FadeUp>
          <SectionHeader
            badge="5 Unique Sites"
            title="Each Satellite Has Its Own Identity"
            description="Different branding, different personality, different city — all funneling clients to your booking system."
          />
        </FadeUp>

        <StaggerContainer className="space-y-4 max-w-3xl mx-auto">
          {siteTypes.map((site) => (
            <StaggerItem key={site.name}>
              <div className="glass-card rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">{site.name}</h3>
                    <p className="text-sm text-electric font-mono mt-1">{site.example}</p>
                  </div>
                  <p className="text-sm text-ink-400 sm:max-w-xs">{site.focus}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
