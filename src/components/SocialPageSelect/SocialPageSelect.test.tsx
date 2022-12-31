import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as sampleData from 'libs/sampledata'

import { SocialPageSelect } from 'components/SocialPageSelect'

afterEach(() => {
	jest.restoreAllMocks()
})

describe('render SocialPageSelect', () => {
	test('to render without error when pageList is empty', () => {
		render(
			<SocialPageSelect
				social="test"
				pageList={[]}
				onChange={() => { }}
				onClick={() => { }}
				selectPage="test"
			/>
		)
		const element = screen.getByTestId('SocialPageSelect-test')
		expect(element).toBeInTheDocument()
	})

	// test('to render without error when pageList is set', () => {
	// 	const { pageList } = sampleData
	// 	render(
	// 		<SocialPageSelect
	// 			social="test"
	// 			pageList={pageList}
	// 			onChange={() => {}}
	// 			onClick={() => {}}
	// 			selectPage="test"
	// 		/>
	// 	)
	// 	const element = screen.getByTestId('SocialPageSelect-test')
	// 	const options = screen.getAllByRole('option')
	// 	expect(options).toHaveLength(pageList.length + 1)
	// 	expect(element).toBeInTheDocument()
	// })

	// test('to change option item', () => {
	// 	const { pageList } = sampleData
	// 	render(
	// 		<SocialPageSelect
	// 			social="test"
	// 			pageList={pageList}
	// 			onChange={() => {}}
	// 			onClick={() => {}}
	// 			selectPage="test"
	// 		/>
	// 	)
	// 	const element = screen.getByTestId('SocialPageSelect-test')
	// 	const select = within(element).getByRole('combobox')
	// 	const options = screen.getAllByTestId('SocialPageSelect-option')

	// 	userEvent.selectOptions(select, '1')
	// 	expect((options[0] as HTMLOptionElement).selected).toBeTruthy()

	// 	let result = false
	// 	options.forEach((option) => {
	// 		if ((option as HTMLOptionElement).value !== '1') {
	// 			result = result || (option as HTMLOptionElement).selected
	// 		}
	// 	})

	// 	expect(result).toBeFalsy()
	// })

	// test('to change option item and back', () => {
	// 	const { pageList } = sampleData
	// 	render(
	// 		<SocialPageSelect
	// 			social="test"
	// 			pageList={pageList}
	// 			onChange={() => {}}
	// 			onClick={() => {}}
	// 			selectPage="test"
	// 		/>
	// 	)
	// 	const element = screen.getByTestId('SocialPageSelect-test')
	// 	const select = within(element).getByRole('combobox')
	// 	const options = screen.getAllByTestId('SocialPageSelect-option')

	// 	userEvent.selectOptions(select, '1')
	// 	expect((options[0] as HTMLOptionElement).selected).toBeTruthy()

	// 	let result = false
	// 	options.forEach((option) => {
	// 		if ((option as HTMLOptionElement).value !== '1') {
	// 			result = result || (option as HTMLOptionElement).selected
	// 		}
	// 	})

	// 	expect(result).toBeFalsy()

	// 	userEvent.selectOptions(select, '')
	// 	result = false
	// 	options.forEach((option) => {
	// 		if ((option as HTMLOptionElement).value !== '') {
	// 			result = result || (option as HTMLOptionElement).selected
	// 		}
	// 	})

	// 	expect(result).toBeFalsy()
	// })
})
