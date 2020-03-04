import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"

// style
import "./Article.scss"

// tools
import SideNews from "../../components/tools/SidewNews/SideNews"
import Content from "../../components/tools/Content/Content"
import RecommandVideo from "../../components/tools/RecommandVideo/RecommandVideo"

export default ({ data }) => {
  ////////////////////////////////////////////////
  //    when scroll near the bottom, add news   //
  ////////////////////////////////////////////////
  const [newses, setNewses] = useState(null)
  const [page_now, setPage_now] = useState(1)

  // first render
  useEffect(() => {
    axios
      .get(
        `http://104.196.34.86/index.php/wp-json/wp/v2/news?per_page=20&page=1`
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
            `http://104.196.34.86/index.php/wp-json/wp/v2/news?per_page=20&page=${page_now}`
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
  ///////////////
  //    End   ///
  ///////////////

  return (
    <Layout>
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
              files={data.allWordpressWpSpost.edges[0].node.acf.repeater_file}
            />
            <RecommandVideo />
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            {newses ? <SideNews newses={newses} /> : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    allWordpressWpSpost(filter: { wordpress_id: { eq: $id } }) {
      edges {
        node {
          title
          wordpress_id
          content
          acf {
            genre
            repeater_file {
              file {
                url {
                  source_url
                }
                filename
              }
            }
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
