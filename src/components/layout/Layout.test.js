import React from "react"
import renderer from "react-test-renderer"
import { HeaderPure } from "./Header"
import Footer from "./Footer"

describe("Header", () => {
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

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
