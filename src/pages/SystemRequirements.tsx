import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SystemRequirements = () => (
  <div className="min-h-screen">
    <SEO
      title="System Requirements | Sentus AI, Inc."
      description="Minimum and recommended system requirements for optimal use of Sentus AI."
      canonical="https://sentus.ai/system-requirements"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">System Requirements</h1>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Minimum</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Browser: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</li>
        <li>Internet: 10 Mbps</li>
        <li>Screen: 1280×720</li>
        <li>JavaScript and cookies enabled</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Recommended</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Latest browser versions</li>
        <li>25+ Mbps connection</li>
        <li>1920×1080 or higher</li>
        <li>Hardware acceleration enabled</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default SystemRequirements;
