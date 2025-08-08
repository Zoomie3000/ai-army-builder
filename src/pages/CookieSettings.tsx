import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const CookieSettings = () => (
  <div className="min-h-screen">
    <SEO
      title="Cookie Settings | Sentus AI, Inc."
      description="Manage your cookie preferences for Sentus AI."
      canonical="https://sentus.ai/cookie-settings"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Cookie Settings</h1>
      <p className="text-muted-foreground mb-6">Preference center coming soon. You can still control cookies using your browser settings.</p>
    </main>
    <Footer />
  </div>
);

export default CookieSettings;
