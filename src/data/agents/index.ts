export * from "./finance";
export * from "./legal";
export * from "./healthcare";
export * from "./operations";
export * from "./real-estate";
export * from "./customer-support";
export * from "./customer-success";
export * from "./technology";
export * from "./sales-marketing";
export * from "./hr";
export * from "./security-compliance";
export * from "./supply-chain";

export type { Agent } from "@/types/agent";

import type { Agent as AgentType } from "@/types/agent";
import { financeAgents } from "./finance";
import { legalAgents } from "./legal";
import { healthcareAgents } from "./healthcare";
import { operationsAgents } from "./operations";
import { realEstateAgents } from "./real-estate";
import { customerSupportAgents } from "./customer-support";
import { customerSuccessAgents } from "./customer-success";
import { technologyAgents } from "./technology";
import { salesMarketingAgents } from "./sales-marketing";
import { hrAgents } from "./hr";
import { securityComplianceAgents } from "./security-compliance";
import { supplyChainAgents } from "./supply-chain";

export const agents: AgentType[] = [
  ...financeAgents,
  ...legalAgents,
  ...healthcareAgents,
  ...operationsAgents,
  ...realEstateAgents,
  ...customerSupportAgents,
  ...customerSuccessAgents,
  ...technologyAgents,
  ...salesMarketingAgents,
  ...hrAgents,
  ...securityComplianceAgents,
  ...supplyChainAgents,
];
