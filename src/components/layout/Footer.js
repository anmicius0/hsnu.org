import React from "react"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"

// icons
import medium from "../../images/icons/medium.svg"
import twitter from "../../images/icons/twitter.svg"

const Footer = () => {
  return (
    <>
      <Navbar as="footer" bg="dark">
        <Container fluid>
          <Row>
            <Col>8</Col>
            <Col>4</Col>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer
