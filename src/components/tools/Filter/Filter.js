import React from "react"
import { Form, Button } from "react-bootstrap"

// stlye
import "./Filter.scss"

const Filter = ({ id }) => {
  // dynamic options
  const genreList = ["全部", "學生", "教師", "榮譽榜", "來文"]

  // handle submit
  function handle_submit(event) {
    // stop from posting request
    event.preventDefault()

    // get args
    const submit_genre = event.target.genre.value
    var submit_search =
      new URL(document.URL).searchParams.get("search") || false

    // modify url
    window.location = `${process.env.SITE_URL}/search?${
      submit_search ? `search=${submit_search}` : ""
    }${submit_genre !== "全部" ? `&genre=${submit_genre}` : ""}`
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
        <Form.Control as="select" name="genre">
          {genreList.map((genre) => (
            <option value={genre}>{genre}</option>
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

export default Filter
