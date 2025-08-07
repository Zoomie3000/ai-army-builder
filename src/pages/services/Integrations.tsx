import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cable, Database, ShieldCheck } from "lucide-react";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export default function Integrations() {
  const canonical = `${origin}/services/integrations`;

  const stacks = [
    { title: "CRM & GTM", desc: "Salesforce, HubSpot, Zendesk, Intercom, Marketo, Outreach.", icon: Cable },
    { title: "ERP & Finance", desc: "NetSuite, SAP, Workday, QuickBooks, Coupa.", icon: Database },
    { title: "Security", desc: "SSO, RBAC, audit trails, data residency & encryption.", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="AI Systems Integrations | Sentus AI"
        description="Seamless integrations with your data and tools, enterprise‑grade auth and governance, and reliable observability."
        canonical={canonical}
        type="website"
      />
      <StructuredData
        type="Service"
        data={{
          name: "AI Systems Integrations",
          areaServed: "Global",
          provider: { "@type": "Organization", name: "Sentus.ai" },
          url: canonical,
          serviceType: "Integration",
        }}
      />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-advanced mb-4">Systems Integrations</h1>
            <p className="text-lg text-muted-foreground">
              Connect agents to your stack with SLAs, auditability, and security baked‑in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stacks.map((s) => (
              <Card key={s.title} className="glass-card">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button className="btn-primary">See integration catalog</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
