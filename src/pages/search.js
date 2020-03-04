import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout/Layout"

// style
import "../styles/scss/search/search.scss"

// tools
import Query from "../components/tools/Query/Query"
import Searchbox from "../components/tools/SearchBox/SearchBox"
import Filter from "../components/tools/Filter/Filter"
import SideNews from "../components/tools/SidewNews/SideNews"

export default () => {
  const newses = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 4) {
        edges {
          node {
            title
            acf {
              link
              image {
                source_url
              }
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges

  return (
    <Layout>
      <div id="header-padding" />
      <Container id="search-page" fluid>
        <Row>
          <Col lg="7">
            <Searchbox showFilter />
            <Query />
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <Filter id="search-page-filter" />
            <SideNews newses={newses} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
