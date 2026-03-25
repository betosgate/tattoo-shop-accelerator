"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Check, X, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";

export function PricingCards() {
  return (
    <Section className="pt-0">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_TIERS.map((tier) => (
          <StaggerItem key={tier.name}>
            <div
              className={`relative rounded-2xl p-6 h-full flex flex-col ${
                tier.popular
                  ? "glass-card border-electric/30 border glow-electric"
                  : "glass-card"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-electric text-ink-950 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <p className="text-sm text-ink-400 mt-1">{tier.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    ${tier.monthlyFee}
                  </span>
                  <span className="text-sm text-ink-400">/month</span>
                </div>
                <p className="text-xs text-ink-500 mt-1">
                  + ${tier.setupFee.toLocaleString()} one-time setup
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-300">{feature}</span>
                  </li>
                ))}
                {tier.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 opacity-40">
                    <X className="h-4 w-4 text-ink-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  tier.popular
                    ? "bg-electric text-ink-950 hover:bg-electric-light glow-electric"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="text-center mt-8">
        <p className="text-sm text-ink-500">
          All plans include hosting, SSL, maintenance, and technical support. 30-day money-back guarantee.
        </p>
      </div>
    </Section>
  );
}
