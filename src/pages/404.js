import React from "react"
import Seo from "../components/layout/Seo"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"

// style
import "../templates/Article/Article.scss"

// tools
import SideNews from "../components/tools/SidewNews/SideNews"
import Content from "../components/tools/Content/Content"
import RecommandVideo from "../components/tools/RecommandVideo/RecommandVideo"

export default () => {
  // check if it's a post
  const wordpress_id =
    typeof document !== "undefined"
      ? new RegExp(/\/post\/(\d+)/g).test(new URL(document.URL).pathname)
        ? new URL(document.URL).pathname.match(/(\d+)/g)
        : ""
      : ""

  // redirect to preview page
  if (typeof window !== "undefined" && wordpress_id) {
    window.location = `/preview?id=${wordpress_id}`
  }

  return (
    <>
      <Seo title={"404"} />

      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            <Content
              title={"404 查無此網址"}
              genre={"404"}
              date={"404/04/04"}
              content={"但也歡迎逛逛旁邊的學生自製內容"}
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
      <script>
        {/* // check if it's a post */}
        const wordpress_id = typeof document !== "undefined" ? new
        RegExp(/\/post\/(\d+)/g).test(new URL(document.URL).pathname) ? new
        URL(document.URL).pathname.match(/(\d+)/g) : "" : ""
        {/* // redirect to preview page */}
        if (typeof window !== "undefined" && wordpress_id)
        {(window.location = `/preview?id=${wordpress_id}`)}
      </script>
    </>
  )
}
