import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
export function createViteLibraryConfig(options) {
    const packagePath = resolve(__dirname, options.packageDir);
    return defineConfig({
        plugins: [
            vue(),
            dts({
                insertTypesEntry: true,
                include: ["src/**/*.ts", "src/**/*.vue"],
                exclude: [
                    "src/**/*.spec.ts",
                    "src/**/*.test.ts",
                    "src/**/*.stories.ts",
                    "vite.config.ts",
                ],
                outDir: "dist",
                tsconfigPath: resolve(packagePath, "tsconfig.app.json"),
            }),
        ],
        build: {
            lib: {
                entry: resolve(packagePath, options.entry),
                name: options.name,
                fileName: options.fileName,
                formats: ["es", "cjs", "umd"],
            },
            rollupOptions: {
                external: ["vue"],
                output: {
                    globals: {
                        vue: "Vue",
                    },
                },
            },
        },
    });
}
