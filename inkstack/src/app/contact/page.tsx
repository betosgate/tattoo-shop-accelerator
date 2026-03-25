import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/form";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule a free 30-minute demo to see how InkStack can transform your tattoo studio's digital presence.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
