import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
