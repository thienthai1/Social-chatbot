import axios from 'axios'

import {
	getLineSocialPageListApi,
	getFacebookSocialPageListApi,
} from './getSocialPageListApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run getLineSocialPageListApi', () => {
	test('return empty array', async () => {
		const mockReturnData = {
			data: [],
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getLineSocialPageListApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})
})

describe('run getFacebookSocialPageListApi', () => {
	test('return empty array', async () => {
		const mockReturnData = {
			data: [],
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getFacebookSocialPageListApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})
})
