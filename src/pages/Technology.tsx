import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { 
  Shield, Lock, Eye, Monitor, Cpu, Database, Cloud, 
  CheckCircle, ArrowRight, Globe, Layers, Zap, Brain,
  Code, Workflow, Settings, BarChart3, FileText, Users
} from "lucide-react";

const Technology = () => {
  const architectureFeatures = [
    {
      icon: Monitor,
      title: "Visual Recognition Engine",
      description: "Advanced computer vision that sees your screen like a human, enabling automation without APIs",
      benefits: ["Works with any software", "No integration required", "Legacy system compatible"],
      color: "text-blue-400"
    },
    {
      icon: Brain,
      title: "TITAN-Class AI Agents",
      description: "Metacognitive agents that learn, adapt, and evolve based on your business patterns",
      benefits: ["Self-improving performance", "Context-aware decisions", "Predictive automation"],
      color: "text-purple-400"
    },
    {
      icon: Layers,
      title: "Universal Compatibility Layer",
      description: "Proprietary technology that translates between any software interface seamlessly",
      benefits: ["1000+ software integrations", "Cross-platform support", "Version-agnostic"],
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Lightning-fast execution with sub-second response times for critical operations",
      benefits: ["99.9% uptime guarantee", "Instant task execution", "Parallel processing"],
      color: "text-yellow-400"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "SOC2 Type II Certified",
      description: "Rigorous third-party security audits ensure enterprise-grade protection",
      status: "Verified"
    },
    {
      icon: Lock,
      title: "256-bit AES Encryption",
      description: "Military-grade encryption for all data at rest and in transit",
      status: "Active"
    },
    {
      icon: Eye,
      title: "Read-Only Access",
      description: "Agents observe and interact but never store sensitive data locally",
      status: "By Design"
    },
    {
      icon: Database,
      title: "Zero-Knowledge Architecture",
      description: "Your data remains within your infrastructure at all times",
      status: "Guaranteed"
    },
    {
      icon: Globe,
      title: "GDPR & HIPAA Compliant",
      description: "Full compliance with international data protection regulations",
      status: "Certified"
    },
    {
      icon: Cloud,
      title: "Air-Gapped Deployment",
      description: "Enterprise option for completely isolated environments",
      status: "Available"
    }
  ];

  const performanceMetrics = [
    { metric: "99.7%", label: "Accuracy Rate", description: "Consistent performance across all tasks" },
    { metric: "5 min", label: "Deployment Time", description: "From signup to first automation" },
    { metric: "500ms", label: "Response Time", description: "Average task execution speed" },
    { metric: "99.9%", label: "Uptime SLA", description: "Enterprise-grade reliability" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              Advanced AI Technology
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-advanced">The Engine Behind</span>
              <br />
              <span className="text-foreground">722+ AI Agents</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how Sentus.ai's revolutionary screen-aware technology and TITAN-class agents 
              deliver enterprise-grade automation without the complexity of traditional RPA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                See Live Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost">
                Download Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Revolutionary Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up to solve the fundamental limitations of traditional automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {architectureFeatures.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl bg-gradient-primary/10 ${feature.color}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6">
          <div className="glass-panel p-12">
            <h3 className="text-3xl font-bold text-center mb-12">Performance at Scale</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {performanceMetrics.map((item, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">{item.metric}</div>
                  <div className="text-lg font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="flowing-section section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Enterprise-Grade Security</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with security-first principles to meet the strictest enterprise requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="glass-card">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto p-4 rounded-2xl bg-gradient-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    {feature.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 glass-panel p-6 rounded-2xl">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <Shield className="w-4 h-4 mr-2" />
                Penetration Tested Quarterly
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Globe className="w-4 h-4 mr-2" />
                ISO 27001 Certified
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                <Users className="w-4 h-4 mr-2" />
                Role-Based Access Control
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Diagram */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple deployment, powerful results
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect", description: "Secure connection to your systems", icon: Workflow },
              { step: "02", title: "Deploy", description: "Select and activate AI agents", icon: Settings },
              { step: "03", title: "Observe", description: "Agents learn your workflows", icon: Eye },
              { step: "04", title: "Automate", description: "Seamless task execution", icon: Zap }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 absolute -bottom-2 -right-2 bg-accent text-background rounded-full p-1" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6">
          <div className="glass-hero p-12 text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Experience the Technology?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our revolutionary architecture can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Book Technical Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost">
                Talk to Engineering Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;