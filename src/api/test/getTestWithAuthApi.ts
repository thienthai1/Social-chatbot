import axios from 'axios'

import type { IGetTestResponse } from 'libs/types'

const getTestWithAuthApi = (params = {}) => {
	const url = '/testwithauth'
	const config = {
		params,
	}

	return axios.get<IGetTestResponse>(url, config)
}

export { getTestWithAuthApi }
