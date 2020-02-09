import React from "react"
import PropTypes from "prop-types"

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
      <Header />
      <Sidebar />
      {children}
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
