import React from 'react'
import { render, screen } from '@testing-library/react'

import axios from 'axios'

import * as MainContext from 'libs/MainContext'

import TestPage from './TestPage'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
jest.mock('libs/MainContext')
const mockedMainContext = MainContext as jest.Mocked<typeof MainContext>

beforeAll(() => {})

beforeEach(() => {
	mockedMainContext.useMainContext.mockImplementation(() => {
		return {
			state: { testData: '' },
			dispatch: () => {},
		}
	})
})

afterEach(() => {
	jest.restoreAllMocks()
})

describe('render TestPage', () => {
	test('success getTestApi', () => {
		const mockReturnData = {
			data: { message: 'Test no authentication' },
		}

		mockedAxios.get.mockResolvedValue({
			status: 200,
			data: mockReturnData,
		})

		render(<TestPage />)
		const linkElement = screen.getByText(/Test Page/i)
		expect(linkElement).toBeInTheDocument()
	})

	test('failed getTestApi', () => {
		const mockReturnData = {
			data: { message: 'Error' },
		}

		mockedAxios.get.mockRejectedValue({
			status: 500,
			data: mockReturnData,
		})

		render(<TestPage />)
		const linkElement = screen.getByText(/Test Page/i)
		expect(linkElement).toBeInTheDocument()
	})
})
