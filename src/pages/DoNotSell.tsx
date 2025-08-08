import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const DoNotSell = () => (
  <div className="min-h-screen">
    <SEO
      title="Do Not Sell or Share My Personal Information | Sentus AI, Inc."
      description="Exercise your CCPA/CPRA opt-out rights with Sentus AI."
      canonical="https://sentus.ai/do-not-sell"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Do Not Sell or Share My Personal Information</h1>
      <p className="text-muted-foreground mb-6">Under California law, you may opt out of the sale or sharing of personal information.</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Business Email</label>
          <input type="email" className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <button type="submit" className="btn-primary px-4 py-2 rounded-md">Submit Opt-Out</button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">We honor Global Privacy Control (GPC) where required by law.</p>
    </main>
    <Footer />
  </div>
);

export default DoNotSell;
