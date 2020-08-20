import React from "react"
import { identityFile, getIcon } from "./FilesFunction"
import "./File.scss"

const Content = ({ files, urls }) => {
  return (
    <>
      {/* files */}
      <div className={"files"}>
        {files
          ? files.map(file => (
              <>
                <a
                  href={file.file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`file ${identityFile(file.file.filename)}`}>
                    {/* icon */}
                    <img
                      src={getIcon(file.file.filename)}
                      alt={"File icon"}
                    ></img>

                    {/* name */}
                    <p className={"is-5"}>{file.file.filename}</p>
                  </div>
                </a>
              </>
            ))
          : null}

        {/* render urls */}
        {urls
          ? urls.map(url => (
              <>
                <a href={url.url} target="_blank" rel="noopener noreferrer">
                  <div className={`file ${identityFile(url.description)}`}>
                    {/* icon */}
                    <img src={getIcon(url.description)} alt={"Link icon"}></img>

                    {/* name */}
                    <p className={"is-5"}>{url.description}</p>
                  </div>
                </a>
              </>
            ))
          : null}
      </div>
    </>
  )
}

export default Content
