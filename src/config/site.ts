export const siteConfig = {
  name: "Zomboid Survival Database",
  title: "Zomboid Survival Database | Project Zomboid Maps, Locations and Survival Guides",
  description:
    "Maps, locations, difficulty rankings and survival guides for Project Zomboid players.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://zomboidsurvival.com",
  ogImage: "/og-image.png",
  navItems: [
    { label: "Interactive Map", href: "/maps/interactive-map" },
    { label: "Difficulty Ranking", href: "/maps/difficulty-ranking/" },
    { label: "Locations", href: "/locations" },
    { label: "Survival Guides", href: "/guides/best-base-locations/" },
    { label: "Build 42", href: "/build-42/" },
  ],
};
