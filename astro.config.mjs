import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://taufiqhdyt.github.io" : "http://localhost:4321",
  base: isGitHubPages ? "/JungeArch" : "/",
  output: "static",
  integrations: [sitemap()],
});
