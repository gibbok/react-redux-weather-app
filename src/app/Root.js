import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Forecast from './Forecast'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Forecast} />
    </Router>
  </Provider>
)
export default Root
