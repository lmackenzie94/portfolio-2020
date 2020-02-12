/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState, useRef, useEffect} from 'react'
import {Wrapper, Section} from '../system'
import {withGlobal} from '../global'
import BlogListItem from './BlogListItem'
import Pagination from './Pagination'
import BlogFilter from './BlogFilter'

let containerHeight

const BlogList = ({posts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const containerRef = useRef()

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.edges.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = posts.edges.length

  const paginate = num => setCurrentPage(num)

  useEffect(() => {
    if (!containerHeight) {
      containerHeight = `${containerRef.current.offsetHeight}px`
    }
  }, [])

  const allKeywordsForCurrentPosts = []
  const uniqueKeywordsForCurrentPosts = {}

  posts.edges.forEach(({node: post}) => {
    allKeywordsForCurrentPosts.push(...post.keywords)
  })

  allKeywordsForCurrentPosts.forEach(word => {
    uniqueKeywordsForCurrentPosts[word] =
      (uniqueKeywordsForCurrentPosts[word] || 0) + 1
  })

  const sortedKeywords = Object.keys(uniqueKeywordsForCurrentPosts).sort(
    (a, b) =>
      uniqueKeywordsForCurrentPosts[b] - uniqueKeywordsForCurrentPosts[a],
  )

  return (
    <Wrapper id="Blog">
      <Section>
        <h2 sx={{variant: `text.subheading`}}>Blog</h2>
        <BlogFilter keywords={sortedKeywords} />
        <ul
          ref={containerRef}
          sx={{
            m: 0,
            mt: 30,
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
