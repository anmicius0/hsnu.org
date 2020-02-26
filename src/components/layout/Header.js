import React from "react"
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"

// icon and images
import hsnu from "../../images/icons/HSNU.svg"
import menu from "../../images/icons/functional/menu.svg"
import search from "../../images/icons/functional/search.svg"

const Header = () => {
  const navs = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              navs {
                title
                url
              }
            }
          }
        }
      }
    `
  ).allDataJson.edges[0].node.navs

  return (
    <Navbar expand="xl" id="header">
      {/* Brand */}
      <Navbar.Brand href="/">
        <img src={hsnu} alt="Logo of HSNU"></img>
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
            <Nav.Item>
              <Nav.Link className={"is-5 bold"} href={nav.url}>
                {nav.title}
              </Nav.Link>
            </Nav.Item>
          ))}

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
              <img src={search} />
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
              <img src={menu} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {/* search box in the nav */}
      <div id="nav-search">
        <Form>
          <FormControl
            id="nav-search-box"
            type="text"
            placeholder="Search"
            className={"is-3 bold"}
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
