import { useEffect, useRef, useState } from 'react'
import './ChatMessagePage.scss'
import { ConnectContactList } from 'components/ConnectContactList'
import { AddNewContact } from 'components/AddNewContact'

interface ChatMessagePageProps {
	onClickBackStep: () => void
	platformtoken: string
}

function ChatMessagePage(props: ChatMessagePageProps) {

	const [text, setText] = useState<string>('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [isAppearContactList, setAppearContactList] = useState<boolean>(false);
	const [isBackDropContactListZone, setBackdropContactListZOne] = useState<boolean>(false);

	const [isContactListZone, setContactListZone] = useState<boolean>(false);

	const [isOpenSuccessContactList, setOpenSuccessContaactList] = useState<boolean>(false);

	const [isAlreadyAdd, setisAlreadyAdd] = useState<boolean>(false)

	const handleTextChange = (event) => {
		setText(event.target.value)
	}

	const handleTextKeyDown = (event) => {
		if (event.which === 13 && !event.shiftKey) {
			event.preventDefault()
			handleSendClick()
		}
	}

	const handleSendClick = async () => {

	}

	const handleTextIndi = () => {
		let myTextArea = document.getElementById('myText');
		let textIndi = document.getElementById('text_indi');

		if (myTextArea != null && textIndi != null) {
			myTextArea.style.width = '210px';
			textIndi.style.display = 'none';
		}
	}

	useEffect(() => {
		if (textareaRef && textareaRef.current) {

			if (textareaRef.current.value.length % 26 === 0 && textareaRef.current.value.length < 104) {
				textareaRef.current.style.height = '20px'
				const scrollHeight = textareaRef.current.scrollHeight
				textareaRef.current.style.height = scrollHeight + 'px'
			}
		}

	}, [text])

	const handleFocus = () => {

		let myTextArea = document.getElementById('myText');
		let textIndi = document.getElementById('text_indi');

		if (myTextArea != null && textIndi != null) {
			myTextArea.style.width = '250px';
			textIndi.style.display = 'block';
		}

	}

	const handleBlur = () => {
		let myTextArea = document.getElementById('myText');
		let textIndi = document.getElementById('text_indi');

		if (myTextArea != null && textIndi != null) {
			myTextArea.style.width = '210px';
			textIndi.style.display = 'none';
		}
	}

	const handleAppearContactList = () => {
		setAppearContactList(!isAppearContactList);
	}

	const handleBackDropContactListZone = (is_alreadyadd) => {
		setBackdropContactListZOne(!isBackDropContactListZone);
		setContactListZone(!isContactListZone);
		setAppearContactList(!isAppearContactList);
		const el = document.getElementById("myContactList");

		if (el !== undefined && el !== null) {
			console.log("ok");
			document.getElementById("myContactList")?.focus();
		}

		setisAlreadyAdd(is_alreadyadd)
	}

	const handleCloseContactList = () => {
		setBackdropContactListZOne(!isBackDropContactListZone);
		setContactListZone(!isContactListZone);
	}

	const handleSuccessContanctList = () => {
		setOpenSuccessContaactList(!isOpenSuccessContactList)
		setContactListZone(!isContactListZone);
	}

	const handleCloseAll = () => {
		setContactListZone(false)
		setOpenSuccessContaactList(false)
		setAppearContactList(false)
		setBackdropContactListZOne(false)
	}


	return (
		<>
			<div data-testid='chatmessagepageheader' className={`message-page-header ${props.platformtoken}`}>
				<img onClick={props.onClickBackStep} className='backstep-image' src='/images/chatscreen/backstep_button.png' alt="backstepimage" width='21px'></img>
				<img className='chat-people-header' src='/images/chatscreen/chatpeople/chatpeople-1.png' alt="chat-people-header" width='40px'></img>
				<span className='message-page-header-username'>Kate Rose</span>
				<img className='search-history-icon' src='/images/chatscreen/message_history_search.png' alt='search-history-icon' width='32px'></img>
				<img onClick={handleAppearContactList} className='message-page-fishdot' alt='message-page-fishdot' src='/images/chatscreen/fishdot_icon.png' width='5px'></img>
				<div className={isAppearContactList ? 'contactlist show' : 'contactlist '} data-testid='contact-list'>
					<ul>
						<li>
							<img
								src="/images/icons/star.png"
								alt="addUser"
								width="15px"
								height="15px"
							/>
							<span>ติดต่อ</span>
						</li>
						<li onClick={() => handleBackDropContactListZone(false)}>
							<img
								src="/images/icons/addUser.svg"
								alt="addUser"
								width="15px"
								height="15px"
							/>
							<span>เชื่อมต่อรายชื่อ</span>
						</li>
						<li onClick={() => handleBackDropContactListZone(true)}>
							<img
								src="/images/icons/addUser.svg"
								alt="addUser"
								width="18px"
								height="18px"
							/>
							<span>เชื่อมต่อรายชื่อเดิม</span>
						</li>
					</ul>
				</div>
			</div>

			<div className={`message-page-content ${props.platformtoken}`}>
				<div className='chat-message-zone'>
					<ul>
						<li className='send-chat-message'>
							<img className='send-chat-message-profilepic' src='/images/chatscreen/chatpeople/chatpeople-1.png' alt='send_chat_profile_pic' width='53px'></img>
							<div className='send-chat-message-content' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  simply dummy text of the printing and typesetting industry.</div>
							<span className='send-chat-message-time'>10:20 PM</span>
						</li>
						<li className='day-indicator'>
							<span>Today</span>
						</li>
						<li className='recieve-chat-message'>
							<div className='recieve-chat-message-content' >Lorem Ipsum is simply</div>
							<span className='recieve-chat-message-time'>10:20 PM</span>
						</li>
						<li className='send-chat-message'>
							<img alt='send_chat_profile_pic' className='send-chat-message-profilepic' src='/images/chatscreen/chatpeople/chatpeople-1.png' width='53px'></img>
							<div className='send-chat-message-content' >Lorem Ipsum is simply.</div>
							<span className='send-chat-message-time'>10:20 PM</span>
						</li>
					</ul>
				</div>

				<div className={`message-page-footerzone ${props.platformtoken}`}>
					<div className='message-footer-addimage'>
						<img id="image_add" className="chatmessage-imageadd" src="/images/chatscreen/chatmessage_imageadd.png" alt="chatmessage_imageadd" width="24px"></img>
						<img className="line_pic_add" alt='line_pictureadd' src='/images/chatscreen/pictureadd_line.png' width='36px'></img>
						<img className="chatmessage-imageicon" src="/images/chatscreen/chatmessage_imageicon.png" alt="chatmessage_imageicon" width="24px"></img>
						<img onClick={handleTextIndi} id="text_indi" className='text-indi' src="/images/chatscreen/text_indi.png" alt="text_indi" width="36px"></img>
					</div>
					<div id="myText" className='message-footer-textmessagebox'>
						<textarea
							value={text}
							ref={textareaRef}
							placeholder='Aa'
							onChange={handleTextChange}
							onKeyDown={handleTextKeyDown}
							onFocus={() => handleFocus()}
							onBlur={() => handleBlur()}
						></textarea><img className='emoji-image' src='/images/chatscreen/emoji_popup.png' alt='emoji_pup' width='25px'></img>
					</div>
				</div>
			</div>
			<div className={isBackDropContactListZone ? 'backdrop-panel show' : 'backdrop-panel '}>
				<ConnectContactList
					isContactListZone={isContactListZone}
					isAlreadyAdd={isAlreadyAdd}
					onClickClose={handleCloseContactList}
					openSuccessContact={handleSuccessContanctList}
					isOpenSuccessContactList={isOpenSuccessContactList}
					onClickCloseAll={handleCloseAll}
				></ConnectContactList>
				<div className="add-new-contact">
					<AddNewContact></AddNewContact>
				</div>
			</div>
		</>
	);
};

export default ChatMessagePage;
