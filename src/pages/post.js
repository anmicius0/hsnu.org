import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
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
  // get slug
  const slug = new URL(location.href).searchParams.get("slug")

  //  when scroll near the bottom, add news
  const [newses, setNewses] = useState(null)
  const [page_now, setPage_now] = useState(1)

  // first render
  useEffect(() => {
    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/news?per_page=20&page=1`
      )
      .then(res => {
        console.log(res.data)
        setPage_now(page_now + 1)
        setNewses(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // load when hit the (1/2) bottom
  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight / 2
      ) {
        axios
          .get(
            `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/news?per_page=20&page=${page_now}`
          )
          .then(res => {
            console.log(res.data)
            setPage_now(page_now + 1)
            setNewses(newses.concat(res.data))
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }, [newses])

  var [content_obj, setContentObj] = useState()
  useEffect(() => {
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
  }, [content_obj])

  return (
    <>
      <Layout
        title={content_obj ? content_obj.title.rendered : null}
        description={content_obj ? content_obj.content.rendered : null}
        article
      >
        <div id="header-padding" />
        <Container id="article" fluid>
          <Row>
            <Col lg="7">
              {content_obj ? <Content content_obj={content_obj} /> : null}
              <LazyLoadComponent>
                <RecommandVideo />
              </LazyLoadComponent>
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              {newses ? <SideNews newses={newses} /> : null}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
