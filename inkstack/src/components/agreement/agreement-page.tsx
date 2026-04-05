"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, CheckCircle, Send, ArrowRight, AlertTriangle,
  Building, User, Calendar, DollarSign, Shield, Clock,
} from "lucide-react";

const TODAY = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export function AgreementPage() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [studioName, setStudioName] = useState("");
  const [studioCity, setStudioCity] = useState("");
  const [studioState, setStudioState] = useState("Idaho");
  const [paymentOption, setPaymentOption] = useState<"full" | "plan">("full");
  const [clientSignature, setClientSignature] = useState("");
  const [clientAgreed, setClientAgreed] = useState(false);
  const [providerSignature, setProviderSignature] = useState("");
  const [providerAgreed, setProviderAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const canSubmit =
    clientName.trim() &&
    clientEmail.trim() &&
    studioName.trim() &&
    clientSignature.trim() &&
    clientAgreed &&
    providerSignature.trim() &&
    providerAgreed;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/agreement/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          studioName,
          studioCity,
          studioState,
          paymentOption,
          clientSignature,
          providerSignature,
          signedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit agreement");
      setSubmitted(true);
    } catch {
      setError("There was an issue submitting the agreement. Please try again or contact beto@betoparedes.com.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-ink-950 pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 max-w-lg mx-4 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-neon-green" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Agreement Signed!</h2>
          <p className="text-ink-300 mb-4">
            The service agreement for <span className="text-white font-medium">{studioName}</span> has been signed by both parties.
            Confirmation emails have been sent to <span className="text-electric">{clientEmail}</span> and <span className="text-electric">beto@betoparedes.com</span>.
          </p>
          <div className="bg-ink-800/50 rounded-lg p-4 text-left">
            <p className="text-xs text-ink-400 mb-2">Agreement Summary</p>
            <div className="space-y-1 text-sm">
              <p className="text-ink-300">Studio: <span className="text-white">{studioName}</span></p>
              <p className="text-ink-300">Client: <span className="text-white">{clientName}</span></p>
              <p className="text-ink-300">Payment: <span className="text-white">{paymentOption === "full" ? "$4,500 (Pay in Full)" : "$1,250/mo x 4 ($5,000)"}</span></p>
              <p className="text-ink-300">Date: <span className="text-white">{TODAY}</span></p>
            </div>
          </div>
          <p className="text-sm text-ink-500 mt-4">Next step: Amelia will send a welcome email with onboarding details.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/30 bg-electric/10 mb-4">
            <FileText className="h-3.5 w-3.5 text-electric" />
            <span className="text-xs font-semibold text-electric uppercase tracking-wider">Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Tattoo Shop Accelerator
          </h1>
          <p className="mt-2 text-ink-400">Platform Services Agreement</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Client Info Section */}
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-5 w-5 text-electric" />
              <h2 className="text-lg font-bold text-white">Client Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-ink-400 mb-1">Studio / Business Name *</label>
                <input
                  type="text"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  placeholder="e.g., Ink Masters Tattoo"
                  className="w-full px-3 py-2 bg-ink-800 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-ink-400 mb-1">Contact Name *</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Full legal name"
                  className="w-full px-3 py-2 bg-ink-800 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-ink-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 bg-ink-800 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-ink-400 mb-1">City</label>
                  <input
                    type="text"
                    value={studioCity}
                    onChange={(e) => setStudioCity(e.target.value)}
                    placeholder="City"
                    className="w-full px-3 py-2 bg-ink-800 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ink-400 mb-1">State</label>
                  <input
                    type="text"
                    value={studioState}
                    onChange={(e) => setStudioState(e.target.value)}
                    placeholder="State"
                    className="w-full px-3 py-2 bg-ink-800 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Selection */}
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-electric" />
              <h2 className="text-lg font-bold text-white">Payment Option</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentOption("full")}
                className={`rounded-xl p-4 text-left transition-all ${
                  paymentOption === "full"
                    ? "bg-neon-green/10 border-2 border-neon-green/40"
                    : "bg-ink-800/50 border-2 border-white/5 hover:border-white/10"
                }`}
              >
                <p className="text-xs text-neon-green font-semibold mb-1">Pay in Full &mdash; Save $500</p>
                <p className="text-2xl font-bold text-white">$4,500</p>
                <p className="text-xs text-ink-400 mt-1">One-time payment</p>
              </button>
              <button
                type="button"
                onClick={() => setPaymentOption("plan")}
                className={`rounded-xl p-4 text-left transition-all ${
                  paymentOption === "plan"
                    ? "bg-electric/10 border-2 border-electric/40"
                    : "bg-ink-800/50 border-2 border-white/5 hover:border-white/10"
                }`}
              >
                <p className="text-xs text-electric font-semibold mb-1">Payment Plan</p>
                <p className="text-2xl font-bold text-white">$1,250<span className="text-sm text-ink-400">/mo &times; 4</span></p>
                <p className="text-xs text-ink-400 mt-1">$5,000 total</p>
              </button>
            </div>
            <p className="text-xs text-ink-500 mt-3 text-center">
              + $249/month hosting after launch &bull; No long-term contracts &bull; Cancel anytime with 30 days notice
            </p>
          </div>

          {/* The Contract */}
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-electric" />
              <h2 className="text-lg font-bold text-white">Service Agreement</h2>
            </div>

            <div className="bg-ink-900 rounded-lg p-5 max-h-[600px] overflow-y-auto text-sm text-ink-300 leading-relaxed space-y-4 border border-white/5">
              <p className="text-center text-white font-bold text-base">TATTOO SHOP ACCELERATOR</p>
              <p className="text-center text-white font-semibold">PLATFORM SERVICES AGREEMENT</p>
              <p className="text-center text-ink-400 text-xs">Effective Date: {TODAY}</p>

              <hr className="border-white/5" />

              <p>This Platform Services Agreement (&ldquo;Agreement&rdquo;) is entered into between:</p>
              <p><strong className="text-white">Provider:</strong> Tattoo Shop Accelerator, a business operating in the State of Idaho, with its principal contact at beto@betoparedes.com (&ldquo;Provider&rdquo;, &ldquo;TSA&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;)</p>
              <p><strong className="text-white">Client:</strong> {studioName || "[Studio Name]"}, represented by {clientName || "[Client Name]"}, located in {studioCity || "[City]"}, {studioState || "[State]"} (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;)</p>

              <p className="text-white font-semibold mt-4">1. SERVICES PROVIDED</p>
              <p>Provider agrees to deliver the following digital platform services (&ldquo;Services&rdquo;) to Client:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Custom-designed tattoo studio website with online booking, client self-service design browsing, size/placement selection, and Stripe deposit collection</li>
                <li>Five (5) SEO satellite websites, each targeting a different geographic area near Client&apos;s primary location, with unique branding</li>
                <li>Two hundred (200+) long-form SEO articles (1,500&ndash;2,500 words each) distributed across all six websites</li>
                <li>Eleven (11) on-site SEO landing pages targeting local search terms</li>
                <li>AI Tattoo Design Studio integration with 20 curated styles, body placement awareness, and booking connection</li>
                <li>Six hundred and fifty-three (653) ready-to-book template designs across 7 categories with adjustable pricing</li>
                <li>Forty-four (44) body area mappings with size-based pricing and smart exclusions</li>
                <li>Three (3) role-based dashboards: Admin, Receptionist, and Artist</li>
                <li>Tattoo-specific Customer Relationship Management (CRM) system with session tracking, payment records, and client tagging</li>
                <li>Digital consent forms screening 23 medical conditions with digital signature capture</li>
                <li>Piercing management module with booking, jewelry inventory, and age verification</li>
                <li>Referral partner program with branded marketing materials, QR codes, and automated commission tracking</li>
                <li>Portfolio gallery with image/video support, lightbox viewing, and category management</li>
                <li>Configurable studio settings (hourly rate, deposit rate, consultation fees, pricing tiers, premium surcharges)</li>
                <li>Staff training documentation (39 sections)</li>
                <li>Dedicated onboarding and setup assistance</li>
              </ul>

              <p className="text-white font-semibold mt-4">2. TIMELINE</p>
              <p>Provider will use commercially reasonable efforts to complete the build and launch of all Services within three (3) weeks of receiving all required Client materials as outlined in Section 5. The estimated timeline is as follows:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-white">Week 1:</strong> Website design, booking system configuration, payment integration, dashboard setup, consent forms</li>
                <li><strong className="text-white">Week 1&ndash;2:</strong> SEO article deployment, satellite website creation, content strategy implementation</li>
                <li><strong className="text-white">Week 2&ndash;3:</strong> Launch of all 6 websites, domain configuration, SSL certificates, Google Search Console setup, staff training</li>
              </ul>
              <p>Delays in Client providing required materials may extend the timeline proportionally.</p>

              <p className="text-white font-semibold mt-4">3. PRICING AND PAYMENT</p>
              {paymentOption === "full" ? (
                <>
                  <p><strong className="text-white">Platform Build Fee:</strong> $4,500.00 USD (Pay in Full &mdash; 10% discount applied)</p>
                  <p>Payment is due upon execution of this Agreement. Provider will begin work upon receipt of payment.</p>
                </>
              ) : (
                <>
                  <p><strong className="text-white">Platform Build Fee:</strong> $5,000.00 USD, payable in four (4) monthly installments of $1,250.00 USD each.</p>
                  <p>The first installment of $1,250.00 is due upon execution of this Agreement. Subsequent installments are due on the same day of each following month for three (3) additional months. Provider will begin work upon receipt of the first installment.</p>
                </>
              )}
              <p><strong className="text-white">Monthly Hosting Fee:</strong> $249.00 USD per month, beginning upon launch of the platform. This fee covers hosting, SSL certificates, technical maintenance, and ongoing support for all six (6) websites.</p>
              <p>All payments are processed via Stripe or bank transfer as arranged between the parties. Late payments beyond 15 days may result in temporary suspension of hosting services until the account is brought current.</p>

              <p className="text-white font-semibold mt-4">4. INTELLECTUAL PROPERTY</p>
              <p><strong className="text-white">Client Content:</strong> Client retains full ownership of all content provided to Provider, including but not limited to: portfolio photographs, artist biographies, business information, logos, and branding materials.</p>
              <p><strong className="text-white">Platform Code:</strong> The underlying platform code, templates, and architecture remain the intellectual property of Provider. Client receives a non-exclusive, non-transferable license to use the platform for the duration of active hosting.</p>
              <p><strong className="text-white">SEO Content:</strong> Articles and content created by Provider for Client&apos;s websites become the property of Client upon full payment of the Platform Build Fee. Client may use, modify, or republish this content without restriction.</p>
              <p><strong className="text-white">Data Ownership:</strong> All client data, booking records, CRM data, consent forms, and payment records belong exclusively to Client. Upon termination, Provider will export all Client data in a standard format within fourteen (14) business days of request.</p>

              <p className="text-white font-semibold mt-4">5. CLIENT RESPONSIBILITIES</p>
              <p>Client agrees to provide the following within seven (7) business days of Agreement execution:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-quality portfolio photographs organized by style and artist</li>
                <li>Business details: legal name, address, hours of operation, contact information, and studio description</li>
                <li>Pricing structure: hourly rate, deposit rate, consultation fee, and any premium surcharges</li>
                <li>Artist biographies including specialties, years of experience, and headshot photographs</li>
                <li>Access to domain registrar for DNS configuration (or agreement to use Provider-recommended domains)</li>
                <li>Timely communication and feedback during the build process</li>
              </ul>

              <p className="text-white font-semibold mt-4">6. HOSTING AND MAINTENANCE</p>
              <p>The monthly hosting fee of $249.00 includes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hosting of all six (6) websites on enterprise-grade infrastructure</li>
                <li>SSL certificate management and renewal</li>
                <li>Technical maintenance, security updates, and bug fixes</li>
                <li>Email support with response within one (1) business day</li>
                <li>Uptime target of 99.9% (excluding scheduled maintenance)</li>
              </ul>

              <p className="text-white font-semibold mt-4">7. TERMINATION</p>
              <p><strong className="text-white">By Client:</strong> Client may terminate hosting services at any time with thirty (30) days written notice to beto@betoparedes.com. No refund is provided for the Platform Build Fee after work has commenced. If Client terminates within the first seven (7) days of Agreement execution and before Provider has begun substantive work, Client is entitled to a full refund of the Platform Build Fee.</p>
              <p><strong className="text-white">By Provider:</strong> Provider may terminate this Agreement with thirty (30) days written notice if Client fails to make timely payments after a fifteen (15) day grace period and written notice of delinquency.</p>
              <p><strong className="text-white">Upon Termination:</strong> Provider will export all Client data and content within fourteen (14) business days. Websites will remain live through the end of the paid hosting period. After termination, Client&apos;s websites will be taken offline unless alternative hosting arrangements are made.</p>

              <p className="text-white font-semibold mt-4">8. LIMITATION OF LIABILITY</p>
              <p>Provider&apos;s total liability under this Agreement shall not exceed the total amount paid by Client in the twelve (12) months preceding the claim. Provider is not liable for indirect, incidental, special, or consequential damages, including lost revenue, lost profits, or business interruption, regardless of the theory of liability.</p>
              <p>Provider does not guarantee specific search engine rankings, booking volumes, or revenue outcomes. Results depend on multiple factors including Client&apos;s market, competition, pricing, and service quality.</p>

              <p className="text-white font-semibold mt-4">9. CONFIDENTIALITY</p>
              <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of this Agreement, including business data, client records, financial information, and technical details. This obligation survives termination of this Agreement.</p>

              <p className="text-white font-semibold mt-4">10. INDEMNIFICATION</p>
              <p>Client agrees to indemnify and hold Provider harmless from any claims, damages, or expenses arising from Client&apos;s use of the platform, Client-provided content, or Client&apos;s business operations. Provider agrees to indemnify Client against any claims arising from Provider&apos;s negligence or willful misconduct.</p>

              <p className="text-white font-semibold mt-4">11. GOVERNING LAW</p>
              <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Idaho, without regard to conflict of law principles. Any disputes arising under this Agreement shall be resolved in the courts of the State of Idaho.</p>

              <p className="text-white font-semibold mt-4">12. MODIFICATIONS</p>
              <p>No modification to this Agreement shall be effective unless made in writing and signed by both parties. Provider may update hosting infrastructure, features, or service terms with thirty (30) days written notice, provided such changes do not materially reduce the scope of Services.</p>

              <p className="text-white font-semibold mt-4">13. ENTIRE AGREEMENT</p>
              <p>This Agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, representations, and agreements relating to the subject matter hereof. If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

              <p className="text-white font-semibold mt-4">14. FORCE MAJEURE</p>
              <p>Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including natural disasters, war, terrorism, government actions, epidemics, internet outages, or third-party service provider failures.</p>
            </div>
          </div>

          {/* Signatures */}
          <div className="glass-card rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-electric" />
              <h2 className="text-lg font-bold text-white">Digital Signatures</h2>
            </div>
            <p className="text-sm text-ink-400 mb-4">By typing your full legal name below, you agree to be bound by the terms of this Agreement. This constitutes a legally binding electronic signature under the E-SIGN Act and Idaho Code &sect; 28-50-101 et seq.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Provider Signature */}
              <div className="bg-ink-800/40 rounded-lg p-4 border border-white/5">
                <p className="text-xs font-semibold text-electric mb-3 uppercase tracking-wider">Provider &mdash; Tattoo Shop Accelerator</p>
                <div className="mb-3">
                  <label className="block text-sm text-ink-400 mb-1">Signature (type full name) *</label>
                  <input
                    type="text"
                    value={providerSignature}
                    onChange={(e) => setProviderSignature(e.target.value)}
                    placeholder="Provider representative name"
                    className="w-full px-3 py-2 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none font-serif italic text-lg"
                    required
                  />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={providerAgreed}
                    onChange={(e) => setProviderAgreed(e.target.checked)}
                    className="mt-1 accent-electric"
                    required
                  />
                  <span className="text-xs text-ink-400">I am an authorized representative of Tattoo Shop Accelerator and I agree to the terms of this Agreement.</span>
                </label>
                <p className="text-xs text-ink-500 mt-2">Date: {TODAY}</p>
              </div>

              {/* Client Signature */}
              <div className="bg-ink-800/40 rounded-lg p-4 border border-white/5">
                <p className="text-xs font-semibold text-electric mb-3 uppercase tracking-wider">Client &mdash; {studioName || "Studio"}</p>
                <div className="mb-3">
                  <label className="block text-sm text-ink-400 mb-1">Signature (type full name) *</label>
                  <input
                    type="text"
                    value={clientSignature}
                    onChange={(e) => setClientSignature(e.target.value)}
                    placeholder="Your full legal name"
                    className="w-full px-3 py-2 bg-ink-900 border border-white/10 rounded-lg text-white text-sm placeholder-ink-500 focus:border-electric/50 focus:outline-none font-serif italic text-lg"
                    required
                  />
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={clientAgreed}
                    onChange={(e) => setClientAgreed(e.target.checked)}
                    className="mt-1 accent-electric"
                    required
                  />
                  <span className="text-xs text-ink-400">I am an authorized representative of {studioName || "the Client"} and I agree to the terms of this Agreement.</span>
                </label>
                <p className="text-xs text-ink-500 mt-2">Date: {TODAY}</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          {error && (
            <div className="flex items-center gap-2 bg-neon-pink/10 border border-neon-pink/20 rounded-lg p-3 mb-4">
              <AlertTriangle className="h-4 w-4 text-neon-pink shrink-0" />
              <p className="text-sm text-ink-200">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold transition-all ${
              canSubmit && !submitting
                ? "bg-electric text-ink-950 hover:bg-electric-light glow-electric cursor-pointer"
                : "bg-ink-800 text-ink-500 cursor-not-allowed"
            }`}
          >
            {submitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="h-5 w-5" />
                Sign Agreement &amp; Send to Both Parties
              </>
            )}
          </button>

          <p className="text-xs text-ink-500 text-center mt-3">
            Both parties will receive a confirmation email with a copy of the signed agreement.
          </p>
        </form>
      </div>
    </div>
  );
}
