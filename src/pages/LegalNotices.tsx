import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const LegalNotices = () => (
  <div className="min-h-screen">
    <SEO
      title="Legal Notices | Sentus AI, Inc."
      description="Serve legal notices to Sentus AI via our secure portal."
      canonical="https://sentus.ai/legal-notices"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Legal Notices</h1>
      <p className="mb-4">Please submit legal notices via this portal to protect against email scraping.</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Your Name</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Organization</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" />
        </div>
        <div>
          <label className="block mb-1">Contact Email</label>
          <input type="email" className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea rows={6} className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <button type="submit" className="btn-primary px-4 py-2 rounded-md">Submit</button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">For service of process, use our registered agent address. Physical mail to our Pleasant Hill office is discouraged.</p>
    </main>
    <Footer />
  </div>
);

export default LegalNotices;
