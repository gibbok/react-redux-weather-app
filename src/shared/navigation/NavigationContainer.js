// @flow
import { connect } from 'react-redux'
import Navigations from './Navigations'
import { setActive } from './navigationActions'
import type { Dispatch } from 'redux' // eslint-disable-line no-unused-vars

const getNavigations = (navigations) => {
  return navigations
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigations: getNavigations(state.navigationReducer.navigation.data)
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch:Dispatch<*>, ownProps) => {
  return {
    onNavigationClick: (navigation) => {
      dispatch(setActive(navigation.id))
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigations)

export default NavigationContainer
