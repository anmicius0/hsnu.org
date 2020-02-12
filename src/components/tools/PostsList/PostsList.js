import React from "react"
import { Container, Row, Col, Nav } from "react-bootstrap"

import "./Postslist.scss"
const PostsList = () => {
  return (
    <div className={"posts"}>
      {/* genres */}
      <Nav variant="tabs" className={"genres"}>
        <Nav.Item className={"genre active"}>
          <h3 className={"is-3"}>學生事務</h3>
        </Nav.Item>
        {[1, 2, 3].map(utem => (
          <Nav.Item className={"genre"}>
            <h3 className={"is-3"}>學生事務</h3>
          </Nav.Item>
        ))}
        <Nav.Item className={"genre more"}>
          <h3 className={"is-3"}>更多...</h3>
        </Nav.Item>
      </Nav>

      {/*  */}
      <Container>
        <Row className={"flex-column"}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <Col className={"post"}>
              <a href="#">
                <h4 className={"is-4"}>
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                  108學年度師大附中2019/20年「香港大學校長推薦計劃」推薦辦法
                </h4>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default PostsList
