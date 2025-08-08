import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Terms = () => (
  <div className="min-h-screen">
    <SEO
      title="Terms of Service | Sentus AI, Inc."
      description="SENTUS AI, INC. Terms of Service with California-optimized protections, arbitration, and class-action waiver."
      canonical="https://sentus.ai/terms"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">Effective date: August 8, 2025 • Version 3.0</p>

      <section className="space-y-4">
        <p>These Terms of Service ("Terms") are a legal agreement between you ("Customer") and SENTUS AI, INC. ("Sentus AI", "we", "us"). By using our Universal Digital Workforce Platform, including our 778+ AI agents and related services (the "Services"), you agree to these Terms.</p>
        <p><strong>Arbitration & Class Action Waiver:</strong> Except for certain types of disputes described below, you agree to resolve disputes through binding arbitration on an individual basis.</p>
      </section>

      <h2 className="text-2xl font-semibold mt-8 mb-3">License & Use</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Limited, non-exclusive, non-transferable license for internal business use.</li>
        <li>No reverse engineering, unauthorized access, or use to build competing services.</li>
        <li>Customer remains responsible for oversight of automated agent actions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Fees & Payment</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Subscriptions billed in advance; usage fees monthly in arrears.</li>
        <li>Late payments may incur 1.5% monthly interest or the maximum allowed by law.</li>
        <li>Automatic renewal and cancellation terms disclosed at checkout per California law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Intellectual Property</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>We retain all rights in our platform, agents, algorithms, documentation, and trademarks.</li>
        <li>You retain rights to your data; you grant us only the licenses needed to provide the Services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Confidentiality</h2>
      <p>Each party will protect the other's confidential information using at least reasonable care and only use it for purposes of the Services.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Disclaimers</h2>
      <p>Except as expressly provided, the Services are provided "as is" without warranties of any kind. We do not warrant uninterrupted or error-free operation.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Indemnification</h2>
      <p>You will defend and hold Sentus AI harmless from claims arising out of your misuse of the Services, data, or violations of law. We will defend you against third-party IP claims arising from the Services, subject to limitations.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>No party is liable for indirect or consequential damages.</li>
        <li>Aggregate liability is capped at the greater of $50,000 or fees paid in the prior 12 months, except for specific excluded matters.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Termination</h2>
      <p>Either party may terminate for material breach uncured within 30 days, or as otherwise provided. Upon termination, access ceases and data export is available for 30 days.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Dispute Resolution</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Governing Law: California, without regard to conflicts of law.</li>
        <li>Binding arbitration (JAMS) in San Francisco, CA; small-claims option in Contra Costa County.</li>
        <li>No class actions or representative proceedings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Notices & Contact</h2>
      <p>Legal notices must be submitted via our secure portal at <a className="underline hover:text-primary" href="/legal-notices">/legal-notices</a>. General support: <a className="underline hover:text-primary" href="/support">/support</a>.</p>

      <p className="text-sm text-muted-foreground mt-8">These Terms are a summary for the website. Enterprise customers may receive negotiated terms. Always review with counsel.</p>
    </main>
    <Footer />
  </div>
);

export default Terms;
