/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// post
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/Article/Article.js")

  const result = await graphql(`
    {
      allWpSpost {
        edges {
          node {
            title
            databaseId
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const Sposts = result.data.allWpSpost.edges
  Sposts.forEach((post) => {
    createPage({
      path: `/post/${post.node.databaseId}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.databaseId,
      },
    })
  })
}
