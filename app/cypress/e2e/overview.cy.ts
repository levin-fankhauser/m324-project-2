const OVERVIEW_URL = 'http://localhost:3000/overview';
const STORAGE_KEY = 'SAVED_CANVAS';

const mockPersistedDrawings = [
  {
    id: '1',
    title: 'Zeichnung 1',
    createdAt: '2024-01-01T10:00:00.000Z',
    updatedAt: '2024-01-01T10:00:00.000Z',
  },
  {
    id: '2',
    title: null,
    createdAt: '2024-02-01T10:00:00.000Z',
    updatedAt: '2024-02-01T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Zeichnung 3',
    createdAt: '2023-12-08T07:05:00.000Z',
    updatedAt: '2024-01-17T16:30:00.000Z',
  },
];

const visitWithSeededStorage = () =>
  cy.visit(OVERVIEW_URL, {
    onBeforeLoad(win) {
      win.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(mockPersistedDrawings),
      );
    },
  });

describe('Overview Page', () => {
  it('shows loading skeletons before data appears', () => {
    visitWithSeededStorage();
    cy.get('[data-testid="overview-skeleton"]').should('have.length', 6);
  });

  it('renders stored drawings once the mock data loads', () => {
    visitWithSeededStorage();
    cy.get('[data-testid="overview-card"]').should('have.length', 3);
    cy.contains('Zeichnung 1').should('be.visible');
    cy.get('[data-testid="overview-skeleton"]').should('not.exist');
  });
});
