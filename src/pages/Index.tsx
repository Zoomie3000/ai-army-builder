import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, Bot, Zap, Shield, Clock, Star, CheckCircle, TrendingUp, Users, Award, Sparkles,
  Cpu, Brain, Target, Rocket, Globe, Settings, Play, ChevronDown, ArrowDown, BarChart3,
  DollarSign, Timer, Briefcase, MessageCircle, FileText, Database, Search, Lock, 
  Layers, Code, Workflow, BarChart, Calculator
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { InteractiveROICalculator } from "@/components/InteractiveROICalculator";
import heroImage from "@/assets/hero-ai-command-center.jpg";
import agentsImage from "@/assets/ai-agents-working.jpg";
import roiImage from "@/assets/roi-dashboard.jpg";
import { StructuredData } from "@/components/StructuredData";
import { AgentFinderWizard } from "@/components/AgentFinderWizard";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [activeDemo, setActiveDemo] = useState("invoice");
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [roiData, setRoiData] = useState({
    monthlyHours: 0,
    monthlySavings: 0,
    annualSavings: 0,
    productivity: 0
  });

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced ROI Calculator Logic
  const calculateROI = (employees: string, industry: string = "") => {
    const employeeCount = parseInt(employees) || 0;
    let hoursPerEmployee = 20; // Base hours saved
    let avgHourlyRate = 35; // Base hourly rate
    
    // Industry-specific multipliers
    const industryMultipliers: Record<string, { hours: number; rate: number }> = {
      "finance": { hours: 25, rate: 45 },
      "healthcare": { hours: 22, rate: 42 },
      "manufacturing": { hours: 18, rate: 32 },
      "tech": { hours: 30, rate: 55 },
      "retail": { hours: 15, rate: 28 },
      "legal": { hours: 35, rate: 85 }
    };

    if (industry && industryMultipliers[industry]) {
      hoursPerEmployee = industryMultipliers[industry].hours;
      avgHourlyRate = industryMultipliers[industry].rate;
    }
    
    const monthlyHours = employeeCount * hoursPerEmployee;
    const monthlySavings = monthlyHours * avgHourlyRate;
    const annualSavings = monthlySavings * 12;
    const productivity = Math.min(95, 40 + (employeeCount * 2)); // Cap at 95%

    setRoiData({
      monthlyHours,
      monthlySavings,
      annualSavings,
      productivity
    });
  };

  useEffect(() => {
    if (companySize) {
      calculateROI(companySize, selectedIndustry);
    }
  }, [companySize, selectedIndustry]);

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
      title: "🚀 AI Army Assembling!",
      description: "Your digital workforce is being deployed. Check your email for agent access.",
    });
  };

  // Enhanced agent data with categories
  const agentCategories = {
    "Financial Operations": [
      { name: "Invoice Processor", task: "Automate AP/AR workflows", savings: "$5,000/mo", accuracy: "99.7%", icon: "📄", color: "text-green-400" },
      { name: "Expense Manager", task: "Track & categorize expenses", savings: "$3,200/mo", accuracy: "98.9%", icon: "💳", color: "text-blue-400" },
      { name: "Payroll Assistant", task: "Process payroll & benefits", savings: "$4,500/mo", accuracy: "99.9%", icon: "💰", color: "text-yellow-400" }
    ],
    "Customer Experience": [
      { name: "Support Agent", task: "Handle 80% of inquiries", savings: "$8,000/mo", accuracy: "96.5%", icon: "💬", color: "text-purple-400" },
      { name: "Sales Assistant", task: "Lead qualification & follow-up", savings: "$12,000/mo", accuracy: "94.2%", icon: "🎯", color: "text-red-400" },
      { name: "Chat Moderator", task: "24/7 customer engagement", savings: "$6,500/mo", accuracy: "97.8%", icon: "🤖", color: "text-cyan-400" }
    ],
    "Data & Analytics": [
      { name: "Data Entry Master", task: "Process forms & spreadsheets", savings: "$3,500/mo", accuracy: "99.5%", icon: "📊", color: "text-orange-400" },
      { name: "Report Generator", task: "Automated insights & KPIs", savings: "$4,800/mo", accuracy: "98.7%", icon: "📈", color: "text-indigo-400" },
      { name: "Quality Auditor", task: "Error detection & compliance", savings: "$5,200/mo", accuracy: "99.2%", icon: "🔍", color: "text-pink-400" }
    ]
  };

  const industries = [
    { value: "finance", label: "Financial Services", icon: "🏦", growth: "+340%" },
    { value: "healthcare", label: "Healthcare", icon: "🏥", growth: "+280%" },
    { value: "manufacturing", label: "Manufacturing", icon: "🏭", growth: "+220%" },
    { value: "tech", label: "Technology", icon: "💻", growth: "+450%" },
    { value: "retail", label: "Retail & E-commerce", icon: "🛍️", growth: "+190%" },
    { value: "legal", label: "Legal Services", icon: "⚖️", growth: "+380%" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CFO",
      company: "TechCorp Solutions",
      quote: "Sentus eliminated our invoice processing bottleneck. What took our team 3 days now completes in 3 minutes. The ROI was immediate and continues to compound monthly.",
      savings: "$200K saved annually",
      image: "SC",
      industry: "Technology",
      metric: "300% faster processing"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Operations Director",
      company: "Global Manufacturing Inc",
      quote: "722 agents working around the clock? It's like having a tireless workforce that scales instantly. Our productivity has exploded while costs plummeted.",
      savings: "$150K saved annually",
      image: "MR",
      industry: "Manufacturing",
      metric: "85% cost reduction"
    },
    {
      name: "Emily Watson",
      role: "CEO",
      company: "StartupX Ventures",
      quote: "From drowning in admin tasks to focusing purely on growth strategy. Sentus didn't just automate our work—it liberated our human potential.",
      savings: "$75K saved annually",
      image: "EW",
      industry: "Startup",
      metric: "20+ hours saved weekly"
    }
  ];

  const demoScenarios = {
    invoice: {
      title: "Invoice Processing Demo",
      description: "Watch AI process 500+ invoices in seconds",
      steps: ["Receive invoice", "Extract data", "Validate amounts", "Route for approval", "Update records"],
      time: "3.2 seconds per invoice"
    },
    support: {
      title: "Customer Support Demo", 
      description: "See AI handle complex customer inquiries",
      steps: ["Analyze inquiry", "Check knowledge base", "Generate response", "Escalate if needed", "Follow up"],
      time: "14 seconds average response"
    },
    data: {
      title: "Data Processing Demo",
      description: "Transform raw data into actionable insights",
      steps: ["Import data", "Clean & validate", "Apply algorithms", "Generate insights", "Create reports"],
      time: "5 minutes for 10K records"
    }
  };

  return (
    <div className="min-h-screen">
      <StructuredData
        type="Organization"
        data={{
          name: "SENTUS AI, INC.",
          url: "https://sentus.ai",
          email: "contact@sentus.ai",
          telephone: "+1-415-853-7800",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3478 BUSKIRK AVE STE 1000",
            addressLocality: "Pleasant Hill",
            addressRegion: "CA",
            postalCode: "94523",
            addressCountry: "US",
          },
          contactPoint: [
            { "@type": "ContactPoint", contactType: "customer support", email: "support@sentus.ai" },
            { "@type": "ContactPoint", contactType: "sales", email: "sales@sentus.ai" },
            { "@type": "ContactPoint", contactType: "privacy", email: "privacy@sentus.ai" },
          ],
        }}
      />
      <Header />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="organic-blob w-96 h-96 top-10 right-10 opacity-30" />
        <div className="organic-blob organic-blob-2 w-80 h-80 bottom-20 left-10 opacity-20" />
        <div className="organic-blob w-64 h-64 top-1/2 left-1/2 opacity-25" />
      </div>

      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center section-padding">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in-up">
                <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse-soft px-4 py-2 text-sm font-semibold">
                  🚀 Deploy AI that pays for itself in weeks
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="text-gradient-advanced">Free Your Team.</span>
                  <br />
                  <span className="text-glow-advanced">Evolve Your Business.</span>
                </h1>
                
                <div className="space-y-4 text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                  <p className="leading-relaxed">
                    Deploy an intelligent AI workforce in under 5 minutes to automate repetitive tasks 
                    and accelerate your growth. No code required.
                  </p>
                  <p className="text-primary font-semibold text-xl">
                    Average savings: <span className="text-accent">$27,600/month</span> • ROI guaranteed in 30 days
                  </p>
                </div>
              </div>
              
              <div className="glass-panel p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Enter your work email to deploy AI army" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-muted/50 border-muted text-lg h-14 text-white placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button onClick={handleFreeTrial} size="lg" className="btn-primary text-lg px-8 h-14 min-w-[200px]">
                    Start Your 14-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="btn-ghost h-12">
                      <a href="#industries">Explore Industries</a>
                    </Button>
                    <div>
                      <AgentFinderWizard triggerClassName="btn-secondary h-12" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>5-minute deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-muted-foreground">Join <span className="text-primary font-semibold">500+ businesses</span> already saving $5,000+ monthly</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-yellow-400 font-semibold ml-1">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="glass-hero p-8 hover-lift">
                <img 
                  src={heroImage} 
                  alt="Sentus.ai AI Command Center with autonomous agents orchestrating business operations" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
                
                {/* Floating metrics */}
                <div className="absolute -top-6 -left-6 glass-panel p-4 animate-float-gentle">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.7%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-panel p-4 animate-float-gentle" style={{ animationDelay: '2s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$27.6K</div>
                    <div className="text-sm text-muted-foreground">Avg Monthly Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* Trust Indicators - Flowing */}
      <section className="section-divider section-padding-sm">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <p className="text-lg text-muted-foreground">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <Badge variant="outline" className="text-lg py-3 px-6 glass-panel">
                <Shield className="h-5 w-5 mr-2" />
                SOC2 Certified
              </Badge>
              <Badge variant="outline" className="text-lg py-3 px-6 glass-panel">
                <Lock className="h-5 w-5 mr-2" />
                HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="text-lg py-3 px-6 glass-panel">
                <Globe className="h-5 w-5 mr-2" />
                GDPR Ready
              </Badge>
              <Badge variant="outline" className="text-lg py-3 px-6 glass-panel">
                <Award className="h-5 w-5 mr-2" />
                ISO 27001
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-muted-foreground">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.7%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">$5M+</div>
                <div className="text-muted-foreground">Customer Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-gradient-advanced">See AI in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch how our elite agents transform your biggest time wasters into automated victories
            </p>
          </div>

          <div className="glass-card p-8">
            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass-panel">
                <TabsTrigger value="invoice" className="text-lg">Invoice Processing</TabsTrigger>
                <TabsTrigger value="support" className="text-lg">Customer Support</TabsTrigger>
                <TabsTrigger value="data" className="text-lg">Data Analytics</TabsTrigger>
              </TabsList>
              
              {Object.entries(demoScenarios).map(([key, demo]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">{demo.title}</h3>
                        <p className="text-xl text-muted-foreground">{demo.description}</p>
                      </div>
                      
                      <div className="space-y-4">
                        {demo.steps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-4 glass-panel p-4 rounded-lg">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="text-lg">{step}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="glass-panel p-6 text-center">
                        <div className="text-3xl font-bold text-accent">{demo.time}</div>
                        <div className="text-muted-foreground">Average completion time</div>
                      </div>
                      
                      <Button className="btn-primary w-full text-lg py-6">
                        <Play className="mr-2 h-5 w-5" />
                        Watch Live Demo
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <div className="glass-hero p-6">
                        <img 
                          src={key === 'invoice' ? roiImage : key === 'support' ? agentsImage : heroImage} 
                          alt={`${demo.title} in action`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="solutions" className="section-divider-reverse section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-gradient-advanced">Industry-Specific AI Armies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized agents trained for your industry's unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={industry.value} className="glass-card hover-tilt cursor-pointer" onClick={() => setSelectedIndustry(industry.value)}>
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl">{industry.label}</CardTitle>
                  <CardDescription>Industry-optimized automation</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2">
                    {industry.growth} efficiency gain
                  </Badge>
                  <Button variant="outline" className="btn-ghost w-full mt-4">
                    Explore Solutions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced ROI Calculator */}
      <section id="roi" className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gradient-advanced mb-6">Calculate Your Competitive Advantage</h2>
                <p className="text-xl text-muted-foreground">
                  See exactly how much Sentus will transform your business economics in real-time
                </p>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">ROI Calculator</CardTitle>
                  <CardDescription className="text-lg">Average customer saves $27,600 annually</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-3 block">Company Size</label>
                      <Select value={companySize} onValueChange={setCompanySize}>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Select employee count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">1-5 employees</SelectItem>
                          <SelectItem value="15">6-15 employees</SelectItem>
                          <SelectItem value="35">16-35 employees</SelectItem>
                          <SelectItem value="75">36-75 employees</SelectItem>
                          <SelectItem value="150">76-150 employees</SelectItem>
                          <SelectItem value="300">151-300 employees</SelectItem>
                          <SelectItem value="500">300+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-3 block">Industry</label>
                      <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.value} value={industry.value}>
                              {industry.icon} {industry.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {roiData.monthlySavings > 0 && (
                    <div className="space-y-6">
                      <Separator />
                      
                      <div className="glass-hero p-8 space-y-6">
                        <h3 className="text-2xl font-bold text-center text-gradient-advanced">Your AI Army Impact</h3>
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center glass-panel p-4 rounded-lg">
                            <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="text-3xl font-bold text-primary">{roiData.monthlyHours}</p>
                            <p className="text-sm text-muted-foreground">Hours Saved Monthly</p>
                          </div>
                          <div className="text-center glass-panel p-4 rounded-lg">
                            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                            <p className="text-3xl font-bold text-accent">{roiData.productivity}%</p>
                            <p className="text-sm text-muted-foreground">Productivity Increase</p>
                          </div>
                        </div>
                        
                        <div className="text-center space-y-4">
                          <div>
                            <p className="text-5xl font-bold text-gradient-advanced">${roiData.monthlySavings.toLocaleString()}</p>
                            <p className="text-lg text-muted-foreground">Monthly Savings</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-green-400">${roiData.annualSavings.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">Annual Savings</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>ROI Timeline</span>
                            <span className="text-green-400 font-semibold">30 days or less</span>
                          </div>
                          <Progress value={100} className="h-3" />
                          <p className="text-xs text-muted-foreground text-center">
                            Based on average customer results
                          </p>
                        </div>
                        
                        <Button onClick={handleFreeTrial} className="btn-primary w-full text-xl py-6">
                          Claim Your ${roiData.monthlySavings.toLocaleString()}/Month Savings
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="glass-hero p-6">
                <img 
                  src={roiImage} 
                  alt="Real-time ROI dashboard showing dramatic cost savings and efficiency improvements" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Floating ROI metrics */}
              <div className="absolute -top-4 -right-4 glass-panel p-4 animate-pulse-soft">
                <div className="text-center">
                  <BarChart3 className="h-6 w-6 text-green-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-green-400">340%</div>
                  <div className="text-xs text-muted-foreground">Avg ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Showcase - Enhanced */}
      <section id="agents" className="section-divider section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-gradient-advanced">Meet Your Elite AI Army</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              722+ battle-tested agents organized by specialty, ready to eliminate your biggest operational bottlenecks
            </p>
          </div>

          <Tabs defaultValue="Financial Operations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-panel mb-12">
              {Object.keys(agentCategories).map((category) => (
                <TabsTrigger key={category} value={category} className="text-lg py-3">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(agentCategories).map(([category, agents]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {agents.map((agent, index) => (
                    <Card key={index} className="glass-card hover-lift group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-4xl">{agent.icon}</div>
                          <Badge className={`${agent.color} bg-opacity-20 border-opacity-30`}>
                            {agent.accuracy} accuracy
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {agent.name}
                        </CardTitle>
                        <CardDescription className="text-base">{agent.task}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-3 py-1">
                            {agent.savings}
                          </Badge>
                          <Button size="sm" className="btn-ghost">
                            Deploy Agent
                          </Button>
                        </div>
                        <Progress value={parseFloat(agent.accuracy)} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Performance Rating
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center space-y-8">
            <div className="glass-hero p-8 max-w-4xl mx-auto">
              <img 
                src={agentsImage} 
                alt="Multiple AI agents collaborating on complex business processes" 
                className="mx-auto rounded-lg shadow-2xl mb-8 max-w-lg" 
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gradient-advanced">Ready to Deploy 722+ More Agents?</h3>
                <p className="text-xl text-muted-foreground">
                  From basic automation to advanced AI reasoning, we have agents for every business function
                </p>
                <Button size="lg" className="btn-primary text-xl px-12 py-6">
                  Explore Full Agent Catalog <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-gradient-advanced">Transforming Businesses Daily</h2>
            <div className="flex justify-center items-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-semibold ml-4">4.9/5 from 500+ verified reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-sm px-3 py-1">
                      {testimonial.savings}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {testimonial.industry}
                    </Badge>
                  </div>
                  <div className="glass-panel p-3 text-center">
                    <p className="text-lg font-bold text-accent">{testimonial.metric}</p>
                    <p className="text-sm text-muted-foreground">Key Result</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" className="btn-ghost text-lg px-8 py-4">
              Read All Success Stories <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing */}
      <section id="pricing" className="section-divider-reverse section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl font-bold text-gradient-advanced">Choose Your AI Army Size</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All plans include 14-day free trial, setup assistance, and our 30-day ROI guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="glass-card hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Starter</CardTitle>
                <CardDescription className="text-lg">Perfect for small teams</CardDescription>
                <div className="text-5xl font-bold text-primary mt-4">$299</div>
                <p className="text-muted-foreground text-lg">per month</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">5 active agents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">1,000 tasks/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Email support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Basic integrations</span>
                  </li>
                </ul>
                <Button className="w-full btn-ghost text-lg py-6">Start Free Trial</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Typical savings: $3,000-5,000/month
                </p>
              </CardContent>
            </Card>

            {/* Professional Plan - Featured */}
            <Card className="glass-card border-primary/50 scale-105 hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto bg-primary text-primary-foreground text-sm px-4 py-2 mb-4">
                  Most Popular
                </Badge>
                <CardTitle className="text-3xl">Professional</CardTitle>
                <CardDescription className="text-lg">For growing businesses</CardDescription>
                <div className="text-5xl font-bold text-primary mt-4">$599</div>
                <p className="text-muted-foreground text-lg">per month</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">25 active agents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">10,000 tasks/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Advanced integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Custom workflows</span>
                  </li>
                </ul>
                <Button className="w-full btn-primary text-lg py-6">Start Free Trial</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Typical savings: $8,000-15,000/month
                </p>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="glass-card hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Business</CardTitle>
                <CardDescription className="text-lg">Unlimited automation</CardDescription>
                <div className="text-5xl font-bold text-primary mt-4">$999</div>
                <p className="text-muted-foreground text-lg">per month</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Unlimited agents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Unlimited tasks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">24/7 phone support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Dedicated success manager</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-lg">Custom agent development</span>
                  </li>
                </ul>
                <Button className="w-full btn-ghost text-lg py-6">Start Free Trial</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Typical savings: $20,000-50,000/month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 space-y-6">
            <p className="text-xl text-muted-foreground">
              Need enterprise solutions? <Button variant="link" className="text-primary text-xl p-0">Contact our sales team</Button>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Free migration assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Revolutionary */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-6xl lg:text-8xl font-bold text-gradient-advanced leading-tight">
                Your Competitors Are Automating
              </h2>
              <div className="text-2xl lg:text-4xl text-muted-foreground space-y-4">
                <p>Your employees are drowning in repetitive tasks.</p>
                <p>Your profits are bleeding from inefficiency.</p>
                <p className="text-accent font-bold text-3xl lg:text-5xl">
                  Sentus fixes all of this in 5 minutes.
                </p>
              </div>
              <p className="text-3xl font-bold text-primary">
                What are you waiting for?
              </p>
            </div>
            
            <div className="glass-hero p-12 max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Input 
                    placeholder="Enter your work email to deploy AI army" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-muted/50 border-muted text-xl h-16 text-white placeholder:text-muted-foreground max-w-md"
                  />
                  <Button onClick={handleFreeTrial} size="lg" className="btn-primary text-2xl px-16 h-16 min-w-[250px]">
                    Unleash AI Army
                  </Button>
                </div>

                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>5-minute deployment</span>
                    </div>
                  </div>
                  <p className="text-xl">
                    Join <span className="text-primary font-bold">500+</span> businesses already saving 
                    <span className="text-accent font-bold"> $5,000+</span> monthly
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="glass-panel p-8 text-center">
                <Timer className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold">2.4M+</div>
                <div className="text-muted-foreground">Hours Automated Daily</div>
              </div>
              <div className="glass-panel p-8 text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold">$127M+</div>
                <div className="text-muted-foreground">Customer Savings</div>
              </div>
              <div className="glass-panel p-8 text-center">
                <Rocket className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold">99.7%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;