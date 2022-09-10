import { defineConfig } from "vite";
import path from "path";

import vue from "@vitejs/plugin-vue";
import icons from "unplugin-icons/vite";
import routes from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    icons({ compiler: "vue3" }),
    routes({ pagesDir: path.resolve(__dirname, "src/pages") }),
  ],

  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
