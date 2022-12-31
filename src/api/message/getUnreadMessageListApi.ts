import axios from 'axios'

import type { IGetMessageListResponse } from 'libs/types'

interface IGetUnreadMessageParam {
	social: string
	pageId: string
	userId: string
}

const getUnreadMessageListApi = (params?: IGetUnreadMessageParam) => {
	const url = '/message/unread'
	const config = {
		params,
	}

	return axios.get<IGetMessageListResponse>(url, config)
}

export { getUnreadMessageListApi }
export type { IGetUnreadMessageParam }
