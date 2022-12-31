import axios from 'axios'

import { getTestApi } from './getTestApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run getTestApi', () => {
	test('case 1', async () => {
		const mockReturnData = {
			data: { message: 'Test no authentication' },
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getTestApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})
})
