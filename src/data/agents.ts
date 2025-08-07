export type Agent = {
  slug: string;
  name: string;
  category: "Finance & Accounting" | "Customer Support" | "Sales & Marketing" | "Operations";
  industries: string[]; // lowercase values like "finance", "healthcare"
  description: string;
  features: string[];
  tags: string[];
  deployTime: string; // e.g., "3 minutes"
  rating: number; // 0-5
  deployments: number; // total companies using
  estimatedSavingsPerMonth: number; // in USD
  tasksPerDay: number; // for live stats aggregates
  pricePerMonth?: number; // USD
  languages?: number;
  persona?: string;
};

export const agents: Agent[] = [
  {
    slug: "invoice-processor-iris",
    name: "Invoice Processor IRIS",
    category: "Finance & Accounting",
    industries: ["finance", "retail", "technology", "manufacturing"],
    description:
      "Extracts data from any invoice format, matches to POs and receipts, routes approvals, and detects duplicates or fraud with 99.2% accuracy.",
    features: [
      "OCR + ML extraction",
      "3-way matching",
      "Approval routing",
      "Duplicate & fraud detection",
      "100+ language support",
    ],
    tags: ["Finance", "AP Automation", "Compliance"],
    deployTime: "5 minutes",
    rating: 4.9,
    deployments: 1247,
    estimatedSavingsPerMonth: 12003,
    tasksPerDay: 32000,
    pricePerMonth: 497,
    languages: 100,
    persona:
      "Hi! I'm Iris, your tireless invoice processing expert. I thrive on accuracy and speed so your team can focus on strategy.",
  },
  {
    slug: "expense-guardian",
    name: "Expense Guardian",
    category: "Finance & Accounting",
    industries: ["finance", "technology", "retail"],
    description:
      "Auto-categorizes expenses, flags anomalies, enforces policy, and generates audit-ready reports in real time.",
    features: ["Real-time monitoring", "Policy enforcement", "Fraud detection", "Audit trail"],
    tags: ["Finance", "Compliance"],
    deployTime: "3 minutes",
    rating: 4.8,
    deployments: 923,
    estimatedSavingsPerMonth: 15200,
    tasksPerDay: 12000,
    pricePerMonth: 397,
  },
  {
    slug: "financial-forecaster",
    name: "Financial Forecaster",
    category: "Finance & Accounting",
    industries: ["finance", "technology", "manufacturing"],
    description:
      "Predicts cash flow and revenue trends using ML with scenario planning, risk assessment, and executive dashboards.",
    features: ["Predictive analytics", "Scenario planning", "Risk assessment", "Executive dashboards"],
    tags: ["Finance", "Analytics"],
    deployTime: "5 minutes",
    rating: 4.9,
    deployments: 1456,
    estimatedSavingsPerMonth: 35400,
    tasksPerDay: 8000,
    pricePerMonth: 597,
  },
  {
    slug: "support-orchestrator",
    name: "Support Orchestrator",
    category: "Customer Support",
    industries: ["technology", "retail", "saas"],
    description:
      "Resolves up to 80% of inquiries across chat, email, and voice with sentiment analysis and smart escalations.",
    features: ["Multi-channel", "Sentiment analysis", "Escalation logic", "Knowledge base integration"],
    tags: ["Support", "NLP"],
    deployTime: "4 minutes",
    rating: 4.9,
    deployments: 2234,
    estimatedSavingsPerMonth: 45600,
    tasksPerDay: 54000,
    pricePerMonth: 699,
  },
  {
    slug: "ticket-triager",
    name: "Ticket Triager",
    category: "Customer Support",
    industries: ["technology", "saas"],
    description:
      "Categorizes and prioritizes tickets based on urgency and impact; routes to the best agent automatically.",
    features: ["Smart routing", "Priority scoring", "SLA monitoring", "Load balancing"],
    tags: ["Support", "Automation"],
    deployTime: "2 minutes",
    rating: 4.7,
    deployments: 2145,
    estimatedSavingsPerMonth: 12800,
    tasksPerDay: 22000,
    pricePerMonth: 297,
  },
  {
    slug: "lead-qualifier",
    name: "Lead Qualifier",
    category: "Sales & Marketing",
    industries: ["technology", "saas", "services"],
    description:
      "Scores and qualifies leads using 50+ data points, intent signals, and CRM integrations to increase conversions.",
    features: ["Behavioral scoring", "Intent detection", "CRM integration", "Predictive analytics"],
    tags: ["Sales", "Lead Gen"],
    deployTime: "3 minutes",
    rating: 4.9,
    deployments: 2678,
    estimatedSavingsPerMonth: 52100,
    tasksPerDay: 18000,
    pricePerMonth: 497,
  },
  {
    slug: "campaign-optimizer",
    name: "Campaign Optimizer",
    category: "Sales & Marketing",
    industries: ["technology", "retail", "ecommerce"],
    description:
      "Optimizes ad campaigns across platforms with automated A/B tests, budget allocation, and performance tracking.",
    features: ["Multi-platform", "A/B testing", "Budget allocation", "Performance tracking"],
    tags: ["Marketing", "Optimization"],
    deployTime: "4 minutes",
    rating: 4.8,
    deployments: 1789,
    estimatedSavingsPerMonth: 28400,
    tasksPerDay: 14000,
    pricePerMonth: 597,
  },
  {
    slug: "workflow-orchestrator",
    name: "Workflow Orchestrator",
    category: "Operations",
    industries: ["technology", "manufacturing", "services"],
    description:
      "Coordinates complex processes, handles errors gracefully, and provides real-time status and performance analytics.",
    features: ["Process mapping", "Error handling", "Status tracking", "Performance analytics"],
    tags: ["Operations", "Workflow"],
    deployTime: "6 minutes",
    rating: 4.9,
    deployments: 1923,
    estimatedSavingsPerMonth: 67200,
    tasksPerDay: 26000,
    pricePerMonth: 799,
  },
  {
    slug: "data-synchronizer",
    name: "Data Synchronizer",
    category: "Operations",
    industries: ["technology", "saas", "finance"],
    description:
      "Keeps data consistent across systems in real time with conflict resolution, validation, and audit trails.",
    features: ["Real-time sync", "Conflict resolution", "Data validation", "Audit trails"],
    tags: ["Operations", "Data"],
    deployTime: "3 minutes",
    rating: 4.7,
    deployments: 2456,
    estimatedSavingsPerMonth: 19600,
    tasksPerDay: 30000,
    pricePerMonth: 399,
  },
  // Additional agents for breadth
  {
    slug: "contract-reviewer-diana",
    name: "Contract Reviewer DIANA",
    category: "Operations",
    industries: ["legal", "services"],
    description:
      "Reviews contracts for risk clauses, compliance, and redlines; generates summaries for fast approvals.",
    features: ["Risk clause detection", "Redlining", "Summary generation", "Playbook enforcement"],
    tags: ["Legal", "Compliance"],
    deployTime: "5 minutes",
    rating: 4.8,
    deployments: 987,
    estimatedSavingsPerMonth: 20800,
    tasksPerDay: 9000,
    pricePerMonth: 597,
  },
  {
    slug: "medical-biller-betty",
    name: "Medical Biller BETTY",
    category: "Operations",
    industries: ["healthcare"],
    description:
      "Handles medical coding, insurance verification, and claims submission with payer-specific rules.",
    features: ["ICD-10/HCPCS coding", "Insurance verification", "Claim submission", "Denial management"],
    tags: ["Healthcare", "Billing"],
    deployTime: "6 minutes",
    rating: 4.9,
    deployments: 612,
    estimatedSavingsPerMonth: 27000,
    tasksPerDay: 11000,
    pricePerMonth: 799,
  },
  {
    slug: "compliance-monitor-carla",
    name: "Compliance Monitor CARLA",
    category: "Operations",
    industries: ["finance", "healthcare", "technology"],
    description:
      "Monitors operations for SOC2/HIPAA/PCI compliance, alerts on violations, and maintains evidence logs.",
    features: ["Policy mapping", "Controls monitoring", "Alerts", "Evidence log"],
    tags: ["Security", "Compliance"],
    deployTime: "4 minutes",
    rating: 4.8,
    deployments: 844,
    estimatedSavingsPerMonth: 19800,
    tasksPerDay: 7000,
    pricePerMonth: 699,
  },
];
