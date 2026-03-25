"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-electric bg-electric/10 border border-electric/20 rounded-full mb-4">
            Let&apos;s Talk
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Ready to <span className="gradient-text">Accelerate</span><br />
            Your Studio?
          </h1>
          <p className="mt-6 text-lg text-ink-300 max-w-2xl mx-auto">
            Book a free 30-minute demo. No sales pitch — just a real conversation about what this platform can do for your shop.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
