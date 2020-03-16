module.exports = {
  siteMetadata: {
    title: `國立臺灣師範大學附屬高級中學`,
    titleTemplate: "%s | HSNU.org 師大附中",
    description: `國立臺灣師範大學附屬高級中學，簡稱台師大附中、師大附中、附中，官方英文簡稱為HSNU，是一所位處台北市中心、位於臺北市大安區信義路上的高級中學，附屬於國立臺灣師範大學。`,
    siteUrl: "https://hsnu.org", // No trailing slash allowed!
    image: "https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `師大附中`,
        short_name: `HSNU`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/HSNU.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `wordpress.hsnu.org/index.php`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "**/blocks",
          "**/users",
          "**/settings",
          "**/themes",
          "**/taxonomies",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: [`/search/*`] },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        configFile: "robots-txt.config.js",
      },
    }`gatsby-plugin-offline`,
  ],
}
