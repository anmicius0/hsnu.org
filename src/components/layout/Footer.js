import React from "react"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"

// icons
import medium from "../../images/icons/medium.svg"
import twitter from "../../images/icons/twitter.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col lg="8" className={"logo"}>
              <h3 className={"is-3 bold"}>We Are HSNUer</h3>
            </Col>
            <Col lg="4" className={"icons"}>
              {[medium, twitter, medium, twitter, medium, twitter].map(icon => (
                <a href="#">
                  <img src={icon}></img>
                </a>
              ))}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
