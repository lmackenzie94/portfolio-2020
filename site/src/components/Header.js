/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import ThemeToggle from './ThemeToggle'
import {Wrapper} from '../system/index'

const Header = ({siteTitle, fontSizeIdx}) => {
  return (
    <header
      role="banner"
      sx={{
        bg: `header`,
        mb: [1, 2, 3],
        py: [3],
        transitionProperty: `backgroundColor`,
        transition: `0.2s ease-out`,
        position: `relative`,
      }}
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
    </header>
  )
}

export default Header
