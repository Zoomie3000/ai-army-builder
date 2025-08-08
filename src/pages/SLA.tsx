import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SLA = () => (
  <div className="min-h-screen">
    <SEO
      title="Service Level Agreement (SLA) | Sentus AI, Inc."
      description="SENTUS AI, INC. uptime commitments, service credits, and support response targets."
      canonical="https://sentus.ai/sla"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Service Level Agreement (SLA)</h1>
      <p className="text-muted-foreground mb-6">Availability targets and credits by plan; exclusions include maintenance and force majeure.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Availability</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Enterprise: 99.9%</li>
        <li>Professional: 99.5%</li>
        <li>Starter: 99.0%</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Service Credits</h2>
      <p>Credits issued based on monthly uptime percentage; request via <a className="underline hover:text-primary" href="/support">/support</a> within 30 days.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Support Targets</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Critical (P1): 1 hour</li>
        <li>High (P2): 4 hours</li>
        <li>Medium (P3): 8 hours</li>
        <li>Low (P4): 24 hours</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default SLA;
