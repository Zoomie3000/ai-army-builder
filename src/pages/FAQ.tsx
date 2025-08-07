import { useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ShieldCheck,
  DollarSign,
  Clock,
  Cog,
  Users,
  BarChart3,
  Globe,
  Cpu,
  Sparkles,
  Rocket,
  Scale,
  Puzzle,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

import { faqData } from "@/data/faqData";
import type { FAQCategory, FAQItem } from "@/types/faq";

// Types

const categories: FAQCategory[] = [
  { id: "general", name: "General", icon: Building2 },
  { id: "security", name: "Security & Compliance", icon: ShieldCheck },
  { id: "pricing", name: "Pricing & ROI", icon: DollarSign },
  { id: "implementation", name: "Implementation", icon: Clock },
  { id: "technical", name: "Technical", icon: Cog },
  { id: "enterprise", name: "Enterprise", icon: Users },
  { id: "performance", name: "Performance", icon: BarChart3 },
  { id: "industries", name: "Industries", icon: Globe },
  { id: "ai_basics", name: "AI Fundamentals", icon: Cpu },
  { id: "differentiation", name: "Why Sentus.ai", icon: Sparkles },
  { id: "future", name: "Future of AI", icon: Rocket },
  { id: "ethics", name: "Ethics & Responsible AI", icon: Scale },
  { id: "integration", name: "Integrations & Compatibility", icon: Puzzle },
  { id: "scaling", name: "Scaling & Growth", icon: TrendingUp },
  { id: "support", name: "Support & Community", icon: LifeBuoy },
];


const grouped = categories.map((cat) => ({
  ...cat,
  items: (faqData as FAQItem[]).filter((q) => q.category === cat.id),
}));

export default function FAQ() {
  const faqJsonLd = useMemo(() => {
    const mainEntity = faqData.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }));
    return { mainEntity } as any;
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Sentus AI FAQ: Security, Pricing, Implementation"
        description="Answers to common questions about Sentus AI: security, pricing, implementation, and technical details."
        canonical="https://sentus.ai/faq"
      />
      <StructuredData type="FAQPage" data={faqJsonLd} />
      <Header />

      <main className="section-padding">
        <div className="container mx-auto px-6">
          <header className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <Badge variant="secondary">Knowledge Base</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">Sentus AI Frequently Asked Questions</h1>
            <p className="text-muted-foreground">
              Everything you need to know about our AI agents, security, pricing, and enterprise capabilities.
            </p>
          </header>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="flex flex-wrap justify-start gap-2">
              {grouped.map((cat) => {
                const Icon = cat.icon;
                const count = cat.items.length;
                return (
                  <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{cat.name}</span>
                    {count > 0 && (
                      <Badge variant="outline" className="ml-1">{count}</Badge>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {grouped.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                {cat.items.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {cat.items.map((item, idx) => (
                      <AccordionItem key={`${cat.id}-${idx}`} value={`${cat.id}-${idx}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-sm text-muted-foreground">No questions yet in this category.</div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* CTA */}
          <section className="mt-16 glass-panel p-8 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">Talk to our team or explore pricing to get started.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild className="btn-primary">
                <a href="/contact">Contact Sales</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
