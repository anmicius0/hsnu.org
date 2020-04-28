import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./Banner.scss"

// tools
import Propaganda from "../../tools/Propaganda/Propaganda"
import NewsBanner from "../../tools/NewsBanner/NewsBanner"

const Blog = () => {
  return (
    <Container as="section" id="Banner">
      <Row>
        {/* posts */}
        <Col lg="3">
          <Propaganda />
        </Col>

        {/* side news (component) */}
        <Col lg="9">
          <NewsBanner />
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
