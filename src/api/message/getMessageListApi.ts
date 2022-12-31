import axios from 'axios'

import type { IGetMessageListResponse } from 'libs/types'

interface IGetMessageParam {
	social: string
	pageId: string
	userId: string
	perPage?: number
	page?: number
}

const getMessageListApi = (params?: IGetMessageParam) => {
	const url = '/message'
	const config = {
		params,
	}

	return axios.get<IGetMessageListResponse>(url, config)
}

export { getMessageListApi }
export type { IGetMessageParam }
