import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

import "./Shortcut.scss"

const Shortcut = () => {
  // frequent used tools
  const frequent = useStaticQuery(graphql`
    {
      allMenuJson {
        edges {
          node {
            title
            item {
              title
              url
            }
          }
        }
      }
    }
  `).allMenuJson.edges

  return (
    <Container as="section" id="Shortcut" fluid>
      <Row>
        {/* blocks from graphql */}
        {frequent.slice(0, 4).map((block) => (
          <Col lg="3">
            <h2 className={"is-2 bold"}>
              <span>{block.node.title}</span>
            </h2>
            <ListGroup as="ul">
              {block.node.item.slice(0, 5).map((item) => (
                <ListGroup.Item as="li">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"is-4"}
                  >
                    {item.title}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Shortcut
