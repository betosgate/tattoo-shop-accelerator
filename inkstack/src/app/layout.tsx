import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InkStack — The All-in-One Digital Platform for Tattoo Studios",
    template: "%s | InkStack",
  },
  description:
    "6 websites, 200+ SEO articles, online booking, payments, and CRM — all built for your tattoo studio. Dominate your local search results.",
  keywords: [
    "tattoo studio website",
    "tattoo booking system",
    "tattoo shop SEO",
    "tattoo business platform",
    "tattoo studio software",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "InkStack",
    title: "InkStack — The All-in-One Digital Platform for Tattoo Studios",
    description:
      "6 websites, 200+ SEO articles, online booking, payments, and CRM — all built for your tattoo studio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkStack — The All-in-One Digital Platform for Tattoo Studios",
    description:
      "6 websites, 200+ SEO articles, online booking, payments, and CRM — all built for your tattoo studio.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
