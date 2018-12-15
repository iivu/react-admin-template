import {combineReducers} from 'redux'
import UserModel from './UserModel'

export default combineReducers({
  UserModel: UserModel.reducers,
})