import React from "react"

import "./Content.scss"
import Files from "../Files/Files"

const Content = ({ title, genre, date, content, files, urls }) => {
  // format
  const date2 = new Date(date)

  return (
    <article className={"content"}>
      {/* title */}
      <h1
        className={"is-2 bold serif"}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{genre}</p>
        <p className={"is-5 light"}>
          {date2.getFullYear() +
            "-" +
            (date2.getMonth() + 1) +
            "-" +
            date2.getDate()}
        </p>
        <p className={"is-5 tag"}>熱門</p>
      </div>

      {/* files */}
      <Files files={files} urls={urls}></Files>

      {/* context */}
      <p
        className={"is-4 context"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default Content
