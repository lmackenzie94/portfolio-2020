import React from 'react'
import {render} from '@testing-library/react'
import Pagination from '../Pagination'

test('renders correct number of buttons', () => {
  const postsPerPage = 4
  const totalPosts = 10
  const numOfButtons = Math.ceil(totalPosts / postsPerPage)

  const {getAllByTestId, debug} = render(
    <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} />,
  )
  debug()
  const buttons = getAllByTestId('page-btn')
  expect(buttons).toHaveLength(numOfButtons)
})
