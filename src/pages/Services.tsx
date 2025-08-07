import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bot, Briefcase, PlugZap, Wrench } from "lucide-react";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export default function Services() {
  const canonical = `${origin}/services`;

  const services = [
    {
      title: "AI Consulting",
      slug: "consulting",
      description:
        "Strategy, roadmaps, and governance to deploy AI responsibly and at speed across your org.",
      icon: Briefcase,
    },
    {
      title: "Custom AI Agents",
      slug: "custom-agents",
      description:
        "Design, train, and deploy task‑specific multi‑agent systems for your unique workflows.",
      icon: Wrench,
    },
    {
      title: "Systems Integrations",
      slug: "integrations",
      description:
        "Seamless integrations with your stack (CRM, ERP, data lakes) with SLAs and monitoring.",
      icon: PlugZap,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="AI Services for Enterprises | Sentus AI"
        description="Enterprise‑grade AI services: consulting, custom AI agents, and systems integrations to accelerate automation safely."
        canonical={canonical}
        type="website"
      />
      <StructuredData
        type="ItemList"
        data={{
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            url: `${canonical}/${s.slug}`,
            provider: { "@type": "Organization", name: "Sentus.ai" },
          })),
        }}
      />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Professional Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-advanced mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From strategy to production—our experts help you implement AI that drives measurable ROI
              while meeting security and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.slug} className="glass-card hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{s.description}</p>
                  <Link to={`/services/${s.slug}`}>
                    <Button className="btn-primary">Explore {s.title}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button variant="outline" className="btn-ghost">Talk to an AI Advisor</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
