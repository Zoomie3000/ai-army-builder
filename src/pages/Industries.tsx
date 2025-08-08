import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Building2, Hospital, Banknote, ShoppingBag, Factory, Building } from "lucide-react";

const industries = [
  { slug: "healthcare", name: "Healthcare", description: "HIPAA‑ready AI for intake, coding, prior auth, denials, and patient support.", icon: Hospital },
  { slug: "finance", name: "Finance", description: "Automate AP/AR, reconciliations, KYC/AML, reporting, and audit‑ready workflows.", icon: Banknote },
  { slug: "retail", name: "Retail & E‑commerce", description: "24/7 support, product ops, listings, returns, and personalization at scale.", icon: ShoppingBag },
  { slug: "manufacturing", name: "Manufacturing", description: "Predictive maintenance, quality checks, supply planning, and vendor ops.", icon: Factory },
  { slug: "real-estate", name: "Real Estate", description: "Lead routing, listings, comps, compliance, and transaction coordination.", icon: Building },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="AI Solutions by Industry | Sentus.ai"
        description="Explore AI solutions tailored to healthcare, finance, retail, manufacturing, and real estate. Deployed in minutes with measurable ROI."
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/industries` : undefined}
      />
      <StructuredData type="CollectionPage" data={{ name: "Industries", description: "Industry‑specific AI solutions" }} />

      <section className="pt-24 pb-12 section-padding-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20">High‑ROI industries</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gradient-advanced">AI, tailored to your industry</h1>
              <p className="text-muted-foreground mt-3 max-w-2xl">Purpose‑built agents with compliance, connectors, and workflows aligned to sector‑specific pain points.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ slug, name, description, icon: Icon }) => (
              <Link key={slug} to={`/industries/${slug}`} className="block group">
                <Card className="glass-card hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link to="/agents">Browse all agents</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
