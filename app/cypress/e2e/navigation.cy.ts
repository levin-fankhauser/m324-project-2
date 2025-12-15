const HOME_URL = 'http://localhost:3000/';

const openSidebar = () => {
  cy.get('aside button').first().click();
};

const navRoutes = [
  {
    label: 'Overview',
    urlCheck: () => cy.url().should('include', '/overview'),
    assert: () => cy.contains('Gespeicherte Zeichnungen').should('be.visible'),
  },
  {
    label: 'New Canvas',
    urlCheck: () => cy.url().should('match', /\/draw\/[a-z0-9-]+$/i),
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
    navRoutes.forEach(({ label, urlCheck, assert }) => {
      openSidebar();
      cy.contains(label).click();
      urlCheck();
      assert();
    });

    openSidebar();
    cy.get('aside').contains('Sketchly').click();
    cy.url().should('eq', HOME_URL);
  });
});
