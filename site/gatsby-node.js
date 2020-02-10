// allows us to get absolute paths
const path = require('path')

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions
  deletePage(page)
  createPage(page)
}

exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // returns an array of just our nodes
  const posts = result.data.allSanityPost.edges.map(({node}) => node)

  posts.forEach(post => {
    let page = {
      path: `/${post.slug.current}`,
      component: path.resolve('./src/templates/blogpost.js'),
      context: {
        id: post.id,
        slug: post.slug.current,
      },
    }
    createPage(page)
  })
}
