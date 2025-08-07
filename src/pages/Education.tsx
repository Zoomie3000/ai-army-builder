import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import {
  PlayCircle, Clock, Users, Award, BookOpen, Target, Zap, Star,
  CheckCircle, ArrowRight, Brain, Cpu, Shield, TrendingUp, Globe,
  Download, Calendar, Video, FileText, Headphones
} from "lucide-react";

const Education = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  const courseTracks = {
    "beginner": {
      title: "AI Agent Fundamentals",
      description: "Perfect for business leaders and teams new to AI automation",
      courses: [
        {
          title: "Introduction to AI Agents",
          description: "Understanding what AI agents are and how they transform business operations",
          duration: "2 hours",
          lessons: 8,
          enrolled: "12,847",
          rating: 4.9,
          level: "Beginner",
          price: "Free",
          instructor: "Dr. Sarah Chen",
          topics: ["AI Basics", "Agent Types", "Business Impact", "ROI Fundamentals"],
          certificate: true,
          format: ["Video", "Interactive", "Quizzes"]
        },
        {
          title: "Deploying Your First Agent",
          description: "Hands-on guide to setting up and deploying AI agents in your business",
          duration: "3 hours",
          lessons: 12,
          enrolled: "8,934",
          rating: 4.8,
          level: "Beginner",
          price: "Free",
          instructor: "Marcus Rodriguez",
          topics: ["Setup Process", "Configuration", "Testing", "Go-Live"],
          certificate: true,
          format: ["Video", "Hands-on", "Templates"]
        },
        {
          title: "Measuring AI Agent Success",
          description: "Learn to track, measure, and optimize your AI agent performance",
          duration: "2.5 hours",
          lessons: 10,
          enrolled: "6,723",
          rating: 4.7,
          level: "Beginner",
          price: "$49",
          instructor: "Emma Thompson",
          topics: ["KPIs", "Analytics", "Optimization", "Reporting"],
          certificate: true,
          format: ["Video", "Case Studies", "Tools"]
        }
      ]
    },
    "intermediate": {
      title: "Advanced Agent Orchestration",
      description: "For teams ready to scale AI automation across their organization",
      courses: [
        {
          title: "Multi-Agent Coordination",
          description: "Master the art of orchestrating multiple agents for complex workflows",
          duration: "4 hours",
          lessons: 16,
          enrolled: "4,562",
          rating: 4.9,
          level: "Intermediate",
          price: "$99",
          instructor: "Dr. James Liu",
          topics: ["Agent Communication", "Workflow Design", "Error Handling", "Scalability"],
          certificate: true,
          format: ["Video", "Labs", "Projects"]
        },
        {
          title: "Custom Agent Development",
          description: "Build specialized agents tailored to your unique business needs",
          duration: "6 hours",
          lessons: 20,
          enrolled: "3,421",
          rating: 4.8,
          level: "Intermediate",
          price: "$149",
          instructor: "Alex Morgan",
          topics: ["Agent Architecture", "Custom Logic", "Integration", "Testing"],
          certificate: true,
          format: ["Video", "Code Labs", "Mentoring"]
        },
        {
          title: "Enterprise Security for AI Agents",
          description: "Implement enterprise-grade security for your AI agent deployments",
          duration: "3.5 hours",
          lessons: 14,
          enrolled: "2,156",
          rating: 4.9,
          level: "Intermediate",
          price: "$129",
          instructor: "Robert Kim",
          topics: ["Security Framework", "Compliance", "Risk Management", "Monitoring"],
          certificate: true,
          format: ["Video", "Assessments", "Frameworks"]
        }
      ]
    },
    "expert": {
      title: "AI Strategy & Leadership",
      description: "Executive-level training for AI transformation leaders",
      courses: [
        {
          title: "AI Transformation Strategy",
          description: "Develop and execute comprehensive AI strategies for organizational transformation",
          duration: "5 hours",
          lessons: 18,
          enrolled: "1,923",
          rating: 5.0,
          level: "Expert",
          price: "$299",
          instructor: "Dr. Sarah Chen",
          topics: ["Strategic Planning", "Change Management", "ROI Modeling", "Leadership"],
          certificate: true,
          format: ["Masterclass", "Case Studies", "1:1 Sessions"]
        },
        {
          title: "Building AI-First Organizations",
          description: "Transform your company culture and operations for the AI age",
          duration: "4.5 hours",
          lessons: 15,
          enrolled: "1,234",
          rating: 4.9,
          level: "Expert",
          price: "$399",
          instructor: "Lisa Chang",
          topics: ["Organizational Design", "Culture Shift", "Talent Strategy", "Governance"],
          certificate: true,
          format: ["Executive Sessions", "Workshops", "Peer Groups"]
        }
      ]
    }
  };

  const certifications = [
    {
      title: "Certified AI Agent Specialist",
      description: "Demonstrate your expertise in deploying and managing AI agents",
      duration: "40 hours",
      level: "Professional",
      price: "$299",
      badge: "CAAS",
      requirements: ["Complete 5 core courses", "Pass final exam", "Real-world project"],
      benefits: ["Industry recognition", "LinkedIn badge", "Career advancement", "Exclusive community"]
    },
    {
      title: "AI Automation Architect",
      description: "Master-level certification for designing enterprise AI solutions",
      duration: "80 hours",
      level: "Expert",
      price: "$599",
      badge: "AAA",
      requirements: ["CAAS certification", "Portfolio project", "Peer review", "Presentation"],
      benefits: ["Executive recognition", "Speaking opportunities", "Partner network access", "Revenue sharing"]
    }
  ];

  const resources = [
    {
      title: "AI Agent Deployment Checklist",
      type: "Template",
      description: "Step-by-step checklist for successful agent deployments",
      downloads: "15,234",
      format: "PDF"
    },
    {
      title: "ROI Calculator Toolkit",
      type: "Tool",
      description: "Calculate and present the business impact of AI automation",
      downloads: "12,847",
      format: "Excel"
    },
    {
      title: "Agent Security Framework",
      type: "Guide",
      description: "Comprehensive security guidelines for enterprise deployments",
      downloads: "8,923",
      format: "PDF"
    },
    {
      title: "Change Management Playbook",
      type: "Playbook",
      description: "Guide your team through AI transformation",
      downloads: "7,456",
      format: "PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              AI Agent University
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-advanced mb-6">
              Master the Future of Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI fundamentals to enterprise transformation strategies. 
              Learn from industry experts and get certified in AI agent deployment and management.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Courses</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tracks */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Learning Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed for every skill level and role
            </p>
          </div>

          <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 glass-morphism">
              <TabsTrigger value="beginner" className="data-[state=active]:bg-primary/20">
                Beginner
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="data-[state=active]:bg-primary/20">
                Intermediate
              </TabsTrigger>
              <TabsTrigger value="expert" className="data-[state=active]:bg-primary/20">
                Expert
              </TabsTrigger>
            </TabsList>

            {Object.entries(courseTracks).map(([level, track]) => (
              <TabsContent key={level} value={level}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{track.title}</h3>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {track.courses.map((course, index) => (
                    <Card key={index} className="glass-card hover-lift cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <Badge className={`${course.price === 'Free' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>
                            {course.price}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {course.rating}
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.duration}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {course.lessons} lessons
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Users className="w-4 h-4 mr-1" />
                              {course.enrolled} enrolled
                            </div>
                            {course.certificate && (
                              <div className="flex items-center text-success">
                                <Award className="w-4 h-4 mr-1" />
                                Certificate
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground">What you'll learn:</p>
                            <div className="flex flex-wrap gap-1">
                              {course.topics.map((topic, topicIndex) => (
                                <Badge key={topicIndex} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium text-foreground">Format:</p>
                            <div className="flex space-x-2">
                              {course.format.map((format, formatIndex) => (
                                <div key={formatIndex} className="flex items-center text-xs text-muted-foreground">
                                  {format === "Video" && <Video className="w-3 h-3 mr-1" />}
                                  {format === "Interactive" && <Target className="w-3 h-3 mr-1" />}
                                  {format === "Hands-on" && <Zap className="w-3 h-3 mr-1" />}
                                  {format === "Masterclass" && <Brain className="w-3 h-3 mr-1" />}
                                  {format}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border/20">
                            <p className="text-sm text-muted-foreground mb-3">
                              Instructor: <span className="text-foreground font-medium">{course.instructor}</span>
                            </p>
                            <Button className="w-full btn-primary">
                              {course.price === 'Free' ? 'Start Learning' : 'Enroll Now'}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validate your expertise with industry-recognized certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-hero p-8 hover-lift cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.level} Level</p>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground font-bold">
                    {cert.badge}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium text-foreground">{cert.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Investment</p>
                    <p className="font-medium text-success">{cert.price}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-foreground mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      {cert.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-foreground mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {cert.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-accent mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full btn-primary">
                  Start Certification Path
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Free Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Downloadable templates, tools, and guides to accelerate your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="glass-card hover-lift cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {resource.format === "PDF" && <FileText className="w-5 h-5 text-primary" />}
                      {resource.format === "Excel" && <TrendingUp className="w-5 h-5 text-primary" />}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads} downloads
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {resource.format}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full btn-ghost">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-hero max-w-4xl mx-auto p-12">
            <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-advanced mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have mastered AI automation. 
              Start with our free courses and advance to professional certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Start Free Course
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost">
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;