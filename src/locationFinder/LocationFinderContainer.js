import { connect } from 'react-redux'
import LocationFinder from './LocationFinder'

const getLocations = (locations) => {
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

const LocationFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFinder)

export default LocationFinderContainer
