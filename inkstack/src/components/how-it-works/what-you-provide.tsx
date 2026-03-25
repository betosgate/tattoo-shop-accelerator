"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Camera, FileText, DollarSign, Users } from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Portfolio Photos",
    description: "High-quality images of your best work. We'll organize them by style and artist for your gallery.",
  },
  {
    icon: FileText,
    title: "Business Info",
    description: "Studio name, address, hours, contact info, and a brief description of your studio's story and vibe.",
  },
  {
    icon: DollarSign,
    title: "Pricing & Services",
    description: "Your hourly rates, minimum charges, consultation fees, and any premium surcharges for specialty work.",
  },
  {
    icon: Users,
    title: "Artist Bios",
    description: "Names, specialties, experience, and headshots for each artist. We'll build individual profiles for each one.",
  },
];

export function WhatYouProvide() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="What We Need From You"
          title="You Bring the Art. We Handle the Rest."
          description="Here's the only homework you'll get. Everything else is on us."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 border border-electric/20 mx-auto mb-4">
                <item.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">{item.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
