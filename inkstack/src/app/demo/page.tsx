import type { Metadata } from "next";
import { DemoHero } from "@/components/demo/hero";
import { LiveSitesShowcase } from "@/components/demo/live-sites";
import { BookingWalkthrough } from "@/components/demo/booking-walkthrough";
import { DashboardWalkthrough } from "@/components/demo/dashboard-walkthrough";
import { CRMWalkthrough } from "@/components/demo/crm-walkthrough";
import { SEOShowcase } from "@/components/demo/seo-showcase";
import { ReferralWalkthrough } from "@/components/demo/referral-walkthrough";
import { ConsentWalkthrough } from "@/components/demo/consent-walkthrough";
import { PortfolioWalkthrough } from "@/components/demo/portfolio-walkthrough";
import { FullStackOverview } from "@/components/demo/full-stack-overview";
import { CTASection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "See It Live — Product Walkthrough",
  description:
    "Walk through every feature of the Tattoo Shop Accelerator platform. See the booking system, admin dashboard, CRM, SEO satellites, and more — all from a real, live studio.",
};

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <FullStackOverview />
      <LiveSitesShowcase />
      <BookingWalkthrough />
      <DashboardWalkthrough />
      <CRMWalkthrough />
      <SEOShowcase />
      <ReferralWalkthrough />
      <ConsentWalkthrough />
      <PortfolioWalkthrough />
      <CTASection />
    </>
  );
}
