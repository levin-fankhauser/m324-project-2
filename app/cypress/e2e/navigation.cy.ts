import { HOME_URL } from './home.cy';

const openSidebar = () => {
  cy.get('aside button').first().click();
};

describe('Core Navigation', () => {
  beforeEach(() => {
    cy.visit(HOME_URL);
  });

  it('expands the sidebar navigation', () => {
    openSidebar();
    cy.contains('Navigation').should('be.visible');
    cy.contains('New Canvas').should('be.visible');
  });

  it('navigates to the drawing canvas and back home', () => {
    openSidebar();
    cy.contains('New Canvas').click();
    cy.url().should('include', '/draw');
    cy.get('[data-testid="tldraw-editor"]').should('exist');

    cy.get('aside').contains('Sketchly').click();
    cy.url().should('eq', HOME_URL);
  });
});
