import React from "react"

import "./Content.scss"
import pdf from "../../../images/icons/files/pdf.svg"

const Content = props => {
  return (
    <article className={"content"}>
      {/* title */}
      <h2
        className={"is-2 bold serif"}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{props.genre}</p>
        <p className={"is-5 light"}>{props.date}</p>
        <p className={"is-5 tag"}>熱門</p>
      </div>

      {/* files */}
      <div className={"files"}>
        {props.files
          ? props.files.map(file => (
              <>
                <a href={file.file.url}>
                  <div className={"file pdf"}>
                    {/* icon */}
                    <img src={pdf}></img>
                    {/* name */}
                    <p className={"is-5"}>{file.file.filename}</p>
                  </div>
                </a>
              </>
            ))
          : null}
        {props.urls
          ? props.urls.map(url => (
              <>
                <a href={url.url}>
                  <div className={"file pdf"}>
                    {/* icon */}
                    <img src={pdf}></img>
                    {/* name */}
                    <p className={"is-5"}>{url.description}</p>
                  </div>
                </a>
              </>
            ))
          : null}
      </div>

      {/* context */}
      <p
        className={"is-4  context"}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </article>
  )
}

export default Content
