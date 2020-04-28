import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

export const SidebarPure = ({ menus }) => {
  const tools = {
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
        url: "https://ecardlost.tp.edu.tw/ecard/Ecard/QueryOfLostEcardAction",
      },
      {
        title: "證明文件申請",
        url:
          "https://site.hs.ntnu.edu.tw/academic/hsnureg/%E7%94%B3%E8%AB%8B%E6%B5%81%E7%A8%8B%E5%8F%8A%E8%A1%A8%E5%96%AE/",
      },
    ],
  }

  return (
    <>
      <div id={"sidebar"}>
        {/* title */}
        <h3 className={"is-3 bold serif"}>國立臺灣大學附屬高級中學</h3>

        <Endorsement />
        <SearchBox />

        {/* menu cards*/}
        {/* frequent tools */}
        <ul className={"menu-cards"}>
          <li key={tools.title}>
            <ul className={"menu-card"}>
              <h4 className={"is-4 bold"}>{tools.title}</h4>
              {tools.items.map(item => (
                <li className={"is-5"} key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>

          {/* tools from WP */}
          {menus.map(menu => (
            <li key={menu.node.title}>
              <ul className={"menu-card"}>
                <h4 className={"is-4 bold"}>{menu.node.title}</h4>
                {menu.node.items.map(item => (
                  <li className={"is-5"} key={item.title}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* end of menucards */}
      </div>

      {/* overlay */}
      <div
        id={"sidebar-overlay"}
        onClick={() => {
          const sidebar = document.querySelector("#sidebar")
          const overlay = document.querySelector("#sidebar-overlay")
          const collapse = document.querySelector(".navbar-collapse")
          sidebar.classList.toggle("active")
          overlay.classList.toggle("active")
          collapse.classList.remove("show")
        }}
      ></div>
    </>
  )
}

const Sidebar = () => {
  const menus = useStaticQuery(
    graphql`
      {
        allMenuJson {
          edges {
            node {
              title
              items {
                title
                url
              }
            }
          }
        }
      }
    `
  ).allMenuJson.edges

  return <SidebarPure menus={menus} />
}

export default Sidebar
