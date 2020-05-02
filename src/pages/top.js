import React, { useState, useEffect } from "react"
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
  const wordpress_id =
    typeof document !== "undefined"
      ? new URL(document.URL).searchParams.get("id")
      : ""
  const [post, setPost] = useState()
  const [status, setStatus] = useState("Loading...")

  useEffect(() => {
    fetch(
      `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/top?include=${wordpress_id}`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPost({
          wordpress_id: wordpress_id,
          title: data[0].title.rendered,
          content: data[0].content.rendered,
          genre: data[0].acf.genre,
          date: data[0].date,
          urls: data[0].acf.repeater_link,
          // author: data[0].author_meta.author_description,
        })

        console.log(post)
      })
      .catch(err => {
        console.log(err)
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
                urls={post.urls}
                author={"管理者"}
              />
            ) : (
              <Content title={status} />
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
    </>
  )
}
