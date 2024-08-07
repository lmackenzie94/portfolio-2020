/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Global, css} from '@emotion/core'
import Header from './Header'
import AccessibilityPanel from './AccessibilityPanel'
import Footer from './Footer'
import './layout.css'
import Banner from './Banner'

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
    <>
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
          body: {
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
            fontFamily: useAccessibleFont
              ? accessibleFontStack
              : theme.fonts.body,
            lineHeight: `1.6`,
            fontSize: theme.fontSizes[fontSizeIdx],
            transitionProperty: `background`,
            transition: `0.2s ease-out`,
          },
          h1: {
            fontSize: theme.fontSizes[fontSizeIdx + 4],
          },
          h2: {
            fontSize: theme.fontSizes[fontSizeIdx + 3],
          },
          h3: {
            fontSize: theme.fontSizes[fontSizeIdx + 1],
          },
          'p, h1, h2, h3': {
            transitionProperty: `color`,
            transition: `0.2s ease-out`,
          },
          '::-moz-selection': {
            color: theme.colors.white,
            background: theme.colors.primary,
          },

          '::selection': {
            color: theme.colors.white,
            background: theme.colors.primary,
          },
        })}
      />
      <Header siteTitle={siteTitle} />
      <Banner>
        <p
          sx={{
            mb: 0,
            fontWeight: 'bold',
            fontFamily: 'heading',
            color: 'black',
          }}
        >
          New portfolio site is in the works{' '}
          <span sx={{color: 'primary'}}>@</span>{' '}
          <a
            href="https://lukemackenzie.dev"
            target="_blank"
            rel="noopener noreferrer"
            sx={{color: 'black'}}
          >
            lukemackenzie.dev
          </a>
          {' 👀'}
        </p>
      </Banner>
      <AccessibilityPanel
        setFontSizeIdx={setFontSizeIdx}
        fontSizeIdx={fontSizeIdx}
        setUseAccessibleFont={setUseAccessibleFont}
        useAccessibleFont={useAccessibleFont}
      />
      {/* flex: 1 to push footer down on 404 page */}
      <main sx={{flex: 1}}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
