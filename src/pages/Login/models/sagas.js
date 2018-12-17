import {delay} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import {LOGIN, LOGOUT} from './actionTypes'
import * as actions from './actions'
import {createLoadingTakeLatest} from '@/utils/helpers'

function* login({payload}) {
  yield call(delay, 3000)

}

function* logout() {


}

const handlerMap = {
  [LOGIN]: login,
  [LOGOUT]: logout,
}


export default function* watcherSaga() {

  yield createLoadingTakeLatest(handlerMap, Object.keys(handlerMap), actions.setLoginModelLoadingTag)


}
