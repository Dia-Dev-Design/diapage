import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Package fonts
      "@fontsource-variable": "node_modules/@fontsource-variable",
      "@fontsource": "node_modules/@fontsource",

      // Custom fonts aliases
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@aileron": path.resolve(__dirname, "./src/assets/fonts/aileron"),

      // You can also create specific aliases for each font family
      "@poppins": "node_modules/@fontsource/poppins",
    },
  },
  optimizeDeps: {
    include: ["@fontsource/poppins"],
  },
  // Add this if you want to ensure proper font file handling
  assetsInclude: ["**/*.otf", "**/*.ttf", "**/*.woff", "**/*.woff2"],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/otf|ttf|woff|woff2/i.test(extType)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
});
