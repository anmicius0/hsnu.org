import React from "react"

import "./File.scss"

import pdf from "../../../images/icons/files/pdf.svg"
import word from "../../../images/icons/files/word.svg"
import excel from "../../../images/icons/files/excel.svg"
import ppt from "../../../images/icons/files/ppt.svg"
import link from "../../../images/icons/files/link.svg"

const Content = ({ files, urls }) => {
  const pdf_extension = ["pdf"]
  const word_extension = ["doc", "docx", "odt", "txt", "fodt"]
  const ppt_extension = ["ppt", "pptx", "odp", "fodp"]
  const excel_extension = ["xlsx", "xls", "ods", "fods"]

  //   identify file type
  function identity_file(file_name) {
    const filename_array = file_name.split(".")
    const extension = filename_array[filename_array.length - 1]

    if (pdf_extension.indexOf(extension) !== -1) {
      return "pdf"
    } else if (word_extension.indexOf(extension) !== -1) {
      return "word"
    } else if (ppt_extension.indexOf(extension) !== -1) {
      return "ppt"
    } else if (excel_extension.indexOf(extension) !== -1) {
      return "excel"
    } else {
      return "link"
    }
  }

  //    get file icon
  function get_icon(file_name) {
    const filename_array = file_name.split(".")
    const extension = filename_array[filename_array.length - 1]

    if (pdf_extension.indexOf(extension) !== -1) {
      return pdf
    } else if (word_extension.indexOf(extension) !== -1) {
      return word
    } else if (ppt_extension.indexOf(extension) !== -1) {
      return ppt
    } else if (excel_extension.indexOf(extension) !== -1) {
      return excel
    } else {
      return link
    }
  }

  return (
    <>
      {/* files */}
      <div className={"files"}>
        {files
          ? files.map(file => (
              <>
                <a
                  href={file.file.url.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={`file ${identity_file(file.file.filename)}`}>
                    {/* icon */}
                    <img
                      src={get_icon(file.file.filename)}
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
                  <div className={`file ${identity_file(url.description)}`}>
                    {/* icon */}
                    <img
                      src={get_icon(url.description)}
                      alt={"Link icon"}
                    ></img>
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
