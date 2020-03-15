import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"

// stlye
import "./Filter.scss"

export default ({ id }) => {
  //          dynamic options         //

  const [genre, setGenre] = useState("全部")
  const [subgenre, setSubgenre] = useState(["全部"])

  function handle_change(event) {
    console.log(event.target.value)
    setGenre(event.target.value)
  }

  // change options when genre change
  useEffect(() => {
    setSubgenre(() => {
      switch (genre) {
        case "學生":
          return ["周輔", "檢定", "活動", "段考", "徵才", "課表", "獎學金"]
        case "競賽":
          return ["語文", "自然", "美術", "資訊", "其他"]
        default:
          return [`${genre}`]
      }
    })
  }, [genre])

  //               End                //

  // handle submit
  function handle_submit(event) {
    event.preventDefault()
    const submit_genre = event.target.genre.value
    const submit_subgenre = event.target.subgenre.value
    var submit_search =
      new URL(document.URL).searchParams.get("search") || false

    window.location = `http://renew2.anmicius.now.sh/search/?${
      submit_search ? "search=" + submit_search : ""
    }${submit_genre !== "全部" ? "&genre=" + submit_genre : ""}${
      submit_subgenre !== "全部" ? "&subgenre=" + submit_subgenre : ""
    }`
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
          <option value="全部">全部</option>
          <option value="學生">學生</option>
          <option value="榮譽榜">榮譽榜</option>
          <option value="講座及課程">講座及課程</option>
          <option value="教師">教師</option>
          <option value="競賽">競賽</option>
          <option value="微課程">微課程</option>
          <option value="菜單">菜單</option>
          <option value="來文">來文</option>
          <option value="頁面">頁面</option>
        </Form.Control>
      </Form.Group>

      {/* sub genre */}
      <Form.Group controlId="subgenre">
        <Form.Label className={"is-5 bold"}>小分類:</Form.Label>
        <Form.Control as="select" name="subgenre">
          {subgenre.map(subgenre => (
            <option value={subgenre}>{subgenre}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* submit */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
