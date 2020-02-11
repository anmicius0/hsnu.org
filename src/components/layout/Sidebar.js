import React from "react"

// tools
import SearchBox from "../tools/SearchBox/SearchBox"
import Endorsement from "../tools/Endorsement/Endorsement"

const Sidebar = () => {
  return (
    <>
      <div id={"sidebar"}>
        {/* title */}
        <h3 className={"is-3 serif bold"}>國立臺灣大學附屬高級中學</h3>

        <Endorsement />
        <SearchBox />

        {/* menu cards*/}
        <ul className={"menu-cards"}>
          {[1, 2, 3, 4].map(item => (
            <li>
              <ul className={"menu-card"}>
                <h4 className={"is-4 bold"}>招生專區</h4>
                <li className={"is-5"}>
                  <a href="#">108年科學班招生專區</a>
                </li>
                <li className={"is-5"}>
                  <a href="#">108年資訊班招生專區</a>
                </li>
                <li className={"is-5"}>
                  <a href="#">108年國中音樂班聯招專區</a>
                </li>
                <li className={"is-5"}>
                  <a href="#">教師甄選作業系統</a>
                </li>
                <li className={"is-5"}>
                  <a href="#">109學測校內網路報名系統</a>
                </li>
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
