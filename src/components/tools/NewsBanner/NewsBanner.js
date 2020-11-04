import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Parallax } from "react-parallax"

// style
import "./NewsBanner.scss"

export const NewsBanner = ({ headline }) => {
  return (
    <Parallax
      className={"NewsBanner"}
      bgImage={headline.node.acf.image.source_url}
      strength={500}
    >
      <div className={"fade-layer"}></div>
      <a
        href={headline.node.acf.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className={"is-1 serif bold"}>
          <span className={"is-3"}>附中學生作品｜</span>
          <br />
          {headline.node.title}
        </h1>
      </a>
    </Parallax>
  )
}
const Landing = () => {
  const headline = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 1, sort: {fields: date, order: DESC}, skip: 1) {
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

  return <NewsBanner headline={headline} />
}

export default Landing
