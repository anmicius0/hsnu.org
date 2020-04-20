import React from "react"
import axios from "axios"
import Async from "react-async"

import "./Content.scss"
import Files from "../Files/Files"

const Content = ({ contentObj }) => {
  return (
    <article className={"content"}>
      {/* title */}
      <h1
        className={"is-2 bold"}
        dangerouslySetInnerHTML={{ __html: contentObj.title.rendered }}
      />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{contentObj.acf.genre}</p>
        <p className={"is-5 light"}>{contentObj.date}</p>
        <p className={"is-5 tag"}>熱門</p>
      </div>

      {/* files */}
      <Files
        //  files={files}
        urls={contentObj.acf.repeater_link}
      ></Files>

      {/* context */}
      <p
        className={"is-4 context"}
        dangerouslySetInnerHTML={{ __html: contentObj.content.rendered }}
      />
    </article>
  )
}

export default Content
