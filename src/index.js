import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './app/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
