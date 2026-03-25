"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { ShoppingCart, MousePointer, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

const bookingSteps = [
  {
    step: "1",
    icon: MousePointer,
    title: "Browse & Choose",
    description: "Clients browse your example designs organized by style — traditional, fine line, watercolor, geometric, realism, and more. Each design shows available sizes and starting prices.",
    mockup: (
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {["Traditional Rose", "Fine Line Bird", "Geometric Wolf"].map((d) => (
            <div key={d} className="rounded-lg bg-ink-800 p-2 text-center border border-white/5">
              <div className="aspect-square rounded bg-gradient-to-br from-ink-700 to-ink-600 mb-1.5" />
              <p className="text-[10px] text-ink-300">{d}</p>
              <p className="text-[9px] text-electric">From $150</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    step: "2",
    icon: ShoppingCart,
    title: "Pick Size & Body Placement",
    description: "Clients select their exact size (small, medium, large, extra-large) and body placement from 44 mapped areas. Pricing adjusts automatically — premium areas like neck and hands include a $25/hr surcharge.",
    mockup: (
      <div className="space-y-3">
        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size} className={`flex-1 py-2 rounded text-center text-xs font-medium border ${size === "M" ? "border-electric text-electric bg-electric/10" : "border-white/10 text-ink-400"}`}>
              {size}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {["Upper Arm", "Forearm", "Back", "Chest", "Ribs +$25", "Thigh", "Calf", "Neck +$25"].map((area) => (
            <div key={area} className={`text-center py-1.5 rounded text-[9px] ${area.includes("+$25") ? "bg-neon-pink/10 text-neon-pink border border-neon-pink/20" : "bg-ink-800 text-ink-300 border border-white/5"}`}>
              {area}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs border-t border-white/5 pt-2">
          <span className="text-ink-400">Subtotal</span>
          <span className="text-white font-medium">$180.00</span>
        </div>
      </div>
    ),
  },
  {
    step: "3",
    icon: CreditCard,
    title: "Pay Deposit via Stripe",
    description: "A $20/hour deposit is collected securely through Stripe. For consultations, it's a flat $25 fee. No more Venmo, Cash App, or 'I'll pay when I get there' no-shows.",
    mockup: (
      <div className="space-y-3">
        <div className="rounded-lg bg-ink-800 border border-white/5 p-3">
          <p className="text-xs text-ink-400 mb-2">Deposit Required</p>
          <p className="text-2xl font-bold text-white">$40.00</p>
          <p className="text-[10px] text-ink-500">$20/hr × 2hr minimum</p>
        </div>
        <div className="rounded-lg bg-ink-800 border border-white/5 p-3 space-y-2">
          <div className="h-7 bg-ink-700 rounded" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-7 bg-ink-700 rounded" />
            <div className="h-7 bg-ink-700 rounded" />
          </div>
          <div className="h-9 bg-electric/20 rounded flex items-center justify-center">
            <span className="text-xs text-electric font-medium">Pay $40.00 Deposit</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          <div className="w-3 h-3 rounded bg-ink-600" />
          <span className="text-[10px] text-ink-500">Powered by Stripe — PCI compliant</span>
        </div>
      </div>
    ),
  },
  {
    step: "4",
    icon: CheckCircle,
    title: "Booking Confirmed",
    description: "Client receives a confirmation with their appointment details. The studio gets a notification. The booking appears on the admin dashboard and artist's schedule immediately.",
    mockup: (
      <div className="rounded-lg bg-neon-green/5 border border-neon-green/20 p-4 text-center">
        <CheckCircle className="h-8 w-8 text-neon-green mx-auto mb-2" />
        <p className="text-sm font-medium text-white">Booking Confirmed!</p>
        <div className="mt-3 space-y-1.5 text-left">
          <div className="flex justify-between text-xs">
            <span className="text-ink-400">Design</span>
            <span className="text-ink-200">Traditional Rose — Medium</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-ink-400">Placement</span>
            <span className="text-ink-200">Upper Arm</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-ink-400">Deposit Paid</span>
            <span className="text-neon-green">$40.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-ink-400">Remaining</span>
            <span className="text-ink-200">$140.00 due at session</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function BookingWalkthrough() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Booking System Walkthrough"
          title="How Clients Book & Pay — Step by Step"
          description="Two booking paths: browse example designs for a quick book, or submit a custom consultation request. Either way, deposits are collected before they walk through your door."
        />
      </FadeUp>

      <div className="max-w-4xl mx-auto space-y-8">
        {bookingSteps.map((step, idx) => (
          <FadeUp key={step.step} delay={idx * 0.1}>
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                      <span className="text-sm font-bold text-electric">{step.step}</span>
                    </div>
                    <step.icon className="h-5 w-5 text-ink-400" />
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-ink-300 leading-relaxed">{step.description}</p>
                  {idx < bookingSteps.length - 1 && (
                    <div className="flex items-center gap-2 mt-4 text-xs text-ink-500">
                      <ArrowRight className="h-3 w-3" />
                      <span>Next: {bookingSteps[idx + 1].title}</span>
                    </div>
                  )}
                </div>
                <div className="bg-ink-900 rounded-lg p-4 border border-white/5">
                  {step.mockup}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.4}>
        <div className="text-center mt-8">
          <a
            href="https://www.synergytattoorexburg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-electric hover:underline"
          >
            See the booking system live on Synergy Tattoo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </FadeUp>
    </Section>
  );
}
