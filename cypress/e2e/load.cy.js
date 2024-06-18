describe('it loads the app correctly', () => {
  it('passes', () => {
    cy.visit("http://localhost:5173/");
    cy.get(".filter-latest");
    cy.get(".filter-popular");
  })
})