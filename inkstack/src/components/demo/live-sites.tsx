"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ExternalLink, Globe, FileText, TrendingUp } from "lucide-react";

const liveSites = [
  {
    name: "Synergy Tattoo Rexburg",
    url: "https://www.synergytattoorexburg.com",
    type: "Main Studio Website",
    description: "The complete studio website with booking, portfolio, consent forms, admin dashboard, referral program, and full shopping cart system.",
    color: "electric",
    features: ["Online Booking", "Shopping Cart", "Portfolio Gallery", "Consent Forms", "Admin Dashboard", "Stripe Payments"],
    articles: null,
  },
  {
    name: "Tattoos Rexburg Idaho",
    url: "https://www.tattoosrexburgidaho.com",
    type: "SEO Satellite #1",
    description: "Local business guide targeting Rexburg — covers shops, pricing, walk-in policies, and local tattoo culture.",
    color: "neon-green",
    features: ["Local Search Targeting", "Booking CTAs", "Unique Branding"],
    articles: "39",
  },
  {
    name: "Rexburg Tattoo Guide",
    url: "https://www.rexburgtattooguide.com",
    type: "SEO Satellite #2",
    description: "Educational resource hub — deep-dive style guides, tattoo care encyclopedia, and placement guides for the Rexburg market.",
    color: "neon-pink",
    features: ["Style Guides", "Aftercare Content", "Booking CTAs"],
    articles: "39",
  },
  {
    name: "Tattoos Saint Anthony Idaho",
    url: "https://www.tattoossaintanthonyidaho.com",
    type: "SEO Satellite #3",
    description: "Targeting Saint Anthony and surrounding rural communities with heritage and traditional tattoo focus.",
    color: "electric",
    features: ["Rural Market Focus", "Traditional Styles", "Booking CTAs"],
    articles: "39",
  },
  {
    name: "Tattoos Idaho Falls Idaho",
    url: "https://www.tattoosidahofallsidaho.com",
    type: "SEO Satellite #4",
    description: "Targeting Idaho Falls — the largest nearby city. Trending styles focus for the urban market.",
    color: "neon-green",
    features: ["Urban Market Focus", "Trending Styles", "Booking CTAs"],
    articles: "39",
  },
  {
    name: "Tattoos Rigby Idaho",
    url: "https://www.tattoosrigbyidaho.com",
    type: "SEO Satellite #5",
    description: "Targeting Rigby and Jefferson County with community-focused tattoo content and local area guides.",
    color: "neon-pink",
    features: ["Community Focus", "Local Guides", "Booking CTAs"],
    articles: "39",
  },
];

export function LiveSitesShowcase() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Live Right Now"
          title="6 Real Websites. See Them Yourself."
          description="These aren't mockups or screenshots. Click any link below to visit the actual, live websites running for a real tattoo studio in Idaho."
        />
      </FadeUp>

      <StaggerContainer className="space-y-4 max-w-4xl mx-auto">
        {liveSites.map((site, idx) => (
          <StaggerItem key={site.url}>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-xl p-5 sm:p-6 group hover:border-electric/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                    idx === 0
                      ? "bg-electric/20 border-electric/30"
                      : "bg-ink-800 border-white/10"
                  }`}>
                    <Globe className={`h-5 w-5 ${idx === 0 ? "text-electric" : "text-ink-400"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-white group-hover:text-electric transition-colors">
                        {site.name}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-ink-500 group-hover:text-electric transition-colors" />
                    </div>
                    <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${
                      idx === 0
                        ? "bg-electric/10 text-electric"
                        : "bg-neon-green/10 text-neon-green"
                    }`}>
                      {site.type}
                    </span>
                    <p className="text-sm text-ink-400 leading-relaxed">{site.description}</p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {site.features.map((f) => (
                        <span key={f} className="text-[10px] px-2 py-0.5 bg-ink-800 text-ink-300 rounded border border-white/5">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:flex-col sm:items-end text-right shrink-0">
                  {site.articles && (
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-ink-500" />
                      <span className="text-xs text-ink-400">{site.articles} articles</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-neon-green" />
                    <span className="text-xs text-neon-green">Live</span>
                  </div>
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp delay={0.3}>
        <div className="text-center mt-8">
          <p className="text-sm text-ink-500">
            That&apos;s <span className="text-white font-medium">6 websites</span> and{" "}
            <span className="text-white font-medium">200+ articles</span> working 24/7 to dominate local search results.
            This is what your studio gets.
          </p>
        </div>
      </FadeUp>
    </Section>
  );
}
