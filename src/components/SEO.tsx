import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string; // e.g., article, website
}

// Lightweight SEO helper without external deps
export const SEO = ({ title, description, canonical, image, type = "article" }: SEOProps) => {
  useEffect(() => {
    if (title) document.title = title;

    const upsertMeta = (selector: string, attr: "name" | "property", attrValue: string, content: string) => {
      let el = document.querySelector(`${selector}[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      upsertMeta('meta', 'name', 'description', description);
      upsertMeta('meta', 'property', 'og:description', description);
      upsertMeta('meta', 'name', 'twitter:description', description);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
      upsertMeta('meta', 'property', 'og:url', canonical);
    }

    if (title) {
      upsertMeta('meta', 'property', 'og:title', title);
      upsertMeta('meta', 'name', 'twitter:title', title);
    }

    upsertMeta('meta', 'property', 'og:type', type);
    upsertMeta('meta', 'name', 'twitter:card', image ? 'summary_large_image' : 'summary');

    if (image) {
      upsertMeta('meta', 'property', 'og:image', image);
      upsertMeta('meta', 'name', 'twitter:image', image);
    }
  }, [title, description, canonical, image, type]);

  return null;
};
