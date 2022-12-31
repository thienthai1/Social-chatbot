import axios from 'axios'

import type { IGetLineContentResponse } from 'libs/types'

interface IGetLineContentParam {
	social: string
	pageId: string
	id: string
}

const getLineContentApi = (params?: IGetLineContentParam) => {
	const url = '/line/content'
	const config = {
		params,
	}

	return axios.get<IGetLineContentResponse>(url, config)
}

export { getLineContentApi }
export type { IGetLineContentParam }
