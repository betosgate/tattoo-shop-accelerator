import type { Metadata } from "next";
import { AgreementPage } from "@/components/agreement/agreement-page";

export const metadata: Metadata = {
  title: "Service Agreement — Tattoo Shop Accelerator",
  description: "Digital service agreement for Tattoo Shop Accelerator platform services.",
  robots: { index: false, follow: false },
};

export default function Agreement() {
  return <AgreementPage />;
}
