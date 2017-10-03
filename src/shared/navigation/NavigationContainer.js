// @flow
import { connect } from 'react-redux'
import Navigations from './Navigations'
import { setActive } from './navigationActions'
import type { Dispatch } from 'redux' // eslint-disable-line no-unused-vars

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch:Dispatch<*>, ownProps) => {
  return {
    onNavigationClick: (navigation) => {
      console.log('onNavigationClick')
      dispatch(setActive(navigation))
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigations)

export default NavigationContainer
