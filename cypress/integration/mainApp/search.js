/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });
  it("finds sibling", () => {
    cy.get("#search-Sibling").type("Abigael").should("have.value", "Abigael");
    cy.get("#sibling-list li").should("have.length", 2);
  });
  it("finds descendants", () => {
    cy.get("#search-Descendant")
      .type("Julissa")
      .should("have.value", "Julissa");
    cy.get("#descendant-list li").should("have.length", 3);
  });
});
