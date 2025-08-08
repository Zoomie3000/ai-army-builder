import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { agents } from "@/data/agents";
import { Link } from "react-router-dom";
import { ShoppingBag, Repeat, MessageSquare, Package } from "lucide-react";

const industry = "retail";
const pageTitle = "Retail & E‑commerce AI | Sentus.ai";
const pageDesc = "24/7 support, product ops, catalog enrichment, returns, and personalization for retail & e‑commerce.";

export default function RetailIndustry() {
  const industryAgents = agents.filter(a => a.industries.includes(industry) || a.industries.includes("ecommerce"));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO title={pageTitle} description={pageDesc} canonical={typeof window !== 'undefined' ? `${window.location.origin}/industries/retail` : undefined} />
      <StructuredData type="CollectionPage" data={{ name: "Retail & E‑commerce AI", description: pageDesc }} />

      <section className="pt-24 pb-8 section-padding-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Industry</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-advanced">Retail & E‑commerce</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl">{pageDesc}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Card className="glass-card"><CardContent className="pt-6"><div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-success"/> 24/7 CX</div></CardContent></Card>
            <Card className="glass-card"><CardContent className="pt-6"><div className="flex items-center gap-2"><Package className="w-4 h-4 text-accent"/> Catalog & Listings</div></CardContent></Card>
            <Card className="glass-card"><CardContent className="pt-6"><div className="flex items-center gap-2"><Repeat className="w-4 h-4 text-primary"/> Returns & RMA</div></CardContent></Card>
            <Card className="glass-card"><CardContent className="pt-6"><div className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-secondary"/> Personalization</div></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Recommended Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryAgents.slice(0, 9).map((agent) => (
              <Link key={agent.slug} to={`/agents/${agent.slug}`} className="group block">
                <Card className="glass-card hover-lift h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{agent.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-success font-semibold">${'{'}agent.estimatedSavingsPerMonth.toLocaleString(){'}'} /mo</span>
                      <span className="text-muted-foreground">{agent.deployTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="btn-primary"><Link to="/agents">Browse all retail agents</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
