import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// components
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Style sheets
import "../../styles/scss/layout/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="WJOAOHiQsleRZO9iTrag_b9Vso1D9x7GQ2w99EZgrxg"
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
