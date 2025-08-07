import { Agent } from "@/types/agent";

export const technologyAgents: Agent[] = [
  {
    slug: "incident-commander",
    name: "incident commander",
    category: "Technology",
    industries: ["technology", "saas"],
    description:
      "coordinates incident response, communications, and postmortems with automated timelines",
    features: ["pager integration", "war room", "comm templates", "postmortems"],
    tags: ["sre"],
    deployTime: "3 minutes",
    rating: 4.8,
    deployments: 412,
    estimatedSavingsPerMonth: 9800,
    tasksPerDay: 4200,
    pricePerMonth: 399,
  },
  {
    slug: "cloud-cost-optimizer",
    name: "cloud cost optimizer",
    category: "Technology",
    industries: ["technology", "saas"],
    description:
      "right-sizes instances, schedules off-hours, and identifies waste across cloud providers",
    features: ["rightsizing", "scheduling", "waste detection", "alerts"],
    tags: ["finops"],
    deployTime: "4 minutes",
    rating: 4.8,
    deployments: 538,
    estimatedSavingsPerMonth: 18600,
    tasksPerDay: 5600,
    pricePerMonth: 499,
  },
];
