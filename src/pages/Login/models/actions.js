import {SET_LOGIN_TAG} from './actionTypes'

export function setLoginTag(loginTag) {
	return {
		type:SET_LOGIN_TAG,
		payload:loginTag,
	}
}