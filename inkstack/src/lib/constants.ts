export const SITE_NAME = "Tattoo Shop Accelerator";
export const SITE_DESCRIPTION = "The all-in-one digital platform for tattoo studios. 6 websites, 200+ SEO articles, booking, payments, CRM — all done for you.";
export const SITE_URL = "https://www.tattooshopaccelerator.com";

export const NAV_LINKS = [
  { href: "/demo", label: "See It Live" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/seo", label: "SEO Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export const PLATFORM_PRICE = 5000;
export const MONTHLY_HOSTING = 249;
export const PAYMENT_PLAN_MONTHS = 4;
export const PAYMENT_PLAN_MONTHLY = 1250;
export const UPFRONT_DISCOUNT = 0.10;

export const PLATFORM_FEATURES = [
  "Full tattoo studio website",
  "198 ready-to-book designs across 7 categories",
  "5 SEO satellite websites (200+ articles)",
  "Online booking (browse designs + custom consultation)",
  "6 pricing tiers by square inch with auto-calculate",
  "44 body areas with smart size exclusions",
  "Stripe deposit & payment collection",
  "3 role-based dashboards (Admin, Receptionist, Artist)",
  "Tattoo-specific CRM with session tracking",
  "Digital consent forms (23 medical conditions)",
  "Piercing management & booking module",
  "Portfolio gallery with category management",
  "Referral partner program with QR codes",
  "Configurable studio settings (rates, tiers, surcharges)",
  "11 on-site SEO landing pages",
  "30-min auto-scheduling prep padding",
  "Staff training documentation (39 sections)",
  "Dedicated onboarding & setup",
] as const;

export const STATS = [
  { value: "198", label: "Ready-to-Book Designs", suffix: "" },
  { value: "44", label: "Body Areas Mapped", suffix: "" },
  { value: "6", label: "Websites Deployed", suffix: "" },
  { value: "200", label: "SEO Articles Included", suffix: "+" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How long does it take to get everything set up?",
    answer: "From kickoff to launch, the typical timeline is 2-3 weeks. We handle everything — your main website, all satellite SEO sites, 200+ articles, and the complete booking system. All you need to provide is your portfolio photos, pricing info, and artist bios.",
  },
  {
    question: "Do I need any technical skills?",
    answer: "Zero. We build, configure, and launch everything for you. The admin dashboard is designed for tattoo shop staff, not developers. If you can use Instagram, you can manage your dashboard.",
  },
  {
    question: "What if I already have a website?",
    answer: "We'll migrate your existing content, portfolio, and SEO value to your new platform. Most shops see improved search rankings within the first month after switching, because our tech stack is built for speed and SEO from the ground up.",
  },
  {
    question: "How are the 200+ SEO articles created?",
    answer: "Each article is professionally written, 1,500-2,500 words, targeting specific search terms in your local market. Topics range from tattoo style guides to aftercare advice to local area content. Every article funnels readers to your booking system.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No long-term contracts. We're confident you'll stay because the results speak for themselves — but you're never locked in. Cancel with 30 days notice.",
  },
  {
    question: "Do I own my content and data?",
    answer: "100%. Your portfolio, client data, articles, and all content belong to you. If you ever leave, we'll export everything for you. No hostage situations.",
  },
  {
    question: "What's the ROI on this?",
    answer: "Our average client sees a 3-4x increase in organic bookings within 90 days. If you're charging $150/hour and get just 10 extra bookings per month, that's $1,500/month in new revenue — paying for the platform several times over.",
  },
  {
    question: "Do you work with shops outside the US?",
    answer: "Currently we're focused on shops across the United States, where we have deep knowledge of local SEO patterns and search behavior. International expansion is on our roadmap.",
  },
] as const;
