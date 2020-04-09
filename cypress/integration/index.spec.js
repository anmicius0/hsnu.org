/// <reference types="cypress" />

describe("Index Page Interaction", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  describe("Post list test", () => {
    it("switch genre test", () => {
      cy.get(".genre")
        .contains("教師")
        .click()
        .should("have.class", "active")
    })

    it("Click on post", () => {
      cy.get(".genre")
        // switch genre
        .contains("最新")
        .click()
        // click on post
        .get("#post-list .row a")
        .first()
        // check title is showing
        .click({ force: true })
        .get(".content h1")
    })
  })

  describe("Sidebar test", () => {
    it("click menu-button/toggle", () => {
      // on desktop
      cy.viewport(1200, 720)
      cy.get("#nav-menu-button")
        .click()
        // check side bar
        .get("#sidebar")
        .should("be.visible")
        // check overlay
        .get("#sidebar-overlay")
        .should("be.visible")
        // click overflow to close
        .click()
        .should("not.be.visible")
        // check side bar
        .get("#sidebar")
        .should("not.be.visible")

      // on smaller screen
      cy.viewport(1000, 720)
      cy.get(".navbar-toggler")
        .click()
        // check side bar
        .get("#sidebar")
        .should("be.visible")
        // check overlay
        .get("#sidebar-overlay")
        .click({ force: true })
        // check side bar
        .get("#sidebar")
        .should("not.be.visible")
    })
  })
})
