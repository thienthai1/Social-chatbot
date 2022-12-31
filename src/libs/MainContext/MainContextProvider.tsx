import React, { useEffect, useReducer } from 'react'
import { useEffectOnce, useLocalStorage } from 'usehooks-ts'

import {
	MainContext,
	mainContextReducer,
	defaultMainState,
	mainStateActionType,
} from './'

const MainContextProvider = (props) => {
	const [mainContextLS, setMainContextLS] = useLocalStorage(
		'mainContext',
		defaultMainState
	)
	const [state, dispatch] = useReducer(mainContextReducer, defaultMainState)
	const value = { state, dispatch }

	useEffect(() => {
		if (state) {
			setMainContextLS(state)
		}
	}, [setMainContextLS, state])

	useEffectOnce(() => {
		if (mainContextLS) {
			dispatch({
				type: mainStateActionType.LOAD_LOCAL_STORAGE,
				payload: mainContextLS,
			})
		}
	})

	return (
		<MainContext.Provider value={value}>{props.children}</MainContext.Provider>
	)
}

export default MainContextProvider
