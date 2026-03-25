"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { ShoppingCart, MousePointer, CreditCard, CheckCircle, ArrowRight, MessageSquare, Palette } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const exampleDesigns = [
  "Traditional Rose", "Geometric Wolf", "Fine Line Butterfly", "Skull & Serpent",
  "Japanese Koi", "Ornamental Mandala", "Compass & Anchor", "Realistic Lion",
  "Watercolor Hummingbird", "Dragon Back Piece", "Micro Wildflower", "Floral Sleeve",
];

function PathAWalkthrough() {
  return (
    <div className="space-y-6">
      {[
        {
          step: "1", title: "Browse Curated Designs",
          desc: "Clients browse 20+ ready-to-book designs in a visual grid. Each card shows the design image, name, price range, estimated hours, and available sizes.",
          mockup: (
            <div className="grid grid-cols-3 gap-2">
              {exampleDesigns.slice(0, 6).map((d) => (
                <div key={d} className="rounded-lg bg-ink-800 p-2 text-center border border-white/5 hover:border-electric/20 transition-colors cursor-pointer">
                  <div className="aspect-square rounded bg-gradient-to-br from-ink-700 to-ink-600 mb-1.5" />
                  <p className="text-[9px] text-ink-300 truncate">{d}</p>
                  <p className="text-[8px] text-electric">2-4 hrs &middot; From $200</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          step: "2", title: "Select Size & Body Placement",
          desc: "Choose from Small, Medium, Large, or Extra Large — pricing updates automatically at $100/hr. Then pick from 44 body placement areas. Admins can exclude placements per design (e.g., large back piece blocked from fingers).",
          mockup: (
            <div className="space-y-3">
              <div>
                <p className="text-[10px] text-ink-400 mb-1.5">Select Size</p>
                <div className="flex gap-2">
                  {[
                    { size: "S", hrs: "1-1.5 hrs", price: "$100-150" },
                    { size: "M", hrs: "2-3 hrs", price: "$200-300" },
                    { size: "L", hrs: "3-4 hrs", price: "$300-400" },
                    { size: "XL", hrs: "4-6 hrs", price: "$400-600" },
                  ].map((s) => (
                    <div key={s.size} className={`flex-1 py-2 rounded text-center border ${s.size === "M" ? "border-electric text-electric bg-electric/10" : "border-white/10 text-ink-400"}`}>
                      <p className="text-xs font-bold">{s.size}</p>
                      <p className="text-[8px] mt-0.5">{s.hrs}</p>
                      <p className="text-[8px]">{s.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-ink-400 mb-1.5">Select Placement (44 areas)</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {["Upper Arm", "Forearm", "Back", "Chest", "Ribs", "Thigh", "Calf", "Neck"].map((area) => (
                    <div key={area} className={`text-center py-1.5 rounded text-[8px] border ${area === "Forearm" ? "bg-electric/10 text-electric border-electric/20" : "bg-ink-800 text-ink-300 border-white/5"}`}>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        },
        {
          step: "3", title: "Pay Deposit & Book",
          desc: "Deposits are $20/hour, collected securely via Stripe. A 2-hour medium tattoo = $40 deposit. Clients can also enter a referral code for 5% off. Remaining balance due at the appointment.",
          mockup: (
            <div className="space-y-2">
              <div className="rounded-lg bg-ink-800 border border-white/5 p-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-400">Traditional Rose — Medium</span>
                  <span className="text-white">$200.00</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-ink-400">Placement: Forearm</span>
                  <span className="text-ink-400">2 hrs</span>
                </div>
                <div className="border-t border-white/5 mt-2 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-ink-300 font-medium">Deposit Due Now</span>
                    <span className="text-electric font-bold">$40.00</span>
                  </div>
                  <p className="text-[8px] text-ink-500 mt-0.5">$160.00 remaining, due at appointment</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-electric">
                <span className="text-ink-500">Have a referral code?</span>
                <span className="px-2 py-0.5 bg-electric/10 rounded text-electric">IRONBARBER → 5% off</span>
              </div>
              <div className="h-9 bg-electric/20 rounded-lg flex items-center justify-center">
                <span className="text-xs text-electric font-medium">Pay $40.00 Deposit via Stripe</span>
              </div>
            </div>
          ),
        },
        {
          step: "4", title: "Confirmed — Everyone Notified",
          desc: "Client receives confirmation email with appointment details. The booking appears instantly on the admin dashboard, artist's calendar, and receptionist's schedule. No more phone tag.",
          mockup: (
            <div className="rounded-lg bg-neon-green/5 border border-neon-green/20 p-4 text-center">
              <CheckCircle className="h-7 w-7 text-neon-green mx-auto mb-2" />
              <p className="text-sm font-medium text-white mb-3">Booking Confirmed!</p>
              <div className="space-y-1.5 text-left text-[10px]">
                <div className="flex justify-between"><span className="text-ink-400">Design</span><span className="text-ink-200">Traditional Rose — Medium</span></div>
                <div className="flex justify-between"><span className="text-ink-400">Placement</span><span className="text-ink-200">Forearm</span></div>
                <div className="flex justify-between"><span className="text-ink-400">Date</span><span className="text-ink-200">Apr 15, 2026 — 2:00 PM</span></div>
                <div className="flex justify-between"><span className="text-ink-400">Deposit Paid</span><span className="text-neon-green">$40.00 ✓</span></div>
                <div className="flex justify-between"><span className="text-ink-400">Remaining</span><span className="text-ink-200">$160.00 at session</span></div>
              </div>
            </div>
          ),
        },
      ].map((step, idx) => (
        <FadeUp key={step.step} delay={idx * 0.1}>
          <div className="glass-card rounded-xl p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-electric/10 text-xs font-bold text-electric">{step.step}</span>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-sm text-ink-300 leading-relaxed">{step.desc}</p>
              </div>
              <div className="bg-ink-900 rounded-lg p-3 border border-white/5">{step.mockup}</div>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

function PathBWalkthrough() {
  return (
    <div className="space-y-6">
      {[
        {
          step: "1", title: "Book a 15-Minute Consultation ($25)",
          desc: "Client books a consultation with the artist to discuss their vision. They select a date/time and pay $25 online. This is a dedicated sit-down to plan the piece — not a quick chat.",
        },
        {
          step: "2", title: "Meet the Artist & Plan the Piece",
          desc: "At the consultation, the artist discusses the design concept, reviews reference images, assesses placement and sizing, and creates a session plan. For a half-sleeve, this might be: Session 1 Linework (4 hrs), Session 2 Shading (4 hrs), Session 3 Color & Detail (3 hrs).",
        },
        {
          step: "3", title: "Admin Creates Custom Booking Link",
          desc: "The artist communicates the session plan to admin. Admin creates a custom booking link with the exact sessions, hours, and pricing pre-configured. The link is sent to the client via text or email.",
        },
        {
          step: "4", title: "Client Books & Pays via Custom Link",
          desc: "Client opens their personalized link, selects dates for each session, and pays deposits ($20/hr per session). For the half-sleeve example: $80 + $80 + $60 = $220 total deposits. Links expire after 14 days (admin can regenerate).",
        },
        {
          step: "5", title: "Multi-Session Project Begins",
          desc: "All sessions appear on the calendar. After each session, the artist logs notes (what was completed, what's planned next). The CRM tracks progress from linework → shading → color → touch-up automatically.",
        },
      ].map((step, idx) => (
        <FadeUp key={step.step} delay={idx * 0.05}>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-pink/10 border border-neon-pink/20 text-xs font-bold text-neon-pink shrink-0">{step.step}</span>
              {idx < 4 && <div className="w-px flex-1 bg-gradient-to-b from-neon-pink/20 to-transparent mt-2" />}
            </div>
            <div className="pb-6">
              <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </FadeUp>
      ))}

      {/* Custom booking link example */}
      <FadeUp delay={0.3}>
        <div className="glass-card rounded-xl p-5">
          <h4 className="text-sm font-semibold text-white mb-3">Example: Custom Booking Link for a Half-Sleeve</h4>
          <div className="bg-ink-900 rounded-lg p-4 border border-white/5 space-y-2">
            {[
              { session: "Session 1 — Linework", hours: "4 hrs", cost: "$400", deposit: "$80" },
              { session: "Session 2 — Shading", hours: "4 hrs", cost: "$400", deposit: "$80" },
              { session: "Session 3 — Color & Detail", hours: "3 hrs", cost: "$300", deposit: "$60" },
            ].map((s) => (
              <div key={s.session} className="flex items-center justify-between text-[10px] py-1.5 border-b border-white/5 last:border-0">
                <span className="text-ink-200 font-medium">{s.session}</span>
                <span className="text-ink-400">{s.hours}</span>
                <span className="text-ink-300">{s.cost}</span>
                <span className="text-electric">{s.deposit} deposit</span>
              </div>
            ))}
            <div className="flex justify-between text-xs pt-2 border-t border-white/5">
              <span className="text-white font-semibold">Total: 11 hours — $1,100</span>
              <span className="text-electric font-semibold">Deposits: $220</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

export function BookingWalkthrough() {
  const [activePath, setActivePath] = useState<"a" | "b">("a");

  return (
    <Section id="booking">
      <FadeUp>
        <SectionHeader
          badge="Booking System — Two Paths"
          title="How Clients Book & Pay"
          description="Every studio needs two booking paths: one for clients who know what they want (browse & book instantly), and one for clients who want something custom (consultation first). Here's how both work."
        />
      </FadeUp>

      {/* Path selector */}
      <FadeUp delay={0.1}>
        <div className="flex gap-3 justify-center mb-8">
          <button
            onClick={() => setActivePath("a")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              activePath === "a"
                ? "bg-electric/10 text-electric border border-electric/20"
                : "text-ink-400 border border-white/5 hover:border-white/10"
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            Path A: Browse & Book Instantly
          </button>
          <button
            onClick={() => setActivePath("b")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              activePath === "b"
                ? "bg-neon-pink/10 text-neon-pink border border-neon-pink/20"
                : "text-ink-400 border border-white/5 hover:border-white/10"
            }`}
          >
            <Palette className="h-4 w-4" />
            Path B: Custom Consultation
          </button>
        </div>
      </FadeUp>

      <div className="max-w-4xl mx-auto">
        {activePath === "a" ? <PathAWalkthrough /> : <PathBWalkthrough />}
      </div>

      <FadeUp delay={0.4}>
        <div className="text-center mt-8">
          <a
            href="https://www.synergytattoorexburg.com/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-electric hover:underline"
          >
            See the live booking system on Synergy Tattoo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </FadeUp>
    </Section>
  );
}
