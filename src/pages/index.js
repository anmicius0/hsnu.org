import React from "react"

import Layout from "../components/layout/Layout"

import Landing from "../components/section/Landing/Landing"
import NewsSlider from "../components/section/NewsSlider/NewsSlider"
import Clubs from "../components/section/Clubs/Clubs"
import Blog from "../components/section/Blog/Blog"

const IndexPage = () => (
  <Layout>
    <Landing />
    <NewsSlider />
    <Blog />
    <Clubs />
  </Layout>
)

export default IndexPage
