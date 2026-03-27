import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BookingCalendar } from "@/components/booking/calendar";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book a Demo — Schedule Your Free 30-Minute Walkthrough",
  description:
    "Pick a time that works for you. Book a free 30-minute Zoom demo of Tattoo Shop Accelerator — see the booking system, CRM, SEO strategy, and admin dashboard live.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/book-demo",
  },
};

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        badge="Book a Demo"
        title="Pick a Time,"
        titleHighlight="We'll Handle the Rest"
        description="Choose an available 30-minute slot below. You'll get a Zoom link and calendar invite instantly — no back-and-forth needed."
        backgroundImage={IMAGES.studioInterior}
      />
      <BookingCalendar />
    </>
  );
}
