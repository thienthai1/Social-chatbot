import { useState } from 'react'

import { IChat, ISocialPage } from 'libs/types'

import { MessageHeader } from 'components/MessageHeader'
import { MessageList } from 'components/MessageList'
import { MessageFooter } from 'components/MessageFooter'

import './MessageContainer.scss'

interface IMessageContainerProps {
	chat: IChat
	onBack: () => void
	social: string
	page: ISocialPage
}

function MessageContainer(props: IMessageContainerProps) {
	const { chat, onBack, social, page } = props
	const [reload, setReload] = useState<boolean>(false)

	const handleMessageHeaderBackClick = () => {
		onBack()
	}

	const handleMessageListLoaded = () => {
		setReload(false)
	}

	const handleMessageSent = () => {
		console.log('message sent')
		setReload(true)
	}

	return (
		<div
			data-testid="MessageContainer"
			className="w-100 d-flex flex-column mt-4 message-container-style"
		>
			<MessageHeader
				chat={chat}
				onBack={handleMessageHeaderBackClick}
				social={social}
			></MessageHeader>
			<div className="d-flex flex-grow overflow-y-auto">
				<MessageList
					page={page}
					chat={chat}
					social={social}
					reload={reload}
					onLoaded={handleMessageListLoaded}
				></MessageList>
			</div>
			<MessageFooter
				page={page}
				chat={chat}
				social={social}
				onSent={handleMessageSent}
			></MessageFooter>
		</div>
	)
}

export default MessageContainer
