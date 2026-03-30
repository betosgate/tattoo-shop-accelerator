"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function AIDesignStudioHero() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-green/4 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 mb-8">
            <Sparkles className="h-4 w-4 text-electric" />
            <span className="text-sm font-medium text-electric">New Feature</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            AI Tattoo Design Studio
            <br />
            <span className="gradient-text">Built Into Your Website</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-300 max-w-3xl mx-auto leading-relaxed">
            The only AI design tool that connects directly to your booking calendar.
            Customers go from &ldquo;I have an idea&rdquo; to &ldquo;I&apos;m booking an appointment&rdquo;
            without ever leaving your site.
          </p>

          {/* Key differentiator callout */}
          <div className="mt-8 inline-block glass-card rounded-xl px-6 py-3 border-electric/20">
            <p className="text-sm text-ink-300">
              <span className="text-white font-semibold">No other tool in the market</span>{" "}
              connects AI tattoo design to a real artist&apos;s booking calendar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-demo"
            className="px-8 py-3.5 text-base font-semibold bg-electric text-ink-950 rounded-lg hover:bg-electric-light transition-colors glow-electric"
          >
            Book a Demo
          </Link>
          <Link
            href="#how-it-works"
            className="group px-8 py-3.5 text-base font-semibold text-white border border-white/10 rounded-lg hover:border-electric/30 hover:bg-white/5 transition-all flex items-center gap-2"
          >
            See How It Works
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
