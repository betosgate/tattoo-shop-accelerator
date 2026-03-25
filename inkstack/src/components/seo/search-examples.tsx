"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Search } from "lucide-react";

const searchTerms = [
  "tattoo shop near me",
  "best tattoo artist [city]",
  "fine line tattoo [city]",
  "tattoo prices [city]",
  "custom tattoo design [city]",
  "traditional tattoo [nearby city]",
  "tattoo aftercare guide",
  "watercolor tattoo [city]",
  "tattoo consultation [city]",
  "walk-in tattoo [city]",
  "sleeve tattoo ideas [city]",
  "geometric tattoo artist [city]",
  "tattoo removal alternatives [city]",
  "first tattoo tips [city]",
  "tattoo placement guide",
  "realism tattoo [nearby city]",
  "small tattoo ideas for women [city]",
  "japanese tattoo artist [city]",
  "tattoo cover up specialist [city]",
  "best rated tattoo shop [city]",
];

export function SearchExamples() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Search Terms"
          title="Searches You'll Rank For"
          description="These are just 20 of the thousands of search terms our 200+ articles target. Every one of these searches is a potential booking."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {searchTerms.map((term) => (
          <StaggerItem key={term}>
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-ink-800/50 border border-white/5 hover:border-electric/20 transition-colors">
              <Search className="h-3.5 w-3.5 text-ink-500 shrink-0" />
              <span className="text-sm text-ink-300 truncate">{term}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
