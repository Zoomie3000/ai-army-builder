import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { 
  Briefcase, Users, DollarSign, HeartHandshake, Building2, 
  ShoppingCart, FileText, Calculator, MessageCircle, Target,
  ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Zap,
  BarChart3, Settings, Globe, Layers, Bot, Cpu
} from "lucide-react";

const Solutions = () => {
  const [activeRole, setActiveRole] = useState("operations");

  const rolesSolutions = {
    operations: {
      title: "Operations Managers",
      subtitle: "Eliminate operational bottlenecks and scale efficiently",
      icon: Settings,
      color: "text-blue-400",
      challenges: [
        "Manual data entry consuming 20+ hours weekly",
        "Process inconsistencies across departments", 
        "Difficulty scaling operations with growth",
        "High operational costs and human errors"
      ],
      solutions: [
        { name: "Process Automation Suite", savings: "$15,000/month", tasks: "Document processing, data validation, workflow routing" },
        { name: "Quality Control Agents", savings: "$8,500/month", tasks: "Error detection, compliance monitoring, audit trails" },
        { name: "Inventory Management", savings: "$12,000/month", tasks: "Stock tracking, reorder automation, supplier communication" }
      ],
      caseStudy: {
        company: "Global Manufacturing Inc",
        result: "85% reduction in processing time",
        savings: "$200K annually",
        quote: "Sentus transformed our entire operations workflow in just 2 weeks"
      }
    },
    finance: {
      title: "Finance Teams",
      subtitle: "Automate financial processes with 99.7% accuracy",
      icon: Calculator,
      color: "text-green-400", 
      challenges: [
        "Invoice processing taking days instead of minutes",
        "Month-end close requiring overtime and stress",
        "Expense report management consuming resources",
        "Reconciliation errors and compliance risks"
      ],
      solutions: [
        { name: "Invoice Processing Engine", savings: "$25,000/month", tasks: "AP/AR automation, data extraction, approval routing" },
        { name: "Financial Reporting Suite", savings: "$18,000/month", tasks: "Report generation, KPI tracking, variance analysis" },
        { name: "Expense Management", savings: "$10,000/month", tasks: "Receipt processing, policy compliance, reimbursements" }
      ],
      caseStudy: {
        company: "TechCorp Solutions",
        result: "300% faster invoice processing",
        savings: "$300K annually",
        quote: "Month-end close went from 5 days to 5 hours with Sentus agents"
      }
    },
    sales: {
      title: "Sales Leaders",
      subtitle: "Accelerate pipeline velocity and close more deals",
      icon: Target,
      color: "text-purple-400",
      challenges: [
        "Lead qualification eating into selling time",
        "Manual CRM updates and data entry",
        "Inconsistent follow-up processes",
        "Lack of real-time sales insights"
      ],
      solutions: [
        { name: "Lead Intelligence Engine", savings: "$30,000/month", tasks: "Lead scoring, qualification, nurturing sequences" },
        { name: "CRM Automation Suite", savings: "$20,000/month", tasks: "Data updates, activity logging, pipeline management" },
        { name: "Sales Analytics Hub", savings: "$15,000/month", tasks: "Performance tracking, forecasting, territory analysis" }
      ],
      caseStudy: {
        company: "SalesForce Pro",
        result: "50% increase in qualified leads",
        savings: "$450K annually",
        quote: "Our sales team now focuses purely on closing deals, not data entry"
      }
    },
    support: {
      title: "Customer Success",
      subtitle: "Deliver exceptional support at scale",
      icon: HeartHandshake,
      color: "text-cyan-400",
      challenges: [
        "High ticket volume overwhelming support staff",
        "Inconsistent response times and quality",
        "Escalation management complexity",
        "Customer satisfaction declining with growth"
      ],
      solutions: [
        { name: "Support Automation Engine", savings: "$35,000/month", tasks: "Ticket triage, response generation, knowledge base queries" },
        { name: "Customer Intelligence", savings: "$22,000/month", tasks: "Sentiment analysis, escalation prediction, satisfaction tracking" },
        { name: "Multi-Channel Coordination", savings: "$18,000/month", tasks: "Email, chat, phone integration, unified customer view" }
      ],
      caseStudy: {
        company: "ServiceMax Inc",
        result: "80% first-contact resolution",
        savings: "$400K annually", 
        quote: "Customer satisfaction increased 40% while reducing support costs"
      }
    }
  };

  const industrySolutions = [
    {
      industry: "E-commerce & Retail",
      icon: ShoppingCart,
      color: "text-orange-400",
      description: "Automate order processing, inventory management, and customer service",
      keyMetrics: ["90% faster order processing", "99.5% inventory accuracy", "60% support cost reduction"],
      topAgents: ["Order Fulfillment", "Inventory Sync", "Customer Service", "Returns Processing"]
    },
    {
      industry: "Healthcare",
      icon: HeartHandshake,
      color: "text-red-400", 
      description: "Streamline patient workflows, billing, and administrative tasks",
      keyMetrics: ["HIPAA compliant operations", "50% admin time savings", "99.8% billing accuracy"],
      topAgents: ["Patient Scheduling", "Insurance Processing", "Medical Records", "Billing Automation"]
    },
    {
      industry: "Financial Services",
      icon: DollarSign,
      color: "text-green-400",
      description: "Enhance compliance, risk management, and customer onboarding",
      keyMetrics: ["100% compliance monitoring", "70% faster onboarding", "95% fraud detection rate"],
      topAgents: ["KYC Processing", "Fraud Detection", "Regulatory Reporting", "Risk Assessment"]
    },
    {
      industry: "Manufacturing",
      icon: Building2,
      color: "text-blue-400",
      description: "Optimize supply chain, quality control, and production planning",
      keyMetrics: ["30% supply chain efficiency", "99.9% quality accuracy", "25% cost reduction"],
      topAgents: ["Supply Chain", "Quality Control", "Production Planning", "Maintenance Scheduling"]
    },
    {
      industry: "Legal Services",
      icon: FileText,
      color: "text-purple-400",
      description: "Accelerate document review, case management, and research",
      keyMetrics: ["80% faster document review", "95% research accuracy", "60% case prep reduction"],
      topAgents: ["Document Analysis", "Legal Research", "Case Management", "Contract Review"]
    },
    {
      industry: "Technology",
      icon: Cpu,
      color: "text-cyan-400",
      description: "Scale development operations, customer onboarding, and support",
      keyMetrics: ["70% deployment efficiency", "90% onboarding automation", "50% support deflection"],
      topAgents: ["DevOps Automation", "Customer Onboarding", "Technical Support", "Code Quality"]
    }
  ];

  const currentRole = rolesSolutions[activeRole as keyof typeof rolesSolutions];

  return (
    <div className="min-h-screen">
      <SEO
        title="AI Solutions by Role & Industry | Sentus AI"
        description="Discover how Sentus AI automates finance, operations, sales, and support with measurable ROI. Industry-specific solutions and 722+ elite agents."
        canonical="https://sentus.ai/solutions"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              Tailored Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-advanced">Solutions Built for</span>
              <br />
              <span className="text-foreground">Your Industry</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how 722+ specialized AI agents solve the unique challenges of your role and industry, 
              delivering measurable ROI from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Role-Based Solutions */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Solutions by Role</h2>
            <p className="text-xl text-muted-foreground">
              Specialized automation for every business function
            </p>
          </div>

          <Tabs value={activeRole} onValueChange={setActiveRole} className="space-y-12">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass-panel p-2">
              {Object.entries(rolesSolutions).map(([key, role]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-sm font-medium"
                >
                  <role.icon className="w-4 h-4 mr-2" />
                  {role.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeRole} className="space-y-12">
              {/* Role Overview */}
              <div className="glass-hero p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-primary/10 ${currentRole.color}`}>
                        <currentRole.icon className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">{currentRole.title}</h3>
                        <p className="text-lg text-muted-foreground">{currentRole.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Common Challenges:</h4>
                      {currentRole.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Sentus Solutions:</h4>
                    {currentRole.solutions.map((solution, index) => (
                      <Card key={index} className="glass-card">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{solution.name}</CardTitle>
                            <Badge className="bg-green-500/20 text-green-400">
                              {solution.savings}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{solution.tasks}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="glass-panel p-8">
                <div className="text-center space-y-6">
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    Success Story
                  </Badge>
                  <blockquote className="text-2xl font-medium italic">
                    "{currentRole.caseStudy.quote}"
                  </blockquote>
                  <div className="flex justify-center items-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{currentRole.caseStudy.result}</div>
                      <div className="text-sm text-muted-foreground">Performance Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{currentRole.caseStudy.savings}</div>
                      <div className="text-sm text-muted-foreground">Cost Savings</div>
                    </div>
                  </div>
                  <cite className="text-muted-foreground">— {currentRole.caseStudy.company}</cite>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-4xl font-bold">What Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real results from real teams using Sentus AI</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Deep domain knowledge across major industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-primary/10 ${industry.color}`}>
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{industry.industry}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Metrics</h4>
                    <div className="space-y-2">
                      {industry.keyMetrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Top Agents</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.topAgents.map((agent, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {agent}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              From discovery to deployment in 30 days or less
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { 
                step: "Week 1", 
                title: "Discovery & Assessment", 
                description: "Analyze current workflows and identify automation opportunities",
                icon: BarChart3,
                color: "text-blue-400"
              },
              { 
                step: "Week 2", 
                title: "Agent Selection & Setup", 
                description: "Configure optimal agent mix and establish secure connections",
                icon: Bot,
                color: "text-purple-400"
              },
              { 
                step: "Week 3", 
                title: "Training & Testing", 
                description: "Agent learning phase with comprehensive testing and validation",
                icon: Layers,
                color: "text-green-400"
              },
              { 
                step: "Week 4", 
                title: "Go-Live & Optimization", 
                description: "Full deployment with ongoing monitoring and performance tuning",
                icon: Zap,
                color: "text-yellow-400"
              }
            ].map((phase, index) => (
              <Card key={index} className="glass-card text-center">
                <CardHeader className="space-y-4">
                  <div className={`mx-auto p-4 rounded-2xl bg-gradient-primary/10 ${phase.color} w-fit`}>
                    <phase.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <Badge className="mb-2">{phase.step}</Badge>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6">
          <div className="glass-hero p-12 text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 500+ businesses already saving thousands monthly with Sentus.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;