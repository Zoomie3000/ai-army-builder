import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Status = () => (
  <div className="min-h-screen">
    <SEO
      title="System Status | Sentus AI, Inc."
      description="View real-time system status and incident history for Sentus AI."
      canonical="https://sentus.ai/status"
      type="website"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">System Status</h1>
      <p className="mb-4">Visit our status page for real-time updates:</p>
      <p>
        <a className="underline hover:text-primary" href="https://status.sentus.ai" target="_blank" rel="noopener noreferrer">
          status.sentus.ai
        </a>
      </p>
    </main>
    <Footer />
  </div>
);

export default Status;
