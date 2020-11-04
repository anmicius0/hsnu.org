import React, { useState, useEffect } from "react"
import Seo from "../components/layout/Seo"
import { Container, Row, Col } from "react-bootstrap"
import { LazyLoadComponent } from "react-lazy-load-image-component"
import axios from "axios"

// style
import "../templates/Article/Article.scss"

// tools
import SideNews from "../components/tools/SidewNews/SideNews"
import Content from "../components/tools/Content/Content"
import RecommandVideo from "../components/tools/RecommandVideo/RecommandVideo"

export default () => {
  // get post type e.g: spost, top
  const post_type =
    typeof document !== "undefined"
      ? new URL(document.URL).searchParams.get("post_type")
      : ""

  // get post id
  const wordpress_id =
    typeof document !== "undefined"
      ? new URL(document.URL).searchParams.get("id")
      : ""

  // set post content and status
  const [post, setPost] = useState()
  const [status, setStatus] = useState("Loading...")

  // fetch post
  useEffect(() => {
    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/${post_type}?include=${wordpress_id}`
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
          files: res.data[0].acf.repeater_file,
          office: "網管小組",
        })
      })
      .catch(err => {
        setStatus("404 查無此網址")
      })
  }, [])

  return (
    <>
      {post ? <Seo title={post.title} description={post.content} /> : <Seo />}

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
                files={post.files}
                office={post.office}
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
