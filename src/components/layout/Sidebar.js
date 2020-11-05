import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

export const Sidebar = () => {
  // frequent used tools
  const frequent = useStaticQuery(graphql`
    {
      allMenuJson {
        edges {
          node {
            title
            item {
              title
              url
            }
          }
        }
      }
    }
  `).allMenuJson.edges

  return (
    <>
      <div id={"sidebar"}>
        {/* title */}
        <h3 className={"is-3 bold serif"}>國立臺灣師範大學附屬高級中學</h3>

        <Endorsement />
        <SearchBox />

        {/* menu cards*/}
        <ul className={"menu-cards"}>
          {/* tools from WP */}
          {frequent.map((block) => (
            <li key={block.node.title}>
              <ul className={"menu-card"}>
                <h4 className={"is-4 bold"}>{block.node.title}</h4>
                {block.node.item.map((item) => (
                  <li className={"is-5"} key={item.title}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
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
