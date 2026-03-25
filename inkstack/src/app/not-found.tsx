import Link from "next/link";
import { Zap } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 border border-electric/20 mx-auto mb-6">
          <Zap className="h-7 w-7 text-electric" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <p className="text-ink-400 mb-6">This page doesn&apos;t exist. Maybe it got tattooed over.</p>
        <Link
          href="/"
          className="inline-flex px-6 py-2.5 text-sm font-semibold bg-electric text-ink-950 rounded-lg hover:bg-electric-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
