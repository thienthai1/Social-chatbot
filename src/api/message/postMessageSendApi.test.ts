import axios from 'axios'

import {
	postLineMessageSendApi,
	postFacebookMessageSendApi,
} from './postMessageSendApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('run postLineMessageSendApi', () => {
	test('to success', async () => {
		const mockReturnData = {
			result: 'S',
			message: 'Success',
		}

		mockedAxios.post.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await postLineMessageSendApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.post).toHaveBeenCalledTimes(1)
	})
})

describe('run postFacebookMessageSendApi', () => {
	test('to success', async () => {
		const mockReturnData = {
			result: 'S',
			message: 'Success',
		}

		mockedAxios.post.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		const response = await postFacebookMessageSendApi()
		expect(response.data).toEqual(mockReturnData)
		expect(mockedAxios.post).toHaveBeenCalledTimes(1)
	})
})
