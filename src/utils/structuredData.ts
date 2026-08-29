export type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbInput = {
  pathname: string;
  title: string;
  siteUrl: string;
};

type ArticleInput = {
  title: string;
  description: string;
  url: string;
  image: string;
  siteName: string;
};

const labelOverrides: Record<string, string> = {
  build: "Build",
  "build-42": "Build 42",
  guides: "Guides",
  locations: "Locations",
  maps: "Maps",
  survival: "Survival",
};

const formatSegmentLabel = (segment: string) =>
  labelOverrides[segment] ??
  decodeURIComponent(segment)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const serializeJsonLd = (schema: Record<string, unknown>) =>
  JSON.stringify(schema).replace(/</g, "\\u003c");

export const buildBreadcrumbSchema = ({ pathname, title, siteUrl }: BreadcrumbInput) => {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: new URL("/", siteUrl).toString(),
    },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;

      return {
        "@type": "ListItem",
        position: index + 2,
        name: isLast ? title : formatSegmentLabel(segment),
        item: new URL(path, siteUrl).toString(),
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
};

export const buildArticleSchema = ({ title, description, url, image, siteName }: ArticleInput) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  author: {
    "@type": "Organization",
    name: siteName,
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
  },
  inLanguage: "en",
});

export const buildFaqSchema = (faqs: FaqItem[] = []) => {
  if (faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};
