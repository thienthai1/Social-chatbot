import axios from 'axios'

import type { IPostMessageReadResponse } from 'libs/types'

interface IPostMessageReadBody {
	social: string
	pageId: string
	userId: string
	messageIds: number[]
}

const postMessageReadApi = (data?: IPostMessageReadBody) => {
	const url = '/message/read'
	const config = {}

	return axios.post<IPostMessageReadResponse>(url, data, config)
}

export { postMessageReadApi }
export type { IPostMessageReadBody }
