export type FAQCategoryId =
  | "general"
  | "security"
  | "pricing"
  | "implementation"
  | "technical"
  | "enterprise"
  | "performance"
  | "industries"
  | "ai_basics"
  | "differentiation"
  | "future"
  | "ethics"
  | "integration"
  | "scaling"
  | "support";

export interface FAQCategory {
  id: FAQCategoryId;
  name: string;
  icon: any;
}

export interface FAQItem {
  category: FAQCategoryId;
  question: string;
  answer: string;
}
