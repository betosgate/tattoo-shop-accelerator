"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { motion } from "framer-motion";
import { ShoppingCart, Palette, BarChart, Shield } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "shop",
    label: "Ready-to-Book Designs",
    icon: ShoppingCart,
    content: {
      title: "Clients buy tattoos like products — no time wasted",
      description: "This is the game-changer. Template designs are pre-priced with set hours. Clients browse your catalog, pick a size, choose body placement, select their artist, pay a deposit, and book their time slot — all in under 3 minutes. No DMs. No phone calls. No back-and-forth. The tattoo is already designed, hours are predetermined, pricing is locked in. They just buy it and show up.",
      mockup: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {["Traditional Rose", "Geometric Wolf", "Fine Line Bird"].map((d) => (
              <div key={d} className="rounded-lg bg-ink-800 p-2 text-center border border-white/5 hover:border-electric/20 transition-colors cursor-pointer">
                <div className="aspect-square rounded bg-gradient-to-br from-ink-700 to-ink-600 mb-1" />
                <p className="text-[9px] text-white font-medium">{d}</p>
                <p className="text-[8px] text-electric">2 hrs — $200</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((s) => (
              <div key={s} className={`flex-1 py-1.5 rounded text-center text-[10px] font-medium border ${s === "M" ? "border-electric text-electric bg-electric/10" : "border-white/10 text-ink-300"}`}>{s}</div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-1">
            {["Upper Arm", "Forearm", "Calf", "Thigh"].map((a) => (
              <div key={a} className={`text-center py-1 rounded text-[8px] ${a === "Forearm" ? "bg-electric/10 text-electric border border-electric/20" : "bg-ink-800 text-ink-300 border border-white/5"}`}>{a}</div>
            ))}
          </div>
          <div className="flex justify-between items-center text-xs bg-ink-800 rounded-lg p-2 border border-white/5">
            <div>
              <span className="text-white font-medium">Medium — Forearm</span>
              <span className="text-ink-400 ml-2">2 hrs</span>
            </div>
            <span className="text-electric font-bold">$40 deposit</span>
          </div>
        </div>
      ),
    },
  },
  {
    id: "custom",
    label: "Custom Tattoo Flow",
    icon: Palette,
    content: {
      title: "Custom pieces get the full consultation workflow",
      description: "For original designs, clients book a $25 consultation. Artist creates the plan — how many sessions, hours per session, which stages (linework, shading, color). Admin generates a custom booking link with the exact sessions and pricing. Client receives the link, picks their dates, pays deposits per session. Everything tracked from start to finish.",
      mockup: (
        <div className="space-y-2">
          {[
            { session: "1. Linework", hours: "4 hrs", deposit: "$80" },
            { session: "2. Shading", hours: "4 hrs", deposit: "$80" },
            { session: "3. Color & Detail", hours: "3 hrs", deposit: "$60" },
          ].map((s) => (
            <div key={s.session} className="flex items-center justify-between text-[10px] bg-ink-800 rounded-lg px-3 py-2 border border-white/5">
              <span className="text-white font-medium">{s.session}</span>
              <span className="text-ink-300">{s.hours}</span>
              <span className="text-electric">{s.deposit}</span>
            </div>
          ))}
          <div className="flex justify-between text-xs pt-1 border-t border-white/5">
            <span className="text-white font-semibold">Total: 11 hrs — $1,100</span>
            <span className="text-electric font-semibold">$220 deposits</span>
          </div>
          <div className="text-[9px] text-ink-400 text-center">Custom link sent to client → they pick dates → deposits collected automatically</div>
        </div>
      ),
    },
  },
  {
    id: "dashboard",
    label: "Admin Dashboards",
    icon: BarChart,
    content: {
      title: "Three dashboards — admin, receptionist, artist",
      description: "Admin gets full control: bookings, clients, payments, artists, calendar, referral partners. Receptionist gets today's schedule, check-in/no-show buttons, phone booking wizard, client lookup. Artists get their personal schedule, session notes, project progress tracking (linework → shading → color → touch-up), and client profiles.",
      mockup: (
        <div className="space-y-2">
          <div className="flex gap-1.5 mb-2">
            {["Admin", "Receptionist", "Artist"].map((r) => (
              <span key={r} className={`text-[9px] px-2 py-1 rounded-full ${r === "Admin" ? "bg-electric/20 text-electric" : "bg-ink-800 text-ink-400"}`}>{r}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Today", value: "6 sessions" },
              { label: "Revenue", value: "$2,840" },
              { label: "Pending", value: "3 deposits" },
            ].map((s) => (
              <div key={s.label} className="bg-ink-800 rounded p-2 border border-white/5 text-center">
                <p className="text-[8px] text-ink-400">{s.label}</p>
                <p className="text-xs text-white font-bold">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-ink-800 rounded p-2 border border-white/5">
            <p className="text-[8px] text-ink-400 mb-1">Active Projects</p>
            {[
              { name: "Alex M. — Sleeve", stage: "Shading", pct: 65 },
              { name: "Casey L. — Back", stage: "Linework", pct: 30 },
            ].map((p) => (
              <div key={p.name} className="py-1">
                <div className="flex justify-between text-[9px]">
                  <span className="text-ink-200">{p.name}</span>
                  <span className="text-electric">{p.stage}</span>
                </div>
                <div className="h-1 bg-ink-700 rounded-full mt-0.5">
                  <div className="h-full bg-electric rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  },
  {
    id: "crm",
    label: "CRM & Consent",
    icon: Shield,
    content: {
      title: "Every client, every session, every form — tracked",
      description: "Full client profiles with contact info, tattoo history, session-by-session tracking, payment records, notes (consultation, design, medical, follow-up), consent form status, and tags (VIP, Regular, Walk-in). Digital consent forms screen 17 medical conditions with digital signature. No paper. No clipboards. Everything on file before they sit in the chair.",
      mockup: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-ink-800 rounded-lg p-2 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric/30 to-neon-pink/30 flex items-center justify-center shrink-0">
              <span className="text-[9px] font-bold text-white">AM</span>
            </div>
            <div>
              <p className="text-[10px] text-white font-medium">Alex Martinez</p>
              <div className="flex gap-1">
                <span className="text-[7px] px-1 bg-electric/10 text-electric rounded">VIP</span>
                <span className="text-[7px] px-1 bg-neon-green/10 text-neon-green rounded">Consent ✓</span>
              </div>
            </div>
            <span className="text-[9px] text-ink-400 ml-auto">$2,840 LTV</span>
          </div>
          <div className="bg-ink-800 rounded-lg p-2 border border-white/5">
            <p className="text-[8px] text-ink-400 mb-1">Session History</p>
            {[
              { s: "Linework", status: "✓", color: "text-neon-green" },
              { s: "Shading", status: "75%", color: "text-electric" },
              { s: "Color", status: "—", color: "text-ink-500" },
            ].map((x) => (
              <div key={x.s} className="flex justify-between text-[9px] py-0.5">
                <span className="text-ink-200">{x.s}</span>
                <span className={x.color}>{x.status}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {["Deposits: $480", "Paid: $1,960", "Owed: $400"].map((v) => (
              <div key={v} className="text-center text-[8px] py-1 bg-ink-800 rounded border border-white/5 text-ink-300">{v}</div>
            ))}
          </div>
        </div>
      ),
    },
  },
];

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState("shop");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="See It In Action"
          title="A Platform That Actually Runs Your Shop"
          description="Not a contact form with a calendar. A real system that handles design browsing, booking, payments, scheduling, client management, and multi-session tracking."
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
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
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
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {active.content.title}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  {active.content.description}
                </p>
              </div>
              <div className="bg-ink-900 rounded-lg p-3 border border-white/5">
                {active.content.mockup}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
