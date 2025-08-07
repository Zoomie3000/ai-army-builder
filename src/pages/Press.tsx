import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Press = () => (
  <div className="min-h-screen">
    <SEO
      title="Sentus AI Press & Media"
      description="Press resources and media inquiries for Sentus AI."
      canonical="https://sentus.ai/press"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Press & Media</h1>
      <p className="mb-4">For interviews, brand assets, or speaking requests, contact <a href="mailto:press@sentus.ai" className="hover:text-primary">press@sentus.ai</a>.</p>
    </main>
    <Footer />
  </div>
);

export default Press;
