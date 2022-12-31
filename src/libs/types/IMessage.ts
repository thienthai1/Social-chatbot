interface IMessage {
	id: number
	createdAt: Date
	direction: string
	type: string
	message: string
	readAt: string | null
	raw: any
	attachments: any | any[]
}

interface IMessageList extends Array<IMessage> {}

export type { IMessage, IMessageList }
