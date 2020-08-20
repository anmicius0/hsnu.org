import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, pathname, article }) => {
  const meta = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: siteUrl
          image
        }
      }
    }
  `).site.siteMetadata

  const seo = {
    title: title || meta.defaultTitle,
    titleTemplate: meta.titleTemplate,
    description: description || meta.defaultDescription,
    url: `${meta.siteUrl}${pathname || "/"}`,
    image: meta.siteImage,
    article: article,
  }

  return (
    <>
      <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
        <meta charset="UTF-8" />
        <link rel="icon" href="src/images/icons/HSNU.png"></link>
        <meta
          name="keywords"
          content="HSNU, 師大附中, 附中, 臺北高中, 大安區"
        />
        <meta name="author" content="github@Anmicius0" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* open graph (FaceBook)*/}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(seo.article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="Wy3ED0joPSTy8mtnur6mrxByXxOhP6LT4sMrnu5p818"
        />
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
