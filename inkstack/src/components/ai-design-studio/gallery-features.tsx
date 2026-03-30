"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Star, Save, Maximize2, LayoutGrid } from "lucide-react";

const galleryFeatures = [
  {
    icon: Star,
    title: "Favorites",
    description:
      "Customers star their favorite designs. Favorites are highlighted with a gold ring and persist across page refreshes.",
  },
  {
    icon: Save,
    title: "Design Persistence",
    description:
      "All generated designs auto-save to the browser (up to 20 most recent). Close the tab, come back later — designs are still there.",
  },
  {
    icon: Maximize2,
    title: "Fullscreen Viewer",
    description:
      "Click any design to view fullscreen with arrow navigation, download button, and Book This Design button.",
  },
  {
    icon: LayoutGrid,
    title: "Responsive Gallery",
    description:
      "4-column grid on desktop, 3 on tablet, 2 on mobile. All generated designs visible at a glance.",
  },
];

export function GalleryFeatures() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          title="Gallery & Persistence"
          description="Every design is saved, searchable, and ready to book."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {galleryFeatures.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="glass-card rounded-xl p-5 h-full text-center group hover:border-electric/20 transition-all">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors mb-4">
                <feature.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
