import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Home from "./page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

test("Page", () => {
  render(<Home />);
  expect(screen.getByText("Sketchly")).toBeDefined();
});
