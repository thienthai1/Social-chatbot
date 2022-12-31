import React from 'react'
import { useEffectOnce } from 'usehooks-ts'

import { mainStateActionType, useMainContext } from 'libs/MainContext'

import { getTestApi } from 'api/test/getTestApi'

import './TestPage.scss'

function TestPage() {
	const { state: mainState, dispatch: mainDispatch } = useMainContext()

	const loadTestApi = async () => {
		try {
			const response = await getTestApi()

			mainDispatch({
				type: mainStateActionType.TEST_ACTION,
				payload: {
					testData: response.data,
				},
			})
		} catch (error) {
			// console.log(error)
		}
	}

	useEffectOnce(() => {
		loadTestApi()
	})

	return (
		<>
			<div>Test Page</div>
		</>
	)
}

export default TestPage
