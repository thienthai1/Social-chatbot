import axios from 'axios'

import { getSocialListApi } from './getSocialListApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run getTestApi', () => {
	test('return empty array', async () => {
		const mockReturnData = {
			data: [],
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getSocialListApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})
})
