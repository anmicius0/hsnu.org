/// <reference types="cypress" />

describe("Search Integration", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Search through #navbar-search-box", () => {
    cy.viewport(1200, 720)

    // make a query
    cy.get("#nav-search-button")
      .click()
      .get("#nav-search-box form")
      .within(() => {
        // cy.get() will only search for elements within form,
        // not within the entire document
        cy.get('input[name="search"]').type("世界")
        cy.root().submit()
      })
  })
})
