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
      title: "網路服務",
      item: [
        {
          title: "雲端差勤系統",
          url: "https://pemis.k12ea.gov.tw/login.aspx",
        },
        {
          title: "校內網路服務",
          url: "https://hsnu.org/post/36052",
        },
        {
          title: "校園修繕線上通報",
          url: "http://artlife.hs.ntnu.edu.tw/case122/index.php",
        },
      ],
    },
    {
      title: "學生專區",
      item: [
        {
          title: "109新生專區",
          url: "https://hsnu.org/search?search=109%E6%96%B0%E7%94%9F",
        },
        {
          title: "新課綱相關",
          url: "https://www.hs.ntnu.edu.tw/108%E8%AA%B2%E7%B6%B1%E7%9B%B8%E9%97%9C/",
        },
        {
          title: "課表查詢",
          url: "https://www.hs.ntnu.edu.tw/bulletin/?mid=24604",
        },
        {
          title: "附中圖書館首頁",
          url: "http://140.131.149.105/cms3/",
        },
        {
          title: "校務系統暨成績缺曠查詢",
          url: "https://www.hs.ntnu.edu.tw/%E6%A0%A1%E5%8B%99%E7%B3%BB%E7%B5%B1%E6%9A%A8%E6%88%90%E7%B8%BE%E7%BC%BA%E6%9B%A0%E6%9F%A5%E8%A9%A2%E9%81%B8%E8%AA%B2/",
        },
        {
          title: "升大學",
          url: "https://www.hs.ntnu.edu.tw/%E5%8D%87%E5%A4%A7%E5%AD%B8/",
        },
        {
          title: "學生證、獎學金、證明書申辦",
          url: "https://www.hs.ntnu.edu.tw/%e5%ad%b8%e7%94%9f%e8%ad%89%e3%80%81%e7%8d%8e%e5%ad%b8%e9%87%91%e3%80%81%e8%ad%89%e6%98%8e%e6%9b%b8%e7%94%b3%e8%be%a6/",
        },
        {
          title: "1451-1477班升學進路填報系統",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSdRzY0Kkzhl5G_waOBpZHmfsBjDGV5ptHfukjq0eBPT54oGOg/viewform",
        },
        {
          title: "1451-1477班備審資料上傳系統",
          url: "https://forms.gle/VsntYvxDN1fV7Uw59",
        },
        {
          title: "線上學習平台",
          url: "https://www.hs.ntnu.edu.tw/%e7%b7%9a%e4%b8%8a%e5%ad%b8%e7%bf%92%e5%b9%b3%e5%8f%b0/",
        },
        {
          title: "午餐菜單",
          url: "https://hsnu.org/search/?search=%E8%8F%9C%E5%96%AE",
        }
      ],
    },
    {
      title: "相關單位",
      item: [
        {
          title: "家長會",
          url: "https://sites.google.com/a/pccu.edu.tw/guo-li-shi-da-fu-zhong72jie-jia-zhang-hui/guan-yu-ben-hui?previewAsViewer=1",
        },
        {
          title: "校友服務",
          url: "https://site.hs.ntnu.edu.tw/alumniservice/",
        },
        {
          title: "藝術生活學科中心",
          url: "https://site.hs.ntnu.edu.tw/artcenter/",
        },
        {
          title: "教師會",
          url: "https://site.hs.ntnu.edu.tw/teachers/",
        },
        {
          title: "志工團",
          url: "https://site.hs.ntnu.edu.tw/ilove143/",
        },
        {
          title: "校友會",
          url: "https://hsnuaa.org.tw/",
        },
        {
          title: "合作社",
          url: "https://site.hs.ntnu.edu.tw/cooperative/",
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
