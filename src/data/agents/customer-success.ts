import { Agent } from "@/types/agent";

export const customerSuccessAgents: Agent[] = [
  {
    slug: "onboarding-guide",
    name: "onboarding guide",
    category: "Customer Success",
    industries: ["saas", "technology"],
    description:
      "guided onboarding, milestone tracking, and adoption nudges to accelerate time-to-value",
    features: ["guided setup", "milestones", "nudges", "health scoring"],
    tags: ["cs"],
    deployTime: "3 minutes",
    rating: 4.7,
    deployments: 376,
    estimatedSavingsPerMonth: 6200,
    tasksPerDay: 5200,
    pricePerMonth: 297,
  },
  {
    slug: "renewal-and-risk-radar",
    name: "renewal and risk radar",
    category: "Customer Success",
    industries: ["saas", "technology"],
    description:
      "predicts churn risk, identifies expansion signals, and orchestrates renewal playbooks",
    features: ["risk scoring", "expansion signals", "playbooks", "alerts"],
    tags: ["cs"],
    deployTime: "4 minutes",
    rating: 4.8,
    deployments: 298,
    estimatedSavingsPerMonth: 8400,
    tasksPerDay: 3800,
    pricePerMonth: 399,
  },
  {
    slug: "customer-portal-assistant",
    name: "customer portal assistant",
    category: "Customer Success",
    industries: ["saas", "technology"],
    description:
      "self-service knowledge, case updates, and guided troubleshooting to reduce tickets",
    features: ["kb surfacing", "guided flows", "case updates", "csat tracking"],
    tags: ["self-service"],
    deployTime: "3 minutes",
    rating: 4.7,
    deployments: 264,
    estimatedSavingsPerMonth: 7200,
    tasksPerDay: 4600,
    pricePerMonth: 297,
  },
];
