import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
      "@hooks": fileURLToPath(new URL("src/hooks/hooks.ts", import.meta.url)),
      "@images": fileURLToPath(new URL("src/assets/images", import.meta.url)),
      "@jsons": fileURLToPath(
        new URL("src/assets/jsons/jsons.ts", import.meta.url)
      ),
      "@pages": fileURLToPath(
        new URL("src/assets/scss/pages", import.meta.url)
      ),
      "@sections": fileURLToPath(
        new URL("src/components/sections/sections.ts", import.meta.url)
      ),
      "@ui": fileURLToPath(new URL("src/components/ui/ui.ts", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/mixins/index.scss"; @import "./src/assets/scss/functions/index.scss";`,
      },
    },
  },
});
