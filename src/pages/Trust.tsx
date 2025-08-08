import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Shield, Lock, Database, Server, Globe, FileCheck, Clock, AlertTriangle, ShieldCheck } from "lucide-react";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export default function Trust() {
  const canonical = `${origin}/trust`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO
        title="Sentus AI Trust Center"
        description="Security, privacy, and reliability at enterprise scale. Learn how Sentus protects your data with SOC 2, encryption, access controls, and global compliance."
        canonical={canonical}
        type="website"
      />
      <StructuredData
        type="WebPage"
        data={{
          name: "Trust Center",
          url: canonical,
          about: ["Security", "Privacy", "Compliance", "Reliability"],
        }}
      />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Company</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-advanced mb-4">Trust Center</h1>
            <p className="text-lg text-muted-foreground">
              We build secure, compliant, and reliable AI systems. This page summarizes our controls, certifications,
              and commitments so your team can adopt AI with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card"><CardHeader><div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2"><Shield className="w-5 h-5 text-primary-foreground"/></div><CardTitle>Security</CardTitle></CardHeader><CardContent><ul className="list-disc pl-4 text-muted-foreground space-y-1"><li>SOC 2-aligned controls</li><li>SSO, MFA, RBAC</li><li>Network isolation</li></ul></CardContent></Card>
            <Card className="glass-card"><CardHeader><div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2"><Lock className="w-5 h-5 text-primary-foreground"/></div><CardTitle>Privacy</CardTitle></CardHeader><CardContent><ul className="list-disc pl-4 text-muted-foreground space-y-1"><li>Data minimization</li><li>No training on your data</li><li>DPA & data residency</li></ul></CardContent></Card>
            <Card className="glass-card"><CardHeader><div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2"><Server className="w-5 h-5 text-primary-foreground"/></div><CardTitle>Reliability</CardTitle></CardHeader><CardContent><ul className="list-disc pl-4 text-muted-foreground space-y-1"><li>99.9% target uptime</li><li>Multi-region failover</li><li>Observability & SLAs</li></ul></CardContent></Card>
            <Card className="glass-card"><CardHeader><div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-2"><FileCheck className="w-5 h-5 text-primary-foreground"/></div><CardTitle>Compliance</CardTitle></CardHeader><CardContent><ul className="list-disc pl-4 text-muted-foreground space-y-1"><li>HIPAA-ready</li><li>GDPR & CCPA</li><li>ISO 27001 practices</li></ul></CardContent></Card>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>Data encrypted in transit (TLS 1.2+) and at rest (AES‑256). Optional KMS and customer-managed keys. Strict access controls with least privilege and audit logging.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>PII redaction and field‑level controls</li>
                  <li>Environment isolation with secrets management</li>
                  <li>Logging, monitoring, and anomaly detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Availability & Resilience</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>We operate a multi‑AZ architecture with proactive monitoring and autoscaling. RTO &lt; 1 hour, RPO &lt; 15 minutes for core services.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Continuous backups and disaster recovery testing</li>
                  <li>Rate limiting and abuse prevention</li>
                  <li>Self‑healing pipelines with health checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Model Governance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>We apply human‑in‑the‑loop controls, prompt/response logging, and safety guardrails. Evaluation suites measure accuracy, bias, and drift.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Red‑team testing and jailbreak protection</li>
                  <li>Deterministic modes for regulated workflows</li>
                  <li>Dataset lineage and versioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>24/7 on‑call with defined runbooks. We notify customers of security incidents per contractual SLAs and applicable regulations.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Security reviews and third‑party testing</li>
                  <li>Customer security questionnaire support</li>
                  <li>Vulnerability disclosure program</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild className="btn-primary"><a href="/contact">Talk to Security</a></Button>
            <Button asChild variant="outline" className="btn-ghost"><a href="/privacy">Read Privacy Policy</a></Button>
            <Button asChild variant="outline" className="btn-ghost"><a href="/terms">View Terms</a></Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
