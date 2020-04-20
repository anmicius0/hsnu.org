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
  //  search
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
    <Layout title={`搜尋「${search_param}」`}>
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
            <SideNews infinity={true} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
