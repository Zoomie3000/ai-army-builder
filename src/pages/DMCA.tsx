import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const DMCA = () => (
  <div className="min-h-screen">
    <SEO
      title="DMCA Policy | Sentus AI, Inc."
      description="How to submit copyright infringement notices and counter-notices to SENTUS AI, INC."
      canonical="https://sentus.ai/dmca"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">DMCA Policy</h1>
      <p className="text-muted-foreground mb-6">Submit notices through our secure portal to protect against email scraping.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Submit a Notice</h2>
      <p>Use the secure form at <a className="underline hover:text-primary" href="/legal-notices">/legal-notices</a>. Include: work identification, infringing material URL, contact info, good-faith and accuracy statements, and your signature.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Counter-Notice</h2>
      <p>We forward claims to the subscriber. Counter-notices may be submitted via the same portal. We generally restore content in 10–14 business days if appropriate.</p>
      <p className="text-sm text-muted-foreground mt-8">We maintain a repeat infringer policy and may terminate accounts that repeatedly infringe.</p>
    </main>
    <Footer />
  </div>
);

export default DMCA;
