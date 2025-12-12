import { act, cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import type { Drawing } from "../../lib/types/drawings";

async function renderOverviewPage() {
  const { default: OverviewPage } = await import("./page");
  return render(<OverviewPage />);
}

describe("OverviewPage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.resetModules();
    vi.doUnmock("../../lib/types/drawings");
  });

  it("shows skeletons while drawings are loading", async () => {
    await renderOverviewPage();

    expect(
      screen.getByRole("heading", { name: "Gespeicherte Zeichnungen" }),
    ).toBeDefined();
    expect(screen.getAllByTestId("overview-skeleton")).toHaveLength(4);
  });

  it("renders drawing cards after the loading delay", async () => {
    await renderOverviewPage();

    await act(async () => {
      vi.advanceTimersByTime(400);
    });

    expect(screen.getByText("Drawing 1")).toBeDefined();
    expect(screen.queryAllByTestId("overview-skeleton")).toHaveLength(0);
  });

  it("shows the empty state when no drawings are returned", async () => {
    vi.doMock("../../lib/types/drawings", () => ({
      INITIAL_DRAWINGS: [] satisfies Drawing[],
    }));

    await renderOverviewPage();

    await act(async () => {
      vi.advanceTimersByTime(400);
    });

    expect(screen.getByText("Keine Zeichnungen vorhanden")).toBeDefined();
    expect(screen.queryAllByTestId("overview-card")).toHaveLength(0);
    expect(screen.queryAllByTestId("overview-skeleton")).toHaveLength(0);
  });
});
