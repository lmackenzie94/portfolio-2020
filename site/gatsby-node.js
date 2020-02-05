// allows us to get absolute paths
const path = require('path')

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions
  deletePage(page)
  createPage(page)
  // createLocalePage(page, createPage);
}

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
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
  const projects = result.data.allSanityProject.edges.map(({node}) => node)
  const posts = result.data.allSanityPost.edges.map(({node}) => node)

  projects.forEach(project => {
    let page = {
      path: `/${project.slug.current}`,
      component: path.resolve('./src/templates/project.js'),
      // anything passed to 'context' becomes available to the graphql query in project.js template
      context: {
        slug: project.slug.current,
      },
    }
    createPage(page)
  })

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
