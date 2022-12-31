import { IMessageList } from 'libs/types/IMessage'

interface IGetMessageListResponse {
	data: IMessageList
	meta: any
}

export type { IGetMessageListResponse }
