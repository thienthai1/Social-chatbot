import { render, screen } from '@testing-library/react'
import ChatScreenHeader from './ChatScreenHeader'
import { PageSelection } from 'components/PageSelection'
import { SocialMediaSelect } from 'components/SocialMediaSelect';

describe('Render Chat Screen Header', () => {

  let setIsViewPageScreen = false
  let setIsViewMediaSelection = false
  let setSelectOpenType = ''
  let isViewMediaSelection = false
  let setIsAvtiveVM = 'none'

  const handleCallback = (type: string) => {

    setIsViewPageScreen = true;
    setIsViewMediaSelection = false
    setSelectOpenType = type;
  };

  const handleFishdot = (type: string) => {

    if (isViewMediaSelection) {
      setIsAvtiveVM = 'block'
      setIsViewMediaSelection = false
    } else {
      setIsViewPageScreen = false
      setIsViewMediaSelection = true
    }
  }

  test('Can open the page selection after click', () => {
    handleCallback('facebook');
    render(
      <>
        <ChatScreenHeader
          onClick={() => { }}
          onClickFishdot={() => { }} />
        <PageSelection
          isOpen={setIsViewPageScreen}
          openType={setSelectOpenType}
          onClickPlatform={() => { }}
        ></PageSelection>
      </>
    )
    const element = screen.getByTestId('PageSelection')
    expect(element.style.height).toEqual('282px')
  })

  test('Can open the page selection which contain facebook page', () => {
    handleCallback('facebook');
    render(
      <>
        <ChatScreenHeader
          onClick={() => { }}
          onClickFishdot={() => { }} />
        <PageSelection
          isOpen={setIsViewPageScreen}
          openType={setSelectOpenType}
          onClickPlatform={() => { }}
        ></PageSelection>
      </>
    )
    const element = screen.getAllByText('เลือกเพจของคุณ')
    expect(element).toBeInTheDocument
  })

  test('Can open the page selection which contain line page', () => {
    handleCallback('line');
    render(
      <>
        <ChatScreenHeader
          onClick={() => { }}
          onClickFishdot={() => { }} />
        <PageSelection
          isOpen={setIsViewPageScreen}
          openType={setSelectOpenType}
          onClickPlatform={() => { }}
        ></PageSelection>
      </>
    )
    const element = screen.getAllByText('เลือกไลน์แอดของคุณ')
    expect(element).toBeInTheDocument
  })

  test('Can open social media select', () => {
    handleFishdot('line');
    render(
      <>
        <ChatScreenHeader
          onClick={() => { }}
          onClickFishdot={() => { }} />
        <PageSelection
          isOpen={setIsViewPageScreen}
          openType={setSelectOpenType}
          onClickPlatform={() => { }}
        ></PageSelection>
        <SocialMediaSelect isOpen={setIsViewMediaSelection} isActiveViewMore={setIsAvtiveVM}></SocialMediaSelect>
      </>
    )
    const element = screen.getAllByText('เลือกเชื่อมต่อกับ')
    expect(element).toBeInTheDocument
  })


})