import type { Metadata } from "next";
import { OperatorsHub } from "@/components/operators/hub";

export const metadata: Metadata = {
  title: "Operators Hub — Tattoo Shop Accelerator",
  description: "Internal operations guide for the Tattoo Shop Accelerator team.",
  robots: { index: false, follow: false },
};

export default function OperatorsPage() {
  return <OperatorsHub />;
}
