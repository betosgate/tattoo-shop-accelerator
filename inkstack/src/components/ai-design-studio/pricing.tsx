"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { DollarSign, TrendingUp, Zap } from "lucide-react";

const revenueExamples = [
  { packs: 10, revenue: "$150", fee: "$50", profit: "$100" },
  { packs: 25, revenue: "$375", fee: "$125", profit: "$250" },
  { packs: 50, revenue: "$750", fee: "$250", profit: "$500" },
];

export function PricingSection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          title="Pricing That Makes You Money"
          description="Your customers pay $15 per Design Pack. You keep $10. Pure incremental revenue."
        />
      </FadeUp>

      {/* Pricing breakdown */}
      <FadeUp delay={0.1}>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Customer pays */}
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mb-4">
              <DollarSign className="h-6 w-6 text-electric" />
            </div>
            <p className="text-sm text-ink-400 mb-1">Customer Pays</p>
            <p className="text-3xl font-bold text-white">$15</p>
            <p className="text-xs text-ink-500 mt-2">per Design Pack</p>
            <p className="text-xs text-ink-400 mt-1">10 generations &times; 4 variations = 40 designs</p>
          </div>

          {/* Platform fee */}
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-ink-700/50 border border-ink-600/50 mb-4">
              <Zap className="h-6 w-6 text-ink-400" />
            </div>
            <p className="text-sm text-ink-400 mb-1">Platform Fee</p>
            <p className="text-3xl font-bold text-ink-300">$5</p>
            <p className="text-xs text-ink-500 mt-2">billed to your card on file</p>
            <p className="text-xs text-ink-400 mt-1">No manual invoicing needed</p>
          </div>

          {/* Shop profit */}
          <div className="glass-card rounded-xl p-6 text-center border-electric/20 bg-electric/5">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-electric/20 border border-electric/30 mb-4">
              <TrendingUp className="h-6 w-6 text-electric" />
            </div>
            <p className="text-sm text-electric/80 mb-1">Your Profit</p>
            <p className="text-3xl font-bold text-white">$10</p>
            <p className="text-xs text-ink-400 mt-2">per Design Pack sold</p>
            <p className="text-xs text-electric/60 mt-1">Plus bookings that follow</p>
          </div>
        </div>
      </FadeUp>

      {/* Revenue potential table */}
      <FadeUp delay={0.2}>
        <div className="max-w-2xl mx-auto mt-10">
          <h3 className="text-lg font-semibold text-white text-center mb-5">
            Monthly Revenue Potential
          </h3>
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-5 py-3 text-ink-400 font-medium">Packs Sold</th>
                  <th className="text-center px-5 py-3 text-ink-400 font-medium">Revenue</th>
                  <th className="text-center px-5 py-3 text-ink-400 font-medium">Platform Fee</th>
                  <th className="text-right px-5 py-3 text-electric font-semibold">Your Profit</th>
                </tr>
              </thead>
              <tbody>
                {revenueExamples.map((row) => (
                  <tr key={row.packs} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-3 text-white font-medium">{row.packs}/mo</td>
                    <td className="text-center px-5 py-3 text-ink-300">{row.revenue}</td>
                    <td className="text-center px-5 py-3 text-ink-400">{row.fee}</td>
                    <td className="text-right px-5 py-3 text-electric font-semibold">{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-ink-400">
            This is pure incremental revenue. Many of these customers will also book consultations ($25) and
            tattoo sessions ($100+/hr) — revenue your shop would never have captured without the AI design tool.
          </p>
        </div>
      </FadeUp>
    </Section>
  );
}
