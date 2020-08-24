import React from "react"
import Sticky from "react-sticky-el"

import "./RecommandVideo.scss"

const RecommandVideo = () => {
  return (
    <Sticky className={"RecommandVideo"} topOffset={80}>
      {/* title */}
      <h2 className={"is-2 bold"}>推薦內容</h2>

      {/* embed */}
      <iframe
        title="youtube"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/XwI-XhWWhQw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Sticky>
  )
}

export default RecommandVideo
