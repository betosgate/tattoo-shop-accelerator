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
  Palette,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Ready-to-Book Design Shop",
    description:
      "Clients browse your template designs, pick a size, choose body placement, select an artist, pay a deposit, and book a time — all without talking to anyone. Hours and pricing are predetermined. Zero time wasted on templates.",
  },
  {
    icon: CreditCard,
    title: "Stripe Deposits & Payments",
    description:
      "Collect $20/hr deposits upfront via Stripe. Consultations are $25 flat. Remaining balance due at session. No more Venmo, Cash App, or 'I'll pay later.'",
  },
  {
    icon: Palette,
    title: "Shopping Cart with 44 Body Areas",
    description:
      "Clients pick their design, choose a size (S/M/L/XL), select exact body placement, and pricing adjusts automatically. Premium surcharges for sensitive areas built in.",
  },
  {
    icon: BarChart3,
    title: "3 Role-Based Dashboards",
    description:
      "Admin gets full control. Receptionist gets today's schedule, phone booking wizard, and check-in tools. Artists get their personal schedule and session tracking.",
  },
  {
    icon: Users,
    title: "Tattoo-Specific CRM",
    description:
      "Track every client from consultation to touch-up. Session progress bars (linework → shading → color), payment history, notes, tags (VIP, Regular, Walk-in), and consent status.",
  },
  {
    icon: Shield,
    title: "Digital Consent Forms",
    description:
      "Full health questionnaire — 17 medical conditions, allergies, medications, emergency contacts, and digital signature. Legally compliant. No more paper clipboards.",
  },
  {
    icon: Handshake,
    title: "Referral Partner Program",
    description:
      "Barber shops, gyms, and local businesses get referral codes. Customers get 5% off, partners earn 5% commission. QR code materials, monthly payouts, partner dashboard.",
  },
  {
    icon: Image,
    title: "Portfolio Gallery",
    description:
      "Lightbox gallery with image and video support. Filter by style. Each artist gets their own section. Show your work the way it deserves to be seen.",
  },
  {
    icon: ClipboardCheck,
    title: "Custom Booking Links",
    description:
      "After a consultation, admin creates a personalized booking link with the exact session plan (linework, shading, color). Client picks dates and pays deposits via the link.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Everything",
    description:
      "70% of tattoo searches happen on mobile. Every page, form, dashboard, and booking flow is built mobile-first. Your clients book from their phone in under 2 minutes.",
  },
  {
    icon: Globe,
    title: "6 Websites, Not 1",
    description:
      "Your main site plus 5 SEO satellite sites, each with unique branding, targeting a different surrounding city. 200+ long-form articles driving traffic to your booking system.",
  },
  {
    icon: Search,
    title: "200+ SEO Articles",
    description:
      "Each article is 1,500-2,500 words targeting local search terms — tattoo styles, placement guides, aftercare, pricing. Every article funnels readers to your booking page.",
  },
];

export function FeaturesSection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="The Platform"
          title="Everything Your Studio Needs to Run & Grow"
          description="Not a website builder. Not a booking widget. A complete digital platform built from the ground up for how tattoo shops actually work."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="glass-card rounded-xl p-5 h-full transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors mb-3">
                <feature.icon className="h-5 w-5 text-electric" />
              </div>
              <h3 className="text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
