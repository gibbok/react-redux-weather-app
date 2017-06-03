import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forecast from './Forecast'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Forecast} />
        <Route exact path='/map' render={() => (<h1>Map</h1>)} />
      </Switch>
    </Router>
  </Provider>
)
export default Root
