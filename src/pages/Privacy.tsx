import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Privacy = () => (
  <div className="min-h-screen">
    <SEO
      title="Privacy Policy | Sentus AI, Inc."
      description="SENTUS AI, INC. privacy policy. GDPR/CCPA/CPRA and HIPAA-ready disclosures for our Universal Digital Workforce platform."
      canonical="https://sentus.ai/privacy"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Effective date: August 8, 2025 • Version 3.0</p>

      <section className="space-y-4">
        <p>
          SENTUS AI, INC. ("Sentus AI", "we", "us") respects your privacy. This policy explains how we collect, use, disclose, and safeguard information when you use our Universal Digital Workforce Platform and related services, including our 778+ AI agents (the "Services").
        </p>
        <p>
          We comply with GDPR, CCPA/CPRA, and other applicable privacy laws. For healthcare workloads covered by a Business Associate Agreement (BAA), we operate under HIPAA obligations.
        </p>
      </section>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Account and Billing: Name, business email, company details; payments are processed by PCI-DSS compliant providers (e.g., Stripe).</li>
        <li>Service and Usage Data: Features used, agent interactions, performance metrics, diagnostics.</li>
        <li>Technical Data: Device, browser, OS, and similar metadata. IPs may be processed for security and fraud prevention.</li>
        <li>Integrations: Data from services you connect (e.g., Salesforce, QuickBooks) per your configuration.</li>
        <li>Sensitive Data: Only where necessary and lawful (e.g., PHI under HIPAA BAA); we avoid collecting more than the minimum required.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide, secure, and improve the Services.</li>
        <li>Operate AI agents and optimize performance using aggregated, de-identified patterns.</li>
        <li>Detect, prevent, and respond to fraud, abuse, and security incidents.</li>
        <li>Comply with legal obligations and enforce our Terms.</li>
        <li>Communicate essential service notices; marketing only with consent where required.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing</h2>
      <p className="mb-4">We do not sell personal information. We share only with:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Service providers (e.g., cloud hosting, payments) under strict contractual safeguards.</li>
        <li>Integration partners you authorize.</li>
        <li>Legal authorities when required by law.</li>
        <li>Corporate transactions (merger/acquisition) with notice where permitted.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
      <p className="mb-4">California (CCPA/CPRA), EU/EEA (GDPR), and other regions grant rights to access, correct, delete, port, and limit processing of your data. You can exercise rights via our secure portal.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Privacy Requests: Use our secure form at <a className="underline hover:text-primary" href="/privacy-rights">/privacy-rights</a>.</li>
        <li>Authorized Agents: Instructions available at <a className="underline hover:text-primary" href="/authorized-agent">/authorized-agent</a>.</li>
        <li>Response Times: We acknowledge within 10 business days and complete within 45 days (extendable as allowed by law).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Security</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Encryption at rest and in transit; role-based access control; MFA.</li>
        <li>Security monitoring, incident response, and vendor due diligence.</li>
        <li>72-hour breach notification where required by law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Retention</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Account data retained for the account term plus legally required periods.</li>
        <li>Backups rotate on a standard schedule; data is purged securely after retention.</li>
        <li>Upon termination, you may request export for 30 days; then we delete per policy.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Children</h2>
      <p>We do not knowingly collect data from individuals under 16. If you believe a minor provided data, please submit a request at <a className="underline hover:text-primary" href="/support">/support</a>.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">California Disclosures</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>We do not sell or share personal information as defined by CPRA.</li>
        <li>We honor Global Privacy Control signals where legally required.</li>
        <li>Automatic renewal and cancellation terms are disclosed at checkout per California law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p>
        For privacy inquiries, please use our secure portal at <a className="underline hover:text-primary" href="/privacy-contact">/privacy-contact</a>. To serve legal process, use our secure portal at <a className="underline hover:text-primary" href="/legal-notices">/legal-notices</a>.
      </p>

      <p className="text-sm text-muted-foreground mt-8">This document is provided for informational purposes and should be reviewed by qualified counsel for your specific use case.</p>
    </main>
    <Footer />
  </div>
);

export default Privacy;
