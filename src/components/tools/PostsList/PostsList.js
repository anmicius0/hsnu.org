//////////////////////////////////////
// The component is a post list with genre tab (Graphql used)
//////////////////////////////////////

import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Nav } from "react-bootstrap"

import "./Postslist.scss"

const PostsList = () => {
  // get other post type by graphql
  const posts = useStaticQuery(graphql`
    {
      allPosts: allWpSpost(limit: 10, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            databaseId
          }
        }
      }
      studentPosts: allWpSpost(filter: {acf_sposts: {genre: {eq: "學生"}}}, limit: 10, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            databaseId
          }
        }
      }
      teacherPosts: allWpSpost(filter: {acf_sposts: {genre: {eq: "教師"}}}, limit: 10, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            databaseId
          }
        }
      }
      honorPosts: allWpSpost(filter: {acf_sposts: {genre: {eq: "榮譽榜"}}}, limit: 10, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            databaseId
          }
        }
      }
    }  
  `)

  // when toggle tabs
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
    { name: "教師", codeName: "teacherPosts" },
    { name: "榮譽榜", codeName: "honorPosts" },
  ]

  const [current_posts, setCurrent_posts] = useState(posts.allPosts.edges)
  const [genreNow, setGenreNow] = useState("allPosts")

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
                setCurrent_posts(posts[item.codeName].edges)
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
          {current_posts.map(post => (
            <Col className={"post"} key={post.node.databaseId}>
              <Link to={`/post/${post.node.databaseId}`}>
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

export default PostsList
