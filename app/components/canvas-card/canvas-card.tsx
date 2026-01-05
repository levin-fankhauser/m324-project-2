import { Drawing } from "@/lib/types/drawings";
import { cn } from "@/lib/utils";
import { CalendarClock, Pencil, ArrowRight, Trash2 } from "lucide-react";

interface CanvasCardProps {
  drawing: Drawing;
  className?: string;
  onOpen: (id: string) => void;
  onEdit: (drawing: Drawing) => void;
  onDelete: (drawing: Drawing) => void;
}

export default function CanvasCard({
  drawing,
  className,
  onOpen,
  onEdit,
  onDelete,
}: CanvasCardProps) {
  const displayName = (drawing?.title ?? "").trim() || "Unbenannte Zeichnung";
  const isUpdated = drawing.updatedAt.getTime() !== drawing.createdAt.getTime();
  const primaryDate = isUpdated ? drawing.updatedAt : drawing.createdAt;
  const metaLabel = isUpdated ? "Zuletzt geändert" : "Erstellt am";
  const formattedDate =
    primaryDate.toLocaleDateString("de-CH") +
    ", " +
    primaryDate.toLocaleTimeString("de-CH", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-sm transition hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60",
        className,
      )}
      data-testid="overview-card"
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
          Zeichnung
        </p>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          {displayName}
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => onOpen(drawing.id)}
            >
              <ArrowRight className="size-4" />
              Öffnen
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
              onClick={() => onEdit(drawing)}
            >
              <Pencil className="size-4" />
              Editieren
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 dark:border-red-900 dark:text-red-200 dark:hover:bg-red-950"
            onClick={() => onDelete(drawing)}
          >
            <Trash2 className="size-4" />
            Löschen
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
            <CalendarClock className="size-4" />
            {metaLabel}
          </span>
          <span className="font-medium text-neutral-900 dark:text-neutral-100">
            {formattedDate}
          </span>
        </div>
      </div>
    </article>
  );
}
