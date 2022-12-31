import { IChat } from 'libs/types'

import './ChatListItem.scss'

interface IChatListItemProps {
	social: string
	chat: IChat
	onClick: (chat: IChat) => void
}

function ChatListItem(props: IChatListItemProps) {
	const { chat, social, onClick } = props
	const { raw, unreadMessagesCount } = chat
	const {
		id,
		firstName,
		lastName,
		profilePic,
		userId,
		pictureUrl,
		displayName,
	} = raw

	const handleItemClick = () => {
		onClick(chat)
	}

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

	return (
		<div
			data-testid="ChatListItem"
			className="d-flex align-items-center cursor-pointer chatlistitem py-2 px-2"
			onClick={handleItemClick}
		>
			<img
				className="mr-2"
				src={getImgSrc()}
				alt={getDisplayName()}
				onError={({ currentTarget }) => {
					currentTarget.onerror = null
					currentTarget.src = '/images/person.SVG'
				}}
			></img>
			<span className="name-chatlistitem">{getDisplayName()}</span>
			{unreadMessagesCount > 0 && (
				<span className="ml-auto badge">
					<div>{unreadMessagesCount}</div>
				</span>
			)}
		</div>
	)
}

export default ChatListItem
