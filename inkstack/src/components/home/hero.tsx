"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-electric/3 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-electric bg-electric/10 border border-electric/20 rounded-full mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
            Built for Tattoo Studios
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Dominate Every{" "}
          <span className="gradient-text">Tattoo Search</span>{" "}
          in Your City
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-ink-300 max-w-2xl mx-auto leading-relaxed"
        >
          Your competitors are getting the clients that should be yours.
          Tattoo Shop Accelerator gives you 6 websites, 200+ SEO articles, and a complete
          booking platform — all done for you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold bg-electric text-ink-950 rounded-xl hover:bg-electric-light transition-all glow-electric"
          >
            Book a Free Demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/features"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all"
          >
            <Play className="h-4 w-4 text-electric" />
            See How It Works
          </Link>
        </motion.div>

        {/* Social proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-sm text-ink-500"
        >
          Trusted by <span className="text-ink-300 font-medium">150+ tattoo studios</span> across the United States
        </motion.p>

        {/* Platform preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Browser chrome mockup */}
            <div className="rounded-xl border border-white/10 overflow-hidden glow-electric">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-800 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-ink-700 rounded-md px-3 py-1 text-xs text-ink-400 text-center max-w-md mx-auto">
                    yourstudio.tattooshopaccelerator.com
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="bg-ink-900 p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Bookings This Month", value: "47", change: "+23%" },
                    { label: "Revenue Collected", value: "$8,420", change: "+31%" },
                    { label: "New Clients", value: "28", change: "+18%" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-lg p-4">
                      <p className="text-xs text-ink-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <p className="text-xs text-neon-green mt-1">{stat.change} from last month</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4">
                    <p className="text-sm font-medium text-white mb-3">Today&apos;s Schedule</p>
                    {[
                      { time: "10:00 AM", client: "Alex M.", type: "Full sleeve session" },
                      { time: "1:00 PM", client: "Jordan K.", type: "Custom consultation" },
                      { time: "3:30 PM", client: "Taylor R.", type: "Touch-up appointment" },
                    ].map((appt) => (
                      <div key={appt.time} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                        <span className="text-xs text-electric font-mono">{appt.time}</span>
                        <span className="text-sm text-ink-200">{appt.client}</span>
                        <span className="text-xs text-ink-500 ml-auto">{appt.type}</span>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card rounded-lg p-4">
                    <p className="text-sm font-medium text-white mb-3">SEO Performance</p>
                    <div className="space-y-3">
                      {[
                        { keyword: "tattoo shop near me", position: "#1" },
                        { keyword: "best tattoo artist [city]", position: "#2" },
                        { keyword: "custom tattoo design", position: "#1" },
                        { keyword: "fine line tattoo [city]", position: "#3" },
                      ].map((kw) => (
                        <div key={kw.keyword} className="flex items-center justify-between">
                          <span className="text-xs text-ink-300">{kw.keyword}</span>
                          <span className="text-xs font-semibold text-neon-green">{kw.position}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect behind mockup */}
            <div className="absolute -inset-4 bg-electric/5 rounded-2xl blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
