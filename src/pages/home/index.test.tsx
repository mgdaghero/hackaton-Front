import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import HomePage from './Home'

describe('<HomePage />', () => {
  test('Should render a page', () => {
    const component = render(<HomePage />)
    expect(component.container).toBeInTheDocument()
  })

  test('Should render title text in document', () => {
    render(<HomePage />)
    const titleContent = screen.getByText(/This is a template 😀/i)
    expect(titleContent).toBeInTheDocument()
  })
})
