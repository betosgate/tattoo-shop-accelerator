"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Calendar,
  CreditCard,
  Search,
  Users,
  Image,
  Shield,
  BarChart3,
  Globe,
  Handshake,
  Smartphone,
  FileText,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking System",
    description:
      "Two booking paths: browse & quick-book, or custom consultation requests. Deposits collected automatically.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    description:
      "Professional deposit collection ($20/hr) and consultation fees ($25). No more Venmo or Cash App.",
  },
  {
    icon: Search,
    title: "SEO Domination",
    description:
      "5 satellite websites with 200+ articles targeting every tattoo search in your surrounding cities.",
  },
  {
    icon: Users,
    title: "Tattoo-Specific CRM",
    description:
      "Track clients from consultation to touch-up. Session notes, progress tracking, payment history — all in one place.",
  },
  {
    icon: Image,
    title: "Portfolio Gallery",
    description:
      "Lightbox gallery supporting images and video. Show your work the way it deserves to be seen.",
  },
  {
    icon: Shield,
    title: "Digital Consent Forms",
    description:
      "HIPAA-aware health questionnaires with 17 medical conditions, allergies, medications, and digital signatures.",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description:
      "Three role-based dashboards: Admin, Receptionist, and Artist. Each gets exactly what they need.",
  },
  {
    icon: Globe,
    title: "6 Websites, Not 1",
    description:
      "Your main site plus 5 SEO satellites, each with unique branding, targeting different surrounding cities.",
  },
  {
    icon: Handshake,
    title: "Referral Program",
    description:
      "Turn barber shops, gyms, and local businesses into your marketing army. 5% commission, automated tracking.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Every page, every form, every feature — built mobile-first. Because that's where your clients are.",
  },
  {
    icon: FileText,
    title: "Legal & Compliance",
    description:
      "Privacy policy, terms of service, refund policy — all included. Plus aftercare instructions and FAQ pages.",
  },
  {
    icon: Palette,
    title: "44 Body Areas Mapped",
    description:
      "Clients pick exact placement with size-specific pricing. Premium surcharges for sensitive areas built in.",
  },
];

export function FeaturesSection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Features"
          title="Everything Your Studio Needs. Nothing It Doesn't."
          description="Built from the ground up for tattoo shops — not adapted from some generic SaaS template."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="glass-card rounded-xl p-6 h-full transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors mb-4">
                <feature.icon className="h-5 w-5 text-electric" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
