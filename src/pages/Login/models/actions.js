import {
  SET_LOGIN_TAG,
  LOGOUT,
  LOGIN
} from './actionTypes'

export function setLoginTag(loginTag) {
  return {
    type: SET_LOGIN_TAG,
    payload: loginTag,
  }
}

export function login(payload) {
  return {
    type: LOGIN,
    payload: loginTag,
  }
}


export function logout() {
  return {
    type: LOGOUT,
  }
}