/** @jsx jsx */
import {jsx} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Layout from '../containers/Layout'
import PortableText from '../components/PortableText'
// import Image from 'gatsby-image';
import {Wrapper, Section, Divider} from '../system/index'
import GalleryBlock from '../blocks/GalleryBlock'
import TextWithImageBlock from '../blocks/TextWithImageBlock'
import SEO from '../components/seo'
import BlockContent from '../components/BlockContent/BlockContent'
// import { buildImageObj } from '../lib/helpers';
// import { imageUrlFor } from '../lib/image-url';

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

function renderBlock(block) {
  switch (block._type) {
    case 'gallery':
      return <GalleryBlock key={block._key} data={block} />
    case 'textwithimage':
      return <TextWithImageBlock key={block._key} data={block} />
    default:
      break
  }
}

export default ({data}) => {
  const {
    title,
    published,
    authors,
    image,
    sanityImage,
    _rawBody,
    _rawBlockcontent,
  } = data.post
  // const { blocks } = data.post.blockstack;
  // const allAuthors = authors.map(author => author.author.name).join(', ')

  // const blocks = data.post.blockstack ? data.post.blockstack.blocks : undefined

  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <Section>
          {/* {sanityImage && sanityImage.asset && (
            <Image
              fluid={image.asset.fluid}
              alt={image.alt}
              sx={{
                border: `5px solid`,
                borderColor: `greyLight`,
                width: `80%`,
                maxWidth: 500,
                margin: `20px auto`
              }}
            />
          )} */}
          {/* {sanityImage && sanityImage.asset && (
            <img
              src={
                imageUrlFor(buildImageObj(sanityImage))
                // .width(600)
                // .height(Math.floor((9 / 16) * 600))
                // .url()
              }
              alt={sanityImage.alt}
              sx={{
                display: `block`,
                border: `10px solid`,
                borderColor: `greyLight`,
                maxWidth: `60%`,
                margin: `20px auto`
              }}
            />
          )} */}
          <h1 sx={{variant: `text.subheading`}}>{title}</h1>
          {/* <h4 sx={{ color: `primary` }}>{allAuthors}</h4> */}
          <p>
            <span sx={{fontWeight: `bold`}}>Posted: </span>
            {published}
          </p>
          <Divider style={{mb: [4]}} />
          {_rawBody && <PortableText blocks={_rawBody || []} />}
          {_rawBlockcontent && <BlockContent blocks={_rawBlockcontent || []} />}
          {/* BLOCKS */}
          {/* {blocks && blocks.map(block => renderBlock(block))} */}
          <Link to="/" sx={{variant: `buttons.primary`, mt: [3, 3, 4]}}>
            Back Home
          </Link>
        </Section>
      </Wrapper>
    </Layout>
  )
}
