import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

// components
import Seo from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

// Style sheets
import "../../styles/scss/layout/layout.scss"
import "bootstrap/scss/bootstrap.scss"

const Layout = ({ children, title, description, article }) => {
  return (
    <>
      <Helmet defer={false}>
        {/* Google Fonts */}

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&family=Noto+Serif+TC:wght@400;700&display=swap" rel="stylesheet" />

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

      <Seo title={title} description={description} article={article} />

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
