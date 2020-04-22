import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

// style
import "./Article.scss"

// tools
import SideNews from "../../components/tools/SidewNews/SideNews"
import Content from "../../components/tools/Content/Content"
import RecommandVideo from "../../components/tools/RecommandVideo/RecommandVideo"

export default ({ data }) => {
  return (
    <>
      <Layout
        title={data.allWordpressWpSpost.edges[0].node.title}
        description={data.allWordpressWpSpost.edges[0].node.content}
        article
      >
        <div id="header-padding" />
        <Container id="article" fluid>
          <Row>
            <Col lg="7">
              <Content
                title={data.allWordpressWpSpost.edges[0].node.title}
                genre={data.allWordpressWpSpost.edges[0].node.acf.genre}
                date={data.allWordpressWpSpost.edges[0].node.date}
                content={data.allWordpressWpSpost.edges[0].node.content}
                urls={data.allWordpressWpSpost.edges[0].node.acf.repeater_link}
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
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: Int!) {
    allWordpressWpSpost(filter: { wordpress_id: { eq: $id } }) {
      edges {
        node {
          title
          date
          content
          acf {
            genre
            repeater_link {
              description
              url
            }
          }
        }
      }
    }
  }
`
