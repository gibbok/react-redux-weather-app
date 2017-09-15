import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import store from './app/store'
import Root from './app/Root'

render(
  <Root store={store} />,
    document.getElementById('root')
)
