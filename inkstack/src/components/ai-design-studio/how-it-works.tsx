"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  Palette, MapPin, Ruler, MessageSquare, Wand2, Pencil, CalendarCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Palette,
    title: "Choose a Style",
    description:
      "Customers pick from up to 20 professionally curated tattoo styles — American Traditional, Neo-Traditional, Japanese, Realism, Fine Line, Watercolor, Geometric, Dotwork, Blackwork, and more. Each style uses expert-crafted AI prompts tuned to that tradition.",
    highlight: "Shop owners control which styles are enabled based on their artists' specialties.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Select Body Placement",
    description:
      "Upper arm, forearm, chest, back, ribs, thigh, calf, shoulder, wrist, ankle, hand — or no preference. The AI adjusts its output based on placement: wrap-around compositions for arms, bold symmetrical designs for chest, elongated verticals for ribs.",
    highlight: "Designs are tailored to the actual body surface they'll be tattooed on.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Choose a Size",
    description:
      "Small (2-4 sq in, 1-1.5 hrs), Medium (5-7 sq in, 2-3 hrs), or Large (8+ sq in, 3-6 hrs). Size directly impacts the AI prompt for appropriate detail levels and shows customers a real-time price estimate based on your shop's hourly rate.",
    highlight: "Customers see real pricing while designing — no sticker shock surprises.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Describe Their Vision",
    description:
      "Plain language. \"An eagle with spread wings clutching a banner that says FREEDOM, with roses underneath.\" Each style includes pre-populated example ideas to spark inspiration for customers who need a starting point.",
    highlight: null,
  },
  {
    number: "05",
    icon: Wand2,
    title: "Generate 4 Unique Variations",
    description:
      "One click generates 4 unique design variations simultaneously — Classic Interpretation, Unique Composition, Bold & Dramatic, and Elegant & Balanced. Meaningful variety from a single prompt, not 4 copies of the same design.",
    highlight: "Powered by Google Gemini's multimodal image generation with 200-word style-specific prompts.",
  },
  {
    number: "06",
    icon: Pencil,
    title: "Refine & Iterate",
    description:
      "Click Edit on any design to refine it: \"Add more roses,\" \"Make the eagle larger,\" \"Change the banner text,\" \"Simplify it.\" The AI preserves the composition while making targeted changes. Customers can iterate multiple times.",
    highlight: null,
  },
  {
    number: "07",
    icon: CalendarCheck,
    title: "Book This Design",
    accent: true,
    description:
      "The feature no standalone AI tool offers. Click \"Book This Design\" — the design downloads, a booking modal shows estimated cost and session time, and one click takes them to a consultation form pre-filled with the design description, placement, and size.",
    highlight: "From \"I have an idea\" to \"I'm booking an appointment\" — all on your website.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <FadeUp>
        <SectionHeader
          title="How It Works"
          description="Seven steps from inspiration to booked appointment. Every step happens on your website."
        />
      </FadeUp>

      <div className="relative mt-8">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-electric/40 via-electric/20 to-transparent hidden sm:block" />

        <StaggerContainer className="space-y-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className={`relative sm:pl-16 ${step.accent ? "sm:pl-16" : ""}`}>
                {/* Step number circle */}
                <div
                  className={`hidden sm:flex absolute left-0 top-1 h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold ${
                    step.accent
                      ? "border-electric bg-electric/20 text-electric"
                      : "border-ink-600 bg-ink-800 text-ink-300"
                  }`}
                >
                  {step.number}
                </div>

                <div
                  className={`glass-card rounded-xl p-6 group transition-all ${
                    step.accent
                      ? "border-electric/30 bg-electric/5"
                      : "hover:border-electric/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        step.accent
                          ? "bg-electric/20 border border-electric/30"
                          : "bg-electric/10 border border-electric/20 group-hover:bg-electric/20"
                      }`}
                    >
                      <step.icon className="h-5 w-5 text-electric" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-ink-500 sm:hidden">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-ink-400 leading-relaxed">
                        {step.description}
                      </p>
                      {step.highlight && (
                        <p className="mt-3 text-sm font-medium text-electric/80 border-l-2 border-electric/30 pl-3">
                          {step.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
