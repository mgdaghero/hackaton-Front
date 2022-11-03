import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RouterApp from './index'

describe('<RouterApp />', () => {
  test('Should render a router', () => {
    const component = render(<RouterApp />)
    expect(component.container).toBeInTheDocument()
  })
})
