"use client";

import { useState } from "react";
import {
  Rocket, FolderOpen, Settings, Database, CreditCard, Mail,
  Globe, Image, Search, CheckCircle, AlertTriangle, Zap,
  Terminal, ChevronDown, ChevronUp, Monitor, Camera, FileText,
  ArrowRight, Copy, BookOpen, Bot,
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

function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="my-2">
      {label && <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500 mb-1">{label}</p>}
      <pre className="bg-ink-900 border border-white/5 rounded-lg p-3 text-sm text-ink-200 overflow-x-auto font-mono">
        {children}
      </pre>
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

function Step({ number, title, icon: Icon, children }: { number: number; title: string; icon: React.ElementType; children: React.ReactNode }) {
  const [open, setOpen] = useState(number <= 3);
  return (
    <div className="border border-white/5 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-white/5 transition-colors">
        <div className="w-7 h-7 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-xs font-bold text-electric shrink-0">
          {number}
        </div>
        <Icon className="h-4 w-4 text-ink-400 shrink-0" />
        <span className="text-sm font-medium text-white text-left flex-1">{title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-ink-400" /> : <ChevronDown className="h-4 w-4 text-ink-400" />}
      </button>
      {open && <div className="px-4 pb-4 border-t border-white/5 pt-3">{children}</div>}
    </div>
  );
}

export function DeploymentGuide() {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-card rounded-xl p-4 border-electric/20 bg-gradient-to-r from-electric/5 via-transparent to-neon-green/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">Landon&apos;s Deployment Guide</h2>
            <p className="text-sm text-ink-400">Step-by-step instructions for launching new client sites with Claude</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neon-green/10 border border-neon-green/20 rounded-lg text-xs text-neon-green font-medium">
            <Bot className="h-3.5 w-3.5" />
            Claude-assisted workflow
          </div>
        </div>
      </div>

      {/* Working with Claude */}
      <Card>
        <Heading icon={Bot} title="Working with Claude" subtitle="How to prompt Claude to help you at each step" />

        <div className="space-y-3">
          <p className="text-sm text-ink-300">
            You&apos;ll be using Claude Code (the CLI tool) to help you set up each client site. Claude can read files, write code, run commands, and debug issues. Here&apos;s how to get the most out of it:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-electric mb-2">Good Prompts</p>
              <ul className="text-sm text-ink-300 space-y-1.5">
                <li>&ldquo;I just unzipped the template. Help me fill in CLIENT_CONFIG.sh for a shop called Ink Masters in Boise, Idaho.&rdquo;</li>
                <li>&ldquo;Run the setup script and fix any errors.&rdquo;</li>
                <li>&ldquo;Set up Supabase for this client &mdash; create the project and run the schema.&rdquo;</li>
                <li>&ldquo;Deploy all 6 sites to Vercel.&rdquo;</li>
                <li>&ldquo;The booking flow isn&apos;t working. Help me debug it.&rdquo;</li>
              </ul>
            </div>
            <div className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-electric mb-2">Tips for Working with Claude</p>
              <ul className="text-sm text-ink-300 space-y-1.5">
                <li>- Tell Claude the context: &ldquo;I&apos;m deploying a new client site from the TattooTemplate.zip&rdquo;</li>
                <li>- If something breaks, paste the error &mdash; Claude can usually fix it</li>
                <li>- Ask Claude to verify things work: &ldquo;Check that all 6 sites are loading&rdquo;</li>
                <li>- Let Claude handle the terminal commands &mdash; just confirm when it asks</li>
                <li>- If stuck, say: &ldquo;I&apos;m stuck on [step]. Walk me through it.&rdquo;</li>
              </ul>
            </div>
          </div>
          <Tip>Claude has access to all the project files and can run commands directly. You don&apos;t need to copy-paste commands yourself &mdash; Claude will run them for you. Just describe what you need.</Tip>
        </div>
      </Card>

      {/* ============ THE 12-STEP DEPLOYMENT PROCESS ============ */}
      <Card>
        <Heading icon={Rocket} title="The 12-Step Launch Process" subtitle="Follow these in order for every new client" />

        <div className="space-y-2">
          <Step number={1} title="Unzip the Template" icon={FolderOpen}>
            <p className="text-sm text-ink-300 mb-2">Copy <code className="text-electric">TattooTemplate.zip</code> to a new project folder named after the client.</p>
            <CodeBlock label="Commands">{`# Create a folder for the client
mkdir ink-masters-boise
cd ink-masters-boise

# Copy and unzip the template
cp ~/TattooTemplate.zip .
unzip TattooTemplate.zip`}</CodeBlock>
            <Tip>Name the folder something recognizable: shop name + city, all lowercase with dashes. Example: <code className="text-electric">synergy-tattoo-rexburg</code></Tip>
          </Step>

          <Step number={2} title="Fill in Client Info" icon={Settings}>
            <p className="text-sm text-ink-300 mb-2">This is where you configure everything specific to the client.</p>
            <CodeBlock label="Create the config file">{`cp CLIENT_CONFIG.example.sh CLIENT_CONFIG.sh`}</CodeBlock>
            <p className="text-sm text-ink-300 mb-2">Open <code className="text-electric">CLIENT_CONFIG.sh</code> and fill in every field:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-ink-400 font-medium">Variable</th>
                    <th className="text-left py-2 text-ink-400 font-medium">Example</th>
                    <th className="text-left py-2 pl-4 text-ink-400 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-ink-300">
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">STUDIO_NAME</td><td className="py-1.5">&ldquo;Ink Masters &amp; Piercing&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Full legal name</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">STUDIO_SHORT</td><td className="py-1.5">&ldquo;Ink Masters&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Short name for headers</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">ARTIST_NAME</td><td className="py-1.5">&ldquo;John Smith&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Lead artist/owner</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">YEARS_EXPERIENCE</td><td className="py-1.5">&ldquo;10&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Years in business</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">CITY_PRIMARY</td><td className="py-1.5">&ldquo;Boise&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Main city</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">STATE</td><td className="py-1.5">&ldquo;Idaho&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">State</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">PHONE</td><td className="py-1.5">&ldquo;208-555-1234&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Business phone</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">EMAIL</td><td className="py-1.5">&ldquo;info@inkmasters.com&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Business email</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">INSTAGRAM</td><td className="py-1.5">&ldquo;@inkmastersboisetattooo&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Instagram handle</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">CITY_2, CITY_3, CITY_4</td><td className="py-1.5">&ldquo;Meridian&rdquo;, &ldquo;Nampa&rdquo;, &ldquo;Eagle&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Nearby cities for SEO satellites</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">PRIMARY_DOMAIN</td><td className="py-1.5">&ldquo;inkmastersboise.com&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Main domain</td></tr>
                  <tr className="border-b border-white/5"><td className="py-1.5 pr-4 font-mono text-xs text-electric">SEO_DOMAIN_1&ndash;5</td><td className="py-1.5">&ldquo;meridiantattooshop.com&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Satellite domains</td></tr>
                  <tr><td className="py-1.5 pr-4 font-mono text-xs text-electric">RATE_PER_HOUR</td><td className="py-1.5">&ldquo;150&rdquo;</td><td className="py-1.5 pl-4 text-xs text-ink-500">Client&apos;s hourly rate</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>Ask Claude: &ldquo;Help me fill in CLIENT_CONFIG.sh. The shop is called [name] in [city], [state]. Their website is [url] and their Instagram is [handle].&rdquo; Claude can help research the nearby cities for SEO satellites too.</Tip>
          </Step>

          <Step number={3} title="Run the Setup Script" icon={Terminal}>
            <CodeBlock>{`bash setup.sh`}</CodeBlock>
            <p className="text-sm text-ink-300">This replaces all <code className="text-electric">PLACEHOLDER_*</code> tokens across all 6 sites and creates <code className="text-electric">.env.local</code> files.</p>
            <Warning>If the script fails, don&apos;t panic. Copy the error and paste it to Claude: &ldquo;The setup script failed with this error: [paste error]. Fix it.&rdquo;</Warning>
          </Step>

          <Step number={4} title="Supabase Setup" icon={Database}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Go to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">supabase.com</a> &rarr; New Project</li>
              <li>Name it after the client (e.g., <code className="text-electric">ink-masters-boise</code>)</li>
              <li>Choose a strong database password &mdash; save it somewhere safe</li>
              <li>Copy the <strong>Project URL</strong>, <strong>Anon Key</strong>, and <strong>Service Role Key</strong></li>
              <li>Go to SQL Editor &rarr; paste and run <code className="text-electric">supabase/schema.sql</code></li>
              <li>Add env vars to <code className="text-electric">main-site/.env.local</code></li>
            </ol>
            <CodeBlock label="Add to .env.local">{`NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...`}</CodeBlock>
            <Tip>Tell Claude: &ldquo;I created the Supabase project. Here are the keys: [paste]. Add them to all the .env.local files and run the schema.&rdquo;</Tip>
          </Step>

          <Step number={5} title="Stripe Setup" icon={CreditCard}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Go to <a href="https://dashboard.stripe.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">dashboard.stripe.com</a> &rarr; create account for the client</li>
              <li>Get the <strong>Secret Key</strong> and <strong>Publishable Key</strong></li>
              <li>Set up a webhook endpoint: <code className="text-electric">https://www.DOMAIN.com/api/stripe/webhook</code></li>
              <li>Events to listen for:
                <ul className="ml-4 mt-1 space-y-0.5">
                  <li>- <code className="text-xs text-ink-400">checkout.session.completed</code></li>
                  <li>- <code className="text-xs text-ink-400">payment_intent.payment_failed</code></li>
                  <li>- <code className="text-xs text-ink-400">checkout.session.expired</code></li>
                </ul>
              </li>
              <li>Copy the <strong>Webhook Secret</strong></li>
              <li>Add all 3 keys to <code className="text-electric">.env.local</code></li>
            </ol>
            <Warning>Use Stripe TEST mode first. Switch to live mode only after the Go Live Checklist is complete.</Warning>
          </Step>

          <Step number={6} title="Google AI Studio (for AI Design)" icon={Zap}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Go to <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">aistudio.google.com</a> &rarr; Get API Key</li>
              <li>Add to <code className="text-electric">.env.local</code>:</li>
            </ol>
            <CodeBlock>{`GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy...`}</CodeBlock>
          </Step>

          <Step number={7} title="Resend (Email)" icon={Mail}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Go to <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">resend.com</a> &rarr; Sign up (free: 100 emails/day)</li>
              <li>Create an API key</li>
              <li>Add domain verification for the client&apos;s domain</li>
              <li>Add <code className="text-electric">RESEND_API_KEY</code> to <code className="text-electric">.env.local</code></li>
            </ol>
          </Step>

          <Step number={8} title="Deploy to Vercel" icon={Globe}>
            <CodeBlock label="Deploy all 6 sites">{`# Main site first
cd main-site && npm install && vercel deploy --prod

# Then each satellite
cd ../seo-site-1 && npm install && vercel deploy --prod
cd ../seo-site-2 && npm install && vercel deploy --prod
cd ../seo-site-3 && npm install && vercel deploy --prod
cd ../seo-site-4 && npm install && vercel deploy --prod
cd ../seo-site-5 && npm install && vercel deploy --prod

# Add env vars to each Vercel project
vercel env add VARIABLE_NAME production`}</CodeBlock>
            <Tip>Tell Claude: &ldquo;Deploy all 6 sites to Vercel and add all the env vars from .env.local to each project.&rdquo; Claude can handle the entire deployment process.</Tip>
          </Step>

          <Step number={9} title="Domain Configuration" icon={Globe}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>In each Vercel project: Settings &rarr; Domains &rarr; Add the custom domain</li>
              <li>Point DNS for each domain:
                <ul className="ml-4 mt-1 space-y-0.5">
                  <li>- <strong>A record:</strong> <code className="text-xs text-ink-400">76.76.21.21</code></li>
                  <li>- Or <strong>CNAME:</strong> <code className="text-xs text-ink-400">cname.vercel-dns.com</code></li>
                </ul>
              </li>
              <li>Wait for SSL certificates to auto-provision (usually a few minutes)</li>
            </ol>
            <Warning>DNS can take up to 48 hours to propagate, though it&apos;s usually much faster. If the domain doesn&apos;t work right away, wait and check again.</Warning>
          </Step>

          <Step number={10} title="Portfolio Images" icon={Image}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Get the client&apos;s tattoo photos (from them or their Instagram)</li>
              <li>Drop photos into <code className="text-electric">main-site/public/images/portfolio/</code></li>
              <li>Artist headshot into <code className="text-electric">main-site/public/images/artists/</code></li>
              <li>Update <code className="text-electric">main-site/src/lib/constants.ts</code> &rarr; <code className="text-electric">PORTFOLIO_IMAGES</code> array</li>
            </ol>
            <Tip>Claude can update the constants file for you. Just say: &ldquo;I added these photos to the portfolio folder: [list filenames]. Update the constants file.&rdquo;</Tip>
          </Step>

          <Step number={11} title="Google Search Console" icon={Search}>
            <ol className="text-sm text-ink-300 space-y-2 list-decimal pl-4">
              <li>Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">Google Search Console</a></li>
              <li>Add all 6 domains as properties</li>
              <li>Verify ownership (DNS TXT record method is easiest)</li>
              <li>Submit sitemaps for each site: <code className="text-electric">https://domain.com/sitemap.xml</code></li>
            </ol>
          </Step>

          <Step number={12} title="Go Live Checklist" icon={CheckCircle}>
            <div className="space-y-1.5">
              {[
                "All 6 sites deployed and loading",
                "Supabase tables created with seed data",
                "Admin login works (PIN: 1234 — change in studio_settings!)",
                "Booking flow works end-to-end (test in Stripe test mode)",
                "Consultation form submits to Supabase",
                "Consent form submits to Supabase",
                "Emails sending (check Resend dashboard)",
                "AI Design Studio works at /design",
                "Portfolio images replaced with client's actual work",
                "SEO pages have content",
                "Sitemaps submitted to Google",
                "Switch Stripe to live mode",
                "Custom domains resolving with SSL",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-ink-300">
                  <div className="w-4 h-4 rounded border border-white/20 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Warning>Do NOT switch Stripe to live mode until you&apos;ve tested the full booking flow in test mode. A broken payment flow on launch day is a disaster.</Warning>
          </Step>
        </div>
      </Card>

      {/* ============ MIRRORING AN EXISTING WEBSITE ============ */}
      <Card>
        <Heading icon={Camera} title="Mirroring a Client's Existing Website" subtitle="When a shop wants their current look preserved" />

        <p className="text-sm text-ink-300 mb-3">
          Some tattoo shops already have a website and branding they like. They want us to keep their look and feel while adding all the platform features. Here&apos;s how to handle that:
        </p>

        <div className="space-y-3">
          <div className="bg-ink-800/40 rounded-lg p-4">
            <p className="text-xs font-semibold text-electric mb-2">Step 1: Grab Everything from Their Site</p>
            <p className="text-sm text-ink-300 mb-2">Tell Claude to scrape and analyze their existing website:</p>
            <CodeBlock>{`Prompt for Claude:
"Go to [client's website URL] and grab everything I need:
- Their logo (download it)
- Their color scheme (hex codes)
- Their fonts
- Their Instagram photos
- Their artist bios and descriptions
- Any text/copy from their About page
- Their contact info, hours, location
- Screenshots of every page for reference
Save everything to a /client-assets folder."`}</CodeBlock>
            <Tip>Claude can use WebFetch to read their website content and download images. For Instagram photos, Claude can scrape the public page. This saves hours of manual work.</Tip>
          </div>

          <div className="bg-ink-800/40 rounded-lg p-4">
            <p className="text-xs font-semibold text-electric mb-2">Step 2: Match Their Branding</p>
            <p className="text-sm text-ink-300 mb-2">After gathering assets, tell Claude to customize the template:</p>
            <CodeBlock>{`Prompt for Claude:
"I have this client's branding assets in /client-assets.
Their colors are: [primary], [secondary], [accent]
Their logo is: [filename]
Customize the template to match their existing brand:
- Replace the logo
- Update the color scheme in tailwind config
- Use their existing copy where appropriate
- Keep the layout and features but make it look
  like their current site evolved into something better"`}</CodeBlock>
          </div>

          <div className="bg-ink-800/40 rounded-lg p-4">
            <p className="text-xs font-semibold text-electric mb-2">Step 3: What to Grab from the Web</p>
            <p className="text-sm text-ink-300 mb-2">For every new client, have Claude pull:</p>
            <ul className="text-sm text-ink-300 space-y-1">
              <li>- <strong>Google Business Profile</strong> &mdash; hours, address, phone, reviews, photos</li>
              <li>- <strong>Instagram</strong> &mdash; portfolio photos (public posts), bio, follower count</li>
              <li>- <strong>Facebook</strong> &mdash; about info, reviews, cover photo</li>
              <li>- <strong>Yelp</strong> &mdash; reviews and photos</li>
              <li>- <strong>Existing website</strong> &mdash; all text, images, logos, color codes</li>
              <li>- <strong>Google Maps</strong> &mdash; embed link for the contact page</li>
            </ul>
            <Warning>Only use publicly available content. Never scrape behind logins. Always get the client&apos;s permission to use their photos and branding. The service agreement covers this.</Warning>
          </div>

          <div className="bg-ink-800/40 rounded-lg p-4">
            <p className="text-xs font-semibold text-electric mb-2">Step 4: Logo Integration</p>
            <p className="text-sm text-ink-300 mb-2">If the client has logos you need to use:</p>
            <CodeBlock>{`Prompt for Claude:
"The client's logo is at /client-assets/logo.png
Place it in:
- The navbar (replace the text logo)
- The footer
- The favicon
- The og:image for social sharing
Make sure it looks clean on dark backgrounds.
If the logo is on a white background, ask me
before making it transparent."`}</CodeBlock>
          </div>
        </div>
      </Card>

      {/* ============ TROUBLESHOOTING ============ */}
      <Card>
        <Heading icon={AlertTriangle} title="Common Issues & Fixes" subtitle="Quick reference when things go wrong" />

        <div className="space-y-2">
          {[
            {
              problem: "Vercel deploy fails with 'build error'",
              fix: "Copy the full error message and paste it to Claude. Say: \"The Vercel deploy failed. Here's the error. Fix it.\" Usually it's a missing env var or a typo in the config.",
            },
            {
              problem: "Supabase tables not showing up",
              fix: "Make sure you ran the FULL schema.sql in the SQL Editor. Check for errors in the SQL output. If a table already exists, drop it first: DROP TABLE IF EXISTS table_name CASCADE;",
            },
            {
              problem: "Stripe webhook not receiving events",
              fix: "Check that the webhook URL matches exactly (including https://www). Make sure you selected the correct events. Verify the webhook secret is in your env vars.",
            },
            {
              problem: "Domain shows 'DNS not configured'",
              fix: "DNS takes time. Wait 30 minutes and check again. Make sure you added the A record (76.76.21.21) or CNAME (cname.vercel-dns.com) at the domain registrar.",
            },
            {
              problem: "AI Design Studio shows error",
              fix: "Check that GOOGLE_GENERATIVE_AI_API_KEY is set in both .env.local and Vercel env vars. Make sure the API key is valid at aistudio.google.com.",
            },
            {
              problem: "Emails not sending",
              fix: "Check the Resend dashboard for errors. Make sure the domain is verified in Resend. Check that RESEND_API_KEY is set.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-ink-800/40 rounded-lg p-3">
              <p className="text-sm text-neon-pink font-medium">{item.problem}</p>
              <p className="text-sm text-ink-300 mt-1">{item.fix}</p>
            </div>
          ))}
        </div>

        <Tip>When in doubt, always paste the error to Claude and ask for help. Claude can diagnose and fix most issues faster than Googling.</Tip>
      </Card>

      {/* ============ TIMELINE ============ */}
      <Card>
        <Heading icon={FileText} title="Typical Client Launch Timeline" subtitle="What a good deployment looks like" />

        <div className="space-y-2">
          {[
            { day: "Day 1", task: "Receive client info from Amelia. Unzip template, fill CLIENT_CONFIG.sh, run setup.sh.", time: "1-2 hours" },
            { day: "Day 2-3", task: "Set up Supabase, Stripe, Google AI, Resend. Deploy all 6 sites to Vercel.", time: "2-3 hours" },
            { day: "Day 4-5", task: "Configure domains, DNS propagation. Start adding portfolio images.", time: "1-2 hours" },
            { day: "Week 2", task: "If mirroring existing site: grab branding, customize colors/logo. Portfolio images, artist bios.", time: "3-4 hours" },
            { day: "Week 2-3", task: "Testing: run Go Live Checklist. Fix any issues. Switch Stripe to live.", time: "2-3 hours" },
            { day: "Week 3", task: "Submit sitemaps to Google. Final check. Hand off to client.", time: "1 hour" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-ink-800/40 rounded-lg p-3">
              <span className="text-xs font-semibold text-electric whitespace-nowrap mt-0.5">{item.day}</span>
              <div className="flex-1">
                <p className="text-sm text-ink-200">{item.task}</p>
              </div>
              <span className="text-xs text-ink-500 whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-400 mt-3 text-center">Total estimated time: <span className="text-white font-semibold">10-15 hours per client</span> spread over 3 weeks</p>
      </Card>
    </div>
  );
}
