import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { useStaticQuery, graphql } from "gatsby"

// style
import "./NewsBanner.scss"

export const NewsBanner = ({ headline }) => {
  return (
    <Jumbotron id="NewsBanner">
      <img
        rel="preload"
        src={headline.node.acf.image.sizes.wordpress_1536x1536}
        alt={"Headline"}
      ></img>
      <div className={"fade-layer"}></div>
      <a href={headline.node.acf.link}>
        <h1 className={"is-1 serif bold"}>
          <span className={"is-3"}>附中學生作品｜</span>
          <br />
          {headline.node.title}
        </h1>
      </a>
    </Jumbotron>
  )
}
const Landing = () => {
  const headline = useStaticQuery(graphql`
    {
      allWordpressWpNews(
        limit: 1
        sort: { fields: date, order: DESC }
        skip: 1
      ) {
        edges {
          node {
            title
            acf {
              image {
                sizes {
                  wordpress_1536x1536
                }
              }
              link
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges[0]

  return <NewsBanner headline={headline} />
}

export default Landing
