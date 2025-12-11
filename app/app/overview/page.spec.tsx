import { act, cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import OverviewPage from "./page";

describe("OverviewPage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("shows skeletons while drawings are loading", () => {
    render(<OverviewPage />);

    expect(
      screen.getByRole("heading", { name: "Gespeicherte Zeichnungen" }),
    ).toBeDefined();
    expect(screen.getAllByTestId("overview-skeleton")).toHaveLength(4);
  });

  it("renders drawing cards after the loading delay", async () => {
    render(<OverviewPage />);

    await act(async () => {
      vi.advanceTimersByTime(400);
    });

    expect(screen.getByText("Drawing 1")).toBeDefined();
    expect(screen.queryAllByTestId("overview-skeleton")).toHaveLength(0);
  });
});
