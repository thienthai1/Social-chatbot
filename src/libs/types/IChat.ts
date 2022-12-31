interface IChat {
	updatedAt: Date
	userId: string
	raw: any
	unreadMessagesCount: number
}

interface IChatList extends Array<IChat> {}

export type { IChat, IChatList }
