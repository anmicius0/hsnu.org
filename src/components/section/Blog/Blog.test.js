import React from "react"
import renderer from "react-test-renderer"
import { BlogPure } from "./Blog"

describe("Section/Blog", () => {
  it("renders correctly", () => {
    const posts = {
      allPosts: {
        edges: [
          {
            node: {
              title:
                "【新冠肺炎防疫】109年3月15日(日) 室內空間消毒作業，禁止進入校園。(高三自習暫停)",
              wordpress_id: 97,
            },
          },
          {
            node: {
              title:
                "狂賀 本校1502班詹可德同學 榮獲109年台北市中等學校運動會田徑錦標賽 高男組十項全能 成績5880分 第1名!",
              wordpress_id: 96,
            },
          },
          {
            node: {
              title: "哈囉，世界",
              wordpress_id: 31,
            },
          },
        ],
      },
      studentPosts: {
        edges: [
          {
            node: {
              title:
                "【新冠肺炎防疫】109年3月15日(日) 室內空間消毒作業，禁止進入校園。(高三自習暫停)",
              wordpress_id: 97,
            },
          },
          {
            node: {
              title:
                "狂賀 本校1502班詹可德同學 榮獲109年台北市中等學校運動會田徑錦標賽 高男組十項全能 成績5880分 第1名!",
              wordpress_id: 96,
            },
          },
          {
            node: {
              title: "哈囉，世界",
              wordpress_id: 31,
            },
          },
        ],
      },
      teacherPosts: {
        edges: [],
      },
      racePosts: {
        edges: [],
      },
      researchPosts: {
        edges: [],
      },
    }

    const news = [
      {
        node: {
          title:
            "他不是「新聞神話」──韓國傳奇主播孫石熙如何帶領公眾思考，產生改變？",
          acf: {
            link:
              "https://www.twreporter.org/a/bookreview-recommendation-sohn-suk-hee",
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191210155653-3e9da990d7b73480242f9356c37659e1-desktop.jpg",
            },
          },
        },
      },
      {
        node: {
          title: "海苔熊／讀《成為一個新人》，重新思考精神疾病「康復」的意義",
          acf: {
            link:
              "https://www.twreporter.org/a/bookreview-recommendation-be-a-new-creation-haitaibear",
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191215234815-e30f042653064c821f5cf69a8db705de-desktop.jpg",
            },
          },
        },
      },
      {
        node: {
          title: "【投書】戒菸新希望？菸害新風暴？電子菸防制的考驗與思考",
          acf: {
            link:
              "https://www.twreporter.org/a/opinion-electronic-cigarette-problems-tobacco-industry-never-say",
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191225102911-41f3c1090c05229f3328d794b7fe63ec-desktop.jpg",
            },
          },
        },
      },
      {
        node: {
          title: "野島剛／日本如何看2020台灣大選？解析日媒選前社論關注焦點",
          acf: {
            link:
              "https://www.twreporter.org/a/opinion-2020-election-japan-newspaper-editorial",
            image: {
              source_url:
                "https://wordpress.hsnu.org/wp-content/uploads/2020/03/20191230132946-35e29933c2a77d4f3891e6ff41056d95-desktop.jpg",
            },
          },
        },
      },
    ]

    const tree = renderer
      .create(<BlogPure posts={posts} news={news} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
