import React from "react"
import renderer from "react-test-renderer"
import { HeaderPure } from "./Header"
import Footer from "./Footer"
import { SidebarPure } from "./Sidebar"
import { SEOPure } from "./Seo"

describe("Layout/Header", () => {
  it("renders correctly", () => {
    // mock navs
    const navs = [
      {
        node: {
          acf: {
            name: "iLearn",
            url: "https://ilearning.hs.ntnu.edu.tw/",
          },
        },
      },
      {
        node: {
          acf: {
            name: "學習歷程",
            url: "https://e-portfolio.cooc.tp.edu.tw/Portal.do",
          },
        },
      },
      {
        node: {
          acf: {
            name: "報修",
            url: "http://artlife.hs.ntnu.edu.tw/case122/index.php",
          },
        },
      },
      {
        node: {
          acf: {
            name: "二代校務",
            url: "https://sschool.tp.edu.tw/Login.action",
          },
        },
      },
    ]

    const tree = renderer.create(<HeaderPure navs={navs} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Layout/Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Layout/Sidebar", () => {
  it("renders correctly", () => {
    const menus = [
      {
        node: {
          title: "招考專區",
          items: [
            {
              title: "教師甄選作業系統",
              url: "http://artlife.hs.ntnu.edu.tw/case43a/",
            },
            {
              title: "109年科學班招生專區",
              url:
                "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
            },
            {
              title: "109年資訊班招生專區",
              url: "https://site.hs.ntnu.edu.tw/cs-class/",
            },
            {
              title: "109學測及二次英聽測驗校內網路報名系統",
              url: "http://140.131.149.106/",
            },
            {
              title: "108年國中音樂班聯招專區",
              url: "https://site.hs.ntnu.edu.tw/music108s/",
            },
          ],
        },
      },
      {
        node: {
          title: "校內資訊",
          items: [
            {
              title: "行事曆",
              url: "http://artlife.hs.ntnu.edu.tw/case43a/",
            },
            {
              title: "網路使用",
              url:
                "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
            },
            {
              title: "校慶",
              url: "https://site.hs.ntnu.edu.tw/cs-class/",
            },
            {
              title: "課表",
              url: "http://140.131.149.106/",
            },
            {
              title: "菜單",
              url: "https://site.hs.ntnu.edu.tw/music108s/",
            },
          ],
        },
      },
      {
        node: {
          title: "學生資訊",
          items: [
            {
              title: "升學資訊",
              url:
                "https://site.hs.ntnu.edu.tw/guidance/%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF2019/",
            },
            {
              title: "微課程",
              url:
                "https://www.hs.ntnu.edu.tw/%e5%be%ae%e8%aa%b2%e7%a8%8b%e8%b3%87%e8%a8%8a/",
            },
            {
              title: "獎學金資訊",
              url:
                "https://www.hs.ntnu.edu.tw/search/?type=bt&sq=%E7%8D%8E%E5%AD%B8%E9%87%91",
            },
            {
              title: "學生證掛失",
              url:
                "https://ecardlost.tp.edu.tw/ecard/Ecard/QueryOfLostEcardAction",
            },
            {
              title: "證明文件申請",
              url:
                "https://site.hs.ntnu.edu.tw/academic/hsnureg/%E7%94%B3%E8%AB%8B%E6%B5%81%E7%A8%8B%E5%8F%8A%E8%A1%A8%E5%96%AE/",
            },
          ],
        },
      },
      {
        node: {
          title: "相關單位",
          items: [
            {
              title: "校友會",
              url: "https://hsnuaa.org.tw/",
            },
            {
              title: "家長會",
              url:
                "https://sites.google.com/a/pccu.edu.tw/guo-li-shi-da-fu-zhong72jie-jia-zhang-hui/guan-yu-ben-hui?previewAsViewer=1",
            },
            {
              title: "志工團",
              url: "https://site.hs.ntnu.edu.tw/ilove143/",
            },
            {
              title: "教師會",
              url: "https://site.hs.ntnu.edu.tw/teachers/",
            },
            {
              title: "合作社",
              url: "https://site.hs.ntnu.edu.tw/cooperative/",
            },
          ],
        },
      },
      {
        node: {
          title: "宣傳內容",
          items: [
            {
              title: "捲款專區",
              url: "https://www.hs.ntnu.edu.tw/support/",
            },
            {
              title: "政策宣導",
              url: "https://www.hs.ntnu.edu.tw/links/advocacy-links/",
            },
            {
              title: "108課綱",
              url:
                "https://www.hs.ntnu.edu.tw/108%E8%AA%B2%E7%B6%B1%E7%9B%B8%E9%97%9C/",
            },
            {
              title: "教師會",
              url: "https://site.hs.ntnu.edu.tw/teachers/",
            },
            {
              title: "合作社",
              url: "https://site.hs.ntnu.edu.tw/cooperative/",
            },
          ],
        },
      },
    ]

    const tree = renderer.create(<SidebarPure menus={menus} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
