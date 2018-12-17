import {
  SET_LOGIN_TAG,
  LOGOUT,
  LOGIN,
  SET_LOGIN_MODEL_LOADING_TAG,
} from './actionTypes'

export function setLoginTag(payload) {
  return {
    type: SET_LOGIN_TAG,
    payload,
  }
}

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function setLoginModelLoadingTag(payload) {
  return {
    type:SET_LOGIN_MODEL_LOADING_TAG,
    payload,
  }
}