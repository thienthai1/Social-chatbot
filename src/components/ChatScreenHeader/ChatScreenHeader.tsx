import './ChatScreenHeader.scss';

interface ChatScreenHeaderProps {
	onClick: (type: string) => void
	onClickFishdot: (type: string) => void
}


function ChatScreenHeader(props: ChatScreenHeaderProps) {

	const handleClickIcon = (type: string) => {
		props.onClick(type);
	}

	const handleFishDotClick = (type: string) => {
		props.onClickFishdot(type);
	}

	return (
		<div className='chat-screen-header-image-zone'>
			<img alt='chatscreenheader' src='/images/chatscreen/chatscreen_header_image.png' width='40px' height='40px' />
			<div className="chat-owner-name">
				<div className="chat-owner-name-text">ร้านทอง Gold Gateway</div>
				<span className="red-noti-count">99+</span>
			</div>
			<div className="chat-setting-zone">
				<div className="chat-setting-zone-fb">

				</div>
				<div className="chat-setting-zone-line">
					<div onClick={() => handleClickIcon('line')} className="icon-logo-cover-line">
						<img alt='logo_lin_image' className="logo-line-image" src='/images/lineIcon.svg' />
						<span className="red-noti-count">99+</span>
					</div>
					<div onClick={() => handleClickIcon('facebook')} className="icon-logo-cover-facebook">
						<img alt='logo_facebook_image' className="logo-facebook-image" src='/images/fbIcon.svg' />
						<span className="red-noti-count">99+</span>
					</div>
					<div className="setting-fishdot" onClick={() => handleFishDotClick('fishdot')} >
						<img alt='logo_fishdot_image' className="logo-fishdot-image" src='/images/chatscreen/fishdot_icon.png' />
					</div>
				</div>
				<div className="chat-setting-zone-viewoption"></div>
			</div>
		</div>
	);
};

export default ChatScreenHeader;
