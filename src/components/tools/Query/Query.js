import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

// style
import "./Query.scss"

export default () => {
  return (
    <Container fluid id="search-result-container">
      <Row>
        {[1, 2, 3, 4].map(item => (
          <Col className={"search-result"}>
            <Link to="#">
              {/* title */}
              <h3 className={"is-3 bold"}>title</h3>

              {/* meta */}
              <div className={"meta"}>
                <p className={"is-5 light"}>教務處</p>
                <p className={"is-5 light"}>2020/1/11</p>
                <p className={"is-5 tag"}>熱門</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
