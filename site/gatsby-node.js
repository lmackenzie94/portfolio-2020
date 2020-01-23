// allows us to get absolute paths
const path = require('path');

// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here
const extraLanguages = ['fr']; // English is currently the default so it isn't needed here.
const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page;
  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE
    }
  });
  if (extraLanguages.length) {
    extraLanguages.forEach(code => {
      const { path, context, ...rest } = page;
      createPage({
        ...rest,
        path: `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code
        }
      });
    });
  }
};

// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   // generate your dynamic content here...
//   const page = {
//     path: "some-page",
//     component: path.resolve(`./src/templates/some-page.js`),
//     context: {
//       slug: "some-page-slug",
//     },
//   }
//   createLocalePage(page, createPage)
// }

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage(page);
  // createLocalePage(page, createPage);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
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
      allSanityPage {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityNote {
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
  `);

  if (result.errors) throw result.errors;

  // returns an array of just our nodes
  const projects = result.data.allSanityProject.edges.map(({ node }) => node);
  const posts = result.data.allSanityPost.edges.map(({ node }) => node);
  // const sitepages = result.data.allSanityPage.edges.map(({ node }) => node);
  // const notes = result.data.allSanityNote.edges.map(({ node }) => node);

  projects.forEach(project => {
    let page = {
      path: `/${project.slug.current}`,
      component: path.resolve('./src/templates/project.js'),
      // anything passed to 'context' becomes available to the graphql query in project.js template
      context: {
        slug: project.slug.current
      }
    };
    createPage(page);
    // createLocalePage(page, createPage);
  });

  posts.forEach(post => {
    let page = {
      path: `/${post.slug.current}`,
      component: path.resolve('./src/templates/blogpost.js'),
      context: {
        id: post.id,
        slug: post.slug.current
      }
    };
    createPage(page);
    // createLocalePage(page, createPage);
  });

  // sitepages.forEach(sitepage => {
  //   let page = {
  //     path: `/${sitepage.slug.current}`,
  //     component: path.resolve('./src/templates/page.js'),
  //     context: {
  //       id: sitepage.id,
  //       slug: sitepage.slug.current
  //     }
  //   };
  //   createLocalePage(page, createPage);
  // });

  // notes.forEach(note => {
  //   let page = {
  //     path: `/${note.slug.current}`,
  //     component: path.resolve('./src/templates/note.js'),
  //     context: {
  //       id: note.id,
  //       slug: note.slug.current
  //     }
  //   };
  //   createLocalePage(page, createPage);
  // });
};
