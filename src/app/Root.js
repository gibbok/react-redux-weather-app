// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forecast from './Forecast'
import Map from './Map'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Root = ({ store } : { store : Object }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Forecast} />
          <Route exact path='/map' component={Map} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
)
export default Root
