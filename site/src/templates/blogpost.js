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
      blockstack {
        blocks {
          __typename
          ... on SanityGallery {
            _key
            _type
            images {
              caption
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          ... on SanityTextwithimage {
            _key
            _type
            flip
            text
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
      _rawBody(resolveReferences: {maxDepth: 5})
      _rawBlockcontent
    }
  }
`

export default ({data}) => {
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
        <Section>
          <h1 sx={{variant: `text.subheading`}}>{title}</h1>
          <p>
            <span sx={{fontWeight: `bold`}}>Posted: </span>
            {published}
          </p>
          <Divider style={{mb: [4]}} />
          {_rawBlockcontent && <BlockContent blocks={_rawBlockcontent || []} />}
          <Link
            to="/"
            sx={{
              variant: `buttons.primary`,
              mt: [3, 3, 4],
            }}
          >
            Back Home
          </Link>
        </Section>
      </Wrapper>
    </Layout>
  )
}
