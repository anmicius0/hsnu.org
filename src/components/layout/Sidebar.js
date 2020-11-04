import React, { useEffect, useState } from "react"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

export const Sidebar = () => {
  // frequent used tools
  const frequent = [
    {
      title: "常用功能",
      item: [
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
    },
    {
      title: "招考專區",
      item: [
        {
          title: "教師甄選作業系統",
          url: "http://140.131.149.109/",
        },
        {
          title: "109年科學班招生專區",
          url: "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
        },
        {
          title: "109年資訊班招生專區",
          url: "https://site.hs.ntnu.edu.tw/cs-class/",
        },
        {
          title: "110大考英語聽力測驗校內報名系統",
          url: "http://140.131.149.106/",
        },
        {
          title: "109 數理暨語文資優鑑定專區",
          url: "https://site.hs.ntnu.edu.tw/academic/research/%e8%b3%87%e5%84%aa%e7%8f%ad%e9%91%91%e5%ae%9a/",
        },
      ],
    },
    {
      title: "常用功能",
      item: [
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
    },
    {
      title: "招考專區",
      item: [
        {
          title: "教師甄選作業系統",
          url: "http://140.131.149.109/",
        },
        {
          title: "109年科學班招生專區",
          url: "https://site.hs.ntnu.edu.tw/science-class/%e6%8b%9b%e7%94%9f%e5%b0%88%e5%8d%80-2/",
        },
        {
          title: "109年資訊班招生專區",
          url: "https://site.hs.ntnu.edu.tw/cs-class/",
        },
        {
          title: "110大考英語聽力測驗校內報名系統",
          url: "http://140.131.149.106/",
        },
        {
          title: "109 數理暨語文資優鑑定專區",
          url: "https://site.hs.ntnu.edu.tw/academic/research/%e8%b3%87%e5%84%aa%e7%8f%ad%e9%91%91%e5%ae%9a/",
        },
      ],
    }
  ]

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
            <li key={block.title}>
              <ul className={"menu-card"}>
                <h4 className={"is-4 bold"}>{block.title}</h4>
                {block.item.map((item) => (
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
