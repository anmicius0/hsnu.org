import pdf from "../../../images/icons/files/pdf.svg"
import word from "../../../images/icons/files/word.svg"
import excel from "../../../images/icons/files/excel.svg"
import ppt from "../../../images/icons/files/ppt.svg"
import link from "../../../images/icons/files/link.svg"

const pdf_extension = ["pdf"]
const word_extension = ["doc", "docx", "odt", "txt", "fodt"]
const ppt_extension = ["ppt", "pptx", "odp", "fodp"]
const excel_extension = ["xlsx", "xls", "ods", "fods"]

//   identify file type
export function identityFile(file_name) {
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
export function getIcon(file_name) {
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
