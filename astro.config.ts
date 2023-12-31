import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import relativeLinks from "astro-relative-links";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://suzume300.com",
  trailingSlash: "always",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    relativeLinks(),
    mdx(),
  ],
});
