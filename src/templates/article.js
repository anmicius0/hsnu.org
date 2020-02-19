import React from "react"
import Layout from "../components/layout/Layout"
import Article from "../components/section/Article/Article"

export default ({ data }) => (
  <Layout>
    <Article
      title={data.allWordpressWpSpost.edges[0].node.title}
      genre={data.allWordpressWpSpost.edges[0].node.acf.genre}
      date={data.allWordpressWpSpost.edges[0].node.date}
      content={data.allWordpressWpSpost.edges[0].node.content}
      urls={data.allWordpressWpSpost.edges[0].node.acf.repeater_link}
      files={data.allWordpressWpSpost.edges[0].node.acf.repeater_file}
    />
  </Layout>
)

export const query = graphql`
  query($id: Int!) {
    allWordpressWpSpost(filter: { wordpress_id: { eq: $id } }) {
      edges {
        node {
          title
          date(formatString: "YYYY/MM/DD")
          content
          acf {
            genre
            sub_genre_race
            sub_genre_teacher
            sub_genre_student
            repeater_file {
              file {
                filename
                url {
                  source_url
                }
              }
            }
            repeater_link {
              description
              url
            }
          }
        }
      }
    }
  }
`
