import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"

import "./Postslist.scss"

const PostsList = props => {
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

  // tabs
  const genreTabs = [
    { name: "學生", codeName: "studentPosts" },
    { name: "研習", codeName: "researchPosts" },
    { name: "競賽", codeName: "racePosts" },
    { name: "教師", codeName: "teacherPosts" },
  ]

  const [postlist, setPostlist] = useState(props.postlist.allPosts.edges)

  return (
    <div className={"posts"}>
      {/* genres */}
      <Nav variant="tabs" className={"genres"}>
        {genreTabs.map((item, index) =>
          index === 0 ? (
            <Nav.Item className={"genre active"}>
              <h3
                className={"is-3"}
                onClick={() => {
                  setPostlist(props.postlist[item.codeName].edges)
                }}
              >
                {item.name}
              </h3>
            </Nav.Item>
          ) : (
            <Nav.Item className={"genre"}>
              <h3
                className={"is-3"}
                onClick={() => {
                  setPostlist(props.postlist[item.codeName].edges)
                }}
              >
                {item.name}
              </h3>
            </Nav.Item>
          )
        )}
        <Nav.Item className={"genre more"}>
          <h3 className={"is-3"}>更多...</h3>
        </Nav.Item>
      </Nav>

      <Container>
        <Row className={"flex-column"}>
          {postlist.map(item => (
            <Col className={"post"}>
              <Link to={"/post/" + item.node.wordpress_id}>
                <h4
                  className={"is-4"}
                  dangerouslySetInnerHTML={{ __html: item.node.title }}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default PostsList
