import React, { useEffect } from "react"
import { Navbar, Nav, Form, FormControl } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

// icon and images
import hsnu from "../../images/icons/HSNU.svg"
import menu from "../../images/icons/functional/menu.svg"
import search from "../../images/icons/functional/search.svg"

const Header = () => {
  // source header items
  const navs = useStaticQuery(
    graphql`
      {
        allWordpressWpHeader(limit: 4, sort: { order: ASC, fields: date }) {
          edges {
            node {
              acf {
                name
                url
              }
            }
          }
        }
      }
    `
  ).allWordpressWpHeader.edges

  // hide when scroll down (add/remove ".header-hide" to "#header")
  useEffect(() => {
    var lastScrollTop = 0
    window.addEventListener(
      "scroll",
      function() {
        var st = window.pageYOffset || document.documentElement.scrollTop
        if (st > lastScrollTop) {
          // downscroll code
          document.querySelector("#header").classList.add("header-hide")
          document.querySelector("#nav-search").classList.remove("active")
        } else {
          // upscroll code
          document.querySelector("#header").classList.remove("header-hide")
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      },
      false
    )
  }, [])

  return (
    <Navbar expand="xl" id="header">
      {/* Brand */}
      <Navbar.Brand href="/">
        <img src={hsnu} alt="師大附中"></img>
      </Navbar.Brand>

      {/* Toggler */}
      <Navbar.Toggle
        onClick={() => {
          const sidebar = document.querySelector("#sidebar")
          const overlay = document.querySelector("#sidebar-overlay")
          sidebar.classList.toggle("active")
          overlay.classList.toggle("active")
        }}
      />

      {/* Navbar Items */}
      <Navbar.Collapse>
        <Nav>
          {navs.map(nav => (
            <Nav.Item key={nav.node.acf.name}>
              <Nav.Link className={"is-5 bold"} href={nav.node.acf.url}>
                {nav.node.acf.name}
              </Nav.Link>
            </Nav.Item>
          ))}

          <Nav.Item>
            <Nav.Link className={"is-5 bold"} href="/english">
              English
            </Nav.Link>
          </Nav.Item>

          {/* search */}
          <Nav.Item
            onClick={() => {
              const navsearch = document.querySelector("#nav-search")
              const searbox = document.querySelector("#nav-search-box")
              navsearch.classList.toggle("active")
              if (navsearch.classList.contains("active")) {
                searbox.focus()
              }
            }}
          >
            <Nav.Link>
              <img src={search} alt="search" />
            </Nav.Link>
          </Nav.Item>

          {/* menu */}
          <Nav.Item
            onClick={() => {
              const sidebar = document.querySelector("#sidebar")
              const overlay = document.querySelector("#sidebar-overlay")
              sidebar.classList.toggle("active")
              overlay.classList.toggle("active")
            }}
          >
            <Nav.Link>
              <img src={menu} alt="menu" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {/* search box in the nav */}
      <div id="nav-search">
        <Form action="/search" method="get">
          <FormControl
            id="nav-search-box"
            type="text"
            placeholder="Search"
            name="search"
            className={"is-3 bold"}
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
