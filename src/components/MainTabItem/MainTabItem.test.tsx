import React from 'react'
import { render, screen } from '@testing-library/react'

import { socialTypeList } from 'libs/sampledata'

import MainTabItem from './MainTabItem'

afterEach(() => {
	jest.restoreAllMocks()
})

describe('render MainTabItem', () => {
	test('empty data', () => {
		render(
			<MainTabItem
				id={0}
				name={''}
				imgSrc={''}
				onClick={() => {}}
				isActive={false}
			/>
		)
		const element = screen.getByTestId('MainTabItem-')
		expect(element).toBeInTheDocument()
	})

	// test('list', () => {
	// 	render(<MainTabItem list={['a', 'b', 'c']} active={''} onChange={() => {}} />)
	// 	const element = screen.getByTestId('MainTabItem')
	// 	const childCount = element.childElementCount
	// 	console.log(childCount)
	// 	expect(childCount).toEqual(3)
	// })
})
