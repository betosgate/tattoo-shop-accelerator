export const SITE_NAME = "Tattoo Shop Accelerator";
export const SITE_DESCRIPTION = "The all-in-one digital platform for tattoo studios. 6 websites, 200+ SEO articles, booking, payments, CRM — all done for you.";
export const SITE_URL = "https://www.tattooshopaccelerator.com";

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/seo", label: "SEO Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    subtitle: "Main website only",
    setupFee: 2497,
    monthlyFee: 249,
    features: [
      "Full tattoo studio website",
      "Online booking system",
      "Shopping cart with size & placement",
      "Stripe deposit collection",
      "Digital consent forms",
      "Portfolio gallery (images + video)",
      "Admin dashboard",
      "Aftercare & FAQ pages",
      "Mobile-responsive design",
      "SSL & hosting included",
    ],
    notIncluded: [
      "SEO satellite websites",
      "200+ SEO articles",
      "Referral partner program",
      "Full CRM with multi-artist",
      "Priority support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "Main website + 3 SEO sites",
    setupFee: 3997,
    monthlyFee: 349,
    features: [
      "Everything in Starter",
      "3 SEO satellite websites",
      "120+ targeted SEO articles",
      "3 surrounding cities targeted",
      "Referral partner program",
      "Partner dashboard & tracking",
      "QR code marketing materials",
      "11 on-site SEO landing pages",
      "Receptionist dashboard",
      "Monthly SEO reporting",
    ],
    notIncluded: [
      "5 satellite websites (only 3)",
      "200+ articles (only 120+)",
      "Full CRM with multi-artist",
      "Priority support",
    ],
    popular: true,
    cta: "Start Growing",
  },
  {
    name: "Domination",
    subtitle: "Main website + 5 SEO sites",
    setupFee: 4997,
    monthlyFee: 449,
    features: [
      "Everything in Growth",
      "5 SEO satellite websites",
      "200+ targeted SEO articles",
      "5 surrounding cities targeted",
      "Full CRM with multi-artist support",
      "Artist personal dashboards",
      "Session tracking (linework → color)",
      "Client tags & history",
      "Priority support & onboarding",
      "Dedicated account manager",
    ],
    notIncluded: [],
    popular: false,
    cta: "Dominate Your Market",
  },
] as const;

export const STATS = [
  { value: "6", label: "Websites Deployed", suffix: "" },
  { value: "200", label: "SEO Articles Written", suffix: "+" },
  { value: "44", label: "Body Areas Mapped", suffix: "" },
  { value: "5", label: "Cities Dominated", suffix: "" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marcus Rivera",
    role: "Owner, Iron & Ink Tattoo",
    location: "Austin, TX",
    quote: "We went from 15 bookings a month to over 60 in 90 days. The satellite sites are pulling in clients from three cities we never even marketed to before.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Owner, Lotus Studio",
    location: "Portland, OR",
    quote: "I was spending $2K/month on Google Ads with garbage results. Tattoo Shop Accelerator replaced all of that. Now we rank #1 for every tattoo search in our area — organically.",
    rating: 5,
  },
  {
    name: "Derek 'Ghost' Williams",
    role: "Owner, Ghost Line Tattoo",
    location: "Atlanta, GA",
    quote: "The referral program alone paid for the entire setup. We've got barber shops, gyms, and smoke shops sending us clients every week. It's like having a street team.",
    rating: 5,
  },
  {
    name: "Jessica Morales",
    role: "Studio Manager, Sacred Art Collective",
    location: "Denver, CO",
    quote: "The receptionist dashboard changed everything. No more double bookings, no more missed deposits. Our front desk runs itself now.",
    rating: 5,
  },
  {
    name: "Tommy Nguyen",
    role: "Artist & Owner, True North Tattoo",
    location: "Seattle, WA",
    quote: "I'm an artist, not a web developer. Tattoo Shop Accelerator gave me a site that actually looks as good as my work. Clients constantly tell us we have the best website they've seen.",
    rating: 5,
  },
  {
    name: "Kai Thompson",
    role: "Owner, Electric Soul Tattoo",
    location: "Miami, FL",
    quote: "200 articles across 5 sites — my competitors can't even come close. We own the first two pages of Google for tattoos in south Florida. Game over.",
    rating: 5,
  },
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
    answer: "We'll migrate your existing content, portfolio, and SEO value to your new Tattoo Shop Accelerator platform. Most shops see improved search rankings within the first month after switching, because our tech stack is built for speed and SEO from the ground up.",
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
