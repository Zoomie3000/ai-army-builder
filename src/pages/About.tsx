import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, Users, Zap, Shield, Heart, Globe, 
  Award, ArrowRight, CheckCircle, Sparkles 
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI Research Director at Google. PhD in Machine Learning from Stanford. 15+ years building intelligent systems.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Principal Engineer at Microsoft. Led automation teams at Fortune 500 companies. Expert in enterprise integration.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief AI Officer",
      bio: "Former research scientist at OpenAI. PhD in Computer Science from MIT. Pioneer in autonomous agent development.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former engineering lead at Uber. 12+ years scaling distributed systems. Expert in reliability and performance.",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Human-First",
      description: "We believe AI should augment human potential, not replace it. Every agent we build is designed to free people for more meaningful work."
    },
    {
      icon: Zap,
      title: "Radical Efficiency",
      description: "We're obsessed with eliminating waste. Every process, every click, every second matters in creating truly effortless automation."
    },
    {
      icon: Shield,
      title: "Unwavering Trust",
      description: "Security and privacy aren't features—they're foundations. We protect your data as if it were our own family's."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building technology that empowers businesses worldwide to focus on innovation instead of repetitive tasks."
    }
  ];

  const milestones = [
    { year: "2022", event: "Founded with $5M seed funding", description: "Started with a vision to democratize AI automation" },
    { year: "2023", event: "100+ enterprise customers", description: "Achieved product-market fit with Fortune 500 companies" },
    { year: "2024", event: "722+ AI agents deployed", description: "Reached massive scale across all major business functions" },
    { year: "2025", event: "Global expansion", description: "Serving businesses in 50+ countries worldwide" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-gradient-advanced">Empowering Businesses</span>
              <br />
              <span className="text-foreground">Through Intelligent Automation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to free every business from repetitive work, 
              enabling teams to focus on innovation, creativity, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="glass-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-heading">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize intelligent automation, making it accessible for businesses of all sizes. 
                  We believe every team deserves to work on what matters most—strategy, creativity, and innovation—
                  while AI handles the repetitive tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-heading">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where intelligent AI agents handle routine business processes seamlessly, 
                  freeing humanity to pursue innovation, creativity, and meaningful connections. 
                  By 2030, we envision every business operating with AI-augmented efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-heading font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="glass-card text-center">
                <CardHeader className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-heading font-bold">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">
              World-class experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="glass-card text-center hover-lift">
                <CardHeader className="space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-gradient-primary overflow-hidden">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-heading">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-heading font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in building the future of work
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="glass-card flex-1 p-6">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-accent/20 text-accent border-accent/30">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-lg font-semibold">{milestone.event}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="glass-hero p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient-advanced">722+</div>
                <div className="text-sm text-muted-foreground">AI Agents Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient-advanced">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient-advanced">50M+</div>
                <div className="text-sm text-muted-foreground">Tasks Automated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient-advanced">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="glass-hero p-12 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with intelligent automation? 
              Let's build the future of work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;