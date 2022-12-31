import React from 'react'
import { render, screen } from '@testing-library/react'

import ChatList from './ChatList'

describe('render ChatList', () => {
	test('to render without error', () => {
		render(<ChatList social={''} page={null} onClick={() => {}} />)
		const element = screen.getByTestId('ChatList')
		expect(element).toBeInTheDocument()
	})
})
