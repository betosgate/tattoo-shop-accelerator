"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { MessageSquare, DollarSign, ClipboardList, Search } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    title: "Booking Through DMs Is Chaos",
    description:
      "You're juggling Instagram DMs, texts, phone calls, and walk-ins with no system. Double bookings happen. Clients slip through the cracks. You need a real booking system — not a group chat.",
  },
  {
    icon: DollarSign,
    title: "No-Shows Are Bleeding You Dry",
    description:
      "Without upfront deposits, clients ghost. The average studio loses $15,000-$30,000 per year to no-shows. That's your chair sitting empty and money walking out the door.",
  },
  {
    icon: ClipboardList,
    title: "Paper Forms, Sticky Notes & iPhone Notes",
    description:
      "Client info scattered everywhere. No centralized record of who owes what, where each piece stands in the process, or which consent forms are on file. It's a liability waiting to happen.",
  },
  {
    icon: Search,
    title: "Invisible on Google",
    description:
      "85% of first-time clients search online before booking. If your studio doesn't show up, they book with whoever does. A single website with 5 pages can't compete — you need a real SEO strategy.",
  },
];

export function ProblemSection() {
  return (
    <Section className="relative">
      <div className="section-divider mb-10" />
      <FadeUp>
        <SectionHeader
          badge="Sound Familiar?"
          title="You're an Artist Running a Business With Zero Tools"
          description="You got into tattooing to create art. Instead, you're spending half your time on bookings, chasing payments, and dealing with no-shows."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <div className="glass-card rounded-xl p-5 h-full transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon-pink/10 border border-neon-pink/20">
                  <problem.icon className="h-5 w-5 text-neon-pink" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-300 leading-relaxed">
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
