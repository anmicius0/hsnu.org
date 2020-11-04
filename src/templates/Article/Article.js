import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/layout/Seo"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

// style
import "./Article.scss"

// tools
import SideNews from "../../components/tools/SidewNews/SideNews"
import Content from "../../components/tools/Content/Content"
import RecommandVideo from "../../components/tools/RecommandVideo/RecommandVideo"

export default ({ data }) => {
  const post = data.allWordpressWpSpost.edges[0].node
  return (
    <>
      <Seo
        title={post.title}
        description={post.content}
        pathname={`/post/${post.wordpress_id}`}
        article
      />

      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            <Content
              title={post.title}
              genre={post.acf.genre}
              date={post.date}
              content={post.content}
              urls={post.acf.repeater_link}
              office="網管小組"
            />
            <LazyLoadComponent>
              <RecommandVideo />
            </LazyLoadComponent>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <SideNews infinity={true} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const query = graphql`
  query ($id: Int!) {
    allWordpressWpSpost(filter: {wordpress_id: {eq: $id}}) {
      edges {
        node {
          title
          date
          content
          wordpress_id
          acf {
            genre
            repeater_link {
              url
              description
            }
          }
        }
      }
    }
  }
`
