"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock, Target, MessageSquare, Eye, DollarSign, CheckCircle, AlertTriangle,
  ArrowRight, Phone, Users, Zap, Star, BarChart3, Shield, Sparkles,
  ChevronDown, ChevronUp, FileText, Send, Calendar, Heart,
} from "lucide-react";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-card rounded-xl p-5 ${className}`}>{children}</div>;
}

function Heading({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
        <Icon className="h-5 w-5 text-electric" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-ink-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

function ScriptBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-ink-800/60 rounded-lg p-4 border-l-2 border-electric/40 my-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-electric mb-2">{label}</p>
      <div className="text-sm text-ink-200 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function Collapsible({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/5 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
        {title}
        {open ? <ChevronUp className="h-4 w-4 text-ink-400" /> : <ChevronDown className="h-4 w-4 text-ink-400" />}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 bg-neon-green/5 border border-neon-green/10 rounded-lg p-3 my-2">
      <Zap className="h-4 w-4 text-neon-green shrink-0 mt-0.5" />
      <p className="text-sm text-ink-200">{children}</p>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 bg-neon-pink/5 border border-neon-pink/10 rounded-lg p-3 my-2">
      <AlertTriangle className="h-4 w-4 text-neon-pink shrink-0 mt-0.5" />
      <p className="text-sm text-ink-200">{children}</p>
    </div>
  );
}

export function SalesPlaybook() {
  return (
    <div className="space-y-6">
      {/* Quick Reference Banner */}
      <div className="glass-card rounded-xl p-4 border-electric/20 bg-gradient-to-r from-electric/5 via-transparent to-neon-pink/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">Amelia&apos;s Sales Playbook</h2>
            <p className="text-sm text-ink-400">Your complete guide to closing $5,000 platform deals on Zoom</p>
          </div>
          <Link
            href="/agreement"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-electric text-ink-950 rounded-lg hover:bg-electric-light transition-colors shrink-0"
          >
            <FileText className="h-4 w-4" />
            Send Contract
          </Link>
        </div>
      </div>

      {/* ============ SECTION 1: PRE-CALL PREP ============ */}
      <Card>
        <Heading icon={Target} title="Pre-Call Preparation" subtitle="Do this 10 minutes before every call" />

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-electric mb-1">Research the Shop</p>
              <ul className="text-sm text-ink-300 space-y-1">
                <li>- Find their Instagram &mdash; note follower count, posting frequency</li>
                <li>- Google their shop name &mdash; do they rank? What position?</li>
                <li>- Check their current website (if any) &mdash; note what&apos;s missing</li>
                <li>- Look at Google reviews &mdash; note star rating and review count</li>
                <li>- Check if competitors rank above them for &ldquo;[city] tattoo shop&rdquo;</li>
              </ul>
            </div>
            <div className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-electric mb-1">Have Ready on Screen</p>
              <ul className="text-sm text-ink-300 space-y-1">
                <li>- <Link href="https://www.tattooshopaccelerator.com/demo" className="text-electric hover:underline">tattooshopaccelerator.com/demo</Link> open in a tab</li>
                <li>- Live client site (Synergy Tattoo) in another tab</li>
                <li>- Their Instagram / current website in a tab</li>
                <li>- Google search results for &ldquo;[their city] tattoo shop&rdquo;</li>
                <li>- This playbook open for quick reference</li>
              </ul>
            </div>
          </div>
          <Tip>Write down 2 specific things about their shop you can mention in the first 60 seconds. &ldquo;I saw your geometric sleeve on Instagram &mdash; that linework is incredible.&rdquo; This proves you did your homework and builds instant trust.</Tip>
        </div>
      </Card>

      {/* ============ SECTION 2: THE 30-MINUTE CALL STRUCTURE ============ */}
      <Card>
        <Heading icon={Clock} title="The 30-Minute Call Structure" subtitle="Follow this exact flow every time" />

        <div className="relative">
          {/* Timeline */}
          <div className="space-y-4">
            {/* Phase 1: Rapport */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric">1</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">Warm Opening</p>
                  <span className="text-[10px] px-2 py-0.5 bg-ink-800 rounded-full text-ink-400">0:00 &mdash; 2:00</span>
                </div>
                <ScriptBlock label="Say This">
                  <p>&ldquo;Hey [Name], thanks for taking the time! Before we dive in, I checked out your shop &mdash; [specific compliment about their work]. Love the [style/piece]. How long have you been at [location]?&rdquo;</p>
                </ScriptBlock>
                <Tip>Never start with the product. Start with THEM. Artists respond to people who appreciate their art. 30 seconds of genuine compliment builds more trust than 10 minutes of features.</Tip>
              </div>
            </div>

            {/* Phase 2: Set the Agenda */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric">2</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">Set the Agenda</p>
                  <span className="text-[10px] px-2 py-0.5 bg-ink-800 rounded-full text-ink-400">2:00 &mdash; 3:00</span>
                </div>
                <ScriptBlock label="Say This">
                  <p>&ldquo;Here&apos;s what I&apos;d love to do in the next 25 minutes: First, I want to hear about how you&apos;re running things right now &mdash; bookings, payments, all of it. Then I&apos;ll show you the platform and how it would work specifically for [shop name]. And we&apos;ll leave time for questions. Sound good?&rdquo;</p>
                </ScriptBlock>
                <Tip>Setting an agenda makes you the professional in the room. It also prevents rambling and keeps you in control of the call.</Tip>
              </div>
            </div>

            {/* Phase 3: Discovery */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center text-xs font-bold text-neon-pink">3</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">Discovery &mdash; Find the Pain</p>
                  <span className="text-[10px] px-2 py-0.5 bg-neon-pink/10 text-neon-pink rounded-full">3:00 &mdash; 8:00 &bull; MOST IMPORTANT</span>
                </div>
                <Warning>This is the most critical 5 minutes. The sale is WON here, not during the demo. If you don&apos;t find real pain, the demo is just a show-and-tell.</Warning>

                <p className="text-sm text-ink-300 mb-3">Ask these questions in order. Let them talk. Take notes.</p>

                <div className="space-y-2">
                  {[
                    { q: "Walk me through what happens when someone wants to book a tattoo with you right now.", why: "This exposes the chaos — DMs, texts, phone calls, no system." },
                    { q: "What happens with no-shows? How often does that happen?", why: "Gets them to feel the financial pain. Most will say 'too often.'" },
                    { q: "How are you handling deposits right now?", why: "Most don't collect deposits. This is where they lose $15-30K/year." },
                    { q: "If someone Googles 'tattoo shop [their city]' right now, where do you show up?", why: "If they don't know, they're probably not ranking. If they do know they're low, it stings." },
                    { q: "How much time per week do you spend on stuff that isn't actually tattooing?", why: "Forces them to quantify the business admin burden. Usually 10-15+ hours." },
                  ].map((item, i) => (
                    <div key={i} className="bg-ink-800/40 rounded-lg p-3">
                      <p className="text-sm text-white font-medium">&ldquo;{item.q}&rdquo;</p>
                      <p className="text-xs text-ink-500 mt-1">Why: {item.why}</p>
                    </div>
                  ))}
                </div>

                <ScriptBlock label="The Amplification Moment">
                  <p>After they share their pain, reflect it back with numbers:</p>
                  <p className="mt-2">&ldquo;So if you&apos;re getting even 2 no-shows a week at $150/hour for a 2-hour session, that&apos;s $600 a week &mdash; over <span className="text-neon-pink font-semibold">$30,000 a year</span> in empty chair time. And that&apos;s before counting the clients who never found you on Google in the first place.&rdquo;</p>
                </ScriptBlock>
              </div>
            </div>

            {/* Phase 4: The Demo */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric">4</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">The Demo &mdash; Show, Don&apos;t Tell</p>
                  <span className="text-[10px] px-2 py-0.5 bg-ink-800 rounded-full text-ink-400">8:00 &mdash; 20:00</span>
                </div>

                <p className="text-sm text-ink-300 mb-3">Share your screen. Show the live platform in this exact order &mdash; each section maps back to a pain point you just uncovered.</p>

                <div className="space-y-2">
                  <Collapsible title="1. Client Booking Experience (3 min) — The Jaw-Dropper" defaultOpen>
                    <p className="text-sm text-ink-300 mb-2">Show the client-facing side first. This is the wow moment.</p>
                    <ScriptBlock label="Say This While Showing">
                      <p>&ldquo;This is what your clients see. They land on your website, browse your 653 template designs, pick a size and body placement, and the price auto-calculates. They pay a deposit with their credit card and pick a time slot &mdash; all without you touching your phone once. No DMs, no texts, no back-and-forth.&rdquo;</p>
                    </ScriptBlock>
                    <ul className="text-sm text-ink-400 space-y-1 mt-2">
                      <li>- Click through: design grid &rarr; size selector &rarr; body map &rarr; price &rarr; deposit &rarr; date picker</li>
                      <li>- Point out the custom consultation path for original pieces</li>
                      <li>- Show the booking confirmation with automated email</li>
                    </ul>
                    <Tip>Pause after showing this and ask: &ldquo;Can you imagine how many more bookings you&apos;d get if clients could do this at 11pm on a Tuesday while scrolling their phone?&rdquo;</Tip>
                  </Collapsible>

                  <Collapsible title="2. AI Design Studio (2 min) — The Innovation Play">
                    <ScriptBlock label="Say This">
                      <p>&ldquo;This just launched &mdash; it&apos;s the first AI tattoo design tool that actually connects to your booking system. Clients choose a style, describe what they want, and get 4 unique AI-generated designs. They can tweak them, save favorites, and when they find one they love &mdash; one click to book a consultation. You make $10 profit on every design pack before they even walk through your door.&rdquo;</p>
                    </ScriptBlock>
                    <Tip>If they&apos;re an artist who&apos;s skeptical of AI: &ldquo;These aren&apos;t replacing your art. They&apos;re conversation starters. Clients come in with a direction instead of showing you a blurry Pinterest screenshot. You still design the final piece.&rdquo;</Tip>
                  </Collapsible>

                  <Collapsible title="3. Admin Dashboard (2 min) — The Control Center">
                    <ScriptBlock label="Say This">
                      <p>&ldquo;This is your admin dashboard. Everything in one place &mdash; today&apos;s schedule, revenue, new clients, active projects. Your receptionist gets their own view for check-ins and walk-ins. Your artists see their personal schedule and can add session notes. Three dashboards, three roles, zero confusion.&rdquo;</p>
                    </ScriptBlock>
                    <ul className="text-sm text-ink-400 space-y-1 mt-2">
                      <li>- Click through Admin &rarr; Receptionist &rarr; Artist tabs</li>
                      <li>- Show the active projects with progress bars (linework &rarr; shading &rarr; color)</li>
                      <li>- Point out walk-in and phone booking workflow for the receptionist</li>
                    </ul>
                  </Collapsible>

                  <Collapsible title="4. CRM + Consent Forms (2 min) — The Trust Builder">
                    <ScriptBlock label="Say This">
                      <p>&ldquo;Every client has a full profile &mdash; their tattoo history, which session they&apos;re on, what they&apos;ve paid, what they owe. The consent form screens 23 medical conditions digitally &mdash; no more clipboards, no more illegible handwriting, and everything&apos;s on file if you ever need it.&rdquo;</p>
                    </ScriptBlock>
                    <Tip>Mention liability: &ldquo;If a client ever claims they weren&apos;t warned about aftercare or didn&apos;t disclose a condition, you have a timestamped digital record with their signature.&rdquo;</Tip>
                  </Collapsible>

                  <Collapsible title="5. SEO Satellite Sites (2 min) — The Moat">
                    <ScriptBlock label="Say This">
                      <p>&ldquo;Here&apos;s where it gets really unfair for your competitors. You don&apos;t get one website &mdash; you get six. Your main site plus 5 satellite sites, each targeting a different city within 30 minutes of you. Each one has 40+ articles written specifically for that area. That&apos;s 200+ articles total, all funneling people to your booking system. Your competitors would need years and tens of thousands of dollars to match this.&rdquo;</p>
                    </ScriptBlock>
                    <ul className="text-sm text-ink-400 space-y-1 mt-2">
                      <li>- Show a live satellite site with different branding</li>
                      <li>- Google their city + &ldquo;tattoo shop&rdquo; live &mdash; show who&apos;s ranking</li>
                      <li>- If competitors are above them: &ldquo;This is who&apos;s getting your clients right now&rdquo;</li>
                    </ul>
                  </Collapsible>

                  <Collapsible title="6. Referral Program + Piercing (1 min) — The Extras">
                    <ScriptBlock label="Say This">
                      <p>&ldquo;You also get a full referral program &mdash; local barber shops, gyms, smoke shops get branded cards with QR codes. Their customers get 5% off, your partners earn 5% commission, and it&apos;s all tracked automatically. Plus there&apos;s a full piercing module if you do piercings &mdash; booking, jewelry inventory, age verification, the works.&rdquo;</p>
                    </ScriptBlock>
                  </Collapsible>
                </div>
              </div>
            </div>

            {/* Phase 5: Social Proof */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric">5</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">Social Proof</p>
                  <span className="text-[10px] px-2 py-0.5 bg-ink-800 rounded-full text-ink-400">20:00 &mdash; 22:00</span>
                </div>
                <ScriptBlock label="The Testimonial Drop">
                  <p>&ldquo;Let me tell you about Nick Jayne &mdash; he owns Synergy Tattoo in Rexburg. Before this platform, he was managing everything through DMs and texts. Now his clients browse designs, pick their size, pay deposits, and book themselves. He told us his no-shows went to basically zero and he&apos;s spending his time tattooing instead of on his phone. That&apos;s the whole point.&rdquo;</p>
                </ScriptBlock>
                <Tip>If they ask for more references, say: &ldquo;We&apos;re still in our first year of rolling this out nationally. Nick was our first full deployment. We&apos;re being selective about who we take on because we want every client to get the full white-glove treatment. That&apos;s exactly what you&apos;d get.&rdquo; This reframes limited testimonials as exclusivity.</Tip>
              </div>
            </div>

            {/* Phase 6: Pricing */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center text-xs font-bold text-neon-green">6</div>
                <div className="w-0.5 flex-1 bg-white/5 mt-1" />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">Present the Investment</p>
                  <span className="text-[10px] px-2 py-0.5 bg-neon-green/10 text-neon-green rounded-full">22:00 &mdash; 25:00</span>
                </div>
                <Warning>Never say &ldquo;price&rdquo; or &ldquo;cost.&rdquo; Always say &ldquo;investment.&rdquo; Price is money leaving. Investment is money working.</Warning>

                <ScriptBlock label="The ROI Frame">
                  <p>&ldquo;The complete platform is a $5,000 investment. That gets you everything &mdash; all 6 websites, 200+ articles, the booking system, CRM, consent forms, referral program, AI Design Studio, dashboards &mdash; everything we just looked at, built and launched for you in about 3 weeks.&rdquo;</p>
                  <p className="mt-2">&ldquo;After launch, hosting and support is $249 a month &mdash; no contracts, cancel anytime.&rdquo;</p>
                  <p className="mt-2">&ldquo;Now here&apos;s how the math works: if you&apos;re charging $150 an hour and this brings in just 3 extra clients a month &mdash; that&apos;s $900 in new revenue. The platform pays for itself in 6 months and everything after that is profit. And that&apos;s conservative &mdash; most of our clients see 3-4x more bookings within 90 days.&rdquo;</p>
                </ScriptBlock>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div className="bg-neon-green/5 border border-neon-green/10 rounded-lg p-3 text-center">
                    <p className="text-xs text-ink-400">Pay in Full</p>
                    <p className="text-xl font-bold text-white">$4,500</p>
                    <p className="text-xs text-neon-green">Save $500</p>
                  </div>
                  <div className="bg-ink-800/40 rounded-lg p-3 text-center">
                    <p className="text-xs text-ink-400">Payment Plan</p>
                    <p className="text-xl font-bold text-white">$1,250<span className="text-sm text-ink-400">/mo &times; 4</span></p>
                    <p className="text-xs text-ink-400">$5,000 total</p>
                  </div>
                </div>

                <Tip>Always present the pay-in-full option first. Anchor high. Then the payment plan feels easy: &ldquo;Or if you prefer, we also have a payment plan &mdash; $1,250 a month for 4 months. We start building as soon as that first payment comes through.&rdquo;</Tip>
              </div>
            </div>

            {/* Phase 7: Close */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center text-xs font-bold text-neon-green">7</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">The Close</p>
                  <span className="text-[10px] px-2 py-0.5 bg-neon-green/10 text-neon-green rounded-full">25:00 &mdash; 30:00</span>
                </div>
                <ScriptBlock label="The Assumptive Close">
                  <p>&ldquo;So based on everything we looked at, would you want to go with the pay-in-full option, or does the monthly plan work better for you?&rdquo;</p>
                </ScriptBlock>
                <Tip>This is an &ldquo;either/or&rdquo; close, not a &ldquo;yes/no.&rdquo; You&apos;re not asking IF they want it &mdash; you&apos;re asking HOW they want to pay. This is the single most effective closing technique for this price point.</Tip>

                <ScriptBlock label="If They Say Yes">
                  <p>&ldquo;Amazing. I&apos;m going to send you the service agreement right now &mdash; it covers everything we talked about. You can e-sign it right from your phone. As soon as that&apos;s signed and the first payment comes through, we&apos;ll get your project queued up. I&apos;ll send you a welcome email with exactly what we need from you &mdash; portfolio photos, artist bios, pricing info &mdash; and we&apos;ll have your Discovery Call scheduled within the week.&rdquo;</p>
                </ScriptBlock>

                <ScriptBlock label="If They Need to Think About It">
                  <p>&ldquo;Totally understand. What specifically do you want to think over? Is it the investment, the features, or something else?&rdquo;</p>
                  <p className="mt-2 text-xs text-ink-500">(This isolates the real objection. See Objection Handling below.)</p>
                </ScriptBlock>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* ============ SECTION 3: OBJECTION HANDLING ============ */}
      <Card>
        <Heading icon={Shield} title="Objection Handling" subtitle="Turn every 'no' into 'tell me more'" />

        <div className="space-y-2">
          <Collapsible title={'"It\'s too expensive"'} defaultOpen>
            <ScriptBlock label="Response">
              <p>&ldquo;I get it &mdash; $5,000 is a real investment. But let me ask you this: how much did you spend on your tattoo machines, your chair, your ink supply? Probably more than $5,000 just on equipment. This is the digital equipment for your business. And unlike a tattoo machine, this brings in clients while you sleep.&rdquo;</p>
              <p className="mt-2">&ldquo;If this platform brings in just one extra $500 back piece per month, it pays for itself in less than a year. And we also have the $1,250/month plan if that makes the first step easier.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>

          <Collapsible title={'"I already have a website"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;That&apos;s great &mdash; having some online presence is important. But let me ask: can clients browse your designs, pick a size, see the price, and book a time slot on your current site? Can they pay a deposit? Do you have session tracking for multi-part pieces? 200 articles driving Google traffic?&rdquo;</p>
              <p className="mt-2">&ldquo;A website and a platform are two very different things. A website is a brochure. This is a business machine. We&apos;ll actually migrate your existing content so you don&apos;t lose anything.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>

          <Collapsible title={'"I need to talk to my partner / think about it"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;Of course. Can you tell me what&apos;s the main thing you&apos;d want to discuss with them? I want to make sure I&apos;ve answered everything so you can present it accurately.&rdquo;</p>
              <p className="mt-2">If they genuinely need partner buy-in: &ldquo;Would it help if I jumped on a quick 10-minute call with both of you? I can answer any questions they have directly.&rdquo;</p>
            </ScriptBlock>
            <Tip>If they say &ldquo;I need to think about it&rdquo; without a specific reason, it usually means price. Gently probe: &ldquo;Is it the investment that&apos;s giving you pause, or is there a specific feature you&apos;re not sure about?&rdquo;</Tip>
          </Collapsible>

          <Collapsible title={'"I\'m not tech-savvy"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;That&apos;s actually the whole point. We build everything for you. You don&apos;t touch code, you don&apos;t set anything up. We configure the booking system, the pricing, the designs, the articles &mdash; everything. The dashboards are designed for tattoo shop staff, not developers. If you can use Instagram, you can manage this. And we include 39 sections of training documentation plus dedicated onboarding.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>

          <Collapsible title={'"How do I know this will work?"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;Fair question. Nick Jayne at Synergy Tattoo had the same concern. He was managing bookings through DMs. Now his clients self-book, his no-shows dropped to basically zero, and he spends his time tattooing instead of on his phone. The results come from the system, not luck. You get 6 websites, 200+ articles driving Google traffic, and a booking system that collects deposits 24/7. That&apos;s not a hope &mdash; that&apos;s infrastructure.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>

          <Collapsible title={'"Can I just get the website without the SEO stuff?"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;I understand wanting to start smaller, but the SEO is actually what makes everything else work. The booking system is powerful, but it only works if people find your site. The satellite sites and articles are what drive traffic to your booking system. Without them, you have a great tool that nobody sees. That&apos;s why we bundle everything &mdash; it&apos;s one integrated system.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>

          <Collapsible title={'"What happens if I cancel?"'}>
            <ScriptBlock label="Response">
              <p>&ldquo;No contracts. You can cancel the $249/month hosting anytime with 30 days notice. You own your content, your photos, your client data &mdash; if you ever leave, we&apos;ll export everything for you. No hostage situation. We keep clients because the results keep coming, not because of a contract.&rdquo;</p>
            </ScriptBlock>
          </Collapsible>
        </div>
      </Card>

      {/* ============ SECTION 4: AFTER THE CALL ============ */}
      <Card>
        <Heading icon={Send} title="After the Call" subtitle="Close rate depends on follow-up speed" />

        <div className="space-y-3">
          <div className="bg-ink-800/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-neon-green mb-2">If They Said YES</p>
            <ol className="text-sm text-ink-300 space-y-1.5 list-decimal pl-4">
              <li>Send the <Link href="/agreement" className="text-electric hover:underline">service agreement link</Link> immediately (within 5 minutes)</li>
              <li>Text them: &ldquo;Just sent the agreement to your email! Let me know if you have any questions while signing.&rdquo;</li>
              <li>Once signed, send the welcome email with the info we need (photos, bios, pricing)</li>
              <li>Schedule the Discovery Call within 3 business days</li>
              <li>Add them to the client tracker</li>
            </ol>
          </div>

          <div className="bg-ink-800/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-yellow-500 mb-2">If They Said &ldquo;I Need to Think About It&rdquo;</p>
            <ol className="text-sm text-ink-300 space-y-1.5 list-decimal pl-4">
              <li><strong>Same day:</strong> Text &mdash; &ldquo;Great chatting today! Here&apos;s the demo link if you want to show your partner: tattooshopaccelerator.com/demo&rdquo;</li>
              <li><strong>Day 2:</strong> Email &mdash; Send a brief recap of their specific pain points and how the platform solves each one</li>
              <li><strong>Day 4:</strong> Text &mdash; &ldquo;Hey [Name], just checking in. Have you had a chance to think it over? Happy to hop on another quick call if any questions came up.&rdquo;</li>
              <li><strong>Day 7:</strong> Email &mdash; &ldquo;Just wanted to let you know we&apos;re starting [X] new builds this month and spots are filling up. Would love to get [shop name] in the queue if you&apos;re ready.&rdquo;</li>
              <li><strong>Day 14:</strong> Final text &mdash; &ldquo;No pressure at all, but I wanted to check in one last time. If the timing isn&apos;t right now, totally understand. We&apos;ll be here when you&apos;re ready.&rdquo;</li>
            </ol>
            <Warning>Never follow up more than 5 times. Desperation kills deals. After Day 14, move them to a monthly newsletter if you have one.</Warning>
          </div>
        </div>
      </Card>

      {/* ============ SECTION 5: POWER PHRASES ============ */}
      <Card>
        <Heading icon={Sparkles} title="Power Phrases" subtitle="Words that sell — bookmark these" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { phrase: "This is the digital equipment for your business.", context: "Reframes the $5K as essential business infrastructure, like a tattoo machine" },
            { phrase: "Your clients can do this at 11pm on a Tuesday.", context: "Paints the picture of 24/7 automated bookings while they sleep" },
            { phrase: "That's your chair sitting empty and money walking out the door.", context: "Makes no-show losses visceral and personal" },
            { phrase: "We build everything. You show up and tattoo.", context: "Addresses the 'I'm not tech-savvy' fear immediately" },
            { phrase: "Your competitors would need years to match this.", context: "Creates urgency — they're building an unfair advantage" },
            { phrase: "This is a business machine, not a website.", context: "Distinguishes from generic website builders they've seen before" },
            { phrase: "We keep clients because of results, not contracts.", context: "Removes risk — shows confidence in the product" },
            { phrase: "We're being selective about who we take on.", context: "Creates scarcity and positions them as being chosen, not buying" },
          ].map((item, i) => (
            <div key={i} className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-sm text-white font-medium">&ldquo;{item.phrase}&rdquo;</p>
              <p className="text-xs text-ink-500 mt-1">{item.context}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* ============ SECTION 6: QUICK REFERENCE ============ */}
      <Card>
        <Heading icon={BarChart3} title="Key Stats to Have Ready" subtitle="Use these numbers during the call" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { stat: "$15-30K", label: "Lost to no-shows per year" },
            { stat: "85%", label: "Of clients search online first" },
            { stat: "653", label: "Ready-to-book designs included" },
            { stat: "200+", label: "SEO articles written for them" },
            { stat: "6", label: "Websites deployed" },
            { stat: "44", label: "Body areas mapped" },
            { stat: "23", label: "Medical conditions screened" },
            { stat: "3 weeks", label: "From kickoff to launch" },
          ].map((item, i) => (
            <div key={i} className="bg-ink-800/40 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-electric">{item.stat}</p>
              <p className="text-[10px] text-ink-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Contract Link */}
      <div className="glass-card rounded-xl p-5 border-electric/20 text-center">
        <h3 className="text-lg font-bold text-white mb-2">Ready to Send the Contract?</h3>
        <p className="text-sm text-ink-400 mb-4">Generate a personalized service agreement link to send to your prospect.</p>
        <Link
          href="/agreement"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-electric text-ink-950 rounded-lg hover:bg-electric-light transition-colors"
        >
          <FileText className="h-4 w-4" />
          Open Agreement Builder
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
