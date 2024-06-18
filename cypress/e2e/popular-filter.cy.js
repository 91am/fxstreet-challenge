describe('should filter by popular', () => {
  it('passes', () => {
      cy.visit("http://localhost:5173/");
      cy.get(".filter-popular").click();
      cy.get(":nth-child(1) > .head > .title > .author-company > .author").should("have.text","Michel Cano");

  })
})