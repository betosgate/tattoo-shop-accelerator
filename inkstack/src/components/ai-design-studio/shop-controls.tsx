"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Sliders, DollarSign, ToggleRight } from "lucide-react";

const controls = [
  {
    icon: Sliders,
    title: "Style Management",
    description:
      "Control which tattoo styles are available based on your artists' specialties. A Neo-Traditional specialist can disable Japanese and Tribal. A black-and-grey artist can disable all color styles. The AI only generates designs your shop can actually execute.",
  },
  {
    icon: DollarSign,
    title: "Pricing Configuration",
    description:
      "All price estimates adjust automatically based on your configured hourly rate. A shop charging $150/hr sees different estimates than one charging $80/hr. Your pricing, your rules.",
  },
  {
    icon: ToggleRight,
    title: "Feature Toggle",
    description:
      "The entire AI Design Studio can be enabled or disabled per shop. It's an optional premium feature, not a requirement. Turn it on when you're ready.",
  },
];

export function ShopControls() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          title="Shop Owner Controls"
          description="You decide what styles, pricing, and features your customers see."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {controls.map((control) => (
          <StaggerItem key={control.title}>
            <div className="glass-card rounded-xl p-6 h-full group hover:border-electric/20 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors mb-4">
                <control.icon className="h-6 w-6 text-electric" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {control.title}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">
                {control.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
