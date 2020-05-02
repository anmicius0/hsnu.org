import React, { useEffect, useState } from "react"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

export const Sidebar = () => {
  const frequent = {
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
                  <a href={item.url}>{item.title}</a>
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
                    {block.item.map(item => (
                      <li className={"is-5"} key={item.title}>
                        <a href={item.url}>{item.title}</a>
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
