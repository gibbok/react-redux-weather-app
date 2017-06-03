import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './app/App'
import Root from './app/Root'

/* render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
) */

render(
  <Root store={store} />,
    document.getElementById('root')
)
