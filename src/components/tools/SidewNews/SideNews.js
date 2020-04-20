import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LazyLoadImage } from "react-lazy-load-image-component"
import PropTypes from "prop-types"
import axios from "axios"

import "./SideNews.scss"

const SideNews = ({ infinity = false }) => {
  const GraphqlNews = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 5) {
        edges {
          node {
            title
            acf {
              link
              image {
                sizes {
                  thumbnail
                }
              }
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges

  const [RestNews, setRestNews] = useState()
  const [page_now, setPage_now] = useState(1)

  // first render
  useEffect(() => {
    if (infinity) {
      axios
        .get(
          `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/news?offset=5&per_page=20&page=1`
        )
        .then(res => {
          setPage_now(page_now + 1)
          setRestNews(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  // load when hit the (1/2) bottom
  useEffect(() => {
    if (infinity) {
      window.onscroll = function() {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight / 2
        ) {
          axios
            .get(
              `https://wordpress.hsnu.org/index.php/wp-json/wp/v2/news?per_page=20&page=${page_now}`
            )
            .then(res => {
              console.log(res.data)
              setPage_now(page_now + 1)
              setRestNews(RestNews.concat(res.data))
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
  }, [RestNews])

  return (
    <section className={"side-news"}>
      <h2 className={"is-2 bold"}>更多作品</h2>

      {/* from GraphQl */}
      {GraphqlNews.map(news => (
        // news card small (component)
        <a
          href={news.node.acf.link}
          className={"news-card-s"}
          key={news.node.title}
        >
          {/* cover */}
          <figure>
            <LazyLoadImage
              src={news.node.acf.image.sizes.thumbnail}
              alt={news.node.title}
            />
          </figure>

          {/* title */}
          <div className={"title"}>
            <h4 className={"is-4"}>{news.node.title}</h4>
          </div>
        </a>
      ))}

      {/*  from REST */}
      {RestNews
        ? RestNews.map(news => (
            // news card small (component)
            <a
              href={news.acf.link}
              className={"news-card-s"}
              key={news.title.rendered}
            >
              {/* cover */}
              <figure>
                <img
                  src={news.acf.image.sizes.thumbnail}
                  alt={news.title.rendered}
                />
              </figure>

              {/* title */}
              <div className={"title"}>
                <h4
                  className={"is-4"}
                  dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                />
              </div>
            </a>
          ))
        : null}
    </section>
  )
}

SideNews.prototype = {
  newses: PropTypes.array,
}

export default SideNews
