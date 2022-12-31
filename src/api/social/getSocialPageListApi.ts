import axios from 'axios'

import type { IGetSocialPageListResponse } from 'libs/types'

const getSocialPageListApi = (social) => () => {
	const url = `/social/${social}/page`
	const config = {}

	return axios.get<IGetSocialPageListResponse>(url, config)
}

const getLineSocialPageListApi = getSocialPageListApi('line')
const getFacebookSocialPageListApi = getSocialPageListApi('facebook')

export { getLineSocialPageListApi, getFacebookSocialPageListApi }
