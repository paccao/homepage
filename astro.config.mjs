// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { GITHUB_PAGES_PATH_PREFIX } from "./src/consts";

// https://astro.build/config
export default defineConfig({
    site: "https://paccao.github.io" + GITHUB_PAGES_PATH_PREFIX,
    base: GITHUB_PAGES_PATH_PREFIX,
    integrations: [mdx(), sitemap()],
});
