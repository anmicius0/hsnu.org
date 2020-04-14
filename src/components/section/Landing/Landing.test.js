import React from "react"
import renderer from "react-test-renderer"
import { LandingPure } from "./Landing"

describe("Section/Landing", () => {
  it("renders correctly", () => {
    const headline = {
      node: {
        title:
          "樂園的選擇：從言論與資訊自由被剝奪，看亡國感的生成 | The reporter",
        acf: {
          image: {
            sizes: {
              wordpress_1536x1536:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191126170557-6072c73cbfb5c0301e948f36af2cf1e0-desktop.jpg",
            },
          },
          link:
            "https://www.twreporter.org/a/bookreview-counter-attack-on-the-fear-of-demising-nation",
        },
      },
    }
    const tree = renderer.create(<LandingPure headline={headline} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
