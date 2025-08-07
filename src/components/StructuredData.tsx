import { useMemo } from "react";

interface StructuredDataProps<T = Record<string, any>> {
  type: string; // e.g., "Organization", "Product"
  data: T;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }), [type, data]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
