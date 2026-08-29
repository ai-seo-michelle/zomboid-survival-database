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
      "Use this Project Zomboid Rosewood map guide to plan routes, key locations, loot stops, base options and survival decisions in Build 42.",
    introduction:
      "Rosewood is the town-level hub for planning a safer Project Zomboid run. This page focuses on map-level decisions: where to start, which POIs matter, how to link short routes and when to open the focused Fire Station or Police Station guides.",
    overview:
      "Rosewood is a compact starting town in Project Zomboid with practical base options, clear road access and manageable early pressure.",
    mapOverview:
      "The Rosewood map works best as a short-route planning area. Its residential blocks, emergency-service buildings and road exits sit close enough together that players can plan one objective at a time instead of crossing a large city for every supply run.",
    build42Notes: [
      "Build 42 planning should be treated as current-build planning. Use Rosewood's known town structure as a starting point, but verify exact building layouts and route pressure in your current save.",
      "Official Build 42 notes include updates to existing map areas, including Rosewood, so older habits should be checked against the current build before committing to a base or loot loop.",
      "This is not a full interactive Rosewood map. It is a planning hub for routes, POIs and survival decisions without claiming exact coordinates or exhaustive building data.",
    ],
    keyLocations: [
      "Rosewood Fire Station",
      "Rosewood Police Station",
      "Residential neighborhoods",
      "Main road commercial strip",
    ],
    keyLocationsLabel: "Key Areas / POIs",
    keyLocationsHeading: "Rosewood areas to compare",
    pointsOfInterest: [
      {
        title: "Rosewood Fire Station",
        href: "/locations/rosewood-fire-station/",
        description:
          "Open the Fire Station guide when the route plan turns into a base decision or defensive setup.",
      },
      {
        title: "Rosewood Police Station",
        href: "/locations/rosewood-police-station/",
        description:
          "Use the Police Station guide for weapon-access planning and a focused Rosewood POI route.",
      },
      {
        title: "Fire Station Loot Guide",
        href: "/locations/rosewood-fire-station-loot/",
        description:
          "Check the loot-focused page when you need firefighter gear, utility supplies and a short station route.",
      },
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
          "A top Rosewood base candidate because it connects practical building utility with short town routes.",
      },
      {
        rank: 2,
        name: "Rosewood Police Station Area",
        safety: "Medium",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "New Players",
        description:
          "A focused POI area for weapon access and route control, usually better as a stop than the whole long-term plan.",
      },
      {
        rank: 3,
        name: "Rosewood Residential Edge",
        safety: "Medium-High",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "Cautious Players",
        description:
          "A quieter edge-of-town approach for slower looting, controlled movement and lower early pressure.",
      },
    ],
    basePlanning: [
      "Treat Rosewood bases as part of the town map, not as isolated buildings. A strong base still needs repeatable routes, nearby supplies and a clear way out.",
      "The Fire Station deserves its own base guide, while this hub keeps the broader Rosewood base decision connected to map movement and town pressure.",
    ],
    lootAndResources: [
      "Emergency-service POIs give Rosewood useful early loot targets without forcing a long city route.",
      "Residential blocks provide food, basic tools and storage opportunities for safer recovery runs.",
      "Rosewood loot planning works best when each stop has an exit path back to the base or vehicle route.",
    ],
    routePlanning: [
      "Plan Rosewood routes around short loops: scout, enter one area, collect priority supplies and return before fatigue builds.",
      "Use the main road and residential edges as planning references instead of trying to clear the entire town at once.",
      "Keep vehicle access in mind early so Rosewood can become a staging point for Muldraugh, West Point or Louisville later.",
    ],
    beginnerSuitability: [
      "Rosewood is beginner-friendly because the town is easier to read than dense urban areas.",
      "New players can learn a repeatable loop: pick a safehouse, check one POI, return, sort supplies and expand slowly.",
      "The main risk is overconfidence. Rosewood is safer than many areas, but noise, fatigue and poor exits still turn simple runs dangerous.",
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
    faqs: [
      {
        question: "Is Rosewood a good map for beginners in Project Zomboid?",
        answer:
          "Yes. Rosewood is one of the easier towns to read because routes are shorter and important POIs are easier to connect than in larger city areas.",
      },
      {
        question: "Is this a full interactive Rosewood map?",
        answer:
          "No. This is a static Rosewood map planning guide for routes, POIs, bases and loot decisions. It does not provide exact coordinates or a full interactive map tool.",
      },
      {
        question: "Where should I go first in Rosewood?",
        answer:
          "Start with a safe building and nearby residential supplies, then plan controlled trips toward the Fire Station or Police Station once the route is manageable.",
      },
      {
        question: "Is Rosewood Fire Station covered on this page?",
        answer:
          "This page explains how the Fire Station fits into the Rosewood map. Use the dedicated Fire Station guide for the full base-focused breakdown.",
      },
      {
        question: "How should I use Rosewood in Build 42?",
        answer:
          "Use Rosewood as a current-build planning area: check routes in your save, avoid relying on old exact layouts and keep each loot or base decision recoverable.",
      },
    ],
    relatedGuides: [
      {
        title: "Rosewood Fire Station",
        href: "/locations/rosewood-fire-station/",
        description: "Open the focused Fire Station base and POI guide.",
      },
      {
        title: "Rosewood Police Station",
        href: "/locations/rosewood-police-station/",
        description: "Plan weapon access and a controlled Police Station route.",
      },
      {
        title: "Fire Station Loot Guide",
        href: "/locations/rosewood-fire-station-loot/",
        description: "Review Rosewood Fire Station loot categories and route notes.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
        description: "Compare Rosewood base options with the wider base ranking.",
      },
      {
        title: "Best Loot Locations",
        href: "/guides/best-loot-locations/",
        description: "Compare Rosewood loot planning with other high-value routes.",
      },
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Rosewood with other Build 42 map planning areas.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking/",
        description: "Compare Rosewood against harder map areas.",
      },
      {
        title: "Best Starting Location",
        href: "/guides/best-starting-location/",
        description: "See why Rosewood remains a practical first-town candidate.",
      },
    ],
    seo: {
      title: "Project Zomboid Rosewood Map Guide | Build 42",
      description:
        "Use this Project Zomboid Rosewood map guide to plan routes, key locations, loot stops, base options and survival decisions in Build 42.",
      h1: "Project Zomboid Rosewood Map Guide",
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
      "Use this Project Zomboid Riverside map guide to plan routes, key locations, loot stops, base options and survival decisions in Build 42.",
    introduction:
      "Riverside is the calmer town-level hub for players who want a slower Project Zomboid route plan. This page focuses on map-level decisions: how to use residential areas, commercial routes, river access roads and base options without turning Riverside into a single-purpose base or loot page.",
    overview:
      "Riverside is a calmer Project Zomboid town option with useful early routes and steady long-term survival potential.",
    mapOverview:
      "The Riverside map is best understood as a cautious survival area. Its value comes from slower route expansion, readable town movement and the ability to build repeatable supply loops before committing to longer travel.",
    build42Notes: [
      "Use Riverside as a current-build planning area in Build 42. Exact route pressure and building details should be checked in your own save instead of assumed from older habits.",
      "Build 42 planning makes town comparison more important, so Riverside should be evaluated against Rosewood, Muldraugh, West Point and Louisville before choosing a route.",
      "This is not a full interactive Riverside map. It is a static planning hub for routes, key areas, base choices and loot decisions.",
    ],
    keyLocations: [
      "Residential neighborhoods",
      "Commercial routes",
      "River access roads",
      "Edge roads and vehicle routes",
    ],
    keyLocationsLabel: "Key Areas / POIs",
    keyLocationsHeading: "Riverside areas to compare",
    pointsOfInterest: [
      {
        title: "Residential Neighborhoods",
        description:
          "Use residential areas for safer early supplies, storage decisions and slower expansion when the run needs stability.",
      },
      {
        title: "Commercial Routes",
        description:
          "Treat commercial buildings as planned stops inside a route, not as a reason to overextend before the return path is clear.",
      },
      {
        title: "River Access Roads",
        description:
          "Use Riverside's access roads as planning references for vehicle movement, exits and longer travel later in the run.",
      },
    ],
    bestBases: [
      {
        rank: 5,
        name: "Riverside Residential Base",
        safety: "Medium-High",
        resources: "Medium",
        difficulty: "Easy",
        recommendedFor: "Beginners",
        description:
          "A stable base style built around quieter housing, repeatable local supply runs and controlled route growth.",
      },
    ],
    basePlanning: [
      "Riverside base planning should start with route stability. A quieter building is useful only if food, tools and exits can be reached without long risky trips.",
      "Residential-style bases fit Riverside well because the town supports slower recovery loops and cautious expansion.",
    ],
    lootAndResources: [
      "Residential routes can support steady early food, containers and basic household supplies.",
      "Commercial routes provide useful loot targets without forcing the same pressure as larger city areas.",
      "Riverside loot planning works best when each stop is connected to a safe return path and a manageable carry load.",
    ],
    routePlanning: [
      "Plan Riverside around calm, repeatable loops instead of one long sweep across town.",
      "Use road access to keep vehicle recovery and future travel options open before pushing into harder areas.",
      "Treat Riverside as a staging town when the run needs time to organize supplies before longer map movement.",
    ],
    beginnerSuitability: [
      "Riverside is beginner-friendly because it gives players more room to slow down and recover between supply runs.",
      "New players can use Riverside to practice route discipline, storage habits and vehicle planning without starting in a dense urban zone.",
      "The main drawback is lower immediate pressure can hide weak planning habits, so every route still needs an exit and a return point.",
    ],
    survivalStrategy: [
      "Use the calmer town pace to establish storage and routine supply routes.",
      "Avoid overextending before a vehicle route is secured.",
      "Treat Riverside as a stable base area before longer travel.",
    ],
    pros: [
      "Calmer early-game pressure",
      "Readable town layout for cautious players",
      "Good for learning repeatable routes",
      "Useful residential base planning",
    ],
    cons: [
      "Less high-value loot density than harder areas",
      "Can require travel for advanced supplies",
      "Slower pace may delay broader map progression",
    ],
    faqs: [
      {
        question: "Is Riverside a good map for beginners in Project Zomboid?",
        answer:
          "Yes. Riverside is a good beginner-friendly map area because it supports slower routes, calmer movement and steady supply planning.",
      },
      {
        question: "Is this a full interactive Riverside map?",
        answer:
          "No. This is a static Riverside map planning guide for routes, key areas, base options and loot decisions. It does not provide a full interactive map tool.",
      },
      {
        question: "Is Riverside good for base building?",
        answer:
          "Riverside can be good for base planning, especially when you want safer residential routes and time to organize supplies before wider travel.",
      },
      {
        question: "Where should I loot first in Riverside?",
        answer:
          "Start with nearby residential supplies, then move into commercial routes only when the return path and carry load are manageable.",
      },
      {
        question: "How should I use Riverside in Build 42?",
        answer:
          "Use Riverside as a current-build planning town: check routes in your save, avoid assuming exact layouts and compare it with other towns before committing to long travel.",
      },
    ],
    relatedGuides: [
      {
        title: "Build 42 Map Guide",
        href: "/guides/project-zomboid-map/",
        description: "Compare Riverside with other Build 42 map planning areas.",
      },
      {
        title: "Best Base Locations",
        href: "/guides/best-base-locations/",
        description: "Compare Riverside base options with safer and harder base candidates.",
      },
      {
        title: "Best Loot Locations",
        href: "/guides/best-loot-locations/",
        description: "Compare Riverside loot routes with other high-value supply plans.",
      },
      {
        title: "Best Starting Location",
        href: "/guides/best-starting-location/",
        description: "See when Riverside works as a calmer beginner starting area.",
      },
      {
        title: "Map Difficulty Ranking",
        href: "/maps/difficulty-ranking/",
        description: "Compare Riverside with other map areas.",
      },
      {
        title: "Build 42 Guide",
        href: "/build-42/",
        description: "Review broader Build 42 planning without leaving the database structure.",
      },
    ],
    seo: {
      title: "Project Zomboid Riverside Map Guide | Build 42",
      description:
        "Use this Project Zomboid Riverside map guide to plan routes, key locations, loot stops, base options and survival decisions in Build 42.",
      h1: "Project Zomboid Riverside Map Guide",
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
        href: "/locations/rosewood/",
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
