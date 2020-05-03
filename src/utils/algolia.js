const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/pages/" }
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const knowledgeQuery = `{
  pages: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "knowledge-post" } } }
  ) {
    edges {
      node {
        objectID: id
        
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
}`

const postQuery = `{
  posts: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: knowledgeQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `knowledge`,
    settings
  },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `anticipation`,
    settings
  }
]

module.exports = queries
