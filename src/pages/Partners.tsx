import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Partners = () => (
  <div className="min-h-screen">
    <SEO
      title="Sentus AI Partners"
      description="Partner with Sentus AI to deliver automation solutions."
      canonical="https://sentus.ai/partners"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Partners</h1>
      <p className="mb-4">Interested in partnering? Email <a href="mailto:partners@sentus.ai" className="hover:text-primary">partners@sentus.ai</a>.</p>
    </main>
    <Footer />
  </div>
);

export default Partners;
