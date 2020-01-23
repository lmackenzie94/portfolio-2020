/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import {Wrapper, Section} from '../system'
import {withGlobal} from '../global'

const cardStyles = {
  listStyle: `none`,
  display: `flex`,
  m: 0,
  border: `2px solid`,
  borderColor: `grey`,
  borderRadius: 3,
  p: 20,
  bg: `brightWhite`,
}

const Blog = ({posts, localePrefix}) => {
  return (
    <Wrapper id="Blog">
      <Section>
        <h2 sx={{variant: `text.subheading`}}>Blog</h2>
        <ul
          sx={{
            m: 0,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fill, minmax(310px, 1fr))`,
            // gridTemplateColumns: `1fr 1fr`,
            gridGap: `25px`,
            paddingLeft: `20px`,
            borderLeft: `4px solid`,
            borderColor: `primary`,
          }}
        >
          {posts.edges.map(({node: post}, idx) => (
            <li
              key={post.title}
              sx={{
                ...cardStyles,
                ':hover, :focus': {
                  bg: `${idx % 2 === 0 ? `#fff2f2` : `#e8f0ff`}`,
                },
              }}
              data-test-id={`blog-post-${idx}`}
            >
              <Link
                to={`/${post.slug.current}`}
                sx={{
                  textDecoration: `none`,
                  color: `black`,
                  display: `flex`,
                  width: `100%`,
                  alignItems: `center`,
                }}
              >
                {post.image.asset && (
                  <Image
                    loading={`lazy`}
                    fluid={post.image.asset.fluid}
                    alt={post.image.alt}
                    sx={{
                      display: `inline-block`,
                      border: `5px solid`,
                      borderColor: `greyLight`,
                      borderRadius: `50%`,
                      flex: `0 0 115px`,
                      height: `115px`,
                      mr: `25px`,
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
          ))}
        </ul>
      </Section>
    </Wrapper>
  )
}
export default withGlobal(Blog)
