"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Professional tattoo studio website", starter: true, growth: true, domination: true },
  { name: "Online booking with deposits", starter: true, growth: true, domination: true },
  { name: "Stripe payment processing", starter: true, growth: true, domination: true },
  { name: "Digital consent forms", starter: true, growth: true, domination: true },
  { name: "Portfolio gallery (images + video)", starter: true, growth: true, domination: true },
  { name: "Admin dashboard", starter: true, growth: true, domination: true },
  { name: "Aftercare & FAQ pages", starter: true, growth: true, domination: true },
  { name: "SSL & hosting included", starter: true, growth: true, domination: true },
  { name: "Mobile-responsive design", starter: true, growth: true, domination: true },
  { name: "SEO satellite websites", starter: false, growth: "3 sites", domination: "5 sites" },
  { name: "SEO articles written for you", starter: false, growth: "120+", domination: "200+" },
  { name: "Surrounding cities targeted", starter: false, growth: "3 cities", domination: "5 cities" },
  { name: "Referral partner program", starter: false, growth: true, domination: true },
  { name: "Partner dashboard & tracking", starter: false, growth: true, domination: true },
  { name: "QR code marketing materials", starter: false, growth: true, domination: true },
  { name: "11 on-site SEO landing pages", starter: false, growth: true, domination: true },
  { name: "Receptionist dashboard", starter: false, growth: true, domination: true },
  { name: "Full CRM with multi-artist support", starter: false, growth: false, domination: true },
  { name: "Artist personal dashboards", starter: false, growth: false, domination: true },
  { name: "Session tracking (linework → color)", starter: false, growth: false, domination: true },
  { name: "Priority support & onboarding", starter: false, growth: false, domination: true },
  { name: "Dedicated account manager", starter: false, growth: false, domination: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-neon-green mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-ink-600 mx-auto" />;
  return <span className="text-xs text-electric font-medium">{value}</span>;
}

export function PricingComparison() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Compare Plans"
          title="Full Feature Breakdown"
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-sm font-medium text-ink-400 py-4 pr-4">Feature</th>
                <th className="text-center text-sm font-medium text-ink-300 py-4 px-4 w-28">Starter</th>
                <th className="text-center text-sm font-semibold text-electric py-4 px-4 w-28">Growth</th>
                <th className="text-center text-sm font-medium text-ink-300 py-4 px-4 w-28">Domination</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.name} className="border-b border-white/5">
                  <td className="text-sm text-ink-200 py-3 pr-4">{row.name}</td>
                  <td className="text-center py-3 px-4"><CellValue value={row.starter} /></td>
                  <td className="text-center py-3 px-4"><CellValue value={row.growth} /></td>
                  <td className="text-center py-3 px-4"><CellValue value={row.domination} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
    </Section>
  );
}
