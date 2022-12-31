import axios from 'axios'

import type { IGetMessageListResponse } from 'libs/types'

interface IGetMessageBeforeParam {
	social: string
	pageId: string
	userId: string
	timestamp: number
	perPage?: number
	page?: number
}

const getMessageBeforeListApi = (params?: IGetMessageBeforeParam) => {
	const url = '/message/before'
	const config = {
		params,
	}

	return axios.get<IGetMessageListResponse>(url, config)
}

export { getMessageBeforeListApi }
export type { IGetMessageBeforeParam }
