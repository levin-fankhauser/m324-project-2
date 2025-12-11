"use client";

import { PencilLine } from "lucide-react";
import { useEffect, useState } from "react";

type Drawing = {
  title: string;
};

// Will be replaced with real data in issue #23
const INITIAL_DRAWINGS: Drawing[] = [
  {
    title: "Drawing 1",
  },
  {
    title: "Drawing 2",
  },
  {
    title: "Drawing 3",
  },
  {
    title: "Drawing 4",
  },
  {
    title: "Drawing 5",
  },
];

export default function OverviewPage() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDrawings(INITIAL_DRAWINGS);
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timeout);
  }, []);

  const hasDrawings = drawings.length > 0;

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs uppercase tracking-widest text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <PencilLine className="size-4" />
            Übersicht
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">
              Gespeicherte Zeichnungen
            </h1>
          </div>
        </header>
        {isLoading && <LoadingGrid />}
        {!isLoading && hasDrawings && (
          <div className="grid gap-4 sm:grid-cols-2">
            {drawings.map((drawing) => (
              <div
                className="rounded-lg border-2 p-2"
                data-testid="overview-card"
                key={drawing.title}
              >
                {drawing.title}
              </div>
            ))}
          </div>
        )}
        {!isLoading && !hasDrawings && (
          <div className="flex justify-center mt-40">
            <div className="text-xl border p-4 rounded-lg text-neutral-500">
              <p>Keine Zeichnungen vorhanden</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="h-40 animate-pulse rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40"
          data-testid="overview-skeleton"
        />
      ))}
    </div>
  );
}
