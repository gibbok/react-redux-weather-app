import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forecast from './Forecast'
import Map from './Map'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Forecast} />
        <Route exact path='/Map' component={Map} />
      </Switch>
    </Router>
  </Provider>
)
export default Root
