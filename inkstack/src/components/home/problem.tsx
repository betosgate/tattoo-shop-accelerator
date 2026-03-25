"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Invisible Online",
    description:
      "Your studio does incredible work, but nobody can find you on Google. Meanwhile, mediocre shops with better websites are stealing your clients.",
  },
  {
    icon: Clock,
    title: "Wasting Time on Bookings",
    description:
      "DMs, phone tag, no-shows, double bookings. You became a tattoo artist to create art — not to be a receptionist.",
  },
  {
    icon: DollarSign,
    title: "Losing Money to No-Shows",
    description:
      "Without a proper deposit system, clients ghost appointments. That's your time and money walking out the door.",
  },
  {
    icon: AlertTriangle,
    title: "Generic Website, Generic Results",
    description:
      "WordPress templates and Instagram pages aren't cutting it. Your digital presence should be as unique as your art.",
  },
];

export function ProblemSection() {
  return (
    <Section className="relative">
      <div className="section-divider mb-24" />
      <FadeUp>
        <SectionHeader
          badge="The Problem"
          title="Your Art Deserves Better Than Page 2 of Google"
          description="Most tattoo shops are losing thousands in potential bookings every month because their digital presence is stuck in 2015."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <div className="glass-card rounded-xl p-6 h-full transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                  <problem.icon className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
