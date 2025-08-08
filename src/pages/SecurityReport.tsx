import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SecurityReport = () => (
  <div className="min-h-screen">
    <SEO
      title="Report a Security Issue | Sentus AI, Inc."
      description="Securely report security vulnerabilities to Sentus AI."
      canonical="https://sentus.ai/security-report"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Report a Security Issue</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <div>
          <label className="block mb-1">Vulnerability Details</label>
          <textarea rows={6} className="w-full px-3 py-2 rounded-md border border-border bg-background" required />
        </div>
        <button type="submit" className="btn-primary px-4 py-2 rounded-md">Submit Report</button>
      </form>
      <p className="text-xs text-muted-foreground mt-4">Good-faith research is protected under our <a className="underline hover:text-primary" href="/vulnerability-disclosure">Vulnerability Disclosure Policy</a>.</p>
    </main>
    <Footer />
  </div>
);

export default SecurityReport;
