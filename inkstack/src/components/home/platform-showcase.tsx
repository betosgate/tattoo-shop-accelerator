"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, BarChart } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "booking",
    label: "Booking System",
    icon: Monitor,
    content: {
      title: "Two paths to getting booked",
      description: "Clients can browse your designs and quick-book, or submit a custom consultation request. Either way, deposits are collected upfront via Stripe.",
      mockup: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 glass-card rounded-lg p-4 border-electric/30 border">
              <div className="w-8 h-8 rounded bg-electric/20 mb-2" />
              <p className="text-sm font-medium text-white">Quick Book</p>
              <p className="text-xs text-ink-400 mt-1">Browse designs, pick size & placement, pay deposit</p>
            </div>
            <div className="flex-1 glass-card rounded-lg p-4">
              <div className="w-8 h-8 rounded bg-neon-pink/20 mb-2" />
              <p className="text-sm font-medium text-white">Custom Request</p>
              <p className="text-xs text-ink-400 mt-1">Describe your vision, upload references, book consult</p>
            </div>
          </div>
          <div className="glass-card rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-white">Select Body Placement</p>
              <span className="text-xs text-electric">44 areas</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Upper Arm", "Forearm", "Back", "Chest", "Ribs", "Thigh", "Calf", "Neck"].map((area) => (
                <div key={area} className="text-center py-2 px-1 rounded bg-ink-800 text-[10px] text-ink-300 hover:bg-electric/10 hover:text-electric cursor-pointer transition-colors">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart,
    content: {
      title: "Three dashboards, three roles",
      description: "Admin gets full control. Receptionist gets today's schedule and phone booking wizard. Artists get their personal schedule and session tracking.",
      mockup: (
        <div className="space-y-3">
          <div className="flex gap-2 mb-4">
            {["Admin", "Receptionist", "Artist"].map((role) => (
              <span key={role} className={`text-xs px-3 py-1 rounded-full ${role === "Admin" ? "bg-electric/20 text-electric" : "bg-ink-800 text-ink-400"}`}>
                {role}
              </span>
            ))}
          </div>
          <div className="glass-card rounded-lg p-4">
            <p className="text-xs text-ink-400 mb-2">Client: Alex Martinez</p>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-300">Full Sleeve — Linework</span>
                  <span className="text-neon-green">Complete</span>
                </div>
                <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-neon-green rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-300">Full Sleeve — Shading</span>
                  <span className="text-electric">75%</span>
                </div>
                <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-electric rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-300">Full Sleeve — Color</span>
                  <span className="text-ink-500">Upcoming</span>
                </div>
                <div className="h-1.5 bg-ink-800 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-ink-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    id: "seo",
    label: "SEO Sites",
    icon: Globe,
    content: {
      title: "5 satellites dominating local search",
      description: "Each satellite site has its own brand, targets a different city, and contains 40+ long-form articles. That's 200+ pieces of content working for you 24/7.",
      mockup: (
        <div className="space-y-3">
          {[
            { name: "TattoosAustin.com", city: "Austin", articles: 42, color: "electric" },
            { name: "RoundRockTattooGuide.com", city: "Round Rock", articles: 40, color: "neon-green" },
            { name: "TattoosCedarPark.com", city: "Cedar Park", articles: 41, color: "neon-pink" },
            { name: "GeorgetownInk.com", city: "Georgetown", articles: 38, color: "electric" },
            { name: "SanMarcosTattoos.com", city: "San Marcos", articles: 40, color: "neon-green" },
          ].map((site) => (
            <div key={site.name} className="glass-card rounded-lg p-3 flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full bg-${site.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{site.name}</p>
                <p className="text-xs text-ink-400">Targeting: {site.city}</p>
              </div>
              <span className="text-xs text-ink-300">{site.articles} articles</span>
            </div>
          ))}
        </div>
      ),
    },
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    content: {
      title: "Perfect on every screen",
      description: "70% of tattoo searches happen on mobile. Every page, form, and feature is built mobile-first so you never lose a potential client.",
      mockup: (
        <div className="flex justify-center gap-4">
          <div className="w-40 rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-ink-800 px-3 py-2 flex justify-center">
              <div className="w-12 h-1 bg-ink-600 rounded-full" />
            </div>
            <div className="bg-ink-900 p-3 space-y-2">
              <div className="h-20 rounded bg-gradient-to-br from-electric/20 to-neon-pink/20" />
              <div className="h-2 bg-ink-700 rounded w-3/4" />
              <div className="h-2 bg-ink-700 rounded w-1/2" />
              <div className="h-8 bg-electric/20 rounded flex items-center justify-center">
                <span className="text-[8px] text-electric">Book Now</span>
              </div>
            </div>
          </div>
          <div className="w-40 rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-ink-800 px-3 py-2 flex justify-center">
              <div className="w-12 h-1 bg-ink-600 rounded-full" />
            </div>
            <div className="bg-ink-900 p-3 space-y-2">
              <div className="grid grid-cols-2 gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded bg-ink-700" />
                ))}
              </div>
              <div className="h-2 bg-ink-700 rounded w-2/3" />
              <div className="h-2 bg-ink-700 rounded w-1/3" />
            </div>
          </div>
        </div>
      ),
    },
  },
];

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState("booking");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Platform"
          title="See What You're Getting"
          description="A real platform built for real tattoo shops. Not a template. Not a plugin. A complete digital ecosystem."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass-card rounded-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-white/5 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-electric"
                    : "text-ink-400 hover:text-white"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {active.content.title}
                </h3>
                <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                  {active.content.description}
                </p>
              </div>
              <div>{active.content.mockup}</div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
