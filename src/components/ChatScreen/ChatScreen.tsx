import { useState } from 'react';
import './ChatScreen.scss';
import { ChatScreenHeader } from 'components/ChatScreenHeader';
import { PageSelection } from 'components/PageSelection'
import { SocialMediaSelect } from 'components/SocialMediaSelect';
import { InboxFacebookChat } from 'components/InboxFacebookChat';
import { ChatMessagePage } from 'components/ChatMessagePage';

function ChatScreen() {

	const [isViewPageScreen, setIsViewPageScreen] = useState<boolean>(false);

	const [selectOpenType, setselectOpenType] = useState<string>('');

	const [isViewMediSelection, setIsViewMediaSelection] = useState<boolean>(false);

	const [isActiveVM, setIsAvtiveVM] = useState<string>('block');

	const [isShowMessageZone, setIsShowMessageZone] = useState<string>('-300px');

	const [platformToken, setPlatformToken] = useState<string>('');

	const handleCallback = (type: string) => {

		setIsViewPageScreen(true);
		setIsViewMediaSelection(false)
		setselectOpenType(type);
		if (isViewPageScreen === true && type === selectOpenType) {
			setIsViewPageScreen(false);
		}
	};

	const handleFishdot = (type: string) => {

		if (isViewMediSelection) {
			setIsAvtiveVM('block')
			setIsViewMediaSelection(false)
		} else {
			setIsViewPageScreen(false);
			setIsViewMediaSelection(true)
		}
	}

	const showMessageZone = () => {
		setIsShowMessageZone('0px');
	}

	const closeMessageZone = () => {
		setIsShowMessageZone('-300px');
	}

	const handlePageSelectionSelect = (name: string) => {
		setPlatformToken(name);
		setIsViewPageScreen(false);
	}

	return (
		<>
			<div className='chat-screen-header'>
				<div data-testid='chatscreenheader'>
					<ChatScreenHeader onClick={handleCallback} onClickFishdot={handleFishdot}></ChatScreenHeader>
				</div>
				<div>
					<PageSelection
						isOpen={isViewPageScreen}
						openType={selectOpenType}
						onClickPlatform={handlePageSelectionSelect}
					></PageSelection>
					<SocialMediaSelect isOpen={isViewMediSelection} isActiveViewMore={isActiveVM}></SocialMediaSelect>
				</div>
				<div data-testid="inboxfacebookchat">
					<InboxFacebookChat
						onClickChatMessagePage={showMessageZone} platformtoken={platformToken}
					></InboxFacebookChat>
				</div>
			</div >
			<div data-testid='chatmessagezone' style={{ right: isShowMessageZone }} className="chat-messagepage-zone">
				<ChatMessagePage
					onClickBackStep={closeMessageZone}
					platformtoken={platformToken}
				></ChatMessagePage>
			</div>
		</>
	);
};

export default ChatScreen;
