import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/form";

export const metadata: Metadata = {
  title: "Book a Free Demo — See How It Works for Your Tattoo Studio",
  description:
    "Schedule a free 30-minute demo of Tattoo Shop Accelerator. See the booking system, CRM, SEO strategy, and admin dashboard live. Call (208) 440-7609 or fill out the form.",
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
