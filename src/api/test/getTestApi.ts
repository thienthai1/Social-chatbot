import axios from 'axios'
import { rest } from 'msw'

import type { IGetTestResponse } from 'libs/types'

const getTestApi = (params = {}) => {
	const url = '/test'
	const config = {
		params,
	}

	return axios.get<IGetTestResponse>(url, config)
}

export { getTestApi }
