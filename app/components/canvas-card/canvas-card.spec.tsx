import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import CanvasCard from "./canvas-card";
import { Drawing } from "@/lib/types/drawings";

const buildDrawing = (overrides: Partial<Drawing> = {}): Drawing => ({
  id: "drawing-id",
  title: "Meine Zeichnung",
  createdAt: new Date("2024-05-10T09:30:00Z"),
  updatedAt: new Date("2024-05-10T09:30:00Z"),
  ...overrides,
});

const formatDate = (date: Date) =>
  date.toLocaleDateString("de-CH") +
  ", " +
  date.toLocaleTimeString("de-CH").slice(0, 5);

describe("CanvasCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows the trimmed drawing title", () => {
    const drawing = buildDrawing({ title: "  Sketch Name  " });

    render(<CanvasCard drawing={drawing} />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeDefined();
    expect(heading.textContent).toContain("Sketch Name");
  });

  it("falls back to the default name when the title is empty", () => {
    const drawing = buildDrawing({ title: "   " });

    render(<CanvasCard drawing={drawing} />);

    const fallback = screen.getByText("Unbenannte Zeichnung");

    expect(fallback).toBeDefined();
  });

  it("emphasizes the creation date when the drawing was never updated", () => {
    const createdAt = new Date("2024-04-01T08:15:00Z");
    const drawing = buildDrawing({ createdAt, updatedAt: createdAt });

    render(<CanvasCard drawing={drawing} />);

    const label = screen.getByText("Erstellt am");
    const date = screen.getByText(formatDate(createdAt));

    expect(label).toBeDefined();
    expect(date).toBeDefined();
  });

  it("emphasizes the last update when the timestamps differ", () => {
    const createdAt = new Date("2024-01-10T11:00:00Z");
    const updatedAt = new Date("2024-02-15T13:45:00Z");
    const drawing = buildDrawing({ createdAt, updatedAt });

    render(<CanvasCard drawing={drawing} />);

    const label = screen.getByText("Zuletzt geändert");
    const date = screen.getByText(formatDate(updatedAt));

    expect(label).toBeDefined();
    expect(date).toBeDefined();
  });
});
