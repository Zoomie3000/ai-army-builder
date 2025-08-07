import { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type AuthorBioProps = {
  name: string;
  role?: string;
};

const bios: Record<string, string> = {
  "Dr. Sarah Chen": "Chief AI Strategist with 12+ years in enterprise automation, specializing in agentic systems and ROI modeling.",
  "Marcus Rodriguez": "Solutions Architect focused on finance and operations, delivering large-scale AI deployments.",
  "Dr. James Liu": "Head of AI Research driving reliability, safety, and planning architectures for titan-class agents.",
  "Emma Thompson": "Customer Success Director helping brands scale support and CX with intelligent workflows.",
  "Robert Kim": "Chief Security Officer with two decades in governance, risk, and compliance for AI platforms.",
  "Alex Morgan": "Product Manager shipping multi-agent orchestration and observability at enterprise scale.",
  "Lisa Chang": "Enterprise Success leader guiding CFOs through AI-driven finance transformations.",
  "Dr. Priya Nair": "Clinical Operations Advisor focused on HIPAA-safe automation in healthcare systems.",
};

export const AuthorBio: FC<AuthorBioProps> = ({ name, role }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  const bio = bios[name] || "Contributor at Sentus.ai writing about AI agents, automation, and business transformation.";

  return (
    <aside className="glass-card p-5 rounded-2xl flex items-start gap-4 mb-10">
      <Avatar className="w-12 h-12">
        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        {role && <p className="text-sm text-muted-foreground">{role}</p>}
        <p className="text-sm text-muted-foreground mt-2">{bio}</p>
      </div>
    </aside>
  );
};
