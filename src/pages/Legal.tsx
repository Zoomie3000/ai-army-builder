import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Legal = () => (
  <div className="min-h-screen">
    <SEO
      title="Legal | Sentus AI, Inc."
      description="Central hub for Sentus AI legal documents: Privacy, Terms, Cookies, DPA, Compliance, and more."
      canonical="https://sentus.ai/legal"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Legal Center</h1>
      <p className="text-muted-foreground mb-8">Find all of our legal documents and compliance resources in one place.</p>

      <section className="grid gap-4">
        <a className="underline hover:text-primary" href="/privacy">Privacy Policy</a>
        <a className="underline hover:text-primary" href="/terms">Terms of Service</a>
        <a className="underline hover:text-primary" href="/cookies">Cookie Policy</a>
        <a className="underline hover:text-primary" href="/acceptable-use">Acceptable Use Policy</a>
        <a className="underline hover:text-primary" href="/dpa">Data Processing Agreement (DPA)</a>
        <a className="underline hover:text-primary" href="/compliance">Compliance Center</a>
        <a className="underline hover:text-primary" href="/api-terms">API Terms</a>
        <a className="underline hover:text-primary" href="/security">Security Policy</a>
        <a className="underline hover:text-primary" href="/dmca">DMCA Policy</a>
        <a className="underline hover:text-primary" href="/responsible-ai">Responsible AI</a>
        <a className="underline hover:text-primary" href="/accessibility">Accessibility Statement</a>
        <a className="underline hover:text-primary" href="/vulnerability-disclosure">Vulnerability Disclosure</a>
        <a className="underline hover:text-primary" href="/do-not-sell">Do Not Sell/Share My Personal Information</a>
        <a className="underline hover:text-primary" href="/privacy-rights">Privacy Rights Requests</a>
        <a className="underline hover:text-primary" href="/privacy-contact">Privacy Contact</a>
        <a className="underline hover:text-primary" href="/legal-notices">Legal Notices</a>
        <a className="underline hover:text-primary" href="/ai-disclosure">AI Disclosure</a>
        <a className="underline hover:text-primary" href="/cookie-settings">Cookie Settings</a>
      </section>

      <p className="text-xs text-muted-foreground mt-8">These materials are provided for informational purposes and may be updated periodically. For questions, please contact us via the appropriate portal.</p>
    </main>
    <Footer />
  </div>
);

export default Legal;
