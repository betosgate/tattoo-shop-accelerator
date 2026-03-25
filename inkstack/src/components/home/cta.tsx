"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function CTASection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background tattoo image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.tattooedPerson2}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink-950/90" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 border border-electric/20">
              <Zap className="h-7 w-7 text-electric" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to Own Your Local{" "}
            <span className="gradient-text">Search Results?</span>
          </h2>

          <p className="mt-6 text-lg text-ink-300 max-w-2xl mx-auto">
            Stop losing clients to shops with better websites. Get a free demo
            and see exactly how Tattoo Shop Accelerator will transform your studio&apos;s digital
            presence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold bg-electric text-ink-950 rounded-xl hover:bg-electric-light transition-all glow-electric"
            >
              Book Your Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 text-base font-semibold text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-6 text-sm text-ink-500">
            Free 30-minute demo &middot; No credit card required &middot; See results in 90 days
          </p>
        </motion.div>
      </div>
    </section>
  );
}
