import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout/Layout"

// style
import "../styles/scss/search/search.scss"

// tools
import Query from "../components/tools/Query/Query"
import Searchbox from "../components/tools/SearchBox/SearchBox"
import Filter from "../components/tools/Filter/Filter"

export default () => {
  return (
    <Layout>
      <div id="header-padding" />
      <Container id="search-page" fluid>
        <Row>
          <Col lg="4">
            <Filter />
          </Col>
          <Col lg={{ span: 7, offset: 1 }}>
            <Searchbox />
            <Query />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
