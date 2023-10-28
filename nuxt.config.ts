import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",

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

  modules: ["@nuxt/image"],
});