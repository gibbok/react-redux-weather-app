import { connect } from 'react-redux'
import NavigationList from './navigationList'

const getNavigations = (navigations) => {
  return navigations
}

const mapStateToProps = (state) => {
  return {
    navigations: getNavigations(state.navigationReducer.navigation.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavigationClick: (id) => {

    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationList)

export default NavigationContainer
