"use client";

import { Section, SectionHeader } from "@/components/section";
import { FadeUp } from "@/components/motion";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const pricingFAQs = [
  {
    question: "What's included in the setup fee?",
    answer: "The setup fee covers everything needed to launch your digital presence: custom website design & development, Stripe integration, consent form configuration, dashboard setup, domain configuration, SSL certificates, and — for Growth and Domination plans — all satellite websites and SEO article creation. It's a one-time investment for a complete turnkey platform.",
  },
  {
    question: "What does the monthly fee cover?",
    answer: "Hosting for all your websites, SSL certificates, ongoing maintenance, technical support, dashboard access, software updates, and uptime monitoring. For Growth and Domination plans, it also includes monthly SEO performance reporting.",
  },
  {
    question: "Are there any contracts or commitments?",
    answer: "No long-term contracts. We bill month-to-month after the initial setup. Cancel with 30 days notice. We're confident you'll stay because the results speak for themselves.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. Many shops start with Starter and upgrade to Growth or Domination once they see the booking increases. We'll handle the migration and build out the additional satellite sites and articles for the difference in setup fees.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes. If you're not satisfied within the first 30 days after launch, we'll refund your setup fee in full. No questions asked. We've never had to — but the guarantee is there because we stand behind our work.",
  },
  {
    question: "What happens if I cancel?",
    answer: "You own your content and data. We'll export everything for you — portfolio images, client data, articles, and all content. We don't hold your data hostage. The websites will go offline since they run on our infrastructure, but all your content is yours.",
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
