import React from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import "./Shortcut.scss"

export default () => {
  // frequent used tools
  const frequent = [
    {
      title: "常用功能",
      item: [
        {
          title: "二代校務",
          url: "https://sschool.tp.edu.tw/Login.action?schNo=330301",
        },
        {
          title: "高三成績查詢",
          url: "https://sschool.tp.edu.tw/Login.action?schNo=330301",
        },
        {
          title: "段考資訊",
          url: "https://hsnu.org/search/?search=%E6%AE%B5%E8%80%83",
        },
        {
          title: "行事曆",
          url: "https://hsnu.org/search/?search=%E8%A1%8C%E4%BA%8B%E6%9B%86",
        },
        {
          title: "閱覽室預約",
          url: "http://artlife.hs.ntnu.edu.tw/case95_2/index.php",
        },
      ],
    },
  ]

  // fetch data from wordpress
  var blocks = useStaticQuery(graphql`
    {
      allWordpressWpMenu {
        edges {
          node {
            acf {
              block {
                title
                item {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  `).allWordpressWpMenu.edges[0].node.acf.block

  blocks = frequent.concat(blocks.slice(1, 4))

  return (
    <Container as="section" id="Shortcut" fluid>
      <Row>
        {/* blocks from graphql */}
        {blocks.map(block => (
          <Col lg="3">
            <h2 className={"is-2 bold"}>
              <span>{block.title}</span>
            </h2>
            <ListGroup as="ul">
              {block.item.slice(0, 5).map(item => (
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
