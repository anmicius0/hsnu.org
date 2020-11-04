import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Jumbotron from "react-bootstrap/Jumbotron"
import friend from "./friends.jpg"

// style
import "./Propaganda.scss"

const Propaganda = () => {
  return (
    <Jumbotron id="propaganda">
      
        <>
          <LazyLoadImage
            rel="preload"
            src={friend}
            alt={"propaganda"}
          />
          <div className={"fade-layer"}></div>
          <a
            href={"https://github.com/HSNU-ORG/hsnu.org"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={"is-1 serif bold"}>
              <span className={"is-3"}>為網站做出貢獻｜</span>
              <br />
              {"加入網管小組"}
            </h1>
          </a>
        </>
        
    </Jumbotron>
  )
}

export default Propaganda
