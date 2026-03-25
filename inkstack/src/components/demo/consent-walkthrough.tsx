"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Shield, AlertCircle, CheckSquare, Pen } from "lucide-react";

const medicalConditions = [
  "Heart Disease", "Diabetes", "Epilepsy", "Hemophilia",
  "Hepatitis", "HIV/AIDS", "Skin Conditions", "Autoimmune Disease",
  "Blood Disorders", "Cancer", "Pregnancy", "Nursing",
  "Recent Surgery", "Keloid Scarring", "Allergies", "Metal Allergies",
  "Latex Sensitivity",
];

export function ConsentWalkthrough() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader
          badge="Digital Consent Forms"
          title="Professional. Thorough. Legally Sound."
          description="No more clipboards and paper forms. Clients complete a comprehensive digital health questionnaire before their appointment — protecting your studio and creating a professional first impression."
        />
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 sm:p-8">
          <div className="space-y-6">
            {/* Personal info section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-electric" />
                <h3 className="text-sm font-semibold text-white">Personal Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Full Name", "Date of Birth", "Phone Number", "Email Address", "Emergency Contact", "Emergency Phone"].map((field) => (
                  <div key={field} className="bg-ink-800 rounded-lg px-3 py-2 border border-white/5">
                    <p className="text-[9px] text-ink-500 mb-0.5">{field}</p>
                    <div className="h-4 bg-ink-700 rounded w-3/4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Medical conditions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="h-4 w-4 text-neon-pink" />
                <h3 className="text-sm font-semibold text-white">Medical History — 17 Conditions Screened</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {medicalConditions.map((condition) => (
                  <div key={condition} className="flex items-center gap-2 text-xs text-ink-300 bg-ink-800 rounded px-2.5 py-1.5 border border-white/5">
                    <div className="w-3.5 h-3.5 rounded border border-white/20 shrink-0" />
                    {condition}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional questions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckSquare className="h-4 w-4 text-electric" />
                <h3 className="text-sm font-semibold text-white">Additional Screening</h3>
              </div>
              <div className="space-y-2">
                {[
                  "Are you currently taking any medications?",
                  "Have you consumed alcohol in the past 24 hours?",
                  "Are you currently taking blood thinners?",
                  "Do you have any known allergies to ink, latex, or metals?",
                  "Have you had any tattoos before? Any adverse reactions?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-2 text-xs text-ink-300 bg-ink-800 rounded px-3 py-2 border border-white/5">
                    <div className="flex gap-2 shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                    </div>
                    <span>{q}</span>
                    <span className="text-ink-600 text-[9px] ml-auto shrink-0">Yes / No</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Pen className="h-4 w-4 text-neon-green" />
                <h3 className="text-sm font-semibold text-white">Digital Signature</h3>
              </div>
              <div className="bg-ink-800 rounded-lg p-4 border border-white/5">
                <p className="text-xs text-ink-400 mb-3">
                  By signing below, I acknowledge that I have read and understood the risks associated with tattooing, and that all information provided above is accurate and complete.
                </p>
                <div className="h-16 border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-ink-600 italic">Client signature captured digitally</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[9px] text-ink-500">Date: March 25, 2026</span>
                  <span className="text-[9px] text-neon-green flex items-center gap-1">
                    <CheckSquare className="h-3 w-3" /> Form stored securely
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
