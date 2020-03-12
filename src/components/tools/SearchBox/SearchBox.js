import React from "react"
import { Form, Button, FormControl } from "react-bootstrap"

// style
import "./searchBox.scss"

// tools
import Filter from "../Filter/Filter"

// icons
import search from "../../../images/icons/functional/search.svg"
import filter from "../../../images/icons/functional/filter.svg"

const SearchBox = ({ showFilter = false }) => {
  return (
    <>
      <Form className={"search-box"} action="/search" method="get">
        <FormControl
          type="text"
          placeholder="Search"
          className={"is-4"}
          name="search"
        />
        <Button type="submit" variant="light">
          <img src={search}></img>
        </Button>
        {showFilter ? (
          <Button
            variant="light"
            className={"filter"}
            onClick={() => {
              document
                .querySelector("#search-box-filter")
                .classList.toggle("show")
            }}
          >
            <img src={filter}></img>
          </Button>
        ) : null}
      </Form>
      {showFilter ? <Filter id="search-box-filter" /> : null}
    </>
  )
}

export default SearchBox
