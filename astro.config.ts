import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://suzume300.github.io/sendagi_plus/", // TODO: update
  trailingSlash: "always",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    relativeLinks(),
    mdx(),
  ],
});
