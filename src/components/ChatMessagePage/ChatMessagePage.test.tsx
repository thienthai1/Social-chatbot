import { render, screen } from '@testing-library/react'

import { } from '@testing-library/jest-dom'

import ChatMessagePage from './ChatMessagePage'

describe('Render Message Page', () => {

  // render header correctly
  test('render chat message page correctly', () => {
    render(
      <ChatMessagePage
        onClickBackStep={() => { }}
        platformtoken=''
      />
    )
    const element = screen.getByTestId('chatmessagepageheader')
    expect(element).toBeInTheDocument()
  })

  // test back step

  // test dialog message box

  // test scroll height

  // can click to open contact list

  // can open contact list panel

})