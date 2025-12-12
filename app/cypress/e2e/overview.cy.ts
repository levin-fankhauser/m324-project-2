const OVERVIEW_URL = 'http://localhost:3000/overview';

describe('Overview Page', () => {
  it('shows loading skeletons before data appears', () => {
    cy.visit(OVERVIEW_URL);
    cy.get('[data-testid="overview-skeleton"]').should('have.length', 6);
  });

  it('renders stored drawings once the mock data loads', () => {
    cy.visit(OVERVIEW_URL);
    cy.get('[data-testid="overview-card"]').should('have.length', 5);
    cy.contains('Zeichnung 1').should('be.visible');
    cy.get('[data-testid="overview-skeleton"]').should('not.exist');
  });
});
