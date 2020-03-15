import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// icons
import medium from "../../images/icons/socialMedia/medium.svg"
import twitter from "../../images/icons/socialMedia/twitter.svg"
import github from "../../images/icons/socialMedia/github.svg"
import patreon from "../../images/icons/socialMedia/patreon.svg"

const Footer = () => {
  const footers = [
    { name: "twitter", link: "https://twitter.com", icon: twitter },
    { name: "medium", link: "https://medium.com", icon: medium },
    { name: "github", link: "https://github.com", icon: github },
    { name: "patreon", link: "https://patreon.com", icon: patreon },
  ]

  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col lg="7" className={"logo"}>
              <h3 className={"is-3 bold"}>We Are HSNUer</h3>
            </Col>
            <Col lg="5" className={"icons"}>
              {footers.map(icon => (
                <a href={icon.link}>
                  <img src={icon.icon} alt={icon.name}></img>
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
