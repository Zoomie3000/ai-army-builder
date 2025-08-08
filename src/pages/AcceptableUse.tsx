import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const AcceptableUse = () => (
  <div className="min-h-screen">
    <SEO
      title="Acceptable Use Policy | Sentus AI, Inc."
      description="Acceptable Use Policy governing use of SENTUS AI, INC. services and AI agents."
      canonical="https://sentus.ai/acceptable-use"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Acceptable Use Policy</h1>
      <p className="text-muted-foreground mb-6">Prohibited activities and consequences for violations.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Prohibited Activities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Illegal activity, IP infringement, malware distribution, or harassment.</li>
        <li>Unauthorized access, scraping without consent, or bypassing controls.</li>
        <li>Abusive automation, spam, or privacy violations.</li>
        <li>AI-specific: deceptive content, surveillance without consent, training competing models on outputs, safety circumvention.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Enforcement</h2>
      <p>We may warn, suspend, or terminate accounts and notify authorities when required. Appeals can be submitted via <a className="underline hover:text-primary" href="/support">/support</a>.</p>
    </main>
    <Footer />
  </div>
);

export default AcceptableUse;
