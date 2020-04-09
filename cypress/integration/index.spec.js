/// <reference types="cypress" />

describe("Index Page Interaction", () => {
  describe("Landing test", () => {
    beforeEach(() => {
      cy.visit("/")
    })

    it("check link avaliablity", () => {
      cy.get("#landing > a").should("have.attr", "href")
    })
  })

  describe("Post list test", () => {
    it("switch genre test", () => {
      cy.get(".genre")
        .contains("教師")
        .click()
        .should("have.class", "active")
    })
  })
})
