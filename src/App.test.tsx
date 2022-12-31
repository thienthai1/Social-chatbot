import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from './App'

test('render app /', () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	)

	expect(true).toEqual(true)
})
