describe("should be able to interact with 3 dots and a dropdown", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get(
      ":nth-child(1) > .options > .dropdown-menu-container > .dropdown-menu-trigger"
    ).click();
    cy.get(".dropdown-menu-content > div > :nth-child(1)").should("contain","Hide")
      cy.get(".dropdown-menu-content > div > :nth-child(2)").should(
        "contain",
        "Improve my feed"
      );
  cy.get(".dropdown-menu-content > div > :nth-child(1)").click();
  cy.get(".user-options-title > span").should("contain","Tell us why:")
  });
});
