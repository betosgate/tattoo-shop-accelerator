"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Rocket, Shield } from "lucide-react";
import { SalesPlaybook } from "./sales-playbook";
import { DeploymentGuide } from "./deployment-guide";

const tabs = [
  { id: "amelia", label: "Amelia — Sales", icon: Phone },
  { id: "landon", label: "Landon — Deployment", icon: Rocket },
] as const;

export function OperatorsHub() {
  const [active, setActive] = useState<"amelia" | "landon">("amelia");

  return (
    <div className="min-h-screen bg-ink-950 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/10 mb-4">
            <Shield className="h-3.5 w-3.5 text-electric" />
            <span className="text-xs font-semibold text-electric uppercase tracking-wider">Internal — Team Only</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Operators Hub
          </h1>
          <p className="mt-2 text-ink-400 max-w-xl mx-auto">
            Everything Amelia and Landon need to close deals and launch client sites.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                active === tab.id
                  ? "text-ink-950 bg-electric"
                  : "text-ink-300 bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {active === "amelia" ? <SalesPlaybook /> : <DeploymentGuide />}
        </motion.div>
      </div>
    </div>
  );
}
