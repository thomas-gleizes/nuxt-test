import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  alias: {
    "styled-system": resolve("./styled-system"),
  },

  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },
});
