import React, { useEffect, useState } from "react"
import Seo from "../components/layout/Seo"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { LazyLoadComponent } from "react-lazy-load-image-component"

// style
import "../styles/scss/article/Article.scss"

// tools
import SideNews from "../components/tools/SidewNews/SideNews"
import Content from "../components/tools/Content/Content"
import RecommandVideo from "../components/tools/RecommandVideo/RecommandVideo"

export default () => {
  var [contentObj, setContentObj] = useState()
  useEffect(() => {
    // get slug
    const slug = new URL(document.URL).searchParams.get("slug") || false

    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/spost?slug=${slug}`
      )
      .then(res => {
        console.log(res.data[0])
        setContentObj(res.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [contentObj])

  return (
    <>
      <Seo
        title={contentObj ? contentObj.title.rendered : null}
        description={contentObj ? contentObj.content.rendered : null}
        article
      />
      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            {contentObj ? <Content contentObj={contentObj} /> : null}
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
