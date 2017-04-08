import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import locationFinderReducer from './locationFinder/locationFinderReducer'
import App from './app/App'
import { getFindLocations } from './locationFinder/locationFinderSearchActions'
debugger
const store = createStore(locationFinderReducer, applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
));

//TODO
// just for testing a dispatch action promise
store.dispatch(getFindLocations('London'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

console.log('hello world dcc')
