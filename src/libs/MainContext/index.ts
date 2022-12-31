export type { IMainState, IMainContext } from './MainContext'

export type { IMainStateAction } from './mainContextReducer'

export {
	defaultMainState,
	useMainContext,
	default as MainContext,
} from './MainContext'

export { mainContextReducer, mainStateActionType } from './mainContextReducer'

export { default as MainContextProvider } from './MainContextProvider'
