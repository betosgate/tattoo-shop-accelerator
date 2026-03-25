import type { Metadata } from "next";
import { DemoHero } from "@/components/demo/hero";
import { BookingWalkthrough } from "@/components/demo/booking-walkthrough";
import { DashboardWalkthrough } from "@/components/demo/dashboard-walkthrough";
import { CRMWalkthrough } from "@/components/demo/crm-walkthrough";
import { ConsentWalkthrough } from "@/components/demo/consent-walkthrough";
import { ReferralWalkthrough } from "@/components/demo/referral-walkthrough";
import { PortfolioWalkthrough } from "@/components/demo/portfolio-walkthrough";
import { SEOCompact } from "@/components/demo/seo-compact";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "See It Live — Product Walkthrough",
  description:
    "Walk through every feature of the Tattoo Shop Accelerator platform. See the booking system, admin dashboard, CRM, SEO satellites, and more.",
};

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <BookingWalkthrough />
      <DashboardWalkthrough />
      <CRMWalkthrough />
      <ConsentWalkthrough />
      <ReferralWalkthrough />
      <PortfolioWalkthrough />
      <SEOCompact />
      <CTASection />
    </>
  );
}
