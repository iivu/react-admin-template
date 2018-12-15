import {SET_LOGIN_TAG} from './actionTypes'

const initState = {
	isLogin: false,
}

export default function reducers(state = initState, action) {
	return {
		isLogin: setLoginStatus(state.isLogin, action),
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