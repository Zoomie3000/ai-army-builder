import { Agent } from "@/types/agent";

export const hrAgents: Agent[] = [
  {
    slug: "recruiting-sourcer",
    name: "recruiting sourcer",
    category: "HR",
    industries: ["technology", "services", "manufacturing"],
    description:
      "automated candidate sourcing, outreach, and screening based on role criteria",
    features: ["role profiles", "sourcing", "personalized outreach", "screening"],
    tags: ["talent"],
    deployTime: "4 minutes",
    rating: 4.7,
    deployments: 476,
    estimatedSavingsPerMonth: 9200,
    tasksPerDay: 4400,
    pricePerMonth: 399,
  },
  {
    slug: "interview-scheduler",
    name: "interview scheduler",
    category: "HR",
    industries: ["technology", "services"],
    description:
      "coordinates interviews, panels, and feedback cycles with calendar integrations",
    features: ["calendar sync", "panel scheduling", "reminders", "feedback forms"],
    tags: ["talent ops"],
    deployTime: "3 minutes",
    rating: 4.8,
    deployments: 512,
    estimatedSavingsPerMonth: 6800,
    tasksPerDay: 5200,
    pricePerMonth: 297,
  },
  {
    slug: "policy-qa-agent",
    name: "policy q&a agent",
    category: "HR",
    industries: ["technology", "manufacturing", "services"],
    description:
      "answers employee questions about benefits, policies, and procedures from your handbook",
    features: ["kb ingest", "q&a", "forms", "case creation"],
    tags: ["employee experience"],
    deployTime: "2 minutes",
    rating: 4.7,
    deployments: 398,
    estimatedSavingsPerMonth: 5400,
    tasksPerDay: 3800,
    pricePerMonth: 297,
  },
];
