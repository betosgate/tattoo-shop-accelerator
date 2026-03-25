"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const pricingFAQs = [
  {
    question: "What's included in the $5,000?",
    answer: "Everything. Your main studio website, 5 SEO satellite websites, 200+ SEO articles, the complete booking system with Stripe payments, 3 admin dashboards, tattoo-specific CRM, digital consent forms, referral partner program, portfolio gallery, 11 SEO landing pages, marketing materials, and full setup and configuration. It's a complete done-for-you digital platform.",
  },
  {
    question: "What does the $249/month cover?",
    answer: "Hosting for all 6 websites, SSL certificates, ongoing maintenance, technical support, dashboard access, software updates, uptime monitoring, and SEO performance reporting. Everything stays live and running — you don't have to think about it.",
  },
  {
    question: "Can I do a payment plan?",
    answer: "Yes. Instead of $5,000 upfront, you can pay $1,250/month for 4 months. The first $1,250 is your down payment to start the build. You save $500 by paying in full ($4,500). Monthly hosting ($249/mo) starts after launch either way.",
  },
  {
    question: "Are there any contracts?",
    answer: "No long-term contracts for the monthly hosting. Pay month-to-month, cancel with 30 days notice. The platform build is a one-time project — once it's built, it's built. We're confident you'll stay because the results speak for themselves.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. If you're not satisfied within the first 30 days after launch, we'll refund your platform fee in full. No questions asked. We've never had to — but the guarantee is there because we stand behind our work.",
  },
  {
    question: "What happens if I cancel the monthly hosting?",
    answer: "You own your content and data. We'll export everything for you — portfolio images, client data, articles, and all content. We don't hold your data hostage. The websites will go offline since they run on our infrastructure, but all your content is yours.",
  },
  {
    question: "What's the ROI?",
    answer: "If you charge $150/hour and the platform brings in just 5 extra bookings per month (a conservative estimate given 200+ SEO articles driving traffic), that's $750/month in new revenue — 3x the hosting cost. Most studios see much more than that.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-sm font-medium text-white group-hover:text-electric transition-colors pr-4">{question}</span>
        <ChevronDown className={`h-4 w-4 text-ink-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-ink-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  return (
    <Section className="bg-ink-900/30">
      <FadeUp>
        <SectionHeader badge="Pricing FAQ" title="Common Questions About Pricing" />
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="max-w-2xl mx-auto">
          {pricingFAQs.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </FadeUp>
    </Section>
  );
}
