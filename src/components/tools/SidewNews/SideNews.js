import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import PropTypes from "prop-types"

import "./SideNews.scss"

const SideNews = ({ newses }) => {
  return (
    <section className={"side-news"}>
      <h2 className={"is-2 serif bold"}>更多作品</h2>
      {/* It's from GraphQL or REST */}
      {newses[0].node
        ? // from GraphQl
          newses.map(news => (
            // news card small (component)
            <a
              href={news.node.acf.link}
              className={"news-card-s"}
              key={news.node.title}
            >
              {/* cover */}
              <figure>
                <LazyLoadImage
                  src={news.node.acf.image.source_url + ".webp"}
                  alt={news.node.title}
                />
              </figure>

              {/* title */}
              <div className={"title"}>
                <h4 className={"is-4 serif bold"}>{news.node.title}</h4>
              </div>
            </a>
          ))
        : // from REST
          newses.map(news => (
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
                  className={"is-4 serif bold"}
                  dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                />
              </div>
            </a>
          ))}
    </section>
  )
}

SideNews.prototype = {
  newses: PropTypes.array,
}

export default SideNews
