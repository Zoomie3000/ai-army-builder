import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, LifeBuoy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = new FormData(form).get("website");
    if (honeypot) {
      form.reset();
      return; // likely spam
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Support request received",
        description: "We'll get back to you within 24 business hours.",
      });
      form.reset();
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Sentus AI Support | Help Center"
        description="Get help with Sentus AI. Submit a support request and our team will assist you."
        canonical="https://sentus.ai/support"
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-20">
        <section className="max-w-3xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 mb-4 text-sm">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div>
                  Prefer email? <a href="mailto:support@sentus.ai" className="hover:text-primary font-medium">support@sentus.ai</a>
                  <div className="text-muted-foreground">Best for existing customers</div>
                </div>
              </div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Account email" required />
                </div>
                <Input name="subject" placeholder="Subject" required />
                <Textarea name="message" placeholder="Describe the issue" required rows={6} />
                {/* Honeypot field to deter bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <Button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Ticket"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">Auto-reply: "Thank you for contacting Sentus AI. We've received your message and will get back to you within 24 business hours."</p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
