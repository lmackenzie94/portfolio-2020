import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import Header from '../Header'
import ThemeProvider from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'

function Wrapper({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
// DOESN'T WORK
// const render = (ui, options) => rtlRender(ui, {wrapper: Wrapper, ...options})

// also doesn't work :D
const render = ui =>
  rtlRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

test('renders the correct page title', () => {
  const testTitle = 'Test Title'
  const {debug, getByRole} = render(<Header siteTitle={testTitle} />)
  const title = getByRole('heading')
  console.log(title)
})
