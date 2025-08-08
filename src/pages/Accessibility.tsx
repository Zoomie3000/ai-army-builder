import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Accessibility = () => (
  <div className="min-h-screen">
    <SEO
      title="Accessibility Statement | Sentus AI, Inc."
      description="SENTUS AI, INC. aims for WCAG 2.1 AA accessibility across our products and site."
      canonical="https://sentus.ai/accessibility"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Accessibility Statement</h1>
      <p className="mb-4">We strive to meet WCAG 2.1 AA standards: keyboard navigation, proper semantics, color contrast, and accessible forms.</p>
      <p>Accessibility feedback: submit via <a className="underline hover:text-primary" href="/support">/support</a>. We respond within 10 business days.</p>
    </main>
    <Footer />
  </div>
);

export default Accessibility;
