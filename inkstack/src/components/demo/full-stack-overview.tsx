"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Globe, Calendar, CreditCard, Users, BarChart3,
  Shield, Handshake, Image, Search, Smartphone, FileText, MapPin,
} from "lucide-react";

const features = [
  { icon: Globe, label: "6 Live Websites", detail: "1 main + 5 SEO satellites, each with unique branding" },
  { icon: Calendar, label: "Online Booking", detail: "Two paths: browse designs or custom consultation" },
  { icon: CreditCard, label: "Stripe Payments", detail: "Deposits and consultation fees collected automatically" },
  { icon: BarChart3, label: "3 Dashboards", detail: "Admin, Receptionist, and Artist — each role-specific" },
  { icon: Users, label: "Tattoo CRM", detail: "Client profiles, session tracking, payment history" },
  { icon: Search, label: "200+ SEO Articles", detail: "Long-form content targeting local search terms" },
  { icon: Handshake, label: "Referral Program", detail: "Partner codes, commissions, and payout tracking" },
  { icon: Shield, label: "Consent Forms", detail: "Digital health questionnaire with 23 medical conditions" },
  { icon: Image, label: "Portfolio Gallery", detail: "Lightbox with image and video support" },
  { icon: Smartphone, label: "Mobile-First", detail: "Every feature works perfectly on phones" },
  { icon: FileText, label: "Legal Pages", detail: "Privacy, terms, refund policy — all included" },
  { icon: MapPin, label: "11 SEO Pages", detail: "On-site landing pages targeting local keywords" },
];

export function FullStackOverview() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="What's Included"
          title="Your Complete Digital Ecosystem"
          description="Everything below is live and running right now for a real tattoo studio. Scroll down to walk through each feature in detail."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <StaggerItem key={f.label}>
            <div className="glass-card rounded-xl p-4 text-center group hover:border-electric/20 transition-all h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mx-auto mb-3 group-hover:bg-electric/20 transition-colors">
                <f.icon className="h-5 w-5 text-electric" />
              </div>
              <p className="text-sm font-semibold text-white">{f.label}</p>
              <p className="text-xs text-ink-400 mt-1">{f.detail}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
