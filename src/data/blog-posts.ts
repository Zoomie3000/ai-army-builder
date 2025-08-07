export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description <=160 chars
  excerpt: string; // short teaser
  author: string;
  role: string;
  date: string; // ISO date
  readTime: string; // e.g., "8 min read"
  category: string; // matches Blog categories
  tags: string[];
  featured?: boolean;
  heroImage?: string;
  faq?: { q: string; a: string }[];
  content: string; // markdown-like content
};

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-ai-agents-2025",
    title: "The Ultimate Guide to AI Agents: Revolutionizing Business Automation in 2025",
    description: "Deep dive on AI agents for business automation in 2025: architecture, use cases, ROI, and deployment best practices.",
    excerpt: "What AI agents are, how they work, where they excel, and how to deploy them for outsized ROI in 2025.",
    author: "Dr. Sarah Chen",
    role: "Chief AI Strategist",
    date: "2025-01-02",
    readTime: "14 min read",
    category: "Thought Leadership",
    tags: ["AI agents", "automation", "2025", "strategy"],
    featured: true,
    faq: [
      { q: "what is an ai agent?", a: "a software entity that perceives, reasons, and acts to achieve business goals autonomously." },
      { q: "how fast is deployment?", a: "most teams deploy their first agent in minutes and scale within weeks." },
      { q: "what roi can we expect?", a: "3–5x within 90 days based on labor savings and error reduction." }
    ],
    content: `\
Introduction\n\nIn 2025, agentic AI has crossed from promising demos to dependable digital labor. Unlike scripts and macros, agents blend perception (reading screens, emails, and files), reasoning (LLM planning with guardrails), and action (safe execution across your tools).\n\nArchitecture\n\n- perception layer: extract data from ui, apis, and documents.\n- reasoning engine: task decomposition, self-critique, and tool-use planning.\n- action executor: reliable clicks, api calls, and validations.\n- learning loop: feedback, benchmarks, and auto-improvement.\n\nTop use cases\n\n- finance: invoice processing, reconciliations, close acceleration.\n- legal: contract review, obligation tracking, discovery.\n- healthcare: eligibility, prior auth, claims, coding.\n- operations: sop orchestration, inventory, routing.\n\nDeployment plan\n\n1) assess high-friction workflows. 2) pilot a single agent with a strict success metric. 3) integrate approvals and observability. 4) scale with a catalog and role-based access.\n\nROI\n\nteams report 70–90% cycle-time reductions, error rates under 1%, and immediate coverage for after-hours work.\n\nClosing\n\nready to orchestrate your ai workforce? start a 14‑day trial and deploy your first agent today.`
  },
  {
    slug: "invoice-processing-case-study-2-4m-saved",
    title: "Case Study: How AP Agents Saved $2.4M in 9 Months",
    description: "Real results from AI invoice processing: 99.7% accuracy, 70% cycle-time reduction, $2.4M in savings.",
    excerpt: "From manual chaos to autonomous AP with invoice parsing, 3‑way match, and exception handling.",
    author: "Marcus Rodriguez",
    role: "Solutions Architect",
    date: "2024-12-12",
    readTime: "9 min read",
    category: "Case Studies",
    tags: ["finance", "accounts payable", "roi"],
    faq: [
      { q: "how accurate is extraction?", a: "production accuracy stabilized at 99.7% with human-in-the-loop for edge cases." },
      { q: "does it work without apis?", a: "yes—screen-aware execution covers legacy apps and portals." }
    ],
    content: `\
summary\n\nA Fortune 500 finance team automated intake, validation, 3‑way match, approvals, and posting. Agents flagged duplicates, captured early discounts, and learned vendor idiosyncrasies.\n\nresults\n\n- $2.4m net savings, 9 months.\n- 70% cycle time reduction, 40% fewer exceptions.\n- 24/7 throughput without overtime.\n\nplaybook\n\nstart with top 5 vendors, define SLAs, add exception playbooks, monitor drift, then expand globally.`
  },
  {
    slug: "building-titan-class-agents-architecture",
    title: "Building titan-class agents: architecture and guardrails",
    description: "Reference architecture for self-evolving, reliable agents with safety and observability.",
    excerpt: "Design patterns for planners, tool routers, memory, and self-critique to reach production reliability.",
    author: "Dr. James Liu",
    role: "Head of AI Research",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "AI Agents",
    tags: ["architecture", "planning", "guardrails"],
    content: `\
key modules\n\n- planner: decomposes tasks and selects tools.\n- executor: deterministic actions, retries, and rollbacks.\n- memory: vector + event logs for context.\n- critic: self-review against acceptance tests.\n- telemetry: traces, tokens, and outcomes for governance.\n\nuse a typed action schema, constrain side effects, and require idempotency.`
  },
  {
    slug: "customer-support-automation-2025-guide",
    title: "Customer support automation: 2025 implementation guide",
    description: "Deploy AI agents to handle 80% of tickets with higher CSAT using routing, knowledge surfacing, and workflows.",
    excerpt: "Scope your support funnel, deflect repetitive volume, and elevate agents to complex issues.",
    author: "Emma Thompson",
    role: "Customer Success Director",
    date: "2024-12-08",
    readTime: "10 min read",
    category: "Tutorials",
    tags: ["support", "deflection", "workflows"],
    content: `\
steps\n\n1) map intents and create outcome trees.\n2) connect kb + case system.\n3) build safe actions (resets, refunds, updates).\n4) add approvals + notes back to crm.\n5) measure cx with csat + resolution time.`
  },
  {
    slug: "ciso-guide-security-for-ai-agents",
    title: "A CISO's guide to securing multi-agent deployments",
    description: "Security patterns for identity, secrets, approvals, and auditability in AI-agent platforms.",
    excerpt: "Principle-of-least-privilege, time-bound secrets, policy-as-code, and full audit trails.",
    author: "Robert Kim",
    role: "Chief Security Officer",
    date: "2024-12-05",
    readTime: "8 min read",
    category: "Industry Insights",
    tags: ["security", "compliance", "governance"],
    content: `\
controls\n\n- scoped identities per agent + environment.\n- just-in-time secrets via vault.\n- human approvals for destructive actions.\n- immutable logs + anomaly detection.`
  },
  {
    slug: "multi-agent-orchestration-constellation",
    title: "Announcing CONSTELLATION: multi-agent orchestration for the enterprise",
    description: "Coordinate hundreds of agents with roles, priorities, and shared goals across complex workflows.",
    excerpt: "A new orchestration layer for planning, delegation, and reconciliation across teams and systems.",
    author: "Alex Morgan",
    role: "Product Manager",
    date: "2024-12-03",
    readTime: "6 min read",
    category: "Product Updates",
    tags: ["orchestration", "multi-agent", "enterprise"],
    content: `\
highlights\n\n- role-based delegation + swarm patterns.\n- conflict resolution with audits.\n- shared memory + knowledge graphs.\n- real-time dashboards + SLAs.`
  },
  {
    slug: "cfo-journey-400-roi",
    title: "From manual to strategic: a CFO's 90‑day journey to 400% ROI",
    description: "How finance leaders sequence deployment from AP to close to forecasting for compounding ROI.",
    excerpt: "A pragmatic playbook for CFOs to modernize finance with trustworthy agents.",
    author: "Lisa Chang",
    role: "Enterprise Success Manager",
    date: "2024-11-28",
    readTime: "9 min read",
    category: "Case Studies",
    tags: ["finance", "leadership", "transformation"],
    content: `\
roadmap\n\n- phase 1: ap + expense.\n- phase 2: reconciliations + close.\n- phase 3: forecasting + what-if.\n- phase 4: treasury + risk.`
  },
  {
    slug: "healthcare-revenue-cycle-automation",
    title: "Healthcare revenue cycle: agents that reduce denials and speed cash",
    description: "Eligibility, prior auth, coding, and denial management with HIPAA-safe agents.",
    excerpt: "Hospitals improve cash flow while reducing admin burnout with reliable automations.",
    author: "Dr. Priya Nair",
    role: "Clinical Operations Advisor",
    date: "2024-11-20",
    readTime: "11 min read",
    category: "Industry Insights",
    tags: ["healthcare", "rcm", "hipaa"],
    content: `\
agents\n\n- insurance verification.\n- prior authorization.\n- claims processing.\n- denial analytics + appeals.\n- icd-10/cpt coding support.`
  },
  {
    slug: "manufacturing-supply-chain-agents",
    title: "Manufacturing playbook: demand forecasting and supply planning agents",
    description: "Cut stockouts and excess with demand signals, constraints, and optimal routing.",
    excerpt: "Factories stabilize production with forecasting, procurement, and route optimization.",
    author: "Anya Petrova",
    role: "Supply Chain Strategist",
    date: "2024-11-15",
    readTime: "10 min read",
    category: "Automation",
    tags: ["manufacturing", "supply chain", "forecasting"],
    content: `\
combine sales, seasonality, promos, and external signals; respect capacity + lead times; iterate weekly plans.`
  },
  {
    slug: "ecommerce-personalization-agents",
    title: "E‑commerce growth: personalization and merchandising agents",
    description: "Lift conversion with real‑time recommendations, content generation, and inventory-aware promotions.",
    excerpt: "Merchandising and CX agents collaborate to increase AOV and LTV.",
    author: "Noah Williams",
    role: "Retail Growth Advisor",
    date: "2024-11-12",
    readTime: "9 min read",
    category: "Industry Insights",
    tags: ["retail", "ecommerce", "personalization"],
    content: `\
agents assess intent, recommend bundles, and coordinate with email/sms for timely nudges.`
  },
  {
    slug: "legal-contract-review-agents",
    title: "Legal automation: contract review and obligation tracking agents",
    description: "Speed legal throughput with clause extraction, risk flags, and renewal reminders.",
    excerpt: "GCs reduce turnaround while improving consistency and compliance.",
    author: "Ava Martinez",
    role: "Legal Operations Lead",
    date: "2024-11-05",
    readTime: "10 min read",
    category: "AI Agents",
    tags: ["legal", "contracts", "compliance"],
    content: `\
patterns: standardized templates, playbooked fallbacks, tracked obligations, and searchable clause libraries.`
  },
  {
    slug: "marketing-campaign-optimizer-agents",
    title: "Marketing at scale: multi-channel campaign optimizer agents",
    description: "Automate A/B tests, creative iteration, and budget allocation to hit CPA/LTV goals.",
    excerpt: "Agents act as tireless campaign managers across channels.",
    author: "Maya Patel",
    role: "Growth Lead",
    date: "2024-10-30",
    readTime: "8 min read",
    category: "Automation",
    tags: ["marketing", "ads", "optimization"],
    content: `\
use guardrails for brand voice and safety lists; tie spend to cohort outcomes, not vanity clicks.`
  },
  {
    slug: "it-operations-incident-commander",
    title: "IT operations: incident commander and ticket triage agents",
    description: "Shorten MTTR with enrichment, auto-remediation, and crisp stakeholder comms.",
    excerpt: "From noise to signal: how agents stabilize on-call and reduce toil.",
    author: "Jon Park",
    role: "SRE Advisor",
    date: "2024-10-22",
    readTime: "8 min read",
    category: "Tutorials",
    tags: ["it", "sre", "reliability"],
    content: `\
route by severity, enrich with runbooks, attempt safe remediations, escalate with context, and write retros.`
  },
  {
    slug: "hr-recruiting-sourcer-agents",
    title: "HR modernization: recruiting sourcer and interview scheduler agents",
    description: "Fill pipelines faster with compliant sourcing, tailored outreach, and automatic scheduling.",
    excerpt: "Talent ops gets consistent, bias-aware execution at scale.",
    author: "Grace Lee",
    role: "People Operations Partner",
    date: "2024-10-18",
    readTime: "7 min read",
    category: "Industry Insights",
    tags: ["hr", "recruiting", "talent"],
    content: `\
key: structured scorecards, compliant messaging, and interviewer load balancing.`
  },
  {
    slug: "customer-success-renewal-risk-radar",
    title: "Customer success: renewal and risk radar agents",
    description: "Predict churn, identify expansion, and automate renewal playbooks for net revenue retention.",
    excerpt: "CS leaders align actions to leading indicators, not lagging reports.",
    author: "Elena Novak",
    role: "Customer Success Strategist",
    date: "2024-10-10",
    readTime: "9 min read",
    category: "AI Agents",
    tags: ["customer success", "nrr", "renewals"],
    content: `\
combine product usage, sentiment, support, and finance signals; trigger plays with owner accountability.`
  },
  {
    slug: "gov-compliance-automation-hipaa-soc2",
    title: "Compliance automation: HIPAA, SOC2, and audit‑ready evidence",
    description: "Automate evidence collection, control monitoring, and reporting for faster, safer audits.",
    excerpt: "Security and compliance teams cut prep time by 70%.",
    author: "Ravi Desai",
    role: "Security & Compliance Advisor",
    date: "2024-10-01",
    readTime: "8 min read",
    category: "Industry Insights",
    tags: ["compliance", "soc2", "hipaa"],
    content: `\
map controls, connect systems, collect proofs continuously, and keep auditors in a shared view.`
  },
  {
    slug: "education-ai-admin-automation",
    title: "Education: AI agents for enrollment, financial aid, and student success",
    description: "Modernize campus ops with agents for admissions, aid processing, and proactive outreach.",
    excerpt: "Universities improve outcomes without adding headcount.",
    author: "Natalie Brooks",
    role: "Education Programs Lead",
    date: "2024-09-24",
    readTime: "8 min read",
    category: "Industry Insights",
    tags: ["education", "student success", "automation"],
    content: `\
use cases: transcript parsing, aid eligibility, advisor scheduling, and risk-aware nudges.`
  },
  {
    slug: "real-estate-automation-listings-transactions",
    title: "Real estate: listing, comps, and transaction coordination agents",
    description: "Agents streamline MLS updates, marketing, comp analysis, and escrow coordination.",
    excerpt: "Teams close faster with fewer errors and better client comms.",
    author: "Fernando Diaz",
    role: "Real Estate Ops Advisor",
    date: "2024-09-15",
    readTime: "7 min read",
    category: "Automation",
    tags: ["real estate", "mls", "transactions"],
    content: `\
patterns: auto-listing, doc collection, task checklists, and deadline reminders.`
  },
  {
    slug: "nonprofit-donor-ops-ai",
    title: "Nonprofit operations: donor engagement and grant management agents",
    description: "Automate donor segmentation, outreach, and grant reporting while improving transparency.",
    excerpt: "Small teams, big outcomes with always-on execution.",
    author: "Olivia Bennett",
    role: "Nonprofit Advisor",
    date: "2024-09-01",
    readTime: "7 min read",
    category: "AI Agents",
    tags: ["nonprofit", "donors", "grants"],
    content: `\
focus: personalized updates, program impact summaries, and deadline tracking for grants.`
  },
  {
    slug: "energy-utilities-field-ops-agents",
    title: "Energy & utilities: field ops and asset maintenance agents",
    description: "Dynamic scheduling, predictive maintenance, and safety compliance for distributed fleets.",
    excerpt: "Keep uptime high while reducing truck rolls and penalties.",
    author: "Daniel Carter",
    role: "Industrial Operations Lead",
    date: "2024-08-24",
    readTime: "9 min read",
    category: "Industry Insights",
    tags: ["energy", "utilities", "maintenance"],
    content: `\
use telemetry + work orders to predict failures and coordinate parts + crews.`
  },
  {
    slug: "media-content-repurposer-agents",
    title: "Media playbook: content repurposer and distribution agents",
    description: "Turn long-form content into clips, articles, and posts with channel-aware formats.",
    excerpt: "Grow reach and consistency with on-brand automation.",
    author: "Sofia Rossi",
    role: "Media Strategist",
    date: "2024-08-15",
    readTime: "8 min read",
    category: "Automation",
    tags: ["media", "content", "distribution"],
    content: `\
add approval steps for sensitive topics; use performance feedback to improve edits.`
  },
  {
    slug: "transportation-route-optimizer-agents",
    title: "Transportation: route optimization and telematics-aware agents",
    description: "Cut miles and time with VRP solvers, traffic signals, and delivery windows.",
    excerpt: "Fleets save fuel and meet SLAs with smarter routing.",
    author: "Chris Young",
    role: "Logistics Advisor",
    date: "2024-08-02",
    readTime: "7 min read",
    category: "Tutorials",
    tags: ["logistics", "routing", "telematics"],
    content: `\
practical steps: clean addresses, set constraints, simulate routes, and monitor deviations.`
  },
  {
    slug: "insurance-claims-automation-agents",
    title: "Insurance: FNOL, claims triage, and fraud analytics agents",
    description: "Speed claims while reducing leakage with triage, document AI, and anomaly detection.",
    excerpt: "Carriers improve CX and loss ratios simultaneously.",
    author: "Amara Singh",
    role: "Insurance Operations Lead",
    date: "2024-07-28",
    readTime: "9 min read",
    category: "Industry Insights",
    tags: ["insurance", "claims", "fraud"],
    content: `\
connect policy, telematics, adjusters, and payments for straight-through processing.`
  },
  {
    slug: "pharma-regulatory-submissions-agents",
    title: "Pharma & biotech: regulatory document and submission agents",
    description: "Accelerate authoring and QC for submissions with traceability and audit logs.",
    excerpt: "Teams hit timelines with fewer handoffs and rework.",
    author: "Helena Fischer",
    role: "Life Sciences Advisor",
    date: "2024-07-20",
    readTime: "10 min read",
    category: "AI Agents",
    tags: ["pharma", "biotech", "regulatory"],
    content: `\
normalize document structures, track diffs, and validate references automatically.`
  },
  {
    slug: "public-sector-digital-workforce",
    title: "Public sector: building a compliant digital workforce",
    description: "Serve citizens faster with agents for licensing, benefits, and records while meeting mandates.",
    excerpt: "Governments modernize services without massive replatforming.",
    author: "Marcus Allen",
    role: "GovTech Strategist",
    date: "2024-07-08",
    readTime: "8 min read",
    category: "Thought Leadership",
    tags: ["government", "civic", "digital services"],
    content: `\
start with forms automation, add status notifications, then integrate case systems.`
  },
  {
    slug: "small-business-top-10-agents",
    title: "Top 10 agents every small business can deploy this quarter",
    description: "From bookkeeping to inbox triage, practical agents that pay for themselves fast.",
    excerpt: "A prioritized shortlist for immediate value.",
    author: "Paula Reed",
    role: "SMB Advisor",
    date: "2024-06-30",
    readTime: "7 min read",
    category: "Tutorials",
    tags: ["smb", "playbook", "roi"],
    content: `\
list: ap, ar, bank recs, inbox triage, meeting notes, crm hygiene, reviews, inventory, shipping labels, dashboards.`
  },
  {
    slug: "engineering-cost-optimizer-agents",
    title: "Engineering efficiency: cloud cost optimizer and reliability agents",
    description: "Cut cloud waste and reduce toil with budget-aware, SLO-driven automations.",
    excerpt: "DevEx improves when agents handle repetitive operational work.",
    author: "Leo Grant",
    role: "Engineering Advisor",
    date: "2024-06-18",
    readTime: "8 min read",
    category: "Automation",
    tags: ["engineering", "cloud", "slo"],
    content: `\
apply budgets to infra resources, auto-tagging, and off-hours scaling; tie changes to error budgets.`
  },
  {
    slug: "data-ops-etl-agents",
    title: "Data operations: ETL, quality checks, and lineage agents",
    description: "Keep pipelines healthy with schema drift detection, backfills, and alerting.",
    excerpt: "Analysts focus on insights as agents keep data trustworthy.",
    author: "Chen Wu",
    role: "Data Platform Lead",
    date: "2024-06-10",
    readTime: "8 min read",
    category: "AI Agents",
    tags: ["data", "etl", "quality"],
    content: `\
standardize contracts for inputs/outputs; auto-generate lineage and impact analyses.`
  },
  {
    slug: "executive-playbook-scaling-agents",
    title: "Executive playbook: scaling from 1 to 100 agents",
    description: "Set targets, centralize governance, and create a reusable catalog to scale responsibly.",
    excerpt: "Leaders move from pilots to platform thinking.",
    author: "Nora Hill",
    role: "Operating Partner",
    date: "2024-06-02",
    readTime: "10 min read",
    category: "Thought Leadership",
    tags: ["executive", "scale", "governance"],
    content: `\
create a center of enablement, establish intake, prioritize by ROI + risk, and publish blueprints.`
  }
];

export const blogBaseUrl = `${origin}/blog`;
