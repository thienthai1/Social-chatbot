import { useState, useEffect } from 'react'
import { useInterval } from 'usehooks-ts'

import { IChat, IChatList, ISocialPage } from 'libs/types'

import { getChatListApi } from 'api/chat/getChatListApi'

import { ChatListItem } from 'components/ChatListItem'

import './ChatList.scss'

interface IChatListProps {
	social: string
	page: ISocialPage | null
	onClick: (item: IChat) => void
}

function ChatList(props: IChatListProps) {
	const { page, social, onClick } = props
	const { pageId } = page || { pageId: '' }
	const [list, setList] = useState<IChatList>([])

	const handleChatListItemClick = (selectedChat: IChat) => {
		onClick(selectedChat)
	}

	const loadChatList = async () => {
		try {
			const response = await getChatListApi({ social, pageId })
			setList([...response.data.data] || [])
		} catch (error) {
		} finally {
		}
	}

	useInterval(() => {
		if (social && pageId) {
			loadChatList()
		}
	}, 10000)

	useEffect(() => {
		if (social && pageId) {
			loadChatList()
			console.log(list)
		} else {
			setList([])
		}
	}, [pageId, social])

	return (
		<div
			data-testid="ChatList"
			className="w-100 d-flex flex-column chatlist-style"
		>
			<div className="ml-2 mt-4 mb-1 chatlist-title">Messages</div>
			<div className="d-flex chatlist-parent mb-3">
				<div className="d-flex flex-column overflow-y-auto w-100 align-items-center chatlist-scroll">
					{list.length > 0 &&
						list.map((chat) => {
							return (
								<ChatListItem
									social={social}
									key={chat.userId}
									chat={chat}
									onClick={handleChatListItemClick}
								></ChatListItem>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default ChatList
