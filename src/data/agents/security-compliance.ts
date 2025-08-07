import { Agent } from "@/types/agent";

export const securityComplianceAgents: Agent[] = [
  {
    slug: "soc2-control-guardian",
    name: "soc 2 control guardian",
    category: "Security & Compliance",
    industries: ["technology", "saas"],
    description:
      "monitors control performance, collects evidence, and prepares audit-ready artifacts",
    features: ["control mapping", "evidence collection", "alerts", "reports"],
    tags: ["security", "compliance"],
    deployTime: "4 minutes",
    rating: 4.8,
    deployments: 388,
    estimatedSavingsPerMonth: 8200,
    tasksPerDay: 4800,
    pricePerMonth: 499,
  },
  {
    slug: "vendor-risk-assessor",
    name: "vendor risk assessor",
    category: "Security & Compliance",
    industries: ["technology", "finance", "healthcare"],
    description:
      "automates questionnaires, scores vendors, and tracks remediation for third-party risk",
    features: ["questionnaires", "scoring", "remediation", "tracking"],
    tags: ["tprm"],
    deployTime: "4 minutes",
    rating: 4.7,
    deployments: 276,
    estimatedSavingsPerMonth: 7400,
    tasksPerDay: 3600,
    pricePerMonth: 499,
  },
  {
    slug: "data-retention-bot",
    name: "data retention bot",
    category: "Security & Compliance",
    industries: ["technology", "legal", "finance"],
    description:
      "classifies data and enforces retention/deletion policies across storage systems",
    features: ["classification", "policy engine", "deletion workflow", "audit log"],
    tags: ["governance"],
    deployTime: "5 minutes",
    rating: 4.7,
    deployments: 244,
    estimatedSavingsPerMonth: 6800,
    tasksPerDay: 3400,
    pricePerMonth: 499,
  },
];
