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
        href: "/guides/best-base-locations/",
        description: "Compare Rosewood with other base candidates.",
      },
      {
        title: "Interactive Map",
        href: "/maps/interactive-map",
        description: "Use the map hub for routes and future location filters.",
      },
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Rosewood with other Build 42 map planning areas.",
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
    slug: "riverside",
    name: "Riverside",
    difficulty: "Easy",
    recommendedFor: "Beginners",
    security: "Medium-High",
    resources: "Medium",
    baseRating: 4,
    lootRating: 3,
    riskRating: 2,
    description:
      "Riverside is a calmer town option with useful early routes and steady long-term survival potential.",
    overview:
      "Riverside works well for players who want a slower start, safer movement and a town layout that supports cautious looting. It is less intense than Louisville and gives players time to build reliable habits.",
    keyLocations: ["Residential areas", "Commercial strip", "River access roads"],
    bestBases: [
      {
        rank: 5,
        name: "Riverside Residential Base",
        safety: "Medium-High",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "Beginners",
        description:
          "A simple base style built around quieter houses and repeatable local supply runs.",
      },
    ],
    lootAndResources: [
      "Residential routes can support steady early supplies.",
      "Commercial buildings provide useful targets without full city pressure.",
      "Road access helps with cautious movement and vehicle recovery.",
    ],
    survivalStrategy: [
      "Use the calmer town pace to establish storage and routine supply routes.",
      "Avoid overextending before a vehicle route is secured.",
      "Treat Riverside as a stable base area before longer travel.",
    ],
    pros: ["Calmer early-game pressure", "Readable town layout", "Good for cautious survival"],
    cons: ["Less high-value loot density", "Can require travel for advanced supplies"],
    relatedGuides: [
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
        description: "Compare Riverside with other base candidates.",
      },
      {
        title: "Interactive Map",
        href: "/maps/interactive-map",
        description: "Use the map hub for future route planning.",
      },
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Riverside with other Build 42 map planning areas.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking",
        description: "Compare Riverside with other map areas.",
      },
    ],
    seo: {
      title: "Riverside Map Guide",
      description:
        "Explore Riverside in Project Zomboid including difficulty, base potential, resources and survival planning notes.",
    },
  },
  {
    slug: "west-point",
    name: "West Point",
    difficulty: "Hard",
    recommendedFor: "Experienced Players",
    security: "Medium",
    resources: "High",
    baseRating: 3,
    lootRating: 5,
    riskRating: 4,
    description:
      "West Point is a high-pressure Project Zomboid town with strong loot potential, risky streets and demanding base planning.",
    overview:
      "West Point is one of the more punishing town starts because useful buildings sit close to dangerous movement routes. It rewards players who can scout carefully, retreat early and connect loot runs to a secure base plan.",
    whyChoose: [
      {
        title: "High Loot Potential",
        description:
          "West Point can support strong loot runs for players who can manage pressure and avoid staying exposed too long.",
      },
      {
        title: "Route Discipline Test",
        description:
          "The town teaches careful movement because successful runs depend on entry points, exits and short recovery windows.",
      },
      {
        title: "Advanced Base Challenge",
        description:
          "West Point is useful for players who want a tougher base location than Rosewood or Riverside.",
      },
    ],
    keyLocationsLabel: "Key Buildings",
    keyLocationsHeading: "Buildings to check",
    keyLocations: [
      "West Point Police Station",
      "Downtown commercial blocks",
      "School area",
      "River access buildings",
      "Gas station routes",
    ],
    bestBases: [
      {
        rank: 6,
        name: "West Point Residential Edge",
        safety: "Medium",
        resources: "Medium-High",
        difficulty: "Hard",
        recommendedFor: "Experienced Players",
        description:
          "A safer West Point base style that avoids committing too deeply to the busiest parts of town.",
      },
      {
        rank: 7,
        name: "West Point River Access Base",
        safety: "Medium",
        resources: "Medium",
        difficulty: "Hard",
        recommendedFor: "Route Planners",
        description:
          "A route-focused base option for players who want access to town while keeping escape planning central.",
      },
    ],
    lootAndResources: [
      "Commercial buildings can provide strong supplies, but routes need careful timing and exits.",
      "The police station is a useful weapons-related target when the surrounding streets are manageable.",
      "Residential areas help recover food, tools and basic supplies between higher-risk town runs.",
    ],
    survivalStrategy: [
      "Scout one route at a time and retreat before fatigue turns a good run into a bad fight.",
      "Base near the edge of town first, then expand toward higher-value buildings after pressure is controlled.",
      "Use vehicles carefully because blocked streets and noise can make West Point routes collapse quickly.",
    ],
    pros: [
      "Strong loot potential for experienced players",
      "Good challenge for players who understand route planning",
      "Useful connection point for Louisville-oriented progression",
      "More intense than beginner towns without becoming a full city plan",
    ],
    cons: [
      "Less forgiving than Rosewood or Riverside",
      "Risky streets can punish overextension",
      "Base setup requires more scouting and escape planning",
      "Not ideal for players still learning core survival habits",
    ],
    faqs: [
      {
        question: "Is West Point good for beginners in Project Zomboid?",
        answer:
          "West Point is usually harder than Rosewood or Riverside. Beginners can play it, but it is more forgiving after learning basic route and base planning.",
      },
      {
        question: "Is West Point a good base location?",
        answer:
          "West Point can be a good base challenge for experienced players, especially near safer edges of town, but it requires stronger pressure management.",
      },
      {
        question: "What makes the West Point map difficult?",
        answer:
          "West Point combines valuable loot with risky movement routes, so players need clear exits, short supply runs and a stable base plan.",
      },
    ],
    relatedGuides: [
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare West Point with other map areas and route choices.",
      },
      {
        title: "Best Starting Location",
        href: "/guides/best-starting-location",
        description: "See whether West Point fits your next starting plan.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
        description: "Compare West Point base options with safer candidates.",
      },
      {
        title: "Best Loot Locations",
        href: "/guides/best-loot-locations",
        description: "Plan West Point loot routes by risk and reward.",
      },
      {
        title: "Louisville Location Guide",
        href: "/locations/louisville",
        description: "Compare West Point pressure with Louisville city survival.",
      },
    ],
    seo: {
      title: "West Point Project Zomboid Map and Base Guide",
      description:
        "Explore West Point in Project Zomboid with map planning, base options, key buildings, loot notes, survival strategy and related guides.",
    },
  },
  {
    slug: "muldraugh",
    name: "Muldraugh",
    difficulty: "Medium",
    recommendedFor: "Intermediate Players",
    security: "Medium",
    resources: "Medium-High",
    baseRating: 4,
    lootRating: 4,
    riskRating: 3,
    description:
      "Muldraugh is a long Project Zomboid town with useful loot routes, practical base options and more route pressure than beginner areas.",
    overview:
      "Muldraugh is shaped by its long road layout, which makes route planning more important than in compact towns. It can work well for players who understand short supply runs, controlled retreats and base choices that avoid staying exposed on busy roads.",
    whyChoose: [
      {
        title: "Strong Route Training",
        description:
          "Muldraugh rewards players who can plan along a long town layout and avoid pushing too far in one trip.",
      },
      {
        title: "Useful Loot Spread",
        description:
          "The town offers practical access to tools, food, supplies and storage-focused targets without requiring a full city plan.",
      },
      {
        title: "Flexible Base Options",
        description:
          "Muldraugh can support edge-of-town bases, warehouse-style planning and safer staging routes for longer survival.",
      },
    ],
    keyLocationsLabel: "Key Buildings",
    keyLocationsHeading: "Buildings to check",
    keyLocations: [
      "Muldraugh Police Station",
      "Warehouse and storage areas",
      "Highway commercial strip",
      "Residential neighborhoods",
      "Gas station routes",
    ],
    bestBases: [
      {
        rank: 8,
        name: "Muldraugh Warehouse Base",
        safety: "Medium",
        resources: "High",
        difficulty: "Medium",
        recommendedFor: "Intermediate Players",
        description:
          "A practical base style for players who want storage, tools and supply movement while managing Muldraugh's road pressure.",
      },
      {
        rank: 9,
        name: "Muldraugh Residential Edge",
        safety: "Medium-High",
        resources: "Medium",
        difficulty: "Medium",
        recommendedFor: "Cautious Players",
        description:
          "A safer Muldraugh base approach built around quieter housing and shorter recovery routes.",
      },
    ],
    lootAndResources: [
      "Warehouse and storage areas are useful for tools, materials and base setup supplies.",
      "Residential routes can provide food and basic gear while keeping trips shorter and easier to recover.",
      "Commercial buildings along the main road are valuable, but they should be approached with clear exits.",
    ],
    survivalStrategy: [
      "Avoid treating the whole town as one route; split Muldraugh into smaller sections and return often.",
      "Choose a base near safer edges before pushing into more exposed commercial or road-heavy areas.",
      "Keep a vehicle route open because the long town shape can make retreat slow when pressure builds.",
    ],
    pros: [
      "Good balance of loot, base options and survival challenge",
      "Useful for learning route control beyond beginner towns",
      "Warehouse-style targets support tools and base development",
      "Can connect naturally to wider map travel once a vehicle is secured",
    ],
    cons: [
      "Long road layout can punish overextension",
      "Less forgiving than Rosewood or Riverside",
      "Main-road looting can become risky without clear exits",
      "Base choice matters more because travel time can build pressure",
    ],
    faqs: [
      {
        question: "Is Muldraugh good in Project Zomboid?",
        answer:
          "Muldraugh is a strong intermediate location. It offers useful loot and base options, but its long layout makes route planning more important.",
      },
      {
        question: "Is Muldraugh a good base location?",
        answer:
          "Yes, Muldraugh can support good base locations, especially around warehouse or residential edge areas where supply routes are easier to control.",
      },
      {
        question: "Is Muldraugh harder than Rosewood?",
        answer:
          "Muldraugh is generally less forgiving than Rosewood because its road layout and longer routes make overextension easier.",
      },
    ],
    relatedGuides: [
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Muldraugh with other towns and route choices.",
      },
      {
        title: "Best Starting Location",
        href: "/guides/best-starting-location",
        description: "See how Muldraugh fits into starting location planning.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
        description: "Compare Muldraugh base options with safer long-term bases.",
      },
      {
        title: "Best Loot Locations",
        href: "/guides/best-loot-locations",
        description: "Plan Muldraugh loot routes by supply value and risk.",
      },
      {
        title: "Rosewood Location Guide",
        href: "/locations/rosewood",
        description: "Compare Muldraugh with a more beginner-friendly town.",
      },
      {
        title: "West Point Location Guide",
        href: "/locations/west-point",
        description: "Compare Muldraugh with a harder route-control challenge.",
      },
      {
        title: "Louisville Location Guide",
        href: "/locations/louisville",
        description: "Compare Muldraugh with a much higher-pressure city destination.",
      },
    ],
    seo: {
      title: "Muldraugh Project Zomboid Map and Base Guide",
      description:
        "Explore Muldraugh in Project Zomboid with map planning, base locations, key buildings, loot routes, survival strategy and related guides.",
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
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Louisville with other Build 42 map planning areas.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking",
        description: "Compare Louisville against easier areas.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
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
