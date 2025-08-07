import React, { useState } from "react";
import clsx from "clsx";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
}

// Polished blog image with soft mask, duotone overlay, LQIP blur and smooth reveal
export const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption, className, sizes = "100vw" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={clsx("relative image-shell image-soft-mask", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={clsx(
          "w-full h-full object-cover transition-all duration-700",
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-60 blur-sm scale-[1.02]"
        )}
      />
      <div aria-hidden className="image-overlay-duotone" />
      {caption && (
        <figcaption className="sr-only">{caption}</figcaption>
      )}
    </figure>
  );
};
