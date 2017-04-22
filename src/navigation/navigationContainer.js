import { connect } from 'react-redux'
import NavigationList from './navigationList'
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
)(NavigationList)

export default NavigationContainer
