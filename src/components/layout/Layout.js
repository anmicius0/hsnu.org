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

const Layout = ({ children, title = "師大附中" }) => {
  return (
    <>
      <Helmet defer={false}>
        {/* google site verification */}
        <meta
          name="google-site-verification"
          content="WJOAOHiQsleRZO9iTrag_b9Vso1D9x7GQ2w99EZgrxg"
        />

        {/* swiper */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <title>{title}</title>
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
