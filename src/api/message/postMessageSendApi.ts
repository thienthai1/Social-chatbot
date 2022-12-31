import axios from 'axios'

import type { IPostMessageSendResponse } from 'libs/types'

interface IPostMessageSendBody {
	social: string
	pageId: string
	userId: string
	text: string
}

const postMessageSendApi = (social) => (data?: IPostMessageSendBody) => {
	const url = `/message/send/${social}`
	const config = {}

	return axios.post<IPostMessageSendResponse>(url, data, config)
}

const postLineMessageSendApi = postMessageSendApi('line')
const postFacebookMessageSendApi = postMessageSendApi('facebook')

export {
	postLineMessageSendApi,
	postFacebookMessageSendApi,
	postMessageSendApi,
}
export type { IPostMessageSendBody }
