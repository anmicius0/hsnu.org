import React from "react"
import { Form } from "react-bootstrap"

// stlye
import "./Filter.scss"

export default ({ id }) => {
  return (
    <Form className={"filter"} id={id ? id : Math.random()}>
      <Form.Group controlId="genre">
        <Form.Label className={"is-5 bold"}>大分類:</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="genre">
        <Form.Label className={"is-5 bold"}>小分類:</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="genre">
        <Form.Label className={"is-5 bold"}>處室:</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}
