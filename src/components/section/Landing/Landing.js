import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { useStaticQuery, graphql } from "gatsby"

// style
import "./Landing.scss"

const Landing = () => {
  const headline = useStaticQuery(graphql`
    query MyQuery {
      allWordpressWpNews(limit: 1) {
        edges {
          node {
            title
            acf {
              image {
                source_url
              }
              link
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges[0]

  return (
    <Jumbotron fluid>
      <img src={headline.node.acf.image.source_url} alt={"Headline"}></img>
      <div className={"fade-layer"}></div>
      <a href={headline.node.acf.link}>
        <h1 className={"is-1 serif bold"}>{headline.node.title}</h1>
      </a>
    </Jumbotron>
  )
}

export default Landing
