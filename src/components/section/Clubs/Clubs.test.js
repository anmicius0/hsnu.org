import React from "react"
import renderer from "react-test-renderer"
import { ClubsPure } from "./Clubs"

describe("Section/Clubs", () => {
  it("renders correctly", () => {
    const clubs = [
      {
        node: {
          title: "新聞社",
          acf: {
            image: {
              sizes: {
                large:
                  "https://wordpress.hsnu.org/wp-content/uploads/2020/03/Screenshot_2020-03-19-關於我們-報導者-The-Reporter-1024x495.png",
              },
            },
            social_medias: [
              {
                media_type: "facebook",
                media_link: "https://www.facebook.com/twreporter/",
              },
              {
                media_type: "line",
                media_link: "https://line.me/ti/p/%40nbs5015j",
              },
              {
                media_type: "patreon",
                media_link: "https://www.instagram.com/twreporter/",
              },
            ],
          },
        },
      },
    ]
    const tree = renderer.create(<ClubsPure clubs={clubs} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
