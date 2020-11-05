module.exports = {
  siteMetadata: {
    title: `國立臺灣師範大學附屬高級中學`,
    titleTemplate: "%s | HSNU.org",
    description: `國立臺灣師範大學附屬高級中學，簡稱台師大附中、師大附中、附中，官方英文簡稱為HSNU，是一所位處台北市中心、位於臺北市大安區信義路上的高級中學，附屬於國立臺灣師範大學。`,
    siteUrl: "https://hsnu.org", // No trailing slash allowed!
    image: "https://i.ytimg.com/vi/2fb-g_V-UT4/hqdefault.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `師大附中`,
        short_name: `HSNU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icons/HSNU.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout.js`),
      },
    },
    // source from WordPress
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://backend.hs.ntnu.edu.tw/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Spost: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  7000,
          },
        },
      },
    },
    // sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: [`/search`] },
    },
    // canonical link
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hsnu.org`,
      },
    },
    // robot.txt
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://hsnu.org",
        sitemap: "https://hsnu.org/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // google tag manager
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        includeInDevelopment: true,
        id: "GTM-WTBQCB3",
      },
    },
    // css
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans TC`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Noto Serif TC`,
            variants: [`700`],
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
