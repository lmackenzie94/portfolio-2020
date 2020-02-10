/** @jsx jsx */
import {useState, useRef, useEffect} from 'react'
import {jsx} from 'theme-ui'
import {Wrapper, Section} from '../system'
import {withGlobal} from '../global'
import BlogListItem from './BlogListItem'
import Pagination from './Pagination'

let containerHeight

const BlogList = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const containerRef = useRef()

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.edges.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = posts.edges.length

  const paginate = num => setCurrentPage(num)

  useEffect(() => {
    if (!containerHeight) {
      containerHeight = `${containerRef.current.offsetHeight}px`
      console.log(containerHeight)
    }
  })

  return (
    <Wrapper id="Blog">
      <Section>
        <h2 sx={{variant: `text.subheading`}}>Blog</h2>
        <ul
          ref={containerRef}
          sx={{
            m: 0,
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fill, minmax(310px, 1fr))`,
            gridTemplateRows: `max-content`,
            gridGap: `25px`,
            paddingLeft: `20px`,
            borderLeft: `4px solid`,
            borderColor: `primary`,
            minHeight: [`none`, containerHeight],
          }}
        >
          {currentPosts.map(({node: post}, idx) => {
            return <BlogListItem key={post.title} idx={idx} post={post} />
          })}
        </ul>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          currentPage={currentPage}
          paginate={paginate}
        />
      </Section>
    </Wrapper>
  )
}
export default withGlobal(BlogList)
