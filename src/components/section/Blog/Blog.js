import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "./Blog.scss"

// tools
import PostLists from "../../tools/PostsList/PostsList"
import SideNews from "../../tools/SidewNews/SideNews"

const Posts = props => {
  return (
    <Container as="section" id="Blog">
      <Row>
        {/* posts */}
        <Col lg="8">
          <PostLists postlist={props.postlist} />
        </Col>

        {/* side news (component) */}
        <Col lg="4">
          <SideNews news={[1, 2, 3, 4, 5]} />
        </Col>
      </Row>
    </Container>
  )
}

export default Posts
