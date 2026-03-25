"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Heart, Wrench, Shield, Flame } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Built From the Chair",
    description: "Every feature exists because we needed it in our own shop. Not because a product manager thought it sounded cool.",
  },
  {
    icon: Wrench,
    title: "Modern Tech, Zero Hassle",
    description: "Next.js, not WordPress. Stripe, not Square. Vercel, not shared hosting. You get enterprise-grade tech without needing a CS degree.",
  },
  {
    icon: Heart,
    title: "Artists First",
    description: "You became a tattoo artist to create art. Not to wrestle with SEO, manage a website, or figure out payment processing. We handle all of it.",
  },
  {
    icon: Shield,
    title: "Your Data, Your Business",
    description: "No hostage situations. You own your content, your client data, and your portfolio. We earn your business every month — or you walk.",
  },
];

export function Values() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Our Values"
          title="We Handle the Digital. You Focus on the Art."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {values.map((value) => (
          <StaggerItem key={value.title}>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mb-4">
                <value.icon className="h-5 w-5 text-electric" />
              </div>
              <h3 className="text-base font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">{value.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
