"use client";

import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, ArrowRight, Zap, CreditCard } from "lucide-react";

export function PricingPreview() {
  return (
    <Section id="pricing">
      <FadeUp>
        <SectionHeader
          badge="Pricing"
          title="One Platform. One Price."
          description="No tiers to compare. No feature gating. You get everything — the full platform, all 6 websites, 200+ articles, and every feature."
        />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-8 glow-electric border border-electric/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">The Complete Platform</h3>
              <p className="text-sm text-ink-400">6 websites, 200+ articles, booking, CRM, referrals — everything</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Pay in Full */}
              <div className="rounded-xl bg-ink-800/50 p-4 border border-neon-green/20 text-center">
                <Zap className="h-5 w-5 text-neon-green mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">$4,500</p>
                <p className="text-xs text-neon-green">Pay in full — save $500</p>
              </div>

              {/* Payment Plan */}
              <div className="rounded-xl bg-ink-800/50 p-4 border border-white/10 text-center">
                <CreditCard className="h-5 w-5 text-electric mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">$1,250<span className="text-sm text-ink-400">/mo × 4</span></p>
                <p className="text-xs text-ink-400">Payment plan — $5,000 total</p>
              </div>
            </div>

            <p className="text-center text-sm text-ink-400 mb-6">
              + <span className="text-white font-medium">$249/month</span> hosting after launch &middot; No contracts &middot; Cancel anytime
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
              {[
                "AI Tattoo Design Studio", "Full studio website",
                "5 SEO satellite sites", "200+ SEO articles",
                "Online booking system", "Stripe payments",
                "3 admin dashboards", "Tattoo CRM",
                "Digital consent forms", "Referral program",
                "Piercing module", "Portfolio gallery",
              ].map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-xs text-ink-300">
                  <Check className="h-3 w-3 text-electric shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <Link
              href="/book-demo"
              className="flex items-center justify-center gap-2 w-full py-3 bg-electric text-ink-950 rounded-lg text-sm font-semibold hover:bg-electric-light transition-colors glow-electric"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-center text-xs text-ink-500 mt-4">
            <Link href="/pricing" className="text-electric hover:underline">See full feature list &rarr;</Link>
          </p>
        </div>
      </FadeUp>
    </Section>
  );
}
