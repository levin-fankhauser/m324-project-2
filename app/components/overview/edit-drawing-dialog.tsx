import { Drawing } from "@/lib/types/drawings";

interface EditDrawingDialogProps {
  drawing: Drawing | null;
  title: string;
  onTitleChange: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
}

export function EditDrawingDialog({
  drawing,
  title,
  onTitleChange,
  onClose,
  onSave,
}: EditDrawingDialogProps) {
  if (!drawing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          Titel bearbeiten
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Passe den Namen deiner Zeichnung an.
        </p>
        <div className="mt-4 space-y-2">
          <label className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
            Neuer Titel
          </label>
          <input
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:focus:ring-neutral-700"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
            placeholder="Unbenannte Zeichnung"
            autoFocus
          />
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
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            onClick={onSave}
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}
