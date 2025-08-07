import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Bot, Zap, Shield, Clock, Star, CheckCircle, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-ai-command-center.jpg";
import agentsImage from "@/assets/ai-agents-working.jpg";
import roiImage from "@/assets/roi-dashboard.jpg";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [roiData, setRoiData] = useState({
    monthlyHours: 0,
    monthlySavings: 0,
    annualSavings: 0
  });

  // ROI Calculator Logic
  const calculateROI = (employees: string) => {
    const employeeCount = parseInt(employees) || 0;
    const hoursPerEmployee = 20; // Hours saved per employee per month
    const avgHourlyRate = 35; // Average hourly rate
    
    const monthlyHours = employeeCount * hoursPerEmployee;
    const monthlySavings = monthlyHours * avgHourlyRate;
    const annualSavings = monthlySavings * 12;

    setRoiData({
      monthlyHours,
      monthlySavings,
      annualSavings
    });
  };

  useEffect(() => {
    if (companySize) {
      calculateROI(companySize);
    }
  }, [companySize]);

  const handleFreeTrial = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to start your free trial.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "🚀 Trial Starting!",
      description: "Your AI workforce is assembling. Check your email for next steps.",
    });
  };

  const agents = [
    { name: "Invoice Processor", task: "Automate AP/AR workflows", savings: "$5,000/mo", icon: "📄" },
    { name: "Customer Support", task: "Handle 80% of inquiries", savings: "$8,000/mo", icon: "💬" },
    { name: "Data Entry Master", task: "Process forms & spreadsheets", savings: "$3,500/mo", icon: "📊" },
    { name: "Email Assistant", task: "Sort, respond, prioritize", savings: "$2,800/mo", icon: "📧" },
    { name: "Sales Automator", task: "Lead qualification & follow-up", savings: "$12,000/mo", icon: "💰" },
    { name: "Compliance Monitor", task: "Audit & risk management", savings: "$6,500/mo", icon: "🛡️" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CFO, TechCorp",
      company: "TechCorp",
      quote: "Sentus saved us $200,000 in year one. Invoice processing that took 3 days now takes 3 minutes.",
      savings: "$200K saved"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Operations Director",
      company: "GlobalManufacturing",
      quote: "722 agents working 24/7? It's like having a tireless workforce that never sleeps.",
      savings: "$150K saved"
    },
    {
      name: "Emily Watson",
      role: "CEO, StartupX",
      company: "StartupX", 
      quote: "From 20 hours/week on admin to zero. Now we focus on what matters: growing the business.",
      savings: "$75K saved"
    }
  ];

  const competitors = [
    { name: "UiPath", price: "$420/bot/month", setup: "6+ months", agents: "50", downside: "Requires technical team" },
    { name: "Automation Anywhere", price: "$360/bot/month", setup: "4+ months", agents: "30", downside: "Limited compatibility" },
    { name: "Power Automate", price: "$45/flow/month", setup: "2+ months", agents: "20", downside: "Microsoft ecosystem only" },
    { name: "Sentus.ai", price: "$299-999/month", setup: "5 minutes", agents: "722+", downside: "None found", highlight: true }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">Sentus.ai</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#agents" className="hover:text-primary transition-colors">Agents</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#roi" className="hover:text-primary transition-colors">ROI Calculator</a>
              <Button variant="outline" className="btn-glass">Login</Button>
              <Button className="btn-hero">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient-x"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
                  🚀 722+ AI Agents Ready to Deploy
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Unleash Your</span>
                  <br />
                  <span className="text-glow">AI Army</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Deploy 722+ specialized AI agents in 5 minutes. Automate 40-90% of repetitive tasks without coding. 
                  <span className="text-accent font-semibold"> Save $5,000+ monthly.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Enter your work email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-muted/50 border-muted text-lg h-12"
                  />
                </div>
                <Button onClick={handleFreeTrial} size="lg" className="btn-hero text-lg px-8 h-12">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>5-minute setup</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="glass-hero p-6 rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Sentus.ai AI Command Center with autonomous agents" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-b border-muted">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <p className="text-muted-foreground">Trusted by 500+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <Badge variant="outline" className="text-lg py-2 px-4">SOC2</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">HIPAA</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">GDPR</Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">ISO 27001</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Why Sentus Dominates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Others automate tasks. We orchestrate intelligence. Others replace jobs. We create superhumans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover-scale">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>5-Minute Deployment</CardTitle>
                <CardDescription>While competitors take months, you're automated in minutes</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover-scale">
              <CardHeader>
                <Bot className="h-12 w-12 text-accent mb-4" />
                <CardTitle>722+ Specialized Agents</CardTitle>
                <CardDescription>5-10x more agents than any competitor. Every business function covered.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover-scale">
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Universal Compatibility</CardTitle>
                <CardDescription>Works with ANY software. No APIs needed. No limitations.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gradient mb-4">Calculate Your ROI</h2>
                <p className="text-xl text-muted-foreground">
                  See exactly how much Sentus will save your business in the first month.
                </p>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>ROI Calculator</CardTitle>
                  <CardDescription>Most businesses save $5,000+ monthly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Number of Employees</label>
                    <Select value={companySize} onValueChange={setCompanySize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">1-10 employees</SelectItem>
                        <SelectItem value="25">11-25 employees</SelectItem>
                        <SelectItem value="50">26-50 employees</SelectItem>
                        <SelectItem value="100">51-100 employees</SelectItem>
                        <SelectItem value="250">101-250 employees</SelectItem>
                        <SelectItem value="500">250+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {roiData.monthlySavings > 0 && (
                    <div className="space-y-4 p-6 glass-hero rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{roiData.monthlyHours}</p>
                          <p className="text-sm text-muted-foreground">Hours Saved/Month</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">${roiData.monthlySavings.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Monthly Savings</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gradient">${roiData.annualSavings.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Annual Savings</p>
                      </div>
                      <Button onClick={handleFreeTrial} className="btn-hero w-full">
                        Claim Your Savings Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img src={roiImage} alt="ROI Dashboard showing cost savings and efficiency metrics" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Agent Showcase */}
      <section id="agents" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Meet Your AI Army</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              722+ specialized agents ready to eliminate your biggest time wasters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agents.map((agent, index) => (
              <Card key={index} className="agent-card">
                <CardHeader>
                  <div className="text-4xl mb-2">{agent.icon}</div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <CardDescription>{agent.task}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {agent.savings}
                    </Badge>
                    <Button size="sm" variant="outline" className="btn-glass">
                      Deploy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img src={agentsImage} alt="Multiple AI agents working on different business tasks" className="mx-auto rounded-lg shadow-2xl mb-8 max-w-md" />
            <Button size="lg" className="btn-hero">
              Browse All 722+ Agents <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Sentus vs. The Rest</h2>
            <p className="text-xl text-muted-foreground">
              Why pay UiPath $20,000/month when Sentus delivers more for $999?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-lg overflow-hidden">
              <thead className="bg-primary/20">
                <tr>
                  <th className="text-left p-4 font-semibold">Platform</th>
                  <th className="text-left p-4 font-semibold">Price</th>
                  <th className="text-left p-4 font-semibold">Setup Time</th>
                  <th className="text-left p-4 font-semibold">Agents</th>
                  <th className="text-left p-4 font-semibold">Major Limitation</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, index) => (
                  <tr key={index} className={`border-t border-muted ${comp.highlight ? 'bg-primary/10' : ''}`}>
                    <td className="p-4 font-medium">{comp.name}</td>
                    <td className="p-4">{comp.price}</td>
                    <td className="p-4">{comp.setup}</td>
                    <td className="p-4">{comp.agents}</td>
                    <td className="p-4">
                      {comp.highlight ? (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {comp.downside}
                        </Badge>
                      ) : (
                        <span className="text-red-400">{comp.downside}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Real Results, Real Customers</h2>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold ml-2">4.9/5 from 500+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {testimonial.savings}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gradient">Choose Your AI Army Size</h2>
            <p className="text-xl text-muted-foreground">
              All plans include 14-day free trial. No setup fees. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="text-4xl font-bold text-primary">$299</div>
                <p className="text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>5 active agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>1,000 tasks/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full btn-glass">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/50 scale-105 animate-pulse-glow">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground">Most Popular</Badge>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-4xl font-bold text-primary">$599</div>
                <p className="text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>25 active agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>10,000 tasks/month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="w-full btn-hero">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Business</CardTitle>
                <CardDescription>Unlimited automation</CardDescription>
                <div className="text-4xl font-bold text-primary">$999</div>
                <p className="text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Unlimited agents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Dedicated success manager</span>
                  </li>
                </ul>
                <Button className="w-full btn-glass">Start Free Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold text-gradient">Your Competitors Are Automating</h2>
            <p className="text-2xl text-muted-foreground">
              Your employees are drowning. Your profits are leaking. 
              <br />
              <span className="text-accent font-semibold">Sentus fixes all of this in 5 minutes.</span>
            </p>
            <p className="text-xl text-muted-foreground">
              What are you waiting for?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <Input 
                placeholder="Enter your work email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50 border-muted text-lg h-14"
              />
              <Button onClick={handleFreeTrial} size="lg" className="btn-hero text-xl px-12 h-14">
                Unleash AI Army
              </Button>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>✓ 14-day free trial • ✓ No credit card • ✓ 5-minute setup</p>
              <p>Join 500+ businesses already saving $5,000+ monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-gradient">Sentus.ai</span>
              </div>
              <p className="text-muted-foreground">
                Unleash your AI army. Conquer inefficiency. Dominate tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#agents" className="hover:text-primary transition-colors">AI Agents</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#roi" className="hover:text-primary transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-muted pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Sentus.ai. All rights reserved. Built for the AI revolution.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;