import React from "react"
import { graphql } from "gatsby"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import Seo from "../components/layout/Seo"
import Landing from "../components/section/Landing/Landing"
import Clubs from "../components/section/Clubs/Clubs"
import Banner from "../components/section/Banner/Banner"
import Blog from "../components/section/Blog/Blog"
import Shortcut from "../components/section/Shortcut/Shortcut"

export default () => {
  return (
    <>
      <Seo title={"國立臺灣師範大學附屬高級中學"} />
      <Landing />
      <LazyLoadComponent>
        <Blog />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Shortcut />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Banner />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Clubs />
      </LazyLoadComponent>
    </>
  )
}
