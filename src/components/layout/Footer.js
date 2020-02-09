import React from "react"
import { Navbar, Nav } from "react-bootstrap"

// icons
import medium from "../../images/icons/medium.svg"
import twitter from "../../images/icons/twitter.svg"

const Footer = () => {
  return (
    <>
      <Navbar as="footer" bg="dark">
        <Navbar.Brand href="#">
          <h4>React-Bootstrap</h4>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Nav.Link>
              <img src={medium} alt="Medium"></img>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img src={twitter} alt="Twitter"></img>
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Footer
