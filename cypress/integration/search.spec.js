/// <reference types="cypress" />

describe("Search Integration", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Search through #navbar-search-box", () => {
    cy.viewport("macbook-15")

    // make a query
    cy.get("#nav-search-button").click()
    cy.get("#nav-search-box form").within(() => {
      cy.get('input[name="search"]').type("世界")
      cy.root().submit()
    })

    cy.get("#search-page-filter").within(() => {
      cy.get('select[name="genre"]').select("學生")
      cy.get('select[name="subgenre"]').select("周輔")
      cy.root().submit()
    })

    // check url
    cy.url()
      .should("include", "%E5%AD%B8%E7%94%9F") //學生
      .should("include", "%E5%91%A8%E8%BC%94") //周輔

    // check there is post
    cy.get("#search-result-container .search-result h3")
  })

  it("Search through sidebar", () => {
    cy.viewport("iphone-x")

    // make a query
    cy.get(".navbar-toggler").click()
    cy.get("#sidebar .search-box").within(() => {
      cy.get('input[name="search"]').type("世界")
      cy.root().submit()
    })

    // filter
    cy.get(".search-box .filter").click()
    cy.get("#search-box-filter").within(() => {
      cy.get('select[name="genre"]').select("學生")
      cy.get('select[name="subgenre"]').select("周輔")
      cy.root().submit()
    })

    // check url
    cy.url()
      .should("include", "%E5%AD%B8%E7%94%9F") //學生
      .should("include", "%E5%91%A8%E8%BC%94") //周輔

    // check there is post
    cy.get("#search-result-container .search-result h3")
  })

  it("search direct through url (for opensearch)", () => {
    cy.viewport("macbook-15")

    cy.visit(
      "http://localhost:8000/search/?search=%E4%B8%96%E7%95%8C&genre=%E5%AD%B8%E7%94%9F&subgenre=%E5%91%A8%E8%BC%94"
    )

    // check there is post
    cy.get("#search-result-container .search-result h3")
  })
})
