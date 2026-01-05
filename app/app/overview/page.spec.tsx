import { act, cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import type { Drawing } from "../../lib/types/drawings";
import { canvasStorageService } from "../../services/canvasStorage.service";

const mockDrawings: Drawing[] = [
  {
    id: "1",
    title: "Zeichnung 1",
    createdAt: new Date("2024-01-01T10:00:00Z"),
    updatedAt: new Date("2024-01-01T10:00:00Z"),
  },
  {
    id: "2",
    title: "Zeichnung 2",
    createdAt: new Date("2024-02-01T10:00:00Z"),
    updatedAt: new Date("2024-02-01T10:00:00Z"),
  },
];

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
}));

vi.mock("../../services/canvasStorage.service", () => {
  const getAll = vi.fn(() => mockDrawings);

  return {
    canvasStorageService: {
      getAll,
      deleteCanvas: vi.fn(),
      editTitle: vi.fn(),
      saveCanvas: vi.fn(),
    },
  };
});

async function renderOverviewPage() {
  const { default: OverviewPage } = await import("./page");
  return render(<OverviewPage />);
}

describe("OverviewPage", () => {
  const getAllMock = canvasStorageService.getAll as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    getAllMock.mockReturnValue(mockDrawings);
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.resetModules();
    getAllMock.mockReset();
  });

  it("shows skeletons while drawings are loading", async () => {
    await renderOverviewPage();

    expect(
      screen.getByRole("heading", { name: "Gespeicherte Zeichnungen" }),
    ).toBeDefined();
    expect(screen.getAllByTestId("overview-skeleton")).toHaveLength(6);
  });

  it("renders drawing cards after the loading delay", async () => {
    await renderOverviewPage();

    await act(async () => {
      vi.advanceTimersByTime(400);
    });

    expect(screen.getByText("Zeichnung 1")).toBeDefined();
    expect(screen.queryAllByTestId("overview-skeleton")).toHaveLength(0);
  });

  it("shows the empty state when no drawings are returned", async () => {
    getAllMock.mockReturnValue([] satisfies Drawing[]);

    await renderOverviewPage();

    await act(async () => {
      vi.advanceTimersByTime(400);
    });

    expect(screen.getByText("Keine Zeichnungen vorhanden")).toBeDefined();
    expect(screen.queryAllByTestId("overview-card")).toHaveLength(0);
    expect(screen.queryAllByTestId("overview-skeleton")).toHaveLength(0);
  });
});
