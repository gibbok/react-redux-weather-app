// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forecast from './Forecast'
import Map from './Map'

const Root = ({ store } : { store : Object }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Forecast} />
        <Route exact path='/map' component={Map} />
      </Switch>
    </Router>
  </Provider>
)
export default Root
