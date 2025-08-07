import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { AuthorBio } from "@/components/AuthorBio";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import imgAgents from "@/assets/blog-ai-agents.jpg";
import imgAutomation from "@/assets/blog-automation.jpg";
import imgCaseStudies from "@/assets/blog-case-studies.jpg";
import imgIndustryInsights from "@/assets/blog-industry-insights.jpg";
import imgProductUpdates from "@/assets/blog-product-updates.jpg";
import imgTutorials from "@/assets/blog-tutorials.jpg";
import imgThoughtLeadership from "@/assets/blog-thought-leadership.jpg";
import { BlogImage } from "@/components/BlogImage";

const origin = typeof window !== "undefined" ? window.location.origin : "https://sentus.ai";

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const post = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-block">
            <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2"/>Back to Blog</Button>
          </Link>
        </main>
      </div>
    );
  }

  const canonical = `${origin}/blog/${post.slug}`;

  const categoryImageMap: Record<string, string> = {
    "AI Agents": imgAgents,
    "Automation": imgAutomation,
    "Case Studies": imgCaseStudies,
    "Industry Insights": imgIndustryInsights,
    "Product Updates": imgProductUpdates,
    "Thought Leadership": imgThoughtLeadership,
    "Tutorials": imgTutorials,
  };
  const getPostImage = (category: string) => categoryImageMap[category] || imgThoughtLeadership;
  const hero = post.heroImage || getPostImage(post.category);

  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return setProgress(0);
      const top = el.offsetTop;
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(window.scrollY - (top - 80), 0), Math.max(total, 0));
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  const articleLd = {
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Sentus.ai" },
    mainEntityOfPage: canonical,
    keywords: post.tags.join(", "),
    image: hero,
    url: canonical,
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url: canonical }).catch(() => {});
    } else {
      navigator.clipboard.writeText(canonical).catch(() => {});
    }
  };

  // derive blocks, headings, and TOC from raw content
  const paragraphs = useMemo(() => post.content.split(/\n\n+/g), [post.content]);
  type Block = { type: 'heading' | 'p'; text: string; id?: string };
  const blocks: Block[] = useMemo(() => {
    return paragraphs.map((raw) => {
      const t = raw.trim();
      const isHeading = t.length > 0 && t.length <= 60 && /^[A-Za-z][A-Za-z0-9 \-&+’'()]+$/.test(t) && !t.includes(":") && !t.startsWith("-");
      if (isHeading) {
        const id = t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return { type: 'heading', text: t, id };
      }
      return { type: 'p', text: raw };
    });
  }, [paragraphs]);
  const toc = useMemo(() => blocks.filter((b) => b.type === 'heading') as Array<Required<Block>>, [blocks]);

  const relatedPosts = useMemo(() => {
    return blogPosts
      .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
      .slice(0, 3);
  }, [post]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed top-0 left-0 right-0 z-40 h-1.5 bg-primary/10">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <SEO title={`${post.title} | Sentus.ai Blog`} description={post.description} canonical={canonical} image={hero} type="article" />
      <StructuredData type="BlogPosting" data={articleLd} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <article ref={articleRef} className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Badge variant="secondary" className="text-xs">{post.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

          <figure className="mb-10">
            <BlogImage
              src={hero}
              alt={`${post.category} hero image for ${post.title}`}
              className="rounded-2xl"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
            <figcaption className="sr-only">Illustrative image for the article {post.title}</figcaption>
          </figure>

          <div className="flex items-center justify-between mb-10 text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <p>{post.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.date).toLocaleDateString()}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</div>
              <Button variant="ghost" size="sm" onClick={share}><Share2 className="w-4 h-4 mr-2"/>Share</Button>
            </div>
          </div>

          <AuthorBio name={post.author} role={post.role} />

          <nav aria-label="Table of contents" className="mb-10 p-4 rounded-lg bg-muted/30 border border-border/20">
            <p className="text-sm font-medium mb-3">On this page</p>
            <ul className="flex flex-wrap gap-3">
              {toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose prose-invert max-w-none">
            {blocks.map((b, i) => (
              b.type === 'heading' ? (
                <h2 key={b.id} id={b.id} className="text-2xl font-semibold text-foreground mt-10 mb-4 scroll-mt-24">{b.text}</h2>
              ) : (
                <p key={i}>{b.text}</p>
              )
            ))}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">FAQ</h2>
              <div className="space-y-4">
                {post.faq.map((f, i) => (
                  <div key={i}>
                    <p className="font-medium text-foreground">Q: {f.q}</p>
                    <p className="text-muted-foreground">A: {f.a}</p>
                  </div>
                ))}
              </div>
              <StructuredData
                type="FAQPage"
                data={{
                  mainEntity: post.faq.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }}
              />
            </section>
          )}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group">
                  <div className="rounded-xl overflow-hidden glass-card">
                    <BlogImage
                      src={getPostImage(rp.category)}
                      alt={`${rp.category} related article thumbnail for ${rp.title}`}
                      className="h-32"
                      sizes="(min-width: 1024px) 256px, 100vw"
                    />
                    <div className="p-4">
                      <Badge variant="secondary" className="text-[10px] mb-2">{rp.category}</Badge>
                      <p className="font-medium group-hover:text-primary transition-colors line-clamp-2">{rp.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <hr className="my-10 border-border/20" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/blog">
              <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2"/>Back to Blog</Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-primary">Talk to an AI advisor</Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
