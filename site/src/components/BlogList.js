/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState, useRef, useEffect} from 'react'
import {Wrapper, Section} from '../system'
import BlogListItem from './BlogListItem'
import Pagination from './Pagination'
import BlogFilter from './BlogFilter'
import {motion} from 'framer-motion'
// import {useIntersectionObserver} from '@lmack/hooks'

let containerHeight
let hasAnimated = false

const BlogList = ({allPosts}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const [posts, setPosts] = useState(allPosts.edges)
  const [selectedFilter, setSelectedFilter] = useState()
  const [keywords, setKeywords] = useState([])
  const containerRef = useRef()

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = posts.length

  const paginate = num => setCurrentPage(num)

  useEffect(() => {
    if (!containerHeight) {
      containerHeight = `${containerRef.current.offsetHeight}px`
    }
  }, [])

  const uniqueKeywordsForCurrentPosts = {}

  useEffect(() => {
    const keywordsArray = []
    allPosts.edges.forEach(({node: post}) => {
      keywordsArray.push(...post.keywords)
    })
    setKeywords(keywordsArray)
  }, [allPosts])

  keywords.forEach(word => {
    uniqueKeywordsForCurrentPosts[word] =
      (uniqueKeywordsForCurrentPosts[word] || 0) + 1
  })

  const sortedKeywords = Object.keys(uniqueKeywordsForCurrentPosts).sort(
    (a, b) =>
      uniqueKeywordsForCurrentPosts[b] - uniqueKeywordsForCurrentPosts[a],
  )

  const handleFilter = filter => {
    if (selectedFilter === filter) {
      setSelectedFilter(null)
      setPosts(allPosts.edges)
    } else {
      const filteredPosts = allPosts.edges.filter(({node: post}) =>
        post.keywords.includes(filter),
      )
      setSelectedFilter(filter)
      setPosts(filteredPosts)
    }
  }

  useEffect(() => {
    hasAnimated = true
  })

  // const [ref, isVisible] = useIntersectionObserver({
  //   rootMargin: '-100px',
  //   triggerOnce: true,
  // })

  return (
    <Wrapper id="Blog">
      <Section>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: hasAnimated ? 0 : 1.5}}
        >
          <h2 sx={{variant: `text.subheading`}}>Blog</h2>
          <BlogFilter
            keywords={sortedKeywords}
            selectedFilter={selectedFilter}
            handleFilter={handleFilter}
          />
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
        </motion.div>
      </Section>
    </Wrapper>
  )
}
export default BlogList
