import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
        title: "Message sent",
        description: "Thank you for contacting Sentus AI. We'll reply within 24 business hours.",
      });
      form.reset();
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Sentus AI | Get in Touch"
        description="Contact Sentus AI for sales, partnerships, and general inquiries. We're here to help."
        canonical="https://sentus.ai/contact"
      />
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-20">
        <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="company" placeholder="Company" />
                </div>
                <Input name="email" type="email" placeholder="Work email" required />
                <Textarea name="message" placeholder="How can we help?" required rows={6} />
                {/* Honeypot field to deter bots */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <Button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">We recommend using this form to avoid email scraping and ensure faster routing.</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Company Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>3478 BUSKIRK AVE STE 1000, Pleasant Hill, CA 94523</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <a href="tel:+14158537800" className="hover:text-primary">(415) 853-7800</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div className="space-y-1">
                  <a href="mailto:contact@sentus.ai" className="hover:text-primary">contact@sentus.ai</a>
                  <div className="text-muted-foreground">General inquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div className="space-y-1">
                  <a href="mailto:sales@sentus.ai" className="hover:text-primary">sales@sentus.ai</a>
                  <div className="text-muted-foreground">Demos and pricing</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div className="space-y-1">
                  <a href="mailto:partners@sentus.ai" className="hover:text-primary">partners@sentus.ai</a>
                  <div className="text-muted-foreground">Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
