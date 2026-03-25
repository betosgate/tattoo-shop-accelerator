"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Headphones, Palette } from "lucide-react";

const roles = [
  {
    id: "admin",
    label: "Admin",
    icon: Shield,
    description: "Full control over everything — the studio owner's command center.",
    capabilities: [
      "View and manage all bookings across all artists",
      "Add, edit, and remove example tattoo designs with pricing",
      "Manage artist profiles, schedules, and availability",
      "Set calendar availability and block off dates",
      "View all payments — deposits, balances, and outstanding amounts",
      "Manage referral partners and view commission reports",
      "Access the full client database with search and filtering",
      "Create admin payment links for custom invoicing",
      "Export reports and view business analytics",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue (MTD)", value: "$12,840", change: "+22%" },
            { label: "Active Bookings", value: "34", change: "+15%" },
            { label: "New Clients", value: "18", change: "+8%" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-ink-800 p-3 border border-white/5">
              <p className="text-[9px] text-ink-400">{s.label}</p>
              <p className="text-lg font-bold text-white">{s.value}</p>
              <p className="text-[9px] text-neon-green">{s.change}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-ink-800 p-3 border border-white/5">
          <p className="text-[10px] text-ink-400 mb-2">Quick Actions</p>
          <div className="grid grid-cols-2 gap-1.5">
            {["Manage Designs", "View Bookings", "Artist Schedule", "Payment Links"].map((a) => (
              <div key={a} className="text-[9px] text-center py-1.5 bg-ink-700 rounded text-ink-300">{a}</div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "receptionist",
    label: "Receptionist",
    icon: Headphones,
    description: "The front desk powerhouse — designed for the person who keeps the studio running.",
    capabilities: [
      "View today's complete schedule at a glance",
      "5-step phone booking wizard for walk-in and phone bookings",
      "Quick client lookup by name, email, or phone",
      "Check-in clients when they arrive",
      "Mark no-shows with one click",
      "Mark sessions as complete",
      "View client details and booking history",
      "Access upcoming appointments and waitlist",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="rounded-lg bg-ink-800 p-3 border border-white/5">
          <p className="text-[10px] text-ink-400 mb-2">Today&apos;s Schedule — March 25</p>
          {[
            { time: "10:00 AM", name: "Alex M.", status: "Checked In", type: "Sleeve Session" },
            { time: "1:00 PM", name: "Jordan K.", status: "Confirmed", type: "Consultation" },
            { time: "3:30 PM", name: "Taylor R.", status: "Confirmed", type: "Touch-up" },
            { time: "5:00 PM", name: "Sam P.", status: "Walk-in", type: "Small Piece" },
          ].map((a) => (
            <div key={a.time} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-electric font-mono w-14">{a.time}</span>
                <span className="text-[10px] text-white">{a.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-ink-500">{a.type}</span>
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                  a.status === "Checked In" ? "bg-neon-green/10 text-neon-green" :
                  a.status === "Walk-in" ? "bg-neon-pink/10 text-neon-pink" :
                  "bg-electric/10 text-electric"
                }`}>{a.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["Check In", "No Show", "Complete"].map((a) => (
            <div key={a} className="text-[9px] text-center py-2 bg-ink-800 rounded text-ink-300 border border-white/5">{a}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "artist",
    label: "Artist",
    icon: Palette,
    description: "Each artist gets their own personal dashboard — no clutter from other artists' bookings.",
    capabilities: [
      "View personal schedule and upcoming sessions",
      "Add session notes for each appointment",
      "Track active projects with progress bars (linework → shading → color → touch-up)",
      "View client profiles and tattoo history",
      "See deposit status and payment info per booking",
      "Manage their own portfolio images",
      "View their earnings and commission breakdowns",
    ],
    mockup: (
      <div className="space-y-3">
        <div className="rounded-lg bg-ink-800 p-3 border border-white/5">
          <p className="text-[10px] text-ink-400 mb-2">Active Projects</p>
          {[
            { client: "Alex M.", piece: "Japanese Sleeve", stage: "Shading", progress: 65 },
            { client: "Casey L.", piece: "Back Panel", stage: "Linework", progress: 30 },
            { client: "Morgan T.", piece: "Chest Piece", stage: "Color", progress: 85 },
          ].map((p) => (
            <div key={p.client} className="py-2 border-b border-white/5 last:border-0">
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-white">{p.client} — {p.piece}</span>
                <span className="text-electric">{p.stage}</span>
              </div>
              <div className="h-1.5 bg-ink-700 rounded-full overflow-hidden">
                <div className="h-full bg-electric rounded-full transition-all" style={{ width: `${p.progress}%` }} />
              </div>
              <p className="text-[8px] text-ink-500 mt-0.5">{p.progress}% complete</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-ink-800 p-3 border border-white/5">
          <p className="text-[10px] text-ink-400 mb-1">Session Notes</p>
          <div className="text-[9px] text-ink-300 bg-ink-700 rounded p-2">
            &quot;Completed upper arm linework. Client wants to add cherry blossoms in the next session. Skin took ink well. Schedule 3-week follow-up for shading.&quot;
          </div>
        </div>
      </div>
    ),
  },
];

export function DashboardWalkthrough() {
  const [activeRole, setActiveRole] = useState("admin");
  const role = roles.find((r) => r.id === activeRole)!;

  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Admin Dashboard"
          title="Three Roles. Three Dashboards. Zero Confusion."
          description="Every person in your studio sees exactly what they need — nothing more, nothing less. Click each role below to see their view."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="max-w-4xl mx-auto">
          {/* Role tabs */}
          <div className="flex gap-2 mb-8 justify-center">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeRole === r.id
                    ? "bg-electric/10 text-electric border border-electric/20"
                    : "text-ink-400 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                <r.icon className="h-4 w-4" />
                {r.label}
              </button>
            ))}
          </div>

          {/* Role content */}
          <div className="glass-card rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <role.icon className="h-5 w-5 text-electric" />
                  <h3 className="text-xl font-bold text-white">{role.label} Dashboard</h3>
                </div>
                <p className="text-sm text-ink-300 mb-4">{role.description}</p>
                <ul className="space-y-2">
                  {role.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-ink-400">
                      <span className="text-electric mt-1 shrink-0">&#10003;</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ink-900 rounded-lg p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[9px] text-ink-500">dashboard / {role.id}</span>
                </div>
                {role.mockup}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
