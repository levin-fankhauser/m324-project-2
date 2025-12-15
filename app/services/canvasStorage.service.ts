import { Drawing, PersistedDrawing } from '@/lib/types/drawings';

const STORAGE_KEY = 'SAVED_CANVAS';

const hasBrowserStorage = () =>
  typeof window !== 'undefined' && !!window.localStorage;

const toPersisted = (drawing: Drawing): PersistedDrawing => ({
  ...drawing,
  createdAt: drawing.createdAt.toISOString(),
  updatedAt: drawing.updatedAt.toISOString(),
});

const toDrawing = (persisted: PersistedDrawing): Drawing => ({
  ...persisted,
  createdAt: new Date(persisted.createdAt),
  updatedAt: new Date(persisted.updatedAt),
});

const readAll = (): Drawing[] => {
  if (!hasBrowserStorage()) return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored) as PersistedDrawing[];
    return parsed.map(toDrawing);
  } catch {
    return [];
  }
};

export const canvasStorageService = {
  getAll(): Drawing[] {
    return readAll();
  },

  saveCanvas(drawing: Drawing) {
    if (!hasBrowserStorage()) return;
    const drawings = readAll();
    const index = drawings.findIndex((item) => item.id === drawing.id);

    if (index >= 0) {
      drawings[index] = drawing;
    } else {
      drawings.push(drawing);
    }

    const payload = drawings.map(toPersisted);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  },
};
