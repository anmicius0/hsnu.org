import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

// style
import "./Query.scss"

export default ({ results }) => {
  return (
    <Container fluid id="search-result-container">
      <Row>
        {results.map(result => (
          <Col className={"search-result"}>
            <Link to={`/post/?slug=${result.id}`}>
              {/* title */}
              <h3
                className={"is-3 bold"}
                dangerouslySetInnerHTML={{ __html: result.title.rendered }}
              />

              {/* meta */}
              <div className={"meta"}>
                <p className={"is-5 light"}>教務處</p>
                <p className={"is-5 light"}>2020/1/11</p>
                {/* <p classNam e={"is-5 tag"}>熱門</p> */}
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
