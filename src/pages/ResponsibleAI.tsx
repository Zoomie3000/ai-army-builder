import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ResponsibleAI = () => (
  <div className="min-h-screen">
    <SEO
      title="Responsible AI Policy | Sentus AI, Inc."
      description="Our commitments to safe, fair, and transparent AI systems with human oversight."
      canonical="https://sentus.ai/responsible-ai"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Responsible AI Policy</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ethics: Fairness, accountability, transparency, and human-in-the-loop for critical decisions.</li>
        <li>Bias: Pre-deployment and ongoing bias testing; mitigation procedures.</li>
        <li>Safety: Guardrails, abuse detection, and use-restrictions per AUP.</li>
        <li>Explainability: Clear audit trails and rationale where feasible.</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default ResponsibleAI;
