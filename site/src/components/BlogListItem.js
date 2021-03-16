/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

const cardStyles = {
  display: `flex`,
  outline: `none`,
  border: `2px solid`,
  borderColor: `grey`,
  borderRadius: 3,
  py: 15,
  px: [15, 20, 25],
  bg: `brightWhite`,
}

const BlogListItem = ({idx, post}) => (
  <li sx={{listStyle: `none`, m: 0}} data-test-id={`blog-post-${idx}`}>
    <Link
      to={`/${post.slug.current}`}
      sx={{
        ...cardStyles,
        textDecoration: `none`,
        color: `black`,
        display: `flex`,
        width: `100%`,
        alignItems: `center`,
        justifyContent: `${idx % 2 === 0 ? `flex-start` : `space-between`}`,
        flexDirection: `${idx % 2 === 0 ? `row` : `row-reverse`}`,
        ':hover, :focus': {
          bg: `${idx % 2 === 0 ? `#fff2f2` : `#e8f0ff`}`,
        },
      }}
    >
      {post.image.asset && (
        <Image
          loading={`lazy`}
          fixed={post.image.asset.fixed}
          alt={post.image.alt}
          sx={{
            display: `inline-block`,
            border: `5px solid`,
            borderColor: `greyLight`,
            borderRadius: `50%`,
            flex: `0 0 90px`,
            height: `90px`,
            mr: `${idx % 2 === 0 ? `25px` : `0`}`,
            ml: `${idx % 2 === 0 ? `0` : `25px`}`,
          }}
        />
      )}
      <div
        sx={{
          display: `inline-block`,
        }}
      >
        <h3 sx={{m: 0, fontFamily: `heading`}}>{post.title}</h3>
        <p sx={{my: 20, color: `primary`}}>{post.published}</p>
      </div>
    </Link>
  </li>
)

export default BlogListItem
