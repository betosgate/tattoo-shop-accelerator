"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { Calendar, BarChart3, Users, Shield, Handshake, Image as ImageIcon } from "lucide-react";

const quickNav = [
  { icon: Calendar, label: "Booking System", href: "#booking" },
  { icon: BarChart3, label: "Dashboards", href: "#dashboards" },
  { icon: Users, label: "Client CRM", href: "#crm" },
  { icon: Shield, label: "Consent Forms", href: "#consent" },
  { icon: Handshake, label: "Referral Program", href: "#referrals" },
  { icon: ImageIcon, label: "Portfolio", href: "#portfolio" },
];

export function DemoHero() {
  return (
    <section className="relative pt-28 pb-8 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMAGES.heroTattooSession} alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-electric bg-electric/10 border border-electric/20 rounded-full mb-4">
            Live Product Walkthrough
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            See Exactly What <span className="gradient-text">Your Studio Gets</span>
          </h1>
          <p className="mt-4 text-base text-ink-300 max-w-xl mx-auto">
            Every feature below is live and running for a real tattoo studio right now. Not mockups — the real thing.
          </p>
        </motion.div>

        {/* Quick nav to sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {quickNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-ink-300 bg-white/5 border border-white/10 rounded-full hover:bg-electric/10 hover:text-electric hover:border-electric/20 transition-all"
            >
              <item.icon className="h-3 w-3" />
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
