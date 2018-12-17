import {takeLatest, put, call} from 'redux-saga/effects'
import {LOGIN,LOGOUT} from './actionTypes'

function* login({payload}) {


}

function* logout() {


}


export default function* watcherSaga() {
  yield takeLatest(LOGIN,login)
  yield takeLatest(LOGOUT,logout)
}
