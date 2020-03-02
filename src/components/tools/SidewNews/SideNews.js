import React from "react"

import "./SideNews.scss"

import asylum from "../../../images/cover/asylum.jpeg"

const SideNews = ({ newses }) => {
  return (
    <section className={"side-news"}>
      <h2 className={"is-2 serif bold"}>更多作品</h2>
      {newses.map(news => (
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
      ))}
    </section>
  )
}

export default SideNews
