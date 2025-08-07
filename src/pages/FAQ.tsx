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

// Types
interface FAQCategory {
  id:
    | "general"
    | "security"
    | "pricing"
    | "implementation"
    | "technical"
    | "enterprise"
    | "performance"
    | "industries"
    | "ai_basics"
    | "differentiation"
    | "future"
    | "ethics"
    | "integration"
    | "scaling"
    | "support";
  name: string;
  icon: any;
}

interface FAQItem {
  category: FAQCategory["id"];
  question: string;
  answer: string;
}

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

const faqData: FAQItem[] = [
  // General (12)
  {
    category: "general",
    question: "What is Sentus.ai and how does it work?",
    answer:
      "Sentus.ai is a Universal Digital Workforce OS that deploys 49+ specialized AI agents to automate any software workflow. Our agents use advanced computer vision and AI to interact with applications just like humans do, but faster and without errors. They can handle everything from data entry to complex business processes across any industry. At its core, Sentus.ai combines metacognitive AI with feedback loops to create self-improving agents that adapt to your business needs, prioritizing high-value tasks while de-prioritizing noise, all while maintaining human oversight for critical decisions.",
  },
  {
    category: "general",
    question: "How is Sentus.ai different from other automation tools?",
    answer:
      "Unlike traditional RPA tools that require extensive coding and break when UI changes, our AI agents are intelligent and adaptive. They can work with ANY software, learn from your specific workflows, and continue working even when applications update. Plus, our setup takes under 5 minutes versus weeks for traditional solutions. What sets us apart is our Titan-class agents with built-in metacognition, factorization, and feedback loops, allowing for true agentic intelligence that evolves with your business, rather than static scripts that quickly become obsolete in the fast-paced AI landscape.",
  },
  {
    category: "general",
    question: "What types of businesses benefit most from Sentus.ai?",
    answer:
      "We serve SMBs (50-500 employees) and mid-market companies (500-5000 employees) across 12+ industries. Any business with repetitive computer tasks, high labor costs, or scaling challenges will see immediate benefits. Our clients typically achieve 40-70% cost savings within 3 weeks. From startups looking to punch above their weight to enterprises optimizing global operations, Sentus.ai scales seamlessly, with particular success in knowledge-work heavy sectors where information prioritization is key to competitive advantage.",
  },
  {
    category: "general",
    question: "Do I need technical expertise to use Sentus.ai?",
    answer:
      "Not at all! Sentus.ai is designed for business users. Our no-code interface allows anyone to set up and manage AI agents. We provide comprehensive training, 24/7 support, and our agents learn your processes automatically. Most users are fully productive within hours, not weeks. Our intuitive wizard-based setup and natural language configuration make it accessible to non-technical staff, while advanced users can dive into customization options for fine-tuned control.",
  },
  {
    category: "general",
    question: "How does Sentus.ai handle complex business processes?",
    answer:
      "Our agents use advanced AI to break down complex processes into manageable components, with built-in decision-making trees and escalation protocols. For example, in financial services, an agent can handle end-to-end invoice processing including validation, approval routing, and compliance checks, all while learning from past interactions to improve accuracy over time. We support multi-step workflows across multiple applications, with seamless handoffs between agents for orchestrated intelligence.",
  },
  {
    category: "general",
    question: "What is the \"Enhance First, Automate Later\" philosophy?",
    answer:
      "This core principle means we start by augmenting your human team with AI assistance—providing suggestions, insights, and partial automation—before transitioning to full autonomy. This reduces resistance, ensures smooth adoption, and maximizes ROI by focusing on high-impact areas first. It's our way of making AI a collaborative partner rather than a disruptive force, leading to 95%+ adoption rates among our clients.",
  },
  {
    category: "general",
    question: "How many AI agents does Sentus.ai offer?",
    answer:
      "We currently offer 720+ specialized AI agents, with new ones added weekly based on customer feedback and industry trends. These range from basic task automators to advanced titan-class agents with metacognition capabilities. Our library covers over 50 business functions, and enterprise customers can commission custom agents tailored to their unique needs.",
  },
  {
    category: "general",
    question: "Can Sentus.ai help with digital transformation initiatives?",
    answer:
      "Absolutely. Sentus.ai serves as the backbone for digital transformation by automating legacy processes, integrating disparate systems, and providing AI-driven insights for strategic decision-making. We've helped companies accelerate their transformation timelines from years to months, with measurable improvements in efficiency, customer satisfaction, and revenue growth.",
  },
  {
    category: "general",
    question: "What is agentic AI and how does Sentus.ai implement it?",
    answer:
      "Agentic AI refers to autonomous systems that can perceive their environment, make decisions, and take actions to achieve goals. Sentus.ai implements this through our titan-class agents with feedback loops, metacognition (self-awareness of their own processes), and factorization (breaking down complex problems). This allows our agents to handle dynamic business scenarios, learn from interactions, and self-optimize without constant human intervention.",
  },
  {
    category: "general",
    question: "How does Sentus.ai prioritize information for businesses?",
    answer:
      "Using advanced AI algorithms, our agents analyze data streams in real-time to prioritize critical information while de-prioritizing noise. For example, in email management, agents can flag high-priority messages based on content, sender importance, and business context, while automating responses to routine inquiries. This helps businesses focus on what truly matters, reducing information overload by up to 80%.",
  },
  {
    category: "general",
    question: "Is Sentus.ai suitable for remote or hybrid work environments?",
    answer:
      "Yes, Sentus.ai is perfectly suited for distributed teams. Our cloud-based agents can access and automate workflows from anywhere, with secure remote access controls. Features like real-time collaboration between human and AI team members enhance productivity in hybrid setups, and our performance tracking helps managers monitor efficiency across locations.",
  },
  {
    category: "general",
    question: "How does Sentus.ai evolve with technological advancements?",
    answer:
      "We maintain a dedicated R&D team that continuously integrates the latest AI advancements, including new language models, computer vision improvements, and agent architectures. Our platform receives quarterly major updates and weekly enhancements, ensuring your AI workforce stays at the cutting edge. Customers get free access to all updates as part of their subscription.",
  },

  // Security & Compliance (12)
  {
    category: "security",
    question: "Is Sentus.ai secure enough for enterprise use?",
    answer:
      "Absolutely. We're SOC 2 Type II certified with 256-bit AES encryption, multi-factor authentication, and role-based access control. Our platform meets GDPR, HIPAA, and other regulatory requirements. All data is encrypted in transit and at rest, and we maintain comprehensive audit logs. For enterprise clients, we offer advanced threat detection using AI to proactively identify and mitigate risks.",
  },
  {
    category: "security",
    question: "How do you handle sensitive data and compliance requirements?",
    answer:
      "Data security is our top priority. We offer on-premise deployment options, air-gapped environments, and industry-specific compliance packages. For healthcare, we're HIPAA-ready. For finance, we meet PCI DSS standards. All agents operate within your security policies and never store sensitive data unnecessarily. We also provide data minimization features and automatic redaction for PII.",
  },
  {
    category: "security",
    question: "What certifications and compliance standards do you meet?",
    answer:
      "We maintain SOC 2 Type II, ISO 27001, GDPR compliance, and HIPAA readiness. Our platform supports PCI DSS for payment processing, FERPA for educational institutions, and various industry-specific regulations. We undergo regular third-party security audits and maintain a 99.9% uptime SLA. Additional certifications include CSA STAR and FedRAMP in progress for government clients.",
  },
  {
    category: "security",
    question: "Can we deploy Sentus.ai on-premise or in our private cloud?",
    answer:
      "Yes! We offer flexible deployment options including on-premise, private cloud, hybrid, and our secure SaaS environment. Enterprise customers can choose the deployment model that best fits their security requirements and compliance needs. Our on-premise solution includes containerized agents for easy scaling and management within your infrastructure.",
  },
  {
    category: "security",
    question: "How does Sentus.ai prevent AI hallucinations and errors?",
    answer:
      "Our titan-class agents incorporate multiple safeguards including metacognitive self-checking, feedback loops for continuous validation, and human-in-the-loop escalation for critical decisions. We use factorization to break down complex tasks into verifiable steps, and all outputs are double-checked against predefined rules and historical data. This results in 99.7% accuracy across deployments.",
  },
  {
    category: "security",
    question: "What measures are in place for data privacy?",
    answer:
      "We adhere to strict data privacy principles with features like automatic data anonymization, consent management, and granular access controls. Our privacy-by-design approach ensures that agents only access necessary data, and all processing can be configured to comply with regional regulations like CCPA or LGPD. We never use customer data for training without explicit permission.",
  },
  {
    category: "security",
    question: "How do you handle security incidents and breaches?",
    answer:
      "We have a robust incident response plan with 24/7 monitoring and rapid response teams. In case of any issue, we follow a structured protocol including immediate containment, root cause analysis, and transparent communication with affected clients. Our enterprise SLAs include guaranteed response times, and we provide detailed post-incident reports with preventive measures.",
  },
  {
    category: "security",
    question: "Is Sentus.ai vulnerable to AI-specific threats like prompt injection?",
    answer:
      "No, our agents are protected against common AI vulnerabilities through input sanitization, context isolation, and adversarial training. We use advanced guardrails and monitoring to detect anomalous behavior, and regular security updates address emerging threats in the AI landscape. Independent penetration testing confirms our resilience.",
  },
  {
    category: "security",
    question: "How does Sentus.ai ensure ethical AI usage?",
    answer:
      "We follow strict ethical guidelines including bias detection in agent training, transparent decision-making processes, and options for human oversight. Our platform includes ethics audits for custom agents, and we provide tools for monitoring AI decisions to ensure fairness and accountability. We're committed to responsible AI that augments rather than replaces human capabilities.",
  },
  {
    category: "security",
    question: "What backup and disaster recovery options are available?",
    answer:
      "We offer automated backups with configurable retention periods, geo-redundant storage, and quick restore capabilities. Enterprise clients can set up custom disaster recovery plans with RPO/RTO as low as 15 minutes. Our platform includes failover clustering for high availability, ensuring business continuity even in worst-case scenarios.",
  },
  {
    category: "security",
    question: "How do you protect against unauthorized access?",
    answer:
      "We employ multi-layer security including biometric MFA options, IP whitelisting, device management, and behavioral analytics to detect unusual access patterns. Role-based access control (RBAC) ensures users only see what they need, and all sessions are encrypted with end-to-end protection.",
  },
  {
    category: "security",
    question: "Can Sentus.ai handle classified or sensitive government data?",
    answer:
      "For government clients, we offer FedRAMP-compliant deployments with enhanced security features like FIPS 140-2 validated cryptography and CMMC compliance. Our platform has been used in sensitive environments with strict data sovereignty requirements, including on-premise air-gapped installations.",
  },
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
