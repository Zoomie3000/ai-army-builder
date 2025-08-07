import { Agent } from "@/types/agent";

export const supplyChainAgents: Agent[] = [
  {
    slug: "demand-forecaster",
    name: "demand forecaster",
    category: "Supply Chain",
    industries: ["manufacturing", "retail", "ecommerce"],
    description:
      "predicts demand with external signals, reducing stockouts and overstock",
    features: ["ml forecasting", "seasonality", "promotions", "alerts"],
    tags: ["planning"],
    deployTime: "5 minutes",
    rating: 4.8,
    deployments: 332,
    estimatedSavingsPerMonth: 15800,
    tasksPerDay: 4600,
    pricePerMonth: 599,
  },
  {
    slug: "route-optimizer",
    name: "route optimizer",
    category: "Supply Chain",
    industries: ["logistics", "transportation"],
    description:
      "optimizes delivery routes with traffic and window constraints to cut miles and time",
    features: ["vrp solver", "traffic", "time windows", "telemetry"],
    tags: ["logistics"],
    deployTime: "4 minutes",
    rating: 4.7,
    deployments: 218,
    estimatedSavingsPerMonth: 9200,
    tasksPerDay: 4000,
    pricePerMonth: 399,
  },
  {
    slug: "returns-processing-agent",
    name: "returns processing agent",
    category: "Supply Chain",
    industries: ["retail", "ecommerce"],
    description:
      "handles rma intake, disposition decisions, and warehouse coordination",
    features: ["intake", "eligibility", "disposition", "warehouse sync"],
    tags: ["operations"],
    deployTime: "3 minutes",
    rating: 4.7,
    deployments: 244,
    estimatedSavingsPerMonth: 6200,
    tasksPerDay: 3000,
    pricePerMonth: 297,
  },
];
