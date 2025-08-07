import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StructuredData } from "@/components/StructuredData";
import type { Agent } from "@/types/agent";

interface AgentFAQProps {
  agent: Agent;
}

const DEFAULT_FAQ_BY_CATEGORY: Record<string, { q: string; a: string }[]> = {
  "Finance & Accounting": [
    { q: "how do you connect to our erp and banks?", a: "secure api connectors for netsuite, sap, quickbooks, and major banks. sso + audit trails included." },
    { q: "what is the average monthly roi?", a: "teams commonly save $8k–$35k/month via automation, error reduction, and early-pay discounts." },
    { q: "can you support multi-entity and multi-currency?", a: "yes—multi-entity consolidations and fx handling are built-in." },
  ],
  "Legal": [
    { q: "how accurate are clause risk flags?", a: "trained on thousands of agreements with firm-specific playbooks—humans decide, ai accelerates." },
    { q: "is data kept confidential?", a: "yes—data isolation, encryption, and optional on-prem or vpc deployments." },
    { q: "do you handle renewals and obligations?", a: "yes—automated calendars, obligation trackers, and renewal alerts." },
  ],
  "Healthcare": [
    { q: "are you hipaa compliant?", a: "yes—phi encryption, access controls, audit logs, and baa available." },
    { q: "how do you reduce denials?", a: "payer edits + eligibility checks catch errors before submission; automated follow-ups speed resolution." },
    { q: "do you integrate with major ehr systems?", a: "yes—hl7/fhir interfaces and partner integrations where available." },
  ],
  "Operations": [
    { q: "how do you handle failures?", a: "self-healing retries, circuit breakers, and alerting to keep processes flowing." },
    { q: "can workflows span multiple apps?", a: "yes—api orchestration across your stack with audit trails." },
    { q: "how fast is deployment?", a: "most agents go live in under 1 day; many in minutes." },
  ],
  "Customer Support": [
    { q: "how do you prevent bad answers?", a: "retrieval-augmented generation, guardrails, and human-in-the-loop escalation by confidence." },
    { q: "which channels are supported?", a: "chat, email, voice, and portal; csat and sla tracked automatically." },
    { q: "can it learn from our transcripts?", a: "yes—secure ingestion with pii redaction and continuous improvement loops." },
  ],
  "Customer Success": [
    { q: "how do you flag churn risk?", a: "usage signals, ticket sentiment, and executive sponsor changes inform risk scores and playbooks." },
    { q: "can you drive adoption?", a: "guided milestones and nudges per role increase active usage and feature uptake." },
    { q: "do you sync with crm?", a: "yes—salesforce, hubspot, and more for health scores and renewals." },
  ],
  "Real Estate": [
    { q: "do you integrate with mls systems?", a: "yes—mls integrations and listing syndication with compliance safeguards." },
    { q: "can you manage escrow timelines?", a: "automated checklists, alerts, and document packages keep deals on track." },
    { q: "do you support virtual tours?", a: "yes—3d embeds with analytics and lead capture." },
  ],
  "Technology": [
    { q: "how do incidents get coordinated?", a: "auto-created war rooms, on-call paging, and postmortems with timeline assembly." },
    { q: "how much can we save on cloud?", a: "finops policies typically cut 15–30% via rightsizing and scheduling." },
    { q: "is access controlled?", a: "sso/saml, roles, and fine-grained permissions with full audit trails." },
  ],
  "HR": [
    { q: "do you handle global time zones and calendars?", a: "yes—smart scheduling across regions with holiday awareness." },
    { q: "can you answer benefits questions?", a: "answers from your handbook and benefits docs with citations." },
    { q: "is candidate data protected?", a: "gdpr-ready with data retention controls and consent flows." },
  ],
  "Security & Compliance": [
    { q: "how do you collect evidence?", a: "automated pull from source systems on schedules with tamper-evident storage." },
    { q: "can we map to our framework?", a: "yes—soc 2, iso 27001, hipaa, pci, and custom controls supported." },
    { q: "do you support vendor assessments?", a: "built-in questionnaires, scoring, and remediation tracking." },
  ],
  "Supply Chain": [
    { q: "how accurate is demand forecasting?", a: "models leverage seasonality, promos, and external signals; accuracy improves weekly." },
    { q: "do you optimize delivery routes?", a: "yes—vrp solver with traffic and time windows reduces miles and time." },
    { q: "can you reduce returns cost?", a: "automated disposition and warehouse coordination lower handling costs." },
  ],
};

export const AgentFAQ: React.FC<AgentFAQProps> = ({ agent }) => {
  const faqs = agent.faq && agent.faq.length > 0 ? agent.faq : DEFAULT_FAQ_BY_CATEGORY[agent.category] ?? [];
  if (faqs.length === 0) return null;

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Frequently asked questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <h3 className="font-medium text-foreground mb-1 capitalize">{item.q}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AgentFAQ;
