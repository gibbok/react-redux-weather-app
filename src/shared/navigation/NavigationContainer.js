import { connect } from 'react-redux'
import Navigations from './Navigations'
import { setActive } from './navigationActions'

const getNavigations = (navigations) => {
  return navigations
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigations: getNavigations(state.navigationReducer.navigation.data)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
