import React from "react"
import { Form, Button, FormControl } from "react-bootstrap"

// style
import "./searchBox.scss"

// icons
import search from "../../../images/icons/functional/search.svg"
import filter from "../../../images/icons/functional/filter.svg"

const SearchBox = ({ showFilter = false }) => {
  return (
    <Form className={"search-box"}>
      <FormControl type="text" placeholder="Search" className={"is-4"} />
      <Button type="submit" variant="light">
        <img src={search}></img>
      </Button>
      <Button variant="light">
        <img src={filter}></img>
      </Button>
    </Form>
  )
}

export default SearchBox
