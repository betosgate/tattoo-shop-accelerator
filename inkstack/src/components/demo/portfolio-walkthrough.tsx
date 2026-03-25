"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Image, Video, Monitor, Smartphone, ArrowRight } from "lucide-react";

export function PortfolioWalkthrough() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Portfolio & Gallery"
          title="Your Work Deserves a Real Gallery"
          description="Not an Instagram grid. A professional lightbox gallery with image and video support, organized by style and artist. This is the first thing potential clients see."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="max-w-4xl mx-auto">
          {/* Gallery mockup */}
          <div className="glass-card rounded-xl overflow-hidden mb-8">
            <div className="flex items-center gap-2 px-4 py-3 bg-ink-800 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-ink-700 rounded-md px-3 py-1 text-xs text-ink-400 text-center max-w-md mx-auto">
                  yourstudio.com/gallery
                </div>
              </div>
            </div>

            <div className="p-6 bg-ink-900">
              {/* Style filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["All", "Traditional", "Fine Line", "Realism", "Watercolor", "Geometric", "Japanese", "Blackwork"].map((style, i) => (
                  <span key={style} className={`text-xs px-3 py-1 rounded-full ${i === 0 ? "bg-electric/20 text-electric" : "bg-ink-800 text-ink-400"} border border-white/5`}>
                    {style}
                  </span>
                ))}
              </div>

              {/* Gallery grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`relative rounded-lg overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                    <div className={`${i === 0 ? "h-full min-h-[200px]" : "aspect-square"} bg-gradient-to-br ${
                      ["from-ink-700 to-ink-600", "from-ink-600 to-ink-500", "from-electric/10 to-ink-700", "from-neon-pink/10 to-ink-700"][i % 4]
                    }`} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Image className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {i === 3 && (
                      <div className="absolute top-1.5 right-1.5">
                        <Video className="h-4 w-4 text-white bg-black/50 rounded p-0.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Image,
                title: "Lightbox Gallery",
                detail: "Full-screen viewing with smooth transitions. Clients can browse your entire portfolio without leaving the page.",
              },
              {
                icon: Video,
                title: "Video Support",
                detail: "Showcase time-lapses, behind-the-scenes footage, and healing progress videos alongside your photos.",
              },
              {
                icon: Smartphone,
                title: "Mobile Optimized",
                detail: "Touch-friendly navigation with swipe gestures. The gallery looks and works beautifully on every device.",
              },
            ].map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mb-3">
                  <f.icon className="h-5 w-5 text-electric" />
                </div>
                <h4 className="text-sm font-semibold text-white">{f.title}</h4>
                <p className="text-xs text-ink-400 mt-1 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.synergytattoorexburg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-electric hover:underline"
            >
              See the live gallery on Synergy Tattoo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
