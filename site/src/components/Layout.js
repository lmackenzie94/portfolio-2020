/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Global, css} from '@emotion/core'
import Header from './Header'
import AccessibilityPanel from './AccessibilityPanel'
import {GlobalProvider} from '../global'
import Footer from './Footer'
import './layout.css'

const accessibleFontStack = 'Arial,Helvetica Neue,Helvetica,sans-serif'

const Layout = ({children, siteTitle}) => {
  const [useAccessibleFont, setUseAccessibleFont] = useState(false)
  const [fontSizeIdx, setFontSizeIdx] = useState(2) // 16px

  useEffect(() => {
    if (localStorage.fontSizeIdx) {
      localStorage.removeItem('fontSizeIdx')
    }
    if (sessionStorage.fontSizeIdx) {
      setFontSizeIdx(parseInt(sessionStorage.fontSizeIdx))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('fontSizeIdx', `${fontSizeIdx}`)
  }, [fontSizeIdx])

  return (
    <GlobalProvider value={{fontSizeIdx}}>
      <Global
        styles={css`
          * {
            ::-webkit-scrollbar {
              width: 0.75rem;
            }

            ::-webkit-scrollbar-track {
              box-shadow: inset 1px 0 0px rgba(0, 0, 0, 0.1);
              background-color: lightgray;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #d43737;
            }
          }
          // to push footer down on 404 pages
          #gatsby-focus-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      <Global
        styles={theme => ({
          html: {
            // fontSize: '112.5%' // 18px
          },
          body: {
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
            fontFamily: useAccessibleFont
              ? accessibleFontStack
              : theme.fonts.body,
            lineHeight: `1.45em`,
            fontSize: theme.fontSizes[fontSizeIdx],
          },
          h1: {
            fontSize: theme.fontSizes[fontSizeIdx + 4],
          },
          h2: {
            fontSize: theme.fontSizes[fontSizeIdx + 3],
          },
          h3: {
            fontSize: theme.fontSizes[fontSizeIdx + 2],
          },
          'p, h1, h2, h3': {
            transitionProperty: `color`,
            transition: `0.2s ease-out`,
          },
        })}
      />
      <Header siteTitle={siteTitle} />
      <AccessibilityPanel
        setFontSizeIdx={setFontSizeIdx}
        fontSizeIdx={fontSizeIdx}
        setUseAccessibleFont={setUseAccessibleFont}
        useAccessibleFont={useAccessibleFont}
      />
      {/* flex: 1 to push footer down on 404 page */}
      <main sx={{flex: 1}}>{children}</main>
      <Footer />
    </GlobalProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
