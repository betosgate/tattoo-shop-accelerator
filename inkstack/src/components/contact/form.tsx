"use client";

import { Section } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section className="pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <FadeUp>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Get in Touch
              </h2>
              <p className="text-sm text-ink-400 leading-relaxed">
                Have questions? Want to see a live demo? Reach out directly or fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+12084407609" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors">
                  <Phone className="h-4 w-4 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">(208) 440-7609</p>
                  <p className="text-xs text-ink-500">Call or text anytime</p>
                </div>
              </a>

              <a href="mailto:beto@betoparedes.com" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20 group-hover:bg-electric/20 transition-colors">
                  <Mail className="h-4 w-4 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">beto@betoparedes.com</p>
                  <p className="text-xs text-ink-500">Email us anytime</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                  <Clock className="h-4 w-4 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Response within 24 hours</p>
                  <p className="text-xs text-ink-500">Usually much faster</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                  <MapPin className="h-4 w-4 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Serving Studios Nationwide</p>
                  <p className="text-xs text-ink-500">All 50 states</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5">
              <p className="text-sm font-medium text-white mb-2">What to expect on the demo:</p>
              <ul className="space-y-1.5 text-sm text-ink-400">
                <li className="flex items-start gap-2">
                  <span className="text-electric">&#8226;</span>
                  Live walkthrough of the full platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric">&#8226;</span>
                  SEO strategy tailored to your market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric">&#8226;</span>
                  Honest assessment — is this right for your shop?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric">&#8226;</span>
                  No pressure, no obligation
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.2}>
          {submitted ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neon-green/10 border border-neon-green/20 mx-auto mb-4">
                <Send className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-sm text-ink-300">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours — usually much sooner.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-200 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="studio" className="block text-sm font-medium text-ink-200 mb-1.5">
                    Studio Name *
                  </label>
                  <input
                    type="text"
                    id="studio"
                    name="studio"
                    required
                    className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                    placeholder="Your Tattoo Studio"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-200 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                    placeholder="you@studio.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink-200 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-ink-200 mb-1.5">
                  City & State *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                  placeholder="Austin, TX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-200 mb-1.5">
                  Tell us about your studio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors resize-none"
                  placeholder="How many artists, what styles, current website (if any), biggest challenges..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-electric text-ink-950 rounded-lg text-sm font-semibold hover:bg-electric-light transition-colors glow-electric"
              >
                Send Message & Book Demo
              </button>

              <p className="text-xs text-ink-500 text-center">
                Free 30-minute demo. No credit card. No commitment.
              </p>
            </form>
          )}
        </FadeUp>
      </div>
    </Section>
  );
}
