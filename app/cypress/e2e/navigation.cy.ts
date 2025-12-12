import { HOME_URL } from './home.cy';

const openSidebar = () => {
  cy.get('aside button').first().click();
};

const navRoutes = [
  {
    label: 'Overview',
    path: '/overview',
    assert: () => cy.contains('Gespeicherte Zeichnungen').should('be.visible'),
  },
  {
    label: 'New Canvas',
    path: '/draw',
    assert: () => cy.get('[data-testid="tldraw-editor"]').should('exist'),
  },
];

describe('Core Navigation', () => {
  beforeEach(() => {
    cy.visit(HOME_URL);
  });

  it('expands the sidebar navigation', () => {
    openSidebar();
    cy.contains('Navigation').should('be.visible');
    navRoutes.forEach(({ label }) => cy.contains(label).should('be.visible'));
  });

  it('navigates to every available route and back home', () => {
    navRoutes.forEach(({ label, path, assert }) => {
      openSidebar();
      cy.contains(label).click();
      cy.url().should('include', path);
      assert();
    });

    openSidebar();
    cy.get('aside').contains('Sketchly').click();
    cy.url().should('eq', HOME_URL);
  });
});
