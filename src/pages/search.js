import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import Layout from "../components/layout/Layout"

// style
import "../styles/scss/search/search.scss"

// tools
import Query from "../components/tools/Query/Query"
import Searchbox from "../components/tools/SearchBox/SearchBox"
import Filter from "../components/tools/Filter/Filter"
import SideNews from "../components/tools/SidewNews/SideNews"

export default ({ location }) => {
  //
  //  News
  //
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

  //
  //  search
  //
  const [results, setResults] = useState([])
  const [status, setStatus] = useState("Searching...")

  // get search paramaters
  // (remember, there is no browser at build time)
  var search_param =
    typeof window !== "undefined"
      ? new URL(location.href).searchParams.get("search")
      : ""
  var genre_param =
    typeof window !== "undefined"
      ? new URL(location.href).searchParams.get("genre")
      : ""
  var subgenre_param =
    typeof window !== "undefined"
      ? new URL(location.href).searchParams.get("subgenre")
      : ""

  // request wordpress api
  useEffect(() => {
    axios
      .get(
        `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/spost?${
          search_param ? "search=" + search_param : ""
        }${
          genre_param
            ? "&filter[meta_query][0][key]=genre&filter[meta_query][0][value]=" +
              genre_param
            : ""
        }${
          subgenre_param
            ? "&filter[meta_query][1][key]=sub_genre_student&filter[meta_query][1][value]=" +
              subgenre_param
            : ""
        }
      `
      )
      .then(res => {
        console.log(res.data)
        res.data.length === 0
          ? setStatus("Nothing Found (´･_･`)")
          : setResults(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Layout title={`${search_param} - 搜尋 師大附中`}>
      <div id="header-padding" />
      <Container id="search-page" fluid>
        <Row>
          <Col lg="7">
            <Searchbox showFilter />
            {results.length ? (
              <Query results={results} />
            ) : (
              <Container fluid id="search-result-container">
                <Row>
                  <Col className={"search-result"}>
                    {/* title */}
                    <h3 className={"is-3 bold"}>{status}</h3>
                  </Col>
                </Row>
              </Container>
            )}
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <Filter id="search-page-filter" />
            {newses ? <SideNews newses={newses} /> : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
