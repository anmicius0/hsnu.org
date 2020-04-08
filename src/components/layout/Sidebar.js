import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

const Sidebar = () => {
  const menus = useStaticQuery(
    graphql`
      query {
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

  console.log(menus)

  return (
    <>
      <div id={"sidebar"}>
        {/* title */}
        <h3 className={"is-3 bold"}>國立臺灣大學附屬高級中學</h3>

        <Endorsement />
        <SearchBox />

        {/* menu cards*/}
        <ul className={"menu-cards"}>
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

export default Sidebar
