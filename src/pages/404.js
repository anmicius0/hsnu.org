import React from "react"
// import Seo from "../components/layout/Seo"
// import { Container, Row, Col } from "react-bootstrap"
// import { LazyLoadComponent } from "react-lazy-load-image-component"
import { Redirect } from "@reach/router"

// style
// import "../templates/Article/Article.scss"

// tools
// import SideNews from "../components/tools/SidewNews/SideNews"
// import Content from "../components/tools/Content/Content"
// import RecommandVideo from "../components/tools/RecommandVideo/RecommandVideo"

export default () => {
  // check if it's a post
  // const wordpress_id =
  //   typeof document !== "undefined"
  //     ? new RegExp(/\/post\/(\d+)/g).test(new URL(document.URL).pathname)
  //       ? new URL(document.URL).pathname.match(/(\d+)/g)
  //       : ""
  //     : ""

  // // redirect to preview page
  // if (typeof window !== "undefined" && wordpress_id) {
  //   window.location = `/preview?id=${wordpress_id}`
  // }

  return (
    <Redirect
      to={`/preview?id=${
        typeof document !== "undefined"
          ? new RegExp(/\/post\/(\d+)/g).test(new URL(document.URL).pathname)
            ? new URL(document.URL).pathname.match(/(\d+)/g)
            : ""
          : ""
      }`}
    />
  )
}
