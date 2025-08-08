import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const APITerms = () => (
  <div className="min-h-screen">
    <SEO
      title="API Terms of Use | Sentus AI, Inc."
      description="API license, restrictions, rate limits, changes and deprecation policy for SENTUS AI, INC."
      canonical="https://sentus.ai/api-terms"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">API Terms of Use</h1>
      <p className="text-muted-foreground mb-6">Use of our APIs is subject to these terms and our general Terms of Service.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Limited, revocable license; comply with documentation and rate limits.</li>
        <li>No excessive calls, abuse, or creation of competing services.</li>
        <li>Keep API keys confidential; rotate regularly; report compromise immediately.</li>
        <li>Breaking changes: 6 months notice; deprecated versions supported for 12 months.</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default APITerms;
