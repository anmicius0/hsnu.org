import React from "react"
import axios from "axios"
import Async from "react-async"

import "./Content.scss"
import Files from "../Files/Files"

const Content = ({ content_obj }) => {
  return (
    <article className={"content"}>
      {/* title */}
      <h1
        className={"is-2 bold"}
        dangerouslySetInnerHTML={{ __html: content_obj.title.rendered }}
      />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{content_obj.acf.genre}</p>
        <p className={"is-5 light"}>{content_obj.date}</p>
        <p className={"is-5 tag"}>熱門</p>
      </div>

      {/* files */}
      <Files
        //  files={files}
        urls={content_obj.acf.repeater_link}
      ></Files>

      {/* context */}
      <p
        className={"is-4 context"}
        dangerouslySetInnerHTML={{ __html: content_obj.content.rendered }}
      />
    </article>
  )
}

export default Content
