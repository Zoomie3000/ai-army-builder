import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface AgentFinderWizardProps {
  triggerClassName?: string;
}

const industries = [
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "retail", label: "Retail & E‑commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "real-estate", label: "Real Estate" },
  { value: "technology", label: "Technology" },
  { value: "legal", label: "Legal" },
];

export const AgentFinderWizard = ({ triggerClassName }: AgentFinderWizardProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    industry: "",
    size: "",
    priority: "",
    deployment: "",
  });

  const onFinish = () => {
    // Simple recommendation routing
    const { industry, priority } = answers;
    if (industry) {
      // Prefer dedicated industry page if we have one
      const industryPathMap: Record<string, string> = {
        "healthcare": "/industries/healthcare",
        "finance": "/industries/finance",
        "retail": "/industries/retail",
        "manufacturing": "/industries/manufacturing",
        "real-estate": "/industries/real-estate",
      };
      const path = industryPathMap[industry] || "/agents";
      setOpen(false);
      navigate(path + (priority ? `?p=${encodeURIComponent(priority)}` : ""));
      return;
    }
    setOpen(false);
    navigate("/agents");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName || "btn-primary"} size="lg">
          <Sparkles className="w-4 h-4 mr-2" /> Find your best‑fit AI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>AI Solution Finder</span>
            <Badge variant="secondary" className="ml-2">2 min</Badge>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={`step-${step}`} className="mt-2">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="step-1">1</TabsTrigger>
            <TabsTrigger value="step-2">2</TabsTrigger>
            <TabsTrigger value="step-3">3</TabsTrigger>
            <TabsTrigger value="step-4">4</TabsTrigger>
          </TabsList>

          <TabsContent value="step-1" className="space-y-4">
            <p className="text-sm text-muted-foreground">Which industry best describes your company?</p>
            <Select value={answers.industry} onValueChange={(v) => setAnswers(a => ({ ...a, industry: v }))}>
              <SelectTrigger className="bg-background/50 border-border/20">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(i => (
                  <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} disabled={!answers.industry} className="btn-primary">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="step-2" className="space-y-4">
            <p className="text-sm text-muted-foreground">How many employees do you have?</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "1-50", l: "1-50" },
                { v: "51-200", l: "51-200" },
                { v: "201-1000", l: "201-1000" },
                { v: "1000+", l: "1000+" },
              ].map(o => (
                <Button key={o.v} variant={answers.size === o.v ? "default" : "outline"} onClick={() => setAnswers(a => ({ ...a, size: o.v }))}>{o.l}</Button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)} disabled={!answers.size} className="btn-primary">Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </TabsContent>

          <TabsContent value="step-3" className="space-y-4">
            <p className="text-sm text-muted-foreground">What’s your top priority?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { v: "cost-savings", l: "Cost Savings" },
                { v: "speed-scale", l: "Speed & Scale" },
                { v: "compliance-risk", l: "Compliance & Risk" },
              ].map(o => (
                <Button key={o.v} variant={answers.priority === o.v ? "default" : "outline"} onClick={() => setAnswers(a => ({ ...a, priority: o.v }))}>{o.l}</Button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
              <Button onClick={() => setStep(4)} disabled={!answers.priority} className="btn-primary">Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </TabsContent>

          <TabsContent value="step-4" className="space-y-4">
            <p className="text-sm text-muted-foreground">How would you like to deploy?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { v: "no-code", l: "No‑code" },
                { v: "api", l: "API" },
                { v: "integrations", l: "Integrations" },
              ].map(o => (
                <Button key={o.v} variant={answers.deployment === o.v ? "default" : "outline"} onClick={() => setAnswers(a => ({ ...a, deployment: o.v }))}>{o.l}</Button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 mr-1" /> No email required
              </div>
              <div className="space-x-2">
                <Button variant="ghost" onClick={() => setStep(3)}>Back</Button>
                <Button className="btn-primary" onClick={onFinish}>See Recommendation</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AgentFinderWizard;
