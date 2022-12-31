import { render, screen } from '@testing-library/react'

import { } from '@testing-library/jest-dom'

import ChatScreen from './ChatScreen'

describe('Render ChatScreen', () => {

  // render header correctly
  test('render chat screen header correctly', () => {
    render(<ChatScreen />)
    const element = screen.getByTestId('chatscreenheader')
    expect(element).toBeInTheDocument()
  })

  // render inbox chat correctly
  test('render inbox chat correctly', () => {
    render(<ChatScreen />)
    const element = screen.getByTestId('chatscreenheader')
    expect(element).toBeInTheDocument()
  })

  // render chat messagezone
  test('render chat messagezone', () => {
    render(<ChatScreen />)
    const element = screen.getByTestId('chatmessagezone')
    expect(element).toBeInTheDocument()
  })

})