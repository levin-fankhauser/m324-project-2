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

export const INITIAL_DRAWINGS: Drawing[] = [
  {
    id: '1',
    title: 'Zeichnung 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    createdAt: new Date('2024-06-01T10:45:00Z'),
    updatedAt: new Date('2024-06-01T10:45:00Z'),
  },
  {
    id: '3',
    createdAt: new Date('2023-12-08T07:05:00Z'),
    updatedAt: new Date('2024-01-17T16:30:00Z'),
  },
  {
    id: '4',
    title: 'Zeichnung 4',
    createdAt: new Date('2023-11-21T17:05:00Z'),
    updatedAt: new Date('2023-11-21T17:05:00Z'),
  },
  {
    id: '5',
    title: 'Zeichnung 5',
    createdAt: new Date('2023-08-09T09:30:00Z'),
    updatedAt: new Date('2023-10-01T11:45:00Z'),
  },
];
