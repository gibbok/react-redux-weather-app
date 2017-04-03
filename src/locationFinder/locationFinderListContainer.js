import { connect } from 'react-redux'
import LocationFinderList from './locationFinderList'

const getLocations = (location) => {
    // we can apply some filters here
  return location
}

const mapStateToProps = (state) => {
  return {
    locations: getLocations(state.locationFinder.data.byId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationClick: (id) => {

    }
  }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationFinderList)

export default VisibleTodoList