import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
))

export default store
