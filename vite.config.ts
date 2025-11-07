import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vite.dev/config/

export const getBaseConfig = ({ plugins = [], lib }: any) =>
  defineConfig({
    plugins: [vue(), dts()],
    build: {
      lib,
      rollupOptions: {
        // Make sure to externalize dependencies that shouldn't be bundled
        external: ["vue"],
        output: {
          // Provide global variables to use in the UMD build for externalized deps
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
