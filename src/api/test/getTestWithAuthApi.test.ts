import axios from 'axios'

import { getError, NoErrorThrownError } from 'libs/getError'

import { getTestWithAuthApi } from './getTestWithAuthApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run getTestWithAuthApi', () => {
	test('to sucess', async () => {
		const mockReturnData = {
			data: { message: 'Test with authentication' },
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await getTestWithAuthApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.get).toHaveBeenCalledTimes(1)
	})

	test('to unauthorize', async () => {
		const mockReturnData = {
			data: { message: 'unauthorized' },
		}

		mockedAxios.get.mockRejectedValue({
			status: 401,
			data: mockReturnData,
		})

		const error = await getError(async () => await getTestWithAuthApi())

		expect(error).not.toBeInstanceOf(NoErrorThrownError)
		expect(error).toHaveProperty('status', 401)
	})
})
