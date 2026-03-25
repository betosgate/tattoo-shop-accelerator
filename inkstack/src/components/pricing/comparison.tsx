"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Professional tattoo studio website", us: true, diy: false, agency: true, generic: "partial" },
  { feature: "5 SEO satellite websites", us: true, diy: false, agency: false, generic: false },
  { feature: "200+ SEO articles written for you", us: true, diy: false, agency: false, generic: false },
  { feature: "Online booking with deposit collection", us: true, diy: false, agency: "partial", generic: true },
  { feature: "44 body areas with size-based pricing", us: true, diy: false, agency: false, generic: false },
  { feature: "Stripe payment processing", us: true, diy: false, agency: "partial", generic: true },
  { feature: "3 role-based dashboards", us: true, diy: false, agency: false, generic: false },
  { feature: "Tattoo-specific CRM & session tracking", us: true, diy: false, agency: false, generic: false },
  { feature: "Digital consent forms (17 conditions)", us: true, diy: false, agency: false, generic: false },
  { feature: "Referral partner program", us: true, diy: false, agency: false, generic: false },
  { feature: "Portfolio gallery with video", us: true, diy: "partial", agency: true, generic: "partial" },
  { feature: "Ongoing hosting & maintenance", us: true, diy: false, agency: "partial", generic: true },
  { feature: "Mobile-first, blazing fast", us: true, diy: false, agency: "partial", generic: "partial" },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-neon-green mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-ink-600 mx-auto" />;
  return <span className="text-[10px] text-yellow-500 mx-auto">Partial</span>;
}

export function PricingComparison() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Comparison"
          title="vs. Your Other Options"
          description="See what you'd actually get if you tried to build this yourself or hire someone else."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm font-medium text-ink-400 py-3 pr-4">Feature</th>
                <th className="text-center text-sm font-semibold text-electric py-3 px-3 w-24">TSA</th>
                <th className="text-center text-sm font-medium text-ink-400 py-3 px-3 w-24">DIY (Wix)</th>
                <th className="text-center text-sm font-medium text-ink-400 py-3 px-3 w-24">Agency</th>
                <th className="text-center text-sm font-medium text-ink-400 py-3 px-3 w-24">Generic SaaS</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="text-sm text-ink-200 py-2.5 pr-4">{row.feature}</td>
                  <td className="text-center py-2.5 px-3"><StatusIcon value={row.us} /></td>
                  <td className="text-center py-2.5 px-3"><StatusIcon value={row.diy} /></td>
                  <td className="text-center py-2.5 px-3"><StatusIcon value={row.agency} /></td>
                  <td className="text-center py-2.5 px-3"><StatusIcon value={row.generic} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-ink-800/50 rounded-lg p-3 border border-white/5 text-center">
              <p className="text-xs text-ink-400">DIY (Wix/Squarespace)</p>
              <p className="text-sm font-semibold text-white">$12-40/mo</p>
              <p className="text-[10px] text-ink-500">No SEO, no booking, no CRM</p>
            </div>
            <div className="bg-ink-800/50 rounded-lg p-3 border border-white/5 text-center">
              <p className="text-xs text-ink-400">Hiring an Agency</p>
              <p className="text-sm font-semibold text-white">$10,000-25,000</p>
              <p className="text-[10px] text-ink-500">One site, no SEO articles, outdated in 2 years</p>
            </div>
            <div className="bg-electric/5 rounded-lg p-3 border border-electric/20 text-center">
              <p className="text-xs text-electric">Tattoo Shop Accelerator</p>
              <p className="text-sm font-semibold text-white">$5,000 + $249/mo</p>
              <p className="text-[10px] text-ink-400">6 sites, 200+ articles, full platform</p>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
