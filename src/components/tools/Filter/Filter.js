import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

// stlye
import "./Filter.scss"

export default ({ id }) => {
  // dynamic options
  const genreList = [
    "全部",
    "學生",
    "榮譽榜",
    "講座及課程",
    "教師",
    "競賽",
    "微課程",
    "菜單",
    "來文",
  ]

  const authotrList = [
    "全部",
    "教務處",
    "學務處",
    "總務處",
    "輔導室",
    "圖書館",
    "教官室",
    "資訊室",
    "人事室",
    "主計室",
  ]

  const [genre, setGenre] = useState("全部")
  const [subgenre, setSubgenre] = useState(["全部"])

  // when genre change
  function handle_change(event) {
    setGenre(event.target.value)
  }

  // change options when genre change
  useEffect(() => {
    setSubgenre(() => {
      switch (genre) {
        case "學生":
          return [
            "周輔",
            "檢定",
            "活動",
            "段考",
            "徵才",
            "課表",
            "獎學金",
            "學習歷程",
            "其他",
          ]
        case "競賽":
          return ["語文", "自然", "美術", "資訊", "其他"]
        default:
          return [`${genre}`]
      }
    })
  }, [genre])

  // handle submit
  function handle_submit(event) {
    // stop from posting request
    event.preventDefault()

    // get args
    const submit_genre = event.target.genre.value
    const submit_subgenre = event.target.subgenre.value
    const submit_author = event.target.author.value
    var submit_search =
      new URL(document.URL).searchParams.get("search") || false

    // modify url
    window.location = `${process.env.SITE_URL}/search?${
      submit_search ? `search=${submit_search}` : ""
    }${submit_genre !== "全部" ? `&genre=${submit_genre}` : ""}${
      submit_subgenre !== "全部" ? `&subgenre=${submit_subgenre}` : ""
    }${submit_author !== "全部" ? `&author=${submit_author}` : ""}`
  }

  return (
    <Form
      className={"filter"}
      id={id ? id : Math.random()}
      onSubmit={handle_submit}
    >
      {/* genre */}
      <Form.Group controlId="genre">
        <Form.Label className={"is-5 bold"}>大分類:</Form.Label>
        <Form.Control as="select" name="genre" onChange={handle_change}>
          {genreList.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* sub genre */}
      <Form.Group controlId="subgenre">
        <Form.Label className={"is-5 bold"}>小分類:</Form.Label>
        <Form.Control as="select" name="subgenre">
          {subgenre.map((subgenre) => (
            <option value={subgenre}>{subgenre}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* author */}
      <Form.Group controlId="author">
        <Form.Label className={"is-5 bold"}>作者:</Form.Label>
        <Form.Control as="select" name="author">
          {authotrList.map((author) => (
            <option value={author}>{author}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* submit */}
      <Button variant="primary" type="submit">
        篩選公告
      </Button>
    </Form>
  )
}
