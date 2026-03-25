"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Globe, ExternalLink, FileText } from "lucide-react";

const satellites = [
  { name: "Tattoos Rexburg Idaho", domain: "tattoosrexburgidaho.com", url: "https://www.tattoosrexburgidaho.com", theme: "Gold", focus: "Local guide" },
  { name: "Rexburg Tattoo Guide", domain: "rexburgtattooguide.com", url: "https://www.rexburgtattooguide.com", theme: "Slate Blue", focus: "Educational hub" },
  { name: "Tattoos Saint Anthony", domain: "tattoossaintanthonyidaho.com", url: "https://www.tattoossaintanthonyidaho.com", theme: "Sage/Forest", focus: "Nature & outdoor" },
  { name: "Tattoos Idaho Falls", domain: "tattoosidahofallsidaho.com", url: "https://www.tattoosidahofallsidaho.com", theme: "Violet/Cyan", focus: "Trending styles" },
  { name: "Tattoos Rigby Idaho", domain: "tattoosrigbyidaho.com", url: "https://www.tattoosrigbyidaho.com", theme: "Red/Copper", focus: "Heritage & family" },
];

export function SEOCompact() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="SEO Satellite Sites"
          title="5 Additional Websites Included"
          description="Each satellite targets a surrounding city with 39 unique articles, its own brand identity, and CTAs funneling to your booking system. Visit the live examples below."
        />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl divide-y divide-white/5">
            {/* Main site */}
            <a
              href="https://www.synergytattoorexburg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-electric/10 border border-electric/20 shrink-0">
                <Globe className="h-4 w-4 text-electric" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white group-hover:text-electric transition-colors">Synergy Tattoo Rexburg</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-electric/10 text-electric rounded">Main Site</span>
                </div>
                <span className="text-xs text-ink-500">synergytattoorexburg.com</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-ink-500 group-hover:text-electric shrink-0" />
            </a>

            {/* Satellites */}
            {satellites.map((site) => (
              <a
                key={site.domain}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded bg-ink-800 border border-white/10 shrink-0">
                  <FileText className="h-4 w-4 text-ink-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white group-hover:text-electric transition-colors truncate">{site.name}</span>
                    <span className="text-[9px] text-ink-500 hidden sm:inline">{site.focus}</span>
                  </div>
                  <span className="text-xs text-ink-500">{site.domain} &middot; 39 articles &middot; {site.theme} theme</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-ink-500 group-hover:text-electric shrink-0" />
              </a>
            ))}
          </div>

          <p className="text-xs text-ink-500 text-center mt-4">
            Each satellite site has completely unique branding, content, and typography — Google sees 5 independent domains, not copies.
          </p>
        </div>
      </FadeUp>
    </Section>
  );
}
