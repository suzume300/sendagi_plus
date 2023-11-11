import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://suzume300.github.io", // TODO: update
  base: "/sendagi_plus", // for GitHub Pages - cf. https://docs.astro.build/ja/guides/deploy/github/
  trailingSlash: "always",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    relativeLinks(),
    mdx(),
  ],
});
