import React from "react"
import { Form, Button, FormControl } from "react-bootstrap"

// style
import "./searchBox.scss"

// icons
import search from "../../../images/icons/search.svg"

const SearchBox = () => {
  return (
    <Form className={"search-box"}>
      <FormControl type="text" placeholder="Search" className={"is-4"} />
      <Button type="submit" variant="light">
        <img src={search}></img>
      </Button>
    </Form>
  )
}

export default SearchBox
