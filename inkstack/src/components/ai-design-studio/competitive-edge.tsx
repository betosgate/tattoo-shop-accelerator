"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Check, X, Minus } from "lucide-react";

type Status = "yes" | "no" | "partial" | "limited" | "value";

const features = [
  { name: "AI Design Generation", ours: "yes", blackink: "yes", tattoosai: "yes", fotor: "yes" },
  { name: "Multiple Variations Per Click", ours: "value:4", blackink: "value:1", tattoosai: "value:1", fotor: "value:1" },
  { name: "Body Placement Awareness", ours: "yes", blackink: "partial", tattoosai: "no", fotor: "no" },
  { name: "Real-Time Price Estimates", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "One-Click Booking", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "Artist Style Matching", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "Consultation Pre-Fill", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "Edit / Iterate Designs", ours: "yes", blackink: "no", tattoosai: "limited", fotor: "no" },
  { name: "Design Persistence", ours: "yes", blackink: "no", tattoosai: "partial", fotor: "no" },
  { name: "Favorites System", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "Integrated with Shop Website", ours: "yes", blackink: "no", tattoosai: "no", fotor: "no" },
  { name: "Revenue for the Shop", ours: "value:$10/pack", blackink: "value:$0", tattoosai: "value:$0", fotor: "value:$0" },
] as const;

function StatusCell({ status }: { status: string }) {
  if (status.startsWith("value:")) {
    const val = status.replace("value:", "");
    return <span className="text-sm font-semibold text-white">{val}</span>;
  }
  switch (status) {
    case "yes":
      return <Check className="h-5 w-5 text-neon-green mx-auto" />;
    case "no":
      return <X className="h-5 w-5 text-neon-pink/60 mx-auto" />;
    case "partial":
    case "limited":
      return <Minus className="h-5 w-5 text-ink-500 mx-auto" />;
    default:
      return null;
  }
}

export function CompetitiveEdge() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          title="Why Standalone AI Tools Can't Compete"
          description={'Tools like BlackInk AI, TattoosAI, and Fotor generate designs — then leave the customer with a downloaded image and no next step. 80% of potential clients are lost between "I love this design" and "I\'m sitting in the chair."'}
        />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-5 py-4 text-ink-400 font-medium">Feature</th>
                    <th className="text-center px-4 py-4 text-electric font-semibold">Your Platform</th>
                    <th className="text-center px-4 py-4 text-ink-400 font-medium">BlackInk AI</th>
                    <th className="text-center px-4 py-4 text-ink-400 font-medium">TattoosAI</th>
                    <th className="text-center px-4 py-4 text-ink-400 font-medium">Fotor</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((f) => (
                    <tr key={f.name} className="border-b border-white/5 last:border-0">
                      <td className="px-5 py-3.5 text-white font-medium">{f.name}</td>
                      <td className="text-center px-4 py-3.5 bg-electric/5">
                        <StatusCell status={f.ours} />
                      </td>
                      <td className="text-center px-4 py-3.5">
                        <StatusCell status={f.blackink} />
                      </td>
                      <td className="text-center px-4 py-3.5">
                        <StatusCell status={f.tattoosai} />
                      </td>
                      <td className="text-center px-4 py-3.5">
                        <StatusCell status={f.fotor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Key callout */}
      <FadeUp delay={0.2}>
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-xl p-6 border-electric/20 bg-electric/5">
            <p className="text-base text-white font-semibold mb-2">
              Design &rarr; Estimate &rarr; Book &rarr; Get Tattooed
            </p>
            <p className="text-sm text-ink-400">
              All on your website. Every interaction captures the lead. No third-party tools, no lost customers.
            </p>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
