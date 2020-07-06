import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl } from "react-bootstrap"
import Cookies from "js-cookie"
import { useStaticQuery, graphql } from "gatsby"
import axios from "axios"

// icon and images
import hsnu from "../../images/icons/HSNU.svg"
import menu from "../../images/icons/functional/menu.svg"
import search from "../../images/icons/functional/search.svg"

export const Header = () => {
  const [navs, setNavs] = useState()
  useEffect(() => {
    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/header?per_page=5`
      )
      .then(res => {
        setNavs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
          clear_navbar()
        } else {
          // upscroll code
          document.querySelector("#navbar").classList.remove("navbar-hide")
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      },
      false
    )
  }, [])

  // if it's first visit, expand the menu
  useEffect(() => {
    if (!Cookies.get("visited")) {
      toggle_sidebar()
    }
  }, [])

  // toggle menu
  function toggle_sidebar() {
    Cookies.set("visited", true, { expires: 31 })
    const sidebar = document.querySelector("#sidebar")
    const overlay = document.querySelector("#sidebar-overlay")
    sidebar.classList.toggle("active")
    overlay.classList.toggle("active")
  }

  // close every thing on navbar
  function clear_navbar(item) {
    if (item !== "search") {
      // clear nav search bar
      const navsearch = document.querySelector("#nav-search-box")
      navsearch.classList.remove("active")
    }
    // if (item !== "drop") {
    //   // clear nav drop down
    //   const navdropdown = document.querySelector("#nav-drop-down")
    //   navdropdown.classList.remove("active")
    // }
  }

  return (
    <>
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
            toggle_sidebar()
          }}
        />

        {/* Navbar Items */}
        <Navbar.Collapse>
          <Nav>
            {navs
              ? navs.map(nav => (
                  <Nav.Item key={nav.acf.name}>
                    <Nav.Link className={"is-5 bold"} href={nav.acf.url}>
                      {nav.acf.name}
                    </Nav.Link>
                  </Nav.Item>
                ))
              : null}

            {/* <Nav.Item
              onClick={() => {
                // clear navbar
                clear_navbar("drop")

                const navdropdown = document.querySelector("#nav-drop-down")
                navdropdown.classList.toggle("active")
              }}
            >
              <Nav.Link className={"is-5 bold"}>相關單位</Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link className={"is-5 bold"} href="/english">
                English
              </Nav.Link>
            </Nav.Item>

            {/* search */}
            <Nav.Item
              onClick={() => {
                // clear navbar
                clear_navbar("search")

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

            {/* sidebar */}
            <Nav.Item
              onClick={() => {
                toggle_sidebar()
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

        {/* drop down in the nav */}
        {/* <div id="nav-drop-down">
          <Container fluid>
            <Row>
              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(x => {
                return (
                  <Col xl={2} className={"is-5 bold"}>
                    教務處
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div> */}
      </Navbar>
    </>
  )
}

export default Header
