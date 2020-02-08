/** @jsx jsx */
import {useEffect} from 'react'
import {jsx} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Layout from '../containers/Layout'
import {Wrapper, Section, Divider} from '../system/index'
import SEO from '../components/seo'
import BlockContent from '../components/BlockContent'
import Prism from 'prismjs'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      title
      published(formatString: "MMM D, YYYY")
      authors {
        author {
          name
        }
      }
      image {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      sanityImage: image {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
      _rawBlockcontent
    }
  }
`

export default ({data, theme}) => {
  const {title, published, _rawBlockcontent} = data.post

  // // for syntax highlighting
  useEffect(() => {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <Section
          sx={{
            bg: `white`,
            color: `black`,
            p: [2, 3, 4],
            mx: [-2, -3, -4],
            borderRadius: 5,
          }}
        >
          <h1 sx={{variant: `text.subheading`, color: `black`, mb: 15}}>
            {title}
          </h1>
          <p>{published}</p>
          {/* <span
            sx={{
              display: `block`,
              width: `100%`,
              height: 2,
              backgroundColor: `primary`,
            }}
          ></span> */}
          <Divider style={{mb: [4]}} />
          {_rawBlockcontent && (
            <BlockContent blocks={_rawBlockcontent || []} theme={theme} />
          )}
          <Link
            to="/"
            sx={{
              variant: `buttons.primary`,
              mt: [4, 4, 5],
            }}
          >
            Back Home
          </Link>
        </Section>
      </Wrapper>
    </Layout>
  )
}
