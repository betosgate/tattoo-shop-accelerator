"use client";

import { Section } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Phone, Settings, FileText, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery Call",
    duration: "Day 1",
    description: "We get on a 30-minute call to learn about your studio — your style, your market, your goals. No sales pitch. Just figuring out if we're a good fit.",
    details: ["Understand your studio's unique style and strengths", "Identify your target market and surrounding cities", "Review your current digital presence", "Answer all your questions — no pressure"],
  },
  {
    icon: Settings,
    step: "02",
    title: "Setup & Configuration",
    duration: "Week 1",
    description: "We build your entire platform from scratch — your main website, admin dashboard, booking system, and all integrations.",
    details: ["Custom website design matching your brand", "Booking system with your services, pricing, and artists", "Stripe payment integration for deposits", "Digital consent forms configured", "Admin, receptionist, and artist dashboards set up"],
  },
  {
    icon: FileText,
    step: "03",
    title: "Content Creation",
    duration: "Week 1-2",
    description: "Our team writes 200+ SEO articles targeting your specific market. Each article is unique, well-researched, and optimized for local search.",
    details: ["5 satellite websites designed with unique branding", "40+ articles per satellite site", "Local keyword research for your specific cities", "Tattoo style guides, placement guides, aftercare content", "Every article includes CTAs to your booking system"],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    duration: "Week 2-3",
    description: "All 6 websites go live simultaneously. Your main site, 5 satellite sites, and 200+ articles — all indexed and ready to rank.",
    details: ["6 websites deployed and live", "DNS and domain configuration", "SSL certificates installed", "Google Search Console & Analytics setup", "Staff training on the admin dashboard"],
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Growth",
    duration: "Month 1+",
    description: "Watch your bookings climb as your sites gain traction in local search results. Most clients see significant increases within 60-90 days.",
    details: ["Monthly SEO performance reports", "Search ranking improvements tracked", "Booking metrics and revenue dashboards", "Ongoing technical support", "Content updates and optimization"],
  },
];

export function ProcessTimeline() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        {steps.map((step, idx) => (
          <FadeUp key={step.step} delay={idx * 0.1}>
            <div className="relative pl-16 pb-16 last:pb-0">
              {/* Timeline line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-[1.4rem] top-12 bottom-0 w-px bg-gradient-to-b from-electric/30 to-transparent" />
              )}

              {/* Step number circle */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 border border-electric/20">
                <step.icon className="h-5 w-5 text-electric" />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-electric">{step.step}</span>
                  <span className="text-xs text-ink-500 px-2 py-0.5 bg-ink-800 rounded">{step.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{step.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-ink-400">
                      <span className="text-electric mt-1">&#8226;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
