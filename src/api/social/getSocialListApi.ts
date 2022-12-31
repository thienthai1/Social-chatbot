import axios from 'axios'

import type { IGetSocialListResponse } from 'libs/types'

const getSocialListApi = () => {
	const url = '/social'
	const config = {}

	return axios.get<IGetSocialListResponse>(url, config)
}

export { getSocialListApi }
