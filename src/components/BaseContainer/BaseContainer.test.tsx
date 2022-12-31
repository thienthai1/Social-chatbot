import React from 'react'
import { render, screen } from '@testing-library/react'

import BaseContainer from './BaseContainer'

describe('render BaseContainer', () => {
	test('to render without error', () => {
		render(<BaseContainer isShow={true} social={''} pageList={[]} />)
		const element = screen.getByTestId('BaseContainer')
		expect(element).toBeInTheDocument()
	})
})
