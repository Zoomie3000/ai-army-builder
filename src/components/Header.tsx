import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { 
  Menu, Bot, BookOpen, Users, MessageSquare, Building2, 
  Rocket, Shield, Award, ChevronDown, Sparkles, HelpCircle 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const groups = {
    solutions: [
      { name: "Solutions Overview", href: "/solutions" },
      { name: "Agent Catalog", href: "/agents" },
    ],
    services: [
      { name: "Consulting", href: "/services/consulting" },
      { name: "Custom AI Agents", href: "/services/custom-agents" },
      { name: "Integrations", href: "/services/integrations" },
    ],
    industries: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Finance", href: "/industries/finance" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Real Estate", href: "/industries/real-estate" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Education", href: "/education" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
    ],
    support: [
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  } as const;

  const isGroupActive = (items: ReadonlyArray<{ href: string }>) =>
    items.some((i) => isActive(i.href) || location.pathname.startsWith(i.href + "/"));

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gradient-advanced">Sentus</span>
              <span className="text-xl font-bold text-foreground">.ai</span>
              <Badge variant="secondary" className="ml-2 text-xs">TITAN</Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.solutions)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {groups.solutions.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.services)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {groups.services.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.industries)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {groups.industries.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.resources)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2">
                      {groups.resources.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.company)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2">
                      {groups.company.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 ${
                    isGroupActive(groups.support)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}>
                    Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/40 shadow-lg rounded-lg p-4">
                    <div className="grid gap-2">
                      {groups.support.map((item) => (
                        <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-md hover:bg-muted/60">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive("/pricing")
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Sign In
            </Button>
            <Button size="sm" className="btn-primary">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 glass-morphism">
                <div className="flex flex-col space-y-6 mt-8">
                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Solutions</div>
                    {groups.solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Services</div>
                    {groups.services.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Industries</div>
                    {groups.industries.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Resources</div>
                    {groups.resources.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Company</div>
                    {groups.company.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <div className="px-4 text-xs uppercase tracking-wide text-muted-foreground mb-2">Support</div>
                    {groups.support.map((item) => (
                      <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50">
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>

                  <div>
                    <Link
                      to="/pricing"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive("/pricing")
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-medium">Pricing</span>
                    </Link>
                  </div>

                  <div className="pt-2 border-t border-border/20">
                    <div className="space-y-3">
                      <Button variant="ghost" className="w-full justify-start">
                        Sign In
                      </Button>
                      <Button className="w-full btn-primary">
                        Start Free Trial
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};