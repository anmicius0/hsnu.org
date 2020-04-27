import React from "react"

import "./Content.scss"
import Files from "../Files/Files"

const Content = ({ title, genre, date, content, urls, author }) => {
  return (
    <article className={"content"}>
      {/* title */}
      <h1 className={"is-2 bold"} dangerouslySetInnerHTML={{ __html: title }} />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{genre}</p>
        <p className={"is-5 light"}>{date}</p>
        <p className={"is-5 tag"}>{author}</p>
      </div>

      {/* files */}
      <Files
        //  files={files}
        urls={urls}
      ></Files>

      {/* context */}
      <p
        className={"is-4 context"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default Content
