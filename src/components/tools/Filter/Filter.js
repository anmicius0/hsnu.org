import React from "react"
import { Form, Button } from "react-bootstrap"

// stlye
import "./Filter.scss"

export default () => {
  return (
    <Form id="filter-group">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>大分類</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>小分類</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>處室</Form.Label>
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
