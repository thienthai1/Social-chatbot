import axios from 'axios'

import { postMessageReadApi } from './postMessageReadApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run postMessageReadApi', () => {
	test('to success', async () => {
		const mockReturnData = {
			data: { row: 0 },
		}

		mockedAxios.post.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await postMessageReadApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.post).toHaveBeenCalledTimes(1)
	})
})
