import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { 
  Check, Star, Zap, Shield, Clock, Users, 
  ArrowRight, HelpCircle, CheckCircle2 
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups looking to automate their first few processes.",
      price: isAnnual ? 199 : 249,
      originalPrice: isAnnual ? 249 : null,
      popular: false,
      features: [
        "Up to 5 active agents",
        "1,000 tasks per month",
        "Basic integrations",
        "Email support",
        "Standard security",
        "24/7 monitoring"
      ],
      limitations: [
        "No custom agents",
        "Limited reporting"
      ]
    },
    {
      name: "Professional",
      description: "Our most popular plan for growing businesses scaling their operations.",
      price: isAnnual ? 499 : 599,
      originalPrice: isAnnual ? 599 : null,
      popular: true,
      features: [
        "Up to 25 active agents",
        "10,000 tasks per month",
        "Advanced integrations",
        "Priority support",
        "Enterprise security",
        "Advanced analytics",
        "Custom workflows",
        "API access"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For large teams and enterprises requiring unlimited power and premium support.",
      price: isAnnual ? 1299 : 1599,
      originalPrice: isAnnual ? 1599 : null,
      popular: false,
      features: [
        "Unlimited agents",
        "Unlimited tasks",
        "All integrations",
        "24/7 phone support",
        "SOC2 compliance",
        "Custom agent development",
        "Dedicated success manager",
        "White-label options",
        "SLA guarantees"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "What counts as a task?",
      answer: "A task is any automated action performed by an agent, such as processing an invoice, sending an email, or updating a database record."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely. Our Enterprise plan includes custom agent development and dedicated support to meet your specific business needs."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to our Professional features. No credit card required."
    },
    {
      question: "What security measures do you have?",
      answer: "We use enterprise-grade encryption, SOC2 compliance, and follow strict data privacy protocols to keep your information secure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2">
              <Star className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold">
              <span className="text-gradient-advanced">Simple Pricing</span>
              <br />
              <span className="text-foreground">Maximum Value</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan to accelerate your business. 
              Start your 14-day free trial today—no credit card required.
            </p>

            {/* Annual Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <Badge className="bg-success/20 text-success border-success/30 ml-2">
                Save 20%
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative glass-card hover-lift ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground">
                        <span className="line-through">${plan.originalPrice}/month</span>
                        <span className="text-success ml-2">Save ${plan.originalPrice - plan.price}/month</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-heading font-bold">Compare Plans</h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="glass-card p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 font-semibold">Features</th>
                    <th className="text-center py-4 font-semibold">Starter</th>
                    <th className="text-center py-4 font-semibold">Professional</th>
                    <th className="text-center py-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Active Agents", "5", "25", "Unlimited"],
                    ["Monthly Tasks", "1,000", "10,000", "Unlimited"],
                    ["Integrations", "Basic", "Advanced", "All"],
                    ["Support", "Email", "Priority", "24/7 Phone"],
                    ["Custom Agents", "✗", "✓", "✓"],
                    ["API Access", "✗", "✓", "✓"],
                    ["SLA Guarantee", "✗", "✗", "✓"],
                    ["White Label", "✗", "✗", "✓"]
                  ].map(([feature, starter, pro, enterprise], index) => (
                    <tr key={index}>
                      <td className="py-4 font-medium">{feature}</td>
                      <td className="py-4 text-center text-sm">{starter}</td>
                      <td className="py-4 text-center text-sm">{pro}</td>
                      <td className="py-4 text-center text-sm">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-heading font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="glass-hero p-12 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with Sentus.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;