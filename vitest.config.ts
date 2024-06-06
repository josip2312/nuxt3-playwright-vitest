import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  test: {
    globals: true,
    environment: "nuxt",
    setupFiles: ["./tests-setup.ts"],
    exclude: [...configDefaults.exclude, "./e2e"],
  },
});
