import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const PrivacyRights = () => (
  <div className="min-h-screen">
    <SEO
      title="Privacy Rights Requests | Sentus AI, Inc."
      description="Submit CCPA/CPRA and GDPR privacy rights requests to Sentus AI via secure form."
      canonical="https://sentus.ai/privacy-rights"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Rights Requests</h1>
      <p className="text-muted-foreground mb-6">Use this portal to request access, deletion, correction, or portability of your personal information.</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Business Email</label>
          <input type="email" className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Request Type</label>
          <select className="w-full px-3 py-2 rounded-md border border-border bg-background">
            <option>Access</option>
            <option>Deletion</option>
            <option>Correction</option>
            <option>Portability</option>
            <option>Limit Use of Sensitive PI</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Details</label>
          <textarea rows={5} className="w-full px-3 py-2 rounded-md border border-border bg-background" />
        </div>
        <button type="submit" className="btn-primary px-4 py-2 rounded-md">Submit Request</button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">We will acknowledge within 10 business days and respond within 45 days as permitted by law.</p>
    </main>
    <Footer />
  </div>
);

export default PrivacyRights;
