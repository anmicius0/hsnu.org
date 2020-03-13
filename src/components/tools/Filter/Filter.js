import React, { useState, useEffect, useRef } from "react"
import { Form, Button } from "react-bootstrap"

// stlye
import "./Filter.scss"

export default ({ id }) => {
  //////////////////////////////////////
  //          dynamic options         //
  //////////////////////////////////////

  const genre_ref = useRef()
  const [genre, setGenre] = useState("學生")
  const [subgenre, setSubgenre] = useState([
    "周輔",
    "檢定",
    "活動",
    "段考",
    "徵才",
    "課表",
    "獎學金",
  ])

  // change genre(state) when genre change
  useEffect(() => {
    genre_ref.current.addEventListener("change", () => {
      console.log(genre_ref.current.value)
      setGenre(genre_ref.current.value)
    })
  }, [genre])

  // change options when genre change
  useEffect(() => {
    setSubgenre(() => {
      switch (genre) {
        case "學生":
          return ["周輔", "檢定", "活動", "段考", "徵才", "課表", "獎學金"]
          break
        case "競賽":
          return ["語文", "自然", "美術", "資訊", "其他"]
          break
        default:
          return [`${genre}`]
      }
    })
  }, [genre])

  //////////////////////////////////////
  //               End                //
  //////////////////////////////////////

  return (
    <Form className={"filter"} id={id ? id : Math.random()}>
      {/* genre */}
      <Form.Group controlId="genre">
        <Form.Label className={"is-5 bold"}>大分類:</Form.Label>
        <Form.Control as="select" name="genre" ref={genre_ref}>
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
