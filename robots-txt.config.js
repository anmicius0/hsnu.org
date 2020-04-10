module.exports = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search"],
      crawlDelay: 2,
    },
    {
      userAgent: "OtherBot",
      allow: "/",
      disallow: [""],
      crawlDelay: 2,
    },
    {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
  ],
  sitemap: "https://hsnu.org/sitemap.xml",
  host: "https://hsnu.org",
}
