import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./Article.scss"

// tools
import SideNews from "../../tools/SidewNews/SideNews"
import Content from "../../tools/Content/Content"
import RecommandVideo from "../../tools/RecommandVideo/RecommandVideo"

const Article = props => {
  const [news, setNews] = useState([1, 2, 3, 4, 5])

  // when scroll near the bottom, add news
  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight / 7
      ) {
        // you're at the bottom of the page
        setTimeout(() => {
          setNews(news.concat([1, 2, 3, 4, 5]))
          console.log(news)
        }, 500)
      }
    }
  }, [news])

  return (
    <>
      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            <Content {...props} />
            <RecommandVideo />
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <SideNews news={news} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Article
