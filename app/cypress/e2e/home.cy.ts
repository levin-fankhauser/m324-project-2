export const HOME_URL = 'http://localhost:3000/';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit(HOME_URL);
  });

  it('shows the hero headline and CTA', () => {
    cy.contains('Sketchly').should('be.visible');
    cy.contains('Eine unendliche Leinwand').should('be.visible');
    cy.contains('Jetzt zeichnen').should('be.visible');
  });

  it('navigates to the drawing canvas via the CTA', () => {
    cy.contains('Jetzt zeichnen').click();
    cy.url().should('include', '/draw');
    cy.get('[data-testid="tldraw-editor"]').should('exist');
  });
});
