import React from 'react'
import { render, screen } from '@testing-library/react'

import axios from 'axios'

import * as MainContext from 'libs/MainContext'

import MainTab from './MainTab'
// import { MainTab } from 'components/MainTab'

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

describe('render MainTab', () => {
	test('empty list', () => {
		render(<MainTab list={[]} active={''} onChange={() => {}} />)
		const element = screen.getByTestId('MainTab')
		expect(element).toBeEmptyDOMElement()
	})

	// test('list', () => {
	// 	render(<MainTab list={['a', 'b', 'c']} active={''} onChange={() => {}} />)
	// 	const element = screen.getByTestId('MainTab')
	// 	const childCount = element.childElementCount
	// 	console.log(childCount)
	// 	expect(childCount).toEqual(3)
	// })
})
