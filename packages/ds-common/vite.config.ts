import { createViteLibraryConfig } from "../../vite.config.shared";

export default createViteLibraryConfig({
  entry: "src/index.ts",
  name: "DSCommon",
  fileName: (format) => `ds-common.${format}.js`,
  packageDir: "packages/ds-common",
});
