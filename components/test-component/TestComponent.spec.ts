import TestComponent from "./TestComponent.vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";

describe("AppLogo", () => {
  test("Renders correct alt text", async () => {
    await renderSuspended(TestComponent);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
