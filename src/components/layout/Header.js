import React from "react"
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"

// icon and images
import hsnu from "../../images/icons/HSNU.svg"
import menu from "../../images/icons/menu.svg"
import search from "../../images/icons/search.svg"

const Header = () => {
  return (
    <Navbar expand="xl" id="header">
      {/* Brand */}
      <Navbar.Brand href="#">
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
          {[1, 2, 3, 4].map(item => (
            <Nav.Item>
              <Nav.Link className={"is-7"}>Student</Nav.Link>
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
            className={"is-4-regular"}
          />
        </Form>
      </div>
    </Navbar>
  )
}

export default Header
