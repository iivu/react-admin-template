import {all} from 'redux-saga/effects'


import { wtatcherSaga as loginSaga } from '@/pages/Login/models'


export default function* rootSaga() {
  yield all([
    loginSaga,
  ])
}