describe("should be able to like the post", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get(":nth-child(1) > .options > .like-btn").should(
      "not.have.class",
      "liked"
    );
    cy.get(":nth-child(1) > .options > .like-btn").click();
    cy.get(":nth-child(1) > .options > .like-btn").should(
      "have.class",
      "liked"
    );
  });
});
