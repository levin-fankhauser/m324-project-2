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

  it('creates a new canvas via the sidebar', () => {
    cy.get('aside button').first().click();
    cy.contains('New Canvas').click();
    cy.url().should('match', /\/draw\/[a-z0-9-]+$/i);
    cy.get('[data-testid="tldraw-editor"]').should('exist');
  });
});
