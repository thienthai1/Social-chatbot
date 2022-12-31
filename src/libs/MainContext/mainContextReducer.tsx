import type { IMainState } from './'

enum mainStateActionType {
	TEST_ACTION = 'TEST_ACTION',
	LOAD_LOCAL_STORAGE = 'LOAD_LOCAL_STORAGE',
	SOCIAL_PAGE_CHANGE = 'SOCIAL_PAGE_CHANGE',
}

interface IMainStateAction {
	type: mainStateActionType
	payload: IMainState
}

const mainContextReducer = (state: IMainState, action: IMainStateAction) => {
	const { type, payload } = action
	switch (type) {
		case mainStateActionType.TEST_ACTION:
			return {
				...state,
				...payload,
			}
		case mainStateActionType.SOCIAL_PAGE_CHANGE:
			return {
				...state,
				selectedPage: { ...state.selectedPage, ...payload },
			}
		case mainStateActionType.LOAD_LOCAL_STORAGE:
			return {
				...payload,
			}
		default: {
			throw new Error(`Unhandled action type: ${type}`)
		}
	}
}

export type { IMainStateAction }
export { mainContextReducer, mainStateActionType }
