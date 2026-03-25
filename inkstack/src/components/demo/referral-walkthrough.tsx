"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Handshake, QrCode, DollarSign, BarChart3 } from "lucide-react";

export function ReferralWalkthrough() {
  return (
    <Section id="referrals">
      <FadeUp>
        <SectionHeader
          badge="Referral Partner Program"
          title="Turn Local Businesses Into Your Marketing Army"
          description="Barber shops, gyms, smoke shops, coffee shops — any local business can become a referral partner. They earn commission, your clients save money, and you get a steady stream of new bookings."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="max-w-4xl mx-auto">
          {/* How it works */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Handshake, title: "Partner Signs Up", detail: "Local business gets a unique referral code and marketing materials" },
              { icon: QrCode, title: "Client Uses Code", detail: "Customer enters the partner's code at booking and gets 5% off their deposit" },
              { icon: DollarSign, title: "Partner Earns", detail: "Partner earns 5% commission on the deposit and final balance" },
              { icon: BarChart3, title: "Track Everything", detail: "Partner dashboard shows referrals, revenue generated, and payouts" },
            ].map((step) => (
              <div key={step.title} className="glass-card rounded-xl p-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-electric" />
                </div>
                <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                <p className="text-xs text-ink-400 mt-1">{step.detail}</p>
              </div>
            ))}
          </div>

          {/* Partner dashboard mockup */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-base font-bold text-white mb-4">Partner Dashboard Preview</h3>
            <div className="bg-ink-900 rounded-lg p-4 border border-white/5">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric/30 to-neon-green/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">IB</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Iron Barber Shop</p>
                  <p className="text-xs text-ink-400">Partner since Nov 2024 &middot; Code: IRONBARBER</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Total Referrals", value: "34" },
                  { label: "Revenue Generated", value: "$8,420" },
                  { label: "Commission Earned", value: "$421" },
                  { label: "Next Payout", value: "$85" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-lg font-bold text-white">{s.value}</p>
                    <p className="text-[9px] text-ink-500">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-ink-800 p-3 border border-white/5">
                <p className="text-[10px] text-ink-400 mb-2">Recent Referrals</p>
                {[
                  { client: "Jordan K.", date: "Mar 22", deposit: "$40", commission: "$2.00" },
                  { client: "Taylor R.", date: "Mar 18", deposit: "$60", commission: "$3.00" },
                  { client: "Sam P.", date: "Mar 15", deposit: "$40", commission: "$2.00" },
                ].map((r) => (
                  <div key={r.client} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0 text-[10px]">
                    <span className="text-ink-300">{r.client}</span>
                    <span className="text-ink-500">{r.date}</span>
                    <span className="text-ink-400">Deposit: {r.deposit}</span>
                    <span className="text-neon-green">+{r.commission}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Physical Marketing Materials</h4>
                <p className="text-xs text-ink-400">Every partner receives branded posters and cards with their unique QR code. Customers scan the code, it pre-fills their referral discount at checkout.</p>
              </div>
              <div className="glass-card rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Monthly Payouts</h4>
                <p className="text-xs text-ink-400">Commissions are tracked automatically. Partners receive monthly payouts with full transaction details. No manual math, no spreadsheets.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
