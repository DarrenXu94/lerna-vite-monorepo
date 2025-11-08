import { createViteLibraryConfig } from "../../vite.config.shared";

export default createViteLibraryConfig({
  entry: "src/index.ts",
  name: "DSHeader",
  fileName: (format) => `ds-header.${format}.js`,
  packageDir: "packages/ds-header",
});
