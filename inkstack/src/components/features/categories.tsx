"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Calendar, CreditCard, Search, Users, Image, Shield,
  BarChart3, Globe, Handshake, Phone, FileText, MapPin,
  UserCheck, Bell, Palette, Layout, ClipboardCheck, Heart,
  Sparkles, Wand2, CalendarCheck, DollarSign, Pencil, ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "AI Tattoo Design Studio",
    description: "The only AI design tool that lives on your website and connects directly to your booking calendar. Customers design, see pricing, and book — all in one flow.",
    spotlight: true,
    features: [
      { icon: Wand2, name: "AI-Powered Generation", detail: "20 professionally curated tattoo styles with expert-crafted prompts — generates 4 unique variations per click, not generic AI art" },
      { icon: Pencil, name: "Refine & Iterate", detail: "Customers edit any design with natural language: \"add roses,\" \"make it bolder,\" \"simplify it.\" Multiple rounds of refinement" },
      { icon: CalendarCheck, name: "One-Click Booking", detail: "Design downloads automatically, booking modal shows estimated cost, and the consultation form arrives pre-filled with design details" },
      { icon: DollarSign, name: "$10 Profit Per Pack", detail: "Customers pay $15 for 40 designs. You keep $10. Plus the consultations and tattoo sessions that follow — revenue you'd never capture otherwise" },
    ],
  },
  {
    title: "Booking & Payments",
    description: "Stop chasing clients through DMs. Give them a real booking experience.",
    features: [
      { icon: Calendar, name: "Online Booking", detail: "Two paths: browse designs for quick-book, or submit custom consultation requests" },
      { icon: CreditCard, name: "Stripe Deposits", detail: "Collect $20/hr deposits and $25 consultation fees automatically" },
      { icon: Palette, name: "Size & Placement", detail: "44 body areas mapped with size-specific pricing and premium surcharges" },
      { icon: Phone, name: "Phone Booking Wizard", detail: "5-step receptionist workflow for walk-in and phone bookings" },
    ],
  },
  {
    title: "Admin Dashboard & CRM",
    description: "Three dashboards built for three different roles. Everyone gets exactly what they need.",
    features: [
      { icon: BarChart3, name: "Admin Dashboard", detail: "Full control over bookings, clients, designs, artists, payments, and calendar" },
      { icon: UserCheck, name: "Receptionist View", detail: "Today's schedule, phone booking wizard, client lookup, check-in/no-show actions" },
      { icon: Layout, name: "Artist Dashboard", detail: "Personal schedule, session notes, active project tracking with progress bars" },
      { icon: Users, name: "Client CRM", detail: "Profiles with tags (VIP, Regular, First Timer), tattoo history, payment records" },
    ],
  },
  {
    title: "SEO & Marketing",
    description: "200+ articles across 6 websites. Your competitors can't match this.",
    features: [
      { icon: Globe, name: "5 Satellite Sites", detail: "Each targets a different surrounding city with unique branding and 40+ articles" },
      { icon: Search, name: "200+ SEO Articles", detail: "1,500-2,500 words each, targeting specific local search terms in your market" },
      { icon: MapPin, name: "11 Landing Pages", detail: "On-site SEO pages targeting city + keyword combinations" },
      { icon: Bell, name: "Content Strategy", detail: "Tattoo styles, placement guides, aftercare, pricing — every search term covered" },
    ],
  },
  {
    title: "Referral Program",
    description: "Turn local businesses into your marketing team.",
    features: [
      { icon: Handshake, name: "Partner Network", detail: "Barber shops, gyms, smoke shops get unique referral codes" },
      { icon: CreditCard, name: "Automated Commissions", detail: "5% off for customers, 5% commission for partners on deposits and balances" },
      { icon: BarChart3, name: "Partner Dashboard", detail: "Total referrals, revenue generated, earnings, and payout tracking" },
      { icon: FileText, name: "Marketing Materials", detail: "Branded posters and cards with QR codes included for partner locations" },
    ],
  },
  {
    title: "Portfolio & Gallery",
    description: "Show your work the way it deserves to be seen.",
    features: [
      { icon: Image, name: "Lightbox Gallery", detail: "Full-screen viewing for images and video with smooth transitions" },
      { icon: Palette, name: "Style Categories", detail: "Organize by style: traditional, fine line, watercolor, geometric, realism" },
      { icon: Layout, name: "Artist Portfolios", detail: "Each artist gets their own portfolio section with bio and work samples" },
      { icon: Heart, name: "Client Favorites", detail: "Clients can browse and save designs they love before booking" },
    ],
  },
  {
    title: "Consent & Compliance",
    description: "Digital forms that protect your studio and impress your clients.",
    features: [
      { icon: Shield, name: "Digital Consent Forms", detail: "Full health questionnaire: 23 medical conditions, allergies, medications" },
      { icon: ClipboardCheck, name: "Emergency Contacts", detail: "Collected and stored securely with each consent form" },
      { icon: FileText, name: "Document Management", detail: "Digital signatures, form status tracking, and document storage" },
      { icon: Heart, name: "Aftercare System", detail: "Healing timeline from Day 1 through Weeks 4+ with instructions" },
    ],
  },
];

export function FeatureCategories() {
  return (
    <>
      {categories.map((category, idx) => (
        <Section
          key={category.title}
          className={
            category.spotlight
              ? "bg-gradient-to-b from-electric/5 to-transparent"
              : idx % 2 === 0
                ? ""
                : "bg-ink-900/30"
          }
        >
          <FadeUp>
            <div className="max-w-3xl mb-12">
              {category.spotlight && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/10 mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-electric" />
                  <span className="text-xs font-semibold text-electric uppercase tracking-wider">New Feature</span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {category.title}
              </h2>
              <p className="mt-2 text-ink-300">{category.description}</p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {category.features.map((feature) => (
              <StaggerItem key={feature.name}>
                <div
                  className={`glass-card rounded-xl p-5 h-full group transition-all ${
                    category.spotlight
                      ? "hover:border-electric/30 border-electric/10"
                      : "hover:border-electric/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-electric" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{feature.name}</h3>
                      <p className="mt-1 text-sm text-ink-400 leading-relaxed">{feature.detail}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {category.spotlight && (
            <FadeUp delay={0.3}>
              <div className="mt-8 text-center">
                <Link
                  href="/ai-design-studio"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-electric text-ink-950 rounded-lg hover:bg-electric-light transition-colors glow-electric"
                >
                  See Full AI Design Studio Details
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>
          )}
        </Section>
      ))}
    </>
  );
}
