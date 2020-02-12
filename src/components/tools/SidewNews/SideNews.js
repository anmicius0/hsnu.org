import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import "./SideNews.scss"

import asylum from "../../../images/cover/asylum.jpeg"

const SideNews = () => {
  return (
    <section className={"side-news"}>
      <h2 className={"is-2 serif bold"}>更多作品</h2>
      {[1, 2, 3, 4].map(item => (
        // news card small (component)
        <a href="#" className={"news-card-s"}>
          {/* cover */}
          <figure>
            <img src={asylum}></img>
          </figure>

          {/* title */}
          <div className={"title"}>
            <h4 className={"is-4 serif bold"}>
              從武漢到世界──2019新型冠狀病毒疫情即時脈動
            </h4>
          </div>
        </a>
      ))}
    </section>
  )
}

export default SideNews
