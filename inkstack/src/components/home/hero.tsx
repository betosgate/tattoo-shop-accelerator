"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background tattoo image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroArtistWorking}
          alt="Tattoo artist working in studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950/95" />
      </div>

      {/* Gradient glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-electric/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-[100px]" />
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
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] max-w-5xl mx-auto"
        >
          <span className="whitespace-nowrap">Run Your Studio. Fill Your Chair.</span>
          <br />
          <span className="gradient-text whitespace-nowrap">The Ultimate Tattoo Shop Platform.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg sm:text-xl text-ink-200 max-w-2xl mx-auto leading-relaxed"
        >
          Clients browse your designs, pick a size, choose body placement, and pay
          a deposit — all without a single DM or phone call. Custom pieces get a
          consultation-first flow with multi-session tracking. Three dashboards
          keep your admin, receptionist, and artists in sync. And 6 SEO-optimized
          websites bring clients to your door 24/7.{" "}
          <span className="whitespace-nowrap">All done for you.</span>
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 flex flex-wrap justify-center gap-2"
        >
          {[
            "Online Booking",
            "Stripe Payments",
            "Client CRM",
            "3 Dashboards",
            "Consent Forms",
            "Referral Program",
            "Portfolio Gallery",
            "SEO Domination",
          ].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 text-xs text-ink-300 bg-white/5 border border-white/10 rounded-full"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-demo"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold bg-electric text-ink-950 rounded-xl hover:bg-electric-light transition-all glow-electric"
          >
            Book a Free Demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/demo"
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all"
          >
            <Play className="h-4 w-4 text-electric" />
            See the Platform Live
          </Link>
        </motion.div>

        {/* Platform preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Browser chrome mockup */}
            <div className="rounded-xl border border-white/10 overflow-hidden glow-electric">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-ink-800 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-ink-700 rounded-md px-3 py-1 text-[10px] text-ink-400 text-center max-w-md mx-auto">
                    yourstudio.tattooshopaccelerator.com/admin
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="bg-ink-900 p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Bookings This Month", value: "47", change: "+23%", icon: "📅" },
                    { label: "Revenue Collected", value: "$8,420", change: "+31%", icon: "💰" },
                    { label: "New Clients", value: "28", change: "+18%", icon: "👤" },
                    { label: "Google Rankings", value: "#1-3", change: "12 keywords", icon: "📈" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-lg p-3">
                      <p className="text-[10px] text-ink-400">{stat.label}</p>
                      <p className="text-xl font-bold text-white mt-0.5">{stat.value}</p>
                      <p className="text-[10px] text-neon-green">{stat.change}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Today's schedule */}
                  <div className="glass-card rounded-lg p-3">
                    <p className="text-xs font-medium text-white mb-2">Today&apos;s Schedule</p>
                    {[
                      { time: "10:00", client: "Alex M.", type: "Sleeve — Shading", status: "Checked In" },
                      { time: "1:00", client: "Jordan K.", type: "Consultation", status: "Confirmed" },
                      { time: "3:30", client: "Taylor R.", type: "Touch-up", status: "Deposit Paid" },
                    ].map((appt) => (
                      <div key={appt.time} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-[9px] text-electric font-mono w-8">{appt.time}</span>
                        <span className="text-[10px] text-ink-200 flex-1">{appt.client}</span>
                        <span className="text-[8px] text-ink-500 hidden sm:inline">{appt.type}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active projects */}
                  <div className="glass-card rounded-lg p-3">
                    <p className="text-xs font-medium text-white mb-2">Active Projects</p>
                    {[
                      { client: "Alex M.", piece: "Japanese Sleeve", stage: "Shading", pct: 65 },
                      { client: "Casey L.", piece: "Back Panel", stage: "Linework", pct: 30 },
                      { client: "Morgan T.", piece: "Chest Piece", stage: "Color", pct: 85 },
                    ].map((p) => (
                      <div key={p.client} className="py-1.5 border-b border-white/5 last:border-0">
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-ink-200">{p.client}</span>
                          <span className="text-electric">{p.stage}</span>
                        </div>
                        <div className="h-1 bg-ink-800 rounded-full overflow-hidden">
                          <div className="h-full bg-electric rounded-full" style={{ width: `${p.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent payments */}
                  <div className="glass-card rounded-lg p-3">
                    <p className="text-xs font-medium text-white mb-2">Recent Payments</p>
                    {[
                      { client: "Alex M.", amount: "$80", type: "Deposit", method: "Stripe" },
                      { client: "Sam P.", amount: "$25", type: "Consult", method: "Stripe" },
                      { client: "Jordan K.", amount: "$320", type: "Balance", method: "Stripe" },
                    ].map((pay) => (
                      <div key={pay.client + pay.type} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-[10px] text-ink-200">{pay.client}</span>
                        <span className="text-[8px] text-ink-500">{pay.type}</span>
                        <span className="text-[10px] text-neon-green font-medium">{pay.amount}</span>
                      </div>
                    ))}
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
