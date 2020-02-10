/** @jsx jsx */
import {jsx} from 'theme-ui'
import Layout from '../containers/Layout.js'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import Work from '../components/Work'
import Hero from '../components/Hero'
import BlogList from '../components/BlogList'

const IndexPage = ({data, theme}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={data.page} />
      <Work projects={data.projects} />
      <BlogList posts={data.posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "/"}}) {
      title
      _rawParagraph
      socials {
        platform
        url
        file {
          asset {
            url
          }
        }
      }
    }
    projects: allSanityProject {
      edges {
        node {
          title
          _rawDescription
          url
          repo
          slug {
            current
          }
          image {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageSecondary {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          keywords
        }
      }
    }
    posts: allSanityPost(sort: {fields: [published], order: DESC}) {
      edges {
        node {
          title
          published(formatString: "MMM D, YYYY")
          authors {
            author {
              name
            }
          }
          slug {
            current
          }
          image {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
