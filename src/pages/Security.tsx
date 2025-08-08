import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Security = () => (
  <div className="min-h-screen">
    <SEO
      title="Security Policy | Sentus AI, Inc."
      description="Our security commitments: infrastructure, application, data, access control, and incident response."
      canonical="https://sentus.ai/security"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Security Policy</h1>
      <p className="text-muted-foreground mb-6">Overview of controls aligned with SOC 2, NIST CSF, and CIS benchmarks.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Key Controls</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Infrastructure: Multi-region redundancy, WAF, DDoS mitigation.</li>
        <li>Application: Secure SDLC, code review, dependency scanning, regular pen-testing.</li>
        <li>Data: AES-256 at rest, TLS 1.3 in transit, key management, DLP.</li>
        <li>Access: Zero-trust, least privilege, MFA, PAM.</li>
        <li>Incident Response: 24/7 monitoring, documented procedures, post-incident review.</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default Security;
