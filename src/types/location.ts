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
  introduction?: string;
  overview: string;
  mapOverview?: string;
  build42Notes?: string[];
  whyChoose?: InfoCard[];
  keyLocations: string[];
  keyLocationsLabel?: string;
  keyLocationsHeading?: string;
  pointsOfInterest?: RelatedGuide[];
  bestBases: BestBase[];
  basePlanning?: string[];
  lootAndResources: string[];
  routePlanning?: string[];
  beginnerSuitability?: string[];
  survivalStrategy: string[];
  pros: string[];
  cons: string[];
  faqs?: FaqItem[];
  relatedGuides: RelatedGuide[];
  seo: {
    title: string;
    description: string;
    h1?: string;
  };
};
