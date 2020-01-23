import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Global, css} from '@emotion/core'
import Prism from 'prismjs'

import Header from './Header'
import './layout.css'
import AccessibilityPanel from './AccessibilityPanel'
import {GlobalProvider} from '../global'
import Footer from './Footer'

const accessibleFontStack = 'Arial,Helvetica Neue,Helvetica,sans-serif'

const Layout = ({children, siteTitle}) => {
  const [useAccessibleFont, setUseAccessibleFont] = useState(false)
  const [fontSizeIdx, setFontSizeIdx] = useState(2) // 16px
  const [locale, setLocale] = useState(`EN`)
  const localePrefix = locale === `EN` ? `` : `/fr`

  useEffect(() => {
    if (localStorage.fontSizeIdx) {
      localStorage.removeItem('fontSizeIdx')
    }
    if (sessionStorage.fontSizeIdx) {
      setFontSizeIdx(parseInt(sessionStorage.fontSizeIdx))
    }
  }, [])

  // for syntax highlighting
  useEffect(() => {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    Prism.highlightAll()
  })

  useEffect(() => {
    sessionStorage.setItem('fontSizeIdx', `${fontSizeIdx}`)
  }, [fontSizeIdx])

  // const handleScreenResize = () => {
  //   if (fontSizeIdx === 2) return;
  //   if (window.innerWidth < 400) {
  //     setFontSizeIdx(currentSize => currentSize - 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleScreenResize);
  //   return () => {
  //     window.removeEventListener('resize', handleScreenResize);
  //   };
  // }, []);

  return (
    <GlobalProvider value={{locale, localePrefix, fontSizeIdx}}>
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
      <Header siteTitle={siteTitle} setLocale={setLocale} />
      <AccessibilityPanel
        setFontSizeIdx={setFontSizeIdx}
        fontSizeIdx={fontSizeIdx}
        setUseAccessibleFont={setUseAccessibleFont}
        useAccessibleFont={useAccessibleFont}
      />
      <main>{children}</main>
      <Footer />
    </GlobalProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
