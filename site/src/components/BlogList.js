/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper, Section} from '../system'
import {withGlobal} from '../global'
import BlogListItem from './BlogListItem'

const Blog = ({posts}) => {
  return (
    <Wrapper id="Blog">
      <Section>
        <h2 sx={{variant: `text.subheading`}}>Blog</h2>
        <ul
          sx={{
            m: 0,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fill, minmax(310px, 1fr))`,
            gridGap: `25px`,
            paddingLeft: `20px`,
            borderLeft: `4px solid`,
            borderColor: `primary`,
          }}
        >
          {posts.edges.map(({node: post}, idx) => {
            return <BlogListItem key={post.title} idx={idx} post={post} />
          })}
        </ul>
      </Section>
    </Wrapper>
  )
}
export default withGlobal(Blog)
