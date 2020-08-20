import React, { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useStaticQuery, graphql } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron"

// style
import "./Propaganda.scss"

const Propaganda = () => {
  // get image
  const image = useStaticQuery(graphql`
    query MyQuery {
      allWordpressWpPropaganda(limit: 1) {
        edges {
          node {
            title
            acf {
              image {
                sizes {
                  medium
                  large
                }
              }
            }
          }
        }
      }
    }
  `).allWordpressWpPropaganda.edges[0].node

  return (
    <Jumbotron id="propaganda">
      {image ? (
        <>
          <LazyLoadImage
            rel="preload"
            src={image.acf.image.sizes.medium}
            alt={"propaganda"}
          />
          <div className={"fade-layer"}></div>
          <a
            href={image.acf.image.sizes.large}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={"is-1 serif bold"}>
              <span className={"is-3"}>近期活動｜</span>
              <br />
              {image.title}
            </h1>
          </a>
        </>
      ) : null}
    </Jumbotron>
  )
}

export default Propaganda
