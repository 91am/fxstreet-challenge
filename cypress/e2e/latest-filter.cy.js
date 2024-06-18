describe('should filter by latest', () => {
  it('passes', () => {
      cy.visit("http://localhost:5173/");
      cy.get(".filter-latest").click();
      cy.get(":nth-child(1) > .head > .title > .author-company > .author").should("have.text","Xavi Tower");

  })
})