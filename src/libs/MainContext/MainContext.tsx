import { createContext, useContext } from 'react'

interface IMainState {
	testData: string
	selectedPage?: any
}

interface IMainContext {
	state: IMainState
	dispatch?: any
}

const defaultMainState = {
	testData: '',
}

const defaultMainContextState: IMainContext = {
	state: defaultMainState,
}

const MainContext = createContext<IMainContext>(defaultMainContextState)

const useMainContext = () => useContext(MainContext)

export type { IMainState, IMainContext }
export { useMainContext, defaultMainState }
export default MainContext
