import { render, screen, fireEvent } from '@testing-library/react'
import { ChatScreen } from 'components/ChatScreen'
import { InboxFacebookChat } from 'components/InboxFacebookChat'
import './InboxFacebookChat.scss';

describe('Render inbox facebook chat', () => {

  // render facebook chat successful
  test('Render facebookchat error', () => {
    render(<ChatScreen />)
    const element = screen.getByTestId('InboxFacebookChat')
    expect(element).toBeInTheDocument()
  })

  // render facebook noti style successful
  test('Render Facebok style successful', () => {
    const content = render(
      <InboxFacebookChat
        onClickChatMessagePage={() => { }}
        platformtoken=''
      />
    )
    //fireEvent.click(content.getByTestId('testclicknav'));
    expect(content.getByTestId('MyNoti').style.backgroundColor).toBe('rgb(24, 119, 242)');
    // expect(content.getByTestId('testclicknav').style.bor).toBe('rgb(24, 119, 242)');
  })

  // render line noti style successful
  test('Render Line style successful', () => {
    const content = render(
      <InboxFacebookChat
        onClickChatMessagePage={() => { }}
        platformtoken='linetoken'
      />
    )
    // fireEvent.click(content.getByTestId('testButton'));
    expect(content.getByTestId('MyNoti').style.backgroundColor).toBe('rgb(6, 199, 85)');
  })

  // render facebook navigation style successful
  test('Render facebook navgation style successful', () => {
    const content = render(
      <InboxFacebookChat
        onClickChatMessagePage={() => { }}
        platformtoken=''
      />
    )
    expect(content.getByTestId('testclicknav').style.borderColor).toBe('#1877f2');
  })

  // render line navigation style successful
  test('Render line navigation style successful', () => {
    const content = render(
      <InboxFacebookChat
        onClickChatMessagePage={() => { }}
        platformtoken='linetoken'
      />
    )
    expect(content.getByTestId('testclicknav').style.borderColor).toBe('#06c755');
  })

  // Test Click and Appear message page


})