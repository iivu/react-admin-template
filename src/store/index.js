import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'


const store = createStore(
  reducers,
  applyMiddleware(
    createSagaMiddleware(rootSaga),
  )
)

export default store