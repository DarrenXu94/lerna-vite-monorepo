import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/

export const getBaseConfig = ({ plugins = [], lib }: any) =>
  defineConfig({
    plugins: [vue()],
    build: {
      lib,
    },
  });
