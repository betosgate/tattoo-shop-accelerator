"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function TestimonialsSection() {
  return (
    <Section>
      <FadeUp>
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-2xl overflow-hidden">
            {/* Background image with heavy overlay */}
            <div className="absolute inset-0">
              <Image
                src={IMAGES.artistWorking1}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-ink-950/90" />
            </div>

            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Quote side */}
                <div className="flex-1">
                  <Quote className="h-10 w-10 text-electric/30 mb-4" />
                  <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-6">
                    &ldquo;Before this platform, I was managing bookings through DMs and texts,
                    losing money to no-shows, and spending more time on my phone than in the chair.
                    Now clients browse my designs, pick their size and placement, pay a deposit,
                    and book their own time — I don&apos;t touch it. The receptionist dashboard
                    handles walk-ins and phone calls. I just show up and tattoo. My bookings
                    are up, my no-shows are basically zero, and I&apos;m not wasting hours on
                    back-and-forth for template pieces anymore. This is what every shop needs.&rdquo;
                  </blockquote>

                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-electric text-electric" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric/40 to-neon-pink/40 flex items-center justify-center shrink-0 border-2 border-electric/20">
                      <span className="text-lg font-bold text-white">NJ</span>
                    </div>
                    <div>
                      <p className="text-base font-bold text-white">Nick Jayne</p>
                      <p className="text-sm text-ink-300">Lead Artist & Owner</p>
                      <a
                        href="https://www.synergytattoorexburg.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-electric hover:underline mt-0.5"
                      >
                        Synergy Tattoo — Rexburg, ID
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stats side */}
                <div className="w-full md:w-auto shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                    {[
                      { value: "15+", label: "Years Experience" },
                      { value: "2,000+", label: "Tattoos Completed" },
                      { value: "~0%", label: "No-Show Rate" },
                      { value: "6", label: "Live Websites" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-center md:text-left"
                      >
                        <p className="text-xl font-bold text-electric">{stat.value}</p>
                        <p className="text-[11px] text-ink-400">{stat.label}</p>
                      </div>
                    ))}
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
