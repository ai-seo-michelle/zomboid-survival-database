import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL || "https://zomboidsurvival.com";

export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404.html"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
