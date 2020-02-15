import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"

import "./Postslist.scss"
const PostsList = () => {
  // query
  const result = useStaticQuery(graphql`
    query {
      wordpress {
        sposts {
          edges {
            node {
              title(format: RENDERED)
            }
          }
        }
      }
    }
  `).wordpress.sposts.edges

  // toggle tabs
  useEffect(() => {
    const genres = document.querySelectorAll(".genre:not(.more)")
    for (var i = 0; i < genres.length; i++) {
      genres[i].addEventListener("click", e => {
        // clear all .active
        for (var i = 0; i < genres.length; i++) {
          if (genres[i].classList.contains("active")) {
            genres[i].classList.remove("active")
          }
        }

        e.target.parentElement.classList.add("active")
      })
    }
  }, [])

  return (
    <div className={"posts"}>
      {/* genres */}
      <Nav variant="tabs" className={"genres"}>
        {["學生事務", "研習", "競賽", "教師"].map((item, index) =>
          index === 0 ? (
            <Nav.Item className={"genre active"}>
              <h3 className={"is-3"}>{item}</h3>
            </Nav.Item>
          ) : (
            <Nav.Item className={"genre"}>
              <h3 className={"is-3"}>{item}</h3>
            </Nav.Item>
          )
        )}
        <Nav.Item className={"genre more"}>
          <h3 className={"is-3"}>更多...</h3>
        </Nav.Item>
      </Nav>

      <Container>
        <Row className={"flex-column"}>
          {result.map(item => (
            <Col className={"post"}>
              <a href="#">
                <h4
                  className={"is-4"}
                  dangerouslySetInnerHTML={{ __html: item.node.title }}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default PostsList
