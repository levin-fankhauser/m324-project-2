export type Drawing = {
  id: string;
  title?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type PersistedDrawing = Omit<Drawing, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
