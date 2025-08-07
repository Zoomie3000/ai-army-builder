import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { agents } from "@/data/agents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, Zap, ArrowLeft } from "lucide-react";

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const AgentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const agent = useMemo(() => agents.find(a => a.slug === slug), [slug]);

  if (!agent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold">Agent not found</h1>
            <p className="text-muted-foreground">The agent you're looking for doesn't exist or has been moved.</p>
            <Button asChild className="btn-primary">
              <Link to="/agents">Back to all agents</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/agents/${agent.slug}` : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title={`${agent.name} | AI Agent | Sentus.ai`}
        description={agent.description}
        canonical={canonical}
      />
      <StructuredData
        type="SoftwareApplication"
        data={{
          name: agent.name,
          applicationCategory: "BusinessApplication",
          offers: agent.pricePerMonth ? {
            "@type": "Offer",
            price: String(agent.pricePerMonth),
            priceCurrency: "USD"
          } : undefined,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(agent.rating),
            reviewCount: agent.deployments
          },
          featureList: agent.features.join(", "),
          operatingSystem: "Web-based",
        }}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center gap-3 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <Link to="/agents" className="text-primary hover:underline">Back to all agents</Link>
          </div>

          <section className="glass-hero p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">{agent.name}</h1>
                <p className="text-muted-foreground max-w-2xl">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((t, i) => (
                    <Badge key={i} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="text-center p-4 glass-panel rounded-xl">
                  <div className="text-2xl font-bold text-yellow-400 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" /> {agent.rating}
                  </div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
                <div className="text-center p-4 glass-panel rounded-xl">
                  <div className="text-2xl font-bold flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" /> {agent.deployments.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
                <div className="text-center p-4 glass-panel rounded-xl col-span-2">
                  <div className="text-lg font-semibold text-success">{formatCurrency(agent.estimatedSavingsPerMonth)}/month</div>
                  <div className="text-xs text-muted-foreground">Estimated Savings</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="btn-primary flex-1 sm:flex-none">Deploy Agent</Button>
              <Button variant="outline" className="btn-ghost flex-1 sm:flex-none">View Live Demo</Button>
            </div>
          </section>

          {agent.persona && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Meet {agent.name.split(" ")[0]}</CardTitle>
                <CardDescription>Agent personality</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{agent.persona}</p>
              </CardContent>
            </Card>
          )}

          <section className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card md:col-span-2">
              <CardHeader>
                <CardTitle>What this agent can do</CardTitle>
                <CardDescription>Core capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {agent.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <Zap className="w-4 h-4 text-accent mr-2 mt-0.5" />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>At-a-glance</CardTitle>
                <CardDescription>Key details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Deploy time</span><span className="font-medium">{agent.deployTime}</span></div>
                {agent.pricePerMonth && (
                  <div className="flex justify-between"><span className="text-muted-foreground">Price</span><span className="font-medium">{formatCurrency(agent.pricePerMonth)}/month</span></div>
                )}
                <div className="flex justify-between"><span className="text-muted-foreground">Languages</span><span className="font-medium">{agent.languages ?? 100}+</span></div>
                <div>
                  <div className="text-muted-foreground mb-1">Best for industries</div>
                  <div className="flex flex-wrap gap-2">
                    {agent.industries.map((i) => (
                      <Badge key={i} className="bg-primary/10 text-primary border-primary/20 capitalize">{i}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AgentDetail;
