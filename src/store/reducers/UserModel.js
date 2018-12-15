import {combineObject} from '../reducerHelpers'

//define action type
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const UserModel = {

  initState: {
    isLogin: false,
  },

  reducers (state = this.initState, action) {
    return {
      isLogin: setLoginStatus(state.isLogin, action),
    }
  },

  sages: {}

}


function setLoginStatus (state = false, action) {
  switch (action.type) {
    case LOGIN:
      return true
    case LOGOUT:
      return false
    default:
      return state
  }
}

export default UserModel