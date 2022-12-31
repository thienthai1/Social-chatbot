import axios from 'axios'

import type { IGetChatListResponse } from 'libs/types'

interface IGetChatParam {
	social: string
	pageId: string
	perPage?: number
}

const getChatListApi = (params?: IGetChatParam) => {
	const url = '/chat'
	const config = {
		params,
	}

	return axios.get<IGetChatListResponse>(url, config)
}

export { getChatListApi }
export type { IGetChatParam }
