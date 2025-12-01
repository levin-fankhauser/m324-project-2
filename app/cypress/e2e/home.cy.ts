describe('Home Page', () => {
  it('should display the Sketchly title', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Sketchly').should('be.visible');
  });
});
