import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const AIDisclosure = () => (
  <div className="min-h-screen">
    <SEO
      title="AI Disclosure & Transparency | Sentus AI, Inc."
      description="How Sentus AI uses AI technologies with human oversight, accuracy notes, and your rights."
      canonical="https://sentus.ai/ai-disclosure"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">AI Disclosure & Transparency</h1>
      <p className="mb-4">We use artificial intelligence to enhance our website and Services. While our systems are sophisticated and continuously improving, outputs may occasionally require updates or corrections. We maintain human oversight for critical functions.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Choices</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Request human review of automated decisions where applicable.</li>
        <li>Report inaccuracies via <a className="underline hover:text-primary" href="/support">/support</a>.</li>
        <li>Learn more in our <a className="underline hover:text-primary" href="/privacy">Privacy Policy</a> and <a className="underline hover:text-primary" href="/terms">Terms</a>.</li>
      </ul>
      <p className="text-sm text-muted-foreground mt-8">Last updated: August 8, 2025</p>
    </main>
    <Footer />
  </div>
);

export default AIDisclosure;
