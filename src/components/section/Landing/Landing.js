import React from "react"
import { Jumbotron } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

// style
import "./Landing.scss"

export const LandingPure = ({ headline }) => {
  return (
    <>
      <Jumbotron className="landing" fluid>
        <img
          rel="preload"
          src={headline.node.acf_news.image.sourceUrl}
          alt={"Headline"}
        ></img>
        <div className={"fade-layer"}></div>
        <a
          href={headline.node.acf_news.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className={"is-1 serif bold"}>
            <span className={"is-3"}>附中學生作品｜</span>
            <br />
            {headline.node.title}
          </h1>
        </a>
      </Jumbotron>
    </>
  )
}
const Landing = () => {
  const headline = useStaticQuery(graphql`
    {
      allWpNews(limit: 1, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            acf_news {
              image {
                sourceUrl
              }
              link
            }
          }
        }
      }
    }  
  `).allWpNews.edges[0]

  return <LandingPure headline={headline} />
}

export default Landing
