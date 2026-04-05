# Tattoo Shop Accelerator — Developer Notes

## Project Overview
Next.js 16 (App Router) sales site for a tattoo studio SaaS platform. Dark theme, electric/neon accents, Tailwind CSS 4.2, Framer Motion.

## Key Directories
```
inkstack/
├── src/app/           — Pages (App Router): 19 routes total
├── src/components/    — React components (organized by page: home/, demo/, features/, booking/, operators/, agreement/, etc.)
├── src/lib/           — Utilities: constants.ts, images.ts, google-calendar.ts, supabase.ts
├── public/            — Static assets
└── .env.local         — Google Calendar + Resend credentials (DO NOT commit)
```

## All Routes
### Public Pages
- `/` — Homepage (hero, problem, stats, features, platform showcase, gallery, testimonials, pricing preview, FAQ, CTA)
- `/book-demo` — Google Calendar booking (4-step flow)
- `/demo` — Interactive product walkthrough
- `/features` — Feature showcase (7 categories) + comparison table
- `/how-it-works` — 3-week setup timeline
- `/pricing` — Pay-in-full vs payment plan + comparison table
- `/seo` — SEO results showcase
- `/ai-design-studio` — AI Design Studio feature page + competitive comparison
- `/about` — About page
- `/contact` — Contact form (legacy)

### Internal Pages (noindex)
- `/operators` — Team ops hub: Amelia's sales playbook + Landon's deployment guide
- `/agreement` — Digital signature service agreement with dual signing + email notifications

### API Routes
- `/api/booking/availability` (GET) — Google Calendar availability check
- `/api/booking/create` (POST) — Google Calendar event creation
- `/api/agreement/sign` (POST) — Agreement signing + Resend email dispatch
- `/api/contact` (POST) — Contact form handler

## Important Architecture Decisions

### Google Calendar Booking (`/book-demo`)
- Uses **service account with domain-wide delegation** (not OAuth consent flow)
- Must use `calendarId: "primary"` (not email address) for both reads and writes — impersonation requires this
- Must use `events.list` API for availability (NOT `freebusy.query` — doesn't work with impersonation)
- Private key newlines: code handles `\\n` → `\n` conversion for Vercel env vars
- Server-side double-checks availability before creating events

### Agreement Signing (`/agreement`)
- Full 14-section Idaho-law service agreement (E-SIGN Act compliant)
- Client info form → payment option selector → contract → dual digital signatures
- API route sends confirmation emails via Resend to both parties
- Sends from `agreements@tattooshopaccelerator.com`

### Operators Hub (`/operators`)
- Tabbed interface: Amelia (sales) and Landon (deployment)
- Amelia's playbook: 30-min call structure, scripts, objection handling, follow-up sequences
- Landon's guide: 12-step deployment process, Claude-assisted workflow, web scraping guide

### Design System
- Glass cards: `glass-card` class
- Animations: `FadeUp` component from `@/components/motion`
- Section wrapper: `<Section>` component
- Page headers: `<PageHero>` component
- Color tokens: `electric`, `ink-*`, `neon-green`, `neon-pink`

### Key Constants
- Stats, nav links, platform features all in `src/lib/constants.ts`
- Image imports centralized in `src/lib/images.ts`

## Deployment
- Vercel project: `inkstack-psi.vercel.app`
- Custom domain: `tattooshopaccelerator.com` (DNS on Vercel nameservers)
- Manual prod deploy: `vercel --prod --yes`
- Env vars on Vercel (production):
  - `GOOGLE_SERVICE_ACCOUNT_KEY` — Google service account JSON
  - `GOOGLE_CALENDAR_ID` — `beto@betoparedes.com`
  - `RESEND_API_KEY` — Resend email API key

## DNS Records (tattooshopaccelerator.com)
- ALIAS records → Vercel hosting
- TXT `resend._domainkey` → DKIM for Resend
- TXT `send` → SPF (`v=spf1 include:amazonses.com ~all`)
- MX `send` → Return path (feedback-smtp.us-east-1.amazonses.com)
- TXT `_dmarc` → DMARC policy (`v=DMARC1; p=none;`)
- MX `@` → Inbound email (inbound-smtp.us-east-1.amazonaws.com)

## Common Tasks
- Update stats/numbers: edit `src/lib/constants.ts` STATS and PLATFORM_FEATURES arrays
- Add new page: create `src/app/<route>/page.tsx`, add to sitemap.ts, update navbar if needed
- Update CTAs: check navbar.tsx, hero.tsx, cta.tsx, pricing-preview.tsx, pricing/cards.tsx, footer.tsx
- Update comparison tables: `src/components/features/comparison.tsx` and `src/components/pricing/comparison.tsx`
- Update consent form count: search for "medical condition" — standardized to 23 everywhere
