import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Privacy = () => (
  <div className="min-h-screen">
    <SEO
      title="Sentus AI Privacy Policy"
      description="Privacy Policy for Sentus AI, Inc. Learn how we handle data and protect your privacy."
      canonical="https://sentus.ai/privacy"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Effective date: August 2025</p>
      <p className="mb-4">SENTUS AI, INC. ("Sentus AI", "we", "us") is committed to protecting your privacy. This policy explains what data we collect and how we use it.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p>Privacy inquiries: <a href="mailto:privacy@sentus.ai" className="hover:text-primary">privacy@sentus.ai</a></p>
    </main>
    <Footer />
  </div>
);

export default Privacy;
