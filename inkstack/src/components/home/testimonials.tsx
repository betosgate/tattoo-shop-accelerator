"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <Section>
      <FadeUp>
        <SectionHeader
          badge="Results"
          title="Studios That Made the Switch"
          description="Real results from real tattoo shop owners who stopped leaving money on the table."
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <div className="glass-card rounded-xl p-6 h-full flex flex-col">
              <Quote className="h-8 w-8 text-electric/20 mb-4" />
              <p className="text-sm text-ink-200 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-electric text-electric"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric/30 to-neon-pink/30 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-white">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-400">{testimonial.role}</p>
                    <p className="text-xs text-ink-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
