import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"
import PropTypes from "prop-types"

import "./Postslist.scss"

const PostsList = ({ posts }) => {
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
    { name: "最新", codeName: "allPosts" },
    { name: "學生", codeName: "studentPosts" },
    { name: "研習", codeName: "researchPosts" },
    { name: "競賽", codeName: "racePosts" },
    { name: "教師", codeName: "teacherPosts" },
  ]

  const [current_posts, setCurrent_posts] = useState(posts.allPosts.edges)

  return (
    <div className={"posts"}>
      {/* genres */}
      <Nav variant="tabs" className={"genres"}>
        {genreTabs.map((item, index) =>
          index === 0 ? (
            <Nav.Item className={"genre active"} key={item.name}>
              <h3
                className={"is-3 serif bold"}
                onClick={() => {
                  setCurrent_posts(posts[item.codeName].edges)
                }}
              >
                {item.name}
              </h3>
            </Nav.Item>
          ) : (
            <Nav.Item className={"genre"} key={item.name}>
              <h3
                className={"is-3 serif bold"}
                onClick={() => {
                  setCurrent_posts(posts[item.codeName].edges)
                }}
              >
                {item.name}
              </h3>
            </Nav.Item>
          )
        )}
        <Nav.Item className={"genre more"}>
          <Link to="/search">
            <h3 className={"is-3 serif bold"}>更多...</h3>
          </Link>
        </Nav.Item>
      </Nav>

      <Container>
        <Row className={"flex-column"}>
          {current_posts.map(post => (
            <Col className={"post"} key={post.node.title}>
              <Link to={"/post/" + post.node.wordpress_id}>
                <h4
                  className={"is-4 serif semi"}
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

PostsList.prototype = {
  posts: PropTypes.array,
}

export default PostsList
