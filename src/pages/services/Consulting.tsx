import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Target, LineChart } from "lucide-react";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export default function Consulting() {
  const canonical = `${origin}/services/consulting`;

  const benefits = [
    { title: "AI Roadmaps", desc: "Clear, prioritized plans aligned to business outcomes.", icon: Target },
    { title: "Governance", desc: "Model risk, compliance, data privacy & security frameworks.", icon: Shield },
    { title: "Value Realization", desc: "Pilot design, KPIs, and ROI measurement.", icon: LineChart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="AI Consulting Services | Sentus AI"
        description="Strategy, governance, and value realization for enterprise AI programs—delivered by senior practitioners."
        canonical={canonical}
        type="website"
      />
      <StructuredData
        type="Service"
        data={{
          name: "AI Consulting",
          areaServed: "Global",
          provider: { "@type": "Organization", name: "Sentus.ai" },
          url: canonical,
          serviceType: "Consulting",
        }}
      />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-advanced mb-4">AI Consulting</h1>
            <p className="text-lg text-muted-foreground">
              Build the right things, in the right order. We design AI strategies, operating models, and roadmaps
              that accelerate adoption while managing risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="glass-card">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <b.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle>{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button className="btn-primary">Book a strategy call</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
