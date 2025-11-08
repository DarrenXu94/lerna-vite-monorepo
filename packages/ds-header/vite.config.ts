import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts"; // For generating TypeScript declaration files
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // Generate a types entry file (e.g., index.d.ts)
      include: ["src/**/*.ts", "src/**/*.vue"], // Include TypeScript and Vue files
      exclude: ["src/**/*.spec.ts", "src/**/*.test.ts", "vite.config.ts"], // Exclude test files and config
      outDir: "dist", // Output directory for declaration files
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"), // Use the app tsconfig
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Your library's entry point
      name: "DSHeader", // Global name if using UMD format
      fileName: (format) => `ds-header.${format}.js`, // Output file name
      formats: ["es", "cjs", "umd"], // Output formats (ES Module, CommonJS, UMD)
    },
    rollupOptions: {
      external: ["vue"], // Exclude Vue from the bundle, assuming it's a peer dependency
      output: {
        globals: {
          vue: "Vue", // Global variable name for Vue in UMD format
        },
      },
    },
  },
});
