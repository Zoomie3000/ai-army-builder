import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Terms = () => (
  <div className="min-h-screen">
    <SEO
      title="Sentus AI Terms of Service"
      description="Terms of Service for using Sentus AI products and services."
      canonical="https://sentus.ai/terms"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">Please read these terms carefully before using our services.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p>Legal inquiries: <a href="mailto:privacy@sentus.ai" className="hover:text-primary">privacy@sentus.ai</a></p>
    </main>
    <Footer />
  </div>
);

export default Terms;
