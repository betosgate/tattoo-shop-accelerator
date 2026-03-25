"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ExternalLink, FileText, MapPin, TrendingUp, Palette } from "lucide-react";

const satellites = [
  {
    name: "Tattoos Rexburg Idaho",
    domain: "tattoosrexburgidaho.com",
    url: "https://www.tattoosrexburgidaho.com",
    city: "Rexburg, ID",
    focus: "Comprehensive local guide — shops, pricing, walk-ins, local laws, custom design process",
    articles: "39",
    theme: "Black + Gold",
    themeDesc: "Premium, upscale tattoo parlor aesthetic",
    gradient: "from-yellow-600/30 to-amber-800/30",
    borderColor: "border-yellow-500/20",
    contentHighlights: ["Best Tattoo Shops in Rexburg", "Walk-in Tattoo Guide", "Tattoo Laws in Idaho", "Pricing Guide Rexburg"],
    uniqueAngle: "Flagship satellite — deepest Rexburg-specific local SEO targeting",
  },
  {
    name: "Rexburg Tattoo Guide",
    domain: "rexburgtattooguide.com",
    url: "https://www.rexburgtattooguide.com",
    city: "Rexburg, ID",
    focus: "Educational encyclopedia — style deep-dives, aftercare science, placement pros & cons",
    articles: "39",
    theme: "White + Slate Blue",
    themeDesc: "Clean, educational resource site — feels like a health guide",
    gradient: "from-slate-400/30 to-blue-400/30",
    borderColor: "border-blue-400/20",
    contentHighlights: ["Blackwork Tattoos Explained", "Day-by-Day Healing Timeline", "Dotwork & Chicano Styles", "Tattoo Removal Options"],
    uniqueAngle: "Only site with Chicano, Trash Polka, Biomechanical style guides + regret prevention content",
  },
  {
    name: "Tattoos Saint Anthony",
    domain: "tattoossaintanthonyidaho.com",
    url: "https://www.tattoossaintanthonyidaho.com",
    city: "Saint Anthony, ID",
    focus: "Nature & outdoor culture — mountain designs, wildlife tattoos, wilderness-inspired ink",
    articles: "39",
    theme: "Forest Dark + Cream/Sage",
    themeDesc: "Earthy, outdoor aesthetic matching Fremont County identity",
    gradient: "from-green-700/30 to-emerald-900/30",
    borderColor: "border-green-500/20",
    contentHighlights: ["Mountain Tattoo Designs", "National Park Inspired Ink", "Wildlife Tattoos", "Getting Tattooed Near Yellowstone"],
    uniqueAngle: "Only site with fishing, hunting, camping, wildflower, and wilderness tattoo content",
  },
  {
    name: "Tattoos Idaho Falls",
    domain: "tattoosidahofallsidaho.com",
    url: "https://www.tattoosidahofallsidaho.com",
    city: "Idaho Falls, ID",
    focus: "Trending & cutting-edge styles — micro-realism, cyber sigilism, anime/manga, dark art",
    articles: "39",
    theme: "Dark + Violet/Cyan Neon",
    themeDesc: "Futuristic, urban aesthetic targeting younger demographics",
    gradient: "from-violet-600/30 to-cyan-500/30",
    borderColor: "border-violet-500/20",
    contentHighlights: ["Micro-Realism Tattoos", "Cyber Sigilism Guide", "Anime & Manga Tattoos", "Idaho Falls to Rexburg Bridge"],
    uniqueAngle: "Targets largest nearby city (65K pop). Most cutting-edge trend content — appeals to urban market",
  },
  {
    name: "Tattoos Rigby Idaho",
    domain: "tattoosrigbyidaho.com",
    url: "https://www.tattoosrigbyidaho.com",
    city: "Rigby, ID",
    focus: "Heritage, family & tradition — Americana, memorial tattoos, faith, western themes",
    articles: "39",
    theme: "Cream + Deep Red/Copper",
    themeDesc: "Classic Americana / Western identity — 'Honest Ink for Honest People'",
    gradient: "from-red-800/30 to-amber-700/30",
    borderColor: "border-red-500/20",
    contentHighlights: ["American Traditional History", "Sailor Jerry Legacy", "Memorial & Pet Tattoos", "Western & Farming Themes"],
    uniqueAngle: "Only site with farming tattoos, military traditions, father-daughter/mother-son ideas. Serif typography throughout",
  },
];

export function SEOShowcase() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Live SEO Satellites — Visit Them Now"
          title="5 Unique Brands. 5 Different Cities. 195 Articles."
          description="Each satellite has its own color scheme, typography, content strategy, and personality — designed to look like a completely independent website to search engines. Click any card to visit the live site."
        />
      </FadeUp>

      <StaggerContainer className="space-y-6 max-w-5xl mx-auto">
        {satellites.map((site) => (
          <StaggerItem key={site.domain}>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block glass-card rounded-xl overflow-hidden group hover:${site.borderColor} transition-all`}
            >
              {/* Color strip */}
              <div className={`h-2 bg-gradient-to-r ${site.gradient}`} />

              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-white group-hover:text-electric transition-colors">
                        {site.name}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-ink-500 group-hover:text-electric transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-ink-500">{site.domain}</span>
                      <span className="flex items-center gap-1 text-xs text-ink-400">
                        <MapPin className="h-3 w-3" /> {site.city}
                      </span>
                    </div>
                    <p className="text-sm text-ink-300 leading-relaxed mb-3">{site.focus}</p>

                    {/* Unique angle callout */}
                    <div className="bg-ink-800/50 rounded-lg px-3 py-2 border border-white/5 mb-3">
                      <p className="text-xs text-electric">
                        <span className="font-medium">What makes it unique:</span>{" "}
                        <span className="text-ink-300">{site.uniqueAngle}</span>
                      </p>
                    </div>

                    {/* Sample articles */}
                    <div className="flex flex-wrap gap-1.5">
                      {site.contentHighlights.map((topic) => (
                        <span key={topic} className="text-[10px] px-2 py-0.5 bg-ink-800 text-ink-300 rounded border border-white/5">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual identity */}
                  <div className="space-y-3">
                    <div className={`rounded-lg bg-gradient-to-br ${site.gradient} p-4 h-24 flex items-center justify-center`}>
                      <span className="text-sm font-bold text-white/70">{site.domain}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-ink-800 rounded-lg p-2 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Palette className="h-3 w-3 text-ink-500" />
                          <span className="text-[10px] text-ink-400">Theme</span>
                        </div>
                        <p className="text-xs text-white font-medium">{site.theme}</p>
                      </div>
                      <div className="bg-ink-800 rounded-lg p-2 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <FileText className="h-3 w-3 text-ink-500" />
                          <span className="text-[10px] text-ink-400">Articles</span>
                        </div>
                        <p className="text-xs text-white font-medium">{site.articles} pages</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-ink-500 leading-relaxed">{site.themeDesc}</p>
                  </div>
                </div>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Strategy summary */}
      <FadeUp delay={0.3}>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-bold text-white text-center mb-6">
              Why This Strategy Is Unbeatable
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center mb-2">
                  <Palette className="h-4 w-4 text-electric" />
                  <span className="text-sm font-semibold text-white">Unique Identities</span>
                </div>
                <p className="text-xs text-ink-400">Each site has completely different colors, fonts, and personality. Google sees 5 independent, authoritative domains — not duplicates.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center mb-2">
                  <MapPin className="h-4 w-4 text-neon-green" />
                  <span className="text-sm font-semibold text-white">Geographic Bridges</span>
                </div>
                <p className="text-xs text-ink-400">Each non-local satellite includes a &quot;drive to your studio&quot; article — converting nearby-city searchers into real bookings.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1.5 justify-center mb-2">
                  <TrendingUp className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm font-semibold text-white">Zero Content Overlap</span>
                </div>
                <p className="text-xs text-ink-400">Zero duplicate articles across all 5 sites. Each targets different content niches — local guides, education, nature, trends, and heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
