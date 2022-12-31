import { useState, useEffect } from 'react'

import { MainContextProvider } from 'libs/MainContext'

import { getTestWithAuthApi } from 'api/test/getTestWithAuthApi'

import './App.scss'

import { MainLayout } from 'components/MainLayout'

function App() {
	const [isAuth, setAuth] = useState(false)

	const checkAuth = async () => {
		const response = await getTestWithAuthApi()
		if (response.status === 200) {
			setAuth(true)
		}
		// setAuth(true) // Remove this line when using auth
	}

	useEffect(() => {
		checkAuth()
	})

	return (
		<MainContextProvider>
			<div id="aw-chat-bot-app">
				{/* {isAuth ? <MainLayout /> : <div>Unauthorize</div>} */}
				<MainLayout />
			</div>
		</MainContextProvider>
	)
}

export default App
