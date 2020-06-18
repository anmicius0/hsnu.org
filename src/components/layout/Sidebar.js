import React, { useEffect, useState } from "react"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

export const Sidebar = () => {
  // frequent used tools
  const frequent = {
    title: "常用功能",
    items: [
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
  }

  // get tools from Wordpress
  const [blocks, setBlocks] = useState()
  useEffect(() => {
    fetch("https://wordpress.hsnu.org/index.php/wp-json/wp/v2/menu?per_page=1")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlocks(data[0].acf.block)
      })
  }, [])

  return (
    <>
      <div id={"sidebar"}>
        {/* title */}
        <h3 className={"is-3 bold serif"}>國立臺灣大學附屬高級中學</h3>

        <Endorsement />
        <SearchBox />

        {/* menu cards*/}
        <ul className={"menu-cards"}>
          {/* frequents */}
          <li key={frequent.title}>
            <ul className={"menu-card"}>
              <h4 className={"is-4 bold"}>{frequent.title}</h4>
              {frequent.items.map(item => (
                <li className={"is-5"} key={item.title}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* tools from WP */}
          {blocks
            ? blocks.map(block => (
                <li key={block.title}>
                  <ul className={"menu-card"}>
                    <h4 className={"is-4 bold"}>{block.title}</h4>
                    {block.items.map(item => (
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
              ))
            : null}
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
