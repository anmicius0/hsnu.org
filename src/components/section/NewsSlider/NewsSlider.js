import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Swiper from "react-id-swiper"

// style
import "./NewsSlider.scss"

const newsSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const news = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 4, skip: 1) {
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
  `).allWordpressWpNews.edges

  // config of swiper
  const params = {
    loop: "true",
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  return (
    <>
      <div id="news-slider">
        <Swiper {...params}>
          {news.map(news => (
            <div className={"news-card-l"} key={news.node.title}>
              <a href={news.node.acf.link}>
                {/* cover */}
                <figure>
                  <img
                    src={news.node.acf.image.source_url}
                    alt="feature news"
                  />
                </figure>

                {/* title and sub-title */}
                <div className={"text"}>
                  {/* title */}
                  <h3 className={"is-3 serif bold"}>{news.node.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default newsSlider
