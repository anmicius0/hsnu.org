import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// components
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

// Style sheets
import "../../styles/scss/layout/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        {/* google site verification */}
        <meta
          name="google-site-verification"
          content="WJOAOHiQsleRZO9iTrag_b9Vso1D9x7GQ2w99EZgrxg"
        />

        {/* bootstrap */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>

        {/* swiper */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
        />
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
}

export default Layout
