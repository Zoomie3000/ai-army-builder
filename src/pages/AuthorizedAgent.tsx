import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const AuthorizedAgent = () => (
  <div className="min-h-screen">
    <SEO
      title="Authorized Agent Instructions | Sentus AI, Inc."
      description="How authorized agents can submit privacy requests on behalf of consumers."
      canonical="https://sentus.ai/authorized-agent"
      type="article"
    />
    <Header />
    <main className="container mx-auto px-6 pt-28 pb-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Authorized Agent Instructions</h1>
      <p className="mb-4">Provide a signed authorization, consumer verification, and your agency documentation. Submit via our <a className="underline hover:text-primary" href="/privacy-rights">Privacy Rights</a> portal.</p>
    </main>
    <Footer />
  </div>
);

export default AuthorizedAgent;
