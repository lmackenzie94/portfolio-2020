import React from 'react'
import {render} from '@testing-library/react'
import Button from '../Button'

test('Delete later', () => {
  expect(true).toBe(true)
})

test('button text', () => {
  const data = {idx: 1, url: `https://google.com`}
  const {getByText, debug} = render(<Button data={data} />)
  debug()
  // expect(getByText(/live/i)).toBeTruthy()
  expect(getByText(/live/i)) // same as above
})
