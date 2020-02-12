import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./blog.scss"

// tools
import PostLists from "../../tools/PostsList/PostsList"
import SideNews from "../../tools/SidewNews/SideNews"

const Posts = () => {
  return (
    <Container as="section" id="Blog">
      <Row>
        {/* posts */}
        <Col lg="8">
          <PostLists />
        </Col>

        {/* side news (component) */}
        <Col lg="4">
          <SideNews />
        </Col>
      </Row>
    </Container>
  )
}

export default Posts
