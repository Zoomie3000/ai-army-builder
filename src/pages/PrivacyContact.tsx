import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const PrivacyContact = () => (
  <div className="min-h-screen">
    <SEO
      title="Privacy Contact | Sentus AI, Inc."
      description="Contact Sentus AI's privacy team through our secure form."
      canonical="https://sentus.ai/privacy-contact"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Contact</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Your Name</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Business Email</label>
          <input type="email" className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Request</label>
          <textarea rows={6} className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <button type="submit" className="btn-primary px-4 py-2 rounded-md">Send</button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">For rights requests, use <a className="underline hover:text-primary" href="/privacy-rights">/privacy-rights</a>.</p>
    </main>
    <Footer />
  </div>
);

export default PrivacyContact;
