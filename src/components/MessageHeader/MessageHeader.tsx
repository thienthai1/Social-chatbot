import { IChat } from 'libs/types'

import './MessageHeader.scss'

interface IMessageHeaderProps {
	chat: IChat
	onBack: () => void
	social: string
}

function MessageHeader(props: IMessageHeaderProps) {
	const { chat, onBack, social } = props
	const { raw } = chat
	const {
		id,
		firstName,
		lastName,
		profilePic,
		userId,
		pictureUrl,
		displayName,
	} = raw

	const getDisplayName = () => {
		switch (social) {
			case 'line':
				return displayName
			case 'facebook':
			default:
				return `${firstName} ${lastName}`
		}
	}

	const getImgSrc = () => {
		switch (social) {
			case 'line':
				return pictureUrl
			case 'facebook':
			default:
				return profilePic
		}
	}

	const handleBackButtonClick = () => {
		onBack()
	}

	return (
		<>
			<div data-testid="MessageHeader" className="message-header">
				<div className="d-flex align-items-center ml-2 mr-2 my-2 ">
					<button
						className="d-flex align-items-center btnBack"
						onClick={handleBackButtonClick}
					>
						<img src="/images/backBTN.svg" alt="" width="16" height="16" />
					</button>
					<div className="d-flex center-data align-items-center">
						<img
							className="img-style-message mr-2"
							src={getImgSrc()}
							alt={getDisplayName()}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null
								currentTarget.src = '/images/person.SVG'
							}}
						></img>
						<div className="name-messageheader">{getDisplayName()}</div>
					</div>
				</div>
			</div>

			{/* <div
				data-testid="MessageHeader"
				className="d-flex align-items-center py-1 px-1"
			>
				<div>
					<button onClick={handleBackButtonClick}>&lt;</button>
				</div>
				<div className="px-2">{getDisplayName()}</div>
			</div> */}
		</>
	)
}

export default MessageHeader
