import type { LocationRecord } from "../types/location";

export const locations: LocationRecord[] = [
  {
    slug: "rosewood",
    name: "Rosewood",
    difficulty: "Easy",
    recommendedFor: "Beginners",
    security: "High",
    resources: "Medium-High",
    baseRating: 5,
    lootRating: 4,
    riskRating: 2,
    description:
      "Rosewood is a compact starting town with practical base options, clear road access and manageable early pressure.",
    overview:
      "Rosewood is one of the strongest base-focused starts in Project Zomboid because its important buildings are close together and the town is easier to read than larger urban areas. It gives new players room to learn supply routes, vehicle access and safehouse planning without immediately dealing with Louisville-level density.",
    keyLocations: [
      "Rosewood Fire Department",
      "Rosewood Police Station",
      "Residential neighborhoods",
      "Main road commercial strip",
    ],
    bestBases: [
      {
        rank: 1,
        name: "Rosewood Fire Station",
        safety: "High",
        resources: "High",
        difficulty: "Easy",
        recommendedFor: "Beginners",
        description:
          "A top Rosewood base candidate with strong defensive potential, useful utility space and quick access to town routes.",
      },
      {
        rank: 2,
        name: "Rosewood Police Station Area",
        safety: "Medium",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "New Players",
        description:
          "A practical fallback area for players who want nearby weapons access and a central route into town.",
      },
      {
        rank: 3,
        name: "Rosewood Residential Edge",
        safety: "Medium-High",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "Cautious Players",
        description:
          "A quieter base style built around houses near the edge of town, useful for slower looting and controlled movement.",
      },
    ],
    lootAndResources: [
      "Emergency-service buildings give Rosewood useful early-game targets.",
      "Residential blocks provide food, basic tools and storage opportunities.",
      "Road access makes short loot runs and vehicle recovery easier than in dense city areas.",
    ],
    survivalStrategy: [
      "Secure one building first, then expand routes instead of clearing the whole town at once.",
      "Use Rosewood's compact layout to repeat short supply runs and return before fatigue builds.",
      "Keep a vehicle route open so the base can support longer trips later.",
    ],
    pros: [
      "Beginner-friendly town layout",
      "Strong fire station base option",
      "Lower early pressure than dense urban zones",
      "Good for learning repeatable loot routes",
    ],
    cons: [
      "Less late-game loot depth than Louisville",
      "Can feel limited after the early phase",
      "Still requires noise control near town center",
    ],
    relatedGuides: [
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations",
        description: "Compare Rosewood with other base candidates.",
      },
      {
        title: "Interactive Map",
        href: "/maps/interactive-map",
        description: "Use the map hub for routes and future location filters.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking",
        description: "Compare Rosewood against harder map areas.",
      },
    ],
    seo: {
      title: "Rosewood Base Guide - Best Location in Project Zomboid",
      description:
        "Plan a Rosewood base in Project Zomboid with stats, best base spots, loot notes, survival strategy and related guides.",
    },
  },
  {
    slug: "louisville",
    name: "Louisville",
    difficulty: "Hard",
    recommendedFor: "Experienced Players",
    security: "Medium",
    resources: "High",
    baseRating: 4,
    lootRating: 5,
    riskRating: 5,
    description:
      "Louisville is a large urban area with excellent loot potential and much higher survival pressure.",
    overview:
      "Louisville is best treated as an advanced survival zone. It offers deep loot opportunities, but the density and travel risk make it harder to use as a relaxed early base location.",
    keyLocations: ["Downtown commercial blocks", "Grand Ohio Mall area", "Outer access roads"],
    bestBases: [
      {
        rank: 4,
        name: "Louisville Warehouse Base",
        safety: "Medium",
        resources: "High",
        difficulty: "Hard",
        recommendedFor: "Veteran Players",
        description:
          "A representative Louisville base style for players who can manage city pressure and longer supply routes.",
      },
    ],
    lootAndResources: [
      "Dense commercial areas can support strong loot runs.",
      "Urban routes require more planning, noise control and exits.",
      "Outer access roads are important for long-term movement.",
    ],
    survivalStrategy: [
      "Scout routes before committing to a base.",
      "Use vehicles carefully and keep backup exits open.",
      "Treat loot density as an advantage only if the escape route is clear.",
    ],
    pros: ["High loot ceiling", "Many urban opportunities", "Good for advanced players"],
    cons: ["High surrounding pressure", "Harder navigation", "Less forgiving for new players"],
    relatedGuides: [
      {
        title: "Interactive Map",
        href: "/maps/interactive-map",
        description: "Plan routes and future map filters.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking",
        description: "Compare Louisville against easier areas.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations",
        description: "Compare base candidates by safety and resources.",
      },
    ],
    seo: {
      title: "Louisville Map Guide",
      description:
        "Explore Louisville in Project Zomboid including difficulty, base potential, loot pressure and survival planning notes.",
    },
  },
];

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const baseLocationRankings = locations
  .flatMap((location) =>
    location.bestBases.map((base) => ({
      ...base,
      location: location.name,
      locationSlug: location.slug,
      guideLink: `/locations/${location.slug}`,
    })),
  )
  .sort((a, b) => a.rank - b.rank);
