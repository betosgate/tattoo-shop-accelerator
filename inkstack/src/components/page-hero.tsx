"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  backgroundImage,
}: {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
        </div>
      )}

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-electric bg-electric/10 border border-electric/20 rounded-full mb-4">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="gradient-text">{titleHighlight}</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-lg text-ink-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
