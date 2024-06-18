describe("should be able to save the post", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get(":nth-child(1) > .options > .save-btn").should(
      "not.have.class",
      "liked"
    );
    cy.get(":nth-child(1) > .options > .save-btn").click();
    cy.get(":nth-child(1) > .options > .save-btn").should(
      "have.class",
      "saved"
    );
  });
});
