import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Changelog = () => (
  <div className="min-h-screen">
    <SEO
      title="Changelog | Sentus AI, Inc."
      description="Release notes for Sentus AI: features, improvements, and fixes."
      canonical="https://sentus.ai/changelog"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Changelog</h1>
      <p className="text-muted-foreground">We publish notable product updates here. Subscribe via our newsletter for notifications.</p>
    </main>
    <Footer />
  </div>
);

export default Changelog;
