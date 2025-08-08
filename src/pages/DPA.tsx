import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const DPA = () => (
  <div className="min-h-screen">
    <SEO
      title="Data Processing Agreement (DPA) | Sentus AI, Inc."
      description="SENTUS AI, INC. DPA for GDPR/CCPA compliance including SCCs and sub-processor terms."
      canonical="https://sentus.ai/dpa"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Data Processing Agreement (DPA)</h1>
      <p className="text-muted-foreground mb-6">Template summary. For signed DPA, contact our team via <a className="underline hover:text-primary" href="/support">/support</a>.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Key Terms</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Roles: Customer as Controller; Sentus AI as Processor.</li>
        <li>Processing: Only per documented instructions; emergency processing allowed to protect vital interests.</li>
        <li>Security: Technical and organizational measures; regular testing and assessment.</li>
        <li>Sub-processors: Posted list; 30-day change notice; right to object.</li>
        <li>Data Subject Requests: Assistance and technical measures provided.</li>
        <li>International Transfers: Standard Contractual Clauses incorporated.</li>
        <li>Breach Notification: Without undue delay and within applicable legal timelines.</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default DPA;
