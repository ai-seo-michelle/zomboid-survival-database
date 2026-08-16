export type RelatedGuide = {
  title: string;
  href: string;
};

export type LocationRecord = {
  slug: string;
  name: string;
  difficulty: string;
  recommendedFor: string;
  baseRating: number;
  lootRating: number;
  riskRating: number;
  description: string;
  keyLocations: string[];
  relatedGuides: RelatedGuide[];
};

