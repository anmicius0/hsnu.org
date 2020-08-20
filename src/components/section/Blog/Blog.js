import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./Blog.scss"

// tools
import PostLists from "../../tools/PostsList/PostsList"
import SideNews from "../../tools/SidewNews/SideNews"

const Blog = () => {
  return (
    <Container as="section" id="Blog">
      <Row>
        {/* posts */}
        <Col lg="7">
          <PostLists />
        </Col>

        {/* side news (component) */}
        <Col lg={{ span: 4, offset: 1 }}>
          <SideNews hideMobile />
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
