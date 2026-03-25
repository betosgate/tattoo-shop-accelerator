"use client";

import { Section } from "@/components/section";
import { StaggerContainer, StaggerItem, Counter } from "@/components/motion";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <Section>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
