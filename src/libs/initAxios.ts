import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.interceptors.request.use((config) => {
	if (config && config.headers) {
		// Do something before request is sent
		const input = document.getElementById('apiKey') as HTMLInputElement | null
		let apiKey: string = ''
		if (input) {
			apiKey = input.value
		}
		config.headers['API-KEY'] = apiKey
	}
	return config
})
axios.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if ([401].includes(error.response.status)) {
			console.log('Unauthorized Access')
		}

		return error.response
	}
)
