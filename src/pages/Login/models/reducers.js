import {
	SET_LOGIN_TAG,
	SET_LOGIN_MODEL_LOADING_TAG,
} from './actionTypes'

const initState = {
	isLogin: false,
	loading: false,
}

export default function reducers(state = initState, action) {
	return {
		isLogin: setLoginStatus(state.isLogin, action),
		loading: setLoading(state.loading,action),
	}
}
	
function setLoginStatus(state = false, action) {
	switch (action.type) {
		case SET_LOGIN_TAG:
			return action.payload
		default:
			return state
	}
}

function setLoading(state = false, action) {
	switch (action.type) {
		case SET_LOGIN_MODEL_LOADING_TAG:
			return action.payload
		default:
			return state
	}
}