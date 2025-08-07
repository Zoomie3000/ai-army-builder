import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Layers3, Network, Plug } from "lucide-react";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export default function CustomAgents() {
  const canonical = `${origin}/services/custom-agents`;

  const features = [
    { title: "Multi‑agent orchestration", desc: "Coordinator, planner, and tool‑use agents tuned for outcomes.", icon: Layers3 },
    { title: "Retrieval & tools", desc: "Grounded with your data, APIs, and business rules.", icon: Plug },
    { title: "Observability", desc: "Tracing, evals, and guardrails for reliability.", icon: Network },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Custom AI Agents Development | Sentus AI"
        description="We design, train, and deploy production‑grade AI agents tailored to your processes and KPIs."
        canonical={canonical}
        type="website"
      />
      <StructuredData
        type="Service"
        data={{
          name: "Custom AI Agents",
          areaServed: "Global",
          provider: { "@type": "Organization", name: "Sentus.ai" },
          url: canonical,
          serviceType: "Development",
        }}
      />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-advanced mb-4">Custom AI Agents</h1>
            <p className="text-lg text-muted-foreground">
              Purpose‑built agents for finance, ops, support, sales, and more—securely grounded in your data,
              integrated with your tools, and measured against your KPIs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="glass-card">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button className="btn-primary">Request a demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
