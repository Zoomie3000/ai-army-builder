import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Scale, Stethoscope, Cog, Building2 } from "lucide-react";

export default function AgentInventory() {
  const categories = [
    { key: "finance", name: "Finance", count: 487, icon: DollarIcon, points: ["AP/AR automation", "Forecasting & FP&A", "Cash & treasury" ] },
    { key: "legal", name: "Legal", count: 125, icon: Scale, points: ["Contracting", "Research & discovery", "Compliance"] },
    { key: "operations", name: "Operations", count: 86, icon: Cog, points: ["Workflow orchestration", "QA & monitoring", "Data ops"] },
    { key: "healthcare", name: "Healthcare", count: 72, icon: Stethoscope, points: ["RCM & billing", "Prior auth", "Scheduling"] },
    { key: "real-estate", name: "Real Estate", count: 6, icon: Building2, points: ["Listings", "Transactions", "Property ops"] },
  ];

  return (
    <div className="min-h-screen pt-16 pt-safe">
      <SEO
        title="778 AI Agents Inventory | Sentus.ai"
        description="Explore the world's largest AI agent collection—778 agents across finance, legal, healthcare, and operations."
        canonical="https://sentus.ai/agents/inventory"
        type="website"
      />
      <StructuredData
        type="ItemList"
        data={{
          name: "Sentus.ai Agent Inventory",
          numberOfItems: 778,
          itemListElement: categories.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: {
              "@type": "Thing",
              additionalProperty: { "@type": "PropertyValue", name: "count", value: c.count },
            },
          })),
        }}
      />
      <Header />

      <main>
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">Executive Overview</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">World’s Largest AI Agent Collection: 778 Agents</h1>
              <p className="text-muted-foreground mt-4">Covering every department and industry—engineered for integration, automation, analysis, and monitoring.</p>
              <div className="mt-6 flex justify-center gap-3">
                <Button asChild className="btn-primary"><a href="/agents">Browse Catalog</a></Button>
                <Button asChild variant="outline"><a href="/contact">Talk to Sales</a></Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
              {categories.map((c) => (
                <Card key={c.key} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{c.name}</CardTitle>
                      <Badge>{c.count}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Enterprise-Grade</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">SOC 2, HIPAA, GDPR-ready. Built-in audit trails, access controls, and policy guardrails.</CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Fast Deployments</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Deploy in minutes with prebuilt playbooks and 50+ integrations. ROI inside 30 days.</CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Flexible Pricing</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">From single agents to department bundles—scale up to 778+ as you grow.</CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Minimal Dollar icon to avoid adding new deps
function DollarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" {...props}>
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
