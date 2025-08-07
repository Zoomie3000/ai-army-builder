import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import {
  Bot, Search, Filter, Star, Clock, DollarSign, Users, Zap,
  FileText, Calculator, MessageCircle, Database, Briefcase, Settings,
  ShoppingCart, TrendingUp, Shield, Globe, Cpu, Brain
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { agents, type Agent } from "@/data/agents";

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const CATEGORY_META: Record<string, { icon: any; color: string }> = {
    "Finance & Accounting": { icon: Calculator, color: "bg-green-500/10 text-green-400" },
    "Customer Support": { icon: MessageCircle, color: "bg-blue-500/10 text-blue-400" },
    "Sales & Marketing": { icon: TrendingUp, color: "bg-purple-500/10 text-purple-400" },
    "Operations": { icon: Settings, color: "bg-orange-500/10 text-orange-400" },
  };

  const grouped = agents.reduce((acc, agent) => {
    const meta = CATEGORY_META[agent.category];
    if (!acc[agent.category]) {
      acc[agent.category] = {
        icon: meta?.icon || Bot,
        color: meta?.color || "bg-accent/10 text-accent",
        agents: [],
      };
    }
    acc[agent.category].agents.push(agent);
    return acc;
  }, {} as Record<string, { icon: any; color: string; agents: Agent[] }>);

  const industries = [
    "All Industries", "Healthcare", "Finance", "Technology", "Manufacturing",
    "Retail", "Legal", "Real Estate", "Education", "Non-profit"
  ];

  const filteredAgents = Object.entries(grouped).reduce((acc, [category, data]) => {
    const filtered = data.agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesIndustry =
        selectedIndustry === "all" ||
        selectedIndustry === "all industries" ||
        agent.industries.includes(selectedIndustry);
      return matchesSearch && matchesCategory && matchesIndustry;
    });

    if (filtered.length > 0) {
      acc[category] = { ...data, agents: filtered };
    }

    return acc;
  }, {} as typeof grouped);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const totalAgents = agents.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="AI Agent Arsenal | Sentus.ai"
        description="Browse and deploy specialized AI agents across Finance, Support, Sales & Marketing, and Operations. Deploy in minutes with real ROI."
        canonical={typeof window !== 'undefined' ? `${window.location.origin}/agents` : undefined}
      />
      <StructuredData
        type="CollectionPage"
        data={{
          name: "AI Agent Arsenal",
          description: "Catalog of deployable AI agents across business functions",
          numberOfItems: totalAgents,
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-padding-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              {totalAgents} AI Agents Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-advanced mb-6">
              Your AI Agent Arsenal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deploy specialized AI agents in minutes. Each agent is battle-tested, 
              continuously learning, and designed to amplify human intelligence across every business function.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search agents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50 border-border/20"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background/50 border-border/20">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {Object.keys(grouped).map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="bg-background/50 border-border/20">
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(filteredAgents).map(([category, data]) => {
            const Icon = data.icon;
            return (
              <div key={category} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl ${data.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                    <p className="text-muted-foreground">{data.agents.length} agents available</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.agents.map((agent, index) => (
                    <Link to={`/agents/${agent.slug}`} key={index} className="group block" aria-label={`View details for ${agent.name}`}>
                      <Card className="glass-card hover-lift cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                                {agent.name}
                              </CardTitle>
                              <div className="flex items-center mt-2 space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                  {agent.rating}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {agent.deployments}
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-success/10 text-success">
                              {agent.deployTime}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                            {agent.description}
                          </CardDescription>
                          
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-foreground">Estimated Savings</span>
                              <span className="text-lg font-bold text-success">{formatCurrency(agent.estimatedSavingsPerMonth)}/month</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {agent.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2 mb-6">
                            <p className="text-sm font-medium text-foreground">Key Features:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {agent.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center">
                                  <Zap className="w-3 h-3 text-accent mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex space-x-2">
                            <Button className="flex-1 btn-primary">
                              Deploy Agent
                            </Button>
                            <Button variant="outline" size="sm" className="btn-ghost">
                              Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-hero max-w-4xl mx-auto p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-advanced mb-6">
              Need a Custom Agent?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our TITAN-class agents can be customized for your specific needs. 
              Join our Agent Builder program and create the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Request Custom Agent
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost">
                Join Builder Program
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;