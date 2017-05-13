import { connect } from 'react-redux'
import LocationFinderList from './locationFinderList'

const getLocations = (locations) => {
  // we can apply some filters here
  return locations
}

const mapStateToProps = (state) => {
  return {
    locations: getLocations(state.locationFinderReducer.locationFinder.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLocationClick: (id) => {
    }
  }
}

const LocationFinderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFinderList)

export default LocationFinderListContainer
