export type RelatedGuide = {
  title: string;
  href: string;
  description?: string;
};

export type InfoCard = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BestBase = {
  name: string;
  rank: number;
  safety: string;
  resources: string;
  difficulty: string;
  recommendedFor: string;
  description: string;
};

export type LocationRecord = {
  slug: string;
  name: string;
  difficulty: string;
  recommendedFor: string;
  security: string;
  resources: string;
  baseRating: number;
  lootRating: number;
  riskRating: number;
  description: string;
  overview: string;
  whyChoose?: InfoCard[];
  keyLocations: string[];
  keyLocationsLabel?: string;
  keyLocationsHeading?: string;
  bestBases: BestBase[];
  lootAndResources: string[];
  survivalStrategy: string[];
  pros: string[];
  cons: string[];
  faqs?: FaqItem[];
  relatedGuides: RelatedGuide[];
  seo: {
    title: string;
    description: string;
  };
};
