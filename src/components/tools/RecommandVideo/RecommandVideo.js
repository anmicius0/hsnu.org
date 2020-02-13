import React from "react"

import "./RecommandVideo.scss"

const RecommandVideo = () => {
  return (
    <div className={"RecommandVideo"}>
      {/* title */}
      <h2 className={"is-2 bold serif"}>推薦內容</h2>

      {/* embed */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/w0mog_xxY9Q?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default RecommandVideo
