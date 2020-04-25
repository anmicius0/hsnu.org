import React, { useState, useEffect } from "react"
import Seo from "../components/layout/Seo"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import axios from "axios"

// style
import "../styles/scss/404/404.scss"

// tools
import SideNews from "../components/tools/SidewNews/SideNews"
import Content from "../components/tools/Content/Content"
import RecommandVideo from "../components/tools/RecommandVideo/RecommandVideo"

export default () => {
  const wordpress_id =
    typeof document !== "undefined"
      ? new URL(document.URL).searchParams.get("id")
      : ""
  const [post, setPost] = useState()
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/spost?include=${wordpress_id}`
      )
      .then(res => {
        console.log(res.data[0])
        setPost({
          wordpress_id: wordpress_id,
          title: res.data[0].title.rendered,
          content: res.data[0].content.rendered,
          genre: res.data[0].acf.genre,
          date: res.data[0].date,
          urls: res.data[0].acf.repeater_link,
        })
      })
      .catch(err => {
        setStatus("404 查無此網址")
      })
  }, [])

  return (
    <>
      <Seo />

      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            {post ? (
              <Content
                title={post.title}
                genre={post.genre}
                date={post.date}
                content={post.content}
                urls={post.repeater_link}
              />
            ) : (
              <Content
                title={status}
                genre={"404"}
                date={"404/04/04"}
                content={"但也歡迎逛逛旁邊的學生自製內容"}
              />
            )}
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
        if (new URL(document.URL).pathname.test(/.*\/post\/(\d+)/g)){" "}
        {window.location.replace(
          `${process.env.SITE_URL}/404?id=${new URL(
            document.URL
          ).pathname.match(/(\d+)/g)}`
        )}
      </script>
    </>
  )
}
