/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useEffect} from 'react'
import {Link} from 'gatsby'
import ThemeToggle from './ThemeToggle'
import {Wrapper} from '../system/index'
import {withGlobal} from '../global'
import {motion} from 'framer-motion'

let hasAnimated = false

const Header = ({siteTitle, fontSizeIdx}) => {
  useEffect(() => {
    hasAnimated = true
  })

  return (
    <motion.header
      role="banner"
      sx={{
        bg: `header`,
        mb: [1, 2, 3],
        py: [3],
        transitionProperty: `backgroundColor`,
        transition: `0.2s ease-out`,
        position: `relative`,
      }}
      initial={{y: hasAnimated ? 0 : -80}}
      animate={{y: 0}}
      transition={{damping: 25}}
    >
      <Wrapper>
        <div
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
            }}
          >
            <h1
              sx={{
                variant: `text.title`,
                fontSize: [fontSizeIdx + 4],
                margin: 0,
              }}
            >
              {siteTitle}
            </h1>
          </Link>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </Wrapper>
    </motion.header>
  )
}

export default withGlobal(Header)
