import React from "react"

import Layout from "../components/layout/Layout"

import Landing from "../components/section/Landing/Landing"
import NewsSlider from "../components/section/NewsSlider/NewsSlider"
import Clubs from "../components/section/Clubs/Clubs"

const IndexPage = () => (
  <Layout>
    <Landing />
    <NewsSlider />
    <Clubs />
  </Layout>
)

export default IndexPage
