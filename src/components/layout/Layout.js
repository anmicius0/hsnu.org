import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// components
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

// Style sheets
import "../../styles/scss/layout/layout.scss"
import "bootstrap/scss/bootstrap.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet defer={false} htmlAttributes={{ lang: "zh-Hans-TW" }}>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&family=Noto+Serif+TC:wght@700&display=swap"
        />

        {/* swiper */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
      </Helmet>

      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
