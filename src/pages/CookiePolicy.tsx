import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const CookiePolicy = () => (
  <div className="min-h-screen">
    <SEO
      title="Cookie Policy | Sentus AI, Inc."
      description="Learn how SENTUS AI, INC. uses cookies and similar technologies and manage your preferences."
      canonical="https://sentus.ai/cookies"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-muted-foreground mb-6">Effective date: August 8, 2025 • Version 3.0</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files placed on your device. We also use local storage, session storage, and pixels to operate and improve our site.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Essential: Authentication, security, load balancing.</li>
        <li>Functional: Preferences like language and timezone.</li>
        <li>Analytics: Usage and performance (consent-based where required).</li>
        <li>Marketing: Only if enabled; configurable via preferences.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Choices</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Manage preferences: <a className="underline hover:text-primary" href="#">Open cookie settings</a> (coming soon).</li>
        <li>Browser controls may block cookies (site may not function properly without essential cookies).</li>
        <li>We honor Global Privacy Control where legally required.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <p>For cookie questions, contact us via <a className="underline hover:text-primary" href="/support">/support</a>.</p>
    </main>
    <Footer />
  </div>
);

export default CookiePolicy;
