/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });
  it("finds hello world", () => {
    cy.get("div").contains("hello world");
  });
});
