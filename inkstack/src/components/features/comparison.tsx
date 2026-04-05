"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, X, Minus } from "lucide-react";

const comparisons = [
  { feature: "AI Tattoo Design Studio", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Professional tattoo studio website", us: true, instagram: false, wordpress: "partial", generic: "partial" },
  { feature: "Online booking with deposits", us: true, instagram: false, wordpress: "partial", generic: true },
  { feature: "44 body areas with size pricing", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Stripe payment processing", us: true, instagram: false, wordpress: "partial", generic: true },
  { feature: "Digital consent forms", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Tattoo-specific CRM", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Multi-session tracking (linework → color)", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Custom booking links with expiration", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Walk-in & phone booking workflow", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Piercing module with jewelry inventory", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Aftercare system with healing timeline", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "5 SEO satellite websites", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "200+ SEO articles written for you", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Referral partner program", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "3 role-based dashboards", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Staff training documentation (39 sections)", us: true, instagram: false, wordpress: false, generic: false },
  { feature: "Mobile-first, blazing fast", us: true, instagram: true, wordpress: "partial", generic: "partial" },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-neon-green" />;
  if (value === false) return <X className="h-4 w-4 text-ink-600" />;
  return <Minus className="h-4 w-4 text-yellow-500" />;
}

export function ComparisonSection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Comparison"
          title="How We Stack Up"
          description="See why a purpose-built platform beats generic alternatives every time."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm font-medium text-ink-400 py-4 pr-4">Feature</th>
                <th className="text-center text-sm font-semibold text-electric py-4 px-4">TSA</th>
                <th className="text-center text-sm font-medium text-ink-400 py-4 px-4">Instagram Only</th>
                <th className="text-center text-sm font-medium text-ink-400 py-4 px-4">WordPress</th>
                <th className="text-center text-sm font-medium text-ink-400 py-4 px-4">Generic SaaS</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="text-sm text-ink-200 py-3 pr-4">{row.feature}</td>
                  <td className="text-center py-3 px-4"><StatusIcon value={row.us} /></td>
                  <td className="text-center py-3 px-4"><StatusIcon value={row.instagram} /></td>
                  <td className="text-center py-3 px-4"><StatusIcon value={row.wordpress} /></td>
                  <td className="text-center py-3 px-4"><StatusIcon value={row.generic} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
    </Section>
  );
}
