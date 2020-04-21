import React, { useEffect } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

// icon and images
import hsnu from "../../images/icons/HSNU.svg"
import menu from "../../images/icons/functional/menu.svg"
import search from "../../images/icons/functional/search.svg"

export const HeaderPure = ({ navs }) => {
  // hide when scroll down (add/remove ".navbar-hide" to "#navbar")
  useEffect(() => {
    var lastScrollTop = 0
    window.addEventListener(
      "scroll",
      function() {
        var st = window.pageYOffset || document.documentElement.scrollTop
        if (st > lastScrollTop) {
          // downscroll code
          document.querySelector("#navbar").classList.add("navbar-hide")
          document.querySelector("#nav-search-box").classList.remove("active")
        } else {
          // upscroll code
          document.querySelector("#navbar").classList.remove("navbar-hide")
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      },
      false
    )
  }, [])

  return (
    <Navbar expand="xl" fixed="top" id="navbar">
      {/* Brand */}
      <Navbar.Brand>
        <Link to="/">
          <img src={hsnu} alt="師大附中" />
        </Link>
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
            id="nav-search-button"
            onClick={() => {
              const navsearch = document.querySelector("#nav-search-box")
              const searbox = document.querySelector(
                "#nav-search-box input[name='search']"
              )
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
            id="nav-menu-button"
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
      <div id="nav-search-box">
        <Form action="/search" method="get">
          <FormControl
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

const Header = () => {
  // source navbar items
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

  return <HeaderPure navs={navs} />
}

export default Header
