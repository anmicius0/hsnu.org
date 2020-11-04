import React from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"

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
    {
      title: "招考專區",
      item: [
        {
          title: "教師甄選作業系統",
          url: "http://140.131.149.109/",
        },
        {
          title: "109年科學班招生專區",
          url: "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
        },
        {
          title: "109年資訊班招生專區",
          url: "https://site.hs.ntnu.edu.tw/cs-class/",
        },
        {
          title: "110大考英語聽力測驗校內報名系統",
          url: "http://140.131.149.106/",
        },
        {
          title: "109 數理暨語文資優鑑定專區",
          url: "https://site.hs.ntnu.edu.tw/academic/research/%e8%b3%87%e5%84%aa%e7%8f%ad%e9%91%91%e5%ae%9a/",
        },
      ],
    },
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
    {
      title: "招考專區",
      item: [
        {
          title: "教師甄選作業系統",
          url: "http://140.131.149.109/",
        },
        {
          title: "109年科學班招生專區",
          url: "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
        },
        {
          title: "109年資訊班招生專區",
          url: "https://site.hs.ntnu.edu.tw/cs-class/",
        },
        {
          title: "110大考英語聽力測驗校內報名系統",
          url: "http://140.131.149.106/",
        },
        {
          title: "109 數理暨語文資優鑑定專區",
          url: "https://site.hs.ntnu.edu.tw/academic/research/%e8%b3%87%e5%84%aa%e7%8f%ad%e9%91%91%e5%ae%9a/",
        },
      ],
    }
  ]

  return (
    <Container as="section" id="Shortcut" fluid>
      <Row>
        {/* blocks from graphql */}
        {frequent.map(block => (
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
