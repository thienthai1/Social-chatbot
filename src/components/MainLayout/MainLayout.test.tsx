import React from 'react'
import { render, screen } from '@testing-library/react'

import MainLayout from './MainLayout'

jest.mock('components/MainTab', () => ({
	__esModule: true,
	MainTab: () => {
		return <div></div>
	},
}))

jest.mock('components/FacebookContainer', () => ({
	__esModule: true,
	FacebookContainer: () => {
		return <div></div>
	},
}))

jest.mock('components/LineContainer', () => ({
	__esModule: true,
	LineContainer: () => {
		return <div></div>
	},
}))

describe('render MainLayout', () => {
	test('to render without error', () => {
		render(<MainLayout />)
		const linkElement = screen.getByTestId('MainLayout')
		expect(linkElement).toBeInTheDocument()
	})
})
