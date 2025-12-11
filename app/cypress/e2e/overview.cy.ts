const OVERVIEW_URL = 'http://localhost:3000/overview';

describe('Overview Page', () => {
  it('shows loading skeletons before data appears', () => {
    cy.visit(OVERVIEW_URL);
    cy.get('[data-testid="overview-skeleton"]').should('have.length', 4);
  });

  it('renders stored drawings once the mock data loads', () => {
    cy.visit(OVERVIEW_URL);
    cy.wait(500);
    cy.get('[data-testid="overview-card"]').should('have.length', 5);
    cy.contains('Drawing 1').should('be.visible');
    cy.get('[data-testid="overview-skeleton"]').should('not.exist');
  });
});
