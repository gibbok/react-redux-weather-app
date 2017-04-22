import { connect } from 'react-redux'
import Navigation from '.navigation'

const getNavigations = (location) => {
  // we can apply some filters here
  return location
}

const mapStateToProps = (state) => {
  return {
    locations: getNavigations(state.navigationReducer.navigation.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationClick: (id) => {

    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer
