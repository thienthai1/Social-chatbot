import axios from 'axios'

import { getMessageBeforeListApi } from './getMessageBeforeListApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run getMessageBeforeListApi', () => {
	test('to return empty array', async () => {
		const mockReturnData = {
			data: [],
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getMessageBeforeListApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})
})
