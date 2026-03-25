"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { User, Tag, History, FileText, CreditCard, Star } from "lucide-react";

export function CRMWalkthrough() {
  return (
    <Section id="crm">
      <FadeUp>
        <SectionHeader
          badge="Tattoo-Specific CRM"
          title="Not a Generic Contact List. A Tattoo CRM."
          description="Track every client's journey from their first consultation to their latest touch-up. This isn't Salesforce adapted for tattoo — it's built from the chair."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-6 sm:p-8">
          {/* Client profile mockup */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8">
            {/* Profile sidebar */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric/30 to-neon-pink/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">AM</span>
                </div>
                <h3 className="text-lg font-bold text-white">Alex Martinez</h3>
                <p className="text-xs text-ink-400">Client since Jan 2024</p>
                <div className="flex gap-1.5 justify-center mt-2">
                  <span className="text-[9px] px-2 py-0.5 bg-electric/10 text-electric rounded-full">VIP</span>
                  <span className="text-[9px] px-2 py-0.5 bg-neon-green/10 text-neon-green rounded-full">Regular</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <User className="h-3.5 w-3.5 text-ink-500" />
                  <span className="text-ink-300">alex.m@email.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Tag className="h-3.5 w-3.5 text-ink-500" />
                  <span className="text-ink-300">(555) 234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CreditCard className="h-3.5 w-3.5 text-ink-500" />
                  <span className="text-ink-300">$2,840 lifetime value</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Star className="h-3.5 w-3.5 text-ink-500" />
                  <span className="text-ink-300">Referred by: Iron Barber (partner)</span>
                </div>
              </div>
            </div>

            {/* Profile details */}
            <div className="space-y-4">
              {/* Tattoo history */}
              <div className="rounded-lg bg-ink-900 border border-white/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <History className="h-4 w-4 text-electric" />
                  <h4 className="text-sm font-semibold text-white">Tattoo History</h4>
                </div>
                {[
                  {
                    piece: "Japanese Sleeve (Left Arm)",
                    sessions: [
                      { type: "Linework", date: "Jan 15", status: "Complete", paid: "$400" },
                      { type: "Shading", date: "Feb 12", status: "Complete", paid: "$350" },
                      { type: "Color", date: "Mar 8", status: "In Progress", paid: "$300" },
                      { type: "Touch-up", date: "TBD", status: "Scheduled", paid: "—" },
                    ],
                  },
                  {
                    piece: "Chest Script",
                    sessions: [
                      { type: "Linework", date: "Nov 3", status: "Complete", paid: "$200" },
                    ],
                  },
                ].map((tattoo) => (
                  <div key={tattoo.piece} className="mb-3 last:mb-0">
                    <p className="text-xs font-medium text-white mb-1.5">{tattoo.piece}</p>
                    {tattoo.sessions.map((s) => (
                      <div key={s.type + s.date} className="flex items-center justify-between py-1 text-[10px]">
                        <span className="text-ink-300 w-16">{s.type}</span>
                        <span className="text-ink-500 w-12">{s.date}</span>
                        <span className={`w-16 ${
                          s.status === "Complete" ? "text-neon-green" :
                          s.status === "In Progress" ? "text-electric" :
                          "text-ink-500"
                        }`}>{s.status}</span>
                        <span className="text-ink-400 w-12 text-right">{s.paid}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div className="rounded-lg bg-ink-900 border border-white/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-4 w-4 text-electric" />
                  <h4 className="text-sm font-semibold text-white">Notes</h4>
                </div>
                {[
                  { type: "Consultation", text: "Wants full sleeve — Japanese style with koi fish, waves, and cherry blossoms. Reference images saved.", date: "Jan 10" },
                  { type: "Design", text: "Approved final design v3. Added temple in background. Starting linework next session.", date: "Jan 12" },
                  { type: "Medical", text: "No allergies. Takes ibuprofen occasionally. No blood thinners.", date: "Jan 15" },
                ].map((note) => (
                  <div key={note.type} className="py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] px-1.5 py-0.5 bg-electric/10 text-electric rounded">{note.type}</span>
                      <span className="text-[9px] text-ink-500">{note.date}</span>
                    </div>
                    <p className="text-[10px] text-ink-300">{note.text}</p>
                  </div>
                ))}
              </div>

              {/* Payment summary */}
              <div className="rounded-lg bg-ink-900 border border-white/5 p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Payment Summary</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="text-lg font-bold text-neon-green">$1,250</p>
                    <p className="text-[9px] text-ink-500">Deposits Paid</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">$1,590</p>
                    <p className="text-[9px] text-ink-500">Balances Paid</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-neon-pink">$300</p>
                    <p className="text-[9px] text-ink-500">Outstanding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
