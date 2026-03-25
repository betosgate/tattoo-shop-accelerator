"use client";

import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, ArrowRight, Zap, CreditCard } from "lucide-react";
import { PLATFORM_FEATURES } from "@/lib/constants";

export function PricingCards() {
  return (
    <Section className="pt-0">
      <div className="max-w-4xl mx-auto">
        {/* Two payment options side by side */}
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Pay in Full */}
            <div className="glass-card rounded-2xl p-6 border-neon-green/20 border relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-neon-green text-ink-950 rounded-full">
                Save $500
              </span>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-neon-green" />
                <h3 className="text-lg font-bold text-white">Pay in Full</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$4,500</span>
                  <span className="text-sm text-ink-400 line-through">$5,000</span>
                </div>
                <p className="text-sm text-neon-green mt-1">10% discount for upfront payment</p>
              </div>
              <p className="text-sm text-ink-300 mb-6">
                One-time payment gets you the complete platform built and launched. Save $500 vs. the payment plan.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-neon-green/10 text-neon-green border border-neon-green/20 hover:bg-neon-green/20 transition-all"
              >
                Get Started — Save $500
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Payment Plan */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-electric" />
                <h3 className="text-lg font-bold text-white">Payment Plan</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$1,250</span>
                  <span className="text-sm text-ink-400">/month × 4</span>
                </div>
                <p className="text-sm text-ink-400 mt-1">$5,000 total — first payment as down payment</p>
              </div>
              <p className="text-sm text-ink-300 mb-6">
                $1,250 down to start, then 3 monthly payments of $1,250. Platform builds during payment period.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                Start with $1,250 Down
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Monthly hosting */}
        <FadeUp delay={0.1}>
          <div className="glass-card rounded-xl p-5 text-center mb-10">
            <p className="text-sm text-ink-300">
              <span className="text-white font-semibold">+ $249/month</span> for hosting, maintenance, SSL, and technical support after launch.
              No contracts — cancel anytime with 30 days notice.
            </p>
          </div>
        </FadeUp>

        {/* Everything included */}
        <FadeUp delay={0.2}>
          <SectionHeader
            badge="Everything Included"
            title="One Platform. One Price. Everything Your Studio Needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto">
            {PLATFORM_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                <span className="text-sm text-ink-300">{feature}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
