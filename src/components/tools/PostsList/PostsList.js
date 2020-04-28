import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"
import PropTypes from "prop-types"

import "./Postslist.scss"

const PostsList = ({ posts }) => {
  // toggle tabs
  useEffect(() => {
    // please select the text inside .genre (.genre > h2)
    const genres = document.querySelectorAll(".genre:not(.more) h2")
    for (var i = 0; i < genres.length; i++) {
      genres[i].addEventListener("click", e => {
        // clear all .active
        for (var i = 0; i < genres.length; i++) {
          if (genres[i].classList.contains("active")) {
            genres[i].classList.remove("active")
          }
        }

        e.target.classList.add("active")
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

  const [current_posts, setCurrent_posts] = useState(posts.studentPosts.edges)
  const [new_post, setNew_post] = useState([{ title: "loading...", id: 1 }])
  const [genreNow, setGenreNow] = useState("allPosts")

  useEffect(() => {
    fetch(
      `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/spost?per_page=11`
    )
      .then(res => res.json())
      .then(data => {
        setNew_post(
          data.map(post => {
            return {
              title: post.title.rendered,
              id: post.id,
            }
          })
        )

        console.log(new_post)
      })
  }, [])

  return (
    <div className={"posts"}>
      {/* genres */}
      <Nav variant="tabs" className={"genres"}>
        {/* run through genres */}
        {genreTabs.map((item, index) => (
          <Nav.Item className={"genre"} key={item.name}>
            <h2
              className={`is-3 bold ${index === 0 ? "active" : null}`}
              onClick={() => {
                setGenreNow(item.codeName)
                if (item.codeName !== "allPosts") {
                  setCurrent_posts(posts[item.codeName].edges)
                }
              }}
            >
              {item.name}
            </h2>
          </Nav.Item>
        ))}

        {/* more tab */}
        <Nav.Item className={"genre"}>
          <Link to="/search">
            <h2 className={"is-3 bold more"}>更多...</h2>
          </Link>
        </Nav.Item>
      </Nav>

      {/* List of post */}
      <Container id="post-list">
        <Row className={"flex-column"}>
          {genreNow === "allPosts"
            ? new_post.map(post => (
                <Col className={"post"} key={post.id}>
                  <Link to={`/preview?id=${post.id}`}>
                    <p
                      className={"is-4"}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  </Link>
                </Col>
              ))
            : current_posts.map(post => (
                <Col className={"post"} key={post.node.wordpress_id}>
                  <Link to={`/post/${post.node.wordpress_id}`}>
                    <p
                      className={"is-4"}
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
