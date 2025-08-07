export type Agent = {
  slug: string;
  name: string;
  category: string; // e.g., "Finance & Accounting", "Legal"
  industries: string[]; // lowercase values like "finance", "healthcare"
  description: string;
  features: string[]; // 3-6 concise bullets
  tags: string[]; // short labels
  deployTime: string; // e.g., "3 minutes"
  rating: number; // 0-5
  deployments: number; // total companies using
  estimatedSavingsPerMonth: number; // in USD
  tasksPerDay: number; // for live stats aggregates
  pricePerMonth?: number; // USD
  languages?: number; // language count if relevant
  persona?: string; // optional voice/personality blurb
  faq?: { q: string; a: string }[]; // optional mini-FAQ for SEO
};
