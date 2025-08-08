import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Compliance = () => (
  <div className="min-h-screen">
    <SEO
      title="Compliance Center | Sentus AI, Inc."
      description="GDPR, CCPA/CPRA, HIPAA, SOC 2 and industry compliance overview for SENTUS AI, INC."
      canonical="https://sentus.ai/compliance"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Compliance Center</h1>
      <p className="text-muted-foreground mb-6">Our framework for data protection, security, and regulatory compliance.</p>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>GDPR with SCCs for international transfers</li>
            <li>CCPA/CPRA consumer rights portal</li>
            <li>Records of processing activities (RoPA)</li>
            <li>Privacy by design and DPIAs</li>
          </ul>
        </article>
        <article className="p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Healthcare (HIPAA)</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Business Associate Agreements available</li>
            <li>Minimum necessary access and audit logging</li>
            <li>Breach notification procedures</li>
          </ul>
        </article>
        <article className="p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>SOC 2-aligned controls and independent audits</li>
            <li>Encryption at rest (AES-256) and in transit (TLS 1.3)</li>
            <li>Vulnerability management and pen-testing</li>
          </ul>
        </article>
        <article className="p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Governance</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responsible AI policy and oversight</li>
            <li>Change management and segregation of duties</li>
            <li>Employee security awareness training</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <a className="underline hover:text-primary" href="/security">Security Policy</a>
        <a className="underline hover:text-primary" href="/dpa">Data Processing Agreement (DPA)</a>
        <a className="underline hover:text-primary" href="/sla">Service Level Agreement (SLA)</a>
        <a className="underline hover:text-primary" href="/responsible-ai">Responsible AI Policy</a>
        <a className="underline hover:text-primary" href="/vulnerability-disclosure">Vulnerability Disclosure</a>
        <a className="underline hover:text-primary" href="/accessibility">Accessibility Statement</a>
        <a className="underline hover:text-primary" href="/status">Status</a>
        <a className="underline hover:text-primary" href="/changelog">Changelog</a>
      </section>
    </main>
    <Footer />
  </div>
);

export default Compliance;
