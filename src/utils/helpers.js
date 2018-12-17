import {put, call, takeLatest} from 'redux-saga/effects'

/**
 *
 * 包含loading的takeLatest生成函数
 * @param handlerMap {Object} action处理函数映射
 * @param patternList {Array} 需要被loading的异步action列表
 * @param loadingActionCreator {Function} loading设置action生成函数
 *
 * */
export function createLoadingTakeLatest(handlerMap, patternList,loadingActionCreator) {
  return takeLatest(patternList, function* (action) {
    try {
      yield put(loadingActionCreator(true))
      yield call(handlerMap[action.type], action)
      yield put(loadingActionCreator(false))
    } catch (e) {
      yield put(loadingActionCreator(false))
    }
  })
}