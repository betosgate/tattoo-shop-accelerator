"use client";

import { Section } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Globe, Code, Users, TrendingUp, Zap, Award } from "lucide-react";

const credentials = [
  { icon: Globe, label: "300+ Websites Launched", detail: "Two decades of SEO and web development" },
  { icon: Code, label: "2,000+ Projects Delivered", detail: "From startups to INC 500 companies" },
  { icon: Users, label: "Tattoo Shop Owner", detail: "Co-owner of Synergy Tattoo in Rexburg, ID" },
  { icon: TrendingUp, label: "SEO Since 2002", detail: "Before most people knew what SEO was" },
  { icon: Zap, label: "200+ Businesses Modeled", detail: "Deep understanding of what actually drives revenue" },
  { icon: Award, label: "National Conference Speaker", detail: "Keynotes on SEO, digital marketing, and AI" },
];

export function Story() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Profile */}
            <div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-ink-800 to-ink-700 border border-white/10 overflow-hidden mb-4 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 rounded-full bg-electric/10 border-2 border-electric/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-electric">BP</span>
                  </div>
                  <p className="text-lg font-bold text-white">Beto Paredes</p>
                  <p className="text-sm text-ink-400">Founder & CEO</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-ink-400">
                <p>Co-owner, Synergy Tattoo</p>
                <p>Rexburg, Idaho</p>
                <p className="text-electric">beto@betoparedes.com</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  20 Years in Digital Marketing.<br />
                  A Tattoo Shop Owner Who Gets It.
                </h2>
                <div className="space-y-4 text-ink-300 leading-relaxed">
                  <p>
                    Most people selling websites to tattoo shops have never set foot behind the counter.
                    I have. I co-own <strong className="text-white">Synergy Tattoo in Rexburg, Idaho</strong> — so I know
                    firsthand the chaos of managing bookings through DMs, losing money to no-shows, and watching
                    mediocre shops outrank you on Google.
                  </p>
                  <p>
                    But here&apos;s the thing — I&apos;ve also been building websites and running SEO campaigns since 2002.
                    Over the past two decades, I&apos;ve launched <strong className="text-white">300+ websites</strong>,
                    delivered <strong className="text-white">2,000+ projects</strong>, and worked with
                    companies on the INC 500/5000 list. I&apos;ve trained 1,800 sales reps, built affiliate platforms processing
                    75,000+ monthly transactions, and even consulted for Microsoft.
                  </p>
                  <p>
                    When I saw how badly the tattoo industry was being served by generic website builders and
                    Instagram-only marketing, I knew I could build something better. Not a cookie-cutter template —
                    a complete digital ecosystem engineered specifically for how tattoo shops actually operate.
                  </p>
                  <p>
                    Tattoo Shop Accelerator is the platform I built for my own shop first. Then I realized
                    every studio in America needs this. The booking system, the CRM that tracks sessions from
                    linework to touch-up, the satellite SEO strategy that dominates entire regions — it all
                    came from solving real problems in a real tattoo shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Credentials grid */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            {credentials.map((cred) => (
              <div key={cred.label} className="glass-card rounded-xl p-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 mx-auto mb-3">
                  <cred.icon className="h-5 w-5 text-electric" />
                </div>
                <p className="text-sm font-semibold text-white">{cred.label}</p>
                <p className="text-xs text-ink-400 mt-1">{cred.detail}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
