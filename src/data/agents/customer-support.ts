import { Agent } from "@/types/agent";

export const customerSupportAgents: Agent[] = [
  {
    slug: "support-orchestrator",
    name: "support orchestrator",
    category: "Customer Support",
    industries: ["technology", "retail", "saas"],
    description:
      "resolves up to 80% of inquiries across chat, email, and voice with sentiment and smart escalations",
    features: ["multi-channel", "sentiment analysis", "escalation logic", "kb integration"],
    tags: ["support", "nlp"],
    deployTime: "4 minutes",
    rating: 4.9,
    deployments: 2234,
    estimatedSavingsPerMonth: 45600,
    tasksPerDay: 54000,
    pricePerMonth: 699,
  },
  {
    slug: "ticket-triager",
    name: "ticket triager",
    category: "Customer Support",
    industries: ["technology", "saas"],
    description:
      "categorizes and prioritizes tickets based on urgency and impact; routes to the best agent",
    features: ["smart routing", "priority scoring", "sla monitoring", "load balancing"],
    tags: ["support", "automation"],
    deployTime: "2 minutes",
    rating: 4.7,
    deployments: 2145,
    estimatedSavingsPerMonth: 12800,
    tasksPerDay: 22000,
    pricePerMonth: 297,
  },
];
