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
    title: "653 Ready-to-Book Designs",
    description:
      "Clients browse 653 template designs across 7 categories (Flowers, Black & Grey, Panther, Dragon, Pin-Up, Eagle, and more). Pick a size, choose body placement, pay a deposit, book a time — zero conversations needed. You control the pricing and hourly rates on every design, and can add new designs or remove any you don't want.",
  },
  {
    icon: CreditCard,
    title: "6 Pricing Tiers by Square Inch",
    description:
      "Pricing auto-calculates by size: 4 sq in ($100/1hr) up to 9 sq in ($350/3.5hrs). Deposits collected at $20/hr via Stripe. Consultations $25 flat. Larger than 9 sq in? Seamlessly redirects to custom consultation.",
  },
  {
    icon: Palette,
    title: "Smart Body Placement System",
    description:
      "44 body areas with intelligent size exclusions — finger and behind-ear auto-disable at 5+ sq in, wrists at 6+, neck and hands carry a $50/hr premium surcharge. Clients only see placements that work for their size.",
  },
  {
    icon: BarChart3,
    title: "3 Role-Based Dashboards",
    description:
      "Admin: full control over bookings, clients, designs, payments, calendar, categories, and settings. Receptionist: today's schedule, check-in, phone booking wizard. Artist: personal schedule, session notes, project tracking.",
  },
  {
    icon: Users,
    title: "Tattoo-Specific CRM",
    description:
      "Client profiles with tattoo history, session-by-session tracking (linework → shading → color → touch-up), payment records, internal notes, consent status, and tags (VIP, Regular, Walk-in, First Timer).",
  },
  {
    icon: Shield,
    title: "Digital Consent Forms",
    description:
      "23-condition health questionnaire covering heart disease, diabetes, blood thinners, skin conditions, pregnancy, allergies, and more. Emergency contacts, digital signature, photo release. Idaho-law compliant.",
  },
  {
    icon: Handshake,
    title: "Referral Partner Program",
    description:
      "Local businesses get branded posters, cards, and QR codes. Customers get 5% off deposits, partners earn 5% commission on all spending. Online dashboard, monthly payouts, real-time tracking.",
  },
  {
    icon: Image,
    title: "Portfolio & Category Management",
    description:
      "Lightbox gallery with image and video support. Admin manages categories — add, rename, move images between categories. Customers filter by category with sticky checkbox pills.",
  },
  {
    icon: ClipboardCheck,
    title: "Custom Booking Links",
    description:
      "After a consultation, admin creates a personalized link with exact sessions (linework, shading, color), hours, and pricing. Client picks dates and pays $20/hr deposits. Links expire after 14 days, can regenerate.",
  },
  {
    icon: Smartphone,
    title: "Configurable Studio Settings",
    description:
      "Control everything from one settings page: hourly rate, deposit rate, consultation fee, max session hours, prep padding between appointments, pricing tiers, premium surcharges, and referral commission rates.",
  },
  {
    icon: Globe,
    title: "6 Websites + 200 SEO Articles",
    description:
      "Your main studio site plus 5 satellite sites — each with unique branding, targeting a different surrounding city. 200+ long-form articles (1,500-2,500 words) driving traffic to your booking system 24/7.",
  },
  {
    icon: Search,
    title: "Piercing Management",
    description:
      "Full piercing module: booking, jewelry inventory tracking (titanium, gold, niobium), age verification (Idaho law compliant), aftercare instructions, status tracking, and walk-in piercing workflow.",
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
