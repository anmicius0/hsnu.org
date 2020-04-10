import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import "./Blog.scss"

// tools
import PostLists from "../../tools/PostsList/PostsList"
import SideNews from "../../tools/SidewNews/SideNews"

export const BlogPure = ({ posts, news }) => {
  return (
    <Container as="section" id="Blog">
      <Row>
        {/* posts */}
        <Col lg="7">
          <PostLists posts={posts} />
        </Col>

        {/* side news (component) */}
        <Col lg={{ span: 4, offset: 1 }}>
          <SideNews newses={news} />
        </Col>
      </Row>
    </Container>
  )
}

const Blog = ({ posts }) => {
  const news = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 4) {
        edges {
          node {
            title
            acf {
              link
              image {
                sizes {
                  thumbnail
                }
              }
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges

  return <BlogPure posts={posts} news={news} />
}

export default Blog
