import { Drawing } from "@/lib/types/drawings";

interface DeleteDrawingDialogProps {
  drawing: Drawing | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteDrawingDialog({
  drawing,
  onClose,
  onConfirm,
}: DeleteDrawingDialogProps) {
  if (!drawing) return null;

  const title = (drawing.title ?? "").trim() || "Unbenannte Zeichnung";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Zeichnung löschen?
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Diese Aktion entfernt die Zeichnung dauerhaft aus deinen gespeicherten
          Daten.
        </p>
        <div className="mt-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
          <p className="font-semibold">{title}</p>
          <p className="text-neutral-500 dark:text-neutral-400">
            Letzte Änderung: {drawing.updatedAt.toLocaleString("de-CH")}
          </p>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            onClick={onClose}
          >
            Abbrechen
          </button>
          <button
            type="button"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400"
            onClick={onConfirm}
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  );
}
