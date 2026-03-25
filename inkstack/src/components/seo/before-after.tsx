"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { X, Check } from "lucide-react";

const beforeItems = [
  "1 website competing against every other shop in town",
  "Maybe 5-10 pages total, most with thin content",
  "Relying on Instagram and word of mouth",
  "Invisible to anyone searching outside your immediate area",
  "Generic WordPress template that looks like every other shop",
  "No strategy for surrounding cities or regions",
];

const afterItems = [
  "6 websites creating an SEO moat competitors can't cross",
  "200+ long-form articles ranking for thousands of terms",
  "Organic traffic flowing in 24/7 from Google searches",
  "Dominating search results in 5 surrounding cities",
  "Custom-built platform that runs circles around WordPress",
  "Complete regional coverage with city-specific content",
];

export function BeforeAfter() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="The Difference"
          title="Before & After Tattoo Shop Accelerator"
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <div className="glass-card rounded-xl p-6 border-neon-pink/20">
            <h3 className="text-lg font-bold text-neon-pink mb-4">Before</h3>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="h-4 w-4 text-neon-pink shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="glass-card rounded-xl p-6 border-neon-green/20 border">
            <h3 className="text-lg font-bold text-neon-green mb-4">After</h3>
            <ul className="space-y-3">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-neon-green shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
