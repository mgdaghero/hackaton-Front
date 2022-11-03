import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Title from './index'

describe('<Title />', () => {
  test('Should render a component', () => {
    const component = render(<Title />)
    expect(component.container).toBeInTheDocument()
  })

  test('Should render title text in document', () => {
    render(<Title />)
    const titleContent = screen.getByText(/This is a template 😀/i)
    expect(titleContent).toBeInTheDocument()
  })
})
