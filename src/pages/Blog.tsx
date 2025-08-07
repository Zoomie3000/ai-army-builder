import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Header } from "@/components/Header";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { blogPosts as allPosts, blogBaseUrl } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Bot, Zap,
  Brain, Target, Globe, Shield, Rocket, Users, BookOpen } from "lucide-react";
import { BlogImage } from "@/components/BlogImage";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import illFlatAiAgents from "@/assets/illustrations/flat-ai-agents.webp";
import illFlatAutomation from "@/assets/illustrations/flat-automation.webp";
import illFlatCaseStudies from "@/assets/illustrations/flat-case-studies.webp";
import illFlatIndustryInsights from "@/assets/illustrations/flat-industry-insights.webp";
import illFlatProductUpdates from "@/assets/illustrations/flat-product-updates.webp";
import illFlatThoughtLeadership from "@/assets/illustrations/flat-thought-leadership.webp";
import illFlatTutorials from "@/assets/illustrations/flat-tutorials.webp";
import illIsoAiAgents from "@/assets/illustrations/isometric-ai-agents.webp";
import illIsoAutomation from "@/assets/illustrations/isometric-automation.webp";
import illIsoCaseStudies from "@/assets/illustrations/isometric-case-studies.webp";
import illIsoIndustryInsights from "@/assets/illustrations/isometric-industry-insights.webp";
import illIsoProductUpdates from "@/assets/illustrations/isometric-product-updates.webp";
import illIsoThoughtLeadership from "@/assets/illustrations/isometric-thought-leadership.webp";
import illIsoTutorials from "@/assets/illustrations/isometric-tutorials.webp";
import illLineAiAgents from "@/assets/illustrations/line-ai-agents.webp";
import illLineAutomation from "@/assets/illustrations/line-automation.webp";
import illLineCaseStudies from "@/assets/illustrations/line-case-studies.webp";
import illLineIndustryInsights from "@/assets/illustrations/line-industry-insights.webp";
import illLineProductUpdates from "@/assets/illustrations/line-product-updates.webp";
import illLineThoughtLeadership from "@/assets/illustrations/line-thought-leadership.webp";
import illLineTutorials from "@/assets/illustrations/line-tutorials.webp";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  type ArtStyle = 'flat' | 'isometric' | 'line';
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStyle = (searchParams.get('style') as ArtStyle) || 'flat';
  const [artStyle, setArtStyle] = useState<ArtStyle>(initialStyle);

  const categories = [
    "All", "AI Agents", "Automation", "Case Studies", "Industry Insights", 
    "Product Updates", "Thought Leadership", "Tutorials"
  ];
  const blogPosts = useMemo(() => allPosts, []);

  const imageMapByStyle: Record<ArtStyle, Record<string, string>> = {
    flat: {
      "AI Agents": illFlatAiAgents,
      "Automation": illFlatAutomation,
      "Case Studies": illFlatCaseStudies,
      "Industry Insights": illFlatIndustryInsights,
      "Product Updates": illFlatProductUpdates,
      "Thought Leadership": illFlatThoughtLeadership,
      "Tutorials": illFlatTutorials,
    },
    isometric: {
      "AI Agents": illIsoAiAgents,
      "Automation": illIsoAutomation,
      "Case Studies": illIsoCaseStudies,
      "Industry Insights": illIsoIndustryInsights,
      "Product Updates": illIsoProductUpdates,
      "Thought Leadership": illIsoThoughtLeadership,
      "Tutorials": illIsoTutorials,
    },
    line: {
      "AI Agents": illLineAiAgents,
      "Automation": illLineAutomation,
      "Case Studies": illLineCaseStudies,
      "Industry Insights": illLineIndustryInsights,
      "Product Updates": illLineProductUpdates,
      "Thought Leadership": illLineThoughtLeadership,
      "Tutorials": illLineTutorials,
    },
  };
  const getPostImage = (category: string) => imageMapByStyle[artStyle][category] || imageMapByStyle[artStyle]["Thought Leadership"];

  const featuredPost = useMemo(() => blogPosts.find(p => p.featured) ?? blogPosts[0], [blogPosts]);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEO title="AI Agents Blog | Guides, Case Studies, 2025" description="Expert guides, tutorials, and case studies on AI agents, automation, and multi‑agent orchestration for enterprises and SMBs." canonical={`${blogBaseUrl}`} />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              AI Intelligence Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-advanced mb-6">
              AI Agents Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, strategies, and breakthroughs from the frontlines of AI automation. 
              Stay ahead of the curve with expert analysis and real-world case studies.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="glass-card p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-background/50 border-border/20"
                />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-background/50 border-border/20">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-5 flex items-center justify-center">
                <ToggleGroup
                  type="single"
                  value={artStyle}
                  onValueChange={(v) => {
                    if (v) {
                      setArtStyle(v as ArtStyle);
                      const sp = new URLSearchParams(searchParams);
                      sp.set('style', v);
                      setSearchParams(sp);
                    }
                  }}
                  className="bg-background/50 border border-border/20 rounded-full px-1 py-1"
                >
                  <ToggleGroupItem value="flat" className="px-4 py-2 rounded-full text-sm">A. Flat</ToggleGroupItem>
                  <ToggleGroupItem value="isometric" className="px-4 py-2 rounded-full text-sm">B. Isometric</ToggleGroupItem>
                  <ToggleGroupItem value="line" className="px-4 py-2 rounded-full text-sm">C. Line-art</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>
        <StructuredData type="ItemList" data={{ itemListElement: filteredPosts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${blogBaseUrl}/${p.slug}`, name: p.title })) }} />
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Editor's pick for this week</p>
          </div>
          
          <Card className="glass-hero hover-lift cursor-pointer mb-16">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-accent/10 text-accent">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground leading-tight mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.role}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="btn-primary w-full sm:w-auto">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <BlogImage
                  src={getPostImage(featuredPost.category)}
                  alt={`${featuredPost.category} article hero image for ${featuredPost.title}`}
                  className="rounded-2xl h-80 lg:h-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} articles found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              const pageSize = 9;
              const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
              const start = (page - 1) * pageSize;
              const posts = filteredPosts.slice(start, start + pageSize);
              return posts.map((post, index) => (
                <Card key={index} className="glass-card hover-lift cursor-pointer group">
                  <div className="relative">
                    <BlogImage
                      src={getPostImage(post.category)}
                      alt={`${post.category} article thumbnail for ${post.title}`}
                      className="rounded-t-lg h-48"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    {post.featured && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                          <User className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full btn-ghost group-hover:bg-primary/10">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ));
            })()}
          </div>

          {/* Pagination */}
          {(() => {
            const pageSize = 9;
            const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
            const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
            const goTo = (p: number) => {
              const sp = new URLSearchParams(searchParams);
              if (p <= 1) sp.delete('page'); else sp.set('page', String(p));
              setSearchParams(sp);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            if (totalPages <= 1) return null;
            const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
            return (
              <Pagination className="mt-10">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); if (page > 1) goTo(page - 1); }} />
                  </PaginationItem>
                  {pages.map((p) => (
                    <PaginationItem key={p}>
                      <PaginationLink href="#" isActive={p === page} onClick={(e) => { e.preventDefault(); goTo(p); }}>
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext href="#" onClick={(e) => { e.preventDefault(); if (page < totalPages) goTo(page + 1); }} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            );
          })()}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-hero max-w-3xl mx-auto p-12">
            <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-advanced mb-6">
              Stay Ahead of the AI Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly insights on AI automation, exclusive case studies, and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/50 border-border/20 flex-1"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 25,000+ AI leaders. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;