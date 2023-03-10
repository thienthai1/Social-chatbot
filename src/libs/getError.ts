import { NoErrorThrownError } from 'libs/types'

const getError = async <TError>(call: () => unknown): Promise<TError> => {
	try {
		await call()

		throw new NoErrorThrownError()
	} catch (error: unknown) {
		return error as TError
	}
}

export { getError, NoErrorThrownError }
