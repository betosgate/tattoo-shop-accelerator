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
  metadataBase: new URL("https://www.tattooshopaccelerator.com"),
  title: {
    default: "Tattoo Shop Accelerator — Websites, SEO & Booking for Tattoo Studios",
    template: "%s | Tattoo Shop Accelerator",
  },
  description:
    "Get 6 websites, 200+ SEO articles, online booking with Stripe payments, a tattoo-specific CRM, and a referral program — all done for you. Dominate local search and fill your chair.",
  keywords: [
    "tattoo shop website",
    "tattoo studio website builder",
    "tattoo booking system",
    "tattoo shop SEO",
    "tattoo business software",
    "tattoo studio platform",
    "tattoo shop marketing",
    "tattoo appointment booking",
    "tattoo CRM",
    "tattoo shop online booking",
    "tattoo website design",
    "local SEO for tattoo shops",
    "tattoo studio management",
    "tattoo deposit system",
    "tattoo consent forms digital",
  ],
  authors: [{ name: "Beto Paredes", url: "https://www.betoparedes.com" }],
  creator: "Tattoo Shop Accelerator",
  publisher: "Tattoo Shop Accelerator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tattooshopaccelerator.com",
    siteName: "Tattoo Shop Accelerator",
    title: "Tattoo Shop Accelerator — 6 Websites, 200+ SEO Articles, Full Booking Platform",
    description:
      "The done-for-you digital platform for tattoo studios. Online booking, Stripe payments, tattoo CRM, 5 SEO satellite sites, and 200+ articles. Built by a tattoo shop owner.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tattoo Shop Accelerator — The All-in-One Digital Platform for Tattoo Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Shop Accelerator — 6 Websites, 200+ SEO Articles, Full Booking Platform",
    description:
      "The done-for-you digital platform for tattoo studios. Built by a tattoo shop owner who gets it.",
  },
  alternates: {
    canonical: "https://www.tattooshopaccelerator.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Tattoo Shop Accelerator",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Done-for-you digital platform for tattoo studios: 6 websites, 200+ SEO articles, online booking, payments, CRM, and referral programs.",
              url: "https://www.tattooshopaccelerator.com",
              author: {
                "@type": "Person",
                name: "Beto Paredes",
                url: "https://www.betoparedes.com",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Starter",
                  price: "249",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "249",
                    priceCurrency: "USD",
                    unitText: "MONTH",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Growth",
                  price: "349",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "349",
                    priceCurrency: "USD",
                    unitText: "MONTH",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Domination",
                  price: "449",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "449",
                    priceCurrency: "USD",
                    unitText: "MONTH",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "150",
                bestRating: "5",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tattoo Shop Accelerator",
              url: "https://www.tattooshopaccelerator.com",
              logo: "https://www.tattooshopaccelerator.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-208-440-7609",
                contactType: "sales",
                email: "beto@betoparedes.com",
                areaServed: "US",
                availableLanguage: "English",
              },
              founder: {
                "@type": "Person",
                name: "Beto Paredes",
              },
              sameAs: ["https://www.betoparedes.com"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-ink-950 text-ink-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
