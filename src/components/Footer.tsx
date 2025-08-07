import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bot, Sparkles, Mail, MapPin, Phone, 
  Twitter, Linkedin, Github, Youtube,
  Shield, Award, Globe, Building2, 
  BookOpen, Users, Zap, HelpCircle
} from "lucide-react";

export const Footer = () => {
  const productLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Agent Catalog", href: "/agents" },
    { name: "Security", href: "/security" },
    { name: "Integrations", href: "/integrations" },
    { name: "API Documentation", href: "/docs" }
  ];

  const solutionsLinks = [
    { name: "By Role", href: "/solutions#roles" },
    { name: "By Industry", href: "/solutions#industries" },
    { name: "Finance Teams", href: "/solutions/finance" },
    { name: "Operations", href: "/solutions/operations" },
    { name: "Customer Support", href: "/solutions/support" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Partners", href: "/partners" }
  ];

  const resourcesLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
    { name: "System Requirements", href: "/requirements" },
    { name: "Changelog", href: "/changelog" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance", href: "/compliance" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="glass-hero p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl font-heading font-bold">Stay Ahead of the AI Revolution</h3>
              <p className="text-muted-foreground">
                Get weekly insights on AI automation, new agent releases, and productivity tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-primary px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Join 50,000+ subscribers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-advanced">Sentus</span>
                <span className="text-xl font-bold text-foreground">.ai</span>
                <Badge variant="secondary" className="ml-2 text-xs">CATALYST</Badge>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses worldwide with intelligent AI automation. 
              Transform your operations, free your team, and accelerate growth 
              with our catalog of 722+ specialized AI agents.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA & New York, NY</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@sentus.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-xs py-1">
                <Shield className="h-3 w-3 mr-1" />
                SOC2 Type II
              </Badge>
              <Badge variant="outline" className="text-xs py-1">
                <Globe className="h-3 w-3 mr-1" />
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="text-xs py-1">
                <Award className="h-3 w-3 mr-1" />
                ISO 27001
              </Badge>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator />
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Sentus.ai. All rights reserved. Made with ❤️ for the future of work.
          </div>
          
          <div className="flex items-center space-x-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};