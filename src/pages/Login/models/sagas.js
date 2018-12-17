import {delay} from 'redux-saga'
import {takeLatest, put, call} from 'redux-saga/effects'
import {LOGIN,LOGOUT} from './actionTypes'
import * as actions from './actions'

function* login({payload}) {
  yield call(delay,3000)
  yield put(actions.setLoginTag(true))
}

function* logout() {


}


export default function* watcherSaga() {
  yield takeLatest(LOGIN,login)
  yield takeLatest(LOGOUT,logout)
}
