"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ExternalLink, FileText, MapPin, TrendingUp } from "lucide-react";

const satellites = [
  {
    name: "Tattoos Rexburg Idaho",
    domain: "tattoosrexburgidaho.com",
    url: "https://www.tattoosrexburgidaho.com",
    city: "Rexburg, ID",
    focus: "Local business guide — shops, pricing, walk-ins, local laws and culture",
    articles: "40+",
    color: "from-electric/20 to-blue-500/20",
  },
  {
    name: "Rexburg Tattoo Guide",
    domain: "rexburgtattooguide.com",
    url: "https://www.rexburgtattooguide.com",
    city: "Rexburg, ID",
    focus: "Educational hub — style encyclopedia, detailed care guides, placement deep-dives",
    articles: "40+",
    color: "from-neon-green/20 to-emerald-500/20",
  },
  {
    name: "Tattoos Saint Anthony",
    domain: "tattoossaintanthonyidaho.com",
    url: "https://www.tattoossaintanthonyidaho.com",
    city: "Saint Anthony, ID",
    focus: "Heritage and traditional focus for rural community values",
    articles: "40+",
    color: "from-neon-pink/20 to-rose-500/20",
  },
  {
    name: "Tattoos Idaho Falls",
    domain: "tattoosidahofallsidaho.com",
    url: "https://www.tattoosidahofallsidaho.com",
    city: "Idaho Falls, ID",
    focus: "Trending styles for the largest nearby urban market",
    articles: "40+",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    name: "Tattoos Rigby",
    domain: "tattoosrigbyidaho.com",
    url: "https://www.tattoosrigbyidaho.com",
    city: "Rigby, ID",
    focus: "Community-focused content with local area guides",
    articles: "40+",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

const articleTopics = [
  "Best Tattoo Styles for First Timers",
  "Traditional vs. Neo-Traditional: Complete Guide",
  "Fine Line Tattoo Care: What You Need to Know",
  "Tattoo Pain Chart: Every Body Area Ranked",
  "How to Choose the Right Tattoo Artist",
  "Watercolor Tattoos: Pros, Cons & What to Expect",
  "Tattoo Aftercare Day-by-Day Timeline",
  "Geometric Tattoo Inspiration & Placement Guide",
  "What to Expect at Your First Tattoo Appointment",
  "Cover-Up Tattoos: Everything You Need to Know",
  "Tattoo Pricing Guide: How Much Will It Cost?",
  "Japanese Tattoo Meanings & Symbolism",
];

export function SEOShowcase() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Live SEO Satellites"
          title="5 Satellite Sites. 200+ Articles. See Them All."
          description="Each satellite site has its own unique brand, targets a different city, and contains 40+ long-form articles. Every article funnels readers back to the studio's booking system. Visit them yourself."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {satellites.map((site) => (
          <StaggerItem key={site.domain}>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-xl overflow-hidden group hover:border-electric/20 transition-all h-full"
            >
              <div className={`h-24 bg-gradient-to-br ${site.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white/80">{site.domain}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white group-hover:text-electric transition-colors">
                    {site.name}
                  </h3>
                  <ExternalLink className="h-3 w-3 text-ink-500" />
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="h-3 w-3 text-ink-500" />
                  <span className="text-xs text-ink-400">{site.city}</span>
                </div>
                <p className="text-xs text-ink-400 leading-relaxed">{site.focus}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <FileText className="h-3 w-3 text-electric" />
                  <span className="text-xs text-electric">{site.articles} articles</span>
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Article topics sample */}
      <FadeUp delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-white text-center mb-4">
            Sample Article Topics (from the 200+ written for this studio)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {articleTopics.map((topic) => (
              <div key={topic} className="flex items-start gap-2 text-sm text-ink-300 bg-ink-800/50 rounded-lg px-3 py-2 border border-white/5">
                <TrendingUp className="h-3.5 w-3.5 text-neon-green shrink-0 mt-0.5" />
                {topic}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-ink-500 mt-4">
            Each article is 1,500-2,500 words, SEO-optimized, and contains booking CTAs
          </p>
        </div>
      </FadeUp>
    </Section>
  );
}
