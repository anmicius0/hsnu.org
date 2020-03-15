import React from "react"

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
            <a href={news.node.acf.link} className={"news-card-s"}>
              {/* cover */}
              <figure>
                <img src={news.node.acf.image.source_url}></img>
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
            <a href={news.acf.link} className={"news-card-s"}>
              {/* cover */}
              <figure>
                <img src={news.acf.image.url}></img>
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

export default SideNews
