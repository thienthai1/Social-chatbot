import { useState, useEffect } from 'react'
import { useInterval } from 'usehooks-ts'

import { IChat, ISocialPage, IMessageList, IMessage } from 'libs/types'

import { getMessageListApi } from 'api/message/getMessageListApi'
import { postMessageReadApi } from 'api/message/postMessageReadApi'
import { getUnreadMessageListApi } from 'api/message/getUnreadMessageListApi'
import { getMessageBeforeListApi } from 'api/message/getMessageBeforeListApi'

import { MessageItem } from 'components/MessageItem'

import './MessageList.scss'

interface IMessageListProps {
	chat: IChat
	social: string
	page: ISocialPage
	reload: boolean
	onLoaded: () => void
}

function MessageList(props: IMessageListProps) {
	const {
		chat: { userId },
		social,
		page: { pageId },
		reload,
		onLoaded,
	} = props
	const [messageList, setMessageList] = useState<IMessageList>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPage, setTotalPage] = useState<number>(1)

	const loadMessageList = async (page: number) => {
		try {
			const response = await getMessageListApi({
				social,
				userId,
				pageId: pageId.toString(),
				page,
			})
			const messageIdList = messageList.map((item) => {
				return item.id
			})
			const responseList = response.data.data || []
			const responseIdList = responseList.map((item) => {
				return item.id
			})
			const mergeMessageIdList = [
				...new Set([...messageIdList, ...responseIdList]),
			]
			const newList: IMessageList = []
			mergeMessageIdList.sort((a, b) => {
				return b - a
			})

			mergeMessageIdList.forEach((id) => {
				const item = messageList.find((m) => {
					return id === m.id
				})
				if (item) {
					newList.push(item)
				} else {
					const item = responseList.find((m) => {
						return id === m.id
					})
					if (item) {
						newList.push(item)
					}
				}
			})

			setMessageList([...newList])
			setTotalPage(response.data.meta.last_page || 1)
			onLoaded()
		} catch (error) {
		} finally {
		}
	}

	const handleLoadMoreMessageClick = () => {
		setCurrentPage(currentPage + 1)
	}

	const postMessageReadList = async (messageIds: number[]) => {
		try {
			await postMessageReadApi({
				social,
				pageId: pageId.toString(),
				userId,
				messageIds,
			})
		} catch (error) {
		} finally {
		}
	}

	useInterval(() => {
		loadMessageList(1)
	}, 10000)

	useEffect(() => {
		if (currentPage) {
			loadMessageList(currentPage)
		}
	}, [currentPage])

	useEffect(() => {
		if (reload) {
			loadMessageList(1).then(() => {
				// setTimeout(function () {
				const firstMessageItem =
					document.getElementById('MessageList')?.firstElementChild
				firstMessageItem?.scrollIntoView()
				// }, 400)
			})
		}
	}, [reload])

	useEffect(() => {
		if (userId && social && pageId) {
			loadMessageList(currentPage).then(() => {
				const firstMessageItem =
					document.getElementById('MessageList')?.firstElementChild
				firstMessageItem?.scrollIntoView()
			})
		} else {
			setMessageList([])
		}
	}, [userId, social, pageId])

	useEffect(() => {
		if (messageList) {
			const notRead = messageList
				.filter((value) => value.readAt === null && value.direction === 'r')
				.map((data) => data.id)
			postMessageReadList(notRead)
		}
	}, [messageList])

	return (
		<div
			data-testid="MessageList"
			id="MessageList"
			className="d-flex flex-grow flex-column-reverse overflow-y-auto overflow-x-hidden px-2 py-1"
		>
			{messageList.map((message) => {
				const { id } = message
				return (
					<MessageItem
						key={id}
						message={message}
						social={social}
						pageId={pageId}
					></MessageItem>
				)
			})}
			{totalPage > currentPage && (
				<div className="d-flex my-2 justify-content-center">
					<div
						className="d-flex justify-content-center align-items-center cursor-pointer btn-loadmore"
						onClick={handleLoadMoreMessageClick}
					>
						<span className="loadmore-font">Load More Message</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default MessageList
