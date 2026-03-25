---
name: Tattoo Shop Accelerator Marketing Site
description: SaaS marketing website selling done-for-you digital platform (websites + SEO) to tattoo shop owners across the US
type: project
---

**Brand**: Tattoo Shop Accelerator
**Domain**: www.tattooshopaccelerator.com (user points GoDaddy DNS → Vercel A record 76.76.21.21)
**Vercel URL**: https://inkstack-psi.vercel.app (production alias)
**GitHub**: https://github.com/betosgate/tattoo-shop-accelerator
**What it sells**: Done-for-you digital presence for tattoo studios — 1 main website + 5 SEO satellite sites + 200+ articles + booking/CRM/payments
**Target**: Tattoo shop owners across the United States
**Tech**: Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Supabase, Vercel
**Project dir**: C:\Users\Admin\OneDrive\Documents\ClaudeProjects\TattooSalesSite\inkstack

**All pages built and deployed**:
- Homepage (hero, problem, stats, features, platform showcase, testimonials, pricing preview, FAQ, CTA)
- Features (6 categories, comparison table vs Instagram/WordPress/generic)
- How It Works (5-step timeline)
- SEO Results (satellite strategy, search terms, before/after)
- Pricing (3 tiers: Starter $249/mo, Growth $349/mo, Domination $449/mo)
- About (Beto Paredes bio)
- Contact (form w/ Supabase API, phone 208-440-7609, email beto@betoparedes.com)
- API: /api/contact → Supabase leads table
- NO blog (user explicitly said no)

**Supabase setup needed**: User must create Supabase project, run supabase-schema.sql, add env vars to Vercel:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

**GoDaddy DNS needed**: Add A record for www → 76.76.21.21

**Design**: Dark premium (ink-950 bg), electric blue (#00d4ff) accent, glassmorphism, Framer Motion
**Git**: 3 commits on master, pushed to GitHub

**Why:** User wants to attract tattoo shops nationwide
**How to apply:** Site is deployed and live, needs Supabase env vars and DNS pointing to complete setup
